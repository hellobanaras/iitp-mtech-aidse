const quizSeed = [
  ["What does a blockchain wallet primarily manage?", ["Keys and transaction authorization", "Physical coins", "A bank's database", "Mining hardware"], 0, "The lecture explains that wallets hold cryptographic keys and help authorize transactions; assets remain represented on-chain."],
  ["Where do digital assets remain in the wallet model?", ["On the blockchain", "Only inside the wallet app", "In the browser cache", "In a printed address"], 0, "A wallet is an interface to blockchain ownership rather than a container for the asset itself."],
  ["Which wallet is connected to the internet for everyday use?", ["Hot wallet", "Cold wallet", "Paper archive", "Offline vault"], 0, "Hot wallets trade stronger convenience for greater online exposure."],
  ["What is the main purpose of a cold wallet?", ["Offline, longer-term key protection", "Faster browser payments", "Replacing a blockchain explorer", "Publishing private keys"], 0, "Cold wallets keep keys offline and are suited to stronger protection and long-term storage."],
  ["What must never be shared?", ["A private key", "A public address", "A block number", "A transaction hash"], 0, "The private key authorizes actions and therefore must remain secret."],
  ["What can a blockchain address be used for?", ["Receiving and identifying an account", "Recovering a private key", "Changing contract code", "Storing a full certificate"], 0, "An address is a shareable identifier for locating an account and receiving assets."],
  ["How is an Ethereum address related to a public key?", ["It is derived from the public key but is not the same value", "It is always the private key", "It is a block number", "It is an event log"], 0, "The lecture distinguishes the address from the public key while describing derivation from public-key material."],
  ["What does a transaction signature provide?", ["Evidence that the key holder authorized a transaction", "Proof that a transaction is profitable", "A replacement for consensus", "A storage slot"], 0, "A signature authenticates authorization; the network still validates the transaction and state transition."],
  ["What is Sepolia in the lecture's example?", ["An Ethereum test network", "A hardware wallet", "A storage-root algorithm", "A production legal registry"], 0, "Sepolia provides test Ether for experimenting with contracts without spending real Ether."],
  ["What can an explorer search?", ["An address, transaction hash, block, or smart contract", "Only a user's password", "Only wallet screenshots", "Only private keys"], 0, "Explorers expose searchable on-chain identifiers and transaction evidence."],
  ["Which item is visible in a transaction record?", ["Status, block number, timestamp, sender, receiver, and fees", "A user's private key", "The teacher's password", "An uncommitted local file"], 0, "These fields allow a verifier to inspect what the network accepted and when."],
  ["What does a wallet do when sending Ether?", ["Signs and broadcasts a transaction", "Moves coins from an internal wallet database", "Edits a previous block", "Disables validation"], 0, "The wallet signs an intent; the blockchain validates it and updates ownership."],
  ["What controls an externally owned account (EOA)?", ["A private key", "Contract bytecode only", "A storage-root pointer", "A participant avatar"], 0, "EOAs are controlled by private-key signatures."],
  ["What controls a contract account?", ["Deployed smart-contract code and state", "A user's browser password", "A cold-wallet label", "A block explorer theme"], 0, "Contract accounts execute code when called and retain persistent state."],
  ["In the cold-chain example, what can a contract enforce?", ["A temperature condition before delivery and payment", "A change to old blocks", "A private-key recovery", "An arbitrary off-chain promise"], 0, "The smart contract can accept or reject delivery based on recorded sensor conditions."],
  ["What is Ethereum's world state?", ["The collection of account states at a point in the chain", "Only the latest transaction receipt", "A wallet backup", "A list of video frames"], 0, "World state represents the current account snapshot used by Ethereum."],
  ["Which field counts transactions sent by an EOA?", ["Nonce", "Balance", "Storage root", "Code hash"], 0, "The EOA nonce orders its transactions and prevents unintended replay."],
  ["What does an account balance represent?", ["The account's Ether amount", "The number of contract functions", "The wallet's screen size", "The hash of a slide"], 0, "Balance records the Ether held by the account in the state."],
  ["Which field points to contract storage?", ["Storage root", "Nonce only", "Address checksum", "Transaction fee"], 0, "A contract's storage root commits to its persistent key-value storage."],
  ["What does a contract code hash identify?", ["The deployed EVM bytecode", "The user's private key", "A wallet's fiat balance", "A participant's microphone"], 0, "The code hash commits to the executable code associated with a contract account."],
  ["Why is storage root not normally meaningful for an EOA?", ["An EOA does not have contract persistent storage", "EOAs cannot have balances", "EOAs cannot have addresses", "The field stores private keys"], 0, "EOAs are key-controlled accounts; contract storage belongs to code-controlled accounts."],
  ["What does nonce mean for a contract account in the lecture?", ["The number of contract creations initiated by that account", "Its Ether price", "Its storage-root hash", "The block timestamp"], 0, "The lecture contrasts EOA transaction nonce with contract-creation nonce semantics."],
  ["What does a blockchain explorer help users do?", ["Search, verify, and inspect on-chain data transparently", "Recover anyone's private key", "Guarantee an off-chain document is truthful", "Skip consensus"], 0, "Explorer evidence supports verification of recorded state, not every real-world claim."],
  ["What is the correct distinction between integrity and availability?", ["A matching hash proves bytes match, not that the bytes are retrievable", "A hash guarantees storage forever", "Availability proves authorship", "Integrity means a key was never used"], 0, "The state/hash model verifies retrieved content but does not guarantee storage availability."],
  ["Why model EOA and contract accounts separately?", ["Their control mechanism and state fields differ", "Only contracts have addresses", "Only EOAs can hold Ether", "To avoid using a world state"], 0, "The distinction clarifies key authorization, code execution, nonce, storage, and code-hash behaviour."]
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer ? `${option} is correct: ${explanation}` : `${option} is not correct: it conflicts with the account, wallet, transaction, or world-state model.`)
}));

