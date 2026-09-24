const q = (question, correct, explanation, wrong) => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
  optionNotes: [`Correct: ${explanation}`, ...wrong.map(option => `Incorrect: ${option} does not match the lecture concept.`)]
});

const quiz = [
  q("What does x Granger-causes y mean in the lecture?", "Past x adds useful information for predicting y after past y is included", "The claim is incremental predictive usefulness, not proof of physical causation.", ["x always changes y immediately", "x and y have identical distributions", "y has no lagged values"]),
  q("What is the null hypothesis for the x-to-y Granger test?", "All lagged-x coefficients are zero", "If the gamma coefficients are jointly zero, x adds no predictive information in that model.", ["All lagged-y coefficients are one", "The residuals must be zero", "The two series must be independent"]),
  q("What does the unrestricted model add to the restricted model?", "Lagged values of x", "The restricted model uses y's own lags; the unrestricted model adds x lags.", ["Future values of y", "A seasonal dummy only", "A second error term with no variables"]),
  q("What does a p-value below 0.05 imply in the illustrative test?", "Reject the null at the five-percent level", "The lecture uses the p-value as a decision shortcut for the joint restriction.", ["Prove structural causation", "Guarantee stationarity", "Choose the largest possible lag"]),
  q("What does RSSR represent?", "Residual sum of squares for the restricted model", "The restricted residual error is compared with the unrestricted residual error in the F statistic.", ["The number of observations", "The seasonal residual mean", "The source recording size"]),
  q("Why is lag selection important?", "Lag order changes information captured and the model's degrees of freedom", "Too few lags can omit useful information and too many consume parameters.", ["It removes the need for aligned dates", "It makes every coefficient zero", "It changes the dependent variable's name"]),
  q("What is VAR described as?", "A multivariate extension of an autoregressive model", "Each variable is modelled using its own past and the past of other variables.", ["A univariate model with no lags", "A moving-average model only", "A model that forbids cross-variable effects"]),
  q("In a two-variable VAR, what does the variable vector contain?", "The current values of both time-series variables", "For example, yₜ and xₜ are stacked into one vector.", ["Only the error terms", "Only the intercepts", "Future observations only"]),
  q("What does a coefficient matrix in VAR represent?", "The cross-effects of lagged variables on the current vector", "Each matrix maps one lagged variable vector to the current variables.", ["A single scalar p-value", "The video frame rate", "Only the intercept"]),
  q("What is the role of the constant vector c?", "It collects the intercept or mean terms for the equations", "The lecture expands c into one constant for each variable equation.", ["It stores the lag order", "It is the residual vector", "It is the eigenvalue matrix"]),
  q("What does VAR(p) mean?", "The model includes p lagged variable vectors", "The p lag determines how many coefficient matrices and lagged vectors are included.", ["There are p observations total", "There are p dependent variables only", "The model has p error terms and no variables"]),
  q("What happens to the VAR parameter count as variables or lags increase?", "The matrix structure and number of coefficients increase", "More variables and more lags create more coefficient entries to estimate.", ["The model becomes univariate", "The intercept disappears", "Stationarity becomes automatic"]),
  q("How is VAR stationarity checked in the lecture's matrix discussion?", "By checking that the relevant eigenvalues lie within the unit circle", "The eigenvalue condition is the multivariate analogue of a stable AR coefficient.", ["By checking that every p-value equals 0.05", "By checking that all observations are identical", "By checking only the video duration"]),
  q("What equation is used to obtain eigenvalues from a coefficient matrix?", "The determinant of the matrix minus lambda times the identity is set to zero", "Solving the characteristic equation gives the eigenvalues used for the stability check.", ["RSSR minus RSSU equals one", "X plus Y equals zero", "The p-value is divided by the lag order"]),
  q("Why does the lecture say a VAR has no simple dependent/independent split?", "Each equation can use the lagged values of all variables", "The system models simultaneous interdependence through lagged vectors.", ["There are no equations", "The model uses only contemporaneous values", "Every variable is removed from the system"]),
  q("What does VAR(1) include for a two-variable system?", "One lagged vector containing both variables", "The lag-one vector contains yₜ₋₁ and xₜ₋₁.", ["Two future vectors", "One scalar with no lags", "Only xₜ₋₁ and never yₜ₋₁"]),
  q("What additional term does VAR(2) add to VAR(1)?", "A second lagged variable vector and its coefficient matrix", "The second matrix multiplies yₜ₋₂ and xₜ₋₂ in the two-variable example.", ["A second dependent variable with no history", "A new course code", "A deterministic zero residual"]),
  q("What is the ordinary least-squares expression used in the matrix example?", "(XᵀX)⁻¹XᵀY", "The lecture explains the dimensions of XᵀX, XᵀY, and the resulting coefficient matrix.", ["X + Y", "RSSR/RSSU", "AIC minus BIC"]),
  q("Why are lagged rows omitted at the beginning of the design matrix?", "The first observations do not yet have all required lag values", "A VAR(2) example starts after enough observations exist to form two lags.", ["The first rows are always errors", "The dependent variable is removed", "The matrix must have no columns"]),
  q("What does the coefficient matrix dimension depend on?", "The number of variables and the number of lagged equations represented", "For two variables, each lag matrix is two by two; more variables enlarge it.", ["Only the recording duration", "Only the p-value", "Only the number of quiz questions"]),
  q("What did the instructor use to illustrate a VAR calculation?", "A small two-variable time-series table and matrix multiplication", "The worked example constructs current, lagged, X, and Y matrices before applying OLS.", ["A neural-network training run", "A blockchain transaction", "A seasonal decomposition only"]),
  q("What does a non-zero cross-variable coefficient indicate within a VAR equation?", "A lagged value of one variable contributes to the other equation under the model", "The coefficient expresses a modelled lagged cross-effect; it is not by itself structural causation.", ["The variables are identical", "The series is necessarily non-stationary", "The coefficient is a p-value"]),
  q("What material did the instructor say would be uploaded?", "The lecture slides or PDF", "The closing announcement says the PDF would be uploaded that day.", ["A private password list", "A graded answer key", "A hidden media manifest"]),
  q("What is the safest interpretation of a stationary VAR condition?", "The system's lag dynamics remain stable under the model's eigenvalue condition", "Stability supports modelling and forecasting but does not guarantee a good forecast by itself.", ["Every forecast is correct", "The variables are independent", "The data need no diagnostics"]),
  q("Why should matrix dimensions be checked before multiplying?", "Compatible dimensions are required for the OLS products to be defined", "The lecture explicitly traces shapes such as 4×6, 6×4, and 4×2.", ["Dimensions affect only the title", "Matrix products ignore shape", "It removes the need for observations"])
];

