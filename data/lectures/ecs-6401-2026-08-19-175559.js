// English-only publication unit.
export const ecs6401Lecture20260819 = {
  en: {
  "title": "Advanced Time Series Analysis: foundations and course roadmap",
  "lede": "This orientation lecture introduces the course arc from classical time-series foundations to visualization, stationarity, AR/MA/ARIMA, VAR, cointegration, volatility, machine learning, LSTM/RNN models, transformers, and financial forecasting. It then defines a time series as an ordered sequence whose past can inform the future.",
  "instructionalInterval": "06:39–01:25:20 source time (capture; triage found teaching from about 06:02; participant-only tail excluded)",
  "reviewLevel": "View-only recording, 2× visible-tab capture, restored source-time transcript, and slide-frame evidence verified",
  "coverage": [
    {
      "title": "Course map",
      "body": "The syllabus moves from classical methods and visualization through stationary/non-stationary processes, VAR and cointegration, volatility, predictive modelling, and sequential deep learning."
    },
    {
      "title": "Time-series vocabulary",
      "body": "A time series is chronologically ordered data. Examples include prices, exchange rates, inflation, GDP, sales, weather, traffic, and electricity demand."
    },
    {
      "title": "From dependence to models",
      "body": "Temporal dependence motivates lag features, autoregression, moving averages, differencing, ACF/PACF diagnostics, and later RNN/LSTM/transformer models."
    },
    {
      "title": "Components and evaluation",
      "body": "Trend, seasonality, cycles, and irregular noise describe observable structure; time-aware splits and suitable regression/classification metrics protect evaluation."
    }
  ],
  "takeaway": "Start every forecast with a time-aware question: what information would genuinely be available at the prediction timestamp, and which structure in the past supports the proposed model?",
  "slideTrail": [
    {
      "time": "17:39",
      "title": "Course overview / syllabus",
      "note": "Classical methods, visualization, stationarity, AR/MA/ARIMA, VAR, cointegration, machine learning, deep learning, and financial applications."
    },
    {
      "time": "24:39",
      "title": "Visualization topics",
      "note": "Time-series plots, line charts, seasonal plots, moving/rolling statistics, decomposition, and outlier inspection."
    },
    {
      "time": "26:16",
      "title": "Univariate stationary processes",
      "note": "Strict versus weak/covariance stationarity, mean/variance stability, autocorrelation, and white-noise terminology."
    },
    {
      "time": "27:30",
      "title": "Autoregressive processes",
      "note": "Current values can depend on lagged values; AR order, stability, ACF, and PACF are introduced."
    },
    {
      "time": "38:20",
      "title": "ARCH and volatility",
      "note": "Volatility clustering and ARCH are named as tools for changing variance in financial series."
    },
    {
      "time": "46:30",
      "title": "Finance and algorithmic trading",
      "note": "Historical prices, volume, feature engineering, time-based splits, ML baselines, and sequential models for prediction."
    },
    {
      "time": "55:20",
      "title": "RNN, LSTM, and transformers",
      "note": "Vanishing gradients motivate LSTM gates; transformers and attention are a later roadmap topic."
    },
    {
      "time": "1:07:00",
      "title": "TIME SERIES",
      "note": "The displayed definition connects chronologically recorded observations with past, present, and future forecasting."
    },
    {
      "time": "1:17:39",
      "title": "COMPONENTS OF TIME SERIES DATA",
      "note": "Trend, seasonality, cyclical variation, and irregular/noise are illustrated with small plots."
    }
  ],
  "summary": [
    {
      "title": "1. The course is staged from foundations to applications",
      "sourceRefs": [
        "17:39–24:00",
        "Course overview / syllabus slide"
      ],
      "paragraphs": [
        "The instructor presents a hierarchy: classical time-series concepts first, then visualization and stationarity, followed by AR/MA/ARIMA, VAR, non-stationarity and unit-root tests, cointegration/ECM, volatility models, and applied machine learning.",
        "The later roadmap includes stock-price and risk examples, feature engineering, time-based splitting, evaluation, RNN/LSTM/BiLSTM, and a possible transformer extension. This sequencing is useful because a neural model still needs sound temporal data preparation and diagnostics."
      ]
    },
    {
      "title": "2. Visualization is a diagnostic step, not decoration",
      "sourceRefs": [
        "24:39–26:16",
        "Visualization topics slide"
      ],
      "paragraphs": [
        "Line and seasonal plots, rolling means/variances, decomposition, and outlier views reveal whether a series has trend, seasonal repetition, changing variance, or unusual observations.",
        "A plot cannot prove a forecast will work, but it can expose leakage, missing intervals, structural breaks, and a mismatch between the proposed model and the data-generating pattern."
      ]
    },
    {
      "title": "3. Stationarity and lag structure",
      "sourceRefs": [
        "26:16–31:00",
        "Univariate stationary processes / AR slides"
      ],
      "paragraphs": [
        "The lecture introduces strict and weak/covariance stationarity, with stable mean and variance as the practical starting point. Autoregression uses previous values; ACF and PACF help reason about lag dependence and candidate AR orders.",
        "For non-stationary economic or financial series, differencing and unit-root tests are introduced before moving to models such as ARIMA. The distinction is conceptual here; estimation and diagnostics are reserved for later lectures."
      ]
    },
    {
      "title": "4. Multivariate and long-run relationships",
      "sourceRefs": [
        "31:00–38:20",
        "VAR, cointegration, and ECM roadmap"
      ],
      "paragraphs": [
        "VAR treats several time-series variables as jointly evolving, while cointegration asks whether non-stationary variables share a stable long-run equilibrium. The error-correction model then represents short-run adjustments toward that relationship.",
        "The instructor also names residual-based/Engle–Granger-style testing and ordinary least squares as part of the future syllabus. These are roadmap commitments, not completed derivations in this orientation lecture."
      ]
    },
    {
      "title": "5. Forecasting pipelines need leakage controls",
      "sourceRefs": [
        "46:30–55:20",
        "Finance and algorithmic trading slide"
      ],
      "paragraphs": [
        "The planned financial workflow is data collection, preprocessing, outlier handling, normalization, lag and moving-average features, chronological train/test splitting, baseline models, and evaluation. Candidate models include linear/ridge/lasso regression, trees, random forests, boosting, SVM, ARIMA, GARCH, CNNs, and LSTM.",
        "Historical prices, trading volume, and even textual/social data are mentioned as possible inputs. The central constraint is temporal availability: a feature must exist at prediction time, or the measured result is contaminated by look-ahead leakage."
      ]
    },
    {
      "title": "6. Sequential deep learning is a later layer",
      "sourceRefs": [
        "55:20–1:07:00",
        "RNN/LSTM/transformer discussion"
      ],
      "paragraphs": [
        "RNNs preserve sequential context but can suffer vanishing gradients. LSTM gates—forget, input, and output—are introduced as a way to control information flow over longer dependencies. Bidirectional LSTM and transformer/attention models are future topics.",
        "The lecture positions these models as tools to compare with classical and ML baselines, not as automatic replacements. A fair comparison requires the same temporal split and an explicit forecast horizon."
      ]
    },
    {
      "title": "7. Definition and components",
      "sourceRefs": [
        "1:07:00–1:25:20",
        "TIME SERIES and COMPONENTS OF TIME SERIES DATA slides"
      ],
      "paragraphs": [
        "A time series is a sequence of data points recorded chronologically, usually at consistent intervals. The past can inform the present and future because observations may have temporal dependence; examples include temperature, sales, GDP, traffic, and electricity.",
        "The closing component slide separates long-term trend, repeating seasonality, longer and less regular cycles, and random irregular/noise. An additive decomposition is a useful study scaffold: Y_t = T_t + S_t + C_t + I_t, while real data may require transformations or multiplicative forms."
      ]
    }
  ],
  "courseSignals": {
    "assignments": [
      {
        "time": "16:01",
        "title": "Course communication group",
        "detail": "The instructor asked students to help identify a class representative and create a dedicated WhatsApp group for Advanced Time Series Analysis. This was an organizational request; no graded submission was stated."
      }
    ],
    "homework": [],
    "labs": [],
    "projects": [],
    "references": [
      {
        "time": "1:00:50",
        "title": "Syllabus, slides, and handwritten mathematical notes",
        "detail": "The instructor said the syllabus, slides, written documents, and mathematical foundations would be shared with students for later study."
      }
    ],
    "studentQuestions": [
      {
        "time": "42:49",
        "question": "A student asked how stationarity properties are checked and whether graph shape reveals trend, seasonality, or cyclic behaviour.",
        "response": "The instructor said mean and variance, lag values, and graph examples would be explained in the stationarity lectures, and that interpretation depends on the problem."
      },
      {
        "time": "1:18:50",
        "question": "A student questioned the wording ‘usually at consistent regular intervals’ because irregular time series also exist.",
        "response": "The instructor clarified that regular intervals are common but not mandatory; irregular observations can occur, although they are not consistent."
      }
    ]
  },
  "keyTerms": [
    {
      "term": "Temporal dependence",
      "definition": "The possibility that an observation depends on earlier observations."
    },
    {
      "term": "Trend",
      "definition": "Long-term direction of a series."
    },
    {
      "term": "Seasonality",
      "definition": "A repeating pattern associated with a fixed or known frequency."
    },
    {
      "term": "Cycle",
      "definition": "Longer fluctuation whose length may not be fixed."
    },
    {
      "term": "Stationarity",
      "definition": "A process whose relevant statistical properties remain stable under the chosen definition."
    },
    {
      "term": "AR(p)",
      "definition": "An autoregressive model using p lagged observations."
    },
    {
      "term": "ACF/PACF",
      "definition": "Correlation diagnostics for lag dependence and model identification."
    },
    {
      "term": "Cointegration",
      "definition": "A stable long-run relationship among non-stationary variables."
    },
    {
      "term": "ARCH",
      "definition": "A model family for conditional volatility that changes over time."
    },
    {
      "term": "Look-ahead leakage",
      "definition": "Using information unavailable at prediction time, producing an invalidly optimistic evaluation."
    }
  ],
  "insights": [
    "Use the scheduled sampling cadence as a data-quality check: missing or uneven timestamps can change the meaning of a lag and should be recorded before imputation.",
    "Treat the first plot as a model-risk control. A high-accuracy model on a shuffled split may simply be learning future information.",
    "Compare a seasonal-naive or ARIMA baseline before a deep sequence model; the added complexity is justified only when it improves an honest time-based evaluation.",
    "Separate trend, seasonality, cycle, and noise conceptually, then test whether the distinction remains stable after a regime change or a variance transformation."
  ],
  "resources": [
    {
      "title": "Forecasting: Principles and Practice (3rd ed.)",
      "url": "https://otexts.com/fpp3/",
      "note": "Free reference on decomposition, ARIMA, regression, forecast evaluation, and practical workflows."
    },
    {
      "title": "Statsmodels time-series analysis",
      "url": "https://www.statsmodels.org/stable/tsa.html",
      "note": "API and examples for ARIMA, VAR, state-space models, decomposition, and diagnostics."
    },
    {
      "title": "scikit-learn TimeSeriesSplit",
      "url": "https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html",
      "note": "Chronology-preserving cross-validation and the gap parameter for leakage control."
    },
    {
      "title": "TensorFlow time-series forecasting tutorial",
      "url": "https://www.tensorflow.org/tutorials/structured_data/time_series",
      "note": "Hands-on windows, baselines, recurrent models, and forecast evaluation."
    },
    {
      "title": "NIST Engineering Statistics Handbook: time series",
      "url": "https://www.itl.nist.gov/div898/handbook/pmc/pmc.htm",
      "note": "Reference material for autocorrelation, stationarity, and time-series diagnostics."
    }
  ],
  "quiz": [
    {
      "question": "What makes a time series different from an ordinary unordered dataset?",
      "options": [
        "Observations are always text",
        "Observations are ordered in time and may have temporal dependence",
        "It has no variables",
        "It can only contain yearly values"
      ],
      "answer": 1,
      "explanation": "Time order can carry information because a value may depend on earlier values.",
      "optionNotes": [
        "Incorrect: “Observations are always text” does not match the lecture evidence or definition.",
        "Correct: Time order can carry information because a value may depend on earlier values.",
        "Incorrect: “It has no variables” does not match the lecture evidence or definition.",
        "Incorrect: “It can only contain yearly values” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why is visualization useful before forecasting?",
      "options": [
        "It reveals trend, seasonality, structure, and unusual observations",
        "It guarantees a perfect forecast",
        "It deletes every outlier automatically",
        "It replaces data collection"
      ],
      "answer": 0,
      "explanation": "Plots help diagnose patterns and anomalies before a model is selected.",
      "optionNotes": [
        "Correct: Plots help diagnose patterns and anomalies before a model is selected.",
        "Incorrect: “It guarantees a perfect forecast” does not match the lecture evidence or definition.",
        "Incorrect: “It deletes every outlier automatically” does not match the lecture evidence or definition.",
        "Incorrect: “It replaces data collection” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is a long-term direction in a series called?",
      "options": [
        "Trend",
        "Noise",
        "Token",
        "Fold"
      ],
      "answer": 0,
      "explanation": "The lecture defines trend as the long-term direction of a series.",
      "optionNotes": [
        "Correct: The lecture defines trend as the long-term direction of a series.",
        "Incorrect: “Noise” does not match the lecture evidence or definition.",
        "Incorrect: “Token” does not match the lecture evidence or definition.",
        "Incorrect: “Fold” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What distinguishes seasonality from a broad business cycle?",
      "options": [
        "Seasonality repeats at a fixed or known frequency",
        "Seasonality is always random",
        "Cycles occur every hour",
        "They are exactly identical concepts"
      ],
      "answer": 0,
      "explanation": "Seasonality is tied to a regular calendar frequency; cycles may have variable length.",
      "optionNotes": [
        "Correct: Seasonality is tied to a regular calendar frequency; cycles may have variable length.",
        "Incorrect: “Seasonality is always random” does not match the lecture evidence or definition.",
        "Incorrect: “Cycles occur every hour” does not match the lecture evidence or definition.",
        "Incorrect: “They are exactly identical concepts” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does irregularity or noise represent?",
      "options": [
        "Unpredictable random variation",
        "A guaranteed upward trend",
        "A class label",
        "A database key"
      ],
      "answer": 0,
      "explanation": "Noise captures unpredictable fluctuations caused by random or unexpected events.",
      "optionNotes": [
        "Correct: Noise captures unpredictable fluctuations caused by random or unexpected events.",
        "Incorrect: “A guaranteed upward trend” does not match the lecture evidence or definition.",
        "Incorrect: “A class label” does not match the lecture evidence or definition.",
        "Incorrect: “A database key” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which quantity is checked when discussing weak stationarity?",
      "options": [
        "Stable mean and variance over time",
        "Only the file size",
        "The colour of a plot",
        "The number of students"
      ],
      "answer": 0,
      "explanation": "The lecture introduces mean and variance stability as stationarity properties.",
      "optionNotes": [
        "Correct: The lecture introduces mean and variance stability as stationarity properties.",
        "Incorrect: “Only the file size” does not match the lecture evidence or definition.",
        "Incorrect: “The colour of a plot” does not match the lecture evidence or definition.",
        "Incorrect: “The number of students” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "In an autoregressive process, the current value depends primarily on what?",
      "options": [
        "Previous values of the series",
        "A random screen colour",
        "Only future values",
        "A file extension"
      ],
      "answer": 0,
      "explanation": "AR models use lagged observations as predictors.",
      "optionNotes": [
        "Correct: AR models use lagged observations as predictors.",
        "Incorrect: “A random screen colour” does not match the lecture evidence or definition.",
        "Incorrect: “Only future values” does not match the lecture evidence or definition.",
        "Incorrect: “A file extension” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does AR(p) indicate?",
      "options": [
        "An autoregression using p lagged values",
        "A p-page PDF",
        "A probability with no lags",
        "A seasonal month only"
      ],
      "answer": 0,
      "explanation": "The order p identifies how many lagged observations enter the AR model.",
      "optionNotes": [
        "Correct: The order p identifies how many lagged observations enter the AR model.",
        "Incorrect: “A p-page PDF” does not match the lecture evidence or definition.",
        "Incorrect: “A probability with no lags” does not match the lecture evidence or definition.",
        "Incorrect: “A seasonal month only” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why are ACF and PACF useful?",
      "options": [
        "They help identify lag structure and possible AR orders",
        "They encrypt a recording",
        "They remove seasonality without inspection",
        "They measure screen brightness"
      ],
      "answer": 0,
      "explanation": "Autocorrelation and partial autocorrelation plots inform lag and AR-model selection.",
      "optionNotes": [
        "Correct: Autocorrelation and partial autocorrelation plots inform lag and AR-model selection.",
        "Incorrect: “They encrypt a recording” does not match the lecture evidence or definition.",
        "Incorrect: “They remove seasonality without inspection” does not match the lecture evidence or definition.",
        "Incorrect: “They measure screen brightness” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is differencing commonly used for?",
      "options": [
        "Reducing non-stationarity before modelling",
        "Increasing idle video time",
        "Changing a course code",
        "Adding a participant"
      ],
      "answer": 0,
      "explanation": "Differencing can remove level trends so stationary methods become more appropriate.",
      "optionNotes": [
        "Correct: Differencing can remove level trends so stationary methods become more appropriate.",
        "Incorrect: “Increasing idle video time” does not match the lecture evidence or definition.",
        "Incorrect: “Changing a course code” does not match the lecture evidence or definition.",
        "Incorrect: “Adding a participant” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does a vector autoregressive (VAR) process model?",
      "options": [
        "Several time-series variables that influence one another",
        "One image with no timestamp",
        "Only a single constant",
        "A video codec"
      ],
      "answer": 0,
      "explanation": "VAR extends autoregression to multiple interrelated series.",
      "optionNotes": [
        "Correct: VAR extends autoregression to multiple interrelated series.",
        "Incorrect: “One image with no timestamp” does not match the lecture evidence or definition.",
        "Incorrect: “Only a single constant” does not match the lecture evidence or definition.",
        "Incorrect: “A video codec” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is a unit-root test used to investigate?",
      "options": [
        "Whether a series has a non-stationary unit-root behaviour",
        "Whether a slide is readable",
        "Whether a password is valid",
        "Whether a meeting link opens"
      ],
      "answer": 0,
      "explanation": "Unit-root tests are introduced for diagnosing non-stationary processes.",
      "optionNotes": [
        "Correct: Unit-root tests are introduced for diagnosing non-stationary processes.",
        "Incorrect: “Whether a slide is readable” does not match the lecture evidence or definition.",
        "Incorrect: “Whether a password is valid” does not match the lecture evidence or definition.",
        "Incorrect: “Whether a meeting link opens” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is cointegration concerned with?",
      "options": [
        "Long-run equilibrium relationships among non-stationary variables",
        "Compressing a video",
        "Sorting a calendar",
        "Replacing all missing values blindly"
      ],
      "answer": 0,
      "explanation": "Cointegration studies stable long-run relationships even when individual series are non-stationary.",
      "optionNotes": [
        "Correct: Cointegration studies stable long-run relationships even when individual series are non-stationary.",
        "Incorrect: “Compressing a video” does not match the lecture evidence or definition.",
        "Incorrect: “Sorting a calendar” does not match the lecture evidence or definition.",
        "Incorrect: “Replacing all missing values blindly” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does an error-correction model (ECM) represent?",
      "options": [
        "Short-run adjustments toward a long-run relationship",
        "A colour correction filter",
        "A file repair log",
        "A class attendance sheet"
      ],
      "answer": 0,
      "explanation": "ECM combines short-run dynamics with deviation from long-run equilibrium.",
      "optionNotes": [
        "Correct: ECM combines short-run dynamics with deviation from long-run equilibrium.",
        "Incorrect: “A colour correction filter” does not match the lecture evidence or definition.",
        "Incorrect: “A file repair log” does not match the lecture evidence or definition.",
        "Incorrect: “A class attendance sheet” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which model family was named for volatility clustering?",
      "options": [
        "ARCH/GARCH-style models",
        "K-means only",
        "Naive Bayes only",
        "A static HTML page"
      ],
      "answer": 0,
      "explanation": "The lecture introduces ARCH for changing volatility and volatility clusters.",
      "optionNotes": [
        "Correct: The lecture introduces ARCH for changing volatility and volatility clusters.",
        "Incorrect: “K-means only” does not match the lecture evidence or definition.",
        "Incorrect: “Naive Bayes only” does not match the lecture evidence or definition.",
        "Incorrect: “A static HTML page” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which is a sensible time-series feature?",
      "options": [
        "Lagged value or moving average",
        "A future value leaked into training",
        "A random font size",
        "A participant avatar"
      ],
      "answer": 0,
      "explanation": "Lag features and moving averages use past information while respecting temporal order.",
      "optionNotes": [
        "Correct: Lag features and moving averages use past information while respecting temporal order.",
        "Incorrect: “A future value leaked into training” does not match the lecture evidence or definition.",
        "Incorrect: “A random font size” does not match the lecture evidence or definition.",
        "Incorrect: “A participant avatar” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why must time-based splitting be used for forecasting evaluation?",
      "options": [
        "It avoids using future observations to predict the past",
        "It always raises accuracy",
        "It removes every seasonal pattern",
        "It makes all data independent"
      ],
      "answer": 0,
      "explanation": "Chronological splits prevent look-ahead leakage.",
      "optionNotes": [
        "Correct: Chronological splits prevent look-ahead leakage.",
        "Incorrect: “It always raises accuracy” does not match the lecture evidence or definition.",
        "Incorrect: “It removes every seasonal pattern” does not match the lecture evidence or definition.",
        "Incorrect: “It makes all data independent” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which metric is appropriate for continuous-value forecasting?",
      "options": [
        "Mean absolute error (MAE)",
        "Accuracy only",
        "A file checksum",
        "Number of slides"
      ],
      "answer": 0,
      "explanation": "MAE, MSE, RMSE, and R² were named for regression-style evaluation.",
      "optionNotes": [
        "Correct: MAE, MSE, RMSE, and R² were named for regression-style evaluation.",
        "Incorrect: “Accuracy only” does not match the lecture evidence or definition.",
        "Incorrect: “A file checksum” does not match the lecture evidence or definition.",
        "Incorrect: “Number of slides” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which metric family was named for classification?",
      "options": [
        "Precision, recall, F1, and ROC-AUC",
        "Only RMSE",
        "Only moving average",
        "File size and duration"
      ],
      "answer": 0,
      "explanation": "The lecture contrasts classification metrics with regression metrics.",
      "optionNotes": [
        "Correct: The lecture contrasts classification metrics with regression metrics.",
        "Incorrect: “Only RMSE” does not match the lecture evidence or definition.",
        "Incorrect: “Only moving average” does not match the lecture evidence or definition.",
        "Incorrect: “File size and duration” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why are LSTMs useful for sequential data?",
      "options": [
        "Gates help retain or forget information over longer dependencies",
        "They remove the need for timestamps",
        "They only classify images",
        "They guarantee no noise"
      ],
      "answer": 0,
      "explanation": "The instructor links LSTM gates with handling long-term dependencies and the RNN vanishing-gradient problem.",
      "optionNotes": [
        "Correct: The instructor links LSTM gates with handling long-term dependencies and the RNN vanishing-gradient problem.",
        "Incorrect: “They remove the need for timestamps” does not match the lecture evidence or definition.",
        "Incorrect: “They only classify images” does not match the lecture evidence or definition.",
        "Incorrect: “They guarantee no noise” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is the role of a transformer in the roadmap described?",
      "options": [
        "A newer attention-based sequential model to study after RNN/LSTM",
        "A replacement for data collection",
        "A volatility test",
        "A calendar recurrence rule"
      ],
      "answer": 0,
      "explanation": "Transformers were presented as a later topic because attention can model relationships across sequence positions.",
      "optionNotes": [
        "Correct: Transformers were presented as a later topic because attention can model relationships across sequence positions.",
        "Incorrect: “A replacement for data collection” does not match the lecture evidence or definition.",
        "Incorrect: “A volatility test” does not match the lecture evidence or definition.",
        "Incorrect: “A calendar recurrence rule” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is a safe source for a financial forecasting feature?",
      "options": [
        "Historical prices and trading volume available at prediction time",
        "The actual future closing price",
        "A label created after the forecast",
        "A random future news headline"
      ],
      "answer": 0,
      "explanation": "Only information available at prediction time should enter a feature set.",
      "optionNotes": [
        "Correct: Only information available at prediction time should enter a feature set.",
        "Incorrect: “The actual future closing price” does not match the lecture evidence or definition.",
        "Incorrect: “A label created after the forecast” does not match the lecture evidence or definition.",
        "Incorrect: “A random future news headline” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What was the instructor's definition of a time series?",
      "options": [
        "A chronological sequence of data points, usually at consistent intervals",
        "An unordered bag of images",
        "A model with no observations",
        "A list of course links"
      ],
      "answer": 0,
      "explanation": "The displayed TIME SERIES slide states the chronological-sequence definition and connects past, present, and future.",
      "optionNotes": [
        "Correct: The displayed TIME SERIES slide states the chronological-sequence definition and connects past, present, and future.",
        "Incorrect: “An unordered bag of images” does not match the lecture evidence or definition.",
        "Incorrect: “A model with no observations” does not match the lecture evidence or definition.",
        "Incorrect: “A list of course links” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which observation illustrates temporal dependence?",
      "options": [
        "Today's electricity demand may depend on yesterday's demand",
        "A logo depends on screen colour",
        "A file name predicts a password",
        "A slide number changes the weather"
      ],
      "answer": 0,
      "explanation": "The lecture uses temperature, sales, GDP, stock prices, and electricity as examples of dependence on earlier values.",
      "optionNotes": [
        "Correct: The lecture uses temperature, sales, GDP, stock prices, and electricity as examples of dependence on earlier values.",
        "Incorrect: “A logo depends on screen colour” does not match the lecture evidence or definition.",
        "Incorrect: “A file name predicts a password” does not match the lecture evidence or definition.",
        "Incorrect: “A slide number changes the weather” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which set correctly lists the four components shown near the end?",
      "options": [
        "Trend, seasonality, cyclical variation, and irregular/noise",
        "Accuracy, recall, precision, and F1",
        "Rows, columns, keys, and joins",
        "Encoder, decoder, token, and prompt"
      ],
      "answer": 0,
      "explanation": "The COMPONENTS OF TIME SERIES DATA slide groups long-term trend, seasonal pattern, cycle, and irregular noise.",
      "optionNotes": [
        "Correct: The COMPONENTS OF TIME SERIES DATA slide groups long-term trend, seasonal pattern, cycle, and irregular noise.",
        "Incorrect: “Accuracy, recall, precision, and F1” does not match the lecture evidence or definition.",
        "Incorrect: “Rows, columns, keys, and joins” does not match the lecture evidence or definition.",
        "Incorrect: “Encoder, decoder, token, and prompt” does not match the lecture evidence or definition."
      ]
    }
  ]
}
};
