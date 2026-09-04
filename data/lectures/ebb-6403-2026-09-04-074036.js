// English-only publication unit.
const quizItem = (question, correct, explanation, wrong) => ({
  question,
  options: [correct, wrong[0], wrong[1], wrong[2]],
  answer: 0,
  explanation,
  optionNotes: [`Correct: ${explanation}`, `Incorrect: ${wrong[0]} is not the property tested here.`, `Incorrect: ${wrong[1]} is unrelated to this construction.`, `Incorrect: ${wrong[2]} confuses a different cryptographic idea.`]
});

const quiz = [
  quizItem("Why is a pseudorandom generator used instead of a one-time pad in practice?", "A short seed can expand into a long keystream", "A generator trades the one-time pad's information-theoretic guarantee for practical key logistics.", ["It removes the need for a secret", "It makes every output plaintext", "It stores the whole movie in the key"]),
  quizItem("What does LFSR stand for?", "Linear Feedback Shift Register", "An LFSR shifts register bits and computes feedback with a linear operation such as XOR.", ["Long Frequency Security Router", "Layered File Storage Record", "Low-Fidelity Signal Reader"]),
  quizItem("How does a basic LFSR produce a new bit?", "It XORs selected register bits and feeds the result back", "The feedback polynomial selects taps whose XOR becomes the incoming bit.", ["It hashes the entire network", "It sorts bytes alphabetically", "It encrypts with RSA"]),
  quizItem("What is a reconstruction attack on a single LFSR?", "Recovering the feedback rule and seed from enough output bits", "Linear equations over observed output bits can reveal the register structure and initial state.", ["Deleting the register", "Guessing a user's password from email", "Measuring screen brightness"]),
  quizItem("Why are multiple LFSRs combined in historical systems?", "To make direct reconstruction harder than for one register", "Combining registers increases the structure an attacker must infer, although historical designs were still broken.", ["To reduce the key to zero", "To eliminate all output", "To convert the system into a public key"]),
  quizItem("What was the DVD content-scrambling example intended to generate?", "A keystream XORed with movie bytes", "The LFSR outputs were combined into pseudorandom bytes for stream-style encryption.", ["A database index", "A lossless video codec", "A digital signature only"]),
  quizItem("What is the key role in RC4?", "It initializes the state through the key-scheduling algorithm", "RC4 first expands the key into T and uses it to shuffle the 256-byte state vector S.", ["It is transmitted in every ciphertext byte", "It replaces the state vector", "It is always a public certificate"]),
  quizItem("How large is RC4's state vector?", "256 elements, each holding one byte", "RC4 maintains S[0] through S[255], a permutation of byte values.", ["16 bits total", "Three floating-point numbers", "One element per character in the message"]),
  quizItem("What does RC4's key-scheduling algorithm do?", "It repeatedly swaps entries to permute S using the key-derived T vector", "The KSA turns the ordered state into a key-dependent permutation.", ["It compresses the plaintext", "It signs the server certificate", "It discards the secret key"]),
  quizItem("What is the RC4 pseudo-random generation algorithm's loop for?", "Generating successive keystream bytes", "The PRGA updates i and j, swaps state entries, and selects one state byte as output.", ["Generating usernames", "Choosing a block size", "Verifying a hash certificate"]),
  quizItem("How is a plaintext byte encrypted by RC4?", "It is XORed with the corresponding keystream byte", "Byte-wise XOR combines the message and generated stream; repeating XOR with the same stream decrypts.", ["It is added without reduction", "It is replaced by its length", "It is sent unchanged"]),
  quizItem("Why can the same RC4 key decrypt the ciphertext?", "XOR is its own inverse when the same keystream is regenerated", "The receiver recreates the identical keystream from the shared key and XORs it with ciphertext.", ["RC4 stores the plaintext", "The server broadcasts the key", "The ciphertext contains a copy of the message"]),
  quizItem("What does the RC4 state update use for its indices?", "i and j updated modulo 256", "Both indices wrap in the 256-element state, keeping updates byte-oriented.", ["Negative array positions", "A random URL", "The plaintext length only"]),
  quizItem("What weakness was observed in early RC4 output?", "Biases in the initial keystream bytes", "The first bytes are statistically biased, so discarding an initial prefix was once proposed as mitigation.", ["All bytes are always zero", "The key is never used", "RC4 is an information-theoretic one-time pad"]),
  quizItem("Why is RC4 no longer recommended for TLS?", "Its biases and attacks undermine confidentiality", "Modern standards prohibit RC4 cipher suites because practical attacks exploit its weaknesses.", ["It cannot process bytes", "It requires no key", "It is slower than handwriting"]),
  quizItem("What is the difference between a true one-time pad and RC4?", "A one-time pad uses uniform random message-length key material", "RC4 expands a short deterministic key, while a one-time pad requires fresh random material as long as the message.", ["RC4 uses no XOR", "A one-time pad reuses keys by definition", "They have identical secrecy guarantees"]),
  quizItem("What does a stream cipher's keystream need to avoid?", "Predictable patterns and unsafe reuse", "Predictability or reuse can let an attacker infer relationships between plaintexts.", ["All arithmetic", "Any secret key", "Byte processing"]),
  quizItem("What is the effect of XORing two ciphertexts made with the same keystream?", "It reveals the XOR of the two plaintexts", "C1 XOR C2 cancels the reused stream and leaves M1 XOR M2.", ["It produces a fresh random pad", "It proves perfect secrecy", "It recovers the key automatically in every case"]),
  quizItem("Why is a small seed attractive in an engineering design?", "It reduces key distribution and storage costs", "The seed is easier to protect than a message-length random pad, though generator security becomes critical.", ["It guarantees no attacks", "It makes the ciphertext public", "It removes synchronization"]),
  quizItem("What was the RC4 state-vector initialization order?", "Start with S[j]=j and then apply key-dependent swaps", "The KSA begins from the identity permutation and shuffles it using T and a running j.", ["Start with all S entries equal", "Sort plaintext words", "Use only the final byte"]),
  quizItem("What does 'byte-oriented' mean in the RC4 lecture?", "The algorithm processes and emits 8-bit units", "RC4's state entries and keystream outputs are bytes rather than individual alphabet symbols.", ["Only images can be encrypted", "It operates only on 64-bit blocks", "It cannot use XOR"]),
  quizItem("What is a practical reason historical RC4 was popular?", "Its software implementation was fast and simple", "The small array and simple byte operations made RC4 attractive before its weaknesses were fully understood.", ["It provided perfect secrecy", "It needed no key management", "It was mandated forever by TLS"]),
  quizItem("What should a security claim specify?", "The adversary's observations, capabilities, and success criterion", "Security is relative to an attack model such as ciphertext-only, known-plaintext, or chosen-plaintext access.", ["Only the font used on slides", "The lecturer's browser", "The number of lecture participants"]),
  quizItem("What is the safest takeaway for modern deployment?", "Use current reviewed authenticated-encryption standards instead of RC4", "RC4 is useful historical material, while modern systems should follow current standards and safe nonce/key practices.", ["Use RC4 for every TLS connection", "Reuse one stream forever", "Publish the secret key"]),
  quizItem("What must be synchronized for a stream-cipher receiver to decrypt correctly?", "The key and the keystream state", "The receiver must regenerate the same keystream position-by-position before XORing ciphertext.", ["Only the ciphertext length", "The slide number", "A public webpage title"])
];

