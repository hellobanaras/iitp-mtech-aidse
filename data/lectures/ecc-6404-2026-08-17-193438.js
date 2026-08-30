// English-only publication unit.
export const ecc6404Lecture20260817 = {
  en: {
  "title": "Data mining foundations: KDD, patterns, applications, and responsible use",
  "lede": "This first Data Warehousing lecture introduces data mining as the search for useful knowledge in large, heterogeneous repositories. It walks through the KDD pipeline, mining functions, business and search applications, rare-event pitfalls, and the privacy responsibilities that accompany data-rich systems.",
  "instructionalInterval": "20:00–1:19:53 (source time; capture at 2×)",
  "reviewLevel": "Recording, bounded teaching interval, timestamped transcript, and slide-frame verified",
  "coverage": [
    {
      "title": "From repositories to knowledge",
      "body": "Data warehouses unify heterogeneous sources so analysis can support business decisions rather than intuition alone."
    },
    {
      "title": "The KDD pipeline",
      "body": "Cleaning, integration, selection, transformation, mining, evaluation, and knowledge representation turn raw data into usable evidence."
    },
    {
      "title": "Mining functions",
      "body": "Characterization, discrimination, frequent patterns, association, classification, regression, clustering, and outlier analysis answer different questions."
    },
    {
      "title": "Data and applications",
      "body": "Any meaningful digital data can be mined; examples include business intelligence, search engines, sensors, text, images, and multimodal records."
    },
    {
      "title": "Descriptive versus predictive work",
      "body": "Descriptive tasks summarize what is present, while predictive tasks infer labels or continuous values for future cases."
    },
    {
      "title": "Rare events and evaluation",
      "body": "Severe class imbalance makes accuracy deceptive; anomaly detection and cost-aware metrics are safer starting points for rare fraud or defects."
    },
    {
      "title": "Human and social context",
      "body": "Interactive mining, visualization, background knowledge, scalability, privacy, and security shape whether a mined pattern can be trusted."
    }
  ],
  "takeaway": "A reliable data-mining result is a chain of decisions—from provenance and cleaning to representation and governance—not merely an algorithm applied to a large table.",
  "slideTrail": [
    {
      "time": "20:00",
      "title": "Data Mining — Why?",
      "note": "Heterogeneous data, data cleaning, integration, OLAP, and the need to turn data-rich repositories into information."
    },
    {
      "time": "25:00",
      "title": "Data Mining — Why? continued",
      "note": "The data-rich/information-poor gap and the role of tools in discovering useful knowledge."
    },
    {
      "time": "31:00",
      "title": "What is Data Mining?",
      "note": "Knowledge discovery from data, represented with the mine-to-gold metaphor."
    },
    {
      "time": "41:00",
      "title": "What kinds of data can be mined?",
      "note": "Structured, transactional, stream, sequence, graph, spatial, text, multimedia, and web data."
    },
    {
      "time": "45:00",
      "title": "What kinds of patterns can be mined?",
      "note": "Characterization, discrimination, frequent patterns, associations, classification, regression, clustering, and outliers."
    },
    {
      "time": "58:00",
      "title": "What technologies are used?",
      "note": "Statistics, databases, warehouses, information retrieval, high-performance computing, visualization, pattern recognition, and machine learning."
    },
    {
      "time": "1:11:00",
      "title": "Major issues in Data Mining",
      "note": "Methodology, interaction, efficiency and scalability, diverse data types, and social/privacy concerns."
    },
    {
      "time": "1:18:55",
      "title": "Introduction — closing agenda",
      "note": "Recap of the chapter and recommendation to review the slides and corresponding book chapter."
    }
  ],
  "summary": [
    {
      "title": "1. Why a warehouse and why mining?",
      "sourceRefs": [
        "20:00–31:00",
        "Slides: Data Mining — Why? / What is Data Mining?"
      ],
      "paragraphs": [
        "Operational data often arrives from heterogeneous sources with incompatible formats. A warehouse provides a unified store; cleaning removes noise and inconsistency, integration reconciles sources, and OLAP enables summaries, consolidation, aggregation, and different analytical views.",
        "The instructor frames data mining as discovering useful knowledge—golden nuggets—from repositories that have grown beyond unaided human comprehension. Without mining tools, organizations remain data rich but information poor and may fall back on intuition."
      ]
    },
    {
      "title": "2. KDD is a staged process",
      "sourceRefs": [
        "33:00–40:00",
        "KDD process slide"
      ],
      "paragraphs": [
        "The KDD journey is data cleaning, data integration, data selection, data transformation, data mining, pattern evaluation, and knowledge representation. The first four are preprocessing: they make data suitable for an algorithm and for the task at hand.",
        "Mining can produce many patterns, so interestingness measures and user guidance are needed to retain useful ones. The final step presents those patterns in a form a decision maker can understand rather than exposing an opaque technical dump."
      ]
    },
    {
      "title": "3. Match the mining function to the question",
      "sourceRefs": [
        "45:00–55:00",
        "What kinds of patterns can be mined?"
      ],
      "paragraphs": [
        "Characterization summarizes a target class; discrimination compares it with contrasting classes. Frequent-pattern mining finds repeated combinations, while association studies relationships among their items.",
        "Classification predicts a categorical label, whereas regression predicts a continuous value. Clustering is unsupervised because class labels are not supplied; outlier analysis identifies observations outside the general distribution or behavior."
      ]
    },
    {
      "title": "4. Data diversity expands the problem",
      "sourceRefs": [
        "41:00–45:00",
        "What kinds of data can be mined?"
      ],
      "paragraphs": [
        "The lecture begins with datasets, warehouse data, and transactions, then broadens to streams, ordered sequences, graphs and networks, spatial data, text, multimedia, and the web. The principle is purpose-based: meaningful digital data is eligible even when a ready-made algorithm does not yet exist.",
        "New devices create new modalities—such as digital-camera images—which in turn require new representations and mining methods. This feedback makes data mining a dynamic, interdisciplinary field."
      ]
    },
    {
      "title": "5. Applications turn patterns into action",
      "sourceRefs": [
        "1:07:00–1:16:00",
        "What kinds of Applications are Targeted?"
      ],
      "paragraphs": [
        "Business intelligence uses historical, current, and predictive views of operations for reporting, performance management, competitive intelligence, benchmarking, and predictive analytics. Sensor histories can reveal pressure or temperature patterns before a process failure.",
        "Search engines are another large-scale mining application: crawlers gather pages, indexes organize them, and ranking/search return useful hits. A retail example shows how a bread–butter association can inform store layout and business decisions."
      ]
    },
    {
      "title": "6. Evaluation must respect rarity and cost",
      "sourceRefs": [
        "1:11:00–1:15:00",
        "Major Issues in Data Mining"
      ],
      "paragraphs": [
        "Fraud and manufacturing defects are rare compared with valid transactions or products. A model that predicts the majority class can achieve high accuracy while missing every important case. Precision, recall, and the cost of false negatives therefore deserve attention.",
        "When labeled defects are scarce or varied, anomaly detection can learn normal structure and flag departures for human review. This is a decision aid, not a guarantee of zero false alarms."
      ],
      "formula": "Accuracy = (TP + TN)/(TP + TN + FP + FN) · Precision = TP/(TP + FP) · Recall = TP/(TP + FN)"
    },
    {
      "title": "7. Methodology, interaction, and society",
      "sourceRefs": [
        "1:11:00–1:19:00",
        "Major Issues in Data Mining"
      ],
      "paragraphs": [
        "Methodology must handle new knowledge types, multimodal data, uncertainty, noise, incompleteness, and patterns constrained by domain information. User interaction can provide background knowledge, ad-hoc queries, and visual feedback so uninteresting patterns are pruned early.",
        "Efficiency and scalability matter as repositories grow. Finally, privacy and security are part of correctness: patient identities, addresses, or other sensitive records should be anonymized and protected before research or operational mining."
      ]
    }
  ],
  "courseSignals": {
    "assignments": [],
    "homework": [],
    "labs": [],
    "projects": [],
    "references": [
      {
        "time": "1:19:20",
        "title": "Slides and corresponding book chapter",
        "detail": "The instructor asked students to review the displayed slides and said the chapter would also be provided in the book; no separately graded task was assigned."
      }
    ],
    "studentQuestions": []
  },
  "keyTerms": [
    {
      "term": "KDD",
      "definition": "Knowledge discovery from data: the end-to-end process around data mining."
    },
    {
      "term": "Data cleaning",
      "definition": "Removing noise and inconsistent data before analysis."
    },
    {
      "term": "Data integration",
      "definition": "Combining sources into a unified analytical view."
    },
    {
      "term": "OLAP",
      "definition": "Online analytical processing for multidimensional summaries and aggregation."
    },
    {
      "term": "Characterization",
      "definition": "Summary of general features of a target class."
    },
    {
      "term": "Association",
      "definition": "A relationship among items that occur together in frequent patterns."
    },
    {
      "term": "Classification",
      "definition": "Prediction of categorical class labels."
    },
    {
      "term": "Regression",
      "definition": "Prediction of a continuous-valued function."
    },
    {
      "term": "Clustering",
      "definition": "Unsupervised grouping without supplied class labels."
    },
    {
      "term": "Outlier",
      "definition": "An observation that departs from the general data pattern."
    }
  ],
  "insights": [
    { "label": "Data provenance", "title": "Collection design is part of the model", "body": "Treat provenance and collection design as part of the model: a polished algorithm cannot repair a free-text survey or an unrepresentative population." },
    { "label": "Evaluation", "title": "Set thresholds from the cost of errors", "body": "For rare-event operations, choose metrics and review thresholds from the cost of errors; accuracy is a reporting number, not a safety argument." },
    { "label": "Communication", "title": "Knowledge representation completes the pipeline", "body": "Knowledge representation is a technical requirement. If a decision maker cannot understand a pattern, the KDD pipeline has not completed its last mile." },
    { "label": "Missing data", "title": "Search provenance before imputing a blank", "body": "The lecture's absent-versus-missing idea is best operationalized as provenance search before imputation: check other trusted sources before treating a blank as a true missing value." }
  ],
  "resources": [
    {
      "title": "Mining of Massive Datasets — Stanford",
      "url": "https://mmds.stanford.edu/",
      "note": "Open textbook chapters on frequent patterns, clustering, mining streams, and large-scale systems."
    },
    {
      "title": "scikit-learn: Novelty and Outlier Detection",
      "url": "https://scikit-learn.org/stable/modules/outlier_detection.html",
      "note": "Practical distinction between novelty detection and outlier detection, with estimators and cautions."
    },
    {
      "title": "ACM SIGKDD",
      "url": "https://www.kdd.org/",
      "note": "Research community and conference archive for knowledge discovery and data mining."
    },
    {
      "title": "IBM: What is business intelligence?",
      "url": "https://www.ibm.com/think/topics/business-intelligence",
      "note": "Accessible overview of BI reporting, dashboards, analytics, and decision support."
    }
  ],
  "quiz": [
    {
      "question": "Why do data warehouses need integration?",
      "options": [
        "All sources are identical",
        "Sources can be heterogeneous",
        "Integration removes every label",
        "OLAP requires images only"
      ],
      "answer": 1,
      "explanation": "The lecture describes multiple heterogeneous sources that must be brought into a unified schema.",
      "optionNotes": [
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Correct: The lecture describes multiple heterogeneous sources that must be brought into a unified schema.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is the purpose of data cleaning in the KDD process?",
      "options": [
        "Add noise",
        "Remove noise and inconsistencies",
        "Choose a business logo",
        "Create a class label for every row"
      ],
      "answer": 1,
      "explanation": "Cleaning reduces noise and inconsistent values before mining.",
      "optionNotes": [
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Correct: Cleaning reduces noise and inconsistent values before mining.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What does data integration do?",
      "options": [
        "Combines relevant source data into a unified view",
        "Deletes the source systems",
        "Converts every value to a class label",
        "Guarantees perfect predictions"
      ],
      "answer": 0,
      "explanation": "Integration combines data from multiple sources so it can be analyzed together.",
      "optionNotes": [
        "Correct: Integration combines data from multiple sources so it can be analyzed together.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is OLAP mainly used for?",
      "options": [
        "Multidimensional analysis and aggregation",
        "Recording microphone audio",
        "Replacing data cleaning",
        "Creating passwords"
      ],
      "answer": 0,
      "explanation": "OLAP supports summarization, consolidation, aggregation, and viewing data from different angles.",
      "optionNotes": [
        "Correct: OLAP supports summarization, consolidation, aggregation, and viewing data from different angles.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is data characterization?",
      "options": [
        "Summarizing general features of a target class",
        "Comparing two browsers",
        "Encrypting a database",
        "Randomly deleting records"
      ],
      "answer": 0,
      "explanation": "Characterization summarizes the general characteristics of a target class.",
      "optionNotes": [
        "Correct: Characterization summarizes the general characteristics of a target class.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is data discrimination?",
      "options": [
        "Comparing features of a target class with contrasting classes",
        "Sorting files by size",
        "Predicting only continuous values",
        "Removing all outliers"
      ],
      "answer": 0,
      "explanation": "Discrimination contrasts the general features of one class with one or more other classes.",
      "optionNotes": [
        "Correct: Discrimination contrasts the general features of one class with one or more other classes.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is a frequent pattern?",
      "options": [
        "A pattern that occurs often in the data",
        "A pattern that occurs exactly once",
        "A missing value",
        "A database password"
      ],
      "answer": 0,
      "explanation": "Frequency refers to repeated occurrence in the dataset.",
      "optionNotes": [
        "Correct: Frequency refers to repeated occurrence in the dataset.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What does association analysis study?",
      "options": [
        "Relationships among items in frequent patterns",
        "Only the file format",
        "The color of a slide",
        "Whether a source is online"
      ],
      "answer": 0,
      "explanation": "Association examines relationships among items that occur together.",
      "optionNotes": [
        "Correct: Association examines relationships among items that occur together.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What kind of output does classification predict?",
      "options": [
        "Categorical labels",
        "Only continuous measurements",
        "Audio waveforms",
        "Database schemas"
      ],
      "answer": 0,
      "explanation": "Classification assigns an observation to a categorical class.",
      "optionNotes": [
        "Correct: Classification assigns an observation to a categorical class.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What kind of output does regression predict?",
      "options": [
        "A continuous-valued function",
        "A fixed class name only",
        "A slide number",
        "A file extension"
      ],
      "answer": 0,
      "explanation": "Regression models a continuous numerical value.",
      "optionNotes": [
        "Correct: Regression models a continuous numerical value.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why is clustering called unsupervised in the lecture?",
      "options": [
        "The number and membership of clusters are not supplied in advance",
        "Every label is already known",
        "It always predicts a loan amount",
        "It only uses images"
      ],
      "answer": 0,
      "explanation": "Clustering analyzes objects without consulting supplied class labels.",
      "optionNotes": [
        "Correct: Clustering analyzes objects without consulting supplied class labels.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is an outlier?",
      "options": [
        "An observation that does not follow the general pattern",
        "The most common observation",
        "A cleaned value",
        "A target population"
      ],
      "answer": 0,
      "explanation": "An outlier lies outside the behavior followed by the other observations.",
      "optionNotes": [
        "Correct: An outlier lies outside the behavior followed by the other observations.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What do descriptive mining tasks do?",
      "options": [
        "Characterize properties of a dataset",
        "Always predict a numeric target",
        "Delete the database",
        "Hide the result from users"
      ],
      "answer": 0,
      "explanation": "Descriptive tasks summarize or characterize what is present.",
      "optionNotes": [
        "Correct: Descriptive tasks summarize or characterize what is present.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Which sequence best represents KDD?",
      "options": [
        "Clean, integrate, select, transform, mine, evaluate, represent",
        "Mine first and collect data later",
        "Delete, encrypt, publish, guess",
        "Classify every row before cleaning"
      ],
      "answer": 0,
      "explanation": "The lecture presents preprocessing, mining, evaluation, and knowledge representation as a pipeline.",
      "optionNotes": [
        "Correct: The lecture presents preprocessing, mining, evaluation, and knowledge representation as a pipeline.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What qualifies data for a mining application?",
      "options": [
        "Meaningful digital data from which a target application can extract knowledge",
        "Only relational tables",
        "Only data with no missing values",
        "Only data collected by hand"
      ],
      "answer": 0,
      "explanation": "The instructor says any meaningful digital form can be mined when it supports a purpose.",
      "optionNotes": [
        "Correct: The instructor says any meaningful digital form can be mined when it supports a purpose.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is business intelligence (BI) in the lecture?",
      "options": [
        "Use of historical, current, and predictive analysis for business operations",
        "A file-compression method",
        "A replacement for databases",
        "A type of sensor"
      ],
      "answer": 0,
      "explanation": "BI uses reporting, OLAP, performance management, competitive intelligence, and predictive analytics.",
      "optionNotes": [
        "Correct: BI uses reporting, OLAP, performance management, competitive intelligence, and predictive analytics.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why is a web search engine a data-mining application?",
      "options": [
        "It crawls, indexes, and searches very large collections",
        "It stores only one page",
        "It cannot rank results",
        "It is an OLAP cube"
      ],
      "answer": 0,
      "explanation": "Search engines mine indexed web collections to return relevant pages, images, and files.",
      "optionNotes": [
        "Correct: Search engines mine indexed web collections to return relevant pages, images, and files.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why might a shop place bread and butter far apart?",
      "options": [
        "An association can encourage customers to encounter other items",
        "The items must be kept at different temperatures",
        "It removes all frequent patterns",
        "It makes the database relational"
      ],
      "answer": 0,
      "explanation": "The example uses a frequent co-purchase pattern to inform store layout.",
      "optionNotes": [
        "Correct: The example uses a frequent co-purchase pattern to inform store layout.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is the target population?",
      "options": [
        "The full group about which a conclusion is intended",
        "Only the first respondent",
        "A database table name",
        "A single outlier"
      ],
      "answer": 0,
      "explanation": "Sampling must be designed around the population to which the result will be generalized.",
      "optionNotes": [
        "Correct: Sampling must be designed around the population to which the result will be generalized.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why can stratification improve analysis?",
      "options": [
        "It preserves relevant subgroup representation",
        "It guarantees zero bias",
        "It removes the need for a target",
        "It turns labels into images"
      ],
      "answer": 0,
      "explanation": "The lecture warns that aggregate answers can hide important subgroup differences.",
      "optionNotes": [
        "Correct: The lecture warns that aggregate answers can hide important subgroup differences.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why can accuracy be misleading with severe class imbalance?",
      "options": [
        "The majority class can dominate the score while the rare class is missed",
        "Accuracy cannot be computed",
        "The minority class becomes majority",
        "Accuracy is always recall"
      ],
      "answer": 0,
      "explanation": "A majority-class predictor may score highly while failing to detect rare fraud or defects.",
      "optionNotes": [
        "Correct: A majority-class predictor may score highly while failing to detect rare fraud or defects.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "When is anomaly detection useful?",
      "options": [
        "When normal examples are abundant but labeled defects are rare or varied",
        "When every class has identical examples",
        "When no observations exist",
        "Only when accuracy is the sole goal"
      ],
      "answer": 0,
      "explanation": "Learning normal structure can flag unusual cases without enumerating every defect type.",
      "optionNotes": [
        "Correct: Learning normal structure can flag unusual cases without enumerating every defect type.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Which issue belongs to mining methodology?",
      "options": [
        "Handling new data types, noisy data, and multidimensional or multimodal data",
        "Choosing a cafeteria menu",
        "Changing a browser theme",
        "Printing a certificate"
      ],
      "answer": 0,
      "explanation": "The lecture lists varied knowledge types, noisy/incomplete data, and diverse formats as methodology challenges.",
      "optionNotes": [
        "Correct: The lecture lists varied knowledge types, noisy/incomplete data, and diverse formats as methodology challenges.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why must data mining address privacy and society?",
      "options": [
        "Sensitive identities and records can be misused",
        "Privacy changes regression into clustering",
        "All data is public by definition",
        "Security is unrelated to mining"
      ],
      "answer": 0,
      "explanation": "The instructor warns that patient identity and other sensitive details must not be exposed.",
      "optionNotes": [
        "Correct: The instructor warns that patient identity and other sensitive details must not be exposed.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why is knowledge representation the last KDD step?",
      "options": [
        "Results must be presented so decision makers can understand and use them",
        "It is the first data-collection step",
        "It removes the need for evaluation",
        "It creates heterogeneous sources"
      ],
      "answer": 0,
      "explanation": "Useful patterns have to be visualized or represented in a form the decision maker can act on.",
      "optionNotes": [
        "Correct: Useful patterns have to be visualized or represented in a form the decision maker can act on.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence.",
        "Incorrect: this option does not match the lecture's definition or evidence."
      ]
    }
  ]
}
};
