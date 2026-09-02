# Recording inventory

Last checked: 31 August 2026 (America/Chicago)

This file records only technical metadata needed for study-note production. It intentionally omits participant names and private meeting details.

## Persistent subject-wise ledger

The ignored local ledger at `.course-data/inventory/ledger.json` is the deduplication source of truth. Every visible recording gets one stable identity: `course + nominal date + original filename`; a human-facing source URL may be added when that recording is opened. The ledger preserves completed `canonical`, `unique-fragment`, `duplicate`, and `idle/error` dispositions as well as `pending`, `inProgress`, `captured`, and `failed` states. Before a future folder check, compare visible rows against this ledger, mark only new or changed identities for review, and never reopen a completed identity without recording why. The dated snapshots under `.course-data/inventory/` preserve each check so a failed or interrupted pass can resume without losing its queue position.

## EAI 6401 — Reinforcement Learning

| Nominal session | Variant | Size | Reported duration | Access | Review state |
| --- | --- | ---: | ---: | --- | --- |
| 17 Aug 2026 | base recording | 219 MB | 4h 00m | view only | `canonical`; verified instruction 0:00–1:07:00; 2h53m idle tail excluded; notes published |
| 17 Aug 2026 | numbered copy 1 | 39.5 MB | 4h 00m | view only | `idle/error`: static participant-avatar view across timeline sweep |
| 17 Aug 2026 | numbered copy 2 | 39.5 MB | 4h 00m | view only | `idle/error`: same size and same static timeline pattern as copy 1 |
| 17 Aug 2026 | numbered copy 3 | 12.1 MB | 1h 13m | view only | `idle/error`: silent, static participant-avatar recording |
| 18 Aug 2026 | base recording | 236 MB | 2h 29m 44s | view only | `canonical`; verified instruction 0:00–1:11:43 and 1:13:08–1:21:39; notes published |
| 24 Aug 2026 | base recording | 254 MB | 2h 43m 12s | view only | `canonical`; verified instruction 1:12–39:57 and 41:10–1:18:01; 1h25m11s idle/non-instructional material excluded; notes published |
| 25 Aug 2026 | base recording | 244 MB | 4h 00m | view only | `canonical`; verified instruction 0:00–1:11:13; remaining 2h48m47s idle tail excluded; notes published |
| 31 Aug 2026 | base recording | 255 MB | 2h 30m 37s | view only | `canonical`; verified instruction 0:08:40–1:47:26; participant-only tail excluded; notes published |

All August 17 variants have now been sampled across their timelines: the base recording is canonical and all three numbered variants are `idle/error`. The bounded canonical capture, clean transcript, 26-candidate slide review, categorized academic signals, and public note are complete.

The learner confirmed that instruction in the four-hour base recording ends at `01:07:00`. The saved sidecar records `captureEndSourceSeconds: 4020` and `stopReason: marked-teaching-end`; the remaining 2h53m was not captured or transcribed. Processing found 1.65% silence, 66 distinct sampled visual hashes, 21 meaningful transitions, and 26 slide candidates, confirming substantive instruction throughout the bounded source.

The August 18 base recording was swept before capture. Slides and worked examples are visible at the beginning, 37:53, 1:15:04, 1:20:30, and 1:21:38; the view has returned to the participant grid by 1:22:15 and remains idle later. Capture, clean transcription, and slide-frame review verified teaching intervals of `00:00–01:11:43` and `01:13:08–01:21:39`, separated by a brief connection interruption. The remaining ~1h08m tail is excluded, and the day-wise note is published.

The August 24 base recording was the only new queue item. Its stable identity is `EAI 6401` plus the original filename `Reinforcement Learning-20260824_180948-Meeting Recording.mp4`. The pre-capture sweep found a participant grid at 0:00:33, instruction by 0:01:00, regret slides from 0:17:28, a short connection interruption around 0:39:58–0:41:10, worked examples through 1:18:01, and only participant/black idle states later. The bounded 2× visible-tab capture and source-time-restored transcript verified instructional intervals `01:12–39:57` and `41:10–1:18:01`. Processing retained 44 slide candidates from 83 sampled frames, measured only 3.03% silence inside the bounded capture, and recorded 77 distinct visual hashes with 23 meaningful transitions. The idle tail was excluded and the bilingual note with 25 explained MCQs was published.

The August 25 base recording was processed as the only requested queue item. Its stable identity is `EAI 6401` plus `Reinforcement Learning-20260825_181536-Meeting Recording.mp4`. The full-timeline sweep found instruction at the beginning, 28:45, and 1:02:58; the share ended around 1:09:38, a short closing Q&A continued through 1:11:13, and participant-only idle states were verified at 2:01:29, 2:30:14, 2:59:30, 3:34:42, and 3:55:02. The permitted 2× visible-tab capture stopped at 1:11:42, and transcript review bounded instruction to `00:00–1:11:13`. Processing sampled 72 frames, found 49 distinct perceptual hashes and 6 meaningful transitions, retained 6 visually distinct candidates, and measured 1.12% silence. The 2h48m47s idle tail was excluded; the bilingual note includes the closing student question, the UCB preview, the pending-slide announcement, and exactly 25 explained MCQs.

