import { createEngine, InputError } from "./engine-core.mjs";

const actions = new Set(["select_exam", "set_language", "start", "select", "answer", "flag",
    "finish", "position", "study_filter", "reset_study", "retry_question"]);

export function browserPersistence(indexedDB = globalThis.indexedDB) {
    let connection;
    async function database() {
        if (!indexedDB) throw new Error("Browser storage is unavailable. Enable IndexedDB to use Lite.");
        if (!connection) connection = new Promise((resolve, reject) => {
            const request = indexedDB.open("github-certification-coach-lite", 1);
            request.onupgradeneeded = () => request.result.createObjectStore("files");
            request.onsuccess = () => {
                const db = request.result;
                db.onversionchange = () => { db.close(); connection = undefined; };
                resolve(db);
            };
            request.onerror = () => { connection = undefined; reject(request.error); };
            request.onblocked = () => {
                connection = undefined;
                reject(new Error("Browser storage upgrade is blocked. Close other Lite tabs and reload."));
            };
        });
        return connection;
    }
    async function transaction(mode, operation) {
        const db = await database();
        return new Promise((resolve, reject) => {
            const tx = db.transaction("files", mode);
            const request = operation(tx.objectStore("files"));
            tx.oncomplete = () => resolve(request.result);
            tx.onabort = () => reject(new Error(`Progress could not be saved or read: ${tx.error?.message ?? "browser storage transaction failed"}. Check available storage and browser permissions.`));
        });
    }
    return {
        read: name => transaction("readonly", store => store.get(name)),
        write: contents => transaction("readwrite", store => store.put(contents, "coach-state.json")),
    };
}

export function createLiteAPI({ persistence = browserPersistence(), locks = globalThis.navigator?.locks,
    ...engineOptions } = {}) {
    return async (action, input = {}) => {
        if (action && (!actions.has(action) || action === "start" && !["exam", "learn"].includes(input.mode))) {
            throw new InputError("Lite supports Mock exam and Learn only. Copilot and local review approvals require the desktop canvas.");
        }
        if (!locks) throw new Error("Safe browser storage requires Web Locks. Use a current browser over HTTPS (or localhost).");
        return locks.request("github-certification-coach-lite-state", async () => {
            // Reload under the cross-tab lock so two tabs never overwrite each other's saved answers.
            const engine = createEngine({ ...engineOptions, persistence,
                send: () => { throw new Error("Copilot is unavailable in Lite."); }, sessionId: () => undefined });
            await engine.load();
            return action ? engine.mutate(action, input) : engine.getState();
        });
    };
}
