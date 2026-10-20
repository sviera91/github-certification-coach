import { joinSession, createCanvas } from "@github/copilot-sdk/extension";
import path from "node:path";
import os from "node:os";
import { createEngine, COMPLETION_TOOL } from "./engine.mjs";
import { startServer } from "./server.mjs";

const panels = new Map();
let session;
const log = error => {
    const message = `Certification Coach: ${error?.message ?? String(error)}`;
    if (session) session.log(message, { level: "error" });
    else console.error(message);
};
const directory = path.join(process.env.COPILOT_HOME || path.join(os.homedir(), ".copilot"),
    "extensions", "certification-coach", "artifacts");
const engine = createEngine({
    directory,
    send: options => {
        if (!session) throw new Error("Copilot session has not connected.");
        return session.send(options);
    },
    sessionId: () => session?.sessionId,
    log,
});
await engine.load();
session = await joinSession({
    tools: [{
        name: COMPLETION_TOOL,
        description: "Complete an outstanding Certification Coach hint inside its canvas. Use the exact requestId from the extension prompt; never reveal the answer. Reject unsafe coaching with error=rejected.",
        parameters: {
            type: "object", additionalProperties: false,
            properties: { requestId: { type: "string" }, text: { type: "string" }, error: { type: "string", enum: ["rejected"] } },
            required: ["requestId"],
        },
        handler: (args, invocation) => engine.complete(args, invocation),
    }],
    canvases: [createCanvas({
        id: "certification-coach",
        displayName: "Certification Coach",
        description: "GitHub certification practice with exam selection, timed mocks, learning, in-canvas coaching, and revision-based human content review.",
        actions: [{
            name: "get_state",
            description: "Read certification catalog and selected attempt; answers remain hidden during an unfinished mock exam.",
            handler: () => engine.getState(),
        }],
        open: async context => {
            let panel = panels.get(context.instanceId);
            if (!panel) {
                panel = await startServer({ engine, log });
                panels.set(context.instanceId, panel);
            }
            return { title: "GitHub Certification Coach", url: panel.url };
        },
        onClose: async context => {
            const panel = panels.get(context.instanceId);
            if (!panel) return;
            panels.delete(context.instanceId);
            await panel.close();
        },
    })],
});
for (const signal of ["SIGINT", "SIGTERM"]) {
    process.once(signal, async () => {
        for (const panel of panels.values()) {
            try { await panel.close(); } catch (error) { log(error); }
        }
        process.exit(0);
    });
}
