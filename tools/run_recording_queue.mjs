#!/usr/bin/env node

/**
 * Durable, restart-safe controller for the recording-note workflow.
 *
 * Browser capture remains an explicit user-gesture boundary. The runner owns
 * deterministic queueing, local processing, checkpoints, validation, and (when
 * requested) the two-remote GitHub deployment. It never discovers manifests,
 * signed URLs, cookies, DRM data, or hidden media streams.
 *
 * Source inventory format (kept under ignored .course-data/):
 * {
 *   "sources": [{
 *     "course": "eai-6403", "courseCode": "EAI 6403",
 *     "nominalDate": "2026-08-29", "sourceRecordedAt": "2026-08-29T15:36:43+05:30",
 *     "filename": "...mp4", "sourceUrl": "https://...stream.aspx?...",
 *     "input": "/Users/.../capture.webm", "sidecar": "/Users/.../capture.json",
 *     "classification": "canonical", "publicationId": "eai-6403-2026-08-29"
 *   }]
 * }
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, renameSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PRIVATE = resolve(ROOT, ".course-data");
const DEFAULT_SOURCES = resolve(PRIVATE, "recording-sources.json");
const DEFAULT_STATE = resolve(PRIVATE, "recording-queue-state.json");
const LOCK_PATH = resolve(PRIVATE, "recording-queue.lock");

const args = process.argv.slice(2);
const value = (name, fallback = undefined) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const has = (name) => args.includes(name);
const mode = has("--status") ? "status" : has("--next") ? "next" : has("--process") ? "process" : has("--publish") ? "publish" : "run";
const sourcesPath = resolve(value("--sources", DEFAULT_SOURCES));
const statePath = resolve(value("--state", DEFAULT_STATE));
const requestedId = value(mode === "process" ? "--process" : mode === "publish" ? "--publish" : "--id");

const die = (message) => {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
};

const now = () => new Date().toISOString();
const readJson = (path, fallback) => {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
};

const writeJsonAtomic = (path, data) => {
  mkdirSync(dirname(path), { recursive: true });
  const tmp = `${path}.tmp-${process.pid}`;
  writeFileSync(tmp, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  renameSync(tmp, path);
};

const cleanSourceUrl = (raw) => {
  if (!raw) return null;
  try {
    const url = new URL(raw);
    url.searchParams.delete("referrer");
    url.searchParams.delete("referrerScenario");
    return url.toString();
  } catch {
    return raw;
  }
};

const sourceKey = (source) => [source.courseCode || source.course, source.nominalDate, source.filename || cleanSourceUrl(source.sourceUrl)].join("|");
const sourceTime = (source) => source.sourceRecordedAt || `${source.nominalDate}T00:00:00Z`;
const sortSources = (left, right) =>
  sourceTime(left).localeCompare(sourceTime(right)) ||
  (left.courseCode || left.course).localeCompare(right.courseCode || right.course) ||
  (left.filename || "").localeCompare(right.filename || "");

const load = () => {
  const inventory = readJson(sourcesPath, { sources: [] });
  if (!Array.isArray(inventory.sources)) throw new Error(`Expected { sources: [] } in ${sourcesPath}`);
  const previous = readJson(statePath, { schemaVersion: 1, updatedAt: now(), items: {} });
  const items = { ...(previous.items || {}) };
  for (const raw of inventory.sources) {
    if (!raw.course || !raw.nominalDate || (!raw.filename && !raw.sourceUrl)) {
      throw new Error("Each source needs course, nominalDate, and filename or sourceUrl");
    }
    const key = sourceKey(raw);
    const existing = items[key] || {};
    items[key] = {
      ...raw,
      sourceUrl: cleanSourceUrl(raw.sourceUrl),
      stableIdentity: key,
      status: existing.status || "pending",
      stage: existing.stage || "awaiting-browser",
      attempts: existing.attempts || 0,
      evidence: existing.evidence || [],
      ...existing,
      updatedAt: existing.updatedAt || now(),
    };
  }
  return {
    schemaVersion: 1,
    updatedAt: previous.updatedAt || now(),
    coursePriority: inventory.coursePriority || previous.coursePriority || [],
    items,
  };
};

const save = (state) => {
  state.updatedAt = now();
  writeJsonAtomic(statePath, state);
};

// Round-robin ordering: one oldest eligible item per course in each round.
const orderedPending = (state) => {
  const pending = Object.values(state.items).filter((item) => !["complete", "rejected", "blocked"].includes(item.status));
  const grouped = new Map();
  for (const item of pending) {
    const code = item.courseCode || item.course;
    if (!grouped.has(code)) grouped.set(code, []);
    grouped.get(code).push(item);
  }
  for (const group of grouped.values()) group.sort(sortSources);
  const priority = Array.isArray(state.coursePriority) ? state.coursePriority : [];
  const rank = (course) => {
    const normalized = course.toLowerCase().replace(/[\s-]+/g, "");
    const index = priority.findIndex((entry) => String(entry).toLowerCase().replace(/[\s-]+/g, "") === normalized);
    return index < 0 ? Number.MAX_SAFE_INTEGER : index;
  };
  const courses = [...grouped.keys()].sort((left, right) =>
    rank(left.toLowerCase()) - rank(right.toLowerCase()) || left.localeCompare(right));
  const result = [];
  let remaining = true;
  while (remaining) {
    remaining = false;
    for (const course of courses) {
      const item = grouped.get(course)?.shift();
      if (item) {
        result.push(item);
        remaining = true;
      }
    }
  }
  return result;
};

const acquireLock = () => {
  mkdirSync(PRIVATE, { recursive: true });
  if (existsSync(LOCK_PATH)) {
    const lock = readJson(LOCK_PATH, {});
    let alive = false;
    if (lock.pid) {
      try { process.kill(lock.pid, 0); alive = true; } catch { /* stale lock */ }
    }
    if (alive) throw new Error(`Queue is already running (pid ${lock.pid}, started ${lock.startedAt}).`);
    unlinkSync(LOCK_PATH);
  }
  writeJsonAtomic(LOCK_PATH, { pid: process.pid, startedAt: now(), host: process.env.HOSTNAME || "local" });
  return () => { if (existsSync(LOCK_PATH)) unlinkSync(LOCK_PATH); };
};

