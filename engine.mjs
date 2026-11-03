import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { createEngine as createCoreEngine } from "./engine-core.mjs";

export { APP_VERSION, COMPLETION_TOOL, INSIGHT_TOOL, InputError } from "./engine-core.mjs";

export function createEngine({ directory, ...options }) {
    const file = path.join(directory, "coach-state.json");
    const persistence = {
        async read(name) {
            try { return await readFile(path.join(directory, name), "utf8"); }
            catch (error) { if (error.code !== "ENOENT") throw error; }
        },
        async write(contents) {
            await mkdir(directory, { recursive: true });
            const temp = `${file}.${randomUUID()}.tmp`;
            try {
                await writeFile(temp, contents, { mode: 0o600, flag: "wx" });
                await rename(temp, file);
            } finally { await rm(temp, { force: true }); }
        },
    };
    return createCoreEngine({ ...options, persistence });
}
