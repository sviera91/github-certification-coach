# Changelog

Changes to this unofficial Preview are recorded here. Unreleased entries are
not available in the installed extension until a release is published and
installed.

## Unreleased

No unreleased changes.

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
