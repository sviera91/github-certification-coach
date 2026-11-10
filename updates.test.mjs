import { test } from "node:test";
import assert from "node:assert/strict";
import { createUpdateChecker } from "./updates.mjs";

const DAY = 86400000;
const HOUR = 3600000;
const release = (tag_name, extra = {}) => ({ tag_name, draft: false, prerelease: false, ...extra });
function fixture({ version = "0.4.2-preview", releases = [], fetch } = {}) {
    let time = 1700000000000;
    const requests = [], errors = [];
    const checker = createUpdateChecker({
        version, now: () => time, log: error => errors.push(error),
        fetch: async (...args) => {
            requests.push(args);
            return fetch ? fetch(...args) : Response.json(releases);
        },
    });
    return { checker, requests, errors, advance: ms => { time += ms; } };
}
test("release checks use semantic ordering and canonical links without learner or account data", async () => {
    const releases = [release("v0.4.3-preview.2"), release("v0.4.3-preview.10", {
        prerelease: true, html_url: "https://untrusted.example/download", published_at: "2000-01-01",
    }), release("v0.4.2-preview")];
    const { checker, requests, advance } = fixture({ releases });
    const status = await checker.getStatus();
    assert.equal(status.status, "available");
    assert.equal(status.version, "0.4.3-preview.10");
    assert.equal(status.url, "https://github.com/sviera91/github-certification-coach/releases/tag/v0.4.3-preview.10");
    const [url, options] = requests[0];
    assert.equal(url, "https://api.github.com/repos/sviera91/github-certification-coach/releases?per_page=100");
    assert.equal(options.credentials, "omit");
    assert.equal(options.redirect, "error");
    assert.deepEqual(Object.keys(options).sort(), ["credentials", "headers", "redirect", "signal"]);
    assert.equal(Object.keys(options.headers).some(key => /authorization|cookie|coach/i.test(key)), false);
    releases.push(release("v0.4.3"));
    advance(DAY);
    assert.equal((await checker.getStatus()).version, "0.4.3");
});
test("stable installs ignore preview releases while equal, older, and build-only changes do not notify", async () => {
    const { checker } = fixture({ version: "1.0.0", releases: [
        release("v2.0.0-preview"), release("v3.0.0", { prerelease: true }), release("v1.1.0"),
    ] });
    assert.equal((await checker.getStatus()).version, "1.1.0");
    for (const tag of ["v0.4.2-preview", "v0.4.2-preview+rebuilt", "v0.4.1"]) {
        assert.equal((await fixture({ releases: [release(tag)] }).checker.getStatus()).status, "current", tag);
    }
});
test("release checks share in-flight work and cache success for 24 hours", async () => {
    let resolve;
    const { checker, requests, advance } = fixture({
        fetch: () => new Promise(done => { resolve = done; }),
    });
    const first = checker.getStatus(), second = checker.getStatus();
    assert.equal(first, second);
    assert.equal(requests.length, 1);
    resolve(Response.json([release("v0.5.0-preview")]));
    await first;
    advance(DAY - 1);
    assert.equal((await checker.getStatus()).status, "available");
    assert.equal(requests.length, 1);
    advance(1);
    const next = checker.getStatus();
    assert.equal(requests.length, 2);
    resolve(Response.json([]));
    assert.equal((await next).status, "none");
});
test("no published releases is not a failure and drafts never create notifications", async () => {
    for (const releases of [[], [release("not-a-version", { draft: true })]]) {
        const { checker, errors } = fixture({ releases });
        assert.equal((await checker.getStatus()).status, "none");
        assert.equal(errors.length, 0);
    }
});
test("rate-limit failures are explicit, cached, and honor the provider retry delay", async () => {
    let fail = true;
    const { checker, requests, errors, advance } = fixture({ fetch: () => fail ?
        new Response("", { status: 429, headers: { "Retry-After": "7200" } }) : Response.json([release("v0.5.0")]),
    });
    assert.equal((await checker.getStatus()).status, "error");
    assert.match(errors[0].message, /429/);
    fail = false;
    advance(HOUR);
    assert.equal((await checker.getStatus()).status, "error");
    assert.equal(requests.length, 1);
    advance(HOUR);
    assert.equal((await checker.getStatus()).status, "available");
    assert.equal(requests.length, 2);
});
test("malformed metadata and unsafe or invalid version tags never masquerade as up to date", async () => {
    for (const data of [{}, [null], [release("javascript:alert(1)")], [release("v01.0.0")], [release("v1.0.0-preview.01")]]) {
        const { checker, errors } = fixture({ fetch: async () => Response.json(data) });
        const status = await checker.getStatus();
        assert.equal(status.status, "error", JSON.stringify(data));
        assert.equal(status.url, undefined);
        assert.equal(errors.length, 1);
    }
    assert.throws(() => createUpdateChecker({ version: "unknown" }), /semantic version/);
});
test("slow release requests time out with an explicit failure instead of hanging", async t => {
    const keepAlive = setTimeout(() => {}, 50);
    t.after(() => clearTimeout(keepAlive));
    const errors = [];
    const checker = createUpdateChecker({
        version: "0.4.2-preview", timeoutMs: 2, log: error => errors.push(error),
        fetch: async (url, { signal }) => new Promise((resolve, reject) => {
            signal.addEventListener("abort", () => reject(signal.reason), { once: true });
        }),
    });
    assert.equal((await checker.getStatus()).status, "error");
    assert.equal(errors.length, 1);
});
