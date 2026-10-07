// English-only publication unit.
const quizItem = (question, correct, explanation, wrong) => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
  optionNotes: [`Correct: ${explanation}`, `Incorrect: ${wrong[0]} does not describe the property or step asked about.`, `Incorrect: ${wrong[1]} confuses a different security goal or construction.`, `Incorrect: ${wrong[2]} is not supported by the lecture's model.`]
});

const quiz = [
  quizItem("Which security goals are the focus of this lecture's hash-function discussion?", "Message integrity and source authentication", "The lecture moves beyond confidentiality to checking modification and validating who produced a message.", ["Availability and non-repudiation only", "Confidentiality alone", "Compression and error correction"]),
  quizItem("What is the usual output shape of a cryptographic hash function?", "A fixed-length digest for an input of arbitrary length", "The digest length is fixed even when the message length varies.", ["A reversible copy of the input", "A ciphertext whose length always equals the key length", "A random key pair"]),
  quizItem("Why is a plain unkeyed digest insufficient to authenticate a sender when an attacker can replace both message and digest?", "The attacker can compute a new digest for the replacement message", "An unkeyed hash has no secret input that distinguishes an authorized producer.", ["The digest is always longer than the message", "Hash functions require a public-key decryption step", "The receiver cannot compute a hash"]),
  quizItem("In a keyed message-authentication construction, what extra input distinguishes it from a plain hash?", "A shared secret key", "The message and secret key jointly determine the authentication value.", ["A second unkeyed message", "The receiver's public encryption key only", "A random oracle chosen by the sender for every byte"]),
  quizItem("What does Bob do to check an unkeyed digest in the lecture's basic flow?", "Recompute the digest of the received message and compare it with the trusted digest", "A mismatch indicates that the received message differs, assuming the reference digest is trustworthy.", ["Decrypt the digest to recover the message", "Compare the message length only", "Ask the sender to reveal a private key"]),
  quizItem("What is a collision in a hash function?", "Two distinct inputs that produce the same digest", "A collision is a pair x ≠ x′ for which H(x)=H(x′).", ["One input that produces two output lengths", "A digest that decrypts to two keys", "A repeated network packet"]),
  quizItem("Which property makes it hard to recover any input from a given digest?", "Preimage resistance", "Preimage resistance concerns finding an input for a specified output.", ["Collision resistance", "Second-preimage resistance", "Uniform message length"]),
  quizItem("Given one fixed message x, which property makes it hard to find a different x′ with H(x′)=H(x)?", "Second-preimage resistance", "The adversary is given x and must find a matching distinct input.", ["Preimage resistance", "Collision resistance only when no input is fixed", "Avalanche effect"]),
  quizItem("How does collision resistance differ from second-preimage resistance?", "Collision resistance lets the attacker choose both distinct inputs", "A collision search is not anchored to a preselected message.", ["Collision resistance requires reversing the digest", "Second-preimage resistance uses two secret keys", "There is no difference in the attack goal"]),
  quizItem("What is the lecture's random-oracle model intuition?", "A party queries an idealized random function and receives its output for each input", "The model treats the oracle as a consistent but unpredictable mapping for queried messages.", ["The oracle reveals the hash key", "Every query returns the same constant", "The model makes digest collisions impossible"]),
  quizItem("If an ideal digest has n possible outputs, what is the collision probability for two independent fixed inputs?", "1/n", "The second output matches the first with probability one over the output-space size.", ["1/2", "n", "1/n² for every pair"]),
  quizItem("Why can a birthday attack find collisions in roughly the square root of the digest space rather than requiring n trials?", "Many queried pairs create a collision opportunity, so pairwise matching grows quadratically", "The number of pairs among Q samples grows approximately as Q²/2.", ["The attacker reverses the hash in one query", "The digest space shrinks after each query", "Birthday attacks use only preimage searches"]),
  quizItem("For an ideal b-bit hash, what is the approximate generic work for a collision search?", "About 2^(b/2) trials", "The birthday bound makes collision search scale with the square root of the output space.", ["About b trials", "About 2^b trials for every collision", "About 2^(2b) trials"]),
  quizItem("Which digest size did the lecture associate with MD5?", "128 bits", "The MD5 overview identifies a 128-bit digest, which is too small for modern collision security.", ["64 bits", "160 bits", "512 bits"]),
  quizItem("What is the block size used by the MD5 construction described in class?", "512 bits", "The lecture's iterative design processes padded input in 512-bit blocks.", ["128 bits", "256 bits", "1024 bytes"]),
  quizItem("What is the purpose of padding before MD5 processes message blocks?", "To make the message fit the block structure while reserving space for its length", "Padding aligns the input to the construction's block format before the length field is appended.", ["To encrypt the message with a secret key", "To make every digest unique", "To remove the need for an initialization state"]),
  quizItem("What length field does the lecture describe appending in MD5 preprocessing?", "A 64-bit representation of the original message length", "The high-level flow appends a 64-bit length representation after padding.", ["A 16-bit sender identifier", "A 128-bit secret key", "A variable-length public certificate"]),
  quizItem("What are the four named MD5 chaining-state words in the overview?", "A, B, C, and D", "The overview initializes the four-word buffer A/B/C/D before iterating over blocks.", ["P, Q, R, and S", "X, Y, Z, and K", "IV, salt, nonce, and tag"]),
  quizItem("What happens at a high level in an iterated hash design?", "A compression function updates a chaining state block by block", "Each padded message block is combined with the prior state to produce the next state.", ["Each block is independently decrypted to plaintext", "The full message is sorted before hashing", "The output is selected from a lookup table without state"]),
  quizItem("Why did the instructor caution against relying on MD5 for modern security?", "Practical collisions have been demonstrated and its collision strength is inadequate", "The lecture notes MD5's 128-bit output and demonstrated collision attacks, and describes migration to SHA-family alternatives.", ["MD5 requires a 512-bit secret key", "MD5 is reversible by design", "MD5 cannot process messages longer than one block"]),
  quizItem("What does the birthday paradox illustrate for hash security?", "A collision becomes likely after a number of samples near the square root of the outcome space", "It is the probabilistic reason collision resistance has about half the digest bit strength.", ["A preimage is guaranteed after one query", "Hash outputs must repeat every b queries", "A hash's output length doubles on each round"]),
  quizItem("What was the lecture's announced next-class exercise?", "Work numerical examples for padding and MD5 round computations", "The instructor said the next class would calculate padding and Boolean/rotation steps with examples.", ["Submit a graded programming project", "Deploy an IPsec VPN", "Implement a production SHA-1 service"]),
  quizItem("Which protocol/application context did the instructor mention when discussing MACs?", "IPsec and VPN tunnels", "The instructor connected message-authentication codes to IPsec secure tunnels as a practical application.", ["DNS zone transfer only", "Bluetooth pairing only", "A public blockchain consensus protocol"]),
  quizItem("Does encryption by itself guarantee message integrity and source authentication?", "No; confidentiality and authenticated integrity are distinct requirements", "The lecture emphasizes separate mechanisms such as hashes, MACs, and signatures for integrity/authentication.", ["Yes, every ciphertext proves the sender's identity", "Yes, if the plaintext is short", "Only when the hash output is public"]),
  quizItem("What is the key distinction between a hash and encryption emphasized in the lecture?", "Hashing is one-way digest generation, while encryption is intended to support authorized recovery", "A digest is used for verification rather than reversing the message.", ["Hashing always uses a private key", "Encryption always produces a fixed 128-bit output", "There is no distinction"])
];

