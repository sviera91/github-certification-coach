import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { build } from "esbuild";
import { parseHTML } from "linkedom";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "_site");
await mkdir(path.join(output, "lite", "vendor"), { recursive: true });

const [template, primer, style, send, icons, themeScript, themeCSS, liteCSS] = await Promise.all([
    "index.html", "vendor/primer.css", "style.css", "vendor/send.svg", "vendor/icons.svg",
    "web/theme.js", "web/theme.css", "web/lite.css",
].map(file => readFile(path.join(root, file), "utf8")));

const { document } = parseHTML(template.replace("__PRIMER__", primer).replace("__STYLE__", style)
    .replace("__SEND_ICON__", send).replace("__ICONS__", icons));
document.documentElement.dataset.edition = "lite";
document.title = "Certification Coach Lite | GitHub practice";
document.querySelector("h1").textContent = "Certification Coach Lite";
document.querySelector("head script").textContent = `${themeScript}\ndocument.documentElement.setAttribute("data-color-mode", document.documentElement.getAttribute("data-theme"));`;
const css = document.createElement("style");
css.textContent = `${themeCSS}\n${liteCSS}`;
document.head.append(css);
const unavailable = [
    '[data-mode="coach"]', '#study-mode', "#coaching", "#explain-further",
    "#deep-explanation", "#bank-review", "#bank-review-note", "#content-review",
];
for (const selector of unavailable) document.querySelector(selector).classList.add("desktop-only");
document.querySelector('#study-mode option[value="coach"]').disabled = true;
document.querySelector('#study-mode option[value="coach"]').hidden = true;
document.querySelector("#study-mode").parentElement.classList.add("desktop-only");
document.querySelector("#explain-further").parentElement.classList.add("desktop-only");
document.querySelector("#explain-further").parentElement.nextElementSibling.classList.add("desktop-only");
for (const node of document.querySelectorAll("#setup > p.muted")) {
    if (node.textContent.startsWith("AI coaching")) node.classList.add("desktop-only");
}
document.querySelector("#study-controls > p.muted").textContent = "Study is ungraded. Your Learn answers and flags are saved in this browser.";
document.querySelector("footer > span").textContent = "Lite stores progress in this browser only. Clearing site data can remove it. Closing the page does not pause a timed mock. No Copilot calls or progress uploads.";
document.querySelector("#report-canvas").textContent = "Report Lite issue";
const links = document.createElement("div");
links.className = "lite-links";
links.innerHTML = '<a href="../">About Certification Coach</a><a href="https://github.com/sviera91/github-certification-coach#install-for-employees-and-partners" target="_blank" rel="noreferrer">Install full canvas</a><a href="https://github.com/sviera91/github-certification-coach/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">Help validate AI-authored questions</a>';
document.querySelector("#notice").before(links);
const loading = document.createElement("p");
loading.id = "lite-loading";
loading.setAttribute("role", "status");
loading.textContent = "Loading practice and saved browser progress...";
document.querySelector("#notice").after(loading);
const noscript = document.createElement("noscript");
noscript.textContent = "Lite requires JavaScript to run practice and save browser progress. Enable it and reload.";
document.querySelector("main").prepend(noscript);
const contribution = document.createElement("p");
contribution.innerHTML = 'Human approval is not recorded in Lite. <a href="https://github.com/sviera91/github-certification-coach/tree/main/reviews" target="_blank" rel="noreferrer">Review the question packets and contribute QA on GitHub.</a>';
document.querySelector("#bank-review").after(contribution);
document.querySelector('script[type="module"]').src = "./client.mjs";
for (const node of document.querySelectorAll("[nonce]")) node.removeAttribute("nonce");
await writeFile(path.join(output, "lite", "index.html"), document.toString());

// Only explicit public runtime assets are published; no learner artifacts or installed folders.
await Promise.all([
    ...["index.html", "theme.js", "theme.css", "landing.css"].map(file =>
        copyFile(path.join(root, "web", file), path.join(output, file))),
    ...["client.mjs", "i18n.mjs", "markdown.mjs", "vendor/markdown-parser.mjs"].map(file =>
        copyFile(path.join(root, file), path.join(output, "lite", file))),
    ...["LICENSE", "THIRD-PARTY-NOTICES.md"].map(file => copyFile(path.join(root, file), path.join(output, file))),
    writeFile(path.join(output, "LICENSES.txt"), `${await readFile(path.join(root, "vendor", "LICENSES.txt"), "utf8")}\n\n@noble/hashes\n${await readFile(path.join(root, "node_modules", "@noble", "hashes", "LICENSE"), "utf8")}`),
    writeFile(path.join(output, ".nojekyll"), ""),
]);
await build({
    entryPoints: [path.join(root, "lite-api.mjs")],
    outfile: path.join(output, "lite", "lite-api.mjs"),
    bundle: true, format: "esm", platform: "browser", target: "es2022",
    alias: { "node:crypto": path.join(root, "web", "crypto.mjs") },
    legalComments: "inline", minify: true,
});
console.log("Built public landing page and browser-only Lite in _site/.");
