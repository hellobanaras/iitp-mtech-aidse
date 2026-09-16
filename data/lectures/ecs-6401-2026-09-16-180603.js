const q = (question, correct, explanation, wrong) => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
  optionNotes: [`Correct: ${explanation}`, ...wrong.map(option => `Incorrect: ${option} does not match the lecture concept.`)]
});

const quiz = [
  q("What problem does the ADF test help investigate?", "Whether a series has evidence consistent with a unit root", "The lecture uses ADF statistics and p-values to discuss stationarity and non-stationarity.", ["Whether a video downloaded successfully", "How many forecast plots exist", "Whether a model has exactly two parameters"]),
  q("What does a p-value above 0.05 suggest in the lecture's ADF example?", "Insufficient evidence to reject the unit-root null", "The example treats the large p-value as evidence that non-stationarity remains plausible.", ["Guaranteed stationarity", "Automatic selection of SARIMA", "A perfect forecast"]),
  q("Why was a log transformation applied in the example?", "To transform the series before further time-series diagnostics", "The transformed series was then examined with ACF and PACF and candidate models.", ["To increase the number of participants", "To replace every missing date with zero", "To compute BIC without a likelihood"]),
  q("What does AIC stand for?", "Akaike Information Criterion", "AIC is a model-selection criterion combining fit and a parameter-complexity penalty.", ["Autoregressive Interval Calculation", "Average Index Correlation", "Adjusted Input Count"]),
  q("What is the AIC formula shown in the lecture?", "AIC = -2 ln(L) + 2k", "The likelihood term rewards fit while 2k penalizes the number of estimated parameters.", ["AIC = L + k", "AIC = 2 ln(L) - k", "AIC = RMSE / k"]),
  q("What does L represent in the AIC expression?", "The model likelihood", "A higher likelihood indicates better fit, although the complete AIC also includes complexity.", ["The seasonal period only", "The last lag value", "The number of test observations"]),
  q("What does k represent in AIC?", "The number of estimated parameters", "Adding parameters increases the complexity penalty through 2k.", ["The number of calendar months", "The number of residual plots", "The ADF critical value"]),
  q("When comparing models fitted to the same data, which AIC is preferred?", "The lower AIC", "The lecture repeatedly uses the minimum AIC as the preferred value among comparable candidates.", ["The higher AIC", "An AIC equal to the accuracy percentage", "The AIC closest to zero only when likelihoods differ"]),
  q("What is the main difference between AIC and BIC discussed?", "BIC applies a stronger complexity penalty", "BIC is described as more conservative about adding parameters than AIC.", ["BIC ignores model fit", "AIC has no complexity term", "BIC is an ADF p-value"]),
  q("What does a lower BIC usually favour?", "A model that balances fit with fewer parameters", "The stronger penalty makes BIC more cautious about unnecessary complexity.", ["The model with the most lags", "The model with the largest file", "The model with the highest p-value"]),
  q("Why should a minimum AIC not be called an accuracy percentage?", "AIC is a relative model-selection score, not a percentile of forecast correctness", "The lecturer explicitly separates information criteria from forecast-error measures.", ["AIC is always measured in percent", "AIC is the same as recall", "AIC is only a plot title"]),
  q("What does RMSE measure in the lecture's comparison?", "Forecast error magnitude based on actual versus predicted values", "The lecture contrasts RMSE with AIC/BIC because it evaluates forecast errors rather than only fit-plus-complexity.", ["Parameter count", "The number of seasonal cycles", "The ADF null hypothesis"]),
  q("What is the role of AICc?", "It adds a finite-sample correction to AIC", "The corrected criterion is mentioned for cases where sample size and parameter count make the correction relevant.", ["It removes all parameters", "It replaces the ADF test", "It measures video duration"]),
  q("What does HQIC provide in the lecture's comparison?", "A compromise between AIC's and BIC's penalty tendencies", "HQIC is presented as a middle option when selecting among criteria.", ["A replacement for residuals", "A seasonal differencing operator", "A measure of audio quality"]),
  q("Why can a highly parameterised AR model overfit?", "It can learn noise in the training series rather than general structure", "The lecture contrasts low training error with the risk of poor unseen-data behaviour.", ["It has no likelihood", "It always has a unit root", "It cannot use lagged values"]),
  q("What is the conventional PACF clue for an AR order?", "A cutoff or prominent spikes in PACF suggest candidate p values", "The lecture associates AR order with PACF and MA order with ACF.", ["The number of residual files", "Only the BIC label", "The video playback rate"]),
  q("What is the conventional ACF clue for an MA order?", "A cutoff or prominent spikes in ACF suggest candidate q values", "ACF is used as a moving-average order hint, while PACF is used for autoregressive order hints.", ["The number of parameters in BIC", "The ADF significance level", "The date index"]),
  q("Why should p and q still be checked with AIC or BIC?", "ACF/PACF patterns may leave several plausible candidate orders", "The lecture recommends comparing candidate models instead of treating a visual cutoff as unique proof.", ["AIC and BIC are image formats", "PACF cannot be plotted", "Forecasts never use p or q"]),
  q("What seasonal order is used in the example for monthly data?", "A seasonal period of 12", "The lecture explains that a 12-month period represents a repeated annual pattern.", ["A seasonal period of 2", "A seasonal period of 4 only", "No seasonal period"]),
  q("What does ARIMA(2,1,1) mean?", "Two AR lags, first differencing, and one MA lag", "The p-d-q notation maps directly to autoregression, differencing, and moving-average order.", ["Two ADF tests, one BIC, and one RMSE", "Two seasonal cycles and one forecast", "One AR lag and two MA lags with no differencing"]),
  q("What does SARIMA add to ARIMA?", "Seasonal AR, differencing, and MA components", "SARIMA lets the model represent a repeated seasonal lag in addition to ordinary dynamics.", ["Only a new accuracy percentage", "A database dimension", "A replacement for residual analysis"]),
  q("What should good residuals resemble?", "White noise with no remaining systematic temporal structure", "The lecture says residuals should contain little predictable structure after the model explains the series.", ["A steadily increasing trend", "A second copy of the original series", "A parameter table only"]),
  q("What does a residual ACF spike outside the confidence band suggest?", "Possible remaining autocorrelation", "A residual correlation outside the band can indicate that the model has not captured all temporal structure.", ["Guaranteed perfect fit", "A larger video duration", "That BIC must be zero"]),
  q("Why does the example generate future month-start dates?", "To align the forecast horizon with the monthly series frequency", "The future-date code starts at the next month and creates the requested number of monthly periods.", ["To change the model to daily data", "To compute the ADF p-value", "To remove the test set"]),
  q("What is the safest final model-selection workflow from this lecture?", "Compare fit, complexity, forecast error, residuals, and the data context", "No single AIC, BIC, or visual cutoff replaces checking how the candidate behaves on unseen data and residual diagnostics.", ["Always choose the model with the most parameters", "Always choose AIC regardless of sample size", "Choose only from the recording filename"])
];

