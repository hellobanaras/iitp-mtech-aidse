const quizSeed = [
  ["What does a flat partial return contain?", ["The undiscounted rewards from the current time through a chosen finite horizon", "Only the final terminal reward", "A value estimate bootstrapped from the next state", "The importance ratio without rewards"], 0],
  ["In the lecture's termination interpretation, what does 1 − γ represent?", ["The probability mass assigned to terminating after the next reward", "The probability of selecting the greedy action", "The learning rate for updating Q", "The chance that a state is visited again"], 0],
  ["What does γ represent in the geometric weighting of partial returns?", ["The probability mass of continuing to the next reward", "The probability that the current action is optimal", "The reward received at termination", "The number of actions in the state"], 0],
  ["Why are shorter flat partial returns weighted more heavily when γ is below one?", ["The termination weighting assigns more mass to earlier stopping horizons", "They always have larger rewards", "They use more importance ratios", "They are sampled from the target policy"], 0],
  ["Which interpretation of 1 − γ did the discussion warn against?", ["A literal speed at which the agent approaches a goal state", "A termination-mass interpretation for discounted returns", "A factor that determines the partial-return weights", "A complement of the continuation factor γ"], 0],
  ["Why does the final full-episode term in the finite-horizon decomposition not receive another 1 − γ factor?", ["It represents the remaining probability mass that survives to the episode's actual termination", "The terminal reward is always zero", "The importance ratio cancels the discount factor", "The last action is necessarily greedy"], 0],
  ["What does discount-aware importance sampling correct?", ["The mismatch between behavior and target action probabilities for the partial returns being estimated", "The reward function's units", "The environment's transition model", "The number of state visits"], 0],
  ["Why are importance ratios applied to truncated partial returns?", ["Each horizon-specific return is sampled under behavior actions but used to estimate a target-policy quantity", "The rewards are not observed until the episode ends", "The discount factor is unknown", "The ratio converts rewards into probabilities"], 0],
  ["For a partial return ending after h steps, which action ratios are relevant?", ["The target-to-behavior ratios for the actions along that h-step segment", "Ratios for actions after the episode terminates", "Only the ratio for the terminal action", "No ratios if γ is less than one"], 0],
  ["What is the purpose of the ordinary discount-aware estimate discussed in class?", ["Average corrected partial-return contributions over visits to the state", "Choose a new action by maximizing immediate reward", "Estimate transition probabilities from a model", "Normalize every return to sum to one"], 0],
  ["Why does the ordinary estimate divide by the number of state visits?", ["It forms a sample average over the visits contributing evidence for that state", "It removes the need for a target policy", "It makes all importance ratios equal", "It estimates the episode length"], 0],
  ["What did the lecturer say about the discount-aware derivation's role in this segment?", ["It develops the estimator's mathematical interpretation; an example was deferred to a later lecture", "It proves that γ should always be 0.9", "It replaces Monte Carlo returns with a known model", "It guarantees zero variance"], 0],
  ["In an off-policy correction, what does a target-to-behavior ratio compare?", ["How likely the observed action is under the target policy versus the behavior policy", "The target reward versus the behavior reward", "The number of states versus actions", "The discounted return versus the undiscounted return"], 0],
  ["What is the main intuition behind importance sampling here?", ["Reweight samples from one action distribution to estimate a quantity under another", "Discard every trajectory that contains exploration", "Change the environment so both policies agree", "Replace the return with its maximum reward"], 0],
  ["What is a risk of multiplying importance ratios across a trajectory?", ["The product may become very large and make estimates unstable", "The product always becomes zero", "The reward sequence becomes deterministic", "The target policy loses its action support"], 0],
  ["In the epsilon-soft policy-improvement discussion, what is the role of the greedy action?", ["It receives the exploitation mass because it maximizes the current action-value estimate", "It removes the need for exploration", "It is selected uniformly with every other action", "It guarantees the environment is deterministic"], 0],
  ["In an epsilon-soft distribution with |A(s)| actions, how is exploration mass allocated?", ["Each action receives ε/|A(s)| exploration probability", "Each action receives (1 − ε)/|A(s)| only", "Only non-greedy actions receive the full ε", "The exploration probability is γ/|A(s)|"], 0],
  ["Why is the greedy action's probability typically (1 − ε) + ε/|A(s)|?", ["It receives both the exploitation mass and its share of uniform exploration", "It is counted twice in the value function", "It has a larger reward by definition", "It is the only action in the state"], 0],
  ["Why does the epsilon-soft distribution still sum to one?", ["The greedy exploitation mass 1 − ε plus all exploration shares totaling ε equals one", "The action values sum to one", "The rewards are normalized", "The state-transition probabilities cancel"], 0],
  ["What inequality supports the policy-improvement step?", ["The maximum action value is at least the probability-weighted average over available actions", "Every action value is at least the maximum action value", "The mean reward is always greater than zero", "The exploration term is always zero"], 0],
  ["Why must the summation over actions remain visible in the derivation?", ["It shows that the uniform exploration shares add to ε and preserves the probability weights", "It changes a maximum into a reward", "It counts only terminal states", "It proves that each action is optimal"], 0],
  ["What does the policy-improvement result claim under its stated assumptions?", ["The improved epsilon-soft policy is no worse in value than the previous policy", "Every sampled episode has a higher return", "The next policy is exactly optimal", "The environment requires no exploration"], 0],
  ["Does the inequality prove that every finite-sample return increases?", ["No; it is a policy-value comparison, not a guarantee about each sampled episode", "Yes, every trajectory must improve", "Yes, provided γ is 0.9", "No, because action values are never used"], 0],
  ["What clarification did the instructor give when asked whether the third-line sum retained a maximum over actions?", ["The maximum is used for the greedy contribution; the epsilon component remains an expectation over actions", "The maximum is applied to every reward separately", "The summation is discarded", "The maximum is replaced by the number of actions"], 0],
  ["What was the closing plan for the discount-aware estimator?", ["Work through a concrete example in a later lecture", "Submit a coded assignment that evening", "Change the course's discount factor", "Deploy a policy to a live system"], 0],
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

export const eai6401Lecture20261005191710 = { en: {
  title: "Discount-aware importance sampling and epsilon-soft policy improvement",
  lede: "The class interprets discounting as a distribution over partial-return horizons, explains how importance ratios correct those horizon-specific samples, and revisits the epsilon-soft policy-improvement inequality through student questions.",
  instructionalInterval: "00:00–00:20:00 source time; 2× visible-tab capture with audio, stopped at the reviewed teaching boundary",
  reviewLevel: "Seven-point full-timeline Stream triage; the 3h18m52s source contains sustained instruction in the opening segment and a long participant-only/black idle tail. Captured 00:00–00:20:00 at 2×; transcript and 20 sampled visual frames reviewed.",
  sourceUrl: "https://cciitpatna-my.sharepoint.com/personal/course72_hybrid_iitp_ac_in/_layouts/15/stream.aspx?id=%2Fpersonal%2Fcourse72%5Fhybrid%5Fiitp%5Fac%5Fin%2FDocuments%2FRecordings%2FReinforcement%20Learning%2D20261005%5F191710%2DMeeting%20Recording%2Emp4",
  sourceRecordedAt: "2026-10-05T19:17:10+05:30",
  sourceFilename: "Reinforcement Learning-20261005_191710-Meeting Recording.mp4",
  coverage: [
    { title: "Discounting as partial termination", body: "The discount factor γ can be read as continuation mass; 1 − γ is the mass assigned to stopping after the next reward. This yields a geometric mixture of flat, undiscounted partial returns, plus the residual full-episode term." },
    { title: "Correcting partial returns", body: "Each horizon-specific contribution is weighted by the target-to-behavior action-probability ratios for the segment that generated it. The ordinary estimate averages corrected contributions over state visits." },
    { title: "Epsilon-soft policy improvement", body: "The greedy action receives exploitation mass 1 − ε and its share of uniform exploration; the remaining actions retain exploration probability. A maximum action value bounds the corresponding probability-weighted average." },
    { title: "Questions expose proof details", body: "Students challenge the interpretation of γ and the placement of the maximum and summation. The instructor separates the greedy term from the exploratory expectation and defers a worked estimator example to a later class." },
  ],
  takeaway: "Discounting can be understood as a geometric stopping distribution over flat partial returns, not as a literal speed toward a goal. Off-policy correction reweights each segment using its action-probability ratios. In the policy-improvement proof, keep the greedy maximum and the epsilon-weighted action sum distinct; the resulting inequality compares policy values, not every individual episode.",
  slideTrail: [
    { time: "00:00:30", title: "Decomposing the Return Using Partial Returns", note: "The opening slide introduces flat partial returns and expresses a discounted return as a weighted combination across horizons." },
    { time: "00:05:30", title: "Final Compact Representation", note: "The lecturer interprets horizon weights as termination/continuation mass and distinguishes the surviving terminal-tail term." },
    { time: "00:09:30", title: "Ordinary Discounting-Aware Importance Sampling", note: "The slide applies segment-specific importance ratios and averages corrected contributions over visits to a state." },
    { time: "00:11:30", title: "Example of Unnecessary Variance", note: "A transition toward the estimator example is visible; the instructor says the worked example will be taken up later." },
    { time: "00:12:30", title: "Off-policy Monte Carlo Control", note: "The discussion returns to the earlier epsilon-soft policy-improvement derivation." },
    { time: "00:13:30–00:19:30", title: "Proof", note: "The annotated proof slide supports a sustained question-and-answer discussion of the greedy maximum, exploration sum, and normalization by the number of actions." },
  ],
  summary: [
    { title: "1. A discounted return is a mixture over partial horizons", sourceRefs: ["00:00:20–00:05:10", "Decomposing the Return Using Partial Returns; Final Compact Representation"], paragraphs: ["A flat partial return adds rewards without discounting through a chosen horizon. The slide rewrites the ordinary discounted return as a geometric mixture of these horizon-specific sums. For a continuing process, the weight on stopping after h rewards is (1 − γ)γ^(h−1). In an episode that actually terminates, the probability mass that survives to the terminal tail is represented separately; it does not receive another (1 − γ) factor.", "This is an interpretation of discounting as partial termination, not a statement that γ measures how quickly an agent physically approaches a goal. The discussion surfaced that confusion directly: γ controls the weighting of future rewards and the distribution of effective horizons. The right value depends on the task's objective and time scale; it is not chosen merely to make a return larger."], formula: "G_t = (1 − γ) Σ_{h=1}^{T−t−1} γ^(h−1) Ḡ_{t:t+h} + γ^(T−t−1) G_t;  Ḡ_{t:t+h} = Σ_{k=0}^{h−1} R_{t+k+1}." },
    { title: "2. Discount-aware importance sampling corrects each horizon", sourceRefs: ["00:06:35–00:10:15", "Ordinary Discounting-Aware Importance Sampling"], paragraphs: ["When a flat partial return is sampled under a behavior policy but the desired value is for a target policy, correct that contribution with the product of target-to-behavior action probabilities along the segment. Shorter horizons use the ratios only through their own endpoint; the terminal-tail contribution uses the ratios for the full surviving trajectory. This is why the estimator is discount-aware: the correction follows the horizon decomposition rather than attaching one undifferentiated full-trajectory weight to every term.", "The ordinary estimate combines the corrected contributions and averages across visits to the state. The class previewed an example but did not complete a worked numerical calculation in this segment. Importance sampling changes the weighting of observed evidence; it does not create evidence for actions that the behavior policy never takes."], formula: "ρ_{t:t+h−1} = ∏_{k=t}^{t+h−1} π(A_k|S_k)/b(A_k|S_k); weight each horizon's return with its corresponding segment ratio." },
    { title: "3. The epsilon-soft improvement proof keeps two pieces separate", sourceRefs: ["00:12:25–00:17:00", "Off-policy Monte Carlo Control; Proof"], paragraphs: ["The second half resumes the policy-improvement derivation. At each state, the greedy action receives probability (1 − ε) plus its uniform exploration share ε/|A(s)|. Every other action retains ε/|A(s)|. Thus the exploratory shares sum to ε, and the full distribution sums to one.", "For the improvement comparison, the greedy contribution uses the maximum action value; the exploration contribution remains a weighted sum over actions. A maximum is at least as large as a probability-weighted average, which supplies the inequality. Do not silently move the maximum inside or outside a summation: the student questions show that this is the key algebraic distinction. Under the theorem's conditions, the improved epsilon-soft policy is no worse in value; it does not promise a higher return on every sampled path."], formula: "π′(a|s) = (1 − ε)·1[a = a*] + ε/|A(s)|, where a* ∈ argmax_a Qπ(s,a);  Σ_a π′(a|s) = 1." },
    { title: "4. Student questions and the next step", sourceRefs: ["00:00:13–00:05:05", "00:13:20–00:19:58", "Proof"], paragraphs: ["Students asked what partial returns add, whether 1 − γ means approaching a target, how the proof's third line can be bounded after removing a maximum from a sum, and why the action-count denominator cancels. The instructor emphasized that γ is a discount/continuation parameter, the epsilon term is still summed over actions, and the sum of ε/|A(s)| across |A(s)| actions is ε. One algebraic question remained unresolved at the end and was deferred with the rest of the worked example to a later lecture."], formula: "Σ_{a∈A(s)} ε/|A(s)| = ε;  (1 − ε) + ε = 1." },
  ],
  insights: [
    { label: "Interpretation", title: "γ is a horizon weighting, not a goal-progress speed", body: "The geometric continuation view makes the discount factor intuitive while keeping it separate from reward size or physical progress toward a target." },
    { label: "Estimator", title: "Match the ratio to the truncated horizon", body: "A partial return and its correction must cover the same action segment; using an unrelated full-trajectory ratio obscures the discount-aware decomposition." },
    { label: "Proof", title: "A max is not an expectation", body: "The inequality depends on comparing a greedy maximum with an action-weighted average while retaining the epsilon exploration sum." },
  ],
  courseSignals: {
    assignments: [],
    homework: [],
    labs: [],
    projects: [],
    references: [{ time: "00:20:20", title: "No external reference named", detail: "The lecturer refers to a later worked example but does not assign a reading or name an external source." }],
    studentQuestions: [
      { time: "00:00:13", question: "What is the importance of a partial return?", response: "It expresses the rewards through a chosen horizon, letting the discounted return be understood as a weighted combination of horizon-specific sums." },
      { time: "00:01:04", question: "Does 1 − γ mean the rate at which the agent gets close to a target?", response: "The instructor reframed the factor as the probability/weight associated with terminating at a horizon; γ is the continuation/discount factor. It is not a literal target-approach speed." },
      { time: "00:03:35", question: "How does γ affect the return, and should it be treated as a value that directly scales the total return?", response: "The instructor said its use depends on the application and described the estimator's interpretation. The discussion did not establish a universal numeric choice; γ weights future rewards and effective horizon." },
      { time: "00:13:20", question: "Why is the second line at least the third if the latter appears to sum over actions?", response: "The instructor distinguished the greedy maximum contribution from the epsilon-weighted expectation over all actions; the maximum bounds the corresponding action average." },
      { time: "00:17:38", question: "Why can the sum over actions be simplified, and what happens to ε/|A(s)|?", response: "Summing the equal exploration share across |A(s)| available actions gives ε. Combined with the greedy mass 1 − ε, the probabilities total one." },
      { time: "00:19:42", question: "Can the remaining proof step be completed now?", response: "The instructor deferred the unresolved algebra and the concrete estimator example to the next class." },
    ],
  },
  resources: [
    { kind: "read", title: "Sutton & Barto, Reinforcement Learning: An Introduction, §5.8", url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf", detail: "Author textbook section on importance sampling for truncated returns. It gives the partial-termination interpretation of discounting and explains horizon-matched ratios." },
    { kind: "course", title: "Stanford CS234: Tabular RL policy evaluation", url: "https://web.stanford.edu/class/cs234/modules.html", detail: "Official course materials reference Sutton & Barto Monte Carlo sections 5.1 and 5.5, useful for connecting this derivation to policy evaluation and importance sampling." },
    { kind: "watch", title: "David Silver: Reinforcement Learning teaching materials", url: "https://davidstarsilver.wordpress.com/teaching/", detail: "The lecturer's official teaching page links a model-free control lecture for a visual refresher on Monte Carlo control and policy improvement." },
    { kind: "practice", title: "Stanford CME241: Monte Carlo lecture slides", url: "https://web.stanford.edu/class/cme241/lecture_slides/rich_sutton_slides/9-10-MC.pdf", detail: "Stanford-hosted slides explicitly cover discounting-aware importance sampling. Re-derive one flat partial return and annotate the ratio endpoint for each horizon." },
  ],
  keyTerms: [
    { term: "Flat partial return", definition: "The undiscounted sum of rewards from a state visit through a selected finite horizon." },
    { term: "Discount factor γ", definition: "A factor in [0,1] that geometrically weights future rewards; it can be interpreted as continuation mass in the partial-termination view." },
    { term: "Discount-aware importance sampling", definition: "An estimator that decomposes a discounted return into horizon-specific partial returns and applies a matching importance ratio to each segment." },
    { term: "Behavior policy b", definition: "The policy that generated the sampled actions and returns." },
    { term: "Target policy π", definition: "The policy whose value the estimator is intended to evaluate." },
    { term: "Epsilon-soft policy", definition: "A policy that preserves at least ε/|A(s)| probability for each available action while assigning the remaining mass to a greedy action." },
    { term: "Policy improvement", definition: "A value comparison showing that a policy constructed from current action values is no worse under the stated assumptions." },
  ],
  studyAid: {
    title: "From discount factor to policy improvement",
    ariaLabel: "Diagram linking a discounted return to partial horizons and importance correction, followed by the epsilon-soft greedy-versus-exploration inequality",
    steps: [
      { label: "Choose a horizon h", detail: "Form a flat partial return by summing the next h rewards without discounting." },
      { label: "Weight the horizon", detail: "Use (1 − γ)γ^(h−1) for partial termination; retain the separate terminal-tail mass." },
      { label: "Correct its actions", detail: "Multiply target-to-behavior action ratios only through that partial-return endpoint." },
      { label: "Average state visits", detail: "Combine the corrected contributions using the ordinary estimator's visit count." },
      { label: "Improve without removing exploration", detail: "Give the greedy action mass 1 − ε and distribute ε uniformly; compare the maximum with the exploratory action average." },
    ],
    caption: "The horizon decomposition determines the ratio endpoint; the epsilon-soft proof keeps greedy exploitation separate from uniform exploration.",
  },
  quiz,
} };
