import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import octicons from "@primer/octicons";
import { build } from "esbuild";

const root = path.dirname(fileURLToPath(import.meta.url));
const modules = path.join(root, "node_modules", "@primer");
const vendor = path.join(root, "vendor");
async function inlineCSS(file) {
    const source = await readFile(file, "utf8");
    const imports = [...source.matchAll(/@import\s+['"]([^'"]+)['"];/g)];
    let css = source;
    for (const match of imports) {
        css = css.replace(match[0], await inlineCSS(path.resolve(path.dirname(file), match[1])));
    }
    return css.replace(/\/\*# sourceMappingURL=.*?\*\//g, "");
}
const sources = [
    "primitives/dist/css/primitives.css",
    "primitives/dist/css/functional/themes/light.css",
    "primitives/dist/css/functional/themes/dark.css",
    "css/dist/core.css",
    "css/dist/box.css",
    "css/dist/labels.css",
];
const css = (await Promise.all(sources.map(source => inlineCSS(path.join(modules, source))))).join("\n");
const licenses = await Promise.all(["css", "primitives", "octicons"].map(async name =>
    `@primer/${name}\n${await readFile(path.join(modules, name, "LICENSE"), "utf8")}`));
for (const name of ["marked", "entities"]) {
    licenses.push(`${name}\n${await readFile(path.join(root, "node_modules", name, "LICENSE"), "utf8")}`);
}
await mkdir(vendor, { recursive: true });
await build({
    stdin: { contents: 'export { Lexer } from "marked"; export { decodeHTML } from "entities/decode";', resolveDir: root },
    bundle: true, format: "esm", platform: "browser", target: "es2022",
    outfile: path.join(vendor, "markdown-parser.mjs"), legalComments: "inline",
});
const icons = ["check-circle", "x-circle", "alert", "book", "history", "sync", "light-bulb", "arrow-switch"];
const sprite = `<svg xmlns="http://www.w3.org/2000/svg" class="icon-definitions" aria-hidden="true"><defs>${icons.map(name => {
    const svg = octicons[name].toSVG({ width: 16, height: 16 });
    return `<symbol id="icon-${name}" viewBox="${svg.match(/viewBox="([^"]+)"/)[1]}">${svg.replace(/^<svg[^>]*>|<\/svg>$/g, "")}</symbol>`;
}).join("")}</defs></svg>`;
await Promise.all([
    writeFile(path.join(vendor, "icons.svg"), sprite),
    writeFile(path.join(vendor, "primer.css"), css),
    writeFile(path.join(vendor, "send.svg"), octicons["paper-airplane"].toSVG({ width: 16, height: 16, "aria-hidden": "true" })),
    writeFile(path.join(vendor, "LICENSES.txt"), licenses.join("\n\n")),
]);
console.log("Built local Primer CSS, light/dark tokens, Octicons, and Markdown tokenizer.");