The August 31 source was opened only after the prior reviewed recording tab was closed. Its stable identity is `EAI 6401` plus `Reinforcement Learning-20260831_180423-Meeting Recording.mp4`; Stream reported 2h30m37s and exposed no Download action. The required full-timeline sweep found instructional UCB material around 16:37, Gradient Bandit material around 37:41, and Associative Search/Contextual Bandits around 1:15:23; samples at 1:53:04, 2:15:38, and 2:26:45 showed participant-only idle content. Boundary checks confirmed the first sustained teaching interval begins within the visible UCB section and the final sustained teaching segment ends at approximately `01:47:26`, after which the participant-only tail was excluded.

The permitted visible-tab + audio capture ran at 2× from source `00:08:40` to `01:47:26`. A first endpoint-only test capture was rejected as an invalid static artifact and remains private in the learner's Downloads folder; it was not used for processing or publication. The corrected capture sidecar records `captureStartSourceSeconds: 520.991163`, `captureEndSourceSeconds: 6446.364752`, `playbackRate: 2`, and `stopReason: marked-teaching-end`. Local processing produced the private audio/video evidence and a Whisper transcript with source-time-aligned segments. The published English-only note covers UCB, gradient preferences and baselines, the softmax derivative, contextual bandits, four substantive student questions, the instructor's numerical exercise, five further-study resources, one visual study aid, a public capstone, and exactly 25 explained MCQs. The subject resource trail was refreshed with a contextual-bandit simulation guide.

The folder was re-inventoried on 23 August 2026. It still contains exactly the five sources listed above; no filename, size, access mode, or visible source identity changed, so the deterministic review queue gained no EAI 6401 item.

Numbered copies 1 and 2 were rejected before capture. Distributed visual samples at the beginning, around one hour, and around three hours remained on the same static participant-avatar view; both files report four hours and have the identical 39.5 MB size. Neither contains visual evidence of instruction in the sampled timeline.

Numbered copy 3 was rejected after full-timeline sampling and capture-assisted validation. The first 31m34s of source time contained digital silence throughout (`mean_volume = max_volume = -91.0 dB`; 946.08s silence across the captured 946.08s), and all 32 distributed frames had the same perceptual hash. Beginning, middle, and end sampling showed the same static participant-avatar/player state with no instruction.

## EAI 6402 — Meta Learning

| Nominal session | Size | Reported duration | Access | Meaningful interval | Review state |
| --- | ---: | ---: | --- | --- | --- |
| 22 Aug 2026 | 291 MB | 2h 14m 47s | download offered | 24:00–1:24:57 and 1:37:37–2:14:44 | canonical; notes published |

Five-minute visual sampling and the timestamped transcript confirm that the recording contains a 24-minute waiting-room period and a mid-class break from approximately 1:24:57 to 1:37:37. The public note uses only the two instructional intervals and includes a twelve-entry slide/whiteboard trail.

The supplied EAI 6402 folder was re-inventoried on 23 August 2026. It still exposes only `Meta Learning-20260822_100819-Meeting Recording.mp4` at 291 MB; this source already has a completed canonical disposition and was not reopened.

The EAI 6402 folder was checked again on 24 August 2026 and still contains exactly the same single completed source.

## EAI 6403 — Selective Topics in Generative AI

| Nominal session | Source | Size | Reported duration | Access | Review state |
| --- | --- | ---: | ---: | --- | --- |
| 23 Aug 2026 | `Selective Topics in Generative AI-20260823_153847-Meeting Recording.mp4` | not exposed in the supplied listing | 55m 53s | view only | `canonical`; verified instruction 00:30–53:35; 2m48s non-instructional head/tail excluded; notes published |

The new `course74` source supplied on 23 August 2026 exposes exactly one Generative AI recording, so it is the only and therefore oldest item in the deterministic EAI 6403 queue. Its stable source identity is the course code, original timestamped filename, and human-facing Stream page URL recorded in the local review manifest.

The pre-capture sweep found substantive teaching at 0:30, 5:56, 14:22, 28:18, 48:35, 50:15, and 53:35. The visible trail covers an introduction to transformers, transformer architecture, tokenization and positional encoding, auxiliary architectural features including layer normalization and dropout, sampling/temperature, and a transformer-flow visualization. A participant-grid view at 43:35 is an internal interruption rather than the end because instruction resumes by 48:35. The final positive teaching frame is at 53:35; the view has changed to the participant grid by 53:45 and remains idle at 55:15. The bounded review interval is therefore `00:30–53:35`, pending confirmation from the complete capture/transcript.

Microsoft Stream exposed no Download action for this view-only source. The permitted Audio + visible tab capture ran at 2× and stopped at the marked teaching end. Local processing verified both audio and video, restored the transcript to source time, sampled 53 distributed frames with 53 unique perceptual hashes and 27 meaningful transitions, retained 32 visual candidates, and produced the bilingual note with exactly 25 explained MCQs. The capture sidecar records `stopReason: marked-teaching-end`.

The older supplied EAI 6403 link was also checked on 23 August 2026 and incorrectly resolved to the `course73` Meta Learning folder. It is retained only as historical configuration evidence and is no longer the active EAI 6403 source.

The `course74` people listing was checked again on 24 August 2026 and still exposes only the completed 23 August recording.

