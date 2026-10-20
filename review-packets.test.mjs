import { test } from "node:test";
import assert from "node:assert/strict";
import { renderPacket, collectApprovals } from "./review-packets.mjs";
import { revisionFor } from "./bank-utils.mjs";
import { readFile } from "node:fs/promises";

const variant = {
    prompt: "Which documented configuration enforces the intended policy?",
    choices: ["First", "Second", "Third", "Fourth"],
    explanations: ["First explanation.", "Second explanation.", "Third explanation.", "Fourth explanation."],
    concept: "Verify documented enforcement.", hints: ["Check the scope.", "Check the enforcement point."],
};
const question = { ...variant, id: "fixture-001", domain: "Test domain", correct: 1,
    source: "https://docs.github.com/en", translations: { es: { ...variant, prompt: "¿Qué configuración aplica la política?" },
        "pt-BR": { ...variant, prompt: "Qual configuração aplica a política?" } } };
const exam = { id: "fixture", name: "Fixture", questions: [question] };
const checked = packet => packet.replace("- [ ] Human-reviewed:", "- [x] Human-reviewed:");
test("review packets include full key, explanations, hints, translations, source, and an unchecked attestation", () => {
    const packet = renderPacket(exam);
    assert.match(packet, /2\. Second \*\*\[CORRECT\]\*\*/);
    assert.match(packet, /Second explanation/);
    assert.match(packet, /Check the enforcement point/);
    assert.match(packet, /¿Qué configuración/);
    assert.match(packet, /Qual configuração/);
    assert.match(packet, /https:\/\/docs.github.com\/en/);
    assert.match(packet, /- \[ \] Human-reviewed:/);
    assert.doesNotMatch(packet, /- \[x\] Human-reviewed:/);
});
test("only explicit human-confirmed checked items grant current multilingual approval", () => {
    const packet = renderPacket(exam);
    assert.throws(() => collectApprovals([checked(packet)], [exam], {}), /Human confirmation/);
    assert.deepEqual(collectApprovals([packet], [exam], {}, { confirmed: true }).records, {});
    const result = collectApprovals([checked(packet)], [exam], {}, { confirmed: true, now: () => 0 });
    assert.equal(result.count, 1);
    assert.deepEqual(result.records[question.id], { revision: revisionFor(question), approvedAt: "1970-01-01T00:00:00.000Z" });
});
test("stale translations, modified content, duplicated packets, and missing questions cannot grant approval", () => {
    const packet = checked(renderPacket(exam));
    const changed = structuredClone(exam);
    changed.questions[0].translations.es.prompt += " Otra revisión.";
    assert.throws(() => collectApprovals([packet], [changed], {}, { confirmed: true }), /revision changed/);
    assert.throws(() => collectApprovals([packet.replace("First explanation.", "Different explanation.")], [exam], {}, { confirmed: true }), /content was edited/);
    assert.throws(() => collectApprovals([packet, packet], [exam], {}, { confirmed: true }), /duplicate/);
    assert.throws(() => collectApprovals([packet.replace(/<!-- certification-coach-question:[^\n]+/, "")], [exam], {}, { confirmed: true }), /incomplete/);
});
test("unchecked boxes retain prior approvals and checked reimports preserve their original timestamp", () => {
    const original = { [question.id]: { revision: revisionFor(question), approvedAt: "2026-01-01T00:00:00.000Z" } };
    const packet = renderPacket(exam);
    assert.deepEqual(collectApprovals([packet], [exam], original, { confirmed: true }).records, original);
    assert.deepEqual(collectApprovals([checked(packet)], [exam], original, { confirmed: true }).records, original);
    assert.deepEqual(collectApprovals([packet.replace(/\n/g, "\r\n")], [exam], original, { confirmed: true }).records, original);
});
test("the six shareable packets match every current multilingual question revision", async () => {
    const { exams } = await import("./exams.mjs");
    for (const exam of exams) {
        const packet = await readFile(new URL(`./reviews/${exam.id}.md`, import.meta.url), "utf8");
        assert.equal(packet.replaceAll("- [x] Human-reviewed:", "- [ ] Human-reviewed:"), renderPacket(exam), exam.id);
        assert.equal((packet.match(/^<!-- certification-coach-question:/gm) ?? []).length, 225);
    }
});
