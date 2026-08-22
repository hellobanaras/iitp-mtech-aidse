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
      indiaSummary: { en: "6:00–7:30 PM IST", hi: "शाम 6:00–7:30 IST" },
      accent: "cobalt",
      joinUrl: "https://teams.microsoft.com/meet/492065137699781?p=cj7q8exqz1s6T2WqcK",
      chicagoSummary: {
        en: "7:30–9:00 AM CDT through 31 Oct · 6:30–8:00 AM CST from 1 Nov",
        hi: "31 अक्तूबर तक सुबह 7:30–9:00 CDT · 1 नवंबर से सुबह 6:30–8:00 CST"
      }
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
      indiaSummary: { en: "10:00 AM–1:00 PM IST", hi: "सुबह 10:00–दोपहर 1:00 IST" },
      accent: "teal",
      joinUrl: "https://teams.microsoft.com/meet/477623664000887?p=UFfth4Kg8yWYvhl5jH",
      chicagoSummary: {
        en: "Friday 11:30 PM–Saturday 2:30 AM CDT through 30 Oct · Friday 10:30 PM–Saturday 1:30 AM CST from 6 Nov",
        hi: "30 अक्तूबर तक शुक्रवार रात 11:30–शनिवार 2:30 CDT · 6 नवंबर से शुक्रवार रात 10:30–शनिवार 1:30 CST"
      }
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
      indiaSummary: { en: "3:30–5:00 PM IST", hi: "दोपहर 3:30–5:00 IST" },
      accent: "amber",
      joinUrl: "https://teams.microsoft.com/meet/480625431590528?p=rmW1GXmzQ6FMMTIsqO",
      chicagoSummary: {
        en: "5:00–6:30 AM CDT through 31 Oct · 4:00–5:30 AM CST from 1 Nov",
        hi: "31 अक्तूबर तक सुबह 5:00–6:30 CDT · 1 नवंबर से सुबह 4:00–5:30 CST"
      }
    }
  ]
};

export const scheduleBySlug = (slug) => semesterSchedule.courses.find((course) => course.slug === slug);
