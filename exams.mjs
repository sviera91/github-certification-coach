import { questions as foundations } from "./banks/foundations.mjs";
import { questions as administration } from "./banks/administration.mjs";
import { questions as security } from "./banks/security.mjs";
import { questions as copilot } from "./banks/copilot.mjs";
import { questions as actions } from "./banks/actions.mjs";
import { questions as agentic } from "./banks/agentic.mjs";
import { translations as foundationsLanguages } from "./translations/foundations.mjs";
import { translations as administrationLanguages } from "./translations/administration.mjs";
import { translations as securityLanguages } from "./translations/security.mjs";
import { translations as copilotLanguages } from "./translations/copilot.mjs";
import { translations as actionsLanguages } from "./translations/actions.mjs";
import { translations as agenticLanguages } from "./translations/agentic.mjs";
import { readFileSync } from "node:fs";
export { assemble, publicExam } from "./bank-utils.mjs";
export const bundledReviews = JSON.parse(readFileSync(new URL("./bank-reviews.json", import.meta.url), "utf8"));

const learn = "https://learn.microsoft.com/en-us";
const badgeAssets = {
    foundations: "badge-ghf--AVHlfQC.png",
    administration: "badge-admin-Dc1dMyhY.png",
    security: "badge-ghas-Bv66QFpp.png",
    copilot: "badge-copilot-CXyQbEb_.png",
    actions: "badge-actions-D3CTmYZ3.png",
    agentic: "badge-agentic-CGmH6Auv.png",
};
const badgeFor = id => `https://learn.github.com/assets/${badgeAssets[id]}`;
function certification({ id, name, code, slug, questions, translations, paths, ranges, relaxedMinutes, minutes = 100, modules = [] }) {
    const studyGuide = `${learn}/credentials/certifications/resources/study-guides/${code}`;
    const resources = [
        { title: "Official certification overview", url: `https://learn.github.com/certification/${slug}` },
        { title: "Official exam study guide and skills measured", url: studyGuide },
        ...paths.map((path, index) => ({ title: `Microsoft Learn preparation path ${index + 1}`, url: `${learn}/training/paths/${path}/` })),
        ...modules.map(([slug, title]) => ({ title: `Microsoft Learn: ${title}`, url: `${learn}/training/modules/${slug}/` })),
    ];
    const domains = ranges.map(([domain, min, max]) => ({
        name: domain, min, max, weight: (min + max) / 2,
        resources: [
            { title: `${domain}: official study guide`, url: studyGuide },
            ...[...new Set(questions.filter(question => question.domain === domain).map(question => question.source))]
                .slice(0, 3).map((url, index) => ({ title: `${domain}: documentation ${index + 1}`, url })),
            ...resources.filter(resource => resource.title.startsWith("Microsoft Learn")),
        ],
    }));
    return {
        id, name, code, badgeUrl: badgeFor(id),
        questions: questions.map(question => ({ ...question, translations: {
            es: translations.es[question.id], "pt-BR": translations["pt-BR"][question.id],
        } })),
        officialLanguages: id === "agentic" ? ["en"] : ["en", "es", "pt-BR"],
        resources, domains, attemptSize: 75, minutes, relaxedMinutes,
        blueprintNote: `Official certification page: ${minutes} minutes. The general GitHub FAQ describes 60 scored multiple-choice questions plus approximately 10-15 pretest items, varying by exam. Our mock uses 75 items and grades every item. Sampling uses published weight-range midpoints, with rounding constrained to those ranges; it is not an official exam form.`,
    };
}
export const exams = [
    certification({
        id: "foundations", name: "GitHub Foundations", code: "gh-900", slug: "GHF", questions: foundations, translations: foundationsLanguages,
        paths: ["github-foundations", "github-foundations-2"], relaxedMinutes: 120,
        ranges: [
            ["Understand Git and GitHub basics", 25, 30],
            ["Work with GitHub repositories", 10, 15],
            ["Collaborate using GitHub", 10, 15],
            ["Apply modern development practices", 10, 15],
            ["Manage projects with GitHub", 5, 10],
            ["Understand privacy, security, and administration", 10, 15],
            ["Explore the GitHub community", 5, 10],
        ],
    }),
    certification({
        id: "administration", name: "GitHub Administration", code: "gh-100", slug: "ADMIN", questions: administration, translations: administrationLanguages,
        paths: ["github-administration-products", "github-admin-2/github-admin-2"],
        ranges: [
            ["Manage GitHub identities and access", 15, 20],
            ["Administer GitHub Enterprise environment", 10, 15],
            ["Implement secure software development and compliance", 25, 30],
            ["Manage GitHub Actions", 20, 25],
            ["Monitor and optimize GitHub usage", 10, 15],
        ],
    }),
    certification({
        id: "security", name: "GitHub Advanced Security", code: "gh-500", slug: "GHAS", questions: security, translations: securityLanguages,
        paths: ["github-advanced-security", "github-advanced-security-2"],
        ranges: [
            ["Describe GitHub Security suites, features, and ecosystem", 15, 20],
            ["Configure and use Secret Protection", 15, 20],
            ["Configure and use supply chain security", 15, 20],
            ["Configure and use Code Security", 10, 15],
            ["Security operations: best practices, prioritization, remediation", 15, 20],
            ["GitHub Security suites administration", 10, 15],
        ],
    }),
    certification({
        id: "copilot", name: "GitHub Copilot", code: "gh-300", slug: "COPILOT", questions: copilot, translations: copilotLanguages,
        paths: ["copilot", "gh-copilot-2"],
        ranges: [
            ["Use GitHub Copilot responsibly", 15, 20],
            ["Use GitHub Copilot features", 25, 30],
            ["Understand GitHub Copilot data and architecture", 10, 15],
            ["Apply prompt engineering and context crafting", 10, 15],
            ["Improve developer productivity with GitHub Copilot", 10, 15],
            ["Configure privacy, content exclusions, and safeguards", 10, 15],
        ],
    }),
    certification({
        id: "actions", name: "GitHub Actions", code: "gh-200", slug: "ACTIONS", questions: actions, translations: actionsLanguages,
        paths: ["github-actions"],
        ranges: [
            ["Author and manage workflows", 20, 25],
            ["Consume and troubleshoot workflows", 15, 20],
            ["Author and maintain actions", 15, 20],
            ["Manage GitHub Actions for the enterprise", 20, 25],
            ["Secure and optimize automation", 10, 15],
        ],
    }),
    certification({
        id: "agentic", name: "GitHub Agentic AI Developer", code: "gh-600", slug: "AGENTIC", questions: agentic, translations: agenticLanguages,
        paths: [], minutes: 120,
        modules: [
            ["foundations-agentic-ai", "Foundations of Agentic AI in GitHub"],
            ["design-agent-architecture-integration", "Designing Agent Architecture and SDLC Integration"],
            ["agent-tooling-mcp-execution-environments", "Tooling, MCP, and Agent Execution Environments"],
        ],
        ranges: [
            ["Prepare agent architecture and SDLC processes", 15, 20],
            ["Implement tool use and environment interaction", 20, 25],
            ["Manage memory, state, and execution", 10, 15],
            ["Perform evaluation, error analysis, and tuning", 15, 20],
            ["Orchestrate multi-agent coordination", 15, 20],
            ["Implement guardrails and accountability", 10, 15],
        ],
    }),
];
