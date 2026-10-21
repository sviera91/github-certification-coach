import { test } from "node:test";
import assert from "node:assert/strict";
import { parseHTML } from "linkedom";
import { renderMarkdown } from "./markdown.mjs";

function render(source) {
    const { document } = parseHTML("<!doctype html><html><body></body></html>");
    document.body.append(renderMarkdown(document, source));
    return document.body;
}

test("Copilot Markdown renders emphasis, paragraphs, lists, headings, code, quotes, and source links", () => {
    const body = render(`## Correct: Output safeguards

**Correct:** Apply *safeguards* before presentation.

**Why alternatives are wrong:**
- **Training:** Filtering is not model training.
- Human review is still needed.

3. Review \`generatedCode\`.
4. Test it.

> This is illustrative.

\`\`\`js
if (x < 2) console.log("<script>not HTML</script>");
\`\`\`

**Official source:** https://docs.github.com/en/copilot/responsible-use/inline-suggestions
`);
    assert.equal(body.querySelector("h4").textContent, "Correct: Output safeguards");
    assert.equal(body.querySelector("p strong").textContent, "Correct:");
    assert.equal(body.querySelector("em").textContent, "safeguards");
    assert.equal(body.querySelectorAll("ul li").length, 2);
    assert.equal(body.querySelector("ul li strong").textContent, "Training:");
    assert.equal(body.querySelector("ol").getAttribute("start"), "3");
    assert.equal(body.querySelector("li code").textContent, "generatedCode");
    assert.match(body.querySelector("blockquote").textContent, /illustrative/);
    assert.match(body.querySelector("pre code").textContent, /x < 2/);
    assert.equal(body.querySelector("script"), null);
    const link = body.querySelector("a");
    assert.equal(link.getAttribute("href"), "https://docs.github.com/en/copilot/responsible-use/inline-suggestions");
    assert.equal(link.getAttribute("target"), "_blank");
    assert.equal(link.getAttribute("rel"), "noreferrer noopener");
    assert.doesNotMatch(body.textContent, /\*\*Correct/);
});

test("tables, nested lists, task markers, references, escapes, and entities retain their meaning", () => {
    const body = render(`| Option | Meaning |
| --- | --- |
| **A** | \`x < y\` |

- Parent
  - Child
- [x] Reviewed
- [ ] Pending

[Documentation][source]

[source]: https://docs.github.com/?a=1&amp;b=2 "Official &amp; safe"

\\*literal\\* &amp; &#60; &lt;tag&gt; &amp;lt;

~~Old guidance~~
`);
    assert.equal(body.querySelector("th").getAttribute("scope"), "col");
    assert.equal(body.querySelector("td strong").textContent, "A");
    assert.equal(body.querySelector("td code").textContent, "x < y");
    assert.equal(body.querySelector("ul ul li").textContent, "Child");
    assert.match(body.textContent, /\[x\] Reviewed/);
    assert.match(body.textContent, /\[ \] Pending/);
    assert.equal(body.querySelector("input"), null);
    assert.equal(body.querySelector("a").getAttribute("href"), "https://docs.github.com/?a=1&b=2");
    assert.equal(body.querySelector("a").getAttribute("title"), "Official & safe");
    assert.match(body.textContent, /\*literal\* & < <tag> &lt;/);
    assert.equal(body.querySelector("tag"), null);
    assert.equal(body.querySelector("del").textContent, "Old guidance");
});

test("model HTML, active URL schemes, relative URLs, and images cannot create active content or fetch resources", () => {
    const body = render(`<script>window.pwned = true</script>
<img src="https://example.com/tracker" onerror="alert(1)">
<svg onload="alert(1)"><a href="javascript:alert(1)">unsafe</a></svg>
<iframe src="https://example.com"></iframe>
<style>body{display:none}</style>

[script](javascript:alert%281%29)
[encoded](jav&#x61;script:alert%281%29)
[data](data:text/html,unsafe)
[file](file:///etc/passwd)
[local](/api/state)
[relative](./client.mjs)
[network](//example.com/steal)
[credentials](https://user:secret@example.com/)
![tracking](https://example.com/pixel.png)

[safe](https://docs.github.com/)
`);
    assert.equal(body.querySelector("script, img, svg, iframe, style, input, form, object, embed"), null);
    assert.equal(body.querySelectorAll("a").length, 1);
    assert.equal(body.querySelector("a").getAttribute("href"), "https://docs.github.com/");
    for (const node of body.querySelectorAll("*")) {
        for (const attr of node.attributes) assert.doesNotMatch(attr.name, /^on|^style$|^src$/i);
    }
    assert.match(body.textContent, /<script>/);
    assert.match(body.textContent, /tracking/);
});

test("plain text, incomplete Markdown, non-English content, and long code remain readable", () => {
    const body = render("Explicación **correcta**: Português e español.\nA → B → C\n\nAn incomplete **marker\n\n```yaml\n" + "x".repeat(1000));
    assert.equal(body.querySelector("strong").textContent, "correcta");
    assert.match(body.textContent, /A → B → C/);
    assert.match(body.textContent, /\*\*marker/);
    assert.equal(body.querySelector("pre code").textContent, "x".repeat(1000));
});
