import { test } from "node:test";
import assert from "node:assert/strict";
import { createEngine } from "../engine-core.mjs";
import { createLiteAPI } from "../lite-api.mjs";
import { questions } from "../questions.mjs";

function fixture() {
    let contents;
    const sent = [];
    const catalog = ["foundations", "copilot"].map(id => ({
        id, name: id, attemptSize: 4, minutes: 6, resources: [],
        questions: structuredClone(questions).map(question => ({ ...question, id: `${id}-${question.id}` })),
        domains: [...new Set(questions.map(question => question.domain))].map(name => ({ name, weight: 25, resources: [] })),
    }));
    const persistence = {
        async read(name) { if (name === "coach-state.json") return contents; },
        async write(value) {
            if (persistence.fail) throw new Error("Disk full");
            contents = value;
        },
    };
    const options = { persistence, catalog, sessionId: () => "owner",
        random: max => max - 1, send: async value => sent.push(value) };
    const snapshot = () => JSON.parse(contents);
    async function open(current = catalog) {
        const engine = createEngine({ ...options, catalog: current });
        await engine.load();
        return engine;
    }
    const revised = () => {
        const next = structuredClone(catalog);
        next[0].questions[1].prompt += " Revised scenario.";
        next[0].questions[1].correct = (next[0].questions[1].correct + 1) % 4;
        next[0].questions.splice(2, 1);
        next[0].questions.push({ ...structuredClone(next[0].questions[0]), id: "new-question" });
        next[0].questions.reverse();
        return next;
    };
    return { persistence, sent, catalog, snapshot, open, revised, options };
}
const requestId = message => message.prompt.match(/requestId="([^"]+)"/)[1];

test("study upgrades keep only identical revisions, archive the complete previous workspace, and survive restart", async () => {
    const f = fixture();
    const engine = await f.open();
    const [unchanged, revised, removed] = f.catalog[0].questions;
    await engine.mutate("start", { mode: "learn", examId: "copilot" });
    await engine.mutate("answer", { questionId: f.catalog[1].questions[0].id, choice: 0 });
    await engine.mutate("start", { mode: "exam", examId: "foundations" });
    await engine.mutate("finish");
    await engine.mutate("start", { mode: "learn" });
    await engine.mutate("answer", { questionId: unchanged.id, choice: unchanged.correct });
    await engine.mutate("flag", { questionId: unchanged.id });
    await engine.mutate("select", { questionId: revised.id, choice: revised.correct });
    await engine.mutate("answer", { questionId: removed.id, choice: 0 });
    await engine.mutate("position", { questionId: revised.id });
    await engine.mutate("study_filter", { domain: revised.domain, filter: "flagged" });
    const before = f.snapshot();
    const currentCatalog = f.revised();
    const current = await f.open(currentCatalog);
    let state = await current.getState();
    assert.deepEqual(state.studyUpdate, { available: true, unchanged: 2, revised: 1, added: 1, removed: 1 });
    assert.deepEqual(f.snapshot(), before, "notices and reopening never migrate automatically");
    assert.equal(state.attempt.entries.find(entry => entry.id === revised.id).prompt, revised.prompt);
    state = await current.mutate("update_study", { attemptId: state.attempt.id });
    const updated = f.snapshot();
    assert.equal(state.studyUpdate.available, false);
    assert.notEqual(state.attempt.id, before.studies.foundations.id);
    assert.equal(state.attempt.position, revised.id);
    assert.equal(state.attempt.progress.answered, 1);
    assert.equal(state.attempt.progressFilter, "flagged");
    assert.equal(state.studyArchives.length, 1);
    assert.equal(state.studyArchives[0].answered, 2);
    assert.equal(state.studyArchives[0].snapshot, undefined, "state exposes metadata, not archived answer keys");
    const entries = updated.studies.foundations.entries;
    assert.deepEqual(entries.find(entry => entry.id === unchanged.id), before.studies.foundations.entries[0]);
    assert.deepEqual(entries.find(entry => entry.id === revised.id), { id: revised.id, answers: [], messages: [], flagged: false });
    assert.equal(entries.some(entry => entry.id === removed.id), false);
    assert.deepEqual(entries.find(entry => entry.id === "new-question").answers, []);
    assert.deepEqual(updated.studyArchives.foundations[0].snapshot, before.studies.foundations);
    assert.deepEqual(updated.mocks, before.mocks);
    assert.deepEqual(updated.history, before.history);
    assert.deepEqual(updated.studies.copilot, before.studies.copilot);
    const restarted = await f.open(currentCatalog);
    assert.deepEqual((await restarted.getState()).studyArchives, state.studyArchives);
    f.persistence.fail = true;
    const item = await restarted.mutate("inspect_study_archive", { archiveId: state.studyArchives[0].id, questionIndex: 1 });
    f.persistence.fail = false;
    assert.equal(item.question.prompt, revised.prompt);
    assert.equal(item.question.correct, revised.correct, "archive keeps the previous answer key");
    assert.equal(item.entry.draft, revised.correct);
    await assert.rejects(restarted.mutate("update_study"), /already uses the current/);
    assert.equal(f.snapshot().studyArchives.foundations.length, 1);
    await restarted.mutate("reset_study", { confirm: true });
    assert.deepEqual(f.snapshot().studyArchives, updated.studyArchives, "reset does not erase existing archives");
});

