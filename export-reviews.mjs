import { readFile, writeFile, rename, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { exams, bundledReviews } from "./exams.mjs";
import { approved } from "./bank-utils.mjs";

const stateFile = path.join(process.env.COPILOT_HOME || path.join(os.homedir(), ".copilot"),
    "extensions", "certification-coach", "artifacts", "coach-state.json");
const state = JSON.parse(await readFile(stateFile, "utf8"));
if (state.version !== 2 || typeof state.approvals !== "object") throw new Error("No valid human-review ledger found.");
const approvals = { ...bundledReviews, ...state.approvals };
const records = Object.fromEntries(exams.flatMap(exam => exam.questions)
    .filter(question => approved(question, approvals)).map(question => [question.id, approvals[question.id]]));
const target = new URL("./bank-reviews.json", import.meta.url);
const temporary = new URL(`./bank-reviews.${randomUUID()}.tmp`, import.meta.url);
try {
    await writeFile(temporary, JSON.stringify(records, null, 2) + "\n", { flag: "wx", mode: 0o600 });
    await rename(temporary, target);
} finally { await rm(temporary, { force: true }); }
console.log(`Exported ${Object.keys(records).length} current-revision approval records. No attempt or chat content was exported.`);
