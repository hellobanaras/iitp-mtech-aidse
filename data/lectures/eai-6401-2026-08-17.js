// English-only publication unit.
export const eai6401Lecture20260817 = {
  en: {
  "title": "Reinforcement learning foundations: agents, rewards, values, and models",
  "lede": "The opening lecture defines reinforcement learning as experience-driven sequential decision making, distinguishes it from supervised and unsupervised learning, and builds the agent–environment framework around policies, reward signals, value functions, and optional environment models.",
  "instructionalInterval": "0:00–1:07:00",
  "reviewLevel": "Recording, timestamped transcript, and slide-frame verified",
  "coverage": [
    {
      "title": "Learning through interaction",
      "body": "An agent observes a problem situation, acts, receives evaluative feedback, and improves from accumulated experience rather than labeled action instructions."
    },
    {
      "title": "How RL differs",
      "body": "Supervised learning learns from labeled targets, unsupervised learning finds structure in data, while RL learns behavior that maximizes long-term reward."
    },
    {
      "title": "Sequential consequences",
      "body": "Trial-and-error, delayed rewards, action sequences, and stochastic outcomes make the quality of a decision depend on what follows it."
    },
    {
      "title": "Agent–environment loop",
      "body": "The agent maps perceived state to action; the environment changes state and returns a scalar evaluative signal."
    },
    {
      "title": "Four central elements",
      "body": "Policy, reward signal, value function, and an optional model answer different questions about behavior, goals, long-term desirability, and planning."
    },
    {
      "title": "Scope and limits",
      "body": "Value estimation can be difficult; model-based and model-free methods make different assumptions, while policy-gradient and exploration methods broaden the solution space."
    }
  ],
  "takeaway": "Reinforcement learning is not merely prediction from a fixed dataset: it is the problem of learning a policy from interaction so that a sequence of uncertain decisions maximizes expected long-term reward.",
  "slideTrail": [
    {
      "time": "0:00",
      "title": "Syllabus",
      "note": "Opening orientation lists course units and planned topics before the conceptual introduction begins."
    },
    {
      "time": "3:46",
      "title": "Learn to Control",
      "note": "Cycling motivates learning a control skill through practice and feedback rather than a complete labeled instruction set."
    },
    {
      "time": "13:52",
      "title": "Reinforcement Learning",
      "note": "Trial-and-error interaction is connected to behavioral psychology through the Pavlov's-dog illustration."
    },
    {
      "time": "25:16",
      "title": "Reinforcement Learning — characteristics",
      "note": "Rewards and punishments, no detailed supervision, delayed feedback, action sequences, state–action association, policy learning, and stochastic worlds."
    },
    {
      "time": "29:00",
      "title": "RL Applications",
      "note": "The lecture surveys autonomous helicopter control, backgammon/Neurogammon, and Go as sequential decision applications."
    },
    {
      "time": "33:12",
      "title": "RL Framework",
      "note": "Close interaction with a stochastic environment produces noisy, delayed scalar evaluation while the agent targets long-term performance."
    },
    {
      "time": "39:57",
      "title": "RL Framework — interaction loop",
      "note": "Annotated diagram shows action flowing to the environment and state plus evaluation/reward returning to the agent."
    },
    {
      "time": "40:00",
      "title": "Not Supervised Learning",
      "note": "Evaluative feedback tells the learner how an action turned out; it does not supply the correct action label for every state."
    },
    {
      "time": "42:00",
      "title": "RL Elements",
      "note": "Policy, reward signal, value function, and model of the environment are introduced as distinct components."
    },
    {
      "time": "43:00",
      "title": "Policy",
      "note": "The agent's behavior maps perceived states to actions and may be a simple table/function or require substantial computation."
    },
    {
      "time": "45:00",
      "title": "Reward Signal",
      "note": "Reward expresses the immediate goal and supplies the primary evaluative basis for changing policy."
    },
    {
      "time": "47:00",
      "title": "Value Function",
      "note": "Value represents expected accumulated future reward, allowing long-run desirability to differ from immediate payoff."
    },
    {
      "time": "50:16",
      "title": "Model of Environment",
      "note": "A model mimics environmental behavior for planning; methods that use it are model-based."
    },
    {
      "time": "56:31",
      "title": "Limitations and Scope",
      "note": "The slide discusses difficult value estimation, evolutionary policy search, and policy-gradient methods."
    },
    {
      "time": "1:02:00",
      "title": "Extended Example: Tic-Tac-Toe",
      "note": "States, legal moves, terminal outcomes, and rewards are identified as the ingredients of an RL formulation."
    },
    {
      "time": "1:06:00–1:07:00",
      "title": "Closing Q&A",
      "note": "A student asks whether environment means a domain; the instructor reframes it as the current problem situation/state, using a board game as context."
    }
  ],
  "summary": [
    {
      "title": "1. RL begins with experience, not a complete action manual",
      "sourceRefs": [
        "0:00–8:30",
        "Slides: Syllabus; Learn to Control"
      ],
      "paragraphs": [
        "The lecture opens with a student asking how reinforcement learning differs from meta-learning. The instructor postpones the comparison until each paradigm has been defined and begins with RL: an agent interacts with an environment, senses the current situation, takes an action using prior experience, and learns from what follows.",
        "Cycling is the main intuition. A teacher can suggest balance and grip, but cannot provide a labeled example for every angle, force, road condition, and correction. Competence emerges through repeated attempts and feedback. Formally, RL learns what to do—how to map situations to actions—so as to maximize a numerical reward signal over time."
      ]
    },
    {
      "title": "2. Environment, state, action, and agent form the decision problem",
      "sourceRefs": [
        "1:20–5:30",
        "Chess and cycling examples"
      ],
      "paragraphs": [
        "The environment is the external problem process with which the learner interacts. What the agent receives at a moment is more precisely a state or observation of that environment: for chess, the board configuration and piece positions. The agent is the decision maker; an action changes the interaction and leads to a new situation and feedback.",
        "The lecture sometimes uses environment and current situation interchangeably. A useful technical refinement is to keep them distinct: the environment contains dynamics, while a state summarizes the information needed to predict consequences. If the observation hides important information, the problem is partially observable."
      ]
    },
    {
      "title": "3. RL is neither ordinary supervised nor ordinary unsupervised learning",
      "sourceRefs": [
        "7:10–14:30",
        "Slide: Not Supervised Learning"
      ],
      "paragraphs": [
        "Supervised learning receives labeled examples or target outputs and optimizes prediction error. RL ordinarily receives evaluative consequences after actions, not the correct action label for every situation. Because the policy affects which states and rewards are observed, the training data is generated by the learner's behavior rather than fixed in advance.",
        "Unsupervised learning searches for latent structure, clusters, representations, or density patterns in data. RL may use those tools inside a larger agent, but its defining objective is different: choose behavior that maximizes expected return. The paradigms are complementary rather than mutually exclusive implementation boxes."
      ]
    },
    {
      "title": "4. Trial-and-error must solve delayed and stochastic credit",
      "sourceRefs": [
        "14:30–29:00",
        "Pavlov and characteristics slides"
      ],
      "paragraphs": [
        "Pavlov's dog illustrates association: a cue becomes predictive after repeated pairing with an outcome. In RL, rewards and punishments evaluate actions, but detailed supervision is absent. Some consequences arrive immediately; others appear only after a sequence of choices.",
        "Chess and Tic-Tac-Toe show delayed reward. A move may receive no immediate score yet determine a later win or loss. The agent must learn policies—not isolated good-looking actions—because a locally attractive move can damage long-term return. Stochasticity adds another challenge: the same state–action choice may not always produce the same transition or reward."
      ]
    },
    {
      "title": "5. Applications become difficult when exact enumeration explodes",
      "sourceRefs": [
        "29:00–33:12",
        "Slide: RL Applications"
      ],
      "paragraphs": [
        "The lecture cites autonomous helicopter control, backgammon, and Go. Backgammon's large branching factor makes a hand-written lookup table for every board position impractical. Systems such as Neurogammon use function approximation to generalize values or behavior across many states.",
        "These examples share sequential control under uncertainty, but RL is not limited to robotics and games. Any system with repeated decisions, measurable consequences, and a meaningful long-term objective can potentially be formulated as RL—provided exploration, safety, and reward design are acceptable."
      ]
    },
    {
      "title": "6. The interaction loop separates behavior from evaluation",
      "sourceRefs": [
        "33:12–42:00",
        "RL Framework diagrams"
      ],
      "paragraphs": [
        "The framework contains an agent and environment. At time t, the agent receives state or observation Sₜ, selects action Aₜ, and the environment produces reward Rₜ₊₁ and successor state Sₜ₊₁. This repeats, creating a trajectory from which the learner estimates consequences.",
        "The reward is a noisy delayed scalar evaluation, not a complete explanation. The objective is long-term performance, commonly formalized as expected return Gₜ = Rₜ₊₁ + γRₜ₊₂ + γ²Rₜ₊₃ + …. The discount γ controls how future rewards are weighted; it was not yet formalized on the slide but completes the mathematical picture."
      ],
      "formula": "Sₜ → Aₜ → (Rₜ₊₁, Sₜ₊₁) · Gₜ = Rₜ₊₁ + γRₜ₊₂ + γ²Rₜ₊₃ + …"
    },
    {
      "title": "7. Policy, reward, value, and model answer different questions",
      "sourceRefs": [
        "42:00–54:00",
        "Slides: RL Elements; Policy; Reward Signal; Value Function; Model of Environment"
      ],
      "paragraphs": [
        "A policy π describes behavior: for each perceived state, which action is selected, possibly with probabilities. The reward signal defines immediate success according to the task designer. A value function predicts long-term return from a state or state–action pair, so it can reject an immediately rewarding move that leads to future loss.",
        "A model predicts environmental behavior—what next state and reward may follow an action—and supports planning before acting in the real environment. Model-based methods use such a model; model-free methods learn values or policies directly from experience. Model-free does not mean information-free: it still depends on representations, feedback, exploration, and assumptions about the data-generating process."
      ]
    },
    {
      "title": "8. Value estimation, policy search, and exploration define the scope",
      "sourceRefs": [
        "54:00–1:07:00",
        "Limitations and Tic-Tac-Toe slides"
      ],
      "paragraphs": [
        "The instructor identifies value estimation as both central and difficult. The exact probability of winning from a mid-game state is rarely known, so practical algorithms bootstrap, sample, or approximate. Evolutionary search can be effective when the policy space is small, good policies are common, or search time is abundant, but whole-policy evaluation uses less of the state-to-action structure.",
        "Policy-gradient methods directly optimize parameterized policies and are previewed for later study. Exploration and exploitation close the lecture: exploitation reuses the currently best-known behavior, while exploration tries alternatives to improve knowledge. The closing Tic-Tac-Toe example identifies board positions as states, moves as actions, and wins/losses as delayed feedback."
      ]
    }
  ],
  "courseSignals": {
    "assignments": [],
    "homework": [],
    "labs": [],
    "projects": [],
    "references": [],
    "studentQuestions": [
      {
        "time": "0:13",
        "question": "How can reinforcement learning and meta-learning be distinguished in a simple way?",
        "response": "The instructor said each paradigm first needs its own definition; this lecture would establish RL, after which comparison with the simultaneously studied meta-learning course would be meaningful."
      },
      {
        "time": "1:06:23",
        "question": "When discussing a model of the environment, does environment mean the application domain?",
        "response": "The instructor answered that the environment is the problem process/situation at a moment; in a board game, the current configuration is the information the agent acts on."
      }
    ]
  },
  "keyTerms": [
    {
      "term": "Agent",
      "definition": "The learner or decision maker that selects actions."
    },
    {
      "term": "Environment",
      "definition": "The external process that responds to actions with new situations and rewards."
    },
    {
      "term": "State",
      "definition": "A representation of the situation used to predict consequences and choose actions."
    },
    {
      "term": "Action",
      "definition": "A choice made by the agent that can affect the environment."
    },
    {
      "term": "Policy π",
      "definition": "A mapping from states or observations to actions or action probabilities."
    },
    {
      "term": "Reward R",
      "definition": "A scalar evaluative signal representing immediate task preference."
    },
    {
      "term": "Return G",
      "definition": "The cumulative, often discounted, future reward from a time step."
    },
    {
      "term": "Value function",
      "definition": "Expected return from a state or state–action pair under a policy."
    },
    {
      "term": "Environment model",
      "definition": "A predictor of transitions and rewards used for planning."
    },
    {
      "term": "Model-based RL",
      "definition": "RL that plans or learns using an environment model."
    },
    {
      "term": "Model-free RL",
      "definition": "RL that learns values or policies without explicitly learning or using a transition model for planning."
    },
    {
      "term": "Exploration",
      "definition": "Trying insufficiently known actions to improve future decisions."
    },
    {
      "term": "Exploitation",
      "definition": "Choosing the action currently estimated to be best."
    }
  ],
  "insights": [
    {
      "label": "Terminology",
      "title": "Environment is not the same thing as state",
      "body": "The lecture uses them closely. Technically, the environment is the process and dynamics; the state is a sufficient description at a moment, while an observation may reveal only part of that state."
    },
    {
      "label": "Objective design",
      "title": "Reward is not the final objective by itself",
      "body": "The agent maximizes expected return, not necessarily the next reward. A poorly designed reward can produce reward hacking, unsafe shortcuts, or behavior that misses the designer's real intent."
    },
    {
      "label": "Learning theory",
      "title": "RL data is endogenous",
      "body": "The policy selects actions and therefore controls which outcomes enter the dataset. Exploration, off-policy correction, and counterfactual evaluation matter because unchosen-action rewards remain hidden."
    },
    {
      "label": "Credit assignment",
      "title": "Delayed reward creates the hard question",
      "body": "When a win follows many moves, the learner must decide which earlier choices deserve credit. Returns, temporal-difference errors, eligibility traces, and policy gradients offer different answers."
    },
    {
      "label": "Planning",
      "title": "A learned model can be useful without being perfect",
      "body": "Model-based RL trades model bias against sample efficiency. Planning with an imperfect model can still help, but repeated simulated rollouts may amplify prediction error."
    },
    {
      "label": "Evaluation",
      "title": "Long-term reward needs uncertainty and safety checks",
      "body": "An average return can hide rare catastrophic outcomes. Real deployments should report reward distributions, constraint violations, subgroup effects, and worst-case behavior."
    },
    {
      "label": "Course connection",
      "title": "The next lecture's Tic-Tac-Toe backup follows directly",
      "body": "This lecture defines states, policies, rewards, and values; the 18 August lecture turns them into an incremental update and then isolates exploration in a k-armed bandit."
    }
  ],
  "resources": [
    {
      "type": "Book",
      "title": "Reinforcement Learning: An Introduction, second edition",
      "creator": "Richard S. Sutton & Andrew G. Barto · MIT Press",
      "why": "Chapters 1–3 formalize the examples, agent–environment interface, return, policy, and value functions introduced here.",
      "url": "https://mitpress.mit.edu/9780262039246/reinforcement-learning/"
    },
    {
      "type": "Watch",
      "title": "Introduction to Reinforcement Learning",
      "creator": "DeepMind x UCL",
      "why": "A rigorous lecture-level treatment of agents, rewards, policies, values, and the sequential decision problem.",
      "url": "https://www.youtube.com/watch?v=TCCjZe0y4Qc"
    },
    {
      "type": "Guide",
      "title": "Part 1: Key Concepts in RL",
      "creator": "OpenAI Spinning Up",
      "why": "A compact mathematical bridge from the interaction loop to trajectories, return, policies, and value functions.",
      "url": "https://spinningup.openai.com/en/latest/spinningup/rl_intro.html"
    },
    {
      "type": "Tutorial",
      "title": "Basic Usage",
      "creator": "Farama Foundation · Gymnasium",
      "why": "Shows the reset–act–step loop in code and makes observations, rewards, termination, and actions concrete.",
      "url": "https://gymnasium.farama.org/main/introduction/basic_usage/"
    }
  ],
  "quiz": [
    {
      "question": "What most directly distinguishes reinforcement learning in this lecture?",
      "options": [
        "Learning a policy from interaction and evaluative reward",
        "Fitting labels from a fixed table only",
        "Finding clusters without actions",
        "Enumerating every future state exactly"
      ],
      "answer": 0,
      "explanation": "RL links actions to consequences and improves behavior to maximize long-term reward.",
      "optionNotes": [
        "Correct: interaction, action, and evaluation define the loop.",
        "That describes ordinary supervised learning too narrowly.",
        "That is an unsupervised objective.",
        "Exact enumeration is often impossible and is not required."
      ]
    },
    {
      "question": "In the chess example, what is closest to a state?",
      "options": [
        "The current board configuration",
        "The complete rules textbook",
        "Only the final winner",
        "The learning algorithm's source code"
      ],
      "answer": 0,
      "explanation": "Piece positions summarize the decision situation from which an action is chosen.",
      "optionNotes": [
        "Correct: it represents the current situation.",
        "Rules describe dynamics, not the current state.",
        "The winner is a terminal outcome.",
        "Implementation is not an environment state."
      ]
    },
    {
      "question": "What is the agent?",
      "options": [
        "The decision maker that selects actions",
        "The scalar reward",
        "The transition dynamics",
        "The dataset split"
      ],
      "answer": 0,
      "explanation": "The agent perceives information and acts according to its policy.",
      "optionNotes": [
        "Correct: it is the learner/controller.",
        "Reward evaluates outcomes.",
        "Dynamics belong to the environment or its model.",
        "A split is an evaluation convention."
      ]
    },
    {
      "question": "What does a policy specify?",
      "options": [
        "How states map to actions or action probabilities",
        "Only the immediate reward",
        "The true environment dynamics",
        "The number of training examples"
      ],
      "answer": 0,
      "explanation": "A policy is the agent's behavior rule.",
      "optionNotes": [
        "Correct: deterministic and stochastic mappings are both policies.",
        "Reward is a separate signal.",
        "A policy need not model transitions.",
        "Dataset size does not define behavior."
      ]
    },
    {
      "question": "What is the reward signal's primary role?",
      "options": [
        "Evaluate immediate task preference",
        "Reveal the correct action label in every state",
        "Store the whole trajectory",
        "Guarantee safety"
      ],
      "answer": 0,
      "explanation": "Reward is a scalar signal indicating locally desirable or undesirable outcomes.",
      "optionNotes": [
        "Correct: it expresses immediate evaluative feedback.",
        "RL usually lacks per-state correct-action labels.",
        "A trajectory contains many states, actions, and rewards.",
        "Reward alone cannot guarantee safe behavior."
      ]
    },
    {
      "question": "Why is a value function different from immediate reward?",
      "options": [
        "It predicts expected accumulated future reward",
        "It is always observed directly",
        "It ignores the policy",
        "It describes only the previous action"
      ],
      "answer": 0,
      "explanation": "Value summarizes long-run consequences, often under a specified policy.",
      "optionNotes": [
        "Correct: it can reject a tempting but harmful short-term move.",
        "Value generally must be estimated.",
        "Policy determines future behavior and therefore value.",
        "Value is forward-looking."
      ]
    },
    {
      "question": "What does an environment model support?",
      "options": [
        "Predicting consequences for planning",
        "Replacing the policy with labels",
        "Making every reward deterministic",
        "Removing the state space"
      ],
      "answer": 0,
      "explanation": "A model approximates transitions and rewards so the agent can reason before real interaction.",
      "optionNotes": [
        "Correct: imagined outcomes support planning.",
        "A model is not supervised action instruction.",
        "Stochastic models can predict distributions.",
        "States remain part of the formulation."
      ]
    },
    {
      "question": "Why is cycling used as an RL analogy?",
      "options": [
        "Skill improves through repeated attempts and feedback",
        "Every correction has a labeled target",
        "The road never changes",
        "Only one action is possible"
      ],
      "answer": 0,
      "explanation": "Detailed instructions cannot cover every balance correction; experience closes the loop.",
      "optionNotes": [
        "Correct: practice produces policy improvement.",
        "That would make the analogy supervised.",
        "Road and balance conditions vary.",
        "Cycling requires continuous sequences of choices."
      ]
    },
    {
      "question": "How does supervised feedback usually differ from RL feedback?",
      "options": [
        "It provides target outputs for examples",
        "It arrives only after full episodes",
        "It is always negative",
        "It depends on exploration"
      ],
      "answer": 0,
      "explanation": "Supervised examples pair inputs with desired labels or values.",
      "optionNotes": [
        "Correct: targets specify prediction error.",
        "Supervised targets need not wait for episodes.",
        "Labels are not positive/negative rewards.",
        "Exploration is central to interactive learning, not fixed labels."
      ]
    },
    {
      "question": "What is the defining objective of ordinary unsupervised learning?",
      "options": [
        "Discover structure in unlabeled data",
        "Maximize a sequential reward",
        "Choose actions in an environment",
        "Plan with a transition model"
      ],
      "answer": 0,
      "explanation": "Clustering, representation, and density learning seek structure rather than a control return.",
      "optionNotes": [
        "Correct: it captures the lecture's contrast.",
        "That is the RL objective.",
        "Action selection is not generally required.",
        "Planning is not the defining unsupervised task."
      ]
    },
    {
      "question": "Why is RL called trial-and-error learning?",
      "options": [
        "Consequences of an action must often be sampled",
        "The correct action is pre-labeled",
        "Errors are deleted from the dataset",
        "The environment never responds"
      ],
      "answer": 0,
      "explanation": "The learner tries behavior, observes results, and updates its preference.",
      "optionNotes": [
        "Correct: unknown consequences require interaction.",
        "Pre-labeling removes the core evaluation problem.",
        "Failures are informative evidence.",
        "Environmental response is essential."
      ]
    },
    {
      "question": "What makes delayed reward difficult?",
      "options": [
        "Earlier actions must receive credit or blame for later outcomes",
        "Rewards cannot be numerical",
        "States become labels",
        "Only the final action matters"
      ],
      "answer": 0,
      "explanation": "A terminal result may depend on a long sequence of choices.",
      "optionNotes": [
        "Correct: this is temporal credit assignment.",
        "Rewards are commonly numerical scalars.",
        "Delay does not turn states into labels.",
        "Earlier actions may be decisive."
      ]
    },
    {
      "question": "Why learn a policy rather than a single attractive action?",
      "options": [
        "Long-term quality depends on behavior across many future states",
        "Policies ignore state",
        "One action always wins",
        "Rewards are unavailable"
      ],
      "answer": 0,
      "explanation": "A locally rewarding move can lead to poor later situations.",
      "optionNotes": [
        "Correct: sequential consistency matters.",
        "Policies explicitly condition on state or observation.",
        "No universal action is assumed.",
        "Rewards exist but may be delayed/noisy."
      ]
    },
    {
      "question": "What does a stochastic environment imply?",
      "options": [
        "The same state–action pair may have different outcomes",
        "The agent has no policy",
        "All rewards are zero",
        "A model is impossible"
      ],
      "answer": 0,
      "explanation": "Transitions or rewards can be random variables rather than fixed outputs.",
      "optionNotes": [
        "Correct: the environment returns a distribution of outcomes.",
        "Policies operate in stochastic settings.",
        "Randomness does not imply zero reward.",
        "A probabilistic model is still possible."
      ]
    },
    {
      "question": "Which order matches the interaction loop?",
      "options": [
        "State observed → action selected → reward and next state returned",
        "Reward selected → label generated → state deleted",
        "Action observed → dataset split → model frozen",
        "Value chosen → environment removed → action labeled"
      ],
      "answer": 0,
      "explanation": "The agent acts from its current information and the environment produces feedback plus the successor situation.",
      "optionNotes": [
        "Correct: this is the standard step cycle.",
        "The agent does not select its reward.",
        "Dataset splitting is not the environment loop.",
        "The environment remains essential."
      ]
    },
    {
      "question": "What makes a method model-based?",
      "options": [
        "It uses a transition/reward model for planning or learning",
        "It has a neural network",
        "It uses no observations",
        "It always knows the optimal policy"
      ],
      "answer": 0,
      "explanation": "Model-based RL explicitly predicts environmental consequences.",
      "optionNotes": [
        "Correct: model use is the defining property.",
        "Neural networks appear in both model-based and model-free methods.",
        "Models still consume state/action information.",
        "A model does not automatically solve control."
      ]
    },
    {
      "question": "What makes a method model-free?",
      "options": [
        "It learns values or policy without explicit model-based planning",
        "It has no assumptions",
        "It receives no rewards",
        "It cannot use function approximation"
      ],
      "answer": 0,
      "explanation": "Model-free methods estimate behavior or value directly from experience.",
      "optionNotes": [
        "Correct: no explicit transition-model planning is required.",
        "Representation and sampling assumptions remain.",
        "Reward feedback is still central.",
        "Neural function approximation is common."
      ]
    },
    {
      "question": "Why can immediate reward be misleading in chess?",
      "options": [
        "Capturing a piece may enable a larger future loss",
        "Rewards never depend on moves",
        "The game has no terminal outcome",
        "Only supervised learning applies"
      ],
      "answer": 0,
      "explanation": "Long-term value can disagree with short-term gain.",
      "optionNotes": [
        "Correct: later consequences determine return.",
        "Moves create consequences.",
        "Win/loss is terminal feedback.",
        "Chess can be modeled with RL or planning."
      ]
    },
    {
      "question": "Why was backgammon used as an application example?",
      "options": [
        "Its large branching state space makes exhaustive tables impractical",
        "It has no actions",
        "Its rules change every turn",
        "It supplies labeled optimal moves"
      ],
      "answer": 0,
      "explanation": "Function approximation helps generalize across a huge number of positions.",
      "optionNotes": [
        "Correct: combinatorial growth motivates learning.",
        "Players choose moves.",
        "Stochastic dice do not mean rules change.",
        "Optimal labels are not provided for all states."
      ]
    },
    {
      "question": "What central limitation of value-based RL was emphasized?",
      "options": [
        "True state/action values can be hard to estimate",
        "Values are always known",
        "Rewards must be images",
        "Policies cannot depend on state"
      ],
      "answer": 0,
      "explanation": "Mid-game win probability and long-run return are generally unknown and require approximation.",
      "optionNotes": [
        "Correct: estimation is both central and difficult.",
        "If values were known, much learning would be unnecessary.",
        "Reward is a scalar in the framework.",
        "State dependence is fundamental."
      ]
    },
    {
      "question": "When can evolutionary policy search be attractive according to the lecture?",
      "options": [
        "When the policy space is small or good policies are easy to find",
        "Only when every transition is labeled",
        "When no evaluation is possible",
        "Only for one-step bandits"
      ],
      "answer": 0,
      "explanation": "Search is more feasible with limited combinations, common good solutions, or ample time.",
      "optionNotes": [
        "Correct: these conditions reduce search burden.",
        "Evolutionary evaluation can be derivative-free and unlabeled.",
        "Fitness/reward evaluation is required.",
        "It can search multi-step policies."
      ]
    },
    {
      "question": "What is a key attraction of policy-gradient methods?",
      "options": [
        "They optimize a parameterized policy directly",
        "They require a complete lookup table",
        "They remove stochasticity",
        "They provide correct labels"
      ],
      "answer": 0,
      "explanation": "Policy gradients use return-based signals to adjust policy parameters.",
      "optionNotes": [
        "Correct: direct policy optimization broadens the method family.",
        "Function approximation avoids exhaustive tables.",
        "Stochastic environments remain stochastic.",
        "They use evaluative returns, not action labels."
      ]
    },
    {
      "question": "What is exploitation?",
      "options": [
        "Choose the action currently estimated to be best",
        "Try an uncertain action for information",
        "Learn the transition model only",
        "Reset all values"
      ],
      "answer": 0,
      "explanation": "Exploitation uses present knowledge for expected near-term performance.",
      "optionNotes": [
        "Correct: it is greedy with respect to estimates.",
        "That is exploration.",
        "Model learning is a separate activity.",
        "No reset is implied."
      ]
    },
    {
      "question": "What is exploration?",
      "options": [
        "Try alternatives to improve knowledge and future reward",
        "Repeat the current best action forever",
        "Ignore feedback",
        "Guarantee the next reward"
      ],
      "answer": 0,
      "explanation": "Exploration sacrifices some immediate certainty to discover better behavior.",
      "optionNotes": [
        "Correct: information has future value.",
        "That is pure exploitation.",
        "Exploration is evaluated through feedback.",
        "An exploratory action can perform poorly."
      ]
    },
    {
      "question": "In the closing Q&A, how should 'environment' be interpreted?",
      "options": [
        "The problem process that presents the current situation and responds to actions",
        "Only the academic subject name",
        "Only the agent's source code",
        "A fixed labeled dataset"
      ],
      "answer": 0,
      "explanation": "The instructor used a board-game situation to show that the environment is what the agent interacts with; the current configuration is its state information.",
      "optionNotes": [
        "Correct: it connects process, state, and response.",
        "A domain is broader than the interactive environment instance.",
        "The agent is distinct from its environment.",
        "RL data is generated through action and response."
      ]
    }
  ]
}
};
