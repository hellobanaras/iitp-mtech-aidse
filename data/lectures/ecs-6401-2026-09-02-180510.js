// English-only publication unit.
const q = (question, options, answer, explanation) => ({
  question,
  options,
  answer,
  explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `Correct: ${option} — ${explanation}`
    : `Incorrect: ${option} — it does not satisfy the time-series definition or calculation tested here.`)
});

const quiz = [
  q("What does stationarity require in the practical definition used in this lecture?", ["Relevant statistical behaviour stays stable over time", "Values must increase every period", "The series must have no time index", "Every observation must be identical"], 0, "A stationary series has stable mean/variance and dependence patterns rather than changing trend or seasonality."),
  q("Which pattern is a typical sign of non-stationarity?", ["A changing mean, variance, trend, or seasonal behaviour", "A fixed sampling frequency", "A labelled x-axis", "A seeded random generator"], 0, "Non-stationarity means the statistical properties change over time."),
  q("What does a stationary plot generally fluctuate around?", ["A stable level with approximately constant variability", "An ever-increasing slope", "A missing-value marker", "A database schema"], 0, "The lecture's example oscillates around a stable level without a persistent trend."),
  q("What is the null hypothesis of the augmented Dickey–Fuller test as presented?", ["The series has a unit root and is non-stationary", "The series is definitely seasonal", "The series has zero observations", "The series is already forecast-perfect"], 0, "ADF tests the unit-root null; rejecting it with a sufficiently small p-value supports stationarity."),
  q("Using the lecture's rule of thumb, what does p < 0.05 imply for ADF?", ["Reject the non-stationary null and treat the series as stationary evidence", "Accept the non-stationary null with certainty", "Delete the time index", "Choose AR order without diagnostics"], 0, "A small p-value rejects the unit-root null, while plots and domain context should still be checked."),
  q("What is first-order differencing?", ["Δyₜ = yₜ − yₜ₋₁", "yₜ + yₜ₋₁", "yₜ / yₜ₋₁", "yₜ − yₜ₋₂ only"], 0, "The current value minus its immediately previous lag removes a level or trend component."),
  q("For values 100, 108, 105, what is the first difference at the second observation?", ["8", "−8", "105", "208"], 0, "The calculation is 108 − 100 = 8."),
  q("What does second-order differencing apply?", ["A difference to the first-differenced series", "A second seasonal period only", "A second random seed", "A second y-axis"], 0, "Second differences are Δ²yₜ = Δyₜ − Δyₜ₋₁."),
  q("Why should differencing order remain as small as necessary?", ["Higher orders can amplify noise and discard useful level information", "Higher orders always improve forecasts", "It removes the need for validation", "It changes a univariate series to multivariate"], 0, "The lecture cautions that unnecessary differencing can amplify noise."),
  q("What is a seasonal difference intended to remove?", ["A repeated pattern at a known seasonal lag", "All random noise", "The target variable", "The time stamps"], 0, "Seasonal differencing compares observations separated by a seasonal period."),
  q("When is additive decomposition appropriate?", ["Seasonal fluctuations have roughly constant absolute magnitude", "Seasonal amplitude grows in proportion to the level", "There is no seasonal component", "The series contains only text"], 0, "Additive form is Yₜ = Tₜ + Sₜ + Eₜ with a roughly constant seasonal effect."),
  q("When is multiplicative decomposition a better description?", ["Seasonal fluctuations are proportional to the series level", "The seasonal effect is exactly zero", "The values are all negative", "There is no trend"], 0, "Multiplicative structure models relative rather than constant seasonal amplitude."),
  q("What is the purpose of seasonal adjustment?", ["Remove or smooth repeated seasonal effects for clearer comparisons", "Guarantee a correct AR order", "Create a password", "Replace every outlier with zero"], 0, "Seasonal adjustment supports comparison, trend inspection, and forecasting."),
  q("What does a three-period moving average contain in the lecture's formula?", ["The current value and the previous two values divided by three", "Three future values divided by two", "Only the maximum value", "A seasonal difference"], 0, "A three-period window averages yₜ, yₜ₋₁, and yₜ₋₂."),
  q("What is the main trade-off of a larger smoothing window?", ["More noise reduction but more lag and less visibility of short changes", "No change to the data", "Automatic stationarity", "More random variation"], 0, "Smoothing suppresses short fluctuations but can hide turning points."),
  q("In an AR(p) model, what does p denote?", ["The number of lagged observations used", "The p-value of ADF", "The number of seasons", "The number of plots"], 0, "AR(p) uses p previous values as predictors of the current value."),
  q("Which equation matches an AR(2) model?", ["xₜ = c + φ₁xₜ₋₁ + φ₂xₜ₋₂ + εₜ", "xₜ = xₜ₊₁ + εₜ", "xₜ = φ₁ + φ₂ only", "xₜ = εₜ / xₜ₋₁"], 0, "An AR(2) is a constant plus two lag terms and an error term."),
  q("What does the random error εₜ represent in the AR equation?", ["Unforeseen variation not explained by the included lags", "The seasonal period", "The exact future value", "A lag index"], 0, "The error captures residual or unexpected movement at time t."),
  q("What does lag 1 compare?", ["The current observation with the immediately preceding observation", "The current observation with a future observation", "Two unrelated series", "Only the first and last rows"], 0, "Lag 1 is one time step back."),
  q("What does autocorrelation at lag k measure?", ["Dependence between xₜ and xₜ₋ₖ", "The mean of all values", "The number of seasons", "The width of a plot"], 0, "ACF measures correlation between a series and its k-step lag."),
  q("How does PACF differ from ACF?", ["PACF isolates the additional lag-k relationship after shorter lags are accounted for", "PACF ignores all lags", "PACF is only a histogram", "PACF is the same as a random seed"], 0, "Partial autocorrelation controls for intervening lags."),
  q("What is the purpose of the Yule–Walker equations?", ["Estimate AR coefficients from autocorrelations", "Remove all seasonality without data", "Generate dates", "Encode a video"], 0, "The lecture uses Rφ = r to solve for AR parameters."),
  q("In the Yule–Walker matrix, what is ρ₀?", ["1, because a variable is perfectly correlated with itself", "Always 0", "The p-value", "The seasonal period"], 0, "Autocorrelation at lag zero is one by definition."),
  q("For an AR(2), what does the second solved AR coefficient correspond to?", ["The PACF at lag 2", "The ADF p-value", "The moving-average window", "The residual mean only"], 0, "The last AR coefficient from an AR(k) Yule–Walker solve equals PACF at lag k."),
  q("What is a safe modelling sequence for this lecture's workflow?", ["Diagnose and transform, fit a time-aware model, then evaluate chronologically", "Shuffle all observations before every split", "Fit ARIMA before plotting", "Discard the raw series after smoothing"], 0, "Preserve time order and use diagnostics before selecting and evaluating a forecasting model.")
];

