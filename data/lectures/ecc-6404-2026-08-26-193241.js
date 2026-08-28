// English-only publication unit.
export const ecc6404Lecture20260826 = {
  en: {
  "title": "Data quality, preprocessing, and representative sampling",
  "lede": "This Data Warehousing lecture moves from measurement quality (precision, bias, accuracy, significant digits) through outliers, noise, missing/inconsistent/duplicate data, application-level quality, and the preprocessing toolkit of aggregation and sampling.",
  "instructionalInterval": "00:02:16–01:25:35 source time (01:43:40 reported duration; idle tail excluded)",
  "reviewLevel": "View-only Stream recording; distributed sweep, 2× playback, timestamped transcript, slide-frame evidence, and idle-tail exclusion verified.",
  "coverage": [
    {
      "title": "Measurement quality",
      "body": "Separate precision (repeatability), bias (systematic deviation), and accuracy (closeness to truth); report only significant digits justified by precision."
    },
    {
      "title": "Outliers and noise",
      "body": "An outlier can be a valid rare observation, while noise is unwanted random or irrelevant variation that degrades quality."
    },
    {
      "title": "Missing values",
      "body": "Choose deletion, estimation, or analysis-time ignoring carefully; interpolation, nearest-neighbor averages, and local modes fit different contexts."
    },
    {
      "title": "Consistency and duplicates",
      "body": "Validate cross-field contradictions and deduplicate near-identical objects without merging distinct real-world entities."
    },
    {
      "title": "Application fit",
      "body": "Timeliness, relevance, sampling bias, and metadata determine whether data supports the intended analysis."
    },
    {
      "title": "Preprocessing and sampling",
      "body": "Aggregation reduces size and variability; representative sampling requires a suitable technique and sample size, including stratification for rare groups."
    }
  ],
  "takeaway": "Preserve the data characteristics that carry the signal: define measurement semantics, expose quality problems, and select preprocessing and sampling strategies that do not distort the population.",
  "slideTrail": [
    {
      "time": "02:16",
      "title": "Data Quality – Measurement and Data Collection Issues: Precision, Bias, and Accuracy",
      "note": "Precision is closeness among repeated measurements; bias is systematic variation from the measured quantity; accuracy is closeness to the true value."
    },
    {
      "time": "06:57",
      "title": "Accuracy and significant digits",
      "note": "Significant digits must be justified by measurement precision; unsupported digits create false confidence in a result."
    },
    {
      "time": "11:52",
      "title": "Outliers",
      "note": "Outliers are unusual data objects or attribute values and may be legitimate, unlike unwanted noise."
    },
    {
      "time": "14:59",
      "title": "Noise versus outlier",
      "note": "Noise is random/irrelevant variation that degrades quality; an outlier can represent a rare phenomenon worth analysis."
    },
    {
      "time": "20:40",
      "title": "Missing Values",
      "note": "Values may be missing because information was not collected or an attribute is not applicable to every object."
    },
    {
      "time": "23:38",
      "title": "Handling missing values: eliminate objects or attributes",
      "note": "Deletion is acceptable only when it does not distort the original patterns or characteristics."
    },
    {
      "time": "29:31",
      "title": "Estimate missing values",
      "note": "Use interpolation for time series; use nearby-object averages for continuous attributes and local modes for categorical attributes."
    },
    {
      "time": "33:13",
      "title": "Ignore missing values during analysis",
      "note": "Pairwise similarity or classification can be adapted to use available attributes, with the result understood as approximate."
    },
    {
      "time": "36:22",
      "title": "Inconsistent Values",
      "note": "A city/postal-code contradiction illustrates why cross-field checks and domain knowledge are needed."
    },
    {
      "time": "40:23",
      "title": "Duplicate Data and Deduplication",
      "note": "Near-duplicates can encode one entity with different strings; deduplication must also avoid merging distinct entities with similar attributes."
    },
    {
      "time": "49:08",
      "title": "Data quality from the application viewpoint: Timeliness",
      "note": "Purchasing and browsing behavior age, so stale data can yield stale models and patterns."
    },
    {
      "time": "51:21",
      "title": "Relevance",
      "note": "The available attributes must contain the information required by the application; omitted drivers' age or gender can undermine an accident model."
    },
    {
      "time": "53:37",
      "title": "Sampling Bias",
      "note": "If sample proportions do not match the population, especially for rare classes, analysis may not reflect the true picture."
    },
    {
      "time": "55:50",
      "title": "Knowledge about the data",
      "note": "Metadata documents feature meaning, measurement level, precision, and sentinel values such as –9999."
    },
    {
      "time": "60:08",
      "title": "Data Preprocessing",
      "note": "Preprocessing selects/changes objects and attributes to improve mining time, cost, and quality."
    },
    {
      "time": "61:08",
      "title": "Aggregation",
      "note": "Summing or averaging quantitative attributes reduces data size and variability but can lose detail."
    },
    {
      "time": "69:53",
      "title": "Sampling",
      "note": "Sampling analyzes a subset when the full dataset is expensive; the subset must remain representative."
    },
    {
      "time": "75:59",
      "title": "Sampling with and without replacement",
      "note": "Without replacement removes selected objects; with replacement leaves them available for another selection."
    },
    {
      "time": "78:44",
      "title": "Simple random sampling",
      "note": "Every item has equal selection probability, but rare groups may be underrepresented."
    },
    {
      "time": "81:25",
      "title": "Stratified sampling and sample size",
      "note": "Equal or proportionate draws from groups protect rare-class representation; sample size balances representativeness and efficiency."
    }
  ],
  "summary": [
    {
      "title": "1. Precision, bias, accuracy, and significant digits",
      "sourceRefs": [
        "02:16–10:00",
        "Slide: Data Quality – Measurement and Data Collection Issues"
      ],
      "paragraphs": [
        "Repeated measurements let us reason about precision and bias. Precision is the closeness of repeated values to one another and is often summarized with standard deviation. Bias is a systematic deviation from the quantity being measured, while accuracy is the closeness of measurements to the known true value.",
        "Accuracy is a general concept rather than a single formula made from precision and bias. Reporting significant digits is part of the discipline: only show detail supported by the precision of the instrument or process, otherwise downstream analysis may imply a certainty the data does not have."
      ]
    },
    {
      "title": "2. Outliers, noise, and missing values",
      "sourceRefs": [
        "11:52–33:13",
        "Slides: Outliers / Noise versus outlier / Missing Values"
      ],
      "paragraphs": [
        "An outlier is an unusual object or attribute value that differs from the dominant pattern. It may be an error, but it may also be a valid rare event—the seven-foot person example is unusual without being noise. Noise is unwanted random or irrelevant variation that degrades data quality and can obscure a signal.",
        "Missing values arise through non-collection or non-applicability and must be handled in context. The lecture presents deletion only when characteristics remain intact, interpolation for time series, neighbor-based estimates for continuous or categorical fields, and analysis methods that ignore a missing attribute while accepting approximate similarity."
      ]
    },
    {
      "title": "3. Inconsistency and deduplication",
      "sourceRefs": [
        "36:22–47:00",
        "Slides: Inconsistent Values / Duplicate Data"
      ],
      "paragraphs": [
        "Inconsistent values violate known cross-field or domain constraints, such as an impossible city–postal-code pairing. Detection may require redundant information or a domain expert. A dataset can also contain exact or near-duplicate objects, for example a full name and an abbreviation that refer to one person.",
        "Deduplication is preprocessing that resolves inconsistent representations, but similarity is not proof of identity. Two distinct people can share the same captured attributes if the database omitted the distinguishing field, so entity resolution should use evidence and avoid accidental merges."
      ]
    },
    {
      "title": "4. Application-level data quality",
      "sourceRefs": [
        "49:08–58:00",
        "Slides: Timeliness / Relevance / Sampling Bias / Knowledge about the Data"
      ],
      "paragraphs": [
        "Data quality is relative to intended use. Timeliness matters because behavior ages after collection; a stale model can be analytically correct for the past and useless for today. Relevance means the available data contains the attributes needed for the application, not merely many attributes.",
        "Sampling bias occurs when object types are not present in their population proportions, especially when a rare class is underrepresented. Documentation or metadata supplies feature semantics, measurement levels, precision, and missing-value conventions; without it, a sentinel such as –9999 can be treated as a real number and corrupt results."
      ]
    },
    {
      "title": "5. Why preprocessing changes the mining problem",
      "sourceRefs": [
        "60:08–68:30",
        "Slide: Data Preprocessing"
      ],
      "paragraphs": [
        "Preprocessing prepares data for mining through aggregation, sampling, dimensionality reduction, feature selection or creation, discretization/binarization, and variable transformation. These operations either select objects/attributes or create/change attributes, with the goal of improving time, cost, and result quality.",
        "Aggregation combines objects into a summary. Sums or averages suit quantitative attributes; qualitative attributes may be summarized or omitted only when that does not destroy the question's signal. Aggregation reduces memory and variability and can enable more expensive algorithms, but it sacrifices fine-grained detail."
      ]
    },
    {
      "title": "6. Sampling without distorting the population",
      "sourceRefs": [
        "69:53–85:35",
        "Slide: Data Preprocessing – Sampling … Contd"
      ],
      "paragraphs": [
        "Sampling analyzes a subset when processing the full dataset is too expensive. Its central requirement is representativeness: the subset should approximately preserve the original properties. The method and the sample size must be chosen together; a huge sample loses efficiency, while a tiny sample can miss patterns.",
        "Without replacement removes each selected object from the population. With replacement leaves it available, so an object can appear more than once; the difference is small when the sample is tiny relative to the population. Simple random sampling gives each item equal probability but may miss rare groups. Stratified sampling deliberately draws equal or population-proportionate counts from groups to protect their representation."
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
      "term": "Precision",
      "definition": "Closeness of repeated measurements to one another."
    },
    {
      "term": "Bias",
      "definition": "Systematic variation from the quantity being measured."
    },
    {
      "term": "Accuracy",
      "definition": "Closeness of measurements to the true value."
    },
    {
      "term": "Outlier",
      "definition": "An unusual object or value that deviates from the rest."
    },
    {
      "term": "Noise",
      "definition": "Random or irrelevant variation that degrades data quality."
    },
    {
      "term": "Missing value",
      "definition": "An attribute value that was not collected or is not applicable."
    },
    {
      "term": "Deduplication",
      "definition": "Preprocessing to resolve duplicate or near-duplicate objects."
    },
    {
      "term": "Timeliness",
      "definition": "Whether data remains pertinent for the intended use over time."
    },
    {
      "term": "Relevance",
      "definition": "Whether data contains information necessary for the application."
    },
    {
      "term": "Sampling bias",
      "definition": "Mismatch between sample composition and population composition."
    },
    {
      "term": "Aggregation",
      "definition": "Combining objects into a summarized object or view."
    },
    {
      "term": "Stratified sampling",
      "definition": "Sampling that deliberately represents each group."
    }
  ],
  "insights": [
    {
      "label": "Measurement",
      "title": "Precision is not truth",
      "body": "A tightly clustered set of repeated measurements can still be systematically biased. Track repeatability and calibration separately before calling a value accurate."
    },
    {
      "label": "Data quality",
      "title": "Treat outliers as hypotheses",
      "body": "Filtering every unusual value can delete the rare event the model should detect. First distinguish sensor noise from a legitimate but uncommon object and record the decision."
    },
    {
      "label": "Missingness",
      "title": "The missingness mechanism matters",
      "body": "Deletion, interpolation, local-mode imputation, and pairwise ignoring make different assumptions. Compare the resulting population characteristics and document the choice."
    },
    {
      "label": "Entity resolution",
      "title": "Similarity is evidence, not identity",
      "body": "Near-duplicate matching should combine multiple stable fields and preserve an uncertainty path; a short name or shared measured attributes alone can merge distinct entities."
    },
    {
      "label": "Sampling",
      "title": "Choose the sample with the model in mind",
      "body": "A representative sample for estimating overall averages may be inadequate for rare-event detection. Use strata or evaluation weights when the decision depends on minority groups."
    }
  ],
  "resources": [
    {
      "type": "Reference",
      "title": "Data Mining: Concepts and Techniques",
      "creator": "Jiawei Han, Micheline Kamber, Jian Pei",
      "why": "The lecture's dataset-quality and preprocessing terminology follows this widely used data-mining text.",
      "url": "https://www.cs.sfu.ca/~jpei/publications/book/"
    },
    {
      "type": "Reference",
      "title": "NIST/SEMATECH e-Handbook: Exploratory Data Analysis",
      "creator": "National Institute of Standards and Technology",
      "why": "Authoritative follow-up for measurement, uncertainty, outliers, and exploratory quality checks.",
      "url": "https://www.itl.nist.gov/div898/handbook/"
    },
    {
      "type": "Further reading",
      "title": "pandas: Working with missing data",
      "creator": "pandas documentation",
      "why": "Practical examples of detecting, dropping, filling, and interpolating missing values in tabular workflows.",
      "url": "https://pandas.pydata.org/docs/user_guide/missing_data.html"
    },
    {
      "type": "Further reading",
      "title": "scikit-learn: Imputation of missing values",
      "creator": "scikit-learn documentation",
      "why": "Compare simple and nearest-neighbor imputers and understand their assumptions before applying them.",
      "url": "https://scikit-learn.org/stable/modules/impute.html"
    },
    {
      "type": "Further reading",
      "title": "Sampling (statistics)",
      "creator": "NIST/SEMATECH e-Handbook",
      "why": "Review probability, stratification, and sample-size trade-offs that sit behind the lecture's practical guidance.",
      "url": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda33.htm"
    }
  ],
  "quiz": [
    {
      "question": "What does precision describe?",
      "options": [
        "Closeness of repeated measurements to one another",
        "Distance from the known true value only",
        "Number of database rows",
        "A sampling probability"
      ],
      "answer": 0,
      "explanation": "Precision is the agreement among repeated measurements; standard deviation is a common way to quantify it.",
      "optionNotes": [
        "Correct: Precision is the agreement among repeated measurements; standard deviation is a common way to quantify it.",
        "Incorrect: “Distance from the known true value only” does not match the lecture's concept.",
        "Incorrect: “Number of database rows” does not match the lecture's concept.",
        "Incorrect: “A sampling probability” does not match the lecture's concept."
      ]
    },
    {
      "question": "What is measurement bias?",
      "options": [
        "A systematic variation from the quantity being measured",
        "Random irrelevant variation",
        "A duplicate database row",
        "A balanced sample"
      ],
      "answer": 0,
      "explanation": "Bias is systematic error relative to the quantity being measured, not random scatter.",
      "optionNotes": [
        "Correct: Bias is systematic error relative to the quantity being measured, not random scatter.",
        "Incorrect: “Random irrelevant variation” does not match the lecture's concept.",
        "Incorrect: “A duplicate database row” does not match the lecture's concept.",
        "Incorrect: “A balanced sample” does not match the lecture's concept."
      ]
    },
    {
      "question": "How is accuracy defined in the lecture?",
      "options": [
        "Closeness of measurements to the true value",
        "Closeness of repeated values to each other",
        "Number of significant digits alone",
        "The size of a sample"
      ],
      "answer": 0,
      "explanation": "Accuracy concerns error relative to the true value; precision and bias inform it but do not provide one universal formula for it.",
      "optionNotes": [
        "Correct: Accuracy concerns error relative to the true value; precision and bias inform it but do not provide one universal formula for it.",
        "Incorrect: “Closeness of repeated values to each other” does not match the lecture's concept.",
        "Incorrect: “Number of significant digits alone” does not match the lecture's concept.",
        "Incorrect: “The size of a sample” does not match the lecture's concept."
      ]
    },
    {
      "question": "Why should significant digits reflect precision?",
      "options": [
        "Extra digits imply unsupported measurement detail",
        "More digits always remove bias",
        "Digits determine the sample class",
        "They replace validation"
      ],
      "answer": 0,
      "explanation": "Reporting only digits justified by measurement precision avoids false accuracy.",
      "optionNotes": [
        "Correct: Reporting only digits justified by measurement precision avoids false accuracy.",
        "Incorrect: “More digits always remove bias” does not match the lecture's concept.",
        "Incorrect: “Digits determine the sample class” does not match the lecture's concept.",
        "Incorrect: “They replace validation” does not match the lecture's concept."
      ]
    },
    {
      "question": "What is an outlier?",
      "options": [
        "An unusual object or attribute value that differs from the rest",
        "Always a random error",
        "Always an invalid row",
        "A missing value marker"
      ],
      "answer": 0,
      "explanation": "An outlier deviates markedly from typical observations and may be valid or erroneous.",
      "optionNotes": [
        "Correct: An outlier deviates markedly from typical observations and may be valid or erroneous.",
        "Incorrect: “Always a random error” does not match the lecture's concept.",
        "Incorrect: “Always an invalid row” does not match the lecture's concept.",
        "Incorrect: “A missing value marker” does not match the lecture's concept."
      ]
    },
    {
      "question": "How does noise differ from an outlier?",
      "options": [
        "Noise is random/irrelevant variation; an outlier may be a meaningful rare case",
        "Noise is always useful and outliers are always bad",
        "They are identical terms",
        "Noise means a duplicate only"
      ],
      "answer": 0,
      "explanation": "The lecture treats noise as unwanted degradation, while an outlier can contain a rare signal worth investigating.",
      "optionNotes": [
        "Correct: The lecture treats noise as unwanted degradation, while an outlier can contain a rare signal worth investigating.",
        "Incorrect: “Noise is always useful and outliers are always bad” does not match the lecture's concept.",
        "Incorrect: “They are identical terms” does not match the lecture's concept.",
        "Incorrect: “Noise means a duplicate only” does not match the lecture's concept."
      ]
    },
    {
      "question": "Why can an attribute value be missing?",
      "options": [
        "It was not collected or is not applicable to the object",
        "The value is automatically a zero",
        "Missingness proves duplication",
        "The dataset has no attributes"
      ],
      "answer": 0,
      "explanation": "The lecture gives non-collection and non-applicability as ordinary causes of missing values.",
      "optionNotes": [
        "Correct: The lecture gives non-collection and non-applicability as ordinary causes of missing values.",
        "Incorrect: “The value is automatically a zero” does not match the lecture's concept.",
        "Incorrect: “Missingness proves duplication” does not match the lecture's concept.",
        "Incorrect: “The dataset has no attributes” does not match the lecture's concept."
      ]
    },
    {
      "question": "When is eliminating objects or attributes a safe missing-value strategy?",
      "options": [
        "When removal does not distort the original data characteristics",
        "Whenever any value is missing",
        "Only when the dataset is tiny",
        "When it maximizes the number of columns"
      ],
      "answer": 0,
      "explanation": "Deletion is acceptable only when the informative patterns and general properties remain intact.",
      "optionNotes": [
        "Correct: Deletion is acceptable only when the informative patterns and general properties remain intact.",
        "Incorrect: “Whenever any value is missing” does not match the lecture's concept.",
        "Incorrect: “Only when the dataset is tiny” does not match the lecture's concept.",
        "Incorrect: “When it maximizes the number of columns” does not match the lecture's concept."
      ]
    },
    {
      "question": "Which method can estimate a missing value in a time series?",
      "options": [
        "Interpolation",
        "Randomly deleting neighbors",
        "Changing the filename",
        "Counting duplicate rows"
      ],
      "answer": 0,
      "explanation": "Interpolation uses surrounding time-ordered measurements to estimate a gap.",
      "optionNotes": [
        "Correct: Interpolation uses surrounding time-ordered measurements to estimate a gap.",
        "Incorrect: “Randomly deleting neighbors” does not match the lecture's concept.",
        "Incorrect: “Changing the filename” does not match the lecture's concept.",
        "Incorrect: “Counting duplicate rows” does not match the lecture's concept."
      ]
    },
    {
      "question": "How can a continuous missing value be estimated from similar objects?",
      "options": [
        "Average the attribute values of nearest neighbors",
        "Choose the rarest category",
        "Use a random filename",
        "Drop every attribute"
      ],
      "answer": 0,
      "explanation": "For a continuous attribute, the lecture proposes the average value among nearby similar objects.",
      "optionNotes": [
        "Correct: For a continuous attribute, the lecture proposes the average value among nearby similar objects.",
        "Incorrect: “Choose the rarest category” does not match the lecture's concept.",
        "Incorrect: “Use a random filename” does not match the lecture's concept.",
        "Incorrect: “Drop every attribute” does not match the lecture's concept."
      ]
    },
    {
      "question": "What is a sensible estimate for a categorical missing value?",
      "options": [
        "The most commonly occurring value among similar objects",
        "A negative height",
        "The largest numeric value",
        "An arbitrary new category"
      ],
      "answer": 0,
      "explanation": "For categorical data, the local mode is a plausible estimate when the context supports it.",
      "optionNotes": [
        "Correct: For categorical data, the local mode is a plausible estimate when the context supports it.",
        "Incorrect: “A negative height” does not match the lecture's concept.",
        "Incorrect: “The largest numeric value” does not match the lecture's concept.",
        "Incorrect: “An arbitrary new category” does not match the lecture's concept."
      ]
    },
    {
      "question": "What does ignoring a missing value during similarity calculation mean?",
      "options": [
        "Use only attributes available for both objects",
        "Delete the whole dataset",
        "Treat every missing value as identical",
        "Invent a new object"
      ],
      "answer": 0,
      "explanation": "The pairwise similarity can be computed on the non-missing attributes, with the result acknowledged as approximate.",
      "optionNotes": [
        "Correct: The pairwise similarity can be computed on the non-missing attributes, with the result acknowledged as approximate.",
        "Incorrect: “Delete the whole dataset” does not match the lecture's concept.",
        "Incorrect: “Treat every missing value as identical” does not match the lecture's concept.",
        "Incorrect: “Invent a new object” does not match the lecture's concept."
      ]
    },
    {
      "question": "Which is an example of an inconsistent value?",
      "options": [
        "A city paired with a postal code that cannot belong to it",
        "A valid seven-foot height",
        "A repeated measurement",
        "A documented category"
      ],
      "answer": 0,
      "explanation": "An address whose city and postal code disagree is a cross-field inconsistency requiring validation or domain knowledge.",
      "optionNotes": [
        "Correct: An address whose city and postal code disagree is a cross-field inconsistency requiring validation or domain knowledge.",
        "Incorrect: “A valid seven-foot height” does not match the lecture's concept.",
        "Incorrect: “A repeated measurement” does not match the lecture's concept.",
        "Incorrect: “A documented category” does not match the lecture's concept."
      ]
    },
    {
      "question": "What is a near-duplicate?",
      "options": [
        "Different-looking records that carry nearly the same information",
        "Two values with no relation",
        "A missing attribute",
        "A random sample"
      ],
      "answer": 0,
      "explanation": "For example, abbreviated and full names for the same city may describe one real-world entity.",
      "optionNotes": [
        "Correct: For example, abbreviated and full names for the same city may describe one real-world entity.",
        "Incorrect: “Two values with no relation” does not match the lecture's concept.",
        "Incorrect: “A missing attribute” does not match the lecture's concept.",
        "Incorrect: “A random sample” does not match the lecture's concept."
      ]
    },
    {
      "question": "What is deduplication?",
      "options": [
        "The preprocessing process of handling duplicate or near-duplicate objects",
        "Adding more copies to a dataset",
        "Estimating a time-series gap",
        "Scaling every feature"
      ],
      "answer": 0,
      "explanation": "Deduplication resolves inconsistent representations while preventing distinct but similar entities from being merged accidentally.",
      "optionNotes": [
        "Correct: Deduplication resolves inconsistent representations while preventing distinct but similar entities from being merged accidentally.",
        "Incorrect: “Adding more copies to a dataset” does not match the lecture's concept.",
        "Incorrect: “Estimating a time-series gap” does not match the lecture's concept.",
        "Incorrect: “Scaling every feature” does not match the lecture's concept."
      ]
    },
    {
      "question": "What does timeliness mean for application-level data quality?",
      "options": [
        "Data remains pertinent as the application needs it",
        "Every value is measured repeatedly",
        "All records are duplicates",
        "The file has a recent name"
      ],
      "answer": 0,
      "explanation": "Data can age after collection; stale purchasing or browsing behavior may no longer support a current model.",
      "optionNotes": [
        "Correct: Data can age after collection; stale purchasing or browsing behavior may no longer support a current model.",
        "Incorrect: “Every value is measured repeatedly” does not match the lecture's concept.",
        "Incorrect: “All records are duplicates” does not match the lecture's concept.",
        "Incorrect: “The file has a recent name” does not match the lecture's concept."
      ]
    },
    {
      "question": "What is relevance?",
      "options": [
        "The data contains information necessary for the intended application",
        "The data is always recent",
        "The data has the most columns possible",
        "The data is sampled with replacement"
      ],
      "answer": 0,
      "explanation": "A driver-accident model without important attributes such as age or gender may be unsuitable for its purpose.",
      "optionNotes": [
        "Correct: A driver-accident model without important attributes such as age or gender may be unsuitable for its purpose.",
        "Incorrect: “The data is always recent” does not match the lecture's concept.",
        "Incorrect: “The data has the most columns possible” does not match the lecture's concept.",
        "Incorrect: “The data is sampled with replacement” does not match the lecture's concept."
      ]
    },
    {
      "question": "What causes sampling bias?",
      "options": [
        "The sample proportions differ from object types' proportions in the population",
        "Every group is represented exactly",
        "Only numeric features are used",
        "The sample is always too large"
      ],
      "answer": 0,
      "explanation": "A rare class can be underrepresented by simple sampling, so analysis fails to reflect the population.",
      "optionNotes": [
        "Correct: A rare class can be underrepresented by simple sampling, so analysis fails to reflect the population.",
        "Incorrect: “Every group is represented exactly” does not match the lecture's concept.",
        "Incorrect: “Only numeric features are used” does not match the lecture's concept.",
        "Incorrect: “The sample is always too large” does not match the lecture's concept."
      ]
    },
    {
      "question": "Why is documentation or metadata important?",
      "options": [
        "It explains meaning, precision, scales, and markers such as a missing-value code",
        "It guarantees perfect data",
        "It removes the need for cleaning",
        "It changes every categorical field to numeric"
      ],
      "answer": 0,
      "explanation": "Without metadata, a sentinel such as -9999 can be mistaken for a valid measurement and corrupt analysis.",
      "optionNotes": [
        "Correct: Without metadata, a sentinel such as -9999 can be mistaken for a valid measurement and corrupt analysis.",
        "Incorrect: “It guarantees perfect data” does not match the lecture's concept.",
        "Incorrect: “It removes the need for cleaning” does not match the lecture's concept.",
        "Incorrect: “It changes every categorical field to numeric” does not match the lecture's concept."
      ]
    },
    {
      "question": "What is the main goal of data preprocessing?",
      "options": [
        "Make data more suitable for mining while improving time, cost, or quality",
        "Make every dataset larger",
        "Hide missing values",
        "Remove all relationships"
      ],
      "answer": 0,
      "explanation": "Preprocessing selects or changes objects and attributes so mining algorithms can work with better evidence.",
      "optionNotes": [
        "Correct: Preprocessing selects or changes objects and attributes so mining algorithms can work with better evidence.",
        "Incorrect: “Make every dataset larger” does not match the lecture's concept.",
        "Incorrect: “Hide missing values” does not match the lecture's concept.",
        "Incorrect: “Remove all relationships” does not match the lecture's concept."
      ]
    },
    {
      "question": "How are quantitative attributes commonly aggregated?",
      "options": [
        "By a sum or an average",
        "By choosing a random label",
        "By deleting every numeric value",
        "By counting filenames"
      ],
      "answer": 0,
      "explanation": "Numeric attributes can be summarized with totals or means when that preserves the question's meaning.",
      "optionNotes": [
        "Correct: Numeric attributes can be summarized with totals or means when that preserves the question's meaning.",
        "Incorrect: “By choosing a random label” does not match the lecture's concept.",
        "Incorrect: “By deleting every numeric value” does not match the lecture's concept.",
        "Incorrect: “By counting filenames” does not match the lecture's concept."
      ]
    },
    {
      "question": "What is a trade-off of aggregation?",
      "options": [
        "It reduces size and variability but can lose interesting detail",
        "It always increases noise",
        "It guarantees exact individual behavior",
        "It prevents any algorithm from running"
      ],
      "answer": 0,
      "explanation": "Aggregation can enable less memory and more expensive algorithms, but the fine-grained details may disappear.",
      "optionNotes": [
        "Correct: Aggregation can enable less memory and more expensive algorithms, but the fine-grained details may disappear.",
        "Incorrect: “It always increases noise” does not match the lecture's concept.",
        "Incorrect: “It guarantees exact individual behavior” does not match the lecture's concept.",
        "Incorrect: “It prevents any algorithm from running” does not match the lecture's concept."
      ]
    },
    {
      "question": "What makes a sample representative?",
      "options": [
        "It approximately preserves the important properties of the full dataset",
        "It contains only the rarest class",
        "It is always one percent of the data",
        "It changes the original proportions arbitrarily"
      ],
      "answer": 0,
      "explanation": "Representativeness is about preserving data characteristics, not a fixed percentage or a particular file size.",
      "optionNotes": [
        "Correct: Representativeness is about preserving data characteristics, not a fixed percentage or a particular file size.",
        "Incorrect: “It contains only the rarest class” does not match the lecture's concept.",
        "Incorrect: “It is always one percent of the data” does not match the lecture's concept.",
        "Incorrect: “It changes the original proportions arbitrarily” does not match the lecture's concept."
      ]
    },
    {
      "question": "What is true of sampling with replacement?",
      "options": [
        "A selected object remains in the population and can be selected again",
        "A selected object is permanently removed",
        "Every group gets equal count automatically",
        "No sample can be formed"
      ],
      "answer": 0,
      "explanation": "Replacement leaves the object available, so repeated selections are possible.",
      "optionNotes": [
        "Correct: Replacement leaves the object available, so repeated selections are possible.",
        "Incorrect: “A selected object is permanently removed” does not match the lecture's concept.",
        "Incorrect: “Every group gets equal count automatically” does not match the lecture's concept.",
        "Incorrect: “No sample can be formed” does not match the lecture's concept."
      ]
    },
    {
      "question": "Why use stratified sampling for imbalanced groups?",
      "options": [
        "It deliberately draws equal or proportionate counts from each group",
        "It ignores rare groups",
        "It always samples only one object",
        "It makes all values continuous"
      ],
      "answer": 0,
      "explanation": "Stratification protects representation of infrequent classes that simple random sampling might miss.",
      "optionNotes": [
        "Correct: Stratification protects representation of infrequent classes that simple random sampling might miss.",
        "Incorrect: “It ignores rare groups” does not match the lecture's concept.",
        "Incorrect: “It always samples only one object” does not match the lecture's concept.",
        "Incorrect: “It makes all values continuous” does not match the lecture's concept."
      ]
    }
  ]
}
};
