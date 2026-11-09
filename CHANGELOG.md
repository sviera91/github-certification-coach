# Changelog

Changes to this unofficial Preview are recorded here. Unreleased entries are
not available in the installed extension until a release is published and
installed.

## Unreleased

### Administration question-bank refresh

- Rewrite all 225 Administration questions and their Spanish and Brazilian
  Portuguese variants using original, concise role, policy, protocol, command,
  configuration, and short-scenario questions.
- Cover the complete July 2026 blueprint rather than overfit the smaller
  practice assessment: identities, enterprise administration, security,
  Actions, and usage monitoring. Name relevant platform, role, and scope.
- Replace fourteen overlapping questions with distinct transfer, ruleset import,
  typed input, audit API, rate-limit, webhook, appliance-command, support, and
  budget-boundary decisions across all three practice languages.
- Keep technical syntax and English interface paths aligned across languages.
  Preserve domain quotas, four-choice single-answer questions,
  75-question/100-minute mocks, and private saved learner state.
- Regenerate the revision-based trilingual review packet. Content remains
  AI-authored Preview; this refresh does not grant human approval.
- Stage this certification's changes for the coordinated six-bank release;
  no version bump or release is included.

### Website redesign and platform separation

- Replace the landing page's rose theme with a white Primer design, native
  buttons, Octicons, certification artwork, and a real bank-question preview.
- Restore the desktop canvas's unmodified Primer styling and theme detection
  in Lite.
- Move the white Primer landing and umbrella roadmap to
  `sviera91/certification-coach`. Keep GitHub code, question reviews, and issues
  here, with Lite at `/github-certification-coach/`.
- Preserve `/lite/` bookmarks and browser progress, and add local split-site
  preview support.

### Added

- Public landing page explaining the desktop canvas, installation, browser-only
  Lite, AI-authored Preview content, and the need for human validation and QA.
- Static GitHub Pages Lite with the shared Mock exam and Learn engine, browser
  IndexedDB persistence, cross-tab coordination, and explicit storage errors.
  Lite has no AI Coach, Copilot explanations, or AI-generated study plans.
- Explicit-allowlist Pages build, automated deployment, browser checks, and a
  human contribution guide.
- Roadmap identifying Azure exam practice and Terraform/GCP/AWS as future ideas
  only, with no committed exam list, scope, or release dates.

### Changed

- Separate engine persistence from practice behavior so desktop and Lite share
  sampling, grading, timer, study, translation, and review logic. Desktop still
  uses its existing local learner-state path and atomic file writes.

## 0.4.2-preview - 2026-10-20

### Changed

- Mark mandatory report summary and problem-description fields with red
  asterisks, a localized required-field legend, and accessible required semantics.
- Explicitly label reproduction steps as optional and omit the empty optional
  section instead of posting unfinished placeholder instructions.
- Include interface and question languages in prefilled reports to help identify
  translation problems without attaching learner answers or conversations.
- Clarify repository templates with actual versus expected behavior,
  reproducibility, question-content categories, translation fidelity, and
  privacy-safe screenshot guidance without adding mandatory fields.

## 0.4.1-preview - 2026-10-20

### Fixed

- Render Copilot hints, deeper explanations, and mock study plans as Markdown
  rather than displaying literal emphasis markers and list syntax.
- Format headings, emphasis, paragraphs, nested lists, quotes, tables, links,
  inline code, and fenced code blocks in light/dark and narrow layouts.
- Apply formatting to existing saved responses without regenerating AI output
  or changing learner progress.
- Keep raw HTML literal, suppress remote images, and restrict model links to
  absolute HTTP(S) URLs without credentials. Learner messages remain plain text.
- Vendor the Markdown tokenizer locally under the existing authenticated module
  routes and CSP, with no external scripts or rendering service.

## 0.4.0-preview - 2026-10-20

### Added

- One persistent, ungraded study workspace per certification shared by Learn
  and AI Coach, with saved question position, checks, flags, and conversations.
- In-mode domain and All / Not yet answered / Previously incorrect / Flagged
  filters without resetting progress or reordering the question bank.
- Per-question Try again, retaining history and answered status, and a
  confirmation-protected reset for the selected certification's study only.
- The latest 10 local mock-result summaries per certification, including date,
  score, domain results, timing option, and submission/early-exit/timeout reason.
- Accessible score rings, domain bars, Octicons, and text-labeled practice bands:
  Needs focus below 70, Building confidence 70–84, Strong practice result 85–100.
  These are not official pass/fail thresholds.
- On-demand Copilot explanations for already-visible answers and result-based
  study plans using domain resources, without sending coaching conversations.
- A separate, request-bound AI insight callback with interruption, timeout,
  stale-request, captured-language, and persistence safeguards.
- A visible canvas version badge linked to this changelog.

### Changed

- Only mock exams are submitted and graded. Learn/AI Coach can be resumed in
  chunks or switched at any time without a grade or a finish-all requirement.
- Switching from Learn to Coach preserves prior answer exposure; Try again
  intentionally hides feedback while retaining the previous learning history.
- Explicitly leaving a live mock requires confirmation and submits immediately;
  unanswered questions count as wrong. Returning to Mock starts a fresh exam.
- Closing the app/canvas or losing the connection retains a live mock with its
  timer running; expiry archives the result on the next state read.
- Filtered-out questions remain visible immediately after checking/unflagging
  so learners can read feedback before navigating.
- Extended English, Spanish, and Brazilian Portuguese interface localization.
- Clarified local storage, Copilot prompt retention, and private-progress
  exclusions from the public repository.

### Migration

- Atomically upgrade saved version 2 state to version 3. Recover stored study
  checks, drafts, flags, conversations, and exact question snapshots, reopen
  completed study sessions, and expand prior domain-only study to the full pool.
- Preserve previously seen answers and archive existing completed mocks once.
  Answers already overwritten by an older release cannot be recovered.
- Keep learner artifacts outside the repository and untouched by installation.

## 0.3.1-preview - 2026-10-20

### Changed

- Separated English content approval from Spanish and Brazilian Portuguese
  translation approvals in review packets, the importer, and the canvas.
- Required current English approval before approving a translation.
- Made English edits invalidate dependent translation approvals, while a
  translation edit invalidates only its own language approval.
- Added an English reference alongside translation review in the canvas.
- Made reviewed counts and Preview status reflect the selected language.
- Regenerated all six Markdown review packets with independent checkboxes.

## 0.3.0-preview - 2026-10-20

### Added

- Initial public release with installation instructions and MIT licensing for
  original code and practice questions.
- Six certification banks with 225 original questions each: Foundations,
  Administration, Advanced Security, Copilot, Actions, and Agentic AI Developer.
- English, Spanish, and Brazilian Portuguese practice content and interface.
- Timed 75-question mocks, immediate-feedback learning, and guided AI coaching.
- Raw 0-100 practice scores, domain-level results, and official study links.
- Autosaved selections, flags, and a deliberate pre-submission review screen.
- Local attempt persistence and migration of the original prototype attempt.
- Primer styling and official certification artwork references.
- Privacy-conscious, prefilled GitHub issue reports submitted by the learner.
- Shareable Markdown review packets with answers, explanations, hints, sources,
  and revision-bound human-review import.

All question banks launched as Preview, without fabricated human approvals.
