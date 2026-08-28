# Recording review playbook

Use this checklist before treating a video as a lecture source. The dedicated
[`agents/recording-note-taker.md`](../agents/recording-note-taker.md) profile
defines the consistent bilingual synthesis and post-lecture resource-refresh
behavior; follow it together with this evidence checklist.

## 0. Build the queue and enforce one-at-a-time review

1. Inventory every visible source without opening multiple recordings.
2. Sort the queue by original lecture date/time, oldest first. Resolve ties by course code and source filename. Preserve the source recording timestamp and filename in the private manifest and catalog metadata for every canonical or unique-fragment output.
3. Check `(course, lecture date, source filename or source URL hash)` against the inventory/processing manifests. Do not reopen a source with a completed disposition unless the inventory records a reason for re-review.
4. Open only the first unprocessed recording. Triage it, reject or process it, persist the result, and close its tab before opening the next queue item.
5. Keep transcription and frame processing local and sequentially associated with that source. Never play two recordings at once.

When several newly added subjects have recordings in the same chronological cohort, review in subject rounds: take at most one oldest eligible source per subject before taking a second source from any of them. This rotation broadens coverage without overriding the primary oldest-first rule; never skip an older source merely to complete a round.

When publishing, sort a course archive by date, source recording timestamp, then source filename. If the course has more than one valid lecture on a date, give each new lecture a time-qualified source-stable id (`<course>-YYYY-MM-DD-HHmmss-<six-char-source-hash>`); do not overwrite a date-only legacy note or assume its lecture number is sufficient to disambiguate it.

## 1. Inventory without assumptions

Record the subject, filename, nominal date, file size, reported duration, and whether download is offered. Group files that share a subject/date or nearly identical filename.

A file is *suspect*, not automatically invalid, when it is unusually small, has a duration far outside the scheduled class window, is a numbered copy, or overlaps another upload.

## 2. Find the meaningful lecture interval

The meeting recording can begin when students join, 15–30 minutes before teaching starts. The recording start time is therefore not a reliable lecture boundary.

The recording can also continue for hours after class because someone left it running. The scheduled class length is a useful search hint, never an automatic cutoff. Sample on both sides of the expected end, then move backward/forward in smaller increments to locate the last sustained explanation, Q&A, or course announcement. Exclude the idle tail from capture, transcription, and notes.

1. **Before capture**, sweep the full timeline at the beginning, 10%, 25%, 50%, 75%, 90%, and near the end. Inspect the visible frame and play a short audio sample where practical.
2. If every sample is silent and visually static, or shows only a participant avatar, waiting room, black frame, or Stream placeholder, classify it as `idle/error`; do not capture it in full.
3. If any sample shows instruction, seek in 5–10 minute jumps until the instructor begins sustained teaching.
4. Move backward in smaller jumps to find the earliest meaningful explanation, announcement, or course instruction.
5. Note the actual-content start offset.
6. Around the scheduled end, sample before and after the expected boundary; for unusually long recordings, also sample the middle and far tail.
7. Seek past Q&A and idle-room time to locate the final meaningful instruction.
8. Note the actual-content end offset and capture/review only that interval. Never run a full 3–4 hour capture merely because the player reports that duration.

Use automated evidence where available: a near-total silence ratio, no meaningful visual-hash transitions across distributed frames, repeated placeholder/avatar frames, and no speech transcript together strongly support `idle/error`. Do not reject from any one weak signal such as small file size alone.

While seeking, build a slide trail containing the slide title or visible topic, first useful timecode, and the concepts supported by that slide. Use these entries as source references in the public summary. Prefer textual citations such as `Slide: “Why Data is important?” · 00:27:10–00:46:30`; do not republish full slide images unless permission is clear.

For view-only recordings, production capture must include the visible tab as well as audio. Audio-only capture is suitable for a transcript draft but cannot establish slide references. The companion saves capture timing metadata; at 2× playback map a captured frame back to the source with `sourceSeconds = captureStartSourceSeconds + (captureSeconds × playbackRate)`. Extract frames at regular intervals and scene changes, deduplicate visually similar frames, then use the remaining frames to build the slide trail.

