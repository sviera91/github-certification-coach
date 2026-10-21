import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { parseHTML } from "linkedom";
import { translate, localizePage, hasTranslation } from "./i18n.mjs";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const script = (await readFile(new URL("./client.mjs", import.meta.url), "utf8"))
    .replace(/^const \{ translate, localizePage, hasTranslation \} = await import.*$/m, "")
    .replace("import.meta.url", JSON.stringify("http://127.0.0.1/client.mjs?token=test"));
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
async function mount({ reject = false, score, mode = "coach", count = 1 } = {}) {
    const { document, window } = parseHTML(html);
    const intervals = [], requests = [];
    const reviewed = new Set();
    const exam = { id: "foundations", name: "Foundations", badgeUrl: "https://learn.github.com/assets/badge-ghf--AVHlfQC.png", phase: 1, reviewedCount: 0, questionCount: count,
        poolTarget: 225, status: "Preview", fullLengthAvailable: true, attemptSize: 75, minutes: 100,
        domains: [{ name: "Test", weight: 100, resources: [] }], resources: [], blueprintNote: "Fixture" };
    const model = {
        appVersion: "0.3.0-preview", selectedExamId: "foundations", catalog: [exam],
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
            } else if (request.action === "set_language") {
                model.language = request.language;
            } else if (request.action === "hint") {
                entry.pending = true;
                entry.messages.push({ role: "learner", text: request.message });
            } else if (request.action === "select") {
                entry.selected = request.choice;
                entry.checked = mode === "exam";
                entry.unchecked = mode !== "exam";
                if (mode === "exam") model.attempt.review.unanswered = model.attempt.review.unanswered.filter(id => id !== entry.id);
            } else if (request.action === "finish") {
                model.attempt.finished = true;
            } else if (request.action === "flag") {
                entry.flagged = !entry.flagged;
                model.attempt.review.flagged = model.attempt.entries.filter(item => item.flagged).map(item => item.id);
            }
        }
        return { ok: true, json: async () => structuredClone(model) };
    };
    await new AsyncFunction("document", "window", "fetch", "setInterval", "URL", "translate", "localizePage", "hasTranslation", script)(
        document, window, fetch, callback => intervals.push(callback), URL, translate, localizePage, hasTranslation,
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
test("score renders 0-100 primary accuracy and distinct latest accuracy", async () => {
    const { $ } = await mount({ score: {
        percentage: 25, currentPercentage: 75, firstAttempt: 1, current: 3, assisted: 2, revealed: 1, total: 4, domains: [],
    } });
    assert.equal($("score").querySelector(".score-value").textContent, "25/100");
    assert.match($("score").textContent, /Latest-answer accuracy: 75\/100/);
    assert.match($("score").textContent, /not the official scaled exam score/);
});
test("exam selection saves on change and survives Next without a Save button", async () => {
    const { $, choose, requests } = await mount({ mode: "exam", count: 2 });
    await choose(1);
    assert.equal(requests[0].action, "select");
    assert.equal(requests[0].choice, 1);
    assert.equal($("answer").hidden, true);
    assert.match($("save-status").textContent, /saved automatically/);
    $("next").onclick();
    $("previous").onclick();
    assert.equal($("choices").querySelectorAll("input")[1].checked, true);
});
test("failed selection retains local choice and blocks navigation until retry", async () => {
    const { $, choose } = await mount({ mode: "exam", count: 2, reject: true });
    await choose(1);
    assert.equal($("choices").querySelectorAll("input")[1].checked, true);
    assert.equal($("next").disabled, true);
    assert.equal($("finish").disabled, true);
    assert.equal($("retry-save").hidden, false);
    assert.match($("save-status").textContent, /Not saved/);
});
test("learning selection remains unchecked when navigating; review never submits implicitly", async () => {
    const { $, choose, requests } = await mount({ mode: "learn", count: 2 });
    await choose(1);
    assert.equal($("answer").hidden, false);
    assert.match($("save-status").textContent, /not checked/);
    $("next").onclick();
    $("previous").onclick();
    assert.equal($("choices").querySelectorAll("input")[1].checked, true);
    $("finish").onclick();
    assert.equal($("review").hidden, false);
    assert.match($("review-summary").textContent, /2 unanswered/);
    assert.equal(requests.some(request => request.action === "finish"), false);
    $("return-attempt").onclick();
    assert.equal($("attempt").hidden, false);
});
test("review links return to flagged questions and explicit submission is separate", async () => {
    const { $, requests } = await mount({ mode: "exam", count: 2 });
    await $("flag").onclick();
    $("finish").onclick();
    assert.match($("review-summary").textContent, /1 flagged/);
    assert.equal($("submit-attempt").textContent, "Submit and grade anyway");
    $("review-list").querySelector("button").onclick();
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
    assert.match(body, /App version: 0.3.0-preview/);
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
    $("finish").onclick();
    assert.match($("review-summary").textContent, /não conferidas/);
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
