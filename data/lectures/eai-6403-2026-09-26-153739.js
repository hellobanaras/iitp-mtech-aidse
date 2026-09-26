// English-only publication unit for the verified 26 September 2026 Selective Topics in Generative AI recording.
const quizSeed = [
  ["What is the central idea of Constitutional AI?", ["Guide model behaviour with explicit principles and feedback", "Remove all model training", "Use only image data", "Replace evaluation with a title card"], 0],
  ["Which three goals are used in the lecture to describe a useful and safe assistant?", ["Helpful, honest, and harmless", "Fast, colourful, and silent", "Private, local, and free", "Large, deep, and visual"], 0],
  ["What does the constitution provide in a Constitutional AI system?", ["A set of guiding principles for critique and revision", "A database password", "A recording filename", "A replacement for the model weights"], 0],
  ["Which research work is introduced as a major source for Constitutional AI?", ["Anthropic's Constitutional AI: Harmlessness from AI Feedback", "The original Transformer paper only", "A database normalization paper", "A wireless propagation standard"], 0],
  ["What happens during critique-and-revision?", ["A response is assessed against principles and revised when needed", "The prompt is deleted before generation", "The video is converted into slides", "The model skips all safety checks"], 0],
  ["Why does the lecture use a harmful house-burning prompt example?", ["To show why a model should refuse dangerous assistance and explain the risk", "To teach a construction procedure", "To compare file formats", "To demonstrate image segmentation"], 0],
  ["What is the first broad phase in the two-phase Constitutional AI training flow?", ["Supervised learning with self-critique and revised responses", "Random deletion of answers", "Only human grading of videos", "Deployment without training"], 0],
  ["What does RLAIF stand for in the lecture's workflow?", ["Reinforcement learning from AI feedback", "Random language analysis in files", "Recursive learning after image filtering", "Recorded lecture assessment interface"], 0],
  ["What does a preference model do in the RLAIF workflow?", ["It scores or ranks candidate responses using feedback signals", "It stores the sign-in password", "It selects the browser tab", "It compresses the recording"], 0],
  ["How does RLAIF differ from classic RLHF in the lecture's comparison?", ["AI-generated constitutional feedback supplements or replaces direct human preference labels", "RLAIF removes reinforcement learning", "RLHF uses no feedback", "RLAIF only works for images"], 0],
  ["What is one reason to retain human oversight even with Constitutional AI?", ["Principles and feedback can still encode bias or miss important cases", "Humans cannot evaluate any output", "Human review always increases latency to zero", "The constitution makes audits unnecessary"], 0],
  ["Which trade-off is discussed between helpfulness and harmlessness?", ["Safety constraints should reduce harmful output without making the system useless", "More safety always guarantees perfect factuality", "Helpfulness and harmlessness are unrelated", "Harmlessness means refusing every request"], 0],
  ["Which item is part of the lecture's Constitutional AI workflow?", ["Generate candidate responses, critique them, revise them, and train from feedback", "Publish credentials in the note", "Skip evaluation after the first response", "Use only a static title card"], 0],
  ["Which ethical value asks whether people are treated consistently without unjustified discrimination?", ["Fairness", "Latency", "Compression", "Tokenization"], 0],
  ["Which ethical value is concerned with making decisions and limitations understandable?", ["Transparency", "Randomness", "Throughput", "Rendering"], 0],
  ["Why is accountability important in an AI system?", ["Someone must be able to trace decisions, evaluate failures, and take responsibility", "It removes the need for logs", "It guarantees the model is conscious", "It replaces privacy controls"], 0],
  ["Which pair of concerns is grouped under privacy and security?", ["Protecting sensitive data and limiting unauthorized access or disclosure", "Increasing slide colours and font size", "Changing a lecture date and title", "Removing all evaluation data"], 0],
  ["What did the instructor answer when asked whether Constitutional AI and responsible AI were different?", ["The instructor said they were the same in this lecture's framing", "The instructor said they were unrelated", "The instructor deferred the question to a browser", "The instructor said only hardware matters"], 0],
  ["Why are audits and real-world evaluations needed after deployment?", ["They reveal failures and distribution changes that training-time checks may miss", "They prevent every future update", "They replace all testing with opinions", "They make model behaviour impossible to inspect"], 0],
  ["What is the role of continuous monitoring?", ["Track behaviour and identify emerging harmful, biased, or unreliable outputs", "Hide all model decisions", "Remove the constitution", "Guarantee zero operational cost"], 0],
  ["What is one limitation of relying only on abstract principles?", ["Principles may be incomplete, ambiguous, or poorly aligned with a real context", "Principles always reveal every edge case", "Abstract principles eliminate data bias", "Principles make testing unnecessary"], 0],
  ["Which process can help keep a deployed Constitutional AI system current?", ["Scenario testing, audits, updates, and retraining when evidence requires it", "Disabling all feedback", "Deleting the evaluation set", "Avoiding any model revision"], 0],
  ["Which application area is mentioned as a place where content moderation needs careful guardrails?", ["Social media and other systems handling user-generated content", "A calculator with no input", "A static icon sheet", "A file-renaming script only"], 0],
  ["What is the main purpose of RLAIF-inspired feedback in this lecture?", ["Improve response behaviour against a declared set of principles", "Make responses longer regardless of quality", "Replace all safety policies with a single score", "Avoid measuring model outputs"], 0],
  ["What is the lecture's practical bottom line?", ["Combine useful generation with explicit values, evaluation, monitoring, and human accountability", "Choose the largest model and skip audits", "Treat a constitution as a secret credential", "Publish raw recordings instead of study notes"], 0],
];

