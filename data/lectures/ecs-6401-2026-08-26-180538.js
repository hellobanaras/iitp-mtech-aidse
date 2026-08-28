// English-only publication unit.
export const ecs6401Lecture20260826 = {
  en: {
  "title": "Descriptive statistics and preprocessing for time-series analysis",
  "lede": "A verified 00:03:16–01:20:45 teaching interval covering variable types, distributions, summary statistics, visual diagnostics, missing values, outliers, stationarity and transformations.",
  "instructionalInterval": "00:03:16–01:20:45 source time (77m 29s); the waiting-room lead-in and participant-only tail are excluded.",
  "reviewLevel": "Full-timeline visual sweep, 2× bounded capture, timestamped transcript and slide-contact-sheet review",
  "coverage": [
    {
      "title": "Variables and distributions",
      "body": "Categorical versus quantitative data, discrete versus continuous variables, and normal, exponential and skewed distribution shapes."
    },
    {
      "title": "Summaries and visual diagnostics",
      "body": "Mean, median, mode, range, quartiles, IQR, variance, standard deviation, bar charts, histograms, box plots and line plots."
    },
    {
      "title": "Time-series preparation",
      "body": "Missing-value handling, outlier screening, ACF/PACF, stationarity intuition, ADF testing, differencing and log transformation."
    }
  ],
  "takeaway": "Use the right variable type and more than one diagnostic: clean and visualise the ordered series before deciding how to transform or model it.",
  "slideTrail": [
    {
      "time": "00:03:16",
      "title": "A Taxonomy of Statistics",
      "note": "The opening visual frames statistics as organising, analysing, interpreting and presenting data for decisions."
    },
    {
      "time": "00:05:16",
      "title": "Clinical Data Example",
      "note": "A clinical table demonstrates observations and variables before the lecture distinguishes univariate, bivariate and multivariate views."
    },
    {
      "time": "00:09:16",
      "title": "Types of Variables: Overview",
      "note": "Categorical and quantitative variables are separated, with discrete and continuous quantitative cases introduced."
    },
    {
      "time": "00:12:16",
      "title": "Categorical Variables",
      "note": "Nominal, binary and ordinal examples show why labels and ordered responses need different summaries."
    },
    {
      "time": "00:20:16",
      "title": "Distributions Basics",
      "note": "Normal/Gaussian, exponential and skewed shapes are compared as ways to read a dataset's behaviour."
    },
    {
      "time": "00:27:16",
      "title": "Box plot and histograms for continuous variables",
      "note": "Histogram and box-plot views expose centre, spread, quartiles and unusual values."
    },
    {
      "time": "00:35:16",
      "title": "Mean",
      "note": "The arithmetic mean is introduced and its sensitivity to extreme values is demonstrated."
    },
    {
      "time": "00:36:16",
      "title": "Central Tendency",
      "note": "Mean, median and mode are contrasted, including median selection for odd and even sample sizes."
    },
    {
      "time": "00:38:16",
      "title": "Measures of Variation/Dispersion",
      "note": "Range, variance, standard deviation, quartiles and interquartile range are connected."
    },
    {
      "time": "00:42:16",
      "title": "Why squared deviations?",
      "note": "Squaring deviations prevents cancellation and makes dispersion comparable across examples."
    },
    {
      "time": "00:46:16",
      "title": "Summary Stats: Issues",
      "note": "The visual warns that two datasets can share summary numbers while their shapes and points differ; visualisation is needed."
    },
    {
      "time": "00:48:17",
      "title": "Summary Stats: Issues and visualisation",
      "note": "The lecture transitions from descriptive summaries into a practical data-preprocessing workflow."
    },
    {
      "time": "00:55:16",
      "title": "Missing-value strategies",
      "note": "Drop, forward fill, backward fill, interpolation and seasonal imputation are compared by gap and data context."
    },
    {
      "time": "01:04:16",
      "title": "Mean: example",
      "note": "A worked example links central tendency with outlier sensitivity before z-score and IQR screening."
    },
    {
      "time": "01:10:16",
      "title": "Data preprocessing",
      "note": "The workflow places clean data before ACF/PACF, stationarity testing and forecasting models."
    },
    {
      "time": "01:14:16",
      "title": "Stationarity and transformations",
      "note": "Stable mean/variance and the ADF test lead into differencing and log transformation as possible remedies."
    }
  ],
  "summary": [
    {
      "title": "1. Data type determines the valid question",
      "sourceRefs": [
        "00:03:16–00:12:16",
        "A Taxonomy of Statistics; Types of Variables"
      ],
      "paragraphs": [
        "Statistics is presented as a way to organise, analyse, interpret and present data for decisions. Univariate, bivariate and multivariate views describe how many variables are analysed, not how many observations exist.",
        "Nominal and binary categories are labels; ordinal responses add order. Quantitative variables support arithmetic, with discrete counts separated from continuous measurements such as speed, blood pressure or income."
      ]
    },
    {
      "title": "2. Shape is evidence, not decoration",
      "sourceRefs": [
        "00:20:16–00:27:16",
        "Distributions Basics; Box plot and histograms"
      ],
      "paragraphs": [
        "Normal/Gaussian, exponential and skewed examples show why the same centre can hide very different tails. A right-skewed series has a longer high-value tail; a left-skewed series has a longer low-value tail.",
        "Bar charts suit categories. Histograms show frequencies or density across bins. Box plots compactly display median, quartiles, IQR, whiskers and possible outliers. A plot should accompany, not merely decorate, a numerical summary."
      ]
    },
    {
      "title": "3. Centre and spread must be read together",
      "sourceRefs": [
        "00:35:16–00:42:16",
        "Mean; Central Tendency; Measures of Variation/Dispersion"
      ],
      "paragraphs": [
        "The mean uses every value and is pulled by extremes; the median is robust and is selected from the middle ordered value(s); the mode is useful when repeated values or categories matter. Range and quartiles describe extent and position.",
        "Variance squares deviations from the mean, while standard deviation returns spread to the original units. IQR = Q3 − Q1 covers the middle 50% and supports robust 1.5×IQR fences. Different datasets can share mean and standard deviation, so inspect their shape too."
      ]
    },
    {
      "title": "4. Clean gaps without inventing certainty",
      "sourceRefs": [
        "00:48:17–01:10:16",
        "Summary Stats: Issues; Missing-value strategies; Data preprocessing"
      ],
      "paragraphs": [
        "Time-series preprocessing precedes ACF/PACF, stationarity tests and forecasting. Dropping a few missing rows may be acceptable, but removing many breaks continuity. Forward fill carries the last known value; backward fill uses the next known value; interpolation estimates an interior value; seasonal imputation uses a repeated seasonal pattern.",
        "Outliers can be screened with |z| > 3 or Q1 − 1.5×IQR and Q3 + 1.5×IQR fences. These are flags for investigation, not automatic deletion rules; domain context decides whether an extreme is an error, event or signal."
      ]
    },
    {
      "title": "5. Stationarity is a modelling condition",
      "sourceRefs": [
        "01:14:16–01:20:45",
        "Stationarity and transformations"
      ],
      "paragraphs": [
        "A practical stationary series has stable relevant mean, variance and dependence pattern. Changing trend, seasonality or variance indicates non-stationarity and warns that a model assumption may not hold.",
        "The ADF test supplies a statistic and p-value for a stationarity hypothesis, but it should be read with plots and domain context. First differencing computes x_t − x_{t−1}; a log can compress positive multiplicative scale. Both are transformations to validate, not automatic guarantees."
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
      "term": "Categorical variable",
      "definition": "A label or category rather than a quantity for arithmetic."
    },
    {
      "term": "Ordinal variable",
      "definition": "A category with meaningful order but not necessarily equal gaps."
    },
    {
      "term": "IQR",
      "definition": "Q3 − Q1, the spread of the middle 50% of ordered data."
    },
    {
      "term": "Outlier",
      "definition": "An observation unusually distant from the rest, requiring contextual investigation."
    },
    {
      "term": "Forward fill",
      "definition": "Carrying a previous observed value into a later gap."
    },
    {
      "term": "Stationarity",
      "definition": "Stable relevant statistical properties over time."
    },
    {
      "term": "ADF test",
      "definition": "A statistical diagnostic used to assess stationarity."
    },
    {
      "term": "Differencing",
      "definition": "Subtracting a prior observation from the current observation."
    },
    {
      "term": "ACF/PACF",
      "definition": "Lag-dependence diagnostics used before time-series modelling."
    },
    {
      "term": "Skewness",
      "definition": "Asymmetry of a distribution's tail around its centre."
    }
  ],
  "insights": [
    {
      "label": "Data quality",
      "title": "A flagged outlier is a question, not a deletion command",
      "body": "The same extreme point can be a sensor fault, a genuine shock or the most informative event. Preserve the raw value, record the rule that flagged it and justify any treatment."
    },
    {
      "label": "Diagnostics",
      "title": "Let plots challenge compact summaries",
      "body": "Mean, standard deviation and even IQR compress a distribution. Pair them with line, histogram and box-plot views so skew, gaps and temporal drift remain visible."
    },
    {
      "label": "Temporal reasoning",
      "title": "Imputation must respect time",
      "body": "Forward fill, interpolation and seasonal imputation make different assumptions. Select the method from gap position, sampling frequency and domain behaviour, then mark imputed points."
    },
    {
      "label": "Stationarity",
      "title": "Treat ADF as one piece of evidence",
      "body": "A p-value does not explain a business break, changing variance or seasonal mechanism. Combine ADF with plots, ACF/PACF and domain knowledge before differencing."
    }
  ],
  "resources": [
    {
      "title": "Forecasting: Principles and Practice (3rd ed.)",
      "url": "https://otexts.com/fpp3/",
      "note": "Free reference for decomposition, transformations, missing values, moving averages and forecast evaluation."
    },
    {
      "title": "Statsmodels time-series analysis",
      "url": "https://www.statsmodels.org/stable/tsa.html",
      "note": "Python APIs for ACF/PACF, decomposition, stationarity tests and forecasting models."
    },
    {
      "title": "Pandas time-series functionality",
      "url": "https://pandas.pydata.org/docs/user_guide/timeseries.html",
      "note": "Date indexes, resampling, rolling windows and time-aware data preparation."
    },
    {
      "title": "NIST Engineering Statistics Handbook",
      "url": "https://www.itl.nist.gov/div898/handbook/pmc/pmc.htm",
      "note": "Authoritative further reading on autocorrelation, stationarity and time-series diagnostics."
    }
  ],
  "quiz": [
    {
      "question": "What is the main purpose of descriptive statistics in this lecture?",
      "options": [
        "To organise, summarise, analyse and present data so it can support decisions",
        "To encrypt a dataset",
        "To replace every time index",
        "To guarantee a forecast"
      ],
      "answer": 0,
      "explanation": "Descriptive statistics turns observations into interpretable summaries; it does not guarantee a future forecast.",
      "optionNotes": [
        "Correct: Descriptive statistics turns observations into interpretable summaries; it does not guarantee a future forecast.",
        "Incorrect: “To encrypt a dataset” does not match the lecture definition or evidence.",
        "Incorrect: “To replace every time index” does not match the lecture definition or evidence.",
        "Incorrect: “To guarantee a forecast” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "Which example is categorical rather than quantitative?",
      "options": [
        "Favourite subject: mathematics, English, science or art",
        "A patient's blood pressure",
        "A monthly income",
        "A measured speed"
      ],
      "answer": 0,
      "explanation": "Subject names are labels or categories; arithmetic on the labels is not meaningful.",
      "optionNotes": [
        "Correct: Subject names are labels or categories; arithmetic on the labels is not meaningful.",
        "Incorrect: “A patient's blood pressure” does not match the lecture definition or evidence.",
        "Incorrect: “A monthly income” does not match the lecture definition or evidence.",
        "Incorrect: “A measured speed” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What is the defining feature of ordinal data?",
      "options": [
        "Categories have a meaningful order, but the gaps need not be equal",
        "Values are always continuous",
        "Values can never be ranked",
        "Every category is a time stamp"
      ],
      "answer": 0,
      "explanation": "Likert responses such as strongly disagree to strongly agree are ordered, but the distance between categories is not guaranteed equal.",
      "optionNotes": [
        "Correct: Likert responses such as strongly disagree to strongly agree are ordered, but the distance between categories is not guaranteed equal.",
        "Incorrect: “Values are always continuous” does not match the lecture definition or evidence.",
        "Incorrect: “Values can never be ranked” does not match the lecture definition or evidence.",
        "Incorrect: “Every category is a time stamp” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "How do discrete and continuous quantitative variables differ?",
      "options": [
        "Discrete variables take distinct countable values; continuous variables can take any value in a range",
        "Discrete variables are labels and continuous variables are passwords",
        "Both can take only two values",
        "Continuous variables cannot be measured"
      ],
      "answer": 0,
      "explanation": "Dice outcomes and case counts are discrete; blood pressure, speed and income can vary continuously.",
      "optionNotes": [
        "Correct: Dice outcomes and case counts are discrete; blood pressure, speed and income can vary continuously.",
        "Incorrect: “Discrete variables are labels and continuous variables are passwords” does not match the lecture definition or evidence.",
        "Incorrect: “Both can take only two values” does not match the lecture definition or evidence.",
        "Incorrect: “Continuous variables cannot be measured” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "In a normal (Gaussian) distribution, how are the mean, median and mode typically related?",
      "options": [
        "They are approximately equal at the centre",
        "Mean is always zero and mode is missing",
        "Median is always greater than mean",
        "All three are at the left tail"
      ],
      "answer": 0,
      "explanation": "A symmetric Gaussian distribution has its mean, median and mode together near the centre.",
      "optionNotes": [
        "Correct: A symmetric Gaussian distribution has its mean, median and mode together near the centre.",
        "Incorrect: “Mean is always zero and mode is missing” does not match the lecture definition or evidence.",
        "Incorrect: “Median is always greater than mean” does not match the lecture definition or evidence.",
        "Incorrect: “All three are at the left tail” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What does a right-skewed distribution have?",
      "options": [
        "A longer tail toward larger values on the right",
        "A perfectly symmetric shape",
        "A tail only toward smaller values",
        "No observations"
      ],
      "answer": 0,
      "explanation": "Positive or right skew places a longer tail on the high-value side; extreme high values can pull the mean upward.",
      "optionNotes": [
        "Correct: Positive or right skew places a longer tail on the high-value side; extreme high values can pull the mean upward.",
        "Incorrect: “A perfectly symmetric shape” does not match the lecture definition or evidence.",
        "Incorrect: “A tail only toward smaller values” does not match the lecture definition or evidence.",
        "Incorrect: “No observations” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "Which plot is especially useful for a categorical variable?",
      "options": [
        "A bar chart",
        "A residual ACF only",
        "A time-zone converter",
        "A moving-average equation"
      ],
      "answer": 0,
      "explanation": "Bars compare counts or frequencies for named categories.",
      "optionNotes": [
        "Correct: Bars compare counts or frequencies for named categories.",
        "Incorrect: “A residual ACF only” does not match the lecture definition or evidence.",
        "Incorrect: “A time-zone converter” does not match the lecture definition or evidence.",
        "Incorrect: “A moving-average equation” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What does a box plot summarise?",
      "options": [
        "Centre, quartiles, spread and possible outliers",
        "Only the first row of a dataset",
        "A model's API key",
        "The order of course codes"
      ],
      "answer": 0,
      "explanation": "The box, median line, whiskers and outlier markers provide a compact distribution summary.",
      "optionNotes": [
        "Correct: The box, median line, whiskers and outlier markers provide a compact distribution summary.",
        "Incorrect: “Only the first row of a dataset” does not match the lecture definition or evidence.",
        "Incorrect: “A model's API key” does not match the lecture definition or evidence.",
        "Incorrect: “The order of course codes” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "How is the interquartile range (IQR) defined?",
      "options": [
        "The third quartile minus the first quartile (Q3 − Q1)",
        "The maximum plus the minimum",
        "The mean divided by the sample size",
        "The number of categories"
      ],
      "answer": 0,
      "explanation": "IQR covers the middle 50% of ordered observations and equals Q3 − Q1.",
      "optionNotes": [
        "Correct: IQR covers the middle 50% of ordered observations and equals Q3 − Q1.",
        "Incorrect: “The maximum plus the minimum” does not match the lecture definition or evidence.",
        "Incorrect: “The mean divided by the sample size” does not match the lecture definition or evidence.",
        "Incorrect: “The number of categories” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "Why can the median be preferable to the mean when outliers are present?",
      "options": [
        "The median is less affected by extreme values",
        "The median always uses more observations",
        "The median removes the time index",
        "The median is a forecasting model"
      ],
      "answer": 0,
      "explanation": "Because it depends on order rather than the magnitude of every value, the median is robust to extreme observations.",
      "optionNotes": [
        "Correct: Because it depends on order rather than the magnitude of every value, the median is robust to extreme observations.",
        "Incorrect: “The median always uses more observations” does not match the lecture definition or evidence.",
        "Incorrect: “The median removes the time index” does not match the lecture definition or evidence.",
        "Incorrect: “The median is a forecasting model” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What is a practical risk of relying only on a mean and standard deviation?",
      "options": [
        "Different shapes or outliers can share similar summaries",
        "The summaries always reveal every pattern",
        "They automatically make data stationary",
        "They create additional observations"
      ],
      "answer": 0,
      "explanation": "A few summary numbers can hide skew, multimodality, time order and unusual points; plots add necessary context.",
      "optionNotes": [
        "Correct: A few summary numbers can hide skew, multimodality, time order and unusual points; plots add necessary context.",
        "Incorrect: “The summaries always reveal every pattern” does not match the lecture definition or evidence.",
        "Incorrect: “They automatically make data stationary” does not match the lecture definition or evidence.",
        "Incorrect: “They create additional observations” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What should be on the axes of a time-series line plot?",
      "options": [
        "Chronological time on the x-axis and the observed value on the y-axis",
        "The file name on both axes",
        "Categories on the y-axis only",
        "Two unrelated variables with shuffled order"
      ],
      "answer": 0,
      "explanation": "Preserving chronological order lets the line show temporal movement, gaps and changing variability.",
      "optionNotes": [
        "Correct: Preserving chronological order lets the line show temporal movement, gaps and changing variability.",
        "Incorrect: “The file name on both axes” does not match the lecture definition or evidence.",
        "Incorrect: “Categories on the y-axis only” does not match the lecture definition or evidence.",
        "Incorrect: “Two unrelated variables with shuffled order” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What is the purpose of a histogram?",
      "options": [
        "To show how observations are distributed across value bins",
        "To encode a Teams link",
        "To calculate a p-value by itself",
        "To order subjects alphabetically"
      ],
      "answer": 0,
      "explanation": "Histogram bars show counts or densities in intervals, making shape and skew easier to inspect.",
      "optionNotes": [
        "Correct: Histogram bars show counts or densities in intervals, making shape and skew easier to inspect.",
        "Incorrect: “To encode a Teams link” does not match the lecture definition or evidence.",
        "Incorrect: “To calculate a p-value by itself” does not match the lecture definition or evidence.",
        "Incorrect: “To order subjects alphabetically” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "Why are ACF and PACF useful in time-series analysis?",
      "options": [
        "They help inspect dependence at different lags",
        "They replace data cleaning",
        "They classify Hindi text",
        "They guarantee the best model"
      ],
      "answer": 0,
      "explanation": "Autocorrelation diagnostics reveal lag relationships; they inform modelling but do not guarantee a model choice.",
      "optionNotes": [
        "Correct: Autocorrelation diagnostics reveal lag relationships; they inform modelling but do not guarantee a model choice.",
        "Incorrect: “They replace data cleaning” does not match the lecture definition or evidence.",
        "Incorrect: “They classify Hindi text” does not match the lecture definition or evidence.",
        "Incorrect: “They guarantee the best model” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "Which operation is part of the time-series preprocessing workflow?",
      "options": [
        "Handling missing values before diagnostics and forecasting",
        "Changing the course code",
        "Adding participant names",
        "Deleting timestamps"
      ],
      "answer": 0,
      "explanation": "The instructor places missing-value handling and outlier checks before stationarity and forecasting analysis.",
      "optionNotes": [
        "Correct: The instructor places missing-value handling and outlier checks before stationarity and forecasting analysis.",
        "Incorrect: “Changing the course code” does not match the lecture definition or evidence.",
        "Incorrect: “Adding participant names” does not match the lecture definition or evidence.",
        "Incorrect: “Deleting timestamps” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "When can dropping missing rows be reasonable?",
      "options": [
        "When only a small number of values are missing and the loss is acceptable",
        "Whenever half the series is missing",
        "Only after shuffling the series",
        "Never, under any circumstance"
      ],
      "answer": 0,
      "explanation": "Dropping a few missing rows may be acceptable; dropping many can damage continuity and forecasting information.",
      "optionNotes": [
        "Correct: Dropping a few missing rows may be acceptable; dropping many can damage continuity and forecasting information.",
        "Incorrect: “Whenever half the series is missing” does not match the lecture definition or evidence.",
        "Incorrect: “Only after shuffling the series” does not match the lecture definition or evidence.",
        "Incorrect: “Never, under any circumstance” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What does forward fill use?",
      "options": [
        "The last known value to fill a later missing position",
        "A future value from next year",
        "The mean of every course",
        "A random number for each gap"
      ],
      "answer": 0,
      "explanation": "Forward fill carries the previous observed value forward and may be useful for short gaps or sensor readings.",
      "optionNotes": [
        "Correct: Forward fill carries the previous observed value forward and may be useful for short gaps or sensor readings.",
        "Incorrect: “A future value from next year” does not match the lecture definition or evidence.",
        "Incorrect: “The mean of every course” does not match the lecture definition or evidence.",
        "Incorrect: “A random number for each gap” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "When is interpolation often a good choice for missing continuous observations?",
      "options": [
        "When values between neighbouring known points can be estimated smoothly",
        "When the variable is only a label",
        "When the whole dataset is missing",
        "When time order is intentionally destroyed"
      ],
      "answer": 0,
      "explanation": "Interpolation estimates an interior value from nearby known observations; it should not be treated as observed ground truth.",
      "optionNotes": [
        "Correct: Interpolation estimates an interior value from nearby known observations; it should not be treated as observed ground truth.",
        "Incorrect: “When the variable is only a label” does not match the lecture definition or evidence.",
        "Incorrect: “When the whole dataset is missing” does not match the lecture definition or evidence.",
        "Incorrect: “When time order is intentionally destroyed” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What is a common z-score outlier rule mentioned in the lecture?",
      "options": [
        "Flag observations whose absolute z-score is greater than about 3",
        "Flag every value below zero",
        "Flag only the first row",
        "Flag values with exactly twelve digits"
      ],
      "answer": 0,
      "explanation": "The z-score compares an observation's distance from the mean with the standard deviation; |z| > 3 is a common screening rule.",
      "optionNotes": [
        "Correct: The z-score compares an observation's distance from the mean with the standard deviation; |z| > 3 is a common screening rule.",
        "Incorrect: “Flag every value below zero” does not match the lecture definition or evidence.",
        "Incorrect: “Flag only the first row” does not match the lecture definition or evidence.",
        "Incorrect: “Flag values with exactly twelve digits” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What is the IQR outlier fence convention discussed?",
      "options": [
        "Values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR are potential outliers",
        "Values within the middle 50% are always outliers",
        "Only the mean defines both fences",
        "The fence is always at zero"
      ],
      "answer": 0,
      "explanation": "The 1.5×IQR fences are robust to skew and extreme values and are used as a screening convention.",
      "optionNotes": [
        "Correct: The 1.5×IQR fences are robust to skew and extreme values and are used as a screening convention.",
        "Incorrect: “Values within the middle 50% are always outliers” does not match the lecture definition or evidence.",
        "Incorrect: “Only the mean defines both fences” does not match the lecture definition or evidence.",
        "Incorrect: “The fence is always at zero” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What is the practical intuition of stationarity?",
      "options": [
        "Relevant statistical properties such as mean and variance remain stable over time",
        "The series has no timestamps",
        "Every value is identical",
        "The series contains only categories"
      ],
      "answer": 0,
      "explanation": "The lecture uses stable mean, variance and dependence pattern as the practical intuition, not identical observations.",
      "optionNotes": [
        "Correct: The lecture uses stable mean, variance and dependence pattern as the practical intuition, not identical observations.",
        "Incorrect: “The series has no timestamps” does not match the lecture definition or evidence.",
        "Incorrect: “Every value is identical” does not match the lecture definition or evidence.",
        "Incorrect: “The series contains only categories” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What does a changing trend or seasonality usually imply?",
      "options": [
        "The series may be non-stationary and need further diagnostics or transformation",
        "The series is automatically Gaussian",
        "No preprocessing is needed",
        "The time index should be deleted"
      ],
      "answer": 0,
      "explanation": "Changing level, trend, seasonality or variance is a warning that stationarity assumptions may not hold.",
      "optionNotes": [
        "Correct: Changing level, trend, seasonality or variance is a warning that stationarity assumptions may not hold.",
        "Incorrect: “The series is automatically Gaussian” does not match the lecture definition or evidence.",
        "Incorrect: “No preprocessing is needed” does not match the lecture definition or evidence.",
        "Incorrect: “The time index should be deleted” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "How is the Augmented Dickey–Fuller (ADF) test used here?",
      "options": [
        "As a statistical diagnostic to assess stationarity",
        "As a chart-rendering library",
        "As a missing-value fill method",
        "As a calendar generator"
      ],
      "answer": 0,
      "explanation": "ADF supplies a test statistic and p-value that help assess a unit-root/stationarity hypothesis; it should be interpreted with plots and context.",
      "optionNotes": [
        "Correct: ADF supplies a test statistic and p-value that help assess a unit-root/stationarity hypothesis; it should be interpreted with plots and context.",
        "Incorrect: “As a chart-rendering library” does not match the lecture definition or evidence.",
        "Incorrect: “As a missing-value fill method” does not match the lecture definition or evidence.",
        "Incorrect: “As a calendar generator” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "What does first differencing calculate?",
      "options": [
        "The current observation minus the previous observation",
        "The current observation divided by the next one",
        "The mean of all observations",
        "A categorical label"
      ],
      "answer": 0,
      "explanation": "First differencing removes a previous-level reference and can reduce trend, though it must be checked for over-differencing.",
      "optionNotes": [
        "Correct: First differencing removes a previous-level reference and can reduce trend, though it must be checked for over-differencing.",
        "Incorrect: “The current observation divided by the next one” does not match the lecture definition or evidence.",
        "Incorrect: “The mean of all observations” does not match the lecture definition or evidence.",
        "Incorrect: “A categorical label” does not match the lecture definition or evidence."
      ]
    },
    {
      "question": "Why can a log transformation help a time series?",
      "options": [
        "It can stabilise multiplicative scale or variance when values are positive",
        "It adds a new time zone",
        "It guarantees normality",
        "It fills every missing value"
      ],
      "answer": 0,
      "explanation": "A log can compress large values and turn multiplicative changes into additive differences; zero or negative values require care.",
      "optionNotes": [
        "Correct: A log can compress large values and turn multiplicative changes into additive differences; zero or negative values require care.",
        "Incorrect: “It adds a new time zone” does not match the lecture definition or evidence.",
        "Incorrect: “It guarantees normality” does not match the lecture definition or evidence.",
        "Incorrect: “It fills every missing value” does not match the lecture definition or evidence."
      ]
    }
  ]
}
};
