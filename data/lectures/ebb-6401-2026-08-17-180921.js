// English-only publication unit for the verified 17 August 2026 recording.
const quizSeed = [
  ["What is a smart contract in the lecture's opening definition?", ["A computer program running on top of a blockchain", "A scanned paper agreement", "A central-bank database", "A private key"], 0, "The lecture defines a smart contract as executable program logic deployed on a blockchain."],
  ["What determines how parties interact with a smart contract?", ["A declared set of rules and conditions", "A hidden verbal promise", "The video duration", "A bank employee's manual decision"], 0, "The parties agree to explicit conditions that the program can evaluate."],
  ["What happens when the encoded conditions are satisfied?", ["The contract can execute the specified action automatically", "The blockchain deletes the transaction", "The public key becomes secret", "The program waits for an unrelated mediator"], 0, "Condition satisfaction is the trigger for deterministic execution."],
  ["Why did the instructor compare a smart contract to a cryptographic box?", ["Value or data is released only when the required conditions unlock it", "Every contract is stored inside physical hardware", "Only central banks can open it", "The box hides all rules from participants"], 0, "The box analogy explains conditional control of value or information."],
  ["What role can a smart contract reduce in a transaction?", ["A trusted intermediary that manually enforces the rules", "Every network node", "All cryptographic verification", "The need for participants"], 0, "Code-based enforcement can reduce some intermediary functions, though real systems may still require governance and external trust."],
  ["Which benefit follows most directly from removing manual intermediary steps?", ["Lower coordination cost and faster execution", "Guaranteed legal validity everywhere", "Zero software defects", "Unlimited transaction capacity"], 0, "Fewer manual hand-offs can reduce cost and delay; the other claims are not guaranteed."],
  ["At what levels can contract rules be enforced according to the lecture?", ["Protocol or application level", "Only at the user-interface level", "Only outside the blockchain", "Only in a paper ledger"], 0, "The lecture explicitly places machine-enforceable rules at protocol or application level."],
  ["Why can standardised transaction rules reduce cost?", ["They make evaluation and execution repeatable", "They remove every source of uncertainty", "They eliminate the need for code", "They make every transaction identical"], 0, "Repeatable rules reduce bespoke coordination, but do not remove uncertainty or code."],
  ["What is the first agreement stage discussed?", ["Reaching agreement on conditions, rights, and obligations", "Generating a random private key", "Deleting the contract", "Paying every possible fee"], 0, "Parties must first agree what the contract is supposed to express."],
  ["What is formalising an agreement?", ["Encoding the agreed relationship and instructions as machine-readable rules", "Translating code into a paper-only memo", "Removing all conditions", "Choosing a recording filename"], 0, "Formalisation converts human intentions into an executable representation."],
  ["What is enforcing an agreement?", ["Executing the encoded outcome once the conditions are met", "Renegotiating every condition after execution", "Giving one party unrestricted control", "Replacing signatures with passwords"], 0, "Enforcement is the programmatic application of the already-declared rules."],
  ["Why is machine readability essential to smart-contract execution?", ["The runtime must be able to evaluate conditions and invoke actions", "It guarantees the source code is bug-free", "It makes private keys public", "It prevents all disputes"], 0, "Automation requires unambiguous executable logic, not a guarantee of correctness or dispute prevention."],
  ["What does deterministic execution mean in this context?", ["The same valid inputs and state lead to the rule-defined result", "The contract predicts future prices perfectly", "Every participant receives the same private key", "The network ignores state"], 0, "Determinism makes rule execution reproducible across validating nodes."],
  ["Which benefit was listed after agreement enforcement?", ["Real-time updates and faster execution", "Infinite storage", "No need for testing", "Automatic recovery of lost keys"], 0, "The instructor lists execution speed and timely updates among the benefits."],
  ["Why can smart contracts lower middleman fees?", ["Some coordination and verification steps move into shared code", "Gas is always free", "Every blockchain is privately owned", "Signatures are unnecessary"], 0, "Shared executable rules can replace selected manual services; network execution may still carry fees."],
  ["What does a public/private key pair primarily support?", ["Identity-linked signing and verification without revealing the private key", "Automatic contract correctness", "Video compression", "Database deletion"], 0, "The private key creates an authorization proof and the public key supports verification."],
  ["Which key should remain secret?", ["The private key", "The public key", "The block number", "The contract address"], 0, "The security of a digital signature depends on keeping the private signing key confidential."],
  ["What is the purpose of a signing algorithm?", ["Create a cryptographic authorization proof for a message or transaction", "Generate a lecture transcript", "Select the cheapest mediator", "Hide every contract function"], 0, "Signing binds an authorization proof to data using the signer's private key."],
  ["What is the purpose of a verification algorithm?", ["Check a signature against the message and public key", "Recover the private key", "Rewrite the contract conditions", "Estimate video length"], 0, "Verification tests authenticity and integrity without exposing the secret key."],
  ["What does a valid signature establish?", ["The message matches a proof produced by the corresponding private key", "The contract is legally enforceable in every country", "The code contains no vulnerability", "The transaction has no cost"], 0, "A signature proves cryptographic correspondence, not universal legality, correctness, or zero cost."],
  ["What caveat should accompany the claim that intermediaries can be removed?", ["External data, governance, law, and recovery may still require trusted processes", "Blockchains never use consensus", "Contracts cannot hold state", "Public keys must be hidden"], 0, "Automation moves trust boundaries; it does not erase every institutional or operational dependency."],
  ["What happens if the encoded rule is wrong but executes correctly?", ["The system can produce a faithfully executed wrong outcome", "The blockchain automatically repairs the requirement", "The private key changes the source code", "The result is always fair"], 0, "Code executes its specification, so incorrect requirements or implementation can still cause failure."],
  ["What practical sequence did the instructor preview for later modules?", ["Write Solidity, deploy a contract, and understand gas and variables", "Study only paper contracts", "Avoid all hands-on work", "Replace Ethereum with a spreadsheet"], 0, "The course roadmap moves from theory to Solidity coding, deployment, gas, and program variables."],
  ["Why should contract conditions be tested before deployment?", ["Deployed rules may execute irreversibly and affect value", "Testing makes private keys public", "Testing removes consensus", "Testing guarantees regulatory approval"], 0, "Pre-deployment tests reduce the risk of irreversible or costly rule errors."],
  ["What is the lecture's central design lesson?", ["Agreement intent, executable rules, and cryptographic authorization must align", "Automation alone guarantees trust", "Every business process belongs on a blockchain", "Human-readable requirements are unnecessary"], 0, "A useful contract connects what parties intend, what code enforces, and how actions are authorized."],
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `${option} is correct: ${explanation}`
    : `${option} is not correct: it conflicts with the lecture's smart-contract, agreement-lifecycle, or cryptographic-key model.`),
}));

