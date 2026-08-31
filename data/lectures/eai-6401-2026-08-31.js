// English-only publication unit for the verified 31 August 2026 recording.
const quizSeed = [
  ["What is the UCB action-selection rule trying to balance?", ["Estimated value and uncertainty", "Only the most recent reward", "A fixed random action", "The number of slides"], 0, "UCB adds an uncertainty bonus to the estimated action value."],
  ["What happens to the UCB exploration bonus when N_t(a) is small?", ["It becomes larger", "It becomes zero", "It ignores the action", "It equals the reward"], 0, "Few observations make the denominator small, so the bonus is larger."],
  ["In UCB, what does c control?", ["The exploration strength", "The number of actions", "The reward definition", "The transcript length"], 0, "c scales how strongly uncertainty affects selection."],
  ["Which expression is the standard UCB bonus shape used in the lecture?", ["c sqrt(log t / N_t(a))", "c N_t(a)", "Q_t(a) - R_t", "epsilon / t"], 0, "The lecture uses a logarithmic-time, inverse-count uncertainty term."],
  ["Why can UCB outperform fixed-epsilon exploration on the testbed?", ["It focuses exploration on uncertain actions", "It never explores", "It knows every true value", "It stores every reward"], 0, "UCB allocates exploration according to uncertainty rather than a constant random rate."],
  ["What do gradient bandits learn directly?", ["Action preferences", "A transition table", "A fixed epsilon", "A slide index"], 0, "Gradient bandits maintain preferences H_t(a) and derive probabilities from them."],
  ["How are gradient-bandit preferences converted to action probabilities?", ["Softmax", "A hard minimum", "A file lookup", "Uniform sampling only"], 0, "Softmax maps preferences to positive probabilities that sum to one."],
  ["What is the softmax probability for action a?", ["e^{H_t(a)} / sum_b e^{H_t(b)}", "H_t(a) / N_t(a)", "R_t - Q_t(a)", "1 - epsilon"], 0, "The exponential preference is normalized over all actions."],
  ["Why are all preferences often initialized to zero?", ["It starts with equal probabilities", "It makes one action optimal", "It removes the reward", "It guarantees convergence"], 0, "Equal preferences produce a symmetric initial softmax distribution."],
  ["What signal scales the gradient-bandit update?", ["R_t - baseline", "N_t(a) only", "The video duration", "The action name"], 0, "The reward relative to a baseline determines whether preferences should rise or fall."],
  ["What does a positive advantage R_t - Rbar_t do for the selected action?", ["Increases its preference", "Deletes its preference", "Forces uniform probabilities", "Stops learning"], 0, "A better-than-baseline reward reinforces the selected action."],
  ["What happens to nonselected preferences after a positive advantage?", ["They are reduced in proportion to their probabilities", "They all become one", "They are never updated", "They receive the full reward"], 0, "The update redistributes probability mass away from alternatives."],
  ["Why is a reward baseline useful in a gradient bandit?", ["It reduces variance without changing the expected gradient", "It reveals the optimal action", "It removes all exploration", "It changes the action set"], 0, "Subtracting a baseline centers the learning signal and can improve stability."],
  ["What empirical effect did the baseline have on the 10-armed testbed?", ["Faster and stronger convergence", "No learning at all", "Exactly uniform performance", "Guaranteed zero reward"], 0, "The lecture compares baseline and no-baseline curves and reports a substantial improvement with a suitable step size."],
  ["What is a risk of choosing a very large gradient step size alpha?", ["Noisy or unstable updates", "No parameter updates", "A fixed optimal policy", "A smaller action space"], 0, "Large steps react strongly to reward noise and can oscillate."],
  ["What does the softmax derivative contain for the same action?", ["pi_t(b)(1-pi_t(a)) when a=b", "Only N_t(a)", "Only c", "A hard argmax"], 0, "Differentiating softmax yields the probability times one minus that probability for the matching index."],
  ["Why can a baseline be subtracted mathematically?", ["Action probabilities sum to one", "Rewards are always zero", "All actions are identical", "The denominator is removed"], 0, "The baseline contribution cancels because the policy probabilities form a normalized distribution."],
  ["What is the defining simplification of a non-associative bandit?", ["There is one situation or state", "Actions change a long state trajectory", "Every reward is known", "There are no actions"], 0, "A basic k-armed bandit repeatedly chooses actions without state-dependent context."],
  ["What does associative search add to a bandit problem?", ["A context-to-action mapping", "A larger font", "A fixed recording duration", "A random baseline"], 0, "Associative or contextual bandits choose using the current situation."],
  ["Why are contextual bandits between k-armed bandits and full reinforcement learning?", ["They use context but omit long-horizon state transitions", "They have no rewards", "They require a complete model", "They only classify images"], 0, "They add context while retaining the one-step decision structure."],
  ["What kind of cue can make an associative task learnable?", ["A context feature correlated with the best action", "A hidden transcript token", "A constant idle frame", "A random filename"], 0, "Useful cues let the learner distinguish which action is appropriate in each situation."],
  ["Why might a contextual problem look nonstationary without cues?", ["The best action changes with the observed situation", "The reward distribution is known", "There is no action selection", "The algorithm has no parameters"], 0, "Aggregating different contexts can make the overall reward pattern appear to drift."],
  ["How should a gradient bandit be extended to multiple contexts in the lecture discussion?", ["Maintain or run a context-specific preference policy", "Use one global action regardless of context", "Remove softmax", "Stop after one reward"], 0, "The response distinguishes a policy per contextual problem from one non-associative instance."],
  ["What is the main difference between a contextual bandit and full RL?", ["Full RL includes state transitions and future consequences", "Contextual bandits have no reward", "Full RL cannot use observations", "They are exactly identical"], 0, "Full RL models actions changing later states and rewards; a contextual bandit focuses on immediate payoff."],
  ["What exercise did the instructor leave for students near the end?", ["Try the shared bandit numerical exercise before the next class", "Submit a production app immediately", "Memorize all slide colours", "Delete the testbed"], 0, "The instructor asked students to capture the exercise and attempt it before the follow-up discussion."],
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `${option} is correct: it matches the lecture's definition or example.`
    : `${option} is not correct here: it conflicts with the lecture's mechanism or scope.`),
}));