The `course74` people listing was checked on 30 August 2026 after the new source appeared. The stable identity is `EAI 6403` plus `Selective Topics in Generative AI-20260830_154047-Meeting Recording.mp4`; it is distinct from the 23 and 29 August sources and was placed after them in the subject archive. No visible Download action was available. The required pre-capture sweep found instructional material at the beginning, 10%, 25%, 50%, and 75% samples; the 90% and near-end samples showed participant-only idle content. Additional checks confirmed teaching through the `Soket AI` slide at approximately `46:53`, followed by participant-only content. The permitted visible-tab capture ran at 2× and saved a valid WebM plus sidecar under `/Users/ukumar/Downloads/lecture-atlas`; an endpoint-only test capture was rejected as an invalid static artifact and remains private.

Local processing verified audio and video, restored source timecodes, sampled 51 frames with 32 slide candidates, and measured 7.74% silence inside the bounded artifact. The canonical teaching interval is `00:19–46:53` source time, with the idle tail to the 55:47 reported endpoint excluded. The capture sidecar records `captureStartSourceSeconds: 19.902311`, `captureEndSourceSeconds: 2813.761889`, `playbackRate: 2`, and `stopReason: marked-teaching-end`. The English-only note includes the self-attention, pronoun resolution, translation, Transformer/BERT, and modern-AI narrative; explicit empty assignment/homework/lab/project categories; timecoded references and student response; five further-study resources; and exactly 25 explained MCQs. The public capstone is `ContextLens`, a context and translation-debugging lab. The subject resource catalog was refreshed with BERT and The Annotated Transformer, and the publication was pushed to `origin/main` and deployed to the GitHub Pages mirror.

## EBB 6403 — Security and Privacy for Big Data

| Nominal session | Source | Size | Reported duration | Access | Review state |
| --- | --- | ---: | ---: | --- | --- |
| 21 Aug 2026 | `Security and Privacy for Big Data-20260821_074805-Meeting Recording.mp4` | 29.3 MB | 6m 16s | view only | `idle/error`; visible-tab triage/capture contained no intelligible instruction; excluded from note publication |
| 21 Aug 2026 | `Security and Privacy for Big Data-20260821_075934-Meeting Recording.mp4` | 108 MB | 48m 00s | view only | `canonical`; verified instruction 01:24–48:00; notes published |

The oldest EBB 6403 source was opened alone and swept at the beginning, 10%, 25%, 50%, 75%, 90%, and near-end. Lecturer video was visible through approximately 03:50, while participant-only black/avatar states began around 04:03 and persisted through the 06:16 nominal end. The authorized visible-tab + audio capture at 2× covered source `00:11–03:50`, then the recording tab was closed. Local processing found a 97.2% silence ratio and only repeated `you` fragments from Whisper; no slide or instructional audio evidence was recoverable. It is therefore recorded as `idle/error`, with no public note created.

The 07:59:34 source was opened only after the rejected recording tab was closed. A full sweep found a title/instructor at 00:00:13, substantive Veracity, threat-modelling, access-control, authentication and anonymization slides at 05:36, 11:58, 23:58, 35:58, 43:10 and 47:29, and the final teaching slide at 47:58. The visible-tab + audio capture ran at 2× from source `01:24` to the 48:00 endpoint; no idle tail was observed. Local processing verified audio/video, restored source-time transcript timestamps, sampled 47 frames with 21 slide candidates, and produced the bilingual note with exactly 25 explained MCQs. No assignment, homework, lab, project, instructor reference, or substantive student question was separately stated, so each signal category is explicitly empty.

## ECS 6401 / ESD 6301 — Advanced Time Series Analysis

| Nominal session | Source | Size | Reported duration | Access | Review state |
| --- | --- | ---: | ---: | --- | --- |
| 19 Aug 2026 | `Advanced Time Series Analysis-20260819_175559-Meeting Recording.mp4` | 354 MB | 1h 30m 42s | view only | `canonical`; verified capture 00:06:39–01:25:20; participant-only tail excluded; notes published |
| 21 Aug 2026 | `Advanced Time Series Analysis-20260821_180935-Meeting Recording.mp4` | 297 MB | 1h 16m 21s | view only | `canonical`; verified capture 00:00:46–01:15:34; participant-only opening and 46s idle camera tail excluded; notes published |
| 26 Aug 2026 | `Advanced Time Series Analysis-20260826_180538-Meeting Recording.mp4` | 202 MB | 1h 22m 09s reported | view only | `canonical`; verified teaching 00:03:16–01:20:45; participant-only idle tail excluded; notes published |

The 19 August source was opened alone and swept at the beginning, 10%, 25%, 50%, 75%, 90%, and near-end. Participants and the waiting-room view were present at the beginning; sustained instruction was visible by approximately 00:06:02. The instructor covered the course roadmap, visualization, stationarity, autoregression, VAR, cointegration, volatility, financial forecasting, RNN/LSTM/transformers, and the definition/components of time series. The final teaching slide was visible at 01:25:20, followed by participant-only idle content through the 01:30:42 nominal end.

The permitted visible-tab + audio capture ran at 2×. The saved artifact begins at source 00:06:39 because of a short capture-start popup delay; the triage start remains recorded separately. Local processing verified audio/video, restored source-time transcript timestamps, sampled 80 frames, retained 20 slide candidates, and produced the bilingual note with exactly 25 explained MCQs. The stable Microsoft Stream URL is exposed on the subject and lecture rows; no hidden media URL was used.

