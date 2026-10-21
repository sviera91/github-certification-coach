# GitHub Certification Coach

An unofficial, local GitHub certification practice canvas for the Copilot
desktop app. All AI-authored question banks start as **Preview**, not as a
validated certification-readiness assessment. They remain Preview until
every current question revision has been reviewed and approved by a human
and the full pool/coverage targets are met.

Current version: **0.4.1-preview**. See the [changelog](CHANGELOG.md) for release
history; the canvas version badge links to it.

**Learner progress stays on each person's computer, outside this repository.**
Answers, mock scores, flags, and coaching history are never uploaded to GitHub.
See [Storage and upgrades](#storage-and-upgrades) for the exact local path.

## Install for employees and partners

This is a Copilot desktop **canvas extension**, not a GitHub Pages website,
VS Code extension, or standalone browser app. You need a Copilot desktop build
that supports custom canvas extensions, access to Copilot under your own plan
and organization policies, Git, and Node.js 22 or newer for the installer.
No hosting account, operator model API key, or npm dependencies are needed to
install the checked-in runtime.

Clone the public repository, inspect its code, then install it for your user:

```sh
git clone https://github.com/sviera91/github-certification-coach.git
cd github-certification-coach
node install.mjs
```

Restart Copilot, open a conversation, and ask:
**Open the Certification Coach canvas.**

To update, run `git pull --ff-only` and `node install.mjs` again, then restart
Copilot. The installer copies an explicit runtime-file allowlist and leaves
your existing `artifacts/` directory untouched. Never copy another person's
entire installed extension folder: it may contain their private progress.

If the canvas is not discovered after restarting, verify that your desktop
build supports custom canvases. A browser or VS Code Copilot installation alone
cannot host it.

## Certifications and preparation

All six certifications are enabled: Foundations, Administration, Advanced
Security, Copilot, Actions, and Agentic AI Developer. Each has a 225-question
Preview bank. The newer Agentic AI Business Professional beta is outside
this release.

Each certification has its own official preparation links, blueprint, timing,
domain coverage, and question bank. Agentic AI Developer uses 120 minutes;
the other five use 100 minutes. Microsoft Learn paths or modules are linked where
verified; training is not copied, and completing it is not a prerequisite
for practice.

Full-length practice targets 75 questions from a 225-question original pool.
This is our practice policy, not a guarantee of the number of items on a real
exam. Official details are linked on the preparation screen. Sampling follows
published domain weights (midpoints when ranges are published), apportioned
with largest remainders constrained to the published percentage ranges. No question repeats within an attempt; later attempts
can repeat previously seen questions. A full mock is disabled if its bank
cannot cover the required domain quotas. Learning modes can focus on one domain.

## Practice modes and navigation

### Languages

The interface, practice questions, explanations, and authored hints support
**English, Spanish, and Brazilian Portuguese**. Change the language in the
header without restarting your attempt, changing its score, or resetting its
timer. Coaching requests use the selected language; previous chat messages
remain in their original language. Official study links may open in English.

The official Foundations, Administration, Advanced Security, Copilot, and
Actions exams list Spanish and Portuguese among their available languages.
**Agentic AI Developer currently lists English only**: its Spanish and
Portuguese practice translations do not imply official exam availability.
Older saved attempts without translations remain in English and display an
explicit notice; new attempts include every supported practice language.

- **Mock exam:** selecting an answer saves it immediately, without revealing
  correctness. There is no separate Save answer step. Answer changes remain
  possible until submission or timeout. Failed saves retain the local selection,
  show an explicit error/retry, and block navigation to prevent losing it.
- **Learn:** selecting an answer saves an unchecked draft. **Check answer**
  checks it and reveals the fixed answer and explanations.
- **AI coach:** selections also stay unchecked until **Check answer**. Wrong
  answers request conceptual hints in the attached Copilot conversation. Learners
  may retry or explicitly reveal the answer.

Learn and AI Coach share **one persistent, ungraded study workspace per
certification**, covering the full question bank. Study a few questions today,
return tomorrow, or switch between these modes without submitting or losing
progress. A question counts as answered once checked, even if the answer was
wrong; answered does not mean mastered. Flags, answer history, and coaching
messages are retained. Switching to AI Coach does not conceal an answer already
seen in Learn.

Use **Try again** to hide the current explanation and make another attempt;
this retains earlier checks and the answered status. **Reset study progress**
requires confirmation and clears only the selected certification's shared
Learn/Coach answers, flags, and coaching. It never erases mock-result history.

Domain and **All / Not yet answered / Previously incorrect / Flagged** filters
are available inside study modes and never delete progress. Previously incorrect
means a question has at least one wrong checked answer, even if later corrected.
Question order is stable and navigation position is saved. When checking or
unflagging removes the current question from a filter, it stays visible for
feedback until you navigate or change filters.

Navigation preserves unchecked selections, including after a restart. Those
selections are labeled **not checked**; merely selecting never triggers grading
or AI feedback in learning modes.

In **Mock exam only**, **Finish and review** always opens a pre-submission review, even when every
question is answered. It shows unanswered/not-checked and flagged counts, with
filters and links back to the questions. A question may belong to both counts.
Learners can return to questions or explicitly **Submit and grade**, including
submitting anyway when attention items remain.

Leaving a live mock through **Choose mode** or **Switch certification** requires
confirmation and immediately submits it; unanswered questions count as incorrect.
Starting Mock again after submitting or exiting creates a fresh exam. Canceling
the confirmation keeps the current mock.

Accidentally closing the canvas/app or losing the connection does **not** submit
the mock. Its timer continues, and reopening resumes the same attempt if time
remains. Expiry submits automatically on the next state read. Foundations
additionally offers an explicitly non-simulation 120-minute relaxed option.

## Scores and study guidance

Only mocks are scored. Results show raw **0-100 practice accuracy**, not an official scaled score or a
pass prediction. Unanswered questions count as wrong. Unchecked drafts never
enter the answer key calculation. The graded answer is the last saved choice.
Learn and AI Coach show saved study progress, not a percentage grade.

A score ring and domain bars use text and icons alongside semantic colors:
**Needs focus** below 70, **Building confidence** 70–84, and **Strong practice
result** 85–100. These are practice bands, never official pass/fail thresholds.

Per-domain results show correct/total, accuracy, and relevant official study
links. These help choose a study focus; small samples are not a reliable
readiness assessment.

The latest **10 mock results per certification** are saved locally with date,
score, domain counts, timing option, and submission/early-exit/timeout reason.
Earlier results retain summaries and study plans, not full question-by-question
replay. The most recent mock retains its exact questions for answer review until
another mock replaces it.

**Explain further with Copilot** is available only after a fixed answer is
visible in study or after mock submission. It requests a deeper rationale for
the correct answer and alternatives, useful examples, and guidance on what to
look for in the linked documentation. This AI-generated explanation cannot
change the fixed key. It does not fetch documentation or promise precise
sections, anchors, or quotations; links may still lead to a broad page.

**Ask Copilot for a study plan** on a mock result sends its score, domain counts,
and associated official study resources—not coaching conversations—to suggest
priorities. AI insights run only on request, use the learner's Copilot access,
and remain labeled as potentially incorrect. Saved insights remain in the
language requested, even if the interface language later changes.

Copilot hints, deeper explanations, and saved study plans render Markdown:
headings, emphasis, lists, links, tables, quotes, and code blocks. Existing saved
responses gain formatting without being regenerated or changing learner progress.
Raw HTML remains literal text, images do not load, and links allow only absolute
HTTP(S) URLs without credentials. Learner messages remain plain text.

The guided chat uses an accessible paper-airplane send icon. Accepted messages
clear the composer; failed submissions retain its draft. AI is probabilistic
and may make mistakes or reveal too much. Keys, scores, and review counts are
deterministic, not decided by AI.

## Report a problem

Use **Report question issue** alongside a question or **Report canvas issue**
in the header. Enter a summary and description, inspect the public-report
preview, then select **Review and submit on GitHub**. This opens a prefilled
issue in [this repository](https://github.com/sviera91/github-certification-coach/issues);
you must sign in and submit it yourself. Opening the form alone does not create
an issue.

Question reports attach the certification, domain, question ID, exact content
revision, app version, and practice mode. They never automatically include your
answers, scores, coaching conversation, attempt ID, or local capability URL.
Only your written description/steps and the displayed context are placed in the
GitHub link. Reports are public: do not enter private code, credentials, personal
information, or sensitive screenshots. A timed mock keeps running while you
prepare a report. Report drafts are temporary, not added to learner-state files.

## Content quality and human approval

### Review without taking an exam

Reviewers **do not need to attempt any questions or install the canvas**.
Share one Markdown packet per certification, each containing its full
**225-question** bank, answer keys, every explanation, concepts, coaching
hints, source links, and expandable Spanish/Portuguese versions:

| Certification | Shareable review file |
| --- | --- |
| Foundations | [Foundations review packet](reviews/foundations.md) |
| Administration | [Administration review packet](reviews/administration.md) |
| Advanced Security | [Advanced Security review packet](reviews/security.md) |
| Copilot | [Copilot review packet](reviews/copilot.md) |
| Actions | [Actions review packet](reviews/actions.md) |
| Agentic AI Developer | [Agentic AI Developer review packet](reviews/agentic.md) |

Open a packet in GitHub or a Markdown editor. Each question has three separate
checkboxes; change `[ ]` to `[x]` only for the review you personally performed:

- **English content approved:** the English question, choices, fixed answer,
  explanations, concept, hints, and supporting documentation are correct.
- **Spanish translation approved:** the Spanish content faithfully represents
  the already-approved English content, including option order, answer meanings,
  explanations, hints, and documentation references.
- **Brazilian Portuguese translation approved:** the equivalent translation
  check for Brazilian Portuguese.

Different people can complete these checks. No reviewer needs to approve all
three languages. Translation approval requires current English approval,
imported previously or checked in the same returned packet. Documentation links
may remain in English; reviewers verify the references and meaning, not a
translation of the external documentation website.

Leave uncertain items unchecked and send corrections separately, with the
question ID. Return the edited file to the maintainer or open a pull request.
No learner data is included.

The maintainer imports returned files explicitly:

```sh
npm run review:import -- reviews/foundations.md --confirm-human-review
```

Multiple packet paths may be supplied in one import. Only checked items become
approved in `bank-reviews.json`; unchecked items do not revoke prior approval.
The importer validates the exact packet content and current fingerprints,
rejects edited or stale question sections, and writes nothing if any supplied
packet fails validation. The confirmation flag is a human attestation, not
permission for AI to approve its own work.

Commit the resulting ledger and install the updated extension to display the
approvals in the canvas. Existing user-local revocations still take precedence.
Reviewing can also happen directly through **Review question bank**, without
starting or completing a practice attempt.

To generate fresh packets after bank changes:

```sh
npm run review:export
```

Existing files are protected from accidental overwrite. Preserve returned
review edits before deliberately regenerating with
`npm run review:export -- --replace`; new packets start unchecked and never
fabricate approval.

Questions are independently authored, documentation-backed practice items,
not copied exam questions or Microsoft Learn assessments. Authorship includes
AI consistency review; `npm run check:banks` separately verifies shape, IDs,
normalized prompt uniqueness, answer bounds, sources, and domain coverage.
Neither AI review nor structural checks establish factual correctness.

**Review question bank** on a preparation page opens all choices, fixed
explanations, authored hints, and the documentation link. The reviewer must
personally verify them and tick the acknowledgment before marking the selected
language revision human-approved. Select English to review factual correctness,
or Spanish/Portuguese to review translation fidelity against the English
reference shown alongside it. Translation approval is blocked until English
is approved. The bank's reviewed count and Preview status reflect the selected
language; English approval alone never marks translations reviewed.
Approval can be revoked. To avoid inadvertently exposing the
key, content review is unavailable while that certification has an unfinished
mock. Persistent study progress does not block human review.

English approval uses a SHA-256 fingerprint over the ID, domain, prompt,
choices, answer key, explanations, concept, hints, and source. Each translation
approval fingerprints that English content plus its own translated fields.
**Changing English or its source invalidates all three approvals. Changing a
translation invalidates only that language's approval.** Revoking English
also clears dependent translation approvals; revoking a translation leaves
English and the other translation unchanged. Translations retain the same IDs,
option order, and fixed answer key.

Records are stored per question under `en`, `es`, and `pt-BR`, each with its
own revision and timestamp. Old single-checkbox packets must be regenerated;
old shared approval records are not automatically promoted into separate
attestations. Local approval is an
honor-system record, not a secure reviewer identity, signature, or centrally
enforced role. AI must never mark its own questions human-approved.

After human review, run `npm run export:reviews` in the source folder to export
only current-revision approval fingerprints and timestamps into
`bank-reviews.json` for distribution with the bank. No attempts or conversations
are exported. The bundled ledger starts empty; installing it does not fabricate
approvals. A learner's local revocation overrides a bundled approval.

## Storage and upgrades

Runtime state lives at:

```text
$COPILOT_HOME/extensions/certification-coach/artifacts/coach-state.json
```

`COPILOT_HOME` defaults to `~/.copilot`, making the usual path
`~/.copilot/extensions/certification-coach/artifacts/coach-state.json`.
This is **outside the cloned source repository**. Each learner has their own
local file; there is no central progress store, GitHub upload, or cross-device
sync. It contains answers, flags, coaching, AI insights, saved position/filters,
and the latest 10 mock-result summaries per certification.

One shared study workspace and the most recent mock are retained independently
per certification. Starting a mock does not replace study progress. Workspaces
snapshot their exact question content and keys so later bank edits do not
silently change existing answers or grading. Resetting study deliberately loads
the current bank.

State version 2 upgrades atomically to version 3. Saved Learn/Coach checks,
drafts, flags, and conversations are recovered where still present; a completed
study session is reopened as ungraded study, and a former domain-only study is
expanded to the full pool without removing its saved question snapshots.
Progress overwritten by an older release cannot be reconstructed. Existing
completed mock results are added to history once.
If an older completed mock has no saved submission timestamp, its history date
is the migration time rather than an inferred exam date.

The original `prototype-attempt.json` is migrated on first load without deleting
or overwriting the original. Its four questions, answers, conversation, and
deadline are preserved for mocks. Legacy study checks are retained and expanded
to the full bank.

Writes use an atomic rename. Failed saves are surfaced, not acknowledged as
successful. Concurrent providers across multiple Copilot conversations are not
supported: use one owning conversation at a time. Human approvals are user-local;
sharing runtime code never publishes private progress. Only explicitly exported
bank approval records travel in `bank-reviews.json`. The installer copies only
an explicit runtime-file allowlist and never copies, deletes, or replaces learner
`artifacts/`. `.gitignore` also excludes `artifacts/`, `coach-state.json`, and
`prototype-attempt.json` as defense in depth. Do not force-add or share these
files.

## Privacy and runtime

Restart the Copilot app or use a fresh runtime after updating the installation,
then ask: **Open the Certification Coach canvas.**

The server binds to `127.0.0.1` on an ephemeral port. Page and API access require
a random capability token; host/origin checks and a restrictive CSP apply.
Do not share the token-bearing local URL. No external scripts, analytics,
cloud backend, operator API keys, or Azure resources are used.

Exam cards and the selected-exam header reference official badge artwork on
`learn.github.com`. Image requests send ordinary connection metadata to that
site, but no answers, chat, progress, or local page URL (referrers are disabled).
An unavailable image is labeled without blocking practice. Badge artwork
identifies an exam; it does not mean you earned the credential or that GitHub
endorses this project. See [third-party notices](THIRD-PARTY-NOTICES.md).

The repository does not collect or sync learner state. `artifacts/`, attempt
files, dependencies, logs, environment files, and local research artifacts are
excluded from version control. Your attached Copilot conversation may also
retain coaching prompts and messages under its own retention policies.

Coaching sends the exercise and reasoning through the learner's Copilot plan
and policies. It queues a prompt into the attached session and accepts only a
matching, unexpired completion through `certification_coach_complete_hint`.
It does not require files, browsing, or shell access. Restarted/interrupted
requests are explicitly retryable. This is not an offline model.

Explanations and result study plans use a separate
`certification_coach_complete_insight` callback, bound to the originating
request/session and saved question or result. It cannot complete a hidden-answer
hint request. Prompts and AI output may be retained by the learner's attached
Copilot conversation under its own policies; local-only progress does not mean
AI coaching is offline or excluded from Copilot retention.

## Development and distribution

```sh
npm ci --ignore-scripts
npm run build
npm run check:banks
npm run check:sources
npm test
```

Source checks verify HTTP reachability of distinct official links, not that the
linked page proves every claim.

The UI uses official Primer CSS, Primitives light/dark tokens and Octicons,
vendored locally by `build-assets.mjs`. Scripts and styles never load from a CDN;
only the certification artwork is referenced remotely.

`extension.mjs` wires SDK/canvas lifecycle; `engine.mjs` owns durable attempts
and deterministic grading; `exams.mjs` holds catalog/blueprints; `bank-utils.mjs`
handles sampling, fingerprints, and structural checks; `banks/` holds original
questions; `translations/` holds Spanish and Portuguese variants; `i18n.mjs`
localizes the interface. `markdown.mjs` tokenizes Copilot Markdown with locally
bundled Marked and Entities, then creates an allowlisted set of DOM nodes.
It never inserts model or learner HTML. The tokenizer bundle is built with
esbuild; learners do not need npm dependencies or an external Markdown service.

Distribute these runtime files, `questions.mjs` (legacy migration), `banks/`, `translations/`,
`bank-reviews.json`, and
`vendor/` including its licenses. Never include `artifacts/` or user progress.
The runtime supplies `@github/copilot-sdk/extension`; no SDK package,
`node_modules`, npm installation, or third-party model API is needed for learners.

The UI is original and does not reproduce the exam provider's proprietary UI.

## License

Original code and practice questions are available under the [MIT license](LICENSE).
Third-party assets, training content, and trademarks retain their separate terms.
