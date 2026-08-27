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
      code: "EAI 6402 / ECC 6401",
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
      code: "ECS 6401 / ESD 6301",
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