The 21 August source was opened only after the 19 August recording tab was closed. Its full sweep found a participant-only opening, sustained components/stationarity and visualization teaching, a Python/Jupyter demonstration, synthetic trend/seasonality and additive decomposition, stationarity diagnostics, and moving-average examples. Instruction was verified from source `00:00:46` through `01:15:34`; the final camera-only tail to the `01:16:21` nominal endpoint was excluded. The permitted visible-tab + audio capture ran at 2×, was trimmed to the verified interval, and was processed with source-time restoration. Local processing verified both streams, sampled 78 frames and 44 slide candidates, and produced the bilingual note with exactly 25 explained MCQs. The transcript contains no assignment, homework, lab, project, or substantive student question; the closing study-material/code announcement is recorded under references.

The 26 August source was opened only after the 21 August recording tab was closed. The required distributed sweep found instructor/slide instruction at 00:00:42, 00:08:07, 00:20:37, 00:40:57, 01:01:37, 01:13:47, 01:15:27 and 01:20:27; the endpoint sample at 01:20:57 was participant-only. The permitted visible-tab + audio capture ran at 2× from source `00:03:16` to `01:20:45`. Local processing verified audio/video, restored source-time transcript timestamps, sampled 77 frames with 76 unique perceptual hashes and 48 meaningful transitions, and produced the bilingual note with exactly 25 explained MCQs. The transcript contains no assignment, homework, lab, project, instructor-recommended reference, or substantive student question, so every signal category is explicitly empty. The participant-only tail to the 01:22:09 source endpoint was excluded.

## EBB 6402 — Blockchain Policy

| Nominal session | Source | Size | Reported duration | Access | Review state |
| --- | --- | ---: | ---: | --- | --- |
| 18 Aug 2026 | `Blockchain policy – Legal, Social and Economic Impact-20260818_180205-Meeting Recording.mp4` | 154 MB | 1h 33m 12s | view only | `canonical`; verified instruction 00:07:01–01:32:13; notes published |
| 20 Aug 2026 | `Blockchain policy – Legal, Social and Economic Impact-20260820_180203-Meeting Recording.mp4` | 121 MB | 1h 29m 23s | view only | `canonical`; verified instruction 00:05:58–01:27:25; announced break and idle tail excluded; notes published |
| 25 Aug 2026 | `Blockchain policy – Legal, Social and Economic Impact-20260825_180424-Meeting Recording.mp4` | 229 MB | 2h 19m 24s reported | view only | `canonical`; verified instruction 00:04:52–02:19:24; participant setup excluded; notes published |

The 18 August source was opened alone and swept at the beginning, 10%, 25%, 50%, 75%, 90%, and near-end. The opening sample was participant-only; sustained policy teaching was visible by approximately 00:05:55 and continued through governance material at 01:32:13. Participant-only Teams UI returned at approximately 01:32:19 and continued to the 01:33:12 nominal end. A paused endpoint capture was rejected as an invalid static audit artifact; the corrected permitted visible-tab + audio capture ran at 2× from source 00:07:01 to 01:32:13. Local processing verified audio/video, restored source timecodes, sampled 85 frames, retained 19 slide candidates, and produced the bilingual note with exactly 25 explained MCQs. No Stream Download action was available.

The lecture covers blockchain policy and its importance; privacy, security, interoperability, legal accountability, HIPAA compliance, and risk management; governance actors, consensus, incentives, and information flow; proof of work versus proof of stake; and institutional-to-infrastructure policy layers. The transcript contains no separately stated assignment, homework, lab, project, instructor-recommended reference, or substantive student question, so each signal category is explicitly empty in the published note.

The 20 August source was opened only after the previous recording tab was closed. The full sweep found a participant/avatar waiting view at 00:00:18, the “Do you ever need Blockchain?” teaching whiteboard at 00:09:19, governance objectives at 00:22:44, on-chain governance at 00:44:31, governance models at 01:06:38, a conclusion at 01:20:02, and the final framework-components slide at 01:27:25. An instructor-announced four-to-five-minute break (01:01:33–01:06:08) was excluded from the meaningful interval, and participant-only idle content began around 01:28:39. The permitted visible-tab + audio capture ran at 2× from source 00:05:58 to 01:27:25. Local processing verified two streams, restored source-time transcript timestamps, sampled 81 frames (48 slide candidates), and produced the bilingual note with exactly 25 explained MCQs. No assignment, homework, lab, project, instructor reference, or substantive student question was separately stated; each category is explicitly empty in the published note. No Stream Download action was available.

The 25 August source was opened only after the 24 August recording tab was closed. The full sweep found a participant avatar at 00:00, sustained risk-management instruction at 00:13:54, AML/KYC financial-flow teaching at 00:34:42, privacy/information-security material at 01:09:18, DLT/disclosure material at 01:43:54, DLT workings at 02:04:32, DLT characteristics at 02:16:17, and a course-outline PDF with spoken recap at 02:18:02–02:18:31. The transcript shows substantive lecture framing beginning around 00:04:52 after greetings, a visibility check, and a finance-domain question; spoken closure continues through the source endpoint at approximately 02:19:24, with no idle tail at the endpoint. The permitted visible-tab + audio capture ran at 2×, preserving the full capture and a bounded teaching artifact under `.course-data/`. Local processing restored source-time timestamps, sampled 138 frames (80 slide candidates), and produced the bilingual note with exactly 25 explained MCQs. The note records the finance case-study question and student project mention in their dedicated signal categories; no assignment, homework, lab, or instructor-recommended reference was separately announced. No Stream Download action was available.

