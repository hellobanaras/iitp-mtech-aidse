#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { catalog } from "../data/catalog.js";
import { lectureNotes } from "../data/lecture-notes.js";
import { capstones } from "../data/capstones.js";
import { meetingsForCourse, semesterSchedule } from "../data/schedule.js";
import { courseResources } from "../data/resources.js";
import { programProfile } from "../data/program.js";

const errors = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

const isSubjectRecordingUrl = (value) => {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "cciitpatna-my.sharepoint.com") return false;
    return url.pathname.startsWith("/:f:/") ||
      (url.pathname === "/people" && url.searchParams.has("emailId"));
  } catch {
    return false;
  }
};

const lectures = catalog.courses.flatMap((course) =>
  course.lectures.map((lecture) => ({ ...lecture, course }))
);
const compareLectureChronology = (left, right) =>
  left.date.localeCompare(right.date)
  || String(left.sourceRecordedAt || "").localeCompare(String(right.sourceRecordedAt || ""))
  || String(left.sourceFilename || "").localeCompare(String(right.sourceFilename || ""))
  || left.id.localeCompare(right.id);
const indexHtml = readFileSync(new URL("../index.html", import.meta.url), "utf8");
assert(!/#\/(?:en|hi|bi)(?:\/|["'])/.test(indexHtml), "Public navigation must not expose language-prefixed routes.");
assert(!existsSync(new URL("../data/lecture-notes-hi.js", import.meta.url)), "Split Hindi note bundle must not exist in public data.");
assert(Number.isInteger(catalog.filesInventoried) && catalog.filesInventoried >= lectures.length,
  "Catalog filesInventoried must be an integer no smaller than the lecture count.");
const ids = lectures.map((lecture) => lecture.id);
assert(new Set(ids).size === ids.length, "Catalog lecture ids must be unique.");
const courseRouteSlugs = catalog.courses.map((course) => course.routeSlug);
assert(new Set(courseRouteSlugs).size === courseRouteSlugs.length, "Public course route slugs must be unique.");
for (const course of catalog.courses) {
  assert(isSubjectRecordingUrl(course.recordingUrl || ""),
    `${course.code}: subject recording-folder URL is missing or invalid.`);
  assert(new RegExp(`^${course.slug}-[a-z0-9]+(?:-[a-z0-9]+)*$`).test(course.routeSlug || ""),
    `${course.code}: public course route slug is missing or invalid.`);
  const chronological = [...course.lectures].sort(compareLectureChronology);
  assert(course.lectures.every((lecture, index) => lecture.id === chronological[index].id),
    `${course.code}: lectures must be ordered oldest first.`);
  assert(course.lectures.every((lecture, index) => lecture.number === index + 1),
    `${course.code}: lecture numbers must follow chronological order.`);
  const identities = course.lectures.map((lecture) => `${lecture.sourceRecordedAt}|${lecture.sourceFilename}`);
  assert(new Set(identities).size === identities.length,
    `${course.code}: lecture source identities must be unique.`);
  const sameDay = new Map();
  course.lectures.forEach((lecture) => {
    sameDay.set(lecture.date, [...(sameDay.get(lecture.date) || []), lecture]);
  });
  for (const [date, entries] of sameDay) {
    if (entries.length < 2) continue;
    entries.forEach((lecture) => {
      assert(new RegExp(`^${course.slug}-${date}-\\d{6}(?:-[a-z0-9]{6,})?$`).test(lecture.id),
        `${lecture.id}: same-day lectures require a time-qualified stable id.`);
    });
  }
}

for (const lecture of lectures) {
  assert(new RegExp(`^${lecture.course.slug}-\\d{4}-\\d{2}-\\d{2}(?:-\\d{6}(?:-[a-z0-9]{6,})?)?$`).test(lecture.id), `${lecture.id}: invalid id format.`);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(lecture.date), `${lecture.id}: invalid date.`);
  assert(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/.test(lecture.sourceRecordedAt || "")
    && !Number.isNaN(Date.parse(lecture.sourceRecordedAt)), `${lecture.id}: source recording timestamp is missing or invalid.`);
  assert(lecture.sourceRecordedAt?.slice(0, 10) === lecture.date,
    `${lecture.id}: source recording timestamp must match the lecture date.`);
  assert(typeof lecture.sourceFilename === "string" && lecture.sourceFilename.length > 0,
    `${lecture.id}: source filename is missing.`);
  if (lecture.status !== "published") continue;

  assert(/^https:\/\/cciitpatna-my\.sharepoint\.com\/personal\/.*\/stream\.aspx\?id=/.test(lecture.recordingUrl || ""),
    `${lecture.id}: canonical lecture recording URL is missing or invalid.`);
  assert(!/[?&](?:referrer|referrerScenario)=/.test(lecture.recordingUrl || ""),
    `${lecture.id}: recording URL contains transient referrer parameters.`);

  const publication = lectureNotes[lecture.id];
  assert(Boolean(publication?.en), `${lecture.id}: published lecture has no English note.`);
  if (!publication?.en) continue;
  assert(Object.keys(publication).length === 1, `${lecture.id}: published lecture notes must contain only the English edition.`);
  const notes = publication.en;

  assert(notes.title?.length > 0, `${lecture.id}: title is missing.`);
  assert(notes.lede?.length > 0, `${lecture.id}: lede is missing.`);
  assert(notes.instructionalInterval?.length > 0, `${lecture.id}: instructional interval is missing.`);
  assert(notes.reviewLevel?.length > 0, `${lecture.id}: review level is missing.`);
  assert(notes.coverage?.length >= 3, `${lecture.id}: expected at least 3 high-level coverage items.`);
  assert(notes.slideTrail?.length >= 3, `${lecture.id}: expected at least 3 slide references.`);
  notes.slideTrail?.forEach((slide, index) => {
    assert(slide.time && slide.title && slide.note, `${lecture.id}: slide ${index + 1} is incomplete.`);
  });
  assert(notes.summary?.length >= 3, `${lecture.id}: expected at least 3 summary sections.`);
  const signalKeys = ["assignments", "homework", "labs", "projects", "references", "studentQuestions"];
  assert(notes.courseSignals && typeof notes.courseSignals === "object", `${lecture.id}: courseSignals is missing.`);
  signalKeys.forEach((key) => {
    const items = notes.courseSignals?.[key];
    assert(Array.isArray(items), `${lecture.id}: courseSignals.${key} must be an array.`);
    items?.forEach((item, index) => {
      const label = `${lecture.id}: courseSignals.${key}[${index}]`;
      assert(item.time?.length > 0, `${label} needs a source timecode.`);
      if (key === "studentQuestions") {
        assert(item.question?.length > 0 && item.response?.length > 0, `${label} needs a question and response.`);
      } else {
        assert(item.title?.length > 0 && item.detail?.length > 0, `${label} needs a title and detail.`);
      }
    });
  });
  assert(notes.insights?.length >= 3, `${lecture.id}: expected at least 3 added insights.`);
  assert(notes.resources?.length >= 3, `${lecture.id}: expected at least 3 further-study resources.`);
  notes.resources?.forEach((resource, index) => {
    assert(/^https:\/\//.test(resource.url || ""), `${lecture.id}: resource ${index + 1} needs an HTTPS URL.`);
  });
  assert(notes.quiz?.length === 25, `${lecture.id}: expected exactly 25 MCQs.`);
  notes.quiz?.forEach((question, index) => {
    const label = `${lecture.id}: MCQ ${index + 1}`;
    assert(question.question?.length > 0, `${label} has no question.`);
    assert(question.options?.length === 4, `${label} must have 4 options.`);
    assert(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4, `${label} has an invalid answer index.`);
    assert(question.explanation?.length > 0, `${label} has no correct-answer explanation.`);
    assert(question.optionNotes?.length === 4, `${label} must explain all 4 options.`);
  });
  const capstone = capstones[lecture.id];
  assert(Boolean(capstone?.en), `${lecture.id}: public English capstone is missing.`);
  if (capstone?.en) {
    assert(Object.keys(capstone).length === 1, `${lecture.id}: capstone must contain only the English edition.`);
    const project = capstone.en;
    for (const forbiddenField of ["username", "accessCode", "password", "credentialHash", "verifier", "ciphertext"]) {
      assert(!Object.hasOwn(project, forbiddenField), `${lecture.id}: capstone contains a forbidden access field (${forbiddenField}).`);
    }
    assert(project.title?.length > 0 && project.pitch?.length > 0 && project.problem?.length > 0 && project.learning?.length > 0,
      `${lecture.id}: English capstone narrative is incomplete.`);
    assert(project.mvp?.length >= 3, `${lecture.id}: English capstone needs at least 3 MVP items.`);
    if (project.stretch) assert(project.stretch.length >= 2, `${lecture.id}: English capstone stretch list is incomplete.`);
    if (project.plan) assert(project.plan.length >= 3, `${lecture.id}: English capstone build plan is incomplete.`);
  }
}

for (const id of Object.keys(lectureNotes)) {
  assert(ids.includes(id), `${id}: notes object is not represented in the catalog.`);
}

const publishedIds = lectures.filter((lecture) => lecture.status === "published").map((lecture) => lecture.id);
assert(Object.keys(capstones).length === publishedIds.length, "Every published lecture must have exactly one capstone.");
for (const id of publishedIds) assert(Object.hasOwn(capstones, id), `${id}: capstone is missing.`);
for (const id of Object.keys(capstones)) assert(publishedIds.includes(id), `${id}: capstone has no published lecture.`);

assert(semesterSchedule.endsOn === "2026-11-30", "Schedule must run through 30 November 2026.");
assert(semesterSchedule.displayTimeZone === "America/Chicago", "Schedule display timezone must be America/Chicago.");
const scheduledSlugs = semesterSchedule.courses.map((course) => course.slug);
assert(new Set(scheduledSlugs).size === catalog.courses.length, "Each course needs exactly one schedule entry.");
for (const course of catalog.courses) {
  const schedule = semesterSchedule.courses.find((item) => item.slug === course.slug);
  assert(Boolean(schedule), `${course.code}: schedule is missing.`);
  if (!schedule) continue;
  const meetings = meetingsForCourse(schedule);
  assert(meetings.length > 0, `${course.code}: schedule meetings are missing.`);
  meetings.forEach((meeting) => {
    assert(/^https:\/\/teams\.microsoft\.com\/meet\//.test(meeting.joinUrl), `${course.code}/${meeting.id}: Teams join URL is invalid.`);
    assert(meeting.weekdays?.length > 0, `${course.code}/${meeting.id}: schedule weekdays are missing.`);
    assert(/^\d{2}:\d{2}$/.test(meeting.start) && /^\d{2}:\d{2}$/.test(meeting.end), `${course.code}/${meeting.id}: schedule times are invalid.`);
    assert(meeting.weekdayLabels?.en?.length === meeting.weekdays.length && meeting.weekdayLabels?.hi?.length === meeting.weekdays.length,
      `${course.code}/${meeting.id}: weekday labels must align with weekdays.`);
  });
  assert(!("indiaSummary" in schedule) && !("chicagoSummary" in schedule), `${course.code}: store source start/end only; timezone summaries are calculated centrally.`);
  const calendarText = readFileSync(new URL(`../calendar/${course.slug}.ics`, import.meta.url), "utf8");
  assert(calendarText.includes("BEGIN:VCALENDAR") && calendarText.includes("RRULE:FREQ=WEEKLY"), `${course.code}: recurring calendar file is invalid.`);
  meetings.forEach((meeting) => assert(calendarText.includes(meeting.joinUrl), `${course.code}/${meeting.id}: calendar file does not include the Teams URL.`));
  assert(calendarText.includes("UNTIL=20261130"), `${course.code}: calendar file does not run through 30 November 2026.`);
}

const resourceIds = courseResources.map((resource) => resource.id);
assert(new Set(resourceIds).size === resourceIds.length, "Resource ids must be unique.");
assert(programProfile.currentSemester === 4, "Program profile must identify the current cohort as Semester 4.");
assert(programProfile.totalCredits === 84, "Program profile total credits must match the official syllabus.");
const permittedResourceGroups = new Set([...scheduledSlugs, programProfile.resourceGroup.slug]);
for (const resource of courseResources) {
  assert(permittedResourceGroups.has(resource.course), `${resource.id}: resource has an unknown group.`);
  assert(["pdf", "presentation"].includes(resource.kind), `${resource.id}: unsupported resource kind.`);
  assert(/^resources\//.test(decodeURIComponent(resource.path)), `${resource.id}: resource path must stay under resources/.`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  const published = lectures.filter((lecture) => lecture.status === "published").length;
  console.log(`Validated ${catalog.courses.length} courses and ${published} published lecture notes.`);
}
