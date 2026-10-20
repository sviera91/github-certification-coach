const token = new URL(import.meta.url).searchParams.get("token");
const { translate, localizePage, hasTranslation } = await import(new URL(`./i18n.mjs?token=${token}`, import.meta.url));
const $ = id => document.getElementById(id);
let state, index = 0, busy = false, signature = "", view = "catalog", reviewFilter = "attention";
let reviewingQuestion;
let reportContext, reportReturnView = "catalog";
let connectionErrorText;
const drafts = new Map();
const unsavedSelections = new Map();
const selectedExam = () => state.catalog.find(exam => exam.id === state.selectedExamId);
const key = question => `${state.attempt.id}:${question.id}`;
const t = (key, values) => translate(state?.language ?? "en", key, values);
const domainName = name => hasTranslation(name) ? t(name) : name;
const modeName = mode => t(({ exam: "Mock exam", learn: "Learn", coach: "AI coach" })[mode]);
function text(tag, value, className) {
    const node = document.createElement(tag);
    node.textContent = value;
    if (className) node.className = className;
    return node;
}
function badge(exam, className = "cert-badge") {
    const wrapper = text("span", "", className);
    const image = document.createElement("img");
    image.src = exam.badgeUrl;
    image.alt = "";
    image.width = 96;
    image.height = 96;
    image.referrerPolicy = "no-referrer";
    image.decoding = "async";
    image.onerror = () => {
        wrapper.replaceChildren(text("span", t("Artwork unavailable"), "badge-unavailable"));
        wrapper.setAttribute("role", "img");
        wrapper.setAttribute("aria-label", `${exam.name} artwork unavailable`);
    };
    wrapper.append(image);
    return wrapper;
}
function button(label, handler, className = "btn") {
    const node = text("button", label, className);
    node.type = "button";
    node.onclick = handler;
    node.disabled = busy;
    return node;
}
function option(label, value) {
    const node = text("option", label);
    node.value = value;
    return node;
}
function resources(items) {
    const list = document.createElement("ul");
    for (const item of items ?? []) {
        const row = document.createElement("li");
        const pathMatch = item.title.match(/^Microsoft Learn preparation path (\d+)$/);
        const domainMatch = item.title.match(/^(.*): (official study guide|documentation (\d+))$/);
        const title = hasTranslation(item.title) ? t(item.title) : pathMatch ?
            t("Microsoft Learn preparation path {n}", { n: pathMatch[1] }) : domainMatch ?
            t(domainMatch[3] ? "{domain}: documentation {n}" : "{domain}: official study guide",
                { domain: domainName(domainMatch[1]), n: domainMatch[3] }) : item.title;
        const link = text("a", title);
        link.href = item.url;
        link.target = "_blank";
        link.rel = "noreferrer";
        row.append(link);
        list.append(row);
    }
    return list;
}
function showError(error, translated = false) {
    $("error").textContent = translated ? error.message : hasTranslation(error.message) ? t(error.message) :
        t("System message: {message}", { message: error.message });
    $("error").hidden = false;
}
async function api(action, extra = {}) {
    const response = await fetch(action ? "/api/action" : "/api/state", {
        method: action ? "POST" : "GET",
        headers: { "x-coach-token": token, ...(action ? { "Content-Type": "application/json" } : {}) },
        ...(action ? { body: JSON.stringify({ action, ...extra }) } : {}),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || `Request failed (${response.status}).`);
    return data;
}
async function act(action, extra = {}) {
    if (busy) return false;
    busy = true;
    $("error").hidden = true;
    syncBusy();
    try {
        update(await api(action, { attemptId: state?.attempt?.id, ...extra }));
        return true;
    } catch (error) {
        showError(error);
        return false;
    } finally {
        busy = false;
        render();
    }
}
function update(value) {
    if (state?.attempt?.id !== value.attempt?.id) {
        index = 0;
        unsavedSelections.clear();
    }
    state = value;
    const next = JSON.stringify(value);
    if (next !== signature) {
        signature = next;
        render();
    }
    if (value.attempt?.finished && view === "review") { view = "attempt"; render(); }
    tick();
}
function navigate(nextView) {
    if (busy || unsavedSelections.size) return;
    view = nextView === "review" && state.attempt?.finished ? "attempt" : nextView;
    render();
}
function goQuestion(questionIndex) {
    if (busy || unsavedSelections.size) return;
    index = questionIndex;
    view = "attempt";
    render();
}
function render() {
    if (!state) return;
    const exam = selectedExam();
    localizePage(document, state.language ?? "en");
    $("language").querySelector(`option[value="${state.language ?? "en"}"]`).selected = true;
    $("exam-title").textContent = exam.name;
    $("selected-badge").hidden = view === "catalog";
    if (view !== "catalog" && $("selected-badge").dataset.examId !== exam.id) {
        $("selected-badge").replaceChildren(badge(exam, "cert-badge cert-badge-small"));
        $("selected-badge").dataset.examId = exam.id;
    }
    const preview = view === "catalog" ? state.catalog.some(item => item.status !== "Human-reviewed bank") :
        exam.status !== "Human-reviewed bank";
    $("release-status").textContent = t(preview ? "Unofficial Preview" : "Unofficial practice");
    $("notice").textContent = t(preview ?
        "Unofficial, AI-authored Preview. Human content review is still required. Practice scores are not official scaled scores or a guarantee of passing." :
        "Unofficial practice with a human-reviewed question bank. Practice scores are not official scaled scores or a guarantee of passing.");
    for (const id of ["catalog", "setup", "attempt", "review", "content-review", "report"]) {
        const visible = ({ catalog: "catalog", setup: "prep", attempt: "attempt", review: "review", "content-review": "content", report: "report" })[id];
        $(id).hidden = view !== visible;
    }
    $("back-catalog").hidden = view === "catalog";
    if (view === "catalog") renderCatalog();
    if (view === "prep") renderPrep(exam);
    if (view === "attempt" && state.attempt) renderAttempt(exam);
    if (view === "review" && state.attempt) renderReview();
    if (view === "content" && reviewingQuestion) renderContentReview();
    if (view === "report") updateReport();
    $("content-language-note").hidden = !state.attempt || state.attempt.contentLanguage === (state.language ?? "en") || (state.language ?? "en") === "en";
    syncBusy();
    tick();
}
function renderCatalog() {
    $("exam-cards").replaceChildren(...state.catalog.map(exam => {
        const card = text("section", "", "card exam-card");
        const heading = text("div", "", "exam-card-heading");
        const title = text("div", "", "exam-card-title");
        title.append(text("h3", exam.name), text("p",
            t("{reviewed}/{total} human-reviewed - {status}", { reviewed: exam.reviewedCount, total: exam.questionCount, status: t(exam.status) }), "Label"));
        heading.append(badge(exam), title);
        card.append(heading);
        card.append(text("p", t("{count}/{target} questions in the bank. Mock: {size} questions / {minutes} minutes.",
            { count: exam.questionCount, target: exam.poolTarget, size: exam.attemptSize, minutes: exam.minutes }), "muted"));
        if (exam.attempt) card.append(text("p", t("{status} {mode} attempt: {answered}/{total} checked.", {
            status: t(exam.attempt.finished ? "Completed" : "Saved"), mode: modeName(exam.attempt.mode), answered: exam.attempt.answered, total: exam.attempt.total,
        })));
        card.append(button(t("Choose certification"), async () => {
            if (await act("select_exam", { examId: exam.id })) { view = "prep"; render(); }
        }));
        return card;
    }));
}
function renderPrep(exam) {
    $("prep-title").textContent = t("{exam}: prepare and practice", { exam: exam.name });
    $("prep-resources").replaceChildren(resources(exam.resources));
    $("blueprint").textContent = t("Official duration: {minutes} minutes. This mock uses 75 questions and grades every item. Sampling follows published domain ranges; this is not an official exam form.", { minutes: exam.minutes });
    $("official-language-note").textContent = t(exam.officialLanguages?.length === 1 ?
        "The official Agentic AI Developer exam is currently English-only. Spanish and Portuguese here are unofficial practice translations." :
        "Official exam languages include English, Spanish, and Portuguese.");
    $("coverage").textContent = t("{count}/{target} original questions. {reviewed} human-approved for the current revision. {status}.",
        { count: exam.questionCount, target: exam.poolTarget, reviewed: exam.reviewedCount, status: t(exam.status) });
    $("resume").hidden = !state.attempt;
    $("resume").textContent = t(state.attempt?.finished ? "View last results" : "Resume saved attempt");
    const active = state.attempt && !state.attempt.finished;
    $("practice-settings").hidden = Boolean(active);
    const domainValue = $("study-domain").value;
    $("study-domain").replaceChildren(option(t("All domains"), ""), ...exam.domains.map(domain => option(domainName(domain.name), domain.name)));
    $("study-domain").value = exam.domains.some(domain => domain.name === domainValue) ? domainValue : "";
    $("relaxed-label").hidden = !exam.relaxedMinutes;
    $("exam-mode-description").textContent = exam.fullLengthAvailable ?
        t("{size} questions. {minutes} minutes. Answers save as you select them.", { size: exam.attemptSize, minutes: exam.minutes }) :
        t("Full-length mock unavailable until the bank covers every domain at the required size.");
    $("bank-review").disabled = Boolean(active) || !exam.questionCount;
    $("bank-review-note").textContent = t(active ? "Finish this certification's active attempt before opening answer-key content review." :
        "Local human review records travel with this installation. Review is not a secure reviewer role.");
    document.querySelector('[data-mode="exam"]').disabled = !exam.fullLengthAvailable;
    for (const mode of ["learn", "coach"]) document.querySelector(`[data-mode="${mode}"]`).disabled = !exam.questionCount;
}
function renderAttempt(exam) {
    const attempt = state.attempt;
    const question = attempt.entries[index];
    $("mode").textContent = `${exam.name} / ${modeName(attempt.mode)}`;
    $("finish").hidden = attempt.finished;
    $("new").hidden = !attempt.finished;
    $("domain").textContent = t("QUESTION {n} OF {total} / {domain}", { n: index + 1, total: attempt.entries.length, domain: domainName(question.domain) });
    $("question").textContent = question.prompt;
    const locked = attempt.finished || question.pending ||
        (attempt.mode === "learn" && question.checked) ||
        (attempt.mode === "coach" && (question.correct || question.correctAnswer !== undefined));
    const localChoice = unsavedSelections.get(key(question));
    $("choices").replaceChildren(text("legend", t("Choose one answer")));
    question.choices.forEach((choice, choiceIndex) => {
        const label = document.createElement("label");
        label.className = "choice";
        const input = document.createElement("input");
        input.type = "radio"; input.name = "choice"; input.value = choiceIndex;
        input.checked = (localChoice ?? question.selected) === choiceIndex;
        input.disabled = Boolean(locked || busy);
        input.onchange = async () => {
            unsavedSelections.set(key(question), choiceIndex);
            await saveSelection(question);
        };
        label.append(input, text("span", choice));
        $("choices").append(label);
    });
    $("answer").hidden = attempt.mode === "exam";
    $("answer").disabled = Boolean(locked || busy || unsavedSelections.size || question.selected === undefined);
    $("retry-save").hidden = !unsavedSelections.size;
    $("save-status").textContent = t(unsavedSelections.size ? "Not saved. Retry before navigating." :
        attempt.finished ? (attempt.expired ? "Time expired. Attempt submitted automatically." : "Attempt submitted.") :
        question.unchecked ? "Selection saved - not checked. Use Check answer when ready." :
        question.checked ? (attempt.mode === "exam" ? "Answer saved automatically." : "Answer checked.") : "Unanswered");
    $("feedback").textContent = question.unchecked || question.correct === undefined ? "" :
        t(question.correct ? "Correct." : attempt.mode === "coach" && question.correctAnswer === undefined ?
            "Not quite. Think through a hint, then try again." : "Incorrect. Review the explanation below.");
    $("flag").textContent = t(question.flagged ? "Remove review flag" : "Flag for review");
    $("flag").disabled = attempt.finished || busy;
    $("reveal").hidden = attempt.mode !== "coach" || attempt.finished || question.correctAnswer !== undefined;
    $("explanations").hidden = question.correctAnswer === undefined;
    $("explanation-list").replaceChildren();
    if (question.explanations) {
        question.explanations.forEach((explanation, choiceIndex) => {
            const item = text("p", "", `explanation${choiceIndex === question.correctAnswer ? " correct" : ""}`);
            item.append(text("strong", `${choiceIndex + 1}. ${question.choices[choiceIndex]}${choiceIndex === question.correctAnswer ? ` ${t("(correct)")}` : ""}`),
                document.createElement("br"), document.createTextNode(explanation));
            $("explanation-list").append(item);
        });
        $("source").href = question.source;
    }
    $("coaching").hidden = attempt.mode !== "coach";
    $("messages").replaceChildren(...question.messages.map(message => {
        const node = text("div", "", `message ${message.role}`);
        node.append(text("strong", t(message.role === "coach" ? "Copilot coach" : "You")), document.createTextNode(message.text));
        return node;
    }));
    $("pending").hidden = !question.pending;
    $("coach-error").textContent = question.error ? (hasTranslation(question.error) ? t(question.error) : t("System message: {message}", { message: question.error })) : "";
    $("reasoning").value = drafts.get(key(question)) ?? "";
    syncComposer(question, attempt);
    $("navigation").replaceChildren(...attempt.entries.map((entry, questionIndex) => {
        const status = `, ${t(entry.unchecked ? "not checked" : entry.checked ? "answered" : "unanswered")}`;
        const node = button(`${questionIndex + 1}${entry.unchecked ? " ?" : entry.checked ? " +" : ""}${entry.flagged ? " *" : ""}`, () => goQuestion(questionIndex));
        node.setAttribute("aria-label", t("Question {n}{status}{flag}", { n: questionIndex + 1, status, flag: entry.flagged ? `, ${t("flagged")}` : "" }));
        if (index === questionIndex) node.setAttribute("aria-current", "step");
        return node;
    }));
    $("previous").disabled = index === 0 || busy || Boolean(unsavedSelections.size);
    $("next").disabled = index === attempt.entries.length - 1 || busy || Boolean(unsavedSelections.size);
    $("score").hidden = !attempt.score;
    if (attempt.score) renderScore(attempt.score);
}
function renderScore(score) {
    $("score").replaceChildren(
        text("p", t("Practice score"), "score-label"),
        text("p", `${score.percentage}/100`, "score-value"),
        text("p", t(state.attempt.mode === "exam" ? "{correct} of {total} correct at submission." : "{correct} of {total} correct on first check.", { correct: score.firstAttempt, total: score.total })),
        text("p", t("Latest-answer accuracy: {percentage}/100 ({correct}/{total}). {assisted} questions used coaching; {revealed} explicitly revealed.",
            { percentage: score.currentPercentage, correct: score.current, total: score.total, assisted: score.assisted, revealed: score.revealed }), "muted"),
        text("p", t("Practice accuracy is not the official scaled exam score or a prediction of passing."), "muted"),
    );
    if (score.domains?.length) $("score").append(text("h2", t("Study focus: lowest domain scores first")));
    for (const domain of [...(score.domains ?? [])].sort((a, b) => a.percentage - b.percentage || a.name.localeCompare(b.name))) {
        const item = text("section", "", "domain-result");
        item.append(text("h3", domainName(domain.name)),
            text("p", t("{correct}/{total} correct ({percentage}/100). Latest checked answers: {current}/{total}.", { correct: domain.correct, total: domain.total, percentage: domain.percentage, current: domain.current })),
            resources(domain.resources));
        $("score").append(item);
    }
}
async function saveSelection(question) {
    const choiceKey = key(question);
    const choice = unsavedSelections.get(choiceKey);
    if (choice === undefined) return;
    if (await act("select", { questionId: question.id, choice })) unsavedSelections.delete(choiceKey);
    render();
}
function renderReview() {
    const attempt = state.attempt;
    const unanswered = new Set(attempt.review.unanswered), flagged = new Set(attempt.review.flagged);
    $("review-summary").textContent = t("{unanswered} unanswered or not checked; {flagged} flagged for review. A question can appear in both counts.", { unanswered: unanswered.size, flagged: flagged.size });
    $("review-warning").textContent = t("Unanswered questions count as incorrect. Unchecked selections are not graded; earlier checked answers, if any, remain the graded answers. Submission reveals explanations and cannot be undone.");
    $("review-filter").value = reviewFilter;
    $("review-list").replaceChildren(...attempt.entries.flatMap((entry, questionIndex) => {
        const missing = unanswered.has(entry.id), marked = flagged.has(entry.id);
        if (reviewFilter === "unanswered" && !missing || reviewFilter === "flagged" && !marked ||
            reviewFilter === "attention" && !missing && !marked) return [];
        const row = document.createElement("li");
        row.append(button(t("Question {n}: {status}{flag} - {prompt}", { n: questionIndex + 1, status: t(missing ? (entry.unchecked ? "not checked" : "unanswered") : "answered"), flag: marked ? ` / ${t("flagged")}` : "", prompt: entry.prompt }),
            () => goQuestion(questionIndex), "btn review-link"));
        return [row];
    }));
    $("review-empty").hidden = $("review-list").children.length > 0;
    $("submit-attempt").textContent = t(unanswered.size || flagged.size ? "Submit and grade anyway" : "Submit and grade");
}
function syncComposer(question, attempt) {
    const locked = Boolean(busy || attempt.finished || question.pending || question.correct || question.correctAnswer !== undefined);
    $("reasoning").disabled = locked;
    $("send").disabled = locked || !$("reasoning").value.trim();
}
function syncBusy() {
    if (!state) return;
    document.querySelector("main").inert = busy;
    document.querySelector("main").setAttribute("aria-busy", String(busy));
    if (busy) $("send").disabled = true;
    if (!busy && state.attempt && view === "attempt") syncComposer(state.attempt.entries[index], state.attempt);
    $("back-catalog").disabled = busy || Boolean(unsavedSelections.size);
    $("finish").disabled = busy || Boolean(unsavedSelections.size);
    $("language").disabled = busy || Boolean(unsavedSelections.size);
}
function tick() {
    const attempt = state?.attempt;
    $("timer").textContent = !attempt || attempt.mode !== "exam" ? t("Untimed") : attempt.finished ? t("Attempt finished") : (() => {
        const remaining = Math.max(0, Math.ceil((attempt.deadline - Date.now()) / 1000));
        return t("{time} remaining", { time: `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, "0")}` });
    })();
    $("review-timer").textContent = $("timer").textContent;
}
document.querySelectorAll("[data-mode]").forEach(node => {
    node.onclick = async () => {
        const mode = node.dataset.mode;
        if (await act("start", { mode, examId: state.selectedExamId,
            ...(mode !== "exam" && $("study-domain").value ? { domain: $("study-domain").value } : {}),
            ...(mode === "exam" && $("relaxed").checked ? { relaxed: true } : {}),
        })) { index = 0; view = "attempt"; render(); }
    };
});
$("answer-form").onsubmit = event => {
    event.preventDefault();
    const question = state.attempt.entries[index];
    if (question.selected === undefined) return showError(new Error("Select an answer first."));
    act("answer", { questionId: question.id, choice: question.selected });
};
$("retry-save").onclick = () => saveSelection(state.attempt.entries[index]);
$("reasoning").oninput = () => {
    const question = state.attempt.entries[index];
    drafts.set(key(question), $("reasoning").value);
    syncComposer(question, state.attempt);
};
$("coach-form").onsubmit = async event => {
    event.preventDefault();
    const question = state.attempt.entries[index], draftKey = key(question);
    const message = $("reasoning").value;
    if (!message.trim()) return;
    const sent = await act("hint", { questionId: question.id, message });
    if (!sent) return;
    if (drafts.get(draftKey) === message) drafts.delete(draftKey);
    render();
};
$("reveal").onclick = () => act("reveal", { questionId: state.attempt.entries[index].id });
$("flag").onclick = () => act("flag", { questionId: state.attempt.entries[index].id });
$("finish").onclick = () => { reviewFilter = "attention"; navigate("review"); };
$("review-filter").onchange = () => { reviewFilter = $("review-filter").value; renderReview(); };
$("return-attempt").onclick = () => navigate("attempt");
$("submit-attempt").onclick = async () => {
    if (await act("finish")) { view = "attempt"; render(); }
};
$("previous").onclick = () => goQuestion(index - 1);
$("next").onclick = () => goQuestion(index + 1);
$("new").onclick = () => navigate("prep");
$("back-catalog").onclick = () => navigate("catalog");
$("resume").onclick = () => navigate("attempt");
$("bank-review").onclick = async () => {
    if (!selectedExam().questionCount) return;
    await inspectQuestion(0);
};
async function inspectQuestion(questionIndex) {
    if (busy) return;
    busy = true;
    syncBusy();
    try {
        const result = await api("inspect_question", { examId: state.selectedExamId, questionIndex });
        reviewingQuestion = result;
        $("review-confirm").checked = false;
        view = "content";
        renderContentReview();
    } catch (error) { showError(error); }
    finally { busy = false; render(); if (view === "content") renderContentReview(); }
}
function renderContentReview() {
    const item = reviewingQuestion;
    $("content-position").textContent = t("Question {n} of {total} / {domain}", { n: item.index + 1, total: item.total, domain: domainName(item.question.domain) });
    $("content-question").textContent = item.question.prompt;
    $("content-answers").replaceChildren(...item.question.choices.map((choice, choiceIndex) =>
        text("p", `${choiceIndex + 1}. ${choice}${choiceIndex === item.question.correct ? ` ${t("(correct)")}` : ""}\n${item.question.explanations[choiceIndex]}`, "explanation")));
    $("content-source").href = item.question.source;
    $("content-hints").textContent = t("Concept: {concept}\nHints: {hints}", { concept: item.question.concept, hints: item.question.hints.join(" / ") });
    $("content-status").textContent = t(item.approved ? "Human-approved for this revision." : "Preview - human review pending.");
    $("approve-question").hidden = item.approved;
    $("revoke-question").hidden = !item.approved;
    $("content-previous").disabled = item.index === 0 || busy;
    $("content-next").disabled = item.index + 1 === item.total || busy;
    $("content-jump").value = item.index + 1;
    $("content-jump").max = item.total;
}
async function reviewQuestion(decision) {
    if (busy) return;
    const item = reviewingQuestion;
    if (decision === "approve" && !$("review-confirm").checked) {
        showError(new Error("Confirm that you personally reviewed the question, answer, explanations, hints, and source."));
        return;
    }
    if (await act("review_question", { examId: state.selectedExamId, questionId: item.question.id,
        revision: item.revision, decision })) {
        $("review-confirm").checked = false;
        await inspectQuestion(item.index);
    }
}
$("approve-question").onclick = () => reviewQuestion("approve");
$("revoke-question").onclick = () => reviewQuestion("revoke");
$("content-previous").onclick = () => inspectQuestion(reviewingQuestion.index - 1);
$("content-next").onclick = () => inspectQuestion(reviewingQuestion.index + 1);
$("content-jump-form").onsubmit = event => {
    event.preventDefault();
    inspectQuestion(Number($("content-jump").value) - 1);
};
$("content-back").onclick = () => navigate("prep");
function openReport(kind) {
    if (busy || unsavedSelections.size) return;
    const exam = selectedExam();
    const question = kind === "question" ? state.attempt.entries[index] : null;
    reportReturnView = view;
    reportContext = {
        kind, exam: exam.name, examId: exam.id, version: state.appVersion ?? "unknown",
        ...(question ? { questionId: question.id, revision: question.revision ?? "unknown", domain: question.domain } : {}),
        ...(state.attempt ? { mode: state.attempt.mode } : {}),
    };
    $("report-title").textContent = t(kind === "question" ? "Report a question problem" : "Report a canvas problem");
    $("report-summary").value = "";
    $("report-description").value = "";
    $("report-steps").value = "";
    view = "report";
    updateReport();
    render();
}
function updateReport() {
    if (!reportContext) return;
    $("report-title").textContent = t(reportContext.kind === "question" ? "Report a question problem" : "Report a canvas problem");
    const summary = $("report-summary").value.trim();
    const description = $("report-description").value.trim();
    const steps = $("report-steps").value.trim();
    const body = [
        "## Problem", description || "(Describe the problem)",
        "", "## Steps to reproduce / expected behavior", steps || "(Add steps and expected behavior)",
        "", "## Context",
        `- App version: ${reportContext.version}`,
        `- Certification: ${reportContext.exam} (${reportContext.examId})`,
        ...(reportContext.questionId ? [
            `- Question ID: ${reportContext.questionId}`,
            `- Question revision: ${reportContext.revision}`,
            `- Domain: ${reportContext.domain}`,
        ] : []),
        ...(reportContext.mode ? [`- Mode: ${reportContext.mode}`] : []),
        "", "No learner answers, scores, coaching messages, attempt IDs, or local URLs were attached automatically.",
    ].join("\n");
    $("report-preview").textContent = body;
    const link = $("report-open");
    link.hidden = !summary || !description;
    $("report-help").textContent = t(link.hidden ? "Add a summary and description to prepare your GitHub report." : "Review the preview, then continue to GitHub. GitHub sign-in may be required.");
    if (!link.hidden) {
        const url = new URL("https://github.com/sviera91/github-certification-coach/issues/new");
        url.searchParams.set("template", reportContext.kind === "question" ? "question.md" : "canvas.md");
        url.searchParams.set("title", `[${reportContext.kind === "question" ? "Question" : "Canvas"}] ${summary}`);
        url.searchParams.set("body", body);
        if (url.href.length > 7800) {
            link.hidden = true;
            link.removeAttribute("href");
            $("report-help").textContent = t("This report is too long for a GitHub prefilled link. Shorten the description or reproduction steps.");
        } else link.setAttribute("href", url.href);
    } else link.removeAttribute("href");
}
$("report-canvas").onclick = () => openReport("canvas");
$("report-question").onclick = () => openReport("question");
for (const id of ["report-summary", "report-description", "report-steps"]) $(id).oninput = updateReport;
$("report-cancel").onclick = () => navigate(reportReturnView);
$("language").onchange = async () => {
    const previous = state.language ?? "en";
    if (unsavedSelections.size) {
        $("language").querySelector(`option[value="${previous}"]`).selected = true;
        return;
    }
    if (await act("set_language", { language: $("language").value })) {
        if (view === "content" && reviewingQuestion) await inspectQuestion(reviewingQuestion.index);
    }
};
try { update(await api()); } catch (error) { showError(error); }
setInterval(async () => {
    if (busy) return;
    try {
        update(await api());
        if (connectionErrorText && $("error").textContent === connectionErrorText) $("error").hidden = true;
        connectionErrorText = undefined;
    } catch (error) {
        showError(new Error(t("Connection lost: {message}", { message: error.message })), true);
        connectionErrorText = $("error").textContent;
    }
}, 1500);
setInterval(tick, 1000);
