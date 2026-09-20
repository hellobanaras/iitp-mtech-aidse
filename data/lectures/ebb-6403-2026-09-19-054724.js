// English-only publication unit.
const quizItem = (question, correct, explanation, wrong) => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
  optionNotes: [`Correct: ${explanation}`, `Incorrect: ${wrong[0]} is not the property tested here.`, `Incorrect: ${wrong[1]} belongs to a different construction.`, `Incorrect: ${wrong[2]} reverses or confuses the lecture's idea.`]
});

const quiz = [
  quizItem("What must happen before a message can be encrypted with the elliptic-curve construction shown?", "Encode the message as a point on the curve", "The lecture treats the plaintext as a curve point so that point addition can operate on it.", ["Publish the private scalar", "Hash the message into a participant name", "Factor the curve modulus"]),
  quizItem("What are the two ECC ciphertext components in the lecture's notation?", "y1 = kα and y2 = X + kβ", "The sender uses a fresh scalar k to form a public curve point and a masked message point.", ["C = M^e and M = C^d", "H(X) and H(K)", "p and q only"]),
  quizItem("How does the receiver recover X in the ECC example?", "Compute y2 − d·y1", "Since β=d·α, subtracting d·(kα) removes the shared mask kβ from y2.", ["Divide y1 by y2", "Factor the curve equation", "Apply an RSA public exponent"]),
  quizItem("How is the inverse of a curve point (x, y) represented in the lecture's small-field example?", "(x, −y) modulo the field", "The x-coordinate is retained and the y-coordinate is negated modulo the curve field.", ["(−x, y) only", "(y, x)", "The point is deleted"]),
  quizItem("What makes the ECC secret scalar difficult to recover from a public point?", "The elliptic-curve discrete-log-style reverse problem", "Forward scalar multiplication is easy to repeat, while recovering the multiplier from the input and result is intended to be hard.", ["The curve has no points", "The message is always one byte", "Hash output is reversible"]),
  quizItem("What hard problem does the lecture associate with RSA?", "Factoring a large modulus into its prime factors", "RSA security is tied to the difficulty of recovering p and q from a large n.", ["Finding a participant avatar", "Reflecting a point across the x-axis", "Changing one bit in a message"]),
  quizItem("What key-size comparison does the instructor use to motivate ECC?", "About 15,360-bit RSA versus 512-bit ECC for the stated security target", "The lecture presents ECC as achieving comparable security with a much shorter key in the cited comparison.", ["512-bit RSA versus 15,360-bit ECC", "Both always require 32 bits", "ECC requires no key"]),
  quizItem("What does the RSA timing or side-channel attack observe?", "Execution time or computational-energy patterns", "The attacker correlates different operation patterns with bits of the secret exponent.", ["Only the public modulus", "The plaintext's English grammar", "The curve's point at infinity"]),
  quizItem("In square-and-multiply, what extra work is associated with a one bit?", "A square and a multiply", "The lecture contrasts the two-operation path for one with the square-only path for zero.", ["No computation", "A point reflection only", "A hash collision search"]),
  quizItem("What does the square-and-multiply path do for a zero bit in the lecture's explanation?", "It performs the square without the multiply", "That difference in work can create a measurable side-channel signal.", ["It publishes the private key", "It computes an HMAC", "It changes the curve modulus"]),
  quizItem("What is the main leakage concern in the RSA side-channel example?", "Secret exponent bits can influence observable computation", "Different branches and modular reductions can leave timing or energy traces related to the private key.", ["The public key becomes a hash", "The curve becomes singular", "The message becomes longer"]),
  quizItem("What does authentication verify in the Alice-to-Bob example?", "That the message came from the claimed source", "Authentication is about validating the owner or origin of the packet.", ["That the message is confidential", "That the digest has no bits", "That RSA used two ciphertext points"]),
  quizItem("What does integrity verify?", "That the packet was not modified in transit", "Bob should be able to detect a change such as 'dawn' becoming 'dusk'.", ["That everyone can read the message", "That the sender's private key is short", "That the point is at infinity"]),
  quizItem("In the unkeyed-hash design described, what does Alice send with the message?", "A message digest computed as H(X)", "Bob recomputes H on the received message and compares it with the digest supplied through the protected path.", ["The private RSA factor q", "The ECC random scalar k in clear text", "Only the message length"]),
  quizItem("Why is the message digest sent through a protected channel in the unkeyed example?", "An attacker must not be able to replace both the message and its trusted digest", "If the digest remains trustworthy, Bob can detect that the message hash changed.", ["The digest decrypts the message", "The digest chooses the ECC generator", "The digest contains the lecture recording"]),
  quizItem("What additional ingredient does the keyed-hash example use?", "A secret key shared by Alice and Bob", "The shared key prevents Mallory from recomputing a valid authentication value after changing the message.", ["A public participant list", "A second curve equation", "An RSA factor sent to Mallory"]),
  quizItem("What is the usual name for the keyed message-authentication value discussed?", "A message authentication code", "The keyed construction supports both source authentication and message-integrity checking.", ["A point at infinity", "A public exponent", "A waiting-room marker"]),
  quizItem("What size relationship should a useful cryptographic hash have to the message?", "A fixed digest that is much shorter than the message but not trivially small", "The lecture emphasizes a compact fixed-length digest rather than a digest as large as a multi-gigabyte message.", ["Exactly the same size as the message", "One bit for every possible message", "No output at all"]),
  quizItem("What does one-wayness mean for the hash function?", "The digest should not reveal a practical way to recover the original message", "The lecture lists one-wayness as a security property of the hash design.", ["The hash must be decrypted with RSA", "The message must be a curve point", "The digest must be reversible by anyone"]),
  quizItem("What collision goal is attributed to Mallory?", "Find X′ different from X with the same hash value", "A collision would let a changed message appear to have the trusted digest of the original.", ["Recover Alice's private ECC scalar from a slide", "Make every digest unique by adding a dot", "Factor the SHA-256 output"]),
  quizItem("What is the avalanche effect?", "A small message change produces a substantially different digest", "The lecture illustrates that adding a tiny change can make the new hash look unrelated to the old one.", ["A point reflects across the x-axis", "The RSA modulus stops reducing values", "A key is copied into a browser"]),
  quizItem("Which use of hashes is explicitly mentioned near the end?", "Digital signatures", "The lecture lists digital signatures alongside key derivation, MACs, and malware detection as hash applications.", ["Joining the live class", "Choosing the SharePoint folder", "Drawing a meeting participant grid"]),
  quizItem("What happens in the integrity example when 'attack at dawn' is changed to 'attack at dusk'?", "Bob should detect a mismatch when he recomputes the hash", "The modified message should no longer agree with the trusted message digest.", ["Bob automatically accepts the change", "The digest becomes the private key", "The message is converted into an ECC generator"]),
  quizItem("Why is a keyed hash stronger against Mallory in the lecture's model?", "Mallory does not know the shared key needed to recompute the value", "Knowing the public message and digest is insufficient to create a valid keyed value without K.", ["The key is included in the message in clear text", "The hash becomes an encryption algorithm", "The curve has no inverse"]),
  quizItem("What topic did the instructor announce after the public-key section?", "Authentication, integrity, digital signatures, and cryptographic hashes", "The lecture explicitly transitions from confidentiality toward the next authentication and integrity topics.", ["A new database schema", "A lecture-capture login procedure", "A replacement for elliptic-curve arithmetic"])
];

