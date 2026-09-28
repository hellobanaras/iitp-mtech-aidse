const quizSeed = [
  ["What does Monte Carlo control estimate for each state–action pair?", ["The expected return from taking the action and then following a policy", "Only the immediate reward", "The transition probability table", "The number of slides"], 0],
  ["When can an episodic Monte Carlo return be calculated?", ["Only after the episode has produced its outcome", "Before the first action", "At every state without observing rewards", "Only when a transition model is known"], 0],
  ["What is the first-visit rule for a state–action pair?", ["Use the return following its first occurrence in that episode", "Average every frame in the recording", "Use only the last action in an episode", "Discard episodes that terminate"], 0],
  ["How does every-visit Monte Carlo differ?", ["It includes returns from every occurrence of the pair in an episode", "It requires a known transition model", "It updates only at the episode start", "It ignores repeated visits"], 0],
  ["Why does control need action values Q(s,a), rather than only state values V(s)?", ["Action values compare candidate actions at the same state", "State values cannot use rewards", "Action values identify the recording date", "State values are defined only for terminal states"], 0],
  ["What is the key assumption behind exploring starts (MC-ES)?", ["Every state–action pair has a nonzero chance of being an episode start", "The first action is always greedy", "Every episode has the same return", "The environment model is fully known"], 0],
  ["After the exploring start, what does the MC-ES episode generally do?", ["Follow the current policy until termination", "Restart after every reward", "Choose only actions with known values", "Stop before observing an outcome"], 0],
  ["How is a Monte Carlo action-value estimate commonly updated?", ["Average observed returns for that state–action pair", "Replace it with the episode length", "Use the largest state label", "Copy the reward of an unrelated action"], 0],
  ["What does the greedy policy-improvement step do?", ["Select an action with the highest current estimated Q value", "Select the least-visited action forever", "Choose randomly with equal probability", "Change the reward function"], 0],
  ["What is the role of an episode in Monte Carlo learning?", ["It supplies a complete sampled return after termination", "It reveals the full transition model", "It guarantees every action is optimal", "It removes the need for exploration"], 0],
  ["In the lecture's Blackjack example, which state features were highlighted?", ["Player total, dealer's visible card, and whether the player has a usable ace", "Deck color, table number, and recording duration", "Only the player's last action", "The dealer's hidden cards and policy code"], 0],
  ["Why can a deterministic greedy policy fail to provide adequate exploration?", ["Actions it never selects may never receive return samples", "It requires too many transition probabilities", "It makes episodes infinite by definition", "It forces all rewards to zero"], 0],
  ["What does an epsilon-soft policy ensure?", ["Every available action retains at least some probability of selection", "The greedy action has probability zero", "All actions always have identical value", "No exploratory action can occur"], 0],
  ["In an epsilon-greedy policy with one greedy action and n available actions, what is a common allocation?", ["The greedy action gets 1−ε+ε/n and each other action gets ε/n", "The greedy action gets ε/n and others share 1−ε", "Every action gets probability 1−ε", "The greedy action gets probability 1 and all others zero"], 0],
  ["Does a nonzero epsilon by itself prove that a finite run has found the optimal policy?", ["No; it preserves exploration, but finite sampling can still be insufficient", "Yes, after one episode", "Yes, regardless of the environment", "No; epsilon prevents policy improvement"], 0],
  ["What does the discount factor γ do in the return?", ["It weights rewards farther in the future", "It changes the legal action set", "It counts state visits", "It determines the episode's start state"], 0],
  ["What did the instructor say about γ in the example when asked whether it varies by time step?", ["The example fixes γ; time-dependent discounting is a separate formulation", "It must alternate between zero and one", "It is learned as an action value", "It changes whenever a state repeats"], 0],
  ["In a gradient-bandit method, what do preferences H(a) represent?", ["Unnormalised action scores converted to probabilities by softmax", "Observed transition probabilities", "Episode termination flags", "A table of discounted state values"], 0],
  ["What does the softmax policy do with preferences?", ["Turns them into a probability distribution over actions", "Chooses the action with the lowest preference", "Converts rewards into state labels", "Removes all stochasticity"], 0],
  ["What is the purpose of a reward baseline in the gradient-bandit update?", ["Center the reward signal so updates reflect performance relative to a reference", "Replace the action probability", "Guarantee zero variance", "Estimate the environment transition model"], 0],
  ["How did the instructor describe the baseline in response to a student's question?", ["It may be formed from an average of rewards", "It is always the maximum possible reward", "It is a fixed action identifier", "It is the episode's source timestamp"], 0],
  ["What was the student's question about regret?", ["Whether regret can be calculated only after reaching a later time step", "Whether regret is the same as gamma", "Whether regret reveals the hidden transition model", "Whether regret determines a usable ace"], 0],
  ["How did the instructor clarify the gradient-bandit update's treatment of other actions?", ["The selected action is distinguished from the remaining actions in the expectation over alternatives", "All actions receive the same preference update", "Only the last action in the recording is updated", "Other actions are removed from the policy"], 0],
  ["What was the lecture's associative-search analogy?", ["A learner may face different states and choose different actions across several boards", "One action must be used for every possible state", "A board is equivalent to a transition model", "Associative search means averaging video frames"], 0],
  ["Which is a sound conclusion from the lecture's finite-sampling discussion?", ["Exploration and repeated episodes support learning, but observed estimates remain sample-dependent", "One explored episode certifies optimality", "Monte Carlo requires exact transition probabilities", "A greedy update makes all uncertainty disappear"], 0],
];

