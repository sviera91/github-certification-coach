import { test } from "node:test";
import assert from "node:assert/strict";
import { exams } from "../exams.mjs";
import { localizedQuestion } from "../bank-utils.mjs";

test("Administration localization preserves workflow syntax, CLI commands, and English interface choices", () => {
    const exam = exams.find(exam => exam.id === "administration");
    const cases = [
        ["admin-058", "Management Console → Support → Download diagnostics info"],
        ["admin-148", ".github/workflows/build.yml"],
        ["admin-149", "workflow_call"],
        ["admin-150", "jobs.build.uses"],
        ["admin-151", "enabled: false"],
        ["admin-158", "contents: read"],
        ["admin-169", "gh secret set API_KEY --env production"],
        ["admin-201", "include=git"],
        ["admin-205", "X-GitHub-Delivery"],
        ["admin-208", "ghe-config core.github-hostname"],
        ["admin-209", "ghe-logs-tail"],
    ];
    for (const [id, correctLiteral] of cases) {
        const question = exam.questions.find(question => question.id === id);
        for (const language of ["en", "es", "pt-BR"]) {
            const localized = localizedQuestion(question, language);
            assert.deepEqual(localized.choices, question.choices, `${id} ${language}: literal choices changed`);
            assert.equal(localized.choices[localized.correct], correctLiteral, `${id} ${language}: answer alignment changed`);
            assert.deepEqual(localized.explanations, language === "en" ? question.explanations : question.translations[language].explanations);
        }
    }
});
