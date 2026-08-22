// One publication unit: English and Hindi are reviewed and rendered together.
export const eai6401Lecture20260818 = {
  "en": {
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
  },
  "hi": {
    "title": "खेल से सीखना: मूल्य अद्यतन, अन्वेषण और k-armed bandits",
    "lede": "Tic-Tac-toe से शुरू, व्याख्यान बताता है कि कैसे रीइन्फोर्समेंट सीखना सटीक खोज, गतिशील प्रोग्रामिंग और विकासवादी खोज से अलग है; इसके बाद यह वृद्धिशील मूल्य अद्यतन विकसित करता है, अन्वेषण–उपयोग दुविधा, और एक गैर-associative bandit में अपेक्षित एक्शन मान।",
    "instructionalInterval": "0:00–1:11:43 and 1:13:08–1:21:39",
    "reviewLevel": "रिकॉर्डिंग, टाइमटाम्प्ड ट्रांसक्रिप्ट और स्लाइड-फ्रेम सत्यापित",
    "coverage": [
      {
        "title": "Tic-Tac-toe एक RL समस्या के रूप में",
        "body": "राज्य बोर्ड विन्यास हैं, कार्रवाई कानूनी चालें हैं, और अनुभव उन पदों के लिए मूल्य आवंटित करता है जो जीत या नुकसान का कारण बनता है।"
      },
      {
        "title": "क्यों न केवल शास्त्रीय खोज?",
        "body": "मिनिमेक्स, डायनेमिक प्रोग्रामिंग और विकासवादी तरीकों ने विरोधियों, पर्यावरण मॉडलों और क्रेडिट को कैसे सौंपा गया है, के बारे में विभिन्न धारणाओं को उजागर किया।"
      },
      {
        "title": "मूल्य बैकअप",
        "body": "बाद में एक राज्य पूर्ववर्ती राज्य के मूल्य को संशोधित करने के लिए एक महत्वपूर्ण लक्ष्य प्रदान करता है।"
      },
      {
        "title": "बनाम शोषण का अन्वेषण करें",
        "body": "एजेंट को वर्तमान में विकल्पों की कोशिश करने के साथ अपनी सबसे अच्छी कार्रवाई का चयन करना चाहिए जो बेहतर दीर्घकालिक विकल्प प्रकट कर सकता है।"
      },
      {
        "title": "k-armed bandit",
        "body": "एक-राज्य समस्या एक्शन चयन को अलग करती है: प्रत्येक हाथ में अज्ञात इनाम वितरण होता है और बातचीत के माध्यम से सीखा जाना चाहिए।"
      },
      {
        "title": "अभ्यास में अनुमानित मूल्य",
        "body": "चार पुरस्कार वितरण को वास्तविक कार्रवाई मूल्यों में परिवर्तित किया जाता है, यह बताता है कि उच्चतम औसत भी पर्याप्त परिवर्तन कर सकता है।"
      }
    ],
    "takeaway": "रीइन्फोर्समेंट शिक्षा मूल्यों को अद्यतन करने के लिए नमूना परिणामों का उपयोग करके निर्णयों को बेहतर बनाती है, लेकिन सबसे अच्छा विकल्प सीखने के लिए जानबूझकर जानकारी इकट्ठा करने की आवश्यकता होती है और साथ ही साथ जो भी पहले से ही ज्ञात है उसका शोषण करना होता है।",
    "slideTrail": [
      {
        "time": "0:00–6:39",
        "title": "Tic-Tac-toe लर्निंग सेटअप",
        "note": "बोर्ड राज्यों और कानूनी चाल एक अपूर्ण प्रतिद्वंद्वी के खिलाफ खेल से सीखने को प्रेरित करते हैं; उद्घाटन चित्रण के लिए ड्रॉ और लॉस को समूहीकृत किया जाता है।"
      },
      {
        "time": "6:39",
        "title": "वैकल्पिक समाधान विधि",
        "note": "स्लाइड मिनीमैक्स / शास्त्रीय खोज, गतिशील प्रोग्रामिंग, विकासवादी तरीकों और रीइन्फोर्समेंट लर्निंग को विपरीत बनाती है।"
      },
      {
        "time": "20:52",
        "title": "खेल के पेड़ और उम्मीदवार उत्तराधिकारी राज्यों",
        "note": "सॉलिड एंड डॉटेड शाखाएं विकल्प से चुनी गई चालों को अलग करती हैं जबकि स्टार्ड स्टेट्स वर्तमान सर्वोत्तम अनुमान को चिह्नित करते हैं।"
      },
      {
        "time": "28:58",
        "title": "Annotated बैकअप पथ",
        "note": "अपने स्वयं के और प्रतिद्वंद्वी चालों के एक अनुक्रम से पता चलता है कि शोषण, अन्वेषण और सीखने का बैकअप ट्रेजेक्टरी में प्रवेश करता है।"
      },
      {
        "time": "35:30",
        "title": "वृद्धिशील राज्य मूल्य अद्यतन",
        "note": "प्रदर्शित अद्यतन: V(s) ← V(s) + α[V(s)]."
      },
      {
        "time": "39:49",
        "title": "अस्थायी उदासीनता",
        "note": "समय पर अनुमान टी+1 का उपयोग समय पर पूर्ववर्ती राज्य से जुड़े अनुमान को समायोजित करने के लिए किया जाता है।"
      },
      {
        "time": "43:29",
        "title": "एक्सप्लोइट डिलेमा",
        "note": "ज्ञात पुरस्कृत कार्रवाई सूचना-देखने वाले कार्यों के साथ प्रतिस्पर्धा करती है जिसका मूल्य अनिश्चित रहता है।"
      },
      {
        "time": "48:35",
        "title": "मल्टी-आर्म बैंडिट्स",
        "note": "सरलीकृत वातावरण में एक राज्य, कई क्रियाएं होती हैं और प्रत्येक कार्रवाई के बाद एक पुरस्कार नमूना होता है।"
      },
      {
        "time": "52:29",
        "title": "मूल्यांकनात्मक प्रतिक्रिया और गैर-associative कार्य",
        "note": "बंदी प्रतिक्रिया सीधे निर्देशन के बिना चयनित कार्रवाई स्कोर करती है जो वैकल्पिक चुना गया है।"
      },
      {
        "time": "56:29",
        "title": "अन्वेषण और शोषण",
        "note": "शोषण तत्काल अनुमानित इनाम को अधिकतम करता है; अन्वेषण भविष्य के निर्णयों में सुधार के लिए कुछ अल्पकालिक इनाम का बलिदान करता है।"
      },
      {
        "time": "58:59",
        "title": "वास्तविक और अनुमानित कार्रवाई मान",
        "note": "q*(a) = E[Rt | At = a] को सीखा अनुमान Qt(a) से अलग किया गया है।"
      },
      {
        "time": "1:09:32",
        "title": "बैंडिट 1: रिवार्ड डिस्ट्रीब्यूशन",
        "note": "चार क्रियाओं में नियतिवादी पुरस्कार, दुर्लभ बड़े इनाम, एक समान श्रेणी और एक मिश्रण वितरण शामिल है।"
      },
      {
        "time": "1:15:04",
        "title": "बैंडिट 1: अपेक्षित मूल्य गणना",
        "note": "कक्षा 8, 12, 12.5 और 11 के एक्शन मान प्राप्त करती है; तीसरे हाथ में सबसे बड़ा अपेक्षित इनाम है।"
      },
      {
        "time": "1:20:00–1:21:39",
        "title": "अनुपलब्धता और पाठ्यक्रम प्रश्न",
        "note": "चर्चा शिक्षा, चिकित्सा और एआई उत्पादों में निर्णय लेने के लिए खेल और रोबोटिक्स से परे RL को व्यापक करती है।"
      }
    ],
    "summary": [
      {
        "title": "1. Tic-Tac-toe सीखने की समस्या को ठोस बनाता है",
        "sourceRefs": [
          "0:00–6:39",
          "उद्घाटन बोर्ड चित्रण"
        ],
        "paragraphs": [
          "प्रशिक्षक मॉडल प्रत्येक Tic-Tac-toe बोर्ड विन्यास एक राज्य के रूप में और एक कार्रवाई के रूप में प्रत्येक कानूनी प्लेसमेंट। एक सही प्रतिद्वंद्वी को संभालने के बजाय, उदाहरण अपूर्ण नाटक की अनुमति देता है, इसलिए ट्रेजेक्टरी जीत, ड्राइंग और स्थिति खो सकते हैं। शिक्षार्थी को यह पता होना चाहिए कि किस राज्य और चाल अनुभव से मूल्यवान हैं।",
          "इस उदाहरण के लिए, ड्रॉ और हानि के परिणामों को समान माना जाता है। यह रीइन्फोर्समेंट लर्निंग की एक अंतर्निहित संपत्ति नहीं है; यह एक पुरस्कार-डिज़ाइन विकल्प है। + 1, 0, और 1 के जीत, ड्रॉ और हानि पुरस्कार देते हुए अंतिम दो परिणामों को समूहित करने से एक अलग वरीयता संरचना उत्पन्न होगी।"
        ]
      },
      {
        "title": "2. Competing तरीकों मुख्य रूप से मान्यताओं और क्रेडिट असाइनमेंट में भिन्न होते हैं",
        "sourceRefs": [
          "6:39–16:30",
          "वैकल्पिक-methods स्लाइड"
        ],
        "paragraphs": [
          "मिनीमैक्स एक इष्टतम प्रतिद्वंद्वी के खिलाफ योजना बनाकर एक प्रतिकूल खेल को हल करता है। यह उपयोगी है जब खेल के नियमों और उत्तराधिकारी राज्यों को जाना जाता है, लेकिन इसके सबसे खराब मामले प्रतिद्वंद्वी धारणा एक अपूर्ण खिलाड़ी द्वारा बनाई गई गलतियों की पूरी विविधता से शिक्षार्थी को नहीं सिखाती है।",
          "गतिशील प्रोग्रामिंग नीतियों का मूल्यांकन या सुधार कर सकता है जब एक मॉडल संक्रमण संभावना और इनाम की आपूर्ति करता है। मॉडल-मुक्त रीइन्फोर्समेंट लर्निंग आकर्षक है जब वह मॉडल अनुपलब्ध है या निर्माण करना बहुत मुश्किल है, हालांकि यह तब बातचीत के नमूनों के माध्यम से ज्ञान के लिए भुगतान करता है।",
          "विकासवादी खोज पूर्ण परीक्षणों के माध्यम से उम्मीदवार नीतियों का मूल्यांकन करती है। व्याख्यान में जोर दिया गया है कि एक पूरी पॉलिसी स्कोर मोटे क्रेडिट प्रदान करता है: यह स्वाभाविक रूप से पहचान नहीं करता है कि व्यक्तिगत राज्य या कार्रवाई जिम्मेदार थी। इसके बजाय वैल्यू-आधारित आरएल अस्थायी संरचना का उपयोग करता है ताकि विशेष राज्यों और कार्यों को एक ट्रेजेक्टरी के साथ अद्यतन किया जा सके।"
        ]
      },
      {
        "title": "3. मूल्यों से अभिनय दोनों एक नीति और नए सबूत बनाता है",
        "sourceRefs": [
          "16:30–30:30",
          "गेम-ट्री स्लाइड"
        ],
        "paragraphs": [
          "एक निर्णय राज्य में, एजेंट कानूनी उत्तराधिकारी राज्यों के मूल्यों का अनुमान लगाता है। वर्तमान में उच्चतम मूल्य वाले उत्तराधिकारी का चयन शोषण है। किसी अन्य उत्तराधिकारी का चयन करना अन्वेषण है: यह वर्तमान अनुमानों के तहत खराब हो सकता है, लेकिन यह देखने से सबूत उत्पन्न होते हैं जो उन अनुमानों को सही कर सकते हैं।",
          "Opponent चाल शिक्षार्थी के प्रत्यक्ष नियंत्रण के बाहर हैं, जबकि शिक्षार्थी की अपनी चाल अपनी नीति को लागू करती है। इसलिए प्रक्षेपवक्र नियंत्रित विकल्पों और पर्यावरणीय प्रतिक्रियाओं के बीच बदलता है। परिणामस्वरूप अनुक्रम यह सबूत है कि क्रेडिट को पिछड़े सौंपने के लिए इस्तेमाल किया जाता है।"
        ]
      },
      {
        "title": "4. एक टेम्पोरल डिफरेंस-स्टाइल बैकअप पिछले राज्य को संशोधित करता है",
        "sourceRefs": [
          "30:30–43:29",
          "अद्यतन स्लाइड पर 35:30"
        ],
        "paragraphs": [
          "प्रदर्शित नियम V(s) है ← V(s) + α[V(s)]. V(s′) - V(s) एक भविष्यवाणी त्रुटि है: यदि अगले राज्य उम्मीद से बेहतर दिखता है, तो पूर्ववर्ती राज्य ऊपर की ओर बढ़ जाता है; अगर यह खराब दिखता है, तो पूर्ववर्ती राज्य नीचे की ओर जाता है। चरण आकार α नियंत्रित करता है कि कैसे एक अवलोकन अनुमान बदलता है।",
          "यह टीडी (0) का एक विशेष शैक्षणिक रूप है। सामान्य सतत लक्ष्य में तत्काल इनाम और छूट शामिल है: δt = Rt+1 + γV (St+1) - V(St), इसके बाद V(St) ← V(St) + αδt. टर्मिनल राज्यों को उनके इनाम और टर्मिनल मूल्य के लिए एक सुसंगत सम्मेलन की आवश्यकता होती है।"
        ],
        "formula": "Displayed: V(s) ← V(s) + α[V(s′) − V(s)] · General TD(0): δₜ = Rₜ₊₁ + γV(Sₜ₊₁) − V(Sₜ)"
      },
      {
        "title": "5. अन्वेषण भविष्य के निर्णयों में निवेश है",
        "sourceRefs": [
          "43:29–58:59",
          "एक्सप्लॉट और बैंडिट स्लाइड"
        ],
        "paragraphs": [
          "एक्सप्लोएशन उच्चतम वर्तमान अनुमान के साथ कार्रवाई का चयन करता है और इसलिए तत्काल इनाम को लक्षित करता है। अन्वेषण एक अनिश्चित विकल्प चुनता है, जो सूचना के बदले में संभावित अल्पकालिक अफसोस को स्वीकार करता है। अन्वेषण के बिना, एक प्रारंभिक भाग्यशाली नमूना एजेंट को एक उपमहाद्वीप कार्रवाई पर फंस सकता है।",
          "एक रेस्तरां अनुरूप व्यापार-बंद सहज बनाता है: विश्वसनीय पसंदीदा को संशोधित करें या कहीं नया प्रयास करें। सही संतुलन क्षितिज, अनिश्चितता, गैर-स्थिरता और खराब परीक्षण की लागत पर निर्भर करता है; अन्वेषण अपने खुद के लिए यादृच्छिक व्यवहार नहीं है।"
        ]
      },
      {
        "title": "6। बैंडिट्स isolate एक्शन वैल्यू लर्निंग",
        "sourceRefs": [
          "48:35–1:09:32",
          "मल्टी-आर्म बैंडिट्स",
          "Q*(a) स्लाइड"
        ],
        "paragraphs": [
          "एक nonassociative k-armed bandit एक आवर्ती स्थिति और k उपलब्ध कार्रवाई है। कार्रवाई का चयन उस हाथ के अज्ञात वितरण से उत्पन्न रिवॉर्ड आरटी को प्राप्त करता है। क्योंकि कोई बदलते राज्य या विलंबित संक्रमण नहीं है, समस्या पूरी RL को हटा देती है और पुरस्कार एकत्र करते समय कार्रवाई मूल्यों को अनुमान लगाने पर केंद्रित होती है।",
          "वास्तविक मूल्य q * (a) चुनने पर अपेक्षित इनाम सशर्त है। Qt(a) समय पर उपलब्ध अनुमान है। शिक्षार्थी कभी हथियारों के लिए पुरस्कारों का निरीक्षण नहीं करते थे, इसलिए इसका डेटा नीति-निर्भर है।"
        ],
        "formula": "q*(a) = E[Rₜ | Aₜ = a] · Qₜ(a) = sum of observed rewards from a / number of selections of a"
      },
      {
        "title": "7. अपेक्षित मूल्य कार्य हथियारों को रैंक करता है - लेकिन उनका जोखिम नहीं",
        "sourceRefs": [
          "1:09:32–1:19:30",
          "बैंडिट 1 स्लाइड"
        ],
        "paragraphs": [
          "एक्शन 1 हमेशा 8 लौटता है, इसलिए q * (A1)=8. एक्शन 2 रिटर्न 0 संभावना 0.88 और 100 संभावना 0.12 के साथ, 12. एक्शन 3 -10 से 35 तक समान है, जिसका मध्य बिंदु और मतलब 12.5 है। एक्शन 4 0, 20, और समान संभावना के साथ 8 से 18 तक एक समान पूर्ण पुरस्कार मिला है; अंतिम घटक का मतलब 13 है, इसलिए कुल मतलब (0+20+13) / 3=11 है।",
          "एक्शन 3 में सबसे बड़ा अपेक्षित इनाम है और जोखिम-न्यूट्रल लंबे समय तक उद्देश्य के तहत इष्टतम है। यह अगले पुल पर सबसे अच्छा भुगतान करने की गारंटी नहीं है। एक्शन 1 का मतलब कम लेकिन शून्य भिन्नता है, जबकि एक्शन 2 और 3 बड़े विचलन का उत्पादन कर सकते हैं। एक उत्पादन उद्देश्य की उम्मीद मूल्य के अलावा जोखिम, सुरक्षा या पूंछ नुकसान की आवश्यकता हो सकती है।"
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
          "title": "सिद्धांत पाठ्यक्रम; कोई प्रयोगशाला व्यावहारिक नहीं",
          "detail": "एक छात्र सवाल के जवाब में, प्रशिक्षक ने कहा कि यह रीइन्फोर्समेंट लर्निंग कोर्स सिद्धांत-केवल है और इसमें प्रयोगशाला व्यावहारिक नहीं है।"
        }
      ],
      "projects": [],
      "references": [],
      "studentQuestions": [
        {
          "time": "22:29",
          "question": "Tic-Tac-toe game-tree उदाहरण में अन्वेषण और शोषण कैसे भिन्न होते हैं?",
          "response": "प्रशिक्षक ने राज्य अनुक्रम को फिर से खेलना: वर्तमान में उच्चतम मूल्य वाले उत्तराधिकारी का चयन शोषण है, जबकि जानबूझकर एक संभावित बेहतर बाद में प्रक्षेपवक्र की खोज के लिए एक अन्य कानूनी कदम का चयन करना अन्वेषण है।"
        },
        {
          "time": "1:18:53",
          "question": "क्या मुख्य रूप से रोबोटिक्स और गेम के लिए रीइन्फोर्समेंट सीखना है, या इसका उपयोग चिकित्सा शिक्षा और अन्य डोमेन में किया जा सकता है?",
          "response": "प्रशिक्षक ने बताया कि क्रियाओं को शारीरिक आंदोलनों की आवश्यकता नहीं है और RL एक बड़ी शिक्षा, चिकित्सा या एआई आवेदन के अंदर एक निर्णय लेने वाली उपप्रणाली को नियंत्रित कर सकता है।"
        },
        {
          "time": "1:20:51",
          "question": "क्या इस पाठ्यक्रम में व्यावहारिक या प्रयोगशाला सत्र शामिल होंगे?",
          "response": "प्रशिक्षक ने जवाब दिया कि यह एक व्यावहारिक प्रयोगशाला के बिना एक सिद्धांत पाठ्यक्रम है।"
        }
      ]
    },
    "keyTerms": [
      {
        "term": "राज्य मूल्य V(s)",
        "definition": "एक नीति के तहत राज्य से वापसी की उम्मीद की।"
      },
      {
        "term": "एक्शन मान Q* (a)",
        "definition": "एक स्थिर पट्टी में कार्रवाई से अपेक्षित इनाम।"
      },
      {
        "term": "Qt(a)",
        "definition": "शिक्षार्थी का समय-समय पर कार्रवाई के वास्तविक मूल्य के बारे में अनुमान नहीं है।"
      },
      {
        "term": "बैकअप",
        "definition": "एक अद्यतन जो सूचना को बाद के परिणाम या अनुमान से पहले राज्य या कार्रवाई में स्थानांतरित करता है।"
      },
      {
        "term": "Temporal-difference त्रुटि",
        "definition": "एक वर्तमान भविष्यवाणी और एक कदम बूटस्ट्रैप्ड लक्ष्य के बीच अंतर।"
      },
      {
        "term": "चरण आकार α",
        "definition": "एक नई भविष्यवाणी त्रुटि का अंश एक वृद्धिशील अद्यतन के दौरान लागू होता है।"
      },
      {
        "term": "शोषण",
        "definition": "वर्तमान में कार्रवाई का चयन सबसे अच्छा होने का अनुमान है।"
      },
      {
        "term": "अन्वेषण",
        "definition": "सूचना और भविष्य के विकल्पों में सुधार के लिए अपर्याप्त रूप से ज्ञात कार्रवाई का चयन करना।"
      },
      {
        "term": "गैरassociative कार्य",
        "definition": "एक आवर्ती स्थिति के साथ एक कार्य, इसलिए विभिन्न संदर्भों पर कार्रवाई चयन की शर्त नहीं है।"
      },
      {
        "term": "रेगरेट",
        "definition": "संचयी पुरस्कार बार-बार इष्टतम कार्रवाई चुनने के सापेक्ष खो गया।"
      }
    ],
    "insights": [
      {
        "label": "तकनीकी बारीकी",
        "title": "स्लाइड का अद्यतन एक विशेष टीडी मामला है",
        "body": "केवल V(s) एकमात्र लक्ष्य है जो तत्काल इनाम और छूट के बारे में विकल्पों को सरल बनाने के तहत है। एक सामान्य वातावरण में टीडी को लागू करने से पहले पूर्ण लक्ष्य Rt+1+γV (St+1) लिखें।"
      },
      {
        "label": "रिवार्ड डिजाइन",
        "title": "ड्रॉ समान नुकसान एक धारणा है, एक तथ्य नहीं",
        "body": "ग्रुपिंग परिणाम एक एजेंट को आकर्षित और नुकसान के बीच अंतर बनाता है। यदि नुकसान के मामलों से बचना है, तो इसे स्पष्ट रूप से कोडित करें और जांचें कि क्या नीति का इरादा है।"
      },
      {
        "label": "मॉडल अंतर्दृष्टि",
        "title": "मॉडल-मुक्त का मतलब धारणा-मुक्त नहीं है",
        "body": "स्थिरता, प्रतिनिधित्व, अन्वेषण, पर्यवेक्षण और नमूना प्रतिक्रिया की गुणवत्ता के लिए एक स्पष्ट संक्रमण मॉडल बदलाव की धारणाओं को दूर करना।"
      },
      {
        "label": "सांख्यिकी",
        "title": "अपेक्षित मूल्य भिन्नता को छिपाता है",
        "body": "तीसरे हाथ का मतलब जीतता है, लेकिन जोखिम-संवेदनशील शिक्षार्थी निश्चित रूप से पहली बांह को पसंद कर सकता है। रिपोर्ट रिवॉर्ड डिस्ट्रीब्यूशन, डाउनसाइड प्रोबिलिटी, और आत्मविश्वास - केवल औसत इनाम नहीं।"
      },
      {
        "label": "डेटा अंतर्दृष्टि",
        "title": "अन्वेषण प्रशिक्षण वितरण में परिवर्तन",
        "body": "बैंडिट अवलोकन अग्रिम में एकत्रित एक i.i.d. डेटासेट नहीं हैं। नीति यह चुनती है कि क्या व्यवहार्य हो जाता है, चयन पूर्वाग्रह बनाना कि मूल्यांकन और ऑफ-पॉलिसी लर्निंग को पता होना चाहिए।"
      },
      {
        "label": "ऑपरेशनल nuance",
        "title": "लगातार कदम आकार बहाव के तहत मदद",
        "body": "एक नमूना औसत वजन सभी इतिहास समान रूप से। यदि रिवॉर्ड डिस्ट्रीब्यूशन बदल जाता है, तो Q←Q+α(R-Q) निरंतर α छूट की कहानी अवलोकन और हाल के व्यवहार को ट्रैक करता है।"
      },
      {
        "label": "आवेदन",
        "title": "शिक्षा एक प्रासंगिक बंधन हो सकता है",
        "body": "एक अध्ययन प्रणाली शिक्षार्थी संदर्भ का उपयोग करके एक स्पष्टीकरण या व्यायाम चुन सकती है और देरी से मास्टरी सिग्नल का निरीक्षण कर सकती है। सुरक्षा फर्श और शैक्षणिक बाधाओं को प्रयोग को सीमित करना चाहिए।"
      }
    ],
    "resources": [
      {
        "type": "पुस्तक",
        "title": "रीइन्फोर्समेंट लर्निंग: एक परिचय, दूसरा संस्करण",
        "creator": "Richard S. Sutton & Andrew G. Barto · MIT Press",
        "why": "अध्याय 1 और 2 इस व्याख्यान में उपयोग किए जाने वाले Tic-Tac-toe और बैंडिट उदाहरणों को औपचारिक रूप से व्यवस्थित करते हैं।",
        "url": "https://mitpress.mit.edu/9780262039246/reinforcement-learning/"
      },
      {
        "type": "देखो",
        "title": "रीइन्फोर्समेंट लर्निंग का परिचय",
        "creator": "DeepMind x UCL",
        "why": "एजेंट्स, रिवार्ड्स, मूल्यों, नीतियों और RL समस्या का एक विश्वविद्यालय स्तर का अवलोकन।",
        "url": "https://www.youtube.com/watch?v=TCCjZe0y4Qc"
      },
      {
        "type": "स्लाइड",
        "title": "अन्वेषण और नियंत्रण",
        "creator": "DeepMind x UCL",
        "why": "पूर्ण रीइन्फोर्समेंट लर्निंग में नियंत्रण के साथ बैंडिट्स और अन्वेषण रणनीतियों को जोड़ता है।",
        "url": "https://storage.googleapis.com/deepmind-media/UCL%20x%20DeepMind%202021/Lecture%202-%20Exploration%20and%20control_slides.pdf"
      },
      {
        "type": "ट्यूटोरियल",
        "title": "प्रशिक्षण एक एजेंट on FrozenLake",
        "creator": "Farama Foundation · Gymnasium",
        "why": "एक कॉम्पैक्ट, रनेबल क्यू-लर्निंग उदाहरण जो मूल्य अद्यतन और कोड में अन्वेषण को बदल देता है।",
        "url": "https://gymnasium.farama.org/main/tutorials/training_agents/frozenlake_q_learning/"
      },
      {
        "type": "ट्यूटोरियल",
        "title": "ब्लैकजैक क्यू-लर्निंग",
        "creator": "Farama Foundation · Gymnasium",
        "why": "राज्यों, कार्यों, रिटर्न और epsilon-greedy नियंत्रण के लिए एक दूसरा सारणीबद्ध वातावरण।",
        "url": "https://gymnasium.farama.org/tutorials/training_agents/blackjack_tutorial/"
      }
    ],
    "quiz": [
      {
        "question": "व्याख्यान के Tic-Tac-toe तैयार करने में, एक राज्य क्या है?",
        "options": [
          "एक बोर्ड विन्यास",
          "केवल अंतिम जीत या हानि",
          "प्रतिद्वंद्वी की पहचान",
          "सीखने की दर"
        ],
        "answer": 0,
        "explanation": "बोर्ड विन्यास में एक कानूनी कदम चुनने और भविष्य के परिणाम का आकलन करने के लिए इस्तेमाल की गई जानकारी शामिल है।",
        "optionNotes": [
          "सही: प्रत्येक बोर्ड व्यवस्था एक निर्णय की स्थिति है।",
          "यह एक परिणाम है, पूर्ण राज्य नहीं।",
          "पहचान किसी अन्य मॉडल में संदर्भ हो सकती है, लेकिन यह स्पष्ट अवस्था नहीं है।",
          "सीखने की दर एक एल्गोरिदम पैरामीटर है।"
        ]
      },
      {
        "question": "क्यों मिनीमैक्स उदाहरण में अपूर्ण प्रतिद्वंद्वी के खिलाफ सीखने से अलग है?",
        "options": [
          "एक इष्टतम विरोधी के लिए मिनीमैक्स योजना",
          "मिनिमम को कोई गेम नियम की आवश्यकता नहीं है",
          "मिनिमम एक इनाम वितरण है",
          "मिनीमैक्स केवल यादृच्छिक चाल से अद्यतन करता है"
        ],
        "answer": 0,
        "explanation": "मानक मिनीमैक्स इष्टतम विरोध खेलने के तहत चाल का मूल्यांकन करता है; गलतियों के खिलाफ अनुभव ट्रेजेक्टरी को उजागर कर सकता है, इसकी सबसे खराब केस नीति का चयन नहीं करेगी।",
        "optionNotes": [
          "सही: प्रतिद्वंद्वी को शिक्षार्थी के परिणाम को कम करने के लिए माना जाता है।",
          "मिनिमेक्स को एक ज्ञात गेम ट्री या उत्तराधिकारी फंक्शन की आवश्यकता होती है।",
          "यह एक योजना एल्गोरिथ्म है, जो इनाम मॉडल नहीं है।",
          "इसके बैकअप व्यवस्थित हैं, यादृच्छिक चाल तक सीमित नहीं है।"
        ]
      },
      {
        "question": "गतिशील प्रोग्रामिंग की क्या महत्वपूर्ण आवश्यकता पर जोर दिया गया था?",
        "options": [
          "संक्रमण और इनाम का एक मॉडल",
          "A GPU",
          "केवल टर्मिनल इनाम",
          "एक विरोधी जो बेतरतीब ढंग से खेलता है"
        ],
        "answer": 0,
        "explanation": "शास्त्रीय गतिशील प्रोग्रामिंग पर्यावरण के ज्ञात मॉडल का उपयोग करके उम्मीद बैकअप करता है।",
        "optionNotes": [
          "सही: संक्रमण और इनाम गतिशीलता बेलमैन बैकअप का समर्थन करते हैं।",
          "समझौता मदद कर सकता है लेकिन निश्चित आवश्यकता नहीं है।",
          "डीपी एक ट्रेजेक्टरी भर में पुरस्कार का उपयोग कर सकता है।",
          "कोई यादृच्छिक विरोधी की आवश्यकता नहीं है।"
        ]
      },
      {
        "question": "क्या विकासवादी नीति खोज की सीमा पर प्रकाश डाला गया था?",
        "options": [
          "संपूर्ण राजनीति मूल्यांकन मोटे क्रेडिट देता है",
          "यह नीतियों का प्रतिनिधित्व नहीं कर सकता",
          "यह हमेशा डेरिवेटिव की जरूरत है",
          "यह केवल वास्तविक खेलों में काम करता है"
        ],
        "answer": 0,
        "explanation": "स्कोरिंग पूर्ण नीतियों को सीधे प्रकट नहीं किया जाता है कि किस राज्य या कार्रवाई ने सफलता या विफलता का कारण बना दिया है।",
        "optionNotes": [
          "सही: क्रेडिट संकेत एक पूरे उम्मीदवार से जुड़ा हुआ है।",
          "एक नीति वास्तव में क्या विकासवादी खोज प्रतिनिधित्व कर सकते हैं।",
          "कई विकासवादी तरीके व्युत्पन्न-मुक्त हैं।",
          "वे सांख्यिकीय मूल्यांकन के तहत काम कर सकते हैं।"
        ]
      },
      {
        "question": "खेल-ट्री चित्रण में क्या शोषण का मतलब है?",
        "options": [
          "उच्चतम वर्तमान अनुमान के साथ उत्तराधिकारी चुनें",
          "लागत की परवाह किए बिना एक unvisited कदम चुनें",
          "प्रत्येक राज्य को एक-एक करके अद्यतन करें",
          "प्रतिद्वंद्वी सहयोग का आकलन करें"
        ],
        "answer": 0,
        "explanation": "एक्सप्लोएशन का उपयोग करके कार्रवाई का चयन करने के लिए किया जाता है।",
        "optionNotes": [
          "सही: यह वर्तमान अनुमानों के संबंध में अभिवादन है।",
          "यह एक क्रूड अन्वेषण नियम का वर्णन करता है।",
          "मूल्य सभी बनने के बजाय सबूत आधारित रहते हैं।",
          "विपक्षी व्यवहार शोषण द्वारा पुनर्निर्धारित नहीं है।"
        ]
      },
      {
        "question": "क्यों जानबूझकर पता लगाने?",
        "options": [
          "भविष्य के विकल्पों में सुधार करने वाली जानकारी प्राप्त करने के लिए",
          "अगले इनाम की गारंटी के लिए अधिकतम है",
          "सभी अनिश्चितताओं को तुरंत हटाने के लिए",
          "पुरस्कार एकत्र करने से बचने के लिए"
        ],
        "answer": 0,
        "explanation": "अन्वेषण अल्पकालिक अफसोस हो सकता है लेकिन अनिश्चितता को कम कर सकता है और बेहतर कार्रवाई की खोज कर सकता है।",
        "optionNotes": [
          "सही: जानकारी का भविष्य का निर्णय मूल्य है।",
          "अब एक एक्सप्लोरेटरी कार्रवाई खराब हो सकती है।",
          "एक परीक्षण शायद ही कभी सभी अनिश्चितता को हटा देता है।",
          "रिवॉर्ड्स अभी भी एकत्र हुए हैं; जानकारी अतिरिक्त लाभ है।"
        ]
      },
      {
        "question": "V(s) में ← V(s)+α[V(s′)–V(s)], V(s′)–V(s) क्या है?",
        "options": [
          "एक कदम भविष्यवाणी त्रुटि",
          "एपिसोड की लंबाई",
          "कार्रवाई संभावना",
          "पुरस्कार भिन्नता"
        ],
        "answer": 0,
        "explanation": "यह उपाय करता है कि बाद में अनुमान पूर्ववर्ती राज्य के लिए वर्तमान भविष्यवाणी से अलग है।",
        "optionNotes": [
          "सही: इसके संकेत और परिमाण अद्यतन ड्राइव।",
          "समय-समय पर गणना यहां दिखाई नहीं देती है।",
          "नीति संभावना एक अलग मात्रा है।",
          "विविधता को एकाधिक पुरस्कार अवलोकन की आवश्यकता होती है।"
        ]
      },
      {
        "question": "वृद्धिशील अद्यतन में एक बड़ा α क्या करता है?",
        "options": [
          "नए लक्ष्य को अधिक प्रभाव देता है",
          "गारंटी अभिसरण",
          "बनाना γ शून्य के बराबर",
          "अन्वेषण को खत्म करना"
        ],
        "answer": 0,
        "explanation": "चरण का आकार नियंत्रित करता है कि पुराने अनुमान नए लक्ष्य की ओर कैसे चलता है।",
        "optionNotes": [
          "Correct: बड़ा α हाल के सबूतों के लिए अधिक दृढ़ता से प्रतिक्रिया करता है।",
          "बहुत बड़े या खराब अनुसूचित कदम अभिसरण को रोक सकते हैं।",
          "α और γ विभिन्न भूमिकाओं की सेवा करते हैं।",
          "अन्वेषण नीति द्वारा नियंत्रित किया जाता है।"
        ]
      },
      {
        "question": "एक गैर-टर्मिनल संक्रमण के लिए कौन-सा लक्ष्य है?",
        "options": [
          "Rt+1 + γV(St+1)",
          "अकेले",
          "α + γ",
          "सबसे बड़ा पुरस्कार"
        ],
        "answer": 0,
        "explanation": "TD(0) तत्काल इनाम से बूटस्ट्रैप्स और अगले राज्य के रियायती अनुमान।",
        "optionNotes": [
          "सही: यह एक कदम लक्ष्य है।",
          "यह भविष्यवाणी अद्यतन की जा रही है, लक्ष्य नहीं है।",
          "पैरामीटर्स को रिटर्न बनाने के लिए नहीं जोड़ा जाता है।",
          "महसूस किया इनाम और अगले मूल्य लक्ष्य को परिभाषित करता है, वैश्विक अधिकतम नहीं।"
        ]
      },
      {
        "question": "एक ड्रॉ का इलाज करना और समान रूप से नुकसान को सबसे अच्छा समझा जाता है?",
        "options": [
          "एक पुरस्कार-डिज़ाइन विकल्प",
          "RL का एक प्रमेय",
          "केवल मिनीमैक्स की संपत्ति",
          "बैंडिट्स की आवश्यकता"
        ],
        "answer": 0,
        "explanation": "Outcome प्राथमिकता पुरस्कार के माध्यम से प्रवेश करती है; एक अन्य डिजाइनर ड्रॉ और नुकसान के लिए अलग-अलग मानों को असाइन कर सकता है।",
        "optionNotes": [
          "सही: उद्देश्य सीखा वरीयता निर्धारित करते हैं।",
          "RL इस तरह के सार्वभौमिक समानता को लागू नहीं करता है।",
          "मिनीमैक्स उपयोगिताओं को भी अलग कर सकता है।",
          "बाद में बैंडिट उदाहरण इस विकल्प से संबंधित नहीं है।"
        ]
      },
      {
        "question": "व्याख्यान के k-armed bandit nonassociative क्या बनाता है?",
        "options": [
          "एकाधिक संदर्भों के बजाय एक आवर्ती स्थिति है",
          "रिवॉर्ड हमेशा शून्य होते हैं",
          "कार्रवाई दोहरा नहीं सकता",
          "एजेंट हर पुरस्कार वितरण जानता है"
        ],
        "answer": 0,
        "explanation": "एक ही क्रिया-चयन समस्या एक बदलते संदर्भ अवस्था के बिना दोहराती है।",
        "optionNotes": [
          "सही: कार्रवाई विकल्प विभिन्न मनाया संदर्भों के साथ जुड़ा नहीं है।",
          "बैंडिट पुरस्कार कई मान ले सकते हैं।",
          "दोहराया खींच सीखने के लिए केंद्रीय हैं।",
          "वितरण शुरू में अज्ञात हैं।"
        ]
      },
      {
        "question": "Q*(a) क्या दर्शाता है?",
        "options": [
          "कार्रवाई को चुनने पर अपेक्षित इनाम सशर्त",
          "संभावना है कि कार्रवाई एक चयनित है",
          "पुल की कुल संख्या",
          "अधिकतम रिवॉर्ड"
        ],
        "answer": 0,
        "explanation": "स्टार पर्यावरण के इनाम वितरण के तहत वास्तविक कार्रवाई मूल्य को दर्शाता है।",
        "optionNotes": [
          "Correct: q * (a) = E [Rt = At = a]।",
          "चयन संभावना नीति से संबंधित है।",
          "पुल की गिनती आमतौर पर Nt (a) है।",
          "अधिकतम नमूना एक उम्मीद नहीं है।"
        ]
      },
      {
        "question": "Qt(a) किस प्रकार Qt(a) से भिन्न है?",
        "options": [
          "Qt(a) शिक्षार्थी का वर्तमान अनुमान है",
          "Qt(a) हमेशा सटीक है",
          "Qt(a) एक संक्रमण संभावना है",
          "Qt(a) राज्यों की संख्या है"
        ],
        "answer": 0,
        "explanation": "Qt(a) की गणना उस साक्ष्य से की जाती है जिसे समय-समय पर देखा जाता है और यह अज्ञात वास्तविक अर्थ से भिन्न हो सकता है।",
        "optionNotes": [
          "सही: यह एक विकसित अनुमान है।",
          "फिनाइट नमूने में आम तौर पर त्रुटि होती है।",
          "एक साधारण बैंडिट में कोई संक्रमण मॉडल की आवश्यकता नहीं है।",
          "यह एक मूल्य नहीं है, एक राज्य की गिनती है।"
        ]
      },
      {
        "question": "कार्रवाई का वास्तविक मूल्य क्या है 2: संभावना 0.88 और 100 के साथ 0 इनाम?",
        "options": [
          "12",
          "88",
          "50",
          "100"
        ],
        "answer": 0,
        "explanation": "E[R]=0.88×0+0.12×100=12.",
        "optionNotes": [
          "सही: यह संभावना भारित मतलब है।",
          "88 एक प्रतिशत है, अपेक्षित इनाम नहीं है।",
          "दो परिणाम समान रूप से संभावना नहीं हैं।",
          "100 समय का केवल 12% होता है।"
        ]
      },
      {
        "question": "10 से 35 तक एक समान इनाम की गणना, एक्शन 3 का क्या मतलब है?",
        "options": [
          "12.5",
          "25",
          "17.5",
          "10"
        ],
        "answer": 0,
        "explanation": "एक समान वितरण का मतलब मध्य बिंदु है: (-10+35) / 2 = 12.5।",
        "optionNotes": [
          "सही: मध्य बिंदु एक समान अंतराल के लिए मतलब बराबर है।",
          "25 रेंज चौड़ाई माइनस एक संकेत गलती है।",
          "17.5 केवल ऊपरी समापन बिंदु है।",
          "-10 निम्न सीमा है।"
        ]
      },
      {
        "question": "बराबर संभावना परिणाम 0, 20 और वर्दी(8,18) के लिए एक्शन 4 का क्या मतलब है?",
        "options": [
          "11",
          "13",
          "20",
          "33"
        ],
        "answer": 0,
        "explanation": "समान घटक का मतलब 13, है (0+20+13)/3=11.",
        "optionNotes": [
          "सही: औसत तीन घटक का मतलब है।",
          "13 केवल समान घटक का मतलब है।",
          "20 केवल एक मिश्रण घटक है।",
          "33 सामान्यीकृत योग है।"
        ]
      },
      {
        "question": "कौन-सा कार्य जोखिम-न्यूट्रल अपेक्षित-reward उद्देश्य के तहत इष्टतम है?",
        "options": [
          "एक्शन 3",
          "एक्शन 1",
          "एक्शन 2",
          "एक्शन 4"
        ],
        "answer": 0,
        "explanation": "इसकी अनुमानित कीमत 12.5 से अधिक 12, 11, और 8.",
        "optionNotes": [
          "सही: इसका मतलब उच्चतम है।",
          "एक्शन 1 सुरक्षित है लेकिन इसका मतलब है 8.",
          "एक्शन 2 का मतलब है 12.",
          "एक्शन 4 का मतलब है 11."
        ]
      },
      {
        "question": "क्यों एक जोखिम-संवेदनशील निर्णय निर्माता अभी भी कार्रवाई 1 पसंद करते हैं?",
        "options": [
          "यह हमेशा 8 लौटाता है और इसमें शून्य विचरण होता है",
          "यह उच्चतम अपेक्षित मूल्य है",
          "यह हर दूसरे हाथ को प्रकट करता है",
          "यह पुरस्कार स्थिर बनाता है"
        ],
        "answer": 0,
        "explanation": "हालांकि इसकी लंबी अवधि का मतलब कम है, इसके विपरीत भिन्नता को हटा देता है।",
        "optionNotes": [
          "सही: निश्चितता जोखिम या सुरक्षा बाधाओं के तहत मामला हो सकता है।",
          "एक्शन 3 का सबसे ज्यादा मतलब है।",
          "एक हाथ का पुल प्रतिफल पुरस्कार प्रकट नहीं करता है।",
          "एक हाथ का चयन स्थिरता का निर्धारण नहीं करता है।"
        ]
      },
      {
        "question": "शुरुआती भाग्यशाली नमूने के बाद एक पूरी तरह से ग्रीटिंग पॉलिसी के साथ क्या हो सकता है?",
        "options": [
          "यह एक उपमहाद्वीप हाथ पर अटक जा सकता है",
          "यह हमेशा इष्टतम तेज लगता है",
          "यह अनचाहे हथियारों से पुरस्कारों का निरीक्षण करता है",
          "यह सभी अनुमानों को निष्पक्ष बनाता है"
        ],
        "answer": 0,
        "explanation": "अन्वेषण के बिना, एक अधिक अनुमानित बांह का चयन किया जा सकता है जबकि बेहतर विकल्प कम से कम रह जाते हैं।",
        "optionNotes": [
          "सही: जल्दी शोर गलत विकल्प में लॉक कर सकते हैं।",
          "ग्रेडी व्यवहार की कोई खोज की गारंटी नहीं है।",
          "बंदी प्रतिक्रिया केवल चयनित कार्रवाई के इनाम को प्रकट करती है।",
          "अनुकूली चयन इसे हटाने के बजाय पूर्वाग्रह पेश कर सकते हैं।"
        ]
      },
      {
        "question": "É-greedy कार्रवाई चयन में, क्या संभावना के साथ होता है?",
        "options": [
          "एजेंट अभिवादन के बजाय खोजता है",
          "सभी कार्रवाई मान रीसेट",
          "प्रकरण समाप्त",
          "इनाम को छूट दी जाती है"
        ],
        "answer": 0,
        "explanation": "To allocate a नियंत्रित अंश निर्णय लेने के लिए, आमतौर पर एक यादृच्छिक कार्रवाई के माध्यम से.",
        "optionNotes": [
          "Correct: É अन्वेषण संभावना है।",
          "अनुमान रीसेट नहीं होते हैं।",
          "समाप्ति पर्यावरण परिभाषित है।",
          "छूट का उपयोग करता है, नहीं।"
        ]
      },
      {
        "question": "आशावादी प्रारंभिक कार्रवाई मूल्यों का उद्देश्य क्या है?",
        "options": [
          "आरंभिक अन्वेषण को प्रोत्साहित करें क्योंकि अपात्र क्रियाएं आशाजनक लगती हैं",
          "प्रत्येक हाथ सुरक्षित है",
          "इनाम शोर निकालें",
          "एक ज्ञात संक्रमण मॉडल की आवश्यकता है"
        ],
        "answer": 0,
        "explanation": "उच्च प्रारंभिक अनुमानों से चयनित हथियारों को नीचे की ओर संशोधित किया जा सकता है, जिससे अन्य हथियारों को मौका मिलता है।",
        "optionNotes": [
          "सही: आशावाद क्षणिक अन्वेषण बनाता है।",
          "अनुकूलन एक सुरक्षा प्रमाण पत्र नहीं है।",
          "रिवार्ड यादृच्छिकता बनी हुई है।",
          "बैंडिट मूल्य प्रारंभिककरण को कोई संक्रमण मॉडल की आवश्यकता नहीं है।"
        ]
      },
      {
        "question": "क्या अतिरिक्त मात्रा अनुमानित अर्थ के अलावा एक ऊपरी-विश्वविद्यालय विधि का उपयोग करती है?",
        "options": [
          "एक्शन गिनती के आधार पर एक अनिश्चितता बोनस",
          "भविष्य में पुरस्कार",
          "टर्मिनल-स्टेट वैल्यू",
          "केवल न्यूनतम इनाम"
        ],
        "answer": 0,
        "explanation": "UCB एक बोनस जोड़ता है जो कम-परीक्षण कार्यों, संतुलन मूल्य और अनिश्चितता के लिए बड़ा है।",
        "optionNotes": [
          "Correct: अनिश्चितता ने सैद्धांतिक अन्वेषण को प्रेरित किया।",
          "भविष्य के पुरस्कार अज्ञात हैं।",
          "एक साधारण बैंडिट में कोई टर्मिनल-स्टेट बैकअप नहीं है।",
          "केवल एक न्यूनतम का उपयोग एक अलग जोखिम उद्देश्य लक्ष्य होगा।"
        ]
      },
      {
        "question": "क्यों एक स्थिर कदम आकार एक गैर-स्टेशनरी बैंडिट में बेहतर हो सकता है?",
        "options": [
          "यह हाल ही में दूर इतिहास की तुलना में अधिक प्रभाव देता है",
          "यह समान रूप से सभी इतिहास का औसत है",
          "यह किसी भी मूल्य परिवर्तन को रोकता है",
          "यह डेटा देखने से पहले बहाव की पहचान करता है"
        ],
        "answer": 0,
        "explanation": "एक्सपोनेंशियल रिसीजन वेटिंग उन रिवॉर्ड डिस्ट्रीब्यूशनों को ट्रैक करने में मदद करता है जो समय के साथ बदलते हैं।",
        "optionNotes": [
          "Correct: पुराने सबूत ज्यामितीय रूप से क्षय करते हैं।",
          "एक नमूना औसत प्रत्येक अवलोकन के बराबर अंतिम वजन देता है।",
          "सकारात्मक α अनुमान अद्यतन करता है।",
          "Drift टिप्पणियों से प्रभावित है, अग्रिम में ज्ञात नहीं है।"
        ]
      },
      {
        "question": "क्यों बैंडविड्थ प्रशिक्षण डेटा नीति-निर्भर है?",
        "options": [
          "पॉलिसी तय करती है कि कौन सी कार्रवाई का इनाम वैध हो जाता है",
          "प्रत्येक हाथ हर दौर में एक इनाम प्रकट करता है",
          "तैनाती से पहले रिवार्ड लेबल एकत्र किए जाते हैं",
          "टिप्पणियों पर कार्रवाई का कोई प्रभाव नहीं पड़ता"
        ],
        "answer": 0,
        "explanation": "केवल चयनित भुजाओं का उत्पादन होता है, इसलिए व्यवहार नीति डेटासेट को आकार देती है।",
        "optionNotes": [
          "सही: कार्रवाई विकल्प अवलोकन को नियंत्रित करता है।",
          "Unchosen counterfactual पुरस्कार छिपा रहे हैं।",
          "बंदी प्रतिक्रिया कार्रवाई के बाद ऑनलाइन आती है।",
          "कार्रवाई सीधे निर्धारित करती है कि किस इनाम का नमूना है।"
        ]
      },
      {
        "question": "अनुकूली शिक्षा के लिए व्याख्यान के बैंडिट विचार का अनुवाद करने का सबसे अच्छा तरीका क्या है?",
        "options": [
          "कार्यों के रूप में हस्तक्षेप को परिभाषित करना और पुरस्कार के रूप में प्रशिक्षित सीखने के परिणामों को मापना",
          "मूल्यांकन के बिना हमेशा के लिए सबक यादृच्छिक",
          "राज्य के रूप में परीक्षा स्कोर का उपयोग करें लेकिन कभी भी फीडबैक नहीं मिला",
          "गारंटी हर प्रयोग हानिरहित है"
        ],
        "answer": 0,
        "explanation": "अन्वेषण पर सुरक्षा और निष्पक्षता की कमी को लागू करते हुए एक उपयोगी फॉर्मूलेशन लिंक शैक्षणिक विकल्प",
        "optionNotes": [
          "सही: यह क्रियाओं, फीडबैक और जिम्मेदार सीमाओं को निर्दिष्ट करता है।",
          "अन्वेषण सबूत संचालित होना चाहिए, स्थायी शोर नहीं होना चाहिए।",
          "प्रतिक्रिया के बिना कोई कार्रवाई मान नहीं सीखा जा सकता है।",
          "कोई अनुभवजन्य हस्तक्षेप को हानिरहित की गारंटी नहीं दी जा सकती है; बाधाओं और निगरानी जोखिम को कम करती है।"
        ]
      }
    ]
  }
};
