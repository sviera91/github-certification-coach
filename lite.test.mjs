import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash as nodeHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { parseHTML } from "linkedom";
import { createLiteAPI } from "./lite-api.mjs";
import { createHash, randomInt } from "./web/crypto.mjs";
import { exams } from "./exams.mjs";

await import("./build-pages.mjs");
const { createLiteAPI: bundledAPI } = await import("./_site/lite/lite-api.mjs");

function fixture(factory = createLiteAPI, options = {}) {
    let tail = Promise.resolve();
    const files = new Map();
    const persistence = {
        async read(name) { return files.get(name); },
        async write(contents) {
            if (persistence.fail) throw new Error("Storage quota exceeded.");
            files.set("coach-state.json", contents);
        },
    };
    const locks = { request(name, operation) {
        assert.equal(name, "github-certification-coach-lite-state");
        const next = tail.then(operation);
        tail = next.catch(() => {});
        return next;
    } };
    return { persistence, locks, api: factory({ persistence, locks, catalog: [exams[0]], ...options }) };
}

test("browser SHA-256 revisions match Node, including multilingual inputs", () => {
    for (const input of ["", "GitHub", "Español / Português / \u{1f680}", JSON.stringify(exams[0].questions[0])]) {
        assert.equal(createHash("sha256").update(input).digest("hex"), nodeHash("sha256").update(input).digest("hex"));
    }
    for (const bound of [1, 2, 75, 225, 0x100000000]) {
        for (let count = 0; count < 30; count++) {
            const value = randomInt(bound);
            assert.ok(Number.isInteger(value) && value >= 0 && value < bound);
        }
    }
    assert.throws(() => randomInt(0), RangeError);
});

test("Lite explicitly rejects all AI and local approval operations", async () => {
    const { api } = fixture();
    for (const action of ["hint", "explain", "guidance", "inspect_question", "review_question", "reveal"]) {
        await assert.rejects(api(action), /Lite supports Mock exam and Learn only/);
    }
    await assert.rejects(api("start", { mode: "coach" }), /Lite supports/);
    await assert.rejects(createLiteAPI({ locks: null })(), /Web Locks/);
});

test("Learn preserves unchecked selections, checks, filters, retries and flags after reload", async () => {
    const { api, persistence, locks } = fixture();
    let state = await api("start", { mode: "learn" });
    const question = state.attempt.entries[0];
    const source = exams[0].questions.find(item => item.id === question.id);
    state = await api("select", { questionId: question.id, choice: source.correct });
    assert.equal(state.attempt.entries[0].unchecked, true);
    assert.equal(state.attempt.entries[0].correctAnswer, undefined);
    const reload = createLiteAPI({ persistence, locks, catalog: [exams[0]] });
    state = await reload();
    assert.equal(state.attempt.entries[0].selected, source.correct);
    state = await reload("answer", { questionId: question.id, choice: source.correct });
    assert.equal(state.attempt.entries[0].correct, true);
    assert.deepEqual(state.attempt.entries[0].explanations, source.explanations);
    assert.equal(state.attempt.score, undefined);
    await reload("flag", { questionId: question.id });
    await reload("study_filter", { domain: "", filter: "flagged" });
    state = await api();
    assert.equal(state.attempt.progressFilter, "flagged");
    assert.equal(state.attempt.entries[0].flagged, true);
    state = await api("retry_question", { questionId: question.id });
    assert.equal(state.attempt.entries[0].correctAnswer, undefined);
    assert.equal(state.attempt.entries[0].checked, true);
    await api("set_language", { language: "es" });
    state = await api();
    assert.equal(state.attempt.entries[0].prompt, source.translations.es.prompt);
});

test("mock uses unique balanced sampling and grades only the last saved choice after timeout", async () => {
    let now = 100000;
    const { api } = fixture(createLiteAPI, { now: () => now });
    let state = await api("start", { mode: "exam" });
    const attempt = state.attempt;
    assert.equal(attempt.entries.length, 75);
    assert.equal(new Set(attempt.entries.map(question => question.id)).size, 75);
    const question = attempt.entries[0];
    const source = exams[0].questions.find(item => item.id === question.id);
    await api("select", { questionId: question.id, choice: (source.correct + 1) % 4 });
    state = await api("select", { questionId: question.id, choice: source.correct });
    assert.equal(state.attempt.entries[0].correctAnswer, undefined);
    assert.equal(state.attempt.score, undefined);
    now = attempt.deadline + 1;
    state = await api();
    assert.equal(state.attempt.finished, true);
    assert.equal(state.attempt.score.firstAttempt, 1);
    assert.equal(state.attempt.score.total, 75);
    assert.equal(state.history[0].reason, "timeout");
});

test("independent tabs reload under one lock without losing saved answers; failures do not acknowledge writes", async () => {
    const { api, persistence, locks } = fixture();
    const initial = await api("start", { mode: "exam" });
    const other = createLiteAPI({ persistence, locks, catalog: [exams[0]] });
    const [first, second] = initial.attempt.entries;
    await Promise.all([
        api("select", { questionId: first.id, choice: 1 }),
        other("select", { questionId: second.id, choice: 2 }),
    ]);
    let state = await api();
    assert.equal(state.attempt.entries[0].selected, 1);
    assert.equal(state.attempt.entries[1].selected, 2);
    persistence.fail = true;
    await assert.rejects(api("select", { questionId: first.id, choice: 3 }), /Storage quota exceeded/);
    persistence.fail = false;
    state = await other();
    assert.equal(state.attempt.entries[0].selected, 1);
});

test("the browser bundle runs the same engine and produces identical content revisions", async () => {
    const { api } = fixture(bundledAPI);
    const native = fixture().api;
    const actual = await api("start", { mode: "learn" });
    const expected = await native("start", { mode: "learn" });
    assert.deepEqual(actual.catalog, expected.catalog);
    assert.deepEqual(actual.attempt.entries, expected.attempt.entries);
});

test("Pages output uses relative assets, disables desktop-only controls, and publishes only public files", async () => {
    const { document } = parseHTML(await readFile(new URL("./_site/lite/index.html", import.meta.url), "utf8"));
    assert.equal(document.documentElement.dataset.edition, "lite");
    assert.equal(document.querySelector('script[type="module"]').getAttribute("src"), "./client.mjs");
    assert.ok(document.querySelector('[data-mode="coach"]').classList.contains("desktop-only"));
    assert.ok(document.querySelector("#explain-further").classList.contains("desktop-only"));
    assert.ok(document.querySelector("#bank-review").classList.contains("desktop-only"));
    assert.equal(document.querySelector("#content-review").classList.contains("desktop-only"), true);
    assert.ok(!document.toString().includes("__TOKEN__"));
    assert.ok(!document.toString().includes("__NONCE__"));
    const files = await readdir(new URL("./_site/", import.meta.url));
    assert.deepEqual(files.sort(), [".nojekyll", "LICENSE", "LICENSES.txt", "THIRD-PARTY-NOTICES.md",
        "index.html", "landing.css", "lite", "theme.css", "theme.js"].sort());
    const landing = await readFile(new URL("./_site/index.html", import.meta.url), "utf8");
    assert.match(landing, /AI-created questions. Human validation needed/);
    assert.match(landing, /future ideas, not shipped features/);
    assert.match(landing, /href="lite\/"/);
    assert.doesNotMatch(landing, /127\.0\.0\.1|token=/);
});
