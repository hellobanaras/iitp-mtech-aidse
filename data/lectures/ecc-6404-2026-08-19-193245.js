// English-only publication unit.
export const ecc6404Lecture20260819 = {
  en: {
  "title": "Data types for mining: attributes, measurement scales, and relationships",
  "lede": "This Data Warehousing lecture builds the semantic foundation for mining: data quality and preprocessing, objects and attributes, measurement scales, valid transformations, discrete and continuous values, and asymmetric attributes for sparse presence data.",
  "instructionalInterval": "01:04–01:22:43 (source time; capture at 2×)",
  "reviewLevel": "View-only recording, bounded teaching interval, timestamped transcript, and slide-frame evidence verified",
  "coverage": [
    {
      "title": "Data quality before algorithms",
      "body": "Mining tools depend on data type, so missing values, noise, outliers, inconsistency, duplicity, and bias must be understood before modeling."
    },
    {
      "title": "Objects, attributes, and relationships",
      "body": "A dataset is a collection of objects described by attributes; some analyses operate on pairwise similarity or dissimilarity instead of raw objects."
    },
    {
      "title": "Measurement is a semantic contract",
      "body": "A measurement scale maps an attribute to a symbolic or numerical value, but the value's mathematical properties may not belong to the attribute itself."
    },
    {
      "title": "Nominal and ordinal scales",
      "body": "Nominal values distinguish objects; ordinal values additionally preserve order, but neither supplies meaningful numerical distance."
    },
    {
      "title": "Interval and ratio scales",
      "body": "Interval differences are meaningful; ratio values additionally have an absolute zero, making ratios meaningful."
    },
    {
      "title": "Transformations and value counts",
      "body": "One-to-one, monotonic, affine, and multiplicative transformations preserve nominal, ordinal, interval, and ratio semantics respectively; attributes may also be discrete, binary, or continuous."
    },
    {
      "title": "Asymmetric presence",
      "body": "When non-zero presence carries the signal and shared zeros do not, asymmetric attributes are useful, especially in association analysis."
    }
  ],
  "takeaway": "A number in a table is not automatically a quantity. Choose algorithms and transformations from the attribute's semantics, not merely from the storage type.",
  "slideTrail": [
    {
      "time": "01:04",
      "title": "Data Mining — Data",
      "note": "Title slide introduces the data-focused part of the course."
    },
    {
      "time": "03:00",
      "title": "Types of data sets",
      "note": "Datasets can differ by attribute type and spatial or temporal characteristics; new applications create new data varieties."
    },
    {
      "time": "10:00",
      "title": "Data quality",
      "note": "Missing values, noise, outliers, inconsistency, duplicity, and bias motivate quality improvement and preprocessing."
    },
    {
      "time": "15:00",
      "title": "Preprocessing",
      "note": "Preprocessing improves quality and modifies data to fit a specified mining technique or tool."
    },
    {
      "time": "20:00",
      "title": "Analyzing data through relationships",
      "note": "Similarity and dissimilarity between object pairs can drive clustering or anomaly analysis."
    },
    {
      "time": "30:00",
      "title": "Data objects and attributes",
      "note": "Rows/records represent objects; columns/fields represent attributes, illustrated with student information."
    },
    {
      "time": "45:00",
      "title": "Attribute as a property",
      "note": "Attributes may vary across objects or over time; eye colour and temperature illustrate symbolic versus numerical variation."
    },
    {
      "time": "50:00",
      "title": "Measurement scale and process",
      "note": "A scale associates an attribute with a value; a bathroom scale and gender classification illustrate measurement."
    },
    {
      "time": "60:00",
      "title": "Attribute semantics versus representation",
      "note": "Employee ID and age may both be stored as integers, but averaging an ID is meaningless while averaging age is meaningful."
    },
    {
      "time": "72:00",
      "title": "Attribute taxonomy",
      "note": "Categorical attributes are nominal/ordinal; numeric attributes are interval/ratio."
    },
    {
      "time": "78:00",
      "title": "Nominal attributes",
      "note": "Nominal values distinguish objects; equality, mode, entropy, contingency, and chi-square-style operations are meaningful."
    },
    {
      "time": "85:00",
      "title": "Ordinal attributes",
      "note": "Ordinal values add ordering; grades and good/better/best illustrate order without measurable spacing."
    },
    {
      "time": "90:00",
      "title": "Interval and ratio attributes",
      "note": "Calendar dates and Celsius/Fahrenheit are interval; counts, mass, length, money, and Kelvin are ratio examples."
    },
    {
      "time": "105:00",
      "title": "Categorical versus numeric recap",
      "note": "Numeric labels do not make categorical values quantitative; numeric attributes carry most numerical properties."
    },
    {
      "time": "110:00",
      "title": "Meaning-preserving transformations",
      "note": "Nominal permits one-to-one relabeling, ordinal monotonic transforms, interval ax+b, and ratio ax."
    },
    {
      "time": "135:00",
      "title": "Discrete, binary, and continuous attributes",
      "note": "Finite/countable values are discrete; two values are binary; real-valued measurements are continuous."
    },
    {
      "time": "147:00",
      "title": "Asymmetric attributes",
      "note": "Presence/non-zero is informative while absence/zero is not; sparse course-enrolment and medical examples motivate the idea."
    },
    {
      "time": "160:00",
      "title": "Types of data sets",
      "note": "The lecture closes with asymmetric attributes and defers the remaining dataset types to the next class."
    }
  ],
  "summary": [
    {
      "title": "1. Data quality determines what mining can mean",
      "sourceRefs": [
        "01:04–15:00",
        "Slides: Types of data sets / Data quality / Preprocessing"
      ],
      "paragraphs": [
        "Mining tools are not interchangeable. Their assumptions depend on whether data is categorical, numeric, temporal, spatial, or another form, so the first task is to understand the data. The instructor connects new application areas to new data varieties and research needs.",
        "Raw data is rarely perfect. Missing values, noise, outliers, inconsistency, duplicity, and bias can weaken analysis. Preprocessing has two explicit goals: improve quality and modify the representation so it fits the chosen mining tool."
      ]
    },
    {
      "title": "2. Relationships can be the analytical object",
      "sourceRefs": [
        "20:00–29:00",
        "Slide: Analyzing data in terms of its relationships"
      ],
      "paragraphs": [
        "Instead of operating directly on every row and attribute, an algorithm may use relationships between objects. Pairwise similarity or dissimilarity can become an m × m matrix for clustering, classification support, or anomaly detection.",
        "The correct measure is not universal: its choice depends on both the data type and the application. A distance that makes sense for numeric values may be inappropriate for nominal symbols."
      ]
    },
    {
      "title": "3. Objects and attributes form the data model",
      "sourceRefs": [
        "30:00–45:00",
        "Slide: Data objects / Attributes"
      ],
      "paragraphs": [
        "A dataset is a collection of data objects. An object can be called a record, point, vector, pattern, event, case, sample, observation, or entity. In a table, each row is an object and each column/field is an attribute.",
        "Attributes capture properties or characteristics that may vary between objects or over time. Student ID, year, and CGPA illustrate object attributes; eye colour is symbolic and temperature is numerical and time-varying."
      ]
    },
    {
      "title": "4. Measurement values do not automatically inherit meaning",
      "sourceRefs": [
        "45:00–71:00",
        "Slides: Measurement scale / Attribute properties"
      ],
      "paragraphs": [
        "A measurement scale is a function that associates a numerical or symbolic value with an attribute. The scale enables analysis, but storage format is not semantics. Employee ID and age can both be integers: age supports a meaningful mean, while ID supports only identity tests.",
        "The correspondence is not perfect even for age: human age has a realistic upper bound, whereas the integer type has no such bound. Ask what operations the attribute justifies before applying arithmetic."
      ]
    },
    {
      "title": "5. Four measurement scales constrain valid operations",
      "sourceRefs": [
        "72:00–105:00",
        "Slides: Nominal / Ordinal / Interval / Ratio"
      ],
      "paragraphs": [
        "Nominal values are names or categories; equality and inequality are meaningful. Ordinal values additionally provide order, as with grades or good/better/best, but not meaningful spacing. Interval values support differences and addition/subtraction; calendar dates and Celsius/Fahrenheit are examples.",
        "Ratio values have meaningful differences and ratios because their zero is absolute. Counts, mass, length, monetary quantities, and Kelvin temperature fit this scale. Celsius zero is arbitrary, so 100°C is not twice 50°C."
      ]
    },
    {
      "title": "6. Transformations must preserve the scale's invariants",
      "sourceRefs": [
        "110:00–135:00",
        "Slide: Transformations that do not change meaning"
      ],
      "paragraphs": [
        "Nominal attributes tolerate any one-to-one relabeling because only identity matters. Ordinal attributes require an order-preserving monotonic function. Interval values permit new = a × old + b, changing scale and origin; ratio values permit only new = a × old so the absolute zero and ratios survive.",
        "The distinction prevents false precision. Replacing good/better/best with 1/2/3 or 0.5/1/10 preserves order, not a claim that one category is a fixed multiple of another."
      ]
    },
    {
      "title": "7. Count values, continuity, and asymmetry",
      "sourceRefs": [
        "135:00–01:22:43",
        "Slides: Discrete / Binary / Continuous / Asymmetric attributes"
      ],
      "paragraphs": [
        "Discrete attributes take finite or countable values; binary attributes are the exactly-two-value special case. Continuous attributes take real-valued measurements such as temperature or height. A count can be both discrete and ratio-scaled because zero is meaningful and 10 is twice 5.",
        "An asymmetric attribute treats presence/non-zero as informative while absence/zero is not. In a student-course matrix, most entries are zero because each student takes few courses; comparing zeros would make students appear falsely similar. Association analysis therefore focuses on co-presence, and the same logic applies to sparse medical indicators."
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
      "definition": "An entity or record described by a set of attributes."
    },
    {
      "term": "Attribute",
      "definition": "A property or characteristic of an object."
    },
    {
      "term": "Measurement scale",
      "definition": "A function that assigns a symbolic or numerical value to an attribute."
    },
    {
      "term": "Nominal",
      "definition": "A categorical scale whose values distinguish objects without order."
    },
    {
      "term": "Ordinal",
      "definition": "A categorical scale whose values distinguish and order objects."
    },
    {
      "term": "Interval",
      "definition": "A numeric scale where differences are meaningful but zero is arbitrary."
    },
    {
      "term": "Ratio",
      "definition": "A numeric scale with meaningful differences, ratios, and absolute zero."
    },
    {
      "term": "Discrete",
      "definition": "An attribute with finite or countable possible values."
    },
    {
      "term": "Continuous",
      "definition": "An attribute represented by real-valued measurements."
    },
    {
      "term": "Asymmetric attribute",
      "definition": "An attribute where non-zero presence matters more than zero absence."
    }
  ],
  "insights": [
    {
      "label": "Modeling",
      "title": "Storage type is not measurement level",
      "body": "An integer column may be an ID, an ordinal code, a count, or a ratio value. Metadata should record the semantic scale so preprocessing and model selection cannot silently treat labels as quantities."
    },
    {
      "label": "Data quality",
      "title": "Preprocessing is a modeling decision",
      "body": "Cleaning and transformation are not clerical steps. They determine which relationships survive and which algorithmic assumptions become defensible."
    },
    {
      "label": "Similarity",
      "title": "Choose distance after choosing semantics",
      "body": "A similarity matrix can hide invalid arithmetic if nominal categories are encoded as arbitrary integers. Encode the measurement level before selecting a distance or kernel."
    },
    {
      "label": "Sparse data",
      "title": "Zeros can be evidence of absence, not similarity",
      "body": "For sparse baskets, symptoms, or course enrolments, shared zeros dominate the table. Jaccard-style presence-focused measures often express the question better than a symmetric match count."
    },
    {
      "label": "Governance",
      "title": "Document transformations as provenance",
      "body": "A change from Celsius to Fahrenheit is not interchangeable with a change from kilograms to grams. Record the permitted transformation and its constants so later analysis remains reproducible."
    }
  ],
  "resources": [
    {
      "type": "Reference",
      "title": "Data Mining: Concepts and Techniques",
      "creator": "Jiawei Han, Micheline Kamber, Jian Pei",
      "why": "The textbook family used for the lecture's terminology and the nominal/ordinal/interval/ratio treatment.",
      "url": "https://www.cs.sfu.ca/~jpei/publications/book/"
    },
    {
      "type": "Reference",
      "title": "NIST/SEMATECH e-Handbook: Levels of Measurement",
      "creator": "National Institute of Standards and Technology",
      "why": "A standards-oriented reference for nominal, ordinal, interval, and ratio measurement levels.",
      "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm"
    },
    {
      "type": "Reference",
      "title": "scikit-learn preprocessing and encoding",
      "creator": "scikit-learn documentation",
      "why": "Practical guidance for encoding categorical variables and scaling numeric features without confusing representation with semantics.",
      "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
    },
    {
      "type": "Reference",
      "title": "Jaccard similarity",
      "creator": "Wikipedia / primary concept references",
      "why": "A compact follow-up for presence-focused similarity on asymmetric binary data; compare it with symmetric matching before using it.",
      "url": "https://en.wikipedia.org/wiki/Jaccard_index"
    }
  ],
  "quiz": [
    {
      "question": "Why must a mining technique be matched to the type of data?",
      "options": [
        "Every algorithm accepts every data type",
        "Different data properties suit different tools",
        "Data type affects only file size",
        "Matching is needed only for images"
      ],
      "answer": 1,
      "explanation": "The instructor says tools and techniques depend on the data's type and properties.",
      "optionNotes": [
        "Incorrect: “Every algorithm accepts every data type” does not match the lecture's definition or evidence.",
        "Correct: The instructor says tools and techniques depend on the data's type and properties.",
        "Incorrect: “Data type affects only file size” does not match the lecture's definition or evidence.",
        "Incorrect: “Matching is needed only for images” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Which pair is listed as a typical data-quality problem?",
      "options": [
        "Missing values and noise",
        "Screen brightness and font size",
        "Keyboard layout and wallpaper",
        "Slide colour and tab order"
      ],
      "answer": 0,
      "explanation": "Missing values, noise, outliers, inconsistency, duplicity, and biasness are named quality issues.",
      "optionNotes": [
        "Correct: Missing values, noise, outliers, inconsistency, duplicity, and biasness are named quality issues.",
        "Incorrect: “Screen brightness and font size” does not match the lecture's definition or evidence.",
        "Incorrect: “Keyboard layout and wallpaper” does not match the lecture's definition or evidence.",
        "Incorrect: “Slide colour and tab order” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What are the two goals of preprocessing stated in the lecture?",
      "options": [
        "Improve quality and modify data for a technique",
        "Delete every row and hide the result",
        "Increase noise and reduce storage",
        "Convert every attribute to text"
      ],
      "answer": 0,
      "explanation": "Preprocessing improves data quality and transforms data into a suitable algorithmic form.",
      "optionNotes": [
        "Correct: Preprocessing improves data quality and transforms data into a suitable algorithmic form.",
        "Incorrect: “Delete every row and hide the result” does not match the lecture's definition or evidence.",
        "Incorrect: “Increase noise and reduce storage” does not match the lecture's definition or evidence.",
        "Incorrect: “Convert every attribute to text” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What may replace raw objects in some analyses?",
      "options": [
        "Relationships such as similarity or dissimilarity",
        "A random file name",
        "Only the first row",
        "A browser cookie"
      ],
      "answer": 0,
      "explanation": "Clustering or anomaly analysis can use pairwise relationships instead of the original objects directly.",
      "optionNotes": [
        "Correct: Clustering or anomaly analysis can use pairwise relationships instead of the original objects directly.",
        "Incorrect: “A random file name” does not match the lecture's definition or evidence.",
        "Incorrect: “Only the first row” does not match the lecture's definition or evidence.",
        "Incorrect: “A browser cookie” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is a data object?",
      "options": [
        "An entity/record described by attributes",
        "Only a database column",
        "A measurement scale",
        "A missing value"
      ],
      "answer": 0,
      "explanation": "Objects may be records, points, vectors, patterns, events, cases, samples, observations, or entities.",
      "optionNotes": [
        "Correct: Objects may be records, points, vectors, patterns, events, cases, samples, observations, or entities.",
        "Incorrect: “Only a database column” does not match the lecture's definition or evidence.",
        "Incorrect: “A measurement scale” does not match the lecture's definition or evidence.",
        "Incorrect: “A missing value” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What does an attribute capture?",
      "options": [
        "A property or characteristic of an object",
        "The entire dataset file",
        "Only an algorithm's runtime",
        "A network password"
      ],
      "answer": 0,
      "explanation": "Attributes describe characteristics such as student ID, year, CGPA, eye colour, or temperature.",
      "optionNotes": [
        "Correct: Attributes describe characteristics such as student ID, year, CGPA, eye colour, or temperature.",
        "Incorrect: “The entire dataset file” does not match the lecture's definition or evidence.",
        "Incorrect: “Only an algorithm's runtime” does not match the lecture's definition or evidence.",
        "Incorrect: “A network password” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is a measurement scale?",
      "options": [
        "A function associating a numerical or symbolic value with an attribute",
        "A list of lecture slides",
        "A clustering algorithm",
        "A data-cleaning error"
      ],
      "answer": 0,
      "explanation": "The scale maps an attribute of a particular object to a value used for analysis.",
      "optionNotes": [
        "Correct: The scale maps an attribute of a particular object to a value used for analysis.",
        "Incorrect: “A list of lecture slides” does not match the lecture's definition or evidence.",
        "Incorrect: “A clustering algorithm” does not match the lecture's definition or evidence.",
        "Incorrect: “A data-cleaning error” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why is averaging employee IDs meaningless?",
      "options": [
        "IDs distinguish objects but have no quantitative magnitude",
        "IDs are always continuous",
        "IDs cannot be stored as integers",
        "Averages require a browser"
      ],
      "answer": 0,
      "explanation": "An ID's valid semantic test is equality/inequality; numerical arithmetic has no meaning for identity.",
      "optionNotes": [
        "Correct: An ID's valid semantic test is equality/inequality; numerical arithmetic has no meaning for identity.",
        "Incorrect: “IDs are always continuous” does not match the lecture's definition or evidence.",
        "Incorrect: “IDs cannot be stored as integers” does not match the lecture's definition or evidence.",
        "Incorrect: “Averages require a browser” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Which operation is valid for a nominal attribute?",
      "options": [
        "Test equality or inequality",
        "Interpret a ratio as twice as large",
        "Subtract values to get a distance",
        "Compute a meaningful average"
      ],
      "answer": 0,
      "explanation": "Nominal values provide names or distinctions, so equality tests are meaningful.",
      "optionNotes": [
        "Correct: Nominal values provide names or distinctions, so equality tests are meaningful.",
        "Incorrect: “Interpret a ratio as twice as large” does not match the lecture's definition or evidence.",
        "Incorrect: “Subtract values to get a distance” does not match the lecture's definition or evidence.",
        "Incorrect: “Compute a meaningful average” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What extra property does an ordinal attribute provide?",
      "options": [
        "An ordering among values",
        "An absolute zero",
        "A guaranteed continuous interval",
        "A unique mathematical ratio"
      ],
      "answer": 0,
      "explanation": "Ordinal values distinguish objects and indicate relative order, but not meaningful distances.",
      "optionNotes": [
        "Correct: Ordinal values distinguish objects and indicate relative order, but not meaningful distances.",
        "Incorrect: “An absolute zero” does not match the lecture's definition or evidence.",
        "Incorrect: “A guaranteed continuous interval” does not match the lecture's definition or evidence.",
        "Incorrect: “A unique mathematical ratio” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Which example is an interval attribute in the lecture?",
      "options": [
        "Celsius temperature",
        "Employee ID",
        "Eye colour",
        "A binary yes/no flag"
      ],
      "answer": 0,
      "explanation": "Celsius/Fahrenheit differences are meaningful, but their zero is not an absolute absence of temperature.",
      "optionNotes": [
        "Correct: Celsius/Fahrenheit differences are meaningful, but their zero is not an absolute absence of temperature.",
        "Incorrect: “Employee ID” does not match the lecture's definition or evidence.",
        "Incorrect: “Eye colour” does not match the lecture's definition or evidence.",
        "Incorrect: “A binary yes/no flag” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What makes a ratio attribute stronger than an interval attribute?",
      "options": [
        "Differences and ratios are meaningful because zero is absolute",
        "It can only be a label",
        "It cannot use arithmetic",
        "It must have exactly two values"
      ],
      "answer": 0,
      "explanation": "Mass, length, counts, monetary quantities, and Kelvin temperature have meaningful ratios.",
      "optionNotes": [
        "Correct: Mass, length, counts, monetary quantities, and Kelvin temperature have meaningful ratios.",
        "Incorrect: “It can only be a label” does not match the lecture's definition or evidence.",
        "Incorrect: “It cannot use arithmetic” does not match the lecture's definition or evidence.",
        "Incorrect: “It must have exactly two values” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why is 100°C not twice as hot as 50°C?",
      "options": [
        "Celsius zero is not an absolute zero",
        "Celsius has no numerical values",
        "50°C is nominal",
        "The values are always equal"
      ],
      "answer": 0,
      "explanation": "An arbitrary origin makes Celsius an interval scale; ratio comparisons require an absolute zero.",
      "optionNotes": [
        "Correct: An arbitrary origin makes Celsius an interval scale; ratio comparisons require an absolute zero.",
        "Incorrect: “Celsius has no numerical values” does not match the lecture's definition or evidence.",
        "Incorrect: “50°C is nominal” does not match the lecture's definition or evidence.",
        "Incorrect: “The values are always equal” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is the permitted transformation for a nominal scale?",
      "options": [
        "Any one-to-one relabeling",
        "Only adding a constant",
        "Only multiplying by a positive constant",
        "Any non-monotonic ordering"
      ],
      "answer": 0,
      "explanation": "Nominal meaning is preserved by a permutation because only identity/equality matters.",
      "optionNotes": [
        "Correct: Nominal meaning is preserved by a permutation because only identity/equality matters.",
        "Incorrect: “Only adding a constant” does not match the lecture's definition or evidence.",
        "Incorrect: “Only multiplying by a positive constant” does not match the lecture's definition or evidence.",
        "Incorrect: “Any non-monotonic ordering” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What kind of transformation preserves an ordinal scale?",
      "options": [
        "An order-preserving monotonic transformation",
        "Any random permutation",
        "A transformation that reverses selected pairs",
        "Only a logarithm with no order"
      ],
      "answer": 0,
      "explanation": "Ordinal semantics require that the relative order remain unchanged.",
      "optionNotes": [
        "Correct: Ordinal semantics require that the relative order remain unchanged.",
        "Incorrect: “Any random permutation” does not match the lecture's definition or evidence.",
        "Incorrect: “A transformation that reverses selected pairs” does not match the lecture's definition or evidence.",
        "Incorrect: “Only a logarithm with no order” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Which transformation describes an interval scale?",
      "options": [
        "new = a × old + b",
        "new = old² with arbitrary reversals",
        "new = old + a different b for every row",
        "new = old / zero"
      ],
      "answer": 0,
      "explanation": "Interval scales allow a positive rescaling and a shifted origin.",
      "optionNotes": [
        "Correct: Interval scales allow a positive rescaling and a shifted origin.",
        "Incorrect: “new = old² with arbitrary reversals” does not match the lecture's definition or evidence.",
        "Incorrect: “new = old + a different b for every row” does not match the lecture's definition or evidence.",
        "Incorrect: “new = old / zero” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Which transformation preserves a ratio scale?",
      "options": [
        "new = a × old",
        "new = a × old + b",
        "new = a random label",
        "new = reverse only the middle values"
      ],
      "answer": 0,
      "explanation": "Adding b would change the absolute zero and distort meaningful ratios.",
      "optionNotes": [
        "Correct: Adding b would change the absolute zero and distort meaningful ratios.",
        "Incorrect: “new = a × old + b” does not match the lecture's definition or evidence.",
        "Incorrect: “new = a random label” does not match the lecture's definition or evidence.",
        "Incorrect: “new = reverse only the middle values” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is a discrete attribute?",
      "options": [
        "An attribute with a finite or countable set of values",
        "An attribute with every real number",
        "An attribute that must be text",
        "An attribute with no possible values"
      ],
      "answer": 0,
      "explanation": "PIN codes and counts are examples of discrete attributes.",
      "optionNotes": [
        "Correct: PIN codes and counts are examples of discrete attributes.",
        "Incorrect: “An attribute with every real number” does not match the lecture's definition or evidence.",
        "Incorrect: “An attribute that must be text” does not match the lecture's definition or evidence.",
        "Incorrect: “An attribute with no possible values” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "When is a discrete attribute binary?",
      "options": [
        "When it has exactly two possible values",
        "When it has millions of values",
        "When it is always continuous",
        "When its values have a meaningful ratio"
      ],
      "answer": 0,
      "explanation": "True/false, yes/no, zero/one, and male/female examples illustrate the two-value special case.",
      "optionNotes": [
        "Correct: True/false, yes/no, zero/one, and male/female examples illustrate the two-value special case.",
        "Incorrect: “When it has millions of values” does not match the lecture's definition or evidence.",
        "Incorrect: “When it is always continuous” does not match the lecture's definition or evidence.",
        "Incorrect: “When its values have a meaningful ratio” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What is a continuous attribute?",
      "options": [
        "One whose values are real numbers",
        "One that has only yes/no",
        "One used only for IDs",
        "One that cannot be measured"
      ],
      "answer": 0,
      "explanation": "Temperature and height are given as continuous examples, typically represented with floating-point values.",
      "optionNotes": [
        "Correct: Temperature and height are given as continuous examples, typically represented with floating-point values.",
        "Incorrect: “One that has only yes/no” does not match the lecture's definition or evidence.",
        "Incorrect: “One used only for IDs” does not match the lecture's definition or evidence.",
        "Incorrect: “One that cannot be measured” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Which combination is described as generally meaningful?",
      "options": [
        "A count can be discrete and ratio-scaled",
        "A binary attribute must be continuous",
        "Every nominal value is ratio-scaled",
        "Every ordinal distance is an interval"
      ],
      "answer": 0,
      "explanation": "Counts are discrete, and their absolute zero makes ratios meaningful.",
      "optionNotes": [
        "Correct: Counts are discrete, and their absolute zero makes ratios meaningful.",
        "Incorrect: “A binary attribute must be continuous” does not match the lecture's definition or evidence.",
        "Incorrect: “Every nominal value is ratio-scaled” does not match the lecture's definition or evidence.",
        "Incorrect: “Every ordinal distance is an interval” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What makes a binary attribute asymmetric?",
      "options": [
        "Presence/non-zero is important while absence/zero is not",
        "Both values must be equally important",
        "Only zero is important",
        "It must be continuous"
      ],
      "answer": 0,
      "explanation": "Asymmetric analysis focuses on informative presences such as a course taken or a disease present.",
      "optionNotes": [
        "Correct: Asymmetric analysis focuses on informative presences such as a course taken or a disease present.",
        "Incorrect: “Both values must be equally important” does not match the lecture's definition or evidence.",
        "Incorrect: “Only zero is important” does not match the lecture's definition or evidence.",
        "Incorrect: “It must be continuous” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Why are student-course presences compared asymmetrically?",
      "options": [
        "Students take few courses, so shared absences would make everyone look similar",
        "Every student takes every course",
        "Zero means a course was taken",
        "Courses cannot be represented by binary values"
      ],
      "answer": 0,
      "explanation": "With many courses and few ones per student, matching zeros is uninformative.",
      "optionNotes": [
        "Correct: With many courses and few ones per student, matching zeros is uninformative.",
        "Incorrect: “Every student takes every course” does not match the lecture's definition or evidence.",
        "Incorrect: “Zero means a course was taken” does not match the lecture's definition or evidence.",
        "Incorrect: “Courses cannot be represented by binary values” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "Which application particularly benefits from asymmetric attributes?",
      "options": [
        "Association analysis",
        "Changing a browser theme",
        "Printing a timetable",
        "Sorting file names alphabetically"
      ],
      "answer": 0,
      "explanation": "The lecture highlights association analysis, where co-presence of items is the informative signal.",
      "optionNotes": [
        "Correct: The lecture highlights association analysis, where co-presence of items is the informative signal.",
        "Incorrect: “Changing a browser theme” does not match the lecture's definition or evidence.",
        "Incorrect: “Printing a timetable” does not match the lecture's definition or evidence.",
        "Incorrect: “Sorting file names alphabetically” does not match the lecture's definition or evidence."
      ]
    },
    {
      "question": "What did the lecture say about an attribute's representation and its semantics?",
      "options": [
        "The representation's properties may differ from the attribute's properties",
        "They are always identical",
        "Only the representation matters",
        "Semantics cannot be measured"
      ],
      "answer": 0,
      "explanation": "The ID/age comparison shows that integer representation does not grant numerical meaning to an attribute.",
      "optionNotes": [
        "Correct: The ID/age comparison shows that integer representation does not grant numerical meaning to an attribute.",
        "Incorrect: “They are always identical” does not match the lecture's definition or evidence.",
        "Incorrect: “Only the representation matters” does not match the lecture's definition or evidence.",
        "Incorrect: “Semantics cannot be measured” does not match the lecture's definition or evidence."
      ]
    }
  ]
}
};
