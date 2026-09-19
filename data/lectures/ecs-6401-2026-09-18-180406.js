const q = (question, correct, explanation, wrong) => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
  optionNotes: [`Correct: ${explanation}`, ...wrong.map(option => `Incorrect: ${option} does not match the lecture concept.`)]
});

const quiz = [
  q("What does univariate mean in this lecture?", "One variable observed over chronological time", "Examples include daily temperature, monthly sales, and one company's stock price.", ["Two variables observed at one instant", "A series with no time index", "A model with no lag terms"]),
  q("What is strong stationarity also called?", "Strict stationarity", "The lecture uses strong and strict stationarity as equivalent terminology.", ["Forecast stationarity", "Seasonal differencing", "Granger stationarity"]),
  q("What remains unchanged under strict stationarity?", "The entire joint probability distribution under a time shift", "A shifted vector of observations has the same joint distribution.", ["Only the sample size", "Only the latest value", "Only the forecast horizon"]),
  q("What three conditions define weak stationarity in the lecture?", "Constant mean, constant variance, and covariance depending on lag", "Weak or covariance stationarity focuses on second-order properties.", ["Constant p-value, AIC, and BIC", "Zero mean, zero variance, and zero covariance", "A seasonal period, trend, and cycle"]),
  q("Why does the lecture focus more on weak stationarity than strict stationarity?", "Strict stationarity is a stronger and less practical distribution-level condition", "The class uses mean, variance, and lag-dependent covariance as the workable conditions.", ["Weak stationarity needs no data", "Strict stationarity cannot use lags", "Weak stationarity is only for images"]),
  q("What is the example yₜ = 5 + 2t + εₜ intended to show?", "A non-stationary trend process", "Its level changes systematically with time.", ["A constant-mean process", "A pure moving-average shock", "A Granger test statistic"]),
  q("When is an AR(1) process described as stationary in the example?", "When the lag coefficient has magnitude less than one", "The lecture illustrates yₜ = 0.7yₜ₋₁ + εₜ as stationary.", ["When the coefficient is greater than two", "When every residual is zero", "When the p-value is exactly one"]),
  q("What does x Granger-causes y mean?", "Past x improves prediction of current y after past y is included", "It is predictive causality, not proof of true physical causation.", ["x and y have equal means", "x is always contemporaneous with y", "x is independent of y"]),
  q("Which model is restricted in the lecture's Granger example?", "The model using only past y values", "The restricted model omits the lagged x terms.", ["The model using both x and y lags", "A seasonal ARIMA model", "A model with no intercept"]),
  q("What does the unrestricted model add?", "Past values of x alongside past values of y", "The additional x-lag coefficients are tested for predictive information.", ["Only future y values", "A new video stream", "A second dependent variable with no lags"]),
  q("What is the null hypothesis for x Granger-causes y?", "All lagged-x coefficients are zero", "If all gamma coefficients are zero, x adds no predictive information for y.", ["All y coefficients are one", "The residual sum is zero", "x and y must be identical"]),
  q("What is the alternative hypothesis?", "At least one lagged-x coefficient is non-zero", "One or more x lags contribute additional predictive information.", ["Every coefficient is zero", "The model has no intercept", "The series has no chronology"]),
  q("In the p-value example, what does p = 0.012 at 5% imply?", "Reject the null and conclude evidence that x Granger-causes y", "0.012 is less than 0.05.", ["Fail to reject the null", "Prove physical causation", "Choose the largest lag"]),
  q("What does a p-value above 0.05 imply in the lecture's test?", "Fail to reject the null of no predictive Granger causality", "The result does not provide sufficient evidence for the directional claim.", ["Prove reverse causality", "Guarantee stationarity", "Set the RSS to zero"]),
  q("Why does the lecture say Granger causality is not true causation?", "It measures incremental predictive usefulness, not a structural intervention", "Predictive precedence can exist without proving that one variable physically causes another.", ["The test has no statistics", "The test only works on images", "It compares medians only"]),
  q("What does RSSR denote?", "Residual sum of squares for the restricted model", "The restricted model's residual error enters the F statistic.", ["Residual standard seasonality", "Regression sample range", "Random series score"]),
  q("What does a larger F statistic generally indicate here?", "The unrestricted model improves fit enough to challenge the restrictions", "A large difference between restricted and unrestricted RSS supports rejecting the null.", ["The models are identical", "The series has no lags", "The p-value must be one"]),
  q("What is the role of m in the F statistic?", "The number of restrictions imposed", "With one lagged x restriction, m is one; more tested lags add restrictions.", ["The sample mean", "The number of time zones", "The video frame rate"]),
  q("Why is lag-length selection important?", "Too few lags omit information and too many reduce degrees of freedom", "AIC, BIC, or HQIC can help choose a defensible lag length.", ["It changes the course code", "It removes the need for stationarity", "It makes all coefficients zero"]),
  q("What must be true of x and y's observations?", "They should be aligned at matching time points and frequency", "Monthly x should be compared with the corresponding monthly y observations.", ["They must use unrelated dates", "One series must be shuffled", "They must have different frequencies"]),
  q("What is a key condition before a standard levels Granger test?", "The series should generally be stationary", "Non-stationarity may require differencing or a cointegration-based method such as VECM.", ["Both series must be constant numbers", "The model must have no intercept", "The sample must contain one observation"]),
  q("Why are sufficient observations needed?", "The unrestricted model must estimate all selected lag parameters", "More lags mean more parameters and therefore more data requirements.", ["To increase the video size", "To avoid computing residuals", "To remove time alignment"]),
  q("What is unidirectional predictive causality?", "One direction rejects its null while the reverse direction fails to reject", "For example, x Granger-causes y but y does not Granger-cause x.", ["Both directions fail to reject", "Both directions reject", "The variables are identical"]),
  q("What does bidirectional Granger causality mean?", "Both directional null hypotheses are rejected", "Evidence exists in both x-to-y and y-to-x predictive directions.", ["Neither direction is tested", "Only the restricted model is fitted", "The series are independent"]),
  q("What does failure to reject both directional nulls mean?", "There is no evidence of Granger causality in either direction", "This is weaker than proving independence; it is the test's evidence statement.", ["Both variables cause each other", "The data are strictly stationary", "The F statistic is infinite"])
];

