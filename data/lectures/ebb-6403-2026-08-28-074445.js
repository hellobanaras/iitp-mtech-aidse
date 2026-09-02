// English-only publication unit.
const quizItem = (question, options, answer, explanation, wrongReasons) => ({
  question,
  options,
  answer,
  explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `Correct: ${explanation}`
    : `Incorrect: ${wrongReasons[index] || `“${option}” does not satisfy the concept tested here.`}`)
});

export const ebb6403Lecture20260828 = {
  en: {
    title: "Privacy-preserving big data: differential privacy, anonymization, and network defense",
    lede: "This lecture moves from privacy-preserving collaboration to formal differential privacy, anonymization models, and network defense for distributed data platforms. It explains epsilon and delta, Laplace and Gaussian noise, data shuffling, k-anonymity, l-diversity, and t-closeness, then connects TLS, IPsec, VPNs, Kerberos, IDS/IPS, monitoring, and incident response into a practical security strategy.",
    instructionalInterval: "00:23–58:59 source time (2× visible-tab capture; 59:00–1:33:31 idle participant tail excluded)",
    reviewLevel: "View-only recording; beginning/10%/25%/50%/75%/90%/near-end sweep, 2× visible-tab video+audio capture, source-time-restored transcript, slide-frame evidence, and idle-tail boundary verified",
    coverage: [
      { title: "Privacy-preserving collaboration", body: "Multiple hospitals can contribute to a shared model without exchanging identifiable patient records by combining de-identification, controlled aggregation, and privacy-preserving computation." },
      { title: "Differential privacy", body: "The parameters epsilon and delta bound how much an output distribution can change when one person's record is added or removed; Laplace and Gaussian mechanisms operationalize the guarantee." },
      { title: "Anonymization models", body: "Generalization, suppression, top/bottom coding, k-anonymity, l-diversity, and t-closeness reduce disclosure through quasi-identifiers and sensitive attributes." },
      { title: "Distributed network security", body: "TLS, IPsec, VPNs, Kerberos, SSH, SASL, Ranger, encryption zones, and segmentation protect data and identities across Hadoop- and cloud-style systems." },
      { title: "Detection and response", body: "Host- and network-based IDS/IPS, behavioral analytics, monitoring, patching, audit, governance, and incident response provide layered operational defense." }
    ],
    takeaway: "Privacy is not achieved by deleting names alone. Define the neighboring-record guarantee, control the privacy budget, test quasi-identifier linkage, secure every network boundary, and monitor the resulting system for misuse and drift.",
    slideTrail: [
      { time: "00:00:23", title: "Security recap", note: "Lifecycle risks, STRIDE, RBAC/ABAC/PBAC, MFA, SSO, and Kerberos reconnect this lecture to the previous session." },
      { time: "00:12:28", title: "Collaborative hospital analytics", note: "A shared disease-prediction model motivates privacy-preserving aggregation without transferring raw patient records." },
      { time: "00:15:01", title: "Anonymization, differential privacy, and secure computation", note: "The privacy toolkit separates removal or masking of identifiers from formal privacy guarantees and cryptographic collaboration." },
      { time: "00:16:00", title: "Randomization", note: "Noise and shuffling reduce the direct link between an individual record and a released result." },
      { time: "00:19:29", title: "Epsilon and delta", note: "Epsilon controls privacy loss; smaller epsilon means stronger privacy. Delta is the allowed probability that the pure guarantee fails." },
      { time: "00:20:15", title: "Formal differential-privacy definition", note: "For neighboring datasets D and D′, Pr[M(D) ∈ S] ≤ e^ε Pr[M(D′) ∈ S] + δ." },
      { time: "00:22:31", title: "Laplace mechanism", note: "A numeric query is released as f(D) + Lap(0, Δf/ε), tying noise scale to sensitivity and epsilon." },
      { time: "00:24:10", title: "Gaussian mechanism", note: "Gaussian noise supports approximate (ε,δ)-differential privacy when calibrated to sensitivity and the desired guarantee." },
      { time: "00:25:12", title: "Data shuffling", note: "Random permutation weakens record-to-position linkage but is not, by itself, a complete privacy guarantee." },
      { time: "00:27:15", title: "k-anonymity, l-diversity, and t-closeness", note: "Three release models progressively address indistinguishability, sensitive-value diversity, and distributional similarity." },
      { time: "00:29:10", title: "Identifier taxonomy", note: "Direct identifiers, quasi-identifiers, and sensitive attributes require different transformation and risk checks." },
      { time: "00:31:25", title: "k-anonymity example", note: "Age, sex, and city are generalized or suppressed so each released quasi-identifier pattern represents at least k people." },
      { time: "00:36:18", title: "l-diversity", note: "Each equivalence class must contain multiple well-represented sensitive values, reducing homogeneous-attribute inference." },
      { time: "00:41:01", title: "t-closeness", note: "The sensitive-value distribution within each class must remain close to the overall distribution." },
      { time: "00:44:24", title: "Network security for distributed data", note: "The lecture shifts to authentication, authorization, encryption, segmentation, and monitoring across Hadoop/cloud nodes." },
      { time: "00:47:10", title: "Secure communication protocols", note: "TLS, IPsec, VPNs, Kerberos, SSH, and SASL protect different layers of transport, tunneling, administration, and authentication." },
      { time: "00:50:03", title: "IDS and IPS", note: "Signature-based detection is contrasted with behavior-based analysis and host- versus network-level visibility." },
      { time: "00:56:42", title: "Big-data security best practices", note: "Patching, least privilege, logging, masking, governance, incident response, and compliance close the control loop." }
    ],
    summary: [
      {
        title: "1. Collaboration needs a privacy boundary",
        sourceRefs: ["00:12:28–00:18:00", "Collaborative hospital analytics; Randomization"],
        paragraphs: [
          "The hospital scenario separates the analytical goal from possession of raw records. Each institution can transform or aggregate its data locally, while the collaboration exchanges only what the shared task requires.",
          "Masking removes visible identifiers, randomization weakens direct linkage, and secure multiparty computation can compute across parties without revealing their individual inputs. These techniques solve different problems and should be composed deliberately."
        ]
      },
      {
        title: "2. Differential privacy is a stability guarantee",
        sourceRefs: ["00:18:00–00:25:12", "Epsilon and delta; Laplace mechanism; Gaussian mechanism"],
        paragraphs: [
          "For neighboring datasets D and D′ that differ by one person's record, a randomized mechanism M is (ε,δ)-differentially private when Pr[M(D) ∈ S] ≤ e^ε Pr[M(D′) ∈ S] + δ for every possible output set S. The released result should therefore look nearly the same whether that person participates or not.",
          "Smaller ε gives stronger privacy but generally requires more noise. Delta permits a small failure probability. For a numeric query f, the Laplace mechanism releases f(D) + Lap(0, Δf/ε), where Δf is sensitivity. Gaussian noise is commonly calibrated for approximate (ε,δ)-privacy."
        ]
      },
      {
        title: "3. Shuffling helps, but does not replace a guarantee",
        sourceRefs: ["00:25:12–00:27:15", "Data shuffling"],
        paragraphs: [
          "Shuffling removes stable record order and can amplify privacy when combined with local randomization, but a shuffled row can still expose unique quasi-identifiers. Treat shuffling as one layer, not proof that the release is anonymous.",
          "The practical design question is what an attacker can link using auxiliary data. That question leads directly to k-anonymity, l-diversity, and t-closeness."
        ]
      },
      {
        title: "4. k-anonymity protects quasi-identifier patterns",
        sourceRefs: ["00:27:15–00:36:18", "Identifier taxonomy; k-anonymity example"],
        paragraphs: [
          "Direct identifiers such as names can be removed, yet age, sex, and city may still re-identify a person when linked to external data. k-anonymity requires every released quasi-identifier pattern to occur in at least k records.",
          "Generalization broadens values, suppression removes risky cells or rows, and top/bottom coding caps extremes. These transformations trade analytical precision for a larger anonymity set."
        ]
      },
      {
        title: "5. l-diversity and t-closeness address attribute disclosure",
        sourceRefs: ["00:36:18–00:44:24", "l-diversity; t-closeness"],
        paragraphs: [
          "A k-anonymous group can still reveal a diagnosis if every member has the same condition. l-diversity requires multiple well-represented sensitive values within each equivalence class.",
          "t-closeness goes further by requiring each class's sensitive-value distribution to remain close to the overall distribution. It reduces skewness and similarity attacks, although choosing a distance measure and threshold remains a domain decision."
        ]
      },
      {
        title: "6. Distributed platforms require layered network controls",
        sourceRefs: ["00:44:24–00:50:03", "Network security; Secure communication protocols"],
        paragraphs: [
          "Hadoop and cloud platforms spread data and computation across nodes, so every client, service, administrative channel, and zone becomes a trust boundary. Kerberos authenticates principals; Ranger-style policy enforcement controls access; encryption zones protect stored data; segmentation limits lateral movement.",
          "TLS protects application transport, IPsec protects IP-layer traffic, VPNs create encrypted tunnels, SSH protects administration, and SASL supplies an authentication framework. No single protocol covers all layers."
        ]
      },
      {
        title: "7. Detection, response, and governance complete prevention",
        sourceRefs: ["00:50:03–00:58:59", "IDS and IPS; Big-data security best practices"],
        paragraphs: [
          "Host-based IDS observes activity on a machine; network-based IDS observes traffic across a segment. Signatures are efficient for known patterns, while behavioral methods can expose anomalies that do not match a known rule. IPS adds an active blocking response, increasing both benefit and false-positive risk.",
          "Patching, least privilege, monitoring, immutable audit evidence, masking, governance, incident response, and compliance form an operating discipline. Security is therefore a feedback loop: observe, investigate, contain, recover, and revise controls."
        ]
      }
    ],
    courseSignals: {
      assignments: [],
      homework: [],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [],
      announcements: [{ time: "00:58:15", detail: "The instructor previewed cryptography, hashing, digital signatures, and later practical/case-study sessions for future classes." }]
    },
    keyTerms: [
      { term: "Neighboring datasets", definition: "Datasets that differ by one individual's record, used to state differential privacy." },
      { term: "Epsilon (ε)", definition: "The privacy-loss parameter; smaller values usually mean stronger privacy and more noise." },
      { term: "Delta (δ)", definition: "The permitted probability that the pure differential-privacy bound fails." },
      { term: "Sensitivity (Δf)", definition: "The maximum change in a query caused by adding or removing one record." },
      { term: "Quasi-identifier", definition: "An attribute that can identify a person when linked with other information." },
      { term: "k-anonymity", definition: "Every released quasi-identifier pattern occurs in at least k records." },
      { term: "l-diversity", definition: "Every equivalence class contains multiple well-represented sensitive values." },
      { term: "t-closeness", definition: "Each class's sensitive-value distribution remains within a threshold of the overall distribution." },
      { term: "IDS/IPS", definition: "Systems that detect suspicious activity and, for IPS, may also block it." }
    ],
    insights: [
      { label: "Privacy", title: "Removing names is not a guarantee", body: "A release can contain no direct identifier and still be re-identifiable through age, location, sex, timestamps, or rare events. Measure linkage risk against realistic auxiliary data." },
      { label: "Formal guarantee", title: "Epsilon is a product decision, not a decorative parameter", body: "A privacy budget must be tied to repeated queries, acceptable utility loss, attack assumptions, and governance. Composition means many individually private releases can consume a meaningful cumulative budget." },
      { label: "Data design", title: "Anonymity and utility share the same columns", body: "Generalizing a quasi-identifier protects people but can erase the exact subgroup signal an analysis needs. Evaluate privacy and task utility together, not in separate reviews." },
      { label: "Architecture", title: "Network encryption does not authorize the endpoint", body: "TLS can protect a connection to a service that the caller should never access. Combine authenticated identities, least-privilege policy, segmentation, and audit evidence with transport protection." },
      { label: "Operations", title: "Behavioral detection needs an explainable baseline", body: "Anomaly detection is useful only when teams can explain the baseline, expected seasonal changes, false positives, and the response triggered by a score." }
    ],
    resources: [
      { title: "NIST SP 800-226: Guidelines for Evaluating Differential Privacy Guarantees", url: "https://csrc.nist.gov/pubs/sp/800/226/final", note: "Primary guidance for evaluating definitions, parameters, composition, implementation, and privacy claims." },
      { title: "NIST Privacy Engineering Program", url: "https://www.nist.gov/itl/applied-cybersecurity/privacy-engineering", note: "Connects formal privacy techniques to system-level risk management and engineering practice." },
      { title: "NIST IR 8053: De-Identification of Personal Information", url: "https://csrc.nist.gov/pubs/ir/8053/final", note: "A practical reference for de-identification terminology, risk, and release models." },
      { title: "NIST SP 800-188: De-Identifying Government Datasets", url: "https://csrc.nist.gov/pubs/sp/800/188/final", note: "Useful for operational de-identification processes and re-identification risk assessment." },
      { title: "OWASP Transport Layer Security Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html", note: "Implementation-minded follow-up for TLS choices, certificates, and protocol configuration." },
      { title: "OWASP Cryptographic Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html", note: "A secure-storage companion for key management, algorithm choices, and data minimization." }
    ],
    quiz: [
      quizItem("What does differential privacy primarily bound?", ["How much an output distribution changes when one person's record changes", "The number of servers", "The file-compression ratio", "The network round-trip time"], 0, "It compares randomized outputs on neighboring datasets that differ by one person's record.", {1:"Server count is an infrastructure property, not a privacy-loss bound.",2:"Compression does not measure disclosure.",3:"Latency is unrelated to the neighboring-dataset guarantee."}),
      quizItem("In (ε,δ)-differential privacy, what does a smaller ε usually mean?", ["Stronger privacy", "More direct identifiers", "A larger anonymity table", "No randomization"], 0, "Smaller epsilon makes neighboring output distributions more similar, generally requiring more noise.", {1:"Identifiers should be minimized regardless of epsilon.",2:"Table size does not define epsilon.",3:"Differential privacy relies on a randomized mechanism."}),
      quizItem("What does δ represent?", ["An allowed probability that the pure privacy bound fails", "The number of quasi-identifiers", "A TLS cipher suite", "An IDS signature"], 0, "Delta is the small failure probability in approximate differential privacy.", {1:"Quasi-identifier count is not delta.",2:"TLS configuration is a network concern.",3:"IDS signatures do not define privacy loss."}),
      quizItem("Which expression is the formal privacy comparison used in the lecture?", ["Pr[M(D)∈S] ≤ e^ε Pr[M(D′)∈S] + δ", "accuracy = TP / all rows", "k = number of servers", "risk = bandwidth × latency"], 0, "The inequality bounds the output probability on neighboring datasets.", {1:"This is not a differential-privacy definition.",2:"k-anonymity is not server count.",3:"Bandwidth and latency do not state privacy."}),
      quizItem("What determines Laplace noise scale for a numeric query?", ["Sensitivity divided by epsilon", "Only the dataset size", "The user's password length", "The number of VPN tunnels"], 0, "The Laplace mechanism uses scale Δf/ε.", {1:"Size alone does not capture one-record influence.",2:"Passwords are unrelated to query sensitivity.",3:"VPN count does not calibrate noise."}),
      quizItem("What is query sensitivity?", ["The maximum query change caused by one record", "The number of columns displayed", "The cipher-key length", "The IDS alert rate"], 0, "Sensitivity measures the worst-case contribution of adding or removing one record.", {1:"Column count does not measure contribution.",2:"Key length is cryptographic strength.",3:"Alert rate is an operational metric."}),
      quizItem("Why is shuffling alone insufficient for anonymity?", ["Unique attributes may still link a row to a person", "It decrypts every field", "It changes every diagnosis", "It disables authentication"], 0, "Permutation hides order but not distinctive quasi-identifiers.", {1:"Shuffling does not decrypt data.",2:"It moves rows rather than changing values.",3:"Authentication is independent of row order."}),
      quizItem("Which is a direct identifier?", ["A person's name", "A broad age band", "A generalized city region", "A released count"], 0, "A name directly points to an individual.", {1:"An age band is typically a quasi-identifier.",2:"A region may still be a quasi-identifier but is not direct.",3:"An aggregate count does not directly name a person."}),
      quizItem("Which is most likely a quasi-identifier?", ["Age combined with city and sex", "A random row number that is never retained", "A TLS certificate", "A firewall rule"], 0, "The combination can link an otherwise de-identified record to auxiliary data.", {1:"An unretained random position provides no stable linkage.",2:"A certificate authenticates an endpoint.",3:"A firewall rule controls traffic."}),
      quizItem("What does k-anonymity require?", ["Each quasi-identifier pattern appears in at least k records", "Every sensitive value is unique", "Every query uses epsilon k", "Every host runs k firewalls"], 0, "Each released equivalence class must contain at least k indistinguishable records on quasi-identifiers.", {1:"Uniqueness would increase disclosure.",2:"Epsilon belongs to differential privacy.",3:"Firewall count does not define anonymity."}),
      quizItem("Which operation broadens exact ages into ranges?", ["Generalization", "Encryption", "Authentication", "Packet inspection"], 0, "Generalization replaces a precise value with a broader category.", {1:"Encryption hides content but does not create age bands.",2:"Authentication establishes identity.",3:"Packet inspection analyzes traffic."}),
      quizItem("What is suppression in anonymization?", ["Removing a risky value, cell, or record from the release", "Adding a new identifier", "Opening a VPN tunnel", "Issuing a Kerberos ticket"], 0, "Suppression withholds high-risk information to reduce linkage.", {1:"Identifiers increase risk.",2:"VPNs protect network traffic.",3:"Kerberos tickets authenticate principals."}),
      quizItem("Why can k-anonymity still reveal a diagnosis?", ["All members of an equivalence class may share the same sensitive value", "It always publishes names", "It disables encryption", "It removes every quasi-identifier"], 0, "Homogeneity can expose the sensitive attribute even when the person is hidden among k records.", {1:"Names should be removed before k-anonymous release.",2:"Encryption is a separate control.",3:"Quasi-identifiers are generalized, not necessarily removed."}),
      quizItem("What does l-diversity add?", ["Multiple well-represented sensitive values per equivalence class", "A stronger TLS key", "More network segments", "A fixed epsilon"], 0, "It counters homogeneous sensitive-attribute disclosure within a k-anonymous group.", {1:"TLS strength is unrelated.",2:"Segmentation is a network control.",3:"Epsilon is a differential-privacy parameter."}),
      quizItem("What does t-closeness compare?", ["A class's sensitive-value distribution with the overall distribution", "Two server clocks", "Two encryption keys", "Two IDS signatures"], 0, "It limits the distributional distance between each equivalence class and the full release.", {1:"Clock synchronization is not t-closeness.",2:"Keys are not distributions.",3:"Signatures do not define attribute disclosure."}),
      quizItem("Which protocol primarily protects application transport?", ["TLS", "k-anonymity", "RBAC", "Suppression"], 0, "TLS encrypts and authenticates transport between network applications.", {1:"k-anonymity is a release model.",2:"RBAC is authorization.",3:"Suppression is a de-identification operation."}),
      quizItem("At what layer does IPsec protect traffic?", ["The IP/network layer", "Only the database schema", "Only the browser UI", "The anonymization table"], 0, "IPsec secures IP packets and can support site-to-site or host-level protection.", {1:"Schemas are data-model artifacts.",2:"UI rendering is unrelated.",3:"Anonymization is not a network layer."}),
      quizItem("What is the main purpose of a VPN?", ["Create an encrypted tunnel across an untrusted network", "Guarantee l-diversity", "Compute sensitivity", "Replace all access control"], 0, "A VPN protects traffic between endpoints or networks through a secure tunnel.", {1:"l-diversity is a data-release property.",2:"Sensitivity calibrates privacy noise.",3:"A tunnel does not authorize users to resources."}),
      quizItem("What does Kerberos provide?", ["Ticket-based authentication for network principals", "Differential-privacy noise", "Quasi-identifier generalization", "Behavioral anomaly scoring"], 0, "Kerberos uses a trusted KDC and tickets to authenticate clients and services.", {1:"Noise mechanisms belong to differential privacy.",2:"Generalization belongs to anonymization.",3:"Anomaly scoring belongs to IDS analytics."}),
      quizItem("How does a host-based IDS differ from a network-based IDS?", ["It observes activity on an individual host", "It always blocks every packet", "It guarantees privacy", "It replaces patching"], 0, "A host-based sensor sees local processes, files, logs, and events rather than an entire network segment.", {1:"Detection does not necessarily block; that is an IPS action.",2:"IDS does not provide a formal privacy guarantee.",3:"Monitoring cannot replace updates."}),
      quizItem("What is a limitation of signature-based IDS?", ["It can miss novel attacks that lack a known pattern", "It cannot detect any known attack", "It removes encryption", "It publishes raw data"], 0, "Signatures are effective for known indicators but weaker against new or obfuscated behavior.", {1:"Known-pattern detection is its strength.",2:"Detection does not remove encryption.",3:"Publishing data is not inherent to IDS."}),
      quizItem("Why use behavioral detection?", ["To find deviations from an established baseline", "To guarantee zero false positives", "To replace authentication", "To increase epsilon"], 0, "Behavioral analysis flags activity inconsistent with expected patterns.", {1:"No anomaly detector guarantees zero false positives.",2:"Detection complements authentication.",3:"Epsilon is a privacy parameter."}),
      quizItem("Which control best limits lateral movement?", ["Network segmentation and zones", "Publishing more identifiers", "Using one shared admin account", "Disabling logs"], 0, "Segmentation confines traffic and privileges to intended zones.", {1:"Identifiers increase privacy risk.",2:"Shared administration weakens accountability.",3:"Logs support detection and investigation."}),
      quizItem("Why does transport encryption not replace authorization?", ["A secure connection can still reach a resource the caller should not use", "TLS reveals every password", "Authorization only applies offline", "Encryption automatically grants roles"], 0, "Confidential transport proves little about whether the authenticated principal has permission for the requested action.", {1:"Proper TLS protects credentials in transit.",2:"Authorization applies to online services.",3:"Encryption and role assignment solve different problems."}),
      quizItem("Which sequence best represents a mature security operation?", ["Prevent, monitor, investigate, contain, recover, and improve", "Encrypt once and stop reviewing", "Suppress logs and trust every endpoint", "Only add more storage"], 0, "Layered security combines preventive controls with detection, incident response, recovery, and control revision.", {1:"Threats and systems change over time.",2:"Removing evidence prevents investigation.",3:"Capacity alone does not manage security risk."})
    ]
  }
};
