import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const sites = [
    { prefix: "/certification-coach/", directory: process.env.LANDING_DIRECTORY ?? "../Certification Coach Website",
        files: new Set(["index.html", "primer.css", "landing.css", "LICENSE", "LICENSES.txt", "THIRD-PARTY-NOTICES.md"]) },
    { prefix: "/github-certification-coach/", directory: "_site",
        files: new Set(["index.html", "lite/index.html", "client.mjs", "i18n.mjs", "markdown.mjs",
            "lite-api.mjs", "vendor/markdown-parser.mjs", "LICENSE", "LICENSES.txt", "THIRD-PARTY-NOTICES.md"]) },
];

export async function startPreview({ port = 0 } = {}) {
    const server = createServer(async (req, res) => {
        const url = new URL(req.url, "http://localhost");
        if (url.pathname === "/") {
            res.writeHead(302, { Location: sites[0].prefix }).end();
            return;
        }
        const site = sites.find(item => url.pathname.startsWith(item.prefix));
        if (!site || !["GET", "HEAD"].includes(req.method)) { res.writeHead(404).end(); return; }
        let name = url.pathname.slice(site.prefix.length);
        if (!name || name.endsWith("/")) name += "index.html";
        if (!site.files.has(name)) { res.writeHead(404).end(); return; }
        try {
            const data = await readFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), site.directory, name));
            const type = name.endsWith(".html") ? "text/html" : /\.(m?js)$/.test(name) ? "text/javascript" :
                name.endsWith(".css") ? "text/css" : "text/plain";
            res.writeHead(200, {
                "Content-Type": `${type}; charset=utf-8`, "Cache-Control": "no-store",
                "X-Content-Type-Options": "nosniff", "Referrer-Policy": "no-referrer",
            }).end(req.method === "HEAD" ? undefined : data);
        } catch (error) {
            console.error(`Preview could not serve ${site.directory}/${name}:`, error);
            res.writeHead(error.code === "ENOENT" ? 404 : 500).end("Preview file unavailable. Run npm run build:pages.");
        }
    });
    await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(port, "127.0.0.1", resolve);
    });
    return {
        origin: `http://127.0.0.1:${server.address().port}`,
        close: () => new Promise((resolve, reject) => {
            server.close(error => error ? reject(error) : resolve());
            server.closeIdleConnections();
        }),
    };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const preview = await startPreview({ port: Number(process.env.PORT ?? 8766) });
    console.log(`Landing: ${preview.origin}/certification-coach/`);
    console.log(`Lite:    ${preview.origin}/github-certification-coach/`);
    const stop = async () => { await preview.close(); };
    process.once("SIGINT", stop);
    process.once("SIGTERM", stop);
}
