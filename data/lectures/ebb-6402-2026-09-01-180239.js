const quizSeed = [
  ["Which applications were introduced as blockchain use cases?", ["Supply-chain tracking, financial settlement, and digital identity", "Only video streaming", "Only password storage", "Only image editing"], 0],
  ["Which is a stated limitation of real-world blockchain applications?", ["Scalability, latency, energy use, and regulatory uncertainty", "Unlimited throughput", "No governance needs", "Automatic legal compliance"], 0],
  ["What is the first stage of money laundering?", ["Placement", "Layering", "Integration", "Auditing"], 0],
  ["What happens during placement?", ["Illicit funds enter the financial system through deposits, exchanges, or asset purchases", "Funds are permanently destroyed", "A model is trained", "A ledger is deleted"], 0],
  ["What is the purpose of layering?", ["Obscure the origin of proceeds through multiple transactions", "Publish the origin clearly", "Reduce every transaction to one step", "Replace all banks"], 0],
  ["What is integration?", ["Re-entering laundered funds into the legitimate economy as apparently lawful wealth", "Encrypting every payment", "Deleting transaction history", "Creating a consensus vote"], 0],
  ["Which is a predicate offense source of illicit funds?", ["Human trafficking, corruption, tax evasion, or cybercrime", "Course attendance", "Data visualization", "Network latency"], 0],
  ["How does terrorism financing often differ from money laundering?", ["It may use smaller amounts and legitimate-looking sources such as donations", "It always uses one very large deposit", "It never crosses borders", "It requires mining"], 0],
  ["Which channel was listed as a terrorism-financing method?", ["Abuse of non-profit organisations, informal value transfer, and online crowdfunding", "Only public block rewards", "Only stock exchanges", "Only university grants"], 0],
  ["What can informal value-transfer systems do?", ["Move value through brokers or networks outside ordinary bank rails", "Guarantee legal ownership", "Prevent all fraud", "Replace identity checks automatically"], 0],
  ["Why are cross-border crimes difficult for one country to combat alone?", ["Funds cross banking, trade, digital, and informal networks", "Every transaction stays local", "No evidence exists", "Consensus stops all movement"], 0],
  ["What does AML stand for?", ["Anti-Money Laundering", "Automated Model Learning", "Application Memory Layer", "Approved Mining Ledger"], 0],
  ["What does CFT refer to in the lecture?", ["Countering the Financing of Terrorism", "Central File Transfer", "Consensus Fault Tolerance only", "Certificate Format Table"], 0],
  ["What is the Financial Action Task Force (FATF)?", ["An intergovernmental global standard setter for AML/CFT", "A blockchain wallet", "A private bank account", "A machine-learning classifier"], 0],
  ["What do international AML/CFT bodies collectively do?", ["Design, implement, monitor, and enforce policies", "Erase national law", "Guarantee every prediction", "Store all documents publicly"], 0],
  ["Why can a blockchain help an AML workflow?", ["It can provide auditable, tamper-evident references for controlled evidence", "It makes illicit inputs lawful", "It removes the need for investigators", "It guarantees an input is true"], 0],
  ["What is the recommended handling of sensitive financial documents?", ["Keep full payloads in controlled storage and use suitable references or hashes", "Publish every document on-chain", "Delete evidence immediately", "Share private keys"], 0],
  ["Which sequence matches the lecture's data workflow?", ["Collection, cleaning, modelling, and processing", "Mining, burning, and guessing", "Signing, printing, and mailing", "Routing, switching, and modulation"], 0],
  ["Which model family was mentioned for financial prediction?", ["Random forest and gradient boosting among other classifiers", "Only a word processor", "Only a DNS server", "Only a video codec"], 0],
  ["What is a key risk of using ML for financial crime detection?", ["A model can support analysis but cannot replace policy, evidence, or human accountability", "A model makes regulation unnecessary", "A model proves intent automatically", "A model removes false positives"], 0],
  ["What are the three laundering stages in order?", ["Placement, layering, integration", "Integration, placement, layering", "Layering, auditing, placement", "Mining, staking, burning"], 0],
  ["Which example illustrates placement?", ["Depositing illicit proceeds or exchanging currency to enter financial channels", "Splitting transfers between accounts", "Purchasing luxury assets after concealment", "Training a classifier"], 0],
  ["Which example illustrates layering?", ["Wire transfers, split-and-merge movements, or shell-company transactions", "A single transparent deposit", "A final legal purchase", "A model evaluation"], 0],
  ["Which example illustrates integration?", ["Buying luxury assets, financial investments, or commercial property with apparently legitimate funds", "Opening a waiting room", "Cleaning a dataset", "Choosing a consensus algorithm"], 0],
  ["What is the central policy lesson?", ["Blockchain adoption needs governance, compliance, privacy, evidence, and cross-border coordination", "Technology alone solves social risk", "Immutable records make all claims true", "Energy use never matters"], 0]
];

