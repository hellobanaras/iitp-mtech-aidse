const quizSeed = [
  ["Which Transformer family uses only the encoder in the lecture's comparison?", ["BERT", "GPT", "BART", "A decoder-only model"], 0],
  ["Which family uses only the decoder?", ["GPT", "BERT", "BART", "An encoder-only classifier"], 0],
  ["What does BERT stand for?", ["Bidirectional Encoder Representations from Transformers", "Binary Encoder Retrieval Transformer", "Bidirectional Embedding Regression Tool", "Basic Encoding Representation Table"], 0],
  ["What is the key idea of bidirectional context in BERT?", ["A token can use information from both left and right context", "A token can only see the previous token", "The model ignores surrounding words", "The model translates every word"], 0],
  ["How many encoder layers does the lecture associate with BERT-base?", ["12", "6", "2", "24"], 0],
  ["What is the usual purpose of masked language modelling?", ["Predict tokens hidden from the input", "Predict the recording filename", "Classify images only", "Remove all punctuation"], 0],
  ["What masking proportion is presented as the BERT training recommendation?", ["About 15%", "About 1%", "About 50%", "100%"], 0],
  ["Why can excessive masking be harmful?", ["The model receives too little context", "It creates more context than the model can use", "It removes the need for training", "It turns an encoder into a decoder"], 0],
  ["What is the target of next sentence prediction?", ["Whether one sentence logically follows another", "Whether a token is an image patch", "Whether a word is spelled in Hindi", "Whether a model has 12 layers"], 0],
  ["What kind of task is next sentence prediction?", ["Binary classification", "Span generation", "Object detection", "Speech synthesis"], 0],
  ["Which token starts the BERT input format shown in the lecture?", ["[CLS]", "[MASK]", "[PAD]", "[UNK]"], 0],
  ["What separates two sentences in the shown BERT input?", ["[SEP]", "[CLS]", "[MASK]", "[EOS] only"], 0],
  ["Which three components form the BERT input embeddings?", ["Token, segment, and position embeddings", "Pixel, audio, and video embeddings", "Query, database, and URL embeddings", "Class, reward, and policy embeddings"], 0],
  ["What information do segment embeddings identify?", ["Which sentence segment a token belongs to", "The token's screen colour", "The model's number of parameters", "The speaker's microphone"], 0],
  ["What do position embeddings help BERT learn?", ["Word order and token positions", "The next SharePoint folder", "The sentiment label without input", "The number of participants"], 0],
  ["What sequence length is used as the positional-embedding example?", ["512", "12", "110", "2018"], 0],
  ["Which representation is commonly used for BERT single-sentence classification?", ["The [CLS] representation", "The final [SEP] token only", "The first character pixel", "The audio waveform"], 0],
  ["What is sentence-pair classification used to decide in the example?", ["Whether two sentences are equivalent or related", "Whether a sentence contains an image", "Whether a token is masked", "Whether the recording is idle"], 0],
  ["What does question answering use BERT to predict in the lecture's span-extraction example?", ["Start and end token indices", "A new vocabulary", "A participant count", "A decoder layer count"], 0],
  ["What does NER mean?", ["Named Entity Recognition", "Next Encoder Retrieval", "Neural Embedding Ranking", "Negative Error Regression"], 0],
  ["What does POS mean in the lecture?", ["Part of Speech", "Position Output Sequence", "Probability of Sampling", "Parameter Optimisation Stage"], 0],
  ["What is token tagging intended to attach to each token?", ["A label such as an entity or part-of-speech tag", "A new video file", "A sentence-pair probability only", "A hidden password"], 0],
  ["Which task-specific head is associated with sentence-level classification?", ["A classification head", "A span-prediction head", "A token-level classifier only", "A convolutional decoder"], 0],
  ["Which head is associated with extractive question answering?", ["A span-prediction head", "A sentiment-only head", "A tokeniser head", "A participant head"], 0],
  ["What is the lecture's main fine-tuning lesson?", ["A shared pretrained BERT backbone can receive task-specific heads for different downstream tasks", "Every task requires training a completely unrelated model", "BERT can only perform masked language modelling", "Fine-tuning removes all input embeddings"], 0]
];
const quiz = quizSeed.map(([question, options, answer]) => ({
  question,
  options,
  answer,
  explanation: `${options[answer]} is the lecture-supported answer.`,
  optionNotes: options.map((option, index) => index === answer ? `${option} matches the lecture.` : `${option} is not supported for this question.`)
}));