export const ebb6403Lecture20260919054724 = {
  en: {
    title: "Elliptic-curve encryption, RSA timing attacks, and cryptographic hashes",
    lede: "This lecture completes the small elliptic-curve encryption example, compares ECC with RSA, exposes how square-and-multiply can leak RSA key bits through timing or energy, and introduces authentication, integrity, unkeyed hashes, keyed hashes/MACs, collisions, and the avalanche effect.",
    instructionalInterval: "00:00:52–00:50:22 source time (2× visible-tab capture; participant-only idle tail excluded)",
    reviewLevel: "View-only recording; beginning/10%/25%/50%/75%/90%/near-end sweep, 2× Lecture Atlas Companion Audio + visible-tab capture, source-time-restored transcript, and both teaching boundaries verified",
    coverage: [
      { title: "Elliptic-curve point addition", body: "The lecture completes the modular point-addition calculation and connects the algebraic slope formula to the geometric line-and-reflection construction." },
      { title: "Elliptic-curve encryption and decryption", body: "A message is encoded as a curve point; the sender chooses a random scalar and produces two ciphertext points, while the receiver subtracts the private-scalar mask." },
      { title: "ECC versus RSA", body: "RSA relies on the factoring problem, whereas ECC relies on a discrete-log-style scalar-recovery problem and can use shorter keys for the stated security comparison." },
      { title: "RSA timing and side-channel leakage", body: "Square-and-multiply performs different work for one and zero bits, giving an attacker a possible timing or energy trace of the private exponent." },
      { title: "Authentication and message integrity", body: "Authentication validates the claimed source; integrity detects modification, illustrated by changing 'dawn' to 'dusk' during transmission." },
      { title: "Unkeyed and keyed hashes", body: "Unkeyed hashes use a message digest for integrity, while a keyed hash uses a shared secret and is presented as a message authentication code." },
      { title: "Hash properties and applications", body: "The lecture introduces compact fixed-length output, one-wayness, collision resistance, avalanche behaviour, and uses in signatures, derivation, MACs, and malware detection." }
    ],
    takeaway: "Public-key confidentiality and message integrity solve different problems: ECC and RSA protect secrecy through hard mathematical reversals, while hashes and MACs help detect modification and authenticate a source. Implementations must also avoid leaking secret operations through timing or energy.",
    slideTrail: [
      { time: "00:00:52", title: "Elliptic-curve point addition", note: "The slope and modular-coordinate calculation produces a new point and is tied to the geometric reflection rule." },
      { time: "00:03:37", title: "ECC encryption and decryption", note: "The plaintext is encoded as a curve point; ciphertext components are formed from kα and X+kβ." },
      { time: "00:09:46", title: "ECC inverse and decryption", note: "Negating the y-coordinate gives the inverse used to subtract the receiver's private-scalar mask." },
      { time: "00:13:51", title: "ECC compared with RSA", note: "The instructor contrasts factoring with elliptic-curve scalar recovery and discusses the stated key-size comparison." },
      { time: "00:18:47", title: "RSA square-and-multiply timing attack", note: "Different work for one and zero exponent bits can leak a private-key pattern through timing or energy." },
      { time: "00:26:58", title: "Authentication and integrity", note: "The lecture distinguishes validating the source from detecting message modification and announces the next cryptographic services." },
      { time: "00:34:33", title: "Unkeyed hash message-digest flow", note: "Bob recomputes H(X) and compares it with the trusted digest to detect tampering." },
      { time: "00:44:43", title: "Keyed hash and MAC", note: "A shared key protects the digest calculation and supports both source authentication and integrity." },
      { time: "00:48:50", title: "Avalanche effect and hash uses", note: "A tiny message change produces a very different digest; applications include signatures, derivation, MACs, and malware detection." },
      { time: "00:50:19", title: "Verified teaching boundary", note: "The final hash discussion remains instructional immediately before the participant-only tail." }
    ],
    summary: [
      { title: "1. Point addition supplies the ECC arithmetic", sourceRefs: ["00:00:52–00:03:37", "Elliptic-curve point addition"], paragraphs: ["The lecture finishes the modular slope calculation for adding curve points. The coordinates are reduced modulo the small field, and the result must be another point in the curve's finite point set.", "The same operation is explained geometrically: draw a line through P and Q, find the third intersection with the curve, and reflect that point across the x-axis. This line-and-reflection rule is the visual counterpart of the algebraic formula."] },
      { title: "2. ECC encryption masks a point with a random scalar", sourceRefs: ["00:03:37–00:12:00", "ECC encryption and decryption; ECC inverse and decryption"], paragraphs: ["The plaintext must first be encoded as a point X. With generator α, receiver private scalar d, public point β=dα, and sender-chosen random k, the ciphertext is the pair y1=kα and y2=X+kβ.", "The receiver computes y2−d·y1. Because d·y1=d(kα)=kβ, the shared mask cancels and X remains. The worked example uses X=(10,9), k=3, β=(7,2), y1=(8,3), and y2=(10,2); subtraction is implemented by adding the inverse, which changes the sign of the y-coordinate modulo the field."] },
      { title: "3. ECC and RSA depend on different hard reversals", sourceRefs: ["00:13:51–00:16:39", "ECC compared with RSA"], paragraphs: ["RSA is presented as relying on the difficulty of factoring a large n into p and q. ECC uses the difficulty of recovering a scalar from a public point and its scalar multiple, even though forward point addition is easy to perform.", "The instructor contrasts RSA's modular exponentiation with ECC's more involved point operations and gives a 15,360-bit RSA versus 512-bit ECC comparison for the stated security target. The practical lesson is a security-level and implementation trade-off, not that toy classroom parameters are production-safe."] },
      { title: "4. Square-and-multiply can expose RSA key bits", sourceRefs: ["00:18:47–00:25:50", "RSA square-and-multiply timing attack"], paragraphs: ["To compute C^d mod n, the exponent d is represented in binary. A one bit causes a square and a multiply, while a zero bit causes only a square. If those paths consume measurably different time or energy, an attacker who observes the receiver implementation can infer a pattern associated with d.", "The lecture calls this a side-channel or timing attack. Modular reduction adds noise and nonlinear cost, but shorter keys do not make the leakage irrelevant. The security boundary includes constant-time implementation and leakage-resistant engineering, not only the correctness of the RSA equation."] },
      { title: "5. Authentication and integrity are separate services", sourceRefs: ["00:26:58–00:34:33", "Authentication and integrity"], paragraphs: ["Authentication asks whether Bob can validate that Alice is the source or owner of a packet. Integrity asks whether the packet stayed unchanged during transfer. The 'attack at dawn' example makes the difference concrete when an intermediary changes dawn to dusk.", "The instructor announces authentication and integrity as the next focus after confidentiality and previews digital signatures and hash techniques. This transition prevents a common mistake: encryption alone does not automatically provide source authentication or tamper evidence."] },
      { title: "6. Hashes produce compact evidence of message content", sourceRefs: ["00:34:33–00:44:43", "Unkeyed hash message-digest flow; Keyed hash and MAC"], paragraphs: ["In the unkeyed design, Alice computes Y=H(X), sends X over the ordinary channel, and sends the trusted digest through a protected path. Bob computes H on received X and compares the result with Y. A mismatch exposes modification, provided the digest path and hash assumptions remain trustworthy.", "The lecture then adds a shared key K to the hash calculation. Since Mallory lacks K, she cannot simply change X and recompute a valid value. This keyed construction is identified as a message authentication code because it supports integrity checking and authentication of the shared-key source."] },
      { title: "7. One-wayness, collisions, and avalanche behaviour shape hash security", sourceRefs: ["00:41:30–00:50:19", "Avalanche effect and hash uses"], paragraphs: ["The lecture lists one-wayness and collision resistance as important design properties. Mallory's collision goal is to find X′ different from X such that H(X′)=H(X), allowing a modified message to appear consistent with a trusted digest.", "The avalanche example shows that even a tiny message change can produce a dramatically different digest. The lecture closes by naming digital signatures, random-number generation, key updates and derivation, MACs, and malware detection as applications of cryptographic hashes."] }
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [],
      announcements: [
        { time: "00:26:58", title: "Next authentication and integrity topics", detail: "The instructor announced upcoming discussion of authentication, integrity, digital signatures, and cryptographic hash techniques." }
      ]
    },
    keyTerms: [
      { term: "Scalar multiplication", definition: "Repeated elliptic-curve point addition such as kα." },
      { term: "ECC ciphertext pair", definition: "The two-point result y1=kα and y2=X+kβ used in the lecture's encryption example." },
      { term: "Side-channel attack", definition: "An attack that infers secret information from observable implementation behaviour such as time or energy." },
      { term: "Authentication", definition: "Validation of the claimed source or owner of a message." },
      { term: "Integrity", definition: "Confidence that a message was not modified during transfer." },
      { term: "Message authentication code", definition: "A keyed authentication value used to check integrity and the holder of a shared key." },
      { term: "Avalanche effect", definition: "A small input change causing a substantially different hash output." }
    ],
    insights: [
      { label: "Separation", title: "Confidentiality is not integrity", body: "The lecture's transition from ECC/RSA encryption to hashes and MACs shows why a system may need separate mechanisms for secrecy, tamper detection, and source authentication." },
      { label: "Interfaces", title: "Implementation behaviour becomes an information channel", body: "A mathematically sound RSA equation can still leak private-key bits when branches and modular operations have observable cost differences." },
      { label: "Encoding", title: "ECC encryption begins before the first group operation", body: "Mapping a message into a valid curve point is part of the cryptosystem design; point arithmetic alone does not define a complete message-encryption format." },
      { label: "Trust", title: "An unkeyed digest needs a trusted delivery path", body: "If an attacker can replace both X and its digest, recomputation proves only consistency with the attacker's pair. Keyed hashing changes that trust requirement by using shared secret material." }
    ],
    resources: [
      { title: "NIST FIPS 202: SHA-3 Standard", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf", note: "Primary NIST standard for SHA-3 and Keccak-based hash and extendable-output functions, reinforcing the lecture's hash discussion." },
      { title: "RFC 2104: HMAC", url: "https://www.rfc-editor.org/rfc/rfc2104.html", note: "The foundational IETF description of keyed hashing for message authentication and integrity." },
      { title: "NIST Side-Channel Attacks and Defences", url: "https://csrc.nist.gov/presentations/2021/side-channels-attacks-defences-and-evaluation-sche", note: "A NIST lecture resource extending the recording's timing and implementation-leakage discussion." },
      { title: "NIST FIPS 186-5: Digital Signature Standard", url: "https://csrc.nist.gov/pubs/fips/186-5/final", note: "Primary guidance for the digital-signature topic announced near the end of the recording." }
    ],
    quiz
  }
};
