const quizSeed = [
  ["Which phase defines a contract's logic, conditions, outcomes, and risks?", ["Design", "Deployment", "Monitoring", "Maintenance"], 0, "Design makes the intended workflow and risk controls explicit before code is written."],
  ["What is written during the development phase?", ["Solidity or another platform-suitable implementation", "Only a meeting agenda", "A participant list", "A blockchain history rewrite"], 0, "Development turns the design into executable code and tests."],
  ["Why test a smart contract before production deployment?", ["To expose bugs, vulnerabilities, and unsafe edge cases", "To make consensus unnecessary", "To guarantee legal validity", "To hide the source code"], 0, "Unit, integration, and system tests probe behaviour before immutability raises the cost of errors."],
  ["What happens when a contract is deployed to a blockchain?", ["Its code becomes available for execution under network consensus", "Its private key is published", "Its state becomes an editable spreadsheet", "Its tests are deleted"], 0, "Deployment commits executable code to a specific network and its consensus rules."],
  ["What is the purpose of monitoring after deployment?", ["Detect performance, security, and unforeseen issues in operation", "Change old blocks silently", "Replace every test", "Remove access control"], 0, "Monitoring supplies operational evidence and can trigger response or maintenance."],
  ["Why are upgradeable contracts treated carefully?", ["Changing deployed behaviour needs explicit proxy and governance controls", "Every contract can be edited by any user", "Upgrades remove the need for audits", "Immutability means no state exists"], 0, "Upgradeability adds a powerful administrative path that must itself be governed."],
  ["Which tool did the lecture recommend for browser-based Solidity work?", ["Remix IDE", "A video editor", "A spreadsheet macro", "A DNS server"], 0, "Remix is a free web IDE for compiling and testing Solidity contracts."],
  ["What does a constructor typically do?", ["Initialise contract state at deployment", "Run only after every transfer", "Delete the bytecode", "Authenticate an unrelated email"], 0, "A constructor establishes initial values and setup once during creation."],
  ["What does a Solidity modifier control?", ["Reusable preconditions around function execution", "The monitor's screen brightness", "A PDF page number", "The blockchain's history"], 0, "Modifiers make checks such as authorization or state requirements consistent."],
  ["What is gas in Ethereum?", ["An accounting unit for computation and state-changing execution", "A storage file format", "A cryptographic hash", "A participant role"], 0, "Gas prices execution work and helps prevent unconstrained computation."],
  ["What is a receive function used for?", ["Handling plain Ether transfers when no calldata is supplied", "Compiling a PDF", "Changing a private key", "Reading every off-chain file"], 0, "The receive path is a defined Solidity entry point for value transfers."],
  ["Why emit an event?", ["To expose an indexed log for off-chain clients and monitoring", "To rewrite contract state without a transaction", "To store a large PDF on-chain", "To bypass consensus"], 0, "Events provide searchable execution evidence without pretending to be full storage."],
  ["What is a sensible design consideration for a smart contract?", ["Define the objective, workflow, attack vectors, and mitigations", "Skip failure paths", "Publish private keys", "Assume all inputs are true"], 0, "Security begins with a concrete workflow and an explicit threat model."],
  ["Why use modular contract design?", ["A component can evolve with less disruption to the whole system", "It guarantees zero gas", "It removes interfaces", "It makes every function public"], 0, "Modules isolate responsibilities and make review and maintenance more tractable."],
  ["What is the role of an integration test?", ["Check that multiple contract or system components work together", "Prove a market price", "Replace unit tests", "Hide a deployment address"], 0, "Integration tests cover interactions that isolated unit tests cannot reveal."],
  ["What is a deployment challenge mentioned in the lecture?", ["Network transition, maintenance, monitoring, and performance constraints", "Unlimited storage", "No need for a network", "Automatic legal approval"], 0, "Production deployment inherits the target network's operational constraints."],
  ["Why use a blockchain for document verification?", ["Record a tamper-evident identifier and enable later verification", "Store every full document publicly", "Eliminate issuer responsibility", "Guarantee the document's truth"], 0, "A commitment and verification workflow helps detect mismatch without replicating all bytes."],
  ["What should remain off-chain in a scalable certificate system?", ["Large certificate files and sensitive payloads", "Every transaction identifier", "The verification rule", "The contract address"], 0, "The lecture separates lightweight metadata on-chain from bulky files in controlled storage."],
  ["What does IPFS contribute in the example?", ["Content-addressed storage for the complete document payload", "Consensus over Ethereum blocks", "A replacement for a wallet signature", "Gas accounting"], 0, "IPFS can hold large content while a blockchain records a compact reference or hash."],
  ["Which three layers are used in the certificate example?", ["User, frontend, and smart-contract layers", "Audio, video, and subtitle layers", "Miner, printer, and browser layers", "Only the storage layer"], 0, "The layered view separates actors, interface logic, and on-chain enforcement."],
  ["What does an externally owned account use to authorize a transaction?", ["A private key signature", "An IPFS filename", "A PDF bookmark", "A gas-free event"], 0, "EOAs are controlled by keys; the signature proves authorization for an invocation."],
  ["What controls a contract account?", ["Deployed code and persistent state", "A participant's webcam", "A paper certificate", "A DNS record"], 0, "Contract accounts execute their code when called and retain state on the network."],
  ["What should happen when certificate verification finds a mismatch?", ["Return a clear failure path and reject the verification", "Silently accept it", "Erase the blockchain", "Reveal the issuer's private key"], 0, "A verification system must make failure explicit and auditable."],
  ["Why should only metadata be placed on-chain in the lecture's design?", ["Blockchain storage is expensive while documents can be large", "Metadata is always private", "Files cannot be hashed", "IPFS requires no address"], 0, "A compact on-chain commitment plus controlled off-chain content balances integrity and scale."],
  ["What is the lecture's central engineering lesson?", ["Align intent, code, authorization, evidence, testing, and governance", "Deploy every workflow to a public chain", "Treat a successful transaction as proof of correctness", "Ignore upgrades and monitoring"], 0, "A reliable contract is a socio-technical system, not just a bytecode transaction."]
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `${option} is correct: ${explanation}`
    : `${option} is not correct: it conflicts with the lecture's lifecycle, Solidity, verification, or governance model.`)
}));

