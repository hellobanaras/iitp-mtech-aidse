# Semester schedule history

Public route: `#/schedule/history` (share alias: `/schedule/history/`). Linked from the weekly schedule. Source data remains in `data/schedule.js`; the current Semester 4 schedule is reused without duplicating its times. Recording folders for those nine current subjects resolve from the existing catalog.

On 12 September 2026 the authenticated Moodle My courses page listed 17 courses. Excluding M.Tech and Mock End Semester Examination left 15 course pages, all reviewed for timetable and recording metadata. Semester membership follows the owner's EAI / EMC / EHS / ECS / ECC code priority, with IKS in Semester 2 and Project I in Semester 3. Seven additional existing Semester 4 subjects are retained, for 22 total. The 15 course-source URLs are stored with their subjects.

Known source qualifications:

- Spring 2025 table-only schedules provide weekdays and times but no date bounds. CST/CDT examples are labeled as conversions, not verified occurrences.
- ECS 5102 includes both an undated original timetable and a dated August–November 2025 revision. Both remain under Semester 1.
- Deep Learning's afternoon block says Saturday but begins its date range on Sunday 17 August 2025. Preserve the written weekday and flag the mismatch.
- Probability and Statistics is EMC 5103 in the course heading but ECS 5103 in the timetable and recording-resource label. Preserve the course-heading code.
- Project I has no recurring timetable or recording-folder link. Do not invent either.
- Calculated recurrence dates are scheduled occurrences, not evidence of attendance or of a recording. Cancellations are not known.

IST is always first on this history page. CT uses America/Chicago for each scheduled date, including previous-day dates and different start/end abbreviations during a DST transition. Past occurrences have no Join action. `tools/test_schedule_history.mjs`, included in `npm run check`, covers those boundaries and course classification.
