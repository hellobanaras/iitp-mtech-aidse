// English-only publication unit.
const q = (question, correct, explanation, wrong) => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
  optionNotes: [`Correct: ${explanation}`, ...wrong.map(option => `Incorrect: ${option} does not match the calculation or definition tested here.`)]
});

const quiz = [
  q("What does ACF at lag k measure?", "Dependence between a series and its k-period lag", "ACF compares xₜ with xₜ₋ₖ after centering by the mean.", ["Only the sample size", "The screen resolution", "A future value with no time gap"]),
  q("What is the first step in the lecture's numerical ACF example?", "Compute the series mean and centered values", "The example first subtracts the mean (4.1) from each observation to form xₜ.", ["Shuffle the observations", "Delete the time index", "Fit a neural network"]),
  q("Why is ρ₀ equal to one?", "A value is perfectly correlated with itself", "Lag-zero autocorrelation is the variance divided by itself.", ["It is always the p-value", "It is the seasonal period", "It is a missing-value code"]),
  q("For an AR(3), how many lagged observations enter the model?", "Three", "AR(3) uses xₜ₋₁, xₜ₋₂, and xₜ₋₃ with their coefficients.", ["One", "Ten", "No lagged observations"]),
  q("What do Yule–Walker equations estimate in an AR model?", "Autoregressive coefficients from autocorrelations", "The Toeplitz correlation system Rφ = r solves for φ.", ["Video duration", "A database primary key", "The number of participants"]),
  q("What does PACF at lag k isolate?", "The additional lag-k relationship after shorter lags are controlled", "PACF removes the contribution explained by intervening lags.", ["The mean of the raw series", "Every seasonal effect automatically", "Only the observation count"]),
  q("For lag one, what is the relationship used in the centered series?", "xₜ with xₜ₋₁", "Lag one pairs each centered observation with the immediately preceding centered value.", ["xₜ with xₜ₊₁ only", "x₁ with x₁₀ only", "Two unrelated series"]),
  q("What is the practical purpose of plotting ACF and PACF?", "To suggest dependence structure and model order", "The plots provide diagnostics before selecting AR or MA terms.", ["To guarantee a forecast", "To replace all validation", "To encode audio"]),
  q("Which plot is primarily used to choose an AR order in the lecture?", "PACF", "A PACF cutoff or decay helps identify a candidate p for an AR model.", ["Only a histogram", "A calendar plot", "A file-size plot"]),
  q("Which plot is primarily used to choose an MA order?", "ACF", "The lecture links ACF behaviour to moving-average order selection.", ["PACF exclusively", "A scatterplot of file names", "The video timeline"]),
  q("What does a moving-average model use?", "Past error terms", "An MA(q) expresses the current value using current and previous shocks.", ["Only future observations", "Participant counts", "A random screen coordinate"]),
  q("How does an AR model differ from an MA model?", "AR uses lagged observations; MA uses lagged errors", "The two model families use different sources of temporal memory.", ["AR has no parameters", "MA always uses future values", "They are identical by definition"]),
  q("What does ARIMA add to ARMA?", "Differencing for non-stationarity", "The I term integrates differencing before the AR and MA components.", ["Image compression", "A second camera", "A database index"]),
  q("What does SARIMA additionally model?", "Seasonal dependence", "The seasonal extension adds seasonal AR, differencing, and MA terms.", ["Only missing values", "Screen brightness", "Participant permissions"]),
  q("What is a unit root associated with?", "Non-stationary behaviour", "A unit root makes shocks persistent and allows mean or variance behaviour to change.", ["Perfect stationarity", "A video codec", "A constant file name"]),
  q("What is the null hypothesis of the ADF test as discussed?", "The series has a unit root and is non-stationary", "ADF tests the unit-root null against a stationary alternative.", ["The series is perfectly seasonal", "Every coefficient is zero", "The data has no time index"]),
  q("What does p < 0.05 suggest in the ADF rule of thumb?", "Reject the non-stationary null", "A sufficiently small p-value is evidence supporting stationarity, subject to diagnostics and context.", ["Accept the unit-root null", "Delete the series", "Choose q without inspection"]),
  q("What does p > 0.05 suggest in the lecture's ADF interpretation?", "Insufficient evidence to reject non-stationarity", "A larger p-value leaves the unit-root null plausible.", ["Guaranteed stationarity", "A perfect forecast", "An AR(3) coefficient"]),
  q("What does ρ − 1 represent in the difference equation?", "The coefficient on the lagged level", "Δyₜ = (ρ−1)yₜ₋₁ + εₜ links the coefficient to unit-root behaviour.", ["The ADF p-value itself", "The seasonal period", "The number of lags in MA"]),
  q("If ρ = 1 in that equation, what happens to the lag coefficient?", "It becomes zero", "ρ−1 equals zero, the unit-root case associated with non-stationarity.", ["It becomes two", "It becomes the sample mean", "It becomes the ACF at lag three"]),
  q("Why are ACF and PACF calculations done on centered data?", "To remove the mean from covariance products", "Subtracting the mean makes covariance and correlation calculations reflect deviations around the level.", ["To increase the file size", "To change time order", "To hide missing values"]),
  q("What numeric series was used for the worked mean example?", "2, 4, 5, 4, 3, 5, 6, 5, 4, 3", "The ten observations have mean 4.1 in the worked ACF setup.", ["1, 1, 1, 1", "10, 20, 30", "A random image matrix"]),
  q("What did the instructor say may appear in an exam and assignments?", "ACF/PACF and AR(3) matrix calculations", "Students were asked to practise solving the equations through at least AR(3).", ["Only HTML styling", "A video-editing workflow", "A database normalization essay"]),
  q("What should be done before interpreting an ADF p-value?", "Combine the test with plots and domain context", "Structural breaks, variance changes, and seasonality can make one test misleading.", ["Shuffle the series", "Ignore the time index", "Assume every p-value proves causation"]),
  q("What is the next-lecture modelling direction stated by the instructor?", "A larger AR/MA/ARIMA/SARIMA example", "The next session will connect ACF/PACF to p, d, and q choices in ARIMA-family models.", ["A cryptographic key schedule", "A computer-vision classifier", "A filesystem benchmark"])
];

