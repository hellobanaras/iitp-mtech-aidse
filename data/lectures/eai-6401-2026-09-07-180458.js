// English-only publication unit for the verified 7 September 2026 recording.
const quizSeed = [
  ["What does a reward signal communicate to an RL agent?", ["How an outcome relates to the task goal", "The exact action label to copy", "The recording filename", "The screen resolution"], 0, "The lecture treats reward as communication about goal achievement, not a supervised action label."],
  ["What reward example was used for winning, losing, and drawing a game?", ["+1, -1, and 0 respectively", "0, +1, and -1", "All outcomes receive +1", "All outcomes receive 0"], 0, "The instructor used +1 for a win, -1 for a loss, and 0 for a draw."],
  ["What is an episodic task?", ["A task that naturally terminates at a boundary", "A task that runs forever without termination", "A task with no rewards", "A task with only one action"], 0, "Games and other naturally bounded tasks end in a terminal condition."],
  ["What characterizes a continuing task?", ["There is no known natural terminal time", "It always has exactly one step", "It cannot use discounting", "It has no state"], 0, "Walking or other ongoing control can continue without a known terminal time."],
  ["What is an immediate reward?", ["The reward obtained for the current state-action transition", "The sum of every future reward", "The final exam score", "The policy itself"], 0, "Immediate reward refers to the local outcome of the current decision."],
  ["What is the return at time t in an episodic task?", ["The cumulative rewards from the next step through the terminal time", "Only the first reward", "The number of available actions", "The state label"], 0, "The return sums future rewards until the episode terminates."],
  ["Why may the undiscounted return fail for a continuing task?", ["The terminal time may not exist", "The reward is always zero", "The state cannot be observed", "The agent cannot choose actions"], 0, "Without a terminal boundary, an infinite undiscounted sum may be undefined."],
  ["What does a discount factor gamma do?", ["Weights future rewards by their distance in time", "Deletes all immediate rewards", "Chooses the policy directly", "Changes the state space into pixels"], 0, "Discounting gives progressively smaller weights to later rewards."],
  ["What range was associated with the usual discount factor?", ["0 less than or equal to gamma less than 1", "Gamma must be greater than 2", "Gamma is always -1", "Gamma has no constraint"], 0, "The slide describes discounted continuing return with gamma below one and nonnegative."],
  ["What is a policy pi(a|s)?", ["A rule or distribution for choosing actions in states", "The reward after an episode", "The transition probability alone", "A recording control"], 0, "A policy specifies action choice conditional on the current state."],
  ["What does the state-value function v_pi(s) measure?", ["Expected return starting in state s while following policy pi", "The number of states", "The immediate reward only", "The probability of a video frame"], 0, "State value is the expected discounted return from a state under a policy."],
  ["What does the action-value function q_pi(s,a) condition on?", ["A state and a particular first action", "Only the terminal state", "Only the discount factor", "The course code"], 0, "Q-value evaluates expected return given state s and action a."],
  ["What is the relationship between state and action values?", ["State value averages action values under the policy", "They are unrelated quantities", "Action value ignores rewards", "State value is always smaller"], 0, "The policy-weighted action values produce the value of the state."],
  ["What does a backup diagram represent?", ["Looking ahead through actions and possible next states to evaluate a choice", "A file backup schedule", "A reward-free trajectory", "A network packet header"], 0, "The diagram propagates information from successor states back to the current decision."],
  ["Why are transition probabilities included in a Bellman expectation?", ["Different next states and rewards have different likelihoods", "They replace the policy", "They remove uncertainty", "They determine font size"], 0, "Expected return weights each possible outcome by its dynamics probability."],
  ["What does the Bellman equation express for v_pi(s)?", ["A recursive relation between current value and expected next-step value", "A direct list of all actions", "A definition of the recording interval", "A supervised target label"], 0, "The Bellman equation decomposes value into immediate reward plus discounted successor value."],
  ["What is the purpose of a terminal state in an episodic return?", ["It provides a stopping boundary for the cumulative sum", "It eliminates all rewards", "It forces random actions", "It makes every task continuing"], 0, "The terminal boundary tells us where the episodic return stops."],
  ["Why can reward engineering determine whether an agent learns the intended goal?", ["Rewards communicate which outcomes count as progress", "Rewards automatically write the policy", "Rewards remove the environment", "Rewards are only presentation text"], 0, "Poorly designed rewards can encourage behavior that misses the intended objective."],
  ["In the recycling-robot example, what states were used?", ["High battery and low battery", "Win and loss", "Public and private", "Pixel and vector"], 0, "Battery charge is the compact state variable in the example."],
  ["Which action is foolish when the recycling robot battery is high?", ["Recharge", "Search", "Wait", "Observe"], 0, "The lecture excludes recharging at high battery because it wastes the available charge."],
  ["Which extra action becomes available when the battery is low?", ["Head home and recharge", "Delete the reward", "Change the terminal state", "Remove the policy"], 0, "Low charge enables the recharge action."],
  ["What does an alpha or beta parameter illustrate in the recycling example?", ["A probability of a possible next-state outcome", "The number of lecture slides", "The final reward only", "A policy name"], 0, "The parameters split transition probability between possible battery states."],
  ["What does an undiscounted continuing sum risk?", ["Divergence or nonexistence when rewards continue indefinitely", "Guaranteed zero value", "Automatic optimality", "No dependence on rewards"], 0, "An infinite sum need not converge without discounting or other conditions."],
  ["How does a policy affect the Bellman expectation?", ["It weights the available actions at the current state", "It determines the video duration", "It removes transition probabilities", "It fixes every future reward"], 0, "The policy probabilities appear when averaging over the action choices."],
  ["What did the instructor say about whether the policy is predefined?", ["It is learned through experience rather than supplied as the answer", "It is always given in advance", "It is unrelated to experience", "It is the same as the reward"], 0, "The question discussion emphasized that RL learns a policy from experience."],
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `${option} is correct: it matches the lecture's RL definition or example.`
    : `${option} is not correct here: it does not match the lecture's return, value, or policy mechanism.`),
}));

