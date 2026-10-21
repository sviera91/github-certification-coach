import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile, rm, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createEngine, INSIGHT_TOOL } from "./engine.mjs";
import { questions } from "./questions.mjs";
import { exams } from "./exams.mjs";

const catalog = ["foundations", "copilot"].map(id => ({
    id, name: id, attemptSize: 4, minutes: 6, relaxedMinutes: 120,
    questions: questions.map(question => ({ ...question, id: `${id}-${question.id}` })),
    domains: [...new Set(questions.map(question => question.domain))].map(name => ({ name, weight: 25, resources: [] })),
    resources: [], blueprintNote: "Fixture",
}));
async function fixture(t, options = {}) {
    const directory = await mkdtemp(fileURLToPath(new URL("./.test-study-", import.meta.url)));
    t.after(() => rm(directory, { recursive: true, force: true }));
    const sent = [];
    const config = { directory, catalog, sessionId: () => "owner", random: max => max - 1,
        send: async value => sent.push(value), ...options };
    const engine = createEngine(config);
    await engine.load();
    return { engine, directory, sent, config };
}
const requestId = message => message.prompt.match(/requestId="([^"]+)"/)[1];
const first = catalog[0].questions[0];

test("50 checked questions persist across chunks, both study modes, a mock, and restart without a study grade", async t => {
    const { engine, config } = await fixture(t, { catalog: exams });
    const bank = exams[0].questions;
    const initial = await engine.mutate("start", { mode: "learn" });
    for (const question of bank.slice(0, 30)) await engine.mutate("answer", { questionId: question.id, choice: question.correct });
    await engine.mutate("position", { questionId: bank[29].id });
    let state = await engine.mutate("start", { mode: "coach" });
    assert.equal(state.attempt.id, initial.attempt.id);
    assert.equal(state.attempt.progress.answered, 30);
    assert.equal(state.attempt.entries[0].correctAnswer, bank[0].correct);
    for (const question of bank.slice(30, 50)) await engine.mutate("answer", { questionId: question.id, choice: question.correct });
    await engine.mutate("start", { mode: "exam" });
    await engine.mutate("finish");
    await engine.mutate("start", { mode: "coach" });
    const restored = createEngine(config);
    await restored.load();
    state = await restored.getState();
    assert.equal(state.attempt.progress.answered, 50);
    assert.equal(state.attempt.position, bank[29].id);
    assert.equal(state.attempt.entries.length, 225);
    assert.equal(state.attempt.finished, false);
    assert.equal(state.attempt.score, undefined);
    assert.equal(state.history.length, 1);
    await assert.rejects(restored.mutate("finish"), /not submitted or graded/);
});

test("filters, retry, answer exposure, flags, and drafts share one study history", async t => {
    const { engine, directory } = await fixture(t);
    await engine.mutate("start", { mode: "learn" });
    let state = await engine.mutate("answer", { questionId: first.id, choice: (first.correct + 1) % 4 });
    assert.equal(state.attempt.entries[0].previouslyIncorrect, true);
    await engine.mutate("flag", { questionId: first.id });
    state = await engine.mutate("start", { mode: "coach" });
    assert.equal(state.attempt.entries[0].correctAnswer, first.correct);
    state = await engine.mutate("retry_question", { questionId: first.id });
    assert.equal(state.attempt.entries[0].checked, true);
    assert.equal(state.attempt.entries[0].selected, undefined);
    assert.equal(state.attempt.entries[0].correctAnswer, undefined);
    await engine.mutate("select", { questionId: first.id, choice: first.correct });
    await engine.mutate("study_filter", { domain: first.domain, filter: "incorrect" });
    state = await engine.mutate("answer", { questionId: first.id, choice: first.correct });
    assert.equal(state.attempt.progress.answered, 1);
    assert.equal(state.attempt.entries[0].previouslyIncorrect, true);
    assert.equal(state.attempt.entries[0].flagged, true);
    const saved = JSON.parse(await readFile(path.join(directory, "coach-state.json")));
    assert.deepEqual(saved.studies.foundations.entries[0].answers, [(first.correct + 1) % 4, first.correct]);
    assert.equal(saved.studies.foundations.progressFilter, "incorrect");
    assert.equal(saved.studies.foundations.domainFilter, first.domain);
});

test("version 2 completed, domain-only study migrates exact saved answers and expands to the full pool", async t => {
    const { engine, directory, config } = await fixture(t);
    await engine.mutate("start", { mode: "learn" });
    await engine.mutate("answer", { questionId: first.id, choice: 0 });
    const file = path.join(directory, "coach-state.json");
    const saved = JSON.parse(await readFile(file));
    const attempt = saved.attempts.foundations;
    attempt.questions = attempt.questions.slice(0, 1);
    attempt.entries = attempt.entries.slice(0, 1);
    attempt.submitted = true;
    attempt.mode = "coach";
    delete attempt.entries[0].learnRevealed;
    delete attempt.position;
    await writeFile(file, JSON.stringify({ version: 2, selectedExamId: "foundations", language: "en",
        attempts: { foundations: attempt }, approvals: {} }));
    const restored = createEngine(config);
    await restored.load();
    const state = await restored.getState();
    assert.equal(state.attempt.id, attempt.id);
    assert.equal(state.attempt.progress.answered, 1);
    assert.equal(state.attempt.entries.length, 4);
    assert.equal(state.attempt.entries[0].selected, 0);
    assert.equal(state.attempt.entries[0].correctAnswer, first.correct);
    assert.equal(state.attempt.score, undefined);
    const migrated = JSON.parse(await readFile(file));
    assert.equal(migrated.version, 3);
    assert.deepEqual(migrated.studies.foundations.questions[0], attempt.questions[0]);
});

