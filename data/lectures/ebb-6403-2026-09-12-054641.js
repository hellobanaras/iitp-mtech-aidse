// English-only publication unit.
const quizItem = (question, correct, explanation, wrong) => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
  optionNotes: [`Correct: ${explanation}`, `Incorrect: ${wrong[0]} is not the tested property.`, `Incorrect: ${wrong[1]} is unrelated to this construction.`, `Incorrect: ${wrong[2]} confuses another cryptographic idea.`]
});

const quiz = [
  quizItem("What is the main operational distinction between public and private keys?", "A public key can be shared while its paired private key remains secret", "Public-key systems use an openly distributed key and a protected private key for complementary operations.", ["Both keys must be published", "The private key is only a password hint", "Neither key participates in cryptography"]),
  quizItem("Which public-key operation supports authentication?", "Signing with a private key and verifying with the corresponding public key", "A signature proves possession of the private key to a verifier holding the public key.", ["Encrypting a message with the sender's public key only", "Hashing without any secret operation", "Sharing the private key with every verifier"]),
  quizItem("What is a trapdoor one-way function?", "Easy to compute forward, hard to invert without secret information", "The trapdoor makes inversion practical for an authorized party while remaining difficult for others.", ["Impossible to compute in either direction", "A function that always returns zero", "A function whose inverse is publicly printed"]),
  quizItem("What problem underlies the knapsack example?", "Finding a subset of weights whose sum equals a target", "The subset-sum formulation asks which weights contribute to a specified sum.", ["Sorting all weights alphabetically", "Factoring every public weight", "Compressing a message into one bit"]),
  quizItem("Why is a superincreasing sequence easy to solve greedily?", "Each weight is larger than the sum of all preceding weights", "The largest candidate can be selected or rejected without ambiguity because earlier weights cannot compensate for it.", ["Every weight is identical", "The target is always prime", "The sequence contains no private information"]),
  quizItem("What does the greedy knapsack algorithm do first?", "Consider the largest private weight", "A superincreasing subset sum is solved from the largest weight downwards.", ["Randomly discard half the weights", "Compute an RSA signature", "Sort the target's decimal digits"]),
  quizItem("What is the purpose of the Merkle–Hellman transformation?", "Hide an easy private subset-sum sequence behind a public sequence", "The transformation preserves a trapdoor for the owner while making the public subset-sum problem appear hard.", ["Remove the need for a private key", "Turn every message into a certificate", "Guarantee security against every later attack"]),
  quizItem("In the knapsack encryption model, what does S represent?", "The sum of selected public weights", "For message bits x and public weights a, encryption computes S = a·x.", ["The secret modulus only", "The number of RSA primes", "The slide number"]),
  quizItem("What private information helps decrypt a Merkle–Hellman ciphertext?", "The modular inverse and the easy private sequence", "The trapdoor reverses the modular transformation and exposes a superincreasing subset sum.", ["The recipient's screen resolution", "A random public password", "Only the ciphertext length"]),
  quizItem("What was the worked Merkle–Hellman example's target sum?", "S = 6665", "The lecture used 6665 as the ciphertext sum in its public-weight example.", ["S = 256", "S = 119", "S = 26"]),
  quizItem("What important historical lesson was attached to Merkle–Hellman?", "Its original construction was broken by cryptanalysis", "A trapdoor idea can be educational without being safe for modern deployment.", ["It is the current TLS standard", "It needs no parameter choices", "It provides information-theoretic secrecy"]),
  quizItem("Which systems were mentioned as other public-key families?", "McEliece, ElGamal, and elliptic-curve cryptography", "The lecture placed these alongside RSA as examples of public-key approaches.", ["RC4, DES, and Caesar", "SQL, HTTP, and DNS", "JPEG, PNG, and MP3"]),
  quizItem("How is RSA's modulus formed?", "n = p q from two selected primes", "RSA begins by multiplying two primes to form the public modulus.", ["n = p + q only", "n = e − d", "n = p / q"]),
  quizItem("What is Euler's totient for RSA when p and q are distinct primes?", "φ(n) = (p − 1)(q − 1)", "This value counts integers below n that are coprime to n for n = pq.", ["φ(n) = p + q", "φ(n) = p q + 1", "φ(n) = e d"]),
  quizItem("How is RSA's public exponent selected?", "It is chosen coprime to φ(n)", "Coprimality ensures a modular inverse exists for the private exponent.", ["It must equal p", "It must be even in every case", "It is chosen after publishing the private key"]),
  quizItem("What equation defines RSA's private exponent d?", "d is the modular inverse of e modulo φ(n)", "The relationship ed ≡ 1 mod φ(n) makes the exponent pair work.", ["d = e + φ(n)", "d = p − q without reduction", "d is an unrelated random real number"]),
  quizItem("What is RSA encryption in the lecture's notation?", "C = M^e mod n", "The plaintext representative M is raised to the public exponent modulo n.", ["C = M + e", "C = M / n", "C = φ(M)"]),
  quizItem("What is RSA decryption in the lecture's notation?", "M = C^d mod n", "The private exponent recovers the message representative under the RSA conditions.", ["M = C − d", "M = C^e without a modulus", "M = n^d"]),
  quizItem("What were the small RSA example's primes?", "p = 7 and q = 17", "The example gives n = 119 and φ(n) = 96 from those two primes.", ["p = 2 and q = 3", "p = 11 and q = 13", "p = 31 and q = 37"]),
  quizItem("What modulus resulted from p = 7 and q = 17?", "n = 119", "Multiplying the two example primes gives the RSA modulus 119.", ["n = 24", "n = 96", "n = 6665"]),
  quizItem("What was the example's Euler totient?", "φ(n) = 96", "For n = 119, (7 − 1)(17 − 1) = 6·16 = 96.", ["φ(n) = 119", "φ(n) = 77", "φ(n) = 22"]),
  quizItem("What is the purpose of square-and-multiply?", "Compute modular exponentiation efficiently", "It uses the binary representation of the exponent to reduce repeated multiplication.", ["Generate a random prime automatically", "Replace modular reduction with division", "Recover a private key from any ciphertext"]),
  quizItem("What does modular reduction do during RSA computation?", "Keeps intermediate values within a residue class modulo n", "Reducing after multiplications preserves the modular result while controlling number size.", ["Deletes the exponent", "Makes every plaintext identical", "Converts the message to a floating-point value"]),
  quizItem("Why should RSA primes be kept secret?", "Knowledge of the factors enables computation of the private-key trapdoor", "Factoring n exposes φ(n) and undermines the intended secrecy of d.", ["The public modulus cannot otherwise be computed", "The public exponent would stop working", "Signatures require the primes to be displayed"]),
  quizItem("What is the safest deployment lesson from the lecture?", "Use standardized, reviewed public-key schemes with sound parameter and key-management practice", "Historical constructions and small examples teach the mathematics but do not constitute production security.", ["Use the smallest primes possible", "Publish private keys for transparency", "Treat every trapdoor construction as permanently secure"])
];