const quiz = quizSeed.map(([question, options, answer]) => ({
  question,
  options,
  answer,
  explanation: `Option ${answer + 1} matches the lecture's explanation; the other choices are not supported by the recording.`,
  optionNotes: options.map((option, index) => index === answer ? `${option} is correct for this lecture concept.` : `${option} is not supported by the lecture's explanation.`)
}));

export const eai6403Lecture20260926153739 = { en: {
  title: "Constitutional AI: self-critique, AI feedback, and ethical guardrails",
  lede: "This lecture introduces Constitutional AI as a principle-guided approach to helpful, honest, and harmless model behaviour, covering critique-and-revision, reinforcement learning from AI feedback, the helpfulness–harmlessness trade-off, and the need for continuing human oversight.",
  instructionalInterval: "00:00:09–00:24:50 source time (verified teaching interval; no idle tail included)",
  reviewLevel: "View-only SharePoint recording with seven-point timeline sweep, 25 extracted frames, 22 slide candidates, source-time-restored English transcription, and final-frame verification",
  coverage: [
    { title: "Constitutional AI and its guiding values", body: "The lecture introduces Anthropic's Constitutional AI work and frames the constitution as a set of principles that guide helpful, honest, and harmless responses." },
    { title: "Critique-and-revision", body: "A model can inspect a draft response against the principles, explain the problem, and revise the answer instead of depending only on a direct human preference label." },
    { title: "RLAIF and the two-phase workflow", body: "The supervised phase teaches critique and revision; the reinforcement phase uses constitutional AI feedback and a preference model to improve the policy." },
    { title: "Trade-offs and limitations", body: "Constitutional feedback can reduce harmful behaviour while preserving utility, but abstract principles, human data, and feedback models can still carry bias and accountability gaps." },
    { title: "Operational ethical guardrails", body: "Fairness, transparency, accountability, privacy/security, safety, monitoring, audits, dynamic scenario tests, and updates keep the system connected to real-world risk." },
  ],
  takeaway: "Constitutional AI makes principles and self-critique explicit in the training loop, but responsible deployment still needs human accountability, clear evaluation, monitoring, and revision.",
  slideTrail: [
    { time: "00:00:09", title: "Lecture 26 – Constitutional AI", note: "The title card introduces Constitutional AI as the lecture topic." },
    { time: "00:01:00", title: "Constitutional AI", note: "The opening explains the constitution, Anthropic's work, and the helpful, honest, and harmless goals." },
    { time: "00:04:40", title: "Critique and revision example", note: "The harmful house-burning prompt illustrates why a model should refuse dangerous assistance and explain the risk." },
    { time: "00:11:00", title: "Two phases of Constitutional AI", note: "The lecture distinguishes supervised self-critique/revision from reinforcement learning using AI feedback." },
    { time: "00:12:00", title: "Constitutional AI workflow", note: "Candidate responses, critiques, revisions, preference modelling, and reinforcement learning are connected into one flow." },
    { time: "00:18:40", title: "RLHF, RLAIF, and oversight", note: "The workflow and trade-offs are related to human feedback, AI feedback, utility, safety, and continuing review." },
    { time: "00:22:24", title: "Ethical Values Embedded in Constitutional AI", note: "Fairness, transparency, accountability, privacy/security, and safety are presented as operational values." },
    { time: "00:24:17", title: "Applications and closing", note: "The closing reinforces ongoing monitoring, audits, updates, and the balance between innovation and ethical AI." },
  ],
  summary: [
    { title: "1. Principles turn harmlessness into a training target", sourceRefs: ["00:00:09–00:04:40", "Lecture 26 – Constitutional AI", "Constitutional AI"], paragraphs: ["The lecture presents Constitutional AI as an approach in which a written set of principles, or constitution, guides model behaviour. The immediate goals are familiar but important: an assistant should be helpful, honest, and harmless rather than merely fluent.", "The constitution is not a password or a substitute for evaluation. It is a visible policy layer that gives the model and its evaluators a reference point for judging a response, explaining a problem, and deciding how to revise it."] },
    { title: "2. Critique-and-revision addresses harmful drafts", sourceRefs: ["00:04:40–00:10:30", "Critique and revision example"], paragraphs: ["The harmful house-burning example makes the safety objective concrete. A capable assistant should not turn a dangerous request into a set of actionable instructions; it should identify the danger, refuse the harmful part, and redirect toward a safe explanation.", "In critique-and-revision, the model first considers a draft, checks it against the principles, articulates a critique, and produces a revised response. This creates training evidence about why a response fails, not just a binary preference about which answer looks better."] },
    { title: "3. RLAIF extends the workflow beyond supervised revision", sourceRefs: ["00:11:00–00:18:40", "Two phases of Constitutional AI", "Constitutional AI workflow"], paragraphs: ["The first phase uses supervised learning to teach the model how to critique and revise. The second phase uses constitutional feedback to compare candidate responses, train a preference model, and improve the policy with reinforcement learning from AI feedback.", "The lecture contrasts this with RLHF while keeping the same systems question in view: what feedback signal is being optimized, which principles shape it, and how do we know that the resulting behaviour remains both useful and safe?"] },
    { title: "4. Safety gains do not remove accountability", sourceRefs: ["00:18:40–00:22:24", "RLHF, RLAIF, and oversight"], paragraphs: ["The lecture describes a helpfulness–harmlessness trade-off. Constitutional feedback can improve harmlessness while retaining utility, but this is not a guarantee of perfect factuality, fairness, or generalization. Abstract principles may be incomplete, ambiguous, or poorly suited to a new context.", "The instructor also notes the continued importance of human oversight. Bias can enter through human data, principle design, preference models, or deployment choices, so audits and real-world evaluations remain part of the control loop."] },
    { title: "5. Ethical values become operational controls", sourceRefs: ["00:20:02–00:24:50", "Ethical Values Embedded in Constitutional AI", "Applications and closing"], paragraphs: ["The closing connects Constitutional AI to fairness and non-discrimination, transparency, accountability, privacy and security, and safety. These values should be expressed through concrete evaluation cases, access controls, monitoring, incident review, and documented update decisions.", "A student asked how Constitutional AI differs from responsible AI at approximately 00:20:02. The instructor answered that they are the same in this lecture's framing. The useful takeaway is that a principle-guided training method still belongs inside a broader responsible-AI practice of evaluation, governance, and continued correction."] },
  ],
  insights: [
    { label: "Alignment", title: "A principle is useful only when it can be evaluated", body: "A constitution becomes operational when teams turn its values into critique prompts, test cases, preference signals, and review procedures." },
    { label: "Oversight", title: "AI feedback is not accountability", body: "RLAIF can scale feedback, but people still need to define principles, audit outcomes, investigate failures, and revise the system when evidence changes." },
    { label: "Deployment", title: "Harmlessness must preserve useful help", body: "A responsible assistant should reduce dangerous assistance without collapsing into blanket refusal; task-aware evaluation must measure both safety and utility." },
  ],
  courseSignals: {
    assignments: [], homework: [], labs: [], projects: [],
    references: [
      { time: "00:00:09", title: "Constitutional AI: Harmlessness from AI Feedback", detail: "The lecture introduced Anthropic's Constitutional AI research as the source for its critique, revision, and AI-feedback framing." },
      { time: "00:20:02", title: "Responsible AI", detail: "The instructor connected Constitutional AI and responsible AI in response to a student question." },
    ],
    studentQuestions: [{ time: "00:20:02", question: "How is Constitutional AI different from responsible AI? Is it the same thing?", response: "The instructor answered that it is the same thing in this lecture's framing." }]
  },
  resources: [
    { kind: "paper", title: "Constitutional AI: Harmlessness from AI Feedback", url: "https://arxiv.org/abs/2212.08073", detail: "Primary paper introduced by the lecture; it describes critique-and-revision and reinforcement learning from AI feedback." },
    { kind: "article", title: "Anthropic: Constitutional AI", url: "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback", detail: "Public research overview for revisiting the constitution and AI-feedback approach." },
    { kind: "paper", title: "Training language models to follow instructions with human feedback", url: "https://arxiv.org/abs/2203.02155", detail: "Primary RLHF paper useful for comparing human-feedback and AI-feedback pipelines." },
    { kind: "docs", title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework", detail: "Public governance reference for connecting fairness, transparency, accountability, privacy, and safety to operational risk management." },
  ],
  keyTerms: [
    { term: "Constitutional AI", definition: "A principle-guided approach that uses a written constitution, critique, revision, and AI feedback to shape model behaviour." },
    { term: "Constitution", definition: "The set of ethical, legal, or operational principles used to evaluate and guide responses." },
    { term: "Critique-and-revision", definition: "A process in which a model identifies a response problem against a principle and generates a safer or better revision." },
    { term: "RLAIF", definition: "Reinforcement learning from AI feedback, using feedback generated with a model-guided principle or constitution." },
    { term: "RLHF", definition: "Reinforcement learning from human feedback, used in the lecture as a comparison point for RLAIF." },
    { term: "Human oversight", definition: "Continuing human responsibility for principles, auditing, failure investigation, governance, and system updates." },
  ],
  quiz,
  capstone: {
    title: "PrincipleTrace: an auditable Constitutional AI evaluation lab",
    prompt: "Build an accessible local-first study tool that compares direct responses with a critique-and-revision workflow on synthetic, safe prompts. The tool should show which principle was applied, what the critique identified, how the revision changed the response, and how human review affects the final decision.",
    deliverables: [
      "A privacy-safe prompt set covering helpfulness, honesty, harmlessness, fairness, privacy, and transparency cases",
      "A side-by-side direct-response and critique/revision view with principle, critique, revision, and reviewer fields",
      "An evaluation report measuring safety, utility, refusal quality, false positives, bias-sensitive slices, latency, and review effort",
      "An accessible governance card describing principle ownership, audit cadence, escalation, monitoring, and update decisions"
    ],
    successCriteria: [
      "shows evidence for every principle-based decision without retaining private data",
      "distinguishes a model-generated critique from an accountable human review",
      "measures both harmful-output reduction and useful-help preservation",
      "reports limitations, missed cases, and changes made after evaluation"
    ]
  }
} };
