export const semesterSchedule = {
  sourceTimeZone: "Asia/Kolkata",
  displayTimeZone: "America/Chicago",
  startsOn: "2026-08-17",
  endsOn: "2026-11-30",
  courses: [
    {
      slug: "eai-6401",
      code: "EAI 6401/ECS 6404/ECC 6403",
      title: { en: "Reinforcement Learning", hi: "रीइन्फोर्समेंट लर्निंग" },
      session: { en: "Evening session", hi: "सायंकालीन सत्र" },
      accent: "cobalt",
      meetings: [{
        id: "monday-tuesday",
        weekdays: [1, 2],
        weekdayLabels: { en: ["Monday", "Tuesday"], hi: ["सोमवार", "मंगलवार"] },
        start: "18:00",
        end: "19:30",
        joinUrl: "https://teams.microsoft.com/meet/492065137699781?p=cj7q8exqz1s6T2WqcK"
      }]
    },
    {
      slug: "eai-6402",
      code: "EAI 6402/ECC 6401",
      title: { en: "Meta Learning", hi: "मेटा लर्निंग" },
      session: { en: "Morning session", hi: "प्रातःकालीन सत्र" },
      accent: "teal",
      meetings: [{
        id: "saturday",
        weekdays: [6],
        weekdayLabels: { en: ["Saturday"], hi: ["शनिवार"] },
        start: "10:00",
        end: "13:00",
        joinUrl: "https://teams.microsoft.com/meet/477623664000887?p=UFfth4Kg8yWYvhl5jH"
      }]
    },
    {
      slug: "eai-6403",
      code: "EAI 6403",
      title: { en: "Selective Topics in Generative AI", hi: "जनरेटिव एआई के चयनित विषय" },
      session: { en: "Afternoon session", hi: "अपराह्न सत्र" },
      accent: "amber",
      meetings: [{
        id: "weekend",
        weekdays: [6, 0],
        weekdayLabels: { en: ["Saturday", "Sunday"], hi: ["शनिवार", "रविवार"] },
        start: "15:30",
        end: "17:00",
        joinUrl: "https://teams.microsoft.com/meet/480625431590528?p=rmW1GXmzQ6FMMTIsqO"
      }]
    },
    {
      slug: "ecs-6402",
      code: "ECS 6402",
      title: { en: "Selected Topics in Wireless Networks", hi: "वायरलेस नेटवर्क में चयनित विषय" },
      session: { en: "Evening session", hi: "सायंकालीन सत्र" },
      accent: "violet",
      meetings: [{
        id: "thursday-friday",
        weekdays: [4, 5],
        weekdayLabels: { en: ["Thursday", "Friday"], hi: ["गुरुवार", "शुक्रवार"] },
        start: "20:30",
        end: "22:00",
        joinUrl: "https://teams.microsoft.com/meet/472502322608749?p=xgva9NT6xqpvczlFVr"
      }]
    },
    {
      slug: "ebb-6401",
      code: "EBB 6401",
      title: { en: "Smart Contracts and Solidity Programming", hi: "स्मार्ट कॉन्ट्रैक्ट्स और Solidity प्रोग्रामिंग" },
      session: { en: "Evening session", hi: "सायंकालीन सत्र" },
      accent: "rose",
      meetings: [{
        id: "monday-wednesday",
        weekdays: [1, 3],
        weekdayLabels: { en: ["Monday", "Wednesday"], hi: ["सोमवार", "बुधवार"] },
        start: "18:00",
        end: "19:30",
        joinUrl: "https://teams.microsoft.com/meet/426944211501193?p=BBIMsGERUEQAoM27c1"
      }]
    },
    {
      slug: "ebb-6403",
      code: "EBB 6403",
      title: { en: "Security and Privacy for Big Data", hi: "बिग डेटा के लिए सुरक्षा और गोपनीयता" },
      session: { en: "Evening sessions", hi: "सायंकालीन सत्र" },
      accent: "indigo",
      meetings: [
        {
          id: "friday",
          weekdays: [5],
          weekdayLabels: { en: ["Friday"], hi: ["शुक्रवार"] },
          start: "20:00",
          end: "21:00",
          joinUrl: "https://teams.microsoft.com/meet/497438980744742?p=0NwH5d6KeBXfvrC67q"
        },
        {
          id: "saturday",
          weekdays: [6],
          weekdayLabels: { en: ["Saturday"], hi: ["शनिवार"] },
          start: "18:00",
          end: "20:00",
          joinUrl: "https://teams.microsoft.com/meet/426198728807974?p=MKIyd9zifXMm1nmMcN"
        }
      ]
    },
    {
      slug: "ecs-6401",
      code: "ECS 6401/ESD 6301",
      title: { en: "Advanced Time Series Analysis", hi: "उन्नत समय-श्रृंखला विश्लेषण" },
      session: { en: "Evening session", hi: "सायंकालीन सत्र" },
      accent: "cyan",
      meetings: [{
        id: "wednesday-friday",
        weekdays: [3, 5],
        weekdayLabels: { en: ["Wednesday", "Friday"], hi: ["बुधवार", "शुक्रवार"] },
        start: "18:00",
        end: "19:30",
        joinUrl: "https://teams.microsoft.com/meet/439222750467933?p=YuSjXmhM7aWleSLYUe"
      }]
    },
    {
      slug: "ecc-6404",
      code: "ECC 6404",
      title: { en: "Data Warehousing", hi: "डेटा वेयरहाउसिंग" },
      session: { en: "Evening session", hi: "सायंकालीन सत्र" },
      accent: "emerald",
      meetings: [{
        id: "monday-wednesday",
        weekdays: [1, 3],
        weekdayLabels: { en: ["Monday", "Wednesday"], hi: ["सोमवार", "बुधवार"] },
        start: "19:30",
        end: "21:00",
        joinUrl: "https://teams.microsoft.com/meet/45461319658374?p=ExTNwzcnXDTbnDArEl"
      }]
    },
    {
      slug: "ebb-6402",
      code: "EBB 6402",
      title: { en: "Blockchain Policy — Legal, Social and Economic Impact", hi: "ब्लॉकचेन नीति — कानूनी, सामाजिक और आर्थिक प्रभाव" },
      session: { en: "Evening session", hi: "सायंकालीन सत्र" },
      accent: "orange",
      meetings: [{
        id: "tuesday-thursday",
        weekdays: [2, 4],
        weekdayLabels: { en: ["Tuesday", "Thursday"], hi: ["मंगलवार", "गुरुवार"] },
        start: "18:00",
        end: "19:30",
        joinUrl: "https://teams.microsoft.com/meet/499936189644259?p=r8d88lVr9OYDbHib0E"
      }]
    }
  ]
};

