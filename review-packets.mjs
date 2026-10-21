import { mkdir, readFile, writeFile, rename, rm, access } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { revisionFor, reviewRevisionFor, approved, localizedQuestion } from "./bank-utils.mjs";

export const acknowledgments = {
    en: "- [ ] English content approved: I verified the question, choices, correct answer, explanations, concept, hints, and supporting documentation.",
    es: "- [ ] Spanish translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.",
    "pt-BR": "- [ ] Brazilian Portuguese translation approved: I verified faithful translation of the approved English question, choices, answer explanations, concept, hints, and documentation references.",
};
const escape = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/([\\`*_[\]{}!|#])/g, "\\$1");
function variant(question, language, title) {
    const item = localizedQuestion(question, language);
    return [
        `### ${title}`, "", escape(item.prompt), "",
        ...item.choices.flatMap((choice, index) => [
            `${index + 1}. ${escape(choice)}${index === question.correct ? " **[CORRECT]**" : ""}`, "",
            `   ${escape(item.explanations[index])}`, "",
        ]),
        `**Concept:** ${escape(item.concept)}`, "", "**Authored coaching hints:**", "",
        ...item.hints.map(hint => `- ${escape(hint)}`), "",
    ].join("\n");
}
function section(question, index) {
    return [
        `<!-- certification-coach-question:${question.id}:${revisionFor(question)} -->`,
        `## Question ${index + 1}: ${escape(question.domain)}`, "",
        acknowledgments.en, "",
        acknowledgments.es, "",
        acknowledgments["pt-BR"], "",
        `**Question ID:** \`${question.id}\``, "",
        `**Content revision:** \`${revisionFor(question)}\``, "",
        ...["en", "es", "pt-BR"].map(language => `**${language} review revision:** \`${reviewRevisionFor(question, language)}\``), "",
        variant(question, "en", "English"),
        "<details>", "<summary>Español — same answer key and option order</summary>", "",
        variant(question, "es", "Español"), "</details>", "",
        "<details>", "<summary>Português (Brasil) — same answer key and option order</summary>", "",
        variant(question, "pt-BR", "Português (Brasil)"), "</details>", "",
        `**Official supporting source:** <${question.source}>`, "",
    ].join("\n");
}
export function renderPacket(exam) {
    return [
        `<!-- certification-coach-review:${exam.id}:2 -->`,
        `# ${exam.name}: human review packet`, "",
        `${exam.questions.length} original practice questions. No mock exam or Copilot installation is required to review this file.`, "",
        "## How to review", "",
        "1. Read the English question, all four choices and explanations, the concept, hints, and linked official documentation.",
        "2. Check English content approved only after personally verifying the English content. You do not need to review another language.",
        "3. A separate reviewer can expand Spanish or Brazilian Portuguese and check only that translation, verifying meaning, option order, explanations, hints, and documentation references against the approved English content.",
        "4. Leave uncertain or incorrect questions unchecked. Send the edited Markdown file back to the maintainer, with suggested corrections separately.", "",
        "English content and each translation have separate approvals. Translation approval requires current English approval, imported previously or checked in this same packet.",
        "Changing English content or its supporting source invalidates all three approvals. Changing one translation invalidates only that language's approval.",
        "The importer rejects stale revisions or changed question content. Do not edit prompts, answers, or explanations in this review copy.",
        "Unchecked boxes do not revoke existing approvals. These are honor-system human attestations, not proof of reviewer identity.",
        "AI must never check these boxes or attest to human review. These are original unofficial practice items, not real exam questions.",
        "This packet intentionally includes the full answer key. It contains no learner answers, scores, chats, or progress.", "",
        "Search for `- [ ] English content approved`, `- [ ] Spanish translation approved`, or `- [ ] Brazilian Portuguese translation approved` to find unchecked items.",
        "Technical names and official documentation links may remain in English. Translation review verifies that references support the same meaning; it does not require translating the linked external documentation.", "",
        ...exam.questions.map(section),
    ].join("\n");
}
export function collectApprovals(packets, catalog, existing, { confirmed = false, now = Date.now } = {}) {
    if (!confirmed) throw new Error("Human confirmation required: pass --confirm-human-review only for reviews actually performed by a person.");
    const records = structuredClone(existing);
    const seen = new Set();
    let count = 0;
    for (const raw of packets) {
        const packet = raw.replace(/\r\n/g, "\n");
        const examId = packet.match(/^<!-- certification-coach-review:([a-z0-9-]+):2 -->$/m)?.[1];
        const exam = catalog.find(item => item.id === examId);
        if (!exam) throw new Error("Unknown certification or review packet format.");
        const parts = [...packet.matchAll(/^<!-- certification-coach-question:([a-z0-9-]+):([a-f0-9]{64}) -->$/gm)];
        if (parts.length !== exam.questions.length) throw new Error(`${examId}: incomplete question packet.`);
        for (const [index, marker] of parts.entries()) {
            const question = exam.questions[index];
            const id = marker[1];
            if (id !== question.id || seen.has(id)) throw new Error(`${id}: duplicate, reordered, or unknown question.`);
            seen.add(id);
            if (marker[2] !== revisionFor(question)) throw new Error(`${id}: revision changed; regenerate and review the current question.`);
            const body = packet.slice(marker.index, parts[index + 1]?.index ?? packet.length).trim();
            let normalized = body;
            const checked = [];
            for (const [language, acknowledgment] of Object.entries(acknowledgments)) {
                const checkedLine = acknowledgment.replace("[ ]", "[x]");
                if (body.includes(checkedLine)) checked.push(language);
                normalized = normalized.replace(checkedLine, acknowledgment);
            }
            if (normalized !== section(question, index).trim()) throw new Error(`${id}: review content was edited; only checkboxes may change.`);
            for (const language of checked) {
                if (language !== "en" && !approved(question, records)) {
                    throw new Error(`${id}: approve the current English content before approving the ${language} translation.`);
                }
                const revision = reviewRevisionFor(question, language);
                records[id] = { ...records[id], [language]: records[id]?.[language]?.revision === revision ? records[id][language] :
                    { revision, approvedAt: new Date(now()).toISOString() } };
                count++;
            }
        }
    }
    return { records, count };
}
async function atomicWrite(target, content) {
    const temporary = `${target}.${randomUUID()}.tmp`;
    try {
        await writeFile(temporary, content, { flag: "wx", mode: 0o600 });
        await rename(temporary, target);
    } finally { await rm(temporary, { force: true }); }
}
async function main(args) {
    const { exams, bundledReviews } = await import("./exams.mjs");
    const root = path.dirname(fileURLToPath(import.meta.url));
    if (args[0] === "export" && args.slice(1).every(arg => arg === "--replace")) {
        const directory = path.join(root, "reviews");
        await mkdir(directory, { recursive: true });
        const targets = exams.map(exam => path.join(directory, `${exam.id}.md`));
        if (!args.includes("--replace")) for (const target of targets) {
            try { await access(target); }
            catch (error) { if (error.code === "ENOENT") continue; throw error; }
            throw new Error(`Review file already exists: ${target}. Preserve reviewers' edits; use --replace only to regenerate deliberately.`);
        }
        for (const [index, exam] of exams.entries()) await atomicWrite(targets[index], renderPacket(exam));
        console.log(`Exported ${exams.length} review packets to ${directory}. No questions were marked reviewed.`);
    } else if (args[0] === "import") {
        const files = args.slice(1).filter(arg => arg !== "--confirm-human-review");
        if (!files.length || files.some(file => file.startsWith("--"))) throw new Error("Provide one or more reviewed Markdown file paths.");
        const packets = await Promise.all(files.map(file => readFile(path.resolve(file), "utf8")));
        const { records, count } = collectApprovals(packets, exams, bundledReviews,
            { confirmed: args.includes("--confirm-human-review") });
        await atomicWrite(path.join(root, "bank-reviews.json"), JSON.stringify(records, null, 2) + "\n");
        console.log(`Imported ${count} checked, current-revision human attestations. Unchecked items and learner data were not changed.`);
    } else throw new Error("Use: node review-packets.mjs export [--replace] OR import <review.md> [...] --confirm-human-review");
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    await main(process.argv.slice(2));
}
