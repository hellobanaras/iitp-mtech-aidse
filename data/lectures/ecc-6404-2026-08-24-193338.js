// English-only publication unit.
export const ecc6404Lecture20260824 = {
  en: {
  "title": "Dataset types and data quality",
  "lede": "This Data Warehousing lecture surveys asymmetric attributes, record/graph/ordered dataset families, temporal and spatial relationships, and the data-quality problems that motivate cleaning and robust algorithms.",
  "instructionalInterval": "00:30–01:17:26 (source time; capture reviewed at 2×)",
  "reviewLevel": "View-only recording with distributed sweep, timestamped transcript, slide-frame evidence, and idle-tail exclusion",
  "coverage": [
    {
      "title": "Asymmetric attributes",
      "body": "Presence/non-zero values can be more informative than shared absence; sparse student-course and market-basket data motivate asymmetric analysis."
    },
    {
      "title": "Dataset families and characteristics",
      "body": "Record, graph-based, and ordered data are useful broad groupings. Dimensionality, sparsity, and resolution affect which patterns and mining tools are defensible."
    },
    {
      "title": "Record, graph, and ordered representations",
      "body": "Records hold attribute values, graphs add links, and ordered data preserves sequence or time; representations should retain information needed by the task."
    },
    {
      "title": "Temporal and spatial relationships",
      "body": "Time series use measurements over time and spatial data uses positions or areas; nearby observations often have stronger correlation."
    },
    {
      "title": "Quality cannot be assumed",
      "body": "Missing, duplicate, spurious, inconsistent, noisy, and otherwise erroneous data require cleaning plus algorithms that tolerate residual problems."
    }
  ],
  "takeaway": "Choose a representation and mining method that preserve the data's informative presence, order, relationships, and quality limitations—not just its storage format.",
  "slideTrail": [
    {
      "time": "00:30",
      "title": "Asymmetric Attributes",
      "note": "Presence is informative while shared zero absences are not; sparse student-course data motivates the idea."
    },
    {
      "time": "02:00",
      "title": "Types of Data Sets",
      "note": "Record, graph-based, and ordered data are the lecture's broad families, with a warning that new varieties continue to appear."
    },
    {
      "time": "15:44",
      "title": "Types of Data Sets — Record Data",
      "note": "Transaction/market-basket records are sets of items; binary presence vectors and one-hot-style representations are discussed."
    },
    {
      "time": "34:44",
      "title": "Types of Data Sets — Graph-based Data",
      "note": "Objects and relationships form graphs; a chemical compound example shows nodes and links."
    },
    {
      "time": "44:44",
      "title": "Types of Data Sets — Sequential/Ordered Data",
      "note": "Time-series and other ordered data depend on sequence; order itself carries analytical meaning."
    },
    {
      "time": "58:44",
      "title": "Types of Data Sets",
      "note": "The lecture recaps record, graph-based, and ordered families before moving to quality."
    },
    {
      "time": "59:44",
      "title": "Data Quality",
      "note": "Data is often collected for another or unspecified purpose, so mining cannot assume quality was designed in at the source."
    },
    {
      "time": "01:04:44",
      "title": "Data Quality — Measurement and Data Collection Issues",
      "note": "Measurement error is deviation from truth; collection error includes omitted or inappropriate objects/attributes."
    },
    {
      "time": "01:10:44",
      "title": "Data Quality — Noise and Artifacts",
      "note": "Noise is a random measurement component; deterministic error is described as artifacts. Signal-processing ideas motivate robust treatment."
    },
    {
      "time": "01:17:26",
      "title": "Closing discussion",
      "note": "Instructor closes the class and defers the next slide to the following meeting; the later desktop/Moodle tail is excluded."
    }
  ],
  "summary": [
    {
      "title": "1. Asymmetric presence carries the signal",
      "sourceRefs": [
        "00:30–03:00",
        "Slide: Asymmetric Attributes"
      ],
      "paragraphs": [
        "The opening example treats a student-course matrix as asymmetric: each student takes only a small fraction of available courses, so presence is informative while shared zeros are not. The instructor also notes that asymmetric features can be discrete or continuous.",
        "This same logic applies to sparse transaction or basket data. A similarity rule that counts every shared absence can swamp the meaningful co-presences, so association-oriented analysis should focus on informative non-zero values."
      ]
    },
    {
      "title": "2. Dataset families and their inherent characteristics",
      "sourceRefs": [
        "03:00–15:00",
        "Slide: Types of Data Sets"
      ],
      "paragraphs": [
        "The lecture uses record, graph-based, and ordered data as a practical grouping, while warning that new tools and data varieties may not fit every category. Dimensionality is the number of attributes, sparsity is the relative scarcity of non-zero entries, and resolution is the scale at which observations are obtained.",
        "Each characteristic changes the mining problem: irrelevant dimensions can produce the curse of dimensionality, sparse storage can help some algorithms but hurt recommendation, and a fine or coarse resolution can reveal, bury, or erase a pattern."
      ]
    },
    {
      "title": "3. Record, graph, and ordered representations",
      "sourceRefs": [
        "15:00–44:30",
        "Slides: Record Data / Graph-based Data"
      ],
      "paragraphs": [
        "Record data stores objects with a common set of attributes; transaction and market-basket records make item presence a sparse binary representation. Graph-based data adds nodes and relationships, illustrated with a chemical compound whose links matter as much as its objects.",
        "A mining representation is useful only if it preserves the information required by the question. Treating a graph or another non-record source as independent rows may enable an algorithm but can discard relationships or order."
      ]
    },
    {
      "title": "4. Ordered, temporal, and spatial data",
      "sourceRefs": [
        "44:30–59:30",
        "Slides: Sequential (Ordered) Data / Handling Non-Record Data"
      ],
      "paragraphs": [
        "Ordered data preserves position or sequence; temporal data adds timestamps, and time series record repeated measurements such as daily stock values or monthly city temperatures. Temporal autocorrelation means observations close in time tend to be more related than distant observations.",
        "Spatial data carries positions or areas, for example weather measurements across geographic locations. Spatial autocorrelation similarly means nearby places tend to have similar temperature or rainfall. These relationships should guide representation and analysis rather than being flattened away."
      ]
    },
    {
      "title": "5. Data-quality problems are expected",
      "sourceRefs": [
        "59:30–01:04:30",
        "Slide: Data Quality"
      ],
      "paragraphs": [
        "The instructor emphasizes that data is often collected for another or unspecified purpose, so a miner should expect missing values or objects, spurious or duplicate objects, and inconsistent measurements. Completeness alone does not prove that a record is plausible.",
        "Data cleaning is the first defense: detect and correct quality problems where possible. The second defense is robust algorithm design that can still produce useful results when some poor-quality observations remain."
      ]
    },
    {
      "title": "6. Measurement, collection, noise, and artifacts",
      "sourceRefs": [
        "01:04:30–01:17:26",
        "Slides: Measurement and Data Collection Issues / Noise and Artifacts"
      ],
      "paragraphs": [
        "Measurement error is a problem in the measurement process, including a recorded value differing from the true value. Data-collection error includes omitting objects or attributes or inappropriately including an object; either type can be systematic or random.",
        "Noise is the random component of measurement error and can obscure a signal, while a deterministic or systematic error is an artifact. Signal or image processing can reduce noise, but robust methods are still needed because complete elimination is difficult. The desktop/Moodle tail after the closing is excluded from this interval."
      ]
    }
  ],
  "courseSignals": {
    "assignments": [],
    "homework": [],
    "labs": [],
    "projects": [],
    "references": [],
    "studentQuestions": []
  },
  "keyTerms": [
    {
      "term": "Data object",
      "definition": "An entity or record described by attributes."
    },
    {
      "term": "Attribute",
      "definition": "A property or characteristic of an object."
    },
    {
      "term": "Dimensionality",
      "definition": "The number of attributes describing an object."
    },
    {
      "term": "Sparsity",
      "definition": "The condition in which non-zero entries are few relative to zeros."
    },
    {
      "term": "Resolution",
      "definition": "The scale or granularity at which data is obtained."
    },
    {
      "term": "Nominal",
      "definition": "A categorical scale where equality/inequality is meaningful."
    },
    {
      "term": "Ordinal",
      "definition": "A scale that adds order but not meaningful spacing."
    },
    {
      "term": "Interval",
      "definition": "A scale with meaningful differences but arbitrary zero."
    },
    {
      "term": "Ratio",
      "definition": "A scale with meaningful differences, ratios, and absolute zero."
    },
    {
      "term": "Asymmetric attribute",
      "definition": "An attribute where presence matters more than absence."
    },
    {
      "term": "Temporal autocorrelation",
      "definition": "The tendency for observations close in time to be more related."
    },
    {
      "term": "Spatial autocorrelation",
      "definition": "The tendency for physically nearby observations to be more similar."
    },
    {
      "term": "Data cleaning",
      "definition": "Detecting and correcting data-quality problems."
    },
    {
      "term": "Measurement error",
      "definition": "A recorded value's deviation from the true value."
    },
    {
      "term": "Collection error",
      "definition": "Omitting or inappropriately including objects or attribute values during collection."
    },
    {
      "term": "Noise",
      "definition": "A random component of measurement error."
    },
    {
      "term": "Artifact",
      "definition": "A deterministic/systematic data error."
    }
  ],
  "insights": [
    {
      "label": "Modeling",
      "title": "Record semantic metadata, not just storage types",
      "body": "An integer column can be an ID, rank, count, or ratio measurement. Preserve the measurement level in metadata before encoding, scaling, aggregating, or choosing a distance."
    },
    {
      "label": "Representation",
      "title": "Conversion can lose the question",
      "body": "Turning a graph or sequence into independent records may make a familiar algorithm run while discarding links or order. Keep the information required by the analysis explicit."
    },
    {
      "label": "Sparse data",
      "title": "Shared zeros can swamp the signal",
      "body": "Presence-focused similarities such as Jaccard-style reasoning are often more faithful for baskets, symptoms, or course enrolments than a symmetric match count."
    },
    {
      "label": "Quality",
      "title": "Cleaning and robustness are complementary",
      "body": "Cleaning improves the evidence, but no cleaning procedure proves perfection. Algorithms should tolerate residual noise, missingness, and artifacts and expose their assumptions."
    },
    {
      "label": "Resolution",
      "title": "Scale is part of the hypothesis",
      "body": "A fine time or spatial scale may reveal structure or noise; a coarse scale may smooth away the pattern. Choose resolution with the decision horizon in mind."
    }
  ],
  "resources": [
    {
      "type": "Reference",
      "title": "Data Mining: Concepts and Techniques",
      "creator": "Jiawei Han, Micheline Kamber, Jian Pei",
      "why": "The lecture follows this textbook family for dataset types, measurement scales, and data-quality terminology.",
      "url": "https://www.cs.sfu.ca/~jpei/publications/book/"
    },
    {
      "type": "Reference",
      "title": "NIST/SEMATECH e-Handbook: Levels of Measurement",
      "creator": "National Institute of Standards and Technology",
      "why": "A concise authoritative review of nominal, ordinal, interval, and ratio measurement levels.",
      "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm"
    },
    {
      "type": "Reference",
      "title": "scikit-learn preprocessing and encoding",
      "creator": "scikit-learn documentation",
      "why": "Practical guidance for encoding categorical variables and scaling numeric features after semantics are established.",
      "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
    },
    {
      "type": "Reference",
      "title": "Jaccard index",
      "creator": "Wikipedia",
      "why": "A compact follow-up for presence-focused similarity on asymmetric binary data; compare with symmetric matching before use.",
      "url": "https://en.wikipedia.org/wiki/Jaccard_index"
    },
    {
      "type": "Further viewing",
      "title": "Data quality dimensions and measurement error",
      "creator": "NIST/SEMATECH e-Handbook",
      "why": "Use the handbook as a follow-up for formal definitions of measurement, error, and exploratory checks.",
      "url": "https://www.itl.nist.gov/div898/handbook/"
    }
  ],
  "quiz": [
    {
      "question": "What makes a binary attribute asymmetric?",
      "options": [
        "Presence/non-zero is informative but absence/zero is not",
        "Both values are always equally important",
        "Only zero is informative",
        "It must be continuous"
      ],
      "answer": 0,
      "explanation": "Asymmetric analysis gives more weight to informative presences than shared absences.",
      "optionNotes": [
        "Correct: Asymmetric analysis gives more weight to informative presences than shared absences.",
        "Incorrect: “Both values are always equally important” does not match the lecture's definition or example.",
        "Incorrect: “Only zero is informative” does not match the lecture's definition or example.",
        "Incorrect: “It must be continuous” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "Why is a student-course matrix a useful asymmetric example?",
      "options": [
        "A student takes only a small fraction of available courses",
        "Every student takes every course",
        "Zero means the course was taken",
        "Course data cannot be binary"
      ],
      "answer": 0,
      "explanation": "Most entries are zero, so course presence carries more information than shared absence.",
      "optionNotes": [
        "Correct: Most entries are zero, so course presence carries more information than shared absence.",
        "Incorrect: “Every student takes every course” does not match the lecture's definition or example.",
        "Incorrect: “Zero means the course was taken” does not match the lecture's definition or example.",
        "Incorrect: “Course data cannot be binary” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "Why would counting shared zeros make students look falsely similar?",
      "options": [
        "Most students share many uninformative non-enrolments",
        "Zeros always mean identical interests",
        "One means a course was not taken",
        "The matrix has no rows"
      ],
      "answer": 0,
      "explanation": "A sparse enrollment matrix is dominated by zeros; matching them hides the informative course presences.",
      "optionNotes": [
        "Correct: A sparse enrollment matrix is dominated by zeros; matching them hides the informative course presences.",
        "Incorrect: “Zeros always mean identical interests” does not match the lecture's definition or example.",
        "Incorrect: “One means a course was not taken” does not match the lecture's definition or example.",
        "Incorrect: “The matrix has no rows” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "Can an asymmetric attribute be discrete or continuous?",
      "options": [
        "Yes, either type is possible",
        "Only continuous",
        "Only discrete",
        "Neither"
      ],
      "answer": 0,
      "explanation": "The instructor explicitly notes that both discrete and continuous asymmetric features are possible.",
      "optionNotes": [
        "Correct: The instructor explicitly notes that both discrete and continuous asymmetric features are possible.",
        "Incorrect: “Only continuous” does not match the lecture's definition or example.",
        "Incorrect: “Only discrete” does not match the lecture's definition or example.",
        "Incorrect: “Neither” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "Which broad dataset groupings are used in the lecture?",
      "options": [
        "Record, graph-based, and ordered data",
        "Only audio, image, and video",
        "Only nominal, ordinal, and ratio",
        "Rows, columns, and cells"
      ],
      "answer": 0,
      "explanation": "The lecture uses record, graph-based, and ordered data as a practical textbook grouping.",
      "optionNotes": [
        "Correct: The lecture uses record, graph-based, and ordered data as a practical textbook grouping.",
        "Incorrect: “Only audio, image, and video” does not match the lecture's definition or example.",
        "Incorrect: “Only nominal, ordinal, and ratio” does not match the lecture's definition or example.",
        "Incorrect: “Rows, columns, and cells” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "Is every possible dataset guaranteed to fit one of those three groups?",
      "options": [
        "No; new data varieties and other groupings can arise",
        "Yes, exactly one group always applies",
        "Only image data is excluded",
        "Groups depend only on file extension"
      ],
      "answer": 0,
      "explanation": "The instructor warns that the grouping is useful but not exhaustive as tools and data varieties evolve.",
      "optionNotes": [
        "Correct: The instructor warns that the grouping is useful but not exhaustive as tools and data varieties evolve.",
        "Incorrect: “Yes, exactly one group always applies” does not match the lecture's definition or example.",
        "Incorrect: “Only image data is excluded” does not match the lecture's definition or example.",
        "Incorrect: “Groups depend only on file extension” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What does dimensionality mean?",
      "options": [
        "The number of attributes or dimensions",
        "The number of files",
        "The number of algorithms",
        "The number of screens"
      ],
      "answer": 0,
      "explanation": "Dimensionality is the number of attributes describing each record or object.",
      "optionNotes": [
        "Correct: Dimensionality is the number of attributes describing each record or object.",
        "Incorrect: “The number of files” does not match the lecture's definition or example.",
        "Incorrect: “The number of algorithms” does not match the lecture's definition or example.",
        "Incorrect: “The number of screens” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What problem can irrelevant high-dimensional attributes create?",
      "options": [
        "The curse of dimensionality and weaker analysis",
        "Guaranteed lower storage",
        "Automatic perfect clustering",
        "A meaningful ID scale"
      ],
      "answer": 0,
      "explanation": "Irrelevant dimensions dilute useful structure and motivate dimension reduction.",
      "optionNotes": [
        "Correct: Irrelevant dimensions dilute useful structure and motivate dimension reduction.",
        "Incorrect: “Guaranteed lower storage” does not match the lecture's definition or example.",
        "Incorrect: “Automatic perfect clustering” does not match the lecture's definition or example.",
        "Incorrect: “A meaningful ID scale” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What is sparsity?",
      "options": [
        "Few non-zero values compared with many zeros",
        "Every value is unique",
        "Only text values are stored",
        "There are no attributes"
      ],
      "answer": 0,
      "explanation": "Sparse data has relatively few non-zero entries; the lecture notes that some datasets have fewer than one percent non-zero values.",
      "optionNotes": [
        "Correct: Sparse data has relatively few non-zero entries; the lecture notes that some datasets have fewer than one percent non-zero values.",
        "Incorrect: “Every value is unique” does not match the lecture's definition or example.",
        "Incorrect: “Only text values are stored” does not match the lecture's definition or example.",
        "Incorrect: “There are no attributes” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "Why can sparsity help some algorithms?",
      "options": [
        "Only non-zero values need storage and processing",
        "Every zero must be duplicated",
        "It removes the need for validation",
        "It guarantees no noise"
      ],
      "answer": 0,
      "explanation": "For examples such as Naive Bayes and logistic regression, sparse storage and computation can save time and space.",
      "optionNotes": [
        "Correct: For examples such as Naive Bayes and logistic regression, sparse storage and computation can save time and space.",
        "Incorrect: “Every zero must be duplicated” does not match the lecture's definition or example.",
        "Incorrect: “It removes the need for validation” does not match the lecture's definition or example.",
        "Incorrect: “It guarantees no noise” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "Why can sparsity be a problem for a recommender system?",
      "options": [
        "Many zeros represent unknown or unobserved preferences",
        "Zeros always encode strong preferences",
        "Recommendations use no attributes",
        "Sparse matrices cannot be stored"
      ],
      "answer": 0,
      "explanation": "For recommendation, many zero entries may hide the preference signal the system needs to infer.",
      "optionNotes": [
        "Correct: For recommendation, many zero entries may hide the preference signal the system needs to infer.",
        "Incorrect: “Zeros always encode strong preferences” does not match the lecture's definition or example.",
        "Incorrect: “Recommendations use no attributes” does not match the lecture's definition or example.",
        "Incorrect: “Sparse matrices cannot be stored” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What is resolution in a dataset?",
      "options": [
        "The scale or granularity at which data is obtained",
        "The number of file copies",
        "A category label",
        "A database password"
      ],
      "answer": 0,
      "explanation": "Resolution is the minimum scale used to record or obtain observations.",
      "optionNotes": [
        "Correct: Resolution is the minimum scale used to record or obtain observations.",
        "Incorrect: “The number of file copies” does not match the lecture's definition or example.",
        "Incorrect: “A category label” does not match the lecture's definition or example.",
        "Incorrect: “A database password” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What can happen when resolution is too fine or too coarse?",
      "options": [
        "A pattern can be buried in noise or disappear after smoothing",
        "The pattern is always unchanged",
        "Only the filename changes",
        "Resolution affects audio only"
      ],
      "answer": 0,
      "explanation": "The earth-surface and atmospheric-pressure examples show that the visible pattern depends on scale.",
      "optionNotes": [
        "Correct: The earth-surface and atmospheric-pressure examples show that the visible pattern depends on scale.",
        "Incorrect: “The pattern is always unchanged” does not match the lecture's definition or example.",
        "Incorrect: “Only the filename changes” does not match the lecture's definition or example.",
        "Incorrect: “Resolution affects audio only” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What is the usual assumption for record data?",
      "options": [
        "Each record has the same set of attributes without explicit record relationships",
        "Every record is a graph",
        "Records must have timestamps",
        "Only images can be records"
      ],
      "answer": 0,
      "explanation": "Record data is commonly a collection of objects with the same attributes; relationships are not explicit in the basic representation.",
      "optionNotes": [
        "Correct: Record data is commonly a collection of objects with the same attributes; relationships are not explicit in the basic representation.",
        "Incorrect: “Every record is a graph” does not match the lecture's definition or example.",
        "Incorrect: “Records must have timestamps” does not match the lecture's definition or example.",
        "Incorrect: “Only images can be records” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What does a transaction or market-basket record represent?",
      "options": [
        "Items purchased together in one transaction",
        "A graph edge only",
        "A monthly temperature alone",
        "A participant avatar"
      ],
      "answer": 0,
      "explanation": "The lecture uses purchased items as a record-data example and notes that their binary presence is often sparse and asymmetric.",
      "optionNotes": [
        "Correct: The lecture uses purchased items as a record-data example and notes that their binary presence is often sparse and asymmetric.",
        "Incorrect: “A graph edge only” does not match the lecture's definition or example.",
        "Incorrect: “A monthly temperature alone” does not match the lecture's definition or example.",
        "Incorrect: “A participant avatar” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What does graph-based data add to objects?",
      "options": [
        "Relationships or links among objects",
        "Only a filename",
        "A fixed sampling interval",
        "A missing-value marker"
      ],
      "answer": 0,
      "explanation": "Graph data represents objects as nodes and their relationships as links; the lecture shows a chemical-compound example.",
      "optionNotes": [
        "Correct: Graph data represents objects as nodes and their relationships as links; the lecture shows a chemical-compound example.",
        "Incorrect: “Only a filename” does not match the lecture's definition or example.",
        "Incorrect: “A fixed sampling interval” does not match the lecture's definition or example.",
        "Incorrect: “A missing-value marker” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "How does sequential data differ from temporal data?",
      "options": [
        "It uses order or position without requiring timestamps",
        "It always has more timestamps",
        "It cannot contain text",
        "It is always a graph"
      ],
      "answer": 0,
      "explanation": "Sequence data preserves order by position, whereas temporal data orders observations by time.",
      "optionNotes": [
        "Correct: Sequence data preserves order by position, whereas temporal data orders observations by time.",
        "Incorrect: “It always has more timestamps” does not match the lecture's definition or example.",
        "Incorrect: “It cannot contain text” does not match the lecture's definition or example.",
        "Incorrect: “It is always a graph” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What is a time series in the lecture?",
      "options": [
        "A series of measurements taken over time",
        "A single unordered category",
        "A graph with no observations",
        "A list of filenames"
      ],
      "answer": 0,
      "explanation": "Daily stock values and a city's monthly temperatures are examples of time-series records.",
      "optionNotes": [
        "Correct: Daily stock values and a city's monthly temperatures are examples of time-series records.",
        "Incorrect: “A single unordered category” does not match the lecture's definition or example.",
        "Incorrect: “A graph with no observations” does not match the lecture's definition or example.",
        "Incorrect: “A list of filenames” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What does temporal autocorrelation suggest?",
      "options": [
        "Measurements close in time tend to be more similar",
        "Distant measurements are always identical",
        "Time has no analytical meaning",
        "Only spatial distance matters"
      ],
      "answer": 0,
      "explanation": "The lecture says nearby stock measurements are more likely to correlate than measurements far apart in time.",
      "optionNotes": [
        "Correct: The lecture says nearby stock measurements are more likely to correlate than measurements far apart in time.",
        "Incorrect: “Distant measurements are always identical” does not match the lecture's definition or example.",
        "Incorrect: “Time has no analytical meaning” does not match the lecture's definition or example.",
        "Incorrect: “Only spatial distance matters” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What kind of information defines spatial data?",
      "options": [
        "Positions or areas in physical space",
        "Only purchase order",
        "Only a file extension",
        "A password"
      ],
      "answer": 0,
      "explanation": "Weather observations such as precipitation, temperature, and pressure are collected for geographic locations.",
      "optionNotes": [
        "Correct: Weather observations such as precipitation, temperature, and pressure are collected for geographic locations.",
        "Incorrect: “Only purchase order” does not match the lecture's definition or example.",
        "Incorrect: “Only a file extension” does not match the lecture's definition or example.",
        "Incorrect: “A password” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What does spatial autocorrelation mean?",
      "options": [
        "Physically close objects tend to be similar in other attributes",
        "All distant objects are identical",
        "Order is based only on filenames",
        "Space cannot be measured"
      ],
      "answer": 0,
      "explanation": "Nearby places often have similar temperature or rainfall, unlike far-apart places.",
      "optionNotes": [
        "Correct: Nearby places often have similar temperature or rainfall, unlike far-apart places.",
        "Incorrect: “All distant objects are identical” does not match the lecture's definition or example.",
        "Incorrect: “Order is based only on filenames” does not match the lecture's definition or example.",
        "Incorrect: “Space cannot be measured” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "Why might a non-record dataset be converted into records?",
      "options": [
        "To use record-oriented algorithms while preserving the information needed for the task",
        "To delete all relationships",
        "To guarantee perfect quality",
        "To remove every timestamp"
      ],
      "answer": 0,
      "explanation": "The lecture notes that conversion can enable algorithms, but it must not discard relationships, order, or other information needed by the analysis.",
      "optionNotes": [
        "Correct: The lecture notes that conversion can enable algorithms, but it must not discard relationships, order, or other information needed by the analysis.",
        "Incorrect: “To delete all relationships” does not match the lecture's definition or example.",
        "Incorrect: “To guarantee perfect quality” does not match the lecture's definition or example.",
        "Incorrect: “To remove every timestamp” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "Why should data quality be treated as a real concern?",
      "options": [
        "Data is often collected for another or unspecified purpose",
        "All collected data is perfect",
        "Quality depends only on screen resolution",
        "Cleaning is never possible"
      ],
      "answer": 0,
      "explanation": "The lecture lists missing, duplicate, spurious, and inconsistent data as common risks rather than exceptional cases.",
      "optionNotes": [
        "Correct: The lecture lists missing, duplicate, spurious, and inconsistent data as common risks rather than exceptional cases.",
        "Incorrect: “All collected data is perfect” does not match the lecture's definition or example.",
        "Incorrect: “Quality depends only on screen resolution” does not match the lecture's definition or example.",
        "Incorrect: “Cleaning is never possible” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "How does measurement error differ from data-collection error?",
      "options": [
        "Measurement error differs from a true value; collection error omits or inappropriately includes data",
        "They always mean the same thing",
        "Collection error changes only colours",
        "Measurement error cannot be random"
      ],
      "answer": 0,
      "explanation": "The lecture defines measurement error around the measurement process and collection error around selecting or recording objects and attributes.",
      "optionNotes": [
        "Correct: The lecture defines measurement error around the measurement process and collection error around selecting or recording objects and attributes.",
        "Incorrect: “They always mean the same thing” does not match the lecture's definition or example.",
        "Incorrect: “Collection error changes only colours” does not match the lecture's definition or example.",
        "Incorrect: “Measurement error cannot be random” does not match the lecture's definition or example."
      ]
    },
    {
      "question": "What is the distinction between noise and an artifact?",
      "options": [
        "Noise is a random measurement component; an artifact is deterministic/systematic",
        "Noise is always systematic and artifact random",
        "Both are browser settings",
        "Neither is a data error"
      ],
      "answer": 0,
      "explanation": "The lecture describes noise as random error and artifacts as deterministic error; robust and signal-processing methods can help.",
      "optionNotes": [
        "Correct: The lecture describes noise as random error and artifacts as deterministic error; robust and signal-processing methods can help.",
        "Incorrect: “Noise is always systematic and artifact random” does not match the lecture's definition or example.",
        "Incorrect: “Both are browser settings” does not match the lecture's definition or example.",
        "Incorrect: “Neither is a data error” does not match the lecture's definition or example."
      ]
    }
  ]
}
};