## ECC 6404 — Data Warehousing

| Nominal session | Source | Size | Reported duration | Access | Review state |
| --- | --- | ---: | ---: | --- | --- |
| 17 Aug 2026 | `Data Warehousing-20260817_193438-Meeting Recording.mp4` | 276 MB | 1h 21m 46s | view only | `canonical`; verified instruction 00:20:00–01:19:53; idle tail excluded; notes published |
| 19 Aug 2026 | `Data Warehousing-20260819_193245-Meeting Recording.mp4` | 299 MB | 1h 31m 13s | view only | `canonical`; verified instruction 00:01:04–01:22:43; idle tail excluded; notes published |
| 24 Aug 2026 | `Data Warehousing-20260824_193338-Meeting Recording.mp4` | 319 MB full capture / 315 MB trimmed | 1h 18m 24s | view only | `canonical`; verified instruction 00:30–01:17:26; ~58s desktop/Moodle idle tail excluded; notes published |
| 26 Aug 2026 | `Data Warehousing-20260826_193241-Meeting Recording.mp4` | 418 MB provider listing / 435 MB capture | 1h 43m 40s reported; 1h 23m 19s teaching | view only | `canonical`; verified instruction 00:02:16–01:25:35; participant-only idle tail excluded; notes published |
| 31 Aug 2026 | `New Data Warehousing-20260831_193236-Meeting Recording.mp4` | 346 MB provider listing / 512 MB bounded capture | 1h 27m 59s reported; 1h 26m 35s teaching | view only | `canonical`; verified instruction 00:00:19–01:26:54; participant-gallery idle tail excluded; notes published |

The 17 August Data Warehousing source was opened alone and swept at the beginning, 10%, 25%, 50%, 75%, 90%, and near-end. The opening 00:00:03 sample showed participant avatars; sustained teaching appeared by 00:08:40 and continued through the closing slide at 01:19:25. Participant-only idle content began around 01:20:13. The permitted visible-tab + audio capture ran at 2× from source `00:20:00` to `01:19:53` and stopped at the marked endpoint. Local processing verified audio/video, restored source timecodes, sampled 62 frames (57 unique perceptual hashes; 13 meaningful transitions), retained 20 slide candidates, and produced the bilingual note with exactly 25 explained MCQs. No Stream Download action was available.

The 19 August source was opened only after the 17 August recording was closed. The full sweep found a Teams waiting view at 00:00:07, sustained Data Mining/Data instruction from about 01:04, content at 10%, 25%, 50%, 75%, and 90%, and a Teams chat/participant-only tail by 01:22:53. The visible-tab + audio capture ran at 2× from source `00:01:04` to `01:22:43`; its sidecar maps 2,450.19 capture seconds back to source time. Local processing verified audio/video, restored source timecodes, sampled 82 frames, and produced the bilingual note with exactly 25 explained MCQs. No Stream Download action was available.

The 24 August source was opened only after the 19 August recording was closed. The full sweep covered beginning, 10%, 25%, 50%, 75%, 90%, and near-end positions: a title/participant state at 00:00, sustained “Asymmetric Attributes” teaching by 00:30, Types of Data Sets around 10:00, Record Data/market basket at 20:00, Graph-based Data at 40:00, Data Quality at 60:00, Measurement and Data Collection Issues at 70:00, and Noise and Artifacts at 75:00. The source endpoint was 01:18:24; a desktop/Gmail/Moodle idle tail begins around 01:16:44 and remains non-instructional through the endpoint, after the closing at approximately 01:17:26. The permitted visible-tab + audio capture ran at 2×, preserving the full private capture under `.course-data/` and trimming the retained processing artifact to the verified interval. Local processing verified audio/video, restored source-time timestamps, sampled 77 frames (46 slide candidates), and produced the bilingual note with exactly 25 explained MCQs. No assignment, homework, lab, project, instructor-recommended reference, or substantive student question was separately stated; each category is explicitly empty in the published note. No Stream Download action was available.

The 31 August source was opened only after the prior recording tab was closed. A full timeline sweep at 00:19, 08:50, 22:01, 43:59, 01:06:00, 01:19:12, 01:26:25, 01:26:40, and 01:26:53 showed sustained PowerPoint instruction on dimensionality reduction, PCA/SVD, feature-subset selection, filter/wrapper/embedded methods, evaluation strategy, feature weighting, and feature creation. Participant-gallery-only idle content appeared at 01:27:09 and 01:27:43. No visible Download action was available, so the permitted visible-tab capture ran at 2× from source 00:00:19 to the marked teaching end 01:26:54. Local processing verified two streams, restored source-time timestamps, sampled 87 frames (63 meaningful transitions), and produced the English note with exactly 25 explained MCQs plus a feature-reduction visual study aid. No assignment, homework, lab, project, instructor-recommended reference, or substantive student question was separately stated; each signal category is explicitly empty in the published note.