export const ebb6401Lecture20260902 = {
  en: {
    title: "Smart-contract lifecycle, Solidity planning, and Ethereum certificate verification",
    lede: "This lecture walks from design and testing through deployment, monitoring, and maintenance, then applies Solidity and Ethereum layering to a certificate-verification system with lightweight on-chain metadata and large off-chain documents.",
    instructionalInterval: "00:04:18–01:24:53 source time (01:26:06 reported duration; participant setup and idle tail excluded)",
    reviewLevel: "Full beginning/10%/25%/50%/75%/90%/near-end sweep, 2× visible-tab capture, source-time-restored transcript, 82 sampled frames, and verified participant-only idle-tail exclusion.",
    coverage: [
      { title: "Lifecycle phases", body: "Design, development, testing, deployment, monitoring, and maintenance form a repeatable contract lifecycle." },
      { title: "Solidity building blocks", body: "State variables, constructors, modifiers, receive/fallback paths, events, and gas shape an implementation." },
      { title: "Planning and tool practice", body: "Remix, testing layers, modular design, version control, security review, and deployment constraints support implementation." },
      { title: "Certificate-verification workflow", body: "An issuer signs a document, a requester submits its identifier, and an application verifies the on-chain commitment." },
      { title: "Three-layer architecture", body: "User, frontend, and smart-contract layers connect wallets, access control, metadata, and document storage." },
      { title: "Hybrid storage and governance", body: "Keep compact metadata and hashes on-chain, larger files in content-addressed storage, and upgrades and disputes governed explicitly." }
    ],
    takeaway: "A production smart contract is a tested state machine surrounded by keys, interfaces, evidence, storage, monitoring, and governance; the blockchain transaction is only one part of the system.",
    slideTrail: [
      { time: "00:04:18", title: "Smart-contract lifecycle", note: "The instructor introduces design, development, testing, deployment, monitoring, and maintenance." },
      { time: "00:09:28", title: "Design and development", note: "Logic, conditions, outcomes, risk mitigation, Solidity, and unit tests are connected." },
      { time: "00:22:10", title: "Deployment and monitoring", note: "A tested contract is committed to a target network and observed for performance and security." },
      { time: "00:43:20", title: "Planning and development", note: "Design considerations, IDEs, Remix, modularity, GitHub, and testing strategy are outlined." },
      { time: "00:54:00", title: "Document-verification problem", note: "The lecture motivates an issuer/requester workflow for digitally signed certificates." },
      { time: "01:04:30", title: "Certificate system layers", note: "User, frontend, and smart-contract responsibilities are separated." },
      { time: "01:17:12", title: "Ethereum certificate state", note: "Issuer, taker/requester, verifier, wallet connection, and certificate contract roles are sketched." },
      { time: "01:21:39", title: "Wallet and dashboard flow", note: "Issue, verify, and revoke operations connect through a dashboard and wallet." },
      { time: "01:24:31", title: "IPFS-backed certificate storage", note: "Compact metadata stays on-chain while full certificate payloads are retrieved from IPFS." },
      { time: "01:24:53", title: "Final certificate-state diagram", note: "The final sustained instruction completes the frontend, access-control, certificate-contract, and storage diagram." }
    ],
    summary: [
      { title: "1. Lifecycle phases make responsibility explicit", sourceRefs: ["00:04:18–00:22:10", "Lifecycle whiteboard"], paragraphs: ["Design defines logic, conditions, outcomes, and risks. Development writes platform-suitable code such as Solidity. Testing exercises expected and adverse cases before deployment commits code to a network.", "Monitoring and maintenance complete the lifecycle. A team needs operational signals, upgrade policy, and explicit recovery paths rather than assuming deployment is the end."], formula: "s_{t+1}=F(s_t, event, evidence)" },
      { title: "2. Solidity implementation is more than a function body", sourceRefs: ["00:09:28–00:43:20", "Solidity and planning material"], paragraphs: ["The lecture names state attributes, constructors, modifiers, receive and fallback functions, events, and gas. These pieces express initialisation, preconditions, value transfer, observability, and execution cost.", "Remix supports a practical loop of compile, deploy to a test environment, invoke functions, inspect events, and test failures. Modular design and version control make review and maintenance safer."], formula: "cost(tx)=gasUsed(tx)\times gasPrice" },
      { title: "3. Testing and deployment need failure paths", sourceRefs: ["00:22:10–00:50:00", "Testing-strategy discussion"], paragraphs: ["Unit, integration, system, and audit activities address different failure surfaces. A network transition, transaction delay, gas constraint, or monitoring gap can still break a production workflow.", "A deployment plan should therefore report both successful execution and safe behaviour when evidence is absent, contradictory, or invalid. The contract should pause, reject, dispute, or refund instead of silently accepting bad input."], formula: "s' = valid(e) ? F(s,e) : s_{reject}" },
      { title: "4. Certificate verification is a concrete smart-contract workflow", sourceRefs: ["00:54:00–01:04:30", "Document-verification example"], paragraphs: ["An issuer creates a digitally signed certificate. A requester submits an identifier through an application; the application checks the commitment or metadata recorded by the certificate contract and reports a successful or failed match.", "The design addresses manual verification, centralised databases, and sharing friction without placing every document byte on a public blockchain. Authenticity still depends on issuer keys, registration rules, and a clear revocation policy."], formula: "verify(id, h_{doc})=\mathbf{1}[H(doc)=h_{on-chain}]" },
      { title: "5. Layering separates users, interfaces, and enforcement", sourceRefs: ["01:04:30–01:21:39", "Three-layer certificate diagram"], paragraphs: ["The user layer contains issuer, requester, and verifier roles. The frontend layer provides a dashboard and wallet connection. The smart-contract layer enforces access control, issue/verify/revoke functions, and certificate state.", "This separation clarifies where a bug lives: a UI can display the wrong status, a wallet can sign the wrong call, or a contract can enforce an incomplete rule. End-to-end tests should cover all three boundaries."], formula: "user\rightarrow frontend\rightarrow contract\rightarrow storage" },
      { title: "6. Hybrid storage keeps the chain lightweight", sourceRefs: ["01:21:39–01:24:53", "IPFS and certificate-state diagram"], paragraphs: ["The lecture places compact metadata, identifiers, and hashes on-chain, while full mark sheets, degrees, or certificates can be stored in IPFS or another controlled content-addressed system. The hash links the payload to an integrity check.", "This arrangement improves scalability but introduces availability, privacy, and pinning responsibilities. A verifier needs an address, a retrievable payload, and a policy for revocation or corrected documents."], formula: "h=H(document);\quad onChain\leftarrow(id,h,issuer,revoked)" },
      { title: "7. Governance surrounds the technical path", sourceRefs: ["01:24:53–01:26:06", "Closing discussion"], paragraphs: ["The closing discussion previews further Solidity and blockchain policy work. A real certificate system needs key rotation, role administration, audit logs, privacy controls, upgrade authority, dispute handling, and compliance review.", "The durable lesson is to specify the problem, model states, test the contract and its interfaces, and document what happens when evidence or storage is unavailable. A transaction hash alone is not proof that the application solved the institutional problem."], formula: "trust=code\times keys\times evidence\times governance" }
    ],
    keyTerms: [
      { term: "Constructor", definition: "A Solidity function that initialises contract state during deployment." },
      { term: "Modifier", definition: "Reusable precondition or postcondition logic attached to a function." },
      { term: "Event", definition: "An emitted log entry that off-chain clients can index and monitor." },
      { term: "Gas", definition: "Ethereum's accounting unit for computation and state-changing execution cost." },
      { term: "Certificate contract", definition: "A contract that records certificate identifiers, metadata, and issue/verify/revoke state." },
      { term: "IPFS", definition: "Content-addressed storage used here for larger certificate payloads outside the chain." }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [] },
    suggestedPractice: {
      assignments: ["Optional: model the six lifecycle phases for a certificate contract and list one failure control for each phase."],
      homework: ["Optional: compare on-chain metadata with IPFS payload storage and explain the privacy and availability trade-offs."],
      labs: ["Optional: use Remix to implement issue, verify, and revoke functions with an access-control modifier and an event."],
      projects: ["Optional: build a local certificate-verification prototype that reports missing, mismatched, revoked, and valid documents."],
      references: ["Revisit the Solidity constructor, modifier, event, receive, and fallback sections before the next practical."],
      studentQuestions: []
    },
    insights: [
      { label: "Lifecycle", title: "Monitoring is part of correctness", body: "A contract that is correct at deployment can become unsafe when keys, dependencies, gas conditions, or storage availability change. Operational telemetry belongs in the design." },
      { label: "Storage", title: "Hash integrity is not availability", body: "A matching hash proves that retrieved bytes are the committed bytes; it does not guarantee that a revoked, private, or unavailable document can be retrieved." },
      { label: "Security", title: "A wallet signature authorizes an action, not its meaning", body: "The user may sign a valid transaction that invokes an incorrect function or stale contract. Interfaces and human-readable intent need their own review and tests." },
      { label: "Governance", title: "Revocation and correction are first-class states", body: "Certificate systems must represent expiry, revocation, replacement, and dispute explicitly instead of treating immutable publication as permanent truth." },
      { label: "Architecture", title: "Layer boundaries create testable contracts", body: "User, frontend, contract, and storage responsibilities can each be mocked and tested, making failures easier to isolate than in a monolithic demo." }
    ],
    resources: [
      { kind: "read", title: "Solidity documentation — Contracts", url: "https://docs.soliditylang.org/en/latest/contracts.html", detail: "Canonical reference for constructors, functions, modifiers, events, receive/fallback functions, and contract structure." },
      { kind: "practice", title: "Remix IDE", url: "https://remix.ethereum.org/", detail: "Compile and test issue/verify/revoke flows locally before using a public network." },
      { kind: "read", title: "Ethereum.org — Accounts", url: "https://ethereum.org/developers/docs/accounts/", detail: "Explains externally owned accounts, contract accounts, addresses, and signing." },
      { kind: "read", title: "Ethereum.org — Gas and fees", url: "https://ethereum.org/developers/docs/gas/", detail: "Connects computation, state changes, gas limits, and execution cost." },
      { kind: "read", title: "IPFS documentation — How IPFS works", url: "https://docs.ipfs.tech/concepts/how-ipfs-works/", detail: "Introduces content addressing and retrieval considerations for larger certificate payloads." },
      { kind: "read", title: "OpenZeppelin Access Control", url: "https://docs.openzeppelin.com/contracts/5.x/access-control", detail: "Production-minded role and permission patterns for issue, revoke, pause, and upgrade authority." }
    ],
    quiz,
  },
};
