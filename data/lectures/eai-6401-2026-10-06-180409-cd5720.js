const quizSeed = [
  ["What is the behavior policy in off-policy Monte Carlo?", ["The policy that generates the sampled episodes", "The policy whose value is being estimated", "The transition model", "The terminal reward rule"], 0],
  ["What is the target policy?", ["The policy whose value or control objective is being evaluated", "The policy that must have generated every logged episode", "A distribution over rewards only", "The policy used by the environment to choose next states"], 0],
  ["What condition lets behavior data support an importance-sampling estimate for a target policy?", ["Every target-supported action has positive probability under behavior in that state", "Behavior and target probabilities are identical", "Every episode has the same length", "All rewards are positive"], 0],
  ["Why does the trajectory importance ratio reduce to action-probability ratios in the same environment?", ["The shared transition probabilities cancel between target and behavior trajectory likelihoods", "The environment is deterministic", "Rewards are independent of actions", "The target policy controls the transition model"], 0],
  ["What does ordinary importance sampling do with a return?", ["Multiplies it by its trajectory likelihood ratio and averages the weighted returns", "Divides each reward by the episode length", "Uses only the largest observed return", "Replaces the return with the next state's value"], 0],
  ["What is the main finite-sample risk of ordinary importance sampling?", ["A few large ratios can create very high variance", "It always has zero bias and zero variance", "It requires a known transition model", "It cannot use behavior-policy data"], 0],
  ["How does weighted importance sampling normalize its estimate?", ["Divide the sum of weighted returns by the sum of importance weights", "Divide by the number of states", "Multiply by the largest behavior probability", "Average only the terminal rewards"], 0],
  ["What trade-off did the lecture associate with the weighted estimator?", ["It is often more stable but can be biased in a finite sample", "It removes all sampling uncertainty", "It violates coverage by design", "It requires a complete environment model"], 0],
  ["What is the purpose of the cumulative C variable in the incremental weighted update?", ["It tracks the accumulated importance weights for the state or state-action estimate", "It stores the environment transition matrix", "It counts terminal states only", "It stores the current discount factor"], 0],
  ["In off-policy Monte Carlo control, why can the backward update stop when a sampled action differs from the greedy target action?", ["Earlier trajectory ratios no longer support continuing the target-policy control update past that mismatch", "The episode has necessarily ended", "The return is then known to be zero", "The behavior policy has become deterministic"], 0],
  ["What does the discount factor γ represent in the lecture's discount-aware horizon explanation?", ["A probability-like weight for continuing to include later rewards", "The probability of selecting the target action", "The learning rate for every update", "The number of episodes to average"], 0],
  ["What is a flat partial return Ḡ(t,h) in the lecture's construction?", ["The undiscounted sum of rewards through a chosen finite horizon", "The product of all policy probabilities in the episode", "The value of a terminal state", "The normalized sum of importance weights"], 0],
  ["Why does discount-aware importance sampling use horizon-specific corrections?", ["Only the actions relevant through a partial-return horizon should correct that horizon's reward sum", "Every horizon must use the full episode ratio", "It removes the need to observe rewards", "It makes behavior and target policies equal"], 0],
  ["What is the key distinction between discount-aware and per-decision importance sampling?", ["The former mixes horizon-level partial returns; the latter corrects each reward using ratios up to that reward", "The former is model-based and the latter needs a transition matrix", "The former uses no discount and the latter uses no policies", "They are identical except for notation"], 0],
  ["In per-decision importance sampling, which ratios correct reward R(k+1) in the return from time t?", ["The target-to-behavior ratios from t through k", "Ratios from the entire future after k", "Only ratios before time t", "No ratio is used for any reward"], 0],
  ["Why can later action ratios be omitted when correcting an earlier reward in the derivation?", ["Their conditional expected ratio under behavior is one, given coverage", "Later rewards are always zero", "The target policy is deterministic", "The episode must terminate after each reward"], 0],
  ["What did the numerical example use to compare the estimators?", ["One behavior-generated trajectory with three rewards and supplied target/behavior action probabilities", "A known transition matrix over every state", "A replay buffer with millions of episodes", "A continuous-action policy-gradient benchmark"], 0],
  ["What does Monte Carlo prediction require before its complete-episode return update is available?", ["The relevant episode must reach termination", "A differentiable transition model", "The optimal policy must already be known", "Every next-state probability must be enumerated"], 0],
  ["What does dynamic programming use that the sampled TD update does not require?", ["An environment model or its transition/reward expectations", "An observed immediate reward", "A current state-value estimate", "A learning-rate parameter"], 0],
  ["Which pair of ideas does TD learning combine in the lecture?", ["Learning from sampled experience and bootstrapping from a learned next-state estimate", "Importance ratios and a known transition matrix", "Complete returns and zero learning rate", "Policy gradients and a terminal-only reward"], 0],
  ["What is the one-step TD(0) target for a nonterminal transition?", ["R(t+1) + γV(S(t+1))", "The full return through episode termination", "The maximum action probability", "The mean of all behavior-policy rewards"], 0],
  ["What is the TD error δ(t)?", ["R(t+1) + γV(S(t+1)) − V(S(t))", "V(S(t)) − γR(t+1)", "The target/behavior probability ratio", "The episode length minus the discount factor"], 0],
  ["How does the TD(0) value update use its error?", ["V(S(t)) ← V(S(t)) + αδ(t)", "V(S(t)) ← V(S(t+1)) / α", "V(S(t)) ← γδ(t) only", "V(S(t)) ← maxₐπ(a|s)"], 0],
  ["Why is the TD update called a sample update in the lecture?", ["It uses the single action, reward, and next state observed in the episode", "It averages all possible next states from a model", "It waits for every policy's complete return", "It ignores the observed transition"], 0],
  ["What is the practical meaning of bootstrapping in TD(0)?", ["Update the current estimate using an existing estimate of the next state's value before the episode ends", "Replace all estimates with the terminal reward", "Use a policy ratio to rescale every future action", "Wait until every state has been visited exactly once"], 0],
];

