const quizSeed = [
  ["Which step opens the smart-contract lifecycle described in this lecture?", ["Contract request", "Dispose", "Audit report", "Search"], 0, "The lifecycle begins when a business or user submits a contract request."],
  ["What is constructed after a request is accepted?", ["A structured contract request", "A participant grid", "A browser cookie", "A blockchain fork"], 0, "The construct-request stage turns the request into the terms and data needed for review."],
  ["Why is approval a distinct lifecycle stage?", ["An authorized party must review and accept the proposed terms", "Approval deletes the request", "Approval removes all signatures", "Approval bypasses execution"], 0, "Separating approval makes authority and accountability explicit."],
  ["What does execution do in the lifecycle?", ["Applies the approved contract actions", "Creates a title card", "Rewrites old blocks", "Stores every document byte"], 0, "Execution carries out the approved conditions and records the resulting event."],
  ["What is the purpose of records management?", ["Retain and organize contract records for later use", "Hide the contract from auditors", "Change a hash without a transaction", "Remove access controls"], 0, "Records management preserves evidence and supports controlled retention."],
  ["What does search and retrieval support?", ["Finding relevant contract records and evidence", "Mining a new consensus protocol", "Changing Solidity syntax", "Disabling audit logs"], 0, "Retrieval makes stored contract evidence usable by authorized participants."],
  ["Why are audited reports part of the lifecycle?", ["They provide reviewable evidence of activity and controls", "They guarantee legal truth", "They replace approval", "They remove the need for records"], 0, "Audited reports connect activity to accountability and control review."],
  ["What happens at renewal or disposal?", ["The contract is extended, closed, or retained according to policy", "All history is erased", "Every wallet is revoked", "Consensus stops"], 0, "Lifecycle completion requires an explicit retention, renewal, or disposal decision."],
  ["What is the central benefit of modelling nine lifecycle steps?", ["It exposes hand-offs, evidence, and control points", "It makes every process permissionless", "It eliminates exceptions", "It removes the need for testing"], 0, "A staged model reveals where authority, records, and failures must be handled."],
  ["Which artifact best supports a later audit?", ["An immutable event and its associated record", "An unlogged UI change", "A deleted request", "A private browser tab"], 0, "Auditors need durable, attributable evidence of what happened."],
  ["What should a construct-request function validate?", ["Required fields, identities, and business constraints", "The monitor resolution", "An unrelated PDF", "The user's browser theme"], 0, "Input validation prevents malformed requests from entering approval or execution."],
  ["Why should approval and execution be separated?", ["It prevents unreviewed terms from being executed", "It guarantees zero gas", "It hides the approver", "It makes records unnecessary"], 0, "The separation creates a control boundary between authorization and action."],
  ["What does an event provide to off-chain systems?", ["A searchable execution signal", "A replacement for contract state", "Free storage for videos", "A private key"], 0, "Events let dashboards and audit tools observe contract activity."],
  ["What is a safe response to an invalid request?", ["Reject it with a clear reason and preserve evidence", "Silently execute it", "Erase the request", "Publish a secret"], 0, "Explicit rejection is safer and more auditable than silent acceptance."],
  ["Why are identities important in contract records?", ["They link actions to accountable actors", "They remove authorization", "They make all data public", "They replace timestamps"], 0, "Attributable identities support authorization, audit, and dispute resolution."],
  ["What is a useful invariant for the approval stage?", ["Only an authorized approver can move a valid request to approved", "Any viewer can approve", "Approval always changes the request text", "Approved means disposed"], 0, "An approval invariant constrains who may change lifecycle state."],
  ["How does search improve operational work?", ["It reduces the time to locate authoritative evidence", "It removes retention policy", "It makes hashes mutable", "It bypasses permissions"], 0, "Efficient retrieval turns retained records into usable operational evidence."],
  ["What is the difference between a record and an audit report?", ["A record captures activity; a report interprets evidence against controls", "They are always identical", "A report is never evidence", "A record cannot be retained"], 0, "Reports summarize and assess records rather than replacing the underlying evidence."],
  ["What should renewal preserve?", ["The link between the prior contract, new terms, and authority", "Only a new title", "No history", "A different identity without explanation"], 0, "Renewal should remain traceable to the prior agreement and decision."],
  ["When is disposal appropriate?", ["After retention and legal/policy requirements are satisfied", "Immediately after execution", "Whenever search is slow", "Before audit"], 0, "Disposal is controlled by retention policy, not convenience."],
  ["Which failure is especially dangerous in a lifecycle system?", ["Executing an unapproved or altered request", "Showing a loading spinner", "Sorting a report", "Opening a dashboard"], 0, "Unapproved execution violates the core authorization boundary."],
  ["Why keep source-time slide trails in a study note?", ["They let learners reconnect claims to the recorded explanation", "They expose hidden media URLs", "They replace the transcript", "They prove legal ownership"], 0, "Timecoded trails make the note verifiable without publishing restricted media."],
  ["What is a practical test for the lifecycle?", ["Exercise valid, missing, unauthorized, and repeated requests", "Test only the happy path", "Skip records management", "Use production keys"], 0, "Negative and repeated cases reveal control and idempotency failures."],
  ["What does idempotent handling prevent?", ["A repeated request from creating duplicate effects", "All audits", "Search results", "Contract renewal"], 0, "Idempotency protects against retries and duplicate submissions."],
  ["What is the lecture's main engineering lesson?", ["Treat the contract as an auditable socio-technical lifecycle", "A transaction alone proves correctness", "Records are optional", "Approval is cosmetic"], 0, "Reliable smart-contract systems join code, people, evidence, and governance across the full lifecycle."]
];
const quiz = quizSeed.map(([question, options, answer, explanation]) => ({ question, options, answer, explanation, optionNotes: options.map((option, index) => index === answer ? `${option} is correct: ${explanation}` : `${option} is not correct because it conflicts with the lifecycle controls described in the lecture.`) }));