export const ebb6403Lecture20261003053942 = {
  en: {
    title: "Hash security, birthday attacks, and the MD5 construction",
    lede: "A full-session progression from message integrity and authentication through keyed and unkeyed hashes, formal hash-security properties, random-oracle collision probability, birthday attacks, and MD5's padded iterative design. The instructor closes with a warning about MD5 collisions and previews numerical work for the next class.",
    instructionalInterval: "00:02:26–01:27:06 source time (2× visible-tab capture; setup and participant-only idle tail excluded)",
    reviewLevel: "View-only recording; beginning/10%/25%/50%/75%/90%/near-end sweep, 2× Lecture Atlas Companion Audio + visible-tab capture, source-time-restored transcript, and both teaching boundaries verified",
    coverage: [
      { title: "Integrity, authentication, and digest verification", body: "A fixed-length digest can reveal message modification when the receiver compares a recomputed hash with a trusted reference; source authentication needs an authenticated channel, signature, or keyed construction." },
      { title: "Hash security properties", body: "Preimage, second-preimage, and collision resistance describe distinct attacker goals. The random-oracle model gives an idealized way to reason about outputs and query-based attacks." },
      { title: "Birthday attacks and collision strength", body: "Because Q queries create many pairs, collision probability rises around the square root of the digest space; a b-bit digest therefore offers about b/2 bits of generic collision strength." },
      { title: "Iterated hashes and MD5", body: "The lecture outlines padding, a 64-bit message-length field, 512-bit blocks, a four-word A/B/C/D state, rounds, Boolean functions, and rotations in MD5." },
      { title: "MD5's security status and next steps", body: "MD5's 128-bit digest and demonstrated practical collisions make it unsuitable where collision resistance is required. The instructor previews worked padding/round examples and SHA-family security discussion." }
    ],
    takeaway: "A digest is not automatically an authenticator: an unkeyed hash detects changes only when its reference value is protected. Hash security must be matched to the attack goal, with generic collision work near 2^(b/2); MD5's collision failures make it inappropriate for modern collision-resistant uses.",
    slideTrail: [
      { time: "00:02:26", title: "Public-key cryptography and security goals", note: "The opening slide bridges prior confidentiality material to authentication and integrity." },
      { time: "00:10:56", title: "Authentication and integrity", note: "The instructor separates validating a source from detecting message modification." },
      { time: "00:17:56", title: "Hashes and integrity with hashes", note: "The slide illustrates digest-based verification and how a change affects the comparison." },
      { time: "00:23:56", title: "Avalanche effect", note: "A small input change is used to motivate a substantially different digest." },
      { time: "00:30:56", title: "Hash-family definitions and requirements", note: "The presentation names one-wayness and the resistance properties that follow." },
      { time: "00:40:56", title: "The random-oracle model", note: "An idealized query interface supports the lecture's output-probability reasoning." },
      { time: "00:48:56", title: "Las Vegas algorithm example", note: "The birthday-search intuition is connected to repeated oracle queries." },
      { time: "00:53:56", title: "First-preimage and second-preimage attacks", note: "The slides distinguish finding an input for a target digest from matching a fixed input." },
      { time: "00:58:56", title: "Finding collisions", note: "The attacker chooses a pair of distinct inputs with the same digest." },
      { time: "01:00:56", title: "Birthday paradox", note: "The probability curve explains why collision work scales with the square root of the space." },
      { time: "01:08:56", title: "MD5 overview", note: "The visual transitions from generic hash security to the MD5 compression pipeline." },
      { time: "01:18:56", title: "MD5 algorithm flow", note: "Padding, length encoding, state initialization, rounds, and output formation are summarized." },
      { time: "01:21:56", title: "Collisions in MD5 timeline", note: "The lecture reviews the historical demonstration of practical MD5 collisions." },
      { time: "01:27:06", title: "Verified teaching boundary", note: "The final instructional discussion concludes before the participant-only idle tail." }
    ],
    summary: [
      { title: "1. Integrity and authentication are related but distinct", sourceRefs: ["00:02:26–00:17:56", "Authentication and integrity; Hashes"], paragraphs: ["The instructor begins by revisiting public-key cryptography as a confidentiality mechanism: encryption aims to restrict reading to the designated recipient. Integrity asks whether content changed, while authentication asks whether the claimed source is genuine. Encryption alone should not be treated as complete authenticated protection.", "For a simple digest check, the sender computes Y=H(X), and the receiver hashes the received X and compares the result. This detects a modification only if the reference digest is delivered through a trustworthy mechanism. An attacker who can replace both X and an unkeyed H(X) can produce a consistent pair; a MAC or digital signature addresses the authentication/trust problem differently."] },
      { title: "2. Unkeyed hashes and keyed authentication values", sourceRefs: ["00:17:56–00:30:56", "Integrity with hashes; Hash family"], paragraphs: ["A cryptographic hash maps variable-length input to a fixed-length digest and is intended as a one-way verification aid, not a reversible encryption scheme. The lecture contrasts an unkeyed digest with a keyed construction in which a shared secret contributes to an authentication value.", "A secure MAC lets a receiver who knows the shared key verify both message integrity and possession of the shared key. This is distinct from merely transmitting a digest over an allegedly secure path. The instructor gives IPsec/VPN as an application context for message-authentication codes."] },
      { title: "3. Security properties describe different attacker tasks", sourceRefs: ["00:30:56–00:40:56", "Hash function requirements"], paragraphs: ["Preimage resistance asks whether an attacker can find any x for a chosen digest y. Second-preimage resistance starts with a particular x and asks for a distinct x′ with H(x′)=H(x). Collision resistance lets the attacker choose both members of the matching pair.", "The avalanche effect is a useful design behaviour: changing a small part of the message should produce a substantially different digest. It is not a substitute for formal resistance properties, but it helps explain why a digest can act as a compact fingerprint under the right assumptions."] },
      { title: "4. The random-oracle model leads to birthday bounds", sourceRefs: ["00:40:56–01:07:56", "Random Oracle Model; Birthday Paradox; Finding Collisions"], paragraphs: ["The random-oracle model idealizes a hash as a consistent unpredictable mapping. If the digest space has n possible values, two fixed independent inputs match with probability 1/n. With Q queries, however, there are about Q(Q−1)/2 pairs to compare, so collision probability grows approximately as Q²/(2n) while that value is small.", "The birthday paradox therefore puts generic collision search near √n queries, or about 2^(b/2) work for a b-bit digest. This is different from a preimage search, whose generic work is near 2^b. Digest length must be selected with the relevant attack goal in mind."] },
      { title: "5. MD5 is an iterated 512-bit-block hash", sourceRefs: ["01:08:56–01:20:56", "MD5 Overview; MD5 Algorithm Flow"], paragraphs: ["The MD5 overview begins with preprocessing: append padding so the message fits the block format, then append a 64-bit representation of the original length. The lecture describes 512-bit message blocks and an initialized four-word state A, B, C, D.", "Each block updates the chaining state through rounds of Boolean operations and bit rotations. The final state yields a 128-bit digest. The slide walkthrough emphasizes that the compression process is iterative; correct padding, length encoding, state initialization, and round arithmetic all matter to reproducing the algorithm."] },
      { title: "6. Practical collisions rule out MD5 for modern collision-resistant uses", sourceRefs: ["01:20:56–01:27:06", "Collisions in MD5 Timeline; MD5 Overview"], paragraphs: ["The instructor notes that practical MD5 collisions have been demonstrated and that the 128-bit output leaves inadequate collision strength. The timeline contextualizes those demonstrations and the move away from MD5 in security-sensitive uses; SHA-family alternatives are mentioned as the direction of migration.", "The next class is previewed as numerical work on padding and MD5's Boolean/rotation computations, followed by discussion of MD5/SHA security and digital signatures. These are previews, not a newly assigned submission or lab."] }
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [],
      announcements: [
        { time: "01:24:56", title: "Next-class numerical examples", detail: "The instructor previewed worked examples for MD5 padding and round computations, then further discussion of MD5/SHA security and digital signatures. No submission deadline was announced." }
      ]
    },
    keyTerms: [
      { term: "Message digest", definition: "A fixed-length output computed from a message by a hash function." },
      { term: "Preimage resistance", definition: "Difficulty finding an input for a specified digest." },
      { term: "Second-preimage resistance", definition: "Difficulty finding a different input with the same digest as a given fixed input." },
      { term: "Collision resistance", definition: "Difficulty finding any two distinct inputs with equal digests." },
      { term: "Birthday bound", definition: "Generic collision search reaches substantial probability after about the square root of the output-space size." },
      { term: "Message authentication code", definition: "A keyed value used by parties sharing a secret to verify message integrity and key possession." },
      { term: "Chaining state", definition: "The internal state updated as successive message blocks pass through an iterative hash construction." }
    ],
    insights: [
      { label: "Trust", title: "A digest check inherits the trust of its reference", body: "Recomputing H(X) is useful only when the expected digest cannot be replaced alongside X. Authentication comes from protecting that reference or using a keyed/signature construction." },
      { label: "Probability", title: "Collision strength is not the same as digest length", body: "A b-bit digest has 2^b possible outputs, yet generic collision search needs only about 2^(b/2) samples because each new query creates many candidate pairs." },
      { label: "Construction", title: "Padding is part of the algorithm", body: "Block alignment and an encoded message length define the processed bit string; changing preprocessing changes the hash computation itself." },
      { label: "Practice", title: "Legacy deployment is not evidence of modern safety", body: "MD5's historical popularity does not overcome practical collision demonstrations. Select a current construction based on the required security property and standards guidance." }
    ],
    resources: [
      { title: "RFC 6151: Updated Security Considerations for MD5 and HMAC-MD5", url: "https://www.rfc-editor.org/rfc/rfc6151.html", note: "IETF security guidance supporting the lecture's warning about MD5 and collision-sensitive use." },
      { title: "RFC 2104: HMAC", url: "https://www.rfc-editor.org/rfc/rfc2104.html", note: "The standard HMAC construction extends the lecture's keyed message-authentication discussion." },
      { title: "NIST FIPS 202: SHA-3 Standard", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf", note: "Primary NIST specification for SHA-3 and related extendable-output functions; useful modern context for hash design." }
    ],
    quiz
  }
};
