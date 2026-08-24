#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { catalog } from "../data/catalog.js";
import { lectureNotes } from "../data/lecture-notes.js";
import { privateCapstoneVault } from "../data/private-capstones.enc.js";
import { semesterSchedule } from "../data/schedule.js";
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
const indexHtml = readFileSync(new URL("../index.html", import.meta.url), "utf8");
assert(!/#\/(?:en|hi|bi)(?:\/|["'])/.test(indexHtml), "Public navigation must not expose language-prefixed routes.");
assert(!existsSync(new URL("../data/lecture-notes-hi.js", import.meta.url)), "Split Hindi note bundle must not exist in public data.");
assert(Number.isInteger(catalog.filesInventoried) && catalog.filesInventoried >= lectures.length,
  "Catalog filesInventoried must be an integer no smaller than the lecture count.");
const ids = lectures.map((lecture) => lecture.id);
assert(new Set(ids).size === ids.length, "Catalog lecture ids must be unique.");
for (const course of catalog.courses) {
  assert(isSubjectRecordingUrl(course.recordingUrl || ""),
    `${course.code}: subject recording-folder URL is missing or invalid.`);
  const dates = course.lectures.map((lecture) => lecture.date);
  const sortedDates = [...dates].sort();
  assert(dates.every((date, index) => date === sortedDates[index]),
    `${course.code}: lectures must be ordered oldest first.`);
}

for (const lecture of lectures) {
  assert(/^eai-640[123]-\d{4}-\d{2}-\d{2}$/.test(lecture.id), `${lecture.id}: invalid id format.`);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(lecture.date), `${lecture.id}: invalid date.`);
  if (lecture.status !== "published") continue;

  assert(/^https:\/\/cciitpatna-my\.sharepoint\.com\/personal\/.*\/stream\.aspx\?id=/.test(lecture.recordingUrl || ""),
    `${lecture.id}: canonical lecture recording URL is missing or invalid.`);
  assert(!/[?&](?:referrer|referrerScenario)=/.test(lecture.recordingUrl || ""),
    `${lecture.id}: recording URL contains transient referrer parameters.`);

  const bilingual = lectureNotes[lecture.id];
  assert(Boolean(bilingual?.en && bilingual?.hi), `${lecture.id}: published lecture has no complete bilingual note.`);
  if (!bilingual?.en || !bilingual?.hi) continue;
  const notes = bilingual.en;
  const hindi = bilingual.hi;
  assert(Object.keys(bilingual).length === 2, `${lecture.id}: only en and hi may exist inside one bilingual publication unit.`);

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
  assert(!Object.hasOwn(notes, "project"), `${lecture.id}: private capstone leaked into public English notes.`);

  if (hindi) {
    assert(hindi.title?.length > 0 && hindi.title !== notes.title, `${lecture.id}: Hindi title is missing or untranslated.`);
    assert(hindi.lede?.length > 0, `${lecture.id}: Hindi lede is missing.`);
    assert(hindi.coverage?.length === notes.coverage.length, `${lecture.id}: Hindi coverage count differs from English.`);
    assert(hindi.slideTrail?.length === notes.slideTrail.length, `${lecture.id}: Hindi slide trail count differs from English.`);
    assert(hindi.summary?.length === notes.summary.length, `${lecture.id}: Hindi summary count differs from English.`);
    assert(hindi.insights?.length === notes.insights.length, `${lecture.id}: Hindi insight count differs from English.`);
    assert(hindi.resources?.length === notes.resources.length, `${lecture.id}: Hindi resource count differs from English.`);
    assert(hindi.quiz?.length === 25, `${lecture.id}: Hindi edition needs exactly 25 MCQs.`);
    hindi.quiz?.forEach((question, index) => {
      assert(question.options?.length === 4 && question.optionNotes?.length === 4,
        `${lecture.id}: Hindi MCQ ${index + 1} must preserve four options and explanations.`);
      assert(question.answer === notes.quiz[index].answer,
        `${lecture.id}: Hindi MCQ ${index + 1} changed the correct-answer index.`);
    });
    assert(!Object.hasOwn(hindi, "project"), `${lecture.id}: private capstone leaked into public Hindi notes.`);
    signalKeys.forEach((key) => {
      assert(hindi.courseSignals?.[key]?.length === notes.courseSignals[key].length,
        `${lecture.id}: Hindi courseSignals.${key} differs from English.`);
    });
  }
}

for (const id of Object.keys(lectureNotes)) {
  assert(ids.includes(id), `${id}: notes object is not represented in the catalog.`);
}

assert(privateCapstoneVault.version === 1, "Private capstone vault version is invalid.");
assert(privateCapstoneVault.kdf === "PBKDF2-SHA-256", "Private capstone vault KDF is invalid.");
assert(privateCapstoneVault.cipher === "AES-256-GCM", "Private capstone vault cipher is invalid.");
assert(privateCapstoneVault.iterations >= 600_000, "Private capstone vault KDF is too weak.");
for (const field of ["salt", "iv", "ciphertext"]) {
  assert(typeof privateCapstoneVault[field] === "string" && privateCapstoneVault[field].length > 12,
    `Private capstone vault ${field} is missing.`);
}

assert(semesterSchedule.endsOn === "2026-11-30", "Schedule must run through 30 November 2026.");
assert(semesterSchedule.displayTimeZone === "America/Chicago", "Schedule display timezone must be America/Chicago.");
const scheduledSlugs = semesterSchedule.courses.map((course) => course.slug);
assert(new Set(scheduledSlugs).size === catalog.courses.length, "Each course needs exactly one schedule entry.");
for (const course of catalog.courses) {
  const schedule = semesterSchedule.courses.find((item) => item.slug === course.slug);
  assert(Boolean(schedule), `${course.code}: schedule is missing.`);
  if (!schedule) continue;
  assert(/^https:\/\/teams\.microsoft\.com\/meet\//.test(schedule.joinUrl), `${course.code}: Teams join URL is invalid.`);
  assert(schedule.weekdays?.length > 0, `${course.code}: schedule weekdays are missing.`);
  assert(/^\d{2}:\d{2}$/.test(schedule.start) && /^\d{2}:\d{2}$/.test(schedule.end), `${course.code}: schedule times are invalid.`);
  assert(schedule.indiaSummary?.en && schedule.indiaSummary?.hi, `${course.code}: bilingual India-time summary is missing.`);
  assert(schedule.chicagoSummary?.en && schedule.chicagoSummary?.hi, `${course.code}: bilingual Chicago-time summary is missing.`);
  const calendarText = readFileSync(new URL(`../calendar/${course.slug}.ics`, import.meta.url), "utf8");
  assert(calendarText.includes("BEGIN:VCALENDAR") && calendarText.includes("RRULE:FREQ=WEEKLY"), `${course.code}: recurring calendar file is invalid.`);
  assert(calendarText.includes(schedule.joinUrl), `${course.code}: calendar file does not include the Teams URL.`);
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