test("updates preserve completed coaching on unchanged content, reject stale jobs, and roll back completely on save failure", async () => {
    const f = fixture();
    const engine = await f.open();
    const [unchanged, revised] = f.catalog[0].questions;
    await engine.mutate("start", { mode: "coach" });
    await engine.mutate("hint", { questionId: unchanged.id, message: "My saved reasoning" });
    await engine.complete({ requestId: requestId(f.sent.at(-1)), text: "A saved conceptual hint" }, { sessionId: "owner" });
    await engine.mutate("hint", { questionId: unchanged.id, message: "A pending follow-up" });
    const keptJob = requestId(f.sent.at(-1));
    await engine.mutate("reveal", { questionId: revised.id });
    await engine.mutate("explain", { questionId: revised.id });
    const replacedJob = requestId(f.sent.at(-1));
    const before = f.snapshot();
    Object.assign(f.catalog[0], f.revised()[0]);
    const oldState = structuredClone(await engine.getState());
    f.persistence.fail = true;
    await assert.rejects(engine.mutate("update_study"), /Disk full/);
    assert.deepEqual(f.snapshot(), before);
    assert.deepEqual(await engine.getState(), oldState, "no unsaved migration is acknowledged");
    f.persistence.fail = false;
    await engine.complete({ requestId: keptJob, text: "Still bound after failed migration" }, { sessionId: "owner" });
    const state = await engine.mutate("update_study", { attemptId: oldState.attempt.id });
    assert.equal(state.attempt.entries.find(entry => entry.id === unchanged.id).messages.at(-1).text, "Still bound after failed migration");
    assert.equal((await engine.completeInsight({ requestId: replacedJob, text: "Late explanation" }, { sessionId: "owner" })).resultType, "rejected");
    await assert.rejects(engine.mutate("flag", { attemptId: oldState.attempt.id, questionId: unchanged.id }), /out of date/);
    const archived = await engine.mutate("inspect_study_archive", { archiveId: state.studyArchives[0].id, questionIndex: 1 });
    assert.equal(archived.entry.insight.pending, undefined);
    assert.match(archived.entry.insight.error, /interrupted/);
});

test("translation-only changes count as revisions; archives localize old content and remain protected during mocks", async () => {
    const f = fixture();
    const engine = await f.open();
    const old = f.catalog[0].questions[0];
    old.translations = { es: { prompt: "Pregunta anterior", choices: old.choices, explanations: old.explanations, hints: old.hints, concept: old.concept } };
    await engine.mutate("start", { mode: "learn" });
    await engine.mutate("answer", { questionId: old.id, choice: old.correct });
    const changed = structuredClone(f.catalog);
    changed[0].questions[0].translations.es.prompt = "Pregunta revisada";
    const current = await f.open(changed);
    assert.equal((await current.getState()).studyUpdate.revised, 1);
    const updated = await current.mutate("update_study");
    assert.equal(updated.attempt.entries[0].checked, false);
    await current.mutate("set_language", { language: "es" });
    const input = { archiveId: updated.studyArchives[0].id, questionIndex: 0 };
    assert.equal((await current.mutate("inspect_study_archive", input)).question.prompt, "Pregunta anterior");
    await current.mutate("set_language", { language: "pt-BR" });
    const fallback = await current.mutate("inspect_study_archive", input);
    assert.equal(fallback.contentLanguage, "en");
    assert.equal(fallback.question.prompt, old.prompt);
    const mock = await current.mutate("start", { mode: "exam" });
    await current.mutate("select", { questionId: old.id, choice: old.correct });
    await assert.rejects(current.mutate("inspect_study_archive", input), /Finish this certification/);
    await assert.rejects(current.mutate("update_study"), /only in study modes/);
    const live = await current.getState();
    assert.equal(live.studyUpdate, null);
    assert.equal(live.attempt.deadline, mock.attempt.deadline);
    assert.equal(live.attempt.entries[0].correctAnswer, undefined);
    assert.equal(live.attempt.entries[0].selected, old.correct);
    await current.mutate("finish");
    assert.equal((await current.mutate("inspect_study_archive", input)).question.prompt, old.prompt);
    for (const invalid of [-1, 4, 0.5]) await assert.rejects(
        current.mutate("inspect_study_archive", { ...input, questionIndex: invalid }), /valid archived/);
    await current.mutate("select_exam", { examId: "copilot" });
    await assert.rejects(current.mutate("inspect_study_archive", input), /valid archived/);
});

test("Lite updates and archive review persist through its cross-tab API without enabling AI or losing old state", async () => {
    const f = fixture();
    const locks = { request: async (_name, operation) => operation() };
    const api = createLiteAPI({ persistence: f.persistence, catalog: f.catalog, locks });
    await api("start", { mode: "learn" });
    const first = f.catalog[0].questions[0];
    await api("select", { questionId: first.id, choice: first.correct });
    const next = createLiteAPI({ persistence: f.persistence, catalog: f.revised(), locks });
    const state = await next("update_study");
    assert.equal(state.attempt.entries.find(entry => entry.id === first.id).unchecked, true);
    assert.equal(state.studyArchives.length, 1);
    assert.equal((await next("inspect_study_archive", { archiveId: state.studyArchives[0].id, questionIndex: 0 })).entry.draft, first.correct);
    await assert.rejects(next("hint"), /Lite supports/);
});
