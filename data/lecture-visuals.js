// Reusable, dependency-free visual study aids for the published lecture notes.
// The renderer combines these subject patterns with each lecture's coverage
// titles, so every note gets a contextual visual without duplicating SVG or
// Mermaid markup across twenty note modules.

const templates = {
  rl: {
    title: "The reinforcement-learning feedback loop",
    description: "A learner improves by acting, observing the outcome, and feeding the experience back into its next decision.",
    steps: ["State", "Action", "Reward", "Updated value"],
    detail: "The lecture's concepts fit into this repeated decision-and-feedback cycle."
  },
  meta: {
    title: "The meta-learning adaptation loop",
    description: "A model learns a reusable way to adapt across related tasks, then tests that adaptation on a new task.",
    steps: ["Task distribution", "Fast adaptation", "New task", "Evaluate and improve"],
    detail: "The lecture's ideas connect through repeated task-level adaptation."
  },
  genai: {
    title: "From context to generated output",
    description: "Generative systems transform input context into representations, then decode those representations into a useful output.",
    steps: ["Input context", "Representation", "Attention / model", "Generated output"],
    detail: "Each stage narrows uncertainty while preserving the context needed by the next stage."
  },
  wireless: {
    title: "A wireless system design path",
    description: "A wireless design moves from requirements to channel-aware decisions, implementation, and measured performance.",
    steps: ["Requirements", "Channel model", "Protocol / algorithm", "Measured performance"],
    detail: "The stages make the trade-offs discussed in the lecture explicit."
  },
  smartcontract: {
    title: "From agreement to verified execution",
    description: "A smart contract works only when human intent is translated into testable conditions, authorised cryptographically, and executed by the blockchain runtime.",
    steps: ["Reach agreement", "Formalise rules", "Sign and verify", "Execute and record"],
    detail: "The flow separates intent, code, authorization, and runtime enforcement so each responsibility can be tested."
  },
  timeseries: {
    title: "From observations to a forecast",
    description: "Time-series analysis separates signal from noise before validating a forecast against future observations.",
    steps: ["Observed series", "Components / stationarity", "Model fit", "Forecast and evaluate"],
    detail: "The workflow keeps diagnosis and validation connected rather than treating a forecast as a black box."
  },
  warehouse: {
    title: "The data-warehouse information flow",
    description: "Operational sources are cleaned and modelled before becoming trusted analytical data for decision-making.",
    steps: ["Source systems", "Extract and transform", "Warehouse model", "Analytics / decisions"],
    detail: "The flow highlights where quality, grain, and lineage decisions affect downstream analysis."
  },
  blockchain: {
    title: "From policy to blockchain impact",
    description: "A blockchain policy question links governance choices to technical behaviour, stakeholders, and measurable outcomes.",
    steps: ["Policy question", "Governance rule", "Technical impact", "Social / economic outcome"],
    detail: "The stages encourage a socio-technical reading of the topic rather than a protocol-only view."
  },
  security: {
    title: "The big-data security control loop",
    description: "Security work starts with data and threats, applies controls, and feeds observed risk back into the next control decision.",
    steps: ["Data and assets", "Threat / risk", "Controls", "Monitor and respond"],
    detail: "The loop connects privacy, security, and operational response."
  },
  generic: {
    title: "A concept-to-practice learning path",
    description: "The lecture moves from a motivating problem through core concepts to an applied evaluation step.",
    steps: ["Problem", "Core concept", "Method", "Evaluate / apply"],
    detail: "Use this map to revisit the lecture in the same order as its argument."
  }
};

const visualTemplates = {
  "eai-6401-2026-08-17": "rl", "eai-6401-2026-08-18": "rl", "eai-6401-2026-08-24": "rl", "eai-6401-2026-08-25": "rl", "eai-6401-2026-08-31": "rl", "eai-6401-2026-09-01": "rl",
  "eai-6402-2026-08-22": "meta", "eai-6402-2026-08-29": "meta",
  "eai-6403-2026-08-23": "genai", "eai-6403-2026-08-29": "genai", "eai-6403-2026-08-30": "genai",
  "ecs-6401-2026-08-19-175559": "timeseries", "ecs-6401-2026-08-21-180935": "timeseries", "ecs-6401-2026-08-26-180538": "timeseries", "ecs-6401-2026-08-28-180221": "timeseries", "ecs-6401-2026-09-02-180510": "timeseries",
  "ecs-6402-2026-08-21-204351": "wireless", "ecs-6402-2026-08-27-203455": "wireless", "ecs-6402-2026-08-28-203443": "wireless",
  "ebb-6401-2026-08-17-180921": "smartcontract", "ebb-6401-2026-08-17-184812": "smartcontract", "ebb-6401-2026-08-19-180224": "smartcontract", "ebb-6401-2026-08-24-180004": "smartcontract", "ebb-6401-2026-09-02-180427": "smartcontract",
  "ecc-6404-2026-08-17-193438": "warehouse", "ecc-6404-2026-08-19-193245": "warehouse", "ecc-6404-2026-08-24-193338": "warehouse", "ecc-6404-2026-08-26-193241": "warehouse", "ecc-6404-2026-08-31-193236": "warehouse",
  "ebb-6402-2026-08-18-180205": "blockchain", "ebb-6402-2026-08-20-180203": "blockchain", "ebb-6402-2026-08-25-180424": "blockchain",
  "ebb-6403-2026-08-21-075934": "security", "ebb-6403-2026-08-28-074445": "security", "ebb-6403-2026-08-29-053554": "security"
};

export const lectureVisuals = Object.fromEntries(Object.entries(visualTemplates).map(([id, template]) => [id, { template }]));

export function visualForLecture(id, note) {
  const template = templates[lectureVisuals[id]?.template] || templates.generic;
  const coverage = note?.coverage || [];
  const steps = template.steps.map((fallback, index) => ({
    title: coverage[index]?.title || fallback,
    detail: coverage[index]?.body || template.detail
  }));
  return {
    title: template.title,
    description: template.description,
    steps,
    caption: "Study aid generated from this lecture's coverage and source trail; follow the linked timecodes above for the original visual explanation."
  };
}