export const ebb6401Lecture20260817 = {
  en: {
    title: "Smart contracts: executable agreements, lifecycle, and cryptographic trust",
    lede: "This introductory lecture defines smart contracts as blockchain programs with condition-driven execution, explains agreement definition/formalisation/enforcement, and connects automation to public/private keys, signing, verification, cost, speed, and the later Solidity hands-on roadmap.",
    instructionalInterval: "03:59–32:44 source time (38:02 reported duration; waiting-room opening and participant-only tail excluded)",
    reviewLevel: "Full-timeline beginning/10%/25%/50%/75%/90%/near-end sweep, 2× visible-tab capture, source-time-restored transcript, 29 sampled frames, and verified idle-tail exclusion.",
    coverage: [
      { title: "Executable blockchain rules", body: "A smart contract is a computer program on a blockchain whose declared conditions govern interactions and trigger actions." },
      { title: "Cryptographic-box intuition", body: "Value or information is treated as locked until the program verifies that the required conditions are satisfied." },
      { title: "Agreement lifecycle", body: "Parties reach agreement, formalise rights and obligations as machine-readable rules, and let the runtime enforce the encoded result." },
      { title: "Benefits and boundaries", body: "Automation can improve speed, update visibility, and coordination cost, but it relocates rather than eliminates trust and governance." },
      { title: "Keys, signatures, and roadmap", body: "Public/private keys, signing, and verification support authorised transactions; later modules will implement and deploy Solidity contracts." },
    ],
    takeaway: "A smart contract is useful only when human agreement, executable conditions, cryptographic authorization, and the surrounding legal/operational process describe the same intended outcome.",
    slideTrail: [
      { time: "03:59", title: "Smart contract — opening whiteboard", note: "Teaching begins after the participant-only waiting segment." },
      { time: "04:39", title: "Definition of a smart contract", note: "A smart contract is introduced as a computer program working on top of a blockchain." },
      { time: "07:12", title: "Rules, conditions, and automatic execution", note: "The parties' interaction is governed by conditions; meeting them triggers the programmed action." },
      { time: "08:10", title: "Cryptographic box", note: "The whiteboard compares the contract to a box containing value that unlocks only when conditions are met." },
      { time: "11:09", title: "Trusted third party and direct interaction", note: "The instructor uses banking/RBI mediation to motivate direct rule-based coordination." },
      { time: "13:33", title: "Transaction cost", note: "Removing selected manual intermediary steps is connected to lower coordination cost." },
      { time: "14:44", title: "Self-enforceable rules", note: "Rules can be standardised and enforced at protocol or application level." },
      { time: "17:23", title: "Reaching an agreement", note: "Conditions, rights, and obligations are the human agreement that must precede code." },
      { time: "19:00", title: "Formalising the agreement", note: "Relationships, instructions, and assets are represented in machine-readable rules." },
      { time: "22:24", title: "Enforcing the agreement", note: "Once the conditions are met, the encoded outcome can execute without a party denying the already-authorised action." },
      { time: "25:19", title: "Benefits of smart contracts", note: "The whiteboard lists faster execution, real-time updates, fewer mediators, lower fees, and reduced delivery delay." },
      { time: "29:58", title: "Public/private keys, signing, and verification", note: "Three cryptographic operations are listed as a foundation for blockchain transaction authorization." },
      { time: "31:46", title: "Course syllabus", note: "The instructor briefly displays the syllabus for a student who joined late." },
      { time: "32:03", title: "Solidity hands-on roadmap", note: "The roadmap moves from four to five theory sessions toward gas, ETH, deployment, Solidity variables, and hands-on contract writing." },
    ],
    summary: [
      {
        title: "1. A smart contract turns agreed conditions into executable state change",
        sourceRefs: ["04:39–07:33", "Whiteboard: smart-contract definition"],
        paragraphs: ["The lecture begins with a concise model: a smart contract is a computer program working on top of a blockchain. It contains rules and conditions that parties agree will govern their interaction. When the relevant condition becomes true, the program invokes the corresponding action.", "The word 'smart' therefore refers to automation, not independent intelligence. The code does not understand intent beyond what is represented in its state and functions. It deterministically evaluates the conditions that developers encoded."],
        formula: "C(x)=\\text{true}\\;\\Longrightarrow\\;\\operatorname{execute}(A)"
      },
      {
        title: "2. The cryptographic-box analogy explains conditional control",
        sourceRefs: ["08:10–11:08", "Whiteboard: accounts and locked value"],
        paragraphs: ["The instructor sketches two accounts and describes the contract as a cryptographic box containing value or information. A requested transfer unlocks only when the specified conditions are satisfied; otherwise the value remains unavailable.", "This is a useful mental model for escrow, approvals, and conditional payments. It is not a claim that the code can verify every real-world fact by itself. If a condition depends on an external event, the contract needs an authenticated input or oracle, creating a new trust boundary."],
        formula: "\\operatorname{release}(v)=\\begin{cases}v,&C=1\\\\0,&C=0\\end{cases}"
      },
      {
        title: "3. Reaching, formalising, and enforcing are different responsibilities",
        sourceRefs: ["17:23–25:18", "Whiteboard: agreement lifecycle"],
        paragraphs: ["Reaching agreement is a human and organisational activity: parties specify conditions, rights, and obligations. Formalising translates that agreement into machine-readable state, functions, and constraints. Enforcing is the runtime step that applies the encoded consequence when the conditions are met.", "Separating these stages exposes three different failure modes. The parties may misunderstand the requirement, developers may encode it incorrectly, or the deployed runtime may receive incorrect external data. Successful execution proves only that the machine followed its current code and inputs."],
      },
      {
        title: "4. Automation can reduce cost and delay, but it does not erase institutions",
        sourceRefs: ["11:09–17:22", "25:19–28:43", "Whiteboard: intermediary and benefits"],
        paragraphs: ["The lecture uses banking and RBI mediation to motivate direct programmatic exchange. Standardised rules can reduce repeated manual checking, middleman fees, and delivery delay, while shared state can make updates available quickly to authorised participants.", "The stronger claim—removing every intermediary—needs qualification. Legal interpretation, identity recovery, external-data validation, dispute resolution, upgrades, and incident response still require governance. Smart contracts move selected enforcement steps into code and therefore change where trust is placed."],
      },
      {
        title: "5. Digital signatures authorize transactions without exposing the signing secret",
        sourceRefs: ["29:58–31:33", "Whiteboard: key generation, signing, verification"],
        paragraphs: ["The instructor lists public/private key generation, a signing algorithm, and a verification algorithm. A participant keeps the private key secret and uses it to create a signature for a message or transaction. Other nodes use the public key to verify that the signature corresponds to that message.", "Verification supports authenticity and integrity; it does not prove that the signed request is wise, legal, or free of a compromised endpoint. Contract authorization logic must still check roles, replay protection, state, and any business-specific constraints."],
        formula: "\\sigma=\\operatorname{Sign}_{sk}(m),\\qquad \\operatorname{Verify}_{pk}(m,\\sigma)=\\text{true}"
      },
      {
        title: "6. The course deliberately moves from theory to Solidity implementation",
        sourceRefs: ["31:46–32:44", "Syllabus view and instructor roadmap"],
        paragraphs: ["The closing syllabus view explains the learning sequence. The first four to five lectures build theoretical understanding of smart contracts. A later module introduces gas, ETH, deployment, Solidity contract writing, variables, global variables, and parameters through hands-on work.", "That sequence is sensible because implementation choices are easier to evaluate after students can distinguish agreement intent, formal representation, execution, and cryptographic authorization. The eventual lab should test both expected behaviour and failure cases before any public deployment."],
      },
    ],
    keyTerms: [
      { term: "Smart contract", definition: "A blockchain-hosted program that evaluates declared rules and updates state or transfers value when conditions are met." },
      { term: "Condition", definition: "A Boolean rule whose truth determines whether an encoded action is permitted or triggered." },
      { term: "Formalisation", definition: "Translation of agreed rights, obligations, and processes into machine-readable state and rules." },
      { term: "Enforcement", definition: "Execution of the encoded consequence after the required conditions are satisfied." },
      { term: "Public key", definition: "A shareable cryptographic value used to verify signatures created by the corresponding private key." },
      { term: "Private key", definition: "A secret cryptographic value used to authorize messages or transactions through digital signatures." },
      { term: "Digital signature", definition: "A cryptographic proof binding a message to a private-key holder without revealing the private key." },
      { term: "Gas", definition: "The execution-cost accounting mechanism used by Ethereum for computation and state changes." },
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [{ time: "31:46", title: "Course syllabus", detail: "The instructor displayed the course syllabus and confirmed that it outlines the theory-first sequence followed by Solidity hands-on work." }],
      studentQuestions: [],
    },
    insights: [
      { label: "Specification", title: "Automation amplifies requirement quality", body: "A contract can execute a bad requirement perfectly. Treat the natural-language agreement, executable specification, and tests as three representations that must be reviewed together." },
      { label: "Trust boundary", title: "Removing an intermediary usually creates a new dependency", body: "If a rule depends on prices, delivery, identity, or law, an oracle or governance process must supply and adjudicate that fact. Map the moved trust rather than claiming it disappeared." },
      { label: "Security", title: "A signature proves authorization, not safety", body: "A valid signature establishes cryptographic correspondence to a key. The contract must still enforce roles, nonces, limits, current state, and emergency controls." },
      { label: "Design", title: "Reaching, formalising, and enforcing should have separate tests", body: "Stakeholder acceptance tests examine intent; unit and invariant tests examine code; deployment monitoring examines runtime effects. One test layer cannot replace the others." },
      { label: "Economics", title: "Middleman cost is exchanged for protocol cost and risk", body: "Automation may reduce administrative fees and delay, but introduces gas, audit, upgrade, key-management, and incident-response costs that belong in the same business case." },
    ],
    resources: [
      { kind: "read", title: "Ethereum.org — Introduction to smart contracts", url: "https://ethereum.org/developers/docs/smart-contracts/", detail: "First-party explanation of contract code, state, accounts, transactions, execution, composability, and limitations." },
      { kind: "read", title: "Solidity documentation — Introduction to smart contracts", url: "https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html", detail: "Canonical language documentation for the later Solidity module, including storage, functions, deployment, and calls." },
      { kind: "practice", title: "Remix IDE", url: "https://remix.ethereum.org/", detail: "Use the browser IDE to compile, test, and deploy a minimal conditional-value contract in a local virtual machine before touching a public network." },
      { kind: "read", title: "Ethereum.org — Smart contract security", url: "https://ethereum.org/developers/docs/smart-contracts/security/", detail: "Connect the lecture's automatic-enforcement promise to testing, audit, authorization, and secure-development constraints." },
      { kind: "practice", title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts/", detail: "Study reusable access-control, pausing, and token patterns instead of reimplementing security-sensitive primitives from scratch." },
    ],
    quiz,
  },
};
