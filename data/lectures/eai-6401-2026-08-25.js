// English-only publication unit.
export const eai6401Lecture20260825 = {
  en: {
  "title": "Incremental bandits, nonstationary tracking, and optimistic exploration",
  "lede": "The lecture converts sample-average action values into an O(1) update, assembles the epsilon-greedy bandit loop, then replaces stationary averaging with recency weighting before using optimistic initial values to induce exploration.",
  "instructionalInterval": "0:00–1:11:13",
  "reviewLevel": "Recording, timestamped transcript, and slide-frame verified",
  "coverage": [
    {
      "title": "Incremental sample averages",
      "body": "The ordinary mean is rewritten as a constant-memory, constant-computation update using only the previous estimate, the new reward, and an action-specific count."
    },
    {
      "title": "The complete bandit loop",
      "body": "The lecture assembles initialization, epsilon-greedy selection, reward observation, count maintenance, and action-value updating into one executable algorithm."
    },
    {
      "title": "Stationary versus nonstationary rewards",
      "body": "A fixed reward distribution supports sample averaging; a changing distribution demands estimates that can forget stale evidence."
    },
    {
      "title": "Exponential recency weighting",
      "body": "A constant step size turns the update into a geometrically weighted average in which recent rewards have larger coefficients."
    },
    {
      "title": "Convergence conditions",
      "body": "The two stochastic-approximation conditions explain why 1/n converges in stationary settings and why a constant alpha trades convergence for tracking ability."
    },
    {
      "title": "Optimistic initial values",
      "body": "High initial estimates make greedy selection explore untried actions, but the amount of optimism must match the reward scale and action space."
    }
  ],
  "takeaway": "Use action-specific incremental updates for efficiency, shrinking step sizes for stationary convergence, constant step sizes for drift, and optimism only when its reward-scale assumptions are defensible.",
  "slideTrail": [
    {
      "time": "0:00–2:59",
      "title": "Incremental Implementation",
      "note": "The slide states the sample-average estimate and introduces Q_{n+1}=Q_n+(1/n)(R_n−Q_n) as the standard learning-rule form."
    },
    {
      "time": "3:00–8:59",
      "title": "Derivation of the incremental mean",
      "note": "The whiteboard algebra separates R_n from the first n−1 rewards and recovers the previous estimate Q_n."
    },
    {
      "time": "9:00–13:29",
      "title": "Bandit algorithm",
      "note": "Pseudocode initializes Q(a) and N(a), selects by epsilon-greedy, observes R, increments N(A), and updates only Q(A)."
    },
    {
      "time": "13:29–21:14",
      "title": "Worked algorithm questions",
      "note": "Student questions prompt a numerical walk-through of action-specific counts, rewards, zero initialization, exploration, exploitation, and large-horizon convergence."
    },
    {
      "time": "21:15–24:00",
      "title": "Why it is called a bandit",
      "note": "The single-state, multiple-action problem is connected to choosing among slot-machine levers with unknown reward distributions."
    },
    {
      "time": "24:00–30:59",
      "title": "Stationary and nonstationary environments",
      "note": "The distinction is distributional, not deterministic: rewards may vary in both cases, but only the nonstationary distribution changes over time."
    },
    {
      "time": "31:00–44:59",
      "title": "Tracking a Nonstationary Problem",
      "note": "The constant-alpha update is expanded into an exponential recency-weighted average, explaining why current evidence matters more than old evidence."
    },
    {
      "time": "45:00–51:29",
      "title": "Geometric-weight derivation",
      "note": "For n=3 the reward weights become alpha(1−alpha)^2, alpha(1−alpha), and alpha, while the initial estimate retains weight (1−alpha)^n."
    },
    {
      "time": "51:30–55:59",
      "title": "Standard stochastic-approximation convergence conditions",
      "note": "The slide contrasts sum alpha_n=infinity and sum alpha_n^2<infinity, showing that 1/n satisfies both while a fixed alpha does not satisfy the second."
    },
    {
      "time": "56:00–1:08:59",
      "title": "Optimistic Initial Values",
      "note": "A 10-armed testbed plot compares greedy optimistic initialization with epsilon-greedy zero initialization and explains the early exploration transient."
    },
    {
      "time": "1:09:00–1:11:13",
      "title": "Closing Q&A and next topic",
      "note": "The class distinguishes imposed epsilon exploration from exploration induced by optimism, previews UCB, and notes that pending PPT slides will be uploaded."
    }
  ],
  "summary": [
    {
      "title": "1. The sample mean can be updated in O(1)",
      "sourceRefs": [
        "0:00–8:59",
        "Incremental Implementation and Derivation slides"
      ],
      "paragraphs": [
        "Recomputing an action's mean from every stored reward makes work and storage grow with experience. If action a has been selected n−1 times, its next estimate can be formed from the previous mean Q_n(a) and the new reward R_n alone. The lecture derives this by separating R_n from the first n−1 rewards and substituting their mean.",
        "The correction R_n−Q_n is a prediction error and 1/n is the step size. The update therefore has the reusable learning-rule shape new estimate = old estimate + step size × error. Crucially, n is the count for this action, not the global decision time; using a global count would under-update rarely selected actions."
      ],
      "formula": "Q_{n+1}(a)=Q_n(a)+(1/n)[R_n−Q_n(a)]"
    },
    {
      "title": "2. A bandit algorithm is a disciplined update sequence",
      "sourceRefs": [
        "9:00–21:14",
        "Bandit algorithm slide and worked Q&A"
      ],
      "paragraphs": [
        "Initialize Q(a) and N(a) for every action. At each step, select a current maximizer with probability 1−epsilon and a random action with probability epsilon, observe only that action's reward, increment N(A), and update only Q(A). This order prevents the current reward from being divided by the wrong count.",
        "Zero initialization does not mean every early choice is exploratory. Initially all actions tie as greedy; random tie-breaking chooses one. After evidence separates estimates, exploitation selects a maximizer while the epsilon branch continues to sample alternatives. The method scales to long horizons because each step uses constant work, although statistical behavior depends on the step-size schedule."
      ],
      "formula": "A_t = argmax_a Q_t(a) with probability 1−epsilon; otherwise sample an action randomly"
    },
    {
      "title": "3. Stationarity concerns the reward distribution",
      "sourceRefs": [
        "21:15–30:59",
        "Bandit explanation and stationary/nonstationary discussion"
      ],
      "paragraphs": [
        "A stationary action can still produce different rewards on different pulls. What remains fixed is its probability distribution—and therefore its true expected value. In a nonstationary problem, that distribution or expected value drifts, so a reward observed long ago may describe a different environment.",
        "The class rejected card dealing as an automatic example of nonstationarity because a fixed deck and fixed dealing rule can preserve probabilities. Train-ticket confirmation across festive and ordinary periods was accepted: demand changes the relevant outcome probabilities with time. The diagnostic question is not 'did the reward change?' but 'did the reward-generating distribution change?'."
      ]
    },
    {
      "title": "4. Constant alpha creates exponential recency weighting",
      "sourceRefs": [
        "31:00–51:29",
        "Tracking a Nonstationary Problem and Derivation slides"
      ],
      "paragraphs": [
        "Replacing 1/n by a constant 0<alpha<=1 gives Q_{n+1}=Q_n+alpha(R_n−Q_n). Repeated substitution reveals a geometric weighted sum: the newest reward has coefficient alpha, the preceding reward alpha(1−alpha), and older evidence receives progressively smaller powers of 1−alpha.",
        "The initial estimate does not disappear instantly; after n updates it retains weight (1−alpha)^n. A larger alpha adapts faster but is noisier and has a shorter effective memory; a smaller alpha smooths more but reacts slowly to drift. As a practical approximation, the effective memory scale is on the order of 1/alpha recent observations."
      ],
      "formula": "Q_{n+1}=(1−alpha)^n Q_1 + sum_{i=1}^{n} alpha(1−alpha)^{n−i}R_i"
    },
    {
      "title": "5. Convergence and tracking require different step-size behavior",
      "sourceRefs": [
        "51:30–55:59",
        "Stochastic-approximation convergence slide"
      ],
      "paragraphs": [
        "For noisy stationary estimation, a classical sufficient pattern is that the step sizes keep accumulating—sum alpha_n diverges—while their squared sum stays finite. The first condition prevents learning from stopping too soon; the second suppresses persistent variance from noise. The sample-average schedule alpha_n=1/n satisfies both.",
        "A fixed positive alpha satisfies the first condition but not the second, so it normally does not converge to a single noise-free estimate in a stationary stochastic problem. That apparent weakness is useful under drift: never shrinking the step size to zero lets the estimator keep adapting. Choose the schedule according to whether the deployment goal is stationary convergence or nonstationary tracking."
      ],
      "formula": "sum_n alpha_n = infinity and sum_n alpha_n^2 < infinity; alpha_n=1/n satisfies both"
    },
    {
      "title": "6. Optimism induces exploration without random actions",
      "sourceRefs": [
        "56:00–1:08:59",
        "Optimistic Initial Values slide and testbed plot"
      ],
      "paragraphs": [
        "If every action starts at an estimate above plausible rewards, pulling one action usually lowers its estimate while untried actions remain attractive. A greedy policy therefore rotates through alternatives even with epsilon=0. The 10-armed testbed plot shows this optimistic greedy method finding optimal actions more often than a purely greedy zero-initialized baseline.",
        "Optimism is not the same as epsilon-greedy exploration. It is transient and state-of-knowledge driven: once estimates lose their initial optimism, no permanent random mechanism remains. It can also waste samples when the optimistic level is absurdly high or the action set contains many clearly irrelevant actions. The initial value must be chosen relative to the reward scale."
      ]
    },
    {
      "title": "7. The closing Q&A separates two kinds of exploration",
      "sourceRefs": [
        "1:09:00–1:11:13",
        "Closing Q&A"
      ],
      "paragraphs": [
        "A student asks which plotted curve is exploring. The epsilon-greedy curve has exploration imposed explicitly by its random branch. The optimistic greedy curve also explores, but indirectly because untried actions retain high estimates. Both can visit alternatives, yet their mechanisms and long-run behavior differ.",
        "The instructor postpones Upper Confidence Bound (UCB) action selection because it needs another 20–25 minutes and previews it for the next lecture. The session closes with a note that pending PPT slides would be uploaded; this is a resource announcement, not a graded task."
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
        "time": "1:10:38",
        "title": "Pending PPT slides",
        "detail": "The instructor said the pending slides for the lectures would be uploaded that day. No submission or reading deadline was assigned."
      }
    ],
    "studentQuestions": [
      {
        "time": "13:36",
        "question": "Can the bandit algorithm be shown with a numerical example?",
        "response": "The instructor walked through actions A1/A2, their individual counts, observed rewards, and how only the chosen action's estimate changes."
      },
      {
        "time": "18:03",
        "question": "With all initial values zero, how are exploration and exploitation distinguished?",
        "response": "Initially actions tie; selection and reward updates break the tie. Later greedy choices exploit current estimates while the epsilon branch explores."
      },
      {
        "time": "19:27",
        "question": "Does the incremental algorithm work for very large horizons or datasets?",
        "response": "Each update has constant computation. Long-run convergence depends on step-size conditions, which the instructor develops later in the lecture."
      },
      {
        "time": "21:25",
        "question": "Why is the problem called a bandit?",
        "response": "It comes from slot-machine levers: one state offers multiple actions with unknown reward distributions, and the learner must discover which lever is best."
      },
      {
        "time": "24:37",
        "question": "Does stationary mean an action always returns the same reward?",
        "response": "No. Rewards may remain random; stationarity means their probability distribution stays fixed over time."
      },
      {
        "time": "26:23",
        "question": "Is card dealing a nonstationary example?",
        "response": "Not necessarily: a fixed deck and rule preserve probabilities. Changing train-ticket confirmation rates across festive and normal periods were accepted as a clearer nonstationary example."
      },
      {
        "time": "45:34",
        "question": "How should the exponential-weight equation be read?",
        "response": "For n=3, the instructor expands the weights as alpha(1−alpha)^2 for R1, alpha(1−alpha) for R2, and alpha for R3, so the latest reward has the largest coefficient."
      },
      {
        "time": "58:08",
        "question": "Can a locally good action harm future or final reward?",
        "response": "Yes in full sequential RL, where an action changes later states and rewards. The current bandit abstraction is simpler because it models repeated action choices without state transitions."
      },
      {
        "time": "1:07:43",
        "question": "Which curve in the plot is exploring?",
        "response": "The epsilon-greedy curve explores explicitly through its random branch; the optimistic greedy curve explores indirectly because untried actions retain high estimates."
      }
    ]
  },
  "keyTerms": [
    {
      "term": "Incremental update",
      "definition": "An update that uses the previous estimate and newest observation instead of recomputing from the full history."
    },
    {
      "term": "Step size alpha",
      "definition": "The fraction of the current prediction error applied to an estimate."
    },
    {
      "term": "Action-specific count N(a)",
      "definition": "The number of times action a has been selected; it determines the sample-average step size 1/N(a)."
    },
    {
      "term": "Stationary bandit",
      "definition": "A bandit whose reward distribution for each action does not change with time."
    },
    {
      "term": "Nonstationary bandit",
      "definition": "A bandit in which one or more action reward distributions drift over time."
    },
    {
      "term": "Exponential recency-weighted average",
      "definition": "A weighted estimate whose older observations receive geometrically decreasing influence."
    },
    {
      "term": "Effective memory",
      "definition": "The approximate recent-history scale that materially influences a recency-weighted estimate, roughly 1/alpha observations."
    },
    {
      "term": "Stochastic approximation",
      "definition": "Iterative estimation from noisy samples using a controlled sequence of step sizes."
    },
    {
      "term": "Optimistic initialization",
      "definition": "Starting action estimates above plausible values so untried actions remain attractive."
    },
    {
      "term": "Upper Confidence Bound (UCB)",
      "definition": "An action-selection family that adds an uncertainty bonus to current value estimates; previewed for the next lecture."
    }
  ],
  "insights": [
    {
      "label": "Implementation",
      "title": "Use per-action counts",
      "body": "The 1/n step size belongs to the reward sequence for one action. Using the global time index makes rarely selected actions learn too slowly and silently changes the estimator."
    },
    {
      "label": "Modeling",
      "title": "Detect drift before choosing alpha",
      "body": "Constant alpha assumes old observations should decay. Monitor reward residuals and action frequencies; otherwise a stationary noisy problem may be mistaken for drift and made unnecessarily unstable."
    },
    {
      "label": "Tuning",
      "title": "Alpha controls a bias–variance–lag tradeoff",
      "body": "Large alpha tracks changes quickly but amplifies noise. Small alpha reduces variance but lags behind real change. Tune on simulated drift patterns that resemble deployment."
    },
    {
      "label": "Exploration",
      "title": "Optimism is a prior, not a permanent policy",
      "body": "Optimistic values generate early visits because uncertainty is encoded as high initial estimates. Once corrected, exploration can vanish; nonstationary deployments may still need an explicit exploration or uncertainty mechanism."
    },
    {
      "label": "Evaluation",
      "title": "Do not judge optimistic methods only by the early spike",
      "body": "Optimistic initialization often produces oscillatory early performance as actions are tried and estimates fall. Compare cumulative reward and optimal-action rate over multiple horizons, not only a visually dramatic transient."
    }
  ],
  "resources": [
    {
      "type": "Book",
      "title": "Reinforcement Learning: An Introduction, second edition",
      "creator": "Richard S. Sutton & Andrew G. Barto",
      "why": "Chapter 2 develops incremental updates, nonstationary bandits, convergence conditions, optimistic initialization, and UCB.",
      "url": "https://incompleteideas.net/book/RLbook2020.pdf"
    },
    {
      "type": "Watch",
      "title": "Reinforcement Learning 2: Exploration and Exploitation",
      "creator": "Google DeepMind",
      "why": "A university lecture connecting epsilon-greedy exploration, value estimates, and stronger uncertainty-aware action selection.",
      "url": "https://www.youtube.com/watch?v=eM6IBYVqXEA"
    },
    {
      "type": "Code",
      "title": "Reinforcement Learning: An Introduction — Chapter 2 implementations",
      "creator": "Shangtong Zhang",
      "why": "Reproduce the optimistic-initial-value and nonstationary-bandit figures, then vary alpha, epsilon, drift, and initialization.",
      "url": "https://github.com/ShangtongZhang/reinforcement-learning-an-introduction"
    },
    {
      "type": "Book",
      "title": "Bandit Algorithms",
      "creator": "Tor Lattimore & Csaba Szepesvari",
      "why": "A rigorous open reference for stochastic bandits, confidence methods, and regret analysis beyond the lecture's introductory treatment.",
      "url": "https://tor-lattimore.com/downloads/book/book.pdf"
    },
    {
      "type": "Interactive",
      "title": "Bandit Simulator",
      "creator": "Tor Lattimore",
      "why": "Compare reward and regret interactively across algorithms, arms, and horizons.",
      "url": "https://tor-lattimore.com/downloads/bandits/"
    }
  ],
  "quiz": [
    {
      "question": "What is the main computational benefit of the incremental sample-average update?",
      "options": [
        "It uses constant memory and work per update",
        "It removes reward noise",
        "It knows the true action value",
        "It updates every action"
      ],
      "answer": 0,
      "explanation": "The previous estimate, new reward, and count are sufficient.",
      "optionNotes": [
        "Correct: It uses constant memory and work per update matches the lecture evidence and definition.",
        "Incorrect: It removes reward noise describes a different quantity or contradicts the update.",
        "Incorrect: It knows the true action value describes a different quantity or contradicts the update.",
        "Incorrect: It updates every action describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "Which formula is the incremental sample mean after the nth reward?",
      "options": [
        "Q_{n+1}=Q_n+(1/n)(R_n−Q_n)",
        "Q_{n+1}=R_n",
        "Q_{n+1}=Q_n+R_n",
        "Q_{n+1}=max(Q_n,R_n)"
      ],
      "answer": 0,
      "explanation": "It is algebraically identical to the mean of all n rewards.",
      "optionNotes": [
        "Correct: Q_{n+1}=Q_n+(1/n)(R_n−Q_n) matches the lecture evidence and definition.",
        "Incorrect: Q_{n+1}=R_n describes a different quantity or contradicts the update.",
        "Incorrect: Q_{n+1}=Q_n+R_n describes a different quantity or contradicts the update.",
        "Incorrect: Q_{n+1}=max(Q_n,R_n) describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "In 1/n for Q(a), what does n count?",
      "options": [
        "Selections of action a",
        "All global time steps",
        "Number of actions",
        "Only positive rewards"
      ],
      "answer": 0,
      "explanation": "The sample mean is maintained separately for each action.",
      "optionNotes": [
        "Correct: Selections of action a matches the lecture evidence and definition.",
        "Incorrect: All global time steps describes a different quantity or contradicts the update.",
        "Incorrect: Number of actions describes a different quantity or contradicts the update.",
        "Incorrect: Only positive rewards describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "Under epsilon-greedy, what occurs with probability epsilon?",
      "options": [
        "A random action is selected",
        "The largest reward is guaranteed",
        "All Q values reset",
        "Learning stops"
      ],
      "answer": 0,
      "explanation": "The epsilon branch explicitly explores by random selection.",
      "optionNotes": [
        "Correct: A random action is selected matches the lecture evidence and definition.",
        "Incorrect: The largest reward is guaranteed describes a different quantity or contradicts the update.",
        "Incorrect: All Q values reset describes a different quantity or contradicts the update.",
        "Incorrect: Learning stops describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "After selecting A_t and observing R_t, which estimate is updated?",
      "options": [
        "Q(A_t) only",
        "Every Q(a)",
        "Only the best arm's Q",
        "No estimate"
      ],
      "answer": 0,
      "explanation": "Bandit feedback reveals only the selected action's reward.",
      "optionNotes": [
        "Correct: Q(A_t) only matches the lecture evidence and definition.",
        "Incorrect: Every Q(a) describes a different quantity or contradicts the update.",
        "Incorrect: Only the best arm's Q describes a different quantity or contradicts the update.",
        "Incorrect: No estimate describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "In the learning-rule analogy, what is R_n−Q_n?",
      "options": [
        "A prediction error",
        "The action count",
        "The exploration probability",
        "The true reward mean"
      ],
      "answer": 0,
      "explanation": "It is the difference between target reward and current estimate.",
      "optionNotes": [
        "Correct: A prediction error matches the lecture evidence and definition.",
        "Incorrect: The action count describes a different quantity or contradicts the update.",
        "Incorrect: The exploration probability describes a different quantity or contradicts the update.",
        "Incorrect: The true reward mean describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "What defines a stationary bandit action?",
      "options": [
        "Its reward distribution stays fixed",
        "Every reward is identical",
        "Its estimate never changes",
        "It is always optimal"
      ],
      "answer": 0,
      "explanation": "Stationarity is distributional; individual rewards can still vary.",
      "optionNotes": [
        "Correct: Its reward distribution stays fixed matches the lecture evidence and definition.",
        "Incorrect: Every reward is identical describes a different quantity or contradicts the update.",
        "Incorrect: Its estimate never changes describes a different quantity or contradicts the update.",
        "Incorrect: It is always optimal describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "Which class example best represented nonstationarity?",
      "options": [
        "Train-ticket confirmation changing across seasons",
        "A fixed fair coin",
        "A fixed deck dealt by the same rule",
        "A deterministic constant reward"
      ],
      "answer": 0,
      "explanation": "Demand changes the outcome distribution over time.",
      "optionNotes": [
        "Correct: Train-ticket confirmation changing across seasons matches the lecture evidence and definition.",
        "Incorrect: A fixed fair coin describes a different quantity or contradicts the update.",
        "Incorrect: A fixed deck dealt by the same rule describes a different quantity or contradicts the update.",
        "Incorrect: A deterministic constant reward describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "Why can ordinary sample averages be poor for nonstationary rewards?",
      "options": [
        "They give very old data lasting influence",
        "They use no rewards",
        "They require a model",
        "They always diverge"
      ],
      "answer": 0,
      "explanation": "Old samples may describe a reward distribution that no longer applies.",
      "optionNotes": [
        "Correct: They give very old data lasting influence matches the lecture evidence and definition.",
        "Incorrect: They use no rewards describes a different quantity or contradicts the update.",
        "Incorrect: They require a model describes a different quantity or contradicts the update.",
        "Incorrect: They always diverge describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "What is the constant-step-size update?",
      "options": [
        "Q_{n+1}=Q_n+alpha(R_n−Q_n)",
        "Q_{n+1}=R_n/n^2",
        "Q_{n+1}=Q_1",
        "Q_{n+1}=sum R_i"
      ],
      "answer": 0,
      "explanation": "A fixed alpha replaces the shrinking 1/n step size.",
      "optionNotes": [
        "Correct: Q_{n+1}=Q_n+alpha(R_n−Q_n) matches the lecture evidence and definition.",
        "Incorrect: Q_{n+1}=R_n/n^2 describes a different quantity or contradicts the update.",
        "Incorrect: Q_{n+1}=Q_1 describes a different quantity or contradicts the update.",
        "Incorrect: Q_{n+1}=sum R_i describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "In the expanded constant-alpha update, what is the newest reward's coefficient?",
      "options": [
        "alpha",
        "1−alpha",
        "alpha^n",
        "1/n"
      ],
      "answer": 0,
      "explanation": "The latest observation enters directly with weight alpha.",
      "optionNotes": [
        "Correct: alpha matches the lecture evidence and definition.",
        "Incorrect: 1−alpha describes a different quantity or contradicts the update.",
        "Incorrect: alpha^n describes a different quantity or contradicts the update.",
        "Incorrect: 1/n describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "How does the weight of older rewards change?",
      "options": [
        "It decays geometrically",
        "It grows linearly",
        "It is always zero",
        "It stays equal to the newest reward"
      ],
      "answer": 0,
      "explanation": "Each extra age step contributes another factor of 1−alpha.",
      "optionNotes": [
        "Correct: It decays geometrically matches the lecture evidence and definition.",
        "Incorrect: It grows linearly describes a different quantity or contradicts the update.",
        "Incorrect: It is always zero describes a different quantity or contradicts the update.",
        "Incorrect: It stays equal to the newest reward describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "After n constant-alpha updates, what weight remains on Q_1?",
      "options": [
        "(1−alpha)^n",
        "alpha n",
        "1/n",
        "Zero immediately"
      ],
      "answer": 0,
      "explanation": "Repeated substitution multiplies the initial estimate by 1−alpha each time.",
      "optionNotes": [
        "Correct: (1−alpha)^n matches the lecture evidence and definition.",
        "Incorrect: alpha n describes a different quantity or contradicts the update.",
        "Incorrect: 1/n describes a different quantity or contradicts the update.",
        "Incorrect: Zero immediately describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "What range did the lecture use for a constant alpha?",
      "options": [
        "0<alpha<=1",
        "alpha<0",
        "alpha>10",
        "Only alpha=0"
      ],
      "answer": 0,
      "explanation": "This keeps the update a convex-style blend of old estimate and new reward.",
      "optionNotes": [
        "Correct: 0<alpha<=1 matches the lecture evidence and definition.",
        "Incorrect: alpha<0 describes a different quantity or contradicts the update.",
        "Incorrect: alpha>10 describes a different quantity or contradicts the update.",
        "Incorrect: Only alpha=0 describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "What does sum alpha_n=infinity prevent?",
      "options": [
        "Learning from stopping too early",
        "All observation noise",
        "Every bad action",
        "Reward drift"
      ],
      "answer": 0,
      "explanation": "The total adjustment capacity remains unbounded.",
      "optionNotes": [
        "Correct: Learning from stopping too early matches the lecture evidence and definition.",
        "Incorrect: All observation noise describes a different quantity or contradicts the update.",
        "Incorrect: Every bad action describes a different quantity or contradicts the update.",
        "Incorrect: Reward drift describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "Why require sum alpha_n^2<infinity for stationary convergence?",
      "options": [
        "To control accumulated noise variance",
        "To force permanent exploration",
        "To increase action count",
        "To make rewards deterministic"
      ],
      "answer": 0,
      "explanation": "Squared step sizes must shrink enough for noise effects to settle.",
      "optionNotes": [
        "Correct: To control accumulated noise variance matches the lecture evidence and definition.",
        "Incorrect: To force permanent exploration describes a different quantity or contradicts the update.",
        "Incorrect: To increase action count describes a different quantity or contradicts the update.",
        "Incorrect: To make rewards deterministic describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "Which schedule satisfies both convergence conditions?",
      "options": [
        "alpha_n=1/n",
        "alpha_n=0.1 forever",
        "alpha_n=n",
        "alpha_n=0"
      ],
      "answer": 0,
      "explanation": "The harmonic sum diverges while the squared harmonic sum converges.",
      "optionNotes": [
        "Correct: alpha_n=1/n matches the lecture evidence and definition.",
        "Incorrect: alpha_n=0.1 forever describes a different quantity or contradicts the update.",
        "Incorrect: alpha_n=n describes a different quantity or contradicts the update.",
        "Incorrect: alpha_n=0 describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "Which convergence condition does fixed positive alpha violate?",
      "options": [
        "sum alpha_n^2<infinity",
        "sum alpha_n=infinity",
        "0<alpha<=1",
        "N(a)>=0"
      ],
      "answer": 0,
      "explanation": "Adding the same positive square forever diverges.",
      "optionNotes": [
        "Correct: sum alpha_n^2<infinity matches the lecture evidence and definition.",
        "Incorrect: sum alpha_n=infinity describes a different quantity or contradicts the update.",
        "Incorrect: 0<alpha<=1 describes a different quantity or contradicts the update.",
        "Incorrect: N(a)>=0 describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "Why is fixed alpha still useful?",
      "options": [
        "It keeps adapting to drift",
        "It guarantees exact stationary convergence",
        "It eliminates exploration",
        "It stores every reward"
      ],
      "answer": 0,
      "explanation": "Its nonvanishing step size provides continuing responsiveness.",
      "optionNotes": [
        "Correct: It keeps adapting to drift matches the lecture evidence and definition.",
        "Incorrect: It guarantees exact stationary convergence describes a different quantity or contradicts the update.",
        "Incorrect: It eliminates exploration describes a different quantity or contradicts the update.",
        "Incorrect: It stores every reward describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "What does a larger alpha generally do?",
      "options": [
        "Tracks faster but amplifies noise",
        "Tracks slower with less noise",
        "Removes initialization",
        "Makes all actions greedy"
      ],
      "answer": 0,
      "explanation": "More weight on the newest reward improves responsiveness at a variance cost.",
      "optionNotes": [
        "Correct: Tracks faster but amplifies noise matches the lecture evidence and definition.",
        "Incorrect: Tracks slower with less noise describes a different quantity or contradicts the update.",
        "Incorrect: Removes initialization describes a different quantity or contradicts the update.",
        "Incorrect: Makes all actions greedy describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "How do optimistic initial values encourage exploration?",
      "options": [
        "Untried actions retain high estimates",
        "They increase epsilon automatically",
        "They reveal true rewards",
        "They remove noise"
      ],
      "answer": 0,
      "explanation": "After a tried action's estimate falls, other optimistic actions look greedy.",
      "optionNotes": [
        "Correct: Untried actions retain high estimates matches the lecture evidence and definition.",
        "Incorrect: They increase epsilon automatically describes a different quantity or contradicts the update.",
        "Incorrect: They reveal true rewards describes a different quantity or contradicts the update.",
        "Incorrect: They remove noise describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "What is a risk of setting optimism far too high?",
      "options": [
        "Wasteful sampling of irrelevant actions",
        "No action is ever tried",
        "All rewards become zero",
        "The action set disappears"
      ],
      "answer": 0,
      "explanation": "Greedy selection may be forced to test many implausible alternatives.",
      "optionNotes": [
        "Correct: Wasteful sampling of irrelevant actions matches the lecture evidence and definition.",
        "Incorrect: No action is ever tried describes a different quantity or contradicts the update.",
        "Incorrect: All rewards become zero describes a different quantity or contradicts the update.",
        "Incorrect: The action set disappears describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "How does optimistic exploration differ from epsilon-greedy exploration?",
      "options": [
        "It is transient and estimate-driven",
        "It uses permanent uniform randomness",
        "It never explores",
        "It requires known true values"
      ],
      "answer": 0,
      "explanation": "Optimism fades as estimates are corrected; epsilon can keep random exploration active.",
      "optionNotes": [
        "Correct: It is transient and estimate-driven matches the lecture evidence and definition.",
        "Incorrect: It uses permanent uniform randomness describes a different quantity or contradicts the update.",
        "Incorrect: It never explores describes a different quantity or contradicts the update.",
        "Incorrect: It requires known true values describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "In the closing plot discussion, which method explores explicitly?",
      "options": [
        "Epsilon-greedy through its random branch",
        "Greedy optimistic only through epsilon",
        "Sample average with no action selection",
        "Neither method"
      ],
      "answer": 0,
      "explanation": "The instructor distinguishes imposed epsilon exploration from optimism-induced exploration.",
      "optionNotes": [
        "Correct: Epsilon-greedy through its random branch matches the lecture evidence and definition.",
        "Incorrect: Greedy optimistic only through epsilon describes a different quantity or contradicts the update.",
        "Incorrect: Sample average with no action selection describes a different quantity or contradicts the update.",
        "Incorrect: Neither method describes a different quantity or contradicts the update."
      ]
    },
    {
      "question": "Which topic was previewed for the next lecture?",
      "options": [
        "Upper Confidence Bound action selection",
        "Transformer attention",
        "Linear regression",
        "Policy gradients"
      ],
      "answer": 0,
      "explanation": "UCB was postponed because it needed another 20–25 minutes.",
      "optionNotes": [
        "Correct: Upper Confidence Bound action selection matches the lecture evidence and definition.",
        "Incorrect: Transformer attention describes a different quantity or contradicts the update.",
        "Incorrect: Linear regression describes a different quantity or contradicts the update.",
        "Incorrect: Policy gradients describes a different quantity or contradicts the update."
      ]
    }
  ]
}
};
