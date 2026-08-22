export const catalogHi = {
  semester: "सेमेस्टर 4 · अगस्त–नवंबर 2026",
  courses: {
    "eai-6401": {
      title: "रीइन्फोर्समेंट लर्निंग",
      shortTitle: "रीइन्फोर्समेंट लर्निंग",
      cadence: "सोमवार और मंगलवार",
      time: "शाम 6:00–7:30 IST",
      statusLabel: "2 व्याख्यान उपलब्ध",
      note: "17 और 18 अगस्त के व्याख्यान कालानुक्रमिक क्रम में प्रकाशित हैं। 17 अगस्त की तीन क्रमांकित अपलोड फ़ाइलें निष्क्रिय/त्रुटिपूर्ण पाई गईं और शामिल नहीं की गईं।",
      lectures: {
        "eai-6401-2026-08-17": {
          displayDate: "17 अगस्त 2026",
          title: "एजेंट–पर्यावरण ढाँचे की बुनियाद",
          statusLabel: "नोट्स प्रकाशित",
          overview: ["RL बनाम supervised learning", "Policy, reward, value और model", "Exploration और कार्यक्षेत्र"]
        },
        "eai-6401-2026-08-18": {
          displayDate: "18 अगस्त 2026",
          title: "Tic-Tac-Toe value learning और k-armed bandit",
          statusLabel: "नोट्स प्रकाशित",
          overview: ["Tic-Tac-Toe value backup", "Explore बनाम exploit", "Expected action value"]
        }
      }
    },
    "eai-6402": {
      title: "मेटा लर्निंग",
      shortTitle: "मेटा लर्निंग",
      cadence: "शनिवार",
      time: "सुबह 10:00–दोपहर 1:00 IST",
      statusLabel: "1 व्याख्यान उपलब्ध",
      note: "व्याख्यान 1 सत्यापित शिक्षण समयरेखा, स्लाइड क्रम, व्याख्यायुक्त प्रश्नोत्तरी और अनुप्रयुक्त प्रोजेक्ट के साथ प्रकाशित है।",
      lectures: {
        "eai-6402-2026-08-22": {
          displayDate: "22 अगस्त 2026",
          title: "डेटा का परिचय और मेटा-लर्निंग की प्रेरणा",
          statusLabel: "नोट्स प्रकाशित",
          overview: ["डेटा क्यों महत्त्वपूर्ण है", "Sampling और representation", "दुर्लभ घटनाएँ और डेटा की कमी"]
        }
      }
    },
    "eai-6403": {
      title: "जनरेटिव एआई के चयनित विषय",
      shortTitle: "जनरेटिव एआई",
      cadence: "शनिवार और रविवार",
      time: "दोपहर 3:30–5:00 IST",
      statusLabel: "रिकॉर्डिंग की प्रतीक्षा",
      note: "दिया गया लिंक अभी Meta Learning वाले फ़ोल्डर पर ही जाता है; Generative AI की कोई उपयुक्त रिकॉर्डिंग अभी दिखाई नहीं दे रही है।",
      lectures: {}
    }
  }
};

export function localizeCatalog(catalog, lang) {
  if (lang !== "hi") return catalog;
  return {
    ...catalog,
    semester: catalogHi.semester,
    courses: catalog.courses.map((course) => {
      const localized = catalogHi.courses[course.slug];
      return {
        ...course,
        ...localized,
        lectures: course.lectures.map((lecture) => ({
          ...lecture,
          ...(localized.lectures[lecture.id] ?? {})
        }))
      };
    })
  };
}