Queue publication checkpoint: `ecc-6404-2026-08-31-193236` is the fifth published Data Warehousing lecture and was processed from the bounded local capture; the ignored queue state records the item as complete after the guarded GitHub deployment.

## Newly catalogued Moodle electives

The six folders below were verified from the signed-in IIT Patna Moodle “Lecture Room and Recordings” card on 27 August 2026. Course-level links, recurring session data, and verified lecture notes are published incrementally after each recording. Four folders expose visible file rows, while two remain access-blocked. EBB 6403 now has one rejected idle/error source and one canonical published note; individual human-facing Stream pages remain pending for sources not yet opened.

| Course | Verified recording folder | Review state |
| --- | --- | --- |
| ECS 6402 — Selected Topics in Wireless Networks | `course75` SharePoint folder | excluded from note processing (access denied) |
| EBB 6401 — Smart Contracts and Solidity Programming | `course77` SharePoint folder | excluded from note processing (access denied) |
| EBB 6403 — Security and Privacy for Big Data | `course78` SharePoint folder | 2 visible sources inventoried; oldest rejected as `idle/error`, 07:59:34 canonical note published; separate Friday and Saturday sessions/Teams links recorded |
| ECS 6401 / ESD 6301 — Advanced Time Series Analysis | `course129` SharePoint folder | 3 visible sources inventoried; 19, 21, and 26 Aug canonical notes published |
| ECC 6404 — Data Warehousing | `course76` SharePoint folder | 5 visible sources inventoried; 17, 19, 24, 26, and 31 Aug canonical notes published |
| EBB 6402 — Blockchain Policy — Legal, Social and Economic Impact | `course126` SharePoint folder | 3 visible sources inventoried; 18, 20, and 25 Aug canonical notes published; Tuesday and Thursday share one Teams link |

The next review pass will inspect these folders without opening multiple recordings, create a stable source queue ordered by original recording timestamp, and—where sources are contemporaneous—rotate one oldest eligible lecture per subject before revisiting any subject. The existing global oldest-first ordering remains authoritative. ECC 6404 order 1, EBB 6402 order 2, and ECS 6401 / ESD 6301 order 3 are complete; EBB 6403 order 4 is rejected as `idle/error`; ECC 6404 order 5 (19 August), EBB 6402 order 6 (20 August), EBB 6403 order 7 (21 August at 07:59:34), and ECS 6401 / ESD 6301 order 8 (21 August at 18:09:35) are complete. ECC 6404 order 9 (24 August at 19:33:38), EBB 6402 order 10 (25 August at 18:04:24), ECS 6401 / ESD 6301 order 11 (26 August at 18:05:38), and ECC 6404 order 12 (26 August at 19:32:41) are now complete; no eligible queue item remains.

The first folder-access check (`course75`, ECS 6402) on 27 August 2026 reached Microsoft 365’s “You don't have permission to access this item” page in the current Chrome session. A second independent check (`course77`, EBB 6401) reached the same Microsoft 365 access-denied page. Both courses are marked `excluded` from note processing until access changes; no file metadata was read and no recording was opened. The other four folders are accessible and their visible rows are recorded in `.course-data/inventory/2026-08-27.json`; the EBB 6403 07:48:05 source was triaged separately on 28 August and rejected as `idle/error`, while its 07:59:34 source is now canonical and published.

Visible source rows from the four accessible folders (all `view-only`; the listing did not expose duration) are:

- **EBB 6403 / course78:** `Security and Privacy for Big Data-20260821_074805-Meeting Recording.mp4` (29.3 MB; rejected `idle/error` after triage); `Security and Privacy for Big Data-20260821_075934-Meeting Recording.mp4` (108 MB; 48m 00s; canonical note published).
- **ECS 6401 / ESD 6301 / course129:** `Advanced Time Series Analysis-20260819_175559-Meeting Recording.mp4` (354 MB; canonical); `Advanced Time Series Analysis-20260821_180935-Meeting Recording.mp4` (297 MB; canonical); `Advanced Time Series Analysis-20260826_180538-Meeting Recording.mp4` (202 MB; canonical; 00:03:16–01:20:45 teaching).
- **ECC 6404 / course76:** `Data Warehousing-20260817_193438-Meeting Recording.mp4` (276 MB; canonical); `Data Warehousing-20260819_193245-Meeting Recording.mp4` (299 MB; canonical); `Data Warehousing-20260824_193338-Meeting Recording.mp4` (319 MB full capture / 315 MB trimmed; canonical); `Data Warehousing-20260826_193241-Meeting Recording.mp4` (418 MB provider listing / 435 MB capture; canonical; teaching 00:02:16–01:25:35); `New Data Warehousing-20260831_193236-Meeting Recording.mp4` (346 MB provider listing / 512 MB bounded capture; canonical; teaching 00:00:19–01:26:54).
- **EBB 6402 / course126:** `Blockchain policy – Legal, Social and Economic Impact-20260818_180205-Meeting Recording.mp4` (154 MB; canonical); `Blockchain policy – Legal, Social and Economic Impact-20260820_180203-Meeting Recording.mp4` (121 MB; canonical); `Blockchain policy – Legal, Social and Economic Impact-20260825_180424-Meeting Recording.mp4` (229 MB; canonical, 00:04:52–02:19:24 teaching interval).

