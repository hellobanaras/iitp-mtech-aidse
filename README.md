# IIT Patna AI & Data Science Lecture Atlas

A public, day-wise study companion for:

- EAI 6401 — Reinforcement Learning
- EAI 6402 — Meta Learning
- EAI 6403 — Selective Topics in Generative AI

The site tracks lecture recordings, rejects broken or duplicate uploads, and turns verified sessions into structured explanations, external reading, explained MCQs, and public bilingual applied mini-projects.

## Preview locally

The site has no runtime dependencies. Serve the repository root with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

The source record is bilingual, and substantive lecture notes render as one aligned English/Hindi surface—side by side on desktop and sequentially on mobile. Compact page chrome remains selective where a second copy adds no value. Share clean routes such as `#/`, `#/course/eai-6401`, and `#/lecture/eai-6401-2026-08-17`; there is no language selector or separate language page. Older `/en`, `/hi`, or `/bi` links redirect to the matching clean route.

## Content workflow

Raw recordings, local models, and draft transcripts live under `.course-data/` and are excluded from Git. Public study content is stored in `data/` and rendered by `assets/app.js`.

For a permitted view-only WebM capture, `tools/process_lecture.py` validates its streams and duration, preserves it under `.course-data/`, restores accelerated audio to the original speaking cadence, generates regular and scene-change frames, removes consecutive visual duplicates, builds a timestamped slide-candidate contact sheet, and writes a frame/transcript-to-original-timeline manifest using the companion's `.capture.json` sidecar.

After transcription, `tools/build_review_packet.py` combines that manifest with Whisper JSON into a private five-minute source-time review packet. It keeps the transcript and slide-image paths under `.course-data/`; only original summaries and textual slide/time references are published. Pass the completed human disposition with `--classification canonical` (or another playbook classification) so the private processing manifest records the final review decision.

Before publishing a recording:

1. Compare filename, date, size, and duration against the course schedule.
2. Seek past the waiting-room period: the actual class may begin 15–30 minutes after recording starts.
3. Check unusually small files, abnormally long sessions, and repeated filenames for unique content.
4. Transcribe downloadable recordings locally. For view-only recordings, use the fastest available Stream playback speed and verify the meaningful interval.
5. Write the high-level coverage, slide/timecode trail, detailed summary, insights, references, 25 explained MCQs, and one bilingual applied project in `data/capstones.js`. The public note reader presents every substantive block as the reviewed English/Hindi pair.
6. Review and refresh that subject's curated `data/open-resources.js` group with stable, relevant reading, viewing, and practice links—or record why the existing trail was retained.
7. Mark the lecture `published` only after a factual, resource, and layout review.

Run `node tools/validate_content.mjs` before publication. It checks that every published lecture has its catalog entry, slide references, complete summary, insights, further-study links, exactly 25 four-option MCQs with explanations for every option, and one complete bilingual capstone with aligned lists.

The durable rules live in [`docs/agent-constitution.md`](docs/agent-constitution.md), the executable procedure is in [`docs/recording-review-playbook.md`](docs/recording-review-playbook.md), and the public note contract is in [`docs/content-schema.md`](docs/content-schema.md). Together they enforce oldest-first, one-recording-at-a-time review and timestamped extraction of assignments, homework, labs, projects, instructor references, and student Q&A. The subject-by-subject resource decisions are logged in [`docs/resource-refresh-audit.md`](docs/resource-refresh-audit.md).

## Bilingual lecture publication

Every published note is one bilingual object with paired `en` and `hi` content in the same lecture module. The two source columns share slide timestamps, formulas, academic signals, URLs, and 25 answer indexes, and `node tools/validate_content.mjs` checks their parity. The reader presents the reviewed English/Hindi pair together for every substantive block; it does not alternate cards or reduce the note to Hindi alone. Future processing must write and review the paired record directly; an English-only or Hindi-only draft is not publishable. Established English technical terms may remain in the Hindi column where translation would make the concept less precise.

## Public mini-capstones

Each published lecture has one bilingual mini-capstone/startup idea in tracked `data/capstones.js`. The lecture page renders the project directly for every visitor, with an accessible problem statement, learning value, MVP, optional stretch goals, build plan, and (where supplied) stack, milestones, novelty, and success criteria. The module contains no credentials, authentication controls, participant details, or private learner data. Keep raw drafts and processing artifacts under ignored `.course-data/` only.

## Public books and slide decks

Drop permitted PDF, PPT, or PPTX files into the matching folder under `resources/`, then run:

```bash
node tools/index_resources.mjs
```

The deployment workflow runs the same indexer automatically. PDFs render inline. Public PowerPoint decks use Microsoft's inline Office viewer after deployment and retain open/download links. See [`resources/README.md`](resources/README.md) for optional bilingual metadata. Anything placed in `resources/` is published, so do not add licensed books, restricted slides, or private student material without redistribution permission.

## Build and deployment

Run `npm run check` and `npm run build` to create the public-only static artifact in `dist/`. The build allowlists only the website shell, catalog data, calendars, and permitted public resources; private processing material and repository instructions are excluded.

An authorized Cloudflare account can deploy `dist/` with `npm run deploy:cloudflare`, using the deterministic Pages project name `iitp-mtech-aidse`. The public GitHub Pages mirror is maintained separately in the deployment-only repository [`hellobanaras/iitp-mtech-aidse`](https://github.com/hellobanaras/iitp-mtech-aidse), preventing the private source repository from publishing a second Pages site.

## Optional Chrome companion

`tools/lecture-atlas-companion/` contains a small unpacked Manifest V3 extension for view-only recordings. It can seek in five-minute jumps, set a detected HTML video to 2×, mark the real teaching interval, export a review manifest, and—only when course policy permits—capture one user-selected tab locally. It does not inspect cookies, hidden manifests, signed URLs, or DRM. Review its permissions and workflow in [`tools/lecture-atlas-companion/README.md`](tools/lecture-atlas-companion/README.md) before loading it.

## Privacy and copyright

Do not commit raw IIT Patna recordings, private SharePoint links beyond the student-provided folder links, participant lists, or verbatim transcripts. Publish original notes and short, necessary quotations only.
