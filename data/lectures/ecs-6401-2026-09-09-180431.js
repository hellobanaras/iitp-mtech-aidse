// English-only publication unit.
const q = (question, correct, explanation, wrong) => ({ question, options: [correct, ...wrong], answer: 0, explanation, optionNotes: [`Correct: ${explanation}`, ...wrong.map(option => `Incorrect: ${option} does not match the lecture concept.`)] });
const quiz = [
  q("What does an MA(q) model use?", "Current and previous error terms", "The moving-average model expresses the current value using a finite number of shocks.", ["Only future observations", "Participant counts", "A seasonal chart only"]),
  q("Why is MA called a finite-impulse model?", "A shock affects only a fixed number of periods", "After q previous errors, the shock no longer enters the MA(q) equation.", ["It has no coefficients", "It always has infinite memory", "It requires no data"]),
  q("What does an AR model use?", "Lagged observations", "Autoregression makes the current value depend on previous values.", ["Only lagged errors", "Random file names", "Future values only"]),
  q("Why can an AR shock persist for a long time?", "Each future value inherits part of the previous value", "The autoregressive recursion carries the effect forward, usually with declining magnitude.", ["The shock is copied unchanged forever", "AR deletes the shock", "AR uses no lags"]),
  q("What does AR(2) include?", "The first two lagged values", "An AR(2) equation includes yₜ₋₁ and yₜ₋₂ plus an error term.", ["Two future values", "Two seasonal periods only", "No observations"]),
  q("What does the p in ARIMA(p,d,q) denote?", "The autoregressive order", "p counts the non-seasonal lagged observations in the AR component.", ["The number of plots", "The p-value", "The recording position"]),
  q("What does d denote in ARIMA?", "The differencing order", "d records how many differences are applied to address non-stationarity.", ["The number of participants", "The MA coefficient", "The sample mean"]),
  q("What does q denote in ARIMA?", "The moving-average order", "q counts the lagged error terms in the MA component.", ["The seasonal period only", "The AR coefficient", "The video duration"]),
  q("Why is differencing used?", "To remove trend or make a series more stationary", "The lecture applies Δyₜ = yₜ − yₜ₋₁ before fitting ARMA dynamics when needed.", ["To add a trend", "To reorder observations", "To encode the audio"]),
  q("What is a first difference?", "yₜ − yₜ₋₁", "It subtracts the immediately preceding observation from the current one.", ["yₜ + yₜ₋₁", "yₜ/yₜ₋₁ always", "The sample variance"]),
  q("What is SARIMA designed to capture?", "Non-seasonal and seasonal dynamics", "SARIMA extends ARIMA with seasonal AR, differencing, and moving-average terms.", ["Only missing values", "Image edges", "Database keys"]),
  q("If data repeat every four periods, what is the seasonal period?", "4", "The seasonal lag m is four when the cycle repeats every four observations.", ["1", "2", "40"]),
  q("What does a seasonal difference with period m look like?", "yₜ − yₜ₋ₘ", "Seasonal differencing compares an observation with the value one cycle earlier.", ["yₜ − yₜ₋₁ only", "yₜ + yₜ₋ₘ", "The ACF at lag zero"]),
  q("What is the purpose of the characteristic equation for AR(2)?", "To inspect stationarity through its roots", "The roots are checked relative to the unit circle.", ["To count slides", "To compute a file hash", "To remove all errors"]),
  q("What root condition did the lecture associate with stationarity?", "Roots outside the unit circle", "For the AR polynomial convention used, roots should have absolute value greater than one.", ["All roots equal zero", "Roots inside the unit circle", "Roots equal the sample mean"]),
  q("What is a unit root associated with?", "Non-stationarity", "A unit root allows shocks to persist and the process to lack stable statistical behaviour.", ["Guaranteed stationarity", "A missing slide", "A database constraint"]),
  q("What is the null hypothesis of the ADF test?", "The series has a unit root", "ADF tests the non-stationary unit-root null against a stationary alternative.", ["The series is white noise", "All AR coefficients are zero", "The seasonal period is one"]),
  q("What does a small ADF p-value generally support?", "Rejecting the unit-root null", "A p-value below a conventional threshold is evidence against non-stationarity.", ["Accepting the unit-root null", "Choosing q automatically", "Increasing the sample mean"]),
  q("What does a large ADF p-value mean?", "Insufficient evidence to reject the unit-root null", "It does not prove non-stationarity, but leaves the null plausible.", ["Guaranteed stationarity", "A perfect forecast", "A known seasonal cycle"]),
  q("What is the difference equation for the unit-root intuition?", "Δyₜ = (ρ − 1)yₜ₋₁ + εₜ", "Writing the model in differences makes ρ = 1 correspond to a zero lag coefficient.", ["Δyₜ = ρ + εₜ", "yₜ = qyₜ₊₁", "ACF = p + d"]),
  q("What does ρ = 1 imply in that equation?", "The coefficient on yₜ₋₁ is zero", "Because ρ − 1 equals zero, the unit-root case is present.", ["The coefficient is two", "The series is automatically seasonal", "The MA order is one"]),
  q("How were AR coefficients estimated from a small table?", "By ordinary least squares using lagged columns", "The lecture forms a design matrix from lagged observations and solves β̂ = (XᵀX)⁻¹Xᵀy.", ["By sorting the timestamps", "By deleting the lags", "By using a participant list"]),
  q("Why must the lagged rows align with the current value?", "Each row must pair yₜ with its valid past lags", "Misalignment changes the regression problem and produces incorrect coefficients.", ["Alignment is irrelevant", "Rows must be random", "Only future lags are valid"]),
  q("Which diagnostic is commonly linked to AR order?", "PACF", "A PACF cutoff or decay suggests a candidate autoregressive order p.", ["File size", "A calendar", "Only the MA equation"]),
  q("Which diagnostic is commonly linked to MA order?", "ACF", "An ACF cutoff or decay suggests a candidate moving-average order q.", ["PACF exclusively", "The root sign", "The number of pages"])
];

