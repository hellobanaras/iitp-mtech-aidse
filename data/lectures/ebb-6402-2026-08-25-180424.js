// English-only publication unit.
export const ebb6402Lecture20260825 = {
  en: {
  "title": "Blockchain compliance, risk management, and distributed-ledger policy",
  "lede": "This lecture connects compliance policy and risk management with practical blockchain controls: AML/KYC monitoring, document integrity references, privacy and data minimisation, interoperability, ethical and environmental responsibilities, and distributed-ledger consensus.",
  "instructionalInterval": "04:52–2:19:24 source time (verified teaching; capture reviewed at 2×)",
  "reviewLevel": "View-only recording, 2× capture, waiting-room lead-in excluded, full timeline sweep and timestamped transcript/slide evidence verified",
  "coverage": [
    {
      "title": "Compliance and risk framing",
      "body": "Formal policy is mapped to legal, regulatory, industry, and organisational requirements; risk management covers technical, legal, financial, reputational, and operational concerns."
    },
    {
      "title": "AML, KYC, and financial workflows",
      "body": "Monitoring, screening, KYC documents, banking workflows, hashes, and blockchain-backed fraud controls are illustrated with a finance example."
    },
    {
      "title": "Privacy and information security",
      "body": "Data minimisation, encryption, access control, key management, and the tension between sensitive data and immutable ledgers are made explicit."
    },
    {
      "title": "Interoperability and responsible adoption",
      "body": "Technical standards, consumer/investor protection, cross-border compliance, ethical/social/environmental review, and sustainability broaden the policy lens."
    },
    {
      "title": "DLT architecture and consensus",
      "body": "Centralised versus distributed records, replicated copies, blockchain as a DLT, and consensus/cryptographic verification are recapped."
    }
  ],
  "takeaway": "A blockchain does not remove compliance or risk: dependable adoption pairs minimised and protected data with accountable policy, interoperable systems, and verifiable agreement among participants.",
  "slideTrail": [
    {
      "time": "04:52",
      "title": "Blockchain policies and risk management",
      "note": "Opening whiteboard frames compliance policies, risk monitoring, fraud prevention, AML/KYC, and organisational requirements."
    },
    {
      "time": "09:30",
      "title": "Compliance policy requirements",
      "note": "Formal rules are connected to legal, regulatory, industry, and organisational obligations."
    },
    {
      "time": "17:40",
      "title": "Monitoring, screening, and AML/KYC",
      "note": "Financial monitoring, suspicious-activity screening, and anti-money-laundering controls are illustrated."
    },
    {
      "time": "29:30",
      "title": "Document references and bank workflow",
      "note": "A document hash/reference is used with a blockchain record rather than placing the full sensitive document on-chain."
    },
    {
      "time": "40:40",
      "title": "KYC account-opening flow",
      "note": "Required documents are collected, verified, and handled through a bank/blockchain workflow."
    },
    {
      "time": "49:30",
      "title": "Privacy and information security",
      "note": "Privacy regulation, data protection, encryption, access control, and sensitive-data handling are discussed."
    },
    {
      "time": "68:45",
      "title": "Data minimisation",
      "note": "The whiteboard stresses that unnecessary personal information should not be uploaded to an immutable ledger."
    },
    {
      "time": "79:30",
      "title": "Interoperability and standards",
      "note": "Multiple platforms need technical standards and integration for enterprise use."
    },
    {
      "time": "86:15",
      "title": "Ethical, social, and environmental policy",
      "note": "Responsible adoption includes stakeholder value, ethics, sustainability, and long-term development goals."
    },
    {
      "time": "101:15",
      "title": "Distributed-ledger technology",
      "note": "Centralised and distributed record flows, replicated copies, and a banking transfer example introduce DLT."
    },
    {
      "time": "117:30",
      "title": "Blockchain as a DLT",
      "note": "Blockchain is positioned as one kind of distributed-ledger technology alongside broader distributed structures."
    },
    {
      "time": "129:30",
      "title": "Consensus and integrity recap",
      "note": "Nodes agree on an accepted value; cryptographic verification makes unauthorised retroactive changes detectable."
    },
    {
      "time": "138:00",
      "title": "Next topics and closure",
      "note": "The instructor previews real-world DLT applications, limitations/challenges, and AML/terrorism-financing policy for the next lecture."
    }
  ],
  "summary": [
    {
      "title": "1. Treat compliance as a system requirement",
      "sourceRefs": [
        "04:52–15:30",
        "Slide: Compliance policies and risk management"
      ],
      "paragraphs": [
        "The lecture begins with formal compliance policies: blockchain applications must operate within legal, regulatory, industry, and organisational requirements. Risk management is systematic—identify, assess, monitor, and mitigate technical, legal, financial, reputational, and operational risks.",
        "This framing avoids a common mistake: treating decentralisation as an exemption from policy. The ledger is an implementation component; the surrounding organisation still needs controls, ownership, monitoring, and evidence."
      ]
    },
    {
      "title": "2. Use AML/KYC workflows to make financial controls concrete",
      "sourceRefs": [
        "17:40–47:20",
        "Slide: Monitoring, screening, and KYC flow"
      ],
      "paragraphs": [
        "The finance example links monitoring and screening with suspicious-activity detection and anti-money-laundering controls. In an account-opening flow, the bank collects required KYC documents, verifies them, and uses controlled records across its local and blockchain systems.",
        "A student asked for a finance-domain example near the opening; the instructor said the next smart-contract/Solidity session would use a finance-related banking case study. A student also mentioned an admin-system blockchain/smart-contract project; this was context, not a new assignment."
      ]
    },
    {
      "title": "3. Keep sensitive data off-chain when immutability creates obligations",
      "sourceRefs": [
        "49:30–75:30",
        "Slide: Data privacy and information security"
      ],
      "paragraphs": [
        "Privacy regulation, data protection, confidentiality, and legal obligations constrain what should be written to a ledger. Data minimisation means not uploading personal information that the process does not need. A cryptographic hash or reference can preserve an integrity check while the protected document remains in an appropriate system.",
        "Encryption, access control, and key management are complementary safeguards. They do not make an immutable ledger automatically private; access, retention, deletion, and operational responsibilities still need explicit design."
      ]
    },
    {
      "title": "4. Interoperability is a policy and engineering concern",
      "sourceRefs": [
        "79:30–84:30",
        "Slide: Interoperability and technical standards"
      ],
      "paragraphs": [
        "Enterprise environments contain multiple platforms. Technical standards and integration practices allow systems to exchange evidence and coordinate without assuming one vendor or chain owns every workflow.",
        "Interoperability improves reach but adds governance questions: which schema is authoritative, who can update a mapping, how are failures reconciled, and how are cross-border obligations carried across the boundary?"
      ]
    },
    {
      "title": "5. Responsible adoption includes people and planet",
      "sourceRefs": [
        "86:15–99:50",
        "Slide: Ethical, social, and environmental policies"
      ],
      "paragraphs": [
        "The lecture broadens policy beyond security: consumer and investor protection, ethical use, social value, environmental effects, sustainability, and long-term development goals are part of responsible blockchain adoption.",
        "These concerns are not decorative. They influence whether a proposed ledger is proportionate, whether affected people have recourse, and whether the operating model remains acceptable at scale."
      ]
    },
    {
      "title": "6. Understand DLT architecture before choosing a chain",
      "sourceRefs": [
        "101:15–128:45",
        "Slide: Distributed-ledger technology"
      ],
      "paragraphs": [
        "The whiteboard contrasts a centralised server with a distributed ledger whose participating nodes maintain copies. A banking transfer example shows why replicated records can improve resilience when one server fails, while also introducing coordination and verification needs.",
        "Blockchain is described as one type of DLT, not a synonym for every distributed ledger. The lecture briefly references other distributed structures and then returns to data copies, nodes, and agreement."
      ]
    },
    {
      "title": "7. Consensus provides agreement, not truth by itself",
      "sourceRefs": [
        "128:45–2:19:20",
        "Slide: Consensus and integrity recap"
      ],
      "paragraphs": [
        "Nodes use a consensus mechanism to agree on a single accepted value or state. Cryptographic verification makes retroactive tampering detectable and supports an auditable history.",
        "Consensus cannot correct a wrong input, replace privacy controls, or settle every legal dispute. The closing preview moves to real-world DLT applications, limitations and challenges, and policies for preventing money laundering and terrorism financing."
      ]
    }
  ],
  "courseSignals": {
    "assignments": [],
    "homework": [],
    "labs": [],
    "projects": [
      {
        "time": "03:19",
        "title": "Student project context",
        "detail": "A student described an admin-system implementation using blockchain and smart contracts; the instructor said it would be noted for a future finance case discussion. No new graded project brief was announced."
      }
    ],
    "references": [],
    "studentQuestions": [
      {
        "time": "02:20",
        "question": "Can you give a finance-domain example apart from hospital/insurance use?",
        "response": "The instructor said a finance-related banking case study would be discussed in the following smart-contract/Solidity session."
      }
    ]
  },
  "keyTerms": [
    {
      "term": "Compliance policy",
      "definition": "Formal rules that align an application with applicable legal, regulatory, industry, and organisational requirements."
    },
    {
      "term": "Risk management",
      "definition": "A cycle of identifying, assessing, monitoring, and mitigating threats and impacts."
    },
    {
      "term": "AML",
      "definition": "Anti-money laundering controls for detecting and preventing illicit financial activity."
    },
    {
      "term": "KYC",
      "definition": "Know-your-customer checks that collect and verify identity and required account documents."
    },
    {
      "term": "Data minimisation",
      "definition": "Collecting and retaining only the personal data needed for a defined purpose."
    },
    {
      "term": "Cryptographic hash",
      "definition": "A compact fingerprint used to check whether referenced data has changed."
    },
    {
      "term": "Interoperability",
      "definition": "The ability of different systems or platforms to exchange and use information through agreed interfaces or standards."
    },
    {
      "term": "Distributed ledger technology",
      "definition": "A system in which participating nodes maintain synchronised records without relying on one central copy."
    },
    {
      "term": "Consensus",
      "definition": "A mechanism for participants to agree on an accepted value, state, or record."
    }
  ],
  "insights": [
    {
      "label": "Privacy",
      "title": "Hash the evidence, protect the document",
      "body": "A ledger can anchor integrity without becoming the long-term home for personal documents. Keep the source in a governed store, minimise fields, and define deletion and access processes."
    },
    {
      "label": "Risk",
      "title": "Separate control claims from truth claims",
      "body": "Consensus and hashes can show that participants agreed on a record and that it was not changed later; neither proves that an external input was correct when entered."
    },
    {
      "label": "Architecture",
      "title": "Interoperability needs ownership",
      "body": "Standards help systems connect, but someone must own schemas, reconciliation, failure handling, and regulatory evidence at each boundary."
    },
    {
      "label": "Adoption",
      "title": "Responsible use is a design constraint",
      "body": "Consumer protection, social value, environmental impact, and recourse should be evaluated alongside throughput and decentralisation before deployment."
    }
  ],
  "resources": [
    {
      "type": "standard",
      "title": "NIST Blockchain Technology Overview",
      "url": "https://doi.org/10.6028/NIST.IR.8202",
      "note": "Authoritative overview of blockchain components, consensus, security, and operational considerations."
    },
    {
      "type": "standard",
      "title": "FATF: Guidance for a risk-based approach to virtual assets and VASPs",
      "url": "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Guidance-rba-virtual-assets-vasps.html",
      "note": "Primary policy reference for risk-based AML/CFT controls around virtual assets."
    },
    {
      "type": "reference",
      "title": "W3C Verifiable Credentials Data Model",
      "url": "https://www.w3.org/TR/vc-data-model-2.0/",
      "note": "Useful interoperability and integrity context for verifiable claims and references."
    },
    {
      "type": "reference",
      "title": "Hyperledger Fabric: Privacy and data considerations",
      "url": "https://hyperledger-fabric.readthedocs.io/en/latest/private-data/private-data.html",
      "note": "Concrete permissioned-ledger patterns for keeping private data separate from the shared ledger."
    },
    {
      "type": "video",
      "title": "NIST blockchain technology overview (YouTube search)",
      "url": "https://www.youtube-nocookie.com/embed?listType=search&list=NIST%20blockchain%20technology%20overview",
      "note": "Privacy-enhanced inline refresher; use the external link if a specific result is preferred."
    }
  ],
  "quiz": [
    {
      "question": "What is the focus of the 25 August lecture?",
      "options": [
        "Blockchain compliance policies and risk management",
        "Cryptocurrency price prediction",
        "UI design for wallets",
        "Mining-hardware installation"
      ],
      "answer": 0,
      "explanation": "The opening identifies blockchain policies, compliance, and risk management as the lecture focus.",
      "optionNotes": [
        "Correct: The opening identifies blockchain policies, compliance, and risk management as the lecture focus.",
        "Incorrect: “Cryptocurrency price prediction” does not match the lecture evidence.",
        "Incorrect: “UI design for wallets” does not match the lecture evidence.",
        "Incorrect: “Mining-hardware installation” does not match the lecture evidence."
      ]
    },
    {
      "question": "What do compliance policies define for a blockchain application?",
      "options": [
        "How it meets legal, regulatory, industry, and organisational requirements",
        "How to avoid documenting decisions",
        "How to replace every regulator",
        "How to maximise token price"
      ],
      "answer": 0,
      "explanation": "The compliance discussion describes formal rules that align an application with legal, regulatory, industry, and organisational requirements.",
      "optionNotes": [
        "Correct: The compliance discussion describes formal rules that align an application with legal, regulatory, industry, and organisational requirements.",
        "Incorrect: “How to avoid documenting decisions” does not match the lecture evidence.",
        "Incorrect: “How to replace every regulator” does not match the lecture evidence.",
        "Incorrect: “How to maximise token price” does not match the lecture evidence."
      ]
    },
    {
      "question": "Which set of risks is used to motivate blockchain risk management?",
      "options": [
        "Technical, legal, financial, reputational, and operational risks",
        "Only screen-resolution risks",
        "Only weather risks",
        "Only keyboard risks"
      ],
      "answer": 0,
      "explanation": "The lecture groups technical, legal, financial, reputational, and operational concerns when discussing risk management.",
      "optionNotes": [
        "Correct: The lecture groups technical, legal, financial, reputational, and operational concerns when discussing risk management.",
        "Incorrect: “Only screen-resolution risks” does not match the lecture evidence.",
        "Incorrect: “Only weather risks” does not match the lecture evidence.",
        "Incorrect: “Only keyboard risks” does not match the lecture evidence."
      ]
    },
    {
      "question": "What is the purpose of monitoring and screening in the financial example?",
      "options": [
        "To detect suspicious activity and support fraud prevention",
        "To hide every customer record",
        "To make all transactions anonymous to the bank",
        "To remove KYC checks"
      ],
      "answer": 0,
      "explanation": "The AML/KYC example connects monitoring and screening with suspicious-activity detection and fraud prevention.",
      "optionNotes": [
        "Correct: The AML/KYC example connects monitoring and screening with suspicious-activity detection and fraud prevention.",
        "Incorrect: “To hide every customer record” does not match the lecture evidence.",
        "Incorrect: “To make all transactions anonymous to the bank” does not match the lecture evidence.",
        "Incorrect: “To remove KYC checks” does not match the lecture evidence."
      ]
    },
    {
      "question": "What does AML stand for in the lecture's compliance example?",
      "options": [
        "Anti-money laundering",
        "Automated machine learning only",
        "Application media licensing",
        "Annual mining limit"
      ],
      "answer": 0,
      "explanation": "AML is explicitly used for anti-money-laundering controls.",
      "optionNotes": [
        "Correct: AML is explicitly used for anti-money-laundering controls.",
        "Incorrect: “Automated machine learning only” does not match the lecture evidence.",
        "Incorrect: “Application media licensing” does not match the lecture evidence.",
        "Incorrect: “Annual mining limit” does not match the lecture evidence."
      ]
    },
    {
      "question": "What does KYC contribute to the bank workflow?",
      "options": [
        "Customer identity and required documents are checked before account activity",
        "It removes the need for identity evidence",
        "It stores every document publicly forever",
        "It replaces transaction verification with a password"
      ],
      "answer": 0,
      "explanation": "The account-opening flow shows the bank collecting and verifying KYC documents before proceeding.",
      "optionNotes": [
        "Correct: The account-opening flow shows the bank collecting and verifying KYC documents before proceeding.",
        "Incorrect: “It removes the need for identity evidence” does not match the lecture evidence.",
        "Incorrect: “It stores every document publicly forever” does not match the lecture evidence.",
        "Incorrect: “It replaces transaction verification with a password” does not match the lecture evidence."
      ]
    },
    {
      "question": "Why can a document hash be stored with a blockchain record?",
      "options": [
        "It provides a compact integrity reference without placing the full document on-chain",
        "It makes the original document larger",
        "It removes the need for access control",
        "It guarantees the document is legally valid"
      ],
      "answer": 0,
      "explanation": "The lecture contrasts storing a reference or cryptographic hash with storing sensitive full data on the blockchain.",
      "optionNotes": [
        "Correct: The lecture contrasts storing a reference or cryptographic hash with storing sensitive full data on the blockchain.",
        "Incorrect: “It makes the original document larger” does not match the lecture evidence.",
        "Incorrect: “It removes the need for access control” does not match the lecture evidence.",
        "Incorrect: “It guarantees the document is legally valid” does not match the lecture evidence."
      ]
    },
    {
      "question": "Which privacy principle is emphasised before putting data on a blockchain?",
      "options": [
        "Data minimisation",
        "Data duplication without purpose",
        "Public disclosure of all personal data",
        "Permanent retention of every field"
      ],
      "answer": 0,
      "explanation": "Data minimisation is presented as a key privacy practice: store only what the process needs.",
      "optionNotes": [
        "Correct: Data minimisation is presented as a key privacy practice: store only what the process needs.",
        "Incorrect: “Data duplication without purpose” does not match the lecture evidence.",
        "Incorrect: “Public disclosure of all personal data” does not match the lecture evidence.",
        "Incorrect: “Permanent retention of every field” does not match the lecture evidence."
      ]
    },
    {
      "question": "Why should sensitive personal data generally not be placed directly on an immutable ledger?",
      "options": [
        "Immutability can conflict with privacy, deletion, and access obligations",
        "The ledger cannot record hashes",
        "It prevents any audit trail",
        "It makes encryption impossible"
      ],
      "answer": 0,
      "explanation": "The privacy section links immutability with the difficulty of deletion and controlled handling of sensitive information.",
      "optionNotes": [
        "Correct: The privacy section links immutability with the difficulty of deletion and controlled handling of sensitive information.",
        "Incorrect: “The ledger cannot record hashes” does not match the lecture evidence.",
        "Incorrect: “It prevents any audit trail” does not match the lecture evidence.",
        "Incorrect: “It makes encryption impossible” does not match the lecture evidence."
      ]
    },
    {
      "question": "What is the role of encryption and access control in the privacy discussion?",
      "options": [
        "They help protect sensitive data and restrict who can read it",
        "They make every record public",
        "They eliminate key management",
        "They replace all compliance policies"
      ],
      "answer": 0,
      "explanation": "Encryption, access control, and key management are named controls for protecting sensitive information.",
      "optionNotes": [
        "Correct: Encryption, access control, and key management are named controls for protecting sensitive information.",
        "Incorrect: “They make every record public” does not match the lecture evidence.",
        "Incorrect: “They eliminate key management” does not match the lecture evidence.",
        "Incorrect: “They replace all compliance policies” does not match the lecture evidence."
      ]
    },
    {
      "question": "What does interoperability mean in this lecture?",
      "options": [
        "Different blockchain or enterprise platforms can exchange or use information through agreed standards",
        "One node keeps all data private from every other node",
        "A chain is forced to use one vendor's screen",
        "All protocols must have identical code"
      ],
      "answer": 0,
      "explanation": "Interoperability is discussed as connecting multiple platforms through technical standards and integration.",
      "optionNotes": [
        "Correct: Interoperability is discussed as connecting multiple platforms through technical standards and integration.",
        "Incorrect: “One node keeps all data private from every other node” does not match the lecture evidence.",
        "Incorrect: “A chain is forced to use one vendor's screen” does not match the lecture evidence.",
        "Incorrect: “All protocols must have identical code” does not match the lecture evidence."
      ]
    },
    {
      "question": "Why are technical standards important for enterprise blockchain?",
      "options": [
        "They reduce integration friction and support dependable cooperation across platforms",
        "They prevent any system from communicating",
        "They guarantee zero legal risk",
        "They remove the need for governance"
      ],
      "answer": 0,
      "explanation": "The interoperability section links technical standards with integration and broader enterprise adoption.",
      "optionNotes": [
        "Correct: The interoperability section links technical standards with integration and broader enterprise adoption.",
        "Incorrect: “They prevent any system from communicating” does not match the lecture evidence.",
        "Incorrect: “They guarantee zero legal risk” does not match the lecture evidence.",
        "Incorrect: “They remove the need for governance” does not match the lecture evidence."
      ]
    },
    {
      "question": "Which stakeholder protection is included in the compliance discussion?",
      "options": [
        "Consumer and investor protection",
        "Screen brightness protection",
        "Protection from all software updates",
        "Protection from every market movement"
      ],
      "answer": 0,
      "explanation": "Consumer and investor protection rules are listed with privacy, financial, and cross-border compliance concerns.",
      "optionNotes": [
        "Correct: Consumer and investor protection rules are listed with privacy, financial, and cross-border compliance concerns.",
        "Incorrect: “Screen brightness protection” does not match the lecture evidence.",
        "Incorrect: “Protection from all software updates” does not match the lecture evidence.",
        "Incorrect: “Protection from every market movement” does not match the lecture evidence."
      ]
    },
    {
      "question": "What is a responsible approach to blockchain sustainability?",
      "options": [
        "Consider ethical, social, environmental, and long-term development effects",
        "Optimise only for transaction count",
        "Ignore energy and social effects",
        "Treat every use case as automatically responsible"
      ],
      "answer": 0,
      "explanation": "The lecture explicitly moves through ethical, social, environmental, and sustainability policies.",
      "optionNotes": [
        "Correct: The lecture explicitly moves through ethical, social, environmental, and sustainability policies.",
        "Incorrect: “Optimise only for transaction count” does not match the lecture evidence.",
        "Incorrect: “Ignore energy and social effects” does not match the lecture evidence.",
        "Incorrect: “Treat every use case as automatically responsible” does not match the lecture evidence."
      ]
    },
    {
      "question": "Why should blockchain policy consider cross-border transactions?",
      "options": [
        "Jurisdictions may impose different legal, privacy, and financial obligations",
        "Cross-border transfers have no rules",
        "A blockchain removes national law",
        "Only the user interface changes"
      ],
      "answer": 0,
      "explanation": "Cross-border compliance is named as a policy concern because legal obligations vary across jurisdictions.",
      "optionNotes": [
        "Correct: Cross-border compliance is named as a policy concern because legal obligations vary across jurisdictions.",
        "Incorrect: “Cross-border transfers have no rules” does not match the lecture evidence.",
        "Incorrect: “A blockchain removes national law” does not match the lecture evidence.",
        "Incorrect: “Only the user interface changes” does not match the lecture evidence."
      ]
    },
    {
      "question": "What is the key difference between a centralised and a distributed ledger in the whiteboard example?",
      "options": [
        "Centralised control keeps authority in one system; distributed ledgers replicate records across participating nodes",
        "Centralised systems have no data",
        "Distributed ledgers have only one copy",
        "The terms refer only to video quality"
      ],
      "answer": 0,
      "explanation": "The DLT explanation contrasts a central server with replicated records maintained by multiple participants.",
      "optionNotes": [
        "Correct: The DLT explanation contrasts a central server with replicated records maintained by multiple participants.",
        "Incorrect: “Centralised systems have no data” does not match the lecture evidence.",
        "Incorrect: “Distributed ledgers have only one copy” does not match the lecture evidence.",
        "Incorrect: “The terms refer only to video quality” does not match the lecture evidence."
      ]
    },
    {
      "question": "What does a distributed ledger replicate?",
      "options": [
        "An agreed record or copy of data across participating nodes",
        "A different secret password for every viewer",
        "Only the course timetable",
        "No data at all"
      ],
      "answer": 0,
      "explanation": "The DLT section explains that participating nodes maintain copies of the record.",
      "optionNotes": [
        "Correct: The DLT section explains that participating nodes maintain copies of the record.",
        "Incorrect: “A different secret password for every viewer” does not match the lecture evidence.",
        "Incorrect: “Only the course timetable” does not match the lecture evidence.",
        "Incorrect: “No data at all” does not match the lecture evidence."
      ]
    },
    {
      "question": "How does consensus help a distributed network?",
      "options": [
        "It lets nodes agree on a single accepted value or state",
        "It allows every conflicting value to be final",
        "It removes the need for verification",
        "It makes one node the permanent owner"
      ],
      "answer": 0,
      "explanation": "Consensus is presented as the mechanism for agreement among nodes before a record is accepted.",
      "optionNotes": [
        "Correct: Consensus is presented as the mechanism for agreement among nodes before a record is accepted.",
        "Incorrect: “It allows every conflicting value to be final” does not match the lecture evidence.",
        "Incorrect: “It removes the need for verification” does not match the lecture evidence.",
        "Incorrect: “It makes one node the permanent owner” does not match the lecture evidence."
      ]
    },
    {
      "question": "What integrity property does cryptographic verification support?",
      "options": [
        "It makes unauthorised retroactive alteration detectable",
        "It guarantees that a policy is fair",
        "It prevents every operational failure",
        "It makes private data safe without access controls"
      ],
      "answer": 0,
      "explanation": "The recap connects cryptographic verification with detecting changes to an immutable record.",
      "optionNotes": [
        "Correct: The recap connects cryptographic verification with detecting changes to an immutable record.",
        "Incorrect: “It guarantees that a policy is fair” does not match the lecture evidence.",
        "Incorrect: “It prevents every operational failure” does not match the lecture evidence.",
        "Incorrect: “It makes private data safe without access controls” does not match the lecture evidence."
      ]
    },
    {
      "question": "What risk remains even when blockchain records are tamper-evident?",
      "options": [
        "Incorrect input, weak governance, privacy exposure, and operational or legal failures can still occur",
        "No risk remains",
        "The ledger automatically fixes bad data",
        "Consensus validates the truth of every external claim"
      ],
      "answer": 0,
      "explanation": "The lecture frames blockchain as a control that still needs policy, privacy, governance, and risk management.",
      "optionNotes": [
        "Correct: The lecture frames blockchain as a control that still needs policy, privacy, governance, and risk management.",
        "Incorrect: “No risk remains” does not match the lecture evidence.",
        "Incorrect: “The ledger automatically fixes bad data” does not match the lecture evidence.",
        "Incorrect: “Consensus validates the truth of every external claim” does not match the lecture evidence."
      ]
    },
    {
      "question": "Which sequence best represents the KYC account-opening example?",
      "options": [
        "Collect required documents, verify them, and retain an appropriate reference or record",
        "Publish all documents, then skip verification",
        "Delete identity evidence before checking it",
        "Transfer funds before opening the account"
      ],
      "answer": 0,
      "explanation": "The bank workflow moves from account opening and document collection to verification and controlled record handling.",
      "optionNotes": [
        "Correct: The bank workflow moves from account opening and document collection to verification and controlled record handling.",
        "Incorrect: “Publish all documents, then skip verification” does not match the lecture evidence.",
        "Incorrect: “Delete identity evidence before checking it” does not match the lecture evidence.",
        "Incorrect: “Transfer funds before opening the account” does not match the lecture evidence."
      ]
    },
    {
      "question": "What was the student's finance-domain request near the opening?",
      "options": [
        "An example or case study showing blockchain in finance and banking",
        "A request to remove the recording",
        "A request for a new video player",
        "A request to change the course code"
      ],
      "answer": 0,
      "explanation": "A student asked for a finance-domain example; the instructor deferred a finance case study to the next smart-contract session.",
      "optionNotes": [
        "Correct: A student asked for a finance-domain example; the instructor deferred a finance case study to the next smart-contract session.",
        "Incorrect: “A request to remove the recording” does not match the lecture evidence.",
        "Incorrect: “A request for a new video player” does not match the lecture evidence.",
        "Incorrect: “A request to change the course code” does not match the lecture evidence."
      ]
    },
    {
      "question": "What did the instructor say would be discussed in a following session?",
      "options": [
        "A finance-related banking case study in the smart-contract/Solidity session",
        "Only video editing",
        "Only a new attendance policy",
        "Nothing further"
      ],
      "answer": 0,
      "explanation": "The response to the student's question points to a finance case study in the next smart-contract session.",
      "optionNotes": [
        "Correct: The response to the student's question points to a finance case study in the next smart-contract session.",
        "Incorrect: “Only video editing” does not match the lecture evidence.",
        "Incorrect: “Only a new attendance policy” does not match the lecture evidence.",
        "Incorrect: “Nothing further” does not match the lecture evidence."
      ]
    },
    {
      "question": "What project mention appears in the transcript?",
      "options": [
        "A student described an admin-system blockchain and smart-contract project",
        "The instructor assigned a mandatory trading bot",
        "A completed mining project was graded",
        "No project was mentioned"
      ],
      "answer": 0,
      "explanation": "At about 03:19, a student describes working on an admin-system implementation using blockchain and smart contracts; no new assignment is announced.",
      "optionNotes": [
        "Correct: At about 03:19, a student describes working on an admin-system implementation using blockchain and smart contracts; no new assignment is announced.",
        "Incorrect: “The instructor assigned a mandatory trading bot” does not match the lecture evidence.",
        "Incorrect: “A completed mining project was graded” does not match the lecture evidence.",
        "Incorrect: “No project was mentioned” does not match the lecture evidence."
      ]
    },
    {
      "question": "Which policy bundle best supports dependable enterprise adoption?",
      "options": [
        "Compliance, privacy/security, interoperability, ethical and environmental review, and accountable risk controls",
        "Token marketing alone",
        "Unrecorded manual changes",
        "Removing all oversight"
      ],
      "answer": 0,
      "explanation": "The lecture closes by connecting these policy areas to trust, compliance, risk reduction, and sustainable adoption.",
      "optionNotes": [
        "Correct: The lecture closes by connecting these policy areas to trust, compliance, risk reduction, and sustainable adoption.",
        "Incorrect: “Token marketing alone” does not match the lecture evidence.",
        "Incorrect: “Unrecorded manual changes” does not match the lecture evidence.",
        "Incorrect: “Removing all oversight” does not match the lecture evidence."
      ]
    }
  ]
}
};
