# Repository working instructions

This repository is a public study companion built from IIT Patna lecture recordings. Treat `docs/agent-constitution.md` as the durable product constitution and follow `docs/recording-review-playbook.md` before publishing any lecture.

The dedicated recording and note-taker profile is [`agents/recording-note-taker.md`](agents/recording-note-taker.md). Future processing must follow it for the approved English-only lecture-note presentation, evidence-backed web/video/practice research, and the mandatory per-lecture subject-resource refresh.

Important persistent lessons:

- Maintain one deterministic queue sorted by original lecture date/time from oldest to newest. For identical timestamps, sort by course code and then source filename. Never skip ahead merely because a newer recording looks easier.
- “Full loop” has one durable meaning: process every verified pending identity in course-round order. Each identity is an indivisible publication transaction—capture or reject, process, author, validate, commit, push `origin/main`, deploy GitHub Pages, persist `published`, and only then select the next identity. Mentioning the date on which new files were discovered does not narrow the queue. Use `--date YYYY-MM-DD` only when the user explicitly asks for a date-only run.
- Enforce the single-recording invariant: open only the next recording in the queue; triage it; capture/process it or reject it; persist the disposition and evidence; close its tab; only then open the next recording. Do not leave previously reviewed recording tabs open.
- Before starting a recording, check the inventory/manifest for the stable source identity `(course, lecture date, source filename or source URL hash)`. A completed `canonical`, `unique-fragment`, `duplicate`, or `idle/error` disposition prevents accidental repeat watching unless new evidence requires an explicit re-review.
- Before starting a real-time capture, perform a full-timeline triage sweep. Seek to several distributed positions (at minimum: beginning, 10%, 25%, 50%, 75%, 90%, and near the end), inspect the visible content, and listen briefly where practical. If the samples remain silent and visually static or show only participant avatars/placeholders, classify the upload as `idle/error` and do not capture it in full.
- Persist that sweep in a source-matched review manifest before capture. The queue must remain at `awaiting-triage` until the manifest records all seven required positions, the first and final sustained instructional evidence, the bounded teaching interval, the idle-tail decision, and internal-break handling. A title card, screen-share setup, participant grid, or isolated voice activity is not sufficient evidence of teaching start. Use the companion's visible review controls to mark boundaries and its local capture only for the verified interval.
- A course's short `slug` is an internal key for schedule, resources, and localization. Its `routeSlug` is the canonical public URL segment and must include the code plus a readable English subject name; preserve code-only course/resource URLs as redirects. Do not use Hindi URL slugs or language routes.
- Keep same-day lectures distinct. Store each lecture's original `sourceRecordedAt` and `sourceFilename`; order each course archive by lecture date, source recording timestamp, then source filename. When a course has multiple published lectures on one date, use a new stable id of `<course>-YYYY-MM-DD-HHmmss-<six-char-source-hash>` (or equivalent time-qualified id accepted by the validator). Existing date-only public ids are legacy URLs and must not be renamed merely for consistency.
- Do not assume the recording timestamp is the lecture start. Students may join and trigger recording 15–30 minutes before teaching begins. Seek through the timeline to identify the first sustained instructional segment.
- Do not assume the reported duration is the class length. A participant may leave recording enabled for hours after teaching ends. Use the scheduled duration only as a search hint, sample before and after it, find the final sustained instruction, and capture only the verified teaching interval—not the idle tail.
- Do not assume the largest file is the correct file. Compare size, duration, visual content, audio content, and overlap across same-day variants.
- Review view-only recordings sequentially at the fastest intelligible speed (currently 2× in Microsoft Stream); never play multiple lectures simultaneously.
- Cite the lecture's visual source trail: include slide title/topic and recording timecode for every major summary section. Do not publish full slide images unless permission is clear.
- During transcript review, extract and separately categorize every mentioned assignment, homework item, lab/practical, project, instructor-recommended reference, and substantive student question with its response. Preserve source timecodes. Use an explicit empty category when none was mentioned; never invent an academic obligation.
- Every lecture is one English publication unit in `data/lectures/<lecture-id>.js`, shaped as `{ en: {...} }` and aggregated by `data/lecture-notes.js`. Create, review, validate, and publish the English note as the sole public note surface. Preserve timestamps, formulas, URLs, and quiz answer indexes. Keep established technical terms in English when that improves precision.
- Lecture notes are rendered as a clear English-only note surface on desktop and mobile. Do not publish Hindi note data, alternating language cards, or duplicate language editions.
- Mini-capstones are public educational material. Keep one complete English idea per published lecture in tracked `data/capstones.js`, validate it, and render it directly in the lecture note. Never add usernames, access codes, credential verifiers, authentication UI, or private learner data to the capstone module or deployed site. Draft/source material may remain under ignored `.course-data/`, but the tracked module is the deployable source of truth.
- All public pages use the clean, language-neutral hash routes such as `#/`, `#/course/eai-6401-reinforcement-learning`, and `#/lecture/<id>`. Substantive lecture notes render as a clear English-only surface; compact page surfaces may retain selective bilingual chrome where it adds value. Every published note also includes at least one accessible, lecture-grounded visual study aid rendered through the shared responsive HTML visual layer. Do not add a language selector or publish `/en`, `/hi`, or `/bi` route choices. Legacy prefixed links and code-only course/resource links may redirect to the equivalent clean route.
- On non-note compact surfaces, render a Hindi companion only when its Hindi-word share is strictly greater than 70%; otherwise show the clear English label alone. Do not duplicate an English label with a Hindi line that only changes a connector or adds one isolated Hindi word. This threshold applies to home, course, schedule, and resource cards, while substantive lecture-note content remains English-only.
- Preserve the mobile-first site chrome: show the bilingual source line in the header, use the opaque edge-to-edge fixed bottom navigation on phone and tablet widths, keep the full header navigation for wider screens, and retain the single direction-aware top/bottom scroll FAB with accessible bilingual labels.
- Course meeting links and recurring dates belong in `data/schedule.js`. Display both the source `Asia/Kolkata` time and per-date `America/Chicago` time; calculate Chicago occurrences rather than hard-coding one offset because daylight saving changes in November.
- Keep past schedule occurrences visible for context, but mark an occurrence disabled and remove its Join action once its calculated end time has passed.
- Every subject page must expose its verified recording-folder URL, and every published lecture row must expose the stable Microsoft Stream page URL captured from that subject folder. Strip transient `referrer` and `referrerScenario` parameters. Do not discover, store, or publish hidden manifests, signed media URLs, cookies, tokens, DRM data, or direct stream segments.
- Public books and slide decks belong only in `resources/<course-slug>/`. Run `node tools/index_resources.mjs` after a permitted PDF/PPT/PPTX is added. Treat anything in this folder as publicly deployed; never copy private or redistribution-restricted course material into it.
- Program-wide permitted documents belong in `resources/program/`. Treat the curriculum PDF there as the authoritative IIT Patna Executive M.Tech AI & DSE syllabus, and keep curriculum year, total credits, and the cohort's current semester synchronized in `data/program.js`.
- Render direct YouTube video references with the privacy-enhanced inline player and retain an explicit external YouTube link. Do not embed arbitrary non-video pages.
- Keep raw videos, participant data, private transcripts, model files, and processing caches under `.course-data/`, which must remain untracked.
- Publish original study notes rather than recordings or verbatim transcripts.