export const ecs6401Lecture20260918180406 = {
  en: {
    title: "Univariate stationarity and Granger causality",
    lede: "This lecture distinguishes strict and weak stationarity, then builds a restricted-versus-unrestricted Granger-causality test with hypotheses, F and p-value decisions, worked RSS terms, and practical conditions for valid interpretation.",
    instructionalInterval: "00:04:19–01:21:00 source time (2× visible-tab video+audio capture; participant lead-in and idle tail excluded)",
    reviewLevel: "View-only recording; direct download checked first, seven-point visible Stream sweep, bounded interval, 2× Lecture Atlas Companion capture, timestamped transcript, and slide/whiteboard evidence verified",
    coverage: [
      { title: "Univariate stationarity", body: "One chronologically observed variable is used to define strict/strong and weak/covariance stationarity." },
      { title: "Strict versus weak conditions", body: "Strict stationarity preserves shifted joint distributions; weak stationarity uses constant mean, variance, and lag-dependent covariance." },
      { title: "Granger-causality models", body: "Restricted models use past y; unrestricted models add past x and test the gamma coefficients." },
      { title: "F and p-value decisions", body: "RSSR, RSSU, restrictions, observations, and parameters form the worked F-test intuition; p-values provide the decision shortcut." },
      { title: "Test conditions and directions", body: "Stationarity, aligned observations, lag choice, sufficient data, and correct specification support directional interpretation." }
    ],
    takeaway: "Granger causality is incremental predictive evidence: compare a y-only model with one that adds x lags, test whether those additions matter, and report the direction without claiming structural causation.",
    slideTrail: [
      { time: "00:04:19", title: "Stationarity definitions", note: "The first shared handwritten pages contrast strict/strong stationarity with weak/covariance stationarity." },
      { time: "00:21:30", title: "Restricted and unrestricted models", note: "The lecture writes y-lag-only and y-plus-x-lag equations and explains the coefficient roles." },
      { time: "00:42:48", title: "Residual sum of squares", note: "Worked residual and RSS calculations show the restricted/unrestricted comparison." },
      { time: "01:04:01", title: "Matrix solution", note: "The shared pages compute XᵀX, XᵀY, and coefficient estimates for the unrestricted model." },
      { time: "01:16:48", title: "Hypothesis decision and conditions", note: "The final pages summarize stationarity, lag selection, aligned observations, and Granger-direction decisions." }
    ],
    summary: [
      { title: "1. Define the series before testing", sourceRefs: ["00:04:19–00:18:00", "Stationarity definitions"], paragraphs: ["A univariate series has one variable observed in chronological order. The lecturer contrasts strict stationarity, where the entire probability distribution is unchanged by a time shift, with weak stationarity, where mean and variance are constant and covariance depends on lag.", "A trend such as yₜ = 5 + 2t + εₜ is non-stationary, while an AR(1) example can be stationary when its lag coefficient has magnitude below one. This distinction matters before applying a standard levels Granger test."] },
      { title: "2. Turn Granger causality into two nested models", sourceRefs: ["00:18:00–00:36:00", "Restricted/unrestricted equations"], paragraphs: ["To test whether x Granger-causes y, the restricted model predicts y from its own past values. The unrestricted model adds lagged x values. The null says all lagged-x coefficients are zero; the alternative says at least one contributes additional predictive information.", "The word causality is predictive: the test does not prove that an intervention on x would physically change y. The lecturer uses advertising spend and sales as an intuitive example of the directional claim."] },
      { title: "3. Read the F-test and p-value together", sourceRefs: ["00:36:00–01:00:00", "RSS and F-statistic worked example"], paragraphs: ["The worked example computes residuals and residual sums of squares for the restricted and unrestricted models. The F statistic compares the reduction in RSS with the number of restrictions and the remaining error relative to observations and unrestricted parameters.", "The decision shortcut is direct: a p-value below 0.05 rejects the null at the five-percent level; a larger p-value fails to reject it. The lecture's illustrative p = 0.012 therefore supports x Granger-causing y, while a small F that does not clear the critical value does not."] },
      { title: "4. Treat lag choice and data alignment as part of the test", sourceRefs: ["01:00:00–01:15:00", "Conditions checklist"], paragraphs: ["Lag length is critical. Too few lags can omit useful predictive information; too many consume degrees of freedom. AIC, BIC, or HQIC can help choose a defensible lag order, but the model must still be adequately specified.", "The x and y observations must share matching time points and frequency. The sample also needs enough observations to estimate every unrestricted coefficient, and omitted variables or incorrect deterministic terms can distort the result."] },
      { title: "5. Report direction without overclaiming", sourceRefs: ["01:15:00–01:21:00", "Directional outcomes"], paragraphs: ["If x-to-y rejects its null while y-to-x fails to reject, report unidirectional predictive causality from x to y. If both reject, report bidirectional predictive evidence; if both fail to reject, report no evidence in either direction.", "For non-stationary series, the lecturer points to appropriate differencing or cointegration-based methods such as VECM rather than applying the standard levels test mechanically."] }
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [
        { time: "00:39:00", question: "Why is the intercept written differently in the restricted and unrestricted equations?", response: "The lecturer says the notation is a simplified presentation and that the constant/intercept can be represented consistently; the important distinction is whether lagged x terms are included." },
        { time: "01:00:00", question: "Is the p-value decision about a median or the centre of a curve?", response: "No. The p-value measures evidence against the null for the added predictive terms; it is not a statement about a median." },
        { time: "01:18:45", question: "What do x tends to y and y tends to x mean?", response: "They name the two directional tests. Each direction has its own null and alternative, so both must be evaluated to report uni- or bidirectional evidence." }
      ],
      announcements: []
    },
    suggestedPractice: [{ title: "Optional practice: build a directional Granger audit", detail: "Use two public stationary time series, align their timestamps, choose a lag order with AIC/BIC/HQIC, fit restricted and unrestricted models in both directions, record RSS/F/p-value decisions, and write a cautious directional conclusion. This is optional learner practice, not an instructor-assigned deliverable." }],
    insights: [
      { label: "Stationarity", title: "A test inherits its data assumptions", body: "Check the series representation before interpreting a levels Granger result; non-stationarity can create misleading predictive relationships." },
      { label: "Direction", title: "Two directions require two tests", body: "x-to-y and y-to-x are separate hypotheses, not one symmetric conclusion." },
      { label: "Evidence", title: "Predictive causality is not structural causation", body: "Rejecting the null means added lagged information improves prediction under the model and sample, not that an intervention has been proven." },
      { label: "Specification", title: "Lag selection is part of the reasoning", body: "The chosen lag order changes the restrictions, degrees of freedom, parameters, and the evidence available to the test." }
    ],
    keyTerms: [
      { term: "Strict stationarity", definition: "Time-shifted observation vectors have the same joint probability distribution." },
      { term: "Weak stationarity", definition: "Mean and variance are constant and covariance depends on lag rather than absolute time." },
      { term: "Granger causality", definition: "A directional predictive test asking whether past x adds information for predicting y beyond past y." },
      { term: "Restricted model", definition: "The y-only model that excludes lagged x terms in the directional test." },
      { term: "Unrestricted model", definition: "The model that includes lagged y and lagged x terms." },
      { term: "RSS", definition: "Residual sum of squares used to compare restricted and unrestricted errors." },
      { term: "VECM", definition: "A cointegration-based vector error-correction method mentioned for non-stationary related series." }
    ],
    resources: [
      { title: "Statsmodels Granger causality test documentation", url: "https://www.statsmodels.org/stable/generated/statsmodels.tsa.stattools.grangercausalitytests.html", note: "Official API reference for the implemented directional test and lagged restrictions." },
      { title: "Forecasting: Principles and Practice — stationarity", url: "https://otexts.com/fpp3/stationarity.html", note: "Open textbook explanation of stationarity and transformations." },
      { title: "Forecasting: Principles and Practice — VAR models", url: "https://otexts.com/fpp3/VAR.html", note: "Open textbook context for multivariate lag models and related forecasting." }
    ],
    quiz
  }
};
