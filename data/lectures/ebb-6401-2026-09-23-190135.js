const seed = [
  ["What does the EVM provide for Solidity?", ["A runtime environment", "A cloud folder", "A wallet password", "A slide editor"], 0],
  ["What does a license identifier communicate?", ["How source may be distributed", "The current gas price", "The caller address", "The block timestamp"], 0],
  ["What does pragma specify?", ["Compiler-version or compiler-feature constraints", "A user's balance", "An event payload", "A mapping key"], 0],
  ["Which Solidity type represents an Ethereum address?", ["address", "float", "char", "date"], 0],
  ["Why is a contract address important?", ["It identifies the deployed contract for later interaction", "It stores the source license", "It sets playback speed", "It replaces the compiler"], 0],
  ["What is a mapping?", ["A key-to-value association", "A loop counter", "A gas refund", "A block header"], 0],
  ["Where are state variables declared?", ["At contract level, outside functions", "Only inside loops", "Only in the constructor body", "In the browser"], 0],
  ["What happens to state variables after a function executes?", ["Their values persist in blockchain state", "They are always discarded", "They become local variables", "They become events"], 0],
  ["What is the scope of a local variable?", ["The function or block where it is declared", "Every contract on the network", "Only the compiler", "Every future block"], 0],
  ["What is a Solidity global variable?", ["A predefined value supplied by the language", "A public spreadsheet", "A private key", "A user-defined struct only"], 0],
  ["What does msg.sender identify?", ["The address calling the function", "The latest block number", "The compiler version", "The contract license"], 0],
  ["What does msg.value represent?", ["Ether attached to the call", "The function return type", "The source-code size", "The mapping length"], 0],
  ["What does block.timestamp expose?", ["The current block's timestamp", "The sender's private key", "The contract ABI", "The gas refund"], 0],
  ["What does a public variable permit?", ["Access from internal and external callers", "Access only in the constructor", "No access at all", "Only compiler access"], 0],
  ["What is the purpose of require?", ["Validate a condition and stop when it fails", "Emit every event", "Compile bytecode", "Increase gas automatically"], 0],
  ["What is assert intended to check?", ["An invariant that should never be false", "A user's password", "An external API", "A filename"], 0],
  ["What does revert do?", ["Abort and undo the transaction's state changes", "Deploy a second contract", "Change the license", "Read an indexer"], 0],
  ["What does a function modifier help avoid?", ["Repeating the same access condition in many functions", "Compiling Solidity", "Paying gas", "Declaring a contract"], 0],
  ["What does the underscore in a modifier represent?", ["The modified function body", "The contract address", "The block timestamp", "The event name"], 0],
  ["What can a pure function do?", ["Neither read nor modify state", "Only receive Ether", "Only emit events", "Only deploy contracts"], 0],
  ["What can a view function do?", ["Read state without modifying it", "Modify every state variable", "Receive Ether by default", "Change compiler versions"], 0],
  ["What does payable allow?", ["A function or address to receive Ether", "A function to skip validation", "A contract to avoid deployment", "A compiler to ignore types"], 0],
  ["When does a constructor execute?", ["Once during contract deployment", "Before every read", "After every block forever", "Only after destruction"], 0],
  ["What is gas measuring?", ["Computational resources consumed by execution", "The account's password", "The number of slides", "The contract's title"], 0],
  ["Why emit an event?", ["To log information about a successful action for off-chain consumers", "To replace state variables", "To hide a transaction", "To change a nonce automatically"], 0]
];
const quiz = seed.map(([question, options, answer]) => ({
  question, options, answer,
  explanation: `The lecture identifies ${options[answer]} as the correct concept in Solidity and Ethereum execution.`,
  optionNotes: options.map((option, index) => index === answer ? `${option} is correct.` : `${option} is not the concept described for this question.`)
}));

