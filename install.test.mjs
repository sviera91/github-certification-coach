import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, rm, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { installExtension, runtimeFiles } from "./install.mjs";

test("installation copies only distribution files and preserves learner artifacts on updates", async t => {
    const copilotHome = await mkdtemp(fileURLToPath(new URL("./.test-install-", import.meta.url)));
    t.after(() => rm(copilotHome, { recursive: true, force: true }));
    const artifacts = path.join(copilotHome, "extensions", "certification-coach", "artifacts");
    await mkdir(artifacts, { recursive: true });
    const privateFile = path.join(artifacts, "coach-state.json");
    await writeFile(privateFile, '{"private":"learner-progress"}\n');
    const destination = await installExtension({ copilotHome });
    await installExtension({ copilotHome });
    assert.equal(await readFile(privateFile, "utf8"), '{"private":"learner-progress"}\n');
    for (const name of runtimeFiles) {
        assert.deepEqual(await readFile(path.join(destination, name)), await readFile(new URL(name, import.meta.url)));
    }
    const names = await readdir(destination);
    for (const excluded of ["node_modules", ".git", "blueprint-research.json", "install.test.mjs"]) {
        assert.ok(!names.includes(excluded), excluded);
    }
});
