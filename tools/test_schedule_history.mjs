import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { semesterHistory, semesterSchedule, primaryHistoryCode, compareHistoryCourses } from "../data/schedule.js";
const source = readFileSync(new URL("../assets/app.js", import.meta.url), "utf8");
const names = ["indiaDateToUtc", "dateRange", "zonedDateKey", "zoneName", "zoneClock", "historyDates", "historyTime"];
const functions = names.map(name => {
  const start = source.indexOf(`function ${name}(`);
  assert(start >= 0, name);
  return source.slice(start, source.indexOf("\n}", start) + 2);
}).join("\n");
const context = vm.createContext({ semesterSchedule, Intl, Date });
vm.runInContext(functions, context);
const time = (date, start, end) => context.historyTime(date, {start, end}, "America/Chicago");
assert.equal(time("2025-11-02", "11:30", "13:00"), "Sun · 1:00 AM CDT – 1:30 AM CST");
assert.equal(time("2025-08-16", "09:30", "11:00"), "Fri · 11:00 PM – Sat · 12:30 AM CDT");
assert.equal(time("2025-11-08", "09:30", "11:00"), "Fri · 10:00 PM – 11:30 PM CST");
assert.equal(time("2026-03-07", "15:00", "16:30"), "Sat · 3:30 AM – 5:00 AM CST");
assert.equal(time("2026-03-08", "15:00", "16:30"), "Sun · 4:30 AM – 6:00 AM CDT");
assert.deepEqual(semesterHistory.map(s => s.courses.length), [5,5,3,9]);
for (const semester of semesterHistory) for (const course of semester.courses) {
  const code = primaryHistoryCode(course.code);
  const number = code.match(/[56]([1-4])\d{2}/);
  if (number) assert.equal(Number(number[1]), semester.semester, course.code);
  for (const meeting of course.meetings) {
    assert(meeting.start < meeting.end);
    const dates = context.historyDates(meeting);
    assert(dates.length > 0);
    if (meeting.startsOn) assert(dates.every(d => d >= meeting.startsOn && d <= meeting.endsOn));
  }
}
assert.equal(semesterHistory[1].courses.at(-1).code, "IKS");
assert.equal(semesterHistory[2].courses.at(-1).code, "Project - I");
assert.equal([...semesterHistory[0].courses].sort(compareHistoryCourses)[0].code, "EAI 6103");
console.log("History verified: 22 subjects, semester classification, DST transitions, prior-day times, recurrence bounds.");
