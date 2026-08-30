# Lecture Atlas agent constitution

This document contains durable product invariants. Procedures may evolve; these rules remain in force unless a deliberate repository decision changes them.

## 1. Evidence before publication

No lecture becomes public from a filename, file size, scheduled duration, or transcript alone. Publication requires a verified instructional interval, audio/transcript evidence, a slide/topic trail, and a human-reviewed source disposition.

## 2. One recording, one completed decision

Only one lecture recording may be open or playing during review. The agent must complete this lifecycle before opening another recording:

1. Select the oldest unprocessed source in the deterministic queue.
2. Open only that source and perform full-timeline triage.
3. Mark the actual instructional start/end and any internal breaks.
4. Either reject it with evidence or capture/process the meaningful interval.
5. Persist its source identity, disposition, evidence, and output status.
6. Close the recording tab.
7. Advance to the next oldest source.

Background transcription, frame extraction, and local note generation may continue after the browser tab is closed. A second recording must never play concurrently.

## 3. Oldest-first deterministic ordering

The review queue is ascending by original lecture date/time, not upload discovery time. Ties are resolved by course code and source filename. Within each course, published lecture numbers and the day-wise archive must follow the same chronological order.

A stable source identity—course, lecture date, and source filename or a hash of the source URL—must be checked against the inventory before opening. A completed disposition prevents accidental repeat review. Re-review requires a recorded reason such as changed content, incomplete earlier evidence, or a corrected upload.

Within a course archive, public notes are ordered by lecture date, original source recording timestamp, then source filename. This prevents ambiguous ordering when two valid classes or fragments share a calendar date. Catalog entries preserve `sourceRecordedAt` and `sourceFilename` for that deterministic order. New same-day public ids use the source time plus a stable filename/source hash; previously published date-only ids remain supported as legacy URLs and are never renamed only for cosmetic consistency.

## 4. Recording time is not teaching time

Meeting capture may begin 15–30 minutes before instruction or continue for hours after it. Sweep the full timeline before capture, locate sustained teaching, preserve meaningful Q&A and announcements, and exclude waiting rooms, connection gaps, and idle tails.

## 5. Preserve academic signals

Every published lecture note must contain six transcript-derived categories:

- assignments;
- homework;
- labs or practical work;
- projects;
- instructor-recommended references;
- substantive student questions and the instructor's response.

Each item needs an original-recording timecode and a concise paraphrase. Empty categories must be shown as “None mentioned in this lecture.” Do not convert an example, suggestion, or student proposal into an assigned obligation.

## 6. Privacy and intellectual-property boundary

Raw recordings, participant imagery, names, verbatim transcript dumps, cookies, tokens, and private processing artifacts stay under `.course-data/` and out of Git. Public notes and capstones use original summaries and textual slide/time references; full slide images are not republished unless permission is explicit. Do not place credentials, credential verifiers, authentication controls, or private learner data in the public site.

## 7. Product continuity

The repository is the system of record:

- `AGENTS.md` — short instructions loaded by future agents;
- `docs/agent-constitution.md` — durable invariants and decision hierarchy;
- `docs/recording-review-playbook.md` — executable review procedure;
- `agents/recording-note-taker.md` — dedicated processing profile for English-only synthesis and resource refresh;
- `docs/recording-inventory.md` — source ledger and dispositions;
- `docs/content-schema.md` — public lecture-note contract;
- `.course-data/**/processing-manifest.json` — private machine evidence;
- `data/catalog.js` and `data/lectures/` — publishable chronological content.

When the workflow improves, update the constitution only for enduring principles; put implementation detail in the playbook and schema. Preserve superseded evidence rather than overwriting it silently.

## 8. English is the sole lecture-note source surface

Every published lecture, schedule, course description, academic signal, MCQ explanation, and mini-capstone is published in clear English. Substantive lecture notes use one English source surface on desktop and mobile. Public routes are language-neutral (`#/lecture/<id>`, not `/en`, `/hi`, or `/bi`) and no language selector is offered.

