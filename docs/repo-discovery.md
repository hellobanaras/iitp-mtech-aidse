# Repository Architecture & Codebase Discovery

**Repository:** `iitp-mtech-aidse-lecture-atlas`
**Purpose:** Public, day-wise study companion with bilingual source records and an aligned English/Hindi study surface for IIT Patna Executive M.Tech AI & Data Science (Semester 4, August–November 2026).
**Maintained Courses (Moodle aliases preserved in `data/catalog.js`):**
- **EAI 6401/ECS 6404/ECC 6403**: Reinforcement Learning
- **EAI 6402/ECC 6401**: Meta Learning
- **EAI 6403**: Selective Topics in Generative AI
- **ECC 6404**: Data Warehousing
- **ECS 6401/ESD 6301**: Advanced Time Series Analysis
- **ECS 6402**: Selected Topics in Wireless Networks
- **EBB 6401**: Smart Contracts and Solidity Programming
- **EBB 6402**: Blockchain Policy — Legal, Social and Economic Impact
- **EBB 6403**: Security and Privacy for Big Data

---

## 1. Directory & File Organization

```
.
├── AGENTS.md                          # Principal working rules & persistent lessons for AI agents
├── agents/
│   └── recording-note-taker.md        # Dedicated evidence-to-bilingual note and resource-refresh profile
├── README.md                          # Project introduction, developer setup, and workflow overview
├── package.json                       # Scripts for checking, building, and deploying
├── index.html                         # SPA entry point with responsive mobile-first shell
├── assets/
│   ├── app.js                         # Single-page router, shared note/archive/calendar renderers, search, and bilingual capstone renderer
│   ├── styles.css                     # Custom CSS system with mobile navigation, dark/light themes, and responsive design
│   ├── favicon.svg                    # Site favicon
│   └── lecture-atlas-social.png       # OpenGraph preview asset
├── data/
│   ├── catalog.js                     # Course metadata and published/inventoried lecture listings
│   ├── catalog-hi.js                  # Hindi course titles & notes descriptions
│   ├── i18n.js                        # UI localization strings for English and Hindi interface labels
│   ├── lecture-notes.js               # Central aggregator loading all bilingual lecture note modules
│   ├── lectures/                      # Published bilingual lecture modules ({ en: {...}, hi: {...} })
│   │   ├── eai-6401-2026-08-17.js
│   │   ├── eai-6401-2026-08-18.js
│   │   ├── eai-6401-2026-08-24.js
│   │   ├── eai-6401-2026-08-25.js
│   │   ├── eai-6402-2026-08-22.js
│   │   └── eai-6403-2026-08-23.js
│   ├── capstones.js                    # Public bilingual mini-capstone ideas keyed by lecture id
│   ├── open-resources.js               # Curated free/open links and transparent book catalogues by subject
│   ├── program.js                     # Cohort semester status, syllabus credit breakdown, and program details
│   ├── resources.js                   # Catalog of public PDFs and presentation slide decks
│   └── schedule.js                    # Recurrent timetable, Teams join URLs, and Kolkata/Chicago timezone logic
├── docs/
│   ├── agent-constitution.md          # Immutable product constitution & architectural governance
│   ├── content-schema.md              # Detailed structural specification for lecture notes & metadata
│   ├── recording-inventory.md         # Comprehensive manifest of all course recordings and triage dispositions
│   ├── recording-review-playbook.md   # Step-by-step triage, extraction, and publication protocol
│   └── repo-discovery.md              # Persisted repository discovery specification (this document)
├── tools/
│   ├── build_static_site.mjs          # Static site builder copying public assets to dist/
│   ├── validate_content.mjs           # Content validator checking MCQ counts, bilingual parity, URLs & secrets
│   ├── validate_repo_discovery.mjs    # Discovery gate script verifying discovery status & schema synchronization
│   ├── index_resources.mjs           # Auto-indexer for public PDFs/presentations in resources/
│   ├── generate_calendars.mjs         # iCalendar (.ics) generator for course schedules
│   ├── process_lecture.py             # Python video triage, cadence restoration, contact sheet & frame generator
│   ├── build_review_packet.py         # Python transcript & frame manifest aggregator for manual review
│   └── lecture-atlas-companion/       # Chrome Manifest V3 extension for playback control & local capture
├── resources/                         # Public course slide decks and syllabus documents
│   ├── eai-6401/
│   ├── eai-6402/
│   ├── eai-6403/
│   └── program/
├── calendar/                          # Generated .ics files for calendar sync
└── .course-data/                      # Ignored private working directory (raw video, transcripts, and processing drafts)
```

