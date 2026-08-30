// Optional learner practice generated from the lecture topic. These items are
// deliberately separate from transcript-derived courseSignals: they are not
// IIT Patna assignments and must never be presented as instructor obligations.
const courseTemplates = {
  "eai-6401": {
    assignments: [{ title: "Formulation audit", detail: "Write a one-page agent–environment formulation for the lecture topic: state, observations, actions, reward, termination, and what information is hidden." }],
    homework: [{ title: "Value-and-policy practice", detail: "Work three short scenarios by identifying the policy, immediate reward, return, and value estimate; explain one exploration-versus-exploitation trade-off." }],
    labs: [{ title: "Reproducible RL experiment", detail: "Implement a small Gymnasium-style environment and compare two policies across fixed random seeds. Plot return and at least one safety or regret diagnostic." }],
    projects: [{ title: "Extend the lecture into a study tool", detail: "Turn one concept from this lecture into an interactive simulator or visual explainer, with an experiment log and a short limitations note." }],
  },
  "eai-6402": {
    assignments: [{ title: "Task-distribution map", detail: "Map a low-data problem into training tasks, a target task, available labels, adaptation steps, and the failure cost of a wrong prediction." }],
    homework: [{ title: "Adaptation and evaluation brief", detail: "Compare zero-shot, few-shot, and fine-tuned approaches for one example. State what prior information each approach uses and choose metrics for the target decision." }],
    labs: [{ title: "Low-data baseline lab", detail: "Create a small, documented dataset split; train a simple baseline; then test a lightweight adaptation or augmentation method with confidence intervals and subgroup checks." }],
    projects: [{ title: "Evidence-first meta-learning prototype", detail: "Build a reviewable prototype that records task provenance, labels, adaptation configuration, error cases, and a human approval step before deployment." }],
  },
  "eai-6403": {
    assignments: [{ title: "Context and generation analysis", detail: "Annotate five examples for token context, ambiguity, or decoding choice. Explain which context should matter and how an incorrect link would change the output." }],
    homework: [{ title: "Transformer reading response", detail: "Read the primary Transformer paper and answer five questions about attention, representations, and the causal or bidirectional setting used by the model." }],
    labs: [{ title: "Attention or generation notebook", detail: "Run a small permitted Transformer model on contrastive prompts. Record the model version, inputs, outputs, latency, and one failure analysis rather than relying on a single fluent example." }],
    projects: [{ title: "Build a transparent NLP workbench", detail: "Create a small tool that compares contextual interpretations or decoding settings and exports reproducible evidence, evaluation cases, and limitations." }],
  },
  "ecs-6401": {
    assignments: [{ title: "Series decomposition brief", detail: "Choose a public time series and label its trend, seasonality, cycles, shocks, missing intervals, and likely leakage risks before selecting a model." }],
    homework: [{ title: "Forecasting baseline comparison", detail: "Compute a seasonal-naive baseline and one classical model using a chronological split. Report errors, residual behaviour, and why a more complex model is or is not justified." }],
    labs: [{ title: "Time-series diagnostics lab", detail: "Build a notebook with cadence validation, line and rolling plots, ACF/PACF or decomposition, and a documented treatment for missing or anomalous timestamps." }],
    projects: [{ title: "Auditable forecasting studio", detail: "Build a small dashboard that preserves raw data, parameters, temporal splits, baseline results, and a plain-language explanation of uncertainty." }],
  },
  "ecc-6404": {
    assignments: [{ title: "Mining pipeline design", detail: "Translate the lecture into a KDD or warehousing pipeline diagram, naming the data source, cleaning assumptions, representation, mining task, validation, and decision consumer." }],
    homework: [{ title: "Measurement and pattern exercise", detail: "Classify five attributes by measurement scale, choose a defensible similarity or aggregation, and explain one operation that would change the question being answered." }],
    labs: [{ title: "Data-quality and mining lab", detail: "Profile a permitted public dataset, document provenance and missingness, run one pattern or outlier method, and compare results under two justified preprocessing choices." }],
    projects: [{ title: "Evidence-aware data workbench", detail: "Build a small tool that links schema meaning, provenance, data-quality checks, mining output, and a human-readable decision report." }],
  },
  "ebb-6402": {
    assignments: [{ title: "Policy-to-protocol map", detail: "Map one blockchain use case to actors, legal duties, data sensitivity, consensus assumptions, governance authority, and an incident or upgrade path." }],
    homework: [{ title: "Governance trade-off memo", detail: "Compare a public, consortium, and private design for one scenario. Discuss privacy, accountability, interoperability, incentives, cost, and failure recovery." }],
    labs: [{ title: "Ledger governance simulation", detail: "Simulate proposals, roles, quorum, thresholds, audit events, and an emergency change. Include a test that exposes a single-admin or oracle trust risk." }],
    projects: [{ title: "PolicyLedger prototype", detail: "Create a versioned governance charter plus a testable policy schema and evidence export; clearly separate what the ledger can prove from what an external input claims." }],
  },
  "ebb-6403": {
    assignments: [{ title: "Threat-model worksheet", detail: "Draw the data path from collection to sharing and list assets, actors, trust boundaries, likely threats, controls, and evidence for the lecture's security topic." }],
    homework: [{ title: "Control-selection review", detail: "For three security or privacy failures, choose preventive, detective, and recovery controls. Explain least privilege, identity lifecycle, and the residual risk of each choice." }],
    labs: [{ title: "Security evidence lab", detail: "Use a synthetic dataset or toy service to demonstrate access logging, authentication/authorization checks, anonymization or masking, and one adversarial or misuse test." }],
    projects: [{ title: "Big-data security review kit", detail: "Build a small review kit that inventories data flows, controls, test evidence, retention, and incident response without copying real participant or personal data." }],
  },
};

const fallback = {
  assignments: [{ title: "Concept application brief", detail: "Write a one-page explanation applying the lecture's main concept to a small, clearly scoped example." }],
  homework: [{ title: "Retrieval practice set", detail: "Create and answer five questions from the lecture, including one misconception and one limitation." }],
  labs: [{ title: "Reproducible practice lab", detail: "Implement or simulate one lecture idea with a fixed seed, a short result table, and a limitations note." }],
  projects: [{ title: "Applied extension", detail: "Build a small, reviewable prototype that connects the lecture concept to a real decision while documenting assumptions and evidence." }],
};

export function suggestedPracticeForLecture(lecture, course) {
  const template = courseTemplates[course?.slug] || fallback;
  const focus = lecture?.title ? ` Focus it on “${lecture.title}”.` : "";
  return Object.fromEntries(Object.entries(template).map(([key, items]) => [key,
    items.map((item) => ({ ...item, detail: `${item.detail}${focus}` }))
  ]));
}