### Six-course review queue checkpoint — 28 August 2026

The requested coverage rotation is persisted in `.course-data/review-queue.json` (ignored local state). It keeps one oldest eligible recording per subject in each round, while the global tie-break remains original recording date/time, course code, then source filename. The current state is:

| Course | State | Evidence / next action |
| --- | --- | --- |
| ECS 6402 — Selected Topics in Wireless Networks | `excluded` (inventory blocked) | `course75` opened; Microsoft 365 access denied; excluded until the institute account has access |
| EBB 6401 — Smart Contracts and Solidity Programming | `excluded` (inventory blocked) | `course77` opened; the same access-denied page; excluded until the institute account has access |
| EBB 6403 — Security and Privacy for Big Data | `active` (1 published, 1 rejected) | 07:48:05 source rejected as `idle/error`; 07:59:34 source captured and published with verified security/privacy timeline |
| ECS 6401 / ESD 6301 — Advanced Time Series Analysis | `active` (3 published) | 19, 21, and 26 Aug sources captured and published |
| ECC 6404 — Data Warehousing | `active` (5 published) | 17, 19, 24, 26, and 31 Aug sources captured and published |
| EBB 6402 — Blockchain Policy — Legal, Social and Economic Impact | `active` (3 published) | 18, 20, and 25 Aug sources captured and published; next round continues with ECS 6401 / ESD 6301 |

Checkpoint evidence: `activeRecordingTabsOpened: 0`, `reviewedRecordingTabsLeftOpen: 0`, `captured: 11`, `rejected: 1`, `pending: 0`, `inProgress: 0`, and `failed: 0`; four accessible folders expose no pending source after the canonical ECC 6404, EBB 6402, ECS 6401 and EBB 6403 captures plus the rejected EBB 6403 source, and two courses are explicitly excluded for access denial. The queue is timestamp-sorted within each subject round in `.course-data/review-queue.json`; process one source at a time and revisit excluded courses only after their permissions change.

The Moodle elective page was also rechecked after restoring the existing Microsoft session. Its schedules and Teams links remain unchanged. The deterministic recording queue has no pending eligible source after ECC 6404 on 26 August at 19:32:41 was captured and its recording tab closed; excluded folders remain blocked until permissions change.

### Aug 29 round — queue-runner checkpoint

| Course | Source | Size / duration | Access | Review state |
| --- | --- | --- | --- | --- |
| EAI 6403 | `Selective Topics in Generative AI-20260829_153643-Meeting Recording.mp4` | 56m 05s provider duration; 134 MB permitted visible-tab capture | view only; no Download action | `canonical`; capture verified through source 49:06; note authored and validated |
| EAI 6402 | `Meta Learning-20260829_100419-Meeting Recording.mp4` | 431 MB listing; 2h 34m 33s nominal / 309 MB capture; 2h 03m 30s verified teaching | view only; no Download action | `canonical`; capture verified 00:29:43–02:34:33; note authored and validated |

The durable queue state is maintained in ignored `.course-data/recording-queue-state.json` and the source inventory in `.course-data/recording-sources.json`. The queue priority for this round is EAI 6403, then EAI 6402; subsequent sources are selected one oldest eligible recording per course per round. The EAI 6403 source was swept at distributed timeline positions, captured at 2× with the visible tab and audio, restored to source timestamps, and stopped at the final sustained teaching segment. The participant-only tail after approximately 49:06 was excluded. The first failed paused capture remains private invalid evidence and was not used for publication.

The EAI 6402 source was opened only after the EAI 6403 recording tab was closed. Its full sweep found participant-only views at 00:00:05 and 00:15:05, computer-vision instruction by 00:29:33, face-verification and recognition material around 01:15:05, crime-scene understanding around 02:15:05, adversarial-attack material at 02:30:05, and continued teaching on the final frame at 02:34:33. The visible-tab + audio capture initially started at the endpoint and was stopped and saved as private invalid evidence; the corrected capture then ran at 2× from approximately source 00:29:43 through 02:34:33. The valid WebM is 309 MB and its timing map restores a 2h 03m 30s instructional interval. Local processing verified audio/video, restored source-time timestamps, sampled 129 frames (72 slide candidates), and produced the English note with exactly 25 explained MCQs. No Stream Download action was available. The note is now published and deployed to GitHub Pages; the invalid endpoint capture remains private evidence only.

### 1 September 2026 — EAI 6401 Reinforcement Learning

| Nominal session | Source | Size / duration | Access | Review state |
| --- | --- | ---: | --- | --- |
| 1 Sep 2026 | `Reinforcement Learning-20260901_180526-Meeting Recording.mp4` | 246 MB provider listing / 280 MB corrected capture; 1h 53m 29s nominal; 1h 23m 06s verified teaching | view only; no Download action | `canonical`; teaching verified approximately 00:00:34–01:23:36; participant-only tail excluded |

The source was opened alone from the signed-in `course72` SharePoint folder. The required sweep at the beginning, 10%, 25%, 50%, 75%, 90%, and near-end found sustained instruction in the opening two-armed exercise, finite MDP slides, the agent–environment interface, transition probabilities, and the Recycling Robot example. Participant grid/avatar-only content appeared around 01:24:04 and continued through the 01:53:29 nominal endpoint. No visible provider Download action was available.

