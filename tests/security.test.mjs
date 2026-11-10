import { test } from "node:test";
import assert from "node:assert/strict";
import { exams } from "../exams.mjs";

test("Security translations preserve technical options and actionable paths at their answer indices", () => {
    const exam = exams.find(exam => exam.id === "security");
    const cases = [
        ["ghas-ecosystem-009", "Repository > Insights > Dependency graph"],
        ["ghas-supply-013", "`registries`"],
        ["ghas-code-009", "`manual`"],
        ["ghas-operations-026", "Show paths"],
        ["ghas-operations-038", "is:open severity:high branch:main"],
        ["ghas-administration-025", "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach"],
    ];
    for (const [id, expected] of cases) {
        const question = exam.questions.find(question => question.id === id);
        assert.ok(question, id);
        assert.equal(question.choices[question.correct], expected, id);
        for (const language of ["es", "pt-BR"]) {
            assert.deepEqual(question.translations[language].choices, question.choices, `${id} ${language}`);
        }
    }
});
