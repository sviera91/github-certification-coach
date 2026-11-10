# Changelog

Changes to this unofficial Preview are recorded here. Unreleased entries are
not available in the installed extension until a release is published and
installed.

## Unreleased

No unreleased changes.

## 0.5.1-preview - 2026-11-10

### Safe question-bank updates

- Show a localized "New questions available" notice when a saved study workspace
  differs from the installed bank, with unchanged/revised/new/removed counts and
  an information icon supporting hover, keyboard focus, touch, and Escape.
- Load updated questions only when the learner clicks the button. Preserve
  answers, unchecked selections, flags, and completed coaching for identical
  question IDs and full revision fingerprints. Revised and new questions start
  unanswered; interrupted coaching cannot update the wrong question revision.
- Atomically keep the entire previous workspace in a local, read-only archive,
  with question navigation, original answer keys, previous selections, flags,
  and saved coaching available for later review. Retain archives across updates,
  restarts, and study resets; nothing is uploaded.
- Leave saved work unchanged when loading questions fails. Preserve other
  certifications and all mock snapshots/results; block archived answer-key
  review during live mocks.
- Include English, Spanish, and Brazilian Portuguese interfaces and the same
  safe workflow in browser-only Lite using its existing local storage.

## 0.5.0-preview - 2026-11-10

One coordinated release for all six question-bank refreshes, desktop update
notifications, and the previously unreleased Lite/website changes. Question
content remains AI-authored Preview requiring revision-specific human review.

### Desktop update notifications

- Add an English, Spanish, and Brazilian Portuguese "Update available" banner
  linking to published release notes and manual installation instructions.
- Check public GitHub release metadata while a canvas is open, caching successes
  for 24 hours and deferring retries for at least an hour (longer when GitHub
  requests it). Preview installs include published prereleases; stable installs
  see stable releases only.
- Cache concurrent checks, bound network requests, and show an explicit
  nonblocking warning when checking fails. No learner data or GitHub credentials
  are sent, and no update is downloaded or installed automatically.
- Preserve learner progress and saved-attempt snapshots. Lite does not make
  these extension-update requests. Existing installations need one manual
  update to receive the notifier; merging a PR alone does not publish a release.

### Agentic AI Developer question-bank refresh

- Correct 108 questions across all three languages, replacing repeated answer
  and objective chunks with distinct applied decisions. Retain small purposeful
  overlaps rather than requiring every related concept to be globally unique.
- Add optional all-language template-diversity checks and regressions covering
  repeated prose, reordered choice sets, question clauses, and technical
  punctuation. These heuristics supplement, not replace, semantic human review.
- Refresh all 225 GH-600 questions in English, Spanish, and Brazilian Portuguese
  across the full official blueprint, emphasizing applied agent workflows,
  configuration/log/artifact interpretation, and close but distinguishable choices.
- Use official learning material and documentation as content authority. Transfer
  writing principles from the other certification assessments without claiming
  verified GH-600 exam-format fidelity; no GH-600 practice assessment was used.
- Refresh explanations, non-revealing hints, sources, and only the Agentic human
  review packet. Content remains AI-authored Preview with no human approval granted.
- Preserve IDs, exact domain quotas, four-choice single-answer behavior,
  75-question/120-minute practice, private progress, and saved-attempt snapshots.

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

### Actions question-bank refresh

- Rewrite all 225 Actions questions in English, Spanish, and Brazilian Portuguese
  with original, concise YAML/file/command recognition and short practical
  scenarios across the full January 2026 GH-200 blueprint.
- Refresh answer choices, explanations, conceptual hints, and official sources;
  regenerate only the Actions human-review packet. Content remains AI-authored
  Preview, not official questions or human-approved material.
- Preserve question IDs, exact domain quotas, four-choice single-answer behavior,
  75-question/100-minute practice, private progress, and saved-attempt snapshots.

### Advanced Security question-bank refresh

- Replace 33 overlapping objectives with distinct detection, remediation,
  configuration, API, and access-control decisions in all three languages;
  regenerate unchecked revision-specific human-review attestations.
- Rewrite all 225 Advanced Security questions in English, Spanish, and Brazilian
  Portuguese with original, concise feature/configuration recognition and short
  practical scenarios across the full July 2026 GH-500 blueprint.
- Refresh answer choices, explanations, conceptual hints, and official sources;
  regenerate only the Advanced Security human-review packet. Content remains
  AI-authored Preview, not official questions or human-approved material.
- Preserve question IDs, exact domain quotas, four-choice single-answer behavior,
  75-question/100-minute practice, private progress, and saved-attempt snapshots.

### Foundations question-bank refresh

- Rewrite all 225 Foundations questions and their Spanish and Brazilian
  Portuguese variants with original, concise feature, command, file, role,
  navigation, and short-scenario questions.
- Add practical GitHub website knowledge, including contextual keyboard
  shortcuts, command palette settings, repository navigation, and Markdown.
  Keep technical literals and English interface paths aligned across languages.
- Replace seven overlapping objectives with distinct archive, merge, fork,
  team-permission, community-default, license-search, and profile-curation tasks.
- Preserve the seven domain quotas, four-choice single-answer format,
  75-question/100-minute mock policy, and private saved learner state.
- Regenerate the revision-based trilingual review packet. Content remains
  AI-authored Preview; this refresh does not grant human approval.

### Copilot question-bank refresh

- Rewrite all 225 Copilot questions as original practice items, using a mix of
  concise knowledge checks, command and setting selections, and short applied
  scenarios rather than predominantly generic "best next step" questions.
  Refresh distractors, explanations, concepts, and hints across all six domains.
  Preserve domain quotas, single-answer format, and 75-question/100-minute mocks.
- Add direct VS Code, Visual Studio, Xcode, and GitHub.com command questions;
  organization/repository/enterprise settings paths; Pro versus Business
  governance; exclusion roles, scope, and patterns; and zero-/one-/few-shot
  recognition and application. Paths use GitHub.com's English interface labels.
- Update Spanish and Brazilian Portuguese questions, choices, explanations,
  concepts, and hints together, preserving literal commands and navigation labels.
- Refresh the Copilot human-review packet. Revised content remains AI-authored
  Preview material, not human approved or copied from assessment/exam questions.
  Assessment structure informs the style, not the answer key: current public
  documentation supports the content. This is not a reproduction of, or a
  guarantee of equivalence to, a real exam.
- Accept the official GitHub Blog as a supporting source alongside the existing
  documentation hosts, including the Spark retirement notice. HTTPS and exact
  hostname checks remain required.

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
