import { createHash, randomInt } from "node:crypto";

export function revisionFor(question) {
    return createHash("sha256").update(JSON.stringify({
        id: question.id, domain: question.domain, prompt: question.prompt, choices: question.choices,
        correct: question.correct, explanations: question.explanations, concept: question.concept,
        hints: question.hints, source: question.source,
        translations: question.translations,
    })).digest("hex");
}
export function reviewRevisionFor(question, language = "en") {
    const english = {
        id: question.id, domain: question.domain, prompt: question.prompt, choices: question.choices,
        correct: question.correct, explanations: question.explanations, concept: question.concept,
        hints: question.hints, source: question.source,
    };
    if (!["en", "es", "pt-BR"].includes(language)) throw new Error("Unknown review language.");
    if (language !== "en" && !question.translations?.[language]) throw new Error(`Missing ${language} translation for ${question.id}.`);
    return createHash("sha256").update(JSON.stringify(language === "en" ? english :
        { english, language, translation: question.translations[language] })).digest("hex");
}
export function approved(question, approvals = {}, language = "en") {
    const record = approvals[question.id];
    if (record?.en?.revision !== reviewRevisionFor(question)) return false;
    return language === "en" || record?.[language]?.revision === reviewRevisionFor(question, language);
}
export function mergeApprovals(bundled = {}, local = {}) {
    const result = structuredClone(bundled);
    for (const [id, record] of Object.entries(local)) {
        result[id] = record === null ? { en: null, es: null, "pt-BR": null } : { ...result[id], ...record };
    }
    return result;
}
export function quotasFor(domains, size) {
    const weight = domains.reduce((sum, domain) => sum + domain.weight, 0);
    if (!(weight > 0) || !Number.isInteger(size) || size < 1) throw new Error("Invalid exam sampling configuration.");
    const quotas = domains.map((domain, index) => {
        const exact = domain.weight / weight * size;
        const min = Number.isFinite(domain.min) ? Math.ceil(domain.min / 100 * size) : 0;
        const max = Number.isFinite(domain.max) ? Math.floor(domain.max / 100 * size) : size;
        return { name: domain.name, count: Math.max(min, Math.min(max, Math.floor(exact))), exact, min, max, index };
    });
    if (quotas.some(domain => domain.min > domain.max) ||
        quotas.reduce((sum, domain) => sum + domain.min, 0) > size ||
        quotas.reduce((sum, domain) => sum + domain.max, 0) < size) {
        throw new Error("Published domain ranges cannot fit this attempt size.");
    }
    let total = quotas.reduce((sum, domain) => sum + domain.count, 0);
    // Round toward the target weights without crossing a published range.
    while (total !== size) {
        const direction = total < size ? 1 : -1;
        const candidates = quotas.filter(domain => direction > 0 ? domain.count < domain.max : domain.count > domain.min)
            .sort((a, b) => direction * ((b.exact - b.count) - (a.exact - a.count)) || a.index - b.index);
        candidates[0].count += direction;
        total += direction;
    }
    return quotas.map(({ name, count }) => ({ name, count }));
}
function shuffled(values, random) {
    const result = [...values];
    for (let index = result.length - 1; index > 0; index--) {
        const pick = random(index + 1);
        [result[index], result[pick]] = [result[pick], result[index]];
    }
    return result;
}
export function fullLengthAvailable(exam) {
    return exam.questions.length >= exam.attemptSize &&
        quotasFor(exam.domains, exam.attemptSize).every(domain =>
            exam.questions.filter(question => question.domain === domain.name).length >= domain.count);
}
export function assemble(exam, { mode, domain, random = randomInt }) {
    if (!exam.questions.length) throw new Error("This certification's question bank is not available yet.");
    if (mode !== "exam") {
        const bank = exam.questions.filter(question => !domain || question.domain === domain);
        if (!bank.length) throw new Error("No questions are available for this domain.");
        return shuffled(bank, random);
    }
    if (!fullLengthAvailable(exam)) throw new Error("The bank does not yet support a full-length, domain-balanced mock. Use Learn or AI coach.");
    const selected = quotasFor(exam.domains, exam.attemptSize).flatMap(quota =>
        shuffled(exam.questions.filter(question => question.domain === quota.name), random).slice(0, quota.count));
    return shuffled(selected, random);
}
export function publicExam(exam, approvals = {}, language = "en") {
    const reviewCounts = Object.fromEntries(["en", "es", "pt-BR"].map(locale => [locale,
        exam.questions.filter(question => locale === "en" || question.translations?.[locale])
            .filter(question => approved(question, approvals, locale)).length]));
    const reviewedCount = reviewCounts[language];
    return {
        id: exam.id, name: exam.name, badgeUrl: exam.badgeUrl, domains: exam.domains,
        officialLanguages: exam.officialLanguages,
        resources: exam.resources, blueprintNote: exam.blueprintNote,
        attemptSize: exam.attemptSize, minutes: exam.minutes, relaxedMinutes: exam.relaxedMinutes,
        questionCount: exam.questions.length, poolTarget: exam.attemptSize * 3, reviewedCount, reviewCounts,
        fullLengthAvailable: fullLengthAvailable(exam),
        status: exam.questions.length >= exam.attemptSize * 3 && reviewedCount === exam.questions.length && fullLengthAvailable(exam) ?
                "Human-reviewed bank" : "Preview",
    };
}
export function validateBank(exam) {
    const errors = [], ids = new Set(), prompts = new Set();
    const domains = new Set(exam.domains.map(domain => domain.name));
    const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    for (const question of exam.questions) {
        const fail = message => errors.push(`${question.id ?? "(missing id)"}: ${message}`);
        if (typeof question.id !== "string" || !/^[a-z0-9-]+$/.test(question.id) || ids.has(question.id)) fail("invalid or duplicate ID");
        ids.add(question.id);
        if (!domains.has(question.domain)) fail(`unknown domain ${question.domain}`);
        if (typeof question.prompt !== "string" || question.prompt.length < 25) fail("missing or short prompt");
        else {
            const normalized = normalize(question.prompt);
            if (prompts.has(normalized)) fail("duplicate prompt");
            prompts.add(normalized);
        }
        if (!Array.isArray(question.choices) || question.choices.length !== 4 ||
            question.choices.some(choice => typeof choice !== "string" || !choice.trim()) ||
            new Set(question.choices.map(choice => String(choice).trim().toLowerCase().replace(/\s+/g, " "))).size !== 4) fail("four distinct choices required");
        if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) fail("invalid answer key");
        if (!Array.isArray(question.explanations) || question.explanations.length !== 4 ||
            question.explanations.some(value => typeof value !== "string" || value.trim().length < 12)) fail("four meaningful explanations required");
        if (typeof question.concept !== "string" || !question.concept.trim() ||
            !Array.isArray(question.hints) || question.hints.length < 2 ||
            question.hints.some(value => typeof value !== "string" || !value.trim())) fail("concept and at least two hints required");
        try {
            const url = new URL(question.source);
            if (url.protocol !== "https:" || !["docs.github.com", "learn.microsoft.com", "learn.github.com"].includes(url.hostname)) fail("official HTTPS source required");
        } catch { fail("invalid source URL"); }
        if (question.translations) for (const language of ["es", "pt-BR"]) {
            const translation = question.translations[language];
            if (!translation || typeof translation.prompt !== "string" || !translation.prompt.trim() ||
                typeof translation.concept !== "string" || !translation.concept.trim() ||
                !Array.isArray(translation.choices) || translation.choices.length !== 4 ||
                !Array.isArray(translation.explanations) || translation.explanations.length !== 4 ||
                !Array.isArray(translation.hints) || translation.hints.length !== question.hints.length ||
                [...translation.choices, ...translation.explanations, ...translation.hints].some(value => typeof value !== "string" || !value.trim())) {
                fail(`incomplete ${language} translation`);
            }
        }
    }
    return errors;
}
export function localizedQuestion(question, language) {
    if (language === "en") return question;
    const translation = question.translations?.[language];
    if (!translation) throw new Error(`Missing ${language} translation for ${question.id}.`);
    return { ...question, prompt: translation.prompt, choices: translation.choices,
        explanations: translation.explanations, concept: translation.concept, hints: translation.hints };
}
