# Public course-resource drop folders

Place only material that you have permission to republish in the matching course folder:

- `eai-6401/` — Reinforcement Learning
- `eai-6402/` — Meta Learning
- `eai-6403/` — Selective Topics in Generative AI

Supported files are PDF, PPT, and PPTX. Run `node tools/index_resources.mjs` after adding files; the GitHub Pages workflow also runs it automatically during deployment. PDFs open in the site's native inline viewer. Public PPT/PPTX files use Microsoft Office's web viewer after deployment and retain an open/download fallback.

Optionally add `_index.json` inside a course folder to provide better metadata. Keys may be filenames or relative paths:

```json
{
  "lecture-01.pdf": {
    "title": "Lecture 1 — Introduction",
    "titleHi": "व्याख्यान 1 — परिचय",
    "description": "Instructor slide deck",
    "descriptionHi": "शिक्षक का स्लाइड डेक",
    "language": "en",
    "date": "2026-08-17"
  }
}
```

Books, instructor slides, and institute documents may be copyrighted. A file placed here is published with the website, so do not add private, licensed, or redistribution-restricted material without permission.