export const ecs6401Lecture20260923180413 = {
  en: {
    title: "Vector autoregression: matrices, stationarity, and OLS",
    lede: "This lecture closes the Granger-causality transition by developing vector autoregressive models for multiple time series. It builds VAR(1) and VAR(2) vectors and coefficient matrices, explains the eigenvalue stability condition, and works through a two-variable ordinary-least-squares calculation.",
    instructionalInterval: "00:03:04–01:09:27 source time (2× visible-tab video+audio capture; lead-in and participant/chat idle tail excluded)",
    reviewLevel: "View-only recording; direct download checked first, seven-point visible Stream sweep, bounded interval, 2× Lecture Atlas Companion capture, timestamped transcript, and slide/whiteboard evidence verified",
    coverage: [
      { title: "Granger-causality bridge", body: "The restricted and unrestricted equations are revisited, including lagged-x hypotheses, RSS/F decisions, p-values, and the warning that predictive causality is not structural causation." },
      { title: "VAR vectors and matrices", body: "A multivariate AR model stacks current variables, intercepts, lagged vectors, coefficient matrices, and errors into one system." },
      { title: "VAR(1), VAR(2), and VAR(p)", body: "The first and second lag matrices are expanded for two variables and generalised to k variables and p lags." },
      { title: "Stationarity through eigenvalues", body: "The coefficient-matrix characteristic equation is used to obtain eigenvalues; stability requires the relevant values to remain inside the unit circle." },
      { title: "OLS matrix construction", body: "A small two-variable VAR(2) example forms current and lagged matrices and applies (XᵀX)⁻¹XᵀY while checking matrix dimensions." }
    ],
    takeaway: "A VAR turns several interdependent time series into one lagged vector system: define the matrices clearly, verify dimensions, check eigenvalue stability, and interpret cross-variable coefficients as model-based predictive effects rather than automatic structural causation.",
    slideTrail: [
      { time: "00:06:55", title: "Granger restricted and unrestricted models", note: "The opening review writes y-only and y-plus-x-lag equations, null/alternative hypotheses, and the F/p-value decision logic." },
      { time: "00:18:05", title: "VAR(1) vector form", note: "The shared material stacks yₜ and xₜ, the constant vector, a 2×2 coefficient matrix, lag-one variables, and the error vector." },
      { time: "00:36:36", title: "VAR stationarity and eigenvalues", note: "The lecture relates coefficient matrices, the characteristic equation, and eigenvalues inside the unit circle to stable dynamics." },
      { time: "00:54:46", title: "VAR(2) lag matrices", note: "The second lag matrix is introduced and the two-variable equations are expanded into coefficient entries." },
      { time: "01:06:18", title: "OLS dimensions and products", note: "The worked example traces XᵀX, XᵀY, matrix dimensions, and the resulting 4×2 coefficient matrix." }
    ],
    summary: [
      { title: "1. Carry the Granger logic into a system", sourceRefs: ["00:03:04–00:15:00", "Granger restricted/unrestricted equations"], paragraphs: ["The lecture begins by recalling that x Granger-causes y when lagged x improves y's prediction beyond lagged y. The restricted model contains y's own lags; the unrestricted model adds x's lags, and a joint test asks whether those added coefficients matter.", "The F statistic compares restricted and unrestricted residual sums of squares, while the p-value supplies a decision rule. The direction must be tested separately in the reverse direction, and the claim remains predictive rather than a proof of physical intervention."] },
      { title: "2. Define VAR as a vector extension of AR", sourceRefs: ["00:15:00–00:31:00", "VAR(1) vector representation"], paragraphs: ["A vector autoregressive model moves from one series to multiple series that influence one another through their own and one another's past values. For two series, the current vector contains yₜ and xₜ; the constant vector contains the intercepts; and the error vector contains one disturbance for each equation.", "In VAR(1), a coefficient matrix maps the lag-one vector [yₜ₋₁, xₜ₋₁]ᵀ to the current vector. The matrix entries make cross-variable effects visible instead of hiding them inside separate scalar equations."] },
      { title: "3. Generalise the lag structure", sourceRefs: ["00:31:00–00:49:00", "VAR(p), coefficient matrices, and eigenvalue condition"], paragraphs: ["VAR(p) adds one coefficient matrix for each lagged vector. VAR(2) therefore has A₁ applied to the first lag and A₂ applied to the second lag; with k variables, each matrix expands to k×k and the parameter count grows quickly.", "The stationarity discussion uses the characteristic equation det(A − λI) = 0. The resulting eigenvalues must satisfy the unit-circle stability condition used for the VAR coefficient dynamics; otherwise forecasts can be dominated by unstable persistence."] },
      { title: "4. Build a VAR(2) design matrix", sourceRefs: ["00:49:00–01:02:00", "Two-variable VAR(2) example"], paragraphs: ["The worked table uses two chronological series and starts only after enough observations exist to form two lags. The current y/x values form the response matrix, while yₜ₋₁, xₜ₋₁, yₜ₋₂, and xₜ₋₂ form the predictor columns.", "Each row is one aligned time point. The resulting coefficient matrix has rows for the lagged predictors and columns for the two equations, making it possible to read both within-series and cross-series lag effects."] },
      { title: "5. Solve and check the OLS system", sourceRefs: ["01:02:00–01:09:27", "OLS matrix multiplication and closing announcement"], paragraphs: ["The lecturer applies the ordinary-least-squares expression (XᵀX)⁻¹XᵀY and checks dimensions step by step: a 4×6 design transpose multiplies a 6×4 design matrix, then the 4×6 product multiplies the 6×2 response matrix to produce a 4×2 result.", "The class closes with an announced short break and a statement that the PDF/slides will be uploaded. No graded assignment, homework, lab, or project is assigned in this recording."] }
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [{ time: "01:08:50", title: "Lecture PDF/slides announcement", detail: "The instructor said the lecture PDF/slides would be uploaded; no external reference was assigned." }],
      studentQuestions: [
        { time: "00:29:00", question: "Can the vector and matrix representation be understood for more variables and lags?", response: "The lecturer generalises the two-variable VAR(1) into k variables and p lagged coefficient matrices, then expands VAR(2) explicitly." },
        { time: "00:39:00", question: "How do we know whether the VAR process is stationary?", response: "The lecturer uses the coefficient-matrix characteristic equation and checks the resulting eigenvalues against the unit-circle condition." },
        { time: "01:00:00", question: "How do the matrix dimensions work in the OLS calculation?", response: "The lecturer traces compatible shapes for XᵀX and XᵀY and shows why the coefficient result is a 4×2 matrix for the two-variable VAR(2) example." }
      ],
      announcements: ["A short break was announced near the end; the lecture PDF/slides were said to be uploaded."]
    },
    suggestedPractice: [{ title: "Optional practice: build a transparent VAR(2) audit", detail: "Use two public or synthetic aligned series, construct the lag-one and lag-two design matrix, solve the OLS coefficient matrix, compute eigenvalues for a stability check, and explain one cross-variable coefficient with source timecodes. This is optional learner practice, not an instructor-assigned deliverable." }],
    insights: [
      { label: "Representation", title: "A matrix is a compact set of equations", body: "The VAR coefficient matrix is not an abstract decoration: each cell maps one lagged variable to one current equation." },
      { label: "Stability", title: "Eigenvalues are a model diagnostic", body: "A fitted coefficient matrix should be checked for stable lag dynamics before its forecasts are trusted." },
      { label: "Dimensions", title: "Shape checks prevent silent algebra errors", body: "Writing the dimensions of X, Xᵀ, Y, and the result makes the OLS construction auditable." },
      { label: "Interpretation", title: "Cross-effects are predictive within the model", body: "A non-zero lagged cross-variable coefficient is evidence of a modelled predictive relationship, not automatic proof of structural causation." }
    ],
    keyTerms: [
      { term: "VAR", definition: "A vector autoregressive system that models several time series using their own and one another's lagged values." },
      { term: "Coefficient matrix", definition: "The matrix that maps one lagged variable vector to the current variable vector." },
      { term: "VAR(p)", definition: "A VAR with p lagged variable vectors and p corresponding coefficient matrices." },
      { term: "Eigenvalue", definition: "A value obtained from a matrix characteristic equation and used here to assess lag-dynamic stability." },
      { term: "Unit circle", definition: "The stability boundary used for the relevant VAR eigenvalues; values within it support stationary dynamics." },
      { term: "OLS", definition: "Ordinary least squares, used in the lecture to estimate the coefficient matrix from aligned lagged observations." }
    ],
    resources: [
      { title: "Statsmodels VAR documentation", url: "https://www.statsmodels.org/stable/vector_ar.html", note: "Official Python documentation for fitting and diagnosing vector autoregressive models." },
      { title: "Forecasting: Principles and Practice — VAR models", url: "https://otexts.com/fpp3/VAR.html", note: "Open textbook treatment of multivariate time-series forecasting and VAR interpretation." },
      { title: "Forecasting: Principles and Practice — stationarity", url: "https://otexts.com/fpp3/stationarity.html", note: "Open explanation of stationarity and why transformations and diagnostics matter before modelling." }
    ],
    quiz
  }
};