export const ebb6403Lecture20260904074036 = {
  en: {
    title: "LFSR stream ciphers and RC4: key scheduling, keystream generation, and bias",
    lede: "This lecture moves from the one-time pad to practical pseudorandom keystreams. It builds linear feedback shift registers, explains reconstruction attacks and historical multi-register systems, then works through RC4's 256-byte state, key-scheduling algorithm, pseudo-random generation loop, XOR encryption, and early-byte biases.",
    instructionalInterval: "00:00:36–00:57:21 source time (2× visible-tab capture; participant/setup lead-in and 00:57:24–00:59:48 idle tail excluded)",
    reviewLevel: "View-only recording; seven-point visible Stream sweep, 2× Lecture Atlas Companion Audio + visible-tab capture, source-time-restored transcript, 57 sampled frames, and both sustained-teaching boundaries verified",
    coverage: [
      { title: "From one-time pads to pseudorandom streams", body: "A short secret seed can drive a deterministic generator that produces a long byte stream, making stream encryption practical while shifting security onto the generator." },
      { title: "LFSR construction and feedback", body: "A register shifts on each clock, emits a bit, and XORs selected taps to compute the next bit; a small seed can therefore drive a long sequence." },
      { title: "Reconstruction and historical combinations", body: "Enough observed LFSR output yields linear equations for the feedback circuit and seed, motivating combined registers such as DVD and GSM-era designs." },
      { title: "RC4 state and key scheduling", body: "RC4 uses a 256-byte state permutation S and a key-derived T vector; its key-scheduling algorithm performs repeated modulo-256 swaps." },
      { title: "RC4 pseudo-random generation", body: "The PRGA updates i and j, swaps S entries, indexes the state, and emits one keystream byte on every loop iteration." },
      { title: "Byte-wise XOR encryption", body: "Each message byte is XORed with a generated keystream byte; regenerating the same stream with the shared key enables decryption." },
      { title: "Biases and the end of RC4 deployment", body: "Early RC4 bytes have statistical biases and later attacks made RC4 unsuitable for TLS; current designs use reviewed authenticated-encryption standards." }
    ],
    takeaway: "A compact key is useful only when the generator resists prediction, reconstruction, bias exploitation, and reuse mistakes. Understand the state update and attack surface before trusting a stream cipher.",
    slideTrail: [
      { time: "00:00:36", title: "Cryptographic Security – One-way Security", note: "The lecture reconnects practical stream encryption to the limitations of one-way security and the one-time pad." },
      { time: "00:06:29", title: "LFSR based stream cipher", note: "A 4-bit register, XOR feedback taps, clocking, and a small seed producing a long stream are shown." },
      { time: "00:15:18", title: "LFSR reconstruction attack", note: "Observed output bits become linear equations that can expose the feedback circuit and initial state." },
      { time: "00:30:00", title: "Historical stream-cipher constructions", note: "The sampled frame continues the construction discussion and explains why multiple registers were combined." },
      { time: "00:44:42", title: "RC4 Key Initialization", note: "A 256-element state vector, 128-bit key, T-vector repetition, and key-scheduling swaps are defined." },
      { time: "00:53:34", title: "RC4 Key Initialization", note: "The shuffled state and modulo-256 update logic lead into keystream generation." },
      { time: "00:56:55", title: "RC4 Encryption", note: "The PRGA's i/j updates, swap, state lookup, and XOR with a message byte are illustrated." },
      { time: "00:57:21", title: "Final instructional RC4 frame", note: "RC4 encryption remains visible at the verified end; participant-only content follows at approximately 00:57:24." }
    ],
    summary: [
      { title: "1. Practical streams approximate the one-time pad", sourceRefs: ["00:00:36–00:06:29", "Cryptographic Security; LFSR based stream cipher"], paragraphs: ["A one-time pad needs fresh random key material at least as long as the message. A pseudorandom generator instead expands a compact seed into a long stream, allowing byte-wise XOR for large messages.", "The practical benefit is logistical, not magical: deterministic output must remain unpredictable to an attacker and must never be reused in a way that exposes relationships between plaintexts."] },
      { title: "2. LFSRs expose the structure of linear feedback", sourceRefs: ["00:06:29–00:15:18", "LFSR based stream cipher; reconstruction attack"], paragraphs: ["An n-bit LFSR shifts its contents on each clock, emits a selected bit, and computes the incoming bit by XORing tapped positions. A small seed can produce many output bits.", "Because the recurrence is linear, an attacker who observes enough consecutive bits can write equations for the unknown taps and initial state. This is the reconstruction attack that defeats a single LFSR as a secure cipher."] },
      { title: "3. Combining registers did not rescue legacy designs", sourceRefs: ["00:15:18–00:30:00", "DVD and GSM-era constructions"], paragraphs: ["Historical content-scrambling and mobile systems combined registers of different lengths to make direct reconstruction harder. The lecture uses DVD and GSM-style examples to show how keys initialize multiple registers and how their outputs are combined.", "The broader lesson is that adding components is not a proof of security: correlations, short periods, known structure, and implementation details can still create attacks. The cited systems were ultimately broken and are not modern recommendations."] },
      { title: "4. RC4 turns a secret key into a shuffled byte state", sourceRefs: ["00:44:42–00:53:34", "RC4 Key Initialization"], paragraphs: ["RC4 stores a permutation in S[0..255], with one byte per entry. A 128-bit key is 16 bytes; the T vector repeats those key bytes across all 256 positions.", "The key-scheduling algorithm starts with S[j]=j, keeps a running j modulo 256, and swaps S[i] with S[j]. The result is a key-dependent state permutation; T is no longer needed after scheduling."] },
      { title: "5. The PRGA emits one keystream byte per iteration", sourceRefs: ["00:53:34–00:56:55", "RC4 key scheduling and stream generation"], paragraphs: ["The pseudo-random generation algorithm maintains i and j. It increments i modulo 256, adds S[i] into j, swaps S[i] and S[j], then indexes S[(S[i]+S[j]) mod 256] to emit a byte.", "The loop can continue for as many bytes as a message needs. The receiver repeats the same state initialization and updates, so identical keystream bytes can be recreated from the shared key."] },
      { title: "6. XOR makes byte-wise encryption reversible", sourceRefs: ["00:56:55–00:57:21", "RC4 Encryption"], paragraphs: ["For each message byte M, RC4 computes C = M XOR K, where K is the next keystream byte. XORing C with the same K returns M.", "This simplicity makes key/nonce discipline essential. Reusing a keystream cancels the stream when ciphertexts are XORed, exposing the XOR of the underlying messages rather than protecting them independently."] },
      { title: "7. Biases changed the deployment verdict", sourceRefs: ["00:56:55–00:57:21", "RC4 bias discussion"], paragraphs: ["The lecture notes that early RC4 output bytes are biased: some values occur more often than a uniform stream would predict. Prefix-discard ideas do not repair the broader family of practical attacks and misuse risks.", "RC4's historical speed cannot outweigh these weaknesses. TLS standards prohibit RC4 cipher suites; modern applications should use current authenticated-encryption constructions with explicit key and nonce management."] }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [], announcements: [] },
    keyTerms: [
      { term: "Pseudorandom generator", definition: "A deterministic algorithm that expands a short seed into a long sequence intended to look unpredictable." },
      { term: "LFSR", definition: "A shift register whose incoming bit is a linear combination, commonly XOR, of selected taps." },
      { term: "Reconstruction attack", definition: "Recovering a linear feedback rule and initial state from enough observed output bits." },
      { term: "RC4 KSA", definition: "The key-scheduling algorithm that uses a key-derived T vector to shuffle the 256-byte state S." },
      { term: "RC4 PRGA", definition: "The state-update loop that emits successive keystream bytes after scheduling." },
      { term: "Keystream reuse", definition: "Using identical stream bytes for multiple messages, allowing ciphertext XOR to expose plaintext relationships." },
      { term: "Bias", definition: "A statistical deviation from uniform keystream output that can support inference attacks." }
    ],
    insights: [
      { label: "Design", title: "State structure is part of the threat model", body: "A stream cipher is more than an XOR line: state size, update rule, output function, initialization, and reuse policy jointly determine the attack surface." },
      { label: "Inference", title: "Linear elegance can become an attack oracle", body: "The same linear recurrence that makes an LFSR simple to implement also makes observed output useful for solving its unknown parameters." },
      { label: "Operations", title: "Key size does not prevent stream reuse", body: "Even a 128-bit key can fail if the same state/keystream is reused. Operational uniqueness and synchronization are separate security requirements." },
      { label: "Standards", title: "Historical success is not current approval", body: "RC4's speed and long deployment history explain its importance for study, while its documented biases explain why modern standards prohibit it." },
      { label: "Systems", title: "Prefix trimming is not a security proof", body: "Discarding early biased bytes can reduce one symptom, but it cannot substitute for a reviewed construction and a complete security analysis." }
    ],
    resources: [
      { title: "RFC 7465: Prohibiting RC4 Cipher Suites", url: "https://www.rfc-editor.org/rfc/rfc7465.html", note: "Standards-track prohibition of RC4 in TLS." },
      { title: "NIST SP 800-38D: GCM", url: "https://csrc.nist.gov/pubs/sp/800/38/d/final", note: "Authenticated encryption guidance for a modern alternative family." },
      { title: "NIST SP 800-57 Part 1", url: "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final", note: "Key-management practices that connect stream safety to lifecycle controls." },
      { title: "RFC 8439: ChaCha20 and Poly1305", url: "https://www.rfc-editor.org/rfc/rfc8439.html", note: "A modern stream-oriented authenticated-encryption construction." },
      { title: "NIST Random Bit Generation", url: "https://csrc.nist.gov/projects/random-bit-generation", note: "Primary references for constructing and validating random and deterministic generators." }
    ],
    quiz
  }
};
