#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { semesterSchedule } from "../data/schedule.js";

const outputDirectory = new URL("../calendar/", import.meta.url);

function indiaDateToUtc(dateKey, time) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour, minute) - 330 * 60_000);
}

function firstDateForSchedule(schedule) {
  const cursor = new Date(`${semesterSchedule.startsOn}T12:00:00Z`);
  const end = new Date(`${semesterSchedule.endsOn}T12:00:00Z`);
  while (cursor <= end) {
    if (schedule.weekdays.includes(cursor.getUTCDay())) return cursor.toISOString().slice(0, 10);
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  throw new Error(`No occurrence found for ${schedule.slug}.`);
}

const formatUtc = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
const escapeIcs = (value) => String(value).replaceAll("\\", "\\\\").replaceAll(";", "\\;").replaceAll(",", "\\,").replaceAll("\n", "\\n");

function calendar(schedule) {
  const firstDate = firstDateForSchedule(schedule);
  const start = indiaDateToUtc(firstDate, schedule.start);
  const end = indiaDateToUtc(firstDate, schedule.end);
  const until = indiaDateToUtc(semesterSchedule.endsOn, "23:59");
  const dayCodes = schedule.weekdays.map((day) => ["SU", "MO", "TU", "WE", "TH", "FR", "SA"][day]).join(",");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Lecture Atlas//IIT Patna Schedule//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${schedule.slug}-2026@lecture-atlas`,
    "DTSTAMP:20260822T120000Z",
    `DTSTART:${formatUtc(start)}`,
    `DTEND:${formatUtc(end)}`,
    `RRULE:FREQ=WEEKLY;BYDAY=${dayCodes};UNTIL=${formatUtc(until)}`,
    `SUMMARY:${escapeIcs(`IIT Patna — ${schedule.title.en}`)}`,
    `DESCRIPTION:${escapeIcs(`Online class via Microsoft Teams. ${schedule.joinUrl}`)}`,
    `LOCATION:${escapeIcs("Microsoft Teams")}`,
    `URL:${schedule.joinUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
    ""
  ].join("\r\n");
}

await mkdir(outputDirectory, { recursive: true });
for (const schedule of semesterSchedule.courses) {
  await writeFile(new URL(`${schedule.slug}.ics`, outputDirectory), calendar(schedule));
}

console.log(`Generated ${semesterSchedule.courses.length} recurring calendar files in ${fileURLToPath(outputDirectory)}.`);
