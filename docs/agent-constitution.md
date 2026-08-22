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

Raw recordings, participant imagery, names, verbatim transcript dumps, cookies, tokens, private capstone plaintext, and private processing artifacts stay under `.course-data/` and out of Git. Public notes use original summaries and textual slide/time references; full slide images are not republished unless permission is explicit. Credentials, credential verifiers, and decrypted capstones must never enter public source, automation prompts, browser storage, or Git history; the deployable capstone asset is authenticated ciphertext only.

## 7. Product continuity

The repository is the system of record:

- `AGENTS.md` — short instructions loaded by future agents;
- `docs/agent-constitution.md` — durable invariants and decision hierarchy;
- `docs/recording-review-playbook.md` — executable review procedure;
- `docs/recording-inventory.md` — source ledger and dispositions;
- `docs/content-schema.md` — public lecture-note contract;
- `.course-data/**/processing-manifest.json` — private machine evidence;
- `data/catalog.js` and `data/lectures/` — publishable chronological content.

When the workflow improves, update the constitution only for enduring principles; put implementation detail in the playbook and schema. Preserve superseded evidence rather than overwriting it silently.

## 8. English and Hindi are equal publication surfaces

Every published lecture, schedule, course description, academic signal, MCQ explanation, and unlocked private capstone is one bilingual page. English and Hindi are aligned side by side on wider screens and sequentially within each paired block on mobile. Public routes are language-neutral (`#/lecture/<id>`, not `/en`, `/hi`, or `/bi`) and no language selector is offered.

Each `data/lectures/<id>.js` file contains one `{ en, hi }` publication unit. The Hindi column must preserve the English column's evidence: source timecodes, formulas, external URLs, array ordering, and MCQ answer indexes cannot change during translation. Technical terms may remain in English where that improves accuracy. Neither column is publishable alone; compare structural parity and spot-check the paired title, coverage, first and last MCQ, and academic signals before publishing. Review bilingual capstones privately, then regenerate the encrypted vault with credentials supplied only through the local process environment.

Bilingual completeness is a content invariant, not a command to duplicate every visible fragment. Substantive explanations, summaries, questions, and guidance should show both languages when each improves comprehension. Compact labels, chips, technical names, and metadata should render once when the Hindi version is identical or only replaces a conjunction or isolated word while the rest remains English. This selective presentation avoids visual noise without deleting the aligned source content or weakening its validation.

## 11. Private capstones are a separate security boundary

Capstone plaintext is not part of the public lecture-note contract. Its system of record is ignored `.course-data/private-capstones-source.json`; `data/private-capstones.enc.js` may contain only AES-GCM ciphertext and non-secret KDF metadata. Unlocking must derive a key from user-entered credentials, use a single generic failure message, and retain decrypted data only in memory until refresh. Static client-side encryption prevents casual source inspection but cannot guarantee identity or resist unlimited offline guessing; true owner-only enforcement requires authenticated server-side access.

## 9. Schedules are timezone-aware source data

Meeting links, India weekdays/times, semester bounds, and course-code aliases have one source of truth in `data/schedule.js`. `Asia/Kolkata` is the source schedule. `America/Chicago` display times are calculated for each occurrence so daylight-saving transitions remain correct. Calendar exports must include the official meeting link and must not expose any account credential or attendance token beyond the learner-provided join URL.

An occurrence remains visible after it ends so the weekly history is understandable, but it must render as disabled and must not retain an actionable Join link. A class in progress stays enabled through its calculated end time.

## 10. Resource folders are a public-release boundary

Files under `resources/<course-slug>/` are intentionally public and are indexed into the site during deployment. Only add books, PDFs, or slide decks when redistribution is permitted. Private recordings, transcripts, participant information, and restricted course documents never enter this folder. PDF files may render inline; PPT/PPTX files use an inline public Office viewer with direct-open fallback.

## 12. Recording links are source-navigation metadata

Each subject page exposes the verified SharePoint recording-folder link. Each published lecture exposes the stable Microsoft Stream page URL obtained from that folder so a subscribed learner can return to the source recording. Store the human-facing Stream page, not a discovered media manifest, signed CDN URL, cookie-bearing request, DRM datum, or stream segment. Remove transient navigation parameters such as `referrer` and `referrerScenario` before publication. Access remains subject to the learner's institution account and course permissions.
