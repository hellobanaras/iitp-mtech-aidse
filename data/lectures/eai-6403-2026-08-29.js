// English-only publication unit for the verified 29 August 2026 recording.
const quizSeed = [
  ["Which 2017 development does the lecture identify as the turning point for modern text generation?", ["The Transformer architecture", "A larger hard-drive", "A new database index", "A rule-based grammar"], 0, "The lecture attributes the turning point to Google's introduction of the Transformer in Attention Is All You Need."],
  ["What does GPT stand for?", ["Generative Pre-trained Transformer", "General Prediction Table", "Graph Processing Tokenizer", "Gradient Planning Tree"], 0, "GPT expands to Generative Pre-trained Transformer."],
  ["What is the basic unit that a Transformer processes in the lecture?", ["Tokens", "Only complete paragraphs", "Database rows", "GPU cores"], 0, "Transformers analyze chunks of data called tokens."],
  ["What makes autoregressive generation sequential?", ["Each generated token conditions the next prediction", "All tokens are generated independently", "The model ignores its context", "Only images can be generated"], 0, "The output is appended to context and used for the next-token prediction."],
  ["Which two components are shown as the main parts of the original Transformer?", ["Encoder and decoder", "Tokenizer and database", "GPU and CPU", "Prompt and browser"], 0, "The lecture presents the encoder and decoder as the two major architecture sections."],
  ["What is the role of an input embedding?", ["Represent an input token or item as a learned vector", "Delete unknown tokens", "Choose a meeting time", "Measure internet speed"], 0, "Embeddings encode the input into a numeric representation used by the network."],
  ["Why is positional information added to token representations?", ["To preserve order", "To remove the vocabulary", "To force every token to be identical", "To replace attention"], 0, "Attention needs position information to distinguish the same token at different locations."],
  ["What does a Transformer output before a final selection is made?", ["Scores or probabilities for candidate next tokens", "A finished database schema", "A camera recording", "A compiler binary"], 0, "The network produces logits/probabilities from which an application can select a token."],
  ["What is a generative model designed to do in this lecture?", ["Understand and generate data such as text or images", "Only sort rows", "Only classify fixed labels", "Only compress audio"], 0, "The lecture contrasts generation of multiple data types with narrower tasks."],
  ["Which paper is repeatedly referenced as the Transformer foundation?", ["Attention Is All You Need", "The Wealth of Nations", "ImageNet Classification", "The C Programming Language"], 0, "Vaswani and colleagues' 2017 paper is the cited foundation."],
  ["What is the purpose of the decoder's masked attention?", ["Prevent access to future positions", "Reveal the complete answer in advance", "Remove all previous context", "Convert pixels to audio"], 0, "Causal masking preserves the next-token prediction constraint."],
  ["Which statement best describes an LLM in the lecture?", ["A Transformer-based generative model that predicts token sequences", "A spreadsheet formula", "A static lookup table with no learned weights", "A network cable"], 0, "LLMs use learned Transformer representations to model and generate sequences."],
  ["Why did ChatGPT spread rapidly according to the cited comparison?", ["It reached a large user milestone unusually quickly", "It was the first web browser", "It required no model at all", "It only ran offline"], 0, "The lecture uses the rapid user-growth comparison to illustrate the impact of Transformer-based applications."],
  ["What is a token vocabulary?", ["The set of token units the model can score", "A list of classroom rooms", "A GPU temperature log", "A collection of passwords"], 0, "The model predicts among its learned vocabulary entries."],
  ["What does a model-selection framework begin with in this lecture?", ["Choosing the license and legal/privacy constraints", "Choosing a font", "Deleting evaluation data", "Ignoring deployment"], 0, "The first step is to pick the license while considering legal and data-privacy constraints."],
  ["When may an on-premise model be preferred?", ["When sensitive customer data should remain on-premise", "When no data exists", "When evaluation is forbidden", "When only a logo is needed"], 0, "The lecture connects sensitive data to on-premise or specially governed deployment."],
  ["When can a closed API be a sensible starting point?", ["For a small team that needs to move quickly", "Only after deleting the product", "Only for offline hardware", "Never for prototyping"], 0, "The lecture recommends a closed API for fast validation when appropriate."],
  ["What should a custom evaluation set contain?", ["Prompts representing real use cases, edge cases, and user mistakes", "Only one perfect example", "Only model marketing text", "No expected criteria"], 0, "A representative test set supports systematic comparison."],
  ["Why can semantic similarity be preferable to lexical overlap?", ["It evaluates meaning rather than only shared words", "It ignores meaning", "It measures screen size", "It disables human review"], 0, "The lecture notes that semantic comparison can recognize equivalent meaning."],
  ["What is human evaluation used for?", ["Scoring outputs against a clear rubric or gold standard", "Replacing every test with intuition", "Changing the model's vocabulary", "Measuring network bandwidth"], 0, "Human reviewers assess criteria such as accuracy, helpfulness, and format."],
  ["What does total cost of ownership include for open-weight models?", ["Infrastructure, GPU, engineering, and operational costs", "Only a prompt", "Only a logo", "No maintenance"], 0, "The lecture contrasts token fees with infrastructure and people costs."],
  ["Which workload is a reasoning model suited to in the lecture's examples?", ["Logic, mathematics, and score-heavy tasks", "Only image cropping", "Only file renaming", "Only keyboard shortcuts"], 0, "Reasoning models are positioned for logic and quantitative tasks."],
  ["Why should licensing and privacy be considered before novelty?", ["They can constrain which technical choices are legally and commercially usable", "They never affect deployment", "They determine screen brightness", "They replace evaluation"], 0, "The lecture's four-step framework puts legal, privacy, and commercial fit first."],
  ["What does staying agile mean in a rapidly changing model landscape?", ["Re-evaluate choices as models and requirements evolve", "Never measure a model again", "Always choose the largest model", "Freeze every dependency forever"], 0, "The conclusion advises revisiting decisions as the AI landscape changes."],
  ["Which output should be recorded for a defensible model comparison?", ["Evaluation results tied to the task, rubric, and cost assumptions", "Only the model's brand name", "Only a single anecdotal success", "No deployment assumptions"], 0, "A rigorous, documented evaluation supports a defensible selection."],
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question,
  options,
  answer,
  explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `${option} is correct: it matches the lecture's explanation.`
    : `${option} is not correct for this question: it does not match the lecture's definition or decision rule.`),
}));

