#!/usr/bin/env node

import { cpSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const toolDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = dirname(toolDirectory);
const outputDirectory = join(projectDirectory, "dist");
const publicEntries = [
  ".nojekyll",
  "index.html",
  "assets",
  "calendar",
  "courses",
  "course",
  "data",
  "lecture",
  "resource",
  "resources",
  "schedule"
];

rmSync(outputDirectory, { recursive: true, force: true });
mkdirSync(outputDirectory, { recursive: true });

for (const entry of publicEntries) {
  cpSync(join(projectDirectory, entry), join(outputDirectory, entry), { recursive: true });
}

console.log(`Built ${publicEntries.length} public site entries in dist/.`);
