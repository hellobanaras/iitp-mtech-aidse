// One publication unit: English and Hindi are reviewed and rendered together.
export const eai6401Lecture20260817 = {
  "en": {
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
  },
  "hi": {
    "title": "रीइन्फोर्समेंट लर्निंग की नींव: एजेंट, पुरस्कार, मूल्य और मॉडल",
    "lede": "उद्घाटन व्याख्यान अनुभव संचालित अनुक्रमिक निर्णय लेने के रूप में रीइन्फोर्समेंट लर्निंग को परिभाषित करता है, इसे पर्यवेक्षण और अनसुपरवाइज़्ड लर्निंग से अलग करता है, और नीतियों, इनाम संकेतों, मूल्य कार्यों और वैकल्पिक पर्यावरण मॉडल के आसपास एजेंट-पर्यावरण ढांचे का निर्माण करता है।",
    "instructionalInterval": "0:00–1:07:00",
    "reviewLevel": "रिकॉर्डिंग, टाइमटाम्प्ड ट्रांसक्रिप्ट और स्लाइड-फ्रेम सत्यापित",
    "coverage": [
      {
        "title": "बातचीत के माध्यम से सीखना",
        "body": "एक एजेंट एक समस्या स्थिति का निरीक्षण करता है, कार्य करता है, मूल्यांकन प्रतिक्रिया प्राप्त करता है, और लेबल कार्रवाई निर्देशों के बजाय संचित अनुभव से बेहतर होता है।"
      },
      {
        "title": "RL कैसे भिन्न होता है",
        "body": "सुपरवाइज़्ड लर्निंग लेबल किए गए लक्ष्यों से सीखती है, जबकि अनसुपरवाइज़्ड लर्निंग डेटा में संरचना खोजती है; RL ऐसा व्यवहार सीखता है जो दीर्घकालिक रिवॉर्ड को अधिकतम करता है।"
      },
      {
        "title": "परिणाम",
        "body": "परीक्षण और त्रुटि, विलंबित रिवॉर्ड्स, एक्शन अनुक्रम और स्टोकैस्टिक परिणाम एक निर्णय की गुणवत्ता को बनाते हैं जो इस पर निर्भर करते हैं।"
      },
      {
        "title": "एजेंट-पर्यावरण पाश",
        "body": "एजेंट के नक्शे को कार्रवाई के लिए राज्य माना जाता है; पर्यावरण राज्य बदलता है और एक स्केलर मूल्यांकन संकेत देता है।"
      },
      {
        "title": "चार केंद्रीय तत्व",
        "body": "पॉलिसी, रिवॉर्ड सिग्नल, वैल्यू फंक्शन और वैकल्पिक मॉडल व्यवहार, लक्ष्य, दीर्घकालिक इच्छा और योजना के बारे में विभिन्न सवालों का जवाब देते हैं।"
      },
      {
        "title": "स्कोप और सीमाएं",
        "body": "मूल्य अनुमान मुश्किल हो सकता है; मॉडल-आधारित और मॉडल-मुक्त तरीके अलग-अलग धारणाएं बनाते हैं, जबकि पॉलिसी-ग्रेडेंट और अन्वेषण विधियां समाधान स्थान को व्यापक रूप से बढ़ाती हैं।"
      }
    ],
    "takeaway": "मजबूती सीखना केवल एक निश्चित डेटासेट से भविष्यवाणी नहीं है: यह बातचीत से एक नीति सीखने की समस्या है ताकि अनिश्चित निर्णयों का अनुक्रम अपेक्षित दीर्घकालिक इनाम को अधिकतम कर सके।",
    "slideTrail": [
      {
        "time": "0:00",
        "title": "पाठ्यक्रम",
        "note": "उद्घाटन अभिविन्यास पाठ्यक्रम इकाइयों को सूचीबद्ध करता है और अवधारणात्मक परिचय शुरू होने से पहले योजनाबद्ध विषयों को सूचीबद्ध करता है।"
      },
      {
        "time": "3:46",
        "title": "नियंत्रण",
        "note": "सायक्लिंग एक पूर्ण लेबल निर्देश सेट के बजाय अभ्यास और प्रतिक्रिया के माध्यम से नियंत्रण कौशल सीखने को प्रेरित करती है।"
      },
      {
        "time": "13:52",
        "title": "रीइन्फोर्समेंट शिक्षा",
        "note": "Trial-and-error बातचीत Pavlov के कुत्ते चित्रण के माध्यम से व्यवहार मनोविज्ञान से जुड़ा हुआ है।"
      },
      {
        "time": "25:16",
        "title": "रीइन्फोर्समेंट लर्निंग - विशेषताओं",
        "note": "पुरस्कार और सजा, कोई विस्तृत पर्यवेक्षण, विलंबित प्रतिक्रिया, एक्शन अनुक्रम, स्टेट-एक्शन एसोसिएशन, पॉलिसी लर्निंग, और स्टोकैस्टिक दुनिया।"
      },
      {
        "time": "29:00",
        "title": "RL आवेदन",
        "note": "व्याख्यान में स्वायत्त हेलीकॉप्टर नियंत्रण, बैकगैमॉन/न्यूरोगैमॉन और अन्य sequential decision applications के उदाहरण दिए गए।"
      },
      {
        "time": "33:12",
        "title": "RL फ्रेमवर्क",
        "note": "एक stochastic वातावरण के साथ बंद बातचीत शोर पैदा करती है, स्केलर मूल्यांकन में देरी होती है जबकि एजेंट दीर्घकालिक प्रदर्शन को लक्षित करता है।"
      },
      {
        "time": "39:57",
        "title": "RL फ्रेमवर्क - इंटरेक्शन लूप",
        "note": "Annotated आरेख पर्यावरण और राज्य प्लस मूल्यांकन / एजेंट को लौटने के लिए आगे की ओर बहने वाली कार्रवाई को दर्शाता है।"
      },
      {
        "time": "40:00",
        "title": "पर्यवेक्षण नहीं",
        "note": "Evaluative प्रतिक्रिया शिक्षार्थी को बताती है कि कैसे एक कार्रवाई हुई थी; यह हर राज्य के लिए सही एक्शन लेबल की आपूर्ति नहीं करता है।"
      },
      {
        "time": "42:00",
        "title": "RL तत्व",
        "note": "नीति, इनाम संकेत, मूल्य समारोह और पर्यावरण के मॉडल को अलग-अलग घटकों के रूप में पेश किया जाता है।"
      },
      {
        "time": "43:00",
        "title": "नीति",
        "note": "एजेंट के व्यवहार के नक्शे को कार्रवाई के लिए राज्यों को माना जाता है और एक सरल तालिका / कार्य हो सकता है या पर्याप्त गणना की आवश्यकता हो सकती है।"
      },
      {
        "time": "45:00",
        "title": "रिवार्ड सिग्नल",
        "note": "रिवार्ड तत्काल लक्ष्य को व्यक्त करता है और बदलती नीति के लिए प्राथमिक मूल्यांकन आधार की आपूर्ति करता है।"
      },
      {
        "time": "47:00",
        "title": "मूल्य समारोह",
        "note": "मूल्य अपेक्षित संचित भविष्य इनाम का प्रतिनिधित्व करता है, जो तत्काल भुगतान से अलग होने के लिए लंबी अवधि की इच्छा की अनुमति देता है।"
      },
      {
        "time": "50:16",
        "title": "पर्यावरण के मॉडल",
        "note": "एक मॉडल योजना के लिए पर्यावरण व्यवहार की नकल करता है; विधियां जो इसका उपयोग करती हैं वह मॉडल आधारित हैं।"
      },
      {
        "time": "56:31",
        "title": "सीमाएँ और दायरे",
        "note": "स्लाइड मुश्किल मूल्य अनुमान, विकासवादी नीति खोज, और नीतिगत तरीकों पर चर्चा करती है।"
      },
      {
        "time": "1:02:00",
        "title": "विस्तारित उदाहरण: Tic-Tac-toe",
        "note": "राज्यों, कानूनी चाल, टर्मिनल परिणाम और पुरस्कारों को RL फॉर्मूलेशन की सामग्री के रूप में पहचाना जाता है।"
      },
      {
        "time": "1:06:00–1:07:00",
        "title": "क्यू एंड ए समापन",
        "note": "एक छात्र पूछता है कि पर्यावरण का मतलब एक डोमेन है; प्रशिक्षक इसे मौजूदा समस्या की स्थिति / राज्य के रूप में फिर से प्रदर्शित करता है, एक बोर्ड गेम का उपयोग संदर्भ के रूप में करता है।"
      }
    ],
    "summary": [
      {
        "title": "1. RL अनुभव के साथ शुरू होता है, पूर्ण कार्रवाई मैनुअल नहीं",
        "sourceRefs": [
          "0:00–8:30",
          "स्लाइड: पाठ्यक्रम; नियंत्रण करना सीखें"
        ],
        "paragraphs": [
          "व्याख्यान एक छात्र के साथ खुलता है जो पूछता है कि कैसे रीइन्फोर्समेंट सीखना मेटा-लर्निंग से अलग है। प्रशिक्षक की तुलना तब तक स्थगित हो जाती है जब तक प्रत्येक प्रतिमान को परिभाषित नहीं किया गया है और आरएल के साथ शुरू होता है: एक एजेंट एक वातावरण के साथ बातचीत करता है, वर्तमान स्थिति को महसूस करता है, पूर्व अनुभव का उपयोग करके एक कार्रवाई लेता है, और किस प्रकार से सीखता है।",
          "सायक्लिंग मुख्य अंतर्ज्ञान है। एक शिक्षक संतुलन और पकड़ का सुझाव दे सकता है, लेकिन हर कोण, बल, सड़क की स्थिति और सुधार के लिए एक लेबल उदाहरण प्रदान नहीं कर सकता है। प्रतियोगिता बार-बार प्रयास और प्रतिक्रिया के माध्यम से उभरती है। औपचारिक रूप से, RL सीखता है कि क्या करना है - कार्यों के लिए स्थितियों को कैसे मैप करना है - ताकि समय के साथ एक संख्यात्मक इनाम संकेत को अधिकतम किया जा सके।"
        ]
      },
      {
        "title": "2. पर्यावरण, राज्य, कार्रवाई और एजेंट निर्णय की समस्या बनाते हैं",
        "sourceRefs": [
          "1:20–5:30",
          "शतरंज और साइकिल चालन उदाहरण"
        ],
        "paragraphs": [
          "पर्यावरण बाहरी समस्या प्रक्रिया है जिसके साथ शिक्षार्थी बातचीत करता है। एजेंट को एक पल में क्या प्राप्त होता है, उस वातावरण का एक राज्य या अवलोकन है: शतरंज, बोर्ड विन्यास और टुकड़ा पदों के लिए। एजेंट निर्णय निर्माता है; एक कार्रवाई बातचीत को बदल देती है और एक नई स्थिति और प्रतिक्रिया की ओर जाता है।",
          "व्याख्यान कभी-कभी पर्यावरण और वर्तमान स्थिति का आदान-प्रदान करता है। एक उपयोगी तकनीकी शोधन उन्हें अलग रखने के लिए है: पर्यावरण में गतिशीलता होती है, जबकि एक राज्य परिणामों की भविष्यवाणी करने के लिए आवश्यक जानकारी को संक्षेप में प्रस्तुत करता है। यदि अवलोकन महत्वपूर्ण जानकारी को छिपाता है, तो समस्या आंशिक रूप से प्रतिकूल है।"
        ]
      },
      {
        "title": "3. RL न तो साधारण सुपरवाइज़्ड और न ही साधारण अनसुपरवाइज़्ड लर्निंग है",
        "sourceRefs": [
          "7:10–14:30",
          "स्लाइड: पर्यवेक्षित लर्निंग नहीं"
        ],
        "paragraphs": [
          "सुपरवाइज़्ड लर्निंग को लेबल किए गए उदाहरण या लक्ष्य आउटपुट मिलते हैं और वह prediction error को optimize करती है। RL को आमतौर पर कार्रवाई के बाद evaluation signal मिलता है, हर स्थिति के लिए सही action label नहीं। नीति जिन states और rewards को उत्पन्न करती है, उन्हें प्रभावित करती है; इसलिए training data learner के व्यवहार से बनता है, पहले से तय नहीं होता।",
          "अनसुपरवाइज़्ड लर्निंग unlabeled data में structure, clusters, representations या density patterns खोजती है। RL किसी बड़े agent के भीतर ऐसे tools का उपयोग कर सकता है, लेकिन उसका मुख्य उद्देश्य अलग है: expected return को अधिकतम करने वाला व्यवहार चुनना। ये paradigms परस्पर-विरोधी implementation boxes नहीं, बल्कि complementary tools हैं।"
        ]
      },
      {
        "title": "4. परीक्षण और त्रुटि, देरी और स्टोकास्टिक क्रेडिट को हल करना चाहिए",
        "sourceRefs": [
          "14:30–29:00",
          "पावलोव और विशेषताओं स्लाइड"
        ],
        "paragraphs": [
          "पावलोव के कुत्ते को illustrates एसोसिएशन: एक क्यू एक परिणाम के साथ बार-बार जोड़ी के बाद पूर्वानुमानित हो जाता है। RL में, पुरस्कार और सजा कार्यों का मूल्यांकन करते हैं, लेकिन विस्तृत पर्यवेक्षण अनुपस्थित है। कुछ परिणाम तुरंत आते हैं; अन्य विकल्पों के अनुक्रम के बाद ही दिखाई देते हैं।",
          "शतरंज और Tic-Tac-toe शो में देरी हुई इनाम। एक चाल को तत्काल स्कोर प्राप्त नहीं हो सकता है, फिर भी बाद में जीत या नुकसान का निर्धारण कर सकता है। एजेंट को नीतियों को सीखना चाहिए - अलग-अलग अच्छे दिखने वाले कार्यों को नहीं - क्योंकि स्थानीय रूप से आकर्षक कदम दीर्घकालिक रिटर्न को नुकसान पहुंचा सकता है। स्टोकैस्टिकिटी एक और चुनौती जोड़ती है: एक ही राज्य-क्रिया विकल्प हमेशा एक ही संक्रमण या इनाम का उत्पादन नहीं कर सकता है।"
        ]
      },
      {
        "title": "5. अनुप्रयोग कठिन हो जाते हैं जब सटीक गणना का आकार बहुत बढ़ जाता है",
        "sourceRefs": [
          "29:00–33:12",
          "स्लाइड: RL अनुप्रयोग"
        ],
        "paragraphs": [
          "व्याख्यान स्वायत्त हेलीकाप्टर नियंत्रण, बैकगैमॉन और गो का हवाला देते हैं। बैकगैमॉन का बड़ा शाखा कारक हर बोर्ड की स्थिति के लिए एक हाथ से लिखने वाला टेबल बनाता है। न्यूरोगैमौन जैसे सिस्टम कई राज्यों में मूल्यों या व्यवहार को सामान्य करने के लिए फ़ंक्शन का उपयोग करते हैं।",
          "ये उदाहरण अनिश्चितता के तहत अनुक्रमिक नियंत्रण साझा करते हैं, लेकिन RL रोबोटिक्स और गेम तक सीमित नहीं है। बार-बार निर्णयों के साथ कोई भी प्रणाली, मापनीय परिणाम, और एक सार्थक दीर्घकालिक उद्देश्य संभावित रूप से RL के रूप में तैयार किया जा सकता है-प्रदान अन्वेषण, सुरक्षा, और इनाम डिजाइन स्वीकार्य हैं।"
        ]
      },
      {
        "title": "6. इंटरेक्शन लूप मूल्यांकन से व्यवहार को अलग करता है",
        "sourceRefs": [
          "33:12–42:00",
          "RL फ्रेमवर्क आरेख"
        ],
        "paragraphs": [
          "ढांचे में एक एजेंट और पर्यावरण होता है। समय पर टी, एजेंट को राज्य या अवलोकन सेंट प्राप्त होता है, कार्रवाई का चयन करता है At, और पर्यावरण पुरस्कार Rt+1 और उत्तराधिकारी राज्य ST+1 पैदा करता है। यह दोहराता है, जिसमें से शिक्षार्थी परिणाम का आकलन करता है, एक trajectory पैदा करता है।",
          "पुरस्कार एक शोर विलंबित स्केलर मूल्यांकन है, एक पूर्ण स्पष्टीकरण नहीं है। उद्देश्य दीर्घकालिक प्रदर्शन है, जिसे आमतौर पर अपेक्षित रिटर्न Gt = Rt + 1 + γRt + 2 + γ2Rt + 3 + ... के रूप में औपचारिक रूप से माना जाता है। छूट γ को नियंत्रित करता है कि भविष्य के इनाम को कैसे भारित किया जाता है; यह अभी तक स्लाइड पर औपचारिक नहीं किया गया था लेकिन गणितीय चित्र को पूरा करता है।"
        ],
        "formula": "Sₜ → Aₜ → (Rₜ₊₁, Sₜ₊₁) · Gₜ = Rₜ₊₁ + γRₜ₊₂ + γ²Rₜ₊₃ + …"
      },
      {
        "title": "7. नीति, इनाम, मूल्य और मॉडल विभिन्न प्रश्नों का उत्तर देते हैं",
        "sourceRefs": [
          "42:00–54:00",
          "स्लाइड्स: RL एलिमेंट्स; पॉलिसी; रिवार्ड सिग्नल; वैल्यू फंक्शन; पर्यावरण का मॉडल"
        ],
        "paragraphs": [
          "एक नीति π व्यवहार का वर्णन करती है: प्रत्येक कथित राज्य के लिए, जो कार्रवाई का चयन किया जाता है, संभवतः संभावना के साथ। पुरस्कार संकेत कार्य डिजाइनर के अनुसार तत्काल सफलता को परिभाषित करता है। एक वैल्यू फंक्शन एक स्टेट या स्टेट-एक्शन जोड़ी से दीर्घकालिक रिटर्न की भविष्यवाणी करता है, इसलिए यह तुरंत रिवार्डिंग मूव को अस्वीकार कर सकता है जो भविष्य में नुकसान की ओर जाता है।",
          "एक मॉडल पर्यावरण व्यवहार की भविष्यवाणी करता है- अगले राज्य और पुरस्कार क्या एक कार्रवाई का पालन कर सकते हैं-और वास्तविक वातावरण में अभिनय करने से पहले योजना का समर्थन करता है। मॉडल-आधारित तरीके इस तरह के मॉडल का उपयोग करते हैं; मॉडल-मुक्त तरीके अनुभव से सीधे मूल्यों या नीतियों को सीखते हैं। मॉडल-मुक्त का मतलब जानकारी-मुक्त नहीं है: यह अभी भी डेटा उत्पन्न करने की प्रक्रिया के बारे में प्रतिनिधित्व, प्रतिक्रिया, अन्वेषण और धारणाओं पर निर्भर करता है।"
        ]
      },
      {
        "title": "8. मूल्य अनुमान, नीति खोज और अन्वेषण क्षेत्र को परिभाषित करते हैं",
        "sourceRefs": [
          "54:00–1:07:00",
          "सीमाएं और Tic-Tac-toe स्लाइड"
        ],
        "paragraphs": [
          "प्रशिक्षक केंद्रीय और कठिन दोनों के रूप में मूल्य अनुमान की पहचान करता है। मध्य खेल राज्य से जीतने की सटीक संभावना शायद ही कभी ज्ञात है, इसलिए व्यावहारिक एल्गोरिदम बूटस्ट्रैप, नमूना, या लगभग। जब पॉलिसी स्पेस छोटा होता है, तो विकासवादी खोज प्रभावी हो सकती है, अच्छी नीतियां आम हैं, या खोज का समय प्रचुर मात्रा में होता है, लेकिन पूरे पॉलिसी का मूल्यांकन स्टेट-टू-एक्शन स्ट्रक्चर से कम होता है।",
          "पॉलिसी-ग्रेडिएंट विधियां सीधे मापदंड नीतियों को अनुकूलित करती हैं और बाद में अध्ययन के लिए समीक्षा की जाती हैं। अन्वेषण और शोषण व्याख्यान बंद: शोषण वर्तमान में सबसे प्रसिद्ध व्यवहार का पुन: उपयोग करता है, जबकि अन्वेषण ज्ञान को बेहतर बनाने के विकल्प की कोशिश करता है। समापन Tic-Tac-toe उदाहरण राज्यों के रूप में बोर्ड पदों की पहचान करता है, कार्रवाई के रूप में चलता है, और देरी प्रतिक्रिया के रूप में जीत/हानि करता है।"
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
          "question": "कैसे रीइन्फोर्समेंट लर्निंग और मेटा-लर्निंग को सरल तरीके से प्रतिष्ठित किया जा सकता है?",
          "response": "प्रशिक्षक ने कहा कि प्रत्येक प्रतिमान पहले अपनी खुद की परिभाषा की जरूरत है; यह व्याख्यान आरएल की स्थापना करेगा, जिसके बाद एक साथ अध्ययन किए गए मेटा-लर्निंग कोर्स के साथ तुलना सार्थक होगी।"
        },
        {
          "time": "1:06:23",
          "question": "पर्यावरण के एक मॉडल पर चर्चा करते समय, क्या पर्यावरण का मतलब है आवेदन डोमेन?",
          "response": "प्रशिक्षक ने जवाब दिया कि पर्यावरण एक पल में समस्या प्रक्रिया / स्थिति है; एक बोर्ड गेम में, वर्तमान विन्यास जानकारी एजेंट पर काम करता है।"
        }
      ]
    },
    "keyTerms": [
      {
        "term": "एजेंट",
        "definition": "शिक्षार्थी या निर्णय लेने वाला व्यक्ति जो क्रियाओं का चयन करता है।"
      },
      {
        "term": "पर्यावरण",
        "definition": "बाहरी प्रक्रिया जो नई स्थितियों और पुरस्कारों के साथ कार्यों का जवाब देती है।"
      },
      {
        "term": "राज्य",
        "definition": "इस स्थिति का प्रतिनिधित्व परिणामों की भविष्यवाणी करने और कार्यों का चयन करने के लिए किया जाता है।"
      },
      {
        "term": "कार्रवाई",
        "definition": "एजेंट द्वारा बनाई गई पसंद जो पर्यावरण को प्रभावित कर सकती है।"
      },
      {
        "term": "नीति π",
        "definition": "राज्यों या टिप्पणियों से कार्रवाई या कार्रवाई संभावना के लिए एक मानचित्रण।"
      },
      {
        "term": "रिवार्ड आर",
        "definition": "तत्काल action preference को दर्शाने वाला एक scalar मूल्यांकन संकेत।"
      },
      {
        "term": "रिटर्न जी",
        "definition": "संचयी, अक्सर छूट, भविष्य में एक बार कदम से इनाम।"
      },
      {
        "term": "मूल्य समारोह",
        "definition": "एक नीति के तहत एक राज्य या राज्य कार्रवाई जोड़ी से वापसी की उम्मीद की।"
      },
      {
        "term": "पर्यावरण मॉडल",
        "definition": "योजना के लिए उपयोग किए जाने वाले संक्रमण और पुरस्कारों का एक भविष्यवक्ता।"
      },
      {
        "term": "मॉडल आधारित RL",
        "definition": "RL जो पर्यावरण मॉडल का उपयोग करने की योजना या सीखता है।"
      },
      {
        "term": "मॉडल फ्री RL",
        "definition": "RL जो स्पष्ट रूप से सीखने या योजना के लिए संक्रमण मॉडल का उपयोग किए बिना मूल्यों या नीतियों को सीखता है।"
      },
      {
        "term": "अन्वेषण",
        "definition": "भविष्य के निर्णयों को बेहतर बनाने के लिए अपर्याप्त रूप से ज्ञात कार्यों की कोशिश करना।"
      },
      {
        "term": "शोषण",
        "definition": "वर्तमान में कार्रवाई का चयन करना सबसे अच्छा होने का अनुमान है।"
      }
    ],
    "insights": [
      {
        "label": "शब्दावली",
        "title": "पर्यावरण राज्य के समान नहीं है",
        "body": "व्याख्यान उन्हें बारीकी से उपयोग करता है। तकनीकी रूप से, पर्यावरण प्रक्रिया और गतिशीलता है; राज्य एक पल में पर्याप्त विवरण है, जबकि एक अवलोकन केवल उस राज्य का हिस्सा प्रकट हो सकता है।"
      },
      {
        "label": "उद्देश्य डिजाइन",
        "title": "रिवार्ड अपने आप में अंतिम उद्देश्य नहीं है",
        "body": "एजेंट अपेक्षित रिटर्न को अधिकतम करता है, जरूरी नहीं कि अगले इनाम। एक खराब रूप से डिज़ाइन किया गया रिवॉर्ड हैकिंग, असुरक्षित शॉर्टकट या व्यवहार का उत्पादन कर सकता है जो डिजाइनर के वास्तविक इरादे को याद करता है।"
      },
      {
        "label": "लर्निंग सिद्धांत",
        "title": "RL डेटा अंतर्जात है",
        "body": "नीति उन कार्यों का चयन करती है और इसलिए यह नियंत्रित करती है कि कौन से परिणाम डेटासेट में प्रवेश करते हैं। एक्सप्लोरेशन, ऑफ-पॉलिसी सुधार, और प्रतिवादी मूल्यांकन मामला क्योंकि अनचाहे-एक्शन रिवॉर्ड्स छिपे हुए हैं।"
      },
      {
        "label": "क्रेडिट असाइनमेंट",
        "title": "विलंबित पुरस्कार कठिन प्रश्न बनाता है",
        "body": "जब एक जीत कई चालों का अनुसरण करती है, तो शिक्षार्थी को यह तय करना चाहिए कि कौन से पहले विकल्प क्रेडिट के योग्य हैं। रिटर्न, टेम्पोरल डिफरेंस त्रुटियों, पात्रता निशान, और पॉलिसी ग्रेडिएंट अलग जवाब प्रदान करते हैं।"
      },
      {
        "label": "योजना",
        "title": "एक सीखा मॉडल सही होने के बिना उपयोगी हो सकता है",
        "body": "नमूना दक्षता के खिलाफ मॉडल आधारित RL व्यापार मॉडल पूर्वाग्रह। एक अपूर्ण मॉडल के साथ योजना अभी भी मदद कर सकती है, लेकिन दोहराया नकली रोलआउट भविष्यवाणी त्रुटि को बढ़ा सकते हैं।"
      },
      {
        "label": "मूल्यांकन",
        "title": "दीर्घकालिक इनाम की जरूरत अनिश्चितता और सुरक्षा जांच",
        "body": "एक औसत रिटर्न दुर्लभ विनाशकारी परिणामों को छिपा सकता है। रियल तैनाती को पुरस्कार वितरण, बाधा उल्लंघन, उपसमूह प्रभाव और सबसे खराब मामले व्यवहार की रिपोर्ट करनी चाहिए।"
      },
      {
        "label": "कोर्स कनेक्शन",
        "title": "अगले व्याख्यान के Tic-Tac-toe बैकअप सीधे अनुसरण करता है",
        "body": "यह व्याख्यान राज्यों, नीतियों, पुरस्कारों और मूल्यों को परिभाषित करता है; 18 अगस्त व्याख्यान उन्हें एक वृद्धिशील अद्यतन में बदल देता है और फिर k-armed bandit में अन्वेषण को अलग करता है।"
      }
    ],
    "resources": [
      {
        "type": "पुस्तक",
        "title": "रीइन्फोर्समेंट लर्निंग: एक परिचय, दूसरा संस्करण",
        "creator": "Richard S. Sutton & Andrew G. Barto · MIT Press",
        "why": "अध्याय 1-3 उदाहरणों, एजेंट-पर्यावरण इंटरफ़ेस, वापसी, नीति और मूल्य कार्यों को औपचारिक रूप से व्यवस्थित करते हैं।",
        "url": "https://mitpress.mit.edu/9780262039246/reinforcement-learning/"
      },
      {
        "type": "देखो",
        "title": "रीइन्फोर्समेंट लर्निंग का परिचय",
        "creator": "DeepMind x UCL",
        "why": "एजेंटों, रिवार्ड्स, नीतियों, मूल्यों और अनुक्रमिक निर्णय समस्या का एक कठोर व्याख्यान स्तर उपचार।",
        "url": "https://www.youtube.com/watch?v=TCCjZe0y4Qc"
      },
      {
        "type": "गाइड",
        "title": "भाग 1: आरएल में मुख्य अवधारणाएं",
        "creator": "OpenAI Spinning Up",
        "why": "ट्रेजेक्टरी, रिटर्न, नीतियों और मूल्य कार्यों के लिए इंटरेक्शन लूप से एक कॉम्पैक्ट गणितीय पुल।",
        "url": "https://spinningup.openai.com/en/latest/spinningup/rl_intro.html"
      },
      {
        "type": "ट्यूटोरियल",
        "title": "बुनियादी उपयोग",
        "creator": "Farama Foundation · Gymnasium",
        "why": "कोड में रीसेट-एक्ट-स्टेप लूप दिखाता है और अवलोकन, पुरस्कार, समाप्ति और एक्शन कंक्रीट बनाता है।",
        "url": "https://gymnasium.farama.org/main/introduction/basic_usage/"
      }
    ],
    "quiz": [
      {
        "question": "इस व्याख्यान में रीइन्फोर्समेंट लर्निंग में सबसे अधिक प्रत्यक्ष क्या अंतर है?",
        "options": [
          "बातचीत और मूल्यांकन पुरस्कार से एक नीति सीखना",
          "केवल एक निश्चित तालिका से फिटिंग लेबल",
          "बिना कार्रवाई के क्लस्टर ढूंढना",
          "हर भविष्य की स्थिति को वास्तव में बढ़ाना"
        ],
        "answer": 0,
        "explanation": "RL परिणामों के लिए कार्य करता है और लंबे समय तक इनाम को अधिकतम करने के लिए व्यवहार में सुधार करता है।",
        "optionNotes": [
          "सही: बातचीत, कार्रवाई और मूल्यांकन लूप को परिभाषित करते हैं।",
          "यही कारण है कि सामान्य सुपरवाइज़्ड लर्निंग का वर्णन भी संकीर्ण है।",
          "यह एक असुरक्षित उद्देश्य है।",
          "अक्सर असंभव है और आवश्यकता नहीं है।"
        ]
      },
      {
        "question": "शतरंज उदाहरण में, राज्य के सबसे करीब क्या है?",
        "options": [
          "वर्तमान बोर्ड विन्यास",
          "पूर्ण नियम पाठ्यपुस्तक",
          "केवल अंतिम विजेता",
          "शिक्षा एल्गोरिदम का स्रोत कोड"
        ],
        "answer": 0,
        "explanation": "टुकड़ा की स्थिति निर्णय की स्थिति को संक्षेप में प्रस्तुत करती है जिससे कार्रवाई की जाती है।",
        "optionNotes": [
          "सही: यह वर्तमान स्थिति का प्रतिनिधित्व करता है।",
          "नियम गतिशीलता का वर्णन करते हैं, वर्तमान स्थिति नहीं।",
          "विजेता एक टर्मिनल परिणाम है।",
          "कार्यान्वयन एक पर्यावरण राज्य नहीं है।"
        ]
      },
      {
        "question": "एजेंट क्या है?",
        "options": [
          "निर्णय निर्माता जो क्रियाओं का चयन करता है",
          "स्केलर रिवार्ड",
          "संक्रमण गतिशीलता",
          "डेटासेट विभाजन"
        ],
        "answer": 0,
        "explanation": "एजेंट अपनी नीति के अनुसार जानकारी और कार्य करता है।",
        "optionNotes": [
          "सही: यह शिक्षार्थी / नियंत्रक है।",
          "रिवार्ड परिणामों का मूल्यांकन करता है।",
          "गतिशीलता पर्यावरण या इसके मॉडल से संबंधित है।",
          "एक विभाजन एक मूल्यांकन सम्मेलन है।"
        ]
      },
      {
        "question": "पॉलिसी क्या निर्दिष्ट करती है?",
        "options": [
          "कैसे राज्यों के कार्यों या कार्रवाई की संभावना के लिए नक्शा",
          "केवल तत्काल इनाम",
          "वास्तविक वातावरण गतिशीलता",
          "प्रशिक्षण उदाहरणों की संख्या"
        ],
        "answer": 0,
        "explanation": "एक नीति एजेंट का व्यवहार नियम है।",
        "optionNotes": [
          "Correct: deterministic और stochastic मैपिंग दोनों नीतियां हैं।",
          "रिवार्ड एक अलग संकेत है।",
          "एक नीति को मॉडल संक्रमण की आवश्यकता नहीं है।",
          "डेटासेट का आकार व्यवहार को परिभाषित नहीं करता है।"
        ]
      },
      {
        "question": "पुरस्कार संकेत की प्राथमिक भूमिका क्या है?",
        "options": [
          "तत्काल कार्य वरीयता का मूल्यांकन",
          "प्रत्येक राज्य में सही कार्रवाई लेबल का पता लगाएं",
          "पूरे ट्रेजेक्टरी को स्टोर करें",
          "गारंटी सुरक्षा"
        ],
        "answer": 0,
        "explanation": "रिवार्ड एक स्केलर संकेत है जो स्थानीय रूप से वांछनीय या अवांछनीय परिणामों को दर्शाता है।",
        "optionNotes": [
          "सही: यह तत्काल मूल्यांकन प्रतिक्रिया व्यक्त करता है।",
          "RL आमतौर पर प्रति राज्य सही-एक्शन लेबल की कमी होती है।",
          "एक ट्रेजेक्टरी में कई राज्यों, कार्यों और पुरस्कार शामिल हैं।",
          "अकेले सुरक्षित व्यवहार की गारंटी नहीं दे सकता।"
        ]
      },
      {
        "question": "क्यों तत्काल इनाम से अलग एक मूल्य समारोह है?",
        "options": [
          "यह भविष्यवाणी करता है कि भविष्य में जमा पुरस्कार की उम्मीद थी",
          "यह हमेशा सीधे मनाया जाता है",
          "यह पॉलिसी को अनदेखा करता है",
          "यह केवल पिछली कार्रवाई का वर्णन करता है"
        ],
        "answer": 0,
        "explanation": "मूल्य लंबे समय तक परिणामों को संक्षेप में प्रस्तुत करता है, अक्सर एक निर्दिष्ट नीति के तहत।",
        "optionNotes": [
          "सही: यह एक आकर्षक लेकिन हानिकारक अल्पकालिक कदम को अस्वीकार कर सकता है।",
          "आम तौर पर मूल्य का अनुमान होना चाहिए।",
          "नीति भविष्य के व्यवहार और इसलिए मूल्य निर्धारित करती है।",
          "मूल्य आगे देख रहा है।"
        ]
      },
      {
        "question": "पर्यावरण मॉडल समर्थन क्या करता है?",
        "options": [
          "योजना के लिए भविष्यवाणी परिणाम",
          "लेबल के साथ नीति को बदलना",
          "हर रिवॉर्ड डेterministic बनाना",
          "राज्य अंतरिक्ष को हटाने"
        ],
        "answer": 0,
        "explanation": "एक मॉडल लगभग संक्रमण और इनाम देता है इसलिए एजेंट वास्तविक बातचीत से पहले कारण हो सकता है।",
        "optionNotes": [
          "सही: कल्पना परिणाम समर्थन योजना।",
          "एक मॉडल कार्रवाई निर्देश की निगरानी नहीं है।",
          "स्टोकैस्टिक मॉडल वितरण की भविष्यवाणी कर सकते हैं।",
          "राज्य निर्माण का हिस्सा बने रहते हैं।"
        ]
      },
      {
        "question": "क्यों साइकिल चालन एक RL अनुरूप के रूप में प्रयोग किया जाता है?",
        "options": [
          "कौशल बार-बार प्रयासों और फीडबैक के माध्यम से सुधार करता है",
          "प्रत्येक सुधार के पास एक लेबल लक्ष्य है",
          "सड़क कभी नहीं बदलती",
          "केवल एक कार्रवाई संभव है"
        ],
        "answer": 0,
        "explanation": "विस्तृत निर्देश हर शेष सुधार को कवर नहीं कर सकते; अनुभव लूप को बंद कर देता है।",
        "optionNotes": [
          "Correct: अभ्यास नीति सुधार का उत्पादन करता है।",
          "यही कारण है कि अनुरूप पर्यवेक्षण करना होगा।",
          "सड़क और संतुलन की स्थिति भिन्न होती है।",
          "सायक्लिंग के लिए विकल्पों के निरंतर अनुक्रम की आवश्यकता होती है।"
        ]
      },
      {
        "question": "निगरानी प्रतिक्रिया आमतौर पर आरएल प्रतिक्रिया से कैसे भिन्न होती है?",
        "options": [
          "यह उदाहरणों के लिए लक्ष्य आउटपुट प्रदान करता है",
          "यह केवल पूर्ण एपिसोड के बाद आता है",
          "यह हमेशा नकारात्मक है",
          "यह अन्वेषण पर निर्भर करता है"
        ],
        "answer": 0,
        "explanation": "वांछित लेबल या मूल्यों के साथ संशोधित उदाहरण जोड़े इनपुट।",
        "optionNotes": [
          "सही: लक्ष्य भविष्यवाणी त्रुटि निर्दिष्ट करते हैं।",
          "पर्यवेक्षित लक्ष्य एपिसोड के लिए इंतजार नहीं करना चाहिए।",
          "लेबल सकारात्मक / नकारात्मक इनाम नहीं हैं।",
          "अन्वेषण इंटरैक्टिव सीखने के लिए केंद्रीय है, निर्धारित लेबल नहीं है।"
        ]
      },
      {
        "question": "साधारण अनसुपरवाइज़्ड लर्निंग का निश्चित उद्देश्य क्या है?",
        "options": [
          "अनलेबल डेटा में संरचना की खोज करें",
          "क्रमिक इनाम को अधिकतम करें",
          "वातावरण में कार्रवाई का चयन",
          "एक संक्रमण मॉडल के साथ योजना"
        ],
        "answer": 0,
        "explanation": "क्लस्टरिंग, प्रतिनिधित्व और घनत्व सीखने के बजाय एक नियंत्रण वापसी की संरचना तलाश करते हैं।",
        "optionNotes": [
          "सही: यह व्याख्यान के विपरीत पर कब्जा करता है।",
          "यह RL उद्देश्य है।",
          "आम तौर पर कार्रवाई चयन की आवश्यकता नहीं है।",
          "योजना अनिश्चित कार्य नहीं है।"
        ]
      },
      {
        "question": "क्यों RL को परीक्षण और त्रुटि सीखना कहा जाता है?",
        "options": [
          "एक कार्रवाई के परिणाम अक्सर नमूना होना चाहिए",
          "सही कार्रवाई पूर्व लेबल है",
          "डेटासेट से त्रुटियां हटा दी जाती हैं",
          "पर्यावरण कभी जवाब नहीं देता"
        ],
        "answer": 0,
        "explanation": "शिक्षार्थी व्यवहार की कोशिश करता है, परिणामों का निरीक्षण करता है और इसकी वरीयता अद्यतन करता है।",
        "optionNotes": [
          "सही: अज्ञात परिणाम के लिए बातचीत की आवश्यकता होती है।",
          "पूर्व लेबलिंग मूल मूल्यांकन समस्या को हटा देता है।",
          "विफलता अनौपचारिक सबूत हैं।",
          "पर्यावरणीय प्रतिक्रिया आवश्यक है।"
        ]
      },
      {
        "question": "क्या देरी पुरस्कार मुश्किल बनाता है?",
        "options": [
          "पहले कार्रवाई को बाद के परिणामों के लिए क्रेडिट या दोष प्राप्त होना चाहिए",
          "पुरस्कार संख्यात्मक नहीं हो सकता है",
          "राज्य लेबल बन जाते हैं",
          "केवल अंतिम कार्रवाई मामले"
        ],
        "answer": 0,
        "explanation": "एक टर्मिनल परिणाम विकल्पों के एक लंबे अनुक्रम पर निर्भर हो सकता है।",
        "optionNotes": [
          "सही: यह अस्थायी क्रेडिट असाइनमेंट है।",
          "पुरस्कार आमतौर पर संख्यात्मक स्केलर होते हैं।",
          "विलंब राज्यों को लेबल में नहीं बदलता है।",
          "पहले कार्रवाई निर्णायक हो सकती है।"
        ]
      },
      {
        "question": "एक आकर्षक कार्रवाई के बजाय एक पॉलिसी क्यों सीखती है?",
        "options": [
          "दीर्घकालिक गुणवत्ता कई भविष्य के राज्यों में व्यवहार पर निर्भर करती है",
          "नीतियाँ राज्य को अनदेखा करती हैं",
          "एक एक्शन हमेशा जीतता है",
          "पुरस्कार अनुपलब्ध हैं"
        ],
        "answer": 0,
        "explanation": "स्थानीय रूप से पुरस्कृत चाल बाद में खराब स्थितियों का कारण बन सकती है।",
        "optionNotes": [
          "सही: अनुक्रमिक स्थिरता मामले।",
          "राज्य या अवलोकन पर स्पष्ट रूप से शर्त नीतियां।",
          "कोई सार्वभौमिक कार्रवाई नहीं मानी जाती है।",
          "रिवॉर्ड्स मौजूद हैं लेकिन देरी / शोर हो सकता है।"
        ]
      },
      {
        "question": "क्या है?",
        "options": [
          "उसी स्टेट-एक्शन जोड़ी के अलग-अलग परिणाम हो सकते हैं",
          "एजेंट की कोई नीति नहीं है",
          "सभी पुरस्कार शून्य हैं",
          "एक मॉडल असंभव है"
        ],
        "answer": 0,
        "explanation": "संक्रमण या इनाम निश्चित आउटपुट के बजाय यादृच्छिक चर हो सकते हैं।",
        "optionNotes": [
          "सही: पर्यावरण परिणामों का वितरण करता है।",
          "नीतियां स्टोकैस्टिक सेटिंग्स में काम करती हैं।",
          "यादृच्छिकता शून्य इनाम नहीं है।",
          "एक probabilistic मॉडल अभी भी संभव है।"
        ]
      },
      {
        "question": "कौन सा ऑर्डर इंटरेक्शन लूप से मेल खाता है?",
        "options": [
          "राज्य मनाया → कार्रवाई का चयन → इनाम और अगले राज्य वापस लौट आए",
          "Reward चुना → लेबल उत्पन्न → राज्य हटा दिया",
          "कार्य मनाया → डेटासेट विभाजित → मॉडल जमे हुए",
          "मूल्य चुना → पर्यावरण हटाया → कार्रवाई लेबल"
        ],
        "answer": 0,
        "explanation": "एजेंट अपनी वर्तमान जानकारी से कार्य करता है और पर्यावरण प्रतिक्रिया और उत्तराधिकारी स्थिति पैदा करता है।",
        "optionNotes": [
          "सही: यह मानक चरण चक्र है।",
          "एजेंट अपने इनाम का चयन नहीं करता है।",
          "डेटासेट विभाजन पर्यावरण लूप नहीं है।",
          "पर्यावरण आवश्यक रहता है।"
        ]
      },
      {
        "question": "क्या एक विधि मॉडल आधारित बनाता है?",
        "options": [
          "यह योजना या सीखने के लिए एक संक्रमण / इनाम मॉडल का उपयोग करता है",
          "इसमें एक तंत्रिका नेटवर्क है",
          "यह कोई अवलोकन नहीं करता है",
          "यह हमेशा इष्टतम नीति जानता है"
        ],
        "answer": 0,
        "explanation": "मॉडल आधारित RL स्पष्ट रूप से पर्यावरणीय परिणामों की भविष्यवाणी करता है।",
        "optionNotes": [
          "सही: मॉडल का उपयोग परिभाषित संपत्ति है।",
          "तंत्रिका नेटवर्क दोनों मॉडल-आधारित और मॉडल-मुक्त तरीकों में दिखाई देते हैं।",
          "मॉडल अभी भी राज्य / क्रिया जानकारी का उपभोग करते हैं।",
          "एक मॉडल स्वचालित रूप से नियंत्रण को हल नहीं करता है।"
        ]
      },
      {
        "question": "क्या एक विधि मॉडल-मुक्त बनाता है?",
        "options": [
          "यह स्पष्ट मॉडल आधारित योजना के बिना मूल्यों या नीति सीखता है",
          "इसमें कोई धारणा नहीं है",
          "इसे कोई इनाम नहीं मिला",
          "यह फ़ंक्शन का उपयोग नहीं कर सकता है"
        ],
        "answer": 0,
        "explanation": "मॉडल मुक्त तरीकों का आकलन व्यवहार या मूल्य सीधे अनुभव से।",
        "optionNotes": [
          "सही: कोई स्पष्ट संक्रमण मॉडल योजना की आवश्यकता नहीं है।",
          "प्रतिनिधित्व और नमूना धारणाएं बनी रहती हैं।",
          "रिवार्ड फीडबैक अभी भी केंद्रीय है।",
          "तंत्रिका समारोह अनुमान आम है।"
        ]
      },
      {
        "question": "क्यों तत्काल पुरस्कार शतरंज में भ्रामक हो सकता है?",
        "options": [
          "एक टुकड़ा कैप्चर करने के लिए एक बड़ा भविष्य हानि सक्षम हो सकता है",
          "रिवॉर्ड कभी चाल पर निर्भर नहीं होते",
          "खेल में कोई टर्मिनल परिणाम नहीं है",
          "केवल निगरानी शिक्षण लागू होता है"
        ],
        "answer": 0,
        "explanation": "दीर्घकालिक मूल्य अल्पकालिक लाभ के साथ असहमत हो सकता है।",
        "optionNotes": [
          "सही: बाद में परिणाम रिटर्न निर्धारित करते हैं।",
          "चालें परिणाम बनाती हैं।",
          "विन/हास टर्मिनल फीडबैक है।",
          "शतरंज को आरएल या योजना के साथ मॉडल किया जा सकता है।"
        ]
      },
      {
        "question": "क्यों बैकगैमौन एक आवेदन उदाहरण के रूप में इस्तेमाल किया गया?",
        "options": [
          "इसकी बड़ी शाखाएँ राज्य की अंतरिक्ष निकास तालिकाओं को अव्यवहारिक बनाती हैं",
          "इसमें कोई कार्य नहीं है",
          "इसके नियम हर मोड़ बदल जाते हैं",
          "यह लेबल इष्टतम चालों की आपूर्ति करता है"
        ],
        "answer": 0,
        "explanation": "समारोह अनुमान लगाने से बड़ी संख्या में पदों को सामान्य करने में मदद मिलती है।",
        "optionNotes": [
          "Correct: combinatorial विकास सीखने को प्रेरित करता है।",
          "खिलाड़ी चाल का चयन करते हैं।",
          "Stochastic dice मतलब नहीं नियमों में परिवर्तन।",
          "सभी राज्यों के लिए इष्टतम लेबल प्रदान नहीं किए जाते हैं।"
        ]
      },
      {
        "question": "मूल्य आधारित आरएल की केंद्रीय सीमा पर क्या जोर दिया गया?",
        "options": [
          "वास्तविक स्थिति / क्रिया मान का आकलन करना मुश्किल हो सकता है",
          "मान हमेशा ज्ञात होते हैं",
          "रिवार्ड होना चाहिए",
          "नीति राज्य पर निर्भर नहीं कर सकती"
        ],
        "answer": 0,
        "explanation": "मिड-गेम जीत संभावना और लंबे समय तक वापसी आम तौर पर अज्ञात हैं और इसके लिए अनुमान की आवश्यकता होती है।",
        "optionNotes": [
          "सही: अनुमान केंद्रीय और कठिन दोनों है।",
          "यदि मान ज्ञात थे, तो बहुत सी शिक्षा अनावश्यक होगी।",
          "रिवार्ड फ्रेमवर्क में एक स्केलर है।",
          "राज्य निर्भरता मौलिक है।"
        ]
      },
      {
        "question": "जब विकासवादी नीति की खोज व्याख्यान के अनुसार आकर्षक हो सकती है?",
        "options": [
          "जब पॉलिसी स्थान छोटा होता है या अच्छी नीतियां ढूंढना आसान होता है",
          "जब प्रत्येक संक्रमण को लेबल किया जाता है",
          "जब कोई मूल्यांकन संभव नहीं है",
          "केवल एक-चरण बैंडिट्स के लिए"
        ],
        "answer": 0,
        "explanation": "खोज सीमित संयोजन, सामान्य अच्छा समाधान, या पर्याप्त समय के साथ संभव है।",
        "optionNotes": [
          "सही: ये स्थितियां खोज बोझ को कम करती हैं।",
          "विकासवादी मूल्यांकन व्युत्पन्न मुक्त और unlabeled हो सकता है।",
          "स्वास्थ्य/रिवार्ड मूल्यांकन की आवश्यकता है।",
          "यह बहु-चरण नीतियों की खोज कर सकता है।"
        ]
      },
      {
        "question": "पॉलिसी-ग्रेडिएंट तरीकों का मुख्य आकर्षण क्या है?",
        "options": [
          "वे सीधे एक मापदंड नीति का अनुकूलन करते हैं",
          "उन्हें एक पूर्ण लुकअप टेबल की आवश्यकता होती है",
          "वे stochasticity दूर",
          "वे सही लेबल प्रदान करते हैं"
        ],
        "answer": 0,
        "explanation": "नीतिगत ढाल नीति मापदंडों को समायोजित करने के लिए रिटर्न-आधारित संकेतों का उपयोग करते हैं।",
        "optionNotes": [
          "सही: प्रत्यक्ष नीति अनुकूलन विधि परिवार को व्यापक बनाता है।",
          "समारोह अनुमान निकास तालिकाओं से बचता है।",
          "स्टोकैस्टिक वातावरण स्थिर रहता है।",
          "वे वाष्पीकरण रिटर्न का उपयोग करते हैं, एक्शन लेबल नहीं।"
        ]
      },
      {
        "question": "शोषण क्या है?",
        "options": [
          "वर्तमान में कार्रवाई का सबसे अच्छा होने का अनुमान है",
          "जानकारी के लिए अनिश्चित कार्रवाई की कोशिश करें",
          "केवल संक्रमण मॉडल जानें",
          "सभी मूल्यों को रीसेट करें"
        ],
        "answer": 0,
        "explanation": "Exploitation अपेक्षित निकट अवधि के प्रदर्शन के लिए ज्ञान का उपयोग करता है।",
        "optionNotes": [
          "सही: यह अनुमानों के संबंध में लालची है।",
          "यह अन्वेषण है।",
          "मॉडल लर्निंग एक अलग गतिविधि है।",
          "कोई रीसेट निहित नहीं है।"
        ]
      },
      {
        "question": "अन्वेषण क्या है?",
        "options": [
          "ज्ञान और भविष्य के इनाम को बेहतर बनाने के विकल्प की कोशिश करें",
          "वर्तमान सर्वश्रेष्ठ कार्रवाई हमेशा के लिए दोहराएँ",
          "फीडबैक",
          "अगले इनाम की गारंटी"
        ],
        "answer": 0,
        "explanation": "अन्वेषण बेहतर व्यवहार की खोज के लिए कुछ तत्काल निश्चितता का बलिदान करता है।",
        "optionNotes": [
          "सही: जानकारी का भविष्य मूल्य है।",
          "यह शुद्ध शोषण है।",
          "अन्वेषण प्रतिक्रिया के माध्यम से मूल्यांकन किया जाता है।",
          "एक एक्सप्लोरेटरी कार्रवाई खराब प्रदर्शन कर सकती है।"
        ]
      },
      {
        "question": "समापन Q&A में, कैसे 'पर्यावरण' की व्याख्या की जानी चाहिए?",
        "options": [
          "समस्या प्रक्रिया जो वर्तमान स्थिति प्रस्तुत करती है और कार्रवाई का जवाब देती है",
          "केवल शैक्षणिक विषय का नाम",
          "केवल एजेंट के स्रोत कोड",
          "एक निश्चित लेबल डेटासेट"
        ],
        "answer": 0,
        "explanation": "प्रशिक्षक ने यह दिखाने के लिए एक बोर्ड-गेम स्थिति का उपयोग किया कि पर्यावरण क्या एजेंट के साथ बातचीत करता है; वर्तमान विन्यास इसकी राज्य सूचना है।",
        "optionNotes": [
          "सही: यह प्रक्रिया, राज्य और प्रतिक्रिया को जोड़ता है।",
          "एक डोमेन इंटरैक्टिव वातावरण उदाहरण की तुलना में व्यापक है।",
          "एजेंट अपने पर्यावरण से अलग है।",
          "RL डेटा कार्रवाई और प्रतिक्रिया के माध्यम से उत्पन्न होता है।"
        ]
      }
    ]
  }
};
