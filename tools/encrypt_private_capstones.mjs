#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { randomBytes, webcrypto } from "node:crypto";

const sourcePath = new URL("../.course-data/private-capstones-source.json", import.meta.url);
const outputPath = new URL("../data/private-capstones.enc.js", import.meta.url);
const username = process.env.LECTURE_ATLAS_PRIVATE_USER?.trim().toLowerCase();
const code = process.env.LECTURE_ATLAS_PRIVATE_CODE?.trim();
const iterations = 750_000;

function validateProject(project, label) {
  if (!project?.title || !project?.pitch || !project?.problem || !project?.learning) {
    throw new Error(`${label}: capstone narrative is incomplete.`);
  }
  if (project.mvp?.length < 3 || project.stretch?.length < 2 || project.plan?.length < 3) {
    throw new Error(`${label}: capstone lists are incomplete.`);
  }
}

if (!username || !code) {
  throw new Error("Set LECTURE_ATLAS_PRIVATE_USER and LECTURE_ATLAS_PRIVATE_CODE locally before encrypting.");
}

const payload = JSON.parse(await readFile(sourcePath, "utf8"));
const entries = Object.entries(payload);
if (!entries.length) throw new Error("No private capstones were found.");
for (const [id, languages] of entries) {
  validateProject(languages.en, `${id}/en`);
  validateProject(languages.hi, `${id}/hi`);
}

const salt = randomBytes(16);
const iv = randomBytes(12);
const material = await webcrypto.subtle.importKey(
  "raw",
  new TextEncoder().encode(`${username}\0${code}`),
  "PBKDF2",
  false,
  ["deriveKey"]
);
const key = await webcrypto.subtle.deriveKey(
  { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
  material,
  { name: "AES-GCM", length: 256 },
  false,
  ["encrypt"]
);
const ciphertext = new Uint8Array(
  await webcrypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    new TextEncoder().encode(JSON.stringify(payload))
  )
);
const toBase64 = (bytes) => Buffer.from(bytes).toString("base64");
const moduleSource = `// Generated encrypted payload. Do not edit by hand.\nexport const privateCapstoneVault = Object.freeze(${JSON.stringify({
  version: 1,
  kdf: "PBKDF2-SHA-256",
  cipher: "AES-256-GCM",
  iterations,
  salt: toBase64(salt),
  iv: toBase64(iv),
  ciphertext: toBase64(ciphertext)
}, null, 2)});\n`;

await writeFile(outputPath, moduleSource);
console.log(`Encrypted ${entries.length} bilingual capstones into the public vault.`);
