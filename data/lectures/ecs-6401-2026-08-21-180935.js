// English-only publication unit.
export const ecs6401Lecture20260821 = {
  en: {
  "title": "Time-series components, visualization, and decomposition in Python",
  "lede": "This lecture moves from trend, seasonality, cycles, and irregular noise to stationarity, diagnostic plots, synthetic data, additive decomposition, and moving averages. It also demonstrates a reproducible Python/Jupyter workflow for exploring time-series structure before modelling.",
  "instructionalInterval": "00:46–01:15:34 source time (waiting-room opening and a short idle camera tail excluded)",
  "reviewLevel": "View-only recording, 2× visible-tab video+audio capture, source-time transcript, full distributed sweep, and slide-frame evidence verified",
  "coverage": [
    {
      "title": "Components and data behaviour",
      "body": "Trend is long-term direction; seasonality repeats at a known frequency; cycles can be less regular; irregular variation is unexpected noise. Univariate and multivariate series are distinguished."
    },
    {
      "title": "Diagnostics before models",
      "body": "Stationarity, missing values, outliers, scaling, line plots, seasonal plots, histograms, ACF/PACF, spectral analysis, and decomposition are introduced as diagnostic tools."
    },
    {
      "title": "Reproducible Python workflow",
      "body": "The notebook constructs monthly dates and synthetic values with pandas, NumPy, and matplotlib, then inspects indexing, summaries, and plots."
    },
    {
      "title": "Decomposition and smoothing",
      "body": "An additive series combines trend, seasonal contribution, and random error. Moving/rolling averages smooth short-term fluctuation and expose broader movement."
    }
  ],
  "takeaway": "Visualize and diagnose the data-generating structure first; only then choose a stationary transformation, decomposition, moving-average window, or forecasting model.",
  "slideTrail": [
    {
      "time": "00:00:46",
      "title": "Components of Time Series Data",
      "note": "Trend, seasonality, cyclic variation, and irregular/noise are introduced as the main components."
    },
    {
      "time": "00:03:46",
      "title": "Predictive analytics workflow",
      "note": "Environment, data collection, analysis, predictive modelling, prediction, and monitoring are connected in a practical pipeline."
    },
    {
      "time": "00:09:46",
      "title": "Time-series properties",
      "note": "Temporal order, dependence, trend, seasonality, cycles, randomness, and the limits of historical patterns are discussed."
    },
    {
      "time": "00:12:46",
      "title": "Stationary and non-stationary data",
      "note": "Stable mean/variance versus changing trend, seasonality, or variance; preprocessing is previewed."
    },
    {
      "time": "00:16:46",
      "title": "Time Series Visualization",
      "note": "Line/time-series plots place time on the x-axis and the observed value on the y-axis."
    },
    {
      "time": "00:19:46",
      "title": "Seasonal, histogram, ACF/PACF and spectral views",
      "note": "Seasonal repetition, value distributions, lag dependence, and periodic behaviour each receive a distinct diagnostic view."
    },
    {
      "time": "00:23:46",
      "title": "Time-series decomposition and model roadmap",
      "note": "Decomposition, ARIMA, moving average, and later machine-learning/deep-learning topics are previewed."
    },
    {
      "time": "00:27:46",
      "title": "Python/Jupyter setup",
      "note": "The instructor demonstrates pandas, NumPy, matplotlib, date_range, indexing, head(), and basic plotting."
    },
    {
      "time": "00:39:46",
      "title": "Synthetic trend and seasonality",
      "note": "A reproducible monthly series uses a linear trend, a 12-month sine component, and random error."
    },
    {
      "time": "00:54:46",
      "title": "Additive decomposition",
      "note": "Observed, trend, seasonal, and residual/error plots are visualized and interpreted."
    },
    {
      "time": "01:01:46",
      "title": "Stationarity checks and diagnostics",
      "note": "ADF, line/seasonal/trend/residual views, and the transition to moving-average methods are linked."
    },
    {
      "time": "01:09:46",
      "title": "Moving average and rolling variance",
      "note": "Three- and four-period windows smooth short-term fluctuation; the class closes with study-material and code sharing."
    }
  ],
  "summary": [
    {
      "title": "1. Components explain where variation comes from",
      "sourceRefs": [
        "00:00:46–00:12:46",
        "Components of Time Series Data; predictive analytics workflow"
      ],
      "paragraphs": [
        "The lecture revisits four useful components: trend, seasonality, cyclic variation, and irregular/noise. Trend may rise, fall, or remain approximately constant. Seasonality follows a known repetition such as summer electricity demand, festival retail sales, or holiday bookings; cycles are longer fluctuations whose duration need not be fixed.",
        "The predictive-analytics diagram connects environment, collection, analysis, predictive modelling, prediction, and monitoring. A historical pattern is useful only when the data is ordered, the temporal dependence is meaningful, and the future remains comparable to the past."
      ]
    },
    {
      "title": "2. Stationarity and preprocessing determine what a model can learn",
      "sourceRefs": [
        "00:12:46–00:16:00",
        "Stationary/non-stationary data slide"
      ],
      "paragraphs": [
        "A stationary series is introduced through stable mean, variance, and pattern with no changing trend or seasonality. A non-stationary series changes level, variance, trend, or seasonal behaviour over time. The distinction is practical: transformations and differencing may be required before methods that assume stationarity.",
        "Before analysis, the instructor names missing-value handling, outlier identification, scaling, and normalization. This ordering matters because a model can mistake data-quality artefacts for temporal structure."
      ]
    },
    {
      "title": "3. Use several visual diagnostics, each with a different question",
      "sourceRefs": [
        "00:16:46–00:24:00",
        "Time Series Visualization; ACF/PACF; spectral/decomposition slides"
      ],
      "paragraphs": [
        "A line or time-series plot puts chronological time on the x-axis and the observed value on the y-axis. Seasonal plots expose repeated calendar patterns; histograms or density views show value distribution. ACF measures dependence at lags, while PACF isolates the additional relationship at a lag after shorter lags are accounted for.",
        "Spectral analysis can reveal periodic or cyclic frequencies. Decomposition separates observed data into trend, seasonal and residual/error views. No single plot proves a forecast will work; the set helps decide which structure is plausible and what to test next."
      ]
    },
    {
      "title": "4. The notebook makes synthetic structure reproducible",
      "sourceRefs": [
        "00:27:46–00:54:46",
        "Python/Jupyter and synthetic-series frames"
      ],
      "paragraphs": [
        "The demonstration uses pandas date_range for regularly spaced monthly dates, NumPy for values and seeded randomness, and matplotlib for plots. np.random.seed(42) gives classmates the same random error on each run, which makes discussion and debugging repeatable.",
        "A linear trend is combined with a sine-based seasonal term. Dividing month position by 12 creates a yearly period; multiplying sine by 10 gives an approximately ±10 seasonal effect. Random error then represents unexpected real-world variation around the structured signal."
      ]
    },
    {
      "title": "5. Additive decomposition is a study scaffold, not a guarantee",
      "sourceRefs": [
        "00:54:46–01:01:46",
        "Additive decomposition and stationarity frames"
      ],
      "paragraphs": [
        "The observed series is expressed as Y_t = T_t + S_t + E_t: trend plus seasonal contribution plus residual/error. Plotting each component helps check whether a supposed trend is actually seasonal or whether noise dominates.",
        "The instructor points to ADF as a stationarity check and to line, seasonal, trend, and residual representations as complementary views. ADF results should be interpreted with other diagnostics and domain knowledge rather than treated as a magic model selector."
      ]
    },
    {
      "title": "6. Moving averages smooth the short term",
      "sourceRefs": [
        "01:09:46–01:13:11",
        "Moving average and rolling variance slide"
      ],
      "paragraphs": [
        "A three-period moving average averages the current value and two preceding values; larger windows such as four or five periods smooth more aggressively. A 20-day stock-price average is offered as an intuition for exposing a longer movement beneath daily fluctuation.",
        "Smoothing is a trade-off: it reduces noise but can hide short changes and delay turning points. The appropriate window depends on sampling frequency, forecast horizon, and the decision the model must support."
      ]
    },
    {
      "title": "7. The next modelling step must preserve time order",
      "sourceRefs": [
        "01:13:29–01:15:34",
        "Closing guidance"
      ],
      "paragraphs": [
        "The close previews ARIMA, moving-average methods, and later machine-learning/deep-learning models. The safe sequence is to inspect structure, prepare the data, choose a baseline, and evaluate chronologically rather than shuffle away temporal dependence.",
        "The instructor says study material and different code examples will be shared in the course group and Moodle library. This is a resource announcement, not a graded assignment or homework obligation."
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
        "time": "01:13:38",
        "title": "Study material and code in the group/Moodle library",
        "detail": "The instructor said slides, study material, and different code examples would be uploaded or shared in the course group and Moodle library."
      }
    ],
    "studentQuestions": []
  },
  "keyTerms": [
    {
      "term": "Trend",
      "definition": "Long-term direction of a series."
    },
    {
      "term": "Seasonality",
      "definition": "A pattern repeating at a known or fixed frequency."
    },
    {
      "term": "Cycle",
      "definition": "A longer fluctuation whose period may not be fixed."
    },
    {
      "term": "Irregular/noise",
      "definition": "Unpredictable variation from unexpected events or measurement effects."
    },
    {
      "term": "Stationarity",
      "definition": "Stability of relevant statistical properties over time."
    },
    {
      "term": "Lag",
      "definition": "An earlier observation used to compare with the current value."
    },
    {
      "term": "ACF/PACF",
      "definition": "Lag-correlation diagnostics used to understand dependence and candidate model orders."
    },
    {
      "term": "Decomposition",
      "definition": "Separating observed data into structural components such as trend, seasonality, and residual."
    },
    {
      "term": "Moving average",
      "definition": "A rolling window average that smooths short-term variation."
    },
    {
      "term": "ADF test",
      "definition": "A statistical test used to help assess unit-root/non-stationary behaviour."
    }
  ],
  "insights": [
    {
      "label": "Diagnostics",
      "title": "Plot the same data from several angles",
      "body": "Line, seasonal, distribution, autocorrelation, spectral, and decomposition views answer different questions. Agreement across views is stronger evidence than a single attractive chart."
    },
    {
      "label": "Reproducibility",
      "title": "Seeded synthetic data is a teaching instrument",
      "body": "A fixed random seed lets every learner reproduce the same noise and isolate whether a code change, not a new random draw, caused a different plot."
    },
    {
      "label": "Smoothing",
      "title": "A moving average changes the question",
      "body": "A smooth curve is useful for trend inspection but is not the original measurement. Preserve the raw series and choose the window based on the operational horizon."
    },
    {
      "label": "Modelling",
      "title": "Stationarity is a modelling assumption to test",
      "body": "Use ADF alongside plots, domain context, and residual checks; do not turn one p-value into an automatic ARIMA decision."
    }
  ],
  "resources": [
    {
      "title": "Forecasting: Principles and Practice (3rd ed.)",
      "url": "https://otexts.com/fpp3/",
      "note": "Free reference for decomposition, transformations, moving averages, ARIMA, and forecast evaluation."
    },
    {
      "title": "Statsmodels time-series analysis",
      "url": "https://www.statsmodels.org/stable/tsa.html",
      "note": "Python APIs for decomposition, ACF/PACF, ARIMA, and related diagnostics."
    },
    {
      "title": "Pandas time-series/date functionality",
      "url": "https://pandas.pydata.org/docs/user_guide/timeseries.html",
      "note": "Reference for date_range, frequency-aware indexes, resampling, and rolling windows."
    },
    {
      "title": "Matplotlib plot types",
      "url": "https://matplotlib.org/stable/plot_types/index.html",
      "note": "Plotting reference for line charts, labels, grids, and readable diagnostics."
    },
    {
      "title": "NIST Engineering Statistics Handbook: time series",
      "url": "https://www.itl.nist.gov/div898/handbook/pmc/pmc.htm",
      "note": "Further reading on autocorrelation, stationarity, and time-series diagnostics."
    }
  ],
  "quiz": [
    {
      "question": "Which four components are combined in the lecture's time-series decomposition?",
      "options": [
        "Trend, seasonality, cycle, and irregular/noise",
        "Rows, columns, keys, and joins",
        "Precision, recall, F1, and ROC-AUC",
        "Encoder, decoder, token, and prompt"
      ],
      "answer": 0,
      "explanation": "The component overview separates long-term trend, repeating seasonality, less-regular cycles, and random irregular variation.",
      "optionNotes": [
        "Correct: The component overview separates long-term trend, repeating seasonality, less-regular cycles, and random irregular variation.",
        "Incorrect: “Rows, columns, keys, and joins” does not match the lecture evidence or definition.",
        "Incorrect: “Precision, recall, F1, and ROC-AUC” does not match the lecture evidence or definition.",
        "Incorrect: “Encoder, decoder, token, and prompt” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is a trend in a time series?",
      "options": [
        "A long-term direction that may increase, decrease, or remain roughly constant",
        "A random number seed",
        "A fixed database schema",
        "A missing-value marker"
      ],
      "answer": 0,
      "explanation": "The lecture describes increasing, decreasing, and approximately constant long-term movement as trend.",
      "optionNotes": [
        "Correct: The lecture describes increasing, decreasing, and approximately constant long-term movement as trend.",
        "Incorrect: “A random number seed” does not match the lecture evidence or definition.",
        "Incorrect: “A fixed database schema” does not match the lecture evidence or definition.",
        "Incorrect: “A missing-value marker” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What makes seasonality different from a cycle?",
      "options": [
        "Seasonality repeats at a known frequency; a cycle may have a variable length",
        "Seasonality is always noise",
        "A cycle can only last one day",
        "They are identical terms"
      ],
      "answer": 0,
      "explanation": "Examples such as summer electricity and festival sales repeat on a calendar frequency, whereas business cycles need not.",
      "optionNotes": [
        "Correct: Examples such as summer electricity and festival sales repeat on a calendar frequency, whereas business cycles need not.",
        "Incorrect: “Seasonality is always noise” does not match the lecture evidence or definition.",
        "Incorrect: “A cycle can only last one day” does not match the lecture evidence or definition.",
        "Incorrect: “They are identical terms” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which is an example of irregular variation?",
      "options": [
        "An unexpected equipment failure or market crash",
        "A sale repeated every December",
        "A fixed twelve-month pattern",
        "A planned monthly index"
      ],
      "answer": 0,
      "explanation": "Unexpected events such as disasters, crashes, pandemics, and equipment failures create irregular variation or noise.",
      "optionNotes": [
        "Correct: Unexpected events such as disasters, crashes, pandemics, and equipment failures create irregular variation or noise.",
        "Incorrect: “A sale repeated every December” does not match the lecture evidence or definition.",
        "Incorrect: “A fixed twelve-month pattern” does not match the lecture evidence or definition.",
        "Incorrect: “A planned monthly index” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why can a multivariate time series be useful?",
      "options": [
        "Several related variables can explain or influence one another over time",
        "It contains no time index",
        "It must have only one column",
        "It automatically removes seasonality"
      ],
      "answer": 0,
      "explanation": "The lecture contrasts a single temperature series with multiple related variables whose interaction can be analysed.",
      "optionNotes": [
        "Correct: The lecture contrasts a single temperature series with multiple related variables whose interaction can be analysed.",
        "Incorrect: “It contains no time index” does not match the lecture evidence or definition.",
        "Incorrect: “It must have only one column” does not match the lecture evidence or definition.",
        "Incorrect: “It automatically removes seasonality” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is a practical description of a stationary series?",
      "options": [
        "Its relevant mean, variance, and pattern remain stable over time",
        "Its values always increase",
        "It has no observations",
        "It is stored only as text"
      ],
      "answer": 0,
      "explanation": "The instructor introduces constant mean and variance with no changing trend or seasonality as the practical intuition.",
      "optionNotes": [
        "Correct: The instructor introduces constant mean and variance with no changing trend or seasonality as the practical intuition.",
        "Incorrect: “Its values always increase” does not match the lecture evidence or definition.",
        "Incorrect: “It has no observations” does not match the lecture evidence or definition.",
        "Incorrect: “It is stored only as text” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What makes a series non-stationary in the lecture's explanation?",
      "options": [
        "Its trend, seasonality, mean, or variance changes over time",
        "It has a timestamp",
        "It is plotted as a line",
        "It uses Python"
      ],
      "answer": 0,
      "explanation": "Changing level, variance, trend, or seasonal behaviour makes a series non-stationary and may motivate transformation.",
      "optionNotes": [
        "Correct: Changing level, variance, trend, or seasonal behaviour makes a series non-stationary and may motivate transformation.",
        "Incorrect: “It has a timestamp” does not match the lecture evidence or definition.",
        "Incorrect: “It is plotted as a line” does not match the lecture evidence or definition.",
        "Incorrect: “It uses Python” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which preprocessing issue is explicitly named before analysis?",
      "options": [
        "Missing values, outliers, scaling, and normalization",
        "Changing the course code",
        "Adding participants",
        "Deleting the time index"
      ],
      "answer": 0,
      "explanation": "The preprocessing overview names missing-value handling, outlier identification, and scaling/normalization.",
      "optionNotes": [
        "Correct: The preprocessing overview names missing-value handling, outlier identification, and scaling/normalization.",
        "Incorrect: “Changing the course code” does not match the lecture evidence or definition.",
        "Incorrect: “Adding participants” does not match the lecture evidence or definition.",
        "Incorrect: “Deleting the time index” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does a line plot show for a time series?",
      "options": [
        "Values on the y-axis against chronologically ordered time on the x-axis",
        "Only the distribution of one value",
        "The password strength of a dataset",
        "A list of source files"
      ],
      "answer": 0,
      "explanation": "The line-plot demonstration uses time on the x-axis and an observed value on the y-axis.",
      "optionNotes": [
        "Correct: The line-plot demonstration uses time on the x-axis and an observed value on the y-axis.",
        "Incorrect: “Only the distribution of one value” does not match the lecture evidence or definition.",
        "Incorrect: “The password strength of a dataset” does not match the lecture evidence or definition.",
        "Incorrect: “A list of source files” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is a seasonal plot designed to reveal?",
      "options": [
        "Repeated patterns at a fixed or known seasonal frequency",
        "Only an encryption key",
        "A random seed",
        "The number of notebook cells"
      ],
      "answer": 0,
      "explanation": "Seasonal plots compare repeated periods such as months, years, festivals, or holidays.",
      "optionNotes": [
        "Correct: Seasonal plots compare repeated periods such as months, years, festivals, or holidays.",
        "Incorrect: “Only an encryption key” does not match the lecture evidence or definition.",
        "Incorrect: “A random seed” does not match the lecture evidence or definition.",
        "Incorrect: “The number of notebook cells” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does lag 1 mean?",
      "options": [
        "Comparing the current observation with the immediately previous observation",
        "Comparing with a value one year in the future",
        "Deleting the first row",
        "Using one plot colour"
      ],
      "answer": 0,
      "explanation": "Lag one is the immediately previous value; lag two reaches two observations back.",
      "optionNotes": [
        "Correct: Lag one is the immediately previous value; lag two reaches two observations back.",
        "Incorrect: “Comparing with a value one year in the future” does not match the lecture evidence or definition.",
        "Incorrect: “Deleting the first row” does not match the lecture evidence or definition.",
        "Incorrect: “Using one plot colour” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "How do ACF and PACF support model analysis?",
      "options": [
        "They expose dependence at lags and help suggest autoregressive order",
        "They encrypt the notebook",
        "They generate calendar dates",
        "They replace all missing values"
      ],
      "answer": 0,
      "explanation": "The instructor introduces ACF/PACF as correlation plots for lag structure and model identification.",
      "optionNotes": [
        "Correct: The instructor introduces ACF/PACF as correlation plots for lag structure and model identification.",
        "Incorrect: “They encrypt the notebook” does not match the lecture evidence or definition.",
        "Incorrect: “They generate calendar dates” does not match the lecture evidence or definition.",
        "Incorrect: “They replace all missing values” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What can spectral analysis identify?",
      "options": [
        "Periodic or cyclic patterns in a series",
        "The correct password",
        "An HTML route",
        "A database primary key"
      ],
      "answer": 0,
      "explanation": "Spectral analysis is mentioned for finding hidden periodic or cyclic behaviour.",
      "optionNotes": [
        "Correct: Spectral analysis is mentioned for finding hidden periodic or cyclic behaviour.",
        "Incorrect: “The correct password” does not match the lecture evidence or definition.",
        "Incorrect: “An HTML route” does not match the lecture evidence or definition.",
        "Incorrect: “A database primary key” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does a decomposition plot separate?",
      "options": [
        "Observed data into trend, seasonal, and residual/error components",
        "A file into four folders",
        "A URL into query parameters",
        "Users into roles only"
      ],
      "answer": 0,
      "explanation": "The decomposition example displays trend, seasonality, and residual/error components.",
      "optionNotes": [
        "Correct: The decomposition example displays trend, seasonality, and residual/error components.",
        "Incorrect: “A file into four folders” does not match the lecture evidence or definition.",
        "Incorrect: “A URL into query parameters” does not match the lecture evidence or definition.",
        "Incorrect: “Users into roles only” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why is np.random.seed(42) used in the notebook demonstration?",
      "options": [
        "It makes generated random values reproducible across runs",
        "It makes every value equal to 42",
        "It removes all noise",
        "It sorts dates alphabetically"
      ],
      "answer": 0,
      "explanation": "The seed fixes the random generator's starting point so students can reproduce the same synthetic series.",
      "optionNotes": [
        "Correct: The seed fixes the random generator's starting point so students can reproduce the same synthetic series.",
        "Incorrect: “It makes every value equal to 42” does not match the lecture evidence or definition.",
        "Incorrect: “It removes all noise” does not match the lecture evidence or definition.",
        "Incorrect: “It sorts dates alphabetically” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does pandas date_range create in the example?",
      "options": [
        "A chronologically ordered sequence of dates",
        "A moving-average model",
        "A neural-network layer",
        "A random password"
      ],
      "answer": 0,
      "explanation": "The notebook uses pandas date_range to construct regularly spaced monthly dates.",
      "optionNotes": [
        "Correct: The notebook uses pandas date_range to construct regularly spaced monthly dates.",
        "Incorrect: “A moving-average model” does not match the lecture evidence or definition.",
        "Incorrect: “A neural-network layer” does not match the lecture evidence or definition.",
        "Incorrect: “A random password” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why is a twelve-month divisor used in the synthetic seasonal term?",
      "options": [
        "To represent a yearly seasonal cycle",
        "To create twelve unrelated trends",
        "To remove the time index",
        "To select twelve files"
      ],
      "answer": 0,
      "explanation": "Dividing the month position by 12 makes the sine term complete one annual cycle.",
      "optionNotes": [
        "Correct: Dividing the month position by 12 makes the sine term complete one annual cycle.",
        "Incorrect: “To create twelve unrelated trends” does not match the lecture evidence or definition.",
        "Incorrect: “To remove the time index” does not match the lecture evidence or definition.",
        "Incorrect: “To select twelve files” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does multiplying a sine term by 10 control in the example?",
      "options": [
        "The approximate amplitude of seasonal effect",
        "The number of rows",
        "The number of lags",
        "The file size"
      ],
      "answer": 0,
      "explanation": "Since sine ranges roughly from −1 to 1, multiplying by 10 gives an approximately ±10 seasonal contribution.",
      "optionNotes": [
        "Correct: Since sine ranges roughly from −1 to 1, multiplying by 10 gives an approximately ±10 seasonal contribution.",
        "Incorrect: “The number of rows” does not match the lecture evidence or definition.",
        "Incorrect: “The number of lags” does not match the lecture evidence or definition.",
        "Incorrect: “The file size” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "In an additive decomposition, how is an observation formed?",
      "options": [
        "Trend plus seasonality plus residual/error",
        "Trend multiplied only by the date",
        "A password plus a filename",
        "A future label plus a timestamp"
      ],
      "answer": 0,
      "explanation": "The notebook expresses an observed value as the sum of trend, seasonal component, and random error.",
      "optionNotes": [
        "Correct: The notebook expresses an observed value as the sum of trend, seasonal component, and random error.",
        "Incorrect: “Trend multiplied only by the date” does not match the lecture evidence or definition.",
        "Incorrect: “A password plus a filename” does not match the lecture evidence or definition.",
        "Incorrect: “A future label plus a timestamp” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is the purpose of an Augmented Dickey–Fuller (ADF) test in this lecture?",
      "options": [
        "To help assess whether a series is stationary",
        "To draw a bar chart",
        "To create a Teams link",
        "To choose a Hindi font"
      ],
      "answer": 0,
      "explanation": "The instructor names ADF as a test that can help distinguish stationary and non-stationary behaviour.",
      "optionNotes": [
        "Correct: The instructor names ADF as a test that can help distinguish stationary and non-stationary behaviour.",
        "Incorrect: “To draw a bar chart” does not match the lecture evidence or definition.",
        "Incorrect: “To create a Teams link” does not match the lecture evidence or definition.",
        "Incorrect: “To choose a Hindi font” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does a rolling mean do to a noisy series?",
      "options": [
        "It smooths short-term fluctuations to expose a broader pattern",
        "It adds future observations",
        "It deletes the seasonal component",
        "It converts dates to text"
      ],
      "answer": 0,
      "explanation": "A moving or rolling average reduces short-term variation and makes underlying movement easier to see.",
      "optionNotes": [
        "Correct: A moving or rolling average reduces short-term variation and makes underlying movement easier to see.",
        "Incorrect: “It adds future observations” does not match the lecture evidence or definition.",
        "Incorrect: “It deletes the seasonal component” does not match the lecture evidence or definition.",
        "Incorrect: “It converts dates to text” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "For a three-period moving average, which observations are averaged for the current point?",
      "options": [
        "The current value and the two preceding values",
        "The next three future values",
        "Every value in the dataset",
        "Only the first observation"
      ],
      "answer": 0,
      "explanation": "The example averages a window of three observations, using current and preceding values for a causal view.",
      "optionNotes": [
        "Correct: The example averages a window of three observations, using current and preceding values for a causal view.",
        "Incorrect: “The next three future values” does not match the lecture evidence or definition.",
        "Incorrect: “Every value in the dataset” does not match the lecture evidence or definition.",
        "Incorrect: “Only the first observation” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why should the window length of a moving average be chosen carefully?",
      "options": [
        "A larger window smooths more but can hide short changes and delay turning points",
        "Any window gives the same result",
        "It changes the course code",
        "It prevents all measurement error"
      ],
      "answer": 0,
      "explanation": "The lecture notes that a 3-, 4-, or 5-period window changes the smoothing trade-off.",
      "optionNotes": [
        "Correct: The lecture notes that a 3-, 4-, or 5-period window changes the smoothing trade-off.",
        "Incorrect: “Any window gives the same result” does not match the lecture evidence or definition.",
        "Incorrect: “It changes the course code” does not match the lecture evidence or definition.",
        "Incorrect: “It prevents all measurement error” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which statement is a safe modelling practice for the next lectures?",
      "options": [
        "Inspect plots and stationarity before selecting ARIMA or another model",
        "Start with the most complex model without checking data",
        "Shuffle all observations before forecasting",
        "Use future values as features"
      ],
      "answer": 0,
      "explanation": "The roadmap places preprocessing, visualization, stationarity, and diagnostics before ARIMA and machine-learning models.",
      "optionNotes": [
        "Correct: The roadmap places preprocessing, visualization, stationarity, and diagnostics before ARIMA and machine-learning models.",
        "Incorrect: “Start with the most complex model without checking data” does not match the lecture evidence or definition.",
        "Incorrect: “Shuffle all observations before forecasting” does not match the lecture evidence or definition.",
        "Incorrect: “Use future values as features” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which item did the instructor say would be shared in the course group or Moodle library?",
      "options": [
        "Study material and different code examples",
        "A student's password",
        "Private participant recordings",
        "Exam grades"
      ],
      "answer": 0,
      "explanation": "Near the close, the instructor says slides/study material and code will be uploaded or shared in the group/Moodle library.",
      "optionNotes": [
        "Correct: Near the close, the instructor says slides/study material and code will be uploaded or shared in the group/Moodle library.",
        "Incorrect: “A student's password” does not match the lecture evidence or definition.",
        "Incorrect: “Private participant recordings” does not match the lecture evidence or definition.",
        "Incorrect: “Exam grades” does not match the lecture evidence or definition."
      ]
    }
  ]
}
};
