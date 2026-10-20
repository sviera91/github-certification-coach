import { exams } from "./exams.mjs";
import { setTimeout as delay } from "node:timers/promises";

const urls = [...new Set(exams.flatMap(exam => [
    ...exam.resources.map(resource => resource.url),
    ...exam.questions.map(question => question.source),
]))];
const pending = [...urls], failures = [], blockedHosts = new Set();
async function worker() {
    while (pending.length) {
        const url = pending.shift();
        const host = new URL(url).hostname;
        if (blockedHosts.has(host)) {
            failures.push(`Not checked (host rate-limited): ${url}`);
            continue;
        }
        try {
            const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
            await response.body?.cancel();
            if (response.status === 429) blockedHosts.add(host);
            const destination = new URL(response.url);
            if (!response.ok || destination.protocol !== "https:" ||
                !["docs.github.com", "learn.microsoft.com", "learn.github.com"].includes(destination.hostname)) {
                failures.push(`${response.status}: ${url} -> ${response.url}`);
            }
        } catch (error) { failures.push(`${url}: ${error.message}`); }
        await delay(500);
    }
}
await worker();
console.log(`Processed ${urls.length} distinct official source/preparation URLs; rate-limited hosts are not retried.`);
if (failures.length) {
    console.error(failures.join("\n"));
    process.exitCode = 1;
} else console.log("All links returned successful responses. This checks reachability, not factual support.");