export const ecs6401Lecture20260916180603 = {
  en: {
    title: "AIC, BIC, residual diagnostics, and ARIMA model selection",
    lede: "This lecture compares AIC, BIC, AICc, HQIC, and RMSE as complementary evidence for choosing ARIMA-family models, then connects ADF significance levels, ACF/PACF order hints, residual checks, and monthly SARIMA forecasting.",
    instructionalInterval: "00:05:32–01:20:21 source time (2× visible-tab video+audio capture; participant setup and idle tail excluded)",
    reviewLevel: "View-only recording; seven-point visible Stream sweep, source-time bounded interval, 2× Lecture Atlas Companion capture, timestamped transcript, and slide/whiteboard evidence verified",
    coverage: [
      { title: "ADF and stationarity context", body: "The opening notebook example uses a non-stationary series, ADF evidence, transformation, and ACF/PACF plots before comparing candidate models." },
      { title: "Information criteria", body: "AIC, BIC, AICc, and HQIC balance likelihood fit against parameter complexity, with BIC applying the stronger penalty." },
      { title: "Forecast and residual evidence", body: "RMSE evaluates forecast error, while residual plots and residual ACF/PACF check whether temporal structure remains unexplained." },
      { title: "ARIMA and SARIMA selection", body: "Candidate p, d, q and seasonal orders are compared with AIC/BIC and diagnostics, then used to create a monthly forecast horizon." }
    ],
    takeaway: "Treat model selection as an evidence chain: establish a reasonable stationary representation, compare candidate orders with fit and complexity criteria, test forecast error on held-out data, and inspect residuals for structure the model missed.",
    slideTrail: [
      { time: "00:05:32", title: "ADF test and transformed series", note: "The notebook shows an upward-trending series, ADF output, log transformation, and subsequent ACF/PACF analysis." },
      { time: "00:08:55", title: "Forecast comparison", note: "A forecast chart compares actual test data with AR, MA, ARMA, ARIMA, and SARIMA outputs." },
      { time: "00:22:18", title: "AIC formula and model complexity", note: "The slide writes AIC = -2 ln(L) + 2k and explains likelihood fit versus parameter penalty." },
      { time: "00:43:43", title: "AIC versus BIC", note: "Worked comparisons show why BIC is more conservative about extra parameters and why lower values are preferred for comparable models." },
      { time: "01:05:16", title: "Significance levels and ADF critical values", note: "The lecture distinguishes 1%, 5%, and 10% thresholds and explains how critical values support the test decision." },
      { time: "01:18:11", title: "ACF/PACF identification table", note: "The table maps AR, MA, and ARMA candidates to ACF/PACF behaviour before the ARIMA example and confidence-band discussion." }
    ],
    summary: [
      { title: "1. Start with a defensible series representation", sourceRefs: ["00:05:32–00:08:55", "ADF notebook and Forecast Comparison"], paragraphs: ["The example begins with an upward-trending monthly series. The ADF output has a large p-value, so the lecture treats the unit-root null as plausible rather than declaring the raw series stationary.", "A transformation is then followed by ACF and PACF inspection. These diagnostics are order hints; they are not a substitute for comparing fitted models and checking their forecast behaviour."] },
      { title: "2. AIC turns fit and complexity into one score", sourceRefs: ["00:22:18–00:36:00", "AIC formula"], paragraphs: ["AIC = -2 ln(L) + 2k. The likelihood component rewards a model that explains the observed data, while 2k increases the score when more parameters are estimated. Among models fitted to the same data, a lower AIC is preferred.", "AIC is not an accuracy percentage. A lower score can identify a useful relative candidate, but it does not by itself establish how well the model forecasts unseen observations."] },
      { title: "3. BIC, AICc, and HQIC change the complexity trade-off", sourceRefs: ["00:36:00–00:50:00", "AIC/BIC/HQIC comparison table"], paragraphs: ["BIC penalises additional parameters more strongly than AIC, so it tends to prefer a simpler model unless the fit improvement provides stronger evidence. AICc adds a finite-sample correction, and HQIC sits between AIC and BIC in the lecture's comparison.", "The choice depends on the sample size and goal. The lecture's practical conclusion is to report the criteria together and avoid calling one score a universal answer."] },
      { title: "4. Validate the selected model with forecast and residual evidence", sourceRefs: ["00:08:55–00:22:18", "Forecast Comparison chart", "01:10:00–01:16:00", "Residual ACF/PACF plots"], paragraphs: ["The example compares training and test data and uses RMSE to measure the size of actual-minus-predicted errors. This answers a different question from AIC/BIC: how well does the candidate forecast observations held out from fitting?", "Residuals should resemble white noise. Residual ACF/PACF spikes that remain outside the confidence band suggest that the fitted model has left temporal structure unexplained, so selection should be revisited."] },
      { title: "5. Read ARIMA and SARIMA orders as a modelling plan", sourceRefs: ["01:16:00–01:20:21", "ARIMA example and monthly forecast code"], paragraphs: ["The lecture uses ARIMA(p,d,q) notation to connect AR order, differencing order, and MA order, then discusses a monthly seasonal period of 12 for SARIMA. An example such as ARIMA(2,1,1) means two autoregressive lags, one difference, and one moving-average lag.", "The forecast code builds the next 24 month-start dates, plots historical observations, and overlays the predicted horizon. The order and horizon remain modelling decisions that must be supported by the earlier criteria and diagnostics."] }
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [
        { time: "00:39:00", question: "How is the likelihood value obtained when software reports AIC and BIC?", response: "The instructor explains that the likelihood is computed from the fitted model and data, while the class should focus on comparing the resulting criteria alongside forecast diagnostics." },
        { time: "00:46:20", question: "Why is BIC sometimes described with an N in its notation?", response: "The instructor clarifies that the label refers to the criterion's naming and is not an application of Bayes' theorem in the way the student suggested." },
        { time: "01:18:45", question: "Should ACF/PACF alone determine p and q?", response: "The lecture recommends using those plots as hints and comparing candidate ARIMA models with AIC/BIC and forecast or residual evidence." }
      ],
      announcements: []
    },
    suggestedPractice: [{ title: "Optional practice: make a model-selection evidence table", detail: "Fit three candidate ARIMA/SARIMA orders to a chronological training split, record AIC, BIC, AICc, RMSE, and residual-ACF observations, then write a short justification that separates fit, complexity, forecast error, and remaining structure. This is optional learner practice, not an instructor-assigned deliverable." }],
    insights: [
      { label: "Selection", title: "A score is evidence, not a verdict", body: "AIC and BIC rank comparable candidates, but RMSE and residual diagnostics test different failure modes; a robust choice records all of them." },
      { label: "Complexity", title: "BIC makes the cost of extra parameters visible", body: "When two models fit similarly, BIC's stronger penalty makes the simpler explanation easier to defend." },
      { label: "Diagnostics", title: "Residual structure is a model critique", body: "A residual ACF spike is not merely a plot detail: it is evidence that the model left a temporal pattern unexplained." },
      { label: "Forecasting", title: "Chronology matters", body: "A future forecast should be evaluated on observations withheld in time order, not on a randomly shuffled split that leaks future information." }
    ],
    keyTerms: [
      { term: "AIC", definition: "A likelihood-plus-complexity model-selection criterion, AIC = -2 ln(L) + 2k in the lecture." },
      { term: "BIC", definition: "A model-selection criterion with a stronger penalty for additional parameters than AIC." },
      { term: "AICc", definition: "A finite-sample-corrected form of AIC." },
      { term: "HQIC", definition: "An information criterion presented as a compromise between AIC and BIC." },
      { term: "RMSE", definition: "Root mean square error comparing actual and predicted values." },
      { term: "Residual", definition: "The portion of an observation not explained by the fitted model." },
      { term: "SARIMA", definition: "An ARIMA-family model with seasonal autoregressive, differencing, and moving-average components." }
    ],
    resources: [
      { title: "Forecasting: Principles and Practice — ARIMA estimation and order selection", url: "https://otexts.com/fpp3/arima-estimation.html", note: "Primary open textbook reference for likelihood, AIC/AICc/BIC, and ARIMA order selection." },
      { title: "Forecasting: Principles and Practice — ARIMA models", url: "https://otexts.com/fpp3/arima.html", note: "Primary reference for ARIMA structure, differencing, seasonality, and forecast diagnostics." },
      { title: "Statsmodels ARIMA tutorial", url: "https://www.statsmodels.org/stable/examples/notebooks/generated/autoregressive_integrated_moving_average.html", note: "Official implementation walkthrough connecting ADF, ACF/PACF, training/test splits, and information criteria." },
      { title: "Statsmodels time-series API", url: "https://www.statsmodels.org/stable/api.html", note: "Official API index for ACF, PACF, ARIMA, SARIMAX, and related diagnostics." }
    ],
    quiz
  }
};