export const eai6403Lecture20260829 = {
  en: {
    title: "Modern Generative AI: Transformers, LLMs, and model selection",
    lede: "This lecture traces modern Generative AI from the 2017 Transformer breakthrough through token prediction, Transformer architecture, ChatGPT-era applications, and a practical four-step framework for choosing and evaluating models.",
    instructionalInterval: "00:01:13–00:49:06",
    reviewLevel: "Visible-tab capture at 2×, source-time-restored transcript, 49 slide/frame samples, and idle-tail sweep verified",
    coverage: [
      { title: "The 2017 Transformer turning point", body: "Attention Is All You Need introduced the architecture that became a state-of-the-art foundation for modern NLP and later Generative AI systems." },
      { title: "Tokens, autoregression, and applications", body: "Transformers process token units and repeatedly predict the next token; the same generative idea extends to text, images, music, and other modalities." },
      { title: "Encoder–decoder architecture and LLM growth", body: "The lecture surveys embeddings, stacked attention/feed-forward blocks, output probabilities, and the rapid growth of Transformer-based LLM products." },
      { title: "A defensible model-selection process", body: "License/privacy, requirements, rigorous evaluation, and total cost of ownership form a practical selection framework." },
    ],
    takeaway: "Model selection should follow the use case, legal and privacy constraints, measured quality, deployment needs, and total cost—not model hype alone.",
    slideTrail: [
      { time: "00:01:13", title: "2017: Google revolutionized text generation", note: "The lecture introduces the Transformer and the Attention Is All You Need paper." },
      { time: "00:07:40", title: "Generative models and tokens", note: "Tokens, next-token prediction, autoregression, and text/image/music applications are defined." },
      { time: "00:13:10", title: "Transformer architecture", note: "Encoder, decoder, stacked self-attention/feed-forward blocks, and output probabilities are shown." },
      { time: "00:20:30", title: "ChatGPT and the LLM ecosystem", note: "ChatGPT growth and the wider family of Transformer-based models are compared." },
      { time: "00:39:20", title: "Four-step model-selection framework", note: "License, requirements, evaluation pipeline, and total cost of ownership are applied to examples." },
      { time: "00:48:57", title: "Conclusion and key takeaways", note: "Fit, evaluation, true cost, and agility are summarized before the idle tail." },
    ],
    summary: [
      { title: "1. The Transformer changed the practical path to Generative AI", sourceRefs: ["00:01:13–00:07:40", "2017: Google revolutionized text generation"], paragraphs: ["The lecture places modern AI after the 2017 publication of Attention Is All You Need. The Transformer became a broadly useful architecture for sequence modelling and helped move NLP from a difficult open problem toward powerful generative systems.", "OpenAI's GPT family applies the same Transformer idea, while later products from many organisations extend it to language and other modalities."] },
      { title: "2. Tokens and autoregression define the generation loop", sourceRefs: ["00:07:40–00:13:10", "Generative models and tokens"], paragraphs: ["A Transformer works on tokens rather than an assumed one-token-per-word representation. Given the visible sequence, it predicts a next-token distribution; the selected token is appended and the process repeats.", "This autoregressive loop explains why the same architecture can generate text, images, music, and other structured outputs when the input and output tokenization are designed for that modality."] },
      { title: "3. Encoder–decoder blocks turn context into probabilities", sourceRefs: ["00:13:10–00:20:30", "Transformer architecture"], paragraphs: ["The architecture shown has an encoder and decoder, each built from repeated attention and feed-forward blocks. Embeddings turn inputs into vectors; attention lets representations use context; the output layer produces logits or probabilities for a downstream prediction.", "The causal/decoder view matters for generation because a position must not use future tokens. The lecture treats this architecture as a reusable foundation rather than a single product."] },
      { title: "4. ChatGPT illustrates application impact, not a different basic principle", sourceRefs: ["00:20:30–00:31:00", "ChatGPT and the LLM ecosystem"], paragraphs: ["The ChatGPT adoption comparison illustrates how quickly a Transformer-based consumer application reached users. The surrounding ecosystem includes models from OpenAI, Google, Meta, Anthropic, DeepSeek, and other organisations.", "The important engineering lesson is to understand the architecture and the task before choosing a branded endpoint. Product popularity does not by itself establish fitness for a regulated, private, or specialised workload."] },
      { title: "5. Model selection is a four-step decision, not a leaderboard lookup", sourceRefs: ["00:39:20–00:48:57", "Four-step model-selection framework"], paragraphs: ["First identify license, legal, and privacy constraints. Sensitive data may require on-premise or specially governed deployment; a small team validating a product may start with a closed API. Second map the task, complexity, context, deployment mode, and customization needs.", "Third build a representative evaluation set with edge cases and mistakes, then combine semantic/lexical metrics, model judging where appropriate, and human review. Fourth calculate total cost of ownership, including token charges or GPU, engineering, maintenance, and operational overhead. The lecture closes by recommending agility as the model landscape changes."] },
    ],
    insights: [
      { label: "Architecture", title: "A capability substrate still needs governance", body: "The architecture is a capability substrate; a product decision still requires data governance, task-specific evaluation, and operational controls." },
      { label: "Reliability", title: "Generation does not guarantee factuality or safety", body: "‘Generative’ describes the model's ability to produce outputs, but it does not guarantee factuality, safety, or suitability for a business requirement." },
      { label: "Evaluation", title: "Small edge-case suites can beat generic benchmarks", body: "A small custom test set with edge cases can reveal a better fit than a generic benchmark score, especially when context, privacy, or cost constraints dominate." },
      { label: "Operations", title: "Total cost includes people and operations", body: "Cost comparisons should include people and operations; a low token price can still be expensive if integration, monitoring, or GPU management is substantial." },
    ],
    courseSignals: {
      assignments: [], homework: [], labs: [], projects: [],
      references: [{ time: "00:04:40", title: "Attention Is All You Need", detail: "The instructor recommends searching for and studying the 2017 Transformer paper; no deadline or graded deliverable was assigned." }],
      studentQuestions: [{ time: "00:49:00", question: "Students indicate they have questions as the model-selection conclusion ends.", response: "The recording reaches the closing transition before a substantive question-and-answer exchange is captured." }],
    },
    resources: [
      { kind: "read", title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762", detail: "Primary paper behind the 2017 Transformer discussion." },
      { kind: "read", title: "Hugging Face Transformers documentation", url: "https://huggingface.co/docs/transformers/index", detail: "Hands-on reference for loading and evaluating Transformer models." },
      { kind: "practice", title: "Hugging Face course: Transformer models", url: "https://huggingface.co/learn/nlp-course/chapter1/4", detail: "Guided practice connecting tokenization, model inference, and evaluation." },
      { kind: "read", title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework", detail: "A governance companion for the lecture's privacy, evaluation, and operational-fit discussion." },
    ],
    keyTerms: [
      { term: "Token", definition: "A vocabulary unit processed by a model; it may be a word, subword, or special symbol." },
      { term: "Transformer", definition: "A neural architecture built around attention and feed-forward processing for contextual representations." },
      { term: "LLM", definition: "A large language model that predicts and generates token sequences from context." },
      { term: "Autoregressive", definition: "A generation process in which prior outputs become context for the next prediction." },
      { term: "Total cost of ownership", definition: "The complete cost of operating a choice, including usage, infrastructure, engineering, maintenance, and operations." },
    ],
    quiz,
  },
};