Before leaving a real-time capture unattended, keep the audio output stable and verify at least 15 seconds of continuous source-time progress. Connecting or disconnecting Bluetooth audio can make the provider pause playback; restart a capture whose timing map includes an unbounded pause instead of treating it as canonical evidence. The companion's playback guard may resume incidental provider pauses, but it does not replace this progress check.

Do not trim short course announcements merely because they precede the main topic; include them in a clearly labeled administrative section when they affect assessment, schedule, or learning expectations.

## 3. Resolve duplicate or broken recordings

For same-day variants, compare samples from the beginning, middle, and end. Classify each file as one of:

- `canonical` — the best complete source;
- `unique-fragment` — incomplete but contains material absent from the canonical file;
- `duplicate` — repeats content already preserved;
- `idle/error` — waiting-room, black/silent, corrupted, or otherwise non-instructional.

Merge only `canonical` and `unique-fragment` content. Never infer validity from file size alone.

## 4. Review efficiently

- Download when the platform explicitly offers it; transcribe locally faster than real time.
- If download is not offered, use the fastest intelligible Stream playback option (currently 2×) and timeline seeking.
- Review one recording at a time. Concurrent playback mixes audio and invalidates notes.
- Revisit dense mathematics, code, definitions, and assessment instructions at normal speed when necessary.

## 5. Publication gate

Publish a lecture only after confirming:

- subject and session date;
- meaningful start/end offsets;
- duplicate/error disposition;
- high-level coverage and complete summary;
- slide/topic references with recording timecodes for major claims;
- a categorized academic-signals section covering assignments, homework, labs/practicals, projects, instructor references, and substantive student Q&A; use explicit empty categories rather than omission;
- added insights clearly distinguished from the lecturer's claims;
- reliable references and further viewing;
- 25 MCQs with the correct choice and explanations for every option;
- one applied mini-capstone or startup idea;
- one complete bilingual publication unit with matching English/Hindi timecodes, formulas, URLs, academic-signal counts, MCQ answer indexes, and a public mini-capstone structure;
- the owning subject's curated resource trail reviewed and refreshed with stable, relevant reading, viewing, or practice links (or an explicit record that no addition was justified);
- URL and layout checks for the single clean `#/lecture/<id>` route, including the aligned bilingual presentation (side-by-side on desktop and sequential on mobile), mobile readability, and inline YouTube players;
- no private participant details, raw recordings, or verbatim transcript dumps.

## 6. Transcript signal extraction

During timestamped transcript review, search for direct and indirect wording such as `assignment`, `submit`, `deadline`, `homework`, `exercise`, `practice`, `lab`, `practical`, `project`, `implement`, `build`, `read`, `book`, `paper`, `reference`, `question`, and `query`. Confirm each hit from surrounding context and, where useful, the slide frame.

Classify each verified mention as one of:

- `assignments` — assessed or explicitly assigned work;
- `homework` — take-home practice requested by the instructor;
- `labs` — scheduled or expected practical/lab activity, including an explicit statement that no lab exists;
- `projects` — course projects, proposals, milestones, or deliverables;
- `references` — books, papers, websites, videos, tools, or authors recommended by the instructor;
- `studentQuestions` — a substantive student question plus a concise paraphrase of the instructor's answer.

Record the original source timecode. Do not elevate illustrative examples or optional suggestions into obligations. The public note must say “None mentioned in this lecture” for any empty category so students can distinguish reviewed absence from missing review.

## 7. Bilingual source and presentation pass

Create the English and Hindi columns as one bilingual record after the evidence review. Do not create or publish separate language editions. Preserve English technical terms such as `policy`, `value function`, `few-shot`, or `bandit` in the Hindi column when a forced translation would be less clear. Render both columns together for every substantive title, explanation, summary, question, academic signal, MCQ, and guidance block—side by side on desktop and sequentially on mobile. Compact labels, chips, provider names, and metadata may render once when Hindi adds no meaning; never alternate whole cards or collapse the note into Hindi alone. Spot-check both source sides of the title, lede, every coverage card, the first and last MCQ, all non-empty academic signals, and the public capstone. Run the content validator before marking the bilingual record published.
