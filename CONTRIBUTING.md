# Contributing

The question banks are **AI-authored Preview content**. We especially welcome
human subject-matter review and hands-on QA. This is unofficial practice,
not official certification content or a readiness guarantee. Never submit exam
dumps, recalled live-exam questions, or copied proprietary training material.

## Validate questions without installing

Open the [review packets](README.md#review-without-taking-an-exam), choose a certification, and read
the questions with their keys, explanations, hints, sources, and translations.
No mock attempt or canvas installation is required.

For each question, verify:

- A clear scenario with exactly one best answer and plausible distractors.
- The answer key agrees with every explanation and current official sources.
- The question maps to the stated exam domain and assesses a useful concept.
- Hints guide thinking without revealing the answer.
- Spanish and Brazilian Portuguese preserve the English meaning and answer
  order, including explanations and hints.

Report problems through the question's **Report question issue** control or a
[question issue](https://github.com/sviera91/github-certification-coach/issues/new?template=question.md).
Include the question ID, content revision, language, what is wrong, and the
supporting official documentation. A pull request with a focused correction
is also welcome. Do not include private learner progress or conversations.

Human approval is revision-specific, not a general endorsement of a bank.
Use the repository's existing [review workflow](README.md#content-quality-and-human-approval)
for formal approval and import. English review precedes translation approval.
Any relevant content edit requires renewed review. A browser check, passing
test, or AI self-review is not human content approval. Lite does not record
local approval decisions.

## Test the experiences

Check Mock exam timing, autosave, reload/resume, review-before-submit, flags,
unanswered questions, expiry, and last-saved-choice grading. Check Learn's
unchecked selections, explicit Check answer, fixed explanations, retry, filters,
and reset confirmation. Also test keyboard navigation, narrow layouts,
light/dark themes, translations, multiple tabs, and storage failure messages.

Lite must never offer or call AI Coach, Copilot explanations, or AI-generated
study plans. Its browser progress is independent from desktop learner data.

For local development with Node.js 22 or newer:

```sh
npm ci --ignore-scripts
npm run build
npm run build:pages
npm test
npm run check:banks
```

For browser integration checks, run `npx playwright install chromium` once,
then `npm run test:pages`. To use an already installed Google Chrome instead,
set `PLAYWRIGHT_CHANNEL=chrome`. CI installs Chromium and runs these checks
before deploying Pages.

Run `npm run preview:pages` and open
`http://127.0.0.1:8766/github-certification-coach/` for Lite.
The build produces only Lite in `_site/`. The landing page, cross-platform
roadmap, and platform proposals live in
[`sviera91/certification-coach`](https://github.com/sviera91/certification-coach).
To preview that separate checkout alongside Lite, set `LANDING_DIRECTORY`
to its path; it is served at `/certification-coach/`.
Web Locks and browser cryptography require
HTTPS or localhost; do not open the HTML directly using `file://`.

The Pages build publishes an explicit public runtime allowlist, not the
installed extension directory. Never add progress, tokens, credentials,
`artifacts/`, or another person's learner data to a commit or Pages artifact.

## Future certification ideas

See [the roadmap](ROADMAP.md). Azure, Terraform, GCP, and AWS are future ideas,
not implemented features. Submit cross-platform proposals in the landing
repository, not alongside GitHub question reports. Each future platform will
own its content, reviews, issues, and implementation in a separate repository.
