const RELEASES = "https://api.github.com/repos/sviera91/github-certification-coach/releases?per_page=100";
const RELEASE_PAGE = "https://github.com/sviera91/github-certification-coach/releases/tag/";
const DAY = 24 * 60 * 60 * 1000;
const HOUR = 60 * 60 * 1000;

function parseVersion(value) {
    if (typeof value !== "string" || value.length > 128) return;
    const match = value.match(/^v?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/);
    if (!match) return;
    const pre = match[4]?.split(".") ?? [];
    if (pre.some(part => /^\d+$/.test(part) && part.length > 1 && part.startsWith("0"))) return;
    return { core: match.slice(1, 4).map(BigInt), pre };
}

function compare(a, b) {
    for (let i = 0; i < 3; i++) {
        if (a.core[i] !== b.core[i]) return a.core[i] > b.core[i] ? 1 : -1;
    }
    if (!a.pre.length || !b.pre.length) return Number(!a.pre.length) - Number(!b.pre.length);
    for (let i = 0; i < Math.max(a.pre.length, b.pre.length); i++) {
        const left = a.pre[i], right = b.pre[i];
        if (left === undefined) return -1;
        if (right === undefined) return 1;
        if (left === right) continue;
        const leftNumeric = /^\d+$/.test(left), rightNumeric = /^\d+$/.test(right);
        if (leftNumeric && rightNumeric) return BigInt(left) > BigInt(right) ? 1 : -1;
        if (leftNumeric !== rightNumeric) return leftNumeric ? -1 : 1;
        return left > right ? 1 : -1;
    }
    return 0;
}

export function createUpdateChecker({ version, fetch: fetchRelease = globalThis.fetch, now = Date.now,
    log = console.error, timeoutMs = 5000 }) {
    const installed = parseVersion(version);
    if (!installed) throw new Error("The installed Certification Coach version is not a valid semantic version.");
    let cached, nextCheck = 0, pending;
    async function check() {
        const checkedAt = now();
        let retryDelay = HOUR;
        try {
            const response = await fetchRelease(RELEASES, {
                headers: { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28",
                    "User-Agent": "certification-coach-update-check" },
                credentials: "omit", redirect: "error", signal: AbortSignal.timeout(timeoutMs),
            });
            if (!response.ok) {
                const retry = response.headers.get("retry-after");
                const reset = Number(response.headers.get("x-ratelimit-reset")) * 1000;
                const retryAt = retry === null ? 0 : /^\d+$/.test(retry) ? checkedAt + Number(retry) * 1000 : Date.parse(retry);
                for (const at of [retryAt, reset]) if (Number.isFinite(at)) retryDelay = Math.max(retryDelay, at - checkedAt);
                throw new Error(`Release metadata request failed (${response.status}).`);
            }
            const releases = await response.json();
            if (!Array.isArray(releases)) throw new Error("Release metadata is not a release list.");
            let latest;
            for (const release of releases) {
                if (!release || typeof release.draft !== "boolean" || typeof release.prerelease !== "boolean") {
                    throw new Error("Release metadata contains an invalid release.");
                }
                if (release.draft || !installed.pre.length && release.prerelease) continue;
                const parsed = parseVersion(release.tag_name);
                if (!parsed) throw new Error("A published release tag is not a supported semantic version.");
                if (!installed.pre.length && parsed.pre.length) continue;
                if (!latest || compare(parsed, latest.parsed) > 0) latest = { tag: release.tag_name, parsed };
            }
            cached = latest ? {
                status: compare(latest.parsed, installed) > 0 ? "available" : "current",
                version: latest.tag.replace(/^v/, ""), url: `${RELEASE_PAGE}${encodeURIComponent(latest.tag)}`, checkedAt,
            } : { status: "none", checkedAt };
            nextCheck = now() + DAY;
        } catch (error) {
            log(new Error(`Certification Coach update check: ${error.message}`));
            cached = { status: "error", checkedAt };
            nextCheck = now() + retryDelay;
        }
        return cached;
    }
    return {
        getStatus() {
            if (pending) return pending;
            if (cached && now() < nextCheck) return Promise.resolve(cached);
            pending = check().finally(() => { pending = undefined; });
            return pending;
        },
    };
}