export const eai6401Lecture20260907180458 = {
  en: {
    title: "Returns, episodic and continuing tasks, and value functions in reinforcement learning",
    lede: "This lecture explains reward engineering, episodic versus continuing tasks, return and discounted return, policies, value functions, action values, backup diagrams, and the Bellman equation through reinforcement-learning examples.",
    instructionalInterval: "00:05:44–01:26:47 source time (2× visible-tab capture; opening participant/setup interval excluded; video ended during Bellman-equation instruction)",
    reviewLevel: "Full-timeline sweep at beginning/10%/25%/50%/75%/90%/near-end, 2× visible-tab capture, 81 sampled frames, and source-time-restored transcript",
    coverage: [
      { title: "Contextual bandit warm-up", body: "A two-case, two-action exercise shows why observing context can raise expected reward from 0.50 to 0.55." },
      { title: "Finite MDP vocabulary", body: "States, actions, rewards, and transition dynamics provide a compact language for interactive decision problems." },
      { title: "The Markov property", body: "A useful state must summarize all history that can affect future rewards and transitions." },
      { title: "Agent–environment interface", body: "At each step the agent chooses an action and the environment returns a reward and next state." },
      { title: "Recycling-robot dynamics", body: "High/low battery states, search/wait/recharge actions, transition probabilities, and rewards make the abstraction concrete." },
    ],
    takeaway: "A good RL model is built by choosing a sufficient state, explicit actions, meaningful rewards, and a transition model that preserves the information needed for future decisions.",
    slideTrail: [
      { time: "00:00:40–00:16:40", title: "Exercise: hidden versus revealed two-armed cases", note: "The worked values 0.1/0.2 and 0.9/0.8 show random action choice when the case is hidden and context-conditioned choice when it is revealed." },
      { time: "00:17:40–00:22:40", title: "Finite Markov Decision Processes", note: "The opening slides enumerate states, actions, rewards, returns, episodes, policies, and value functions as the chapter roadmap." },
      { time: "00:28:40–00:46:40", title: "MDP as goal-directed learning from interaction", note: "The visual explanation introduces agent, environment, state, action, reward, and delayed consequences." },
      { time: "00:46:40–01:05:40", title: "Agent–Environment Interface", note: "The diagram and equations describe P(s', r | s, a), state-transition probabilities, and expected rewards." },
      { time: "01:08:40–01:14:40", title: "MDP as goal-directed learning", note: "The lecture reconnects the formal model to practical boundaries and explains that time steps can be abstract decision stages." },
      { time: "01:09:40–01:23:40", title: "Recycling Robot and transition examples", note: "High/low battery states and search, wait, and recharge actions illustrate alpha/beta transition probabilities and reward design." },
    ],
    summary: [
      { title: "1. Context changes the best action", sourceRefs: ["00:00:40–00:16:40", "Exercise slide"], paragraphs: ["The opening exercise considers two possible cases. In case A, action values are 0.1 and 0.2; in case B, they are 0.9 and 0.8, with each case equally likely. If the case is hidden, each action has expectation 0.5, so neither action dominates and random choice is defensible.", "If the case is revealed at each step, the learner can choose action 2 in A and action 1 in B. The expected reward becomes 0.5 × 0.2 + 0.5 × 0.9 = 0.55. This is the key intuition behind associative or contextual search: a useful situation feature makes different action policies possible."], formula: "E[R|hidden]=0.5(0.1)+0.5(0.9)=0.50;\\quad E[R|context]=0.5(0.2)+0.5(0.9)=0.55" },
      { title: "2. An MDP gives RL a precise vocabulary", sourceRefs: ["00:17:40–00:46:40", "Finite Markov Decision Processes slides"], paragraphs: ["The finite MDP framework models goal-directed learning from interaction. A state S_t summarises the environment at time t; A_t is an action available in that state; R_{t+1} is the reward produced by the transition; and S_{t+1} is the next state. Finite means the relevant state and action sets are finite, while the framework can still represent uncertainty and delayed consequences.", "The agent is the decision maker and the environment is everything outside the chosen control boundary. That boundary is functional rather than merely physical: sensors, motors, battery dynamics, and low-level controls may be part of the environment if the high-level agent cannot change them arbitrarily."], formula: "S_t\\xrightarrow{A_t} (R_{t+1},S_{t+1})" },
      { title: "3. The Markov property protects one-step reasoning", sourceRefs: ["00:28:40–00:46:40", "Agent–Environment Interface slides"], paragraphs: ["A state has the Markov property when it contains every aspect of the past interaction that can make a difference to the future. If the representation omits relevant history, the agent must reconstruct that history or accept that a one-step transition model is insufficient. The lecture stresses that the quality of the state representation determines how useful the resulting dynamics and policy can be.", "The property is about predictive sufficiency, not about whether the state is physical. A chess board, a battery-level summary, or a mental/computational condition can all be a state if it carries the information required for future decisions."], formula: "P(S_{t+1},R_{t+1}|S_t,A_t,history)=P(S_{t+1},R_{t+1}|S_t,A_t)" },
      { title: "4. Dynamics turn the interface into probabilities", sourceRefs: ["00:46:40–01:05:40", "Agent–Environment Interface equations"], paragraphs: ["The four-argument dynamics P(s', r | s, a) assigns a probability to each possible next-state/reward pair given a current state and action. Summing over every possible outcome gives one. From this joint distribution we can marginalise rewards to get state-transition probabilities and take a weighted sum to get expected rewards for a state-action pair.", "This decomposition is useful even when the full dynamics are not known. It defines exactly what a model-based RL system would need to estimate and clarifies what an agent experiences: action, then environment response, then the next decision."], formula: "p(s'|s,a)=\\sum_r p(s',r|s,a);\\quad r(s,a)=\\sum_{s',r}r\,p(s',r|s,a)" },
      { title: "5. Reward design communicates the goal", sourceRefs: ["00:34:40–00:46:40", "Reward discussion"], paragraphs: ["Rewards are feedback, not action labels. The recycling example uses positive reward for successfully placing a can in the bin, zero for searching without progress, and a penalty when low battery prevents useful work or triggers an undesirable outcome. The scale and timing should make progress distinguishable without accidentally rewarding a shortcut.", "A question about supervised learning exposes the distinction: a designer may engineer the reward function, but the agent still learns from interaction and consequences rather than receiving a labelled correct action for every state."], formula: "goal\\;signal: R_{t+1}=f(\\text{outcome},\\text{task design})" },
      { title: "6. Recycling Robot makes the abstraction testable", sourceRefs: ["01:09:40–01:23:40", "Recycling Robot and Examples slides"], paragraphs: ["The robot has high and low battery states. It can search, wait, or recharge depending on the state; recharge is foolish at high battery but necessary when the battery is low. When searching from high battery, alpha is the probability of staying high and 1-alpha is the probability of becoming low. When searching from low battery, beta is the probability of remaining low and 1-beta is the probability of reaching a high/recharged condition.", "Writing these cases as a transition table or graph forces the modeller to declare legal actions, next-state probabilities, and rewards. That explicitness is the practical value of the MDP abstraction: the RL algorithm can only optimise what the representation and reward design make visible."], formula: "P(High|High,Search)=\\alpha;\\quad P(Low|Low,Search)=\\beta" },
    ],
    insights: [
      { label: "Representation", title: "State design is the hidden modelling decision", body: "Many RL failures are representation failures: if the state forgets a variable that changes future outcomes, no downstream policy can reliably recover the missing information." },
      { label: "Context", title: "A small cue can change the policy class", body: "The bandit exercise shows that one observable case indicator converts an indistinguishable global action choice into a context-conditioned policy." },
      { label: "Reward", title: "Reward engineering is specification, not supervision", body: "A reward function communicates desirability but does not prescribe the correct action. Its scale and timing become part of the task specification and can create unintended shortcuts." },
      { label: "Connection", title: "MDPs connect diagrams to algorithms", body: "The state/action/reward/transition tuple is the bridge between a real system such as a recycling robot and the policies, value functions, and planning algorithms introduced later." },
    ],
    courseSignals: {
      assignments: [],
      homework: [{ time: "00:12:40", title: "Two-armed bandit exercise", detail: "The instructor asked students to capture and try the shared numerical exercise before the follow-up discussion." }],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [
        { time: "00:20:40", question: "Should immediate or delayed consequences be prioritised?", response: "The instructor explains that the answer depends on the task; many RL problems require looking ahead to delayed reward rather than selecting only the largest immediate reward." },
        { time: "00:43:40", question: "Does RL have a learning curve and how does an agent update a penalty?", response: "The instructor distinguishes learning from interaction from supervised labels and explains that the environment's engineered reward signal communicates whether an outcome is desirable." },
        { time: "00:49:40", question: "If rewards are assigned, does the problem become supervised learning?", response: "No. Reward is evaluative feedback; supervised learning supplies labelled target actions, while RL learns through consequences in an environment." },
      ],
    },
    resources: [
      { kind: "read", title: "Reinforcement Learning: An Introduction, Chapter 3", url: "https://incompleteideas.net/book/the-book-2nd.html", detail: "The authors' open HTML textbook chapter develops finite Markov decision processes, returns, policies, and value functions." },
      { kind: "read", title: "Markov Decision Processes: Discrete Stochastic Dynamic Programming", url: "https://web.stanford.edu/~ashishg/msande111/", detail: "Stanford course material for formal MDP modelling and dynamic programming." },
      { kind: "practice", title: "Gymnasium custom environment guide", url: "https://gymnasium.farama.org/introduction/create_custom_env/", detail: "Build a small recycling-robot environment with high/low battery states and explicit step transitions." },
      { kind: "practice", title: "David Silver RL Lecture 2: Markov Decision Processes", url: "https://www.youtube.com/watch?v=lfHX2hHRMVQ", youtubeId: "lfHX2hHRMVQ", detail: "A visual follow-up on Markov reward processes, MDPs, and value functions." },
      { kind: "watch", title: "Sutton & Barto chapter videos and examples", url: "https://www.youtube.com/@DeepMindAI", detail: "Use the DeepMind lecture collection to connect the interface loop to later policy and value-function methods." },
    ],
    keyTerms: [
      { term: "MDP", definition: "A mathematical model of sequential decisions using states, actions, rewards, and transition dynamics." },
      { term: "Markov property", definition: "The state contains all history information needed to determine future outcome distributions." },
      { term: "Agent", definition: "The decision maker that selects actions from its current state representation." },
      { term: "Environment", definition: "Everything outside the chosen agent boundary that responds to actions and supplies observations/rewards." },
      { term: "Dynamics", definition: "The probability distribution over next states and rewards for each state-action pair." },
      { term: "Contextual bandit", definition: "A one-step decision problem in which action choice depends on an observed situation." },
    ],
    quiz,
  },
};