export const eai6401Lecture20260831 = {
  en: {
    title: "UCB, gradient bandits, and contextual search",
    lede: "The lecture moves from uncertainty-aware UCB selection to preference-gradient learning, then places associative or contextual bandits between the one-state bandit and full reinforcement learning.",
    instructionalInterval: "00:08:40–01:47:26 source time (2× visible-tab capture; participant-only tail excluded)",
    reviewLevel: "Full-timeline sweep at beginning/10%/25%/50%/75%/90%/near-end, 2× visible-tab capture, 99 sampled frames, and source-time-restored transcript",
    coverage: [
      { title: "Upper Confidence Bound selection", body: "UCB adds a confidence bonus to an action-value estimate so actions with little evidence receive principled exploration." },
      { title: "Gradient bandit preferences", body: "A softmax policy turns learnable action preferences into probabilities, with reward relative to a baseline driving the update." },
      { title: "Baseline and step-size effects", body: "The baseline reduces variance, while the learning rate controls the trade-off between fast adaptation and noisy updates." },
      { title: "Associative and contextual bandits", body: "A context-dependent policy chooses actions for different situations without yet modelling long-horizon state transitions." },
    ],
    takeaway: "Choose exploration mechanisms according to the evidence available: UCB uses uncertainty, gradient bandits learn preferences, and contextual bandits condition the decision on the current situation.",
    slideTrail: [
      { time: "00:08:40–00:18:40", title: "Upper Confidence Bound (UCB) action selection", note: "The UCB estimate combines Q_t(a) with c sqrt(log t / N_t(a)); low-count actions receive a larger bonus." },
      { time: "00:18:40–00:25:40", title: "UCB testbed and regret", note: "The comparison with epsilon-greedy and the logarithmic-regret discussion motivate uncertainty-directed exploration." },
      { time: "00:25:40–00:38:40", title: "Gradient bandit algorithm", note: "Preferences H_t(a) are converted by softmax and updated from the selected reward." },
      { time: "00:38:40–00:52:40", title: "Baseline reward and testbed results", note: "The baseline version reaches the strongest optimal-action rate for a suitable alpha, while no-baseline and overly large alpha are less stable." },
      { time: "00:52:40–01:07:40", title: "Stochastic-gradient derivation", note: "The quotient-rule/softmax derivative explains selected and nonselected preference updates and why the baseline cancels in expectation." },
      { time: "01:07:40–01:23:40", title: "Associative search and contextual bandits", note: "The deck contrasts one-state non-associative bandits with context-to-action mappings and positions them before full RL." },
      { time: "01:23:40–01:38:40", title: "Contextual questions and exercise", note: "Student questions probe contextual gradient policies, stopping criteria, and the numerical exercise left for the next class." },
    ],
    summary: [
      { title: "1. UCB turns uncertainty into an exploration signal", sourceRefs: ["00:08:40–00:25:40", "Upper Confidence Bound slides"], paragraphs: ["The UCB selector scores an action with its current estimate plus an uncertainty bonus. The bonus grows when N_t(a), the number of times action a has been selected, is small, and shrinks as evidence accumulates. The logarithm of time makes the exploration pressure grow slowly while still revisiting uncertain actions.", "The coefficient c is a design choice: increasing it favours exploration, while decreasing it makes the policy more exploitative. The testbed comparison shows why this can be more targeted than a fixed epsilon: UCB spends exploration budget where the estimate is least certain rather than randomising at the same rate forever."], formula: "A_t = argmax_a [Q_t(a) + c sqrt(log t / N_t(a))]" },
      { title: "2. Gradient bandits learn a preference landscape", sourceRefs: ["00:25:40–00:38:40", "Gradient Bandit Algorithm slide"], paragraphs: ["Instead of estimating each action's expected reward directly, a gradient bandit maintains preferences H_t(a). A softmax converts those preferences into a probability distribution, so every action can remain selectable while preferred actions receive more probability.", "The selected reward is compared with a baseline. A better-than-baseline outcome increases the selected preference and decreases alternatives in proportion to their probability; a worse outcome reverses the pressure. The update is therefore a policy-gradient-style rule for a one-step bandit."], formula: "pi_t(a)=e^{H_t(a)}/sum_b e^{H_t(b)}" },
      { title: "3. The baseline and alpha determine learning behaviour", sourceRefs: ["00:38:40–00:52:40", "Baseline comparison plot"], paragraphs: ["The running average reward Rbar_t provides a reference point. Subtracting it does not change the expected gradient because the policy probabilities sum to one, but it centres the signal and reduces variance. The reported 10-armed testbed comparison favours the baseline version at a suitable step size.", "The learning rate alpha controls responsiveness. A large alpha reacts quickly but can amplify noise, while a small alpha is smoother but slower. The baseline is not a magic reward predictor; it is a variance-reduction device that makes the direction of the update easier to learn."], formula: "H_{t+1}(A_t)=H_t(A_t)+alpha(R_t-Rbar_t)(1-pi_t(A_t)); H_{t+1}(a)=H_t(a)-alpha(R_t-Rbar_t)pi_t(a)" },
      { title: "4. The derivative explains probability redistribution", sourceRefs: ["00:52:40–01:07:40", "Stochastic-gradient derivation"], paragraphs: ["The derivation differentiates the expected reward with respect to each preference. For softmax, the derivative includes pi_t(b)(1_{a=b}-pi_t(a)), which is positive for the matching action and negative for the others. This is why increasing one preference necessarily redistributes probability mass.", "The baseline term disappears from the expected gradient after summing over actions. In implementation terms, this gives a compact update that needs only the selected action, its reward, the current baseline, alpha, and the current probability vector—not a separate differentiable model of the environment."], formula: "partial pi_t(b)/partial H_t(a)=pi_t(b)(1_{a=b}-pi_t(a))" },
      { title: "5. Context changes the meaning of the best action", sourceRefs: ["01:07:40–01:23:40", "Associative search slides"], paragraphs: ["A non-associative k-armed bandit has one situation and repeatedly chooses among actions. Associative search, also called a contextual bandit, receives a situation or context and must learn which action is useful for that context. A cue can make an otherwise confusing reward pattern separable.", "This setting is intermediate: it adds a policy mapping from context to action but does not model actions changing future states. Full reinforcement learning adds those transitions and their delayed consequences. A contextual gradient policy can therefore be understood as a collection of preference decisions indexed by context, rather than one global preference vector."], formula: "policy: context -> action distribution" },
      { title: "6. The closing discussion turns concepts into practice", sourceRefs: ["01:23:40–01:38:40", "Exercise and Q&A"], paragraphs: ["Questions about variable action sets, contextual use, and stopping criteria expose the boundary of the algorithms. A practical implementation must define what constitutes a context, the available actions, the immediate reward, and whether a separate policy is needed per context. Fixed horizons or convergence diagnostics provide reasonable stopping rules.", "The instructor leaves a numerical exercise for students to capture and attempt before the next class. It is a learning task, not a production requirement; use it to check the UCB bonus, softmax probabilities, and preference update by hand."], formula: "context + action + reward -> updated policy" },
    ],
    insights: [
      { label: "Exploration", title: "Uncertainty is more informative than randomness", body: "UCB's bonus makes exploration evidence-seeking: the policy asks which action is uncertain, not merely which action was selected by a coin flip." },
      { label: "Stability", title: "A baseline changes the signal, not the target", body: "Subtracting average reward preserves the expected policy-gradient direction while making individual updates less noisy; this explains the stronger baseline curve without claiming it knows the optimum." },
      { label: "Design", title: "Context is a modelling commitment", body: "Calling a problem contextual is not enough. The system must define observable context, action availability, reward timing, and whether contexts need separate policies." },
      { label: "Connection", title: "Bandits are a useful RL ladder", body: "The lecture gives a practical progression: value estimates, uncertainty bonuses, preference gradients, context-conditioned choices, and finally state transitions with delayed consequences." },
    ],
    courseSignals: {
      assignments: [],
      homework: [{ time: "01:23:40", title: "Bandit numerical exercise", detail: "The instructor asked students to capture the shared exercise and try to solve it before the next class, when it would be discussed." }],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [
        { time: "00:18:40", question: "How does the UCB denominator and c affect the exploration bonus?", response: "The instructor explains that fewer selections increase the bonus and c controls its exploration strength." },
        { time: "00:30:40", question: "Where does the reward signal for a gradient bandit come from?", response: "It comes from the selected action's observed reward, compared with the running baseline." },
        { time: "01:15:40", question: "Can gradient bandits be applied to associative or contextual search?", response: "A contextual problem needs a context-specific policy or repeated gradient-bandit instance rather than one preference vector shared blindly across situations." },
        { time: "01:28:40", question: "How should variable actions, contexts, and stopping be handled?", response: "Define the context, available actions, reward, and a fixed horizon or convergence criterion before choosing the implementation." },
      ],
    },
    resources: [
      { kind: "read", title: "Reinforcement Learning: An Introduction, Chapter 2", url: "https://incompleteideas.net/book/the-book-2nd.html", detail: "The authors' open HTML textbook chapter provides the k-armed-bandit foundation behind UCB, gradient bandits, and associative search." },
      { kind: "read", title: "Bandit Algorithms", url: "https://tor-lattimore.com/downloads/book/book.pdf", detail: "An openly available research monograph for confidence bounds, regret, and contextual bandit theory." },
      { kind: "practice", title: "Open Bandit Dataset", url: "https://research.zozo.com/data.html", detail: "Use logged actions, propensities, and clicks to compare exploration and off-policy evaluation beyond the 10-armed testbed." },
      { kind: "practice", title: "Gymnasium Basic Usage", url: "https://gymnasium.farama.org/introduction/basic_usage/", detail: "Implement the reset/step loop and adapt it into a small bandit simulator with reproducible seeds." },
      { kind: "watch", title: "DeepMind x UCL Reinforcement Learning Lecture 3", url: "https://www.youtube.com/watch?v=0g4j2k_Ggc4", youtubeId: "0g4j2k_Ggc4", detail: "A visual follow-up on exploration and bandit-style decision making." },
    ],
    keyTerms: [
      { term: "UCB", definition: "Upper Confidence Bound selection adds an uncertainty bonus to an estimated action value." },
      { term: "Preference", definition: "A learnable score H_t(a) that determines an action's softmax probability." },
      { term: "Baseline", definition: "A reference reward subtracted from the observed reward to reduce update variance." },
      { term: "Contextual bandit", definition: "A one-step decision problem whose action policy depends on an observed situation." },
      { term: "Associative search", definition: "The lecture's term for associating different situations with useful actions." },
    ],
    quiz,
  },
};