export const scheduleBySlug = (slug) => semesterSchedule.courses.find((course) => course.slug === slug);
export const meetingsForCourse = (course) => course?.meetings ?? [];

// Moodle source snapshot verified 2026-09-12. Undated legacy timetables retain
// null bounds: reference conversions must not imply verified class dates.
const historicalMeeting = (weekdays, start, end, startsOn = null, endsOn = null, label = "Lecture") => ({ weekdays, start, end, startsOn, endsOn, label });
const historicalCourse = (code, title, moodleId, recordingPath, meetings, note = "") => ({
  code, title, moodleUrl: `https://cetpgex.iitp.ac.in/moodle/course/view.php?id=${moodleId}`,
  recordingUrl: recordingPath ? `https://cciitpatna-my.sharepoint.com/:f:/g/personal/${recordingPath}` : null,
  meetings, note
});
export const semesterHistory = [
  { semester: 1, period: "Spring 2025", courses: [
    historicalCourse("EAI 6103", "Advanced Machine Learning", 260, "eais1e3_iitp_ac_in/ElVmbcgat8lPlRMbn7ksxAMB_PC-yMcEYSaKWK16kio9GQ?e=jOPSz7", [historicalMeeting([0], "15:00", "16:30"), historicalMeeting([0], "19:30", "21:00")]),
    historicalCourse("EMC 5103", "Probability and Statistics", 256, "emc5103_iitp_ac_in/EqOZpJjcCHVHvp8HHwYufPkBFx21NStsrsVzf0ONGkBupw?e=faE4aY", [historicalMeeting([6,0], "11:30", "13:00"), historicalMeeting([6], "17:00", "19:00", null, null, "Lab")], "The course heading uses EMC 5103; the timetable and recording resource label use ECS 5103."),
    historicalCourse("EHS 5104", "Technical Writing and Soft Skills", 257, "ehs5104_iitp_ac_in/EoTbXazmKlBPtP0mH0zzaxMBrjDCF9MAtNe0P0lR4qF7gA?e=pdT41B", [historicalMeeting([4,5], "19:30", "21:00"), historicalMeeting([0], "17:00", "19:00", null, null, "Lab")]),
    historicalCourse("ECS 5101", "Design and Analysis of Algorithms", 254, "cs514cse_iitp_ac_in/Er4WsyEbg2JCm4JKhfqKvnsBpZ3WH6EmZzLvFEpIBcMERQ?e=A0bJfM", [historicalMeeting([6], "08:00", "09:25"), historicalMeeting([0], "09:30", "10:30"), historicalMeeting([6], "14:30", "16:30", null, null, "Lab")]),
    historicalCourse("ECS 5102", "Foundations of Computer System", 255, "ecs5102_iitp_ac_in/EsrgZu6gl_hGtG4hgloZx7MBX3b2X9BdzUsYH9q25Qsokw?e=n8KpEK", [historicalMeeting([6], "09:30", "11:00"), historicalMeeting([0], "08:00", "09:30"), historicalMeeting([6], "19:00", "21:00", null, null, "Lab"), historicalMeeting([6,0], "13:00", "14:30", "2025-08-16", "2025-11-30", "Later published revision"), historicalMeeting([6], "19:30", "21:30", "2025-08-16", "2025-11-30", "Later lab revision")], "Moodle retains the Spring timetable and an August–November 2025 revision. Both are preserved here; the subject remains in Semester 1 by its code.")
  ]},
  { semester: 2, period: "August–December 2025", courses: [
    historicalCourse("EAI 6201 / ECS 6203 / EBB 6202", "Deep Learning", 485, "mc504mc_iitp_ac_in/EitJxdXyGCFJlJIsUuvElAwBe5cjJ7CKtOgKn8gUtf9C3g?e=4fzBDF", [historicalMeeting([6], "09:30", "11:00", "2025-08-16", "2025-11-30"), historicalMeeting([6], "14:30", "16:00", "2025-08-17", "2025-11-30")], "The afternoon block says Saturday, but its start boundary is Sunday 17 August. Saturday is retained as written; confirm the intended weekday in Moodle. Generated dates follow that published weekday."),
    historicalCourse("EAI 6204", "Federated Learning", 487, "cs565cse_iitp_ac_in/Ep91ODS4GQ5GszOXka7w5RIBkQyCdnL1wDdZStcaw55rqQ?e=J51FR9", [historicalMeeting([0], "11:30", "13:00", "2025-08-16", "2025-11-30"), historicalMeeting([0], "18:00", "19:30", "2025-08-17", "2025-11-30")]),
    historicalCourse("EMC 5202", "Numerical Linear Algebra and Optimization Techniques", 460, "ma502mc_iitp_ac_in/EtYBMyP6N3lJrdAiwltTmRYB-XIp8f3TuHe8H8zXV4b4ZQ?e=aygWLF", [historicalMeeting([0], "09:30", "11:00", "2025-08-17", "2025-11-30"), historicalMeeting([6], "18:00", "19:30", "2025-08-16", "2025-11-30"), historicalMeeting([0], "16:00", "18:00", "2025-08-17", "2025-11-30", "Lab")]),
    historicalCourse("ECS 5201", "Artificial Intelligence", 436, "cs561aidse_iitp_ac_in/EpRzD_2F-MlDhtgcwzU-WNQB6msvzwi4iDt52pxd-70ilQ?e=HImVxR", [historicalMeeting([6], "11:30", "13:00", "2025-08-16", "2025-11-30"), historicalMeeting([1], "19:00", "20:30", "2025-08-17", "2025-12-01"), historicalMeeting([3], "19:30", "21:30", "2025-08-17", "2025-11-30", "Lab")]),
    historicalCourse("IKS", "Indian Knowledge System", 461, "ma504mc_iitp_ac_in/EqWY_Hd8xZ1HmcRzOJtLdT4Bf7Yy7f5KMF145dwLgjV3HQ?e=mfwaj2", [historicalMeeting([3,4], "18:30", "19:30", "2025-08-20", "2025-11-30")])
  ]},
  { semester: 3, period: "January–May 2026", courses: [
    historicalCourse("EAI 6302 / ECS 6304", "Natural Language Processing", 624, "cs559cse_iitp_ac_in/IgA07rJLLtIFQopdfWlzbT7rAbS5fi1bwT2B4VjwTdhlHsU?e=evxWfI", [historicalMeeting([6], "16:30", "18:00", "2026-01-17", "2026-05-01"), historicalMeeting([5], "19:30", "21:00", "2026-01-17", "2026-05-01")]),
    historicalCourse("EAI 6304 / ECS 6302 / ECC 6103", "Advanced Cloud Computing", 575, "eccs1e3_iitp_ac_in/IgBvMcyR3FcUTo_b-KehqqLDAUK2PIcV1cZOLgXlFgTKTGY?e=7iUUaN", [historicalMeeting([6,0], "15:00", "16:30", "2026-01-17", "2026-05-01")]),
    historicalCourse("Project - I", "Project - I", 698, null, [], "No recurring class schedule or lecture-recording folder is listed on the Moodle project page.")
  ]},
  { semester: 4, period: "August–November 2026", courses: semesterSchedule.courses.map(course => ({
    ...course, title: course.title.en,
    moodleUrl: ({"eai-6401": "https://cetpgex.iitp.ac.in/moodle/course/view.php?id=765", "eai-6403": "https://cetpgex.iitp.ac.in/moodle/course/view.php?id=767"})[course.slug] || null,
    meetings: course.meetings.map(meeting => ({...meeting, startsOn: semesterSchedule.startsOn, endsOn: semesterSchedule.endsOn, label: "Lecture"})),
    note: ""
  }))}
];

// Cross-listed courses use the first matching prefix in the owner's priority.
export function primaryHistoryCode(code) {
  const codes = code.match(/[A-Z]+\s*\d{4}/g) || [];
  return ["EAI", "EMC", "EHS", "ECS", "ECC"].flatMap(prefix => codes.filter(value => value.startsWith(prefix)))[0] || codes[0] || code;
}
export function compareHistoryCourses(a, b) {
  const priority = ["EAI", "EMC", "EHS", "ECS", "ECC", "EBB", "IKS", "Project"];
  const rank = code => { const index = priority.indexOf(primaryHistoryCode(code).split(/[\s-]/)[0]); return index < 0 ? priority.length : index; };
  return rank(a.code) - rank(b.code) || primaryHistoryCode(a.code).localeCompare(primaryHistoryCode(b.code));
}