Each `data/lectures/<id>.js` file contains one `{ en }` publication unit, and the matching capstone in `data/capstones.js` contains English project guidance. Every published note also resolves to at least one accessible, lecture-grounded visual study aid (concept map, process flow, feedback loop, timeline, or architecture sketch) through the shared responsive HTML visual layer. Spot-check the title, coverage, visual, first and last MCQ, academic signals, formulas, URLs, and capstone before publishing.

English clarity is the content invariant. Do not mechanically translate technical material; retain established English terminology when it is the most precise and readable choice.

## 11. Public capstones are part of the learning surface

Each published lecture has one complete English mini-capstone/startup idea in tracked `data/capstones.js`, rendered directly below its notes. Capstones contain no credentials, authentication UI, participant details, or private learner data; ignored `.course-data/` files may be used as drafting evidence but are never required at runtime.

The recording-note-taker must review the subject's curated resource trail after every verified lecture. Add only stable, public, materially relevant reading, viewing, or practice resources, with a reason tied to the lecture; deduplicate by canonical URL. If no addition is justified, record that the existing trail was intentionally retained.

## 9. Schedules are timezone-aware source data

Meeting links, India weekdays/times, semester bounds, and course-code aliases have one source of truth in `data/schedule.js`. Store structural source fields (`weekdays`, `start`, and `end`), not manually maintained India/Chicago prose summaries. `Asia/Kolkata` is the source schedule. The shared time-zone presentation calculates `America/Chicago` values for each occurrence, including daylight-saving transitions, and is reused for course cards, schedule cards, search, and calendar events. It shows one selected primary zone at a time (Chicago by default) and a quiet reference line for the other; the non-sensitive display preference may be stored locally on the device. Calendar exports must include the official meeting link and must not expose any account credential or attendance token beyond the learner-provided join URL.

Whenever a date or class time is rendered in Hindi, use Devanagari numerals. Keep source-recording timestamps in their original ASCII form where bilingual evidence parity requires exact matching.

An occurrence remains visible after it ends so the weekly history is understandable, but it must render as disabled and must not retain an actionable Join link. A class in progress stays enabled through its calculated end time.

## 10. Resource folders are a public-release boundary

Files under `resources/<course-slug>/` and `resources/program/` are intentionally public and are indexed into the site during deployment. Only add books, PDFs, slide decks, or institute documents when redistribution is permitted. Private recordings, transcripts, participant information, and restricted course documents never enter this folder. PDF files may render inline; PPT/PPTX files use an inline public Office viewer with direct-open fallback. The authoritative Executive M.Tech AI & DSE curriculum is the permitted PDF under `resources/program/`; structured program facts such as curriculum year, total credits, and the cohort's current semester belong in `data/program.js`.

## 12. Recording links are source-navigation metadata

Each subject page exposes the verified SharePoint recording-folder link. Each published lecture exposes the stable Microsoft Stream page URL obtained from that folder so a subscribed learner can return to the source recording. Store the human-facing Stream page, not a discovered media manifest, signed CDN URL, cookie-bearing request, DRM datum, or stream segment. Remove transient navigation parameters such as `referrer` and `referrerScenario` before publication. Access remains subject to the learner's institution account and course permissions.

## 13. Readable canonical course routes

The internal course `slug` is a stable data key, while `routeSlug` is the shareable public URL segment. Canonical public subject URLs include both the course code and a readable English name, for example `#/course/eai-6403-selective-topics-in-generative-ai`. Existing code-only course and resource links redirect to their descriptive equivalent so historical bookmarks continue to work. Public URLs remain language-neutral and do not transliterate the English-only note body.

## 14. Shared presentation primitives

The same content should have one renderer and one source of truth. Keep lecture rows, note archives, subject-note accordions, timezone panels, and calendar events as reusable view helpers in `assets/app.js`; compose them into home, subject, and schedule pages instead of maintaining near-duplicate card markup. The schedule is the navigation surface for occurrences and links into the subject/lecture archive, while the subject page owns the detailed course context and notes.

The desktop notes rail may auto-collapse after sustained downward movement, but should reopen only after sustained upward movement brings the reader back near the start of the notes. Implement this with accumulated directional thresholds and a short reflow lock so trackpad jitter and scroll anchoring cannot toggle it repeatedly; do not animate the article's grid columns, because frame-by-frame text reflow creates a visible shimmer.