test("only confirmed resets clear the selected study, invalidate stale callbacks, and preserve other studies and mock history", async t => {
    const { engine, sent } = await fixture(t);
    await engine.mutate("start", { mode: "learn", examId: "copilot" });
    await engine.mutate("answer", { questionId: catalog[1].questions[0].id, choice: 0 });
    await engine.mutate("start", { mode: "exam", examId: "foundations" });
    await engine.mutate("finish");
    await engine.mutate("start", { mode: "coach" });
    await engine.mutate("answer", { questionId: first.id, choice: (first.correct + 1) % 4 });
    const id = requestId(sent[0]);
    const previous = await engine.getState();
    await assert.rejects(engine.mutate("reset_study"), /Confirm resetting/);
    const reset = await engine.mutate("reset_study", { confirm: true });
    assert.notEqual(reset.attempt.id, previous.attempt.id);
    assert.equal(reset.attempt.progress.answered, 0);
    assert.equal(reset.attempt.entries[0].messages.length, 0);
    assert.equal(reset.history.length, 1);
    assert.equal((await engine.complete({ requestId: id, text: "Late hint" }, { sessionId: "owner" })).resultType, "rejected");
    const other = await engine.mutate("select_exam", { examId: "copilot" });
    assert.equal(other.attempt.progress.answered, 1);
});

test("explicit exit grades, restart does not silently submit, timeout archives once, and history retains the latest 10", async t => {
    let clock = 1000;
    const { engine, config } = await fixture(t, { now: () => clock });
    let state = await engine.mutate("start", { mode: "exam" });
    const originalId = state.attempt.id;
    await engine.mutate("select", { questionId: first.id, choice: first.correct });
    await assert.rejects(engine.mutate("start", { mode: "learn" }), /Confirm exiting/);
    const restored = createEngine(config);
    await restored.load();
    state = await restored.getState();
    assert.equal(state.attempt.finished, false);
    assert.equal(state.attempt.id, originalId);
    clock += 360001;
    state = await restored.getState();
    assert.equal(state.history[0].reason, "timeout");
    assert.equal(state.history[0].score.percentage, 25);
    assert.equal((await restored.getState()).history.length, 1);
    for (let index = 0; index < 11; index++) {
        state = await restored.mutate("start", { mode: "exam", relaxed: index === 10 });
        assert.notEqual(state.attempt.id, originalId);
        await restored.mutate("start", { mode: "learn", confirmExit: true });
        clock++;
    }
    state = await restored.getState();
    assert.equal(state.history.length, 10);
    assert.equal(state.history[0].reason, "exit");
    assert.equal(state.history[0].relaxed, true);
    assert.equal(state.history[0].score.percentage, 0);
    assert.equal(state.history.some(result => result.id === originalId), false);
    assert.ok(state.history[0].submittedAt > state.history[9].submittedAt);
    const restarted = createEngine(config);
    await restarted.load();
    assert.deepEqual((await restarted.getState()).history, state.history);
});

test("on-demand explanations are gated, separately bound, language-captured, cancellable, and persistent", async t => {
    const { engine, sent, config } = await fixture(t);
    await engine.mutate("start", { mode: "exam" });
    await assert.rejects(engine.mutate("explain", { questionId: first.id }), /Reveal the answer/);
    assert.equal(sent.length, 0);
    await engine.mutate("finish");
    await engine.mutate("set_language", { language: "es" });
    await engine.mutate("explain", { questionId: first.id });
    const id = requestId(sent[0]);
    assert.match(sent[0].prompt, new RegExp(INSIGHT_TOOL));
    assert.match(sent[0].prompt, /never invent section headings/);
    assert.match(sent[0].prompt, /Latin American Spanish/);
    assert.equal((await engine.complete({ requestId: id, text: "Wrong tool" }, { sessionId: "owner" })).resultType, "rejected");
    assert.equal((await engine.completeInsight({ requestId: id, text: "Wrong session" }, { sessionId: "other" })).resultType, "rejected");
    await engine.mutate("set_language", { language: "pt-BR" });
    await engine.completeInsight({ requestId: id, text: "Una explicación con ejemplo." }, { sessionId: "owner" });
    const restored = createEngine(config);
    await restored.load();
    let state = await restored.getState();
    assert.equal(state.attempt.entries[0].insight.language, "es");
    assert.equal(state.attempt.entries[0].insight.text, "Una explicación con ejemplo.");
    assert.equal(state.attempt.score.percentage, 0);
    await engine.mutate("start", { mode: "coach" });
    await assert.rejects(engine.mutate("explain", { questionId: first.id }), /Reveal the answer/);
    await engine.mutate("reveal", { questionId: first.id });
    await engine.mutate("explain", { questionId: first.id });
    const late = requestId(sent.at(-1));
    await engine.mutate("retry_question", { questionId: first.id });
    assert.equal((await engine.completeInsight({ requestId: late, text: "Late answer" }, { sessionId: "owner" })).resultType, "rejected");
    state = await engine.getState();
    assert.equal(state.attempt.entries[0].insight, undefined);
});