export const ecs6401Lecture20260902 = {
  en: {
    title: "Stationarity, differencing, seasonal adjustment, and autoregressive models",
    lede: "This lecture turns time-series intuition into practical diagnostics: recognize stationary behaviour, test it with ADF, remove trend or seasonality with differencing, choose additive or multiplicative decomposition, smooth with moving averages, and estimate AR coefficients with autocorrelation and Yule–Walker equations.",
    instructionalInterval: "00:04:50–01:21:14 source time (participant setup, an internal participant/chat interruption, and the idle tail excluded)",
    reviewLevel: "View-only recording, 2× visible-tab video+audio capture, source-time transcript, seven-point sweep, and slide/whiteboard evidence verified",
    coverage: [
      {title: "Stationarity as stable statistical behaviour", body: "A stationary series keeps relevant mean, variance, and dependence behaviour approximately stable; a non-stationary series changes level, trend, variance, or seasonality."},
      {title: "ADF and hypothesis testing", body: "The augmented Dickey–Fuller test checks the unit-root null. A small p-value is evidence against non-stationarity, interpreted alongside plots and domain knowledge."},
      {title: "Differencing and seasonal adjustment", body: "First and second differences remove changing levels or trends; seasonal differences target repeated lags. Avoid unnecessary differencing because it can amplify noise."},
      {title: "Additive versus multiplicative decomposition", body: "Use additive Yₜ = Tₜ + Sₜ + Eₜ when seasonal magnitude is roughly constant; use multiplicative form when amplitude scales with the level."},
      {title: "Moving averages", body: "Rolling windows smooth short-term variation. A k-period average combines the current value and k−1 previous values, trading noise reduction for lag."},
      {title: "AR, ACF, PACF, and Yule–Walker", body: "AR(p) predicts the current value from p lags plus error. ACF/PACF expose lag structure, and Yule–Walker equations estimate AR coefficients."}
    ],
    takeaway: "Make stationarity a tested modelling assumption: visualize first, use ADF and context, apply the smallest useful difference or seasonal adjustment, then use ACF/PACF and Yule–Walker to justify AR structure.",
    slideTrail: [
      {time:"00:04:50", title:"Stationary and non-stationary series", note:"The stationary section defines stable mean/variance and contrasts it with changing trend or variability."},
      {time:"00:08:24", title:"Descriptive statistics and ADF setup", note:"The slide outlines grouping, mean, variance, and an augmented Dickey–Fuller test workflow."},
      {time:"00:21:03", title:"ADF hypotheses and p-value", note:"H₀ is non-stationary/unit root; H₁ is stationary. The 0.05 threshold is explained as a decision aid."},
      {time:"00:29:04", title:"First and second differencing", note:"The lecture defines Δyₜ = yₜ − yₜ₋₁ and Δ²yₜ = Δyₜ − Δyₜ₋₁, with a numeric example."},
      {time:"00:37:00", title:"Seasonal adjustment", note:"Repeated calendar effects are identified and removed or smoothed before comparison and forecasting."},
      {time:"00:48:00", title:"Additive and multiplicative decomposition", note:"Constant seasonal amplitude motivates additive form; level-proportional amplitude motivates multiplicative form."},
      {time:"01:02:00", title:"Autoregressive model intuition", note:"The current observation is expressed as a constant plus weighted lagged observations and random error."},
      {time:"01:10:00", title:"ACF, PACF, and lag dependence", note:"Lag-k correlation and partial correlation are connected to choosing AR order."},
      {time:"01:17:28", title:"Yule–Walker whiteboard derivation", note:"Handwritten equations solve AR coefficients from autocorrelation values, with ρ₀ = 1 and PACF links."},
      {time:"01:21:14", title:"Closing matrix practice", note:"The instructor requests matrix inverse, eigenvalue, eigenvector, and multiplication practice for the next lecture."}
    ],
    summary: [
      {title:"1. Stationarity is about distributional behaviour, not a flat line", sourceRefs:["00:04:50–00:21:03", "Stationary/non-stationary slides"], paragraphs:["A stationary time series can fluctuate; the key is that its relevant statistical behaviour remains approximately stable. The lecture contrasts a series oscillating around a stable level with one whose mean, variance, trend, or seasonal pattern changes over time.", "Strict stationarity is introduced as stability of joint behaviour under time shifts. In applied work, the practical checks—plots, rolling mean/variance, and tests—are more useful than expecting every point to look identical."]},
      {title:"2. ADF is evidence, not a magic button", sourceRefs:["00:08:24–00:25:00", "ADF hypothesis slide"], paragraphs:["The augmented Dickey–Fuller test is framed around a unit-root null hypothesis of non-stationarity and an alternative of stationarity. A p-value below a chosen threshold such as 0.05 supports rejecting the null.", "The decision should be cross-checked with visual diagnostics and domain context. Structural breaks, short samples, changing variance, and seasonal effects can make a single test misleading."]},
      {title:"3. Differencing removes change at a chosen scale", sourceRefs:["00:29:04–00:37:00", "Differencing whiteboard"], paragraphs:["First differencing computes Δyₜ = yₜ − yₜ₋₁, turning a level into a change between consecutive observations. Second differencing applies the same operation again. Seasonal differencing compares observations one seasonal period apart.", "The goal is a stationary series suitable for models such as ARIMA. Use the lowest order that removes the observed non-stationarity: excessive differencing can amplify noise and erase interpretable long-run information."]},
      {title:"4. Seasonal adjustment clarifies comparisons", sourceRefs:["00:37:00–00:50:00", "Seasonal-adjustment and decomposition slides"], paragraphs:["Seasonal adjustment identifies repeated calendar effects, decomposes the series, and removes or smooths the seasonal component. This supports fair comparisons across months or years and can improve forecasting inputs.", "Additive decomposition models Yₜ = Tₜ + Sₜ + Eₜ when the seasonal effect is roughly constant in absolute size. Multiplicative decomposition is preferable when seasonal amplitude grows with the level of the series."]},
      {title:"5. Moving averages are transparent smoothing baselines", sourceRefs:["00:50:00–01:00:00", "Moving-average explanation"], paragraphs:["A k-period moving average averages the current and previous k−1 observations. It is easy to explain and useful for exposing broad movement beneath short-term fluctuation.", "The window is a modelling choice: larger windows smooth more but respond later. Keep raw values, choose the window based on sampling frequency and decision horizon, and evaluate on future periods rather than shuffled rows."]},
      {title:"6. AR models use lagged memory", sourceRefs:["01:02:00–01:12:00", "AR model slide"], paragraphs:["An AR(p) model writes xₜ = c + φ₁xₜ₋₁ + … + φₚxₜ₋ₚ + εₜ. The coefficients encode how much each lag contributes, while εₜ represents unexplained variation.", "ACF measures correlation with lagged observations; PACF measures the additional contribution of a lag after shorter lags are controlled. These plots suggest candidate p values but do not replace out-of-sample validation."]},
      {title:"7. Yule–Walker turns correlation into coefficients", sourceRefs:["01:12:00–01:21:14", "Yule–Walker whiteboard"], paragraphs:["The Yule–Walker system Rφ = r uses a Toeplitz autocorrelation matrix R, AR coefficient vector φ, and lag-correlation vector r. The diagonal ρ₀ equals one because each value is perfectly correlated with itself.", "For an AR(2), the solved coefficients can be obtained by substitution or matrix inversion. The final coefficient from an AR(k) solve corresponds to PACF at lag k, which links the algebra to the diagnostic plot."]}
    ],
    courseSignals: {assignments:[], homework:[], labs:[], projects:[], references:[{time:"01:21:14", title:"Matrix and eigenvalue practice", detail:"The instructor asked learners to practise matrix inverse, eigenvalue, eigenvector, and multiplication operations for the next lecture."}], studentQuestions:[]},
    suggestedPractice: [
      {title:"Optional notebook: stationarity lab", detail:"Generate a trend-plus-seasonality series, plot rolling mean/variance, run an ADF test, and record what changes after first differencing."},
      {title:"Optional AR(2) exercise", detail:"Use ρ₁ = 0.6 and ρ₂ = 0.3 to solve the two Yule–Walker equations, then compare the coefficients with a statsmodels AutoReg fit."}
    ],
    insights: [
      {label:"Diagnostics", title:"One p-value cannot see every failure mode", body:"Pair ADF with plots, rolling statistics, seasonality checks, and domain knowledge so structural breaks or changing variance are not mistaken for a clean stationary process."},
      {label:"Transformation", title:"Differencing chooses the scale of change", body:"First differencing asks how much the series moved between adjacent observations; seasonal differencing asks how it changed across a repeated cycle. The scale should match the question."},
      {label:"Decomposition", title:"Additive versus multiplicative is a variance question", body:"If seasonal distance stays near a fixed number use additive intuition; if it expands with the level, multiplicative structure better preserves relative variation."},
      {label:"Modelling", title:"ACF/PACF are hypotheses about memory", body:"Lag diagnostics suggest candidate AR orders, but chronological validation decides whether that memory generalizes beyond the observed sample."}
    ],
    keyTerms:[
      {term:"Stationarity", definition:"Stability of relevant statistical properties under time shifts."},
      {term:"Unit root", definition:"A root associated with non-stationary behaviour in the tested process."},
      {term:"ADF test", definition:"A unit-root test whose null is non-stationarity."},
      {term:"Differencing", definition:"Subtracting a lagged value to remove level, trend, or seasonal change."},
      {term:"Seasonal adjustment", definition:"Removing repeated seasonal effects to improve comparison and analysis."},
      {term:"AR(p)", definition:"An autoregressive model using p lagged observations plus error."},
      {term:"ACF/PACF", definition:"Correlation and partial-correlation diagnostics at lag values."},
      {term:"Yule–Walker", definition:"Linear equations that estimate AR coefficients from autocorrelations."}
    ],
    resources:[
      {title:"Forecasting: Principles and Practice (3rd ed.)", url:"https://otexts.com/fpp3/", note:"Free chapters on stationarity, transformations, decomposition, smoothing, ARIMA, and evaluation."},
      {title:"Statsmodels time-series analysis", url:"https://www.statsmodels.org/stable/tsa.html", note:"Python APIs for ADF, ACF/PACF, decomposition, AutoReg, and forecasting."},
      {title:"NIST time-series handbook", url:"https://www.itl.nist.gov/div898/handbook/pmc/pmc.htm", note:"Authoritative background on autocorrelation, stationarity, and model diagnostics."},
      {title:"Pandas time-series guide", url:"https://pandas.pydata.org/docs/user_guide/timeseries.html", note:"Date indexes, rolling windows, resampling, and differencing utilities."}
    ],
    quiz
  }
};
