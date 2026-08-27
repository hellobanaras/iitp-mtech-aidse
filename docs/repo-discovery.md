# Repository Architecture & Codebase Discovery

**Repository:** `iitp-mtech-aidse-lecture-atlas`
**Purpose:** Public, bilingual, day-wise study companion for IIT Patna Executive M.Tech AI & Data Science (Semester 4, August–November 2026).
**Maintained Courses:**
- **EAI 6401**: Reinforcement Learning
- **EAI 6402**: Meta Learning
- **EAI 6403**: Selective Topics in Generative AI

---

## 1. Directory & File Organization

```
.
├── AGENTS.md                          # Principal working rules & persistent lessons for AI agents
├── README.md                          # Project introduction, developer setup, and workflow overview
├── package.json                       # Scripts for checking, building, and deploying
├── index.html                         # SPA entry point with responsive mobile-first shell
├── assets/
│   ├── app.js                         # Single-page application router, UI components, search, and encryption vault decoder
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
│   ├── private-capstones.enc.js       # AES-256-GCM encrypted ciphertext vault of owner mini-capstones
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
│   ├── encrypt_private_capstones.mjs  # AES-256-GCM vault builder using PBKDF2 key derivation
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
└── .course-data/                      # Ignored private working directory (raw video, transcripts, plaintext capstones)
```

---

## 2. Core Architectural Principles & Invariants

1. **Zero Runtime Dependency Architecture**: The client runtime (`index.html`, `assets/app.js`, `assets/styles.css`) is built with standard Web APIs (ES Modules, Web Crypto API, Hash Router, CSS Variables) requiring no frontend frameworks or bundlers at runtime.
2. **Deterministic Queue & Triage**: Recordings must be processed strictly chronologically (oldest to newest). Idle or duplicate recordings are classified according to `docs/recording-review-playbook.md` and recorded in `docs/recording-inventory.md`.
3. **Single Bilingual Unit Publication**: Lectures are published as single modules (`data/lectures/<id>.js`) holding both `en` and `hi` content simultaneously. Parity across English and Hindi versions (section count, MCQ counts, slide timestamps, correct answer indices) is strictly enforced.
4. **Clean Hash Routing**: URLs use language-agnostic hash routing (`#/`, `#/course/<slug>`, `#/lecture/<id>`, `#/schedule`, `#/resources`, `#/capstone`). Language routes like `/en` or `/hi` are forbidden.
5. **Private Applied Mini-Capstones**:
   - Plaintext projects reside only in untracked `.course-data/private-capstones-source.json`.
   - Client imports `data/private-capstones.enc.js` containing AES-256-GCM ciphertext derived via PBKDF2-SHA-256 (600,000 iterations).
   - Plaintext credentials must NEVER be committed to Git.
6. **Academic Note Integrity**:
   - Exactly 25 MCQs per published lecture.
   - Explanations required for all 4 options per MCQ.
   - Explicit extraction of assignments, homework, labs, projects, references, and student Q&A with exact timecodes.

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
