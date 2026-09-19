// English-only publication unit.
const quizItem = (question, correct, explanation, wrong) => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
  optionNotes: [`Correct: ${explanation}`, `Incorrect: ${wrong[0]} is not the tested property.`, `Incorrect: ${wrong[1]} is unrelated to this construction.`, `Incorrect: ${wrong[2]} confuses another cryptographic idea.`]
});

const quiz = [
  quizItem("What does square-and-multiply make efficient?", "Modular exponentiation", "It scans the exponent in binary, squaring at each step and multiplying only when the relevant bit is one.", ["Prime-factor recovery from any modulus", "Elliptic-curve plotting", "Password storage without a hash"]),
  quizItem("What is the Miller–Rabin test used for in RSA key generation?", "Probabilistic primality testing", "It tests whether a large candidate is probably prime using repeated modular exponentiation and witnesses.", ["Encrypting the message", "Choosing a hash digest", "Compressing a ciphertext"]),
  quizItem("Why is textbook RSA with a small public exponent and small message unsafe?", "The modulus may not affect the exponentiation", "If m^e is smaller than n, the ciphertext can expose an ordinary e-th root of the message.", ["The private key becomes public by definition", "RSA cannot use prime numbers", "The ciphertext always has two components"]),
  quizItem("What is the key lesson from the RSA man-in-the-middle example?", "A receiver must not decrypt arbitrary attacker-crafted ciphertexts for the attacker", "The lecture shows how an attacker can multiply a ciphertext by k^e and recover the original message from the returned decryption.", ["Public keys must never be shared", "RSA requires no validation", "Elliptic curves prevent every network attack"]),
  quizItem("How does ElGamal differ from the RSA ciphertext shape shown here?", "It produces two ciphertext components", "The lecture writes y1=α^k mod p and y2=xβ^k mod p, so the ciphertext is a pair.", ["It has no private value", "It uses only a hash", "It always uses a symmetric key"]),
  quizItem("What hard problem motivates ElGamal in the lecture?", "The discrete logarithm problem", "Recovering the secret exponent from public group values is intended to be difficult.", ["Sorting a database", "Finding a quadratic residue by inspection", "Counting participants in a meeting"]),
  quizItem("What is the standard elliptic-curve equation introduced?", "y² = x³ + ax + b", "The constants a and b define the curve, subject to the non-singularity condition.", ["y = x² + a", "n = pq", "C = M + e"]),
  quizItem("What is the point at infinity O used for?", "The identity element for elliptic-curve addition", "A point and its inverse add to O, and adding O to a point leaves that point unchanged.", ["A participant placeholder", "A public RSA exponent", "A Miller–Rabin witness"]),
  quizItem("What makes a curve non-singular in the lecture's condition?", "4a³ + 27b² is not zero", "The nonzero discriminant condition gives distinct roots and avoids a singular curve.", ["a and b must both be zero", "The curve must have no points", "The modulus must be 33"])
  ,quizItem("What does RSA encryption compute in the lecture's notation?", "C=M^e mod n", "The message representative is raised to the public exponent modulo the public modulus.", ["C=M+d", "C=n/e", "C=φ(M)"])
  ,quizItem("What does RSA decryption compute?", "M=C^d mod n", "The private exponent is applied to the ciphertext modulo n.", ["M=C−d", "M=n^d without reduction", "M=e/C"])
  ,quizItem("Why must RSA's p and q remain secret?", "Their factors reveal the private-key computation", "Knowing p and q gives φ(n), which enables the modular inverse used for d.", ["The public modulus would disappear", "The public exponent cannot be selected", "The ciphertext would gain a second component"])
  ,quizItem("What happens when Miller–Rabin reaches a nontrivial square root of 1?", "The candidate is identified as composite", "A witness such as the 561 example exposes a factor through a gcd.", ["The candidate is encrypted", "The RSA private key is published", "The curve becomes singular"])
  ,quizItem("What is the role of the random integer k in ElGamal?", "It randomizes the ciphertext for the message", "The sender uses k to form both ciphertext components without revealing the private exponent.", ["It is the receiver's long-term private key", "It is a hash output only", "It selects the elliptic-curve identity"])
  ,quizItem("Which ElGamal value is public in the lecture?", "β=α^a mod p", "β is shared while the exponent a remains private.", ["The secret exponent a", "The sender's random k only", "The plaintext x after encryption"])
  ,quizItem("What cancels during ElGamal decryption?", "The shared β^k factor and its modular inverse", "Multiplying y2 by the inverse of y1^a removes the masking group element.", ["The prime p", "The message x", "Both ciphertext components permanently"])
  ,quizItem("Why does ElGamal need more bandwidth than the RSA form shown?", "Its ciphertext has two components", "The pair (y1,y2) is transmitted rather than one RSA ciphertext value.", ["It sends the private exponent", "It repeats the plaintext in clear text", "It uses no modular arithmetic"])
  ,quizItem("What geometric construction defines P+Q on an elliptic curve?", "Reflect the third line-curve intersection across the x-axis", "The line through P and Q produces a third intersection whose reflection is the sum.", ["Multiply the coordinates directly", "Take the ordinary midpoint", "Hash both point labels"])
  ,quizItem("What construction gives 2P?", "Use the tangent at P and reflect the third intersection", "Point doubling is the tangent version of the chord-and-reflection rule.", ["Add P to the modulus", "Take P's square coordinate", "Use the RSA exponent d"])
  ,quizItem("What is kG in the elliptic-curve discussion?", "G added to itself k times", "Repeated group addition produces scalar multiplication.", ["A field inverse only", "A hash of G", "A second curve parameter"])
  ,quizItem("What does the elliptic-curve hard reverse problem ask?", "Recover k from G and kG", "Forward scalar multiplication is easy to perform, while the discrete-log-style reverse is intended to be hard.", ["Recover a slide title", "Find p and q from every point", "Sort the curve's x coordinates"])
  ,quizItem("What is the inverse of a point P in the geometric picture?", "Its reflection across the x-axis", "P and −P add to the point at infinity.", ["The point with the same y coordinate only", "The RSA public exponent", "A random point outside the curve"])
  ,quizItem("What does P+O equal?", "P", "O is the additive identity for the elliptic-curve group.", ["O²", "−P always", "The curve discriminant"])
  ,quizItem("What did the instructor defer to the next class?", "Numerical point addition and elliptic-curve encryption/authentication details", "The recording ends after group foundations and announces continuation with formulas and cryptographic procedures.", ["Miller–Rabin's definition", "RSA's first key-generation step", "The meaning of a public key"])
  ,quizItem("What factor does the worked Miller–Rabin example expose for 561?", "33", "The gcd of the preceding square value minus one with 561 yields 33, proving compositeness.", ["2", "17 only", "2579"])
];

