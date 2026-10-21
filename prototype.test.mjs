import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createEngine } from "./engine.mjs";
import { questions } from "./questions.mjs";
import { startServer } from "./server.mjs";
import { quotasFor, revisionFor, reviewRevisionFor, publicExam, validateBank, assemble, approved, mergeApprovals } from "./bank-utils.mjs";
import { domainTranslations, hasTranslation } from "./i18n.mjs";
import { exams } from "./exams.mjs";

const catalog = ["foundations", "copilot"].map(id => ({
    id, name: id, phase: 1, attemptSize: 4, minutes: 6, relaxedMinutes: id === "foundations" ? 120 : undefined,
    questions: id === "foundations" ? questions : questions.map(question => ({ ...question, id: `copilot-${question.id}` })),
    domains: [...new Set(questions.map(question => question.domain))].map(name => ({ name, weight: 25, resources: [] })),
    resources: [], blueprintNote: "Fixture",
}));
const stableRandom = max => max - 1;

async function fixture(t, options = {}) {
    const directory = await mkdtemp(fileURLToPath(new URL("./.test-", import.meta.url)));
    t.after(() => rm(directory, { recursive: true, force: true }));
    const sent = [];
    const engine = createEngine({ directory, sessionId: () => "owner", send: async value => sent.push(value),
        catalog, random: stableRandom, ...options });
    await engine.load();
    return { engine, directory, sent };
}
const first = questions[0].id;
test("all six banks have both complete translations and localized domains without changing fixed keys", () => {
    assert.equal(exams.length, 6);
    assert.equal(exams.reduce((total, exam) => total + exam.questions.length, 0), 1350);
    for (const exam of exams) {
        assert.deepEqual(validateBank(exam), []);
        for (const domain of exam.domains) assert.ok(hasTranslation(domain.name), domain.name);
        for (const question of exam.questions) {
            assert.ok(question.translations?.es, question.id);
            assert.ok(question.translations?.["pt-BR"], question.id);
            for (const translation of Object.values(question.translations)) {
                assert.deepEqual(Object.keys(translation).sort(), ["choices", "concept", "explanations", "hints", "prompt"]);
                assert.equal(new Set(translation.choices).size, 4);
            }
        }
    }
    assert.equal(domainTranslations.length, 35);
    assert.deepEqual(exams.find(exam => exam.id === "agentic").officialLanguages, ["en"]);
});
test("switching languages preserves answer key, attempt identity, revision, deadline, and persisted progress", async t => {
    const exam = exams[0];
    const { engine, directory } = await fixture(t, { catalog: [exam] });
    let state = await engine.mutate("start", { mode: "exam" });
    const { id, deadline } = state.attempt;
    const question = exam.questions.find(question => question.id === state.attempt.entries[0].id);
    const revision = state.attempt.entries[0].revision;
    await engine.mutate("select", { questionId: question.id, choice: question.correct });
    for (const language of ["es", "pt-BR", "en"]) {
        state = await engine.mutate("set_language", { language });
        assert.equal(state.attempt.id, id);
        assert.equal(state.attempt.deadline, deadline);
        assert.equal(state.attempt.entries[0].revision, revision);
        assert.equal(state.attempt.entries[0].selected, question.correct);
        assert.equal(state.attempt.entries[0].correctAnswer, undefined);
        assert.equal(state.attempt.entries[0].prompt, language === "en" ? question.prompt : question.translations[language].prompt);
    }
    await engine.mutate("set_language", { language: "pt-BR" });
    const restarted = createEngine({ directory, catalog: [exam], send: async () => {}, sessionId: () => "owner" });
    await restarted.load();
    state = await restarted.mutate("finish");
    assert.equal(state.language, "pt-BR");
    assert.equal(state.attempt.score.current, 1);
    assert.equal(state.attempt.entries[0].explanations[question.correct], question.translations["pt-BR"].explanations[question.correct]);
});
test("English and translation approvals are independent and require approved English", async t => {
    const exam = structuredClone(exams[0]);
    const { engine } = await fixture(t, { catalog: [exam] });
    const first = await engine.mutate("inspect_question", { examId: exam.id, questionIndex: 0 });
    await engine.mutate("set_language", { language: "es" });
    const unapproved = await engine.mutate("inspect_question", { examId: exam.id, questionIndex: 0 });
    await assert.rejects(engine.mutate("review_question", { examId: exam.id, questionId: first.question.id,
        revision: unapproved.revision, language: "es", decision: "approve" }), /English content/);
    await engine.mutate("set_language", { language: "en" });
    await engine.mutate("review_question", { examId: exam.id, questionId: first.question.id, revision: first.revision, decision: "approve" });
    for (const language of ["es", "pt-BR"]) {
        await engine.mutate("set_language", { language });
        const translated = await engine.mutate("inspect_question", { examId: exam.id, questionIndex: 0 });
        assert.notEqual(translated.revision, first.revision);
        assert.equal(translated.approved, false);
        assert.equal(translated.englishApproved, true);
        await engine.mutate("review_question", { examId: exam.id, questionId: first.question.id, revision: translated.revision, language, decision: "approve" });
        assert.equal((await engine.mutate("inspect_question", { examId: exam.id, questionIndex: 0 })).approved, true);
        assert.equal(translated.question.prompt, exam.questions[0].translations[language].prompt);
        const changed = structuredClone(exam.questions[0]);
        changed.translations[language].prompt += " Changed.";
        const records = { [changed.id]: { en: { revision: first.revision }, [language]: { revision: translated.revision } } };
        assert.equal(approved(changed, records), true);
        assert.equal(approved(changed, records, language), false);
    }
});
test("English edits invalidate every language, translation edits affect only that language, and revocations merge per language", () => {
    const question = structuredClone(exams[0].questions[0]);
    const records = { [question.id]: Object.fromEntries(["en", "es", "pt-BR"].map(language =>
        [language, { revision: reviewRevisionFor(question, language) }])) };
    const spanishEdit = structuredClone(question);
    spanishEdit.translations.es.hints[0] += " Edit.";
    assert.equal(approved(spanishEdit, records), true);
    assert.equal(approved(spanishEdit, records, "es"), false);
    assert.equal(approved(spanishEdit, records, "pt-BR"), true);
    const englishEdit = structuredClone(question);
    englishEdit.source += "?revision=2";
    for (const language of ["en", "es", "pt-BR"]) assert.equal(approved(englishEdit, records, language), false);
    const merged = mergeApprovals(records, { [question.id]: { es: null } });
    assert.equal(approved(question, merged, "en"), true);
    assert.equal(approved(question, merged, "es"), false);
    assert.equal(approved(question, merged, "pt-BR"), true);
    for (const language of ["en", "es", "pt-BR"]) assert.equal(approved(question, mergeApprovals(records, { [question.id]: null }), language), false);
    assert.equal(approved(question, { [question.id]: { revision: revisionFor(question) } }), false);
});
test("per-language approval counts and revocations survive restart without erasing another language", async t => {
    const exam = structuredClone(exams[0]);
    const question = exam.questions[0];
    const defaults = { [question.id]: Object.fromEntries(["en", "es", "pt-BR"].map(language =>
        [language, { revision: reviewRevisionFor(question, language) }])) };
    const { engine, directory } = await fixture(t, { catalog: [exam], reviewDefaults: defaults });
    await engine.mutate("set_language", { language: "es" });
    await engine.mutate("review_question", { examId: exam.id, questionId: question.id,
        language: "es", revision: reviewRevisionFor(question, "es"), decision: "revoke" });
    const restarted = createEngine({ directory, catalog: [exam], reviewDefaults: defaults, send: async () => {}, sessionId: () => "owner" });
    await restarted.load();
    let state = await restarted.getState();
    assert.equal(state.catalog[0].reviewedCount, 0);
    assert.deepEqual(state.catalog[0].reviewCounts, { en: 1, es: 0, "pt-BR": 1 });
    await restarted.mutate("set_language", { language: "en" });
    state = await restarted.mutate("review_question", { examId: exam.id, questionId: question.id,
        language: "en", revision: reviewRevisionFor(question), decision: "revoke" });
    assert.deepEqual(state.catalog[0].reviewCounts, { en: 0, es: 0, "pt-BR": 0 });
    state = await restarted.mutate("review_question", { examId: exam.id, questionId: question.id,
        language: "en", revision: reviewRevisionFor(question), decision: "approve" });
    assert.deepEqual(state.catalog[0].reviewCounts, { en: 1, es: 0, "pt-BR": 0 });
    await restarted.mutate("set_language", { language: "es" });
    await assert.rejects(restarted.mutate("review_question", { examId: exam.id, questionId: question.id,
        language: "en", revision: reviewRevisionFor(question), decision: "approve" }), /revision changed/);
});
test("legacy snapshots disclose English content and translated coaching preserves earlier conversation text", async t => {
    const { engine, sent } = await fixture(t);
    await engine.mutate("start", { mode: "coach" });
    let state = await engine.mutate("set_language", { language: "es" });
    assert.equal(state.attempt.contentLanguage, "en");
    assert.equal(state.attempt.entries[0].prompt, questions[0].prompt);
    state = await engine.mutate("answer", { questionId: first, choice: 0 });
    assert.match(sent[0].prompt, /Respond in Latin American Spanish/);
    assert.match(state.attempt.entries[0].messages[0].text, /^Seleccioné/);
    const message = state.attempt.entries[0].messages[0].text;
    state = await engine.mutate("set_language", { language: "pt-BR" });
    assert.equal(state.attempt.entries[0].messages[0].text, message);
    assert.equal(state.attempt.entries[0].correctAnswer, undefined);
});
test("exam withholds answers, supports revisions, and reveals all on submission", async t => {
    const { engine, sent } = await fixture(t);
    await engine.mutate("start", { mode: "exam" });
    await engine.mutate("answer", { questionId: first, choice: 0 });
    let state = await engine.mutate("answer", { questionId: first, choice: 1 });
    assert.equal(state.attempt.entries[0].selected, 1);
    assert.equal(state.attempt.entries[0].correct, undefined);
    assert.equal(state.attempt.entries[0].correctAnswer, undefined);
    await assert.rejects(engine.mutate("reveal", { questionId: first }));
    state = await engine.mutate("finish");
    assert.equal(state.attempt.score.firstAttempt, 1);
    assert.equal(state.attempt.score.percentage, 25);
    assert.equal(state.attempt.score.currentPercentage, 25);
    assert.ok(state.attempt.entries.every(entry => entry.explanations));
    assert.equal(sent.length, 0);
});
test("learning mode gives immediate fixed explanations and locks the answer", async t => {
    const { engine } = await fixture(t);
    await engine.mutate("start", { mode: "learn" });
    const state = await engine.mutate("answer", { questionId: first, choice: 0 });
    assert.equal(state.attempt.entries[0].correct, false);
    assert.equal(state.attempt.entries[0].correctAnswer, 1);
    await assert.rejects(engine.mutate("answer", { questionId: first, choice: 1 }));
});
test("coaching uses bound completion, hides the key, and records ungraded answered progress", async t => {
    const { engine, sent } = await fixture(t);
    await engine.mutate("start", { mode: "coach" });
    let state = await engine.mutate("answer", { questionId: first, choice: 0 });
    assert.equal(state.attempt.entries[0].pending, true);
    assert.equal(state.attempt.entries[0].correctAnswer, undefined);
    assert.equal(sent.length, 1);
    assert.equal(sent[0].mode, "enqueue");
    const requestId = sent[0].prompt.match(/requestId="([^"]+)"/)[1];
    assert.equal((await engine.complete({ requestId, text: "What enforces the rule?" }, { sessionId: "other" })).resultType, "rejected");
    const completion = await engine.complete({ requestId, text: "What enforces the rule?" }, { sessionId: "owner" });
    assert.equal(completion.resultType, undefined);
    assert.equal((await engine.getState()).attempt.entries[0].messages.at(-1).role, "coach");
    state = await engine.mutate("answer", { questionId: first, choice: 1 });
    assert.equal(state.attempt.entries[0].correctAnswer, 1);
    await assert.rejects(engine.mutate("finish"), /not submitted or graded/);
    assert.equal(state.attempt.score, undefined);
    assert.equal(state.attempt.progress.answered, 1);
    assert.equal(state.attempt.entries[0].previouslyIncorrect, true);
    assert.equal((await engine.complete({ requestId, text: "Duplicate" }, { sessionId: "owner" })).resultType, "rejected");
});
test("practice percentage reaches 100 for all correct and zero for all unanswered", async t => {
    const { engine } = await fixture(t);
    await engine.mutate("start", { mode: "exam" });
    let state = await engine.mutate("finish");
    assert.equal(state.attempt.score.percentage, 0);
    assert.equal(state.attempt.score.currentPercentage, 0);
    await engine.mutate("start", { mode: "exam" });
    for (const question of questions) await engine.mutate("answer", { questionId: question.id, choice: question.correct });
    state = await engine.mutate("finish");
    assert.equal(state.attempt.score.percentage, 100);
    assert.equal(state.attempt.score.currentPercentage, 100);
});
test("explicit reveal cancels late AI delivery", async t => {
    const { engine, sent } = await fixture(t);
    await engine.mutate("start", { mode: "coach" });
    await engine.mutate("answer", { questionId: first, choice: 0 });
    const requestId = sent[0].prompt.match(/requestId="([^"]+)"/)[1];
    const state = await engine.mutate("reveal", { questionId: first });
    assert.equal(state.attempt.entries[0].correctAnswer, 1);
    assert.equal(state.attempt.entries[0].pending, false);
    assert.equal((await engine.complete({ requestId, text: "Late" }, { sessionId: "owner" })).resultType, "rejected");
});
test("attempt and coach conversation survive engine restart; pending requests become retryable", async t => {
    const { engine, directory } = await fixture(t);
    await engine.mutate("start", { mode: "coach" });
    await engine.mutate("answer", { questionId: first, choice: 0 });
    const restored = createEngine({ directory, send: async () => {}, sessionId: () => "new-owner", catalog, random: stableRandom });
    await restored.load();
    const state = await restored.getState();
    assert.equal(state.attempt.entries[0].selected, 0);
    assert.equal(state.attempt.entries[0].messages.length, 1);
    assert.equal(state.attempt.entries[0].pending, false);
    assert.match(state.attempt.entries[0].error, /interrupted/);
});
test("selection autosaves exam answers but never checks learning or coaching drafts", async t => {
    const { engine } = await fixture(t);
    await engine.mutate("start", { mode: "exam" });
    let state = await engine.mutate("select", { questionId: first, choice: 1 });
    assert.equal(state.attempt.entries[0].checked, true);
    assert.equal(state.attempt.review.unanswered.length, 3);
    assert.equal(state.attempt.entries[0].correct, undefined);
    await engine.mutate("finish");
    await engine.mutate("start", { mode: "learn" });
    state = await engine.mutate("select", { questionId: first, choice: 1 });
    assert.equal(state.attempt.entries[0].selected, 1);
    assert.equal(state.attempt.entries[0].checked, false);
    assert.equal(state.attempt.entries[0].unchecked, true);
    assert.equal(state.attempt.entries[0].correctAnswer, undefined);
    assert.ok(state.attempt.review.unanswered.includes(first));
    await assert.rejects(engine.mutate("finish"), /not submitted or graded/);
    assert.equal(state.attempt.progress.answered, 0);
});
test("separate certification attempts survive switching and restart; wrong attempt identities reject", async t => {
    const { engine, directory } = await fixture(t);
    const firstState = await engine.mutate("start", { mode: "learn" });
    await engine.mutate("select", { questionId: first, choice: 2 });
    await engine.mutate("flag", { questionId: first });
    await engine.mutate("select_exam", { examId: "copilot" });
    await engine.mutate("start", { mode: "exam" });
    await assert.rejects(engine.mutate("select", { questionId: `copilot-${first}`, choice: 1, attemptId: firstState.attempt.id }), /out of date/);
    const restored = createEngine({ directory, catalog, random: stableRandom, sessionId: () => "owner", send: async () => {} });
    await restored.load();
    await assert.rejects(restored.mutate("select_exam", { examId: "foundations" }), /Confirm exiting/);
    let state = await restored.mutate("select_exam", { examId: "foundations", confirmExit: true });
    assert.equal(state.attempt.id, firstState.attempt.id);
    assert.equal(state.attempt.entries[0].selected, 2);
    assert.equal(state.attempt.entries[0].unchecked, true);
    assert.deepEqual(state.attempt.review.flagged, [first]);
    state = await restored.mutate("select_exam", { examId: "copilot" });
    assert.equal(state.attempt.mode, "exam");
});
test("coaching callbacks remain bound to their exam when learner switches certification", async t => {
    const { engine, sent } = await fixture(t);
    await engine.mutate("start", { mode: "coach" });
    await engine.mutate("hint", { questionId: first, message: "Help me distinguish enforcement." });
    const requestId = sent[0].prompt.match(/requestId="([^"]+)"/)[1];
    await engine.mutate("select_exam", { examId: "copilot" });
    await engine.mutate("start", { mode: "learn" });
    assert.equal((await engine.complete({ requestId, text: "Which options enforce rather than document?" }, { sessionId: "owner" })).resultType, undefined);
    const state = await engine.mutate("select_exam", { examId: "foundations" });
    assert.equal(state.attempt.entries[0].messages.at(-1).role, "coach");
});
test("explicit certification exit submits once and preserves the early-exit reason", async t => {
    let now = 100;
    const { engine, directory } = await fixture(t, { now: () => now });
    await engine.mutate("start", { mode: "exam" });
    await engine.mutate("select_exam", { examId: "copilot", confirmExit: true });
    now += 360001;
    await engine.getState();
    const saved = JSON.parse(await readFile(path.join(directory, "coach-state.json")));
    assert.equal(saved.attempts.foundations.submitted, true);
    assert.equal(saved.attempts.foundations.expired, false);
    assert.equal(saved.history.foundations[0].reason, "exit");
    assert.equal(saved.history.foundations.length, 1);
});
test("legacy prototype migrates without changing selected answers, key or deadline", async t => {
    const { directory } = await fixture(t);
    const legacy = {
        version: 1, id: "legacy", mode: "exam", deadline: Date.now() + 360000, submitted: false,
        entries: questions.map(question => ({ id: question.id, answers: [0], messages: [], flagged: true })),
    };
    await writeFile(path.join(directory, "prototype-attempt.json"), JSON.stringify(legacy));
    const engine = createEngine({ directory, catalog, sessionId: () => "owner", send: async () => {} });
    await engine.load();
    const state = await engine.getState();
    assert.equal(state.attempt.legacy, true);
    assert.equal(state.attempt.deadline, legacy.deadline);
    assert.equal(state.attempt.entries[0].selected, 0);
    assert.equal(state.attempt.review.flagged.length, 4);
    assert.equal(JSON.parse(await readFile(path.join(directory, "prototype-attempt.json"))).id, "legacy");
});
test("domain scores and original answer snapshots survive bank revision", async t => {
    const { engine, directory } = await fixture(t);
    await engine.mutate("start", { mode: "exam" });
    await engine.mutate("answer", { questionId: first, choice: 1 });
    const changedCatalog = structuredClone(catalog);
    changedCatalog[0].questions[0].correct = 0;
    const restored = createEngine({ directory, catalog: changedCatalog, sessionId: () => "owner", send: async () => {} });
    await restored.load();
    const state = await restored.mutate("finish");
    assert.equal(state.attempt.score.percentage, 25);
    assert.equal(state.attempt.score.domains[0].correct, 1);
    assert.equal(state.attempt.score.domains[0].total, 1);
});
test("revision-specific human approval persists and invalidates on substantive changes", async t => {
    const { engine, directory } = await fixture(t);
    const inspected = await engine.mutate("inspect_question", { examId: "foundations", questionIndex: 0 });
    assert.equal(inspected.approved, false);
    await assert.rejects(engine.mutate("review_question", { examId: "foundations", questionId: first, revision: "old", decision: "approve" }), /revision changed/);
    let state = await engine.mutate("review_question", { examId: "foundations", questionId: first, revision: inspected.revision, decision: "approve" });
    assert.equal(state.catalog[0].reviewedCount, 1);
    await engine.mutate("start", { mode: "exam" });
    await assert.rejects(engine.mutate("inspect_question", { examId: "foundations", questionIndex: 0 }), /Finish/);
    const changed = structuredClone(catalog);
    changed[0].questions[0].hints[0] += " Changed.";
    assert.notEqual(revisionFor(changed[0].questions[0]), inspected.revision);
    const restored = createEngine({ directory, catalog: changed, send: async () => {}, sessionId: () => "owner" });
    await restored.load();
    state = await restored.getState();
    assert.equal(state.catalog[0].reviewedCount, 0);
    assert.equal(state.catalog[0].status, "Preview");
});
test("bundled approval records travel with banks but local revocation wins", async t => {
    const defaults = { [first]: { en: { revision: reviewRevisionFor(questions[0]), approvedAt: "2026-10-20T00:00:00.000Z" } } };
    const { engine, directory } = await fixture(t, { reviewDefaults: defaults });
    assert.equal((await engine.getState()).catalog[0].reviewedCount, 1);
    await engine.mutate("review_question", { examId: "foundations", questionId: first,
        revision: defaults[first].en.revision, decision: "revoke" });
    const restored = createEngine({ directory, catalog, reviewDefaults: defaults, send: async () => {}, sessionId: () => "owner" });
    await restored.load();
    assert.equal((await restored.getState()).catalog[0].reviewedCount, 0);
});
test("weighted sampling uses largest remainders, has no repeats and rejects incomplete banks", () => {
    assert.deepEqual(quotasFor([{ name: "A", weight: 30 }, { name: "B", weight: 70 }], 75),
        [{ name: "A", count: 23 }, { name: "B", count: 52 }]);
    const exam = catalog[0];
    const sampled = assemble(exam, { mode: "exam", random: stableRandom });
    assert.equal(new Set(sampled.map(question => question.id)).size, 4);
    assert.equal(validateBank(exam).length, 0);
    assert.throws(() => assemble({ ...exam, questions: questions.slice(0, 2) }, { mode: "exam" }), /full-length/);
    assert.equal(publicExam(exam).status, "Preview");
});
test("failed persistence cannot turn an unsaved selection into a successful state", async t => {
    const { engine, directory } = await fixture(t);
    await engine.mutate("start", { mode: "exam" });
    const stateFile = path.join(directory, "coach-state.json");
    await rm(stateFile);
    await mkdir(stateFile);
    await assert.rejects(engine.mutate("select", { questionId: first, choice: 1 }));
    assert.equal((await engine.getState()).attempt.entries[0].selected, undefined);
});
test("all six preview banks meet exact pool targets and every sampled exam meets its blueprint", () => {
    assert.equal(exams.length, 6);
    for (const exam of exams) {
        assert.equal(exam.questions.length, 225, exam.id);
        assert.deepEqual(validateBank(exam), [], exam.id);
        assert.equal(exam.minutes, exam.id === "agentic" ? 120 : 100);
        assert.equal(publicExam(exam).status, "Preview");
        for (let run = 0; run < 10; run++) {
            const sample = assemble(exam, { mode: "exam" });
            assert.equal(sample.length, 75);
            assert.equal(new Set(sample.map(question => question.id)).size, 75);
            for (const domain of exam.domains) {
                const percent = sample.filter(question => question.domain === domain.name).length / 75 * 100;
                assert.ok(percent >= domain.min && percent <= domain.max, `${exam.id}: ${domain.name} ${percent}%`);
            }
        }
    }
});
test("all six real full-length attempts persist independently with their original sampled order", async t => {
    const { engine, directory } = await fixture(t, { catalog: exams });
    const attempts = new Map();
    for (const exam of exams) {
        let state = await engine.mutate("start", { examId: exam.id, mode: "exam", confirmExit: true });
        assert.equal(state.attempt.entries.length, 75);
        assert.equal(state.attempt.review.unanswered.length, 75);
        const questionId = state.attempt.entries[0].id;
        state = await engine.mutate("select", { questionId, choice: 0 });
        assert.equal(state.attempt.review.unanswered.length, 74);
        attempts.set(exam.id, state.attempt);
    }
    const restored = createEngine({ directory, send: async () => {}, sessionId: () => "owner" });
    await restored.load();
    for (const [examId, attempt] of attempts) {
        const state = await restored.mutate("select_exam", { examId, confirmExit: true });
        assert.equal(state.attempt.id, attempt.id);
        assert.deepEqual(state.attempt.entries.map(question => question.id), attempt.entries.map(question => question.id));
        assert.equal(state.attempt.entries[0].selected, 0);
        assert.equal(state.attempt.review.unanswered.length, 74);
    }
});
test("timeout is explicit; exam expiry locks answers and preserves results", async t => {
    let now = 100;
    const { engine } = await fixture(t, { now: () => now });
    await engine.mutate("start", { mode: "coach" });
    await engine.mutate("hint", { questionId: first, message: "What am I missing?" });
    now += 120001;
    assert.match((await engine.getState()).attempt.entries[0].error, /timed out/);
    await engine.mutate("start", { mode: "exam" });
    now += 6 * 60000;
    assert.equal((await engine.getState()).attempt.finished, true);
    const expiredSubmission = await engine.mutate("finish");
    assert.equal(expiredSubmission.attempt.expired, true);
    await assert.rejects(engine.mutate("answer", { questionId: first, choice: 1 }));
});
test("provider failures surface instead of manufacturing a hint", async t => {
    const { engine } = await fixture(t, { send: async () => { throw new Error("offline"); } });
    await engine.mutate("start", { mode: "coach" });
    await engine.mutate("hint", { questionId: first, message: "Explain enforcement." });
    await new Promise(resolve => setImmediate(resolve));
    const state = await engine.getState();
    assert.equal(state.attempt.entries[0].pending, false);
    assert.match(state.attempt.entries[0].error, /could not accept/);
    assert.equal(state.attempt.entries[0].messages.filter(message => message.role === "coach").length, 0);
});
test("HTTP capability authentication, origin checks, input limits and page CSP", async t => {
    const { engine } = await fixture(t);
    const server = await startServer({ engine });
    t.after(server.close);
    const url = new URL(server.url);
    const token = url.searchParams.get("token");
    const headers = { "x-coach-token": token, "Content-Type": "application/json" };
    assert.equal((await fetch(`${url.origin}/api/state`)).status, 403);
    const page = await fetch(url);
    assert.equal(page.status, 200);
    assert.match(page.headers.get("content-security-policy"), /default-src 'none'/);
    assert.ok(!(await page.text()).includes("__NONCE__"));
    assert.equal((await fetch(`${url.origin}/i18n.mjs`)).status, 403);
    const translations = await fetch(`${url.origin}/i18n.mjs?token=${token}`);
    assert.equal(translations.status, 200);
    assert.match(await translations.text(), /export function translate/);
    for (const file of ["markdown.mjs", "vendor/markdown-parser.mjs"]) {
        assert.equal((await fetch(`${url.origin}/${file}`)).status, 403);
        const module = await fetch(`${url.origin}/${file}?token=${token}`);
        assert.equal(module.status, 200);
        assert.match(module.headers.get("content-type"), /text\/javascript/);
        assert.ok((await module.text()).length > 100);
    }
    assert.equal((await fetch(`${url.origin}/vendor/unknown.mjs?token=${token}`)).status, 404);
    assert.equal((await fetch(`${url.origin}/api/state`, { headers: { ...headers, Origin: "https://attacker.example" } })).status, 403);
    const post = body => fetch(`${url.origin}/api/action`, { method: "POST", headers, body });
    assert.equal((await post("{")).status, 400);
    assert.equal((await post(" ".repeat(9000))).status, 413);
    assert.equal((await post(JSON.stringify({ action: "start", mode: "exam" }))).status, 200);
    const state = await (await fetch(`${url.origin}/api/state`, { headers })).json();
    assert.ok(state.attempt.entries.every(entry => !("correctAnswer" in entry)));
    assert.equal((await post(JSON.stringify({ action: "answer", questionId: first, choice: -1 }))).status, 400);
    assert.equal((await post(JSON.stringify({ action: "start", mode: "coach" }))).status, 400);
});
