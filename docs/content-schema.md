# Public lecture-note content contract

Every `data/lectures/*.js` module exports one original, publication-ready bilingual lecture object shaped as `{ en: lecture, hi: lecture }`. The catalog links it only after the pair passes validation.

English and Hindi live in the same module and render together at one clean `#/lecture/<id>` URL. Source timecodes, formulas, URLs, section ordering, and MCQ answer indexes must match across the two columns. There are no language-specific public routes. A course's canonical route uses its descriptive `routeSlug`, for example `#/course/eai-6403-selective-topics-in-generative-ai`; its shorter `slug` remains an internal data key.

The renderer may collapse a compact bilingual label, chip, technical name, or metadata fragment to one clear version when the Hindi string is identical or adds only an isolated Hindi word/conjunction to otherwise English text. Substantive content remains bilingual. Source objects retain both aligned values even when the presentation intentionally avoids a low-value duplicate.

For navigation back to primary course material, each course catalog record requires its verified SharePoint `recordingUrl`. Every catalog lecture whose status is `published` also requires a stable, human-facing Microsoft Stream `recordingUrl`. Remove transient `referrer` and `referrerScenario` parameters; never store a hidden media manifest, signed CDN URL, cookie, token, DRM datum, or direct stream segment.

## Chronological identity and same-day lectures

Each catalog lecture requires `date`, `sourceRecordedAt` (an ISO timestamp in the source time zone), and `sourceFilename`. Course archives are always sorted by those fields, in that order. The fields are source-navigation metadata only; never add participant names or private transcript data.

Existing published ids may use the legacy `<course>-YYYY-MM-DD` shape. When more than one valid lecture from a course has the same date, each new id must be time-qualified and unique: `<course>-YYYY-MM-DD-HHmmss-<six-char-source-hash>`. The source hash is derived from the stable filename or source identity, never a signed URL, token, or media segment. The validator rejects a same-day archive that is not deterministically ordered or whose ids could collide.

Required sections:

1. `coverage` — high-level map of the lecture.
2. `slideTrail` — original-recording timecodes plus visible slide/topic references.
3. `summary` — complete chronological explanation with source references.
4. `courseSignals` — six transcript-derived arrays: `assignments`, `homework`, `labs`, `projects`, `references`, and `studentQuestions`.
5. `insights` — clearly added analysis, corrections, or connections.
6. `resources` — reliable further reading or viewing with HTTPS links.
7. `quiz` — exactly 25 four-option MCQs, a valid answer index, a correct-answer explanation, and a note for every option.

Public lecture objects must not contain a `project` property. One bilingual mini-capstone/startup idea per lecture is stored privately in `.course-data/private-capstones-source.json` with problem, learning value, MVP, stretch goals, and build plan. Only the generated authenticated ciphertext in `data/private-capstones.enc.js` is deployable.

## Academic-signal item shapes

For assignments, homework, labs, projects, and references:

```js
{ time: "00:42:10", title: "Short label", detail: "Faithful paraphrase of what was said." }
```

For student questions:

```js
{
  time: "01:19:10",
  question: "Faithful paraphrase of the student's question.",
  response: "Concise paraphrase of the instructor's answer."
}
```

Empty arrays are meaningful and render as “None mentioned in this lecture.” Never invent an item merely to fill a category.

## Bilingual parity

The validator rejects a missing side of the bilingual pair, changed MCQ answer indexes, different section counts, missing Hindi academic-signal categories, or capstone plaintext in the public note. Technical terms may remain in English when that is clearer than a forced translation. The paired content requires a human-readable cross-column sample check before publication. The private capstone payload must independently contain complete English and Hindi objects before encryption.

## Public course resources

Permitted PDF, PPT, and PPTX files go in `resources/eai-6401/`, `resources/eai-6402/`, or `resources/eai-6403/`. `tools/index_resources.mjs` generates `data/resources.js`. Optional `_index.json` metadata may provide English/Hindi titles and descriptions, language, and lecture date. A file in these folders is a public website asset.
