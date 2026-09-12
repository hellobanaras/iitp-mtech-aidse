import { ecs6401Lecture20260909180431 } from "./ecs-6401-2026-09-09-180431.js";

// English-only publication unit for the 11 September continuation.
export const ecs6401Lecture20260911180457 = {
  en: {
    ...ecs6401Lecture20260909180431.en,
    title: "SARIMA seasonal differencing and lag-operator equations",
    lede: "This lecture works through ARIMA and SARIMA notation, showing how first and seasonal differences, AR and MA coefficients, and lag powers map to p-d-q orders.",
    instructionalInterval: "00:07:54–01:16:13 source time (2× visible-tab video+audio capture; participant setup and idle tail excluded)",
    reviewLevel: "View-only recording; seven-point visible Stream sweep, source-time bounded interval, 2× Lecture Atlas Companion capture, timestamped transcript, and slide/whiteboard evidence verified",
    coverage: [
      { title: "AR and MA terms in ARIMA", body: "The whiteboard separates lagged observations governed by AR coefficients from lagged error terms governed by MA coefficients." },
      { title: "First and seasonal differencing", body: "First differencing uses yₜ−yₜ₋₁, while a seasonal period m uses yₜ−yₜ₋ₘ; the two transformations address different kinds of non-stationarity." },
      { title: "Reading SARIMA orders", body: "The lecture maps p, d, q and seasonal P, D, Q terms to the highest lag powers in the shift-operator equation." },
      { title: "Expanding shift operators", body: "Multiplying (1−B)(1−B⁴) reveals the concrete lagged observations behind seasonal differencing and keeps coefficient alignment explicit." }
    ],
    takeaway: "Read every ARIMA/SARIMA symbol as a concrete lag relationship: identify AR observation lags, MA error lags, ordinary and seasonal differences, then expand the shift operators to verify the implied terms.",
    slideTrail: [
      { time: "00:07:54", title: "AR and MA parts of ARIMA", note: "The whiteboard places AR coefficients with lagged y values and MA coefficients with error terms." },
      { time: "00:21:03", title: "First differencing", note: "The derivation defines zₜ = yₜ−yₜ₋₁ and explains how d=1 enters ARIMA notation." },
      { time: "00:41:03", title: "Seasonal lag four", note: "A four-period cycle motivates yₜ−yₜ₋₄ and the seasonal AR/MA notation." },
      { time: "01:01:08", title: "SARIMA shift-operator equation", note: "The equation combines ordinary and seasonal difference factors with AR and MA terms." },
      { time: "01:16:08", title: "Expanded seasonal differences", note: "The closing table/code frame precedes the marked teaching end at 01:16:13." }
    ],
    summary: [
      { title: "1. Keep AR and MA memory distinct", sourceRefs: ["00:07:54–00:21:03", "AR/MA whiteboard"], paragraphs: ["The AR side multiplies lagged observations such as yₜ₋₁ and yₜ₋₂, whereas the MA side multiplies current or lagged errors. Reading the two sides separately prevents a moving-average coefficient from being mistaken for an observation lag.", "The instructor uses the shift operator B to make the same distinction algebraic: powers of B applied to y represent AR lags, while powers applied to ε represent MA lags."] },
      { title: "2. Ordinary differencing supplies the integrated order", sourceRefs: ["00:21:03–00:41:03", "First-difference derivation"], paragraphs: ["First differencing defines zₜ = yₜ−yₜ₋₁, or (1−B)yₜ. The exponent on (1−B) is the d value: a square would indicate second-order differencing.", "Differencing changes the series being modelled; it does not itself add an AR or MA coefficient. The transformed series can then be analysed with ARMA terms."] },
      { title: "3. Seasonal structure adds a second lag scale", sourceRefs: ["00:41:03–01:01:08", "Seasonal period-four example"], paragraphs: ["For a cycle of four observations, seasonal differencing compares yₜ with yₜ₋₄ and is represented by (1−B⁴). Seasonal AR and MA terms likewise use B⁴ powers when the seasonal order is one.", "The capital P, D, and Q orders describe seasonal AR, differencing, and MA components, while lowercase p, d, and q describe the ordinary components."] },
      { title: "4. Expand operators to audit the model", sourceRefs: ["01:01:08–01:16:13", "Expanded equation"], paragraphs: ["Multiplying ordinary and seasonal factors makes every retained lag visible, for example yₜ, yₜ₋₁, yₜ₋₄, and yₜ₋₅. This is a practical check that signs, powers, and coefficient assignments are aligned.", "The final examples show how a symbolic SARIMA equation can be interpreted as a concrete regression-like relationship rather than treated as opaque notation."] }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [{ time: "00:41:03", question: "Is the slide visible and is the instructor audible?", response: "The instructor confirms the slide is visible before continuing the seasonal derivation." }], announcements: [] },
    suggestedPractice: [{ title: "Optional practice: expand a seasonal operator", detail: "For m=4, expand (1−B)(1−B⁴)yₜ by hand, label each lag, and explain which terms disappear if only ordinary differencing is used. This is optional learner practice, not an instructor-assigned deliverable." }]
  }
};
