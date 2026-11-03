import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { chromium, expect } from "@playwright/test";
import { exams } from "./exams.mjs";
import { startPreview } from "./preview-pages.mjs";

await import("./build-pages.mjs");
let browser, server, base, landingURL;
before(async () => {
    server = await startPreview();
    base = `${server.origin}/github-certification-coach/`;
    landingURL = `${server.origin}/certification-coach/`;
    browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || undefined });
});
after(async () => {
    await browser?.close();
    await server?.close();
});

async function open(t, options = {}) {
    const context = await browser.newContext(options);
    t.after(() => context.close());
    await context.route("https://learn.github.com/**", route => route.abort());
    const page = await context.newPage();
    const errors = [], apiRequests = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("request", request => { if (new URL(request.url()).pathname.includes("/api/")) apiRequests.push(request.url()); });
    t.after(() => {
        assert.deepEqual(errors, [], "No page JavaScript errors");
        assert.deepEqual(apiRequests, [], "Lite never contacts the canvas API");
    });
    return { page, context };
}
async function chooseFoundations(page) {
    await page.locator("#exam-cards .exam-card").first().getByRole("button").click();
    await expect(page.locator("#setup")).toBeVisible();
}

test("Lite uses the canvas Primer themes under its repository path", async t => {
    for (const colorScheme of ["light", "dark"]) {
        const { page } = await open(t, { colorScheme, viewport: { width: 390, height: 844 } });
        await page.goto(base);
        assert.equal(page.url(), base);
        await expect(page.locator("#exam-cards .exam-card")).toHaveCount(6);
        assert.equal(await page.locator("html").getAttribute("data-color-mode"), colorScheme);
        assert.equal(await page.evaluate(() => getComputedStyle(document.body).backgroundColor),
            colorScheme === "light" ? "rgb(255, 255, 255)" : "rgb(13, 17, 23)");
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
        await chooseFoundations(page);
        await expect(page.locator('[data-mode="coach"]')).toBeHidden();
        await expect(page.locator("#bank-review")).toBeHidden();
        await page.locator('[data-mode="learn"]').click();
        await expect(page.locator("#question")).toContainText(/\S/);
        await expect(page.locator("#coaching")).toBeHidden();
        await expect(page.locator("#explain-further")).toBeHidden();
        assert.equal(await page.getByRole("link", { name: "About Certification Coach" }).getAttribute("href"),
            "../certification-coach/");
    }
});

test("Learn persists unchecked drafts and fixed explanations across reload, including translation", async t => {
    const { page } = await open(t);
    await page.goto(base);
    await chooseFoundations(page);
    await page.locator('[data-mode="learn"]').click();
    await expect(page.locator("#attempt")).toBeVisible();
    const prompt = await page.locator("#question").textContent();
    const question = exams[0].questions.find(item => item.prompt === prompt);
    await page.locator('#choices input[type="radio"]').nth(question.correct).check();
    await expect(page.locator("#save-status")).toContainText("not checked");
    await expect(page.locator("#explanations")).toBeHidden();
    await page.reload();
    await chooseFoundations(page);
    await page.locator("#resume").click();
    await expect(page.locator('#choices input[type="radio"]').nth(question.correct)).toBeChecked();
    await page.locator("#answer").click();
    await expect(page.locator("#feedback")).toHaveText(/Correct/);
    await expect(page.locator("#explanations")).toBeVisible();
    await expect(page.locator("#explain-further")).toBeHidden();
    await page.locator("#language").selectOption("es");
    await expect(page.locator("#question")).toHaveText(question.translations.es.prompt);
    await page.locator("#language").selectOption("pt-BR");
    await expect(page.locator("#question")).toHaveText(question.translations["pt-BR"].prompt);
    await page.locator("#language").selectOption("en");
    await page.locator("#retry-question").click();
    await expect(page.locator("#explanations")).toBeHidden();
});