export const ebb6403Lecture20260918073357 = {
  en: {
    title: "RSA efficiency and attacks, ElGamal, and elliptic-curve foundations",
    lede: "This lecture completes the RSA efficiency discussion with square-and-multiply and Miller–Rabin testing, examines small-exponent and man-in-the-middle weaknesses, introduces ElGamal, and begins elliptic-curve cryptography through group addition and the point at infinity.",
    instructionalInterval: "00:00:19–01:04:20 source time (2× visible-tab capture; participant-only idle tail excluded)",
    reviewLevel: "View-only recording; beginning/10%/25%/50%/75%/90%/near-end sweep, 2× Lecture Atlas Companion Audio + visible-tab capture, source-time-restored transcript, and both teaching boundaries verified",
    coverage: [
      { title: "RSA computation and key generation", body: "RSA encryption and decryption use modular powers; square-and-multiply makes those powers practical, while prime selection and modular inversion drive key generation." },
      { title: "Miller–Rabin primality testing", body: "Write n−1=2ᵏm with m odd, evaluate repeated modular powers, and use witness outcomes to classify a large candidate as composite or probably prime." },
      { title: "RSA weaknesses and defensive behavior", body: "Small public exponents can expose small messages, and a man-in-the-middle can exploit a decryption oracle; padding, validation, and refusing arbitrary decryption requests matter." },
      { title: "ElGamal encryption", body: "ElGamal publishes p, α, and β=αᵃ mod p, then encrypts with a fresh random k into y₁ and y₂; its security is tied to discrete-log hardness." },
      { title: "Elliptic-curve group intuition", body: "Points on a non-singular curve form a group under geometric addition: draw a line through two points, reflect the third intersection, and obtain the sum." },
      { title: "Point multiplication and the hard reverse", body: "Repeated addition computes kG efficiently, while recovering k from G and kG is intended to be difficult; this is the elliptic-curve cryptography design intuition." },
      { title: "The point at infinity", body: "The point O acts as the identity, with P+(−P)=O and P+O=P. The next lecture is expected to continue numerical point addition, encryption, authentication, and signatures." }
    ],
    takeaway: "Efficient public-key cryptography is a system, not just an exponent formula: key generation, parameter size, message encoding, oracle behavior, randomness, and group assumptions all shape its security.",
    slideTrail: [
      { time: "00:00:19", title: "Square and multiply algorithm", note: "Binary exponentiation is used to compute modular powers efficiently." },
      { time: "00:07:06", title: "Miller–Rabin test", note: "The 561 example shows repeated squaring and a nontrivial factor witness." },
      { time: "00:16:44", title: "RSA attack: small exponent", note: "The small-message/small-public-exponent example exposes why textbook RSA is unsafe." },
      { time: "00:24:30", title: "Man-in-the-middle attack on RSA", note: "Ciphertext tampering with kᵉ and a decryption oracle is analyzed." },
      { time: "00:32:48", title: "ElGamal public-key cryptosystem", note: "Two ciphertext components and discrete-log hardness are introduced." },
      { time: "00:48:56", title: "Elliptic curve cryptography", note: "The standard curve equation, point addition, and repeated point multiplication are developed." },
      { time: "01:04:20", title: "Verified teaching boundary", note: "Elliptic-curve foundations remain instructional at the marked end; participant-only content follows." }
    ],
    summary: [
      { title: "1. RSA needs efficient exponentiation and prime generation", sourceRefs: ["00:00:19–00:07:06", "Square and multiply algorithm; Miller–Rabin test"], paragraphs: ["The lecture revisits RSA's encryption C=M^e mod n and decryption M=C^d mod n. Square-and-multiply reads the exponent in binary, squares the running value at each bit, and multiplies only for a one bit.", "Key generation is dominated by finding large primes p and q. Miller–Rabin writes n−1=2ᵏm with m odd, tests a witness through repeated modular powers, and uses a nontrivial square root of one to identify compositeness. The worked n=561, a=2 example reaches 33 as a factor."] },
      { title: "2. Textbook RSA can fail through parameters and oracles", sourceRefs: ["00:16:44–00:32:48", "RSA attack: small exponent; Man-in-the-middle attack on RSA"], paragraphs: ["With a very small public exponent and a small message, m^e may remain below n, so the modulus does not wrap the value and an attacker can take an ordinary e-th root. The lecture uses a small RSA example to make this failure visible.", "The man-in-the-middle example modifies C into C·k^e, asks the receiver to decrypt, and divides the returned value by k. The stated defense is to avoid acting as a decryption oracle for arbitrary callers; real deployments also require standardized encoding/padding and authenticated protocols."] },
      { title: "3. ElGamal encrypts with a randomized pair", sourceRefs: ["00:32:48–00:40:00", "ElGamal public-key cryptosystem"], paragraphs: ["ElGamal selects a prime p, a primitive element α, and a private exponent a; β=α^a mod p is public. For message x and fresh random k, the ciphertext is the pair y₁=α^k mod p and y₂=xβ^k mod p.", "Decryption multiplies y₂ by the modular inverse of y₁^a, cancelling β^k. The transcript's numerical illustration uses p=2579, α=2, a=765, β=949, x=1299, and k=853. The trade-off called out in the lecture is a larger ciphertext than RSA and reliance on discrete-log hardness."] },
      { title: "4. Elliptic-curve points form an additive group", sourceRefs: ["00:40:00–00:56:00", "Elliptic curve cryptography"], paragraphs: ["The lecture introduces the curve y²=x³+ax+b and focuses on non-singular curves. Given two points P and Q, a line through them meets the curve at a third point; reflecting that point across the x-axis defines P+Q. Tangent construction gives point doubling.", "Repeated addition gives 2P, 3P, and kG. Forward computation is easy when the base point G and the number of additions are known, but finding k from G and kG is intended to be hard. This discrete-log-style asymmetry supports elliptic-curve cryptography with compact keys."] },
      { title: "5. The point at infinity supplies the identity", sourceRefs: ["00:56:00–01:04:20", "Elliptic curve cryptography"], paragraphs: ["For a non-singular curve, the lecture uses the discriminant condition 4a³+27b²≠0. The point O at infinity is introduced so that P+(−P)=O and P+O=P; it completes the group intuition needed for cryptographic operations.", "The instructor defers numerical addition formulas, elliptic-curve encryption/decryption, authentication, and digital signatures to the next class. No assignment, homework, lab, project, recommended reference, or substantive student question was stated in this recording."] }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [], announcements: [] },
    keyTerms: [
      { term: "Square-and-multiply", definition: "Binary modular-exponentiation method that squares each step and multiplies for one bits." },
      { term: "Miller–Rabin test", definition: "Probabilistic primality test based on repeated modular squaring of a witness." },
      { term: "Decryption oracle", definition: "A service that decrypts attacker-selected ciphertexts and exposes information through its responses." },
      { term: "ElGamal", definition: "Randomized public-key encryption based on exponentiation in a finite group." },
      { term: "Discrete logarithm", definition: "The hard reverse problem of recovering an exponent from a public group element." },
      { term: "Elliptic-curve group", definition: "Curve points plus the point at infinity under a defined addition operation." },
      { term: "Point at infinity", definition: "The identity O for elliptic-curve addition." }
    ],
    insights: [
      { label: "Parameters", title: "Correct algebra can still be insecure", body: "Textbook RSA's equations may be correct while small exponents, small messages, or missing encoding make the construction exploitable." },
      { label: "Oracles", title: "A cryptosystem's interface is part of its security", body: "The man-in-the-middle example turns a decryption endpoint into an information leak, so protocol behavior matters as much as the private exponent." },
      { label: "Randomness", title: "ElGamal needs fresh encryption randomness", body: "The random k changes the ciphertext pair and is part of the security model rather than an optional implementation detail." },
      { label: "Groups", title: "Elliptic curves replace multiplication with point addition", body: "The group operation preserves a compact representation while retaining a difficult reverse problem for the secret scalar." }
    ],
    resources: [
      { title: "RFC 8017: PKCS #1 v2.2", url: "https://www.rfc-editor.org/rfc/rfc8017.html", note: "IETF specification covering RSA primitives, OAEP encryption, and signature schemes." },
      { title: "NIST FIPS 186-5: Digital Signature Standard", url: "https://csrc.nist.gov/pubs/fips/186-5/final", note: "Primary NIST standard for approved digital-signature methods and elliptic-curve usage." },
      { title: "NIST SP 800-56A Revision 3", url: "https://csrc.nist.gov/pubs/sp/800/56/a/r3/final", note: "Primary guidance for discrete-log-based key-establishment schemes." },
      { title: "NIST SP 800-57 Part 1 Revision 5", url: "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final", note: "Key-management guidance for protecting, using, rotating, and retiring cryptographic keys." }
    ],
    quiz
  }
};