export const ecs6401Lecture20260904180115 = {
  en: {
    title: "ACF, PACF, AR(3), moving-average models, and unit-root diagnostics",
    lede: "This worked time-series lecture calculates autocorrelation from centered observations, connects Yule–Walker equations to AR parameters and PACF, contrasts AR and moving-average model order selection, and explains unit roots and the ADF stationarity test.",
    instructionalInterval: "00:06:21–01:31:16 source time (2× visible-tab video+audio capture; participant lead-in and idle tail excluded)",
    reviewLevel: "View-only recording; seven-point visible Stream sweep, source-time bounded interval, 2× Lecture Atlas Companion capture, timestamped transcript, and slide/whiteboard evidence verified",
    coverage: [
      { title: "Centered observations and ACF", body: "The instructor computes a mean of 4.1, forms xₜ = yₜ − ȳ, and uses centered products to calculate ACF at lags 1, 2, and 3." },
      { title: "Yule–Walker and PACF", body: "Autocorrelations populate the Yule–Walker system for AR coefficients; PACF isolates the contribution of a lag after shorter lags are controlled." },
      { title: "AR, MA, ARMA, and ARIMA", body: "AR models use lagged observations, MA models use lagged shocks, and ARIMA adds differencing for non-stationary series." },
      { title: "Unit roots and ADF", body: "The unit-root equation links ρ = 1 to non-stationarity. ADF's p-value is interpreted with plots and domain context rather than in isolation." }
    ],
    takeaway: "Center the series, compute ACF carefully, use PACF/ACF as model-order diagnostics, solve Yule–Walker systems for AR parameters, and treat ADF as evidence about a unit-root null—not as a substitute for visual and domain checks.",
    slideTrail: [
      { time: "00:06:21", title: "Numerical ACF, AR(3), and PACF example", note: "The lecture sets up a ten-observation stationary series and previews the ACF → AR → PACF calculation chain." },
      { time: "00:12:00", title: "ACF definition and centered series", note: "The mean 4.1 and xₜ = yₜ − ȳ transformation are used before lagged products are summed." },
      { time: "00:27:00", title: "ACF lag-one calculation", note: "The numerator pairs each centered value with its one-period lag and divides by the centered sum of squares." },
      { time: "00:47:00", title: "Yule–Walker AR parameters", note: "The autocorrelation values form the matrix equations used to estimate AR coefficients." },
      { time: "00:58:00", title: "PACF from ACF values", note: "PACF at lag two and lag three is derived from the autocorrelation relationships." },
      { time: "01:05:00", title: "AR versus moving-average order", note: "PACF is connected to AR order while ACF is connected to MA order; ARMA and ARIMA are introduced." },
      { time: "01:21:00", title: "Unit root and ADF test", note: "The ρ − 1 difference equation and p-value interpretation distinguish stationary and non-stationary cases." },
      { time: "01:31:16", title: "Closing ADF clarification", note: "The instructor distinguishes the model coefficient ρ from an ADF p-value and closes with the next ARIMA example." }
    ],
    summary: [
      { title: "1. ACF begins with a centered series", sourceRefs: ["00:06:21–00:27:00", "Numerical ACF; centered-series frames"], paragraphs: ["The instructor uses ten observations (2, 4, 5, 4, 3, 5, 6, 5, 4, 3), whose mean is 4.1. Each value is centered as xₜ = yₜ − ȳ before any lag calculation.", "For lag k, the numerator multiplies xₜ by xₜ₋ₖ over the valid overlapping range; the denominator is the sum of xₜ². This preserves temporal order and makes the result a correlation-like measure of memory."] },
      { title: "2. Yule–Walker turns correlations into AR coefficients", sourceRefs: ["00:47:00–00:58:00", "Yule–Walker matrix"], paragraphs: ["The lecture revisits the Yule–Walker equations: autocorrelations fill a structured matrix R and vector r, and solving Rφ = r produces AR coefficients.", "The worked path extends to AR(3), where three lag coefficients are estimated and the resulting relationships support PACF calculations."] },
      { title: "3. PACF isolates additional lag information", sourceRefs: ["00:58:00–01:05:00", "PACF derivation"], paragraphs: ["PACF at lag k asks whether lag k contributes after shorter lags are accounted for. At lag one, ACF and PACF coincide; differences emerge at higher lags.", "This makes PACF useful for proposing an AR order, while the proposed order still requires model fitting and chronological evaluation."] },
      { title: "4. AR, MA, and ARIMA use different kinds of memory", sourceRefs: ["01:05:00–01:21:00", "AR/MA/ARIMA slides"], paragraphs: ["An AR model uses previous observations; a moving-average model uses previous error terms. ACF and PACF plots provide complementary hints for selecting MA and AR orders.", "ARMA combines both components for stationary data. ARIMA adds differencing, and SARIMA adds seasonal terms when repeated seasonal dependence is present."] },
      { title: "5. Unit roots motivate stationarity testing", sourceRefs: ["01:21:00–01:31:16", "Unit-root and ADF slides"], paragraphs: ["The difference equation Δyₜ = (ρ−1)yₜ₋₁ + εₜ makes the unit-root case explicit: ρ = 1 gives a zero lag coefficient and persistent, non-stationary behaviour.", "The augmented Dickey–Fuller test evaluates a unit-root null. A small p-value (rule of thumb below 0.05) supports rejecting non-stationarity; a larger p-value leaves the null plausible. The instructor stresses that ρ and the ADF p-value are different quantities and that plots and context remain necessary."] }
    ],
    courseSignals: {
      assignments: [{ time: "00:02:31", title: "ACF/PACF and AR(3) assignment questions", detail: "The instructor said ACF/PACF equations can appear in exams and assignments, with assignment questions extending to AR(3) matrix multiplication." }],
      homework: [],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [{ time: "01:27:00", question: "Are ρ, γ, and the ADF p-value the same?", response: "No. The instructor clarified that ρ is a model coefficient, while the ADF p-value is the result of a statistical test." }],
      announcements: []
    },
    suggestedPractice: [{ title: "Optional practice: reproduce the AR(3) worksheet", detail: "Using the ten-observation series, compute the mean, centered values, ACF(1–3), solve the Yule–Walker system, and compare PACF values with a statsmodels implementation. This is optional learner practice, not an instructor-assigned deliverable." }],
    insights: [
      { label: "Numerics", title: "Centering is a correctness condition", body: "A lag product computed from raw levels mixes the mean with dependence. Centering first keeps ACF focused on deviations around the level." },
      { label: "Diagnostics", title: "Order selection is a hypothesis", body: "ACF/PACF patterns suggest AR or MA orders, but out-of-sample chronological validation determines whether the suggested memory generalizes." },
      { label: "Testing", title: "A p-value and a coefficient answer different questions", body: "The model coefficient ρ describes dynamics; an ADF p-value describes evidence against a unit-root null. Confusing them leads to invalid stationarity claims." },
      { label: "Workflow", title: "ARIMA makes transformation explicit", body: "Differencing is not a cosmetic preprocessing step: it is the integrated part of ARIMA and should be the smallest transformation that addresses observed non-stationarity." }
    ],
    keyTerms: [
      { term: "ACF", definition: "Autocorrelation at a lag, measuring dependence between centered observations separated by k periods." },
      { term: "PACF", definition: "Partial autocorrelation that removes shorter-lag contributions before measuring lag k." },
      { term: "Yule–Walker", definition: "A correlation-based linear system used to estimate AR coefficients." },
      { term: "AR(p)", definition: "An autoregressive model using p lagged observations." },
      { term: "MA(q)", definition: "A moving-average model using q lagged error terms." },
      { term: "ARIMA", definition: "An ARMA model with differencing for non-stationary series." },
      { term: "Unit root", definition: "A dynamic condition associated with persistent shocks and non-stationarity." },
      { term: "ADF test", definition: "A unit-root test whose null hypothesis is non-stationarity." }
    ],
    resources: [
      { title: "Forecasting: Principles and Practice (3rd ed.)", url: "https://otexts.com/fpp3/", note: "Free chapters on ACF/PACF, ARIMA, differencing, stationarity, and time-series evaluation." },
      { title: "Statsmodels time-series analysis", url: "https://www.statsmodels.org/stable/tsa.html", note: "Official APIs for ADF, ACF/PACF, AutoReg, ARIMA, and diagnostic plots." },
      { title: "NIST time-series handbook", url: "https://www.itl.nist.gov/div898/handbook/pmc/pmc.htm", note: "Reference material on autocorrelation, stationarity, and model diagnostics." }
    ],
    quiz
  }
};
