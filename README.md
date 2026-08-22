# IIT Patna AI & Data Science Lecture Atlas

A public, day-wise study companion for:

- EAI 6401 — Reinforcement Learning
- EAI 6402 — Meta Learning
- EAI 6403 — Selective Topics in Generative AI

The site tracks lecture recordings, rejects broken or duplicate uploads, and turns verified sessions into structured explanations, external reading, explained MCQs, and encrypted owner-only applied mini-projects.

## Preview locally

The site has no runtime dependencies. Serve the repository root with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

Every page is bilingual by default. Share clean routes such as `#/`, `#/course/eai-6401`, and `#/lecture/eai-6401-2026-08-17`; there is no language selector or separate language page. Older `/en`, `/hi`, or `/bi` links redirect to the matching bilingual route.

## Content workflow

Raw recordings, local models, and draft transcripts live under `.course-data/` and are excluded from Git. Public study content is stored in `data/` and rendered by `assets/app.js`.

For a permitted view-only WebM capture, `tools/process_lecture.py` validates its streams and duration, preserves it under `.course-data/`, restores accelerated audio to the original speaking cadence, generates regular and scene-change frames, removes consecutive visual duplicates, builds a timestamped slide-candidate contact sheet, and writes a frame/transcript-to-original-timeline manifest using the companion's `.capture.json` sidecar.

After transcription, `tools/build_review_packet.py` combines that manifest with Whisper JSON into a private five-minute source-time review packet. It keeps the transcript and slide-image paths under `.course-data/`; only original summaries and textual slide/time references are published. Pass the completed human disposition with `--classification canonical` (or another playbook classification) so the private processing manifest records the final review decision.

Before publishing a recording:

1. Compare filename, date, size, and duration against the course schedule.
2. Seek past the waiting-room period: the actual class may begin 15–30 minutes after recording starts.
3. Check unusually small files, abnormally long sessions, and repeated filenames for unique content.
4. Transcribe downloadable recordings locally. For view-only recordings, use the fastest available Stream playback speed and verify the meaningful interval.
5. Write the high-level coverage, slide/timecode trail, detailed summary, insights, references, and 25 explained MCQs; prepare the bilingual applied project only in the private capstone source.
6. Mark the lecture `published` only after a factual and layout review.

Run `node tools/validate_content.mjs` before publication. It checks that every published lecture has its catalog entry, slide references, complete summary, insights, further-study links, exactly 25 four-option MCQs with explanations for every option, and no private capstone plaintext in either public language bundle. It also validates the encrypted vault metadata.

The durable rules live in [`docs/agent-constitution.md`](docs/agent-constitution.md), the executable procedure is in [`docs/recording-review-playbook.md`](docs/recording-review-playbook.md), and the public note contract is in [`docs/content-schema.md`](docs/content-schema.md). Together they enforce oldest-first, one-recording-at-a-time review and timestamped extraction of assignments, homework, labs, projects, instructor references, and student Q&A.

## Bilingual lecture publication

Every published note is one bilingual object with paired `en` and `hi` content in the same lecture module. The two columns share slide timestamps, formulas, academic signals, URLs, and 25 answer indexes, and `node tools/validate_content.mjs` checks their parity. Future processing must write and review the paired record directly; an English-only or Hindi-only draft is not publishable. Established English technical terms may remain in the Hindi column where translation would make the concept less precise.

## Private mini-capstones

Readable English and Hindi capstones live only in ignored `.course-data/private-capstones-source.json`. The public application imports `data/private-capstones.enc.js`, an AES-256-GCM ciphertext vault whose key is derived in the browser with PBKDF2. To regenerate it after adding or translating a capstone, supply the credentials locally without writing them to a file:

```bash
LECTURE_ATLAS_PRIVATE_USER='…' LECTURE_ATLAS_PRIVATE_CODE='…' node tools/encrypt_private_capstones.mjs
```

Never commit the plaintext source, credentials, a credential verifier, or decrypted output. The page keeps decrypted content in JavaScript memory only and forgets it on refresh. This protects plaintext from casual inspection of a static deployment, but it is not equivalent to server-enforced identity: a determined attacker can make offline guesses against a downloadable ciphertext. Use an authenticated backend or access gateway when exclusive per-user authorization must be guaranteed.

## Public books and slide decks

Drop permitted PDF, PPT, or PPTX files into the matching folder under `resources/`, then run:

```bash
node tools/index_resources.mjs
```

The deployment workflow runs the same indexer automatically. PDFs render inline. Public PowerPoint decks use Microsoft's inline Office viewer after deployment and retain open/download links. See [`resources/README.md`](resources/README.md) for optional bilingual metadata. Anything placed in `resources/` is published, so do not add licensed books, restricted slides, or private student material without redistribution permission.

## Build and deployment

Run `npm run check` and `npm run build` to create the public-only static artifact in `dist/`. The build allowlists only the website shell, catalog data, calendars, and permitted public resources; private processing material and repository instructions are excluded.

Pushes to `main` deploy `dist/` to GitHub Pages. An authorized Cloudflare account can deploy the same artifact with `npm run deploy:cloudflare`, using the deterministic Pages project name `iitp-mtech-aidse`.

## Optional Chrome companion

`tools/lecture-atlas-companion/` contains a small unpacked Manifest V3 extension for view-only recordings. It can seek in five-minute jumps, set a detected HTML video to 2×, mark the real teaching interval, export a review manifest, and—only when course policy permits—capture one user-selected tab locally. It does not inspect cookies, hidden manifests, signed URLs, or DRM. Review its permissions and workflow in [`tools/lecture-atlas-companion/README.md`](tools/lecture-atlas-companion/README.md) before loading it.

## Privacy and copyright

Do not commit raw IIT Patna recordings, private SharePoint links beyond the student-provided folder links, participant lists, or verbatim transcripts. Publish original notes and short, necessary quotations only.
