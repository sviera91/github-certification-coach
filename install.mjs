import { mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const runtimeFiles = [
    "extension.mjs", "engine.mjs", "exams.mjs", "bank-utils.mjs", "questions.mjs",
    "server.mjs", "client.mjs", "i18n.mjs", "index.html", "style.css", "bank-reviews.json",
    "copilot-extension.json", "README.md", "LICENSE", "THIRD-PARTY-NOTICES.md",
    "banks/foundations.mjs", "banks/administration.mjs", "banks/security.mjs", "banks/copilot.mjs",
    "banks/actions.mjs", "banks/agentic.mjs",
    "translations/foundations.mjs", "translations/administration.mjs", "translations/security.mjs",
    "translations/copilot.mjs", "translations/actions.mjs", "translations/agentic.mjs",
    "vendor/primer.css", "vendor/send.svg", "vendor/icons.svg", "vendor/LICENSES.txt", "CHANGELOG.md",
];

export async function installExtension({ copilotHome = process.env.COPILOT_HOME || path.join(os.homedir(), ".copilot") } = {}) {
    const source = path.dirname(fileURLToPath(import.meta.url));
    const destination = path.resolve(copilotHome, "extensions", "certification-coach");
    if (destination === source) throw new Error("Run the installer from the cloned repository, not the installed extension.");
    // Read every required asset before modifying the installation.
    const files = await Promise.all(runtimeFiles.map(async name => ({
        name, bytes: await readFile(path.join(source, name)),
    })));
    for (const { name, bytes } of files) {
        const target = path.join(destination, name);
        await mkdir(path.dirname(target), { recursive: true });
        await writeFile(target, bytes);
    }
    return destination;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const destination = await installExtension();
    console.log(`Installed Certification Coach at ${destination}`);
    console.log("Learner artifacts were not copied, deleted, or overwritten. Restart Copilot to load the update.");
}
