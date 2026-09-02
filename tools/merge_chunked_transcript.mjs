#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const value = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : null;
};
const output = value("--output");
const partSpecs = args.flatMap((arg, index) => arg === "--part" ? [args[index + 1]] : []);

if (!output || !partSpecs.length) {
  console.error("Usage: node tools/merge_chunked_transcript.mjs --output FILE --part FILE:OFFSET_SECONDS [...]");
  process.exit(2);
}

const shiftTime = (value, offset) => typeof value === "number" ? value + offset : value;
const segments = [];
let language = "English";

for (const spec of partSpecs) {
  const separator = spec.lastIndexOf(":");
  if (separator < 1) throw new Error(`Invalid part specification: ${spec}`);
  const file = spec.slice(0, separator);
  const offset = Number(spec.slice(separator + 1));
  const transcript = JSON.parse(fs.readFileSync(file, "utf8"));
  language = transcript.language || language;
  for (const source of transcript.segments || []) {
    const segment = {
      ...source,
      id: segments.length,
      seek: shiftTime(source.seek, offset * 100),
      start: shiftTime(source.start, offset),
      end: shiftTime(source.end, offset),
    };
    if (Array.isArray(source.words)) {
      segment.words = source.words.map((word) => ({
        ...word,
        start: shiftTime(word.start, offset),
        end: shiftTime(word.end, offset),
      }));
    }
    segments.push(segment);
  }
}

segments.sort((a, b) => a.start - b.start || a.end - b.end);
const merged = {
  text: segments.map((segment) => segment.text).join("").trim(),
  segments,
  language,
  chunkedMerge: true,
};
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(merged, null, 2)}\n`);
console.log(JSON.stringify({ output, segments: segments.length, language }, null, 2));
