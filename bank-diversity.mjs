const normalize = value => value.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim();

function clusters(questions, keyFor) {
    const groups = new Map();
    for (const question of questions) {
        const key = keyFor(question);
        if (!key) continue;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(question.id);
    }
    return [...groups.entries()];
}

export function checkDiversity(questions) {
    const issues = [];
    for (const [answer, ids] of clusters(questions, question => normalize(question.choices[question.correct]))) {
        // Technical labels can answer different questions; repeated prose needs review.
        if (ids.length > 2 && answer.split(/\s+/).length >= 5) {
            issues.push(`Repeated correct-answer prose (${ids.join(", ")}): ${answer}`);
        }
    }
    for (const [, ids] of clusters(questions, question => JSON.stringify({
        choices: question.choices.map(normalize).sort(),
        answer: normalize(question.choices[question.correct]),
    }))) {
        if (ids.length > 2) issues.push(`Repeated choice set and answer (${ids.join(", ")})`);
    }
    for (const [tail, ids] of clusters(questions, question => {
        const lastQuestion = question.prompt.match(/[^.!?\n]*[?？]\s*$/u)?.[0].trim();
        return lastQuestion && lastQuestion.split(/\s+/).length >= 10 ? normalize(lastQuestion) : undefined;
    })) {
        if (ids.length > 3) issues.push(`Repeated question template (${ids.join(", ")}): ${tail}`);
    }
    return issues;
}
