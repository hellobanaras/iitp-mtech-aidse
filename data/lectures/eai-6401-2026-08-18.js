// English-only publication unit.
export const eai6401Lecture20260818 = {
  en: {
  "title": "Learning from play: value updates, exploration, and k-armed bandits",
  "lede": "Starting from Tic-Tac-Toe, the lecture explains how reinforcement learning differs from exact search, dynamic programming, and evolutionary search; it then develops incremental value updates, the exploration–exploitation dilemma, and expected action values in a nonassociative bandit.",
  "instructionalInterval": "0:00–1:11:43 and 1:13:08–1:21:39",
  "reviewLevel": "Recording, timestamped transcript, and slide-frame verified",
  "coverage": [
    {
      "title": "Tic-Tac-Toe as an RL problem",
      "body": "States are board configurations, actions are legal moves, and experience assigns value to positions that tend to lead to wins or losses."
    },
    {
      "title": "Why not only classical search?",
      "body": "Minimax, dynamic programming, and evolutionary methods expose different assumptions about opponents, environment models, and how credit is assigned."
    },
    {
      "title": "Value backup",
      "body": "A later state provides a target for revising the value of the preceding state through an incremental temporal-difference-style update."
    },
    {
      "title": "Explore versus exploit",
      "body": "The agent must balance selecting its currently best action with trying alternatives that could reveal a better long-term choice."
    },
    {
      "title": "The k-armed bandit",
      "body": "A one-state problem isolates action selection: every arm has an unknown reward distribution and must be learned through interaction."
    },
    {
      "title": "Expected values in practice",
      "body": "Four reward distributions are converted into true action values, revealing that the highest mean can also carry substantial variance."
    }
  ],
  "takeaway": "Reinforcement learning improves decisions by using sampled consequences to update values, but learning the best choice requires deliberately gathering information as well as exploiting what is already known.",
  "slideTrail": [
    {
      "time": "0:00–6:39",
      "title": "Tic-Tac-Toe learning setup",
      "note": "Board states and legal moves motivate learning from play against an imperfect opponent; draws and losses are grouped for the opening illustration."
    },
    {
      "time": "6:39",
      "title": "Alternative solution methods",
      "note": "The slide contrasts minimax/classical search, dynamic programming, evolutionary methods, and reinforcement learning."
    },
    {
      "time": "20:52",
      "title": "Game tree and candidate successor states",
      "note": "Solid and dotted branches distinguish chosen moves from alternatives while starred states mark the current best estimate."
    },
    {
      "time": "28:58",
      "title": "Annotated backup path",
      "note": "A sequence of own and opponent moves shows where exploitation, exploration, and learning backups enter the trajectory."
    },
    {
      "time": "35:30",
      "title": "Incremental state-value update",
      "note": "Displayed update: V(s) ← V(s) + α[V(s′) − V(s)]."
    },
    {
      "time": "39:49",
      "title": "Temporal-difference intuition",
      "note": "The estimate at time t+1 is used to adjust the estimate attached to the preceding state at time t."
    },
    {
      "time": "43:29",
      "title": "Explore–Exploit Dilemma",
      "note": "Known rewarding actions compete with information-seeking actions whose values remain uncertain."
    },
    {
      "time": "48:35",
      "title": "Multi-Arm Bandits",
      "note": "The simplified environment has one state, several actions, and a reward sampled after each action."
    },
    {
      "time": "52:29",
      "title": "Evaluative feedback and nonassociative tasks",
      "note": "Bandit feedback scores the selected action without directly instructing which alternative should have been chosen."
    },
    {
      "time": "56:29",
      "title": "Exploration and exploitation",
      "note": "Exploitation maximizes immediate estimated reward; exploration sacrifices some short-term reward to improve future decisions."
    },
    {
      "time": "58:59",
      "title": "True and estimated action values",
      "note": "q*(a) = E[Rₜ | Aₜ = a] is distinguished from the learned estimate Qₜ(a)."
    },
    {
      "time": "1:09:32",
      "title": "Bandit 1: reward distributions",
      "note": "Four actions illustrate deterministic reward, rare large reward, a uniform range, and a mixture distribution."
    },
    {
      "time": "1:15:04",
      "title": "Bandit 1: expected-value calculation",
      "note": "The class obtains action values 8, 12, 12.5, and 11; the third arm has the greatest expected reward."
    },
    {
      "time": "1:20:00–1:21:39",
      "title": "Applicability and course questions",
      "note": "The discussion broadens RL beyond games and robotics to decision-making subsystems in education, medicine, and AI products."
    }
  ],
  "summary": [
    {
      "title": "1. Tic-Tac-Toe makes the learning problem concrete",
      "sourceRefs": [
        "0:00–6:39",
        "Opening board illustration"
      ],
      "paragraphs": [
        "The instructor models each Tic-Tac-Toe board configuration as a state and each legal placement as an action. Instead of assuming a perfect opponent, the example allows imperfect play, so trajectories can expose winning, drawing, and losing positions. The learner must discover which states and moves are valuable from experience.",
        "For this illustration, draw and loss outcomes are treated alike. That is not an inherent property of reinforcement learning; it is a reward-design choice. Giving win, draw, and loss rewards of +1, 0, and −1 would produce a different preference structure from grouping the last two outcomes."
      ]
    },
    {
      "title": "2. Competing methods differ mainly in assumptions and credit assignment",
      "sourceRefs": [
        "6:39–16:30",
        "Alternative-methods slides"
      ],
      "paragraphs": [
        "Minimax solves an adversarial game by planning against an optimal opponent. It is useful when the game rules and successor states are known, but its worst-case opponent assumption does not teach the learner from the full variety of mistakes made by an imperfect player.",
        "Dynamic programming can evaluate or improve policies when a model supplies transition probabilities and rewards. Model-free reinforcement learning is attractive when that model is unavailable or too difficult to construct, although it then pays for knowledge through interaction samples.",
        "Evolutionary search evaluates candidate policies through complete trials. The lecture emphasizes that a whole-policy score provides coarse credit: it does not naturally identify which individual state or action was responsible. Value-based RL instead uses temporal structure to update particular states and actions along a trajectory."
      ]
    },
    {
      "title": "3. Acting from values creates both a policy and new evidence",
      "sourceRefs": [
        "16:30–30:30",
        "Game-tree slides"
      ],
      "paragraphs": [
        "At a decision state, the agent estimates the values of legal successor states. Selecting the currently highest-valued successor is exploitation. Selecting another successor is exploration: it may be worse under current estimates, but visiting it generates evidence that can correct those estimates.",
        "Opponent moves are outside the learner's direct control, while the learner's own moves implement its policy. The trajectory therefore alternates between controlled choices and environmental responses. The resulting sequence is the evidence used to assign credit backward."
      ]
    },
    {
      "title": "4. A temporal-difference-style backup revises the previous state",
      "sourceRefs": [
        "30:30–43:29",
        "Update slide at 35:30"
      ],
      "paragraphs": [
        "The displayed rule is V(s) ← V(s) + α[V(s′) − V(s)]. The difference V(s′) − V(s) is a prediction error: if the next state looks better than expected, the preceding state moves upward; if it looks worse, the preceding state moves downward. The step size α controls how much one observation changes the estimate.",
        "This is a special pedagogical form of TD(0). The general continuing-task target includes the immediate reward and discounting: δₜ = Rₜ₊₁ + γV(Sₜ₊₁) − V(Sₜ), followed by V(Sₜ) ← V(Sₜ) + αδₜ. Terminal states require a consistent convention for their reward and terminal value."
      ],
      "formula": "Displayed: V(s) ← V(s) + α[V(s′) − V(s)] · General TD(0): δₜ = Rₜ₊₁ + γV(Sₜ₊₁) − V(Sₜ)"
    },
    {
      "title": "5. Exploration is an investment in future decisions",
      "sourceRefs": [
        "43:29–58:59",
        "Explore–Exploit and bandit slides"
      ],
      "paragraphs": [
        "Exploitation chooses the action with the highest present estimate and therefore targets immediate reward. Exploration chooses an uncertain alternative, accepting possible short-term regret in exchange for information. Without exploration, an early lucky sample can trap the agent on a suboptimal action.",
        "A restaurant analogy makes the trade-off intuitive: revisit the reliable favorite or try somewhere new. The correct balance depends on horizon, uncertainty, nonstationarity, and the cost of a bad trial; exploration is not random behavior for its own sake."
      ]
    },
    {
      "title": "6. Bandits isolate action-value learning",
      "sourceRefs": [
        "48:35–1:09:32",
        "Multi-Arm Bandits",
        "q*(a) slide"
      ],
      "paragraphs": [
        "A nonassociative k-armed bandit has one recurring situation and k available actions. Choosing action Aₜ yields reward Rₜ sampled from that arm's unknown distribution. Because there is no changing state or delayed transition, the problem removes much of full RL and focuses on estimating action values while collecting rewards.",
        "The true value q*(a) is the expected reward conditional on choosing a. Qₜ(a) is the estimate available at time t, commonly the sample average of rewards observed from that arm. The learner never observes rewards for arms it did not select, so its data is policy-dependent."
      ],
      "formula": "q*(a) = E[Rₜ | Aₜ = a] · Qₜ(a) = sum of observed rewards from a / number of selections of a"
    },
    {
      "title": "7. Expected value ranks the worked arms—but not their risk",
      "sourceRefs": [
        "1:09:32–1:19:30",
        "Bandit 1 slides"
      ],
      "paragraphs": [
        "Action 1 always returns 8, so q*(A₁)=8. Action 2 returns 0 with probability 0.88 and 100 with probability 0.12, giving 12. Action 3 is uniform from −10 to 35, whose midpoint and mean are 12.5. Action 4 mixes 0, 20, and a uniform integer reward from 8 to 18 with equal probability; the last component has mean 13, so the total mean is (0+20+13)/3=11.",
        "Action 3 has the largest expected reward and is optimal under a risk-neutral long-run objective. It is not guaranteed to pay best on the next pull. Action 1 has a lower mean but zero variance, while Actions 2 and 3 can produce large deviations. A production objective may need risk, safety, or tail-loss constraints in addition to expected value."
      ],
      "formula": "q*(A₁)=8 · q*(A₂)=0.88(0)+0.12(100)=12 · q*(A₃)=(−10+35)/2=12.5 · q*(A₄)=[0+20+(8+18)/2]/3=11"
    }
  ],
  "courseSignals": {
    "assignments": [],
    "homework": [],
    "labs": [
      {
        "time": "1:20:51",
        "title": "Theory course; no lab practical",
        "detail": "In response to a student question, the instructor stated that this Reinforcement Learning course is theory-only and does not include a lab practical."
      }
    ],
    "projects": [],
    "references": [],
    "studentQuestions": [
      {
        "time": "22:29",
        "question": "How do exploration and exploitation differ in the Tic-Tac-Toe game-tree example?",
        "response": "The instructor replayed the state sequence: selecting the currently highest-valued successor is exploitation, while deliberately selecting another legal move to discover a potentially better later trajectory is exploration."
      },
      {
        "time": "1:18:53",
        "question": "Is reinforcement learning mainly for robotics and games, or can it be used in medical education and other domains?",
        "response": "The instructor explained that actions need not be physical movements and that RL can govern one decision-making subsystem inside a larger education, medicine, or AI application."
      },
      {
        "time": "1:20:51",
        "question": "Will this course include practical or lab sessions?",
        "response": "The instructor answered that this is a theory course without a lab practical."
      }
    ]
  },
  "keyTerms": [
    {
      "term": "State value V(s)",
      "definition": "Expected return from state s under a policy."
    },
    {
      "term": "Action value q*(a)",
      "definition": "Expected reward from action a in a stationary bandit."
    },
    {
      "term": "Estimate Qₜ(a)",
      "definition": "The learner's time-t approximation to an action's true value."
    },
    {
      "term": "Backup",
      "definition": "An update that transfers information from a later outcome or estimate to an earlier state or action."
    },
    {
      "term": "Temporal-difference error",
      "definition": "The gap between a current prediction and a one-step bootstrapped target."
    },
    {
      "term": "Step size α",
      "definition": "The fraction of a new prediction error applied during an incremental update."
    },
    {
      "term": "Exploitation",
      "definition": "Selecting the action currently estimated to be best."
    },
    {
      "term": "Exploration",
      "definition": "Selecting an insufficiently known action to improve information and future choices."
    },
    {
      "term": "Nonassociative task",
      "definition": "A task with one recurring situation, so action selection is not conditioned on different contexts."
    },
    {
      "term": "Regret",
      "definition": "Cumulative reward lost relative to repeatedly choosing the optimal action."
    }
  ],
  "insights": [
    {
      "label": "Technical nuance",
      "title": "The slide's update is a special TD case",
      "body": "V(s′) alone is the target only under simplifying choices about immediate reward and discounting. Write the full target Rₜ₊₁+γV(Sₜ₊₁) before implementing TD in a general environment."
    },
    {
      "label": "Reward design",
      "title": "Draw equals loss is an assumption, not a fact",
      "body": "Grouping outcomes makes an agent indifferent between a draw and a loss. If avoiding loss matters, encode it explicitly and test whether the policy changes as intended."
    },
    {
      "label": "Model insight",
      "title": "Model-free does not mean assumption-free",
      "body": "Removing an explicit transition model shifts assumptions to stationarity, representation, exploration, observability, and the quality of sampled feedback."
    },
    {
      "label": "Statistics",
      "title": "Expected value hides variance",
      "body": "The third arm wins on mean, but a risk-sensitive learner may prefer the deterministic first arm. Report reward distribution, downside probability, and confidence—not only average reward."
    },
    {
      "label": "Data insight",
      "title": "Exploration changes the training distribution",
      "body": "Bandit observations are not an i.i.d. dataset collected in advance. The policy chooses what becomes observable, creating selection bias that evaluation and off-policy learning must address."
    },
    {
      "label": "Operational nuance",
      "title": "Constant step sizes help under drift",
      "body": "A sample average weights all history equally. If reward distributions change, Q←Q+α(R−Q) with constant α discounts stale observations and tracks recent behavior."
    },
    {
      "label": "Application",
      "title": "Education can be a contextual bandit",
      "body": "A study system can choose an explanation or exercise using learner context and observe a delayed mastery signal. Safety floors and pedagogical constraints should limit experimentation."
    }
  ],
  "resources": [
    {
      "type": "Book",
      "title": "Reinforcement Learning: An Introduction, second edition",
      "creator": "Richard S. Sutton & Andrew G. Barto · MIT Press",
      "why": "Chapters 1 and 2 formalize the Tic-Tac-Toe and bandit examples used in this lecture.",
      "url": "https://mitpress.mit.edu/9780262039246/reinforcement-learning/"
    },
    {
      "type": "Watch",
      "title": "Introduction to Reinforcement Learning",
      "creator": "DeepMind x UCL",
      "why": "A university-level overview of agents, rewards, values, policies, and the RL problem.",
      "url": "https://www.youtube.com/watch?v=TCCjZe0y4Qc"
    },
    {
      "type": "Slides",
      "title": "Exploration and Control",
      "creator": "DeepMind x UCL",
      "why": "Connects bandits and exploration strategies with control in full reinforcement learning.",
      "url": "https://storage.googleapis.com/deepmind-media/UCL%20x%20DeepMind%202021/Lecture%202-%20Exploration%20and%20control_slides.pdf"
    },
    {
      "type": "Tutorial",
      "title": "Training an Agent on FrozenLake",
      "creator": "Farama Foundation · Gymnasium",
      "why": "A compact, runnable Q-learning example that turns value updates and exploration into code.",
      "url": "https://gymnasium.farama.org/main/tutorials/training_agents/frozenlake_q_learning/"
    },
    {
      "type": "Tutorial",
      "title": "Blackjack Q-learning",
      "creator": "Farama Foundation · Gymnasium",
      "why": "A second tabular environment for practicing states, actions, returns, and epsilon-greedy control.",
      "url": "https://gymnasium.farama.org/tutorials/training_agents/blackjack_tutorial/"
    }
  ],
  "quiz": [
    {
      "question": "In the lecture's Tic-Tac-Toe formulation, what is a state?",
      "options": [
        "A board configuration",
        "Only the final win or loss",
        "The opponent's identity",
        "The learning rate"
      ],
      "answer": 0,
      "explanation": "The board configuration contains the information used to choose a legal move and estimate future outcome.",
      "optionNotes": [
        "Correct: each board arrangement is a decision situation.",
        "That is an outcome, not the full state.",
        "Identity may be context in another model, but it is not the illustrated state.",
        "The learning rate is an algorithm parameter."
      ]
    },
    {
      "question": "Why does minimax differ from learning against the imperfect opponent in the example?",
      "options": [
        "Minimax plans for an optimal adversary",
        "Minimax requires no game rules",
        "Minimax is a reward distribution",
        "Minimax updates only from random moves"
      ],
      "answer": 0,
      "explanation": "Standard minimax evaluates moves under optimal opposing play; experience against mistakes can expose trajectories its worst-case policy would not select.",
      "optionNotes": [
        "Correct: the opponent is assumed to minimize the learner's outcome.",
        "Minimax needs a known game tree or successor function.",
        "It is a planning algorithm, not a reward model.",
        "Its backups are systematic, not limited to random moves."
      ]
    },
    {
      "question": "What key requirement of dynamic programming was emphasized?",
      "options": [
        "A model of transitions and rewards",
        "A GPU",
        "Only terminal rewards",
        "An adversary that plays randomly"
      ],
      "answer": 0,
      "explanation": "Classical dynamic programming performs expectation backups using a known model of the environment.",
      "optionNotes": [
        "Correct: transition and reward dynamics support Bellman backups.",
        "Compute may help but is not the defining requirement.",
        "DP can use rewards throughout a trajectory.",
        "No random adversary is required."
      ]
    },
    {
      "question": "What limitation of evolutionary policy search was highlighted?",
      "options": [
        "Whole-policy evaluation gives coarse credit",
        "It cannot represent policies",
        "It always needs derivatives",
        "It only works in deterministic games"
      ],
      "answer": 0,
      "explanation": "Scoring complete policies does not directly reveal which state or action caused success or failure.",
      "optionNotes": [
        "Correct: the credit signal is attached to an entire candidate.",
        "A policy is precisely what evolutionary search can represent.",
        "Many evolutionary methods are derivative-free.",
        "They can operate under stochastic evaluation."
      ]
    },
    {
      "question": "What does exploitation mean in the game-tree illustration?",
      "options": [
        "Choose the successor with the highest current estimate",
        "Choose an unvisited move regardless of cost",
        "Update every state to one",
        "Assume the opponent cooperates"
      ],
      "answer": 0,
      "explanation": "Exploitation uses present knowledge to select the action believed to be best.",
      "optionNotes": [
        "Correct: it is greedy with respect to current estimates.",
        "That describes a crude exploration rule.",
        "Values remain evidence-based rather than all becoming one.",
        "Opponent behavior is not redefined by exploitation."
      ]
    },
    {
      "question": "Why deliberately explore?",
      "options": [
        "To obtain information that can improve future choices",
        "To guarantee the next reward is maximal",
        "To remove all uncertainty immediately",
        "To avoid collecting rewards"
      ],
      "answer": 0,
      "explanation": "Exploration can incur short-term regret but reduces uncertainty and may discover a better action.",
      "optionNotes": [
        "Correct: information has future decision value.",
        "An exploratory action may pay poorly now.",
        "One trial rarely removes all uncertainty.",
        "Rewards are still collected; information is the additional benefit."
      ]
    },
    {
      "question": "In V(s) ← V(s)+α[V(s′)−V(s)], what is V(s′)−V(s)?",
      "options": [
        "A one-step prediction error",
        "The episode length",
        "The action probability",
        "The reward variance"
      ],
      "answer": 0,
      "explanation": "It measures how much the later estimate differs from the current prediction for the preceding state.",
      "optionNotes": [
        "Correct: its sign and magnitude drive the update.",
        "No time-count calculation appears here.",
        "The policy probability is a separate quantity.",
        "Variance requires multiple reward observations."
      ]
    },
    {
      "question": "What does a larger α do in the incremental update?",
      "options": [
        "Gives the new target more influence",
        "Guarantees convergence",
        "Makes γ equal to zero",
        "Eliminates exploration"
      ],
      "answer": 0,
      "explanation": "The step size controls how far the old estimate moves toward the new target.",
      "optionNotes": [
        "Correct: larger α reacts more strongly to recent evidence.",
        "Too-large or poorly scheduled steps can prevent convergence.",
        "α and γ serve different roles.",
        "Exploration is controlled by the policy."
      ]
    },
    {
      "question": "Which is the general TD(0) target for a nonterminal transition?",
      "options": [
        "Rₜ₊₁ + γV(Sₜ₊₁)",
        "V(Sₜ) alone",
        "α + γ",
        "The largest possible reward"
      ],
      "answer": 0,
      "explanation": "TD(0) bootstraps from immediate reward plus the discounted estimate of the next state.",
      "optionNotes": [
        "Correct: this is the one-step target.",
        "That is the prediction being updated, not the target.",
        "Parameters are not added to form a return.",
        "The realized reward and next value define the target, not a global maximum."
      ]
    },
    {
      "question": "Treating a draw and a loss equally is best understood as what?",
      "options": [
        "A reward-design choice",
        "A theorem of RL",
        "A property of minimax only",
        "A requirement of bandits"
      ],
      "answer": 0,
      "explanation": "Outcome preferences enter through rewards; another designer could assign distinct values to draws and losses.",
      "optionNotes": [
        "Correct: objectives determine the learned preference.",
        "RL imposes no such universal equality.",
        "Minimax can also distinguish utilities.",
        "The later bandit example is unrelated to this choice."
      ]
    },
    {
      "question": "What makes the lecture's k-armed bandit nonassociative?",
      "options": [
        "There is one recurring situation rather than multiple contexts",
        "Rewards are always zero",
        "Actions cannot repeat",
        "The agent knows every reward distribution"
      ],
      "answer": 0,
      "explanation": "The same action-selection problem repeats without a changing contextual state.",
      "optionNotes": [
        "Correct: action choice is not associated with different observed contexts.",
        "Bandit rewards can take many values.",
        "Repeated pulls are central to learning.",
        "The distributions are initially unknown."
      ]
    },
    {
      "question": "What does q*(a) denote?",
      "options": [
        "Expected reward conditional on choosing action a",
        "The probability that action a is selected",
        "The total number of pulls",
        "The maximum observed reward"
      ],
      "answer": 0,
      "explanation": "The star denotes the true action value under the environment's reward distribution.",
      "optionNotes": [
        "Correct: q*(a)=E[Rₜ|Aₜ=a].",
        "Selection probability belongs to the policy.",
        "Pull count is commonly Nₜ(a).",
        "A maximum sample is not an expectation."
      ]
    },
    {
      "question": "How does Qₜ(a) differ from q*(a)?",
      "options": [
        "Qₜ(a) is the learner's current estimate",
        "Qₜ(a) is always exact",
        "Qₜ(a) is a transition probability",
        "Qₜ(a) is the number of states"
      ],
      "answer": 0,
      "explanation": "Qₜ(a) is calculated from evidence observed up to time t and may differ from the unknown true mean.",
      "optionNotes": [
        "Correct: it is an evolving approximation.",
        "Finite samples generally contain error.",
        "No transition model is needed in a simple bandit.",
        "It is a value, not a state count."
      ]
    },
    {
      "question": "What is the true value of Action 2: reward 0 with probability 0.88 and 100 with probability 0.12?",
      "options": [
        "12",
        "88",
        "50",
        "100"
      ],
      "answer": 0,
      "explanation": "E[R]=0.88×0+0.12×100=12.",
      "optionNotes": [
        "Correct: this is the probability-weighted mean.",
        "88 is a percentage, not the expected reward.",
        "The two outcomes are not equally likely.",
        "100 occurs only 12% of the time."
      ]
    },
    {
      "question": "Assuming a uniform reward from −10 to 35, what is Action 3's mean?",
      "options": [
        "12.5",
        "25",
        "17.5",
        "−10"
      ],
      "answer": 0,
      "explanation": "A uniform distribution's mean is the midpoint: (−10+35)/2=12.5.",
      "optionNotes": [
        "Correct: midpoint equals mean for a uniform interval.",
        "25 is the range width minus a sign mistake.",
        "17.5 is half the upper endpoint only.",
        "−10 is the lower bound."
      ]
    },
    {
      "question": "What is Action 4's mean for equal-probability outcomes 0, 20, and Uniform(8,18)?",
      "options": [
        "11",
        "13",
        "20",
        "33"
      ],
      "answer": 0,
      "explanation": "The uniform component has mean 13, then (0+20+13)/3=11.",
      "optionNotes": [
        "Correct: average the three component means.",
        "13 is only the uniform component's mean.",
        "20 is only one mixture component.",
        "33 is the unnormalized sum."
      ]
    },
    {
      "question": "Which worked action is optimal under a risk-neutral expected-reward objective?",
      "options": [
        "Action 3",
        "Action 1",
        "Action 2",
        "Action 4"
      ],
      "answer": 0,
      "explanation": "Its expected value 12.5 exceeds 12, 11, and 8.",
      "optionNotes": [
        "Correct: it has the highest mean.",
        "Action 1 is safest but has mean 8.",
        "Action 2 has mean 12.",
        "Action 4 has mean 11."
      ]
    },
    {
      "question": "Why might a risk-sensitive decision maker still prefer Action 1?",
      "options": [
        "It always returns 8 and has zero variance",
        "It has the highest expected value",
        "It reveals every other arm",
        "It makes rewards stationary"
      ],
      "answer": 0,
      "explanation": "The deterministic payoff removes downside variation even though its long-run mean is lower.",
      "optionNotes": [
        "Correct: certainty can matter under risk or safety constraints.",
        "Action 3 has the highest mean.",
        "One arm's pull does not reveal counterfactual rewards.",
        "Choosing an arm does not determine stationarity."
      ]
    },
    {
      "question": "What can happen with a purely greedy policy after an early lucky sample?",
      "options": [
        "It can remain stuck on a suboptimal arm",
        "It always finds the optimum faster",
        "It observes rewards from unchosen arms",
        "It makes all estimates unbiased"
      ],
      "answer": 0,
      "explanation": "Without exploration, an overestimated arm may keep being selected while better alternatives remain under-sampled.",
      "optionNotes": [
        "Correct: early noise can lock in the wrong choice.",
        "Greedy behavior has no discovery guarantee.",
        "Bandit feedback reveals only the chosen action's reward.",
        "Adaptive selection can introduce bias rather than remove it."
      ]
    },
    {
      "question": "In ε-greedy action selection, what happens with probability ε?",
      "options": [
        "The agent explores rather than taking the greedy action",
        "All action values reset",
        "The episode terminates",
        "The reward is discounted"
      ],
      "answer": 0,
      "explanation": "ε allocates a controlled fraction of decisions to exploration, commonly through a random action.",
      "optionNotes": [
        "Correct: ε is the exploration probability.",
        "Estimates are not reset.",
        "Termination is environment-defined.",
        "Discounting uses γ, not ε."
      ]
    },
    {
      "question": "What is the purpose of optimistic initial action values?",
      "options": [
        "Encourage early exploration because untried actions look promising",
        "Prove every arm is safe",
        "Remove reward noise",
        "Require a known transition model"
      ],
      "answer": 0,
      "explanation": "High initial estimates cause selected arms to be revised downward, giving other arms a chance.",
      "optionNotes": [
        "Correct: optimism creates transient exploration.",
        "Optimism is not a safety certificate.",
        "Reward randomness remains.",
        "Bandit value initialization needs no transition model."
      ]
    },
    {
      "question": "What extra quantity does an upper-confidence-bound method use besides estimated mean?",
      "options": [
        "An uncertainty bonus based on action counts",
        "The exact future reward",
        "A terminal-state value",
        "Only the minimum reward"
      ],
      "answer": 0,
      "explanation": "UCB adds a bonus that is larger for less-tested actions, balancing value and uncertainty.",
      "optionNotes": [
        "Correct: uncertainty drives principled exploration.",
        "Future rewards are unknown.",
        "A simple bandit has no terminal-state backup.",
        "Using only a minimum would target a different risk objective."
      ]
    },
    {
      "question": "Why can a constant step size be preferable in a nonstationary bandit?",
      "options": [
        "It gives recent rewards more influence than distant history",
        "It averages all history equally",
        "It prevents any value change",
        "It identifies drift before observing data"
      ],
      "answer": 0,
      "explanation": "Exponential recency weighting helps estimates track reward distributions that change over time.",
      "optionNotes": [
        "Correct: older evidence decays geometrically.",
        "A sample average gives each observation equal final weight.",
        "Positive α updates the estimate.",
        "Drift is inferred from observations, not known in advance."
      ]
    },
    {
      "question": "Why is bandit training data policy-dependent?",
      "options": [
        "The policy decides which action's reward becomes observable",
        "Every arm reveals a reward every round",
        "Rewards are labels collected before deployment",
        "Actions have no effect on observations"
      ],
      "answer": 0,
      "explanation": "Only the selected arm produces observed feedback, so the behavior policy shapes the dataset.",
      "optionNotes": [
        "Correct: action choice controls observation.",
        "Unchosen counterfactual rewards are hidden.",
        "Bandit feedback arrives online after action.",
        "Actions directly determine which reward is sampled."
      ]
    },
    {
      "question": "What is the best way to translate the lecture's bandit idea to adaptive education?",
      "options": [
        "Define interventions as actions and measure constrained learning outcomes as rewards",
        "Randomize lessons forever without evaluation",
        "Use exam score as state but never collect feedback",
        "Guarantee every experiment is harmless"
      ],
      "answer": 0,
      "explanation": "A useful formulation links pedagogical choices to observable mastery while imposing safety and fairness constraints on exploration.",
      "optionNotes": [
        "Correct: it specifies actions, feedback, and responsible limits.",
        "Exploration should become evidence-driven, not permanent noise.",
        "Without feedback no action values can be learned.",
        "No empirical intervention can be guaranteed harmless; constraints and monitoring reduce risk."
      ]
    }
  ]
}
};
