// English-only publication unit.
export const eai6402Lecture20260822 = {
  en: {
  "title": "Data as the substrate of meta-learning",
  "lede": "The opening lecture builds a practical bridge from data-driven decision making to the central course problem: how a learning system should behave when useful examples are scarce, imbalanced, missing, sensitive, or expensive to obtain.",
  "instructionalInterval": "24:00–1:24:57 and 1:37:37–2:14:44",
  "reviewLevel": "Recording, timestamped transcript, and slide-frame verified",
  "coverage": [
    {
      "title": "Course lens",
      "body": "Meta-learning is introduced as a strategy for learning efficiently, especially when ordinary supervised training does not have abundant labeled data."
    },
    {
      "title": "Why data matters",
      "body": "Data supports informed decisions, quality monitoring, causal investigation, feedback-driven improvement, and allocation of limited resources."
    },
    {
      "title": "Collection shapes conclusions",
      "body": "Hostel-menu and public-policy examples show how free-form responses, the wrong target audience, or unstratified samples can produce misleading majorities."
    },
    {
      "title": "Data products",
      "body": "The lecture surveys outbreak forecasting, route and weather prediction, recommender systems, sentiment analysis, medical assistance, and software-log troubleshooting."
    },
    {
      "title": "Rare events and anomalies",
      "body": "Fraud and manufacturing defects motivate class imbalance, anomaly detection, and the need to reason carefully about metrics and scarce positive examples."
    },
    {
      "title": "Scarcity motivates meta-learning",
      "body": "Few-shot, one-shot, and zero-shot settings are connected to real constraints such as privacy, consent, rare failures, and inaccessible medical or banking data."
    }
  ],
  "takeaway": "A learning strategy is only as credible as its data-generating process—and meta-learning becomes valuable when that process cannot supply enough representative examples for conventional training.",
  "slideTrail": [
    {
      "time": "24:00",
      "title": "Opening orientation · Lecture 1: Introduction to Data Science",
      "note": "Course scope: revisit ML, deep learning, NLP, computer vision, reinforcement learning, and mathematical foundations through a meta-learning lens."
    },
    {
      "time": "24:30 · PDF p. 2/38",
      "title": "Why Data is important?",
      "note": "Improve people's lives, make informed decisions, monitor quality, and measure whether a strategy works."
    },
    {
      "time": "43:30 · PDF p. 3/38",
      "title": "Why Data is important? — continued",
      "note": "Find reasons for problems, stop guessing, and use critical resources effectively."
    },
    {
      "time": "52:30 · whiteboard",
      "title": "Hostel breakfast survey",
      "note": "A free-text form fragments the 70 votes for change across many alternatives, allowing 30 votes for the status quo to appear dominant."
    },
    {
      "time": "1:07:30 · PDF p. 4/38",
      "title": "Add-on menu in hostel / Data and Election",
      "note": "Requirements vary by context; polling needs a relevant target population, meaningful strata, and careful interpretation."
    },
    {
      "time": "1:16:30 · PDF p. 7/38",
      "title": "What Can we do with Data?",
      "note": "Outbreak estimation, recommender systems, route prediction, investment decisions, and weather forecasting."
    },
    {
      "time": "1:23:30 · whiteboard",
      "title": "User–item recommendation matrix",
      "note": "Known interactions between users and movies motivate recommending an unseen item to a similar user."
    },
    {
      "time": "1:40:30 · PDF p. 8/38",
      "title": "Opinion mining, diagnosis, and log troubleshooting",
      "note": "Ratings, text, images, video, medical evidence, and operational logs become inputs for data products."
    },
    {
      "time": "1:43:30 · whiteboard",
      "title": "Rating magnitude versus rating count",
      "note": "A 4.5 average from 100 ratings and a 4.2 average from 1,000 ratings carry different evidence; a decision should consider both."
    },
    {
      "time": "2:01:30 · whiteboard",
      "title": "Rare defects: no-shot / few-shot setting",
      "note": "A continuously running production line may produce only a handful of defective samples, leaving too little labeled anomaly data for ordinary training."
    },
    {
      "time": "2:06:30 · whiteboard",
      "title": "Meta-learning as a strategy",
      "note": "The instructor positions meta-learning across ML, deep learning, NLP, and computer vision as a way to deal with data scarcity."
    },
    {
      "time": "2:11:00 · whiteboard",
      "title": "Absent data versus missing data",
      "note": "A course-specific analogy distinguishes data absent at the required location from data unavailable across all known locations."
    }
  ],
  "summary": [
    {
      "title": "1. The course begins with the data problem",
      "sourceRefs": [
        "24:00–28:00",
        "Opening remarks",
        "PDF p. 2/38"
      ],
      "paragraphs": [
        "The instructor frames meta-learning as a strategy rather than a single model. The course will revisit familiar learning paradigms—supervised, unsupervised, reinforcement learning, regression, SVMs, neural networks, transformers, and language models—and ask how learning can remain effective when data is limited.",
        "Few-shot, one-shot, and zero-shot settings are previewed, but this first meeting deliberately starts one level earlier: what data is, why computational learning needs numerical representations, and why the manner in which examples are created matters. Images, text, and other signals must ultimately be encoded numerically for a machine to process them."
      ]
    },
    {
      "title": "2. Data turns judgment into an inspectable decision",
      "sourceRefs": [
        "28:00–49:00",
        "PDF pp. 2–3/38"
      ],
      "paragraphs": [
        "Data is presented as a means to improve lives and make decisions under uncertainty. Examples span irrigation and soil-moisture decisions for small farmers, flood relief, healthcare triage, medicine and food quality, and scheduling scarce hospital resources. The shared structure is a decision, an observable outcome, and a feedback path that makes the next decision better.",
        "The lecture also treats time, staff, beds, money, and compute as resources. A rigid first-come-first-served rule can be inappropriate when a critical patient arrives; a data-informed system must represent urgency and cost, not merely arrival order. This is an early hint that objective design and stakeholder values are inseparable from the data pipeline.",
        "Human feedback supplies new data. Product choices, course feedback, and model-output preferences can be logged to improve a service. The instructor uses this to explain a human-in-the-loop cycle: propose an action, observe a response, measure effectiveness, and update the strategy."
      ]
    },
    {
      "title": "3. Bad collection design can manufacture the wrong answer",
      "sourceRefs": [
        "51:50–1:06:30",
        "Hostel survey whiteboard",
        "PDF p. 4/38"
      ],
      "paragraphs": [
        "A hostel serves samosas every day. Thirty of 100 students want to retain them, while 70 want change. If a form lets each dissatisfied student enter any alternative in a free-text box, their votes split across idli, bada pav, sandwiches, and many other choices. Samosa can then appear to win with only 30 percent. The result reflects the response instrument, not a genuine majority preference.",
        "A second example asks the whole campus whether a girls' facility should be improved. An aggregate majority can hide that the directly affected subgroup unanimously supports improvement. Similarly, a poll about public assistance is not meaningful without knowing whether respondents are rural or urban, their age groups, gender, and economic context."
      ],
      "points": [
        "Define the target population before collecting responses.",
        "Choose response options that match the decision being made.",
        "Use stratification or appropriate weighting when subgroups differ in relevance or prevalence.",
        "Preserve domain expertise: farmers, clinicians, operators, and affected users carry knowledge that a raw table does not encode."
      ]
    },
    {
      "title": "4. Data products convert observations into action",
      "sourceRefs": [
        "1:07:00–1:24:57",
        "1:37:37–1:51:30",
        "PDF pp. 7–8/38"
      ],
      "paragraphs": [
        "The lecture surveys applications including outbreak and weather estimation, traffic-aware routing, recommendation, sentiment analysis, medical support, and software-log troubleshooting. In every case, the useful artifact is not the dataset itself but a ranked choice, alert, forecast, diagnosis aid, or explanation that changes an action.",
        "The recommender example uses a user–item matrix. If users share interaction patterns, an item liked by one user but unseen by a similar user becomes a candidate recommendation. The instructor connects this with demographic attributes and explicit feedback, while also noting the commercial and cultural context of marketing decisions.",
        "Opinion mining can combine discrete stars, continuous ratings, text reviews, photographs, audio, and video. This is multimodal evidence. The rating example makes an important statistical point: an average score without its sample size is incomplete. A slightly lower score supported by far more observations may be a safer choice, depending on variance, recency, and selection bias."
      ]
    },
    {
      "title": "5. Rare outcomes break naive training and evaluation",
      "sourceRefs": [
        "1:51:30–2:03:00",
        "PDF p. 8/38",
        "Rare-defect whiteboard"
      ],
      "paragraphs": [
        "Fraud monitoring and medicine manufacturing illustrate severe class imbalance. A system may observe millions of valid transactions or tablets and only a few fraudulent or defective cases. Predicting the majority class every time can therefore achieve excellent accuracy while completely failing the operational goal.",
        "The lecture introduces unsupervised anomaly detection: learn the structure of ordinary data and flag observations that do not fit. This is useful when labeled defects are too rare or too diverse to enumerate. In practice, thresholds must reflect the cost of false negatives and false positives, and human review is usually necessary for consequential alerts."
      ],
      "formula": "Accuracy = (TP + TN) / (TP + TN + FP + FN) · Recall = TP / (TP + FN) · Precision = TP / (TP + FP)"
    },
    {
      "title": "6. Data scarcity is the bridge to meta-learning",
      "sourceRefs": [
        "2:03:00–2:11:00",
        "Meta-learning whiteboard"
      ],
      "paragraphs": [
        "The instructor places meta-learning wherever a learning process must adapt with insufficient task-specific data. Scarcity is not only a matter of collection cost. Banking signatures, medical records, and face images may exist but remain unavailable because they are sensitive, private, or require consent. Rare disasters and defects may simply have few historical examples.",
        "This motivates learning across tasks so that knowledge acquired previously helps a new task adapt from a small support set. The lecture promises future treatment of algorithms and mathematical foundations; at this stage, the essential idea is that the system should learn a reusable learning strategy rather than fit every new problem from scratch."
      ]
    },
    {
      "title": "7. Absent versus missing data—and what to carry forward",
      "sourceRefs": [
        "2:11:00–2:14:44",
        "Closing whiteboard"
      ],
      "paragraphs": [
        "The instructor closes with an analogy: an absent student is traceable but not at the expected venue, whereas a missing student cannot be found in any known place. Applied to spreadsheets, a value may be absent from the current sheet yet recoverable from another source, while a genuinely missing value is unavailable across known sources.",
        "Treat this as the instructor's conceptual distinction rather than universal statistical terminology. In mainstream missing-data analysis, missingness is usually described by mechanisms such as MCAR, MAR, and MNAR. The durable lesson is still valuable: before imputing a blank, search provenance and determine whether the value exists elsewhere."
      ]
    }
  ],
  "courseSignals": {
    "assignments": [
      {
        "time": "2:14:17",
        "title": "Quiz-based assessment pattern",
        "detail": "The instructor said the exam and assignment pattern is quiz-oriented; no separate take-home assignment was issued in this lecture."
      }
    ],
    "homework": [],
    "labs": [
      {
        "time": "2:13:13",
        "title": "Three or four hands-on sessions planned",
        "detail": "The instructor expects a small number of hands-on or coding/problem sessions during the course rather than a practical every week."
      }
    ],
    "projects": [
      {
        "time": "2:13:36",
        "title": "Optional project discussion",
        "detail": "Students interested in additional project or practical work were invited to contact the instructor for a separate discussion; no compulsory project was assigned."
      }
    ],
    "references": [],
    "studentQuestions": [
      {
        "time": "2:13:02",
        "question": "Will the course include practical sessions?",
        "response": "Yes. The instructor plans roughly three or four hands-on, coding, or dedicated problem sessions, and is open to discussing optional project work separately."
      }
    ]
  },
  "keyTerms": [
    {
      "term": "Meta-learning",
      "definition": "Learning across tasks so a system can acquire or adapt a model efficiently on a new task."
    },
    {
      "term": "Few-shot learning",
      "definition": "Adapting to a new class or task using only a small number of labeled examples."
    },
    {
      "term": "One-shot learning",
      "definition": "A special few-shot setting with one labeled example per class or task condition."
    },
    {
      "term": "Zero-shot learning",
      "definition": "Solving an unseen task or recognizing unseen classes without task-specific labeled examples, typically by using descriptions, pretrained knowledge, or semantic structure."
    },
    {
      "term": "Target population",
      "definition": "The full group about which a study intends to make a conclusion."
    },
    {
      "term": "Stratified sampling",
      "definition": "Dividing a population into meaningful subgroups and sampling within each to improve coverage or precision."
    },
    {
      "term": "Human in the loop",
      "definition": "A workflow in which human judgments, corrections, or approvals become part of training or decision control."
    },
    {
      "term": "Recommender system",
      "definition": "A system that retrieves and ranks items for a user using interaction, content, context, or similarity signals."
    },
    {
      "term": "Opinion mining",
      "definition": "Extracting structured signals such as sentiment, preferences, or concerns from people's expressed feedback."
    },
    {
      "term": "Multimodal data",
      "definition": "Evidence spanning more than one modality, such as text, images, audio, video, and numerical signals."
    },
    {
      "term": "Class imbalance",
      "definition": "A label distribution in which one class is substantially rarer than another."
    },
    {
      "term": "Anomaly detection",
      "definition": "Identifying observations whose patterns differ materially from expected or normal behavior."
    },
    {
      "term": "Datafication",
      "definition": "Turning events, behaviors, or qualities into recorded variables that can be stored and analyzed."
    },
    {
      "term": "Data provenance",
      "definition": "The history of where a datum came from, how it was collected, and how it was transformed."
    }
  ],
  "insights": [
    {
      "label": "Design insight",
      "title": "The questionnaire is already part of the model",
      "body": "Before an algorithm sees a table, the survey's audience, wording, response choices, and sampling scheme have already encoded assumptions. Feature engineering begins at data creation, not in a notebook."
    },
    {
      "label": "Technical nuance",
      "title": "Meta-learning is broader than data scarcity",
      "body": "Scarcity is a strong motivation, but meta-learning also targets rapid adaptation, transfer across task distributions, hyperparameter or optimizer learning, and continual improvement. It is best understood as learning the adaptation process."
    },
    {
      "label": "Terminology check",
      "title": "Zero-shot does not literally mean zero information",
      "body": "A zero-shot learner receives no labeled examples for the target task, but it still relies on prior training, a task description, label semantics, prompts, or another source of structure. 'No target examples' is more precise than 'no data.'"
    },
    {
      "label": "Evaluation insight",
      "title": "Accuracy can reward a useless rare-event model",
      "body": "If defects occur in 0.01% of products, predicting 'normal' always is 99.99% accurate and detects nothing. Report recall, precision, false-alarm rate, threshold behavior, and the business cost of each mistake."
    },
    {
      "label": "Method nuance",
      "title": "Normal-only training is often called novelty detection",
      "body": "The lecture groups it under unsupervised anomaly detection. A useful finer distinction is: outlier detection expects contamination in training data, while novelty detection trains on clean normal examples and tests future observations."
    },
    {
      "label": "Governance insight",
      "title": "Feedback loops need consent and bias controls",
      "body": "Clicks and preferences can improve personalization, but they also amplify exposure bias and create privacy risk. A production loop should document consent, retention, subgroup performance, and a way to override or contest automated decisions."
    },
    {
      "label": "Study connection",
      "title": "The lecture quietly defines a full ML product loop",
      "body": "Define the decision, collect representative evidence, datafy it, fit a model, choose cost-aware metrics, keep a human in control, observe outcomes, and adapt. Later meta-learning algorithms occupy only one part of this larger system."
    }
  ],
  "resources": [
    {
      "type": "Watch",
      "title": "CS330 Lecture 1 — Introduction & Overview",
      "creator": "Stanford Online · Chelsea Finn",
      "why": "A rigorous course-level introduction to tasks, generalization, and why multi-task and meta-learning matter.",
      "url": "https://www.youtube.com/watch?v=0rZtSwNOTQo"
    },
    {
      "type": "Paper",
      "title": "Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks",
      "creator": "Finn, Abbeel & Levine",
      "why": "The canonical optimization-based formulation: learn parameters that adapt well after only a few gradient steps.",
      "url": "https://arxiv.org/abs/1703.03400"
    },
    {
      "type": "Paper",
      "title": "Prototypical Networks for Few-shot Learning",
      "creator": "Snell, Swersky & Zemel",
      "why": "A clean metric-learning approach that classifies queries by distance to class prototypes.",
      "url": "https://arxiv.org/abs/1703.05175"
    },
    {
      "type": "Interactive course",
      "title": "Class-imbalanced datasets",
      "creator": "Google Machine Learning Crash Course",
      "why": "Explains why severe imbalance hinders training and introduces downsampling and upweighting.",
      "url": "https://developers.google.com/machine-learning/crash-course/overfitting/imbalanced-datasets"
    },
    {
      "type": "Reference",
      "title": "Accuracy, recall, precision, and related metrics",
      "creator": "Google for Developers",
      "why": "Use this to turn the lecture's rare-event examples into defensible evaluation choices.",
      "url": "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall"
    },
    {
      "type": "Reference",
      "title": "Novelty and Outlier Detection",
      "creator": "scikit-learn User Guide",
      "why": "Clarifies terminology and provides practical Isolation Forest, LOF, and One-Class SVM entry points.",
      "url": "https://scikit-learn.org/stable/modules/outlier_detection.html"
    },
    {
      "type": "Course",
      "title": "Recommendation Systems",
      "creator": "Google for Developers",
      "why": "Extends the user–item sketch into candidate generation, scoring, re-ranking, embeddings, and matrix factorization.",
      "url": "https://developers.google.com/machine-learning/recommendation"
    },
    {
      "type": "Reference",
      "title": "Choosing a Sampling Scheme",
      "creator": "NIST/SEMATECH e-Handbook",
      "why": "Connects the lecture's survey examples to randomization, stratification, precision, and systematic-error control.",
      "url": "https://itl.nist.gov/div898/handbook/ppc/section3/ppc332.htm"
    },
    {
      "type": "Dataset",
      "title": "TLC Trip Record Data",
      "creator": "NYC Taxi & Limousine Commission",
      "why": "A large, documented public dataset for practicing data profiling, segmentation, anomaly discovery, and decision-oriented analysis.",
      "url": "https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page"
    }
  ],
  "quiz": [
    {
      "question": "What is the lecture's central framing of meta-learning?",
      "options": [
        "A single neural-network architecture",
        "A strategy for learning and adaptation, especially under data scarcity",
        "A database compression method",
        "A replacement for all supervised learning"
      ],
      "answer": 1,
      "explanation": "The instructor repeatedly describes meta-learning as a strategy that can cut across algorithms and application domains, with scarce task-specific data as the main motivation.",
      "optionNotes": [
        "A is wrong: no one architecture defines the field.",
        "B is correct: it captures both the cross-cutting strategy and scarcity motivation.",
        "C is wrong: storage compression is unrelated to the course framing.",
        "D is wrong: meta-learning can incorporate supervised learning rather than abolish it."
      ]
    },
    {
      "question": "Which statement best distinguishes supervised from unsupervised learning in the opening overview?",
      "options": [
        "Supervised learning uses labels; unsupervised learning does not rely on target labels",
        "Supervised learning uses images; unsupervised learning uses text",
        "Supervised learning is always deep learning",
        "Unsupervised learning requires more labels"
      ],
      "answer": 0,
      "explanation": "The distinction presented is the availability of label information, not modality, model family, or label volume.",
      "optionNotes": [
        "A is correct: labels are the defining contrast in this overview.",
        "B is wrong: either paradigm can use images or text.",
        "C is wrong: supervised models include linear and other non-deep methods.",
        "D is wrong: unsupervised learning does not require target labels by definition."
      ]
    },
    {
      "question": "Why can flood response motivate few-shot learning?",
      "options": [
        "Flood data is always perfectly labeled",
        "A rare or first-time regional event may have little relevant historical data",
        "Few-shot learning eliminates the need for decisions",
        "Weather variables cannot be represented numerically"
      ],
      "answer": 1,
      "explanation": "A region facing an unusual event may have only a small number of comparable cases, so a system must reuse knowledge and adapt from limited evidence.",
      "optionNotes": [
        "A is wrong: labels and histories may be incomplete.",
        "B is correct: rare local precedents create the scarcity.",
        "C is wrong: the goal is to support decisions, not remove them.",
        "D is wrong: weather signals are routinely quantified."
      ]
    },
    {
      "question": "What flaw caused the hostel breakfast poll to favor samosa?",
      "options": [
        "The sample contained too many samosa supporters",
        "The alternative preferences were fragmented by an unrestricted text field",
        "Students were not allowed to vote",
        "The form used numerical data"
      ],
      "answer": 1,
      "explanation": "Thirty status-quo votes stayed in one category, while 70 change votes split across many freely entered alternatives. The instrument changed the apparent winner.",
      "optionNotes": [
        "A is wrong: 30 was a minority of the 100 students.",
        "B is correct: response-option design fragmented the majority preference.",
        "C is wrong: students did vote.",
        "D is wrong: numerical representation was not the source of bias."
      ]
    },
    {
      "question": "In the facilities survey example, why is the overall majority insufficient?",
      "options": [
        "Every subgroup is affected equally",
        "The directly affected subgroup may be underrepresented in the aggregate",
        "Majority votes are always invalid",
        "Stratification removes all uncertainty"
      ],
      "answer": 1,
      "explanation": "An aggregate dominated by respondents who are not directly affected can mask the needs of the relevant population. Results should be stratified and interpreted in context.",
      "optionNotes": [
        "A is wrong: impact differs by subgroup.",
        "B is correct: relevance and representation matter.",
        "C is wrong: majorities can be informative when the design matches the decision.",
        "D is wrong: stratification improves analysis but does not eliminate uncertainty."
      ]
    },
    {
      "question": "What is the primary purpose of stratified sampling here?",
      "options": [
        "To guarantee a desired result",
        "To represent meaningful subgroups and reduce systematic coverage problems",
        "To replace domain knowledge",
        "To collect only the largest subgroup"
      ],
      "answer": 1,
      "explanation": "Strata such as location, age, gender, or economic context help ensure the sample reflects groups relevant to the decision.",
      "optionNotes": [
        "A is wrong: sampling should not predetermine the conclusion.",
        "B is correct: subgroup coverage and precision are the goals.",
        "C is wrong: domain knowledge helps define useful strata.",
        "D is wrong: ignoring smaller groups defeats stratification."
      ]
    },
    {
      "question": "Which item can legitimately be treated as a limited resource in a decision system?",
      "options": [
        "Only money",
        "Only physical inventory",
        "Time, staff, beds, money, and compute",
        "Nothing measurable"
      ],
      "answer": 2,
      "explanation": "The lecture broadens resource utilization beyond material goods; hospital time and capacity are explicit examples.",
      "optionNotes": [
        "A is wrong: money is only one resource.",
        "B is wrong: nonphysical capacity also matters.",
        "C is correct: all can constrain an operational decision.",
        "D is wrong: these resources can be measured, though imperfectly."
      ]
    },
    {
      "question": "What makes a human-in-the-loop system different from a fully automatic one?",
      "options": [
        "It never uses models",
        "Human judgments or approvals feed into learning or control",
        "It cannot store feedback",
        "It always asks every user the same question"
      ],
      "answer": 1,
      "explanation": "Human selections, corrections, or approvals become feedback signals or safety gates in the process.",
      "optionNotes": [
        "A is wrong: human-in-the-loop systems commonly use models.",
        "B is correct: human input closes the feedback or control loop.",
        "C is wrong: logged feedback is often central.",
        "D is wrong: interaction can be adaptive and selective."
      ]
    },
    {
      "question": "What does the user–item matrix in the lecture represent?",
      "options": [
        "Interactions between users and movies or products",
        "Only user demographics",
        "The source code of a recommender",
        "A confusion matrix for fraud"
      ],
      "answer": 0,
      "explanation": "Rows and columns encode users and items, with observed interactions providing evidence for recommending unseen items.",
      "optionNotes": [
        "A is correct: it is the standard interaction-matrix abstraction.",
        "B is wrong: demographics may be side information but are not the matrix itself.",
        "C is wrong: a matrix is data, not source code.",
        "D is wrong: a confusion matrix summarizes classifications, not preferences."
      ]
    },
    {
      "question": "Why is a 4.2 rating from 1,000 people not automatically worse than 4.5 from 100?",
      "options": [
        "Average ratings never matter",
        "The count of observations affects how much evidence supports the estimate",
        "Larger samples always have higher averages",
        "A 4.2 score is mathematically larger"
      ],
      "answer": 1,
      "explanation": "The mean must be interpreted with sample size, uncertainty, bias, and recency. More ratings can provide a more stable estimate even when the average is slightly lower.",
      "optionNotes": [
        "A is wrong: averages can be useful with context.",
        "B is correct: support and uncertainty differ.",
        "C is wrong: sample size does not force a higher mean.",
        "D is wrong: 4.2 is smaller than 4.5."
      ]
    },
    {
      "question": "Which collection is genuinely multimodal?",
      "options": [
        "Five columns of numerical sensor readings",
        "Text reviews plus photos, videos, and audio",
        "Only star ratings",
        "A list of timestamps"
      ],
      "answer": 1,
      "explanation": "Multimodal data combines distinct modalities such as language, vision, and audio.",
      "optionNotes": [
        "A is multivariate but still one numerical modality.",
        "B is correct: it combines text, image, video, and audio.",
        "C is a single structured modality.",
        "D is a single temporal/numerical representation."
      ]
    },
    {
      "question": "In opinion mining, what does 'mining' mean?",
      "options": [
        "Deleting opinions",
        "Extracting structured knowledge from expressed feedback",
        "Collecting only positive reviews",
        "Encrypting customer comments"
      ],
      "answer": 1,
      "explanation": "The lecture uses mining to mean gathering useful knowledge from data—in this case people's opinions.",
      "optionNotes": [
        "A is wrong: extraction does not imply deletion.",
        "B is correct: it captures the analytical goal.",
        "C is wrong: negative and neutral evidence also matter.",
        "D is wrong: encryption is a security operation, not opinion mining."
      ]
    },
    {
      "question": "What is the intended role of AI in the medical examples?",
      "options": [
        "Replace every clinician",
        "Assist with triage, captions, summaries, or draft reports under professional oversight",
        "Prescribe from any chatbot response",
        "Avoid using patient evidence"
      ],
      "answer": 1,
      "explanation": "The instructor emphasizes assistance and time reduction while reserving consequential diagnosis and treatment decisions for medical professionals.",
      "optionNotes": [
        "A is wrong: replacement is explicitly rejected.",
        "B is correct: it matches the supporting role described.",
        "C is wrong: the lecture warns against self-medication from general AI.",
        "D is wrong: patient evidence is central, subject to privacy and consent."
      ]
    },
    {
      "question": "Why is ordinary accuracy dangerous for a fraud detector with 0.1% fraud?",
      "options": [
        "Accuracy cannot be calculated",
        "Predicting every transaction as legitimate can score 99.9% while catching no fraud",
        "Fraud is the majority class",
        "Accuracy always equals recall"
      ],
      "answer": 1,
      "explanation": "Severe imbalance lets the majority class dominate the accuracy calculation, hiding total failure on the rare class.",
      "optionNotes": [
        "A is wrong: accuracy is calculable but misleading.",
        "B is correct: it is the classic majority-class trap.",
        "C is wrong: fraud is the minority class in the example.",
        "D is wrong: accuracy and recall use different denominators."
      ]
    },
    {
      "question": "If missing a true defect is extremely costly, which metric deserves special attention?",
      "options": [
        "Recall for the defect class",
        "Only overall accuracy",
        "File size",
        "Number of model parameters"
      ],
      "answer": 0,
      "explanation": "Recall measures the fraction of actual defects that are detected, so it directly exposes costly false negatives.",
      "optionNotes": [
        "A is correct: recall = TP/(TP+FN).",
        "B is wrong: accuracy can hide rare failures.",
        "C is wrong: file size is not an outcome metric.",
        "D is wrong: parameter count does not measure detected defects."
      ]
    },
    {
      "question": "Why can a normal-only anomaly model be useful for medicine manufacturing?",
      "options": [
        "Defect classes are abundant and stable",
        "Normal samples are plentiful while labeled defects are rare or heterogeneous",
        "It guarantees zero false alarms",
        "It does not require any observations"
      ],
      "answer": 1,
      "explanation": "The model can learn the normal production manifold and flag departures without needing examples of every possible failure mode.",
      "optionNotes": [
        "A is wrong: scarcity motivates the method.",
        "B is correct: it uses the available normal data.",
        "C is wrong: thresholds inevitably trade misses against false alarms.",
        "D is wrong: it still needs representative normal observations."
      ]
    },
    {
      "question": "Which is the most precise name for training on clean normal data and detecting abnormal future samples?",
      "options": [
        "Novelty detection",
        "Ordinary least squares",
        "Randomized controlled trial",
        "Collaborative filtering"
      ],
      "answer": 0,
      "explanation": "The scikit-learn distinction calls this novelty detection; outlier detection allows anomalous contamination in the training set.",
      "optionNotes": [
        "A is correct: training normals and testing new cases matches novelty detection.",
        "B is a regression estimator.",
        "C is an experimental design.",
        "D is a recommendation technique."
      ]
    },
    {
      "question": "What does one-shot learning usually mean?",
      "options": [
        "One optimization step in every situation",
        "One labeled example per target class or condition",
        "One feature in the dataset",
        "One model for all possible tasks with no prior knowledge"
      ],
      "answer": 1,
      "explanation": "One-shot describes the amount of target support data, not necessarily the number of optimizer steps or features.",
      "optionNotes": [
        "A is wrong: one-shot concerns examples, not universally gradient steps.",
        "B is correct: it is the standard support-set meaning.",
        "C is wrong: feature count is unrelated.",
        "D is wrong: prior knowledge is usually essential."
      ]
    },
    {
      "question": "Why is 'zero-shot means no data at all' misleading?",
      "options": [
        "Zero-shot systems still use prior training or semantic task information",
        "Zero-shot always uses ten labeled examples",
        "Zero-shot is another name for a database",
        "Zero-shot forbids prompts"
      ],
      "answer": 0,
      "explanation": "There are no target-task labeled examples, but the learner still depends on previously acquired knowledge and some way to specify the new task or labels.",
      "optionNotes": [
        "A is correct: prior structure makes transfer possible.",
        "B is wrong: ten target examples would be few-shot, not zero-shot.",
        "C is wrong: it is a learning setting.",
        "D is wrong: prompts can supply task descriptions."
      ]
    },
    {
      "question": "Which situation creates data scarcity even if the records physically exist?",
      "options": [
        "A public synthetic dataset",
        "Bank signatures that cannot be shared without consent",
        "A duplicated CSV on two drives",
        "A larger batch size"
      ],
      "answer": 1,
      "explanation": "Privacy, security, and consent constraints can make existing data unavailable for model development.",
      "optionNotes": [
        "A is designed for accessible use.",
        "B is correct: governance creates practical scarcity.",
        "C is redundancy, not scarcity.",
        "D changes computation, not data access."
      ]
    },
    {
      "question": "What is datafication?",
      "options": [
        "Representing events or qualities as recorded variables",
        "Deleting numerical values",
        "Making every dataset public",
        "Converting labels into legal contracts"
      ],
      "answer": 0,
      "explanation": "Datafication turns phenomena such as friendship, preference, quality, or behavior into observable and analyzable signals.",
      "optionNotes": [
        "A is correct: it captures measurement and representation.",
        "B is the opposite of recording data.",
        "C is not required and may violate privacy.",
        "D is unrelated to analytical representation."
      ]
    },
    {
      "question": "What should be done before imputing a blank value according to the lecture's closing analogy?",
      "options": [
        "Assume it is zero",
        "Check provenance and other known sources to see whether the value exists elsewhere",
        "Delete the entire dataset",
        "Train a larger language model"
      ],
      "answer": 1,
      "explanation": "The absent-versus-missing analogy encourages searching other sheets, backups, or systems before treating the value as unavailable.",
      "optionNotes": [
        "A is wrong: zero is a substantive value and may introduce bias.",
        "B is correct: provenance can recover an absent value.",
        "C is disproportionate and destroys useful evidence.",
        "D does not resolve the source-data question."
      ]
    },
    {
      "question": "Which statement about the lecture's absent/missing distinction is safest?",
      "options": [
        "It is the only accepted statistical definition",
        "It is a useful course analogy but not universal missing-data terminology",
        "It proves all missing data is random",
        "It eliminates the need for provenance"
      ],
      "answer": 1,
      "explanation": "Mainstream statistics usually discusses missingness mechanisms such as MCAR, MAR, and MNAR; the lecture offers a provenance-oriented conceptual distinction.",
      "optionNotes": [
        "A is wrong: terminology varies and the analogy is course-specific.",
        "B is correct: it preserves the insight without overstating standardization.",
        "C is wrong: no mechanism was established.",
        "D is wrong: provenance is exactly what the analogy motivates."
      ]
    },
    {
      "question": "Which sequence best represents the learning loop implicit in the lecture?",
      "options": [
        "Collect anything → maximize accuracy → deploy forever",
        "Define decision → collect representative data → model → evaluate costs → obtain feedback → adapt",
        "Choose an algorithm → invent a problem",
        "Remove humans → ignore outcomes"
      ],
      "answer": 1,
      "explanation": "The examples consistently connect problem framing, data design, modeling, cost-aware evaluation, human oversight, and iterative improvement.",
      "optionNotes": [
        "A is wrong: indiscriminate collection and static deployment are unsafe.",
        "B is correct: it is the complete evidence-to-action loop.",
        "C is wrong: the decision problem should precede algorithm choice.",
        "D is wrong: the lecture repeatedly values human and outcome feedback."
      ]
    },
    {
      "question": "Which project design most faithfully applies the lecture?",
      "options": [
        "A defect detector evaluated only by accuracy",
        "A survey and anomaly system with subgroup checks, rare-event metrics, and human review",
        "A dashboard with no documented data source",
        "A recommender that never records outcomes"
      ],
      "answer": 1,
      "explanation": "This choice combines representative collection, provenance, imbalance-aware evaluation, and a feedback loop—the lecture's major themes.",
      "optionNotes": [
        "A is wrong: accuracy alone hides rare defects.",
        "B is correct: it integrates collection, metrics, and oversight.",
        "C is wrong: undocumented provenance undermines trust.",
        "D is wrong: without outcomes the strategy cannot be measured or improved."
      ]
    }
  ]
}
};