---

## 2. Core Architectural Principles & Invariants

1. **Zero Runtime Dependency Architecture**: The client runtime (`index.html`, `assets/app.js`, `assets/styles.css`) is built with standard Web APIs (ES Modules, Web Crypto API, Hash Router, CSS Variables) requiring no frontend frameworks or bundlers at runtime.
2. **Deterministic Queue & Triage**: Recordings must be processed strictly chronologically (oldest to newest). Idle or duplicate recordings are classified according to `docs/recording-review-playbook.md` and recorded in `docs/recording-inventory.md`.
3. **Single Bilingual Unit Publication**: Lectures are published as single modules (`data/lectures/<id>.js`) holding both `en` and `hi` content simultaneously. Parity across English and Hindi versions (section count, MCQ counts, slide timestamps, correct answer indices) is strictly enforced.
4. **Clean Hash Routing**: URLs use language-agnostic hash routing (`#/`, `#/course/<slug>`, `#/lecture/<id>`, `#/schedule`, `#/resources`, `#/capstone`). Language routes like `/en` or `/hi` are forbidden.
5. **Public Applied Mini-Capstones**:
   - Public projects are aligned bilingual objects in tracked `data/capstones.js`, keyed by published lecture id.
   - Capstone content is rendered directly; credentials, authentication controls, participant details, and private learner data must never be committed.
6. **Academic Note Integrity**:
   - Exactly 25 MCQs per published lecture.
   - Explanations required for all 4 options per MCQ.
   - Explicit extraction of assignments, homework, labs, projects, references, and student Q&A with exact timecodes.
7. **Shared presentation primitives**:
   - `lectureRow` and `lectureArchive` are the single renderers for chronological note listings on the home accordions and subject pages.
   - The weekly calendar is the schedule navigation surface; its occurrence cards link to the owning subject and expose Join only while active. Detailed schedule context belongs to the subject page, avoiding a second full course card on the schedule page.
   - Fixed site chrome is shared across routes: the header stays visible at the top, the opaque mobile navigation stays at the bottom, and hash-linked course-note sections reserve space below the header.
   - `data/open-resources.js` is the curated external-learning layer. It is rendered by the same resource-page helper for every subject with the approved selective language treatment, while `data/resources.js` remains generated solely from permitted files in `resources/`.
   - `agents/recording-note-taker.md` is the single operating profile for recording triage, aligned bilingual note synthesis, research, and the mandatory subject-resource refresh after each verified lecture.

---

## 3. Automation Pipeline & Command Matrix

| Command | Purpose | Verification Gate |
|---|---|---|
| `npm run check` | Validates syntax, content rules, and discovery status | Runs `validate_content.mjs` and `validate_repo_discovery.mjs` |
| `npm run build` | Bundles static distribution into `dist/` | Runs `build_static_site.mjs` |
| `npm run update-discovery` | Re-scans codebase and updates discovery specs | Runs `validate_repo_discovery.mjs --update` |
| `npm run deploy:cloudflare` | Builds and deploys `dist/` to Cloudflare Pages | Deploys project `iitp-mtech-aidse` |

---

## 4. Delivery Gate & Discovery Sync Mechanism

To ensure the repository discovery remains continuously up to date whenever changes are made and delivered:
1. `tools/validate_repo_discovery.mjs` is invoked as part of `npm run check`.
2. It verifies that `docs/repo-discovery.md` and Knowledge Item snapshots accurately reflect current courses, lectures, tool scripts, and file structures.
3. If new lectures, scripts, or structural changes are added without updating the discovery record, `npm run check` will report a validation failure.
4. Developers / agents can run `npm run update-discovery` to automatically refresh discovery metadata upon delivering new changes.
5. GitHub Actions Workflow (`.github/workflows/ci.yml`) acts as an automated CI/CD gate on push and pull request.