const run = (command, commandArgs, options = {}) => {
  console.log(`$ ${command} ${commandArgs.join(" ")}`);
  return execFileSync(command, commandArgs, { cwd: ROOT, stdio: "inherit", ...options });
};

const itemById = (state, id) => {
  const item = Object.values(state.items).find((candidate) => candidate.publicationId === id || candidate.stableIdentity === id);
  if (!item) throw new Error(`No queue item matches ${id}`);
  return item;
};

const printItem = (item, index = undefined) => {
  const prefix = index === undefined ? "" : `${index + 1}. `;
  console.log(`${prefix}${item.courseCode || item.course} · ${item.nominalDate} · ${item.filename || item.sourceUrl}`);
  console.log(`   status=${item.status} stage=${item.stage} publication=${item.publicationId || "not assigned"}`);
  if (item.input) console.log(`   input=${item.input}`);
};

const status = (state) => {
  const counts = {};
  for (const item of Object.values(state.items)) counts[item.status] = (counts[item.status] || 0) + 1;
  console.log(JSON.stringify({ updatedAt: state.updatedAt, counts, next: orderedPending(state).slice(0, 8).map((item) => ({ id: item.publicationId, course: item.courseCode || item.course, date: item.nominalDate, stage: item.stage })) }, null, 2));
};

