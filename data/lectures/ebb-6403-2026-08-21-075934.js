// English-only publication unit.
export const ebb6403Lecture20260821 = {
  en: {
  "title": "Security and Privacy for Big Data: threat modelling, access control, and authentication",
  "lede": "This introductory lecture maps the security and privacy footprint of big-data platforms: mixed data and high velocity create risks across acquisition, storage and analytics. It surveys encryption, access control, physical and key-management controls, then uses the STRIDE model, RBAC/ABAC/PBAC, MFA, SSO and Kerberos to connect threats to mitigations. The closing section previews data anonymization and differential privacy for a later class.",
  "instructionalInterval": "01:24–48:00 source time (visible-tab 2× capture; no idle tail observed)",
  "reviewLevel": "View-only recording, full beginning/10%/25%/50%/75%/90%/near-end sweep, 2× visible-tab video+audio capture, restored source-time transcript, and slide-frame evidence verified",
  "coverage": [
    {
      "title": "Big-data risk surface",
      "body": "Structured, semi-structured and unstructured data arrive with volume, velocity, variety and veracity concerns. Each lifecycle boundary—from source to acquisition, storage, analytics and sharing—can expose integrity, confidentiality, availability or privacy."
    },
    {
      "title": "Control families",
      "body": "Encryption protects data at rest and in transit; access control limits actions; physical security protects infrastructure; centralized key management gives cryptographic operations an accountable home."
    },
    {
      "title": "Threat modelling",
      "body": "A repeatable workflow defines scope, diagrams the system, identifies and prioritizes threats, then selects and iterates controls. STRIDE supplies six memorable threat categories."
    },
    {
      "title": "Identity and authorization",
      "body": "RBAC maps permissions to jobs, ABAC evaluates attributes and context, PBAC evaluates policy rules, and authentication establishes identity using knowledge, possession or biometric factors."
    },
    {
      "title": "Distributed authentication and privacy",
      "body": "MFA, SSO and Kerberos address identity in distributed environments; anonymization and differential privacy are previewed as next-step privacy techniques."
    }
  ],
  "takeaway": "Draw the data lifecycle before choosing a security product: name each trust boundary, identify what can be spoofed, changed, disclosed, exhausted or over-privileged, and map every risk to a least-privilege, auditable control.",
  "slideTrail": [
    {
      "time": "00:00:13",
      "title": "Security and Privacy in Big Data",
      "note": "Lecture opening and instructor identification; the session frames security and privacy as requirements for large, mixed-format data platforms."
    },
    {
      "time": "00:02:00",
      "title": "Big Data",
      "note": "Volume, structured/semi-structured/unstructured forms, machine learning and analytics; the NYSE one-terabyte-per-day example motivates scale."
    },
    {
      "time": "00:05:36",
      "title": "Characteristics Of Big Data",
      "note": "Volume, velocity, variety and veracity; veracity emphasizes correctness, noise reduction, cleaning and normalization."
    },
    {
      "time": "00:10:56",
      "title": "Big Data Security Technologies",
      "note": "Encryption, access control, physical security and centralized key management. AES, RSA, TLS/SSL and HDFS are named examples."
    },
    {
      "time": "00:23:58",
      "title": "Example of threat Modeling the big data life cycle",
      "note": "Sources, acquisition, stream analysis, storage and analytics form attack surfaces for phishing, spoofing, manipulation and privacy violations."
    },
    {
      "time": "00:31:16",
      "title": "STRIDE Model for Threat Modeling",
      "note": "Microsoft's six categories: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service and Elevation of Privilege."
    },
    {
      "time": "00:35:58",
      "title": "Access control for big data systems",
      "note": "RBAC, ABAC and PBAC examples; e-commerce data lake permissions, role mappings and column-level security are discussed."
    },
    {
      "time": "00:43:10",
      "title": "Common Authentication Methods",
      "note": "Knowledge, possession and biometric factors; MFA, SSO and token-based authentication trade-offs are compared."
    },
    {
      "time": "00:45:50",
      "title": "Kerberos Authentication Mechanism for big data",
      "note": "Kerberos authenticates distributed Hadoop/Kafka-style clients through a token authority, enterprise identity and KDC without sending passwords over the network."
    },
    {
      "time": "00:47:29",
      "title": "What is Data Anonymization?",
      "note": "PII masking/removal preserves analysis while reducing disclosure; anonymized data can be stored or shared under a policy."
    }
  ],
  "summary": [
    {
      "title": "1. Big data makes security a lifecycle problem",
      "sourceRefs": [
        "00:00:13–00:10:56",
        "Big Data; Characteristics Of Big Data"
      ],
      "paragraphs": [
        "Big-data platforms combine relational, XML/JSON-like, web, image, video and time-series inputs. Volume, velocity and variety broaden the attack surface; veracity adds a quality dimension because noisy or inaccurate data can make downstream models and decisions unreliable.",
        "The instructor uses stock-exchange scale as motivation, then connects security and privacy to financial loss, identity theft, fraud, blackmail, regulatory guidance such as GDPR/CCPA/HIPAA, and protection of individual rights."
      ]
    },
    {
      "title": "2. Four control families form a baseline",
      "sourceRefs": [
        "00:10:56–00:22:44",
        "Big Data Security Technologies"
      ],
      "paragraphs": [
        "Encryption encodes data at rest and in transit. AES is introduced as a symmetric storage cipher; RSA and Diffie–Hellman as public-key/key-exchange techniques; TLS/SSL as secure transport. HDFS is mentioned as an example of a large storage platform where encryption matters.",
        "Access control restricts users to permitted data and actions. Physical security covers biometric entry, CCTV and protected data-centre facilities. Centralized key-management services and hardware security modules organize keys for many stakeholders and applications."
      ]
    },
    {
      "title": "3. Threat modelling exposes boundaries before controls",
      "sourceRefs": [
        "00:23:58–00:31:16",
        "Example of threat Modeling the big data life cycle"
      ],
      "paragraphs": [
        "The process is scope and objective, system block diagram, threat identification, risk analysis/prioritization, and control design. It is iterative because data sources, software, roles and deployment context change.",
        "Across acquisition, storage and analytics, phishing, spoofing, manipulation, unauthorized access, data destruction, re-identification and privacy disclosure are possible. The lifecycle view turns a generic security checklist into concrete checkpoints."
      ]
    },
    {
      "title": "4. STRIDE gives a threat vocabulary",
      "sourceRefs": [
        "00:31:16–00:35:58",
        "STRIDE Model for Threat Modeling"
      ],
      "paragraphs": [
        "Spoofing uses a false identity; tampering changes data and violates integrity; repudiation is denial of an action; information disclosure reveals private data; denial of service exhausts resources; elevation of privilege obtains permissions meant for a stronger identity.",
        "The matching controls are strong authentication and secrets protection for spoofing, checksums/hashes/signatures for tampering and repudiation, authorization/encryption for disclosure, authentication/authorization plus detection and filtering for availability, and least privilege with hardened configuration for elevation."
      ]
    },
    {
      "title": "5. Authorization should express roles, attributes and policy",
      "sourceRefs": [
        "00:35:58–00:43:10",
        "Access control for big data systems"
      ],
      "paragraphs": [
        "RBAC maps users to job roles and role permissions. The e-commerce example gives data scientists read-only access to anonymized datasets while an IT administrator receives CRUD privileges. Time and location can extend role rules.",
        "ABAC evaluates user, resource and environmental attributes such as department, clearance, data type, time, location, device and network. PBAC expresses a policy function over subject, resource and context; column-, role- and data-block-level enforcement protects sensitive warehouse fields."
      ]
    },
    {
      "title": "6. Authentication establishes identity in distributed systems",
      "sourceRefs": [
        "00:43:10–00:47:29",
        "Common Authentication Methods; Kerberos Authentication Mechanism for big data"
      ],
      "paragraphs": [
        "Knowledge factors include passwords/PINs, possession factors include cards or authorized devices, and inherence factors include fingerprints or retinal patterns. MFA combines independent factors such as password plus OTP. SSO reduces password fatigue but concentrates risk in one credential or token.",
        "Kerberos is introduced for Hadoop, Kafka and related distributed systems. A client obtains a token through authentication and enterprise identity services, the KDC verifies the exchange, and the client uses the resulting ticket without transmitting its password across the network."
      ]
    },
    {
      "title": "7. Anonymization is the bridge to privacy-preserving analytics",
      "sourceRefs": [
        "00:47:29–48:00",
        "What is Data Anonymization?"
      ],
      "paragraphs": [
        "The closing slide depicts raw data plus an anonymization policy flowing to anonymized data that can be stored or shared with third parties. Masking or removing personally identifying information aims to retain useful analysis while reducing re-identification and disclosure.",
        "Differential privacy and cryptographic hashes/signatures are previewed for later, more technical discussions. Treat this session as the map: later lectures can supply formal guarantees, algorithms, and parameter choices."
      ]
    }
  ],
  "courseSignals": {
    "assignments": [],
    "homework": [],
    "labs": [],
    "projects": [],
    "references": [],
    "studentQuestions": []
  },
  "keyTerms": [
    {
      "term": "Veracity",
      "definition": "The quality, correctness and accuracy of data."
    },
    {
      "term": "Threat modelling",
      "definition": "A structured, iterative process for identifying, prioritizing and mitigating system threats."
    },
    {
      "term": "STRIDE",
      "definition": "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service and Elevation of Privilege."
    },
    {
      "term": "RBAC",
      "definition": "Authorization through roles and their permissions."
    },
    {
      "term": "ABAC",
      "definition": "Authorization through subject, resource and environmental attributes."
    },
    {
      "term": "PBAC",
      "definition": "Authorization through policy rules over subjects, resources and context."
    },
    {
      "term": "MFA",
      "definition": "Authentication with two or more independent factors."
    },
    {
      "term": "Kerberos",
      "definition": "A ticket-based network authentication protocol for distributed systems."
    },
    {
      "term": "Data anonymization",
      "definition": "Masking or removing identifying information while retaining useful analytical data."
    }
  ],
  "insights": [
    {
      "label": "Architecture",
      "title": "Model trust boundaries, not just servers",
      "body": "The same raw record crosses source, acquisition, storage, analytics and sharing boundaries. Draw who can write, read, transform and export at each edge; a secure database with an untrusted ingestion path is still exposed."
    },
    {
      "label": "Authorization",
      "title": "Least privilege must be data-aware",
      "body": "A role that is safe for a table may be unsafe for one column or one time/location context. Combine RBAC for manageable job ownership with ABAC/PBAC for sensitivity and context."
    },
    {
      "label": "Identity",
      "title": "SSO changes the blast radius",
      "body": "SSO improves usability but makes the identity provider and token lifecycle critical. Pair strong MFA, short-lived tokens, monitoring and rapid revocation with convenience."
    },
    {
      "label": "Privacy",
      "title": "Anonymization needs a re-identification test",
      "body": "Removing names is not automatically anonymous. Test linkage against auxiliary datasets, minimize quasi-identifiers, document the policy and revisit risk when new data sources arrive."
    }
  ],
  "resources": [
    {
      "title": "NIST SP 800-154: Data-centric threat modeling",
      "url": "https://csrc.nist.gov/publications/detail/sp/800-154/final",
      "note": "Authoritative guidance for identifying data, threat sources, events and mitigations."
    },
    {
      "title": "Microsoft STRIDE threat modeling",
      "url": "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats",
      "note": "Primary documentation for the STRIDE categories named in the lecture."
    },
    {
      "title": "NIST SP 800-207: Zero Trust Architecture",
      "url": "https://csrc.nist.gov/publications/detail/sp/800-207/final",
      "note": "Useful follow-up for identity, policy enforcement and least-privilege access across boundaries."
    },
    {
      "title": "Apache Ranger documentation",
      "url": "https://ranger.apache.org/",
      "note": "Practical role- and policy-based authorization for Hadoop ecosystem services."
    },
    {
      "title": "MIT Kerberos documentation",
      "url": "https://web.mit.edu/kerberos/",
      "note": "Technical reference for ticket-based authentication and the KDC model."
    },
    {
      "title": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework",
      "note": "A risk-based companion for privacy governance, controls and re-identification thinking."
    },
    {
      "title": "OpenMined: Differential privacy",
      "url": "https://openmined.org/learning-hub/",
      "note": "Further viewing for the differential-privacy preview at the end of the lecture."
    }
  ],
  "quiz": [
    {
      "question": "Which three broad data forms are included in big-data systems?",
      "options": [
        "Structured, semi-structured, and unstructured",
        "Only relational tables",
        "Only images",
        "Only XML"
      ],
      "answer": 0,
      "explanation": "The lecture uses relational data, XML-like tree data, and web, image, video, or time-series data as examples.",
      "optionNotes": [
        "Correct: The lecture uses relational data, XML-like tree data, and web, image, video, or time-series data as examples.",
        "Incorrect: “Only relational tables” does not match the lecture evidence or definition.",
        "Incorrect: “Only images” does not match the lecture evidence or definition.",
        "Incorrect: “Only XML” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does velocity describe in the 5V view of big data?",
      "options": [
        "How quickly data is produced and needs to be processed",
        "How accurate a password is",
        "How many users have a role",
        "How much disk is encrypted"
      ],
      "answer": 0,
      "explanation": "Velocity concerns the speed of data generation and the need for timely processing.",
      "optionNotes": [
        "Correct: Velocity concerns the speed of data generation and the need for timely processing.",
        "Incorrect: “How accurate a password is” does not match the lecture evidence or definition.",
        "Incorrect: “How many users have a role” does not match the lecture evidence or definition.",
        "Incorrect: “How much disk is encrypted” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why is veracity important?",
      "options": [
        "Noisy or inaccurate data can make analysis and decisions unreliable",
        "It guarantees unlimited storage",
        "It replaces encryption",
        "It defines a meeting time"
      ],
      "answer": 0,
      "explanation": "The instructor links veracity to data quality, correctness, accuracy, cleaning, and normalization.",
      "optionNotes": [
        "Correct: The instructor links veracity to data quality, correctness, accuracy, cleaning, and normalization.",
        "Incorrect: “It guarantees unlimited storage” does not match the lecture evidence or definition.",
        "Incorrect: “It replaces encryption” does not match the lecture evidence or definition.",
        "Incorrect: “It defines a meeting time” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What security objective protects a person from identity theft and blackmail?",
      "options": [
        "Preserving privacy and protecting personal rights",
        "Increasing video resolution",
        "Changing the data schema",
        "Adding more replicas only"
      ],
      "answer": 0,
      "explanation": "Privacy protection limits disclosure and supports protection from identity theft, fraud, and blackmail.",
      "optionNotes": [
        "Correct: Privacy protection limits disclosure and supports protection from identity theft, fraud, and blackmail.",
        "Incorrect: “Increasing video resolution” does not match the lecture evidence or definition.",
        "Incorrect: “Changing the data schema” does not match the lecture evidence or definition.",
        "Incorrect: “Adding more replicas only” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which algorithm is presented as a symmetric encryption example for stored data?",
      "options": [
        "AES",
        "RSA",
        "Kerberos",
        "RBAC"
      ],
      "answer": 0,
      "explanation": "Advanced Encryption Standard (AES) is named for storage encryption; RSA is discussed for public-key exchange.",
      "optionNotes": [
        "Correct: Advanced Encryption Standard (AES) is named for storage encryption; RSA is discussed for public-key exchange.",
        "Incorrect: “RSA” does not match the lecture evidence or definition.",
        "Incorrect: “Kerberos” does not match the lecture evidence or definition.",
        "Incorrect: “RBAC” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is RSA used for in the lecture's overview?",
      "options": [
        "Public-key encryption and secure key exchange",
        "Assigning job roles",
        "Detecting a denial of service",
        "Anonymizing columns"
      ],
      "answer": 0,
      "explanation": "RSA and Diffie–Hellman are identified as public-key techniques useful for exchanging keys.",
      "optionNotes": [
        "Correct: RSA and Diffie–Hellman are identified as public-key techniques useful for exchanging keys.",
        "Incorrect: “Assigning job roles” does not match the lecture evidence or definition.",
        "Incorrect: “Detecting a denial of service” does not match the lecture evidence or definition.",
        "Incorrect: “Anonymizing columns” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is TLS/SSL intended to protect?",
      "options": [
        "Communication while data travels between a source and a server",
        "Only a user's job title",
        "Only a physical data centre",
        "The number of database rows"
      ],
      "answer": 0,
      "explanation": "TLS/SSL is introduced for secure communication between a web repository and a backend or between network endpoints.",
      "optionNotes": [
        "Correct: TLS/SSL is introduced for secure communication between a web repository and a backend or between network endpoints.",
        "Incorrect: “Only a user's job title” does not match the lecture evidence or definition.",
        "Incorrect: “Only a physical data centre” does not match the lecture evidence or definition.",
        "Incorrect: “The number of database rows” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is the purpose of access control?",
      "options": [
        "Granting only the data and actions permitted for a user or service",
        "Encrypting every file with the same key",
        "Making every user an administrator",
        "Removing audit logs"
      ],
      "answer": 0,
      "explanation": "Access control uses roles, attributes, policies, and context to restrict data and actions.",
      "optionNotes": [
        "Correct: Access control uses roles, attributes, policies, and context to restrict data and actions.",
        "Incorrect: “Encrypting every file with the same key” does not match the lecture evidence or definition.",
        "Incorrect: “Making every user an administrator” does not match the lecture evidence or definition.",
        "Incorrect: “Removing audit logs” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "In the e-commerce data-lake example, what can RBAC give a data scientist?",
      "options": [
        "Read-only access to anonymized datasets",
        "Full create, read, update, delete access to everything",
        "No authentication",
        "Physical access to a server room"
      ],
      "answer": 0,
      "explanation": "The lecture contrasts read-only anonymized data for data scientists with full CRUD privileges for an IT administrator.",
      "optionNotes": [
        "Correct: The lecture contrasts read-only anonymized data for data scientists with full CRUD privileges for an IT administrator.",
        "Incorrect: “Full create, read, update, delete access to everything” does not match the lecture evidence or definition.",
        "Incorrect: “No authentication” does not match the lecture evidence or definition.",
        "Incorrect: “Physical access to a server room” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which model grants access from user, resource, and environment attributes?",
      "options": [
        "Attribute-based access control (ABAC)",
        "Only a file checksum",
        "A symmetric cipher",
        "A video player"
      ],
      "answer": 0,
      "explanation": "ABAC evaluates attributes such as department, clearance, job title, time, location, device, and network.",
      "optionNotes": [
        "Correct: ABAC evaluates attributes such as department, clearance, job title, time, location, device, and network.",
        "Incorrect: “Only a file checksum” does not match the lecture evidence or definition.",
        "Incorrect: “A symmetric cipher” does not match the lecture evidence or definition.",
        "Incorrect: “A video player” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is policy-based access control (PBAC) described as?",
      "options": [
        "A rule or function combining subject attributes, data type, and environment",
        "A list of encryption algorithms only",
        "A backup schedule",
        "A physical camera system"
      ],
      "answer": 0,
      "explanation": "The policy evaluates a request from a subject against the resource and contextual rules, then grants or denies it.",
      "optionNotes": [
        "Correct: The policy evaluates a request from a subject against the resource and contextual rules, then grants or denies it.",
        "Incorrect: “A list of encryption algorithms only” does not match the lecture evidence or definition.",
        "Incorrect: “A backup schedule” does not match the lecture evidence or definition.",
        "Incorrect: “A physical camera system” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is the first step in a threat-modelling process?",
      "options": [
        "Define the system scope and objective",
        "Immediately delete all logs",
        "Choose a font",
        "Approve every threat"
      ],
      "answer": 0,
      "explanation": "The stated sequence begins by defining scope and objectives, then drawing the system, identifying threats, prioritizing risk, and selecting controls.",
      "optionNotes": [
        "Correct: The stated sequence begins by defining scope and objectives, then drawing the system, identifying threats, prioritizing risk, and selecting controls.",
        "Incorrect: “Immediately delete all logs” does not match the lecture evidence or definition.",
        "Incorrect: “Choose a font” does not match the lecture evidence or definition.",
        "Incorrect: “Approve every threat” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Why are threats prioritized after they are identified?",
      "options": [
        "Controls and effort can focus first on the highest risks",
        "It makes every risk disappear",
        "It avoids drawing the system",
        "It proves data is anonymous"
      ],
      "answer": 0,
      "explanation": "Risk analysis separates high, medium, and low risks so mitigation can be proportionate and iterative.",
      "optionNotes": [
        "Correct: Risk analysis separates high, medium, and low risks so mitigation can be proportionate and iterative.",
        "Incorrect: “It makes every risk disappear” does not match the lecture evidence or definition.",
        "Incorrect: “It avoids drawing the system” does not match the lecture evidence or definition.",
        "Incorrect: “It proves data is anonymous” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which attack can spoof a data source's identity?",
      "options": [
        "Spoofing",
        "Seasonality",
        "Normalization",
        "Stationarity"
      ],
      "answer": 0,
      "explanation": "The lifecycle example warns that an attacker may fake an IP address or source identity.",
      "optionNotes": [
        "Correct: The lifecycle example warns that an attacker may fake an IP address or source identity.",
        "Incorrect: “Seasonality” does not match the lecture evidence or definition.",
        "Incorrect: “Normalization” does not match the lecture evidence or definition.",
        "Incorrect: “Stationarity” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "In the STRIDE model, what does tampering violate?",
      "options": [
        "Integrity by modifying data or messages",
        "Availability by adding capacity",
        "Confidentiality by encrypting data",
        "Authentication by using an OTP"
      ],
      "answer": 0,
      "explanation": "Tampering is unauthorized modification while information is flowing or stored, so it threatens integrity.",
      "optionNotes": [
        "Correct: Tampering is unauthorized modification while information is flowing or stored, so it threatens integrity.",
        "Incorrect: “Availability by adding capacity” does not match the lecture evidence or definition.",
        "Incorrect: “Confidentiality by encrypting data” does not match the lecture evidence or definition.",
        "Incorrect: “Authentication by using an OTP” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does repudiation mean in STRIDE?",
      "options": [
        "An actor denies performing an action and evidence is needed to prove it",
        "A server runs out of memory",
        "A user changes departments",
        "A key is exchanged"
      ],
      "answer": 0,
      "explanation": "Audit logs with verifiable timestamps, hashes, and signatures help address denial of an action.",
      "optionNotes": [
        "Correct: Audit logs with verifiable timestamps, hashes, and signatures help address denial of an action.",
        "Incorrect: “A server runs out of memory” does not match the lecture evidence or definition.",
        "Incorrect: “A user changes departments” does not match the lecture evidence or definition.",
        "Incorrect: “A key is exchanged” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is elevation of privilege?",
      "options": [
        "A user or process gains permissions intended for a more privileged identity",
        "A file is compressed",
        "A sensor produces data faster",
        "A table gains a column"
      ],
      "answer": 0,
      "explanation": "The instructor asks whether an attacker can assume the identity or permissions of a privileged user.",
      "optionNotes": [
        "Correct: The instructor asks whether an attacker can assume the identity or permissions of a privileged user.",
        "Incorrect: “A file is compressed” does not match the lecture evidence or definition.",
        "Incorrect: “A sensor produces data faster” does not match the lecture evidence or definition.",
        "Incorrect: “A table gains a column” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which control pairing best mitigates information disclosure?",
      "options": [
        "Least-privilege access control and encryption",
        "More public sharing and fewer logs",
        "Only a faster CPU",
        "Unverified screenshots"
      ],
      "answer": 0,
      "explanation": "The STRIDE mitigation summary names access control and encryption for information disclosure.",
      "optionNotes": [
        "Correct: The STRIDE mitigation summary names access control and encryption for information disclosure.",
        "Incorrect: “More public sharing and fewer logs” does not match the lecture evidence or definition.",
        "Incorrect: “Only a faster CPU” does not match the lecture evidence or definition.",
        "Incorrect: “Unverified screenshots” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which authentication factor is knowledge-based?",
      "options": [
        "A password or PIN",
        "A fingerprint",
        "An access card",
        "A retinal pattern"
      ],
      "answer": 0,
      "explanation": "Knowledge factors are something the user knows; biometrics are something the user is and cards are something possessed.",
      "optionNotes": [
        "Correct: Knowledge factors are something the user knows; biometrics are something the user is and cards are something possessed.",
        "Incorrect: “A fingerprint” does not match the lecture evidence or definition.",
        "Incorrect: “An access card” does not match the lecture evidence or definition.",
        "Incorrect: “A retinal pattern” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What does multi-factor authentication require?",
      "options": [
        "Two or more independent factors such as a password and OTP",
        "Two copies of the same password",
        "Only a username",
        "Only a network address"
      ],
      "answer": 0,
      "explanation": "MFA combines factors such as knowledge plus a phone-generated one-time code.",
      "optionNotes": [
        "Correct: MFA combines factors such as knowledge plus a phone-generated one-time code.",
        "Incorrect: “Two copies of the same password” does not match the lecture evidence or definition.",
        "Incorrect: “Only a username” does not match the lecture evidence or definition.",
        "Incorrect: “Only a network address” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is a major trade-off of single sign-on (SSO)?",
      "options": [
        "One login is convenient, but one compromised credential can expose many applications",
        "It always needs a separate password per app",
        "It cannot use tokens",
        "It prevents every phishing attack"
      ],
      "answer": 0,
      "explanation": "SSO reduces password fatigue but concentrates risk in the shared login or token.",
      "optionNotes": [
        "Correct: SSO reduces password fatigue but concentrates risk in the shared login or token.",
        "Incorrect: “It always needs a separate password per app” does not match the lecture evidence or definition.",
        "Incorrect: “It cannot use tokens” does not match the lecture evidence or definition.",
        "Incorrect: “It prevents every phishing attack” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What problem does Kerberos help solve in a distributed big-data environment?",
      "options": [
        "Network authentication without sending the password across the network",
        "Column-level anonymization",
        "Removing all backups",
        "Forecasting velocity"
      ],
      "answer": 0,
      "explanation": "Kerberos is presented as a network authentication protocol for Hadoop, Kafka, and related distributed systems.",
      "optionNotes": [
        "Correct: Kerberos is presented as a network authentication protocol for Hadoop, Kafka, and related distributed systems.",
        "Incorrect: “Column-level anonymization” does not match the lecture evidence or definition.",
        "Incorrect: “Removing all backups” does not match the lecture evidence or definition.",
        "Incorrect: “Forecasting velocity” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "In the Kerberos workflow, what issues a token after enterprise identity checks?",
      "options": [
        "A token authority working with the enterprise identity service",
        "A slide renderer",
        "A firewall rule only",
        "A data warehouse column"
      ],
      "answer": 0,
      "explanation": "The lecture sketches a client, authentication service, token authority, enterprise identity source, and KDC flow.",
      "optionNotes": [
        "Correct: The lecture sketches a client, authentication service, token authority, enterprise identity source, and KDC flow.",
        "Incorrect: “A slide renderer” does not match the lecture evidence or definition.",
        "Incorrect: “A firewall rule only” does not match the lecture evidence or definition.",
        "Incorrect: “A data warehouse column” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "What is data anonymization intended to do?",
      "options": [
        "Remove or mask personally identifying information while retaining useful analysis",
        "Make every record public",
        "Add a password to a slide",
        "Increase video duration"
      ],
      "answer": 0,
      "explanation": "The final slide describes masking or removing PII before data is stored or shared for analysis.",
      "optionNotes": [
        "Correct: The final slide describes masking or removing PII before data is stored or shared for analysis.",
        "Incorrect: “Make every record public” does not match the lecture evidence or definition.",
        "Incorrect: “Add a password to a slide” does not match the lecture evidence or definition.",
        "Incorrect: “Increase video duration” does not match the lecture evidence or definition."
      ]
    },
    {
      "question": "Which statement best connects threat modelling and security controls?",
      "options": [
        "Model attack surfaces, prioritize risk, then choose controls such as encryption, access control, or monitoring",
        "Choose controls before understanding the system",
        "Use one control for every threat",
        "Skip iteration after the first diagram"
      ],
      "answer": 0,
      "explanation": "The lecture presents threat modelling as an iterative bridge from system understanding to proportionate controls.",
      "optionNotes": [
        "Correct: The lecture presents threat modelling as an iterative bridge from system understanding to proportionate controls.",
        "Incorrect: “Choose controls before understanding the system” does not match the lecture evidence or definition.",
        "Incorrect: “Use one control for every threat” does not match the lecture evidence or definition.",
        "Incorrect: “Skip iteration after the first diagram” does not match the lecture evidence or definition."
      ]
    }
  ]
}
};
