// English-only publication unit.
export const eai6403Lecture20260823 = {
  en: {
  "title": "Transformer foundations: tokens, attention, and controlled generation",
  "lede": "This opening Generative AI lecture follows a prompt through a GPT-2-style decoder-only transformer: tokenization, embeddings, repeated attention/MLP blocks, vocabulary logits, softmax, and decoding controls that trade predictability for diversity.",
  "instructionalInterval": "00:30–53:35",
  "reviewLevel": "Recording, source-time-restored transcript, and 32-candidate slide-frame review verified",
  "coverage": [
    {
      "title": "Why transformers matter",
      "body": "Transformers are introduced as the neural architecture behind modern text-generative systems and as a reusable pattern across language, audio, vision, biology, and games."
    },
    {
      "title": "Text becomes model state",
      "body": "A tokenizer maps words or subwords to IDs; token embeddings supply learned meaning, while positional embeddings retain order."
    },
    {
      "title": "Attention routes context",
      "body": "Query, key, and value projections let each token weight relevant earlier tokens; multiple heads can learn different relationships in parallel."
    },
    {
      "title": "Blocks refine representations",
      "body": "Masked self-attention exchanges information across positions, the MLP refines each position, and residual connections, layer normalization, and dropout support optimization."
    },
    {
      "title": "Logits become a next token",
      "body": "The final representation is projected to one logit per vocabulary token, normalized into probabilities, and decoded autoregressively."
    },
    {
      "title": "Generation is controllable",
      "body": "Temperature reshapes the distribution, while top-k and top-p restrict the candidate set; a live demo shows how those controls alter continuations."
    }
  ],
  "takeaway": "A transformer does not retrieve a prewritten future. It repeatedly converts the available context into a probability distribution, selects one next token, appends it, and runs the process again.",
  "slideTrail": [
    {
      "time": "01:00",
      "title": "What is a Transformer?",
      "note": "Neural-network architecture, the 2017 paper, broad applications, next-token prediction, and self-attention."
    },
    {
      "time": "07:00",
      "title": "Transformer Architecture",
      "note": "Three-part view: embeddings, transformer blocks, and output probabilities."
    },
    {
      "time": "13:00",
      "title": "Embedding",
      "note": "The prompt is tokenized, mapped to learned token vectors, combined with position information, and passed forward."
    },
    {
      "time": "16:00",
      "title": "Token and positional embeddings",
      "note": "GPT-2 vocabulary and 768-dimensional lookup vectors are connected to the order of tokens in the prompt."
    },
    {
      "time": "19:00",
      "title": "Multi-Head Self-Attention",
      "note": "The first computation step constructs query, key, and value matrices from the current token representations."
    },
    {
      "time": "22:00",
      "title": "Query, key, and value analogy",
      "note": "A web-search analogy separates the information request, the matching descriptor, and the content returned."
    },
    {
      "time": "26:00",
      "title": "Multi-head splitting and masked self-attention",
      "note": "GPT-2 small splits representations across 12 heads; causal masking prevents a position from consulting later tokens."
    },
    {
      "time": "29:00",
      "title": "Output probabilities and sampling",
      "note": "Vocabulary logits are transformed to probabilities before a next token is selected."
    },
    {
      "time": "31:00",
      "title": "Temperature, top-k, and top-p",
      "note": "Generation controls reshape or truncate the candidate distribution before sampling."
    },
    {
      "time": "35:00",
      "title": "Transformer Explainer live generation",
      "note": "The prompt “Artificial intelligence is transforming the …” is extended one token at a time."
    },
    {
      "time": "47:00",
      "title": "Temperature revisited",
      "note": "A student question prompts a visual comparison of sharper low-temperature and flatter high-temperature distributions."
    },
    {
      "time": "51:00",
      "title": "Layer normalization",
      "note": "The final question connects feature normalization, training stability, convergence, and repeated transformer blocks."
    }
  ],
  "summary": [
    {
      "title": "1. The transformer is a probability machine for sequences",
      "sourceRefs": [
        "00:30–07:30",
        "What is a Transformer?"
      ],
      "paragraphs": [
        "The instructor frames the transformer as a neural-network architecture that changed how modern AI systems process sequences. The lecture uses text generation as the main path, while noting applications beyond text. The foundational reference is the 2017 paper Attention Is All You Need.",
        "For a decoder-style language model, the operational question is: given the tokens already available, which vocabulary token should come next? Self-attention lets the current representation incorporate relationships across the usable context, including dependencies that may be far apart."
      ]
    },
    {
      "title": "2. Embedding converts discrete text into ordered vectors",
      "sourceRefs": [
        "07:30–18:00",
        "Embedding",
        "Tokenization"
      ],
      "paragraphs": [
        "A tokenizer first splits the prompt into tokens, which may be whole words or subwords. Each token ID indexes a learned vector. In the GPT-2 small example, the vocabulary has 50,257 entries and each token embedding has 768 components, so the lookup table alone contains roughly 38.6 million learned values.",
        "Token meaning is not enough because attention by itself does not know whether a word appeared first or fifth. A positional representation is added to the token embedding so the block receives both identity/semantics and order. The lecture's sample prompt also shows why token count need not equal word count: one word can split into multiple subword tokens."
      ],
      "formula": "final embedding at position i = token embedding(token_i) + positional embedding(i)"
    },
    {
      "title": "3. A transformer block alternates routing and refinement",
      "sourceRefs": [
        "18:00–24:30",
        "Multi-Head Self-Attention",
        "Q/K/V matrices"
      ],
      "paragraphs": [
        "Within each block, attention routes contextual information between token positions. The feed-forward MLP then transforms each position independently. This division is useful: attention decides where relevant information comes from; the MLP refines what each position can represent.",
        "Query, key, and value vectors are learned linear projections of the same incoming token representations. The lecture's search analogy is helpful: a query expresses what is needed, keys describe candidates, and values contain the information that will be mixed. Similarity between queries and keys produces weights over values."
      ],
      "formula": "Attention(Q,K,V) = softmax((QKᵀ / √dₖ) + causal mask) V"
    },
    {
      "title": "4. Multiple heads and masking make decoder attention useful",
      "sourceRefs": [
        "22:30–27:30",
        "Multi-head splitting",
        "Masked self-attention"
      ],
      "paragraphs": [
        "A single head provides one learned comparison space. Multiple heads let the model learn several patterns in parallel—for example, a local syntactic relation in one head and a broader semantic dependency in another. GPT-2 small uses 12 heads and 12 transformer blocks.",
        "During causal generation, position i must not see positions after i. The causal mask removes those future positions before softmax. This is different from saying the model has no context: it can attend to the prompt and previously generated tokens up to its context-window limit, but not to tokens that have not yet been generated."
      ]
    },
    {
      "title": "5. The model outputs logits; decoding chooses behavior",
      "sourceRefs": [
        "27:30–34:30",
        "Output probabilities",
        "Temperature and sampling"
      ],
      "paragraphs": [
        "After the final transformer block, the representation at the active position is projected to one logit for every vocabulary entry. Softmax converts those scores to a normalized distribution. Greedy decoding selects the maximum; sampling draws from a distribution after any filtering or rescaling.",
        "Temperature divides logits before softmax. A value below one sharpens differences and usually makes outputs more repeatable; a value above one flattens the distribution and gives lower-ranked alternatives more chance. Top-k keeps the k highest-scoring candidates. Top-p keeps the smallest ranked prefix whose cumulative probability reaches p. These controls interact and should be evaluated against the task, not treated as a universal creativity dial."
      ],
      "formula": "p(token_j | context) = softmax(z_j / T), with T > 0"
    },
    {
      "title": "6. Autoregressive generation is an iterative feedback loop",
      "sourceRefs": [
        "34:30–40:30",
        "Transformer Explainer demo"
      ],
      "paragraphs": [
        "The demo starts from a prompt and generates one continuation token. That token is appended to the context, after which the model recomputes a distribution for the next position. Repeating this loop produces a sentence. The path can differ across runs when sampling is enabled, even though the model weights and prompt are unchanged.",
        "The business-facing lesson is operational: temperature, top-k, and top-p are product parameters. They affect consistency, diversity, factual risk, and reproducibility, so a deployed system should log its prompt, model/version, random seed where applicable, and decoding configuration."
      ]
    },
    {
      "title": "7. Student questions clarify context, temperature, and normalization",
      "sourceRefs": [
        "41:28–53:35",
        "Q&A"
      ],
      "paragraphs": [
        "The first question asks how next-token prediction relates to limited memory and unseen future tokens. The instructor emphasizes choosing from the learned vocabulary. A fuller technical statement is that the distribution depends on the currently visible context, bounded by the model's context window; the model does not inspect future tokens.",
        "The second question revisits temperature: lower values sharpen the distribution, while higher values flatten it and admit more alternatives. The final question concerns layer normalization. It normalizes features within each token representation using learned scale and shift, improving numerical stability and optimization; it does not provide labels or perform the supervised objective itself."
      ]
    }
  ],
  "courseSignals": {
    "assignments": [],
    "homework": [],
    "labs": [],
    "projects": [],
    "references": [
      {
        "time": "01:53",
        "title": "Attention Is All You Need",
        "detail": "The instructor strongly recommended repeatedly reading and referring to the 2017 transformer paper. No separate reading deadline was assigned."
      }
    ],
    "studentQuestions": [
      {
        "time": "41:28",
        "question": "If a model has limited memory and cannot see future tokens, how can it predict the next token?",
        "response": "It scores candidates from its learned vocabulary using the available context. Technically, causal attention can use only prompt and previous-token positions within the context window, not future positions."
      },
      {
        "time": "45:37",
        "question": "How does temperature change randomness or uniqueness in the selected next token?",
        "response": "Temperature rescales logits before softmax. Lower values sharpen probability differences; higher values flatten them and increase the chance of lower-ranked candidates."
      },
      {
        "time": "50:26",
        "question": "What is layer normalization in a transformer, and how is it used during training?",
        "response": "It normalizes features of each token representation and applies learned scale/shift, supporting stable activations and faster optimization. The instructor connected it to repeated gradient-based training and convergence."
      }
    ]
  },
  "keyTerms": [
    {
      "term": "Token",
      "definition": "A vocabulary unit processed by the model; it may be a word, subword, character-like piece, or special symbol."
    },
    {
      "term": "Tokenizer",
      "definition": "The deterministic procedure that maps text to token IDs and later decodes IDs back to text."
    },
    {
      "term": "Embedding",
      "definition": "A learned dense vector used to represent a token or its position."
    },
    {
      "term": "Self-attention",
      "definition": "A mechanism that mixes information across positions by comparing learned queries and keys and combining values."
    },
    {
      "term": "Attention head",
      "definition": "One independent set of Q/K/V projections and attention weights within multi-head attention."
    },
    {
      "term": "Causal mask",
      "definition": "A constraint that prevents a decoder position from attending to later positions."
    },
    {
      "term": "MLP",
      "definition": "The position-wise feed-forward network that refines each token representation after attention."
    },
    {
      "term": "Residual connection",
      "definition": "An identity shortcut that adds a sublayer's input to its output."
    },
    {
      "term": "Layer normalization",
      "definition": "Feature-wise normalization of a token representation followed by learned scale and shift."
    },
    {
      "term": "Logit",
      "definition": "An unnormalized score produced before softmax."
    },
    {
      "term": "Temperature",
      "definition": "A positive scalar that divides logits and changes the sharpness of the sampling distribution."
    },
    {
      "term": "Top-k sampling",
      "definition": "Sampling after retaining only the k highest-scoring token candidates."
    },
    {
      "term": "Top-p sampling",
      "definition": "Sampling from the smallest ranked candidate set whose cumulative probability reaches p."
    },
    {
      "term": "Autoregressive generation",
      "definition": "Generating one token, appending it to context, and repeating for the next position."
    }
  ],
  "insights": [
    {
      "label": "Architecture insight",
      "title": "Attention routes; the MLP computes",
      "body": "This mental split prevents a common confusion. Attention primarily gathers context from other positions, while the MLP performs a nonlinear transformation at each position. Both are required in a standard block."
    },
    {
      "label": "Capacity insight",
      "title": "A large share of GPT-2 small starts in the embedding table",
      "body": "50,257 × 768 is about 38.6 million values—nearly one third of a 124M-parameter model. Vocabulary design and weight tying therefore have real capacity and deployment consequences."
    },
    {
      "label": "Decoding insight",
      "title": "Temperature and truncation solve different problems",
      "body": "Temperature reshapes relative probabilities across candidates; top-k/top-p remove candidates. Combining them can be useful, but each changes calibration and diversity differently."
    },
    {
      "label": "Correction",
      "title": "Layer normalization is not dataset normalization",
      "body": "It operates inside the network on a token's feature vector. It should not be conflated with feature scaling of the training dataset or with the supervised labels used for next-token learning."
    },
    {
      "label": "Product insight",
      "title": "Generation settings belong in observability logs",
      "body": "A response cannot be reproduced from model name and prompt alone. Record the model revision, decoding strategy, temperature, top-k/top-p, seed, context truncation, and stopping criteria."
    },
    {
      "label": "Safety insight",
      "title": "More diversity is not automatically more creativity",
      "body": "Flattening the distribution also gives implausible or unsafe tokens more probability. Tune generation against task-specific quality, factuality, latency, and safety metrics."
    }
  ],
  "resources": [
    {
      "type": "Paper",
      "title": "Attention Is All You Need",
      "creator": "Vaswani et al.",
      "why": "The primary transformer paper recommended in the lecture; study scaled dot-product attention, multi-head attention, positional encoding, residuals, and normalization.",
      "url": "https://arxiv.org/abs/1706.03762"
    },
    {
      "type": "Interactive",
      "title": "Transformer Explainer",
      "creator": "Polo Club of Data Science, Georgia Tech",
      "why": "The interactive GPT-2-style visualization used in the recording; step through embeddings, attention, MLPs, logits, and decoding.",
      "url": "https://poloclub.github.io/transformer-explainer/"
    },
    {
      "type": "Reference",
      "title": "Generation configuration and strategies",
      "creator": "Hugging Face Transformers",
      "why": "Authoritative implementation reference for temperature, top-k, top-p, stopping criteria, and other generation controls.",
      "url": "https://huggingface.co/docs/transformers/main_classes/text_generation"
    },
    {
      "type": "Paper",
      "title": "Language Models are Unsupervised Multitask Learners",
      "creator": "Radford et al. · OpenAI",
      "why": "The GPT-2 technical report connects the lecture's 124M example to decoder-only pretraining and scaling.",
      "url": "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
    },
    {
      "type": "Paper",
      "title": "Layer Normalization",
      "creator": "Ba, Kiros & Hinton",
      "why": "The primary reference for the normalization method discussed in the final student question.",
      "url": "https://arxiv.org/abs/1607.06450"
    },
    {
      "type": "Watch",
      "title": "How I Learned to Stop Worrying and Love the Transformer",
      "creator": "Stanford CS25 · Ashish Vaswani",
      "why": "A transformer co-author explains the original motivations, evolution, and research directions.",
      "url": "https://www.youtube.com/watch?v=1GbDTTK3aR4"
    }
  ],
  "quiz": [
    {
      "question": "What best describes a transformer in this lecture?",
      "options": [
        "A file-compression format",
        "A neural-network architecture for contextual sequence processing",
        "A database index",
        "A fixed list of generated sentences"
      ],
      "answer": 1,
      "explanation": "The transformer is a neural-network architecture that builds contextual representations and supports tasks such as next-token prediction.",
      "optionNotes": [
        "A is wrong: compression is unrelated.",
        "B is correct: it captures the architectural role.",
        "C is wrong: a database index does not learn contextual representations.",
        "D is wrong: generation is computed, not retrieved from a fixed sentence list."
      ]
    },
    {
      "question": "Which paper introduced the transformer architecture?",
      "options": [
        "ImageNet Classification with Deep CNNs",
        "Attention Is All You Need",
        "Playing Atari with Deep RL",
        "Word2Vec Explained"
      ],
      "answer": 1,
      "explanation": "Vaswani and colleagues introduced the transformer in Attention Is All You Need in 2017.",
      "optionNotes": [
        "A concerns convolutional vision models.",
        "B is correct and was the instructor-recommended reference.",
        "C concerns deep reinforcement learning.",
        "D is not the transformer paper."
      ]
    },
    {
      "question": "What is the immediate prediction objective of a decoder-only language model?",
      "options": [
        "Predict every future token simultaneously",
        "Predict the next token from available context",
        "Recover the author's identity",
        "Sort the vocabulary alphabetically"
      ],
      "answer": 1,
      "explanation": "At each step, the model produces a distribution for the next token conditioned on the context it can see.",
      "optionNotes": [
        "A is wrong: causal decoding proceeds position by position.",
        "B is correct.",
        "C is not the training objective.",
        "D is unrelated to probability modeling."
      ]
    },
    {
      "question": "What does tokenization do?",
      "options": [
        "Maps text into vocabulary units and IDs",
        "Applies softmax",
        "Adds dropout",
        "Chooses the final answer"
      ],
      "answer": 0,
      "explanation": "Tokenization converts a text string into the discrete token IDs accepted by the embedding lookup.",
      "optionNotes": [
        "A is correct.",
        "B converts logits to probabilities.",
        "C is a regularization operation.",
        "D is a decoding decision, not tokenization."
      ]
    },
    {
      "question": "Why add positional information to token embeddings?",
      "options": [
        "To increase the vocabulary alphabetically",
        "To represent token order",
        "To remove all repeated words",
        "To guarantee factual output"
      ],
      "answer": 1,
      "explanation": "Attention alone is permutation-equivariant; positional representations tell the model where tokens occur.",
      "optionNotes": [
        "A is unrelated.",
        "B is correct.",
        "C is not a positional-encoding function.",
        "D cannot be guaranteed by position information."
      ]
    },
    {
      "question": "What vocabulary size was used for the GPT-2 example?",
      "options": [
        "768",
        "12",
        "50,257",
        "124"
      ],
      "answer": 2,
      "explanation": "The lecture's GPT-2 example uses 50,257 vocabulary entries.",
      "optionNotes": [
        "A is the embedding dimension.",
        "B is the number of heads/blocks in GPT-2 small.",
        "C is correct.",
        "D alludes to roughly 124M model parameters, not vocabulary size."
      ]
    },
    {
      "question": "What is the GPT-2 small embedding dimension discussed?",
      "options": [
        "50,257",
        "768",
        "12",
        "1"
      ],
      "answer": 1,
      "explanation": "Each vocabulary token is mapped to a learned 768-dimensional vector in the example.",
      "optionNotes": [
        "A is vocabulary size.",
        "B is correct.",
        "C is the head/block count.",
        "D is not the representation width."
      ]
    },
    {
      "question": "Approximately how many values are in a 50,257 × 768 embedding table?",
      "options": [
        "38.6 million",
        "50 thousand",
        "768",
        "124 billion"
      ],
      "answer": 0,
      "explanation": "50,257 multiplied by 768 is about 38.6 million.",
      "optionNotes": [
        "A is correct.",
        "B ignores the vector width.",
        "C is only one vector's width.",
        "D is far too large."
      ]
    },
    {
      "question": "Which two main operations form the conceptual core of a transformer block?",
      "options": [
        "Attention and a feed-forward MLP",
        "Sorting and hashing",
        "Encryption and compression",
        "Pooling and database joins"
      ],
      "answer": 0,
      "explanation": "Attention mixes contextual information; the MLP refines each position.",
      "optionNotes": [
        "A is correct.",
        "B is not the block architecture.",
        "C is unrelated.",
        "D does not describe a standard transformer block."
      ]
    },
    {
      "question": "What is the useful mental distinction between attention and the MLP?",
      "options": [
        "Attention routes information; the MLP transforms each position",
        "Attention stores files; the MLP indexes them",
        "Attention trains only; the MLP infers only",
        "They are identical operations"
      ],
      "answer": 0,
      "explanation": "Attention gathers weighted context across positions, while the feed-forward network operates position-wise.",
      "optionNotes": [
        "A is correct.",
        "B invents storage behavior.",
        "C is wrong: both participate in training and inference.",
        "D ignores their different computations."
      ]
    },
    {
      "question": "In the lecture's search analogy, what does a key represent?",
      "options": [
        "The user's search request",
        "A descriptor used to match a candidate",
        "The returned content itself",
        "The random seed"
      ],
      "answer": 1,
      "explanation": "The query is the request, a key describes a candidate, and the value carries the information to mix.",
      "optionNotes": [
        "A describes the query.",
        "B is correct.",
        "C describes the value.",
        "D is unrelated to Q/K/V."
      ]
    },
    {
      "question": "Why use multiple attention heads?",
      "options": [
        "To force every head to learn the same pattern",
        "To model different relationships in parallel",
        "To remove token order",
        "To eliminate learned weights"
      ],
      "answer": 1,
      "explanation": "Different heads can specialize in different syntactic, semantic, or positional relationships.",
      "optionNotes": [
        "A defeats the purpose of multiple heads.",
        "B is correct.",
        "C is not the goal.",
        "D is false: every head has learned projections."
      ]
    },
    {
      "question": "What does a causal mask prevent?",
      "options": [
        "Attention to future positions",
        "Attention to all previous positions",
        "Tokenization",
        "Gradient computation"
      ],
      "answer": 0,
      "explanation": "Causal masking blocks later positions so next-token training matches autoregressive generation.",
      "optionNotes": [
        "A is correct.",
        "B is wrong: previous context remains usable.",
        "C occurs before attention.",
        "D remains necessary in training."
      ]
    },
    {
      "question": "Why divide QKᵀ scores by √dₖ before softmax?",
      "options": [
        "To stabilize score magnitude as key dimension grows",
        "To alphabetize tokens",
        "To add labels",
        "To choose top-p automatically"
      ],
      "answer": 0,
      "explanation": "Scaling prevents large dot products from pushing softmax into excessively saturated regions.",
      "optionNotes": [
        "A is correct.",
        "B is unrelated.",
        "C is not part of attention.",
        "D is a separate decoding choice."
      ]
    },
    {
      "question": "What is a logit?",
      "options": [
        "A normalized probability",
        "An unnormalized vocabulary score",
        "A token's character count",
        "A dropout mask"
      ],
      "answer": 1,
      "explanation": "The output projection produces logits; softmax later normalizes them.",
      "optionNotes": [
        "A describes the post-softmax value.",
        "B is correct.",
        "C is unrelated.",
        "D is used for regularization."
      ]
    },
    {
      "question": "What does softmax do to vocabulary logits?",
      "options": [
        "Converts them into a distribution summing to one",
        "Deletes the prompt",
        "Creates token IDs",
        "Normalizes the training dataset"
      ],
      "answer": 0,
      "explanation": "Softmax exponentiates and normalizes scores into probabilities.",
      "optionNotes": [
        "A is correct.",
        "B is false.",
        "C is handled by tokenization.",
        "D is not softmax's role."
      ]
    },
    {
      "question": "What happens when temperature T equals 1?",
      "options": [
        "Logits are unchanged by temperature scaling",
        "All tokens become equally likely",
        "Generation stops",
        "Only one vocabulary item remains"
      ],
      "answer": 0,
      "explanation": "Dividing logits by one leaves them unchanged before softmax.",
      "optionNotes": [
        "A is correct.",
        "B would require equal logits.",
        "C is controlled by stopping rules.",
        "D is not implied by T=1."
      ]
    },
    {
      "question": "What is the usual effect of temperature below 1?",
      "options": [
        "A sharper, more concentrated distribution",
        "A perfectly uniform distribution",
        "A larger vocabulary",
        "Removal of positional embeddings"
      ],
      "answer": 0,
      "explanation": "Lower temperature increases relative logit differences and usually makes sampling more predictable.",
      "optionNotes": [
        "A is correct.",
        "B is the opposite direction.",
        "C is fixed by the tokenizer/model.",
        "D is unrelated."
      ]
    },
    {
      "question": "What is the usual effect of temperature above 1?",
      "options": [
        "A flatter distribution with more diversity",
        "A causal mask",
        "Fewer model parameters",
        "Guaranteed correctness"
      ],
      "answer": 0,
      "explanation": "Higher temperature flattens probabilities, increasing the chance of lower-ranked candidates.",
      "optionNotes": [
        "A is correct.",
        "B is an attention constraint.",
        "C does not change model size.",
        "D is never guaranteed."
      ]
    },
    {
      "question": "What does top-k sampling retain?",
      "options": [
        "Tokens whose cumulative mass reaches p",
        "Exactly the k highest-scoring candidates",
        "Only tokens already in the prompt",
        "Every token without filtering"
      ],
      "answer": 1,
      "explanation": "Top-k truncates the candidate set to the k largest scores/probabilities before sampling.",
      "optionNotes": [
        "A describes top-p.",
        "B is correct.",
        "C is false.",
        "D describes no truncation."
      ]
    },
    {
      "question": "What does top-p sampling retain?",
      "options": [
        "The smallest ranked set whose cumulative probability reaches p",
        "Exactly p tokens",
        "Only punctuation",
        "The lowest-probability candidates"
      ],
      "answer": 0,
      "explanation": "Nucleus or top-p sampling adapts set size to the distribution's cumulative mass.",
      "optionNotes": [
        "A is correct.",
        "B confuses probability with count.",
        "C is false.",
        "D is the opposite of ranked-prefix filtering."
      ]
    },
    {
      "question": "Why is text generation called autoregressive?",
      "options": [
        "Each generated token is appended and conditions the next step",
        "The model predicts all tokens independently",
        "The prompt is discarded after one step",
        "Only regression algorithms can be used"
      ],
      "answer": 0,
      "explanation": "Generation feeds prior outputs back into the context one token at a time.",
      "optionNotes": [
        "A is correct.",
        "B ignores the sequential dependency.",
        "C is false.",
        "D confuses the term with ordinary regression."
      ]
    },
    {
      "question": "What is the purpose of a residual connection?",
      "options": [
        "Add a sublayer's input to its output",
        "Replace all attention heads",
        "Choose the next token",
        "Expand the vocabulary"
      ],
      "answer": 0,
      "explanation": "Residual paths preserve information and improve gradient flow through deep stacks.",
      "optionNotes": [
        "A is correct.",
        "B is false.",
        "C is decoding.",
        "D is determined before training."
      ]
    },
    {
      "question": "What does layer normalization normalize in a transformer?",
      "options": [
        "Features within a token representation",
        "The number of training examples",
        "The vocabulary alphabet",
        "The user's prompt length to zero"
      ],
      "answer": 0,
      "explanation": "Layer normalization standardizes the feature values of an individual representation and then applies learned scale and shift.",
      "optionNotes": [
        "A is correct.",
        "B is dataset balancing.",
        "C is unrelated.",
        "D is false."
      ]
    },
    {
      "question": "Which statement best answers the student's future-token question?",
      "options": [
        "The decoder secretly sees future tokens",
        "It scores the next token from visible context within its context window",
        "It ignores the prompt",
        "It can select only words already used"
      ],
      "answer": 1,
      "explanation": "Causal decoding uses the prompt and earlier tokens, bounded by context length, but cannot inspect not-yet-generated positions.",
      "optionNotes": [
        "A violates causal masking.",
        "B is correct.",
        "C is false because context conditions the distribution.",
        "D is false because candidates come from the full model vocabulary after filtering."
      ]
    }
  ]
}
};