const quiz = quizSeed.map(([question, options, originalAnswer], itemIndex) => {
  const rotation = itemIndex % options.length;
  const shuffledOptions = [...options.slice(rotation), ...options.slice(0, rotation)];
  const answer = (originalAnswer - rotation + options.length) % options.length;
  return {
    question,
    options: shuffledOptions,
    answer,
    explanation: `The lecture supports ${shuffledOptions[answer].toLowerCase()}.`,
    optionNotes: shuffledOptions.map((option, index) => index === answer
      ? `Correct: ${option}.`
      : `Not supported: ${option}.`),
  };
});

export const eai6401Lecture20260928180548 = { en: {
  title: "Monte Carlo control and gradient-bandit learning",
  lede: "The lecture moves from sampled state–action returns and Monte Carlo control to persistent exploration with epsilon-soft policies, then derives preference-based gradient bandits and answers questions about discounting, regret, baselines, and action updates.",
  instructionalInterval: "00:00:19–01:25:59 source time",
  reviewLevel: "Seven-point full-timeline Stream triage, source-matched boundary review, 2× visible-tab capture, English transcription, and idle-tail exclusion",
  coverage: [
    { title: "Estimate action values from complete episodes", body: "Use first-visit or every-visit state–action returns to estimate Qπ(s,a) without requiring a transition model." },
    { title: "Explore starts and improve the policy", body: "MC-ES samples a starting state–action pair, follows the policy to termination, averages returns, and improves greedily." },
    { title: "Keep actions explorable with epsilon-soft policies", body: "An epsilon-soft policy gives every legal action nonzero probability while assigning extra probability to greedy actions." },
    { title: "Learn action preferences with a baseline", body: "Gradient bandits turn preferences into softmax probabilities and update them from reward relative to a baseline." },
  ],
  takeaway: "Monte Carlo control learns from completed episodes: estimate Q(s,a), improve the policy, and preserve adequate action coverage. Gradient bandits take a different route by adjusting softmax preferences with a centered reward signal; neither method makes finite-sample uncertainty disappear.",
  slideTrail: [
    { time: "00:00:19", title: "Monte Carlo estimation of action values", note: "The opening slide shifts prediction from state values to Qπ(s,a), enabling action comparison." },
    { time: "00:25:32", title: "Exploring starts", note: "The lecturer motivates nonzero starting probability for each state–action pair as a way to obtain coverage." },
    { time: "00:39:19", title: "Numerical example for MC-ES", note: "A sampled episode is traced through return accumulation and action-value updates." },
    { time: "00:48:19", title: "Blackjack state and action values", note: "The example uses the player's total, dealer card, and usable-ace distinction to illustrate policy learning." },
    { time: "00:55:19", title: "Monte Carlo control without exploring starts", note: "The lecture introduces persistent exploration through epsilon-soft action probabilities." },
    { time: "01:15:19", title: "Step-by-step Monte Carlo control", note: "A worked trajectory shows return updates followed by policy improvement for visited pairs." },
    { time: "01:21:19", title: "Gradient-bandit update and reward baseline", note: "Preference updates, softmax probabilities, and student questions about the baseline and other actions are discussed." },
    { time: "01:25:19", title: "Associative search and multiple boards", note: "The closing example connects distinct states with distinct action choices across concurrent boards." },
  ],
  summary: [
    { title: "1. Monte Carlo prediction extends to action values", sourceRefs: ["00:00:19–00:25:32", "Monte Carlo estimation of action values"], paragraphs: ["State-value prediction asks how well a state performs under a policy. Control also needs to compare actions, so the lecture estimates Qπ(s,a): the expected return after taking action a in state s and then following π.", "First-visit action-value estimation uses the return after the first occurrence of a state–action pair in an episode; every-visit estimation uses the return after each occurrence. In both cases the episode must finish before its complete return is known, and estimates are sample averages for the matching pair."], formula: "G_t = R_{t+1} + γR_{t+2} + … + γ^(T−t−1)R_T;  Qπ(s,a) ≈ average of observed G_t for (S_t,A_t)=(s,a)" },
    { title: "2. Exploring starts supports MC control", sourceRefs: ["00:25:32–00:48:19", "Exploring starts", "Numerical example for MC-ES"], paragraphs: ["Monte Carlo exploring starts (MC-ES) assumes each state–action pair has a nonzero probability of being selected as an episode's initial pair. From that start, the current policy generates the remaining trajectory to termination. Returns are accumulated backward and used to update Q(s,a), after which the policy is improved to choose a currently highest-valued action.", "The guarantee discussed depends on the coverage assumptions and sufficient experience; a finite collection of sampled episodes is not proof that every estimate is exact or the learned policy is globally optimal. The instructor also clarified that γ was fixed in the worked example; changing the discount over time is a different specification."], formula: "MC-ES: sample (S₀,A₀) with coverage → follow π to terminal → update Q(s,a) from G_t → improve π greedily" },
    { title: "3. Blackjack makes coverage concrete", sourceRefs: ["00:39:19–00:55:19", "Blackjack state and action values"], paragraphs: ["In the Blackjack illustration, a decision state is represented by the player's sum, the dealer's visible card, and whether the player has a usable ace. Actions such as hit and stick can have different long-run returns in the same state, so the learner needs experience for the corresponding state–action alternatives.", "A deterministic greedy policy can stop sampling alternatives it never chooses. This motivates control without exploring starts: keep a small probability for every legal action while giving additional probability to the greedy action."], formula: "state ≈ (player total, dealer up-card, usable ace);  action ∈ {hit, stick}" },
    { title: "4. Epsilon-soft policies retain exploration", sourceRefs: ["00:55:19–01:15:19", "Monte Carlo control without exploring starts", "Step-by-step Monte Carlo control"], paragraphs: ["An epsilon-soft policy assigns nonzero probability to each available action. In a common epsilon-greedy construction with one greedy action among n legal actions, each action first receives ε/n, then the greedy action receives an additional 1−ε. The resulting policy favors current evidence without making alternatives impossible to sample.", "The worked example applies returns to visited state–action pairs and updates the policy toward the best estimated action. Exploration supports better coverage over repeated episodes, but epsilon-softness alone does not certify optimality after a finite run."], formula: "π(a|s)=ε/|A(s)| + (1−ε)·1[a is greedy]" },
    { title: "5. Gradient bandits update preferences", sourceRefs: ["01:20:19–01:25:59", "Gradient-bandit update and reward baseline", "Associative search and multiple boards"], paragraphs: ["The closing method represents each action with a preference H(a), converts preferences to a probability distribution with softmax, and shifts preferences using a policy-gradient update. A reward baseline reduces the raw reward to a relative signal: outcomes above baseline strengthen the selected action's preference, while outcomes below baseline weaken it. The student asked how the baseline is chosen; the instructor described an average of rewards as a possible baseline.", "The class also discussed regret: it is not available as a meaningful cumulative comparison at the initial instant, but can be assessed as interaction proceeds. In the gradient expression, the selected action is distinguished from the other possible actions that contribute to the expectation. The final associative-search analogy uses several boards as distinct states where different actions may be appropriate."], formula: "π(a)=exp(H(a))/Σ_b exp(H(b));  ΔH(a) ∝ (R−baseline)(1[a=A]−π(a))" },
  ],
  insights: [
    { label: "Estimator", title: "Returns belong to state–action pairs", body: "A return observed after one pair should not be mixed into the estimate for a different pair." },
    { label: "Coverage", title: "Greedy choice is not enough for learning", body: "Without exploring starts or persistent action probabilities, unchosen alternatives may remain unsupported by data." },
    { label: "Guarantees", title: "A finite run remains an estimate", body: "Exploration assumptions support convergence arguments; they do not turn a limited sample into a proof of optimality." },
    { label: "Policy gradient", title: "Preferences and probabilities are different objects", body: "Softmax normalizes action preferences, while the baseline centers reward feedback for the update." },
  ],
  courseSignals: {
    assignments: [],
    homework: [],
    labs: [],
    projects: [],
    references: [{ time: "00:48:19", title: "Blackjack as a Monte Carlo control example", detail: "The lecturer used Blackjack state features and hit/stick decisions to explain action-value learning; no separate assigned reading was announced." }],
    studentQuestions: [
      { time: "00:06:55", question: "What does it mean for a state–action pair to be visited in an episode?", response: "The instructor described it as the state and action occurring along the trajectory before the episode reaches a terminal state." },
      { time: "00:24:56", question: "Is Qπ(s,a) calculated by averaging prior returns for that pair?", response: "Yes; the instructor confirmed taking the average of returns associated with that state–action pair." },
      { time: "00:45:26", question: "Can γ vary from one time step to another?", response: "The instructor said γ is fixed in the presented formulation; the example uses a constant value." },
      { time: "01:19:59", question: "Can regret be calculated only after reaching a later time step?", response: "The instructor agreed that regret is assessed after interaction has progressed, rather than at the initial step." },
      { time: "01:21:05", question: "How is the baseline reward for the gradient-bandit update selected?", response: "The instructor said an average of rewards can be used as the baseline." },
      { time: "01:22:07", question: "Why does the preference update for the selected action involve the expected rewards of other actions?", response: "The instructor explained that the selected action is separated from the remaining actions, which form the alternatives in the expectation." },
      { time: "01:24:37", question: "Can playing several boards at once illustrate associative search?", response: "The instructor accepted the analogy: each board can represent a different state with its own suitable action." },
    ],
  },
  suggestedPractice: {
    assignments: [{ title: "Optional: compare first-visit and every-visit Q estimates", detail: "Use a short hand-built episode containing a repeated state–action pair and list exactly which returns enter each estimator." }],
    homework: [{ title: "Optional: test epsilon-soft probabilities", detail: "For three actions and ε=0.15, calculate each action probability when one action is greedy; check that the probabilities sum to one." }],
    labs: [{ title: "Optional: tabular Blackjack control", detail: "Simulate episodes, update state–action returns, and plot action coverage alongside the evolving hit/stick policy." }],
    projects: [{ title: "Optional: compare MC-ES, epsilon-soft control, and gradient bandits", detail: "Build a small episodic simulator with reproducible seeds; report return, action coverage, policy probabilities, and uncertainty across multiple runs." }],
    references: [{ title: "Reading map", detail: "Use Sutton and Barto Chapter 2 for bandit preferences/gradient methods and Chapter 5 for Monte Carlo prediction and control; use Stanford CS234 and Gymnasium's Blackjack tutorial for course and practice context." }],
    studentQuestions: [],
  },
  resources: [
    { kind: "read", title: "Sutton & Barto, Reinforcement Learning: An Introduction (2e)", url: "https://incompleteideas.net/book/the-book-2nd.html", detail: "Author-provided textbook; Chapter 2 develops bandit preference and gradient methods, while Chapter 5 covers Monte Carlo prediction and control." },
    { kind: "course", title: "Stanford CS234: Reinforcement Learning", url: "https://web.stanford.edu/class/cs234/modules.html", detail: "Course lecture materials link Monte Carlo topics to Sutton and Barto readings and provide a broader RL study sequence." },
    { kind: "practice", title: "Gymnasium: Solving Blackjack", url: "https://gymnasium.farama.org/tutorials/training_agents/blackjack_tutorial/", detail: "An executable practice environment with player total, dealer card, usable-ace state, and hit/stick actions; adapt it to compare episodic control methods." },
  ],
  keyTerms: [
    { term: "Action value Qπ(s,a)", definition: "Expected return after taking action a in state s and then following policy π." },
    { term: "First-visit Monte Carlo", definition: "An estimator that uses the return after the first occurrence of a state or state–action pair in each episode." },
    { term: "Every-visit Monte Carlo", definition: "An estimator that uses returns after every occurrence of a state or pair within an episode." },
    { term: "Exploring starts", definition: "An assumption that every state–action pair can be selected as an episode start with nonzero probability." },
    { term: "Epsilon-soft policy", definition: "A policy that keeps every available action at nonzero probability, preserving exploration." },
    { term: "Softmax preference", definition: "A normalized action probability derived from unnormalised action preference values." },
    { term: "Reward baseline", definition: "A reference reward subtracted from the observed reward to center a policy-gradient update." },
    { term: "Regret", definition: "Cumulative shortfall relative to a comparison policy or action, assessed over interaction rather than before it begins." },
  ],
  quiz,
} };
