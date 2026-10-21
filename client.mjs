const token = new URL(import.meta.url).searchParams.get("token");
const { translate, localizePage, hasTranslation } = await import(new URL(`./i18n.mjs?token=${token}`, import.meta.url));
const { renderMarkdown } = await import(new URL(`./markdown.mjs?token=${token}`, import.meta.url));
const $ = id => document.getElementById(id);
let state, index = 0, busy = false, signature = "", view = "catalog", reviewFilter = "attention";
let reviewingQuestion;
let reportContext, reportReturnView = "catalog";
let connectionErrorText;
let confirmResolve, confirmFocus;
let pinnedQuestion;
const openedHistory = new Set();
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
function icon(name) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "octicon status-icon");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `#icon-${name}`);
    svg.append(use);
    return svg;
}
function band(value) { return value < 70 ? "danger" : value < 85 ? "attention" : "success"; }
function bandLabel(value) { return t(value < 70 ? "Needs focus" : value < 85 ? "Building confidence" : "Strong practice result"); }
function setIcon(node, name) {
    if (!node.querySelector("svg")) node.prepend(icon(name), document.createTextNode(" "));
}
function confirmAction(title, message) {
    if (confirmResolve) return Promise.resolve(false);
    confirmFocus = document.activeElement;
    $("confirmation-title").textContent = t(title);
    $("confirmation-message").textContent = t(message);
    $("confirmation").hidden = false;
    for (const child of document.querySelector("main").children) if (child.id !== "confirmation") child.inert = true;
    $("confirmation-cancel").focus();
    return new Promise(resolve => { confirmResolve = resolve; });
}
function resolveConfirmation(value) {
    $("confirmation").hidden = true;
    for (const child of document.querySelector("main").children) child.inert = false;
    const resolve = confirmResolve;
    confirmResolve = undefined;
    confirmFocus?.focus();
    resolve?.(value);
}
$("confirmation-accept").onclick = () => resolveConfirmation(true);
$("confirmation-cancel").onclick = () => resolveConfirmation(false);
$("confirmation").onkeydown = event => {
    if (event.key === "Escape") { event.preventDefault(); resolveConfirmation(false); }
    if (event.key === "Tab") {
        event.preventDefault();
        (document.activeElement === $("confirmation-cancel") ? $("confirmation-accept") : $("confirmation-cancel")).focus();
    }
};
async function exitMock() {
    if (state.attempt?.mode !== "exam" || state.attempt.finished) return true;
    if (!await confirmAction("End this mock exam?", "Exiting submits this mock immediately. Unanswered questions count as incorrect. The grade is saved in your last 10 results; returning starts a new exam.")) return false;
    return act("finish", { reason: "exit" });
}
function visibleIndices() {
    const attempt = state.attempt;
    if (!attempt) return [];
    return attempt.entries.flatMap((entry, entryIndex) => {
        if (attempt.mode === "exam") return [entryIndex];
        if (entry.id === pinnedQuestion) return [entryIndex];
        return matchesStudyFilter(attempt, entry) ? [entryIndex] : [];
    });
}
function matchesStudyFilter(attempt, entry) {
    if (attempt.domainFilter && entry.domain !== attempt.domainFilter) return false;
    const filter = attempt.progressFilter ?? "all";
    return !(filter === "unanswered" && entry.checked || filter === "incorrect" && !entry.previouslyIncorrect ||
        filter === "flagged" && !entry.flagged);
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
        if (["answer", "flag"].includes(action) && state.attempt?.mode !== "exam") pinnedQuestion = extra.questionId;
        if (["study_filter", "reset_study"].includes(action)) pinnedQuestion = undefined;
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
        index = Math.max(0, value.attempt?.entries.findIndex(entry => entry.id === value.attempt.position) ?? 0);
        unsavedSelections.clear();
        pinnedQuestion = undefined;
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
async function goQuestion(questionIndex) {
    if (busy || unsavedSelections.size) return;
    if (!state.attempt.entries[questionIndex]) return;
    pinnedQuestion = undefined;
    index = questionIndex;
    view = "attempt";
    render();
    await act("position", { questionId: state.attempt.entries[index].id });
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
    $("app-version").textContent = `v${state.appVersion}`;
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
    for (const [id, name] of [["choose-mode", "arrow-switch"], ["retry-question", "sync"], ["reset-study", "sync"],
        ["explain-further", "light-bulb"], ["bank-review", "book"]]) setIcon($(id), name);
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
    const active = state.attempt?.mode === "exam" && !state.attempt.finished;
    $("practice-settings").hidden = false;
    $("relaxed-label").hidden = !exam.relaxedMinutes;
    $("exam-mode-description").textContent = exam.fullLengthAvailable ?
        t("{size} questions. {minutes} minutes. Answers save as you select them.", { size: exam.attemptSize, minutes: exam.minutes }) :
        t("Full-length mock unavailable until the bank covers every domain at the required size.");
    $("bank-review").disabled = Boolean(active) || !exam.questionCount;
    $("bank-review-note").textContent = t(active ? "Finish this certification's active attempt before opening answer-key content review." :
        "Local human review records travel with this installation. Review is not a secure reviewer role.");
    document.querySelector('[data-mode="exam"]').disabled = !exam.fullLengthAvailable;
    for (const mode of ["learn", "coach"]) document.querySelector(`[data-mode="${mode}"]`).disabled = !exam.questionCount;
    renderHistory($("mock-history"));
}
function renderAttempt(exam) {
    const attempt = state.attempt;
    const study = attempt.mode !== "exam";
    const indices = visibleIndices();
    if (!indices.includes(index) && indices.length) index = indices[0];
    const question = attempt.entries[index];
    $("mode").textContent = `${exam.name} / ${modeName(attempt.mode)}`;
    $("finish").hidden = study || attempt.finished;
    $("new").hidden = !attempt.finished;
    $("study-controls").hidden = !study;
    $("study-empty").hidden = !study || indices.length > 0;
    $("study-filter-note").hidden = !study || question.id !== pinnedQuestion || matchesStudyFilter(attempt, question);
    $("question-columns").hidden = study && !indices.length;
    $("question-footer").hidden = study && !indices.length;
    if (study) {
        $("study-mode").querySelector(`option[value="${attempt.mode}"]`).selected = true;
        $("study-domain").replaceChildren(option(t("All domains"), ""), ...exam.domains.map(domain => option(domainName(domain.name), domain.name)));
        for (const opt of $("study-domain").options) if (opt.value === (attempt.domainFilter ?? "")) opt.selected = true;
        $("study-filter").querySelector(`option[value="${attempt.progressFilter ?? "all"}"]`).selected = true;
        $("study-progress").textContent = t("{answered}/{total} answered · {visible} shown", {
            answered: attempt.progress?.answered ?? attempt.entries.filter(entry => entry.checked).length,
            total: attempt.entries.length, visible: indices.length });
    }
    $("domain").textContent = t("QUESTION {n} OF {total} / {domain}", { n: index + 1, total: attempt.entries.length, domain: domainName(question.domain) });
    $("question").textContent = question.prompt;
    const locked = attempt.finished || question.pending ||
        (attempt.mode === "learn" && question.checked && !question.retrying) ||
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
    $("feedback").className = question.correct === true ? "feedback-success" : question.correct === false ? "feedback-danger" : "";
    if ($("feedback").textContent) setIcon($("feedback"), question.correct ? "check-circle" : "x-circle");
    $("flag").textContent = t(question.flagged ? "Remove review flag" : "Flag for review");
    $("flag").disabled = attempt.finished || busy;
    $("reveal").hidden = attempt.mode !== "coach" || attempt.finished || question.correctAnswer !== undefined;
    $("retry-question").hidden = !study || !question.checked && question.correctAnswer === undefined || question.retrying;
    $("retry-question").disabled = busy || question.pending;
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
    $("explain-further").disabled = busy || Boolean(question.insight?.pending);
    renderInsight($("deep-explanation"), question.insight);
    $("coaching").hidden = attempt.mode !== "coach";
    $("messages").replaceChildren(...question.messages.map(message => {
        const node = text("div", "", `message ${message.role}`);
        const content = text("div", "", message.role === "coach" ? "markdown-content" : "learner-message");
        if (message.role === "coach") content.append(renderMarkdown(document, message.text));
        else content.textContent = message.text;
        node.append(text("strong", t(message.role === "coach" ? "Copilot coach" : "You"), "message-author"), content);
        return node;
    }));
    $("pending").hidden = !question.pending;
    $("coach-error").textContent = question.error ? (hasTranslation(question.error) ? t(question.error) : t("System message: {message}", { message: question.error })) : "";
    $("reasoning").value = drafts.get(key(question)) ?? "";
    syncComposer(question, attempt);
    $("navigation").replaceChildren(...indices.map(questionIndex => {
        const entry = attempt.entries[questionIndex];
        const status = `, ${t(entry.unchecked ? "not checked" : entry.checked ? "answered" : "unanswered")}`;
        const node = button(`${questionIndex + 1}${entry.unchecked ? " ?" : entry.checked ? " +" : ""}${entry.flagged ? " *" : ""}`, () => goQuestion(questionIndex));
        node.setAttribute("aria-label", t("Question {n}{status}{flag}", { n: questionIndex + 1, status, flag: entry.flagged ? `, ${t("flagged")}` : "" }));
        if (index === questionIndex) node.setAttribute("aria-current", "step");
        if (entry.checked && study && entry.correct !== undefined) node.classList.add(entry.correct ? "answer-correct" : "answer-incorrect");
        return node;
    }));
    $("previous").disabled = indices.indexOf(index) <= 0 || busy || Boolean(unsavedSelections.size);
    $("next").disabled = indices.indexOf(index) === indices.length - 1 || busy || Boolean(unsavedSelections.size);
    $("score").hidden = study || !attempt.score;
    if (!study && attempt.score) renderScore(attempt.score);
}
function renderInsight(node, insight) {
    node.replaceChildren();
    if (insight?.text) {
        const output = text("div", "", "ai-insight-text markdown-content");
        output.append(renderMarkdown(document, insight.text));
        output.lang = insight.language ?? "en";
        node.append(output);
    }
    if (insight?.pending) node.append(text("p", t("Waiting for Copilot...")));
    if (insight?.error) node.append(text("p", hasTranslation(insight.error) ? t(insight.error) : insight.error, "feedback-danger"));
}
function domainBar(domain) {
    const progress = document.createElement("progress");
    progress.max = domain.total;
    progress.value = domain.correct;
    progress.className = `domain-bar band-${band(domain.percentage)}`;
    progress.setAttribute("aria-label", `${domainName(domain.name)}: ${domain.correct}/${domain.total}`);
    return progress;
}
function scoreRing(score) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 120 120");
    svg.setAttribute("class", `score-ring band-${band(score.percentage)}`);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", `${t("Practice score")}: ${score.percentage}/100`);
    for (const isValue of [false, true]) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        for (const [name, value] of Object.entries({ cx: 60, cy: 60, r: 50, fill: "none", "stroke-width": 10 })) circle.setAttribute(name, value);
        circle.setAttribute("class", isValue ? "ring-value" : "ring-track");
        if (isValue) { circle.setAttribute("stroke-dasharray", `${score.percentage * Math.PI} ${100 * Math.PI}`); circle.setAttribute("transform", "rotate(-90 60 60)"); }
        svg.append(circle);
    }
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", "60"); label.setAttribute("y", "65"); label.setAttribute("text-anchor", "middle");
    label.textContent = `${score.percentage}%`;
    svg.append(label);
    return svg;
}
function renderScore(score) {
    $("score").replaceChildren(
        scoreRing(score),
        text("p", t("Practice score"), "score-label"),
        text("p", `${score.percentage}/100`, "score-value"),
        text("p", t(state.attempt.mode === "exam" ? "{correct} of {total} correct at submission." : "{correct} of {total} correct on first check.", { correct: score.firstAttempt, total: score.total })),
        text("p", bandLabel(score.percentage), `result-band band-${band(score.percentage)}`),
        text("p", t("Practice bands: needs focus below 70; building confidence 70–84; strong practice result 85–100."), "muted"),
        text("p", t("Practice accuracy is not the official scaled exam score or a prediction of passing."), "muted"),
    );
    if (score.domains?.length) $("score").append(text("h2", t("Study focus: lowest domain scores first")));
    for (const domain of [...(score.domains ?? [])].sort((a, b) => a.percentage - b.percentage || a.name.localeCompare(b.name))) {
        const item = text("section", "", "domain-result");
        item.append(text("h3", domainName(domain.name)),
            text("p", t("{correct}/{total} correct ({percentage}/100).", { correct: domain.correct, total: domain.total, percentage: domain.percentage })),
            resources(domain.resources));
        item.append(domainBar(domain));
        $("score").append(item);
    }
    const result = state.history?.find(result => result.id === state.attempt.id);
    if (result) appendGuidance($("score"), result);
    renderHistory($("score"), true);
}
function appendGuidance(container, result) {
    const request = button(t("Ask Copilot for a study plan"), () => act("guidance", { resultId: result.id }));
    request.disabled = busy || Boolean(result.guidance?.pending);
    setIcon(request, "light-bulb");
    container.append(request, text("p", t("AI-generated guidance can be wrong. It does not change the fixed answer key."), "muted"));
    const output = text("div", "", "ai-insight");
    renderInsight(output, result.guidance);
    container.append(output);
}
function renderHistory(container, append = false) {
    if (!append) container.replaceChildren();
    if (!state.history?.length) return;
    const heading = text("h2", t("Last 10 mock results"));
    setIcon(heading, "history");
    container.append(heading);
    if (!append) container.append(text("p", t("Practice bands: needs focus below 70; building confidence 70–84; strong practice result 85–100."), "muted"));
    for (const result of state.history) {
        const details = text("details", "", `history-result band-${band(result.score.percentage)}`);
        details.open = openedHistory.has(result.id);
        details.ontoggle = () => { if (details.open) openedHistory.add(result.id); else openedHistory.delete(result.id); };
        const summary = text("summary", `${new Date(result.submittedAt).toLocaleString(state.language ?? "en")} · ${result.score.percentage}/100 · ${bandLabel(result.score.percentage)} · ${t(({ exit: "Exited early", timeout: "Time expired", submitted: "Submitted" })[result.reason] ?? "Submitted")}${result.relaxed ? ` · ${t("Relaxed timing")}` : ""}`);
        summary.prepend(icon(result.score.percentage < 70 ? "x-circle" : result.score.percentage < 85 ? "alert" : "check-circle"));
        details.append(summary);
        for (const domain of result.score.domains) details.append(text("p", `${domainName(domain.name)}: ${domain.correct}/${domain.total}`), domainBar(domain));
        appendGuidance(details, result);
        container.append(details);
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
    for (const id of ["back-catalog", "choose-mode", "finish", "language", "study-mode", "study-domain", "study-filter", "reset-study"]) {
        $(id).disabled = busy || Boolean(unsavedSelections.size);
    }
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
        if (!await exitMock()) return;
        if (await act("start", { mode, examId: state.selectedExamId,
            ...(mode === "exam" && $("relaxed").checked ? { relaxed: true } : {}),
        })) { view = "attempt"; render(); }
    };
});
$("answer-form").onsubmit = event => {
    event.preventDefault();
    const question = state.attempt.entries[index];
    if (question.selected === undefined) return showError(new Error("Select an answer first."));
    return act("answer", { questionId: question.id, choice: question.selected });
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
$("previous").onclick = () => { const indices = visibleIndices(); return goQuestion(indices[indices.indexOf(index) - 1]); };
$("next").onclick = () => { const indices = visibleIndices(); return goQuestion(indices[indices.indexOf(index) + 1]); };
$("new").onclick = () => navigate("prep");
$("back-catalog").onclick = async () => { if (await exitMock()) navigate("catalog"); };
$("choose-mode").onclick = async () => { if (await exitMock()) navigate("prep"); };
$("study-mode").onchange = () => act("start", { mode: $("study-mode").value, examId: state.selectedExamId });
for (const id of ["study-domain", "study-filter"]) $(id).onchange = () =>
    act("study_filter", { domain: $("study-domain").value, filter: $("study-filter").value });
$("retry-question").onclick = () => act("retry_question", { questionId: state.attempt.entries[index].id });
$("explain-further").onclick = () => act("explain", { questionId: state.attempt.entries[index].id });
$("reset-study").onclick = async () => {
    if (await confirmAction("Reset study progress?", "This clears this certification's Learn and AI Coach answers, flags, and coaching history. Mock results are not changed. This cannot be undone.")) {
        await act("reset_study", { confirm: true });
    }
};
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
    $("content-review-guidance").textContent = t(item.language === "en" ? "English content review checks the question, answer, explanations, hints, and supporting documentation only." :
        "Translation review checks equivalence to the approved English content, including choices, explanations, hints, and documentation references.");
    $("review-confirm-label").textContent = t(item.language === "en" ? "I personally verified this English content revision." :
        "I personally verified this translation against the approved English revision.");
    $("english-review-required").hidden = item.language === "en" || item.englishApproved;
    $("approve-question").disabled = busy || (item.language !== "en" && !item.englishApproved);
    $("english-reference").hidden = item.language === "en";
    $("english-reference-content").replaceChildren();
    if (item.language !== "en" && item.englishQuestion) {
        const original = item.englishQuestion;
        $("english-reference-content").append(text("p", original.prompt),
            ...original.choices.map((choice, choiceIndex) => text("p",
                `${choiceIndex + 1}. ${choice}${choiceIndex === original.correct ? ` ${t("(correct)")}` : ""}\n${original.explanations[choiceIndex]}`, "explanation")),
            text("p", `${original.concept}\n${original.hints.join("\n")}`, "explanation"));
    }
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
        revision: item.revision, language: item.language, decision })) {
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