export const ecs6401Lecture20260909180431 = {
  en: {
    title: "Moving-average, ARIMA, SARIMA, and stationarity through worked time-series models",
    lede: "This lecture contrasts finite-error memory in MA models with recursive AR memory, then builds ARIMA/SARIMA intuition through differencing, characteristic roots, least-squares AR estimation, and ADF unit-root diagnostics.",
    instructionalInterval: "00:05:00–01:21:11 source time (2× visible-tab video+audio capture; title-card lead-in and idle tail excluded)",
    reviewLevel: "View-only recording; seven-point visible Stream sweep, source-time bounded interval, 2× Lecture Atlas Companion capture, timestamped transcript, and slide/whiteboard evidence verified",
    coverage: [
      { title: "MA versus AR memory", body: "MA(q) uses a finite window of current and previous shocks, whereas AR values carry a shock forward through lagged observations." },
      { title: "ARIMA and differencing", body: "The integrated component applies first or higher-order differencing so ARMA dynamics can be used on a more stable series." },
      { title: "AR estimation and roots", body: "Lagged columns form an OLS design matrix for AR coefficients; the characteristic equation and unit-circle roots diagnose stationarity." },
      { title: "Seasonality and ADF", body: "SARIMA adds seasonal terms, while the ADF test evaluates a unit-root null and must be interpreted with plots and context." }
    ],
    takeaway: "Separate observation memory from shock memory, difference only as needed, estimate lag coefficients with correctly aligned rows, inspect characteristic roots, and treat ADF as evidence about a unit-root null rather than a complete modelling decision.",
    slideTrail: [
      { time: "00:05:00", title: "Moving-average and autoregressive models", note: "Slides define MA(q) through a finite set of shocks and AR through lagged observations." },
      { time: "00:22:58", title: "ARIMA characteristic-equation example", note: "The handwritten derivation illustrates roots and the unit-circle stationarity check." },
      { time: "00:42:58", title: "SARIMA and differencing", note: "Seasonal dependence and differenced series are connected to the ARIMA family." },
      { time: "01:02:58", title: "Lagged design matrix for AR estimation", note: "The instructor aligns yₜ with its first and second lags and solves OLS coefficients." },
      { time: "01:12:58", title: "ARMA combination and seasonal differencing", note: "AR and MA components are combined and seasonal equations are written explicitly." },
      { time: "01:20:00", title: "Closing seasonal equations", note: "Seasonal differencing and ARIMA equations remain visible before the idle webcam tail." }
    ],
    summary: [
      { title: "1. Shock memory versus observation memory", sourceRefs: ["00:05:00–00:22:58", "Moving-average and AR slides"], paragraphs: ["An MA(q) model uses the current error and only q previous errors, so an isolated shock has finite influence. An AR model instead uses previous observations; because each observation carries earlier shocks, the effect generally decays rather than stopping abruptly.", "The distinction is operational: MA terms model short-lived innovation memory, while AR terms model persistence in the observed process."] },
      { title: "2. ARIMA adds a transformation before ARMA", sourceRefs: ["00:22:58–00:42:58", "ARIMA/SARIMA notes"], paragraphs: ["ARIMA(p,d,q) combines p autoregressive lags, d differences, and q moving-average errors. Differencing Δyₜ = yₜ − yₜ₋₁ removes a level trend when the original series is non-stationary.", "SARIMA extends this logic with a seasonal period m and seasonal AR, difference, and MA terms; a seasonal difference compares yₜ with yₜ₋ₘ."] },
      { title: "3. Roots and OLS make AR models testable", sourceRefs: ["00:42:58–01:12:58", "Characteristic equation and lag matrix"], paragraphs: ["For an AR(2), the characteristic equation turns coefficients into roots. Under the convention used in class, roots outside the unit circle support stationarity; a unit root signals persistent, non-stationary behaviour.", "For coefficient estimation, lagged observations form X and current observations form y. Ordinary least squares uses β̂ = (XᵀX)⁻¹Xᵀy, provided each row is aligned with the correct lags."] },
      { title: "4. ADF is a unit-root diagnostic", sourceRefs: ["01:12:58–01:21:11", "ADF/unit-root equations"], paragraphs: ["The difference form Δyₜ = (ρ−1)yₜ₋₁ + εₜ makes ρ = 1 the unit-root case. The ADF test uses a unit-root null: a small p-value supports rejection, while a large p-value leaves the null plausible.", "The lecture stresses that ADF should be combined with plots, seasonality checks, and domain reasoning rather than treated as an automatic model selector."] }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [], announcements: [] },
    suggestedPractice: [{ title: "Optional practice: compare AR and MA impulse responses", detail: "Simulate one shock under MA(2), AR(1), and AR(2), plot the response through 20 periods, and explain why the MA response ends while the AR response decays. This is optional learner practice, not an instructor-assigned deliverable." }],
    insights: [
      { label: "Modelling", title: "Choose the memory source deliberately", body: "An observed persistence pattern may arise from lagged levels, lagged shocks, or both; naming AR versus MA terms clarifies the mechanism being modelled." },
      { label: "Stationarity", title: "Roots and tests answer related but different questions", body: "Characteristic roots describe a fitted AR dynamic, while ADF tests evidence for a unit-root null in the observed series." },
      { label: "Estimation", title: "Lag alignment is part of correctness", body: "A design matrix is meaningful only when every current value is paired with the intended historical lags and no future leakage." },
      { label: "Seasonality", title: "Difference at the cycle, not just at one step", body: "When repetition occurs every m periods, seasonal differencing targets yₜ−yₜ₋ₘ instead of erasing the pattern with arbitrary transformations." }
    ],
    keyTerms: [
      { term: "MA(q)", definition: "A model using current and q previous error terms." },
      { term: "AR(p)", definition: "A model using p lagged observations." },
      { term: "ARIMA", definition: "An ARMA model preceded by d-order differencing." },
      { term: "SARIMA", definition: "ARIMA with seasonal AR, differencing, and MA terms." },
      { term: "Unit root", definition: "A root condition associated with persistent shocks and non-stationarity." },
      { term: "ADF test", definition: "A test whose null hypothesis is a unit root." }
    ],
    resources: [
      { title: "Forecasting: Principles and Practice (3rd ed.)", url: "https://otexts.com/fpp3/", note: "Free chapters on ARIMA, differencing, seasonality, and forecast evaluation." },
      { title: "Statsmodels time-series analysis", url: "https://www.statsmodels.org/stable/tsa.html", note: "Official APIs for AutoReg, ARIMA, ADF, ACF/PACF, and diagnostics." },
      { title: "NIST time-series handbook", url: "https://www.itl.nist.gov/div898/handbook/pmc/pmc.htm", note: "Reference material on autocorrelation, stationarity, and model diagnostics." }
    ],
    quiz
  }
};
