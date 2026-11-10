import { test } from "node:test";
import assert from "node:assert/strict";
import { exams } from "../exams.mjs";

test("Actions translations preserve executable commands, YAML, and file paths at their answer indices", () => {
    const exam = exams.find(exam => exam.id === "actions");
    const cases = [
        ["actions-011", "echo \"count=8\" >> \"$GITHUB_OUTPUT\""],
        ["actions-029", "env: *shared"],
        ["actions-059", "gh run rerun 731 --failed"],
        ["actions-102", "action.yaml"],
        ["actions-143", "runs-on: {group: build-pool, labels: linux-x64}"],
        ["actions-188", "gh secret set DEPLOY_KEY --org octo-org --repos api,worker"],
        ["actions-201", "printf '%s\\n' \"$PR_TITLE\""],
        ["actions-204", ".github/workflows/actions.lock"],
        ["actions-212", "gh attestation verify dist/tool -R octo-org/tool"],
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