An initial endpoint-only capture was rejected because capture began while the player was parked at the teaching end; its sidecar recorded a zero-length source interval and it was not used for processing. After closing that tab, stale sign-out tabs were removed from the capture workspace, and a corrected visible-tab + audio capture ran at 2× from approximately source 00:00:39 to 01:23:46. The recording tab was then closed before local processing. The accepted artifact is `/Users/ukumar/Downloads/lecture-atlas/2026-09-01-Reinforcement Learning-video (1).webm`; its processed manifest records source-time restoration, 88 frames, and the bounded source end `5026.0` seconds.

Local processing verified audio and video, detected English, restored source-time transcript timestamps, sampled 88 frames with the Exercise, finite-MDP, Agent–Environment Interface, and Recycling Robot visuals, and produced the English-only note `eai-6401-2026-09-01` with exactly 25 explained MCQs, four insights, and explicit signal categories. The public capstone is `MDP Sketchbook`, a state-and-reward audit lab. The durable queue records the accepted source as `canonical`, the first attempt as rejected evidence, and the item at `note-ready` pending the separately authorized GitHub publication step.

### 1 September inventory refresh — six non-EAI subjects

The signed-in folder check restored recording access for ECS 6402 and EBB 6401 and found 13 unprocessed sources across five subjects. ECC 6404 had no source newer than its already-published 31 August lecture. The durable round-robin queue now rotates one oldest pending source per subject in this order: EBB 6401, ECS 6402, EBB 6403, ECS 6401/ESD 6301, and EBB 6402. The fresh private inventory is `.course-data/inventory/2026-09-01-other-subjects.json`.

| Course | Newly inventoried sources | Current disposition |
| --- | ---: | --- |
| EBB 6401 — Smart Contracts and Solidity Programming | 6 | 17 Aug 18:09:21 canonical note published; remaining five pending deterministic review |
| ECS 6402 — Selected Topics in Wireless Networks | 3 | 21 Aug source canonical and note-ready; 27 and 28 Aug pending deterministic review |
| EBB 6403 — Security and Privacy for Big Data | 2 | 28 and 29 Aug sources pending deterministic review |
| ECS 6401 / ESD 6301 — Advanced Time Series Analysis | 1 | 28 Aug source pending deterministic review |
| EBB 6402 — Blockchain Policy | 1 | 1 Sep source pending deterministic review |
| ECC 6404 — Data Warehousing | 0 | no new source beyond the published 31 Aug lecture |

#### EBB 6401 — 17 August 2026, 18:09:21 source

`Smart contracts and solidity programming-20260817_180921-Meeting Recording.mp4` is a 62.6 MB, 38m 02s view-only source with no visible provider Download action. The required sweep found participant/avatar-only content at the beginning, sustained whiteboard teaching from approximately 03:59, smart-contract definition and cryptographic-box material through the middle, public/private keys plus signing/verification near the end, and participant-only idle content after approximately 32:44. The visible-tab capture ran at 2× from the verified start to source end; the retained processing artifact was deterministically trimmed to 03:59–32:44 before transcription.

Local processing verified audio and video, restored source timestamps, sampled 29 regular frames, and classified the source `canonical`. The English-only note `ebb-6401-2026-08-17-180921` includes the timecoded whiteboard trail, six-part summary, five expert insights, explicit transcript-derived signal arrays, an optional Smart Contracts practice layer, five first-party/practical resources, an accessible agreement-to-execution visual, the public `ClauseCraft` capstone, and exactly 25 MCQs with every option explained. The Smart Contracts resource trail was refreshed with Ethereum's smart-contract introduction and the Remix local practice environment.

#### ECS 6402 — 21 August 2026, 20:43:51 source

`Selected Topics in Wireless Networks-20260821_204351-Meeting Recording.mp4` is a 221 MB, 1h 19m 29s view-only source with no visible provider Download action. The required beginning/10%/25%/50%/75%/90%/near-end sweep found sustained OneNote whiteboard instruction from the opening reading list and communication-versus-network distinction through the communication model, payload/overhead, analog and digital representation, sampling, quantisation, encoding, modulation, multiplexing, congestion, interfaces, signal propagation, and synchronization. Active writing continued at approximately 1:16:34; participant-gallery and closing acknowledgements began around 1:16:46.

The permitted visible-tab capture ran at 2× from source 00:15 and was stopped at the closing transition. Its retained artifact was deterministically trimmed to the verified 00:15–01:16:40 teaching interval before processing. Local processing verified audio and video, restored source-time transcript timestamps, sampled 76 frames, and classified the source `canonical`. The English-only note `ecs-6402-2026-08-21-204351` includes a 16-point whiteboard trail, seven-part summary, five expert insights, the instructor's reading-list and whiteboard-PDF references, three substantive student questions with responses, an optional Wireless Networks practice layer, five reliable learning resources, an accessible wireless-system visual, the public `LinkScope` capstone, and exactly 25 MCQs with every option explained. No assignment, homework, lab, or project was assigned by the instructor in this lecture; those transcript-derived categories remain explicitly empty and optional expert practice is rendered separately.