## Durable full-loop processing

When the user asks for a full-loop recording run, use
`tools/run_recording_queue.mjs` and the ignored `.course-data/recording-sources.json`
inventory. Run `npm run queue:reconcile` before `npm run queue:status`/`npm run
queue:next` when local captures, the public catalog, and queue state may have
been changed by separate runs. Reconciliation canonicalizes course-code aliases,
marks catalog-backed notes as published, and matches capture sidecars by their
Stream source URL. Never infer a lecture date from a local capture filename,
because its prefix may be the capture date rather than the source-recording
date. Then run `npm run queue:run`; it advances the oldest pending recording per
course round. The runner persists stable identities and stage checkpoints,
skips completed/rejected/blocked sources, enforces a single-process lock, and
resumes safely after interruption. A missing capture pauses at
`awaiting-browser`; a processed artifact pauses at `awaiting-note` until the
sole English note and subject-resource refresh have been authored and
validated. `npm run queue:publish -- <publication-id>` is the only queue
publication path and performs the guarded source push followed by GitHub Pages
deployment. The runner prioritizes any non-terminal active checkpoint above all
plain pending items, so a lecture cannot be abandoned midway while course
rotation selects another source. Chrome/Stream capture still requires the permitted visible-tab user
gesture; never bypass provider controls or claim unattended capture.

## Deployment and conflict prevention policy

- Deployment is deterministic and split by target:
  - Source repo is `origin`, branch `main`.
  - Production mirror is `github-pages` remote, branch `main` (repo `hellobanaras/iitp-mtech-aidse`).
- Do not use Cloudflare deployment for this repo. `npm run deploy:cloudflare` is intentionally disabled and exits with guidance.
- For production deployment (required for public updates), use only:
  - `git pull --rebase origin main`
  - `npm run check`
  - `npm run build`
  - `npm run deploy:github`
- Use `npm run deploy:source` for source-repo sync to `origin/main` only.
- Keep the workspace clean before push and enable hooks locally with `npm run hooks:install`.
- If a push attempts to move against a stale/incorrect remote, the guard blocks it (`tools/guard_deploy.mjs`).
