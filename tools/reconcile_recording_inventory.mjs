#!/usr/bin/env node

/**
 * Reconcile the public lecture catalog with the ignored recording ledgers.
 *
 * The catalog proves publication, while the private source/queue/ledger files
 * preserve stable recording identities and review state. This command never
 * infers a new lecture from a local filename: capture sidecars are matched by
 * their human-facing Stream source URL.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { catalog } from "../data/catalog.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PRIVATE = resolve(ROOT, ".course-data");
const SOURCES_PATH = resolve(PRIVATE, "recording-sources.json");
const STATE_PATH = resolve(PRIVATE, "recording-queue-state.json");
const LEDGER_PATH = resolve(PRIVATE, "inventory/ledger.json");
const DOWNLOADS_PATH = process.env.LECTURE_ATLAS_DOWNLOADS || resolve(homedir(), "Downloads/lecture-atlas");
const REPORT_PATH = resolve(PRIVATE, "inventory/reconciliation-latest.json");

const now = () => new Date().toISOString();
const readJson = (path, fallback) => existsSync(path)
  ? JSON.parse(readFileSync(path, "utf8"))
  : fallback;
const writeJsonAtomic = (path, value) => {
  mkdirSync(dirname(path), { recursive: true });
  const temporary = `${path}.tmp-${process.pid}`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  renameSync(temporary, path);
};
const cleanSourceUrl = (raw) => {
  if (!raw) return undefined;
  try {
    const url = new URL(raw);
    url.searchParams.delete("referrer");
    url.searchParams.delete("referrerScenario");
    return url.toString();
  } catch {
    return raw;
  }
};
const identity = (courseCode, date, filename) => `${courseCode}|${date}|${filename}`;
const sourceFilenameFromUrl = (raw) => {
  if (!raw) return null;
  try {
    const url = new URL(raw);
    const itemPath = url.searchParams.get("id");
    return itemPath ? decodeURIComponent(itemPath).split("/").pop() : null;
  } catch {
    return null;
  }
};

const sourcesDocument = readJson(SOURCES_PATH, { schemaVersion: 1, sources: [] });
const state = readJson(STATE_PATH, { schemaVersion: 1, items: {} });
const ledger = readJson(LEDGER_PATH, { schemaVersion: 1, sources: [] });

const courseBySlug = new Map(catalog.courses.map((course) => [course.slug, course]));
const courseByCode = new Map();
for (const course of catalog.courses) {
  for (const code of course.code.split("/").map((part) => part.trim())) courseByCode.set(code, course);
}
const resolveCourse = (code) => courseByCode.get(code) ||
  String(code || "").split("/").map((part) => part.trim()).map((part) => courseByCode.get(part)).find(Boolean);
const publicationByFilename = new Map();
const publicationById = new Map();
for (const course of catalog.courses) {
  const courseCode = course.code.split("/")[0].trim();
  for (const lecture of course.lectures || []) {
    const record = { course, courseCode, lecture };
    publicationByFilename.set(lecture.sourceFilename, record);
    publicationById.set(lecture.id, record);
  }
}

const ledgerByIdentity = new Map();
for (const entry of ledger.sources || []) {
  const course = resolveCourse(entry.course);
  const courseCode = course?.code.split("/")[0].trim() || entry.course;
  ledgerByIdentity.set(identity(courseCode, entry.nominalDate, entry.filename), entry);
}

const mergedSources = new Map();
const mergeSource = (candidate) => {
  const published = publicationByFilename.get(candidate.filename);
  const course = published?.course || courseBySlug.get(candidate.course) || resolveCourse(candidate.courseCode);
  const courseCode = published?.courseCode || course?.code.split("/")[0].trim() || candidate.courseCode;
  // Do not let a later catalog/ledger candidate with an omitted field erase
  // evidence already present in the source inventory. In particular, ledger
  // rows commonly have no sourceRecordedAt/publicationId/input/sidecar.
  const normalized = Object.fromEntries(Object.entries({
    ...candidate,
    course: course?.slug || candidate.course,
    courseCode,
  }).filter(([, value]) => value !== undefined));
  const key = identity(normalized.courseCode, normalized.nominalDate, normalized.filename);
  const previous = mergedSources.get(key) || {};
  mergedSources.set(key, {
    ...previous,
    ...normalized,
    sourceUrl: cleanSourceUrl(normalized.sourceUrl || previous.sourceUrl),
    classification: normalized.classification || previous.classification ||
      (normalized.publicationId ? "canonical" : undefined),
  });
};

for (const source of sourcesDocument.sources || []) mergeSource(source);

for (const entry of ledger.sources || []) {
  const published = publicationByFilename.get(entry.filename);
  const course = published?.course || resolveCourse(entry.course);
  const courseCode = published?.courseCode || course?.code.split("/")[0].trim() || entry.course;
  mergeSource({
    course: course?.slug || String(courseCode).toLowerCase().replace(/\s+/g, "-"),
    courseCode,
    nominalDate: entry.nominalDate,
    sourceRecordedAt: published?.lecture.sourceRecordedAt,
    filename: entry.filename,
    sourceUrl: entry.sourceUrl || published?.lecture.recordingUrl,
    classification: entry.disposition,
    publicationId: entry.publication || published?.lecture.id,
  });
}

for (const { course, courseCode, lecture } of publicationById.values()) {
  mergeSource({
    course: course.slug,
    courseCode,
    nominalDate: lecture.date,
    sourceRecordedAt: lecture.sourceRecordedAt,
    filename: lecture.sourceFilename,
    sourceUrl: lecture.recordingUrl,
    publicationId: lecture.id,
  });
}

const sidecarMatches = [];
const unmatchedSidecars = [];
if (existsSync(DOWNLOADS_PATH)) {
  for (const filename of readdirSync(DOWNLOADS_PATH).filter((name) => name.endsWith(".capture.json"))) {
    const path = resolve(DOWNLOADS_PATH, filename);
    const sidecar = readJson(path, {});
    const sourceFilename = sourceFilenameFromUrl(sidecar.sourceUrl);
    const cleanSidecarUrl = cleanSourceUrl(sidecar.sourceUrl);
    const source = [...mergedSources.values()].find((item) =>
      item.filename === sourceFilename || cleanSourceUrl(item.sourceUrl) === cleanSidecarUrl);
    if (source) {
      sidecarMatches.push({
        sidecar: path,
        stableIdentity: identity(source.courseCode, source.nominalDate, source.filename),
        sourceFilename,
        capturedAt: sidecar.capturedAt,
      });
    } else {
      unmatchedSidecars.push({ sidecar: path, sourceFilename, capturedAt: sidecar.capturedAt });
    }
  }
}

const sourceList = [...mergedSources.values()].sort((left, right) =>
  (left.sourceRecordedAt || `${left.nominalDate}T00:00:00Z`).localeCompare(right.sourceRecordedAt || `${right.nominalDate}T00:00:00Z`) ||
  left.courseCode.localeCompare(right.courseCode) ||
  left.filename.localeCompare(right.filename));

const previousItems = Object.values(state.items || {});
const items = {};
for (const source of sourceList) {
  const key = identity(source.courseCode, source.nominalDate, source.filename);
  const previous = state.items?.[key] || previousItems.find((item) =>
    item.course === source.course && item.nominalDate === source.nominalDate && item.filename === source.filename) || {};
  const ledgerEntry = ledgerByIdentity.get(key);
  const published = source.publicationId && publicationById.has(source.publicationId);
  const rejected = ["idle/error", "duplicate"].includes(source.classification || ledgerEntry?.disposition);
  items[key] = {
    ...previous,
    ...source,
    stableIdentity: key,
    status: published ? "complete" : rejected ? "rejected" : previous.status || "pending",
    stage: published ? "published" : rejected ? "triage-complete" : previous.stage || "awaiting-browser",
    attempts: previous.attempts || 0,
    evidence: previous.evidence || [],
    updatedAt: previous.updatedAt || now(),
    ...(published && !previous.publishedAt ? { publishedAt: now() } : {}),
  };
}

const ledgerEntries = new Map();
for (const entry of ledger.sources || []) {
  const published = publicationByFilename.get(entry.filename);
  const courseCode = published?.courseCode || resolveCourse(entry.course)?.code.split("/")[0].trim() || entry.course;
  const key = identity(courseCode, entry.nominalDate, entry.filename);
  ledgerEntries.set(key, { ...(ledgerEntries.get(key) || {}), ...entry, course: courseCode });
}
for (const item of Object.values(items)) {
  const key = identity(item.courseCode, item.nominalDate, item.filename);
  const previous = ledgerEntries.get(key) || {};
  const resolved = item.status === "complete" || item.status === "rejected";
  ledgerEntries.set(key, {
    ...previous,
    course: item.courseCode,
    nominalDate: item.nominalDate,
    filename: item.filename,
    state: resolved ? "processed" : previous.state || item.status || "pending",
    ...(item.classification ? { disposition: item.classification } : {}),
    ...(item.publicationId ? { publication: item.publicationId } : {}),
    ...(item.sourceUrl ? { sourceUrl: cleanSourceUrl(item.sourceUrl) } : {}),
  });
}

const ledgerSources = [...ledgerEntries.values()].sort((left, right) =>
  left.nominalDate.localeCompare(right.nominalDate) || left.course.localeCompare(right.course) || left.filename.localeCompare(right.filename));
const publishedIds = new Set(publicationById.keys());
const statePublicationIds = new Set(Object.values(items).map((item) => item.publicationId).filter(Boolean));
const missingFromQueue = [...publishedIds].filter((id) => !statePublicationIds.has(id));
const orphanQueuePublications = [...statePublicationIds].filter((id) => !publishedIds.has(id));
const pending = Object.values(items).filter((item) => !["complete", "rejected", "blocked"].includes(item.status));

sourcesDocument.sources = sourceList;
state.items = items;
state.updatedAt = now();
ledger.sources = ledgerSources;
ledger.lastInventory = now();

const report = {
  reconciledAt: now(),
  publishedLectureCount: publishedIds.size,
  sourceIdentityCount: sourceList.length,
  queueCounts: {
    complete: Object.values(items).filter((item) => item.status === "complete").length,
    rejected: Object.values(items).filter((item) => item.status === "rejected").length,
    blocked: Object.values(items).filter((item) => item.status === "blocked").length,
    pending: pending.length,
  },
  missingPublishedLecturesFromQueue: missingFromQueue,
  queuePublicationsMissingFromCatalog: orphanQueuePublications,
  pending: pending.map((item) => ({
    stableIdentity: item.stableIdentity,
    stage: item.stage,
    nextAction: item.stage === "awaiting-browser"
      ? "Resume agent-managed capture for this source at the visible-tab checkpoint, attach artifact+sidecar, then continue."
      : "Resume the recorded queue stage.",
  })),
  captureSidecars: {
    matched: sidecarMatches.length,
    unmatched: unmatchedSidecars,
    note: "The date in a local capture filename may be the capture date. Stable identity comes from the Stream source URL stored in its sidecar.",
  },
};

writeJsonAtomic(SOURCES_PATH, sourcesDocument);
writeJsonAtomic(STATE_PATH, state);
writeJsonAtomic(LEDGER_PATH, ledger);
writeJsonAtomic(REPORT_PATH, report);

console.log(JSON.stringify(report, null, 2));