export const eai6403Lecture20260906154745 = { en: {
  title: "BERT pretraining and downstream task heads",
  lede: "This lecture explains BERT as an encoder-only, bidirectional Transformer and follows its path from masked-language and next-sentence pretraining to task-specific heads for classification, question answering, and NER/POS tagging.",
  instructionalInterval: "00:00:30–00:21:14 source time (setup and participant-only idle tail excluded)",
  reviewLevel: "Authenticated view-only Microsoft Stream review with seven-point timeline sweep, bounded visible-tab capture at 2×, 21 extracted frames, and English transcription",
  coverage: [
    { title: "BERT among Transformer families", body: "The lecture contrasts encoder-decoder models such as BART with decoder-only GPT and encoder-only BERT, then introduces BERT's bidirectional context." },
    { title: "BERT-base and pretraining objectives", body: "BERT is described through its encoder depth and parameters, followed by masked language modelling and next sentence prediction as complementary pretraining objectives." },
    { title: "Token, segment, and position embeddings", body: "A BERT input begins with [CLS], uses [SEP] between sentence segments, and combines token, segment, and position embeddings to represent the sequence." },
    { title: "Downstream task families", body: "The same pretrained encoder can be fine-tuned for single-sentence classification, sentence-pair classification, extractive question answering, and token tagging." },
    { title: "Task-specific heads", body: "Classification, span-prediction, and token-level heads turn BERT representations into outputs suited to the downstream task." }
  ],
  takeaway: "BERT's reusable encoder representations become useful across NLP tasks when the input format and task-specific output head are chosen together.",
  slideTrail: [
    { time: "00:00:30", title: "Pre-trained transformer models", note: "The lecture distinguishes encoder-decoder, decoder-only, and encoder-only Transformer families." },
    { time: "00:02:17", title: "BERT and bidirectional context", note: "BERT is introduced as Google's bidirectional encoder representation model, with context available from both directions." },
    { time: "00:05:08", title: "Next sentence prediction (NPS)", note: "The slide frames sentence-pair relationship learning as a binary classification objective." },
    { time: "00:09:53", title: "BERT input embeddings", note: "Token, segment, and position embeddings are added for the [CLS]-sentence-[SEP] input format." },
    { time: "00:16:38", title: "Next classification (single sentence)", note: "The [CLS] representation feeds a sentence-level sentiment or text-classification head." },
    { time: "00:19:53", title: "Token tagging (NER / POS)", note: "The Rajiv Misra and IIT Patna example shows entity and part-of-speech labels at token level." },
    { time: "00:21:02", title: "Summary", note: "The summary slide maps sentence classification, QA, and NER/POS to their task-specific heads." }
  ],
  summary: [
    { title: "1. BERT is the encoder-only point in the Transformer family", sourceRefs: ["00:00:30–00:02:17", "Pre-trained transformer models"], paragraphs: ["The opening comparison separates three common information flows. An encoder-decoder model handles input-to-output transformations, a decoder-only model such as GPT generates causally, and an encoder-only model such as BERT builds contextual representations for the input sequence.", "BERT's bidirectional context means that the representation of a token can incorporate information from both sides of that token. The point is contextual encoding, not unrestricted left-to-right generation."] },
    { title: "2. Pretraining uses complementary objectives", sourceRefs: ["00:02:17–00:07:00", "Next sentence prediction (NPS)"], paragraphs: ["The lecture presents masked language modelling as a token-level objective: hide a portion of input tokens and train the model to predict them from the remaining context. The approximately 15% masking example balances learning signal against the need to retain enough visible context.", "Next sentence prediction adds a sentence-level relationship objective. Given two sentences and a binary label, the model learns whether the second sentence logically follows the first. Together, the objectives support token and sentence-level understanding before task-specific fine-tuning."] },
    { title: "3. BERT input embeddings preserve several kinds of information", sourceRefs: ["00:09:53–00:12:30", "BERT input embeddings"], paragraphs: ["The input example starts with [CLS], places one sentence before [SEP], adds a second sentence, and ends with another [SEP]. The model combines token embeddings with segment embeddings that distinguish the sentence parts and position embeddings that represent order.", "The position example is important because a bag of token identities would not by itself preserve sequence order. The lecture describes learning a vector representation for each position, with a sequence-length example of 512."] },
    { title: "4. One encoder supports multiple downstream tasks", sourceRefs: ["00:12:30–00:20:20", "Next classification (single sentence)", "Token tagging (NER / POS)"], paragraphs: ["For single-sentence classification, the [CLS] representation can feed a label such as positive or negative sentiment. Sentence-pair classification uses the two-segment input to predict whether the sentences are equivalent or otherwise related.", "For extractive question answering, the input includes a question and context and the model predicts the start and end token positions of the answer span. Token tagging instead assigns labels to individual tokens, including named-entity and part-of-speech tags."] },
    { title: "5. Fine-tuning attaches a head that matches the output", sourceRefs: ["00:21:02–00:21:14", "Summary"], paragraphs: ["The closing summary makes the architecture-to-task mapping explicit. A classification head handles sentence-level labels, a span-prediction head handles question-answering ranges, and a token-level classifier handles NER/POS tagging.", "The reusable backbone does not make all tasks identical. The input separators, the representation selected for prediction, and the output head must agree with the supervision signal and the granularity of the desired answer."] }
  ],
  insights: [
    { label: "Representation", title: "Context is structured, not just concatenated", body: "Token identity, sentence segment, and position are separate signals that are combined before the encoder reasons over the sequence." },
    { label: "Transfer", title: "Pretraining and fine-tuning divide responsibilities", body: "Pretraining builds general contextual representations; a downstream head translates those representations into a task-specific output." },
    { label: "Granularity", title: "Choose the prediction unit deliberately", body: "Sentence labels, answer spans, and token tags require different prediction units even when they share the same BERT backbone." }
  ],
  courseSignals: {
    assignments: [],
    homework: [],
    labs: [],
    projects: [],
    references: [{ time: "00:02:17", title: "BERT paper and Transformer paper", detail: "The instructor referred to Google's 2018 BERT publication and compared it with the 2017 Transformer paper; no separate required reading was assigned." }],
    studentQuestions: [{ time: "00:12:10", question: "Could we pull a word?", response: "The instructor continued by explaining the embedding and positional representation example; no separate question-led derivation was assigned." }]
  },
  resources: [
    { kind: "paper", title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", url: "https://arxiv.org/abs/1810.04805", detail: "The primary BERT paper for masked language modelling, next sentence prediction, and downstream fine-tuning." },
    { kind: "paper", title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762", detail: "The primary Transformer paper used in the lecture's comparison with BERT." },
    { kind: "docs", title: "Hugging Face BERT documentation", url: "https://huggingface.co/docs/transformers/model_doc/bert", detail: "Public implementation documentation for BERT inputs, model outputs, and task-specific usage." }
  ],
  keyTerms: [
    { term: "Encoder-only Transformer", definition: "A Transformer that builds contextual representations of an input sequence without the decoder-generation pathway." },
    { term: "Masked language modelling", definition: "A pretraining objective that hides selected input tokens and asks the model to predict them." },
    { term: "Next sentence prediction", definition: "A binary sentence-pair objective that predicts whether one sentence follows another." },
    { term: "[CLS] token", definition: "The special leading token whose contextual representation is commonly used for sentence-level classification." },
    { term: "Task-specific head", definition: "A small prediction module attached to the shared encoder for a downstream task." }
  ],
  quiz,
  capstone: { title: "BERT TaskHead Lab", prompt: "Build an accessible local-first study tool that feeds synthetic sentence, sentence-pair, question-context, and token-tagging examples through a transparent BERT-style representation map. The tool should show the special tokens, embedding components, prediction unit, and task-specific head without retaining private learner data.", deliverables: ["input visualiser for [CLS], [SEP], token, segment, and position embeddings", "four synthetic downstream-task cards for classification, sentence pairs, QA spans, and NER/POS tagging", "comparison report explaining why each task needs a different prediction unit and head", "accessible keyboard and screen-reader friendly visual study aid with links to the BERT and Transformer papers"], successCriteria: ["keeps the input format and prediction head aligned with task granularity", "distinguishes pretrained representation learning from downstream fine-tuning", "uses only synthetic or permitted public examples", "makes every architecture decision inspectable and explains limitations without claiming production accuracy"] }
} };
