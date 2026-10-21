import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { parseHTML } from "linkedom";
import { translate, localizePage, hasTranslation } from "./i18n.mjs";
import { renderMarkdown } from "./markdown.mjs";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const script = (await readFile(new URL("./client.mjs", import.meta.url), "utf8"))
    .replace(/^const \{ translate, localizePage, hasTranslation \} = await import.*$/m, "")
    .replace(/^const \{ renderMarkdown \} = await import.*$/m, "")
    .replace("import.meta.url", JSON.stringify("http://127.0.0.1/client.mjs?token=test"));
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
async function mount({ reject = false, score, mode = "coach", count = 1, history = [] } = {}) {
    const { document, window } = parseHTML(html);
    const intervals = [], requests = [];
    const reviewed = new Set();
    const exam = { id: "foundations", name: "Foundations", badgeUrl: "https://learn.github.com/assets/badge-ghf--AVHlfQC.png", phase: 1, reviewedCount: 0, questionCount: count,
        poolTarget: 225, status: "Preview", fullLengthAvailable: true, attemptSize: 75, minutes: 100,
        domains: [{ name: "Test", weight: 100, resources: [] }], resources: [], blueprintNote: "Fixture" };
    const model = {
        appVersion: "0.4.2-preview", selectedExamId: "foundations", catalog: [exam], history,
        attempt: {
            id: "test-attempt", examId: "foundations", mode, finished: Boolean(score), score,
            review: { unanswered: Array.from({ length: count }, (_, index) => `q${index + 1}`), flagged: [] },
            entries: Array.from({ length: count }, (_, index) => ({
                id: `q${index + 1}`, revision: "question-revision-test", prompt: "Test question", domain: "Test",
                choices: ["One", "Two"], messages: [], pending: false, checked: false,
            })),
        },
    };
    const fetch = async (url, options) => {
        if (options.method === "POST") {
            const request = JSON.parse(options.body);
            requests.push(request);
            if (reject && request.action !== "select_exam") return { ok: false, json: async () => ({ error: "Request could not be saved." }) };
            if (request.action === "inspect_question") {
                const language = model.language ?? "en";
                const english = { id: "q1", prompt: "English source question", domain: "Test", correct: 1,
                    choices: ["One", "Two"], explanations: ["First explanation.", "Second explanation."],
                    concept: "English concept", hints: ["English hint"], source: "https://docs.github.com/en" };
                return { ok: true, json: async () => ({
                    question: { ...english, prompt: language === "en" ? english.prompt : "Translated question" },
                    englishQuestion: english, language, englishApproved: reviewed.has("en"), approved: reviewed.has(language),
                    revision: `revision-${language}`, index: 0, total: 1,
                }) };
            }
            const entry = model.attempt.entries.find(item => item.id === request.questionId);
            if (request.action === "review_question") {
                if (request.decision === "approve") reviewed.add(request.language);
                else reviewed.delete(request.language);
            } else if (request.action === "position") {
                model.attempt.position = request.questionId;
            } else if (request.action === "start") {
                model.attempt.mode = request.mode;
            } else if (request.action === "study_filter") {
                model.attempt.domainFilter = request.domain;
                model.attempt.progressFilter = request.filter;
            } else if (request.action === "retry_question") {
                entry.retrying = true;
                entry.correct = undefined;
                entry.correctAnswer = undefined;
                entry.explanations = undefined;
                entry.selected = undefined;
            } else if (request.action === "set_language") {
                model.language = request.language;
            } else if (request.action === "hint") {
                entry.pending = true;
                entry.messages.push({ role: "learner", text: request.message });
            } else if (request.action === "select") {
                entry.selected = request.choice;
                entry.checked = model.attempt.mode === "exam";
                entry.unchecked = model.attempt.mode !== "exam";
                if (model.attempt.mode === "exam") model.attempt.review.unanswered = model.attempt.review.unanswered.filter(id => id !== entry.id);
            } else if (request.action === "answer") {
                entry.checked = true;
                entry.unchecked = false;
                entry.correct = request.choice === 1;
                entry.previouslyIncorrect ||= !entry.correct;
                if (model.attempt.mode === "learn" || entry.correct) {
                    entry.correctAnswer = 1;
                    entry.explanations = ["Why one is wrong.", "Why two is correct."];
                    entry.source = "https://docs.github.com/en";
                }
            } else if (request.action === "finish") {
                model.attempt.finished = true;
            } else if (request.action === "flag") {
                entry.flagged = !entry.flagged;
                model.attempt.review.flagged = model.attempt.entries.filter(item => item.flagged).map(item => item.id);
            }
        }
        return { ok: true, json: async () => structuredClone(model) };
    };
    await new AsyncFunction("document", "window", "fetch", "setInterval", "URL", "translate", "localizePage", "hasTranslation", "renderMarkdown", script)(
        document, window, fetch, callback => intervals.push(callback), URL, translate, localizePage, hasTranslation, renderMarkdown,
    );
    const $ = id => document.getElementById(id);
    assert.equal($("error").hidden, true, $("error").textContent);
    await $("exam-cards").querySelector("button").onclick();
    $("resume").onclick();
    requests.length = 0;
    const type = value => { $("reasoning").value = value; $("reasoning").oninput(); };
    const submit = () => $("coach-form").onsubmit({ preventDefault() {} });
    const choose = async index => {
        const radio = $("choices").querySelectorAll("input")[index];
        radio.checked = true;
        await radio.onchange();
    };
    return { document, $, model, requests, intervals, type, submit, choose };
}
test("composer uses accessible icon button, disables blank sends and clears accepted messages", async () => {
    const { $, model, type, submit, intervals, requests } = await mount();
    assert.equal($("send").getAttribute("aria-label"), "Send message");
    assert.equal($("send").disabled, true);
    type("   ");
    await submit();
    assert.equal(requests.length, 0);
    type("I think the template is sufficient.");
    await submit();
    assert.equal(requests[0].message, "I think the template is sufficient.");
    assert.equal($("reasoning").value, "");
    assert.equal($("send").disabled, true);
    model.attempt.entries[0].pending = false;
    model.attempt.entries[0].messages.push({ role: "coach", text: "Does it enforce the rule?" });
    await intervals[0]();
    assert.equal($("reasoning").value, "");
    assert.equal($("reasoning").disabled, false);
});
test("saved Copilot hints and explanations render Markdown while learner messages remain literal", async () => {
    const { $, model, intervals } = await mount();
    const entry = model.attempt.entries[0];
    entry.messages.push(
        { role: "learner", text: "**My reasoning**\n<script>not executable</script>" },
        { role: "coach", text: "**Think about:**\n\n- `enforcement`\n- *configuration*\n\nhttps://docs.github.com/" },
    );
    entry.correctAnswer = 1;
    entry.explanations = ["Wrong.", "Correct."];
    entry.source = "https://docs.github.com/";
    entry.insight = { text: "**Correct:** Output safeguards.\n\n- **Training:** Not the same operation.\n\n```js\nconst x = '<b>literal</b>';\n```", language: "en" };
    await intervals[0]();
    assert.equal($("messages").querySelector(".learner-message").textContent, "**My reasoning**\n<script>not executable</script>");
    assert.equal($("messages").querySelector(".learner-message strong"), null);
    assert.equal($("messages").querySelector(".coach .markdown-content strong").textContent, "Think about:");
    assert.equal($("messages").querySelectorAll(".coach li").length, 2);
    assert.equal($("messages").querySelector(".coach code").textContent, "enforcement");
    assert.equal($("messages").querySelector(".coach a").getAttribute("rel"), "noreferrer noopener");
    assert.equal($("deep-explanation").querySelector("strong").textContent, "Correct:");
    assert.equal($("deep-explanation").querySelector(".markdown-content").getAttribute("lang"), "en");
    assert.match($("deep-explanation").querySelector("pre code").textContent, /<b>literal<\/b>/);
    assert.equal($("deep-explanation").querySelector("b, script"), null);
    assert.equal(entry.insight.text.includes("**Correct:**"), true);
    await intervals[0]();
    assert.equal($("deep-explanation").querySelectorAll("pre").length, 1);
});
test("mock study plans render Markdown both on current results and in saved history", async () => {
    const result = { id: "test-attempt", submittedAt: 1000, reason: "submitted", relaxed: false,
        score: { percentage: 80, domains: [] },
        guidance: { text: "## Study priorities\n\n1. **Review** \n2. Practice `git status`.", language: "es" } };
    const { $, intervals, model } = await mount({ mode: "exam",
        score: { percentage: 80, firstAttempt: 60, total: 75, domains: [] }, history: [result] });
    assert.equal($("score").querySelectorAll(".ai-insight .markdown-content h4").length, 2);
    assert.equal($("score").querySelectorAll(".ai-insight ol").length, 2);
    model.language = "pt-BR";
    await intervals[0]();
    assert.equal($("score").querySelector(".ai-insight .markdown-content").getAttribute("lang"), "es");
    await $("choose-mode").onclick();
    assert.equal($("mock-history").querySelector(".markdown-content strong").textContent, "Review");
});
test("exam cards and selected header show artwork without implying an earned credential", async () => {
    const { $, document } = await mount();
    const cardImage = document.querySelector(".exam-card .cert-badge img");
    assert.match(cardImage.src, /^https:\/\/learn\.github\.com\/assets\/badge-/);
    assert.equal(cardImage.alt, "");
    assert.equal(cardImage.referrerPolicy, "no-referrer");
    assert.equal($("selected-badge").hidden, false);
    assert.equal($("selected-badge").querySelector("img").src, cardImage.src);
    assert.match(document.querySelector("footer").textContent, /does not claim an earned credential/);
    const selectedImage = $("selected-badge").querySelector("img");
    selectedImage.onerror();
    assert.match($("selected-badge").textContent, /Artwork unavailable/);
});
test("failed sends retain reasoning and display the error", async () => {
    const { $, type, submit } = await mount({ reject: true });
    type("Do not lose this reasoning.");
    await submit();
    assert.equal($("reasoning").value, "Do not lose this reasoning.");
    assert.equal($("send").disabled, false);
    assert.equal($("error").hidden, false);
});
test("mock score renders raw accuracy, accessible ring, and practice band instead of pass/fail", async () => {
    const { $ } = await mount({ mode: "exam", score: {
        percentage: 25, currentPercentage: 75, firstAttempt: 1, current: 3, assisted: 2, revealed: 1, total: 4, domains: [],
    } });
    assert.equal($("score").querySelector(".score-value").textContent, "25/100");
    assert.match($("score").textContent, /Needs focus/);
    assert.equal($("score").querySelector(".score-ring").getAttribute("aria-label"), "Practice score: 25/100");
    assert.match($("score").textContent, /not the official scaled exam score/);
});
test("exam selection saves on change and survives Next without a Save button", async () => {
    const { $, choose, requests } = await mount({ mode: "exam", count: 2 });
    await choose(1);
    assert.equal(requests[0].action, "select");
    assert.equal(requests[0].choice, 1);
    assert.equal($("answer").hidden, true);
    assert.match($("save-status").textContent, /saved automatically/);
    await $("next").onclick();
    await $("previous").onclick();
    assert.equal($("choices").querySelectorAll("input")[1].checked, true);
});
test("failed selection retains local choice and blocks navigation until retry", async () => {
    const { $, choose } = await mount({ mode: "exam", count: 2, reject: true });
    await choose(1);
    assert.equal($("choices").querySelectorAll("input")[1].checked, true);
    assert.equal($("next").disabled, true);
    assert.equal($("finish").disabled, true);
    assert.equal($("choose-mode").disabled, true);
    assert.equal($("retry-save").hidden, false);
    assert.match($("save-status").textContent, /Not saved/);
});
test("study mode changes and preparation-mode buttons resume the saved question without submitting", async () => {
    const { $, document, requests, type } = await mount({ count: 3 });
    await $("next").onclick();
    type("Saved reasoning draft");
    $("study-mode").querySelector('option[value="learn"]').selected = true;
    await $("study-mode").onchange();
    assert.match($("domain").textContent, /QUESTION 2 OF 3/);
    assert.equal($("finish").hidden, true);
    await $("choose-mode").onclick();
    await document.querySelector('[data-mode="coach"]').onclick();
    assert.match($("domain").textContent, /QUESTION 2 OF 3/);
    assert.equal($("reasoning").value, "Saved reasoning draft");
    assert.equal(requests.some(request => request.action === "finish"), false);
});
test("a checked question stays visible for feedback in the unanswered filter until navigation", async () => {
    const { $, choose } = await mount({ mode: "learn", count: 2 });
    $("study-filter").querySelector('option[value="unanswered"]').selected = true;
    await $("study-filter").onchange();
    await choose(1);
    await $("answer-form").onsubmit({ preventDefault() {} });
    assert.match($("feedback").textContent, /Correct/);
    assert.equal($("explanations").hidden, false);
    assert.equal($("study-filter-note").hidden, false);
    assert.equal($("retry-question").hidden, false);
    await $("next").onclick();
    assert.match($("domain").textContent, /QUESTION 2 OF 2/);
    assert.equal($("navigation").querySelectorAll("button").length, 1);
    assert.equal($("study-filter-note").hidden, true);
    $("study-filter").querySelector('option[value="flagged"]').selected = true;
    await $("study-filter").onchange();
    assert.equal($("study-empty").hidden, false);
    assert.equal($("question-columns").hidden, true);
});
test("reset and mock exits require an explicit confirmation; cancel never mutates", async () => {
    const study = await mount({ mode: "learn" });
    let pending = study.$("reset-study").onclick();
    assert.equal(study.$("confirmation").hidden, false);
    study.$("confirmation-cancel").onclick();
    await pending;
    assert.equal(study.requests.length, 0);
    pending = study.$("reset-study").onclick();
    study.$("confirmation-accept").onclick();
    await pending;
    assert.equal(study.requests[0].action, "reset_study");
    assert.equal(study.requests[0].confirm, true);
    const mock = await mount({ mode: "exam" });
    pending = mock.$("choose-mode").onclick();
    assert.equal(mock.$("confirmation").getAttribute("aria-modal"), "true");
    await mock.intervals[0]();
    assert.equal(mock.$("confirmation").hidden, false);
    mock.$("confirmation-cancel").onclick();
    await pending;
    assert.equal(mock.requests.length, 0);
    pending = mock.$("choose-mode").onclick();
    mock.$("confirmation-accept").onclick();
    await pending;
    assert.equal(mock.requests[0].action, "finish");
    assert.equal(mock.requests[0].reason, "exit");
    assert.equal(mock.$("setup").hidden, false);
});
test("practice band boundaries use accessible labels and semantic colors without official pass/fail", async () => {
    for (const [percentage, label, color] of [
        [0, "Needs focus", "danger"], [69, "Needs focus", "danger"],
        [70, "Building confidence", "attention"], [84, "Building confidence", "attention"],
        [85, "Strong practice result", "success"], [100, "Strong practice result", "success"],
    ]) {
        const { $ } = await mount({ mode: "exam", score: { percentage, firstAttempt: percentage, total: 100, domains: [] } });
        assert.equal($("score").querySelector(".result-band").textContent, label);
        assert.equal($("score").querySelector(".score-ring").classList.contains(`band-${color}`), true);
        assert.equal($("score").querySelector(".score-ring").getAttribute("role"), "img");
        assert.match($("score").textContent, /not the official scaled exam score/);
    }
});
test("mock history, result guidance, and explanation buttons localize in Spanish and Portuguese", async () => {
    const { $, model, intervals, requests } = await mount({ mode: "exam", score: {
        percentage: 25, firstAttempt: 1, total: 4, domains: [],
    }, history: [{ id: "test-attempt", submittedAt: 1000, reason: "exit", relaxed: false,
        score: { percentage: 25, domains: [{ name: "Test", correct: 1, total: 4, percentage: 25 }] } }] });
    for (const language of ["es", "pt-BR"]) {
        model.language = language;
        await intervals[0]();
        assert.equal($("error").hidden, true, $("error").textContent);
        assert.equal($("score").querySelector("progress").getAttribute("aria-label"), "Test: 1/4");
    }
    await $("score").querySelector("button").onclick();
    assert.equal(requests.at(-1).action, "guidance");
    assert.equal(requests.at(-1).resultId, "test-attempt");
    assert.equal($("app-version").textContent, "v0.4.2-preview");
    assert.match($("app-version").getAttribute("href"), /CHANGELOG\.md$/);
});
test("learning selection remains unchecked across navigation and is never submitted or graded", async () => {
    const { $, choose, requests } = await mount({ mode: "learn", count: 2 });
    await choose(1);
    assert.equal($("answer").hidden, false);
    assert.match($("save-status").textContent, /not checked/);
    await $("next").onclick();
    await $("previous").onclick();
    assert.equal($("choices").querySelectorAll("input")[1].checked, true);
    assert.equal($("finish").hidden, true);
    assert.equal($("score").hidden, true);
    await $("choose-mode").onclick();
    assert.equal(requests.some(request => request.action === "finish"), false);
    assert.equal($("setup").hidden, false);
});
test("review links return to flagged questions and explicit submission is separate", async () => {
    const { $, requests } = await mount({ mode: "exam", count: 2 });
    await $("flag").onclick();
    $("finish").onclick();
    assert.match($("review-summary").textContent, /1 flagged/);
    assert.equal($("submit-attempt").textContent, "Submit and grade anyway");
    await $("review-list").querySelector("button").onclick();
    assert.equal($("attempt").hidden, false);
    $("finish").onclick();
    await $("submit-attempt").onclick();
    assert.equal(requests.filter(request => request.action === "finish").length, 1);
});
test("fully answered mocks still show a deliberate review and expiry transitions to results", async () => {
    const { $, model, choose, requests, intervals } = await mount({ mode: "exam" });
    await choose(1);
    $("finish").onclick();
    assert.equal($("review").hidden, false);
    assert.match($("review-summary").textContent, /0 unanswered/);
    assert.equal($("submit-attempt").textContent, "Submit and grade");
    assert.equal(requests.some(request => request.action === "finish"), false);
    model.attempt.finished = true;
    model.attempt.expired = true;
    model.attempt.score = { percentage: 0, currentPercentage: 0, firstAttempt: 0, current: 0, total: 1, assisted: 0, revealed: 0, domains: [] };
    await intervals[0]();
    assert.equal($("review").hidden, true);
    assert.equal($("attempt").hidden, false);
    assert.match($("save-status").textContent, /submitted automatically/);
});
test("required report fields have accessible red markers, optional steps stay optional, and locales retain the markers", async () => {
    const { $, document, model, intervals } = await mount();
    $("report-canvas").onclick();
    for (const id of ["report-summary", "report-description"]) {
        assert.equal($(id).hasAttribute("required"), true);
        assert.equal($(id).getAttribute("aria-describedby"), "report-required-note");
        const marker = document.querySelector(`label[for="${id}"] .required-marker`);
        assert.equal(marker.textContent, "*");
        assert.equal(marker.getAttribute("aria-hidden"), "true");
    }
    assert.equal($("report-steps").hasAttribute("required"), false);
    assert.equal(document.querySelector('label[for="report-steps"] .required-marker'), null);
    $("report-summary").value = "Summary only";
    $("report-summary").oninput();
    assert.equal($("report-open").hidden, true);
    $("report-description").value = "   ";
    $("report-description").oninput();
    assert.equal($("report-open").hidden, true);
    $("report-description").value = "The form is unclear.";
    $("report-description").oninput();
    assert.equal($("report-open").hidden, false);
    let body = new URL($("report-open").getAttribute("href")).searchParams.get("body");
    assert.doesNotMatch(body, /Steps to reproduce|Add steps/);
    assert.match(body, /Interface language: en/);
    assert.doesNotMatch(body, /Question language:/);
    $("report-steps").value = "Open reporting. Expected required fields to be marked.";
    $("report-steps").oninput();
    body = new URL($("report-open").getAttribute("href")).searchParams.get("body");
    assert.match(body, /## Steps to reproduce \/ expected behavior/);
    assert.match(body, /Expected required fields/);
    for (const [language, legend] of [["es", "Campo obligatorio"], ["pt-BR", "Campo obrigatório"]]) {
        model.language = language;
        await intervals[0]();
        assert.match($("report-required-note").textContent, new RegExp(legend));
        assert.match(document.querySelector('label[for="report-steps"]').textContent, /\(opcional\)/);
        assert.equal(document.querySelector('label[for="report-description"] .required-marker').textContent, "*");
        assert.equal($("report-description").value, "The form is unclear.");
    }
});
test("question reports capture interface and content language separately without learner data", async () => {
    const { $, model, intervals } = await mount();
    model.language = "es";
    model.attempt.contentLanguage = "en";
    await intervals[0]();
    $("report-question").onclick();
    $("report-summary").value = "Translation issue";
    $("report-description").value = "The wording differs.";
    $("report-description").oninput();
    const body = new URL($("report-open").getAttribute("href")).searchParams.get("body");
    assert.match(body, /Interface language: es/);
    assert.match(body, /Question language: en/);
    assert.match(body, /Question ID: q1/);
});
test("question report uses a prefilled public issue without uploading learner state", async () => {
    const { $, model, type, requests } = await mount({ mode: "coach" });
    model.attempt.entries[0].selected = 1;
    model.attempt.entries[0].messages.push({ role: "learner", text: "PRIVATE CONVERSATION" });
    type("PRIVATE DRAFT");
    $("report-question").onclick();
    assert.equal($("report").hidden, false);
    assert.equal($("report-open").hidden, true);
    $("report-summary").value = "Ambiguous & confusing?";
    $("report-description").value = "Both options seem plausible.";
    $("report-description").oninput();
    const url = new URL($("report-open").getAttribute("href"));
    assert.equal(url.origin, "https://github.com");
    assert.equal(url.pathname, "/sviera91/github-certification-coach/issues/new");
    assert.equal(url.searchParams.get("title"), "[Question] Ambiguous & confusing?");
    const body = url.searchParams.get("body");
    assert.match(body, /Question ID: q1/);
    assert.match(body, /Question revision: question-revision-test/);
    assert.match(body, /App version: 0.4.2-preview/);
    for (const privateData of ["PRIVATE CONVERSATION", "PRIVATE DRAFT", "test-attempt", "token=test", "selected"]) {
        assert.ok(!body.includes(privateData), privateData);
    }
    assert.equal(requests.length, 0);
    $("report-cancel").onclick();
    assert.equal($("attempt").hidden, false);
});
test("canvas reports are available from catalog and overlong encoded reports are blocked", async () => {
    const { $, requests } = await mount();
    $("back-catalog").onclick();
    $("report-canvas").onclick();
    $("report-summary").value = "Layout issue";
    $("report-description").value = "The header overlaps the question.";
    $("report-description").oninput();
    const url = new URL($("report-open").getAttribute("href"));
    assert.equal(url.searchParams.get("template"), "canvas.md");
    assert.ok(!url.searchParams.get("body").includes("Question ID:"));
    $("report-description").value = "\u4e00".repeat(1200);
    $("report-description").oninput();
    assert.equal($("report-open").hidden, true);
    assert.match($("report-help").textContent, /too long/);
    assert.equal($("report-open").hasAttribute("href"), false);
    assert.equal(requests.length, 0);
});
test("language changes localize controls and preserve unchecked selection, chat draft, and public report draft", async () => {
    const { $, model, choose, type, document } = await mount();
    await choose(1);
    type("My own reasoning stays unchanged.");
    const change = async language => {
        $("language").querySelector(`option[value="${language}"]`).selected = true;
        await $("language").onchange();
        assert.equal($("error").hidden, true, $("error").textContent);
    };
    await change("es");
    assert.equal(document.documentElement.lang, "es");
    assert.equal($("answer").textContent, "Comprobar respuesta");
    assert.equal($("send").getAttribute("aria-label"), "Enviar mensaje");
    assert.equal($("reasoning").value, "My own reasoning stays unchanged.");
    assert.equal(model.attempt.entries[0].selected, 1);
    assert.equal($("content-language-note").hidden, false);
    $("report-question").onclick();
    $("report-summary").value = "Un ejemplo";
    $("report-description").value = "La explicación necesita revisión.";
    $("report-description").oninput();
    await change("pt-BR");
    assert.equal($("report-summary").value, "Un ejemplo");
    assert.equal($("report-title").textContent, "Relatar um problema da questão");
    assert.equal($("report-open").textContent, "Revisar e enviar no GitHub");
    $("report-cancel").onclick();
    assert.equal($("answer").textContent, "Conferir resposta");
    assert.equal($("finish").hidden, true);
    assert.match($("study-progress").textContent, /respondidas/);
    await change("en");
    assert.equal($("review-title").textContent, "Review before submission");
    assert.equal($("send").getAttribute("aria-label"), "Send message");
});
test("content review shows separate attestations, blocks unapproved translations, and provides English reference", async () => {
    const { $, model, intervals, requests } = await mount();
    model.attempt.finished = true;
    await intervals[0]();
    $("new").onclick();
    await $("bank-review").onclick();
    assert.match($("review-confirm-label").textContent, /English content/);
    $("language").querySelector('option[value="es"]').selected = true;
    await $("language").onchange();
    assert.equal($("approve-question").disabled, true);
    assert.equal($("english-review-required").hidden, false);
    assert.equal($("english-reference").hidden, false);
    assert.match($("english-reference-content").textContent, /English source question/);
    $("language").querySelector('option[value="en"]').selected = true;
    await $("language").onchange();
    $("review-confirm").checked = true;
    await $("approve-question").onclick();
    assert.equal(requests.find(request => request.action === "review_question").language, "en");
    $("language").querySelector('option[value="es"]').selected = true;
    await $("language").onchange();
    assert.equal($("approve-question").disabled, false);
    assert.equal($("english-review-required").hidden, true);
    assert.match($("review-confirm-label").textContent, /traducción/);
    assert.equal($("revoke-question").hidden, true);
    $("review-confirm").checked = true;
    await $("approve-question").onclick();
    assert.equal(requests.filter(request => request.action === "review_question").at(-1).language, "es");
});
