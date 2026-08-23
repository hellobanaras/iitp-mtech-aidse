// One publication unit: English and Hindi are reviewed and rendered together.
export const eai6403Lecture20260823 = {
  en: {
    title: "Transformer foundations: tokens, attention, and controlled generation",
    lede: "This opening Generative AI lecture follows a prompt through a GPT-2-style decoder-only transformer: tokenization, embeddings, repeated attention/MLP blocks, vocabulary logits, softmax, and decoding controls that trade predictability for diversity.",
    instructionalInterval: "00:30–53:35",
    reviewLevel: "Recording, source-time-restored transcript, and 32-candidate slide-frame review verified",
    coverage: [
      { title: "Why transformers matter", body: "Transformers are introduced as the neural architecture behind modern text-generative systems and as a reusable pattern across language, audio, vision, biology, and games." },
      { title: "Text becomes model state", body: "A tokenizer maps words or subwords to IDs; token embeddings supply learned meaning, while positional embeddings retain order." },
      { title: "Attention routes context", body: "Query, key, and value projections let each token weight relevant earlier tokens; multiple heads can learn different relationships in parallel." },
      { title: "Blocks refine representations", body: "Masked self-attention exchanges information across positions, the MLP refines each position, and residual connections, layer normalization, and dropout support optimization." },
      { title: "Logits become a next token", body: "The final representation is projected to one logit per vocabulary token, normalized into probabilities, and decoded autoregressively." },
      { title: "Generation is controllable", body: "Temperature reshapes the distribution, while top-k and top-p restrict the candidate set; a live demo shows how those controls alter continuations." }
    ],
    takeaway: "A transformer does not retrieve a prewritten future. It repeatedly converts the available context into a probability distribution, selects one next token, appends it, and runs the process again.",
    slideTrail: [
      { time: "01:00", title: "What is a Transformer?", note: "Neural-network architecture, the 2017 paper, broad applications, next-token prediction, and self-attention." },
      { time: "07:00", title: "Transformer Architecture", note: "Three-part view: embeddings, transformer blocks, and output probabilities." },
      { time: "13:00", title: "Embedding", note: "The prompt is tokenized, mapped to learned token vectors, combined with position information, and passed forward." },
      { time: "16:00", title: "Token and positional embeddings", note: "GPT-2 vocabulary and 768-dimensional lookup vectors are connected to the order of tokens in the prompt." },
      { time: "19:00", title: "Multi-Head Self-Attention", note: "The first computation step constructs query, key, and value matrices from the current token representations." },
      { time: "22:00", title: "Query, key, and value analogy", note: "A web-search analogy separates the information request, the matching descriptor, and the content returned." },
      { time: "26:00", title: "Multi-head splitting and masked self-attention", note: "GPT-2 small splits representations across 12 heads; causal masking prevents a position from consulting later tokens." },
      { time: "29:00", title: "Output probabilities and sampling", note: "Vocabulary logits are transformed to probabilities before a next token is selected." },
      { time: "31:00", title: "Temperature, top-k, and top-p", note: "Generation controls reshape or truncate the candidate distribution before sampling." },
      { time: "35:00", title: "Transformer Explainer live generation", note: "The prompt “Artificial intelligence is transforming the …” is extended one token at a time." },
      { time: "47:00", title: "Temperature revisited", note: "A student question prompts a visual comparison of sharper low-temperature and flatter high-temperature distributions." },
      { time: "51:00", title: "Layer normalization", note: "The final question connects feature normalization, training stability, convergence, and repeated transformer blocks." }
    ],
    summary: [
      {
        title: "1. The transformer is a probability machine for sequences",
        sourceRefs: ["00:30–07:30", "What is a Transformer?"],
        paragraphs: [
          "The instructor frames the transformer as a neural-network architecture that changed how modern AI systems process sequences. The lecture uses text generation as the main path, while noting applications beyond text. The foundational reference is the 2017 paper Attention Is All You Need.",
          "For a decoder-style language model, the operational question is: given the tokens already available, which vocabulary token should come next? Self-attention lets the current representation incorporate relationships across the usable context, including dependencies that may be far apart."
        ]
      },
      {
        title: "2. Embedding converts discrete text into ordered vectors",
        sourceRefs: ["07:30–18:00", "Embedding", "Tokenization"],
        paragraphs: [
          "A tokenizer first splits the prompt into tokens, which may be whole words or subwords. Each token ID indexes a learned vector. In the GPT-2 small example, the vocabulary has 50,257 entries and each token embedding has 768 components, so the lookup table alone contains roughly 38.6 million learned values.",
          "Token meaning is not enough because attention by itself does not know whether a word appeared first or fifth. A positional representation is added to the token embedding so the block receives both identity/semantics and order. The lecture's sample prompt also shows why token count need not equal word count: one word can split into multiple subword tokens."
        ],
        formula: "final embedding at position i = token embedding(token_i) + positional embedding(i)"
      },
      {
        title: "3. A transformer block alternates routing and refinement",
        sourceRefs: ["18:00–24:30", "Multi-Head Self-Attention", "Q/K/V matrices"],
        paragraphs: [
          "Within each block, attention routes contextual information between token positions. The feed-forward MLP then transforms each position independently. This division is useful: attention decides where relevant information comes from; the MLP refines what each position can represent.",
          "Query, key, and value vectors are learned linear projections of the same incoming token representations. The lecture's search analogy is helpful: a query expresses what is needed, keys describe candidates, and values contain the information that will be mixed. Similarity between queries and keys produces weights over values."
        ],
        formula: "Attention(Q,K,V) = softmax((QKᵀ / √dₖ) + causal mask) V"
      },
      {
        title: "4. Multiple heads and masking make decoder attention useful",
        sourceRefs: ["22:30–27:30", "Multi-head splitting", "Masked self-attention"],
        paragraphs: [
          "A single head provides one learned comparison space. Multiple heads let the model learn several patterns in parallel—for example, a local syntactic relation in one head and a broader semantic dependency in another. GPT-2 small uses 12 heads and 12 transformer blocks.",
          "During causal generation, position i must not see positions after i. The causal mask removes those future positions before softmax. This is different from saying the model has no context: it can attend to the prompt and previously generated tokens up to its context-window limit, but not to tokens that have not yet been generated."
        ]
      },
      {
        title: "5. The model outputs logits; decoding chooses behavior",
        sourceRefs: ["27:30–34:30", "Output probabilities", "Temperature and sampling"],
        paragraphs: [
          "After the final transformer block, the representation at the active position is projected to one logit for every vocabulary entry. Softmax converts those scores to a normalized distribution. Greedy decoding selects the maximum; sampling draws from a distribution after any filtering or rescaling.",
          "Temperature divides logits before softmax. A value below one sharpens differences and usually makes outputs more repeatable; a value above one flattens the distribution and gives lower-ranked alternatives more chance. Top-k keeps the k highest-scoring candidates. Top-p keeps the smallest ranked prefix whose cumulative probability reaches p. These controls interact and should be evaluated against the task, not treated as a universal creativity dial."
        ],
        formula: "p(token_j | context) = softmax(z_j / T), with T > 0"
      },
      {
        title: "6. Autoregressive generation is an iterative feedback loop",
        sourceRefs: ["34:30–40:30", "Transformer Explainer demo"],
        paragraphs: [
          "The demo starts from a prompt and generates one continuation token. That token is appended to the context, after which the model recomputes a distribution for the next position. Repeating this loop produces a sentence. The path can differ across runs when sampling is enabled, even though the model weights and prompt are unchanged.",
          "The business-facing lesson is operational: temperature, top-k, and top-p are product parameters. They affect consistency, diversity, factual risk, and reproducibility, so a deployed system should log its prompt, model/version, random seed where applicable, and decoding configuration."
        ]
      },
      {
        title: "7. Student questions clarify context, temperature, and normalization",
        sourceRefs: ["41:28–53:35", "Q&A"],
        paragraphs: [
          "The first question asks how next-token prediction relates to limited memory and unseen future tokens. The instructor emphasizes choosing from the learned vocabulary. A fuller technical statement is that the distribution depends on the currently visible context, bounded by the model's context window; the model does not inspect future tokens.",
          "The second question revisits temperature: lower values sharpen the distribution, while higher values flatten it and admit more alternatives. The final question concerns layer normalization. It normalizes features within each token representation using learned scale and shift, improving numerical stability and optimization; it does not provide labels or perform the supervised objective itself."
        ]
      }
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [
        { time: "01:53", title: "Attention Is All You Need", detail: "The instructor strongly recommended repeatedly reading and referring to the 2017 transformer paper. No separate reading deadline was assigned." }
      ],
      studentQuestions: [
        { time: "41:28", question: "If a model has limited memory and cannot see future tokens, how can it predict the next token?", response: "It scores candidates from its learned vocabulary using the available context. Technically, causal attention can use only prompt and previous-token positions within the context window, not future positions." },
        { time: "45:37", question: "How does temperature change randomness or uniqueness in the selected next token?", response: "Temperature rescales logits before softmax. Lower values sharpen probability differences; higher values flatten them and increase the chance of lower-ranked candidates." },
        { time: "50:26", question: "What is layer normalization in a transformer, and how is it used during training?", response: "It normalizes features of each token representation and applies learned scale/shift, supporting stable activations and faster optimization. The instructor connected it to repeated gradient-based training and convergence." }
      ]
    },
    keyTerms: [
      { term: "Token", definition: "A vocabulary unit processed by the model; it may be a word, subword, character-like piece, or special symbol." },
      { term: "Tokenizer", definition: "The deterministic procedure that maps text to token IDs and later decodes IDs back to text." },
      { term: "Embedding", definition: "A learned dense vector used to represent a token or its position." },
      { term: "Self-attention", definition: "A mechanism that mixes information across positions by comparing learned queries and keys and combining values." },
      { term: "Attention head", definition: "One independent set of Q/K/V projections and attention weights within multi-head attention." },
      { term: "Causal mask", definition: "A constraint that prevents a decoder position from attending to later positions." },
      { term: "MLP", definition: "The position-wise feed-forward network that refines each token representation after attention." },
      { term: "Residual connection", definition: "An identity shortcut that adds a sublayer's input to its output." },
      { term: "Layer normalization", definition: "Feature-wise normalization of a token representation followed by learned scale and shift." },
      { term: "Logit", definition: "An unnormalized score produced before softmax." },
      { term: "Temperature", definition: "A positive scalar that divides logits and changes the sharpness of the sampling distribution." },
      { term: "Top-k sampling", definition: "Sampling after retaining only the k highest-scoring token candidates." },
      { term: "Top-p sampling", definition: "Sampling from the smallest ranked candidate set whose cumulative probability reaches p." },
      { term: "Autoregressive generation", definition: "Generating one token, appending it to context, and repeating for the next position." }
    ],
    insights: [
      { label: "Architecture insight", title: "Attention routes; the MLP computes", body: "This mental split prevents a common confusion. Attention primarily gathers context from other positions, while the MLP performs a nonlinear transformation at each position. Both are required in a standard block." },
      { label: "Capacity insight", title: "A large share of GPT-2 small starts in the embedding table", body: "50,257 × 768 is about 38.6 million values—nearly one third of a 124M-parameter model. Vocabulary design and weight tying therefore have real capacity and deployment consequences." },
      { label: "Decoding insight", title: "Temperature and truncation solve different problems", body: "Temperature reshapes relative probabilities across candidates; top-k/top-p remove candidates. Combining them can be useful, but each changes calibration and diversity differently." },
      { label: "Correction", title: "Layer normalization is not dataset normalization", body: "It operates inside the network on a token's feature vector. It should not be conflated with feature scaling of the training dataset or with the supervised labels used for next-token learning." },
      { label: "Product insight", title: "Generation settings belong in observability logs", body: "A response cannot be reproduced from model name and prompt alone. Record the model revision, decoding strategy, temperature, top-k/top-p, seed, context truncation, and stopping criteria." },
      { label: "Safety insight", title: "More diversity is not automatically more creativity", body: "Flattening the distribution also gives implausible or unsafe tokens more probability. Tune generation against task-specific quality, factuality, latency, and safety metrics." }
    ],
    resources: [
      { type: "Paper", title: "Attention Is All You Need", creator: "Vaswani et al.", why: "The primary transformer paper recommended in the lecture; study scaled dot-product attention, multi-head attention, positional encoding, residuals, and normalization.", url: "https://arxiv.org/abs/1706.03762" },
      { type: "Interactive", title: "Transformer Explainer", creator: "Polo Club of Data Science, Georgia Tech", why: "The interactive GPT-2-style visualization used in the recording; step through embeddings, attention, MLPs, logits, and decoding.", url: "https://poloclub.github.io/transformer-explainer/" },
      { type: "Reference", title: "Generation configuration and strategies", creator: "Hugging Face Transformers", why: "Authoritative implementation reference for temperature, top-k, top-p, stopping criteria, and other generation controls.", url: "https://huggingface.co/docs/transformers/main_classes/text_generation" },
      { type: "Paper", title: "Language Models are Unsupervised Multitask Learners", creator: "Radford et al. · OpenAI", why: "The GPT-2 technical report connects the lecture's 124M example to decoder-only pretraining and scaling.", url: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf" },
      { type: "Paper", title: "Layer Normalization", creator: "Ba, Kiros & Hinton", why: "The primary reference for the normalization method discussed in the final student question.", url: "https://arxiv.org/abs/1607.06450" },
      { type: "Watch", title: "How I Learned to Stop Worrying and Love the Transformer", creator: "Stanford CS25 · Ashish Vaswani", why: "A transformer co-author explains the original motivations, evolution, and research directions.", url: "https://www.youtube.com/watch?v=1GbDTTK3aR4" }
    ],
    quiz: [
      { question: "What best describes a transformer in this lecture?", options: ["A file-compression format", "A neural-network architecture for contextual sequence processing", "A database index", "A fixed list of generated sentences"], answer: 1, explanation: "The transformer is a neural-network architecture that builds contextual representations and supports tasks such as next-token prediction.", optionNotes: ["A is wrong: compression is unrelated.", "B is correct: it captures the architectural role.", "C is wrong: a database index does not learn contextual representations.", "D is wrong: generation is computed, not retrieved from a fixed sentence list."] },
      { question: "Which paper introduced the transformer architecture?", options: ["ImageNet Classification with Deep CNNs", "Attention Is All You Need", "Playing Atari with Deep RL", "Word2Vec Explained"], answer: 1, explanation: "Vaswani and colleagues introduced the transformer in Attention Is All You Need in 2017.", optionNotes: ["A concerns convolutional vision models.", "B is correct and was the instructor-recommended reference.", "C concerns deep reinforcement learning.", "D is not the transformer paper."] },
      { question: "What is the immediate prediction objective of a decoder-only language model?", options: ["Predict every future token simultaneously", "Predict the next token from available context", "Recover the author's identity", "Sort the vocabulary alphabetically"], answer: 1, explanation: "At each step, the model produces a distribution for the next token conditioned on the context it can see.", optionNotes: ["A is wrong: causal decoding proceeds position by position.", "B is correct.", "C is not the training objective.", "D is unrelated to probability modeling."] },
      { question: "What does tokenization do?", options: ["Maps text into vocabulary units and IDs", "Applies softmax", "Adds dropout", "Chooses the final answer"], answer: 0, explanation: "Tokenization converts a text string into the discrete token IDs accepted by the embedding lookup.", optionNotes: ["A is correct.", "B converts logits to probabilities.", "C is a regularization operation.", "D is a decoding decision, not tokenization."] },
      { question: "Why add positional information to token embeddings?", options: ["To increase the vocabulary alphabetically", "To represent token order", "To remove all repeated words", "To guarantee factual output"], answer: 1, explanation: "Attention alone is permutation-equivariant; positional representations tell the model where tokens occur.", optionNotes: ["A is unrelated.", "B is correct.", "C is not a positional-encoding function.", "D cannot be guaranteed by position information."] },
      { question: "What vocabulary size was used for the GPT-2 example?", options: ["768", "12", "50,257", "124"], answer: 2, explanation: "The lecture's GPT-2 example uses 50,257 vocabulary entries.", optionNotes: ["A is the embedding dimension.", "B is the number of heads/blocks in GPT-2 small.", "C is correct.", "D alludes to roughly 124M model parameters, not vocabulary size."] },
      { question: "What is the GPT-2 small embedding dimension discussed?", options: ["50,257", "768", "12", "1"], answer: 1, explanation: "Each vocabulary token is mapped to a learned 768-dimensional vector in the example.", optionNotes: ["A is vocabulary size.", "B is correct.", "C is the head/block count.", "D is not the representation width."] },
      { question: "Approximately how many values are in a 50,257 × 768 embedding table?", options: ["38.6 million", "50 thousand", "768", "124 billion"], answer: 0, explanation: "50,257 multiplied by 768 is about 38.6 million.", optionNotes: ["A is correct.", "B ignores the vector width.", "C is only one vector's width.", "D is far too large."] },
      { question: "Which two main operations form the conceptual core of a transformer block?", options: ["Attention and a feed-forward MLP", "Sorting and hashing", "Encryption and compression", "Pooling and database joins"], answer: 0, explanation: "Attention mixes contextual information; the MLP refines each position.", optionNotes: ["A is correct.", "B is not the block architecture.", "C is unrelated.", "D does not describe a standard transformer block."] },
      { question: "What is the useful mental distinction between attention and the MLP?", options: ["Attention routes information; the MLP transforms each position", "Attention stores files; the MLP indexes them", "Attention trains only; the MLP infers only", "They are identical operations"], answer: 0, explanation: "Attention gathers weighted context across positions, while the feed-forward network operates position-wise.", optionNotes: ["A is correct.", "B invents storage behavior.", "C is wrong: both participate in training and inference.", "D ignores their different computations."] },
      { question: "In the lecture's search analogy, what does a key represent?", options: ["The user's search request", "A descriptor used to match a candidate", "The returned content itself", "The random seed"], answer: 1, explanation: "The query is the request, a key describes a candidate, and the value carries the information to mix.", optionNotes: ["A describes the query.", "B is correct.", "C describes the value.", "D is unrelated to Q/K/V."] },
      { question: "Why use multiple attention heads?", options: ["To force every head to learn the same pattern", "To model different relationships in parallel", "To remove token order", "To eliminate learned weights"], answer: 1, explanation: "Different heads can specialize in different syntactic, semantic, or positional relationships.", optionNotes: ["A defeats the purpose of multiple heads.", "B is correct.", "C is not the goal.", "D is false: every head has learned projections."] },
      { question: "What does a causal mask prevent?", options: ["Attention to future positions", "Attention to all previous positions", "Tokenization", "Gradient computation"], answer: 0, explanation: "Causal masking blocks later positions so next-token training matches autoregressive generation.", optionNotes: ["A is correct.", "B is wrong: previous context remains usable.", "C occurs before attention.", "D remains necessary in training."] },
      { question: "Why divide QKᵀ scores by √dₖ before softmax?", options: ["To stabilize score magnitude as key dimension grows", "To alphabetize tokens", "To add labels", "To choose top-p automatically"], answer: 0, explanation: "Scaling prevents large dot products from pushing softmax into excessively saturated regions.", optionNotes: ["A is correct.", "B is unrelated.", "C is not part of attention.", "D is a separate decoding choice."] },
      { question: "What is a logit?", options: ["A normalized probability", "An unnormalized vocabulary score", "A token's character count", "A dropout mask"], answer: 1, explanation: "The output projection produces logits; softmax later normalizes them.", optionNotes: ["A describes the post-softmax value.", "B is correct.", "C is unrelated.", "D is used for regularization."] },
      { question: "What does softmax do to vocabulary logits?", options: ["Converts them into a distribution summing to one", "Deletes the prompt", "Creates token IDs", "Normalizes the training dataset"], answer: 0, explanation: "Softmax exponentiates and normalizes scores into probabilities.", optionNotes: ["A is correct.", "B is false.", "C is handled by tokenization.", "D is not softmax's role."] },
      { question: "What happens when temperature T equals 1?", options: ["Logits are unchanged by temperature scaling", "All tokens become equally likely", "Generation stops", "Only one vocabulary item remains"], answer: 0, explanation: "Dividing logits by one leaves them unchanged before softmax.", optionNotes: ["A is correct.", "B would require equal logits.", "C is controlled by stopping rules.", "D is not implied by T=1."] },
      { question: "What is the usual effect of temperature below 1?", options: ["A sharper, more concentrated distribution", "A perfectly uniform distribution", "A larger vocabulary", "Removal of positional embeddings"], answer: 0, explanation: "Lower temperature increases relative logit differences and usually makes sampling more predictable.", optionNotes: ["A is correct.", "B is the opposite direction.", "C is fixed by the tokenizer/model.", "D is unrelated."] },
      { question: "What is the usual effect of temperature above 1?", options: ["A flatter distribution with more diversity", "A causal mask", "Fewer model parameters", "Guaranteed correctness"], answer: 0, explanation: "Higher temperature flattens probabilities, increasing the chance of lower-ranked candidates.", optionNotes: ["A is correct.", "B is an attention constraint.", "C does not change model size.", "D is never guaranteed."] },
      { question: "What does top-k sampling retain?", options: ["Tokens whose cumulative mass reaches p", "Exactly the k highest-scoring candidates", "Only tokens already in the prompt", "Every token without filtering"], answer: 1, explanation: "Top-k truncates the candidate set to the k largest scores/probabilities before sampling.", optionNotes: ["A describes top-p.", "B is correct.", "C is false.", "D describes no truncation."] },
      { question: "What does top-p sampling retain?", options: ["The smallest ranked set whose cumulative probability reaches p", "Exactly p tokens", "Only punctuation", "The lowest-probability candidates"], answer: 0, explanation: "Nucleus or top-p sampling adapts set size to the distribution's cumulative mass.", optionNotes: ["A is correct.", "B confuses probability with count.", "C is false.", "D is the opposite of ranked-prefix filtering."] },
      { question: "Why is text generation called autoregressive?", options: ["Each generated token is appended and conditions the next step", "The model predicts all tokens independently", "The prompt is discarded after one step", "Only regression algorithms can be used"], answer: 0, explanation: "Generation feeds prior outputs back into the context one token at a time.", optionNotes: ["A is correct.", "B ignores the sequential dependency.", "C is false.", "D confuses the term with ordinary regression."] },
      { question: "What is the purpose of a residual connection?", options: ["Add a sublayer's input to its output", "Replace all attention heads", "Choose the next token", "Expand the vocabulary"], answer: 0, explanation: "Residual paths preserve information and improve gradient flow through deep stacks.", optionNotes: ["A is correct.", "B is false.", "C is decoding.", "D is determined before training."] },
      { question: "What does layer normalization normalize in a transformer?", options: ["Features within a token representation", "The number of training examples", "The vocabulary alphabet", "The user's prompt length to zero"], answer: 0, explanation: "Layer normalization standardizes the feature values of an individual representation and then applies learned scale and shift.", optionNotes: ["A is correct.", "B is dataset balancing.", "C is unrelated.", "D is false."] },
      { question: "Which statement best answers the student's future-token question?", options: ["The decoder secretly sees future tokens", "It scores the next token from visible context within its context window", "It ignores the prompt", "It can select only words already used"], answer: 1, explanation: "Causal decoding uses the prompt and earlier tokens, bounded by context length, but cannot inspect not-yet-generated positions.", optionNotes: ["A violates causal masking.", "B is correct.", "C is false because context conditions the distribution.", "D is false because candidates come from the full model vocabulary after filtering."] }
    ]
  },
  hi: {
    title: "Transformer की बुनियाद: token, attention और नियंत्रित generation",
    lede: "यह आरंभिक Generative AI व्याख्यान एक prompt को GPT-2 शैली के decoder-only transformer से होकर ले जाता है—tokenization, embeddings, बार-बार आने वाले attention/MLP blocks, vocabulary logits, softmax और predictability तथा diversity को संतुलित करने वाले decoding controls।",
    instructionalInterval: "00:30–53:35",
    reviewLevel: "Recording, source-time-restored transcript और 32-candidate slide-frame review से सत्यापित",
    coverage: [
      { title: "Transformers क्यों महत्त्वपूर्ण हैं", body: "Transformer को आधुनिक text-generative systems की neural architecture और language, audio, vision, biology तथा games में उपयोगी pattern के रूप में प्रस्तुत किया गया है।" },
      { title: "Text से model state", body: "Tokenizer शब्द या subword को IDs में बदलता है; token embeddings सीखा हुआ अर्थ देते हैं और positional embeddings क्रम बनाए रखते हैं।" },
      { title: "Attention context को route करता है", body: "Query, key और value projections हर token को पहले के उपयोगी tokens का भारित संदर्भ लेने देते हैं; कई heads अलग संबंध समानांतर सीख सकते हैं।" },
      { title: "Blocks representation सुधारते हैं", body: "Masked self-attention positions के बीच सूचना मिलाता है, MLP प्रत्येक position को सुधारता है, और residual connection, layer normalization तथा dropout optimization में सहायक होते हैं।" },
      { title: "Logits से अगला token", body: "अंतिम representation हर vocabulary token के लिए logit देता है, softmax उन्हें probabilities में बदलता है और autoregressive decoding अगला token चुनती है।" },
      { title: "Generation नियंत्रित किया जा सकता है", body: "Temperature distribution का आकार बदलता है, जबकि top-k और top-p candidate set सीमित करते हैं; live demo continuation पर उनका प्रभाव दिखाता है।" }
    ],
    takeaway: "Transformer पहले से लिखा भविष्य नहीं निकालता। वह उपलब्ध context से probability distribution बनाता है, एक अगला token चुनता है, उसे context में जोड़ता है और प्रक्रिया दोहराता है।",
    slideTrail: [
      { time: "01:00", title: "What is a Transformer?", note: "Neural-network architecture, 2017 paper, व्यापक applications, next-token prediction और self-attention।" },
      { time: "07:00", title: "Transformer Architecture", note: "तीन भाग: embeddings, transformer blocks और output probabilities।" },
      { time: "13:00", title: "Embedding", note: "Prompt tokenized होता है, learned token vectors और position information जोड़कर आगे भेजा जाता है।" },
      { time: "16:00", title: "Token और positional embeddings", note: "GPT-2 vocabulary तथा 768-dimensional vectors को prompt के token order से जोड़ा गया है।" },
      { time: "19:00", title: "Multi-Head Self-Attention", note: "पहला computation step current token representations से query, key और value matrices बनाता है।" },
      { time: "22:00", title: "Query, key और value analogy", note: "Web-search analogy information request, matching descriptor और लौटाई जाने वाली content को अलग करती है।" },
      { time: "26:00", title: "Multi-head splitting और masked self-attention", note: "GPT-2 small 12 heads का उपयोग करता है; causal mask किसी position को बाद के tokens देखने से रोकता है।" },
      { time: "29:00", title: "Output probabilities और sampling", note: "अगला token चुनने से पहले vocabulary logits को probabilities में बदला जाता है।" },
      { time: "31:00", title: "Temperature, top-k और top-p", note: "Sampling से पहले generation controls candidate distribution को reshape या truncate करते हैं।" },
      { time: "35:00", title: "Transformer Explainer live generation", note: "“Artificial intelligence is transforming the …” prompt को एक-एक token से आगे बढ़ाया गया।" },
      { time: "47:00", title: "Temperature revisited", note: "Student question पर low-temperature sharp और high-temperature flat distribution की तुलना हुई।" },
      { time: "51:00", title: "Layer normalization", note: "अंतिम प्रश्न feature normalization, training stability, convergence और repeated blocks को जोड़ता है।" }
    ],
    summary: [
      { title: "1. Transformer sequence के लिए probability machine है", sourceRefs: ["00:30–07:30", "What is a Transformer?"], paragraphs: ["Instructor transformer को ऐसी neural-network architecture बताते हैं जिसने modern AI में sequence processing बदल दी। Text generation मुख्य उदाहरण है, पर उपयोग text से आगे भी हैं। मूल संदर्भ 2017 का Attention Is All You Need paper है।", "Decoder-style language model उपलब्ध tokens से अगले vocabulary token की probability बनाता है। Self-attention usable context में दूर स्थित dependencies सहित संबंधों को representation में ला सकता है।"] },
      { title: "2. Embedding discrete text को ordered vectors में बदलता है", sourceRefs: ["07:30–18:00", "Embedding", "Tokenization"], paragraphs: ["Tokenizer prompt को whole-word या subword tokens में बाँटता है। GPT-2 small उदाहरण में 50,257 vocabulary entries और 768-dimensional token vectors हैं; embedding table में लगभग 38.6 million learned values होते हैं।", "Token meaning के साथ order भी चाहिए। इसलिए positional representation token embedding में जोड़ा जाता है। एक word कई subword tokens में टूट सकता है, इसलिए word count और token count समान होना आवश्यक नहीं।"], formula: "position i पर final embedding = token embedding(token_i) + positional embedding(i)" },
      { title: "3. Transformer block routing और refinement को बारी-बारी करता है", sourceRefs: ["18:00–24:30", "Multi-Head Self-Attention", "Q/K/V matrices"], paragraphs: ["Attention token positions के बीच contextual information route करता है; feed-forward MLP हर position को स्वतंत्र रूप से transform करता है। सरल mental model: attention बताता है उपयोगी सूचना कहाँ है, MLP representation के साथ computation करता है।", "Query, key और value उसी incoming representation के learned projections हैं। Search analogy में query आवश्यकता, key candidate descriptor और value मिलाई जाने वाली information है।"], formula: "Attention(Q,K,V) = softmax((QKᵀ / √dₖ) + causal mask) V" },
      { title: "4. Multiple heads और masking decoder attention को उपयोगी बनाते हैं", sourceRefs: ["22:30–27:30", "Multi-head splitting", "Masked self-attention"], paragraphs: ["कई heads अलग-अलग comparison spaces सीखते हैं—जैसे local syntax और broad semantics। GPT-2 small में 12 heads और 12 transformer blocks हैं।", "Causal generation में position i बाद की positions नहीं देख सकता। वह prompt और context-window के भीतर पिछले generated tokens देख सकता है, पर ऐसे future tokens नहीं जो अभी बने ही नहीं हैं।"] },
      { title: "5. Model logits देता है; decoding व्यवहार चुनती है", sourceRefs: ["27:30–34:30", "Output probabilities", "Temperature and sampling"], paragraphs: ["Final block active position को हर vocabulary entry के logit में project करता है। Softmax scores को distribution बनाता है। Greedy decoding maximum चुनती है; sampling filtering/rescaling के बाद draw करती है।", "Temperature logits को softmax से पहले divide करता है। T<1 distribution sharp करता है; T>1 flatter बनाता है। Top-k k candidates रखता है; top-p cumulative mass p तक सबसे छोटा ranked prefix रखता है।"], formula: "p(token_j | context) = softmax(z_j / T), जहाँ T > 0" },
      { title: "6. Autoregressive generation iterative feedback loop है", sourceRefs: ["34:30–40:30", "Transformer Explainer demo"], paragraphs: ["Demo एक prompt से एक token बनाता है, उसे context में जोड़ता है और अगली position का distribution फिर बनाता है। Sampling enabled होने पर समान prompt और weights के साथ अलग runs अलग path ले सकते हैं।", "Product lesson यह है कि temperature, top-k और top-p operational parameters हैं। Reproducibility के लिए model revision, prompt, seed, context truncation और decoding configuration log करना चाहिए।"] },
      { title: "7. Student questions context, temperature और normalization स्पष्ट करते हैं", sourceRefs: ["41:28–53:35", "Q&A"], paragraphs: ["पहला प्रश्न limited memory और unseen future token पर है। उत्तर का technical रूप: distribution visible context और context-window limit पर निर्भर है; model future positions नहीं देखता।", "दूसरे प्रश्न में lower temperature को sharp तथा higher temperature को flat distribution से जोड़ा गया। अंतिम प्रश्न में layer normalization आया: यह प्रत्येक token representation की features को learned scale/shift के साथ normalize करता है और optimization stable बनाता है; यह labels या supervised objective नहीं देता।"] }
    ],
    courseSignals: {
      assignments: [], homework: [], labs: [], projects: [],
      references: [{ time: "01:53", title: "Attention Is All You Need", detail: "Instructor ने 2017 transformer paper को बार-बार पढ़ने और refer करने की मजबूत सलाह दी; कोई अलग deadline नहीं दी गई।" }],
      studentQuestions: [
        { time: "41:28", question: "Limited memory और future tokens न देख पाने पर model अगला token कैसे predict करता है?", response: "वह उपलब्ध context से learned vocabulary candidates score करता है। Causal attention context window के भीतर prompt और previous positions देखता है, future positions नहीं।" },
        { time: "45:37", question: "Temperature selected next token की randomness या uniqueness कैसे बदलता है?", response: "Temperature softmax से पहले logits rescale करता है। Lower value distribution sharp और higher value flatter बनाता है।" },
        { time: "50:26", question: "Transformer में layer normalization क्या है और training में कैसे उपयोग होता है?", response: "यह token representation की features normalize कर learned scale/shift लगाता है, जिससे activations और optimization अधिक stable होते हैं।" }
      ]
    },
    keyTerms: [
      { term: "Token", definition: "Model की vocabulary unit; यह word, subword, character-like piece या special symbol हो सकती है।" },
      { term: "Tokenizer", definition: "Text को token IDs में और IDs को वापस text में map करने वाली deterministic प्रक्रिया।" },
      { term: "Embedding", definition: "Token या position का learned dense vector representation।" },
      { term: "Self-attention", definition: "Learned queries और keys की तुलना करके positions के values को weighted रूप में मिलाने की प्रक्रिया।" },
      { term: "Attention head", definition: "Multi-head attention के भीतर Q/K/V projections और attention weights का एक स्वतंत्र set।" },
      { term: "Causal mask", definition: "Decoder position को बाद की positions पर attention देने से रोकने वाली constraint।" },
      { term: "MLP", definition: "Attention के बाद हर token representation को refine करने वाला position-wise feed-forward network।" },
      { term: "Residual connection", definition: "Sublayer input को उसके output में जोड़ने वाला identity shortcut।" },
      { term: "Layer normalization", definition: "Token representation की features का normalization, फिर learned scale और shift।" },
      { term: "Logit", definition: "Softmax से पहले model का unnormalized score।" },
      { term: "Temperature", definition: "Logits divide करके sampling distribution की sharpness बदलने वाला positive scalar।" },
      { term: "Top-k sampling", definition: "केवल k highest-scoring token candidates रखकर sampling।" },
      { term: "Top-p sampling", definition: "Cumulative probability p तक पहुँचने वाले सबसे छोटे ranked candidate set से sampling।" },
      { term: "Autoregressive generation", definition: "एक token बनाना, context में जोड़ना और अगली position के लिए प्रक्रिया दोहराना।" }
    ],
    insights: [
      { label: "Architecture insight", title: "Attention route करता है; MLP compute करता है", body: "Attention मुख्यतः दूसरी positions से context लाता है, जबकि MLP हर position पर nonlinear transformation करता है। Standard block में दोनों आवश्यक हैं।" },
      { label: "Capacity insight", title: "GPT-2 small की बड़ी capacity embedding table में है", body: "50,257 × 768 लगभग 38.6 million values हैं—124M model का बड़ा भाग। Vocabulary design और weight tying के deployment परिणाम होते हैं।" },
      { label: "Decoding insight", title: "Temperature और truncation अलग समस्याएँ हल करते हैं", body: "Temperature relative probabilities reshape करता है; top-k/top-p candidates हटाते हैं। दोनों diversity और calibration को अलग तरह से बदलते हैं।" },
      { label: "Correction", title: "Layer normalization dataset normalization नहीं है", body: "यह network के भीतर token feature vector पर काम करता है; इसे training-data scaling या next-token labels से नहीं मिलाना चाहिए।" },
      { label: "Product insight", title: "Generation settings observability logs में होने चाहिए", body: "Reproduction के लिए model revision, decoding strategy, temperature, top-k/top-p, seed, context truncation और stopping criteria दर्ज करें।" },
      { label: "Safety insight", title: "अधिक diversity हमेशा अधिक creativity नहीं है", body: "Flat distribution implausible या unsafe tokens की probability भी बढ़ाता है। Task-specific quality, factuality और safety metrics पर tuning करें।" }
    ],
    resources: [
      { type: "Paper", title: "Attention Is All You Need", creator: "Vaswani et al.", why: "Lecture में सुझाया primary transformer paper; scaled attention, multi-head attention, positional encoding, residuals और normalization पढ़ें।", url: "https://arxiv.org/abs/1706.03762" },
      { type: "Interactive", title: "Transformer Explainer", creator: "Polo Club of Data Science, Georgia Tech", why: "Recording में उपयोग हुई interactive GPT-2 visualization; embeddings से decoding तक step through करें।", url: "https://poloclub.github.io/transformer-explainer/" },
      { type: "Reference", title: "Generation configuration and strategies", creator: "Hugging Face Transformers", why: "Temperature, top-k, top-p और stopping controls की authoritative implementation reference।", url: "https://huggingface.co/docs/transformers/main_classes/text_generation" },
      { type: "Paper", title: "Language Models are Unsupervised Multitask Learners", creator: "Radford et al. · OpenAI", why: "Lecture के 124M GPT-2 example को decoder-only pretraining और scaling से जोड़ता है।", url: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf" },
      { type: "Paper", title: "Layer Normalization", creator: "Ba, Kiros & Hinton", why: "अंतिम student question में चर्चा हुए normalization method का primary reference।", url: "https://arxiv.org/abs/1607.06450" },
      { type: "Watch", title: "How I Learned to Stop Worrying and Love the Transformer", creator: "Stanford CS25 · Ashish Vaswani", why: "Transformer के co-author से motivations, evolution और research directions।", url: "https://www.youtube.com/watch?v=1GbDTTK3aR4" }
    ],
    quiz: [
      { question: "इस lecture में transformer का सबसे सही वर्णन क्या है?", options: ["File-compression format", "Contextual sequence processing की neural-network architecture", "Database index", "Generated sentences की fixed list"], answer: 1, explanation: "Transformer contextual representations बनाता है और next-token prediction जैसे tasks को सक्षम करता है।", optionNotes: ["A गलत: compression असंबंधित है।", "B सही: यही architectural role है।", "C गलत: database index learned context नहीं बनाता।", "D गलत: generation compute होती है, fixed list से नहीं आती।"] },
      { question: "Transformer architecture किस paper में प्रस्तुत हुई?", options: ["ImageNet Classification with Deep CNNs", "Attention Is All You Need", "Playing Atari with Deep RL", "Word2Vec Explained"], answer: 1, explanation: "Vaswani et al. ने 2017 में Attention Is All You Need में transformer प्रस्तुत किया।", optionNotes: ["A convolutional vision पर है।", "B सही और instructor-recommended reference है।", "C deep RL पर है।", "D transformer paper नहीं है।"] },
      { question: "Decoder-only language model का immediate objective क्या है?", options: ["सभी future tokens साथ predict करना", "Available context से अगला token predict करना", "Author identity निकालना", "Vocabulary alphabetically sort करना"], answer: 1, explanation: "हर step पर model visible context से next-token distribution बनाता है।", optionNotes: ["A गलत: causal decoding stepwise है।", "B सही।", "C objective नहीं है।", "D probability modeling से असंबंधित है।"] },
      { question: "Tokenization क्या करती है?", options: ["Text को vocabulary units और IDs में map करती है", "Softmax लगाती है", "Dropout जोड़ती है", "Final answer चुनती है"], answer: 0, explanation: "Tokenization text string को embedding lookup के discrete IDs में बदलती है।", optionNotes: ["A सही।", "B logits को probabilities बनाता है।", "C regularization है।", "D decoding decision है।"] },
      { question: "Token embeddings में positional information क्यों जोड़ते हैं?", options: ["Vocabulary alphabetically बढ़ाने के लिए", "Token order बताने के लिए", "Repeated words हटाने के लिए", "Factual output guarantee करने के लिए"], answer: 1, explanation: "Position representation बताता है token sequence में कहाँ है।", optionNotes: ["A असंबंधित है।", "B सही।", "C positional encoding का काम नहीं।", "D guarantee नहीं मिलती।"] },
      { question: "GPT-2 example की vocabulary size क्या थी?", options: ["768", "12", "50,257", "124"], answer: 2, explanation: "Lecture example में 50,257 vocabulary entries थीं।", optionNotes: ["A embedding dimension है।", "B heads/blocks count है।", "C सही।", "D लगभग 124M parameters की ओर संकेत करता है।"] },
      { question: "GPT-2 small embedding dimension क्या था?", options: ["50,257", "768", "12", "1"], answer: 1, explanation: "हर token 768-dimensional learned vector से map होता है।", optionNotes: ["A vocabulary size है।", "B सही।", "C head/block count है।", "D representation width नहीं।"] },
      { question: "50,257 × 768 embedding table में लगभग कितनी values हैं?", options: ["38.6 million", "50 thousand", "768", "124 billion"], answer: 0, explanation: "50,257 × 768 लगभग 38.6 million है।", optionNotes: ["A सही।", "B vector width भूलता है।", "C केवल एक vector width है।", "D बहुत बड़ा है।"] },
      { question: "Transformer block के conceptual core में कौन-से दो operations हैं?", options: ["Attention और feed-forward MLP", "Sorting और hashing", "Encryption और compression", "Pooling और database joins"], answer: 0, explanation: "Attention context मिलाता है; MLP हर position refine करता है।", optionNotes: ["A सही।", "B architecture नहीं।", "C असंबंधित।", "D standard block नहीं।"] },
      { question: "Attention और MLP का उपयोगी अंतर क्या है?", options: ["Attention information route करता है; MLP हर position transform करता है", "Attention files store करता है", "Attention केवल train और MLP केवल infer करता है", "दोनों समान हैं"], answer: 0, explanation: "Attention positions से weighted context लेता है, MLP position-wise computation करता है।", optionNotes: ["A सही।", "B गलत behavior है।", "C गलत: दोनों training/inference में हैं।", "D computations अलग हैं।"] },
      { question: "Search analogy में key क्या दर्शाती है?", options: ["User request", "Candidate से match होने वाला descriptor", "Returned content", "Random seed"], answer: 1, explanation: "Query request, key candidate descriptor और value information है।", optionNotes: ["A query है।", "B सही।", "C value है।", "D Q/K/V से असंबंधित।"] },
      { question: "Multiple attention heads क्यों उपयोग करते हैं?", options: ["हर head को समान pattern सिखाने के लिए", "अलग relationships समानांतर model करने के लिए", "Token order हटाने के लिए", "Learned weights मिटाने के लिए"], answer: 1, explanation: "अलग heads syntactic, semantic या positional patterns specialize कर सकते हैं।", optionNotes: ["A purpose के विपरीत है।", "B सही।", "C goal नहीं।", "D गलत: projections learned हैं।"] },
      { question: "Causal mask क्या रोकता है?", options: ["Future positions पर attention", "सभी previous positions पर attention", "Tokenization", "Gradient computation"], answer: 0, explanation: "Mask later positions block करता है ताकि autoregressive constraint बनी रहे।", optionNotes: ["A सही।", "B गलत: previous context usable है।", "C attention से पहले होता है।", "D training में gradients चाहिए।"] },
      { question: "Softmax से पहले QKᵀ को √dₖ से क्यों divide करते हैं?", options: ["Dimension बढ़ने पर score magnitude stabilize करने के लिए", "Tokens alphabetize करने के लिए", "Labels जोड़ने के लिए", "Top-p स्वतः चुनने के लिए"], answer: 0, explanation: "Scaling बड़े dot products को softmax saturation में जाने से रोकती है।", optionNotes: ["A सही।", "B असंबंधित।", "C attention का भाग नहीं।", "D separate decoding choice है।"] },
      { question: "Logit क्या है?", options: ["Normalized probability", "Unnormalized vocabulary score", "Token character count", "Dropout mask"], answer: 1, explanation: "Output projection logits बनाता है; softmax बाद में normalize करता है।", optionNotes: ["A post-softmax value है।", "B सही।", "C असंबंधित।", "D regularization में है।"] },
      { question: "Softmax vocabulary logits के साथ क्या करता है?", options: ["उन्हें sum-one distribution बनाता है", "Prompt delete करता है", "Token IDs बनाता है", "Training dataset normalize करता है"], answer: 0, explanation: "Softmax scores exponentiate और normalize करके probabilities बनाता है।", optionNotes: ["A सही।", "B गलत।", "C tokenizer करता है।", "D softmax का role नहीं।"] },
      { question: "Temperature T=1 होने पर क्या होता है?", options: ["Temperature scaling logits नहीं बदलती", "सभी tokens equally likely होते हैं", "Generation रुकती है", "एक token बचता है"], answer: 0, explanation: "Logits को 1 से divide करने पर वे unchanged रहते हैं।", optionNotes: ["A सही।", "B के लिए logits equal होने चाहिए।", "C stopping rule तय करता है।", "D T=1 से नहीं होता।"] },
      { question: "Temperature 1 से कम होने का सामान्य प्रभाव क्या है?", options: ["Sharper, concentrated distribution", "Uniform distribution", "Larger vocabulary", "Positional embeddings हटना"], answer: 0, explanation: "Lower temperature differences बढ़ाकर output अधिक predictable करता है।", optionNotes: ["A सही।", "B opposite है।", "C model-fixed है।", "D असंबंधित।"] },
      { question: "Temperature 1 से अधिक होने का सामान्य प्रभाव क्या है?", options: ["Flatter distribution और अधिक diversity", "Causal mask", "कम parameters", "Guaranteed correctness"], answer: 0, explanation: "Higher temperature lower-ranked candidates की chance बढ़ाता है।", optionNotes: ["A सही।", "B attention constraint है।", "C model size नहीं बदलता।", "D guarantee नहीं।"] },
      { question: "Top-k sampling क्या रखती है?", options: ["Cumulative mass p तक tokens", "Exactly k highest-scoring candidates", "Prompt में मौजूद tokens", "सभी tokens"], answer: 1, explanation: "Top-k candidate set को k largest scores तक सीमित करता है।", optionNotes: ["A top-p है।", "B सही।", "C गलत।", "D no truncation है।"] },
      { question: "Top-p sampling क्या रखती है?", options: ["Cumulative probability p तक smallest ranked set", "Exactly p tokens", "केवल punctuation", "Lowest-probability candidates"], answer: 0, explanation: "Top-p distribution के अनुसार adaptive candidate-set size देता है।", optionNotes: ["A सही।", "B probability को count समझता है।", "C गलत।", "D ranked-prefix के विपरीत है।"] },
      { question: "Text generation autoregressive क्यों कहलाती है?", options: ["हर generated token context में जुड़कर अगला step condition करता है", "सभी tokens independent हैं", "Prompt एक step बाद हटता है", "केवल regression algorithm उपयोग होता है"], answer: 0, explanation: "Previous outputs अगली prediction के input context बनते हैं।", optionNotes: ["A सही।", "B dependency भूलता है।", "C गलत।", "D ordinary regression से भ्रम है।"] },
      { question: "Residual connection का उद्देश्य क्या है?", options: ["Sublayer input को output में जोड़ना", "सभी heads बदलना", "Next token चुनना", "Vocabulary बढ़ाना"], answer: 0, explanation: "Residual path information और gradient flow बनाए रखता है।", optionNotes: ["A सही।", "B गलत।", "C decoding है।", "D training से पहले तय है।"] },
      { question: "Layer normalization transformer में क्या normalize करती है?", options: ["Token representation की features", "Training examples की संख्या", "Vocabulary alphabet", "Prompt length को zero"], answer: 0, explanation: "यह individual representation की feature values standardize कर learned scale/shift लगाती है।", optionNotes: ["A सही।", "B dataset balancing है।", "C असंबंधित।", "D गलत।"] },
      { question: "Student के future-token प्रश्न का सर्वोत्तम उत्तर क्या है?", options: ["Decoder future tokens secretly देखता है", "Visible context और context window से next token score करता है", "Prompt ignore करता है", "केवल पहले उपयोग words चुनता है"], answer: 1, explanation: "Causal decoding prompt और previous tokens उपयोग करता है, पर not-yet-generated positions नहीं।", optionNotes: ["A causal mask तोड़ता है।", "B सही।", "C गलत: context distribution condition करता है।", "D गलत: candidates vocabulary से आते हैं।"] }
    ]
  }
};