test("Mock autosaves final choices, resumes, reviews before grading, and never shows Copilot actions", async t => {
    const { page } = await open(t);
    await page.goto(base);
    await chooseFoundations(page);
    await page.locator('[data-mode="exam"]').click();
    await expect(page.locator("#attempt")).toBeVisible();
    const prompt = await page.locator("#question").textContent();
    const question = exams[0].questions.find(item => item.prompt === prompt);
    await page.locator('#choices input[type="radio"]').nth((question.correct + 1) % 4).check();
    await expect(page.locator("#save-status")).toContainText("saved");
    await page.locator('#choices input[type="radio"]').nth(question.correct).check();
    await expect(page.locator("#save-status")).toContainText("saved");
    await expect(page.locator("#explanations")).toBeHidden();
    const deadline = await page.evaluate(async () => (await (await import("./lite-api.mjs")).createLiteAPI()()).attempt.deadline);
    await page.reload();
    await chooseFoundations(page);
    await page.locator("#resume").click();
    assert.equal(await page.evaluate(async () => (await (await import("./lite-api.mjs")).createLiteAPI()()).attempt.deadline), deadline);
    await expect(page.locator('#choices input[type="radio"]').nth(question.correct)).toBeChecked();
    await page.locator("#finish").click();
    await expect(page.locator("#review")).toBeVisible();
    await expect(page.locator("#score")).toBeHidden();
    await page.locator("#submit-attempt").click();
    await expect(page.locator("#score")).toContainText("1 of 75 correct");
    await expect(page.getByRole("button", { name: /Ask Copilot for a study plan/ })).toHaveCount(0);
    await expect(page.locator("#explain-further")).toBeHidden();
});

test("IndexedDB persists coordinated writes from two tabs and reports storage failures explicitly", async t => {
    const { page, context } = await open(t);
    await page.goto(base);
    await chooseFoundations(page);
    await page.locator('[data-mode="learn"]').click();
    const second = await context.newPage();
    await second.goto(base);
    const change = async (target, index, choice) => target.evaluate(async ({ index, choice }) => {
        const api = (await import("./lite-api.mjs")).createLiteAPI();
        const state = await api();
        return api("select", { questionId: state.attempt.entries[index].id, choice });
    }, { index, choice });
    await Promise.all([change(page, 0, 1), change(second, 1, 2)]);
    const selections = await page.evaluate(async () => {
        const state = await (await import("./lite-api.mjs")).createLiteAPI()();
        return state.attempt.entries.slice(0, 2).map(entry => entry.selected);
    });
    assert.deepEqual(selections, [1, 2]);
    const failure = await context.newPage();
    await failure.addInitScript(() => {
        Object.defineProperty(window, "indexedDB", { value: undefined });
    });
    await failure.goto(base);
    await expect(failure.locator("#error")).toBeVisible();
    await expect(failure.locator("#error")).toContainText("Browser storage is unavailable");
});

test("a failed Lite bundle download shows an error instead of leaving a blank or loading screen", async t => {
    const context = await browser.newContext();
    t.after(() => context.close());
    await context.route("**/lite-api.mjs", route => route.abort());
    const page = await context.newPage();
    await page.goto(base);
    await expect(page.locator("#error")).toBeVisible();
    await expect(page.locator("#lite-loading")).toBeHidden();
});

test("old /lite/ bookmarks load the same practice modules and retain browser progress", async t => {
    const { page } = await open(t);
    await page.goto(base);
    await chooseFoundations(page);
    await page.locator('[data-mode="learn"]').click();
    await expect(page.locator("#attempt")).toBeVisible();
    await page.locator('#choices input[type="radio"]').nth(1).check();
    await expect(page.locator("#save-status")).toContainText("not checked");
    await page.goto(`${base}lite/`);
    await chooseFoundations(page);
    await page.locator("#resume").click();
    await expect(page.locator('#choices input[type="radio"]').nth(1)).toBeChecked();
    assert.equal(await page.getByRole("link", { name: "About Certification Coach" }).getAttribute("href"),
        "../../certification-coach/");
});