export const ebb6401Lecture20260909 = {
  en: {
    title: "Blockchain wallets, Ethereum accounts, and the world state",
    lede: "This lecture separates wallets from on-chain assets, then traces signed transactions through explorers, externally owned accounts, contract accounts, and Ethereum's account-state fields.",
    instructionalInterval: "00:06:56–01:29:29 source time (1h 29m 29s reported duration; waiting-room opening excluded)",
    reviewLevel: "Full beginning/10%/25%/50%/75%/90%/near-end sweep, visible 2× capture, source-time transcript, 83 sampled frames, and no idle tail after the final instruction.",
    coverage: [
      { title: "Wallets and keys", body: "Wallets manage public/private keys, addresses, and signatures; they do not store the cryptocurrency itself." },
      { title: "Hot and cold storage", body: "Hot wallets offer online convenience while cold wallets reduce online exposure for longer-term protection." },
      { title: "Addresses and explorers", body: "Addresses identify accounts, and explorers expose transaction, block, contract, sender, receiver, and fee evidence." },
      { title: "EOA and contract accounts", body: "Private keys control EOAs; deployed code and persistent state control contract accounts." },
      { title: "Ethereum account state", body: "Nonce, balance, storage root, and code hash describe the current state of an account in the world state." }
    ],
    takeaway: "A wallet is a key-management and authorization interface; Ethereum's world state records account data, while explorers make accepted transitions inspectable without exposing private keys.",
    slideTrail: [
      { time: "00:06:56", title: "Blockchain wallet", note: "A wallet manages cryptographic keys and ownership authorization rather than storing coins." },
      { time: "00:15:40", title: "Hot wallet and cold wallet", note: "Online convenience is contrasted with offline, longer-term key protection." },
      { time: "00:29:10", title: "Address versus public key", note: "The address is shareable and derived from public-key material; the private key remains secret." },
      { time: "00:45:00", title: "Blockchain explorer", note: "An explorer searches addresses, transaction hashes, blocks, contracts, status, timestamps, and fees." },
      { time: "00:58:30", title: "Wallet transaction flow", note: "A wallet signs and broadcasts; the network validates and updates ownership." },
      { time: "01:07:01", title: "Externally owned and contract accounts", note: "Private-key control is compared with smart-contract-code control using a conditional cold-chain example." },
      { time: "01:20:17", title: "Ethereum world state", note: "The world state is the collection of account states at a point in the blockchain." },
      { time: "01:27:20", title: "Account-state fields", note: "Nonce, balance, storage root, and code hash are mapped to EOAs and contract accounts." }
    ],
    summary: [
      { title: "1. Wallets hold authorization material, not coins", sourceRefs: ["00:06:56–00:15:40", "Blockchain wallet diagram"], paragraphs: ["A blockchain wallet stores or protects private keys, public-key material, addresses, and transaction signatures. The Ether or other digital asset remains represented in the blockchain state; the wallet provides access to it.", "This distinction prevents a common mental-model error. Losing a wallet interface is not the same as deleting the on-chain asset, but losing the private key can remove the ability to authorize an action."], formula: "authorize(tx)=Sign_{privateKey}(tx)" },
      { title: "2. Hot and cold wallets expose a security trade-off", sourceRefs: ["00:15:40–00:22:54", "Hot/cold wallet comparison"], paragraphs: ["A hot wallet is internet-connected and convenient for frequent activity. A cold wallet keeps key material offline and is better suited to reducing online attack exposure and supporting long-term storage.", "The choice is a risk decision rather than a claim that one wallet is universally safe. Convenience, recovery, device security, key backup, and transaction frequency all matter."], formula: "online exposure rises with hot-wallet convenience" },
      { title: "3. Addresses, public keys, and private keys are different", sourceRefs: ["00:29:10–00:38:00", "Address and key whiteboard"], paragraphs: ["The lecture emphasizes that an address is not the same thing as a public key. An address is a shareable, machine-readable identifier derived from public-key material; a private key is secret and authorizes signatures.", "A user can publish an address to receive assets and still protect the private key. Public visibility of an address therefore does not grant spending authority."], formula: "private key -> public key -> address" },
      { title: "4. Explorers turn accepted transitions into evidence", sourceRefs: ["00:45:00–00:58:30", "Explorer transaction view"], paragraphs: ["A blockchain explorer can search by wallet address, transaction hash, block number, or smart contract. The resulting record exposes status, sender, receiver, timestamp, block, amount, gas used, fees, and confirmations.", "This transparency supports verification of what was recorded on-chain. It does not expose private keys or guarantee that an off-chain claim is truthful."], formula: "evidence(tx)=(status,from,to,block,time,fee)" },
      { title: "5. A signed transaction becomes a state transition", sourceRefs: ["00:58:30–01:07:01", "Wallet-to-network flow"], paragraphs: ["When a user sends Ether through a wallet, the wallet signs a transaction and broadcasts it. Nodes and consensus rules validate the transaction; accepted execution updates ownership and account state.", "The wallet is therefore an authorization boundary, while the network is the validation and settlement boundary. A valid signature alone does not mean that the requested business meaning is correct."], formula: "s_{t+1}=F(s_t, valid(Sign(tx)))" },
      { title: "6. EOAs and contract accounts have different control", sourceRefs: ["01:07:01–01:18:40", "Cold-chain smart-contract example"], paragraphs: ["An externally owned account is controlled by a private key and can initiate signed transactions. A contract account is controlled by deployed smart-contract code and responds according to its programmed conditions.", "The cold-chain example makes the distinction concrete: an IoT temperature reading can be checked against a threshold before delivery and payment proceed. The contract can reject the transition when the condition is not met."], formula: "transition = condition(sensor) ? deliver + pay : reject" },
      { title: "7. Ethereum's world state records account fields", sourceRefs: ["01:20:17–01:29:29", "World-state account diagram"], paragraphs: ["Ethereum's world state is the collection of all account states at a particular point in the blockchain. The lecture identifies nonce, balance, storage root, and code hash as the core fields.", "For an EOA, nonce orders transactions and balance records Ether; storage root and code hash are not contract storage/code. For a contract account, nonce relates to contract creation, storage root commits to persistent variables, and code hash identifies deployed EVM code."], formula: "state(account)=(nonce,balance,storageRoot,codeHash)" }
    ],
    keyTerms: [
      { term: "Blockchain wallet", definition: "A key-management interface that authorizes access to on-chain assets." },
      { term: "Hot wallet", definition: "An internet-connected wallet intended for convenient, frequent use." },
      { term: "Cold wallet", definition: "An offline key-storage approach intended to reduce online exposure." },
      { term: "Externally owned account", definition: "An account controlled by a private key and signatures." },
      { term: "Contract account", definition: "An account controlled by deployed smart-contract code and persistent state." },
      { term: "World state", definition: "Ethereum's collection of account states at a point in the chain." },
      { term: "Storage root", definition: "A state commitment for a contract account's persistent storage." },
      { term: "Code hash", definition: "A hash identifying the deployed EVM code of a contract account." }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [{ time: "00:38:00", title: "MetaMask and Sepolia test-network workflow", detail: "The instructor demonstrates using MetaMask with Sepolia so contract transactions can be tested without real Ether." }], studentQuestions: [{ time: "00:12:30", question: "Does the wallet store the cryptocurrency?", response: "No. It manages keys and access while the asset remains represented on the blockchain." }] },
    suggestedPractice: {
      assignments: ["Optional: draw the path private key → public key → address → signed transaction, and annotate which values may be shared."],
      homework: ["Optional: compare an EOA and contract account field by field, including nonce, balance, storage root, and code hash."],
      labs: ["Optional: use Sepolia or a local test chain to inspect one address and transaction in an explorer without exposing any private key."],
      projects: ["Optional: build a small cold-chain contract simulator that accepts delivery only when the recorded temperature satisfies policy."],
      references: ["Review Ethereum accounts, transactions, and state-trie documentation before the next Solidity exercise."],
      studentQuestions: []
    },
    insights: [
      { label: "Security", title: "Address visibility is not spending authority", body: "An address can be shared publicly for receipt and lookup; authorization still depends on possession of the private key." },
      { label: "Architecture", title: "The wallet and network have different jobs", body: "The wallet expresses intent through a signature, while network validation and contract execution determine the resulting state." },
      { label: "Verification", title: "Explorer evidence has a boundary", body: "A receipt can prove what was accepted on-chain, but it cannot by itself prove that an off-chain sensor, document, or institution claim is true." },
      { label: "State", title: "Storage root is a commitment, not a database dump", body: "The root commits to contract storage and supports verifiable state structures without putting every variable directly into an address record." },
      { label: "Governance", title: "Policy belongs in explicit contract conditions", body: "The cold-chain example shows how a business rule becomes a testable accept/reject transition with a clear failure path." }
    ],
    resources: [
      { kind: "read", title: "Ethereum.org — Accounts", url: "https://ethereum.org/developers/docs/accounts/", detail: "Authoritative overview of EOAs, contract accounts, addresses, and account control." },
      { kind: "read", title: "Ethereum.org — Transactions", url: "https://ethereum.org/developers/docs/transactions/", detail: "Explains signing, broadcasting, validation, nonce, gas, and transaction lifecycle." },
      { kind: "read", title: "Ethereum.org — World state and state trie", url: "https://ethereum.org/developers/docs/data-structures-and-encoding/patricia-merkle-trie/", detail: "Connects account state, storage roots, and Merkle commitments." },
      { kind: "practice", title: "Sepolia testnet documentation", url: "https://ethereum.org/developers/docs/networks/#sepolia", detail: "Use a test network for safe transaction and explorer practice without real Ether." },
      { kind: "practice", title: "Etherscan Sepolia explorer", url: "https://sepolia.etherscan.io/", detail: "Inspect addresses, blocks, transaction status, and fees using public on-chain evidence." },
      { kind: "read", title: "MetaMask Learn", url: "https://learn.metamask.io/", detail: "Accessible wallet-learning material for keys, addresses, signing, and safe use." }
    ],
    quiz
  }
};