test("mock study-plan prompts exclude coaching conversations, stay with their result, and reject stale pruned delivery", async t => {
    const { engine, sent, config } = await fixture(t);
    await engine.mutate("start", { mode: "coach" });
    await engine.mutate("hint", { questionId: first.id, message: "PRIVATE LEARNER REASONING" });
    await engine.mutate("start", { mode: "exam" });
    const result = await engine.mutate("finish");
    const id = result.history[0].id;
    await engine.mutate("guidance", { resultId: id });
    const request = sent.at(-1);
    assert.doesNotMatch(request.prompt, /PRIVATE LEARNER REASONING|conversation|coach-state\.json/);
    assert.match(request.prompt, /not an official scaled score/);
    await engine.mutate("start", { mode: "learn", examId: "copilot" });
    await engine.completeInsight({ requestId: requestId(request), text: "Review the weakest domain using its official resources." }, { sessionId: "owner" });
    const restored = createEngine(config);
    await restored.load();
    let state = await restored.mutate("select_exam", { examId: "foundations" });
    assert.equal(state.history[0].guidance.text, "Review the weakest domain using its official resources.");
    await engine.mutate("select_exam", { examId: "foundations" });
    await engine.mutate("guidance", { resultId: id });
    const stale = requestId(sent.at(-1));
    for (let index = 0; index < 10; index++) {
        await engine.mutate("start", { mode: "exam" });
        await engine.mutate("finish");
    }
    assert.equal((await engine.completeInsight({ requestId: stale, text: "Pruned" }, { sessionId: "owner" })).resultType, "rejected");
    state = await engine.getState();
    assert.equal(state.history.some(result => result.id === id), false);
});

test("AI request errors, expiry, restarts, and failed reset persistence remain retryable without acknowledging unsaved changes", async t => {
    let clock = 0;
    let rejectSend = true;
    const { engine, directory, config, sent } = await fixture(t, { now: () => clock,
        send: async value => { if (rejectSend) throw new Error("Offline"); sent.push(value); } });
    await engine.mutate("start", { mode: "learn" });
    await engine.mutate("answer", { questionId: first.id, choice: first.correct });
    await engine.mutate("explain", { questionId: first.id });
    await new Promise(resolve => setImmediate(resolve));
    let state = await engine.getState();
    assert.match(state.attempt.entries[0].insight.error, /could not accept/);
    rejectSend = false;
    await engine.mutate("explain", { questionId: first.id });
    clock += 120001;
    assert.match((await engine.getState()).attempt.entries[0].insight.error, /timed out/);
    await engine.mutate("explain", { questionId: first.id });
    const pending = requestId(sent.at(-1));
    const file = path.join(directory, "coach-state.json");
    await rm(file);
    await mkdir(file);
    await assert.rejects(engine.mutate("reset_study", { confirm: true }));
    await rm(file, { recursive: true });
    assert.equal((await engine.getState()).attempt.progress.answered, 1);
    assert.equal((await engine.completeInsight({ requestId: pending, text: "Still bound after failed save." }, { sessionId: "owner" })).resultType, undefined);
    await engine.mutate("explain", { questionId: first.id });
    const restored = createEngine(config);
    await restored.load();
    state = await restored.getState();
    assert.equal(state.attempt.entries[0].insight.pending, undefined);
    assert.match(state.attempt.entries[0].insight.error, /interrupted/);
});

test("malformed version 3 workspace buckets, exam associations, references, and history are rejected", async t => {
    const { engine, directory, config } = await fixture(t);
    await engine.mutate("start", { mode: "exam" });
    await engine.mutate("finish");
    await engine.mutate("start", { mode: "learn" });
    const file = path.join(directory, "coach-state.json");
    const valid = JSON.parse(await readFile(file));
    for (const change of [
        saved => { saved.studies = []; },
        saved => { saved.mocks.foundations.examId = "copilot"; },
        saved => { saved.studies.foundations.mode = "exam"; },
        saved => { saved.studies.foundations.id = "wrong-link"; },
        saved => { saved.history.foundations[0].score.percentage = 101; },
        saved => { saved.history.foundations[0].score.domains = null; },
    ]) {
        const saved = structuredClone(valid);
        change(saved);
        await writeFile(file, JSON.stringify(saved));
        await assert.rejects(createEngine(config).load(), /Invalid/);
    }
});