export const ebb6403Lecture20260912054641 = {
  en: {
    title: "Public-key cryptography: knapsack trapdoors, Merkle–Hellman, and RSA",
    lede: "This lecture develops public-key cryptography through authentication and key exchange, the knapsack subset-sum problem, the Merkle–Hellman trapdoor construction, and RSA key generation, encryption, decryption, and efficient modular exponentiation.",
    instructionalInterval: "00:00:34–01:38:09 source time (2× visible-tab capture; setup before the first sustained explanation and the final idle seconds excluded)",
    reviewLevel: "View-only recording; beginning/10%/25%/50%/75%/90%/near-end sweep, 2× Lecture Atlas Companion Audio + visible-tab capture, source-time-restored transcript, and both teaching boundaries verified",
    coverage: [
      { title: "Public-key purposes", body: "Public/private key pairs support confidentiality, digital signatures, authentication, and key exchange; the operation used determines which security property is obtained." },
      { title: "Trapdoor one-way functions", body: "Public-key designs seek a function that is easy to compute but difficult to invert without secret information, while the authorized holder uses a trapdoor." },
      { title: "Knapsack and superincreasing sequences", body: "Subset-sum asks which weights produce a target. A superincreasing private sequence makes the inverse problem easy by a largest-first greedy procedure." },
      { title: "Merkle–Hellman construction", body: "A modular transformation hides the easy private sequence behind public weights; decryption reverses the transformation and solves the private subset sum." },
      { title: "RSA key generation", body: "RSA chooses primes p and q, computes n=pq and φ(n)=(p−1)(q−1), selects e coprime to φ(n), and computes d=e⁻¹ mod φ(n)." },
      { title: "RSA encryption and decryption", body: "The public operation is C=M^e mod n and the private operation is M=C^d mod n, subject to the scheme's number-theoretic conditions." },
      { title: "Efficient modular exponentiation", body: "Square-and-multiply uses the exponent's binary expansion and modular reduction to compute large powers efficiently without materializing enormous integers." }
    ],
    takeaway: "Public-key cryptography separates a shareable public operation from a protected trapdoor, but mathematical elegance is not a security guarantee: construction history, parameter choices, implementation, and key management all matter.",
    slideTrail: [
      { time: "00:00:19", title: "Authentication", note: "Public-key signatures and the authentication use of asymmetric cryptography are introduced." },
      { time: "00:10:09", title: "Applications for P-K cryptosystems", note: "Encryption/decryption, digital signature, and key exchange applications are compared." },
      { time: "00:24:53", title: "The Knapsack Algorithm", note: "The subset-sum problem and greedy solution for a superincreasing sequence are developed." },
      { time: "00:49:22", title: "Merkle Hellman PK System", note: "Private/public weights and the worked target S=6665 illustrate the transformation." },
      { time: "01:13:56", title: "Computation of RSA", note: "RSA parameters, exponent relationships, and modular formulas are presented." },
      { time: "01:28:35", title: "Square and multiply algorithm", note: "Binary exponentiation reduces the work needed for a^m mod n." },
      { time: "01:36:55", title: "RSA encryption/decryption", note: "The closing worked arithmetic connects the public and private exponent operations." },
      { time: "01:38:09", title: "Verified teaching boundary", note: "RSA modular arithmetic remains instructional at the marked end; the final idle seconds are excluded." }
    ],
    summary: [
      { title: "1. Public-key systems serve different security purposes", sourceRefs: ["00:00:19–00:10:09", "Authentication; Applications for P-K cryptosystems"], paragraphs: ["A public key may be distributed widely, while its paired private key remains controlled by its owner. Encrypting for a recipient and verifying a signature use the pair in different directions and therefore answer different questions: confidentiality versus origin/authenticity.", "The lecture also places key exchange alongside encryption and signatures. The system designer must state which party knows which key and which property the operation is meant to provide."] },
      { title: "2. Trapdoors make public computation useful", sourceRefs: ["00:10:09–00:24:53", "Applications; The Knapsack Algorithm"], paragraphs: ["A public-key construction aims for an operation that anyone can perform but that is difficult to reverse without secret information. The trapdoor gives the legitimate owner an efficient inverse without revealing the shortcut to everyone else.", "The knapsack example makes this asymmetry concrete: arbitrary subset-sum is difficult in general, while a specially structured private sequence can be solved efficiently."] },
      { title: "3. Superincreasing knapsacks have a greedy inverse", sourceRefs: ["00:24:53–00:49:22", "The Knapsack Algorithm"], paragraphs: ["For private weights a=(a₁,…,aₙ), a superincreasing sequence satisfies aᵢ > Σⱼ<ᵢ aⱼ. To solve a target S, inspect the largest weight first, select it when it does not exceed the remaining sum, subtract it, and continue downward.", "This structure is easy for the private-key holder but should be hidden by the public transformation. The lecture's Merkle–Hellman example uses a private list beginning (2,5,9,21,45,103,215,450,946), with modulus m=2003 and multiplier w=1289."] },
      { title: "4. Merkle–Hellman hides the easy sequence", sourceRefs: ["00:49:22–01:05:00", "Merkle Hellman PK System"], paragraphs: ["The public weights are generated from the private sequence by modular multiplication and inversion under chosen parameters. Encryption forms a public subset sum S=a·x for message bits x; decryption uses the inverse multiplier to recover a private superincreasing target.", "The worked public list (575,436,1586,1030,1921,569,721,1183,1570) and S=6665 show the construction as arithmetic rather than as a black box. The lecture explicitly notes that the original Merkle–Hellman system was broken by Shamir; Chor–Rivest and other families were mentioned as later directions."] },
      { title: "5. RSA derives a public/private exponent pair", sourceRefs: ["01:13:56–01:28:35", "Computation of RSA"], paragraphs: ["Choose distinct primes p and q, compute n=pq and φ(n)=(p−1)(q−1), and choose e with gcd(e,φ(n))=1. Compute d as the modular inverse of e: ed≡1 mod φ(n). The public key is typically (n,e); d and the factorization remain secret.", "In the small example, p=7 and q=17 give n=119 and φ(n)=96. The lecture uses e=5 and d=77 because 5·77=385≡1 mod 96. Small values expose the relationships but are not secure parameters."] },
      { title: "6. RSA uses modular exponentiation in both directions", sourceRefs: ["01:13:56–01:36:55", "Computation of RSA; Square and multiply algorithm"], paragraphs: ["For a message representative M, encryption is C=M^e mod n and decryption is M=C^d mod n. The correctness argument follows from the exponent relationship and RSA's number-theoretic assumptions; implementations also need encoding, padding, side-channel defenses, and safe key handling.", "Square-and-multiply scans the binary exponent, repeatedly squares the current base, multiplies when the next exponent bit is 1, and reduces modulo n after each operation. This avoids constructing the full integer power."] },
      { title: "7. Mathematical examples need deployment judgment", sourceRefs: ["01:28:35–01:38:09", "Square and multiply; RSA encryption/decryption"], paragraphs: ["The final arithmetic reinforces that modular reduction preserves the desired residue while bounding intermediate values. It also shows why factoring a large RSA modulus is central: recovering p and q reveals φ(n), which makes the private exponent computable.", "The educational construction should not be copied into production. Use current standardized schemes, appropriate key sizes, secure randomness, authenticated protocols, audited libraries, and a documented key lifecycle."] }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [], announcements: [] },
    keyTerms: [
      { term: "Public key", definition: "The openly distributable key in an asymmetric key pair." },
      { term: "Private key", definition: "The protected key paired with a public key and used for secret or signing operations." },
      { term: "Trapdoor", definition: "Secret information that makes inversion of an otherwise difficult public computation efficient." },
      { term: "Superincreasing sequence", definition: "A sequence in which each item exceeds the sum of all earlier items." },
      { term: "Modular inverse", definition: "A value d such that ed is congruent to 1 modulo the chosen modulus." },
      { term: "RSA modulus", definition: "The product n=pq of two secret primes used as the public arithmetic modulus." },
      { term: "Square-and-multiply", definition: "A binary-exponentiation method for efficient modular powers." }
    ],
    insights: [
      { label: "Asymmetry", title: "Public availability is not the same as public reversibility", body: "A useful public-key operation is designed so that everyone can compute forward while only the trapdoor holder can efficiently invert." },
      { label: "Cryptanalysis", title: "A trapdoor construction can be historically important and still broken", body: "Merkle–Hellman is valuable for understanding hiding structure, but its cryptanalytic history is a warning against treating a clever reduction as a security proof." },
      { label: "Implementation", title: "Modular arithmetic must be paired with safe encoding", body: "The formulas alone omit padding, message representation, randomness, side-channel resistance, and protocol context required by real RSA deployments." },
      { label: "Scale", title: "Toy parameters reveal relationships, not security", body: "The p=7,q=17 example makes RSA hand-computable; the same small factors make it immediately factorable." },
      { label: "Design", title: "Key purpose should be explicit", body: "Encryption, authentication, signatures, and key exchange are related applications but require different operation direction, verification logic, and threat assumptions." }
    ],
    resources: [
      { title: "RFC 8017: PKCS #1 v2.2", url: "https://www.rfc-editor.org/rfc/rfc8017.html", note: "Primary specification for RSA cryptography, encoding, signatures, and encryption schemes." },
      { title: "NIST SP 800-57 Part 1 Revision 5", url: "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final", note: "Primary key-management guidance for protecting, rotating, and retiring cryptographic keys." },
      { title: "NIST Cryptographic Standards and Guidelines", url: "https://csrc.nist.gov/Projects/cryptographic-standards-and-guidelines", note: "Current standards and transition guidance for cryptographic systems." },
      { title: "Handbook of Applied Cryptography", url: "https://cacr.uwaterloo.ca/hac/", note: "Open reference text for modular arithmetic, public-key algorithms, and cryptographic foundations." }
    ],
    quiz
  }
};
