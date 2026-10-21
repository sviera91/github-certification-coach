const token = new URL(import.meta.url).searchParams.get("token") ?? "";
const { Lexer, decodeHTML } = await import(new URL(`./vendor/markdown-parser.mjs?token=${token}`, import.meta.url));

function linkURL(value) {
    if (!/^https?:\/\//i.test(value) || /[\u0000-\u0020\u007f]/.test(value)) return;
    try {
        const url = new URL(value);
        if (["https:", "http:"].includes(url.protocol) && !url.username && !url.password) return url.href;
    } catch {
        // Invalid or unsupported model links remain readable text, not navigation.
    }
}

export function renderMarkdown(document, source) {
    const fragment = document.createDocumentFragment();
    const element = (tag, content) => {
        const node = document.createElement(tag);
        if (content !== undefined) node.textContent = content;
        return node;
    };
    function append(parent, tokens) {
        for (const item of tokens) {
            switch (item.type) {
                case "space": break;
                case "heading": {
                    const node = element(`h${Math.min(6, item.depth + 2)}`);
                    append(node, item.tokens);
                    parent.append(node);
                    break;
                }
                case "paragraph":
                case "strong":
                case "em":
                case "del":
                case "blockquote": {
                    const tag = item.type === "paragraph" ? "p" : item.type;
                    const node = element(tag);
                    append(node, item.tokens);
                    parent.append(node);
                    break;
                }
                case "text":
                    if (item.tokens) append(parent, item.tokens);
                    else parent.append(document.createTextNode(decodeHTML(item.raw ?? item.text)));
                    break;
                case "escape":
                    parent.append(document.createTextNode(item.text));
                    break;
                case "html":
                    parent.append(document.createTextNode(item.raw));
                    break;
                case "br":
                case "hr":
                    parent.append(element(item.type));
                    break;
                case "codespan":
                    parent.append(element("code", item.text));
                    break;
                case "code": {
                    const pre = element("pre");
                    pre.append(element("code", item.text));
                    parent.append(pre);
                    break;
                }
                case "list": {
                    const list = element(item.ordered ? "ol" : "ul");
                    if (item.ordered && Number.isInteger(item.start)) list.setAttribute("start", item.start);
                    for (const entry of item.items) {
                        const row = element("li");
                        if (entry.task) row.append(document.createTextNode(entry.checked ? "[x] " : "[ ] "));
                        append(row, entry.tokens);
                        list.append(row);
                    }
                    parent.append(list);
                    break;
                }
                case "link": {
                    const href = linkURL(decodeHTML(item.href));
                    if (!href) { append(parent, item.tokens); break; }
                    const link = element("a");
                    link.setAttribute("href", href);
                    link.setAttribute("target", "_blank");
                    link.setAttribute("rel", "noreferrer noopener");
                    if (item.title) link.setAttribute("title", decodeHTML(item.title));
                    append(link, item.tokens);
                    parent.append(link);
                    break;
                }
                case "image":
                    parent.append(document.createTextNode(decodeHTML(item.text)));
                    break;
                case "table": {
                    const wrapper = element("div");
                    wrapper.className = "markdown-table";
                    wrapper.tabIndex = 0;
                    const table = element("table");
                    const head = element("thead"), body = element("tbody");
                    const row = (cells, tag) => {
                        const tr = element("tr");
                        for (const cell of cells) {
                            const td = element(tag);
                            if (tag === "th") td.setAttribute("scope", "col");
                            append(td, cell.tokens);
                            tr.append(td);
                        }
                        return tr;
                    };
                    head.append(row(item.header, "th"));
                    for (const cells of item.rows) body.append(row(cells, "td"));
                    table.append(head, body);
                    wrapper.append(table);
                    parent.append(wrapper);
                    break;
                }
                default:
                    parent.append(document.createTextNode(item.raw ?? item.text ?? ""));
            }
        }
    }
    append(fragment, Lexer.lex(source, { gfm: true }));
    return fragment;
}
