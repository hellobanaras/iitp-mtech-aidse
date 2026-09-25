export const ecs6401Lecture20260925180502 = {
  "en": {
    "title": "Cointegration, equilibrium errors, and error-correction models",
    "lede": "Two nonstationary series can share a stable long-run relationship even while their individual paths wander. This lecture explains the stationary equilibrium gap, separates it from a new random shock, develops the error-correction interpretation, and contrasts cointegration with spurious regression before introducing estimation and testing.",
    "instructionalInterval": "00:00:03–01:24:34 source time; opening topic guidance and closing Q&A retained; internal break omitted from the teaching summary",
    "reviewLevel": "Seven-point visible timeline sweep, separately verified opening/closing audio, 2× video-and-audio capture, local timestamped transcription, and slide evidence; original study notes, not a verbatim transcript",
    "coverage": [
      {
        "title": "Individually I(1) series",
        "body": "A unit-root series can be nonstationary in levels while its first difference is stationary. Cointegration asks whether several such series share a common stochastic trend."
      },
      {
        "title": "A stationary equilibrium gap",
        "body": "In Yₜ = α + βXₜ + Zₜ, the residual Zₜ = Yₜ − α − βXₜ can be I(0), giving a long-run relation without requiring exact equality at every date."
      },
      {
        "title": "Short-run error correction",
        "body": "The ECM combines changes in X, correction of the previous equilibrium gap, and a new shock. The sign convention and adjustment magnitude determine the feedback interpretation."
      },
      {
        "title": "Spurious regression and testing",
        "body": "An impressive levels regression is not sufficient evidence. The lecture contrasts differencing with preserving a valid long-run relation and introduces relevant unit-root and cointegration tests."
      },
      {
        "title": "Estimation and course roadmap",
        "body": "The final portion begins the levels-OLS and super-consistency discussion, then explains the planned transition to volatility, machine learning, and deep-learning applications."
      }
    ],
    "takeaway": "Look for a stationary equilibrium error, not just two lines that move together. An ECM then separates the inherited gap from today's changes and new shocks; its signs must be interpreted using the stated definition of that gap.",
    "slideTrail": [
      {
        "time": "00:04:21",
        "title": "Non-stationary process; concept of integration",
        "note": "Handwritten notes distinguish changing statistical properties, a unit-root random walk, and the possibility of a stationary linear combination."
      },
      {
        "time": "00:08:55",
        "title": "Core idea of cointegration",
        "note": "The page states Xₜ and Yₜ are I(1), while a suitable Yₜ − βXₜ combination is I(0)."
      },
      {
        "time": "00:13:33",
        "title": "Mathematical insight: shared stochastic trend",
        "note": "Random-walk notation motivates cancellation of a common trend rather than an arbitrary sum of nonstationary series."
      },
      {
        "time": "00:21:22",
        "title": "Start with the cointegrating equation",
        "note": "The typed Integration concepts document defines the level relation and isolates its residual."
      },
      {
        "time": "00:37:53",
        "title": "Error term versus random disturbance",
        "note": "The long-run disequilibrium residual is explicitly separated from the new short-run ECM disturbance."
      },
      {
        "time": "00:42:19",
        "title": "Connection with long-run and short-run dynamics",
        "note": "The change equation is decomposed into a short-run effect, a lagged error-correction term, and a new shock."
      },
      {
        "time": "00:44:42",
        "title": "Worked ECM numerical example",
        "note": "With previous Y = 55, X = 20, and equilibrium 10 + 2X = 50, the lagged gap is 5. The displayed ECM gives 1 + 0.5(2) − 0.4(5) + 0.5 = 0.5."
      },
      {
        "time": "00:45:58",
        "title": "Equilibrium diagrams",
        "note": "The fitted straight line and a time-path sketch illustrate signed deviations and movement back toward a long-run relation."
      },
      {
        "time": "00:53:58",
        "title": "Cointegration in single-equation models; spurious regression",
        "note": "Handwritten notes contrast a stationary residual with misleading apparent fit between unrelated nonstationary series."
      },
      {
        "time": "01:00:02",
        "title": "How to avoid spurious regression",
        "note": "The slide lists differencing, an ECM when a long-run relation exists, and ADF, Engle–Granger, and Johansen testing."
      },
      {
        "time": "01:03:20",
        "title": "Adjustment magnitude and income-consumption example",
        "note": "The handwritten explanation compares no correction, slow and fast correction, overshooting, and a shock followed by adjustment."
      },
      {
        "time": "01:15:56",
        "title": "Estimation of cointegration",
        "note": "The first estimation page introduces a levels-OLS long-run model and the conditional super-consistency idea."
      },
      {
        "time": "01:20:19",
        "title": "Syllabus and remaining course topics",
        "note": "The closing discussion reviews completed topics and the planned transition to later applied and ML/DL material."
      }
    ],
    "summary": [
      {
        "title": "1. The question is about a long-run relation",
        "sourceRefs": [
          "00:00:03–00:03:30",
          "Opening topic announcement and cointegration roadmap"
        ],
        "paragraphs": [
          "The opening connects this class with the preceding time-series material and identifies cointegration in a single equation, representation, estimation, and testing as the next focus. The instructor highlights the topic's examination relevance and asks students to understand the meaning of the mathematics, not merely memorize symbols.",
          "Granger predictability and cointegration answer different questions. A model may ask whether past X helps predict Y; the present discussion asks whether nonstationary level series can be combined into a stable long-run error."
        ]
      },
      {
        "title": "2. Nonstationary levels can have a stationary combination",
        "sourceRefs": [
          "00:03:42–00:20:35",
          "Non-stationary process; Core idea of cointegration; Mathematical insight"
        ],
        "paragraphs": [
          "A unit-root random walk illustrates a series whose level does not have time-invariant variance. Under the I(1) model, one difference produces an I(0) series. Two series can each be I(1), yet a particular weighted combination of their levels can be I(0).",
          "The useful combination cancels their common stochastic trend. This does not say that any two random walks are cointegrated or that every linear combination is stationary. The existence of an appropriate nontrivial combination is the important restriction.",
          "The instructor uses income and consumption, then two walkers connected by a rope, as intuition for paths that may wander individually without drifting apart indefinitely. This is an analogy for a stationary gap, not a requirement that real data have a literally bounded distance. A student asks about dependent and independent variables; the chosen single-equation normalization places Y on the left and X on the right, without proving causal direction or statistical independence."
        ]
      },
      {
        "title": "3. Give the equilibrium error a precise meaning",
        "sourceRefs": [
          "00:20:36–00:28:15",
          "Integration concepts: cointegrating equation and residual"
        ],
        "paragraphs": [
          "Write the long-run equation as Yₜ = α + βXₜ + Zₜ. Here α is an intercept, β describes the long-run slope, and Zₜ = Yₜ − α − βXₜ is the departure from the fitted relation. Cointegration requires that departure to be stationary even though X and Y are individually nonstationary.",
          "A positive Z means Y lies above α + βX; a negative Z means it lies below. Stationary does not mean identically zero: temporary departures are compatible with the relationship. Changing the normalization changes the sign convention, so every interpretation must refer back to the equation.",
          "The first numerical illustration uses Y* = 10 + 2X. At X = 20, equilibrium Y is 50: actual Y = 53 gives Z = +3, while actual Y = 46 would give Z = −4. These signed gaps explain what the subsequent correction mechanism is correcting."
        ]
      },
      {
        "title": "4. Separate the old gap from today's shock",
        "sourceRefs": [
          "00:28:15–00:42:39",
          "Error-correction interpretation; Error term versus random disturbance; Short-run and long-run dynamics"
        ],
        "paragraphs": [
          "A compact ECM can be written ΔYₜ = a + bΔXₜ + λZₜ₋₁ + εₜ. This notation reserves α and β for the level relation and uses a and b for the short-run equation; the lecture uses several letter conventions across its pages. The roles are more important than the letters.",
          "The bΔX term captures a short-run change effect. The lagged Z term represents inherited disequilibrium. The new ε term captures other unexplained short-run shocks. Calling both Z and ε an error does not make them interchangeable.",
          "With Z = Y − α − βX, a negative λ gives a downward correction after a positive gap and an upward correction after a negative gap, holding the other effects fixed. This is the contribution of the correction term, not a guarantee of the sign of the entire observed change."
        ]
      },
      {
        "title": "5. Use the numerical and graphical interpretation",
        "sourceRefs": [
          "00:42:39–00:49:20",
          "Worked ECM example and equilibrium diagrams; visible calculation at 00:44:42"
        ],
        "paragraphs": [
          "The full change-equation example is distinct from the earlier +3 illustration. With yesterday’s Y = 55 and X = 20, the equilibrium value is 10 + 2(20) = 50, so yesterday’s gap is 5.",
          "The displayed ECM is ΔYₜ = 1 + 0.5ΔXₜ − 0.4Zₜ₋₁ + εₜ. Substituting ΔX = 2, Zₜ₋₁ = 5, and ε = 0.5 gives ΔY = 1 + 1 − 2 + 0.5 = 0.5. The baseline contributes +1, the short-run X change +1, correction −2, and the new shock +0.5. Thus a downward correction can coexist with a positive overall change.",
          "The following diagrams show a fitted equilibrium line, vertical deviations, and time paths returning toward the long-run relation. Use the algebraic definition of Z to interpret signs; a poorly placed handwritten label should not reverse the equation."
        ]
      },
      {
        "title": "6. Do not confuse impressive fit with cointegration",
        "sourceRefs": [
          "00:49:20–01:00:32",
          "Single-equation cointegration; Spurious regression; How to avoid it"
        ],
        "paragraphs": [
          "The handwritten review warns that unrelated nonstationary series can produce a high R² and apparently significant coefficients without a meaningful stable relationship. A visually convincing regression is therefore not enough. The behavior of the equilibrium residual matters.",
          "Differencing can address unit-root nonstationarity, but a differences-only model can discard a genuine level relationship. When that relationship exists, the ECM preserves it through the lagged error. ADF, Engle–Granger, and Johansen tests are named as diagnostic tools; the lecture does not complete a full worked implementation of those procedures here.",
          "The lecture recalls R² = 1 − RSS/TSS as the proportion of variation explained by an ordinary in-sample regression with an intercept. A high R² is not itself proof that a regression is spurious either: the warning concerns misleading inference from nonstationary series without the required stable relationship."
        ]
      },
      {
        "title": "7. Interpret the speed and direction of correction",
        "sourceRefs": [
          "01:00:32–01:07:10",
          "Error-correction coefficient; adjustment magnitude; income-consumption illustration"
        ],
        "paragraphs": [
          "The adjustment discussion compares zero correction, a smaller negative response such as −0.2, and a larger one such as −0.8. In the simple illustration, −0.2 removes an amount equal to one-fifth of the prior gap, while −0.8 removes four-fifths, with other effects held fixed.",
          "A coefficient beyond −1 can produce overshooting under that sign convention. The income-consumption story follows the same sequence: a shock moves the system away from its relationship, the equilibrium gap becomes nonzero, and subsequent adjustment moves it back. The full model's stability requires more than just noticing a negative coefficient.",
          "A student asks about the meaning of the t statistic. The response relates an estimated coefficient to its standard error. For a zero-coefficient null, t = estimated coefficient / standard error; whether ordinary t-based inference is justified still depends on model assumptions. A large statistic alone proves neither cointegration nor spuriousness."
        ]
      },
      {
        "title": "8. Begin estimation, then distinguish the course roadmap",
        "sourceRefs": [
          "01:12:08–01:24:34",
          "Estimation of cointegration; syllabus and closing discussion"
        ],
        "paragraphs": [
          "The final teaching page begins with OLS estimation of the long-run relation using the original levels, not only differenced observations. The instructor introduces super-consistency as a property under cointegration assumptions and contrasts it with a spurious levels regression. OLS chooses the intercept and slope to minimize Σₜ(Yₜ − Ŷₜ)². After estimating the intercept and slope, compute the fitted level Ŷₜ = α̂ + β̂Xₜ and residual ûₜ = Yₜ − Ŷₜ; the next step is to examine whether the estimated gap behaves stationarily. A numerical estimation example and detailed testing are explicitly deferred to a subsequent session. Another estimation approach is briefly mentioned, but its name is not clear enough in the reviewed audio to identify reliably.",
          "The closing discussion outlines the remaining cointegration and volatility material and the later move toward machine learning and deep-learning applications. In response to a question about algorithm coverage, the instructor says the relevant methods will be covered and notes that the course runs through November 30. The class closes with an upload/share announcement; these are course-administration signals, not a new graded assignment."
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
          "time": "01:13:05; 01:24:22",
          "title": "Lecture material upload",
          "detail": "The instructor says the PDF/material will be uploaded; a closing request asks for sharing in the class group. No external book or paper was assigned in this recording."
        }
      ],
      "studentQuestions": [
        {
          "time": "00:05:50–00:06:58",
          "question": "Can the equilibrium error be written with X and Y exchanged?",
          "response": "Revisiting a question from the preceding lecture, the instructor says the coefficient must change when the relation is normalized the other way. The existence of a stationary combination is the key property."
        },
        {
          "time": "00:16:49–00:20:18",
          "question": "Which variable is dependent, and can both variables have coefficients in the linear combination?",
          "response": "The instructor uses income and consumption, then writes Y = βX + μ: that representation puts Y on the left and X on the right. The discussion returns to the stationary residual and the pull-back interpretation. Added clarification: this normalization is not evidence that the two series are statistically independent or that X structurally causes Y."
        },
        {
          "time": "01:04:55–01:07:10",
          "question": "What is the t statistic—does it refer to a sample distribution?",
          "response": "The instructor checks the definition and explains the estimated coefficient divided by its standard error. The accompanying warning is that apparently significant statistics can mislead in a spurious nonstationary regression; no full derivation of a sampling distribution is given."
        },
        {
          "time": "01:20:09–01:22:03",
          "question": "Can the remaining syllabus and transition to machine learning be shown?",
          "response": "The instructor opens the syllabus and identifies remaining cointegration estimation/testing, ARCH, and subsequent ML/DL and applied time-series topics."
        },
        {
          "time": "01:22:38–01:24:08",
          "question": "Will the listed regression, classification, tree, and ensemble algorithms be covered?",
          "response": "The instructor confirms coverage of the relevant algorithm basics with emphasis on problem-solving and time-series applications, and says there is time through November 30."
        }
      ],
      "announcements": [
        "00:01:18: Cointegration is highlighted as examination-relevant.",
        "01:04:29: A five-minute break is announced; a t-statistic discussion precedes the actual pause. Noninstructional break approximately 01:07:10–01:12:08 is omitted from the summary.",
        "01:24:22: Upload/share of lecture material is announced. No new graded assignment, homework, lab, or project is identified in the reviewed recording."
      ]
    },
    "insights": [
      {
        "label": "Added clarification",
        "title": "Normalization controls the sign",
        "body": "If you replace Z by −Z, an equivalent ECM must replace λ by −λ too. Read the equation before interpreting a coefficient as restoring or destabilizing feedback; a sketch's labels should not override the algebra."
      },
      {
        "label": "Added stability check",
        "title": "Negative feedback is not the whole stability test",
        "body": "With a fixed equilibrium and only gap correction, gₜ = (1 + λ)gₜ₋₁. Stability requires |1 + λ| < 1: −2 < λ < 0. The interval −2 < λ < −1 gives damped oscillation in this simplified model. A full multivariate ECM has additional dynamics and needs its own stability analysis."
      },
      {
        "label": "Added testing caution",
        "title": "Use a cointegration test for the estimated residual",
        "body": "Estimating the level relation changes the residual-test inference problem. Do not automatically reuse ordinary unit-root critical values for an estimated cointegrating residual; the official Engle–Granger implementation provides the appropriate testing workflow."
      },
      {
        "label": "Added interpretation",
        "title": "A stable relation is not a causal or trading guarantee",
        "body": "A cointegrating combination is a statistical model of long-run co-movement. Structural breaks, misspecification, uncertainty, and out-of-sample failure remain possible; it does not by itself identify an intervention or guarantee a useful forecast."
      }
    ],
    "keyTerms": [
      {
        "term": "I(0)",
        "definition": "A stationary process in the integration-order notation used in the lecture."
      },
      {
        "term": "I(1)",
        "definition": "A process whose first difference is I(0), although its level is nonstationary."
      },
      {
        "term": "Cointegration",
        "definition": "A relationship in which an appropriate nontrivial combination of individually integrated series has a lower integration order, here I(0)."
      },
      {
        "term": "Equilibrium gap",
        "definition": "The level residual Yₜ − α − βXₜ, measuring departure from the chosen long-run relation."
      },
      {
        "term": "Error-correction model",
        "definition": "A model of short-run changes that includes a lagged long-run equilibrium gap as an adjustment term."
      },
      {
        "term": "Spurious regression",
        "definition": "An apparently persuasive regression whose fit reflects nonstationary trends rather than the stable relationship being claimed."
      },
      {
        "term": "Super-consistency",
        "definition": "Faster convergence of a long-run coefficient estimator under suitable cointegration assumptions; not a blanket guarantee of valid inference."
      }
    ],
    "resources": [
      {
        "title": "Watch/read: Granger's prize lecture",
        "url": "https://www.nobelprize.org/prizes/economic-sciences/2003/granger/lecture/",
        "note": "An original-researcher's account of time-series analysis, cointegration, and applications; useful context for the lecture's shared-trend idea."
      },
      {
        "title": "Practise: statsmodels Engle–Granger test",
        "url": "https://www.statsmodels.org/stable/generated/statsmodels.tsa.stattools.coint.html",
        "note": "Official documentation for a two-step cointegration test. Review its I(1) assumptions, deterministic terms, and no-cointegration null before using it."
      },
      {
        "title": "Read/practise: statsmodels VECM",
        "url": "https://www.statsmodels.org/stable/generated/statsmodels.tsa.vector_ar.vecm.VECM.html",
        "note": "A system-level extension of the lecture's single-equation error-correction intuition, with separate long-run and short-run components."
      }
    ],
    "suggestedPractice": [
      {
        "title": "Optional practice: reproduce the four ECM contributions",
        "detail": "Calculate the lecture’s ΔY = 0.5 example, change one component at a time, and explain why the correction contribution and the total change can have different signs. This is a study suggestion, not assigned homework."
      }
    ],
    "quiz": [
      {
        "question": "What does I(1) mean for a time series?",
        "options": [
          "Its levels are stationary",
          "One difference produces a stationary series",
          "It contains exactly one observation",
          "Its mean must equal one"
        ],
        "answer": 1,
        "explanation": "Integration order one means that first differencing removes the unit-root nonstationarity under the model.",
        "optionNotes": [
          "Stationary levels are I(0), not I(1).",
          "Integration order one means that first differencing removes the unit-root nonstationarity under the model.",
          "Integration order is unrelated to sample size.",
          "Integration order does not specify a numerical mean."
        ]
      },
      {
        "question": "What is the defining relationship for the lecture's two I(1) series?",
        "options": [
          "Both series must become constant",
          "Every combination must be stationary",
          "A nontrivial linear combination is I(0)",
          "Their first differences must also be I(1)"
        ],
        "answer": 2,
        "explanation": "Cointegration means an appropriate nontrivial combination of the I(1) levels is stationary.",
        "optionNotes": [
          "Stationarity permits random variation; it does not require a constant path.",
          "Only an appropriate combination needs to eliminate the common stochastic trend.",
          "Cointegration means an appropriate nontrivial combination of the I(1) levels is stationary.",
          "An I(1) series has stationary first differences under the definition."
        ]
      },
      {
        "question": "If Y = alpha + beta X + Z, what is the equilibrium gap Z?",
        "options": [
          "Y minus alpha minus beta X",
          "Y plus alpha plus beta X",
          "The first difference of X",
          "The coefficient beta"
        ],
        "answer": 0,
        "explanation": "Subtracting the fitted long-run component leaves the deviation from that relation.",
        "optionNotes": [
          "Subtracting the fitted long-run component leaves the deviation from that relation.",
          "Adding the fitted terms does not isolate the residual.",
          "A first difference is a one-period change, not the level-equation residual.",
          "Beta is the long-run slope, not the observation-specific gap."
        ]
      },
      {
        "question": "What does a positive gap Y minus alpha minus beta X mean?",
        "options": [
          "X must be negative",
          "Y is below its fitted equilibrium",
          "The variables cannot be cointegrated",
          "Y is above its fitted equilibrium"
        ],
        "answer": 3,
        "explanation": "A positive residual places Y above alpha plus beta X at that time.",
        "optionNotes": [
          "The sign of the gap does not determine the sign of X.",
          "Being below the fitted relation produces a negative gap under this normalization.",
          "Cointegrated systems can deviate temporarily from equilibrium.",
          "A positive residual places Y above alpha plus beta X at that time."
        ]
      },
      {
        "question": "In the lecture’s full ECM example, what is 1 + 0.5(2) − 0.4(5) + 0.5?",
        "options": [
          "−2",
          "0.5",
          "2.5",
          "5"
        ],
        "answer": 1,
        "explanation": "The four contributions are +1, +1, −2, and +0.5, totaling +0.5.",
        "optionNotes": [
          "−2 is only the error-correction contribution, not the total change.",
          "The four contributions are +1, +1, −2, and +0.5, totaling +0.5.",
          "2.5 omits the −2 correction contribution.",
          "5 is the previous equilibrium gap, not the current change."
        ]
      },
      {
        "question": "How does the cointegrating residual differ from the ECM disturbance?",
        "options": [
          "They are always identical",
          "Both are fixed parameters",
          "The residual is an equilibrium gap; the disturbance is a new short-run shock",
          "Neither can vary over time"
        ],
        "answer": 2,
        "explanation": "The lagged gap measures inherited disequilibrium, whereas the disturbance captures new unexplained variation.",
        "optionNotes": [
          "The lecture explicitly separates these two uses of the word error.",
          "Both are time-indexed quantities, not fixed coefficients.",
          "The lagged gap measures inherited disequilibrium, whereas the disturbance captures new unexplained variation.",
          "Both can change with observations and shocks."
        ]
      },
      {
        "question": "Which term represents short-run movement in X in a simple ECM?",
        "options": [
          "beta alone",
          "A coefficient multiplying delta X",
          "The lagged equilibrium residual alone",
          "The level of Y with no coefficient"
        ],
        "answer": 1,
        "explanation": "The coefficient on delta X describes the contemporaneous short-run association in this specification.",
        "optionNotes": [
          "Beta in the long-run relation is not automatically the short-run coefficient.",
          "The coefficient on delta X describes the contemporaneous short-run association in this specification.",
          "The lagged residual represents inherited long-run disequilibrium, not the current change in X.",
          "A level alone is not the model's change-in-X term."
        ]
      },
      {
        "question": "Why is the previous equilibrium gap included in the change equation?",
        "options": [
          "To replace all random shocks",
          "To force every change to zero",
          "To remove the long-run relation",
          "To represent adjustment to earlier disequilibrium"
        ],
        "answer": 3,
        "explanation": "The inherited gap links yesterday's disequilibrium with today's adjustment.",
        "optionNotes": [
          "New shocks remain a separate part of the equation.",
          "Adjustment can imply a nonzero change.",
          "The lagged gap preserves information from the long-run relation.",
          "The inherited gap links yesterday's disequilibrium with today's adjustment."
        ]
      },
      {
        "question": "If the lagged gap is positive and its coefficient is negative, what is that term's contribution to delta Y?",
        "options": [
          "Negative",
          "Always zero",
          "Positive",
          "Undefined because the gap is positive"
        ],
        "answer": 0,
        "explanation": "A negative coefficient times a positive gap gives a downward correction, holding the other terms fixed.",
        "optionNotes": [
          "A negative coefficient times a positive gap gives a downward correction, holding the other terms fixed.",
          "The product is zero only if a factor is zero.",
          "This has the wrong sign for the stated product.",
          "A positive gap is a normal input to the correction term."
        ]
      },
      {
        "question": "If the gap is negative and the adjustment coefficient is negative, what is the correction contribution?",
        "options": [
          "Negative",
          "Positive",
          "Exactly one",
          "It removes X from the model"
        ],
        "answer": 1,
        "explanation": "The upward correction moves Y toward its fitted relation when other terms are held fixed.",
        "optionNotes": [
          "Multiplying two negative numbers gives a positive contribution.",
          "The upward correction moves Y toward its fitted relation when other terms are held fixed.",
          "The magnitude depends on both values, not a fixed unit.",
          "The correction does not remove the other regressors."
        ]
      },
      {
        "question": "What does an adjustment coefficient of -0.2 illustrate?",
        "options": [
          "The equilibrium slope must be 0.2",
          "All observations are corrected immediately",
          "A correction equal to 20% of the previous gap, with other effects held fixed",
          "A guaranteed 20% forecasting accuracy"
        ],
        "answer": 2,
        "explanation": "Multiplying the lagged gap by -0.2 gives a correction opposite in sign and one-fifth its size.",
        "optionNotes": [
          "The adjustment coefficient and long-run slope have different roles.",
          "A fifth of the gap is not its entire magnitude.",
          "Multiplying the lagged gap by -0.2 gives a correction opposite in sign and one-fifth its size.",
          "An adjustment rate is not a forecasting score."
        ]
      },
      {
        "question": "Compared with -0.2, what does -0.8 imply in the simple adjustment illustration?",
        "options": [
          "A larger correction per period",
          "No correction",
          "The same correction",
          "A positive feedback term under the stated normalization"
        ],
        "answer": 0,
        "explanation": "The absolute coefficient is larger, so the correction removes more of a fixed gap in the simple example.",
        "optionNotes": [
          "The absolute coefficient is larger, so the correction removes more of a fixed gap in the simple example.",
          "A zero coefficient would imply no contribution from the gap.",
          "Their magnitudes differ by a factor of four.",
          "Both coefficients are negative under this normalization."
        ]
      },
      {
        "question": "What does a zero adjustment coefficient mean in that equation?",
        "options": [
          "The gap is necessarily zero",
          "The series are necessarily constant",
          "The long-run slope must vanish",
          "The lagged gap contributes no correction to this variable"
        ],
        "answer": 3,
        "explanation": "A zero coefficient removes the direct gap contribution from this change equation.",
        "optionNotes": [
          "The gap can be nonzero even if this equation does not adjust to it.",
          "Other regressors and shocks can still change the series.",
          "The long-run slope is a separate parameter.",
          "A zero coefficient removes the direct gap contribution from this change equation."
        ]
      },
      {
        "question": "Under Z = Y minus alpha minus beta X, what is the concern with a positive adjustment coefficient in the simple Y-adjustment example?",
        "options": [
          "It guarantees stationarity",
          "It pushes Y farther in the direction of the existing gap",
          "It makes the residual identically zero",
          "It changes the integration order definition"
        ],
        "answer": 1,
        "explanation": "A positive gap creates an upward contribution and a negative gap a downward one; both reinforce the deviation in this simple interpretation.",
        "optionNotes": [
          "A positive feedback term does not guarantee stability.",
          "A positive gap creates an upward contribution and a negative gap a downward one; both reinforce the deviation in this simple interpretation.",
          "Multiplication by a positive coefficient does not annihilate the gap.",
          "I(0) and I(1) retain the same definitions."
        ]
      },
      {
        "question": "What is lost if a differences-only model omits a relevant equilibrium term?",
        "options": [
          "All short-run information",
          "The possibility of computing changes",
          "The explicit long-run correction information",
          "The ability to include a disturbance"
        ],
        "answer": 2,
        "explanation": "Differencing alone can discard the level relationship that the ECM reintroduces through the lagged gap.",
        "optionNotes": [
          "Short-run changes remain in a differences-only model.",
          "Changes are exactly what such a model uses.",
          "Differencing alone can discard the level relationship that the ECM reintroduces through the lagged gap.",
          "A model in differences can still include random disturbances."
        ]
      },
      {
        "question": "Which data enter the long-run cointegrating regression described in the lecture?",
        "options": [
          "The level series",
          "Only their first differences",
          "Only their absolute residuals",
          "Only a list of timestamps"
        ],
        "answer": 0,
        "explanation": "The long-run relation is estimated between the levels; differences appear in the short-run equation.",
        "optionNotes": [
          "The long-run relation is estimated between the levels; differences appear in the short-run equation.",
          "A differences-only regression targets a different relationship.",
          "Residuals are obtained after fitting the relation, not used as the original level variables.",
          "Timestamps alone cannot estimate the relation between observed values."
        ]
      },
      {
        "question": "What does high correlation alone establish about cointegration?",
        "options": [
          "It proves a stationary equilibrium gap",
          "It proves a causal effect",
          "It proves both series are I(0)",
          "It does not establish cointegration"
        ],
        "answer": 3,
        "explanation": "Cointegration concerns integration orders and a stationary linear combination, not just co-movement.",
        "optionNotes": [
          "A stationary gap requires additional evidence, not correlation alone.",
          "Correlation is not an intervention-based causal result.",
          "Nonstationary series can also have high sample correlation.",
          "Cointegration concerns integration orders and a stationary linear combination, not just co-movement."
        ]
      },
      {
        "question": "Why can regressions involving unrelated trending series be misleading?",
        "options": [
          "They cannot have residuals",
          "Apparent fit can reflect stochastic trends rather than a stable relation",
          "They always have zero R-squared",
          "Their coefficients cannot be calculated"
        ],
        "answer": 1,
        "explanation": "Shared-looking movement can yield impressive sample fit without a stationary long-run error.",
        "optionNotes": [
          "Such regressions do have residuals; their properties are the issue.",
          "Shared-looking movement can yield impressive sample fit without a stationary long-run error.",
          "Spurious regressions can have deceptively high fit.",
          "Numerical estimability does not make the resulting inference valid."
        ]
      },
      {
        "question": "What is the role of beta in the cointegrating equation?",
        "options": [
          "It counts the observations",
          "It is the one-period innovation",
          "It scales X in the long-run relation",
          "It is always the speed of correction"
        ],
        "answer": 2,
        "explanation": "Beta determines how X enters the equilibrium combination with Y.",
        "optionNotes": [
          "Sample size is not the long-run slope.",
          "The random disturbance is a different quantity.",
          "Beta determines how X enters the equilibrium combination with Y.",
          "The adjustment coefficient belongs to the change equation and need not equal beta."
        ]
      },
      {
        "question": "What does alpha represent in Y = alpha + beta X + Z?",
        "options": [
          "The intercept of the long-run relation",
          "The integration order",
          "The lagged disturbance",
          "The number of variables"
        ],
        "answer": 0,
        "explanation": "Alpha allows a constant offset in the level relationship.",
        "optionNotes": [
          "Alpha allows a constant offset in the level relationship.",
          "Integration order is denoted I(d), not the regression intercept.",
          "The intercept is a fixed term rather than a lagged error.",
          "The count of variables is unrelated to this constant."
        ]
      },
      {
        "question": "Does cointegration require the equilibrium gap to be zero at every date?",
        "options": [
          "Yes, otherwise it is impossible",
          "Yes, if beta is positive",
          "Only in a long dataset",
          "No; the gap can fluctuate while remaining stationary"
        ],
        "answer": 3,
        "explanation": "A stationary gap can move around equilibrium without accumulating an unbounded stochastic trend.",
        "optionNotes": [
          "Temporary deviations are the reason an error-correction mechanism is useful.",
          "The slope's sign does not eliminate all residual fluctuations.",
          "Sample length does not impose a zero-residual definition.",
          "A stationary gap can move around equilibrium without accumulating an unbounded stochastic trend."
        ]
      },
      {
        "question": "Why must an adjustment coefficient's sign be read together with the gap definition?",
        "options": [
          "The coefficient has no units",
          "Reversing the gap's sign reverses the matching coefficient's sign",
          "All negative coefficients are mistakes",
          "The gap definition never matters"
        ],
        "answer": 1,
        "explanation": "Z and -Z represent opposite sign conventions; an equivalent equation must reverse the coefficient too.",
        "optionNotes": [
          "Units can matter, but the key issue here is the normalization of the residual.",
          "Z and -Z represent opposite sign conventions; an equivalent equation must reverse the coefficient too.",
          "Negative feedback is expected under the lecture's stated normalization.",
          "Ignoring normalization can reverse the interpretation of adjustment."
        ]
      },
      {
        "question": "What does overshooting mean in the lecture's adjustment discussion?",
        "options": [
          "The series never crosses equilibrium",
          "The residual must stop changing",
          "A correction crosses to the other side of equilibrium",
          "The model no longer contains an intercept"
        ],
        "answer": 2,
        "explanation": "A sufficiently large correction can move beyond equilibrium; the full dynamics determine whether the oscillation damps or grows.",
        "optionNotes": [
          "Crossing the equilibrium is precisely the overshooting idea.",
          "Overshooting can produce changes in sign rather than a fixed residual.",
          "A sufficiently large correction can move beyond equilibrium; the full dynamics determine whether the oscillation damps or grows.",
          "Overshooting is about adjustment dynamics, not removal of a constant."
        ]
      },
      {
        "question": "In the income-consumption illustration, why can an error-correction term be useful?",
        "options": [
          "It connects temporary deviations with a long-run relationship",
          "It assumes income never changes",
          "It guarantees a profitable trading strategy",
          "It removes all uncertainty about consumption"
        ],
        "answer": 0,
        "explanation": "The example separates the longer-run relation from period-to-period changes and subsequent correction.",
        "optionNotes": [
          "The example separates the longer-run relation from period-to-period changes and subsequent correction.",
          "Income can evolve over time in the illustration.",
          "A statistical illustration is not a trading guarantee.",
          "Random shocks and estimation uncertainty remain."
        ]
      },
      {
        "question": "How should the introductory claim of super-consistency be understood?",
        "options": [
          "Every ordinary t-test becomes exact",
          "The fitted residual must be identically zero",
          "Any regression of trending data is reliable",
          "Under cointegration assumptions, the long-run coefficient can converge faster than in standard stationary regression"
        ],
        "answer": 3,
        "explanation": "The lecture contrasts a valid cointegrating relation with a spurious levels regression; the property is conditional, not a blanket guarantee.",
        "optionNotes": [
          "Coefficient convergence does not automatically validate ordinary finite-sample inference.",
          "Super-consistency concerns estimation, not perfect fit.",
          "The required cointegration assumptions cannot be omitted.",
          "The lecture contrasts a valid cointegrating relation with a spurious levels regression; the property is conditional, not a blanket guarantee."
        ]
      }
    ]
  }
};