export const ebb6401Lecture20260907 = { en: {
  title: "Smart-contract lifecycle: from request construction to audited disposal",
  lede: "This lecture maps a smart-contract workflow as nine accountable stages: request, construction, approval, execution, records management, search and retrieval, audited reports, renewal, and disposal.",
  instructionalInterval: "00:10:51–01:01:23 source time (1:01:23 reported duration; setup and participant-only opening excluded)",
  reviewLevel: "Full beginning/10%/25%/50%/75%/90%/near-end sweep, 2× visible-tab capture, source-time transcript, and source-video-ended sidecar evidence.",
  coverage: [
    { title: "Nine lifecycle stages", body: "A request becomes a constructed, approved, executed, retained, searchable, auditable, renewable, or disposable contract record." },
    { title: "Request and approval controls", body: "Validation and explicit authority keep malformed or unapproved terms out of execution." },
    { title: "Evidence and retrieval", body: "Records, events, search, and audited reports make activity reviewable after execution." },
    { title: "Renewal and disposal", body: "Lifecycle closure follows retention, policy, and accountability requirements rather than silent deletion." }
  ],
  takeaway: "Smart-contract value comes from an auditable lifecycle around code: every transition needs an authorized actor, durable evidence, and an explicit failure or closure path.",
  slideTrail: [
    { time: "00:10:51", title: "Lifecycle overview", note: "The instructor introduces the nine stages and their hand-offs." },
    { time: "00:18:40", title: "Request and construct request", note: "Inputs, terms, and validation shape a reviewable contract request." },
    { time: "00:29:15", title: "Approval and execution", note: "Authorization precedes execution and separates decision from action." },
    { time: "00:39:50", title: "Records management", note: "Execution evidence is retained and organized for later retrieval." },
    { time: "00:49:05", title: "Search, retrieval, and audited reports", note: "Operational users locate evidence and auditors assess activity against controls." },
    { time: "00:56:30", title: "Renewal and disposal", note: "The lifecycle closes through policy-driven renewal, retention, or disposal." },
    { time: "01:01:23", title: "Final lifecycle recap", note: "The sustained instruction restates the accountable end-to-end flow." }
  ],
  summary: [
    { title: "1. A request becomes a controlled state transition", sourceRefs: ["00:10:51–00:29:15", "Lifecycle overview and request construction"], paragraphs: ["The opening stages establish what is being requested, who is involved, and which terms and constraints must be represented. Constructing a request is a data and control problem, not merely a form submission.", "Validation should reject missing, contradictory, or unauthorized inputs before the request can reach approval."], formula: "request \u2192 valid(request) ? constructed : rejected" },
    { title: "2. Approval is an explicit authorization boundary", sourceRefs: ["00:29:15–00:35:40", "Approval and execution"], paragraphs: ["Approval records an accountable decision that the proposed terms may be executed. Separating approval from execution makes it possible to test role permissions and prevent accidental action.", "A robust implementation preserves the approver, time, version, and evidence used for the decision."], formula: "approved = authorized(approver) \u2227 valid(request)" },
    { title: "3. Execution produces evidence, not just an outcome", sourceRefs: ["00:35:40–00:39:50", "Execution discussion"], paragraphs: ["Execution applies approved conditions and emits durable signals. The resulting records let operators reconstruct what happened and connect it to the approved request.", "Failures should be explicit, attributable, and safe to retry rather than silently changing state."], formula: "state_{t+1}=F(state_t, approved\u00b7event)" },
    { title: "4. Records management keeps the lifecycle usable", sourceRefs: ["00:39:50–00:49:05", "Records-management material"], paragraphs: ["Retained contract records need ownership, classification, retention, and access rules. Search and retrieval turn those records into operational evidence for authorized users.", "An event log is useful, but it does not remove the need for contextual records and retention policy."], formula: "usable\ evidence = retained(record) \u2227 retrievable(record)" },
    { title: "5. Reports and closure complete accountability", sourceRefs: ["00:49:05–01:01:23", "Audited reports, renewal, and disposal"], paragraphs: ["Audited reports interpret records against controls, helping reviewers find exceptions and demonstrate accountability. Renewal links a new term to its prior history.", "Disposal is a governed end state after retention and legal requirements are satisfied; it is not an unlogged deletion."], formula: "close = renew(policy) \u2228 dispose(afterRetention)" }
  ],
  keyTerms: [
    { term: "Construct request", definition: "The stage that turns an initial request into structured, validated contract terms." },
    { term: "Approval", definition: "An authorized decision allowing a valid request to proceed." },
    { term: "Records management", definition: "Controlled retention, organization, access, and disposition of contract evidence." },
    { term: "Audited report", definition: "A reviewable interpretation of records against defined controls or obligations." },
    { term: "Renewal", definition: "A governed continuation that remains linked to prior contract history." },
    { term: "Disposal", definition: "Policy-compliant closure or deletion after retention requirements are met." }
  ],
  courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [] },
  suggestedPractice: { assignments: ["Optional: draw the nine lifecycle stages and annotate one authorization or evidence control at each transition."], homework: ["Optional: design failure responses for missing fields, unauthorized approval, duplicate execution, and premature disposal."], labs: ["Optional: prototype request, approve, execute, search, renew, and dispose states with events and role checks."], projects: ["Optional: build an accessible lifecycle dashboard that shows state, actor, evidence, retention, and exception paths."], references: ["Review Solidity events and access-control patterns alongside records-management guidance."], studentQuestions: [] },
  insights: [
    { label: "Control", title: "Approval is a state, not a button", body: "A visible approval action is meaningful only when the contract checks identity, request validity, version, and authority." },
    { label: "Evidence", title: "Retrieval is part of correctness", body: "A record that exists but cannot be found or interpreted cannot support operations, audit, or dispute resolution." },
    { label: "Governance", title: "Disposal needs a reason", body: "Retention and disposal decisions must be explainable; silent deletion destroys the evidence needed to defend the decision." },
    { label: "Reliability", title: "Retries should not duplicate effects", body: "Explicit request identifiers and idempotent transitions make network retries safer." },
    { label: "Architecture", title: "Lifecycle boundaries are test seams", body: "Each stage can be tested for valid, invalid, unauthorized, repeated, and unavailable-evidence paths." }
  ],
  resources: [
    { kind: "read", title: "Solidity documentation — Events", url: "https://docs.soliditylang.org/en/latest/contracts.html#events", detail: "Reference for emitting searchable execution evidence." },
    { kind: "read", title: "OpenZeppelin Access Control", url: "https://docs.openzeppelin.com/contracts/5.x/access-control", detail: "Role and permission patterns for approval, execution, and administration." },
    { kind: "practice", title: "Remix IDE", url: "https://remix.ethereum.org/", detail: "Prototype lifecycle states and test unauthorized or repeated transitions." },
    { kind: "read", title: "NARA records management", url: "https://www.archives.gov/records-mgmt", detail: "Accessible guidance on retention, records, and disposition concepts." },
    { kind: "read", title: "Ethereum.org — Smart contracts", url: "https://ethereum.org/developers/docs/smart-contracts/", detail: "Context for deployed code, transactions, and contract execution." }
  ],
  quiz
} };
