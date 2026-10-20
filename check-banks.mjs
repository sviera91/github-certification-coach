import { exams } from "./exams.mjs";
import { quotasFor, validateBank } from "./bank-utils.mjs";

const errors = [];
const allIds = new Set(), allPrompts = new Set();
for (const exam of exams) {
    errors.push(...validateBank(exam).map(error => `${exam.id}: ${error}`));
    if (exam.questions.length < exam.attemptSize * 3) errors.push(`${exam.id}: pool is below the ${exam.attemptSize * 3}-question target`);
    const distribution = Object.fromEntries(exam.domains.map(domain =>
        [domain.name, exam.questions.filter(question => question.domain === domain.name).length]));
    for (const quota of quotasFor(exam.domains, exam.attemptSize * 3)) {
        if (distribution[quota.name] < quota.count) errors.push(`${exam.id}: ${quota.name} needs at least ${quota.count} questions for three weighted forms`);
    }
    for (const question of exam.questions) {
        for (const language of ["es", "pt-BR"]) {
            const translation = question.translations?.[language];
            if (!translation) errors.push(`${question.id}: missing ${language} translation`);
            else if (Object.keys(translation).some(key => !["prompt", "choices", "explanations", "concept", "hints"].includes(key))) {
                errors.push(`${question.id}: ${language} translation must not override answer keys, domains, or sources`);
            }
        }
        if (allIds.has(question.id)) errors.push(`Cross-bank duplicate ID: ${question.id}`);
        allIds.add(question.id);
        const prompt = question.prompt.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
        if (allPrompts.has(prompt)) errors.push(`Cross-bank duplicate prompt: ${question.id}`);
        allPrompts.add(prompt);
    }
    console.log(`${exam.name}: ${exam.questions.length} questions; ${JSON.stringify(distribution)}`);
}
if (errors.length) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
} else console.log("Structural/coverage checks passed. Semantic correctness and human approval are separate requirements.");
