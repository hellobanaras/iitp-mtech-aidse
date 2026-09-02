// English-only publication unit.
const quizItem = (question, options, answer, explanation, wrongReasons) => ({
  question,
  options,
  answer,
  explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `Correct: ${explanation}`
    : `Incorrect: ${wrongReasons[index] || `“${option}” does not satisfy the concept tested here.`}`)
});

export const ebb6403Lecture20260829 = {
  en: {
    title: "From classical ciphers to perfect secrecy: foundations of symmetric cryptography",
    lede: "This lecture builds symmetric cryptography from first principles. It formalizes a cryptosystem, distinguishes efficient legitimate computation from hard cryptanalysis, studies shift, substitution, transposition, block, and stream ciphers, and uses the one-time pad to motivate attack models, one-way security, and Shannon's stronger notion of perfect secrecy.",
    instructionalInterval: "11:17–1:40:47 source time (2× visible-tab capture; 00:00–11:16 waiting period and 1:40:57–1:44:03 participant-only idle tail excluded)",
    reviewLevel: "View-only recording; beginning/10%/25%/50%/75%/90%/near-end sweep, 2× visible-tab video+audio capture, source-time-restored transcript, 89 sampled frames, slide-candidate evidence, and both teaching boundaries verified",
    coverage: [
      { title: "Cryptography and cryptanalysis", body: "Cryptography constructs protection while cryptanalysis tests or attacks it; strong designs must remain secure even when the algorithm is public and the adversary has substantial computation." },
      { title: "Formal cryptosystem", body: "A scheme is described by plaintext, ciphertext, and key spaces together with encryption and decryption rule families, with correctness requiring decryption to undo encryption for every valid message and key." },
      { title: "Classical cipher progression", body: "Shift, monoalphabetic substitution, polyalphabetic substitution, and transposition ciphers increase the key space or obscure structure, yet language statistics and structural leakage still enable attacks." },
      { title: "Block and stream encryption", body: "Block ciphers transform fixed-size message blocks; stream ciphers combine plaintext with a key-derived stream, making key-stream quality and reuse discipline central to security." },
      { title: "One-time pad", body: "A uniform random key as long as the message, used exactly once, makes every compatible plaintext equally plausible but creates severe key-generation and distribution constraints." },
      { title: "Security models", body: "Ciphertext-only, known-plaintext, chosen-plaintext, and chosen-ciphertext attacks progressively grant the adversary stronger capabilities; a security claim is meaningful only relative to a stated model." },
      { title: "One-wayness and perfect secrecy", body: "Computational difficulty in recovering an entire message is not enough when partial leakage or prior knowledge matters; perfect secrecy requires ciphertext observation not to change the message distribution." }
    ],
    takeaway: "Do not judge encryption by visual scrambling or key-space size alone. Specify the spaces and correctness rule, state the adversary's capabilities, protect key generation and reuse, and ask whether ciphertext leaks any useful information—not merely whether full decryption looks difficult.",
    slideTrail: [
      { time: "00:11:17", title: "Introduction", note: "Cryptography and cryptanalysis are presented as complementary construction and testing disciplines, followed by symmetric and asymmetric families." },
      { time: "00:13:17", title: "Symmetric and public-key overview", note: "A shared secret key is contrasted with per-user public/private key pairs." },
      { time: "00:15:17", title: "Symmetric encryption model", note: "Plaintext, encryption, shared key, ciphertext transmission, and decryption are arranged as a sender-to-receiver pipeline." },
      { time: "00:20:17", title: "Cryptosystem tuple", note: "The lecture formalizes plaintext space P, ciphertext space C, key space K, encryption rules E, and decryption rules D." },
      { time: "00:23:17", title: "Correctness and practical requirements", note: "The rule D_k(E_k(x)) = x is paired with efficient legitimate computation and difficult adversarial recovery." },
      { time: "00:25:17", title: "Cryptanalysis and hard problems", note: "Integer factorization and discrete-log-style inversion illustrate easy forward computation versus hard inversion." },
      { time: "00:32:17", title: "Shift cipher", note: "Letters are encoded as integers modulo 26 and shifted by a secret key." },
      { time: "00:35:17", title: "Shift-cipher example", note: "A worked alphabet mapping demonstrates modular encryption and inverse decryption." },
      { time: "00:41:17", title: "Shift cipher cryptanalysis", note: "The tiny 26-key space makes exhaustive search practical despite correct decryption." },
      { time: "00:42:17", title: "Substitution cipher", note: "A key is a permutation of the alphabet rather than a single shift." },
      { time: "00:46:17", title: "Substitution key space", note: "The 26! possible mappings enlarge brute-force cost but do not remove statistical language structure." },
      { time: "00:48:17", title: "Substitution example", note: "A full plaintext/ciphertext alphabet table illustrates monoalphabetic replacement." },
      { time: "00:50:17", title: "Polyalphabetic substitution", note: "Multiple substitution alphabets reduce the fixed mapping that frequency analysis exploits." },
      { time: "00:53:17", title: "Vigenere construction", note: "A repeated keyword selects position-dependent shifts across the message." },
      { time: "00:57:17", title: "Transposition or permutation cipher", note: "Characters are reordered within blocks; their identities remain unchanged while their positions move." },
      { time: "01:00:17", title: "Transposition example", note: "A row/column arrangement demonstrates how a permutation key scrambles and restores order." },
      { time: "01:04:17", title: "Frequency analysis", note: "Observed ciphertext symbol frequencies are compared with expected language frequencies to infer mappings." },
      { time: "01:07:17", title: "Block cipher", note: "A long plaintext is divided into equal-sized blocks that are transformed under one key." },
      { time: "01:10:17", title: "One-time pad", note: "The slide introduces random key material, message-length keys, and single-use encryption." },
      { time: "01:18:17", title: "Stream cipher", note: "A pseudorandom generator expands a shorter secret into a keystream combined with the message." },
      { time: "01:22:17", title: "Cryptographic security", note: "The discussion shifts from cipher mechanics to explicit adversarial models." },
      { time: "01:25:17", title: "Known-plaintext and chosen-input attacks", note: "The adversary is granted examples or oracle access, making the security experiment progressively stronger." },
      { time: "01:29:17", title: "One-way security", note: "Efficient full-message recovery from ciphertext alone is treated as unlikely under the security definition." },
      { time: "01:34:17", title: "Limitation of one-wayness", note: "The buy/sell stock example shows that recovering only a few decisive bits may defeat the real security goal." },
      { time: "01:39:17", title: "Shannon perfect secrecy", note: "Prior and posterior message probabilities motivate the requirement that ciphertext reveal no information about the message." }
    ],
    summary: [
      {
        title: "1. Security engineering includes both construction and attack",
        sourceRefs: ["00:11:17–00:15:17", "Introduction; Symmetric encryption model"],
        paragraphs: [
          "Cryptography converts information into a protected representation; cryptanalysis searches for weaknesses and can act either as an attacker or as a disciplined tester. A design improves when its attack assumptions are explicit rather than hidden behind a proprietary algorithm.",
          "Symmetric encryption uses one secret key for both directions, while public-key encryption uses paired public and private keys. This lecture focuses on the symmetric case and its key-sharing assumptions."
        ]
      },
      {
        title: "2. A cryptosystem needs spaces, rules, and correctness",
        sourceRefs: ["00:15:17–00:25:17", "Cryptosystem tuple; Correctness and practical requirements"],
        paragraphs: [
          "A cryptosystem is the tuple (P, C, K, E, D): possible plaintexts, ciphertexts, keys, encryption functions, and decryption functions. For every key k and plaintext x, correctness requires D_k(E_k(x)) = x.",
          "Correctness is necessary but not security. Legitimate encryption and decryption should be efficient, while an adversary given ciphertext should face a computationally hard recovery problem. Multiplication versus factorization and modular exponentiation versus discrete logarithm illustrate this asymmetry."
        ]
      },
      {
        title: "3. Shift ciphers are correct but exhaustible",
        sourceRefs: ["00:32:17–00:41:17", "Shift cipher; Shift-cipher example; Cryptanalysis"],
        paragraphs: [
          "Map A through Z to 0 through 25. Encryption is E_k(x) = (x + k) mod 26 and decryption is D_k(y) = (y - k) mod 26. Caesar's cipher is the fixed-key case k = 3.",
          "Only 26 shifts exist, so an attacker can enumerate every key and recognize meaningful plaintext. The lesson is that a reversible formula and a secret parameter do not guarantee a useful security margin."
        ]
      },
      {
        title: "4. Substitution grows the key space but preserves statistics",
        sourceRefs: ["00:42:17–00:56:17", "Substitution cipher; Frequency analysis; Vigenere construction"],
        paragraphs: [
          "A monoalphabetic substitution key is a permutation π of the alphabet: E_π(x) = π(x) and D_π(y) = π⁻¹(y). The nominal key space has 26! permutations, far larger than a shift cipher.",
          "Every plaintext letter still maps to the same ciphertext letter, so language frequencies, repeated patterns, and word structure survive. Polyalphabetic methods such as Vigenere vary the shift by position, but repeated keys can still create exploitable periodicity."
        ]
      },
      {
        title: "5. Transposition hides position, not symbol identity",
        sourceRefs: ["00:56:17–01:06:17", "Transposition example; Frequency analysis"],
        paragraphs: [
          "A transposition cipher partitions text into blocks and permutes character positions. Decryption applies the inverse permutation. Unlike substitution, the ciphertext contains exactly the same symbol counts as the plaintext.",
          "Because frequency information is preserved perfectly, transposition must not be mistaken for modern encryption. It is useful pedagogically because it separates substitution of values from permutation of positions."
        ]
      },
      {
        title: "6. Block and stream ciphers expose different operational risks",
        sourceRefs: ["01:07:17–01:22:17", "Block cipher; One-time pad; Stream cipher"],
        paragraphs: [
          "A block cipher transforms fixed-size input blocks under a key; secure modes are needed to process longer messages safely. A stream cipher combines message symbols with a keystream, often using XOR for binary data.",
          "The one-time pad uses C = M ⊕ K and M = C ⊕ K with K uniform, independent, message-length, and never reused. It achieves an exceptional secrecy property, but securely generating, distributing, storing, and destroying so much key material is usually impractical. A modern stream cipher replaces the truly random pad with a pseudorandom keystream, which makes generator quality and nonce/key reuse critical."
        ]
      },
      {
        title: "7. Security claims depend on the attack model",
        sourceRefs: ["01:22:17–01:29:17", "Cryptographic security; Attack models"],
        paragraphs: [
          "A ciphertext-only adversary sees encrypted messages. A known-plaintext adversary also knows some plaintext/ciphertext pairs. Chosen-plaintext and chosen-ciphertext adversaries can request encryptions or decryptions under controlled conditions, subject to the rules of the security experiment.",
          "A scheme that survives one model may fail a stronger one. Therefore an unqualified statement such as 'the cipher is secure' is incomplete; the adversary's information, oracle access, resources, and success criterion must be stated."
        ]
      },
      {
        title: "8. Perfect secrecy asks whether ciphertext changes belief",
        sourceRefs: ["01:29:17–01:40:47", "One-way security; Limitation of one-wayness; Shannon perfect secrecy"],
        paragraphs: [
          "One-way security says efficient full-message recovery is hard, but a real attacker may only need a sensitive prefix, a single decision bit, or a likely message from a small domain. The buy-versus-sell example shows why partial leakage can be decisive even when most text stays hidden.",
          "Shannon perfect secrecy requires P(M = m | C = c) = P(M = m) for every relevant message and ciphertext: observing c must not update belief about m. This is information-theoretic rather than merely computational, and the one-time pad satisfies it only when its strict key conditions hold."
        ]
      }
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [],
      announcements: [
        { time: "01:39:34", title: "Next-class roadmap", detail: "The instructor said the next class would test Shannon security with examples, then move toward LFSR/stream-cipher material and practical Linux demonstrations of sender-to-receiver encryption." }
      ]
    },
    keyTerms: [
      { term: "Cryptanalysis", definition: "The study or practice of testing and attacking cryptographic systems to recover information or expose weaknesses." },
      { term: "Cryptosystem", definition: "A tuple of plaintext, ciphertext, and key spaces plus encryption and decryption rule families." },
      { term: "Correctness", definition: "For every valid key and message, decrypting the encryption returns the original message: D_k(E_k(x)) = x." },
      { term: "Monoalphabetic substitution", definition: "A fixed alphabet permutation maps each plaintext symbol to one ciphertext symbol." },
      { term: "Frequency analysis", definition: "An attack that compares ciphertext symbol statistics and patterns with expected language statistics." },
      { term: "Transposition cipher", definition: "A cipher that permutes symbol positions without changing the symbols themselves." },
      { term: "One-time pad", definition: "XOR encryption using a uniformly random, independent, message-length key that is never reused." },
      { term: "Attack model", definition: "The adversary's permitted observations and interactions, such as ciphertext-only or chosen-plaintext access." },
      { term: "Perfect secrecy", definition: "A property where observing ciphertext does not change the probability distribution of the plaintext." }
    ],
    insights: [
      { label: "Threat modelling", title: "The attacker interface is part of the algorithm specification", body: "A cipher API that exposes encryption, decryption errors, timing, or repeated nonces may create an attack surface absent from the mathematical primitive. Model the deployed interface, not just the function on a slide." },
      { label: "Information leakage", title: "Partial recovery can be a complete business failure", body: "The buy/sell example generalizes to medical flags, approval decisions, and authentication bits. Security evaluation should measure the sensitive predicate an attacker can infer, not only exact-message recovery." },
      { label: "Key management", title: "The one-time pad moves difficulty into logistics", body: "Perfect secrecy does not eliminate operational risk. It requires a truly random pad, a secure delivery channel, exact synchronization, storage at both endpoints, and guaranteed non-reuse—often a harder system than the original communication problem." },
      { label: "Modern practice", title: "A historical cipher is a teaching model, not a deployment option", body: "Shift, substitution, transposition, Vigenere, and RC4 expose reusable ideas about key spaces, statistics, and keystream bias, but modern systems should use reviewed authenticated-encryption constructions and current standards." },
      { label: "Evaluation", title: "Large key space is not a security proof", body: "The 26! substitution space appears enormous, yet language redundancy enables attacks far cheaper than exhaustive search. Security depends on the best attack against the structure, not the nominal number of keys." },
      { label: "Connection", title: "Perfect secrecy is a zero-information-gain statement", body: "The equality P(M=m | C=c)=P(M=m) links cryptography to Bayesian inference and mutual information: ciphertext is harmless only when it leaves an observer's posterior belief unchanged." }
    ],
    resources: [
      { title: "NIST Cryptographic Standards and Guidelines", url: "https://csrc.nist.gov/Projects/cryptographic-standards-and-guidelines", note: "Primary index for approved primitives, block-cipher techniques, random-bit generation, key management, validation, and cryptographic transitions." },
      { title: "NIST definition of symmetric cryptography", url: "https://csrc.nist.gov/glossary/term/symmetric_cryptography", note: "Concise standards-backed terminology for algorithms that use the same secret key for an operation and its reversal." },
      { title: "NIST SP 800-38A: Block Cipher Modes of Operation", url: "https://csrc.nist.gov/pubs/sp/800/38/a/final", note: "Follow-up for how fixed-size block-cipher primitives are composed across longer data." },
      { title: "RFC 7465: Prohibiting RC4 Cipher Suites", url: "https://www.rfc-editor.org/info/rfc7465/", note: "Standards-track reminder that RC4 is historically useful for study but must not be negotiated in TLS." },
      { title: "RFC 9325: Secure Use of TLS and DTLS", url: "https://www.rfc-editor.org/rfc/rfc9325.html", note: "Current operational recommendations connecting cipher design to safe protocol configuration." },
      { title: "CrypTool Portal", url: "https://www.cryptool.org/en/", note: "Interactive educational tools for exploring classical and modern cryptography without treating historical ciphers as production controls." }
    ],
    quiz: [
      quizItem("What is the constructive role of cryptography?", ["Transform information so authorized parties can recover it while unauthorized parties cannot", "Guarantee every program has no bugs", "Compress all files losslessly", "Remove the need for keys"], 0, "Cryptography designs mechanisms that protect information while preserving authorized recovery or verification.", {1:"Software correctness is broader than cryptography.",2:"Compression is not the security objective.",3:"Most cryptographic systems depend critically on keys."}),
      quizItem("What useful role can cryptanalysis play besides malicious attack?", ["Test a design against possible attack strategies", "Generate database indexes", "Increase network bandwidth", "Replace decryption for authorized users"], 0, "Cryptanalysis can serve as disciplined adversarial testing that reveals whether a design withstands attacks.", {1:"Indexing is unrelated.",2:"Bandwidth is a network property.",3:"Authorized users still need the intended recovery operation."}),
      quizItem("Which tuple formalizes the cryptosystem described in the lecture?", ["(P, C, K, E, D)", "(CPU, RAM, disk, bus, cache)", "(precision, recall, F1, AUC, loss)", "(host, port, route, packet, frame)"], 0, "The tuple contains plaintext, ciphertext, key, encryption-rule, and decryption-rule spaces.", {1:"These are computer components.",2:"These are evaluation metrics.",3:"These are networking concepts."}),
      quizItem("Which equation states cryptographic correctness?", ["D_k(E_k(x)) = x", "E_k(E_k(x)) = 0", "C = P for every key", "K = P × C"], 0, "Decrypting a valid encryption under the corresponding key must return the original plaintext.", {1:"Encrypting twice need not yield zero.",2:"Ciphertext and plaintext need not be identical.",3:"Key space is not defined as that product."}),
      quizItem("Why were factorization and discrete-log-style problems discussed?", ["They illustrate easy forward computation with difficult inversion", "They make every cipher perfectly secret", "They eliminate key distribution", "They are forms of compression"], 0, "They motivate trapdoor or one-way-style computational asymmetry between legitimate work and attack.", {1:"Computational hardness is not perfect secrecy.",2:"Keys still require management.",3:"The example concerns inversion difficulty, not compression."}),
      quizItem("How does a shift cipher encrypt a symbol x?", ["E_k(x) = (x + k) mod 26", "E_k(x) = x/k without remainder", "E_k(x) = x for every key", "E_k(x) = 26k only"], 0, "A key selects a cyclic alphabet shift represented by modular addition.", {1:"Division is not the cipher rule.",2:"Identity mapping provides no shift.",3:"The result must depend on x."}),
      quizItem("Why is a shift cipher easy to break?", ["Its key space has only 26 candidate shifts", "It uses too many independent alphabets", "Its ciphertext is always empty", "Decryption is mathematically impossible"], 0, "An attacker can enumerate all shifts and recognize plausible plaintext.", {1:"A basic shift uses one alphabet mapping.",2:"It produces ordinary ciphertext symbols.",3:"The legitimate receiver decrypts by inverse shifting."}),
      quizItem("What is the key in a monoalphabetic substitution cipher?", ["A permutation of the alphabet", "A packet timestamp", "A floating-point learning rate", "A database primary key"], 0, "The permutation defines a one-to-one plaintext-to-ciphertext symbol mapping.", {1:"Timestamps do not define the alphabet mapping.",2:"Learning rates belong to optimization.",3:"Database keys identify rows."}),
      quizItem("Why does a 26! key space not by itself secure substitution?", ["Language frequencies and patterns survive the fixed mapping", "Every key produces the same plaintext", "The cipher uses no key", "The key is publicly transmitted by definition"], 0, "Statistical structure enables attacks much cheaper than exhaustive enumeration.", {1:"Different keys create different mappings.",2:"A substitution cipher does use a key.",3:"The definition does not require public key transmission."}),
      quizItem("What distinguishes a polyalphabetic cipher from a monoalphabetic one?", ["The mapping can change with position", "It never uses letters", "It is automatically authenticated", "It has no decryption rule"], 0, "Multiple alphabets or position-dependent shifts weaken the single fixed frequency mapping.", {1:"It still operates on symbols.",2:"Classical confidentiality does not supply authentication.",3:"A usable cipher requires inverse recovery."}),
      quizItem("What does a transposition cipher change?", ["Symbol positions", "The alphabet size", "Every symbol's identity", "The network protocol"], 0, "Transposition reorders characters within blocks without substituting their values.", {1:"The symbol set can stay the same.",2:"Symbol identities are preserved.",3:"The operation is not a network protocol."}),
      quizItem("Why is raw symbol frequency preserved by transposition?", ["The same symbols remain, only their order changes", "The key deletes common letters", "The cipher converts text to audio", "The plaintext is never used"], 0, "A permutation changes positions but not the multiset of characters.", {1:"Deletion is not transposition.",2:"Media conversion is unrelated.",3:"The plaintext is the input being permuted."}),
      quizItem("What does a block cipher process?", ["Fixed-size blocks under a key", "Only one alphabet letter forever", "Unencrypted routing tables", "Keys without any data"], 0, "The primitive maps fixed-size input blocks to output blocks under a secret key.", {1:"Modern block sizes contain many bits.",2:"Routing tables are unrelated.",3:"A cipher operates on data as well as a key."}),
      quizItem("What does a binary stream cipher commonly combine with plaintext?", ["A keystream using XOR", "A database join", "A CSS selector", "A video codec"], 0, "Stream encryption commonly XORs each plaintext unit with a key-derived stream unit.", {1:"Joins are database operations.",2:"Selectors style documents.",3:"Codecs encode media."}),
      quizItem("Which condition is essential for one-time-pad secrecy?", ["The random key is never reused", "The key is shorter than every message", "The key is predictable", "The ciphertext is kept secret from the receiver"], 0, "Reusing a pad cancels the repeated keystream under XOR and leaks relationships between messages.", {1:"A true pad must be as long as the message.",2:"Predictability destroys the guarantee.",3:"The intended receiver must obtain ciphertext and possess the key."}),
      quizItem("What is the main practical burden of a one-time pad?", ["Generating, distributing, storing, synchronizing, and destroying message-length random keys", "Computing modulo 26", "Rendering ciphertext in a browser", "Training a neural network"], 0, "The information-theoretic benefit requires unusually demanding key logistics.", {1:"Modulo 26 belongs to shift ciphers.",2:"Rendering is not the primary security burden.",3:"No neural training is required."}),
      quizItem("What does a ciphertext-only attacker receive?", ["One or more ciphertexts without matching plaintexts", "The secret key", "Unlimited decryption of the challenge", "Physical possession of both endpoints"], 0, "This is the weakest named model in the lecture: encrypted observations without known message pairs.", {1:"Knowing the key defeats the intended secrecy experiment.",2:"Unlimited challenge decryption is a stronger and usually disallowed capability.",3:"Endpoint capture is outside the stated model."}),
      quizItem("What additional information defines a known-plaintext attack?", ["Some matching plaintext/ciphertext pairs", "The source code editor theme", "A larger monitor", "The receiver's clock zone"], 0, "Known examples can reveal mappings or structure even when the key remains secret.", {1:"UI appearance is irrelevant.",2:"Display size does not change cryptanalysis.",3:"Time zone does not define the attack."}),
      quizItem("What capability characterizes a chosen-plaintext attack?", ["The attacker can obtain encryptions of selected plaintexts", "The attacker must guess without observations", "The attacker owns no input", "The cipher has no encryption function"], 0, "Chosen inputs let the adversary probe how the encryption mechanism responds.", {1:"That is weaker than the chosen-plaintext model.",2:"Choosing inputs is precisely the added capability.",3:"The oracle applies an encryption function."}),
      quizItem("Why must a security statement name its attack model?", ["A scheme may withstand one adversary capability but fail a stronger one", "All models are identical", "Attack models replace keys", "The model determines font size"], 0, "Security is relative to observations, oracle access, computational resources, and success criteria.", {1:"The models grant different information and access.",2:"Keys remain part of the scheme.",3:"Presentation styling is unrelated."}),
      quizItem("What does one-way security primarily make difficult?", ["Efficient recovery of the whole message from ciphertext without the key", "Authorized decryption with the key", "Creation of any ciphertext", "Counting the number of users"], 0, "The lecture framed one-wayness as computational difficulty of full plaintext recovery without the key.", {1:"Legitimate decryption should be efficient.",2:"Encryption should also be efficient.",3:"User counting is not the security property."}),
      quizItem("Why can one-wayness still be insufficient?", ["A few leaked bits or prior knowledge may reveal the sensitive decision", "It guarantees too much key reuse", "It prevents all ciphertext creation", "It always implies perfect secrecy"], 0, "An attacker may succeed without reconstructing the entire plaintext, as the buy/sell example demonstrates.", {1:"Key reuse is a separate operational error.",2:"Encryption must still create ciphertext.",3:"Computational one-wayness is weaker than information-theoretic perfect secrecy."}),
      quizItem("Which equation expresses perfect secrecy?", ["P(M=m | C=c) = P(M=m)", "P(M=m | C=c) = 1 for every m", "C = M for all keys", "P(K=k) = 0"], 0, "Ciphertext observation must leave the observer's message probability unchanged.", {1:"Every message cannot simultaneously have posterior probability one.",2:"Exposing plaintext is not secrecy.",3:"A usable key must have nonzero probability."}),
      quizItem("What kind of guarantee is Shannon perfect secrecy?", ["Information-theoretic", "A screen-resolution guarantee", "A database-normalization rule", "A network-latency target"], 0, "It does not depend on limiting the attacker's computing power; ciphertext carries no information about the message distribution.", {1:"Display properties are unrelated.",2:"Normalization concerns schemas.",3:"Latency is not a secrecy measure."}),
      quizItem("How should RC4 be treated in a modern study note?", ["As historical stream-cipher material, not a permitted TLS choice", "As the mandatory cipher for every new TLS system", "As a replacement for key management", "As a perfectly secret one-time pad"], 0, "RFC 7465 requires TLS clients and servers not to negotiate RC4 because of cryptographic weaknesses.", {1:"Current standards prohibit that use.",2:"A cipher cannot replace lifecycle controls for keys.",3:"RC4 is pseudorandom stream encryption, not a truly random single-use pad."})
    ]
  }
};
