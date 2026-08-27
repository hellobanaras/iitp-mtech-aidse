export const semesterSchedule = {
  sourceTimeZone: "Asia/Kolkata",
  displayTimeZone: "America/Chicago",
  startsOn: "2026-08-17",
  endsOn: "2026-11-30",
  courses: [
    {
      slug: "eai-6401",
      code: "EAI 6401 / ECS 6404 / ECC 6403",
      title: { en: "Reinforcement Learning", hi: "रीइन्फोर्समेंट लर्निंग" },
      session: { en: "Evening session", hi: "सायंकालीन सत्र" },
      weekdays: [1, 2],
      weekdayLabels: { en: ["Monday", "Tuesday"], hi: ["सोमवार", "मंगलवार"] },
      start: "18:00",
      end: "19:30",
      accent: "cobalt",
      joinUrl: "https://teams.microsoft.com/meet/492065137699781?p=cj7q8exqz1s6T2WqcK"
    },
    {
      slug: "eai-6402",
      code: "EAI 6402 / ECC 6401",
      title: { en: "Meta Learning", hi: "मेटा लर्निंग" },
      session: { en: "Morning session", hi: "प्रातःकालीन सत्र" },
      weekdays: [6],
      weekdayLabels: { en: ["Saturday"], hi: ["शनिवार"] },
      start: "10:00",
      end: "13:00",
      accent: "teal",
      joinUrl: "https://teams.microsoft.com/meet/477623664000887?p=UFfth4Kg8yWYvhl5jH"
    },
    {
      slug: "eai-6403",
      code: "EAI 6403",
      title: { en: "Selective Topics in Generative AI", hi: "जनरेटिव एआई के चयनित विषय" },
      session: { en: "Afternoon session", hi: "अपराह्न सत्र" },
      weekdays: [6, 0],
      weekdayLabels: { en: ["Saturday", "Sunday"], hi: ["शनिवार", "रविवार"] },
      start: "15:30",
      end: "17:00",
      accent: "amber",
      joinUrl: "https://teams.microsoft.com/meet/480625431590528?p=rmW1GXmzQ6FMMTIsqO"
    }
  ]
};

export const scheduleBySlug = (slug) => semesterSchedule.courses.find((course) => course.slug === slug);