const quiz = quizSeed.map(([question, options, originalAnswer], itemIndex) => {
  const rotation = itemIndex % options.length;
  const shuffledOptions = [...options.slice(rotation), ...options.slice(0, rotation)];
  const answer = (originalAnswer - rotation + options.length) % options.length;
  const explanations = [
    "The lecture defines this quantity by the role it plays in the sampled-data/target-value split.",
    "The trajectory derivation and worked examples support this interpretation.",
    "The update or estimator follows directly from the lecture's stated formula.",
    "This distinction is part of the lecture's comparison of sampling, horizons, and bootstrapping.",
  ];
  return {
    question,
    options: shuffledOptions,
    answer,
    explanation: explanations[itemIndex % explanations.length],
    optionNotes: shuffledOptions.map((option, index) => index === answer
      ? `Correct: ${option}.`
      : `Not correct here: ${option}.`),
  };
});

export const eai6401Lecture20261006180409 = { en: {
  title: "Discount-aware off-policy Monte Carlo and TD prediction",
  lede: "The class finishes off-policy Monte Carlo control, compares discount-aware and per-decision importance sampling, works a short trajectory example, and then introduces TD(0) as sample-based prediction with one-step bootstrapping.",
  instructionalInterval: "00:01:36–01:23:24 source time; 2× local capture was mapped back to the original Stream timeline",
  reviewLevel: "Seven-point full-timeline Stream triage, visible-tab capture at 2× with audio, restored-time transcript review, source-matched manifest, and closing idle-tail exclusion",
  coverage: [
    { title: "Incremental weighted importance sampling", body: "Track cumulative importance weight C and update a state or state-action estimate without retaining every weighted return." },
    { title: "Off-policy Monte Carlo control", body: "Generate episodes with behavior policy b, update action values with weighted returns, and improve a separate target policy." },
    { title: "Discount-aware partial-return corrections", body: "Interpret γ as a continuation weight, combine flat partial returns across horizons, and correct each horizon with only its relevant action ratios." },
    { title: "Per-decision importance sampling", body: "Correct each reward with the ratios of actions that can affect it, reducing unnecessary weighting by later decisions." },
    { title: "TD prediction and TD error", body: "Use observed transitions and a bootstrapped next-state estimate to update V(S) before the episode terminates." },
  ],
  takeaway: "Off-policy Monte Carlo reuses behavior-policy episodes only when coverage supports the target policy; its estimator choice controls how weights and variance behave. TD(0) takes a different step: it updates from one observed transition using the current next-state estimate, without needing a model or waiting for the full return.",
  slideTrail: [
    { time: "00:02:06", title: "Final Compact Representation", note: "The opening instructional slide connects a return to a compact weighted representation." },
    { time: "00:03:06", title: "Off-policy Prediction via Importance Sampling", note: "The class resumes the separation between behavior data and a target policy's value." },
    { time: "00:07:06", title: "Off-policy Monte Carlo algorithm", note: "The algorithm generates behavior episodes and updates weighted state-action estimates backward." },
    { time: "00:10:06", title: "Off-policy Monte Carlo Control", note: "Action-value estimates support a greedy target policy; a behavior action mismatch ends the relevant backward update." },
    { time: "00:13:06", title: "Discounting-aware importance sampling", note: "The lecture motivates correcting partial returns by horizon rather than multiplying every reward by an unnecessarily long ratio." },
    { time: "00:19:06–00:24:06", title: "Flat partial returns and weighted estimator example", note: "A three-reward trajectory illustrates horizon sums, action ratios, and a weighted discount-aware estimate." },
    { time: "00:35:06–00:49:06", title: "Per-decision importance sampling", note: "Each reward is corrected by the action ratios that precede it; the example contrasts this with a full-trajectory ratio." },
    { time: "00:52:06", title: "Temporal-Difference Learning", note: "The lecture moves from Monte Carlo and dynamic-programming limitations to the TD combination." },
    { time: "00:55:06–01:09:06", title: "TD prediction and TD(0) update", note: "A sampled reward and next state form a one-step target; the TD error adjusts the current value estimate." },
    { time: "01:20:06–01:23:24", title: "Temporal Difference (TD) Error", note: "The final sustained slide explains the prediction error; participant gallery and closing thanks follow." },
  ],
  summary: [
    { title: "1. Resume the weighted off-policy update", sourceRefs: ["00:01:36–00:10:06", "Off-policy Monte Carlo algorithm"], paragraphs: ["The instructor briefly revisits missed material, then returns to incremental weighted importance sampling and the off-policy Monte Carlo algorithm. For a state or state-action pair, maintain a cumulative weight C. Each new weighted return moves the current estimate toward that return in proportion to its importance weight relative to C; the transcript describes the update in the usual incremental-average form.", "Episodes are generated by a behavior policy b, while the target policy π is the policy being evaluated or improved. In control, updated action values determine the greedy target action. The backward update can stop when a sampled action no longer matches that target decision, rather than continuing to apply an incompatible target-policy ratio."] , formula: "C ← C + W;  Q ← Q + (W/C)(G − Q)" },
    { title: "2. Why discount-aware corrections use partial horizons", sourceRefs: ["00:13:06–00:31:36", "Discounting-aware importance sampling", "Flat Partial Returns"], paragraphs: ["Ordinary trajectory weighting can multiply action ratios from far beyond the reward being estimated. The lecture interprets γ as a probability-like continuation weight: 1−γ is the corresponding chance of ending the return horizon. This motivates mixing flat, undiscounted partial returns over possible horizons with geometric weights.", "For a chosen horizon h, the partial return includes rewards only through that horizon. Its correction uses action ratios through the decisions that generate that partial return. The terminal-tail contribution is treated separately when the horizon reaches the episode end. The worked derivation shows why horizon-specific weighting avoids applying unrelated later ratios to an earlier reward."] , formula: "Ḡ(t,h) = R(t+1) + R(t+2) + … + R(h)" },
    { title: "3. A trajectory makes the estimators concrete", sourceRefs: ["00:19:06–00:31:36", "Numerical Example", "Weighted Discounting-Aware IS Estimator"], paragraphs: ["The example uses a behavior-generated three-step trajectory with rewards 4, 3, and 2, γ=0.9, and supplied target/behavior probabilities for each chosen action. The class calculates the per-step likelihood ratios, their cumulative products, and flat partial returns, then uses those quantities in the discount-aware estimate.", "The discussion clarifies the horizon-one case: the terminal contribution is included when that horizon coincides with termination. The geometric horizon sum ranges over partial returns; it should not be confused with a blanket full-episode ratio applied to every reward."] },
    { title: "4. Per-decision sampling aligns each ratio with its reward", sourceRefs: ["00:35:06–00:49:20", "Per-Decision Importance Sampling", "Numerical Example"], paragraphs: ["Per-decision importance sampling expands the discounted return into individual rewards. Reward R(k+1) is weighted only by the target-to-behavior action ratios from the current time t through decision k; later actions cannot cause that already received reward. Under the coverage condition, the expected future ratio is one, which is the reasoning used to remove those unnecessary future factors.", "The example computes the same stepwise ratios—2, 1.2, and 0.5—and contrasts the full-trajectory correction with separately corrected reward terms. The instructor notes that no single estimator is universally best: the choice depends on the problem and the method's variance/stability and implementation trade-offs."] , formula: "Gᵖᵈ_t = Σₖ₌ₜᵀ⁻¹ γ^(k−t) [∏ⱼ₌ₜᵏ π(Aⱼ|Sⱼ)/b(Aⱼ|Sⱼ)] R(k+1)" },
    { title: "5. TD learning joins sample experience with bootstrapping", sourceRefs: ["00:52:06–01:05:06", "Temporal-Difference Learning", "TD Prediction"], paragraphs: ["Monte Carlo learns from experience without a model, but waits for an episode's complete return. Dynamic programming can update from expected next-state outcomes, but it needs a model. TD learning combines sample-based experience with bootstrapping: use the one observed transition and an existing estimate for the next state.", "For the policy being evaluated, TD(0) initializes nonterminal state values, samples an action and next transition, and updates immediately. The class distinguishes this single observed transition from dynamic programming's backup over the distribution of possible next states. The terminal state's value is zero."] , formula: "V(Sₜ) ← V(Sₜ) + α[Rₜ₊₁ + γV(Sₜ₊₁) − V(Sₜ)]" },
    { title: "6. TD error measures the one-step prediction gap", sourceRefs: ["01:05:06–01:23:24", "Temporal Difference (TD) Error"], paragraphs: ["The one-step TD target is the immediate reward plus the discounted current estimate of the next state's value. Subtracting the current estimate gives δₜ, the temporal-difference error. The learning-rate-scaled error adjusts V(Sₜ) toward this one-step target before the final episode outcome is known.", "The instructor uses an exam-score prediction analogy: new evidence can revise an earlier estimate without waiting for the final result. TD(0), TD(1), and TD(λ) are mentioned as related points on a continuum; the lecture ends before teaching TD(λ) in detail."] , formula: "δₜ = Rₜ₊₁ + γV(Sₜ₊₁) − V(Sₜ)" },
  ],
  insights: [
    { label: "Support", title: "A ratio cannot invent missing behavior evidence", body: "Importance sampling can reweight observed actions, not recover a target action that behavior never takes." },
    { label: "Variance", title: "The correction horizon matters", body: "Applying a long product of action ratios to an early reward adds variability from decisions that could not have caused that reward." },
    { label: "Learning target", title: "Monte Carlo and TD bootstrap differently", body: "Monte Carlo uses the completed return; TD(0) uses one reward plus a learned next-state value." },
    { label: "Model use", title: "TD is sample-based, not expectation over every successor", body: "A sampled action/reward/next state replaces the full transition expectation required by a model-based dynamic-programming backup." },
  ],
  courseSignals: {
    assignments: [],
    homework: [],
    labs: [],
    projects: [],
    references: [],
    studentQuestions: [
      { time: "00:32:33", question: "In the horizon-one worked example, why was the terminal contribution not included in the first partial-return calculation?", response: "The instructor clarified that the terminal contribution applies when the chosen horizon reaches the episode's terminal step; the example's horizon distinction determines which term is used." },
      { time: "00:33:27", question: "Is the terminal contribution part of the geometric horizon summation?", response: "The instructor distinguished the terminal contribution from the partial-return terms and clarified how it is handled when the horizon reaches termination; the spoken exchange is partly ambiguous, so the note preserves the conceptual distinction rather than a disputed transcription." },
      { time: "00:43:35", question: "Why is the behavior-policy expectation of the target-to-behavior action ratio equal to one?", response: "The instructor expanded the expectation over behavior actions; the behavior probability cancels in the ratio, and the supported target-action probabilities sum to one." },
      { time: "00:50:21", question: "Which importance-sampling estimator is best?", response: "The instructor said the methods have different advantages and the choice depends on the problem's complexity; per-decision correction can be an easier fit for off-policy Monte Carlo." },
      { time: "01:10:34", question: "If a real-time learner has no transition model, how can it account for the probability of moving from the current state to the next?", response: "The instructor explained that TD uses the sampled episode: it observes one action, reward, and next state and performs a sample update, rather than summing over a model's possible transitions." },
    ],
  },
  suggestedPractice: {
    assignments: [{ title: "Optional, not instructor-assigned: audit importance-ratio support", detail: "For a small target and behavior policy, list every target-supported action and check behavior coverage before computing any ratio." }],
    homework: [{ title: "Optional, not instructor-assigned: compare reward-wise corrections", detail: "On a three-reward trajectory, compute the full trajectory ratio and the per-decision ratio prefix used for each reward." }],
    labs: [{ title: "Optional, not instructor-assigned: run a TD(0) trace", detail: "Choose a short sampled path and manually update V after every transition; compare with a Monte Carlo update made only after termination." }],
    projects: [{ title: "Optional, not instructor-assigned: compare MC and TD learning curves", detail: "On a small episodic environment, vary episode length and step size, then compare update timing, return error, and seed-to-seed variability." }],
    references: [{ title: "Optional reading map", detail: "Use Sutton and Barto Chapter 5 for off-policy Monte Carlo and importance sampling and Chapter 6 for TD prediction; Stanford CS234's policy-evaluation module supplies a complementary course treatment." }],
    studentQuestions: [],
  },
  resources: [
    { kind: "read", title: "Sutton & Barto, Reinforcement Learning: An Introduction (2e)", url: "https://incompleteideas.net/book/the-book-2nd.html", detail: "The authors' open companion text: Chapter 5 covers off-policy Monte Carlo and importance sampling, while Chapter 6 develops TD prediction and bootstrapping." },
    { kind: "course", title: "Stanford CS234: Tabular RL policy evaluation", url: "https://web.stanford.edu/class/cs234/modules.html", detail: "The official module pairs Monte Carlo prediction readings with later TD and Q-learning material, reinforcing the lecture's sample-versus-model comparison." },
    { kind: "practice", title: "Gymnasium: Solving Blackjack", url: "https://gymnasium.farama.org/tutorials/training_agents/blackjack_tutorial/", detail: "A free tabular episodic environment for experimenting with sampled returns and contrasting episode-end Monte Carlo updates with incremental methods." },
  ],
  keyTerms: [
    { term: "Behavior policy b", definition: "The policy that generates sampled experience." },
    { term: "Target policy π", definition: "The policy whose value is estimated or whose action choices are being improved." },
    { term: "Coverage", definition: "Every action with positive target probability also has positive behavior probability in the corresponding state." },
    { term: "Importance ratio", definition: "A target-to-behavior probability ratio used to reweight an observed action or trajectory." },
    { term: "Weighted importance sampling", definition: "A normalized ratio-of-weighted-returns estimator that often improves stability but can be finite-sample biased." },
    { term: "Flat partial return", definition: "An undiscounted sum of rewards ending at a selected horizon." },
    { term: "Per-decision importance sampling", definition: "A return estimator that applies the cumulative action ratio only through each reward's causally relevant decision." },
    { term: "Bootstrapping", definition: "Updating an estimate using another learned estimate, such as the next state's current value." },
    { term: "TD(0)", definition: "One-step temporal-difference prediction using one observed reward and one next-state estimate." },
    { term: "TD error δₜ", definition: "The one-step target minus the current value estimate." },
  ],
  quiz,
} };