export const ebb6401Lecture20260923190135 = { en: {
  title: "Solidity foundations: contract structure, state, modifiers, gas, and events",
  lede: "This lecture revisits the Solidity smart-contract structure and then builds a practical language map: compiler pragmas, Ethereum types and addresses, state/local/global variables, visibility, validation, modifiers, function mutability, Ether units, gas, constructors, and events.",
  instructionalInterval: "00:04:12–01:20:02 source time (waiting-room lead-in excluded; no idle tail observed)",
  reviewLevel: "Full seven-point timeline sweep, visible 2× capture, source-time transcript, and bounded Atlas capture from 00:04:12 to the natural end.",
  coverage: [
    { title: "Contract structure and compiler context", body: "The lecture connects license identifiers, pragma versions, the EVM runtime, state variables, events, constructors, and functions." },
    { title: "Types, addresses, and storage", body: "Solidity types include address, mappings, arrays, strings, structs, signed and unsigned integers, and persistent state variables." },
    { title: "Validation and access control", body: "require, assert, revert, visibility, and modifiers express preconditions, invariants, rollback behavior, and owner-only access." },
    { title: "Functions, Ether, and gas", body: "pure, view, and payable communicate state and value behavior; Ether units and gas connect code to execution cost." },
    { title: "Deployment and observability", body: "A constructor runs once at deployment, while events provide logs that applications can observe after successful actions." }
  ],
  takeaway: "A reliable Solidity contract makes state, access, validation, value transfer, and observability explicit. The language keywords are small, but each one defines a boundary that affects shared blockchain state.",
  slideTrail: [
    { time: "00:04:12", title: "Introduction to Smart Contracts", note: "The first sustained teaching segment introduces contract state, events, constructors, and functions." },
    { time: "00:10:00", title: "Solidity data types and addresses", note: "The instructor explains address values, contract addresses, mappings, arrays, strings, and structs." },
    { time: "00:22:00", title: "State, local, and global variables", note: "The recording distinguishes persistent contract state from function-local values and predefined blockchain globals." },
    { time: "00:31:00", title: "Visibility and control structures", note: "Public, external, internal, and private visibility are connected to require, assert, revert, loops, and returns." },
    { time: "00:41:00", title: "Function modifiers and mutability", note: "Modifiers centralize owner checks; pure, view, and payable describe what a function can read, change, or receive." },
    { time: "00:55:00", title: "Ether units and gas", note: "Wei, Ether denominations, gas consumption, gas price, and transaction cost are linked to computation." },
    { time: "01:10:00", title: "Constructors and events", note: "Deployment initialization and event logging are demonstrated before the recording ends in Remix." }
  ],
  summary: [
    { title: "1. A contract combines state and executable behavior", sourceRefs: ["00:04:12–00:10:00", "Introduction to Smart Contracts"], paragraphs: ["The instructor frames a smart contract through state variables, events, constructors, and functions. State variables represent values that persist in blockchain state; functions define operations that may change or read that state.", "The EVM supplies the runtime environment for compiled Solidity. A license identifier documents distribution terms, while pragma constrains compiler behavior and helps keep language features reproducible."], formula: "contract = persistent state + functions + constructor + events" },
    { title: "2. Types express blockchain-specific values", sourceRefs: ["00:10:00–00:22:00", "Solidity data types and addresses"], paragraphs: ["Solidity includes familiar values such as signed and unsigned integers, booleans, fixed-size bytes, arrays, strings, and user-defined structs. The address type is especially important because Ethereum has both account addresses and deployed contract addresses.", "Mappings associate a key with a value, such as mapping an address to an integer. The contract address must be retained after deployment because later calls use it to identify the deployed code."], formula: "mapping(address => value) = key-based contract storage" },
    { title: "3. State, local, and global variables have different lifetimes", sourceRefs: ["00:22:00–00:31:00", "State, local, and global variables"], paragraphs: ["State variables are declared at contract level and persist after a function ends. Local variables exist only within a function or block unless their value is copied into state.", "Global variables are predefined by Solidity and expose blockchain context. The lecture highlights msg.sender for the caller address, msg.value for Ether attached to a call, and block.timestamp for the current block timestamp."], formula: "state: persistent; local: bounded scope; global: predefined chain context" },
    { title: "4. Validation keywords make failure explicit", sourceRefs: ["00:31:00–00:41:00", "Control structures and error handling"], paragraphs: ["require checks an input or precondition and can return a message when the condition fails. assert is for invariants that should never be false, while revert explicitly aborts a failed path and rolls back state changes.", "These constructs make the contract's safety assumptions visible. They are not interchangeable: a user-supplied condition, an internal invariant, and a deliberate rollback communicate different reasoning to reviewers."], formula: "require(precondition); assert(invariant); revert(failure path)" },
    { title: "5. Modifiers centralize access control", sourceRefs: ["00:41:00–00:50:00", "Function modifiers and visibility"], paragraphs: ["Visibility controls who can call or access a function or variable: public, external, internal, and private express different boundaries. A modifier packages a repeated condition such as checking msg.sender against the stored owner.", "The underscore marks where the modified function body executes. Centralizing the condition reduces duplication and makes owner-only or role-based rules easier to audit."], formula: "modifier onlyOwner: require(msg.sender == owner); _;" },
    { title: "6. Mutability, value transfer, and gas connect code to cost", sourceRefs: ["00:50:00–01:05:00", "Function mutability, Ether units, and gas"], paragraphs: ["A pure function neither reads nor changes state. A view function may read state but does not modify it. A payable function can receive Ether, so the value path is part of its interface.", "Ether is expressed in denominations such as wei. Gas measures computation and gas price values the resource; the transaction fee follows from the amount of gas consumed and its price. Gas also discourages unbounded or abusive computation."], formula: "transaction fee = gas used × gas price" },
    { title: "7. Constructors initialize once; events make actions observable", sourceRefs: ["01:05:00–01:20:02", "Constructors, events, and Remix demonstration"], paragraphs: ["A constructor runs once when a contract is deployed and can initialize state. After deployment, interaction uses the contract address and the declared functions.", "Events log important actions for off-chain applications and users. The Remix demonstration ties the language concepts together by compiling, deploying, calling functions, observing state changes, and examining execution cost."], formula: "deploy → constructor once → address; successful action → event log" }
  ],
  keyTerms: [
    { term: "EVM", definition: "The Ethereum Virtual Machine runtime that executes compiled contract instructions." },
    { term: "Pragma", definition: "A Solidity directive that constrains compiler version or feature behavior." },
    { term: "State variable", definition: "A contract-level value persisted in blockchain state." },
    { term: "msg.sender", definition: "The address that invoked the current call." },
    { term: "Modifier", definition: "Reusable function logic, commonly used for access checks." },
    { term: "Payable", definition: "A function or address capability that permits receiving Ether." },
    { term: "Gas", definition: "The execution resource measure used to price computational work." },
    { term: "Event", definition: "A contract log emitted for off-chain consumers and interfaces." }
  ],
  courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [] },
  suggestedPractice: { assignments: [], homework: ["Optional: explain why a state variable persists while a local variable does not."], labs: ["Optional: implement a small owner-only counter in Remix using a modifier, require, view, and an event."], projects: [], references: ["Review the official Solidity documentation for types, functions, modifiers, error handling, and events."], studentQuestions: [] },
  insights: [
    { label: "Design", title: "State is an explicit cost", body: "A value stored as contract state changes shared blockchain state and therefore deserves a deliberate data model." },
    { label: "Security", title: "Centralize repeated checks", body: "A modifier makes repeated authorization logic easier to review than copying the same condition into many functions." },
    { label: "Operations", title: "Gas is part of behavior", body: "An apparently correct function can still be impractical if its computation consumes excessive gas." },
    { label: "Observability", title: "Events connect chain state to applications", body: "Events do not replace state, but they give interfaces a structured log of important successful actions." }
  ],
  resources: [
    { kind: "read", title: "Solidity documentation — Types", url: "https://docs.soliditylang.org/en/latest/types.html", detail: "Official reference for value types, reference types, mappings, arrays, and address values." },
    { kind: "read", title: "Solidity documentation — Functions and modifiers", url: "https://docs.soliditylang.org/en/latest/contracts.html#function-modifiers", detail: "Official reference for visibility, mutability, modifiers, constructors, and contract behavior." },
    { kind: "read", title: "Solidity documentation — Error handling", url: "https://docs.soliditylang.org/en/latest/control-structures.html#error-handling-assert-require-revert-and-exceptions", detail: "Official reference for require, assert, revert, and rollback semantics." },
    { kind: "practice", title: "Remix IDE", url: "https://remix.ethereum.org/", detail: "Use a toy contract to compile, deploy locally, call view/pure functions, and inspect events and gas." }
  ],
  quiz
} };
