export const catalogHi = {
  semester: "सेमेस्टर 4 · अगस्त–नवंबर 2026",
  courses: {
    "eai-6401": {
      title: "रीइन्फोर्समेंट लर्निंग",
      shortTitle: "रीइन्फोर्समेंट लर्निंग",
      cadence: "सोमवार और मंगलवार",
      time: "शाम 6:00–7:30 IST",
      statusLabel: "4 व्याख्यान उपलब्ध",
      note: "17, 18, 24 और 25 अगस्त के व्याख्यान कालानुक्रमिक क्रम में प्रकाशित हैं। 17 अगस्त की तीन क्रमांकित uploads निष्क्रिय/त्रुटिपूर्ण थीं और सत्यापित class intervals के बाद के लंबे idle tails हटा दिए गए हैं।",
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
        },
        "eai-6401-2026-08-24": {
          displayDate: "24 अगस्त 2026",
          title: "Regret, action-value estimation और 10-armed testbed",
          statusLabel: "नोट्स प्रकाशित",
          overview: ["Regret और action gaps", "Sample-average estimates", "10-armed testbed और worked exercise"]
        },
        "eai-6401-2026-08-25": {
          displayDate: "25 अगस्त 2026",
          title: "Incremental bandits, nonstationary tracking और optimistic exploration",
          statusLabel: "नोट्स प्रकाशित",
          overview: ["Incremental action-value updates", "Drift के लिए recency weighting", "Optimistic exploration"]
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
      statusLabel: "1 व्याख्यान उपलब्ध",
      note: "व्याख्यान 1 सत्यापित transcript, slide trail, तीन student Q&A, further study और 25 व्याख्यायुक्त MCQs के साथ 00:30–53:35 interval से प्रकाशित है।",
      lectures: {
        "eai-6403-2026-08-23": {
          displayDate: "23 अगस्त 2026",
          title: "Transformer की बुनियाद: token, attention और controlled generation",
          statusLabel: "नोट्स प्रकाशित",
          overview: ["Transformer architecture", "Tokens, embeddings और attention", "Temperature, top-k और top-p"]
        }
      }
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
