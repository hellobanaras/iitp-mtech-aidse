// English-only publication unit.
const quiz = [
  ["Which missing-value method best preserves a smooth relationship between neighbouring continuous observations?", ["Linear interpolation", "Dropping every incomplete row", "Replacing timestamps with categories", "Shuffling the observations"], 0, ["Correct: interpolation estimates an interior value from neighbouring points and retains temporal order.", "Incorrect: deletion can break continuity and discard useful evidence.", "Incorrect: changing timestamps into categories does not estimate the missing measurement.", "Incorrect: shuffling destroys the temporal structure a time-series method needs."]],
  ["Why should an extreme value from a stock-market crash or epidemic not be deleted automatically?", ["It may be a genuine event carrying important predictive information", "All outliers are measurement errors", "It guarantees a lower ADF statistic", "It makes every series stationary"], 0, ["Correct: a real shock is part of the process and may be the most important observation to preserve.", "Incorrect: an outlier flag does not prove an error.", "Incorrect: retaining an event does not guarantee any particular ADF statistic.", "Incorrect: a genuine extreme does not make a series stationary."]],
  ["What practical property defines a stationary time series in this lecture?", ["Stable mean, variance, and dependence structure over time", "An always-increasing trend", "Only positive observations", "Exactly one seasonal cycle"], 0, ["Correct: stationarity is framed through stable statistical behaviour, including autocorrelation.", "Incorrect: an increasing trend is evidence of non-stationarity.", "Incorrect: positivity is unrelated to stationarity.", "Incorrect: the number of seasonal cycles does not define stationarity."]],
  ["What does the Augmented Dickey–Fuller test investigate?", ["Whether the series has a unit root", "Whether a CSV has duplicate columns", "Whether a chart uses the right colour", "Whether a moving average has equal weights"], 0, ["Correct: the ADF test uses a unit-root hypothesis to assess stationarity evidence.", "Incorrect: duplicate-column detection is a data-quality task, not the ADF test.", "Incorrect: chart styling is unrelated to ADF.", "Incorrect: moving-average weights are not the ADF hypothesis."]],
  ["Which transformation directly computes the change from a previous period?", ["Differencing", "Min–max scaling", "Backward filling", "Winsorisation"], 0, ["Correct: differencing constructs a new series from current minus lagged values.", "Incorrect: min–max scaling changes range, not temporal change.", "Incorrect: backward filling copies a later observed value into a gap.", "Incorrect: winsorisation caps extremes rather than forming temporal differences."]],
  ["What is the output range of standard min–max normalisation?", ["0 to 1", "Minus infinity to infinity", "Mean 0 and variance 0", "Only integers"], 0, ["Correct: subtracting the minimum and dividing by the range maps the observed minimum to 0 and maximum to 1.", "Incorrect: min–max scaling produces a bounded interval for the fitted range.", "Incorrect: mean 0 with unit standard deviation describes standardisation, not min–max scaling.", "Incorrect: normalised values are generally continuous decimals."]],
  ["How does z-score standardisation describe the transformed data?", ["Mean approximately 0 and standard deviation approximately 1", "Minimum 0 and maximum 1 in every future sample", "All observations equal to the median", "No sensitivity to outliers"], 0, ["Correct: z=(x−μ)/σ centres by the mean and scales by standard deviation.", "Incorrect: a 0–1 range is min–max normalisation.", "Incorrect: standardisation preserves relative variation rather than replacing values with the median.", "Incorrect: mean and standard deviation can themselves be influenced by outliers."]],
  ["Why can scaling help an optimisation-based forecasting model?", ["It can reduce scale imbalance and improve numerical convergence", "It creates future observations", "It removes every seasonal pattern", "It guarantees zero prediction error"], 0, ["Correct: comparable feature scales can make loss-surface optimisation more stable and efficient.", "Incorrect: scaling never invents genuine future observations.", "Incorrect: scaling alone does not remove seasonality.", "Incorrect: preprocessing cannot guarantee perfect forecasts."]],
  ["When is a log transformation particularly useful?", ["When positive values show multiplicative growth or increasing variance", "When all values are negative and zero", "When timestamps are unordered", "When no transformation is permitted"], 0, ["Correct: logs compress large positive values and can stabilise multiplicative variation.", "Incorrect: the ordinary log is undefined for non-positive values without an adjustment.", "Incorrect: ordering must be repaired independently; a log does not sort timestamps.", "Incorrect: the question describes a situation where a transformation is being considered."]],
  ["What role does λ play in a Box–Cox transformation?", ["It selects a member of a power-transformation family", "It sets the time-zone offset", "It counts missing rows", "It is always the seasonal period"], 0, ["Correct: λ controls whether the transformation resembles a log, square root, reciprocal, or another power.", "Incorrect: time zones are unrelated to Box–Cox.", "Incorrect: missing-row count is not the Box–Cox parameter.", "Incorrect: λ is a transformation parameter, not automatically a seasonal period."]],
  ["What important input restriction applies to the ordinary Box–Cox transformation?", ["Values must be positive", "Values must be strings", "There must be exactly three observations", "The series must already be white noise"], 0, ["Correct: the standard Box–Cox definition requires strictly positive observations.", "Incorrect: Box–Cox operates on numeric values.", "Incorrect: it is not restricted to three observations.", "Incorrect: the purpose is often to improve variance behaviour, not to require white noise first."]],
  ["What does a three-period simple moving average at time t use?", ["The current value and the previous two values with equal weight", "Only the first three values in the dataset", "Three future observations", "The median of all history"], 0, ["Correct: MAₜ=(yₜ+yₜ₋₁+yₜ₋₂)/3 for the trailing three-period example.", "Incorrect: the window moves with time rather than remaining fixed at the start.", "Incorrect: a trailing moving average does not require future observations.", "Incorrect: it is an arithmetic mean of the window, not the median of all history."]],
  ["Why does a weighted moving average respond faster than an equal-weight moving average?", ["It assigns greater weight to recent observations", "It discards the time index", "It always uses a longer window", "It removes all random noise"], 0, ["Correct: larger recent weights reduce lag when the level changes.", "Incorrect: the time index remains essential.", "Incorrect: responsiveness comes from weights, not necessarily window length.", "Incorrect: smoothing reduces some noise but cannot remove every random component."]],
  ["What is a lag-1 value?", ["The observation one period before the current time", "The observation one period in the future", "The largest value in the series", "The first quartile"], 0, ["Correct: lag 1 shifts the series back by one time step.", "Incorrect: a future value is a lead, not a lag.", "Incorrect: lag position is temporal, not based on magnitude.", "Incorrect: a quartile is a distribution summary."]],
  ["Why are centred moving averages useful in decomposition?", ["They align a smoothed value with the centre of its time span", "They convert every value to zero", "They eliminate the need for a seasonal period", "They use only future values"], 0, ["Correct: centring prevents an even-window average from being placed between periods and helps expose trend-cycle structure.", "Incorrect: centring changes alignment, not every value to zero.", "Incorrect: decomposition still needs an appropriate seasonal structure.", "Incorrect: centred averages use observations on both sides where available, not only future values."]],
  ["Which method is suitable for a series with level but no trend or seasonality?", ["Simple exponential smoothing", "Holt–Winters multiplicative smoothing", "Seasonal differencing only", "A categorical mode"], 0, ["Correct: simple exponential smoothing updates a level forecast using α.", "Incorrect: Holt–Winters is designed for trend and seasonality.", "Incorrect: seasonal differencing is unnecessary when seasonality is absent.", "Incorrect: a categorical mode is not a time-series forecasting method."]],
  ["What happens when α is larger in simple exponential smoothing?", ["The forecast responds more quickly to recent changes", "Past and recent observations receive identical weight forever", "The model gains a seasonal component automatically", "The time index is removed"], 0, ["Correct: a larger α places more emphasis on the latest observation.", "Incorrect: exponential weights decay rather than remaining identical.", "Incorrect: α alone does not add seasonality.", "Incorrect: smoothing retains temporal order."]],
  ["What additional component does Holt’s linear method introduce beyond level?", ["Trend", "A classification label", "A database index", "A privacy budget"], 0, ["Correct: Holt adds a trend state and its own smoothing parameter β.", "Incorrect: Holt is a forecasting method, not a classifier.", "Incorrect: database indexing is unrelated.", "Incorrect: privacy budgets belong to differential privacy."]],
  ["Why can Holt’s linear method still be insufficient?", ["It does not model seasonality", "It cannot model a level", "It requires categorical observations", "It has no forecast equation"], 0, ["Correct: Holt models level and trend but not a seasonal state.", "Incorrect: level is one of Holt’s core states.", "Incorrect: the method operates on numeric time-series observations.", "Incorrect: Holt explicitly produces multi-step forecasts from level and trend."]],
  ["When is additive Holt–Winters appropriate?", ["When seasonal amplitude stays roughly constant across levels", "When seasonal amplitude grows in proportion to level", "When there is no time order", "When every observation is missing"], 0, ["Correct: additive seasonality contributes a roughly constant amount.", "Incorrect: proportional seasonal amplitude suggests a multiplicative form.", "Incorrect: Holt–Winters requires ordered observations.", "Incorrect: no model can be fit when every observation is missing."]],
  ["When is multiplicative Holt–Winters more appropriate?", ["When seasonal variation increases with the series level", "When seasonal variation is a fixed number of units", "When the series contains text only", "When no seasonality exists"], 0, ["Correct: multiplicative seasonality scales with the level.", "Incorrect: a fixed seasonal amplitude is additive.", "Incorrect: the method requires numeric measurements.", "Incorrect: without seasonality a non-seasonal method is simpler."]],
  ["What does autocorrelation measure?", ["Association between a series and its lagged values", "Association between column names and file size", "Only the average level", "The number of missing timestamps"], 0, ["Correct: autocorrelation quantifies temporal dependence at selected lags.", "Incorrect: file metadata is unrelated.", "Incorrect: the mean does not describe lag dependence.", "Incorrect: missingness count is a separate diagnostic."]],
  ["What model family did the instructor preview after classical smoothing?", ["AR, MA, ARIMA, and SARIMA", "Only k-means clustering", "Only decision trees", "Only image convolution"], 0, ["Correct: the lecture closes by previewing autoregressive and integrated moving-average models.", "Incorrect: k-means is not the announced sequence.", "Incorrect: decision trees were not the announced sequence.", "Incorrect: image convolution is outside this time-series roadmap."]],
  ["What did the instructor promise to demonstrate in a later lecture?", ["Python code for ACF/PACF and forecasting methods", "A new calendar system", "A blockchain smart contract", "A language translation model"], 0, ["Correct: the lecture explicitly defers Python-based ACF/PACF work to an upcoming session.", "Incorrect: calendar implementation was not discussed.", "Incorrect: smart contracts are unrelated to this course segment.", "Incorrect: translation models were not promised here."]],
  ["What is the safest workflow before fitting a forecasting model?", ["Preserve raw data, diagnose gaps/outliers/stationarity, transform transparently, then validate", "Delete every unusual point and fit immediately", "Shuffle observations before training", "Choose a model only from its name"], 0, ["Correct: the lecture sequence makes preprocessing and diagnostics explicit before classical forecasting.", "Incorrect: blanket deletion can erase genuine shocks.", "Incorrect: shuffling destroys ordered dependence.", "Incorrect: model choice should follow the series structure and validation evidence."]]
].map(([question, options, answer, optionNotes]) => ({
  question,
  options,
  answer,
  explanation: optionNotes[answer].replace(/^Correct: /, ""),
  optionNotes
}));

