import { createServer } from "node:http";
import { randomBytes, timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";
import { InputError } from "./engine.mjs";

export async function startServer({ engine, log = () => {} }) {
    const token = randomBytes(32).toString("hex");
    const nonce = randomBytes(24).toString("base64");
    const [html, css, client, primer, sendIcon, i18n] = await Promise.all([
        "index.html", "style.css", "client.mjs", "vendor/primer.css", "vendor/send.svg", "i18n.mjs",
    ].map(name =>
        readFile(new URL(name, import.meta.url), "utf8")));
    function authorized(value) {
        return typeof value === "string" && Buffer.byteLength(value) === Buffer.byteLength(token) &&
            timingSafeEqual(Buffer.from(value), Buffer.from(token));
    }
    const server = createServer(async (req, res) => {
        const origin = `http://127.0.0.1:${req.socket.localPort}`;
        const url = new URL(req.url, origin);
        res.setHeader("Cache-Control", "no-store");
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Referrer-Policy", "no-referrer");
        res.setHeader("Content-Security-Policy", `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'nonce-${nonce}'; img-src data: https://learn.github.com; connect-src 'self'; base-uri 'none'; form-action 'none'`);
        const reply = (status, body) => {
            res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
            res.end(JSON.stringify(body));
        };
        try {
            if (req.headers.host !== origin.slice(7) ||
                (req.headers.origin && req.headers.origin !== origin) ||
                req.headers["sec-fetch-site"] === "cross-site" && req.method !== "GET" ||
                !authorized(req.headers["x-coach-token"] ?? url.searchParams.get("token"))) {
                return reply(403, { error: "Open this page from the certification canvas." });
            }
            if (req.method === "GET" && url.pathname === "/") {
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                return res.end(html.replaceAll("__NONCE__", nonce).replace("__PRIMER__", primer)
                    .replace("__STYLE__", css).replace("__SEND_ICON__", sendIcon).replaceAll("__TOKEN__", token));
            }
            if (req.method === "GET" && ["/client.mjs", "/i18n.mjs"].includes(url.pathname)) {
                res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
                return res.end(url.pathname === "/client.mjs" ? client : i18n);
            }
            if (req.method === "GET" && url.pathname === "/api/state") return reply(200, await engine.getState());
            if (req.method === "POST" && url.pathname === "/api/action") {
                if (!req.headers["content-type"]?.startsWith("application/json")) return reply(415, { error: "JSON required." });
                let size = 0, chunks = [];
                for await (const chunk of req) {
                    size += chunk.length;
                    if (size > 8192) return reply(413, { error: "Request is too large." });
                    chunks.push(chunk);
                }
                let input;
                try { input = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
                catch { return reply(400, { error: "Invalid JSON." }); }
                if (!input || typeof input !== "object" || Array.isArray(input) || typeof input.action !== "string") {
                    return reply(400, { error: "An action is required." });
                }
                return reply(200, await engine.mutate(input.action, input));
            }
            return reply(404, { error: "Route not found." });
        } catch (error) {
            if (error instanceof InputError) return reply(400, { error: error.message });
            log(error);
            return reply(500, { error: "The prototype could not complete or save this operation. Check the extension log before continuing." });
        }
    });
    await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(0, "127.0.0.1", resolve);
    });
    return {
        url: `http://127.0.0.1:${server.address().port}/?token=${token}`,
        close: () => new Promise((resolve, reject) => {
            server.close(error => error ? reject(error) : resolve());
            server.closeIdleConnections();
        }),
    };
}
