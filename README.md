# GitHub Certification Coach

An unofficial, local GitHub certification practice canvas for the Copilot
desktop app. All AI-authored question banks start as **Preview**, not as a
validated certification-readiness assessment. They remain Preview until
every current question revision has been reviewed and approved by a human
and the full pool/coverage targets are met.

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
  submits it and reveals the fixed answer and explanations.
- **AI coach:** selections also stay unchecked until **Check answer**. Wrong
  answers request conceptual hints in the attached Copilot conversation. Learners
  may retry or explicitly reveal the answer.

Navigation preserves unchecked selections, including after a restart. Those
selections are labeled **not checked**; merely selecting never triggers grading
or AI feedback in learning modes.

**Finish and review** always opens a pre-submission review, even when every
question is answered. It shows unanswered/not-checked and flagged counts, with
filters and links back to the questions. A question may belong to both counts.
Learners can return to questions or explicitly **Submit and grade**, including
submitting anyway when attention items remain.

The countdown continues on the review screen, while switching certifications,
and while the app is closed. Expiry submits automatically; the next read persists
the expired result. Foundations additionally offers an explicitly non-simulation
120-minute relaxed option.

## Scores and study guidance

Results show raw **0-100 practice accuracy**, not an official scaled score or a
pass prediction. Unanswered questions count as wrong. Unchecked drafts never
enter the answer key calculation. For mock exams the graded answer is the last
saved choice; for learning modes first-check and latest-checked accuracy are
reported separately, alongside coaching and explicit-reveal counts.

Per-domain results show correct/total, accuracy, and relevant official study
links. These help choose a study focus; small samples are not a reliable
readiness assessment.

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

Open a packet in GitHub or a Markdown editor. After personally verifying a
question and its supporting content, change its `- [ ] Human-reviewed:`
checkbox to `- [x] Human-reviewed:`. One check attests to the whole
English/Spanish/Portuguese revision. Leave uncertain questions unchecked and
send corrections separately, with the question ID. Return the edited file
to the maintainer or open a pull request. No learner data is included.

The maintainer imports returned files explicitly:

```sh
npm run review:import -- reviews/foundations.md --confirm-human-review
```

Multiple packet paths may be supplied in one import. Only checked items become
approved in `bank-reviews.json`; unchecked items do not revoke prior approval.
The importer validates the exact content and current multilingual fingerprint,
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
personally verify them and tick the acknowledgment before marking a revision
human-approved. Approval can be revoked. To avoid inadvertently exposing the
key, content review is unavailable while that certification has an unfinished
attempt.

Approval records use a SHA-256 fingerprint over the ID, domain, prompt,
choices, answer key, explanations, concept, hints, source, and all translated
variants. **One human approval covers the entire multilingual revision**;
changing English, Spanish, or Portuguese invalidates that shared approval.
Translations retain the same IDs, option order, and fixed answer key. Local approval is an
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

`COPILOT_HOME` defaults to `~/.copilot`. One current attempt per certification
is retained independently. Switching does not discard another exam's progress;
starting again replaces only that certification's finished attempt. Historical
attempt tracking is not implemented. Attempts snapshot their exact question
content and keys, so later bank edits do not change existing grading.

The original `prototype-attempt.json` is migrated on first load without deleting
or overwriting the original. Its four questions, answers, conversation, and
deadline are preserved; the next new attempt uses the expanded bank.

Writes use an atomic rename. Failed saves are surfaced, not acknowledged as
successful. Concurrent providers across multiple Copilot conversations are not
supported: use one owning conversation at a time. Human approvals are user-local;
sharing runtime code never publishes private progress. Only explicitly exported
bank approval records travel in `bank-reviews.json`.

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
localizes the interface. `client.mjs` renders text with DOM APIs rather than interpreting model
or learner output as HTML.

Distribute these runtime files, `questions.mjs` (legacy migration), `banks/`, `translations/`,
`bank-reviews.json`, and
`vendor/` including its licenses. Never include `artifacts/` or user progress.
The runtime supplies `@github/copilot-sdk/extension`; no SDK package,
`node_modules`, npm installation, or third-party model API is needed for learners.

The UI is original and does not reproduce the exam provider's proprietary UI.

## License

Original code and practice questions are available under the [MIT license](LICENSE).
Third-party assets, training content, and trademarks retain their separate terms.