export const ecs6401Lecture20260828 = {
  en: {
    title: "Preprocessing, variance stabilisation, and classical time-series smoothing",
    lede: "A verified 00:05:32–00:51:43 teaching interval connecting missing-value and outlier decisions to stationarity, scaling, power transformations, moving averages, exponential smoothing, Holt, and Holt–Winters forecasting.",
    instructionalInterval: "00:05:32–00:51:43 source time (46m 11s); the participant-only opening and idle tail are excluded.",
    reviewLevel: "Full-timeline visual sweep, 2× bounded audio-plus-visible-tab capture, source-mapped transcript, and 47-frame slide/whiteboard review",
    coverage: [
      { title: "Preprocess without erasing temporal evidence", body: "Select gap and outlier treatments from the data-generating process, then diagnose stationarity before modelling." },
      { title: "Scale and stabilise variance deliberately", body: "Contrast min–max normalisation, z-score standardisation, log, square-root, Box–Cox, and seasonal differencing." },
      { title: "Move from smoothing to forecasting", body: "Derive simple, weighted, and centred moving averages before comparing exponential smoothing, Holt, and Holt–Winters." }
    ],
    takeaway: "A forecast is only as defensible as the preprocessing assumptions behind it: preserve real shocks, make transformations auditable, and choose smoothing states that match level, trend, and seasonality.",
    slideTrail: [
      { time: "00:05:32", title: "Missing values and outlier recap", note: "The lecture resumes with backward fill, interpolation, seasonal imputation, IQR screening, and the warning that real shocks should not be discarded automatically." },
      { time: "00:08:32", title: "What is stationarity?", note: "Stable mean, variance, and autocorrelation are contrasted with trend, seasonality, and changing variance." },
      { time: "00:10:32", title: "ADF test and transformations", note: "Unit-root evidence leads into differencing, log, square-root, and seasonal differencing remedies." },
      { time: "00:15:32", title: "Why normalisation is useful", note: "Feature-scale imbalance, optimisation convergence, and cross-variable comparison motivate scaling." },
      { time: "00:17:32", title: "Normalisation and standardisation", note: "Min–max scaling is contrasted with z-score centring and unit standard deviation." },
      { time: "00:20:32", title: "Why variance stabilisation is needed", note: "Increasing fluctuations motivate log and square-root transformations before model fitting." },
      { time: "00:25:32", title: "Box–Cox and transformation choices", note: "A power family controlled by lambda is connected to positive-valued growth series." },
      { time: "00:27:32", title: "Simple moving average", note: "A trailing three-period example shows equal-weight smoothing and the loss of initial window positions." },
      { time: "00:33:32", title: "Weighted moving average and lag", note: "Larger weights on recent observations reduce lag and make the smoother more responsive." },
      { time: "00:38:32", title: "Centred moving average", note: "Adjacent moving averages are re-aligned to the centre of the time span for decomposition." },
      { time: "00:41:32", title: "Simple exponential smoothing", note: "The smoothing constant alpha controls responsiveness for level-only short-term forecasting." },
      { time: "00:44:32", title: "Holt linear trend method", note: "Separate level and trend states extend exponential smoothing when the series has trend." },
      { time: "00:46:32", title: "Holt–Winters additive and multiplicative", note: "Seasonality is added, with constant amplitude distinguished from level-proportional amplitude." },
      { time: "00:48:32", title: "Forecasting-model roadmap", note: "The instructor previews AR, MA, ARIMA, SARIMA, ACF/PACF, and Python implementation for later lectures." }
    ],
    summary: [
      {
        title: "1. Missingness and outliers encode assumptions",
        sourceRefs: ["00:05:32–00:08:31", "Missing values and outlier recap"],
        paragraphs: [
          "Backward fill, median replacement, interpolation, and seasonal imputation make different claims about how a missing observation relates to nearby or repeated periods. Interpolation is attractive for continuous values with a smooth local relationship; seasonal imputation is more defensible when the series repeats a stable seasonal pattern.",
          "IQR or z-score rules flag candidates; they do not determine deletion. A stock-market crash, extreme-weather event, or epidemic outbreak may reduce average forecast accuracy while remaining essential to an honest model of risk. Preserve the raw point and document any treatment."
        ]
      },
      {
        title: "2. Stationarity links diagnostics to transformation",
        sourceRefs: ["00:08:32–00:15:31", "Stationarity, ADF, differencing, and scale transformations"],
        paragraphs: [
          "A practical stationary series keeps its relevant mean, variance, and dependence structure stable. Trend, seasonality, or variance that expands with level indicates non-stationarity. Plots remain the first diagnostic; the ADF test adds unit-root evidence through a statistic and p-value.",
          "First or seasonal differencing can reduce trend or periodic structure. Log and square-root transforms compress positive high-level fluctuations. Each remedy should be validated on the transformed series rather than treated as an automatic guarantee."
        ]
      },
      {
        title: "3. Scaling and variance stabilisation solve different problems",
        sourceRefs: ["00:15:32–00:27:31", "Scaling, normalisation, standardisation, and Box–Cox"],
        paragraphs: [
          "Min–max scaling maps the fitted range to 0–1, while z-score standardisation centres by the mean and scales by standard deviation. Comparable feature scales can improve optimisation and prevent a large-unit variable from dominating a multivariate model, but scaling does not remove trend or seasonality.",
          "Box–Cox unifies several power transformations through lambda and requires positive values in its ordinary form. The transformation parameter should be estimated or validated from the data, then stored with the modelling pipeline so inference uses exactly the same operation."
        ]
      },
      {
        title: "4. Moving averages trade responsiveness for smoothness",
        sourceRefs: ["00:27:32–00:41:31", "Simple, weighted, lagged, and centred moving averages"],
        paragraphs: [
          "A trailing n-period moving average replaces short-term fluctuations with an equal-weight window and exposes trend, but it lags turning points and cannot produce values until the first complete window. A weighted moving average reduces some lag by giving recent observations greater influence.",
          "A lag shifts the series backward and makes temporal dependence explicit. For even seasonal windows, centring aligns a moving average with the middle of its time span, supporting trend-cycle estimation and decomposition into trend, seasonality, cycle, and residual variation."
        ]
      },
      {
        title: "5. Exponential smoothing adds the states the series needs",
        sourceRefs: ["00:41:32–00:51:43", "Simple exponential smoothing; Holt; Holt–Winters; roadmap"],
        paragraphs: [
          "Simple exponential smoothing updates a level forecast using alpha: a larger alpha responds faster to recent changes, while a smaller alpha is smoother. Holt adds a trend state with its own parameter, but neither method by itself represents seasonality.",
          "Holt–Winters adds a seasonal state. Use an additive form when seasonal amplitude is roughly constant and a multiplicative form when seasonal variation grows with the level. The closing roadmap moves next to AR, MA, ARIMA, SARIMA, and Python-based ACF/PACF diagnostics."
        ]
      }
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [
        { time: "00:37:10", question: "A student asked for the Box–Cox concept to be repeated.", response: "The instructor explained it as a family of power transformations controlled by lambda, highlighting the log-like, square-root, and reciprocal cases and the positive-value requirement." }
      ]
    },
    keyTerms: [
      { term: "Stationarity", definition: "Stable relevant mean, variance, and dependence structure over time." },
      { term: "Unit root", definition: "A stochastic persistence property investigated by tests such as ADF." },
      { term: "Min–max normalisation", definition: "Mapping values relative to an observed minimum and maximum, commonly to 0–1." },
      { term: "Standardisation", definition: "Centring by the mean and scaling by standard deviation." },
      { term: "Box–Cox transformation", definition: "A positive-data power-transformation family controlled by lambda." },
      { term: "Moving average", definition: "A windowed arithmetic mean used to smooth short-term variation." },
      { term: "Lag", definition: "A past value of the series indexed by how many periods it precedes the current one." },
      { term: "Exponential smoothing", definition: "A recursive forecast that gives geometrically decreasing weight to older observations." },
      { term: "Holt method", definition: "Exponential smoothing with separate level and trend states." },
      { term: "Holt–Winters", definition: "Exponential smoothing with level, trend, and seasonal states." }
    ],
    insights: [
      { label: "Data governance", title: "Make preprocessing reversible", body: "Store raw observations, flags, transformations, fitted parameters, and reasons separately. A future reviewer should be able to reproduce the model input without losing the original shock or gap." },
      { label: "Leakage control", title: "Fit every transform inside the training window", body: "Minima, maxima, means, standard deviations, Box–Cox lambda, and imputation rules must be learned from past data only. Fitting them on the full series leaks future information into evaluation." },
      { label: "Model selection", title: "Match state complexity to visible structure", body: "A level-only series does not need Holt–Winters; a seasonal series cannot be represented by simple exponential smoothing. Add trend and seasonal states only when diagnostics and validation justify them." },
      { label: "Robust forecasting", title: "Optimise more than average error", body: "Keeping genuine extremes can worsen mean error while improving tail-risk realism. Evaluate ordinary periods and high-impact events separately when the application cares about resilience." },
      { label: "Connection", title: "Moving averages and exponential smoothing are both filters", body: "A moving average uses a finite window; exponential smoothing uses an effectively infinite window with decaying weights. Both expose low-frequency structure, but their lag and responsiveness differ." }
    ],
    resources: [
      { title: "Forecasting: Principles and Practice — time-series features and transformations", url: "https://otexts.com/fpp3/features.html", note: "Open textbook treatment of transformations, Box–Cox, stationarity, and forecasting workflows." },
      { title: "Forecasting: Principles and Practice — exponential smoothing", url: "https://otexts.com/fpp3/expsmooth.html", note: "Clear derivations and examples for simple, Holt, and Holt–Winters methods." },
      { title: "statsmodels ExponentialSmoothing", url: "https://www.statsmodels.org/stable/generated/statsmodels.tsa.holtwinters.ExponentialSmoothing.html", note: "Official Python API for additive or multiplicative trend and seasonal models." },
      { title: "statsmodels ARIMA", url: "https://www.statsmodels.org/stable/generated/statsmodels.tsa.arima.model.ARIMA.html", note: "Official implementation reference for the model family previewed at the end of the lecture." },
      { title: "scikit-learn preprocessing guide", url: "https://scikit-learn.org/stable/modules/preprocessing.html", note: "Official guidance for fitting scalers and transformations safely in pipelines." },
      { title: "pandas DataFrame.interpolate", url: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html", note: "Official options for numeric and time-aware interpolation of missing values." }
    ],
    quiz
  }
};
