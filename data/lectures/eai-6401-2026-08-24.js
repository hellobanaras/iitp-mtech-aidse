// English-only publication unit.
export const eai6401Lecture20260824 = {
  en: {
  "title": "Regret, action-value estimation, and the 10-armed testbed",
  "lede": "The lecture turns the exploration–exploitation dilemma into a measurable objective through regret, derives its gap–count form, builds sample-average action estimates, and tests greedy versus epsilon-greedy behavior before solving a four-armed exercise.",
  "instructionalInterval": "1:12–39:57 and 41:10–1:18:01",
  "reviewLevel": "Recording, timestamped transcript, and slide-frame verified",
  "coverage": [
    {
      "title": "Bandit benchmark",
      "body": "True action values define the optimal arm and the reward benchmark against which a learner is judged."
    },
    {
      "title": "Regret as opportunity loss",
      "body": "Instantaneous regret measures one missed reward opportunity; cumulative regret adds those gaps across the decision horizon."
    },
    {
      "title": "Gap–count decomposition",
      "body": "Total regret depends on how often each arm is chosen and how far that arm lies below the optimum."
    },
    {
      "title": "Exploration schedules",
      "body": "Pure greed can lock onto an early mistake, while permanent fixed-rate exploration keeps paying avoidable regret."
    },
    {
      "title": "Sample-average estimates",
      "body": "Q_t(a) is estimated from rewards observed only on pulls of action a and converges under stationary, repeated sampling."
    },
    {
      "title": "10-armed testbed and exercise",
      "body": "Replicated experiments compare greedy and epsilon-greedy learning, followed by a stepwise reconstruction of a four-armed example."
    }
  ],
  "takeaway": "A strong bandit policy spends exploration where uncertainty is worth its regret, updates values from partial feedback, and reduces avoidable sampling as evidence separates good arms from bad ones.",
  "slideTrail": [
    {
      "time": "1:12–8:59",
      "title": "k-armed bandit recap",
      "note": "A stationary reward distribution gives every action an unknown true value q*(a); the learner must sample while accumulating reward."
    },
    {
      "time": "8:59–16:59",
      "title": "Exploration–exploitation dilemma",
      "note": "The greedy set is argmax_a Q_t(a); actions outside it explore, and the exploration rate may decrease as evidence grows."
    },
    {
      "time": "16:59–30:59",
      "title": "Regret",
      "note": "The slide defines q*(a)=E[R|A=a], V*=max_a q*(a), one-step opportunity loss, and accumulated regret."
    },
    {
      "time": "30:59–34:59",
      "title": "Regret from gaps and counts",
      "note": "With Delta_a=V*−q*(a) and N_t(a) selections, L_t=sum_a E[N_t(a)]Delta_a."
    },
    {
      "time": "34:59–39:57",
      "title": "Linear versus sublinear regret",
      "note": "The graph contrasts forever exploring, never exploring, and decaying epsilon-greedy behavior."
    },
    {
      "time": "41:10–43:59",
      "title": "Methods roadmap",
      "note": "The instructor previews epsilon-greedy, incremental updates, nonstationarity, optimistic values, UCB, gradient bandits, and contextual bandits; only the first method is developed today."
    },
    {
      "time": "43:59–48:59",
      "title": "Action-value methods",
      "note": "Q_t(a) is the sample mean of rewards received before t on selections of a, with an indicator-sum form shown on the slide."
    },
    {
      "time": "48:59–50:59",
      "title": "Epsilon-greedy action selection",
      "note": "Most decisions use a current greedy action, while an epsilon fraction use a uniformly random action."
    },
    {
      "time": "50:59–55:59",
      "title": "The 10-armed testbed",
      "note": "Each task samples q*(a)~N(0,1), rewards follow N(q*(a),1), and results average 1,000 steps over 2,000 tasks."
    },
    {
      "time": "55:59–1:03:59",
      "title": "Greedy and epsilon-greedy results",
      "note": "Average reward and percent-optimal-action plots compare epsilon=0, 0.01, and 0.1."
    },
    {
      "time": "1:03:59–1:18:01",
      "title": "Exercise 1: four-armed reconstruction",
      "note": "The class updates Q after five rewards and identifies steps 4 and 5 as definitely selected by the random branch."
    }
  ],
  "summary": [
    {
      "title": "1. True values create a benchmark, not an observable answer key",
      "sourceRefs": [
        "1:12–16:59",
        "Bandit recap and exploration slides"
      ],
      "paragraphs": [
        "In a stationary k-armed bandit, q*(a)=E[R_t|A_t=a] is the unknown mean reward of action a. The optimal value V*=max_a q*(a) is the expected payoff of an optimal arm. The learner cannot read these quantities directly; it sees only the reward of the action it actually selected.",
        "Current estimates Q_t(a) therefore serve two roles: they rank actions for exploitation and summarize the evidence gathered by exploration. A greedy action belongs to argmax_a Q_t(a); selecting outside that set is unambiguously exploratory, although a random exploration draw can still land on a greedy action."
      ],
      "formula": "q*(a)=E[R_t | A_t=a] · V*=max_a q*(a) · A*_t∈argmax_a Q_t(a)"
    },
    {
      "title": "2. Regret measures opportunity loss",
      "sourceRefs": [
        "16:59–30:59",
        "Regret slide and annotated payoff graph"
      ],
      "paragraphs": [
        "Instantaneous expected regret is the gap between the optimal arm's mean and the mean of the selected arm. It can be positive even when the observed reward is positive: regret compares a choice with the reward opportunity that was available, not with zero.",
        "Cumulative regret sums these missed opportunities. Against a fixed optimal-arm benchmark in a stationary bandit, expected optimal reward over T steps is a constant, so maximizing expected cumulative reward is equivalent to minimizing expected cumulative regret."
      ],
      "formula": "l_t=V*−q*(A_t) · L_T=E[sum_{t=1}^T l_t]"
    },
    {
      "title": "3. Gaps and counts expose where regret comes from",
      "sourceRefs": [
        "30:59–34:59",
        "Second Regret slide"
      ],
      "paragraphs": [
        "Define the suboptimality gap Delta_a=V*−q*(a) and let N_T(a) count how often action a is selected. Then total expected regret decomposes into E[N_T(a)]Delta_a summed over arms. A large-gap arm is expensive every time it is pulled; a near-optimal arm is cheaper to investigate.",
        "The difficulty is circular: the algorithm should stop sampling bad arms quickly, but the gaps are initially unknown. Exploration is therefore an information-allocation problem—collect enough evidence to distinguish arms without paying for unnecessary samples forever."
      ],
      "formula": "Delta_a=V*−q*(a) · L_T=sum_a E[N_T(a)]Delta_a"
    },
    {
      "title": "4. Both exploration extremes can fail linearly",
      "sourceRefs": [
        "34:59–39:57",
        "Total-regret comparison graph"
      ],
      "paragraphs": [
        "A policy that never explores may commit to an arm made attractive by early noise and then receive a constant reward shortfall. A policy that explores forever at a fixed positive rate keeps selecting known suboptimal arms with constant probability. Either mechanism can accumulate regret proportional to time.",
        "The lecture's decaying-epsilon curve represents the desired idea: reduce random exploration as confidence grows. This can avoid permanent exploration cost, but a schedule that decays too quickly can still freeze an incorrect ranking; the rate must preserve enough learning."
      ]
    },
    {
      "title": "5. Sample averages learn stationary action values",
      "sourceRefs": [
        "41:10–50:59",
        "Methods and Action-Value Methods slides"
      ],
      "paragraphs": [
        "For action a, Q_t(a) averages only rewards from earlier times when a was selected. Indicator notation makes this filtering explicit. When N_t(a)=0, the ratio is undefined, so an implementation must initialize the estimate and count deliberately rather than divide by zero.",
        "In a stationary bandit, if action a is sampled infinitely often, its sample average converges toward q*(a). The equivalent incremental update Q_n=Q_{n-1}+(1/n)(R_n−Q_{n-1}) stores only the current estimate and count; this update is an added derivation from the displayed sample-average formula, not a separately developed slide today."
      ],
      "formula": "Q_t(a)=sum_{i<t} R_i 1{A_i=a}/N_t(a) · Q_n=Q_{n-1}+(1/n)(R_n−Q_{n-1})"
    },
    {
      "title": "6. The testbed measures learning, not one lucky run",
      "sourceRefs": [
        "50:59–1:03:59",
        "10-armed Testbed and result plots"
      ],
      "paragraphs": [
        "Each independent task draws ten true action values from N(0,1). Pulling action a produces a noisy reward from N(q*(a),1). A method runs for 1,000 steps, and curves are averaged over 2,000 independent tasks so differences reflect repeatable learning behavior rather than one favorable bandit instance.",
        "Average reward shows the magnitude of achieved payoff, while percent optimal action shows how often the method identifies and chooses the best arm. Greedy epsilon=0 can improve quickly and then stall after misleading samples. Epsilon=0.1 learns faster than 0.01 early in the plotted horizon, while smaller continuing exploration pays less random-action cost later."
      ],
      "formula": "q*(a)~N(0,1) · R_t|A_t=a~N(q*(a),1) · 10 arms × 1,000 steps × 2,000 tasks"
    },
    {
      "title": "7. The worked exercise separates definite from possible exploration",
      "sourceRefs": [
        "1:03:59–1:18:01",
        "Exercise 1 and whiteboard solution"
      ],
      "paragraphs": [
        "Starting from Q_1=(0,0,0,0), the sequence is (1,−1),(2,1),(2,−2),(2,2),(3,0). Before each choice the class recomputes the greedy set: Q_2=(−1,0,0,0), Q_3=(−1,1,0,0), Q_4=(−1,−0.5,0,0), and Q_5=(−1,1/3,0,0).",
        "At steps 4 and 5 the selected action lies outside the current greedy set, so the random epsilon branch definitely occurred. At steps 1–3 the selected action is greedy, but it could still have been produced by the random branch. Therefore randomness definitely occurred at 4 and 5 and might have occurred at every step."
      ],
      "formula": "Q_1=(0,0,0,0) → Q_2=(−1,0,0,0) → Q_3=(−1,1,0,0) → Q_4=(−1,−0.5,0,0) → Q_5=(−1,1/3,0,0)"
    }
  ],
  "courseSignals": {
    "assignments": [],
    "homework": [],
    "labs": [],
    "projects": [],
    "references": [],
    "studentQuestions": []
  },
  "keyTerms": [
    {
      "term": "True action value q*(a)",
      "definition": "Expected reward from action a under its stationary reward distribution."
    },
    {
      "term": "Estimate Q_t(a)",
      "definition": "The learner's evidence-based approximation of q*(a) before decision t."
    },
    {
      "term": "Optimal value V*",
      "definition": "The greatest true mean reward across available actions."
    },
    {
      "term": "Instantaneous regret",
      "definition": "Expected reward gap between the optimal arm and the arm chosen now."
    },
    {
      "term": "Cumulative regret",
      "definition": "Sum of instantaneous regret across a decision horizon."
    },
    {
      "term": "Suboptimality gap Delta_a",
      "definition": "V*−q*(a), the expected cost of choosing action a once."
    },
    {
      "term": "Selection count N_t(a)",
      "definition": "Number of times action a was selected before the horizon or decision index."
    },
    {
      "term": "Greedy action",
      "definition": "Any action tied for the largest current estimate Q_t."
    },
    {
      "term": "Epsilon-greedy",
      "definition": "A policy that usually acts greedily and selects a random action with probability epsilon."
    },
    {
      "term": "Sample-average estimate",
      "definition": "Mean of rewards observed from one action."
    },
    {
      "term": "10-armed testbed",
      "definition": "A replicated stochastic benchmark for comparing bandit action-selection methods."
    }
  ],
  "insights": [
    {
      "label": "Notation",
      "title": "Keep truth and estimate separate",
      "body": "The regret slide sometimes writes Q(a) where the derivation needs the true mean. In code and analysis, reserve q*(a) for truth and Q_t(a) for the learned estimate to prevent a silent benchmark error."
    },
    {
      "label": "Asymptotics",
      "title": "Fixed epsilon pays forever",
      "body": "With fixed epsilon>0 and uniform random exploration, known suboptimal arms retain nonzero selection probability. That is useful for finite-horizon learning but normally produces linear asymptotic regret in a stationary problem."
    },
    {
      "label": "Evaluation",
      "title": "Publish both reward and identification metrics",
      "body": "Percent-optimal action treats every mistake alike, while average reward weights mistakes by their payoff gap and noise. Use both, plus uncertainty intervals, before claiming one policy is better."
    },
    {
      "label": "Implementation",
      "title": "Random tie-breaking is part of the algorithm",
      "body": "Always choosing the first argmax action introduces an array-order bias, especially when all Q values start equal. Randomly choose among maximizers and seed the generator for reproducible experiments."
    },
    {
      "label": "Production",
      "title": "Stationarity must be monitored",
      "body": "The sample average gives old and recent rewards equal influence. If reward distributions drift, use recency weighting or a sliding window and monitor changes in reward and action-frequency behavior."
    }
  ],
  "resources": [
    {
      "type": "Book",
      "title": "Reinforcement Learning: An Introduction, second edition",
      "creator": "Richard S. Sutton & Andrew G. Barto",
      "why": "Chapter 2 is the primary treatment of the testbed, epsilon-greedy methods, and the worked exercise.",
      "url": "https://incompleteideas.net/book/RLbook2020.pdf"
    },
    {
      "type": "Paper",
      "title": "Finite-time Analysis of the Multiarmed Bandit Problem",
      "creator": "Auer, Cesa-Bianchi & Fischer",
      "why": "Develops finite-time logarithmic-regret analysis and UCB, extending today's regret motivation.",
      "url": "https://link.springer.com/article/10.1023/A:1013689704352"
    },
    {
      "type": "Book",
      "title": "Bandit Algorithms",
      "creator": "Tor Lattimore & Csaba Szepesvari",
      "why": "A rigorous open text on regret, concentration, stochastic bandits, and contextual extensions.",
      "url": "https://tor-lattimore.com/downloads/book/book.pdf"
    },
    {
      "type": "Watch",
      "title": "Reinforcement Learning 2: Exploration and Exploitation",
      "creator": "Google DeepMind",
      "why": "A university lecture that connects epsilon-greedy exploration with stronger confidence-based methods.",
      "url": "https://www.youtube.com/watch?v=eM6IBYVqXEA"
    },
    {
      "type": "Code",
      "title": "Reinforcement Learning: An Introduction — runnable figures",
      "creator": "Shangtong Zhang",
      "why": "Reproduce and modify the textbook's bandit experiments instead of reading the curves passively.",
      "url": "https://github.com/ShangtongZhang/reinforcement-learning-an-introduction"
    }
  ],
  "quiz": [
    {
      "question": "What does instantaneous regret measure at time t?",
      "options": [
        "The expected gap between the optimal arm and the chosen arm",
        "The chosen arm's variance",
        "The number of untried arms",
        "Total reward collected so far"
      ],
      "answer": 0,
      "explanation": "It is the one-step opportunity cost V*−q*(A_t).",
      "optionNotes": [
        "Correct: it compares the available optimum with this choice.",
        "Variance measures spread, not opportunity loss.",
        "Untried-arm count may guide exploration but is not regret.",
        "That is accumulated payoff, not a one-step gap."
      ]
    },
    {
      "question": "How is cumulative regret over T steps formed?",
      "options": [
        "By summing instantaneous regrets",
        "By averaging arm variances",
        "By counting only successful pulls",
        "By subtracting epsilon from reward"
      ],
      "answer": 0,
      "explanation": "Cumulative regret adds the opportunity gap at every decision.",
      "optionNotes": [
        "Correct: L_T aggregates l_t over the horizon.",
        "Variance is not regret's additive unit.",
        "Failures and successes can both incur regret.",
        "Epsilon is a policy probability, not a reward deduction."
      ]
    },
    {
      "question": "Why is maximizing expected reward equivalent to minimizing regret here?",
      "options": [
        "The optimal-arm benchmark over T steps is fixed",
        "Every reward is positive",
        "All arms have equal means",
        "Regret ignores selected actions"
      ],
      "answer": 0,
      "explanation": "Expected regret is a fixed optimal benchmark minus expected collected reward.",
      "optionNotes": [
        "Correct: optimizing either side optimizes the other.",
        "Rewards may be negative.",
        "Different means create the problem.",
        "Regret depends directly on chosen actions."
      ]
    },
    {
      "question": "What is Delta_a?",
      "options": [
        "V*−q*(a)",
        "Q_t(a)−R_t",
        "The variance of arm a",
        "The exploration probability"
      ],
      "answer": 0,
      "explanation": "Delta_a is the suboptimality gap of arm a.",
      "optionNotes": [
        "Correct: it is the expected cost per pull of a.",
        "That is a sample prediction error with reversed sign.",
        "Reward spread is a separate quantity.",
        "Exploration probability is epsilon."
      ]
    },
    {
      "question": "What does N_T(a) count?",
      "options": [
        "Selections of action a before horizon T",
        "All possible actions",
        "Only optimal rewards",
        "Changes in q*(a)"
      ],
      "answer": 0,
      "explanation": "N_T(a) is the pull count for a.",
      "optionNotes": [
        "Correct: it converts per-pull gap into accumulated contribution.",
        "That count is k, not N_T(a).",
        "Every selection counts regardless of reward.",
        "The lecture assumes stationary q*."
      ]
    },
    {
      "question": "Which expression decomposes expected cumulative regret?",
      "options": [
        "sum_a E[N_T(a)]Delta_a",
        "sum_a Q_T(a)",
        "epsilon/T",
        "max_a N_T(a)"
      ],
      "answer": 0,
      "explanation": "Each arm contributes expected pull count times its gap.",
      "optionNotes": [
        "Correct: this is the gap–count decomposition.",
        "Estimates alone do not encode incurred regret.",
        "That is not the regret identity.",
        "Regret depends on every suboptimal arm, not only one count."
      ]
    },
    {
      "question": "What should a good algorithm do with a large-gap arm?",
      "options": [
        "Select it only enough to identify it as poor",
        "Select it forever",
        "Assign it the largest Q without evidence",
        "Remove all reward noise"
      ],
      "answer": 0,
      "explanation": "Large gaps make repeated mistakes expensive, so their counts should remain small after identification.",
      "optionNotes": [
        "Correct: learn enough, then avoid needless cost.",
        "That produces continuing linear regret.",
        "Optimism is not arbitrary permanent ranking.",
        "The policy cannot remove environment noise."
      ]
    },
    {
      "question": "Why can never exploring produce linear regret?",
      "options": [
        "An early noisy estimate can lock in a suboptimal arm",
        "The optimal arm disappears",
        "Every greedy reward becomes zero",
        "N_T(a) cannot be counted"
      ],
      "answer": 0,
      "explanation": "Pure greed may never collect evidence that corrects an early ranking error.",
      "optionNotes": [
        "Correct: a persistent gap then accumulates each step.",
        "Arms remain available in the stationary setup.",
        "Greedy rewards are stochastic, not forced to zero.",
        "Counts remain definable."
      ]
    },
    {
      "question": "Why can fixed positive epsilon produce linear asymptotic regret?",
      "options": [
        "Suboptimal arms keep nonzero random-selection probability",
        "Q_t cannot be updated",
        "The number of arms grows",
        "Rewards stop being random"
      ],
      "answer": 0,
      "explanation": "A constant fraction of future decisions keeps paying known gaps.",
      "optionNotes": [
        "Correct: constant exploration creates constant per-step expected cost.",
        "Q_t updates normally.",
        "k is fixed in this problem.",
        "Reward randomness is unrelated to this conclusion."
      ]
    },
    {
      "question": "What is the purpose of decaying epsilon?",
      "options": [
        "Reduce random exploration as evidence grows",
        "Increase every reward",
        "Make q*(a) observable",
        "Guarantee zero finite-time regret"
      ],
      "answer": 0,
      "explanation": "Decay aims to preserve early learning while lowering long-run exploration cost.",
      "optionNotes": [
        "Correct: exploration adapts over time.",
        "Policy cannot change generated rewards.",
        "True values remain latent.",
        "Learning still incurs some finite-time regret."
      ]
    },
    {
      "question": "What action does a greedy policy select?",
      "options": [
        "Any action in argmax_a Q_t(a)",
        "The least sampled action only",
        "A uniformly random action always",
        "The action with highest variance"
      ],
      "answer": 0,
      "explanation": "Greedy selection maximizes the current estimate.",
      "optionNotes": [
        "Correct: ties may produce multiple greedy actions.",
        "That is an exploration heuristic.",
        "That is pure random behavior.",
        "Variance is not the greedy criterion."
      ]
    },
    {
      "question": "Under epsilon-greedy, what happens with probability epsilon?",
      "options": [
        "An action is selected uniformly at random",
        "Learning stops",
        "The reward is discarded",
        "The best true arm is revealed"
      ],
      "answer": 0,
      "explanation": "Epsilon controls the random exploration branch.",
      "optionNotes": [
        "Correct under the convention used in the lecture.",
        "Estimates continue to learn.",
        "Exploratory rewards also update estimates.",
        "The environment does not reveal q*."
      ]
    },
    {
      "question": "What data enters Q_t(a)'s sample average?",
      "options": [
        "Rewards from times when action a was selected",
        "Rewards from every arm",
        "Only the largest reward",
        "Unobserved counterfactual rewards"
      ],
      "answer": 0,
      "explanation": "Bandit feedback reveals only the chosen arm's reward.",
      "optionNotes": [
        "Correct: the indicator 1{A_i=a} filters observations.",
        "Other-arm rewards are not observed on that step.",
        "A mean uses all observed rewards for a.",
        "Counterfactual rewards are unavailable."
      ]
    },
    {
      "question": "Why must N_t(a)=0 be handled explicitly?",
      "options": [
        "The sample-average ratio would divide by zero",
        "The arm becomes optimal",
        "Epsilon becomes one",
        "Reward variance vanishes"
      ],
      "answer": 0,
      "explanation": "An untried arm has no empirical mean yet.",
      "optionNotes": [
        "Correct: initialize its estimate/count deliberately.",
        "Untried does not imply optimal.",
        "Epsilon is independently chosen.",
        "Its reward distribution has not changed."
      ]
    },
    {
      "question": "When does the ordinary sample average converge toward q*(a)?",
      "options": [
        "When the stationary arm is sampled infinitely often",
        "After exactly one reward",
        "Only when epsilon is zero",
        "Only for deterministic rewards"
      ],
      "answer": 0,
      "explanation": "Repeated stationary samples support the law-of-large-numbers convergence.",
      "optionNotes": [
        "Correct: both stationarity and continuing samples matter.",
        "One noisy sample is generally insufficient.",
        "Zero epsilon can prevent infinite sampling.",
        "Stochastic rewards can also converge in mean."
      ]
    },
    {
      "question": "Which incremental rule exactly maintains a sample mean after reward R_n?",
      "options": [
        "Q_n=Q_{n-1}+(1/n)(R_n−Q_{n-1})",
        "Q_n=R_n",
        "Q_n=Q_{n-1}+R_n",
        "Q_n=max(Q_{n-1},R_n)"
      ],
      "answer": 0,
      "explanation": "The 1/n step size converts the previous mean into the new mean.",
      "optionNotes": [
        "Correct: it is algebraically equivalent to averaging all n samples.",
        "This forgets all earlier samples.",
        "This stores a sum, not a mean.",
        "This stores a maximum, not an expectation estimate."
      ]
    },
    {
      "question": "Which estimate is updated after pulling action A_t?",
      "options": [
        "Q(A_t) only",
        "Every arm's Q",
        "Only V*",
        "No estimate"
      ],
      "answer": 0,
      "explanation": "Only the selected action produces a reward observation.",
      "optionNotes": [
        "Correct: bandit feedback is partial.",
        "Unselected arms produce no observed rewards.",
        "V* is unknown and not directly updated.",
        "The selected action's evidence must be incorporated."
      ]
    },
    {
      "question": "In the testbed, how are true action values generated?",
      "options": [
        "Independently from N(0,1)",
        "All fixed at zero",
        "From the previous reward",
        "By the policy"
      ],
      "answer": 0,
      "explanation": "Each task samples its ten q*(a) values from a standard normal distribution.",
      "optionNotes": [
        "Correct: this creates a fresh bandit instance.",
        "Zero is the distribution mean, not every draw.",
        "Rewards are sampled around the fixed true value.",
        "The environment generates true values."
      ]
    },
    {
      "question": "What is the reward model after selecting action a in the testbed?",
      "options": [
        "N(q*(a),1)",
        "N(0,0)",
        "Always q*(a) exactly",
        "Uniform over the arm labels"
      ],
      "answer": 0,
      "explanation": "Reward noise has mean q*(a) and variance one.",
      "optionNotes": [
        "Correct: the observed reward fluctuates around the arm mean.",
        "That is a deterministic zero reward.",
        "Unit variance makes observations noisy.",
        "Labels do not define reward values."
      ]
    },
    {
      "question": "Why average results over 2,000 independent tasks?",
      "options": [
        "To reduce dependence on one lucky bandit instance",
        "To reveal every q*(a)",
        "To eliminate exploration",
        "To make rewards deterministic"
      ],
      "answer": 0,
      "explanation": "Replication estimates typical learning performance across problem draws.",
      "optionNotes": [
        "Correct: curves become estimates of expected behavior.",
        "True values remain internal to each simulation.",
        "Policies still explore.",
        "Averaging reduces noise but does not change the reward process."
      ]
    },
    {
      "question": "What does percent optimal action measure?",
      "options": [
        "The fraction of runs selecting a true best arm at each step",
        "The average reward magnitude",
        "The value of epsilon",
        "The number of reward samples stored"
      ],
      "answer": 0,
      "explanation": "It is an identification/selection-frequency metric for the optimal arm.",
      "optionNotes": [
        "Correct: it asks whether the selected arm is truly optimal.",
        "Average reward is plotted separately.",
        "Multiple epsilon values are compared.",
        "Storage is unrelated to this percentage."
      ]
    },
    {
      "question": "Why inspect both average reward and percent optimal action?",
      "options": [
        "They measure payoff magnitude and best-arm selection differently",
        "They are always identical",
        "One removes all randomness",
        "Both reveal unobserved rewards"
      ],
      "answer": 0,
      "explanation": "A wrong near-optimal choice and a wrong poor choice count equally in one metric but not in reward.",
      "optionNotes": [
        "Correct: the metrics answer complementary questions.",
        "Their curves can behave differently.",
        "Both remain statistical estimates.",
        "Counterfactual rewards remain unseen."
      ]
    },
    {
      "question": "In Exercise 1, what is Q_4 after rewards −1, 1, and −2?",
      "options": [
        "(−1,−0.5,0,0)",
        "(−1,1,0,0)",
        "(0,0,0,0)",
        "(−1,−1,−2,0)"
      ],
      "answer": 0,
      "explanation": "Action 2's two rewards average to (1−2)/2=−0.5; action 1 remains −1.",
      "optionNotes": [
        "Correct: only selected arms have changed estimates.",
        "That is Q_3 before the −2 update.",
        "Initial values no longer apply to arms 1 and 2.",
        "Rewards must be averaged per arm, not copied into positions."
      ]
    },
    {
      "question": "At which exercise steps did the random branch definitely occur?",
      "options": [
        "Steps 4 and 5",
        "Steps 1 and 2",
        "Step 3 only",
        "No step"
      ],
      "answer": 0,
      "explanation": "At both steps the selected action lay outside the current greedy set.",
      "optionNotes": [
        "Correct: action 2 at step 4 and action 3 at step 5 were nongreedy.",
        "Those selected actions were in tied greedy sets.",
        "Action 2 was uniquely greedy at step 3.",
        "Two choices prove exploration occurred."
      ]
    },
    {
      "question": "Why might the random branch also have occurred at steps 1–3?",
      "options": [
        "Random exploration can select an action that is also greedy",
        "Their rewards were all zero",
        "Q values were unavailable",
        "Epsilon was negative"
      ],
      "answer": 0,
      "explanation": "Observing a greedy action does not identify which policy branch produced it.",
      "optionNotes": [
        "Correct: action identity alone cannot distinguish the branches.",
        "The rewards were −1, 1, and −2.",
        "Q values were reconstructed at every step.",
        "Epsilon is a probability between zero and one."
      ]
    }
  ]
}
};