const quiz = quizSeed.map(([question, options, answer]) => {
  const explanation = `The lecture's policy and AML/CFT discussion supports ${options[answer].toLowerCase()}.`;
  return { question, options, answer, explanation, optionNotes: options.map((option, index) => index === answer ? `Correct: ${option}. ${explanation}` : `Incorrect: ${option} does not match the lecture evidence or policy framing.`) };
});

export const ebb6402Lecture20260901 = {
  en: {
    title: "Blockchain applications, money laundering stages, and international AML/CFT policy",
    lede: "This lecture surveys practical blockchain applications and limitations, then uses money-laundering and terrorism-financing workflows to connect policy, financial intelligence, international coordination, and data-driven detection.",
    instructionalInterval: "00:04:17–01:32:02 source time (01:32:02 reported duration; waiting setup excluded)",
    reviewLevel: "Full seven-point visible Stream sweep, 2× visible-tab capture, source-time-restored transcript, 87 sampled frames, and no idle tail at the endpoint.",
    coverage: [
      { title: "Applications and limitations", body: "Supply chains, settlement, identity, health records, voting, vehicles, real estate, and EV charging illustrate use cases; scalability, latency, energy, regulation, and legal integration remain constraints." },
      { title: "Money laundering", body: "Placement introduces illicit funds, layering obscures their origin, and integration makes proceeds appear part of the legitimate economy." },
      { title: "Terrorism financing", body: "Small amounts, donations, charities, informal transfer systems, non-profit abuse, and online crowdfunding create varied funding paths." },
      { title: "International architecture", body: "Transnational crime crosses banks, trade, digital platforms, and informal networks, requiring global standards and national implementation." },
      { title: "FATF and compliance", body: "The Financial Action Task Force is presented as an intergovernmental AML/CFT standard setter whose recommendations are implemented and monitored across jurisdictions." },
      { title: "Financial data and modelling", body: "Collection, cleaning, modelling, and processing support detection experiments with classifiers, while evidence and governance remain essential." }
    ],
    takeaway: "Blockchain can improve evidence and coordination, but AML/CFT outcomes depend on policy, responsible data handling, cross-border cooperation, and careful interpretation of models.",
    slideTrail: [
      { time: "00:04:17", title: "Blockchain applications and limitations", note: "Applications are listed and scalability, latency, energy, regulation, and legal integration are introduced." },
      { time: "00:23:05", title: "Stages of money laundering", note: "Placement and layering are written with banking, currency exchange, wire-transfer, and shell-company examples." },
      { time: "00:30:00", title: "Integration and laundering cycle", note: "Luxury assets, financial investment, and commercial property illustrate proceeds returning to the legitimate economy." },
      { time: "00:45:52", title: "Terrorism-financing methods", note: "Non-profit abuse, informal value transfer, crowdfunding, and social-media channels are contrasted with laundering." },
      { time: "01:08:39", title: "Hawala and international AML/CFT architecture", note: "Informal brokers and the global network of standards, regional institutions, and national authorities are mapped." },
      { time: "01:22:18", title: "Financial-data workflow", note: "Collection, cleaning, modelling, and classifier examples show how financial data may support detection." },
      { time: "01:31:42", title: "Money-laundering recap", note: "Source-of-income, placement, layering, and integration remain on the final teaching frame." }
    ],
    summary: [
      { title: "1. Blockchain applications need a realistic policy lens", sourceRefs: ["00:04:17–00:15:00", "Applications and limitations whiteboard"], paragraphs: ["The lecture lists supply-chain tracking, financial settlement, digital identity, health records, voting, connected vehicles, real estate, and EV charging as possible applications.", "It immediately pairs them with scalability, latency, energy use, regulatory uncertainty, and legal integration. A deployment decision therefore needs technical and institutional evidence."], formula: "adoption = utility \\times governance \\times feasibility" },
      { title: "2. Placement starts the laundering cycle", sourceRefs: ["00:20:00–00:29:00", "Stages of money laundering"], paragraphs: ["Placement introduces illicit proceeds into financial channels through deposits, currency exchange, or asset purchases. The control question is how an institution detects unusual entry patterns without assuming every customer is malicious.", "Source-of-income evidence, KYC, transaction monitoring, and escalation policies provide context around a transaction rather than relying on a ledger alone."], formula: "dirty\\ money \\rightarrow financial\\ system" },
      { title: "3. Layering obscures origin", sourceRefs: ["00:29:00–00:38:00", "Money-laundering cycle diagram"], paragraphs: ["Layering uses multiple transfers, shell companies, wire movements, or cross-border paths to make the original source harder to trace.", "A defensible investigation follows relationships, timing, counterparties, and economic purpose. Blockchain traceability can help, but only if identities, off-chain records, and legal authority are reliable."], formula: "traceability = graph(evidence, actors, time)" },
      { title: "4. Integration makes proceeds appear legitimate", sourceRefs: ["00:38:00–00:42:00", "Integration examples"], paragraphs: ["Integration returns laundered funds to the legitimate economy through luxury assets, investments, property, or commercial activity.", "The apparent legality of the final purchase does not erase the earlier risk. Controls must connect source-of-funds analysis, beneficial ownership, and transaction history."], formula: "legitimate\\ appearance \\neq legitimate\\ origin" },
      { title: "5. Terrorism financing has diverse, sometimes small, streams", sourceRefs: ["00:43:00–01:03:00", "Terrorism-financing methods"], paragraphs: ["The lecture contrasts laundering with terrorism financing, which may use smaller contributions and legitimate-looking sources such as donations, charities, salaries, informal value transfer, and crowdfunding.", "Detection therefore needs proportional risk signals and should avoid equating a sector, community, or lawful donation with criminality. Investigation requires evidence and due process."], formula: "risk = pattern \\times context \\times evidence" },
      { title: "6. AML/CFT is an international network", sourceRefs: ["01:04:00–01:16:00", "International AML/CFT architecture"], paragraphs: ["Money laundering is transnational: banking systems, trade transactions, digital platforms, and informal networks cross borders. The response combines global standards, regional institutions, and national authorities.", "FATF is introduced as the intergovernmental standard setter that promotes implementation and compliance across jurisdictions. Standards still need local law, supervision, and accountable enforcement."], formula: "global\\ standard \\rightarrow national\\ implementation" },
      { title: "7. Data modelling supports analysis but does not replace governance", sourceRefs: ["01:22:18–01:32:02", "Financial-data workflow"], paragraphs: ["The closing diagram shows data collection, cleaning, modelling, and processing, with classifiers such as random forest and gradient boosting used for prediction examples.", "Models can prioritise investigations, but labels, missing data, bias, false positives, privacy, and explainability remain policy questions. A model's score is evidence to examine, not a verdict."], formula: "decision = model(signal) + human\\ review + policy" }
    ],
    keyTerms: [
      { term: "Placement", definition: "Introducing illicit funds into financial channels." },
      { term: "Layering", definition: "Using transactions and intermediaries to obscure the origin of proceeds." },
      { term: "Integration", definition: "Returning laundered proceeds to the legitimate economy as apparently lawful assets or income." },
      { term: "AML/CFT", definition: "Anti-money-laundering and countering-the-financing-of-terrorism controls and policy." },
      { term: "FATF", definition: "Intergovernmental body that sets global AML/CFT recommendations and promotes implementation." },
      { term: "Hawala", definition: "An informal value-transfer network using brokers and trust relationships." }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [] },
    suggestedPractice: { assignments: ["Optional: map a hypothetical transaction through placement, layering, and integration, marking the evidence a compliant investigator would request."], homework: ["Optional: compare a rules-based AML alert with a classifier score and list privacy, bias, and explainability risks."], labs: ["Optional: build a small synthetic transaction graph and test how adding beneficial-owner and time features changes investigation priority."], projects: ["Optional: design an auditable AML/CFT dashboard that keeps sensitive payloads controlled and records model evidence, human review, and appeal paths."], references: ["Revisit FATF recommendations and local AML/CFT law before implementing any detection workflow."], studentQuestions: [] },
    insights: [
      { label: "Policy", title: "A ledger cannot decide legality", body: "A tamper-evident record helps preserve evidence, but legality and risk depend on context, identity, due process, and accountable institutions." },
      { label: "Detection", title: "The stages form a graph, not three isolated boxes", body: "Placement, layering, and integration connect actors, accounts, assets, time, and jurisdictions; graph evidence is more useful than a single transaction flag." },
      { label: "Privacy", title: "Evidence must be minimised", body: "AML/CFT systems need enough evidence to investigate while controlling sensitive financial records and avoiding unnecessary exposure." },
      { label: "ML", title: "A score is not a verdict", body: "Models can prioritise review, but false positives, bias, missing labels, and human accountability remain central to a defensible decision." },
      { label: "Governance", title: "International standards need local enforcement", body: "FATF recommendations coordinate expectations, yet national authorities still define law, supervision, safeguards, and remedies." }
    ],
    resources: [
      { kind: "read", title: "FATF Recommendations", url: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html", detail: "Authoritative global AML/CFT standards and interpretive guidance." },
      { kind: "read", title: "FATF — Money laundering and terrorist financing risks", url: "https://www.fatf-gafi.org/en/topics/money-laundering-and-terrorist-financing.html", detail: "Risk-based materials on laundering and terrorism-financing typologies." },
      { kind: "read", title: "UNODC money-laundering resources", url: "https://www.unodc.org/unodc/en/money-laundering/overview.html", detail: "Open international policy and law-enforcement context." },
      { kind: "read", title: "Wolfsberg Group principles", url: "https://wolfsberg-principles.com/", detail: "Industry guidance on financial-crime controls and responsible banking practice." },
      { kind: "practice", title: "NetworkX documentation", url: "https://networkx.org/documentation/stable/", detail: "Use an open graph library to model transaction relationships in synthetic data without real customer records." },
      { kind: "read", title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework", detail: "A practical framework for evaluating validity, transparency, privacy, and accountability in detection models." }
    ],
    quiz
  }
};
