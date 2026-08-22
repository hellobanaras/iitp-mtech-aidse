// One publication unit: English and Hindi are reviewed and rendered together.
export const eai6402Lecture20260822 = {
  "en": {
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
  },
  "hi": {
    "title": "मेटा-लर्निंग के सब्सट्रेट के रूप में डेटा",
    "lede": "उद्घाटन व्याख्यान केंद्रीय पाठ्यक्रम की समस्या के लिए डेटा संचालित निर्णय लेने से एक व्यावहारिक पुल का निर्माण करता है: कैसे एक सीखने की प्रणाली को व्यवहार करना चाहिए जब उपयोगी उदाहरण दुर्लभ, असंतुलित, लापता, संवेदनशील या महंगे होते हैं।",
    "instructionalInterval": "24:00–1:24:57 and 1:37:37–2:14:44",
    "reviewLevel": "रिकॉर्डिंग, टाइमटाम्प्ड ट्रांसक्रिप्ट और स्लाइड-फ्रेम सत्यापित",
    "coverage": [
      {
        "title": "पाठ्यक्रम लेंस",
        "body": "मेटा-लर्निंग को कुशलतापूर्वक सीखने की रणनीति के रूप में पेश किया जाता है, खासकर जब साधारण पर्यवेक्षण प्रशिक्षण में प्रचुर मात्रा में लेबल डेटा नहीं होता है।"
      },
      {
        "title": "डेटा मामलों क्यों",
        "body": "डेटा सूचित निर्णयों, गुणवत्ता निगरानी, कारण जांच, फीडबैक संचालित सुधार और सीमित संसाधनों का आवंटन का समर्थन करता है।"
      },
      {
        "title": "संग्रह आकार निष्कर्ष",
        "body": "हॉस्टल-मेनू और सार्वजनिक राजनीति उदाहरण बताते हैं कि कैसे मुक्त रूप से प्रतिक्रियाएं, गलत लक्ष्य दर्शक, या असंबद्ध नमूने भ्रामक प्रमुखता का उत्पादन कर सकते हैं।"
      },
      {
        "title": "डेटा उत्पाद",
        "body": "व्याख्यान सर्वेक्षण प्रकोप पूर्वानुमान, मार्ग और मौसम पूर्वानुमान, अनुशंसाकर्ता प्रणाली, भावना विश्लेषण, चिकित्सा सहायता और सॉफ्टवेयर-लॉग समस्या निवारण।"
      },
      {
        "title": "दुर्लभ घटनाओं और विसंगतियों",
        "body": "धोखाधड़ी और विनिर्माण दोष वर्ग असंतुलन, विसंगति का पता लगाने, और सावधानी से मीट्रिक और दुर्लभ सकारात्मक उदाहरणों के बारे में तर्क की जरूरत को प्रेरित करते हैं।"
      },
      {
        "title": "Scarcity मेटा लर्निंग को प्रेरित करता है",
        "body": "कुछ-शॉट, एक-शॉट और शून्य-शॉट सेटिंग्स वास्तविक बाधाओं जैसे गोपनीयता, सहमति, दुर्लभ विफलताओं और दुर्गम चिकित्सा या बैंकिंग डेटा से जुड़े हुए हैं।"
      }
    ],
    "takeaway": "एक सीखने की रणनीति केवल अपने डेटा उत्पन्न करने की प्रक्रिया के रूप में विश्वसनीय है - और मेटा-लर्निंग मूल्यवान हो जाता है जब यह प्रक्रिया पारंपरिक प्रशिक्षण के लिए पर्याप्त प्रतिनिधि उदाहरणों की आपूर्ति नहीं कर सकती है।",
    "slideTrail": [
      {
        "time": "24:00",
        "title": "उद्घाटन अभिविन्यास · व्याख्यान 1: डाटा साइंस का परिचय",
        "note": "पाठ्यक्रम का दायरा: मेटा-लर्निंग लेंस के माध्यम से एमएल, गहरी सीखने, एनएलपी, कंप्यूटर दृष्टि, रीइन्फोर्समेंट लर्निंग और गणितीय नींव को संशोधित करें।"
      },
      {
        "time": "24:30 · PDF p. 2/38",
        "title": "डेटा क्यों महत्वपूर्ण है?",
        "note": "लोगों के जीवन में सुधार करना, सूचित निर्णय लेना, गुणवत्ता की निगरानी करना और यह समझना कि रणनीति क्या काम करती है।"
      },
      {
        "time": "43:30 · PDF p. 3/38",
        "title": "डेटा क्यों महत्वपूर्ण है?",
        "note": "समस्याओं का कारण ढूंढें, अनुमान लगाना बंद करें और प्रभावी ढंग से महत्वपूर्ण संसाधनों का उपयोग करें।"
      },
      {
        "time": "52:30 · whiteboard",
        "title": "छात्रावास नाश्ता सर्वेक्षण",
        "note": "एक फ्री-टेक्स्ट फॉर्म कई विकल्पों में बदलाव के लिए 70 वोटों को विखंडित करता है, जो स्थिति के लिए 30 वोटों की अनुमति देता है।"
      },
      {
        "time": "1:07:30 · PDF p. 4/38",
        "title": "छात्रावास / डाटा और चुनाव में ऐड-ऑन मेनू",
        "note": "आवश्यकताएँ संदर्भ में भिन्न होती हैं; मतदान के लिए एक प्रासंगिक लक्ष्य आबादी, सार्थक स्तर और सावधानीपूर्वक व्याख्या की आवश्यकता होती है।"
      },
      {
        "time": "1:16:30 · PDF p. 7/38",
        "title": "क्या हम डेटा के साथ क्या कर सकते हैं?",
        "note": "प्रकोप अनुमान, अनुशंसाकर्ता प्रणाली, मार्ग भविष्यवाणी, निवेश निर्णय और मौसम पूर्वानुमान."
      },
      {
        "time": "1:23:30 · whiteboard",
        "title": "उपयोगकर्ता-item सिफारिश मैट्रिक्स",
        "note": "उपयोगकर्ताओं और फिल्मों के बीच ज्ञात बातचीत एक समान उपयोगकर्ता को एक अनदेखी आइटम की सिफारिश करने के लिए प्रेरित करती है।"
      },
      {
        "time": "1:40:30 · PDF p. 8/38",
        "title": "ओपिनियन खनन, निदान और लॉग समस्या निवारण",
        "note": "रेटिंग, टेक्स्ट, इमेज, वीडियो, मेडिकल साक्ष्य और परिचालन लॉग डेटा उत्पादों के लिए इनपुट बन जाते हैं।"
      },
      {
        "time": "1:43:30 · whiteboard",
        "title": "रेटिंग परिमाण बनाम रेटिंग गिनती",
        "note": "100 रेटिंग से 4.5 औसत और 1,000 रेटिंग से 4.2 औसत अलग-अलग सबूत लेते हैं; एक निर्णय दोनों पर विचार करना चाहिए।"
      },
      {
        "time": "2:01:30 · whiteboard",
        "title": "दुर्लभ दोष: नो-शॉट / कुछ-शॉट सेटिंग",
        "note": "लगातार चलने वाली उत्पादन लाइन केवल दोषपूर्ण नमूनों का एक मुट्ठी भर उत्पादन कर सकती है, जो साधारण प्रशिक्षण के लिए बहुत कम लेबल वाले एनोमाली डेटा को छोड़ देती है।"
      },
      {
        "time": "2:06:30 · whiteboard",
        "title": "मेटा-लर्निंग रणनीति के रूप में",
        "note": "प्रशिक्षक पदों मेटा-लर्निंग पार एमएल, गहरी शिक्षा, एनएलपी और कंप्यूटर दृष्टि डेटा कमी से निपटने के लिए एक रास्ता के रूप में।"
      },
      {
        "time": "2:11:00 · whiteboard",
        "title": "Absent डेटा बनाम लापता डेटा",
        "note": "एक पाठ्यक्रम-विशिष्ट अनुरूप सभी ज्ञात स्थानों पर उपलब्ध डेटा से आवश्यक स्थान पर अनुपस्थित डेटा को अलग करता है।"
      }
    ],
    "summary": [
      {
        "title": "1. पाठ्यक्रम डेटा समस्या से शुरू होता है",
        "sourceRefs": [
          "24:00–28:00",
          "उद्घाटन टिप्पणी",
          "PDF p. 2/38"
        ],
        "paragraphs": [
          "प्रशिक्षक एक मॉडल के बजाय रणनीति के रूप में मेटा-लर्निंग फ्रेम करता है। पाठ्यक्रम परिचित सीखने के प्रतिमानों को संशोधित करेगा-पर्यवेक्षित, असुरक्षित, रीइन्फोर्समेंट लर्निंग, प्रतिगमन, एसवीएम, तंत्रिका नेटवर्क, ट्रांसफॉर्मर और भाषा मॉडल-और पूछते हैं कि डेटा सीमित होने पर कैसे सीखना प्रभावी रह सकता है।",
          "कुछ-शॉट, एक-शॉट और शून्य-शॉट सेटिंग्स का पूर्वावलोकन किया जाता है, लेकिन यह पहली बैठक जानबूझकर एक स्तर से पहले शुरू होती है: क्या डेटा है, क्यों कम्प्यूटेशनल लर्निंग को संख्यात्मक प्रतिनिधित्व की आवश्यकता होती है, और किस तरीके में उदाहरण बनाए जाते हैं। छवियों, पाठ और अन्य संकेतों को अंततः उन्हें संसाधित करने के लिए एक मशीन के लिए संख्यात्मक रूप से कोडित किया जाना चाहिए।"
        ]
      },
      {
        "title": "2. डेटा एक निरीक्षण योग्य निर्णय में निर्णय लेता है",
        "sourceRefs": [
          "28:00–49:00",
          "PDF"
        ],
        "paragraphs": [
          "डेटा को जीवन में सुधार लाने और अनिश्चितता के तहत निर्णय लेने के लिए एक साधन के रूप में प्रस्तुत किया जाता है। उदाहरण छोटे किसानों, बाढ़ राहत, स्वास्थ्य देखभाल परीक्षण, चिकित्सा और खाद्य गुणवत्ता के लिए सिंचाई और मिट्टी-मंजिला निर्णय लेते हैं और दुर्लभ अस्पताल संसाधनों का निर्धारण करते हैं। साझा संरचना एक निर्णय, एक विश्वसनीय परिणाम है, और एक प्रतिक्रिया पथ है जो अगले निर्णय को बेहतर बनाता है।",
          "व्याख्यान समय, स्टाफ, बिस्तर, धन और संसाधनों के रूप में गणना भी करता है। एक महत्वपूर्ण रोगी आने पर एक कठोर प्रथम प्रथम प्रथम प्रथम प्रथम प्रथम प्रथम प्रथम प्रथम प्रथम-प्रथम संरक्षित नियम अनुपयुक्त हो सकता है; एक डाटा-इनफॉर्मेड सिस्टम को तात्कालिकता और लागत का प्रतिनिधित्व करना चाहिए, न केवल आगमन आदेश। यह एक प्रारंभिक संकेत है कि उद्देश्य डिजाइन और हितधारक मूल्य डेटा पाइपलाइन से अविभाज्य हैं।",
          "मानव प्रतिक्रिया नए डेटा की आपूर्ति करती है। उत्पाद विकल्प, पाठ्यक्रम प्रतिक्रिया और मॉडल-आउटपुट वरीयताओं को सेवा में सुधार के लिए लॉग इन किया जा सकता है। प्रशिक्षक एक मानव-in-the-loop चक्र की व्याख्या करने के लिए इसका उपयोग करता है: एक कार्रवाई का प्रस्ताव, एक प्रतिक्रिया का निरीक्षण करें, प्रभावशीलता को मापें और रणनीति को अपडेट करें।"
        ]
      },
      {
        "title": "3. खराब संग्रह डिजाइन गलत उत्तर बना सकता है",
        "sourceRefs": [
          "51:50–1:06:30",
          "छात्रावास सर्वेक्षण व्हाइटबोर्ड",
          "PDF p. 4/38"
        ],
        "paragraphs": [
          "एक छात्रावास हर दिन समोसे की सेवा करता है। 100 छात्रों की तीस उन्हें बनाए रखना चाहते हैं, जबकि 70 परिवर्तन चाहते हैं। यदि कोई फॉर्म प्रत्येक असंतुष्ट छात्र को एक फ्री-टेक्स्ट बॉक्स में किसी भी विकल्प में प्रवेश करने देता है, तो उनके वोट आईडीली, बडा पाव, सैंडविच और कई अन्य विकल्पों में विभाजित होते हैं। तब समोसा केवल 30 प्रतिशत के साथ जीत सकता है। परिणाम प्रतिक्रिया साधन को दर्शाता है, एक वास्तविक बहुमत वरीयता नहीं।",
          "एक दूसरा उदाहरण पूरे परिसर से पूछता है कि क्या लड़कियों की सुविधा में सुधार होना चाहिए। एक कुल बहुमत छिपा सकता है कि सीधे प्रभावित उपसमूह सर्वसम्मति से सुधार का समर्थन करता है। इसी तरह, सार्वजनिक सहायता के बारे में एक सर्वेक्षण यह जानने के बिना सार्थक नहीं है कि उत्तरदाता ग्रामीण या शहरी हैं, उनके आयु वर्ग, लैंगिक और आर्थिक संदर्भ।"
        ],
        "points": [
          "प्रतिक्रिया एकत्र करने से पहले लक्ष्य आबादी को परिभाषित करें।",
          "जवाब विकल्प है कि निर्णय किया जा रहा मैच चुनें।",
          "जब उपसमूह प्रासंगिकता या प्रचलितता में भिन्न होते हैं तो स्ट्रेटिफिकेशन या उचित भार का उपयोग करें।",
          "डोमेन विशेषज्ञता को संरक्षित करें: किसान, चिकित्सक, ऑपरेटर, और प्रभावित उपयोगकर्ता ज्ञान लेते हैं कि एक कच्ची तालिका कोडित नहीं है।"
        ]
      },
      {
        "title": "4. डेटा उत्पाद अवलोकनों को कार्रवाई में परिवर्तित करते हैं",
        "sourceRefs": [
          "1:07:00–1:24:57",
          "1:37:37–1:51:30",
          "पीडीएफ पृ. 7-8/38"
        ],
        "paragraphs": [
          "व्याख्यान सर्वेक्षण अनुप्रयोगों में शामिल हैं जिनमें प्रकोप और मौसम अनुमान, यातायात-एवेयर रूटिंग, सिफारिश, भावना विश्लेषण, चिकित्सा समर्थन और सॉफ्टवेयर-लॉग समस्या निवारण शामिल हैं। हर मामले में, उपयोगी कलाकृति डेटासेट नहीं बल्कि एक स्थान पर विकल्प, अलर्ट, पूर्वानुमान, निदान सहायता, या स्पष्टीकरण है कि एक कार्रवाई बदल जाता है।",
          "अनुशंसाकर्ता उदाहरण उपयोगकर्ता-item मैट्रिक्स का उपयोग करता है। यदि उपयोगकर्ता बातचीत पैटर्न साझा करते हैं, तो एक उपयोगकर्ता द्वारा पसंद किया गया एक आइटम, लेकिन एक समान उपयोगकर्ता द्वारा अनदेखा एक उम्मीदवार की सिफारिश बन जाता है। प्रशिक्षक इसे जनसांख्यिकीय विशेषताओं और स्पष्ट प्रतिक्रिया से जोड़ता है, जबकि विपणन निर्णयों के व्यावसायिक और सांस्कृतिक संदर्भ को भी ध्यान में रखते हुए।",
          "ओपिनियन खनन असत सितारों, निरंतर रेटिंग, पाठ समीक्षा, फोटोग्राफ, ऑडियो और वीडियो को जोड़ सकता है। यह बहुमॉडल सबूत है। रेटिंग उदाहरण एक महत्वपूर्ण सांख्यिकीय बिंदु बनाता है: इसके नमूना आकार के बिना एक औसत स्कोर अधूरा है। अब तक अधिक अवलोकनों द्वारा समर्थित थोड़ा कम स्कोर एक सुरक्षित विकल्प हो सकता है, जो वैरिएशन, रीडेंसी और चयन पूर्वाग्रह के आधार पर हो सकता है।"
        ]
      },
      {
        "title": "5. दुर्लभ परिणाम नौसेना प्रशिक्षण और मूल्यांकन को तोड़ते हैं",
        "sourceRefs": [
          "1:51:30–2:03:00",
          "PDF p. 8/38",
          "दुर्लभ दोष व्हाइटबोर्ड"
        ],
        "paragraphs": [
          "धोखाधड़ी निगरानी और चिकित्सा विनिर्माण गंभीर वर्ग असंतुलन को दर्शाता है। सिस्टम लाखों वैध लेनदेन या टैबलेट और केवल कुछ धोखाधड़ी या दोषपूर्ण मामलों का निरीक्षण कर सकता है। हर बार बहुमत वर्ग की भविष्यवाणी करने के लिए इसलिए पूरी तरह से परिचालन लक्ष्य विफल रहते हुए उत्कृष्ट सटीकता प्राप्त कर सकते हैं।",
          "व्याख्यान असुरक्षित विसंगत पता लगाने का परिचय देता है: साधारण डेटा और ध्वज अवलोकनों की संरचना को जानें जो फिट नहीं हैं। यह उपयोगी है जब लेबल दोष बहुत दुर्लभ या बहुत विविध हैं। अभ्यास में, थ्रेसहोल्ड को झूठे नकारात्मक और झूठे सकारात्मक की लागत को प्रतिबिंबित करना चाहिए, और आमतौर पर परिणामी चेतावनी के लिए मानव समीक्षा आवश्यक होती है।"
        ],
        "formula": "Accuracy = (TP + TN) / (TP + TN + FP + FN) · Recall = TP / (TP + FN) · Precision = TP / (TP + FP)"
      },
      {
        "title": "6. डेटा कमी मेटा-लर्निंग के लिए पुल है",
        "sourceRefs": [
          "2:03:00–2:11:00",
          "मेटा-लर्निंग व्हाइटबोर्ड"
        ],
        "paragraphs": [
          "प्रशिक्षक मेटा-लर्निंग को स्थान देता है जहां कहीं भी सीखने की प्रक्रिया को अपर्याप्त कार्य-विशिष्ट डेटा के साथ अनुकूल होना चाहिए। Scarcity न केवल संग्रह लागत का मामला है। बैंकिंग हस्ताक्षर, मेडिकल रिकॉर्ड और फेस इमेज मौजूद हो सकते हैं लेकिन अनुपलब्ध रहते हैं क्योंकि वे संवेदनशील, निजी या सहमति की आवश्यकता होती है। दुर्लभ आपदाओं और दोषों में केवल कुछ ऐतिहासिक उदाहरण हो सकते हैं।",
          "यह कार्यों में सीखने को प्रेरित करता है ताकि ज्ञान ने पहले अधिग्रहण किया एक नए कार्य को एक छोटे से समर्थन सेट से अनुकूलित करने में मदद करता है। व्याख्यान एल्गोरिदम और गणितीय नींव के भविष्य के उपचार का वादा करता है; इस स्तर पर, आवश्यक विचार यह है कि सिस्टम को स्क्रैच से हर नई समस्या को फिट करने के बजाय पुन: प्रयोज्य सीखने की रणनीति सीखना चाहिए।"
        ]
      },
      {
        "title": "7. Absent बनाम लापता डेटा - और क्या आगे ले जाने के लिए",
        "sourceRefs": [
          "2:11:00–2:14:44",
          "क्लोजिंग व्हाइटबोर्ड"
        ],
        "paragraphs": [
          "प्रशिक्षक एक अनुरूप के साथ बंद हो जाता है: एक अनुपस्थित छात्र पता लगाने योग्य है लेकिन अपेक्षित स्थान पर नहीं, जबकि किसी भी ज्ञात स्थान पर एक लापता छात्र नहीं पाया जा सकता है। स्प्रेडशीट के लिए लागू, वर्तमान शीट से एक मूल्य अनुपस्थित हो सकता है, फिर भी किसी अन्य स्रोत से पुनर्प्राप्त किया जा सकता है, जबकि वास्तविक रूप से लापता मूल्य ज्ञात स्रोतों में अनुपलब्ध है।",
          "इसे सार्वभौमिक सांख्यिकीय शब्दावली के बजाय प्रशिक्षक के वैचारिक भेद के रूप में माना जाता है। मुख्यधारा के लापता-डाटा विश्लेषण में, लापताता आमतौर पर MCAR, MAR और MNAR जैसे तंत्रों द्वारा वर्णित की जाती है। टिकाऊ पाठ अभी भी मूल्यवान है: खाली, खोज सिद्धि को लागू करने से पहले और निर्धारित करें कि क्या मूल्य कहीं और मौजूद है।"
        ]
      }
    ],
    "courseSignals": {
      "assignments": [
        {
          "time": "2:14:17",
          "title": "प्रश्नोत्तरी-आधारित आकलन पैटर्न",
          "detail": "प्रशिक्षक ने कहा कि परीक्षा और असाइनमेंट पैटर्न प्रश्नोत्तरी-उन्मुख है; इस व्याख्यान में कोई अलग टेक-होम असाइनमेंट जारी नहीं किया गया था।"
        }
      ],
      "homework": [],
      "labs": [
        {
          "time": "2:13:13",
          "title": "तीन या चार हाथ सत्रों की योजना बनाई",
          "detail": "प्रशिक्षक हर सप्ताह एक व्यावहारिक के बजाय पाठ्यक्रम के दौरान हाथों पर या कोडिंग / समस्या सत्र की एक छोटी संख्या की उम्मीद करता है।"
        }
      ],
      "projects": [
        {
          "time": "2:13:36",
          "title": "वैकल्पिक परियोजना चर्चा",
          "detail": "अतिरिक्त परियोजना या व्यावहारिक कार्य में रुचि रखने वाले छात्रों को एक अलग चर्चा के लिए प्रशिक्षक से संपर्क करने के लिए आमंत्रित किया गया था; कोई अनिवार्य परियोजना सौंपा गया था।"
        }
      ],
      "references": [],
      "studentQuestions": [
        {
          "time": "2:13:02",
          "question": "क्या पाठ्यक्रम में व्यावहारिक सत्र शामिल होंगे?",
          "response": "हाँ। प्रशिक्षक लगभग तीन या चार हाथों पर, कोडिंग या समर्पित समस्या सत्र की योजना बना रहा है, और वैकल्पिक परियोजना के लिए अलग से काम करने के लिए खुला है।"
        }
      ]
    },
    "keyTerms": [
      {
        "term": "Meta-learning",
        "definition": "इसलिए एक प्रणाली एक नए कार्य पर कुशलतापूर्वक एक मॉडल को प्राप्त या अनुकूलित कर सकती है।"
      },
      {
        "term": "Few-shot learning",
        "definition": "केवल एक छोटी संख्या में लेबल वाले उदाहरणों का उपयोग करके एक नए वर्ग या कार्य को अनुकूलित करना।"
      },
      {
        "term": "One-shot learning",
        "definition": "प्रति वर्ग या कार्य शर्त एक लेबल उदाहरण के साथ एक विशेष कुछ-शॉट सेटिंग।"
      },
      {
        "term": "शून्य-शॉट लर्निंग",
        "definition": "एक अनदेखी कार्य को हल करना या बिना कार्य-विशिष्ट लेबल वाले उदाहरणों के बिना अनदेखी कक्षाओं को पहचानना, आमतौर पर विवरण, पूर्व निर्धारित ज्ञान, या अर्थिक संरचना का उपयोग करके।"
      },
      {
        "term": "लक्ष्य जनसंख्या",
        "definition": "पूर्ण समूह जिसके बारे में एक अध्ययन एक निष्कर्ष बनाने का इरादा रखता है।"
      },
      {
        "term": "एकीकृत नमूना",
        "definition": "एक जनसंख्या को सार्थक उपसमूहों में विभाजित करना और कवरेज या परिशुद्धता में सुधार के लिए प्रत्येक के भीतर नमूना करना।"
      },
      {
        "term": "लूप में मानव",
        "definition": "एक कार्यप्रवाह जिसमें मानव निर्णय, सुधार या अनुमोदन प्रशिक्षण या निर्णय नियंत्रण का हिस्सा बन जाते हैं।"
      },
      {
        "term": "सिफारिश प्रणाली",
        "definition": "एक प्रणाली जो बातचीत, सामग्री, संदर्भ, या समानता संकेतों का उपयोग करके उपयोगकर्ता के लिए आइटम को पुनर्प्राप्त और रैंक करती है।"
      },
      {
        "term": "ओपिनियन खनन",
        "definition": "लोगों की व्यक्त प्रतिक्रिया से भावनाओं, प्राथमिकताओं या चिंताओं जैसे संरचित संकेतों को निकालना।"
      },
      {
        "term": "मल्टीमोडल डेटा",
        "definition": "साक्ष्य इस तरह के पाठ, छवियों, ऑडियो, वीडियो, और संख्यात्मक संकेतों के रूप में एक से अधिक modality फैले।"
      },
      {
        "term": "क्लास असंतुलन",
        "definition": "एक लेबल वितरण जिसमें एक वर्ग दूसरे की तुलना में काफी दुर्लभ है।"
      },
      {
        "term": "Anomaly का पता लगाने",
        "definition": "टिप्पणियों की पहचान करना जिसका पैटर्न उम्मीद या सामान्य व्यवहार से भौतिक रूप से भिन्न होता है।"
      },
      {
        "term": "डाटाबेस",
        "definition": "घटनाओं, व्यवहारों या गुणों को रिकॉर्ड किए गए चरों में बदलना जिन्हें संग्रहीत और विश्लेषण किया जा सकता है।"
      },
      {
        "term": "डेटा सिद्धि",
        "definition": "जहां एक डैम से आया इतिहास, यह कैसे एकत्र किया गया था, और यह कैसे बदल गया था।"
      }
    ],
    "insights": [
      {
        "label": "डिजाइन अंतर्दृष्टि",
        "title": "प्रश्नावली पहले से ही मॉडल का हिस्सा है",
        "body": "एक एल्गोरिथ्म से पहले एक टेबल देखता है, सर्वेक्षण के दर्शकों, शब्दकरण, प्रतिक्रिया विकल्प और नमूना योजना पहले से ही कोडित धारणाएं हैं। फ़ीचर इंजीनियरिंग डेटा निर्माण पर शुरू होता है, नोटबुक में नहीं।"
      },
      {
        "label": "तकनीकी बारीकी",
        "title": "मेटा-लर्निंग डेटा कमी की तुलना में व्यापक है",
        "body": "Scarcity एक मजबूत प्रेरणा है, लेकिन मेटा-लर्निंग भी तेजी से अनुकूलन को लक्षित करता है, कार्य वितरण, हाइपरपैरामीटर या ऑप्टिमाइज़र लर्निंग, और निरंतर सुधार को स्थानांतरित करता है। यह अनुकूलन प्रक्रिया सीखने के रूप में सबसे अच्छा समझा जाता है।"
      },
      {
        "label": "शब्दावली जांच",
        "title": "शून्य-shot का मतलब नहीं है शून्य जानकारी",
        "body": "एक शून्य-शॉट शिक्षार्थी को लक्ष्य कार्य के लिए कोई लेबलित उदाहरण नहीं मिलता है, लेकिन यह अभी भी पूर्व प्रशिक्षण, एक कार्य विवरण, लेबल semantics, संकेत, या संरचना का दूसरा स्रोत पर निर्भर करता है। 'कोई लक्ष्य उदाहरण' 'कोई डेटा नहीं' से अधिक सटीक है।"
      },
      {
        "label": "मूल्यांकन",
        "title": "सटीकता एक बेकार दुर्लभ घटना मॉडल को पुरस्कृत कर सकती है",
        "body": "यदि दोष 0.01% उत्पादों में होते हैं, तो अनुमान लगाया जाता है कि 'सामान्य' हमेशा 99.99% सटीक है और कुछ भी नहीं पता चलता है। रिपोर्ट याद, सटीक, झूठी अलार्म दर, थ्रेसहोल्ड व्यवहार और प्रत्येक गलती की व्यावसायिक लागत।"
      },
      {
        "label": "विधि nuance",
        "title": "सामान्य प्रशिक्षण अक्सर नवीनता का पता लगाने कहा जाता है",
        "body": "व्याख्यान यह unsupervised anomaly पता लगाने के तहत समूहों। एक उपयोगी सूक्ष्म अंतर है: बाहरी पहचान प्रशिक्षण डेटा में प्रदूषण की उम्मीद करती है, जबकि स्वच्छ सामान्य उदाहरणों पर नवीनता का पता लगाने की ट्रेनें और भविष्य के अवलोकनों का परीक्षण करती हैं।"
      },
      {
        "label": "प्रशासन अंतर्दृष्टि",
        "title": "प्रतिक्रिया लूप्स को सहमति और पूर्वाग्रह नियंत्रण की आवश्यकता होती है",
        "body": "क्लिक्स और प्राथमिकताएं निजीकरण में सुधार कर सकती हैं, लेकिन वे एक्सपोज़र पूर्वाग्रह को भी बढ़ाते हैं और गोपनीयता जोखिम पैदा करते हैं। एक उत्पादन पाश को अनुमति, प्रतिधारण, उपसमूह प्रदर्शन और स्वचालित निर्णयों को ओवरराइड करने या लड़ने का एक तरीका होना चाहिए।"
      },
      {
        "label": "अध्ययन कनेक्शन",
        "title": "व्याख्यान चुपचाप एक पूर्ण एमएल उत्पाद पाश परिभाषित करता है",
        "body": "निर्णय को परिभाषित करें, प्रतिनिधि साक्ष्य एकत्र करें, डेटाफी यह एक मॉडल फिट करें, लागत-जाने वाले मीट्रिक चुनें, मानव को नियंत्रण में रखें, परिणामों का निरीक्षण करें, और अनुकूलन करें। बाद में मेटा-लर्निंग एल्गोरिदम इस बड़े सिस्टम का केवल एक हिस्सा है।"
      }
    ],
    "resources": [
      {
        "type": "देखो",
        "title": "CS330 व्याख्यान 1 - परिचय और अवलोकन",
        "creator": "Stanford Online · Chelsea Finn",
        "why": "कार्यों, सामान्यीकरण और बहु-कार्य और मेटा-लर्निंग पदार्थ के लिए एक कठोर पाठ्यक्रम-स्तर का परिचय।",
        "url": "https://www.youtube.com/watch?v=0rZtSwNOTQo"
      },
      {
        "type": "कागज",
        "title": "डीप नेटवर्क के तेजी से अनुकूलन के लिए मॉडल-Agnostic मेटा-लर्निंग",
        "creator": "Finn, Abbeel & Levine",
        "why": "कैनोनिकल ऑप्टिमाइज़ेशन-आधारित फॉर्मूलेशन: उन मापदंडों को सीखते हैं जो केवल कुछ क्रमिक चरणों के बाद अच्छी तरह से अनुकूल होते हैं।",
        "url": "https://arxiv.org/abs/1703.03400"
      },
      {
        "type": "कागज",
        "title": "Few-shot लर्निंग के लिए प्रोटोटाइप नेटवर्क",
        "creator": "Snell, Swersky & Zemel",
        "why": "एक स्वच्छ मीट्रिक लर्निंग दृष्टिकोण जो कक्षा प्रोटोटाइप की दूरी से प्रश्नों को वर्गीकृत करता है।",
        "url": "https://arxiv.org/abs/1703.05175"
      },
      {
        "type": "इंटरेक्टिव कोर्स",
        "title": "क्लास असंतुलित डेटासेट",
        "creator": "Google Machine Learning Crash Course",
        "why": "समझाओ क्यों गंभीर असंतुलन बाधा प्रशिक्षण और downsampling और upweighting परिचय.",
        "url": "https://developers.google.com/machine-learning/crash-course/overfitting/imbalanced-datasets"
      },
      {
        "type": "संदर्भ",
        "title": "सटीकता, याद, परिशुद्धता और संबंधित मीट्रिक",
        "creator": "Google for Developers",
        "why": "इसका उपयोग व्याख्याता के दुर्लभ आविष्कार के उदाहरण को समझने योग्य मूल्यांकन विकल्पों में बदलने के लिए किया जाता है।",
        "url": "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall"
      },
      {
        "type": "संदर्भ",
        "title": "नवीनता और बाहरी जांच",
        "creator": "scikit-learn User Guide",
        "why": "शब्दावली को स्पष्ट करता है और व्यावहारिक अलगाव वन, एलओएफ और वन-क्लास एसवीएम प्रवेश बिंदु प्रदान करता है।",
        "url": "https://scikit-learn.org/stable/modules/outlier_detection.html"
      },
      {
        "type": "पाठ्यक्रम",
        "title": "सिफारिश प्रणाली",
        "creator": "Google for Developers",
        "why": "उपयोगकर्ता-item स्केच को उम्मीदवार पीढ़ी, स्कोरिंग, पुनः रैंकिंग, एम्बेडिंग और मैट्रिक्स फैक्टराइजेशन में विस्तारित करता है।",
        "url": "https://developers.google.com/machine-learning/recommendation"
      },
      {
        "type": "संदर्भ",
        "title": "सैम्पलिंग स्कीम का चयन करना",
        "creator": "NIST/SEMATECH e-Handbook",
        "why": "व्याख्यान के सर्वेक्षण के उदाहरणों को यादृच्छिककरण, स्तरीकरण, परिशुद्धता और व्यवस्थित आतंक नियंत्रण से जोड़ता है।",
        "url": "https://itl.nist.gov/div898/handbook/ppc/section3/ppc332.htm"
      },
      {
        "type": "डेटासेट",
        "title": "टीएलसी ट्रिप रिकॉर्ड डेटा",
        "creator": "NYC Taxi & Limousine Commission",
        "why": "डेटा प्रोफाइलिंग, विभाजन, anomaly खोज और निर्णय उन्मुख विश्लेषण के अभ्यास के लिए एक बड़ा, दस्तावेज सार्वजनिक डेटासेट।",
        "url": "https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page"
      }
    ],
    "quiz": [
      {
        "question": "मेटा-लर्निंग का व्याख्यान क्या है?",
        "options": [
          "एक एकल तंत्रिका नेटवर्क वास्तुकला",
          "सीखने और अनुकूलन के लिए एक रणनीति, विशेष रूप से डेटा कमी के तहत",
          "डेटाबेस संपीड़न विधि",
          "सभी सुपरवाइज़्ड लर्निंग के लिए प्रतिस्थापन"
        ],
        "answer": 1,
        "explanation": "प्रशिक्षक बार-बार मेटा-लर्निंग को एक रणनीति के रूप में वर्णित करता है जो एल्गोरिदम और एप्लिकेशन डोमेन में कटौती कर सकता है, जिसमें मुख्य प्रेरणा के रूप में दुर्लभ कार्य-विशिष्ट डेटा है।",
        "optionNotes": [
          "एक गलत है: कोई भी वास्तुकला क्षेत्र को परिभाषित नहीं करती है।",
          "B सही है: यह क्रॉस कटिंग रणनीति और कमी प्रेरणा दोनों को कैप्चर करता है।",
          "C गलत है: भंडारण संपीड़न कोर्स फ़्रेमिंग से संबंधित नहीं है।",
          "डी गलत है: मेटा-लर्निंग ने इसे खत्म करने के बजाय पर्यवेक्षकीय सीखने को शामिल किया है।"
        ]
      },
      {
        "question": "कौन सा बयान सबसे अच्छा उद्घाटन अवलोकन में अनसुपरवाइज़्ड लर्निंग की निगरानी से अलग है?",
        "options": [
          "पर्यवेक्षित शिक्षा लेबल का उपयोग करती है; असुरक्षित शिक्षा लक्ष्य लेबल पर भरोसा नहीं करती है",
          "पर्यवेक्षित शिक्षा छवियों का उपयोग करती है; असुरक्षित शिक्षा पाठ का उपयोग करती है",
          "पर्यवेक्षित शिक्षा हमेशा गहरी शिक्षा है",
          "अनसुपरवाइज़्ड लर्निंग के लिए अधिक लेबल की आवश्यकता होती है"
        ],
        "answer": 0,
        "explanation": "प्रस्तुत किया गया भेद लेबल की जानकारी की उपलब्धता है, न कि आधुनिकता, मॉडल परिवार, या लेबल की मात्रा।",
        "optionNotes": [
          "A सही है: लेबल इस अवलोकन में परिभाषित विपरीत हैं।",
          "B गलत है: या तो प्रतिमान छवियों या पाठ का उपयोग कर सकता है।",
          "C गलत है: निगरानी मॉडल में रैखिक और अन्य गैर-डीप विधियां शामिल हैं।",
          "डी गलत है: अनसुपरवाइज़्ड लर्निंग को परिभाषा के अनुसार लक्ष्य लेबल की आवश्यकता नहीं है।"
        ]
      },
      {
        "question": "क्यों बाढ़ प्रतिक्रिया कुछ शॉट सीखने को प्रेरित कर सकते हैं?",
        "options": [
          "बाढ़ डेटा हमेशा पूरी तरह से लेबल किया जाता है",
          "एक दुर्लभ या पहली बार क्षेत्रीय घटना कम प्रासंगिक ऐतिहासिक डेटा हो सकता है",
          "कुछ-शॉट लर्निंग निर्णयों की आवश्यकता को समाप्त करता है",
          "मौसम चर को संख्यात्मक रूप से प्रदर्शित नहीं किया जा सकता है"
        ],
        "answer": 1,
        "explanation": "एक असामान्य घटना का सामना करने वाले क्षेत्र में केवल तुलनात्मक मामलों की एक छोटी संख्या हो सकती है, इसलिए एक प्रणाली को ज्ञान का पुन: उपयोग करना चाहिए और सीमित सबूतों से अनुकूल होना चाहिए।",
        "optionNotes": [
          "गलत है: लेबल और इतिहास अधूरे हो सकते हैं।",
          "B सही है: दुर्लभ स्थानीय मिसालें कमी पैदा करती हैं।",
          "C गलत है: लक्ष्य निर्णयों का समर्थन करना है, उन्हें दूर नहीं करना है।",
          "D गलत है: मौसम संकेत नियमित रूप से मात्रात्मक होते हैं।"
        ]
      },
      {
        "question": "क्या खामियों ने समोसा के पक्ष में छात्रावास के नाश्ते का चुनाव किया?",
        "options": [
          "नमूने में कई समोसा समर्थक शामिल थे।",
          "वैकल्पिक वरीयताओं को एक अप्रतिबंधित पाठ क्षेत्र द्वारा खंडित किया गया था",
          "छात्रों को वोट करने की अनुमति नहीं थी",
          "फॉर्म का इस्तेमाल संख्यात्मक डेटा"
        ],
        "answer": 1,
        "explanation": "तीस स्टेटस-quo वोट एक श्रेणी में रहते हैं, जबकि 70 परिवर्तन वोट कई स्वतंत्र रूप से प्रवेश विकल्पों में विभाजित होते हैं। उपकरण ने स्पष्ट विजेता को बदल दिया।",
        "optionNotes": [
          "एक गलत है: 30 100 छात्रों की अल्पसंख्यकता थी।",
          "B सही है: प्रतिक्रिया विकल्प डिजाइन बहुमत वरीयता खंडित।",
          "C गलत है: छात्रों ने मतदान किया।",
          "D गलत है: संख्यात्मक प्रतिनिधित्व पूर्वाग्रह का स्रोत नहीं था।"
        ]
      },
      {
        "question": "सुविधाओं के सर्वेक्षण उदाहरण में, समग्र बहुमत अपर्याप्त क्यों है?",
        "options": [
          "हर उपसमूह समान रूप से प्रभावित होता है",
          "सीधे प्रभावित उपसमूह को कुल मिलाकर प्रस्तुत किया जा सकता है",
          "बहुमत वोट हमेशा अमान्य होते हैं",
          "स्ट्रैटिफिकेशन सभी अनिश्चितता को हटा देता है"
        ],
        "answer": 1,
        "explanation": "उत्तरदाताओं द्वारा जो सीधे प्रभावित नहीं होते हैं, उनमें प्रासंगिक आबादी की जरूरतों को मुखौटा कर सकते हैं। परिणाम संदर्भ में स्पष्ट और व्याख्यात्मक होना चाहिए।",
        "optionNotes": [
          "एक गलत है: प्रभाव उपसमूह द्वारा भिन्न होता है।",
          "B सही है: प्रासंगिकता और प्रतिनिधित्व का मामला।",
          "C गलत है: जब डिजाइन निर्णय से मेल खाता है तो प्रमुखता अनौपचारिक हो सकती है।",
          "डी गलत है: स्तरीकरण विश्लेषण में सुधार करता है लेकिन अनिश्चितता को समाप्त नहीं करता है।"
        ]
      },
      {
        "question": "यहां स्ट्रैटिफाइड सैंपलिंग का प्राथमिक उद्देश्य क्या है?",
        "options": [
          "एक वांछित परिणाम की गारंटी के लिए",
          "अर्थपूर्ण उपसमूहों का प्रतिनिधित्व करने और व्यवस्थित कवरेज समस्याओं को कम करने के लिए",
          "डोमेन ज्ञान की जगह",
          "केवल सबसे बड़ा उपसमूह इकट्ठा करने के लिए"
        ],
        "answer": 1,
        "explanation": "स्ट्राटा जैसे स्थान, आयु, लैंगिक या आर्थिक संदर्भ निर्णय के लिए प्रासंगिक समूहों को दर्शाता है।",
        "optionNotes": [
          "एक गलत है: नमूने को निष्कर्ष को पूर्व निर्धारित नहीं करना चाहिए।",
          "B सही है: उपसमूह कवरेज और परिशुद्धता लक्ष्य हैं।",
          "C गलत है: डोमेन ज्ञान उपयोगी strata को परिभाषित करने में मदद करता है।",
          "D गलत है: छोटे समूहों को अनदेखा करने से स्ट्रैटिफिकेशन को हरा दिया जाता है।"
        ]
      },
      {
        "question": "किस मद को विधिवत निर्णय प्रणाली में सीमित संसाधन के रूप में माना जा सकता है?",
        "options": [
          "केवल पैसे",
          "केवल भौतिक सूची",
          "समय, स्टाफ, बेड, पैसे और गणना",
          "कुछ measurable"
        ],
        "answer": 2,
        "explanation": "व्याख्यान भौतिक वस्तुओं से परे संसाधन उपयोग को बढ़ाता है; अस्पताल के समय और क्षमता स्पष्ट उदाहरण हैं।",
        "optionNotes": [
          "एक गलत है: पैसा केवल एक संसाधन है।",
          "B गलत है: गैर-भौतिक क्षमता भी मायने रखती है।",
          "C सही है: सभी एक परिचालन निर्णय को बाधित कर सकते हैं।",
          "D गलत है: इन संसाधनों को मापा जा सकता है, हालांकि वास्तव में।"
        ]
      },
      {
        "question": "पूरी तरह से स्वचालित से एक मानव-in-the-loop प्रणाली क्या अलग है?",
        "options": [
          "यह कभी मॉडल का उपयोग नहीं करता",
          "मानव निर्णय या अनुमोदन सीखने या नियंत्रण में फ़ीड",
          "यह फीडबैक स्टोर नहीं कर सकता",
          "यह हमेशा हर उपयोगकर्ता को समान प्रश्न पूछता है"
        ],
        "answer": 1,
        "explanation": "मानव चयन, सुधार, या अनुमोदन प्रक्रिया में फीडबैक सिग्नल या सुरक्षा द्वार बन जाते हैं।",
        "optionNotes": [
          "एक गलत है: मानव-इन-द-लूप सिस्टम आमतौर पर मॉडल का उपयोग करते हैं।",
          "बी सही है: मानव इनपुट फीडबैक या नियंत्रण लूप को बंद कर देता है।",
          "C गलत है: लॉग प्रतिक्रिया अक्सर केंद्रीय होती है।",
          "डी गलत है: बातचीत अनुकूली और चयनात्मक हो सकती है।"
        ]
      },
      {
        "question": "व्याख्यान में उपयोगकर्ता-item मैट्रिक्स क्या प्रतिनिधित्व करता है?",
        "options": [
          "उपयोगकर्ताओं और फिल्मों या उत्पादों के बीच पारस्परिक क्रिया",
          "केवल उपयोगकर्ता जनसांख्यिकी",
          "एक अनुशंसाकर्ता का स्रोत कोड",
          "धोखाधड़ी के लिए भ्रम की स्थिति"
        ],
        "answer": 0,
        "explanation": "पंक्तियों और स्तंभों में उपयोगकर्ताओं और वस्तुओं को कोडित किया जाता है, जिसमें अनसाइन वस्तुओं की सिफारिश करने के लिए सबूत प्रदान किए जाते हैं।",
        "optionNotes": [
          "A सही है: यह मानक इंटरेक्शन-मैट्रिक्स अमूर्तता है।",
          "B गलत है: जनसांख्यिकी पक्ष की जानकारी हो सकती है लेकिन मैट्रिक्स स्वयं नहीं हैं।",
          "C गलत है: एक मैट्रिक्स डेटा है, स्रोत कोड नहीं है।",
          "डी गलत है: एक भ्रम मैट्रिक्स वर्गीकरण को संक्षेप में प्रस्तुत करता है, प्राथमिकता नहीं है।"
        ]
      },
      {
        "question": "क्यों 1,000 लोगों से 4.2 रेटिंग स्वचालित रूप से 4.5 से 100 तक खराब नहीं है?",
        "options": [
          "औसत रेटिंग कभी कोई फर्क नहीं पड़ता",
          "टिप्पणियों की गिनती को प्रभावित करती है कि कितना सबूत अनुमान का समर्थन करता है",
          "बड़े नमूने हमेशा उच्च औसत होते हैं",
          "4.2 स्कोर गणितीय रूप से बड़ा है"
        ],
        "answer": 1,
        "explanation": "इसका मतलब नमूना आकार, अनिश्चितता, पूर्वाग्रह और पुनरावृत्ति के साथ व्याख्या किया जाना चाहिए। जब औसत थोड़ा कम होता है तो भी अधिक रेटिंग अधिक स्थिर अनुमान प्रदान कर सकती है।",
        "optionNotes": [
          "एक गलत है: औसत संदर्भ के साथ उपयोगी हो सकता है।",
          "B सही है: समर्थन और अनिश्चितता अलग है।",
          "C गलत है: नमूना आकार एक उच्च मतलब को मजबूर नहीं करता है।",
          "D गलत है: 4.2 4.5 से छोटा है।"
        ]
      },
      {
        "question": "कौन सा संग्रह वास्तव में मल्टीमॉडल है?",
        "options": [
          "संख्यात्मक सेंसर रीडिंग के पांच स्तंभ",
          "पाठ समीक्षा प्लस फोटो, वीडियो और ऑडियो",
          "केवल स्टार रेटिंग",
          "टाइमस्टैम्प्स की सूची"
        ],
        "answer": 1,
        "explanation": "मल्टीमोडल डेटा भाषा, दृष्टि और ऑडियो जैसे विशिष्ट मोडलिटी को जोड़ती है।",
        "optionNotes": [
          "A multivariate लेकिन अभी भी एक संख्यात्मक modality है।",
          "B सही है: यह पाठ, छवि, वीडियो और ऑडियो को जोड़ती है।",
          "C एक एकल संरचित modality है।",
          "डी एक एकल अस्थायी / संख्यात्मक प्रतिनिधित्व है।"
        ]
      },
      {
        "question": "राय खनन में, 'खनन' का क्या मतलब है?",
        "options": [
          "राय देना",
          "व्यक्त फीडबैक से संरचित ज्ञान को निकालना",
          "केवल सकारात्मक समीक्षा एकत्र करना",
          "ग्राहक टिप्पणियों को एन्क्रिप्ट करना"
        ],
        "answer": 1,
        "explanation": "व्याख्यान खनन का उपयोग डेटा से उपयोगी ज्ञान इकट्ठा करने के लिए करता है - इस मामले में लोगों की राय।",
        "optionNotes": [
          "एक गलत है: निष्कर्षण नहीं है।",
          "B सही है: यह विश्लेषणात्मक लक्ष्य को कैप्चर करता है।",
          "C गलत है: नकारात्मक और तटस्थ सबूत भी मायने रखते हैं।",
          "डी गलत है: एन्क्रिप्शन एक सुरक्षा संचालन है, राय खनन नहीं है।"
        ]
      },
      {
        "question": "चिकित्सा उदाहरणों में एआई की इच्छित भूमिका क्या है?",
        "options": [
          "हर चिकित्सक को बदलें",
          "पेशेवर निरीक्षण के तहत ट्रेज, कैप्शन, सारांश या ड्राफ्ट रिपोर्ट के साथ सहायता करें",
          "किसी भी चैटबॉट प्रतिक्रिया से प्रशंसा करें",
          "रोगी के सबूत का उपयोग करने से बचें"
        ],
        "answer": 1,
        "explanation": "प्रशिक्षक चिकित्सा पेशेवरों के लिए परिणामी निदान और उपचार निर्णयों को संरक्षित करते समय सहायता और समय में कमी पर जोर देता है।",
        "optionNotes": [
          "गलत है: प्रतिस्थापन स्पष्ट रूप से खारिज कर दिया जाता है।",
          "B सही है: यह वर्णित समर्थन भूमिका से मेल खाता है।",
          "C गलत है: व्याख्यान सामान्य AI से आत्म-चिकित्सा के खिलाफ चेतावनी देता है।",
          "D गलत है: रोगी सबूत केंद्रीय है, गोपनीयता और सहमति के अधीन है।"
        ]
      },
      {
        "question": "0.1% धोखाधड़ी के साथ धोखाधड़ी डिटेक्टर के लिए सामान्य सटीकता खतरनाक क्यों है?",
        "options": [
          "सटीकता की गणना नहीं की जा सकती है",
          "प्रत्येक लेनदेन को वैध बनाने के लिए कोई धोखाधड़ी पकड़ते समय 99.9% स्कोर कर सकता है",
          "Fraud बहुमत वर्ग है",
          "सटीकता हमेशा याद आती है"
        ],
        "answer": 1,
        "explanation": "गंभीर असंतुलन से अधिकांश वर्ग सटीकता की गणना पर हावी होते हैं, जो दुर्लभ वर्ग पर कुल विफलता को छिपाते हैं।",
        "optionNotes": [
          "एक गलत है: सटीकता calculable लेकिन भ्रामक है।",
          "B सही है: यह क्लासिक बहुमत वर्ग जाल है।",
          "C गलत है: धोखाधड़ी उदाहरण में अल्पसंख्यक वर्ग है।",
          "D गलत है: सटीकता और याद विभिन्न denominators का उपयोग करें।"
        ]
      },
      {
        "question": "यदि एक सच्चे दोष को याद करना बेहद महंगा है, तो मीट्रिक विशेष ध्यान देने योग्य है?",
        "options": [
          "दोष वर्ग के लिए याद",
          "केवल समग्र सटीकता",
          "फाइल का आकार",
          "मॉडल पैरामीटर की संख्या"
        ],
        "answer": 0,
        "explanation": "Recall उन वास्तविक दोषों के अंश को मापता है जिनका पता लगाया जाता है, इसलिए यह सीधे महंगा झूठे नकारात्मक को उजागर करता है।",
        "optionNotes": [
          "एक सही है: याद = TP/(TP+FN).",
          "B गलत है: सटीकता दुर्लभ विफलताओं को छिपा सकती है।",
          "C गलत है: फाइल का आकार परिणाम मीट्रिक नहीं है।",
          "D गलत है: पैरामीटर गिनती का पता नहीं है दोष।"
        ]
      },
      {
        "question": "क्यों एक सामान्य-केवल anomaly मॉडल दवा निर्माण के लिए उपयोगी हो सकता है?",
        "options": [
          "दोष वर्ग प्रचुर मात्रा में और स्थिर हैं",
          "सामान्य नमूने भरपूर होते हैं जबकि लेबल दोष दुर्लभ या विषम होते हैं",
          "यह शून्य झूठे अलार्म की गारंटी देता है",
          "यह किसी भी अवलोकन की आवश्यकता नहीं है"
        ],
        "answer": 1,
        "explanation": "मॉडल सामान्य उत्पादन कई गुना और ध्वज प्रस्थान हर संभव विफलता मोड की जरूरत के उदाहरण के बिना सीख सकते हैं।",
        "optionNotes": [
          "एक गलत है: कमी विधि को प्रेरित करती है।",
          "B सही है: यह उपलब्ध सामान्य डेटा का उपयोग करता है।",
          "C गलत है: थ्रेसहोल्ड अनिवार्य रूप से झूठे अलार्म के खिलाफ व्यापार याद करता है।",
          "D गलत है: यह अभी भी प्रतिनिधि सामान्य अवलोकन की जरूरत है।"
        ]
      },
      {
        "question": "स्वच्छ सामान्य डेटा पर प्रशिक्षण और असामान्य भविष्य के नमूनों का पता लगाने का सबसे सटीक नाम क्या है?",
        "options": [
          "नवीनता का पता",
          "साधारण कम से कम वर्ग",
          "यादृच्छिक नियंत्रित परीक्षण",
          "सहयोगात्मक फ़िल्टरिंग"
        ],
        "answer": 0,
        "explanation": "scikit-learn भेद इस नवीनता का पता लगाने के लिए कहता है; बाहरी पहचान प्रशिक्षण सेट में असंगत संदूषण की अनुमति देती है।",
        "optionNotes": [
          "एक सही है: प्रशिक्षण सामान्य और नए मामलों का परीक्षण नवीनता का पता लगाने से मेल खाता है।",
          "बी एक प्रतिगमन उत्तेजक है।",
          "C एक प्रयोगात्मक डिजाइन है।",
          "डी एक सिफारिश तकनीक है।"
        ]
      },
      {
        "question": "आमतौर पर एक-shot सीखने का क्या मतलब है?",
        "options": [
          "हर स्थिति में एक अनुकूलन कदम",
          "प्रति लक्ष्य वर्ग या शर्त एक लेबल उदाहरण",
          "डेटासेट में एक विशेषता",
          "बिना किसी पूर्व ज्ञान के सभी संभावित कार्यों के लिए एक मॉडल"
        ],
        "answer": 1,
        "explanation": "एक शॉट लक्ष्य समर्थन डेटा की राशि का वर्णन करता है, जरूरी नहीं कि ऑप्टिमाइज़र चरणों या सुविधाओं की संख्या।",
        "optionNotes": [
          "A गलत है: एक शॉट उदाहरणों की चिंता करता है, सार्वभौमिक रूप से क्रमिक कदम नहीं।",
          "B सही है: यह मानक समर्थन सेट अर्थ है।",
          "C गलत है: सुविधा गणना असम्बद्ध है।",
          "D गलत है: पूर्व ज्ञान आमतौर पर आवश्यक है।"
        ]
      },
      {
        "question": "'zero-shot' का मतलब क्या है?",
        "options": [
          "शून्य-शॉट सिस्टम अभी भी पूर्व प्रशिक्षण या अर्थपूर्ण कार्य जानकारी का उपयोग करते हैं",
          "शून्य-shot हमेशा दस लेबल उदाहरणों का उपयोग करता है",
          "शून्य-shot डेटाबेस के लिए एक और नाम है",
          "शून्य-shot forbids संकेत"
        ],
        "answer": 0,
        "explanation": "कोई लक्ष्य-टास्क लेबल उदाहरण नहीं हैं, लेकिन शिक्षार्थी अभी भी पहले अधिग्रहित ज्ञान और नए कार्य या लेबल को निर्दिष्ट करने के कुछ तरीके पर निर्भर करता है।",
        "optionNotes": [
          "एक सही है: पूर्व संरचना हस्तांतरण संभव बनाता है।",
          "बी गलत है: दस लक्ष्य उदाहरण कुछ-शॉट होंगे, शून्य-शॉट नहीं।",
          "C गलत है: यह एक शिक्षण सेटिंग है।",
          "D गलत है: संकेत कार्य विवरण की आपूर्ति कर सकते हैं।"
        ]
      },
      {
        "question": "अगर रिकॉर्ड्स शारीरिक रूप से मौजूद हैं तो कौन सी स्थिति डेटा कमी पैदा करती है?",
        "options": [
          "एक सार्वजनिक सिंथेटिक डाटासेट",
          "बैंक हस्ताक्षर जिन्हें बिना सहमति के साझा नहीं किया जा सकता है",
          "दो ड्राइव पर एक डुप्लिकेट CSV",
          "एक बड़ा बैच आकार"
        ],
        "answer": 1,
        "explanation": "गोपनीयता, सुरक्षा और सहमति बाधाएं मौजूदा डेटा को मॉडल विकास के लिए अनुपलब्ध बना सकती हैं।",
        "optionNotes": [
          "A सुलभ उपयोग के लिए डिज़ाइन किया गया है।",
          "B सही है: शासन व्यावहारिक कमी पैदा करता है।",
          "C अनावश्यक है, कोई कमी नहीं है।",
          "डी रूपांतरण गणना, डेटा एक्सेस नहीं।"
        ]
      },
      {
        "question": "क्या है?",
        "options": [
          "रिकॉर्ड किए गए चर के रूप में घटनाओं या गुणों का प्रतिनिधित्व करना",
          "संख्यात्मक मूल्यों को हटाने",
          "हर डेटासेट सार्वजनिक बनाना",
          "लेबल को कानूनी अनुबंधों में परिवर्तित करना"
        ],
        "answer": 0,
        "explanation": "Datafication ऐसी दोस्ती, वरीयता, गुणवत्ता, या व्यवहार के रूप में प्रतिकूल और विश्लेषणीय संकेतों में घटना बदल जाता है।",
        "optionNotes": [
          "A सही है: यह माप और प्रतिनिधित्व पर कब्जा करता है।",
          "बी रिकॉर्डिंग डेटा के विपरीत है।",
          "C की आवश्यकता नहीं है और गोपनीयता का उल्लंघन कर सकता है।",
          "डी विश्लेषणात्मक प्रतिनिधित्व से संबंधित नहीं है।"
        ]
      },
      {
        "question": "व्याख्यान के समापन अनुरूपता के अनुसार खाली मूल्य को लागू करने से पहले क्या किया जाना चाहिए?",
        "options": [
          "यह शून्य है",
          "जांच सिद्धता और अन्य ज्ञात स्रोतों को देखने के लिए कि क्या मूल्य कहीं और मौजूद है",
          "पूरे डेटासेट को हटा दें",
          "एक बड़ी भाषा मॉडल ट्रेन"
        ],
        "answer": 1,
        "explanation": "अनुपस्थित बनाम-missing अनुरूपता ने अनुपलब्ध मान के इलाज से पहले अन्य शीट, बैकअप या सिस्टम को खोज करने के लिए प्रोत्साहित किया।",
        "optionNotes": [
          "एक गलत है: शून्य एक पर्याप्त मूल्य है और पूर्वाग्रह पेश कर सकता है।",
          "B सही है: सिद्धि एक अनुपस्थित मूल्य को ठीक कर सकती है।",
          "C is disproportionate.",
          "डी स्रोत-डेटा प्रश्न को हल नहीं करता है।"
        ]
      },
      {
        "question": "व्याख्यान के अनुपस्थित / भ्रामक भेद के बारे में कौन-सा कथन सबसे सुरक्षित है?",
        "options": [
          "यह एकमात्र स्वीकार्य सांख्यिकीय परिभाषा है",
          "यह एक उपयोगी पाठ्यक्रम अनुरूप है लेकिन सार्वभौमिक लापता डेटा शब्दावली नहीं है",
          "यह साबित करता है कि सभी लापता डेटा यादृच्छिक है",
          "यह साबित होने की आवश्यकता को समाप्त करता है"
        ],
        "answer": 1,
        "explanation": "मेनस्ट्रीम सांख्यिकी आमतौर पर एमसीएआर, एमएआर और एमएनएआर जैसे लापतापन तंत्र पर चर्चा करता है; व्याख्यान एक सिद्धता उन्मुख अवधारणात्मक भेद प्रदान करता है।",
        "optionNotes": [
          "एक गलत है: शब्दावली बदलता है और अनुरूपता निश्चित रूप से विशिष्ट है।",
          "बी सही है: यह मानकीकरण को निर्धारित किए बिना अंतर्दृष्टि को बरकरार रखता है।",
          "C गलत है: कोई तंत्र स्थापित नहीं किया गया था।",
          "D गलत है: सिद्धि वास्तव में क्या समानता प्रेरित है।"
        ]
      },
      {
        "question": "कौन सा अनुक्रम सबसे अच्छा व्याख्यान में सीखने के पाश का प्रतिनिधित्व करता है?",
        "options": [
          "कुछ भी इकट्ठा करें → सटीकता को अधिकतम करें → हमेशा के लिए तैनात करें",
          "निर्णय को परिभाषित करें → प्रतिनिधि डेटा एकत्र करें → मॉडल → लागत का मूल्यांकन → प्रतिक्रिया प्राप्त करें → अनुकूलन",
          "एक एल्गोरिथ्म चुनें",
          "मनुष्य निकालें → परिणामों को अनदेखा करें"
        ],
        "answer": 1,
        "explanation": "उदाहरण लगातार समस्या framing कनेक्ट, डेटा डिजाइन, मॉडलिंग, लागत से सावधान मूल्यांकन, मानव निरीक्षण, और iterative सुधार.",
        "optionNotes": [
          "गलत है: भेदभावपूर्ण संग्रह और स्थैतिक तैनाती असुरक्षित हैं।",
          "B सही है: यह पूर्ण साक्ष्य-टू-एक्शन लूप है।",
          "C गलत है: निर्णय की समस्या को एल्गोरिथ्म पसंद की भविष्यवाणी करनी चाहिए।",
          "D गलत है: व्याख्यान बार-बार मानव और परिणाम प्रतिक्रिया को मानता है।"
        ]
      },
      {
        "question": "कौन सी परियोजना डिजाइन सबसे ईमानदारी से व्याख्यान लागू करती है?",
        "options": [
          "एक दोष डिटेक्टर का मूल्यांकन केवल सटीकता द्वारा किया जाता है",
          "उपसमूह जांच, दुर्लभ घटना मीट्रिक और मानव समीक्षा के साथ एक सर्वेक्षण और विसंगत प्रणाली",
          "कोई दस्तावेजी डेटा स्रोत के साथ एक डैशबोर्ड",
          "एक अनुशंसाकर्ता जो कभी परिणाम रिकॉर्ड नहीं करता है"
        ],
        "answer": 1,
        "explanation": "यह विकल्प प्रतिनिधि संग्रह, सिद्धि, असंतुलन-जारी मूल्यांकन और एक फीडबैक पाश को जोड़ती है - व्याख्यान के प्रमुख विषयों।",
        "optionNotes": [
          "एक गलत है: सटीकता अकेले दुर्लभ दोषों को छुपाती है।",
          "B सही है: यह संग्रह, मीट्रिक और ओवरसाइट को एकीकृत करता है।",
          "C गलत है: undocumented साबितता विश्वास को कम करती है।",
          "D गलत है: परिणाम के बिना रणनीति को मापा या सुधारा नहीं जा सकता है।"
        ]
      }
    ]
  }
};