const processOne = (state, item) => {
  if (["complete", "rejected", "blocked"].includes(item.status)) throw new Error(`Item is already ${item.status}; re-review requires an explicit inventory change.`);
  if (!item.input || !existsSync(resolve(item.input))) {
    item.status = "awaiting-capture";
    item.stage = "awaiting-browser";
    item.updatedAt = now();
    save(state);
    throw new Error(`Capture artifact is missing. Open only this source in Chrome, triage it, capture/download the verified interval, then set input in the inventory: ${item.stableIdentity}`);
  }
  item.status = "in-progress";
  item.stage = "local-processing";
  item.attempts += 1;
  item.updatedAt = now();
  save(state);
  const date = item.nominalDate;
  const segment = String(item.segment || item.round || "01").padStart(2, "0");
  const processArgs = ["tools/process_lecture.py", resolve(item.input), "--course", item.course, "--date", date, "--segment", segment, "--classification", item.classification || "canonical", "--transcribe"];
  // Permit a locally configured Whisper model so long recordings can be
  // processed with the fastest installed model without changing public data.
  if (process.env.LECTURE_WHISPER_MODEL) processArgs.push("--model", process.env.LECTURE_WHISPER_MODEL);
  if (item.sidecar) processArgs.push("--sidecar", resolve(item.sidecar));
  try {
    run("python3", processArgs);
    item.stage = "awaiting-note";
    item.status = "note-ready";
    item.updatedAt = now();
    save(state);
    console.log("✅ Media processing complete. Author/verify the English note, then rerun with --publish <publicationId>.");
  } catch (error) {
    item.status = "blocked";
    item.stage = "local-processing-failed";
    item.error = error.message;
    item.updatedAt = now();
    save(state);
    throw error;
  }
};

const publishOne = (state, item) => {
  if (!item.publicationId) throw new Error("Queue item needs publicationId before publishing.");
  const note = resolve(ROOT, "data", "lectures", `${item.publicationId}.js`);
  if (!existsSync(note)) throw new Error(`English note is not present: ${note}`);
  item.stage = "validation";
  item.status = "publishing";
  item.updatedAt = now();
  save(state);
  run("npm", ["run", "check"]);
  run("npm", ["run", "build"]);
  // Commit only explicit publication surfaces. Raw media and queue state stay
  // ignored, while route-aware SEO and shared UI changes must travel with a
  // lecture publication so production cannot lag the local shell.
  run("git", ["add", "assets", "data", "docs", "index.html"]);
  const diff = execFileSync("git", ["diff", "--cached", "--name-only"], { cwd: ROOT, encoding: "utf8" }).trim();
  if (!diff) throw new Error("No staged publication changes found; refusing to create an empty deployment commit.");
  run("git", ["commit", "-m", `Publish lecture ${item.publicationId}`]);
  run("git", ["pull", "--rebase", "origin", "main"]);
  run("npm", ["run", "deploy:source"]);
  run("npm", ["run", "deploy:github"]);
  item.status = item.classification === "idle/error" ? "rejected" : "complete";
  item.stage = "published";
  item.publishedAt = now();
  item.updatedAt = now();
  save(state);
  console.log(`✅ Published and deployed ${item.publicationId} to GitHub Pages.`);
};

const main = () => {
  const state = load();
  save(state);
  if (mode === "status") return status(state);
  if (mode === "next") {
    const next = orderedPending(state)[0];
    if (next) printItem(next); else console.log("✅ Queue is empty.");
    return;
  }
  const release = acquireLock();
  try {
    if (mode === "process") {
      const item = itemById(state, requestedId);
      processOne(state, item);
      return;
    }
    if (mode === "publish") {
      const item = itemById(state, requestedId);
      publishOne(state, item);
      return;
    }
    const loop = has("--loop");
    let processed = 0;
    while (true) {
      const next = orderedPending(state)[0];
      if (!next) { console.log("✅ Queue is empty."); break; }
      printItem(next, processed);
      if (next.stage === "awaiting-note" || next.status === "note-ready") {
        console.log("⏸️ Note-authoring checkpoint. Create and validate the sole English note, then run npm run queue:publish -- <publicationId>.");
        break;
      }
      if (!next.input || !existsSync(resolve(next.input))) {
        next.status = "awaiting-capture";
        next.stage = "awaiting-browser";
        next.updatedAt = now();
        save(state);
        console.log("⏸️ Browser gesture required. Capture/download this one source, close its tab, add the artifact path to the inventory, then resume.");
        break;
      }
      processOne(state, next);
      // Publishing is intentionally a separate checkpoint because note synthesis
      // is human/agent-authored and cannot be fabricated by a shell runner.
      break;
    }
    if (loop) status(state);
  } finally {
    release();
  }
};

try { main(); } catch (error) { die(error.message); }
