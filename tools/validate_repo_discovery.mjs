#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { catalog } from "../data/catalog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

const discoveryDocPath = resolve(rootDir, "docs/repo-discovery.md");
const appDataKnowledgeDir = resolve(
  process.env.HOME || process.env.USERPROFILE || "",
  ".gemini/antigravity/knowledge/repo-discovery"
);

const isUpdateMode = process.argv.includes("--update");

const errors = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

// 1. Verify required files exist
const requiredFiles = [
  "AGENTS.md",
  "README.md",
  "package.json",
  "index.html",
  "agents/recording-note-taker.md",
  "assets/app.js",
  "assets/styles.css",
  "data/catalog.js",
  "data/lecture-notes.js",
  "data/capstones.js",
  "data/schedule.js",
  "docs/agent-constitution.md",
  "docs/content-schema.md",
  "docs/recording-review-playbook.md",
  "docs/repo-discovery.md",
  "tools/validate_content.mjs",
  "tools/build_static_site.mjs"
];

for (const relPath of requiredFiles) {
  const fullPath = resolve(rootDir, relPath);
  assert(existsSync(fullPath), `Required repository file missing: ${relPath}`);
}

// 2. Validate discovery doc content
if (!existsSync(discoveryDocPath)) {
  errors.push("docs/repo-discovery.md does not exist. Run 'npm run update-discovery' to generate it.");
} else {
  const content = readFileSync(discoveryDocPath, "utf8");
  assert(content.includes("iitp-mtech-aidse-lecture-atlas"), "repo-discovery.md missing repository identifier.");
  assert(content.includes("EAI 6401") && content.includes("EAI 6402") && content.includes("EAI 6403"),
    "repo-discovery.md missing course code references.");
  assert(content.includes("validate_repo_discovery.mjs"), "repo-discovery.md missing discovery gate script reference.");
}

// 3. Update or Sync mode
if (isUpdateMode || errors.length === 0) {
  try {
    const pubLectures = catalog.courses.flatMap((c) => c.lectures).filter((l) => l.status === "published").length;

    // Read discovery doc content
    if (existsSync(discoveryDocPath)) {
      const docContent = readFileSync(discoveryDocPath, "utf8");

      // Sync to AppData knowledge item store if available
      if (existsSync(dirname(appDataKnowledgeDir))) {
        const kiArtifactDir = resolve(appDataKnowledgeDir, "artifacts");
        if (!existsSync(kiArtifactDir)) {
          mkdirSync(kiArtifactDir, { recursive: true });
        }

        const metadataPath = resolve(appDataKnowledgeDir, "metadata.json");
        const artifactPath = resolve(kiArtifactDir, "repo-discovery.md");

        const metadata = {
          title: "IIT Patna AI & DSE Lecture Atlas - Codebase Architecture & Discovery",
          summary: `Comprehensive codebase discovery detailing ${catalog.courses.length} active courses (${pubLectures} published lectures), SPA router, bilingual invariants, public capstones, validation suite, and discovery gate.`,
          updatedAt: new Date().toISOString(),
          references: [
            "agents/recording-note-taker.md",
            "docs/repo-discovery.md",
            "docs/agent-constitution.md",
            "docs/content-schema.md",
            "AGENTS.md",
            "package.json"
          ]
        };

        writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), "utf8");
        writeFileSync(artifactPath, docContent, "utf8");
      }
    }
  } catch (err) {
    if (isUpdateMode) {
      console.warn("Notice: Knowledge item store sync skipped:", err.message);
    }
  }
}

if (errors.length) {
  console.error("Repo Discovery Gate Failure:");
  console.error(errors.map((e) => `- ${e}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log("Repo discovery gate passed successfully.");
}
