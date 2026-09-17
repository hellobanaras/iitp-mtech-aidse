// Public English-only mini-capstone ideas.
export const capstones = Object.freeze({
  "eai-6103-2026-08-22-092455": {
    "en": {
      "title": "NotebookStarter: a reproducible Python data-practice lab",
      "pitch": "Build a local-first notebook workspace that takes a small tabular dataset from loading and inspection through plots and a baseline model, while recording the environment and assumptions.",
      "problem": "Beginners often learn Python syntax without learning how data, visual diagnostics, libraries, and model evidence fit together. A short reproducible workflow makes the bridge visible.",
      "learning": "You will practise Python modules, NumPy arrays, pandas tables, Matplotlib/Seaborn plots, a scikit-learn baseline, notebook structure, and an honest limits section.",
      "mvp": [
        "Choose a small public CSV and write a notebook that records its source, columns, target, missing values, and split rule.",
        "Implement one NumPy calculation and one pandas transformation with assertions for their expected shapes and types.",
        "Create two labelled plots and one scikit-learn baseline with a held-out metric and at least three inspected errors.",
        "Export a run card containing Python/package versions, dataset hash, parameters, plots, metric, and limitations."
      ],
      "stretch": [
        "Add a Colab-compatible setup cell and compare local versus hosted runtime assumptions.",
        "Compare a classical model with a neural-network baseline only after establishing the simple baseline.",
        "Add a small NLP extension using NLTK and document why its preprocessing choices may change the result."
      ],
      "plan": [
        "Week 1: select the dataset, define the question, and build deterministic loading/validation cells.",
        "Week 2: add array/table transformations, visual checks, and a data-quality note.",
        "Week 3: fit and evaluate a baseline, inspect errors, and record the environment.",
        "Week 4: package the notebook, rerun it from a clean environment, and write the limits and next-step roadmap."
      ]
    }
  },
  "eai-6103-2026-08-25-183026": {
    "en": {
      "title": "LabelFlow: an auditable target-and-test workbench",
      "pitch": "Build an accessible local-first study tool that turns a task and a tabular dataset into explicit feature/target definitions, a supervised or unsupervised classification, a repeatable training loop, and a leakage-safe evaluation report.",
      "problem": "Learners often choose an algorithm before deciding what the target means or how testing will remain independent. An inspectable workbench makes problem framing, feedback, and held-out evaluation visible.",
      "learning": "You will connect task formulation, features, labels, ground truth, classification, regression, clustering, iterative training, train/test splitting, and evaluation without updating on test data.",
      "mvp": [
        "Let a learner load a small permitted public CSV or use a synthetic dataset and define the prediction task, target column, feature columns, and data dictionary.",
        "Classify the task as supervised or unsupervised and, when labelled, as classification or regression with a visible explanation.",
        "Implement a baseline training loop and a held-out test flow that keeps targets separate, records predictions, and reports a confusion matrix or numerical error.",
        "Export an accessible experiment card containing dataset provenance, split rule, model choice, metrics, representative errors, and limitations."
      ],
      "stretch": [
        "Compare two suitable candidate algorithms and explain why performance alone is not the complete selection criterion.",
        "Add a leakage audit that flags target-derived features, duplicate rows across splits, and accidental test-set updates.",
        "Add an unsupervised clustering view with a clearly labelled absence of ground truth and a separate interpretation workflow.",
        "Replay the training loop step by step with synthetic predictions, errors, parameter updates, and source-linked explanations."
      ],
      "plan": [
        "Week 1: define task, target, feature, label, and dataset schemas with deterministic fixtures.",
        "Week 2: implement supervised classification/regression baselines and the train/test split report.",
        "Week 3: add the unsupervised path, leakage checks, metrics, and error inspection.",
        "Week 4: complete accessibility review, rerun from a clean environment, and package the limitations report."
      ],
      "novelty": "The workbench treats target selection and evaluation boundaries as first-class learning objects instead of hiding them behind an algorithm button.",
      "stack": ["TypeScript", "Accessible HTML", "SVG", "Vitest"],
      "milestones": ["Task and schema", "Supervised baseline", "Held-out evaluation", "Unsupervised and leakage audit"],
      "success": "A learner can defend the target and algorithm category for a task, trace one supervised update, and show that held-out targets were used for evaluation rather than training."
    }
  },
  "eai-6103-2026-08-18-193045": {
    "en": {
      "title": "MailLens: an explainable email-validation lab",
      "pitch": "Build a small local-first workbench that compares hand-written email rules with a labelled-data classifier and makes every feature, label, prediction, and error inspectable.",
      "problem": "A rule list can be explicit but brittle, while a learned model can generalise from examples but hide its assumptions. Learners need to see the difference on the same email-like inputs.",
      "learning": "You will connect problem formulation, tabular features, binary labels, training data, held-out evaluation, false positives, and the boundary between a model and an operational decision.",
      "mvp": [
        "Create a synthetic dataset of valid and invalid email-like strings with documented feature definitions and binary labels.",
        "Implement a transparent rule baseline and one permitted scikit-learn classifier behind the same prediction interface.",
        "Show train/test separation, confusion matrix, representative errors, and confidence or score where available.",
        "Add an explanation panel that distinguishes learned correlations from rules explicitly written by the developer."
      ],
      "stretch": [
        "Add drifted examples and compare how the rule baseline and learned model degrade.",
        "Support a review queue for uncertain predictions and measure how human review changes error rates.",
        "Export an experiment card containing dataset provenance, feature definitions, model version, split, metrics, and limitations."
      ],
      "plan": [
        "Week 1: define the feature schema, labels, synthetic generator, and deterministic test cases.",
        "Week 2: implement the rule baseline and labelled-data training pipeline with a chronological or fixed split.",
        "Week 3: add metrics, error inspection, drift cases, and accessible visual explanations.",
        "Week 4: package the local workbench, export evidence, and write a short comparison of explicit rules versus learned patterns."
      ]
    }
  },
  "eai-6401-2026-08-17": {
    "en": {
      "title": "RewardSketch: an RL problem-design and reward-audit workbench",
      "pitch": "Build an interactive tool that lets a learner define an agent, state, actions, reward, termination rule, and optional model for a small decision problem, then simulate policies and expose reward-design failures before training an expensive agent.",
      "problem": "Teams often jump from a business goal to an RL algorithm without checking whether the state is observable, actions are safe, rewards match intent, or delayed outcomes can be credited. Bad formulations waste training and can create reward hacking.",
      "learning": "You will formalize the agent–environment interface, discounted return, policies, value estimates, model-based versus model-free assumptions, and exploration constraints while building an explainable product artifact.",
      "mvp": [
        "Provide a form for state variables, actions, reward terms, terminal conditions, and discount factor.",
        "Generate a small gridworld or queueing simulator from the definition.",
        "Compare random, scripted, greedy-value, and simple planning policies on return distributions.",
        "Flag missing state information, reward loopholes, unsafe actions, and objectives dominated by one reward term."
      ],
      "stretch": [
        "Add a learned transition model and compare simulated planning with real-environment rollouts.",
        "Support constrained RL with safety budgets and violation dashboards.",
        "Export a Gymnasium-compatible environment skeleton and experiment card.",
        "Create a library of audited formulations for study scheduling, inventory control, and energy management."
      ],
      "plan": [
        "Week 1: define the schema and implement the agent–environment step loop with trajectory logging.",
        "Week 2: add discounted return, baseline policies, plots, and deterministic/stochastic transition options.",
        "Week 3: implement reward audits and adversarial test cases that reveal specification gaming.",
        "Week 4: package the UI, export format, documentation, and a case-study report comparing two formulations."
      ]
    }
  },
  "eai-6401-2026-08-18": {
    "en": {
      "title": "BanditLab: adaptive study interventions with safety-aware exploration",
      "pitch": "Build a small experimentation platform that chooses among revision formats—worked example, retrieval quiz, visual explanation, or short reading—and learns which format improves each learner's next-day recall.",
      "problem": "Study platforms usually rank content with fixed rules or optimize clicks. Learners need decisions tied to mastery, while educators need transparent limits on experimentation and evidence about uncertainty.",
      "learning": "You will implement incremental action values, ε-greedy, UCB, and Thompson sampling; measure regret and calibration; then confront delayed, noisy, and policy-dependent feedback.",
      "mvp": [
        "Create a simulator with four study interventions and configurable reward distributions.",
        "Implement greedy, ε-greedy, UCB, and Thompson-sampling policies behind one interface.",
        "Plot cumulative reward, regret, action counts, and estimate uncertainty.",
        "Add a safety floor that prevents an intervention with excessive failure rate from being selected."
      ],
      "stretch": [
        "Turn the system into a contextual bandit using topic, prior mastery, and available study time.",
        "Model next-day recall as delayed reward and compare credit-assignment heuristics.",
        "Add offline replay with inverse-propensity scoring for policy evaluation.",
        "Expose an educator dashboard explaining why the policy explored a particular intervention."
      ],
      "plan": [
        "Week 1: reproduce the four-arm lecture example and verify empirical means against 8, 12, 12.5, and 11.",
        "Week 2: benchmark action-selection policies over many random seeds and horizons.",
        "Week 3: add nonstationary rewards, constant step sizes, uncertainty, and safety constraints.",
        "Week 4: connect a lightweight web UI, document responsible-use boundaries, and present an experiment report."
      ]
    }
  },
  "eai-6402-2026-08-22": {
    "en": {
      "title": "SignalFoundry — a low-data decision copilot",
      "pitch": "Build a small web product that audits how evidence was collected, discovers rare events, and asks humans for the few labels that will improve a decision most.",
      "problem": "Small manufacturers, clinics, NGOs, and campus teams often have messy surveys or operational logs, few failure examples, and no data-science staff. A polished average or accuracy score can create false confidence while underrepresented groups and rare high-cost events go unnoticed.",
      "learning": "The build forces you to connect survey design, provenance, datafication, imbalance-aware metrics, anomaly detection, human feedback, and an optional few-shot adaptation module—the entire conceptual arc of Lecture 1.",
      "mvp": [
        "Upload a CSV plus a short decision brief describing target population, outcome, and error costs.",
        "Profile missingness, duplicates, subgroup coverage, label balance, and potential sampling gaps.",
        "Train an Isolation Forest or Local Outlier Factor baseline and expose an adjustable alert threshold.",
        "Show precision, recall, false-positive rate, and a confusion matrix when labels exist.",
        "Add a human review queue whose confirmed cases are stored with provenance and model version."
      ],
      "stretch": [
        "Use active learning to request labels for the most informative uncertain cases.",
        "Add prototypical-network adaptation for a small labeled support set.",
        "Accept image evidence alongside tabular records for multimodal defect review.",
        "Track drift and subgroup metrics over time with a lightweight model card.",
        "Offer a privacy-preserving local mode in which raw records never leave the user's machine."
      ],
      "plan": [
        "Week 1 — Choose one decision, interview two domain users, define the target population and the cost of each error.",
        "Week 2 — Build ingestion, provenance metadata, data-quality checks, and subgroup/imbalance views.",
        "Week 3 — Add anomaly baselines, threshold controls, cost-aware metrics, and the human review queue.",
        "Week 4 — Compare a few-shot or active-learning extension against the baseline; publish a short evaluation and demo."
      ]
    }
  },
  "eai-6403-2026-08-23": {
    "en": {
      "title": "DecodeBench — a controlled-generation observatory",
      "pitch": "Build a local-first lab that runs the same prompt through greedy, temperature, top-k, and top-p decoding, then visualizes token probabilities, entropy, branching paths, latency, repetition, and reproducibility.",
      "problem": "Teams tune generation settings by intuition and describe high temperature as creativity without measuring quality or risk. They often cannot reproduce an output because the model revision, seed, context truncation, and decoding configuration were not recorded.",
      "learning": "You will implement the lecture's full inference path—tokenization, embeddings/model forward pass, logits, softmax, autoregressive feedback, temperature, top-k, and top-p—while learning evaluation, observability, and safe product experimentation.",
      "mvp": [
        "Run a small open decoder model locally and expose prompt, max tokens, seed, temperature, top-k, and top-p controls.",
        "For every step, display the selected token, top candidates, logits/probabilities, entropy, and cumulative sequence probability.",
        "Compare at least four decoding profiles on repetition, diversity, latency, and exact reproducibility.",
        "Export a signed experiment record containing model revision, tokenizer revision, prompt hash, context length, parameters, seed, and output."
      ],
      "stretch": [
        "Add an attention-head explorer for a short prompt and clearly label attention weights as diagnostics rather than causal explanations.",
        "Create task suites for factual QA, brainstorming, summarization, and code, with different quality and safety metrics.",
        "Add constrained decoding or allow/deny token sets for regulated vocabulary.",
        "Offer a browser-only WebGPU mode so private prompts never leave the learner's device."
      ],
      "plan": [
        "Week 1: implement deterministic tokenization, model loading, greedy generation, and reproducible run metadata.",
        "Week 2: add temperature, top-k, top-p, probability charts, entropy, and token-path visualization.",
        "Week 3: build evaluation suites, repeated-seed experiments, and safety/repetition diagnostics.",
        "Week 4: package the local-first UI, experiment export, documentation, and a comparative technical report."
      ]
    }
  },
  "eai-6403-2026-08-29": {
    "en": {
      "title": "ModelFit Studio — a transparent LLM selection lab",
      "pitch": "Build a local-first workbench that compares candidate language models against real task prompts while recording license, privacy, quality, latency, and total-cost evidence.",
      "problem": "Teams often choose a model from hype or a leaderboard without checking whether its license, deployment mode, accuracy, or operating cost fits their actual use case.",
      "learning": "You will turn the lecture's four-step framework into a reproducible decision product: define constraints, build an evaluation set, compare outputs, and calculate total cost of ownership.",
      "mvp": [
        "Import a task brief with privacy, deployment, context-length, and customization requirements.",
        "Run 50 representative prompts containing edge cases and common user mistakes against two or more permitted models.",
        "Score outputs with semantic metrics plus a human review rubric for accuracy, helpfulness, and format.",
        "Export a decision record with model versions, license notes, evaluation results, token costs, infrastructure assumptions, and a recommendation."
      ],
      "stretch": [
        "Add a cost simulator for closed APIs, self-hosted GPU inference, and traffic spikes.",
        "Add a privacy gate that blocks candidates incompatible with sensitive-data handling.",
        "Track model revisions and rerun the benchmark when the landscape changes."
      ],
      "plan": [
        "Week 1: define the task brief, candidate schema, license/privacy checklist, and prompt fixtures.",
        "Week 2: implement model adapters, output capture, semantic scoring, and human rubric review.",
        "Week 3: add token/infrastructure cost calculations and a comparison dashboard.",
        "Week 4: package the reproducible report, document limitations, and test a model replacement scenario."
      ]
    }
  },
  "eai-6401-2026-08-24": {
    "en": {
      "title": "RegretLab — an auditable adaptive-experiment studio",
      "pitch": "Build a local-first simulator and decision dashboard that lets a learner define bandit arms, compare greedy and epsilon-greedy policies, inject reward drift, and explain every action through estimates, uncertainty, action gaps, and accumulated regret.",
      "problem": "Small product and learning teams often run adaptive experiments without seeing how early noise, fixed exploration, changing rewards, or unsafe actions affect users. A dashboard may report clicks while hiding opportunity cost, policy bias, and whether the apparent winner is stable.",
      "learning": "The build turns this lecture's formulas into a working system: sample-average action values, epsilon-greedy selection, optimal-action tracking, action-gap regret, replicated 10-armed testbeds, and a careful distinction between stationary simulation and monitored deployment.",
      "mvp": [
        "Create configurable Bernoulli and Gaussian arms with hidden true means, reward noise, horizon, random seed, and optional change points.",
        "Implement greedy, epsilon-greedy, and decreasing-epsilon policies with random tie-breaking and per-action counts.",
        "Plot average reward, percent optimal action, instantaneous regret, cumulative regret, and action-selection frequency across many replicated runs.",
        "Add an event ledger that explains each choice as greedy or exploratory and records the estimates available before the decision.",
        "Export a reproducible experiment bundle containing configuration, seed, policy version, aggregate metrics, and confidence intervals."
      ],
      "stretch": [
        "Add UCB, optimistic initialization, Thompson sampling, and constant-step-size tracking for nonstationary rewards.",
        "Create a safety layer that blocks arms exceeding a configurable downside-risk or minimum-support constraint.",
        "Run a shadow-policy comparison on logged data while clearly labeling the assumptions and limits of off-policy evaluation.",
        "Turn the simulator into a teaching product with challenge scenarios and automatic diagnosis of common implementation errors."
      ],
      "plan": [
        "Week 1: implement arm distributions, policy interfaces, seeded simulation, sample-average updates, and unit tests.",
        "Week 2: add replicated testbeds, reward/optimal-action/regret charts, and the step-by-step action ledger.",
        "Week 3: introduce drift, decreasing epsilon, confidence intervals, and policy-comparison reports.",
        "Week 4: add safety controls, package the local-first UI, and publish a reproducible technical evaluation."
      ]
    }
  },
  "eai-6401-2026-08-25": {
    "en": {
      "title": "DriftBench — an adaptive bandit policy auditor",
      "pitch": "Build a private decision-lab that generates controlled reward drift, compares sample-average, constant-step-size, epsilon-greedy, and optimistic policies, and explains when each policy reacts too slowly or explores too much.",
      "problem": "Teams deploy recommendations and experiments as if reward distributions were fixed, then misread noisy performance after demand, seasonality, or user mix changes. They need a compact way to separate random noise from genuine drift and see how estimator memory changes decisions.",
      "learning": "You will implement action-specific incremental updates, configurable drift processes, stochastic-approximation schedules, optimistic priors, exploration policies, regret metrics, and time-aligned diagnostic visualizations.",
      "mvp": [
        "Create stationary, abrupt-change, and random-walk reward generators for a configurable k-armed bandit.",
        "Implement sample-average and constant-alpha estimates with epsilon-greedy and optimistic initialization.",
        "Plot reward, regret, optimal-action rate, estimate lag, and effective memory on a shared timeline.",
        "Generate an audit report that explains which policy failed, when drift began, and which parameter caused the lag or variance."
      ],
      "stretch": [
        "Add change-point detection that resets or temporarily increases the step size after credible drift.",
        "Add UCB and sliding-window baselines after the next lecture and compare their uncertainty behavior.",
        "Support offline replay from anonymized product-event CSV files without retaining user identifiers.",
        "Turn the report into a policy-selection assistant with reproducible simulation seeds and confidence intervals."
      ],
      "plan": [
        "Week 1: implement environments, incremental estimators, seeded simulations, and correctness tests.",
        "Week 2: add policies, regret metrics, drift scenarios, and comparison plots.",
        "Week 3: build the interactive audit UI and plain-language failure explanations.",
        "Week 4: validate on synthetic incidents, document limitations, and package a reproducible demo."
      ]
    }
  },
  "eai-6401-2026-08-31": {
    "en": {
      "title": "ContextBandit Lab — an uncertainty-aware policy workbench",
      "pitch": "Build an auditable simulator that compares UCB, gradient-bandit, epsilon-greedy, and context-specific policies on stationary, drifting, and contextual reward streams.",
      "problem": "Exploration policies often look interchangeable until uncertainty, reward drift, or context changes the decision. Learners need to see which signal each policy uses and when a policy is over-exploring or under-exploring.",
      "learning": "You will implement UCB bonuses, softmax preferences, baseline-centred updates, contextual policy tables, regret metrics, and reproducible visual diagnostics.",
      "mvp": [
        "Create seeded stationary and drifting k-armed environments with configurable contexts and action sets.",
        "Implement UCB, epsilon-greedy, gradient bandit with and without a baseline, and a contextual policy baseline.",
        "Plot reward, cumulative regret, optimal-action rate, uncertainty bonus, and preference probabilities on a shared timeline.",
        "Export an evidence card that records the environment, c/alpha/epsilon settings, policy, seed, and observed failure mode."
      ],
      "stretch": [
        "Add a logged contextual-bandit replay mode with propensity-aware off-policy estimates.",
        "Add change-point detection that increases adaptation after credible reward drift.",
        "Create short challenge scenarios that diagnose denominator, baseline, and context-definition mistakes."
      ],
      "plan": [
        "Week 1: build environments, seeded policies, and unit tests for UCB and softmax updates.",
        "Week 2: add baseline comparisons, regret metrics, and the action ledger.",
        "Week 3: introduce contexts, drift scenarios, and interactive visual diagnostics.",
        "Week 4: package reproducible evidence cards, stress-test assumptions, and publish a teaching demo."
      ],
      "novelty": "The lab makes the exploration signal itself inspectable: uncertainty, preference gradient, random branch, and context are shown as separate causes of action selection.",
      "stack": ["Python", "NumPy", "pandas", "Plotly", "Streamlit"],
      "milestones": ["Week 1: policy correctness", "Week 2: testbed metrics", "Week 3: contextual diagnostics", "Week 4: reproducible demo"],
      "success": "A learner can explain why each action was selected, reproduce its reward and regret curves, and defend when a contextual or uncertainty-aware policy is appropriate."
    }
  },
  "ecc-6404-2026-08-17-193438": {
    "en": {
      "title": "KDD Provenance Lab — from messy sources to decision-ready evidence",
      "pitch": "Build a small, reproducible data-mining workbench that ingests heterogeneous CSV, JSON, and text samples, records provenance, demonstrates cleaning/integration/selection/transformation, and compares descriptive patterns with rare-event alerts.",
      "problem": "Teams often publish dashboards from mismatched sources and then trust a majority-class metric or an untraceable pattern. Learners need a compact way to see how schema choices, subgroup coverage, imbalance, and privacy controls change a decision.",
      "learning": "Implement a KDD pipeline, association and classification baselines, stratified evaluation, anomaly detection, precision/recall reporting, provenance checks, and privacy-preserving presentation.",
      "mvp": [
        "Create three deliberately heterogeneous source files with schema and quality issues, then log cleaning and integration decisions.",
        "Add a selectable target population and subgroup coverage report before mining patterns.",
        "Compare a majority-class classifier with a rare-event detector using confusion matrices, precision, recall, and cost-weighted thresholds.",
        "Render an explainable evidence card for each pattern with source references and masked identifiers."
      ],
      "stretch": [
        "Add a streaming source and show incremental aggregation versus a batch recomputation.",
        "Support interactive constraints that prune uninteresting association patterns before expensive mining.",
        "Add a provenance search step that distinguishes an absent value from a genuinely missing value.",
        "Package a small BI dashboard and reproducible notebook with synthetic data and audit logs."
      ],
      "plan": [
        "Week 1: define schemas, synthetic sources, provenance log, cleaning tests, and integration checks.",
        "Week 2: implement descriptive patterns, association rules, subgroup summaries, and visual evidence cards.",
        "Week 3: add classification, anomaly detection, imbalance-aware metrics, and human review workflow.",
        "Week 4: threat-model privacy, run reproducible experiments, document limitations, and publish the demo."
      ]
    }
  },
  "ebb-6402-2026-08-18-180205": {
    "en": {
      "title": "PolicyLedger — a blockchain governance readiness lab",
      "pitch": "Build a small decision-support lab that maps a blockchain use case to policy layers, risks, actors, controls, and an auditable launch checklist before a smart contract or consortium network goes live.",
      "problem": "Teams can deploy technically valid ledgers while leaving patient privacy, key custody, interoperability semantics, accountability, or upgrade authority undefined. PolicyLedger makes those hidden assumptions visible and testable.",
      "learning": "You will connect data privacy, security, HIPAA-style compliance, risk management, consensus trade-offs, governance roles, and institutional-to-infrastructure policy layers in one explainable product.",
      "mvp": [
        "Create a guided intake for sector, data sensitivity, participants, trust model, consensus choice, and cross-system integrations.",
        "Generate a layered governance map covering institutional law, organization/individual behaviour, application rules, and protocol security.",
        "Score threats such as key theft, smart-contract bugs, data leakage, 51% concentration, regulatory change, and human error with owners and mitigations.",
        "Export a review-ready decision record showing authority, consent, audit evidence, incident response, and change procedures."
      ],
      "stretch": [
        "Add jurisdiction templates that compare HIPAA-style healthcare controls with another sector's requirements.",
        "Simulate proof-of-work versus proof-of-stake cost, concentration, and failure scenarios for the same network.",
        "Add an interoperability contract that tests identity, permission, schema, and semantic compatibility between ledgers.",
        "Provide a tabletop governance exercise for upgrades, conflicts, emergency pauses, and accountability hand-offs."
      ],
      "plan": [
        "Week 1: define the policy schema, threat taxonomy, actor roles, and two synthetic use cases.",
        "Week 2: implement layered maps, risk scoring, control ownership, and an evidence checklist.",
        "Week 3: add consensus comparison and interoperability tests with reproducible scenario data.",
        "Week 4: run a governance tabletop, document limitations, and publish an anonymized decision-record demo."
      ]
    }
  },
  "ecc-6404-2026-08-19-193245": {
    "en": {
      "title": "ScaleSense — a measurement-aware data-quality workbench",
      "pitch": "Build a local-first data profiler that asks what each column means before it computes statistics, recommends only semantics-preserving transformations, and shows when a sparse feature should be compared by presence rather than shared absence.",
      "problem": "Teams often encode nominal categories as integers, average identifiers, or apply a symmetric distance to sparse binary events. The resulting dashboards look precise while silently changing the question represented by the data.",
      "learning": "You will implement data-object and attribute metadata, quality checks, nominal/ordinal/interval/ratio declarations, invariant-preserving transforms, discrete/continuous detection, and asymmetric similarity for association-style use cases.",
      "mvp": [
        "Upload a small CSV and let the user declare or infer each attribute's measurement level, value count type, and missing-value policy.",
        "Flag suspicious arithmetic such as means of IDs, ratios on Celsius values, and order-destroying ordinal encodings.",
        "Preview one-to-one, monotonic, affine, and multiplicative transformations with an audit trail of constants and semantic guarantees.",
        "Compare symmetric matching with Jaccard-style presence similarity for a sparse student-course or basket dataset."
      ],
      "stretch": [
        "Add schema contracts that travel with a feature into a scikit-learn pipeline and fail fast when an incompatible operation is requested.",
        "Support temporal and spatial attributes with explicit time-zone, granularity, and coordinate metadata.",
        "Create an interactive teaching mode that generates counterexamples such as 100°C versus 50°C and ID averaging.",
        "Export a privacy-preserving data card with provenance, measurement levels, permitted operations, and known quality limitations."
      ],
      "plan": [
        "Week 1: define the attribute-schema model, ingest CSV samples, and implement quality/provenance checks.",
        "Week 2: implement measurement-level declarations, operation guards, and the four invariant-preserving transformations.",
        "Week 3: add discrete/binary/continuous detection, sparse asymmetric similarity, and visual counterexamples.",
        "Week 4: package the local-first UI, export an auditable data card, and evaluate the tool on two synthetic datasets."
      ]
    }
  },
  "ebb-6402-2026-08-20-180203": {
    "en": {
      "title": "ChainSteward: a policy-to-protocol governance workbench",
      "pitch": "Build a local-first governance workbench that turns a consortium's decision rights, proposal workflow, voting threshold, upgrade policy, and dispute path into an auditable policy pack and testable smart-contract skeleton.",
      "problem": "Blockchain projects often encode a vote before they have agreed who may propose, who may validate, how conflicts are handled, or what happens during an upgrade. Ambiguous authority creates security, legal, and adoption risk.",
      "learning": "You will model on-chain and off-chain governance, proposal and threshold logic, role-based permissions, version compatibility, oracle trust boundaries, and regulatory traceability in one applied build.",
      "mvp": [
        "Define organizations, roles, proposal types, voter eligibility, quorum, threshold, and emergency powers in a versioned policy schema.",
        "Simulate six nodes submitting, broadcasting, voting on, accepting, or rejecting proposals with a visible evidence trail.",
        "Generate Solidity-style pseudocode plus a human-readable governance charter; flag missing roles, unreachable thresholds, and single-admin risks.",
        "Add an upgrade checklist for release notes, backward compatibility, legal review, dispute escalation, and post-change monitoring."
      ],
      "stretch": [
        "Connect an append-only event log and verifiable policy hashes without exposing private participant data.",
        "Compare decentralized, consortium, and private governance configurations on latency, control, transparency, and failure recovery.",
        "Add an oracle intake screen that records source, freshness, signer, and confidence before an external fact can affect a decision.",
        "Export a regulator/board review pack mapping each obligation to an owner, evidence item, and escalation route."
      ],
      "plan": [
        "Week 1: define the policy schema, role model, proposal lifecycle, and six-node simulator.",
        "Week 2: implement voting, quorum/threshold checks, audit events, and adversarial cases such as a 50% tie.",
        "Week 3: add upgrade compatibility, dispute workflows, oracle provenance, and risk flags.",
        "Week 4: package the policy charter, pseudocode export, governance-model comparison, and a short evaluation with two consortium scenarios."
      ]
    }
  },
  "ebb-6403-2026-08-21-075934": {
    "en": {
      "title": "PrivacyLens: threat-aware big-data access review",
      "pitch": "Build a local-first data-lake review workbench that maps each dataset through acquisition, storage, analytics, and sharing, then tests STRIDE threats against RBAC/ABAC/PBAC policies and anonymization choices.",
      "problem": "Security reviews often list controls without connecting them to a concrete data lifecycle. Teams can miss an exposed column, an over-privileged service, a spoofable ingestion source, or re-identification risk after sharing.",
      "learning": "You will practice lifecycle threat modelling, STRIDE classification, least-privilege authorization, MFA/SSO/Kerberos identity boundaries, column-level policy, and privacy-risk testing in one applied build.",
      "mvp": [
        "Model sources, acquisition, raw/processed stores, analytics jobs, users, services, and third-party exports as a versioned graph.",
        "Run STRIDE prompts at each edge and record risk, evidence, owner, likelihood, impact, and proposed control.",
        "Simulate RBAC, ABAC, and PBAC requests for anonymized versus identifying columns with time, location, device, and role context.",
        "Apply masking and quasi-identifier linkage tests, then export a privacy-aware review pack without raw participant data."
      ],
      "stretch": [
        "Add a Kerberos-style ticket-flow visualizer and short-lived token/revocation checks.",
        "Compare AES-at-rest, TLS-in-transit, centralized key management, and HSM assumptions in a control matrix.",
        "Add differential-privacy budget experiments and show accuracy versus disclosure trade-offs on synthetic data.",
        "Generate regulator-ready evidence mapping for GDPR, CCPA, or HIPAA-style obligations."
      ],
      "plan": [
        "Week 1: define the lifecycle graph, threat taxonomy, and synthetic data policy schema.",
        "Week 2: implement STRIDE prompts, RBAC/ABAC/PBAC evaluation, and column-level decisions.",
        "Week 3: add authentication-boundary simulation, anonymization/linkage tests, and evidence ownership.",
        "Week 4: package the review dashboard, privacy report, adversarial scenarios, and a short evaluation."
      ]
    }
  },
  "ebb-6403-2026-08-28-074445": {
    "en": {
      "title": "PrivacyLab: re-identification and differential-privacy risk workbench",
      "pitch": "Build a local-first laboratory that transforms a synthetic sensitive dataset, tests linkage attacks, calibrates differential-privacy mechanisms, and reports the privacy–utility trade-off alongside network and monitoring controls.",
      "problem": "Teams often remove names and label a dataset anonymous without testing quasi-identifier linkage, homogeneous sensitive groups, repeated-query privacy loss, or the security of the service releasing results.",
      "learning": "You will implement identifier classification, generalization and suppression, k-anonymity, l-diversity, t-closeness, Laplace/Gaussian noise, privacy-budget accounting, TLS-aware architecture review, and explainable anomaly evidence.",
      "mvp": [
        "Generate a seeded synthetic hospital dataset and classify direct identifiers, quasi-identifiers, and sensitive attributes.",
        "Apply generalization, suppression, k-anonymity, l-diversity, and t-closeness; show which records remain linkable and why.",
        "Release count and mean queries with configurable epsilon/delta, calibrated noise, repeated-query accounting, and utility error plots.",
        "Export a review pack covering data transformations, attack assumptions, privacy budget, network boundaries, authorization, monitoring, and residual risk."
      ],
      "stretch": [
        "Compare basic and advanced composition across a query workload and flag budget exhaustion before release.",
        "Add a shuffled local-randomization experiment and compare its empirical leakage with central differential privacy.",
        "Model TLS, Kerberos, Ranger-style policy, segmentation, and IDS sensors as an interactive trust-boundary graph.",
        "Add an explainable behavioral detector with baseline drift, false-positive review, and incident-response evidence."
      ],
      "plan": [
        "Week 1: define the synthetic schema, threat model, identifier taxonomy, and linkage-test fixtures.",
        "Week 2: implement anonymization transforms and k/l/t release checks with utility metrics.",
        "Week 3: add Laplace/Gaussian mechanisms, sensitivity, composition, and privacy-budget visualizations.",
        "Week 4: add network/control mapping, anomaly evidence, exports, tests, and a concise risk evaluation."
      ]
    }
  },
  "ecs-6401-2026-08-21-180935": {
    "en": {
      "title": "SeasonalSignal Lab: explainable time-series decomposition workbench",
      "pitch": "Build a local-first workbench that turns a timestamped dataset into an explainable diagnostic report: trend, seasonal period, rolling variability, ACF/PACF clues, decomposition plots, and a reproducible forecast baseline.",
      "problem": "Teams often jump to ARIMA or deep learning before checking whether a series is stationary, whether seasonality is real, or whether a smoothing window hides a turning point. A transparent diagnostic artifact can make model choice auditable.",
      "learning": "You will implement time-aware data preparation, seeded synthetic data, line and seasonal plots, rolling statistics, additive decomposition, ADF checks, and leakage-safe baseline evaluation while keeping raw observations traceable.",
      "mvp": [
        "Import a CSV with a timestamp column, validate cadence, flag gaps/outliers, and keep an immutable raw snapshot.",
        "Generate line, seasonal, distribution, rolling mean/variance, ACF/PACF, and decomposition views with source time ranges.",
        "Compare seasonal-naive, moving-average, and one classical forecast baseline using chronological splits and MAE/RMSE.",
        "Export a concise report explaining which signals support or weaken trend, seasonality, stationarity, and the selected window/model."
      ],
      "stretch": [
        "Add automatic frequency suggestions and a spectral-period explorer, with warnings when sampling is irregular.",
        "Add change-point and regime-shift checks so a formerly stable seasonal pattern is not trusted blindly.",
        "Support multivariate lag inspection and a VAR baseline while preserving feature-availability timestamps.",
        "Publish an interactive classroom mode that lets learners vary noise, amplitude, period, and rolling window on seeded data."
      ],
      "plan": [
        "Week 1: implement timestamp validation, raw-data lineage, seeded synthetic-series generator, and baseline plots.",
        "Week 2: add seasonal views, rolling statistics, ACF/PACF, spectral hints, and decomposition panels.",
        "Week 3: add ADF and chronological evaluation with leakage checks, baselines, and error diagnostics.",
        "Week 4: package the report/export flow, accessibility, tests, and a case study comparing two window/model choices."
      ]
    }
  },
  "ecc-6404-2026-08-24-193338": {
    "en": {
      "title": "DataTrust Compass: explainable data-quality and lineage workbench",
      "pitch": "Build a local-first workbench that profiles messy datasets, maps measurement and collection risks, and produces an explainable quality-and-lineage report before analytics or machine-learning use.",
      "problem": "Data teams can lose hours debugging models when missing values, duplicate records, inconsistent formats, noisy measurements, or collection artifacts are discovered too late. A transparent pre-flight report can make data readiness and remediation decisions auditable.",
      "learning": "You will practice data-object and attribute profiling, measurement-scale awareness, missingness and duplicate detection, robust noise checks, lineage capture, and evidence-based quality scoring without hiding uncertainty behind one opaque number.",
      "mvp": [
        "Import CSV or JSON data, preserve an immutable raw snapshot, infer attribute types and measurement scales, and flag cadence or schema inconsistencies.",
        "Profile missing values, duplicates, outliers, conflicting records, discrete/continuous fields, and asymmetric binary attributes with row-level evidence.",
        "Separate likely measurement error from collection error and noise from deterministic artifacts using configurable rules and synthetic test fixtures.",
        "Export a bilingual-ready quality report with remediation suggestions, lineage metadata, confidence notes, and a before/after cleaning comparison."
      ],
      "stretch": [
        "Add a rule editor for domain constraints, cross-field consistency, and nominal/ordinal/interval/ratio-aware transformations.",
        "Add a reproducible data-contract checker and drift monitor that compares new batches against the approved profile.",
        "Support privacy-preserving sample views and signed evidence bundles so reviewers can audit findings without receiving raw sensitive rows.",
        "Build a classroom mode that injects controlled missingness, noise, artifacts, duplicates, and collection bias for interactive experiments."
      ],
      "plan": [
        "Week 1: implement immutable ingestion, type/scale inference, profile summaries, and seeded quality-fixture generation.",
        "Week 2: add missingness, duplicates, inconsistency, outlier, noise, and artifact detectors with evidence links.",
        "Week 3: add lineage, remediation transforms, confidence scoring, drift checks, and privacy-safe report exports.",
        "Week 4: package the dashboard, bilingual explanations, tests, accessibility, and a case study comparing two cleaning policies."
      ]
    }
  },
  "ebb-6402-2026-08-25-180424": {
    "en": {
      "title": "LedgerGuard: policy-aware DLT compliance and evidence workbench",
      "pitch": "Build a local-first workbench that maps a blockchain workflow to AML/KYC, privacy, interoperability, and sustainability controls, then produces an auditable evidence bundle without copying sensitive personal data onto a ledger.",
      "problem": "Teams often promise that blockchain will solve trust while leaving data minimisation, legal ownership, cross-platform reconciliation, and external-input risk unspecified. A policy-aware evidence workflow can expose those gaps before deployment.",
      "learning": "You will practise threat and obligation mapping, hash-based document references, privacy-safe evidence design, KYC/AML control modelling, schema interoperability, consensus assumptions, and responsible-adoption review.",
      "mvp": [
        "Model a finance or supply-chain workflow with roles, KYC/AML checkpoints, policy obligations, and explicit trust boundaries.",
        "Keep sample documents in a governed store, write only hashes/references to a simulated ledger, and show access/deletion implications.",
        "Add an interoperability mapper that validates schemas and records reconciliation failures between two simulated platforms.",
        "Export an evidence report with control owners, source references, residual risks, environmental assumptions, and consensus limitations."
      ],
      "stretch": [
        "Add configurable jurisdiction profiles for cross-border privacy, digital-asset, and reporting obligations.",
        "Add synthetic suspicious-activity cases and evaluate precision/recall of monitoring rules without real personal data.",
        "Add a signed, privacy-preserving evidence bundle and an appeal/incident workflow for disputed records.",
        "Compare centralised, consortium, and public-ledger architectures on cost, resilience, governance, and sustainability."
      ],
      "plan": [
        "Week 1: define the workflow, roles, obligations, threat model, synthetic fixtures, and trust boundaries.",
        "Week 2: implement hash/reference storage, KYC/AML checkpoints, access/deletion simulation, and control-owner views.",
        "Week 3: add schema mapping, reconciliation, residual-risk scoring, and privacy-safe evidence exports.",
        "Week 4: compare ledger architectures, test failure modes, document limitations, and package the capstone demo."
      ]
    }
  },
  "ecs-6401-2026-08-26-180538": {
    "en": {
      "title": "TimeSeries Triage Lab",
      "pitch": "Build a small notebook-to-dashboard workbench that profiles an ordered series, visualises its shape, flags data-quality issues, tests stationarity and records every transformation before a forecast is attempted.",
      "problem": "Teams often jump from a chart to a model while missing gaps, outliers, skew or changing variance. An auditable diagnostic lane can make those assumptions visible and reproducible.",
      "learning": "Practise categorical and quantitative summaries, IQR and z-score screening, time-aware imputation, line/histogram/box diagnostics, ACF/PACF interpretation and stationarity checks.",
      "mvp": [
        "Upload a CSV with a timestamp and value column and report variable type, missingness, distribution and summary statistics.",
        "Render chronological, histogram and box-plot views with hover labels for raw versus imputed points.",
        "Let users compare forward fill, interpolation and seasonal imputation without overwriting the raw series.",
        "Run ADF and show differenced/log-transformed candidates with an exportable decision log."
      ],
      "novelty": "The product treats preprocessing choices as first-class, reviewable evidence rather than hidden notebook mutations.",
      "stack": [
        "Python",
        "pandas",
        "statsmodels",
        "Plotly",
        "Streamlit"
      ],
      "milestones": [
        "Week 1: profile and visualise",
        "Week 2: implement transparent imputation and outlier flags",
        "Week 3: add ADF, differencing and transformation comparison",
        "Week 4: package a reproducible diagnostic report and demo"
      ],
      "success": "A learner can explain each flagged point and transformation, reproduce the report, and choose a modelling baseline without shuffling away temporal evidence."
    }
  },
  "ecc-6404-2026-08-26-193241": {
    "en": {
      "title": "QualityLens: an auditable data-readiness workbench",
      "pitch": "Build a local-first workbench that profiles a dataset's measurement quality, missingness, duplicates, sampling balance, and preprocessing decisions before a model is trained.",
      "problem": "Teams often delete, impute, aggregate, or sample data without recording why. The resulting model may be fast but silently biased, stale, or unable to represent rare cases.",
      "learning": "Practise precision/bias/accuracy reasoning, outlier triage, missing-value strategies, entity-resolution safeguards, metadata contracts, aggregation, and representative or stratified sampling.",
      "mvp": [
        "Upload a tabular dataset plus a small metadata file describing units, valid ranges, measurement level, and missing-value sentinels.",
        "Report precision proxies, outlier candidates, missingness patterns, cross-field consistency checks, and duplicate/near-duplicate matches without deleting raw rows.",
        "Compare deletion, interpolation, neighbor/mode imputation, aggregation, simple random sampling, and stratified sampling as versioned branches.",
        "Export a data-readiness report that shows population changes, assumptions, retained rare groups, and a reproducible decision log."
      ],
      "stretch": [
        "Add drift and timeliness checks that compare current data with the training snapshot and flag stale attributes.",
        "Let reviewers approve or reject candidate entity merges with evidence from stable fields and an uncertainty score.",
        "Simulate downstream model metrics under each cleaning and sampling branch, including rare-class recall and calibration.",
        "Add privacy-preserving synthetic fixtures so teams can demonstrate the workflow without exposing student or customer records."
      ],
      "plan": [
        "Week 1: implement metadata schema, profile, precision/outlier and missingness views.",
        "Week 2: add consistency rules, duplicate review, and non-destructive imputation branches.",
        "Week 3: implement aggregation, random/stratified sampling and population-difference diagnostics.",
        "Week 4: connect a baseline model, export the audit report, test rare-class scenarios, and package a demo."
      ],
      "novelty": "The product makes data-quality and sampling choices inspectable evidence, keeping raw data, transformations, and population impact side by side instead of hiding them in a notebook.",
      "stack": [
        "Python",
        "pandas",
        "scikit-learn",
        "Great Expectations",
        "Streamlit"
      ],
      "milestones": [
        "Week 1: profile and quality flags",
        "Week 2: reviewable repair branches",
        "Week 3: sampling and population diagnostics",
        "Week 4: model impact report and demo"
      ],
      "success": "A reviewer can trace every retained, repaired, removed, or sampled record back to a documented rule and explain how the choice affects rare groups and model readiness."
    }
  },
  "ecs-6401-2026-08-19-175559": {
    "en": {
      "title": "SeasonScope: a transparent time-series decomposition studio",
      "pitch": "Build an interactive studio that turns an ordered time series into an explainable decomposition, letting learners compare trend, seasonality, cycles, noise, and moving-average choices before forecasting.",
      "problem": "Learners often jump to a forecasting model without checking whether a pattern is trend, seasonality, a calendar effect, or an artifact of visualization. A guided decomposition record makes the assumptions and transformations reviewable.",
      "learning": "You will practise time-series vocabulary, chronological plotting, additive versus multiplicative structure, smoothing, moving averages, decomposition diagnostics, and reproducible Python analysis.",
      "mvp": [
        "Upload a timestamped CSV, validate cadence and missing intervals, and preserve the raw series.",
        "Render line, rolling-statistic, seasonal, and residual views with a clear original-time axis.",
        "Compare additive and multiplicative decomposition plus configurable moving-average windows.",
        "Export a bilingual diagnostic report that records assumptions, parameters, plots, and interpretation."
      ],
      "stretch": [
        "Add STL decomposition and compare robustness under outliers and missing periods.",
        "Detect multiple seasonalities such as weekday and annual patterns.",
        "Add a forecast-baseline panel that refuses to run until cadence and decomposition checks are acknowledged.",
        "Create classroom fixtures for trend, seasonality, cycles, shocks, and irregular noise."
      ],
      "plan": [
        "Week 1: implement timestamp validation, cadence checks, raw-series import, and core visualisations.",
        "Week 2: add rolling statistics, moving-average controls, and additive/multiplicative decomposition.",
        "Week 3: build residual diagnostics, missing-period and outlier scenarios, and a comparison report.",
        "Week 4: package the accessible dashboard, bilingual explanations, tests, and a reproducible case study."
      ],
      "novelty": "The studio treats decomposition and visualization decisions as auditable learning evidence rather than hidden notebook steps.",
      "stack": [
        "Python",
        "pandas",
        "statsmodels",
        "Plotly",
        "Streamlit"
      ],
      "milestones": [
        "Week 1: validate and plot",
        "Week 2: smooth and decompose",
        "Week 3: stress-test diagnostics",
        "Week 4: publish a reproducible report"
      ],
      "success": "A learner can explain each component, reproduce every parameter choice, and justify a forecasting baseline without confusing visual artifacts for signal."
    }
  }
  ,"eai-6402-2026-08-29": {
    "en": {
      "title": "VisionAudit: a low-data computer-vision evidence workbench",
      "pitch": "Build a local-first studio that lets a learner document image/video provenance, compare expert and assisted labels, test rare-event and anomaly detectors, and stress-test a vision model with controlled perturbations.",
      "problem": "Computer-vision systems can look accurate while hiding sampling gaps, noisy annotation, class imbalance, privacy constraints, or adversarial weaknesses. Teams need a reviewable evidence trail before deploying in medicine, agriculture, surveillance, or recommendation workflows.",
      "learning": "You will connect annotation provenance, stratified evaluation, anomaly detection, multimodal evidence, synthetic augmentation, and adversarial robustness—the practical bridge from scarce data to meta-learning.",
      "mvp": [
        "Import a permitted image dataset plus metadata for source, labeler expertise, consent, subgroup, and confidence.",
        "Compare majority, expert, and assisted labels with agreement, missingness, imbalance, and subgroup coverage reports.",
        "Train a simple classifier and anomaly baseline; report precision, recall, false-positive/negative counts, and review queues.",
        "Add a perturbation panel that applies small, documented changes and records whether predictions remain stable.",
        "Export an evidence card with dataset limitations, model version, evaluation fixtures, and human-review decisions."
      ],
      "stretch": [
        "Add active learning to request the most informative expert labels under a fixed budget.",
        "Compare real versus synthetic augmentation and detect distribution shift with held-out domain data.",
        "Add a graph view of human key points for simple activity recognition.",
        "Provide privacy-preserving local processing and redaction for sensitive faces, plates, or medical imagery."
      ],
      "plan": [
        "Week 1: define provenance schema, consent fields, annotation roles, and non-destructive import.",
        "Week 2: implement label agreement, subgroup/imbalance diagnostics, and expert review queue.",
        "Week 3: add classifier/anomaly baselines, cost-aware metrics, and synthetic-data comparison.",
        "Week 4: implement perturbation tests, evidence export, responsible-use notes, and a case-study demo."
      ],
      "novelty": "The workbench treats data quality, expert accountability, and adversarial robustness as one inspectable evidence chain rather than separate afterthoughts.",
      "stack": ["Python", "OpenCV", "scikit-learn", "PyTorch", "Streamlit"],
      "milestones": ["Week 1: provenance and annotation audit", "Week 2: imbalance and review workflow", "Week 3: model and anomaly baselines", "Week 4: perturbation tests and evidence report"],
      "success": "A reviewer can trace a prediction to its data source and label evidence, explain errors for rare groups, and reproduce the robustness checks without exposing private raw imagery."
    }
  },
  "eai-6403-2026-08-30": {
    "en": {
      "title": "ContextLens — a self-attention and translation-debugging lab",
      "pitch": "Build an interactive lab that highlights which tokens a model should use to resolve references and translate ambiguous sentences, then compares those explanations with the model's output.",
      "problem": "A fluent NLP output can still be wrong when a pronoun, attachment, or word sense is linked to the wrong context. Learners need a compact way to see the dependency, inspect the failure, and build a targeted evaluation example.",
      "learning": "You will turn the lecture's attention examples into a practical workflow: tokenize sentences, mark candidate antecedents, inspect attention or attribution signals, compare translation alternatives, and record an evidence-backed error analysis.",
      "mvp": [
        "Provide fixtures for pronoun resolution, long-range subject/predicate links, bank-style word-sense ambiguity, and short English-to-Hindi translation examples.",
        "Show the target token, candidate context tokens, model output, and a learner-selected gold interpretation in one aligned view.",
        "Run a permitted Transformer/BERT model locally or through an approved API and record model/version, prompt, output, and latency.",
        "Export an evaluation card with the failure type, correct context link, output comparison, and a reproducible test sentence."
      ],
      "stretch": [
        "Add a side-by-side attention heatmap and a warning when an explanation is not a faithful causal account.",
        "Generate contrastive pairs that change one contextual phrase while keeping the target word fixed.",
        "Track error rates by dependency distance, ambiguity type, and translation direction."
      ],
      "plan": [
        "Week 1: define sentence fixtures, token/context schema, gold labels, and privacy-safe logging.",
        "Week 2: implement inference, candidate highlighting, and a human annotation workflow.",
        "Week 3: add contrastive tests, attention/attribution views, and aggregate error metrics.",
        "Week 4: package the lab, export evidence cards, document model limitations, and publish a small case study."
      ],
      "novelty": "It turns an abstract self-attention explanation into a reproducible debugging record that connects context, output, and evaluation rather than presenting heatmaps as decoration.",
      "stack": ["Python", "Transformers", "PyTorch", "Gradio or Streamlit"],
      "milestones": ["Week 1: fixtures and labels", "Week 2: inference and annotation", "Week 3: contrastive diagnostics", "Week 4: evidence export and case study"],
      "success": "A learner can show exactly which context resolves an ambiguity, reproduce the model output, and explain a translation or reference error without exposing private text."
    }
  },
  "ecc-6404-2026-08-31-193236": {
    "en": {
      "title": "FeatureForge — a leakage-safe feature-reduction workbench",
      "pitch": "Build a local-first workbench that compares sampling, projection, subset selection, weighting, and domain-derived features on one dataset while making the information and validation trade-offs visible.",
      "problem": "Feature engineering is often judged by a single score after many undocumented experiments. Learners need to see when a smaller representation improves cost or generalisation, when rare groups disappear, and when a feature was derived with valid domain reasoning.",
      "learning": "You will implement representative sampling, PCA/SVD projections, filter and wrapper selection, model-based weighting, and a density-style constructed feature while practising leakage-safe validation and reproducible experiment records.",
      "mvp": [
        "Upload a tabular dataset and decision brief; profile dimensions, missingness, class balance, and candidate leakage columns.",
        "Compare a full-feature baseline with PCA/SVD, filter ranking, sequential forward selection, and an embedded model selector.",
        "Plot validation score, training time, feature count, subgroup coverage, and the selected feature set for each strategy.",
        "Let a learner define a derived feature such as density = mass / volume and record the domain rationale and formula."
      ],
      "stretch": [
        "Add nested cross-validation and a held-out test set so selection overfitting is visible.",
        "Add progressive sampling and a rare-class preservation dashboard.",
        "Export a model card describing representation choice, feature provenance, and limitations."
      ],
      "plan": [
        "Week 1: implement ingestion, profiling, leakage checks, and a deterministic baseline.",
        "Week 2: add sampling, PCA/SVD, filter ranking, and comparable evaluation plots.",
        "Week 3: implement wrapper/embedded selection, weighting, and nested validation.",
        "Week 4: add domain-derived features, experiment export, documentation, and a comparative report."
      ],
      "novelty": "It treats representation choice as an auditable decision: the learner sees both model performance and what evidence was removed, transformed, or constructed.",
      "stack": ["Python", "pandas", "scikit-learn", "Plotly", "Streamlit"],
      "milestones": ["Week 1: profiling and baseline", "Week 2: projection and filters", "Week 3: wrappers and validation", "Week 4: constructed features and report"],
      "success": "A learner can explain why a selected representation was chosen, reproduce its validation result, and identify a case where reducing dimensions harmed an important subgroup."
    }
  },
  "ebb-6401-2026-08-17-180921": {
    "en": {
      "title": "ClauseCraft: an agreement-to-Solidity specification auditor",
      "pitch": "Build a visual workbench that turns a plain-language conditional agreement into an executable state machine, Solidity-style pseudocode, tests, and a cryptographic authorization map before any public deployment.",
      "problem": "Smart-contract failures often begin before coding: parties leave a condition ambiguous, developers encode a different interpretation, or authorization and exception paths are never tested. Learners need a reviewable bridge between intent and enforcement.",
      "learning": "You will separate reaching, formalising, and enforcing an agreement; model contract state and guards; map public/private-key authorization; estimate execution cost; and test normal, rejected, and adversarial paths.",
      "mvp": [
        "Provide a structured editor for parties, assets, rights, obligations, conditions, deadlines, and exceptional outcomes.",
        "Generate an accessible state-flow diagram showing which conditions unlock each transition.",
        "Produce Solidity-style pseudocode plus unit-test cases for success, failure, replay, and unauthorised-call paths.",
        "Create a signature and role map that distinguishes message authenticity from business-rule permission."
      ],
      "stretch": [
        "Add a Remix-compatible Solidity export with a local-only deployment guide.",
        "Estimate gas-sensitive operations and compare administrative cost with protocol execution cost.",
        "Add oracle and governance trust-boundary prompts for externally supplied facts.",
        "Export an audit packet linking every code guard to its source clause and test evidence."
      ],
      "plan": [
        "Week 1: define the agreement schema and build the clause-to-state-machine editor.",
        "Week 2: generate pseudocode, authorization rules, and deterministic transition tests.",
        "Week 3: add adversarial cases, oracle/governance prompts, and cost estimates.",
        "Week 4: package the Remix export, evidence report, accessibility pass, and one escrow case study."
      ],
      "novelty": "It treats contract development as traceable specification engineering: every executable guard is connected to an agreed clause, authorization rule, and test rather than being presented as code alone.",
      "stack": ["TypeScript", "Solidity", "Remix", "Mermaid or accessible HTML flow", "Vitest"],
      "milestones": ["Week 1: schema and flow", "Week 2: code and tests", "Week 3: trust and cost audit", "Week 4: export and case study"],
      "success": "A learner can trace every state transition to an agreed condition, demonstrate valid and rejected execution paths, and identify at least one trust dependency that the blockchain does not remove."
    }
  },
  "ebb-6401-2026-08-17-184812": {
    "en": {
      "title": "TitleFlow: a governed property-settlement simulator",
      "pitch": "Build a local-first simulator that connects signed buyer/seller instructions, a permissioned title oracle, configurable consensus, escrow conditions, and a human dispute path into one inspectable property-transfer workflow.",
      "problem": "Property-transfer demos often show only an automatic payment call and ignore key custody, authoritative title data, quorum assumptions, legal registration, disputes, and recovery. Learners need to see where cryptographic trust ends and institutional trust begins.",
      "learning": "You will model authentication and authorization, transaction signatures, peer validation, PoW/PoS/BFT-style consensus abstractions, contract guards, oracle provenance, clearing, settlement, and exception governance.",
      "mvp": [
        "Create buyer, seller, registrar, verifier, and dispute-reviewer roles with separate signing and authorization policies.",
        "Simulate a signed transaction moving through broadcast, peer checks, candidate-block selection, quorum decision, and final settlement.",
        "Represent property, payment, title verification, deadlines, cancellation, and dispute states in an accessible state diagram.",
        "Expose an evidence panel showing which cryptographic, consensus, contractual, and institutional claim enabled each transition."
      ],
      "stretch": [
        "Compare simplified PoW, stake-weighted, delegated, and 3f+1 BFT scenarios under offline and malicious nodes.",
        "Add transaction simulation and human-readable signing warnings for key-compromise and phishing cases.",
        "Model registry correction, court order, key recovery, and failed-payment compensation without pretending all state is irreversible.",
        "Export a governance and threat-model report linking every oracle fact and quorum assumption to an accountable owner."
      ],
      "plan": [
        "Week 1: roles, keys, transaction schema, and signed-message verification.",
        "Week 2: peer propagation, consensus scenarios, quorum evidence, and attack tests.",
        "Week 3: escrow/title state machine, oracle provenance, and dispute/recovery paths.",
        "Week 4: mobile-first visualisation, accessibility, audit export, and a complete property-transfer case study."
      ],
      "novelty": "It treats property settlement as a dual on-chain/institutional workflow and makes every trust assumption visible instead of presenting automatic execution as automatic truth.",
      "stack": ["TypeScript", "Solidity or executable pseudocode", "Mermaid or accessible HTML flow", "Vitest", "IndexedDB"],
      "milestones": ["Week 1: identity and signatures", "Week 2: consensus lab", "Week 3: settlement and governance", "Week 4: evidence-driven demo"],
      "success": "A learner can trace a transfer from signed intent to legal-state update, explain the selected quorum and fault model, and demonstrate safe handling of a false title claim or compromised signer."
    }
  },
  "ebb-6401-2026-08-19-180224": {
    "en": {
      "title": "RainSure Lab: an oracle-resilient parametric insurance simulator",
      "pitch": "Build a local-first crop-insurance workbench that combines an encoded rainfall policy, multiple simulated weather oracles, explicit freshness and quorum rules, automatic settlement, and a human-readable dispute trail.",
      "problem": "Parametric insurance demos often show only a threshold and payout. They hide sensor failure, stale data, reporter manipulation, insufficient contract funding, ambiguous policy wording, and what should happen when external evidence is disputed.",
      "learning": "You will model contract accounts and state transitions, hybrid on-chain/off-chain evidence, oracle aggregation and incentives, automated value transfer, circuit breakers, and the decision criteria that justify blockchain over a conventional database.",
      "mvp": [
        "Create policy states for quoted, funded, active, awaiting evidence, settled, refunded, disputed, paused, and closed.",
        "Simulate three rainfall reporters with configurable bias, delay, outage, signature, and reputation.",
        "Implement median/quorum aggregation, freshness checks, a rainfall threshold, payout limits, and an emergency pause.",
        "Show an evidence trail linking each oracle report, condition evaluation, state transition, payment, and refund to its source and timestamp."
      ],
      "stretch": [
        "Commit large weather evidence off-chain and verify its digest against an on-chain-style hash record.",
        "Compare a centralized signed database implementation with the ledger design using cost, correction, trust, and auditability criteria.",
        "Add staking or reputation experiments and measure the manipulation cost under reporter collusion.",
        "Export a policy, threat model, test report, and dispute packet without including personal farmer data."
      ],
      "plan": [
        "Week 1: define policy language, states, actors, funding rules, and deterministic transition tests.",
        "Week 2: implement oracle reporters, aggregation, freshness, signatures, and failure scenarios.",
        "Week 3: add settlement, refunds, pause/dispute paths, evidence commitments, and monitoring.",
        "Week 4: compare architectures, polish the accessible visual interface, and publish a reproducible evaluation."
      ],
      "novelty": "The simulator treats oracle uncertainty and failure handling as first-class contract states, making the boundary between deterministic code and uncertain real-world evidence visible.",
      "stack": ["TypeScript", "Solidity-style state machine", "Vitest", "IndexedDB", "Accessible HTML visualizations"],
      "milestones": ["Week 1: policy and state model", "Week 2: oracle network", "Week 3: settlement and recovery", "Week 4: architecture comparison"],
      "success": "A learner can demonstrate normal payout, stale-data rejection, oracle disagreement, underfunding, pause, refund, and dispute outcomes and explain whether a blockchain is justified."
    }
  },
  "ecs-6402-2026-08-21-204351": {
    "en": {
      "title": "LinkScope: an explainable wireless communication-chain simulator",
      "pitch": "Build a browser workbench that lets learners follow a message from source data through sampling, quantisation, encoding, modulation, a shared channel, demodulation, and receiver synchronization while seeing payload efficiency and failure modes.",
      "problem": "Communication concepts are often taught as separate formulas, so learners can calculate a sample or name a multiple-access scheme without seeing how one design choice affects the complete end-to-end chain.",
      "learning": "You will implement the simplified communication model, digital representation, carrier modulation, payload/overhead accounting, resource sharing, channel impairment, receiver timing, and evidence-based diagnostics.",
      "mvp": [
        "Provide selectable voice-like and synthetic source waveforms with configurable sampling rate and quantisation levels.",
        "Display sampled values, quantisation error, binary codewords, and a simple amplitude- or frequency-modulated carrier.",
        "Simulate noise, delay, and timing offset, then recover the signal and show reconstruction error and symbol mistakes.",
        "Add payload and header lengths plus TDMA/FDMA channel-sharing controls, reporting throughput, efficiency, and congestion events."
      ],
      "stretch": [
        "Add a Wireshark-inspired packet view linking waveform timing to frames, headers, and payload.",
        "Add adaptive modulation or coding that reacts to measured signal quality.",
        "Compare wired and wireless channel profiles with latency, loss, and mobility scenarios.",
        "Export a reproducible experiment card containing every signal, channel, sharing, and timing parameter."
      ],
      "plan": [
        "Week 1: implement source waveforms, sampling, quantisation, encoding, and correctness tests.",
        "Week 2: add carrier modulation, channel noise, receiver recovery, and synchronized plots.",
        "Week 3: add payload/overhead metrics, TDMA/FDMA sharing, congestion, and failure explanations.",
        "Week 4: package the mobile-first visual lab, experiment export, accessibility pass, and one Wi-Fi-style case study."
      ],
      "novelty": "The workbench makes representation, propagation, sharing, and timing one inspectable chain, so every observed error can be traced to a specific block instead of being labelled generically as a network problem.",
      "stack": ["TypeScript", "Web Audio API", "D3 or Plotly", "Web Workers", "Vitest"],
      "milestones": ["Week 1: digital representation", "Week 2: modulation and channel", "Week 3: sharing and diagnosis", "Week 4: reproducible teaching product"],
      "success": "A learner can predict and demonstrate how sampling rate, quantisation levels, overhead, sharing, noise, and clock offset change the received data and end-to-end performance."
    }
  },
  "ecs-6402-2026-08-27-203455": {
    "en": {
      "title": "LinkSteward: an explainable reliable-transfer policy lab",
      "pitch": "Build a browser simulator that sends framed data across noisy links and lets a learner tune duplex mode, checksum, retransmission, flow-control window, route, compression, and medium while observing goodput, delay, errors, and cost.",
      "problem": "Networking learners often study reliability, rate control, routing, and physical signals in isolation. This hides how a decision that improves one metric can overload a receiver, increase latency, expose data, or waste scarce bandwidth.",
      "learning": "You will implement exchange management, simplex/duplex modes, framing, error detection, retransmission, receiver flow control, addressing, path metrics, line coding, noisy-channel detection, SNR, multiplexing, and evidence-based trade-offs.",
      "mvp": [
        "Generate addressed frames from text, encode them as a simple NRZ waveform, and pass them through a configurable noisy channel.",
        "Implement a 16-bit checksum plus discard/retransmit, showing which corruptions are detected and how retries affect goodput.",
        "Model a finite receiver buffer and compare stop-and-wait with a configurable sliding window under several sender and processor rates.",
        "Offer wired, fibre, and wireless profiles plus route choices, then report latency, loss, SNR, capacity use, and cost for every run."
      ],
      "stretch": [
        "Add CRC variants and compare undetected-error probability with checksum overhead.",
        "Add a matched-filter detector and plot empirical bit-error rate against SNR.",
        "Introduce compression and multiple users, measuring fairness and head-of-line blocking.",
        "Export a signed experiment card that records every medium, route, buffer, coding, and recovery assumption."
      ],
      "plan": [
        "Week 1: frames, addresses, duplex modes, waveform display, and channel noise.",
        "Week 2: checksum, retransmission, receiver buffering, and flow-control policies.",
        "Week 3: routing metrics, medium profiles, compression, multiplexing, and security flags.",
        "Week 4: mobile-first visualisation, experiment export, accessibility, tests, and one end-to-end case study."
      ],
      "novelty": "The lab makes control-plane rules and physical-layer evidence visible in one trace, so a learner can identify whether failure came from corruption, overload, route choice, signal quality, or an incompatible exchange rule.",
      "stack": ["TypeScript", "D3 or Plotly", "Web Workers", "Vitest", "IndexedDB"],
      "milestones": ["Week 1: signal path", "Week 2: reliable transfer", "Week 3: policy trade-offs", "Week 4: evidence-driven teaching product"],
      "success": "A learner can reproduce a transfer, distinguish error control from flow control, explain the selected route and medium, and demonstrate how SNR, buffer size, window, compression, and retransmission change goodput and delay."
    }
  },
  "ecs-6402-2026-08-28-203443": {
    "en": {
      "title": "PathScope: an explainable network-delay and protocol trade-off lab",
      "pitch": "Build a browser workbench that models hosts, switches, routers, links, packetisation, queues, and protocol overhead, then explains why a selected path achieves its measured latency and goodput.",
      "problem": "Network tools commonly report one latency or throughput number without showing whether processing, queueing, serialisation, propagation, packet size, or reliability overhead caused the result.",
      "learning": "You will implement packet and circuit switching, LAN/WAN topology, routing, the four nodal delays, message segmentation, control overhead, X.25-style hop reliability, and Frame-Relay-style reduced overhead.",
      "mvp": [
        "Let learners draw endpoints, switches, routers, and links with configurable rate, distance, propagation speed, processing time, and queue policy.",
        "Split a message into packets and animate receive-decide-forward behaviour across one or more candidate paths.",
        "Calculate processing, queueing, transmission, propagation, total delay, payload efficiency, and goodput for every hop and packet.",
        "Compare circuit setup, datagram forwarding, heavy per-hop reliability, and reduced-overhead frame service using the same traffic trace."
      ],
      "stretch": [
        "Replay a privacy-scrubbed packet trace and fit model parameters to observed timing.",
        "Add route changes and demonstrate reordering when packets traverse paths with unequal delay.",
        "Simulate burst traffic and compare FIFO, priority, and fair queueing.",
        "Export a reproducible evidence card containing topology, formulas, assumptions, events, and results."
      ],
      "plan": [
        "Week 1: topology editor, packet model, route selection, and deterministic unit tests.",
        "Week 2: four-delay engine, queues, animation, and per-hop evidence panels.",
        "Week 3: switching modes, reliability overhead, loss/retry, and goodput comparison.",
        "Week 4: trace import, accessibility, mobile polish, experiment export, and case studies."
      ],
      "novelty": "PathScope treats every latency observation as an explainable sum of mechanisms and allows old and modern reliability assumptions to be compared on an identical topology.",
      "stack": ["TypeScript", "SVG or D3", "Web Workers", "Vitest", "IndexedDB"],
      "milestones": ["Week 1: network model", "Week 2: delay evidence", "Week 3: protocol trade-offs", "Week 4: reproducible learning product"],
      "success": "A learner can predict total delay, identify its dominant component, explain a route decision, and show when reliability overhead raises or lowers delivered goodput."
    }
  },
  "ecs-6401-2026-08-28-180221": {
    "en": {
      "title": "ForecastPrep: an auditable time-series transformation lab",
      "pitch": "Build a local-first workbench that lets a learner compare missing-value treatments, outlier policies, scaling, power transformations, moving averages, and exponential-smoothing forecasts without overwriting the raw series.",
      "problem": "Forecast pipelines often hide data repairs and transformations inside notebooks. This makes leakage, erased shocks, and mismatched smoothing assumptions difficult to detect or reproduce.",
      "learning": "Practise temporal imputation, outlier triage, stationarity diagnostics, leakage-safe scaling, Box–Cox selection, moving-average lag, and level/trend/seasonal exponential smoothing.",
      "mvp": [
        "Upload a timestamped CSV and preserve an immutable raw view beside every derived series.",
        "Compare forward/backward fill, interpolation, and seasonal imputation while marking each synthetic value.",
        "Apply min–max, z-score, log, square-root, and Box–Cox transformations using training-window parameters only.",
        "Fit simple, weighted, and centred moving averages plus simple/Holt/Holt–Winters forecasts, then report rolling-origin error."
      ],
      "stretch": [
        "Add an event register that protects known shocks from automatic outlier removal.",
        "Detect leakage when a transform or imputer is fitted outside the training window.",
        "Recommend additive versus multiplicative seasonality from level-amplitude diagnostics but require user confirmation.",
        "Export a reproducible transformation card with parameters, source hashes, plots, and validation metrics."
      ],
      "plan": [
        "Week 1: immutable series store, profiling, gaps, and outlier review.",
        "Week 2: leakage-safe transformations and stationarity comparison.",
        "Week 3: moving-average and exponential-smoothing model gallery.",
        "Week 4: rolling validation, evidence export, accessibility, and demo."
      ],
      "novelty": "The product treats every preprocessing and smoothing decision as inspectable evidence, keeping raw observations, fitted parameters, and forecast impact connected.",
      "stack": ["Python", "pandas", "scikit-learn", "statsmodels", "Plotly", "Streamlit"],
      "milestones": ["Week 1: data evidence", "Week 2: transformation audit", "Week 3: forecasting gallery", "Week 4: validation and export"],
      "success": "A reviewer can reproduce every derived value, verify that no future data informed preprocessing, and explain why the selected model includes level, trend, or seasonality."
    }
  },
  "eai-6401-2026-09-01": {
    "en": {
      "title": "MDP Sketchbook: a state-and-reward audit lab",
      "pitch": "Build a small interactive workbench where a learner specifies states, legal actions, reward outcomes, and transition probabilities for a recycling robot, then simulates trajectories and checks whether the state is Markov and the reward communicates the intended goal.",
      "problem": "RL projects often jump to an algorithm before checking whether the state omits relevant history, the action set is legal, or the reward encourages a shortcut. A transparent audit makes those modelling choices visible.",
      "learning": "You will formalize the agent–environment interface, implement finite MDP dynamics, marginalise next-state probabilities, compare immediate and delayed outcomes, and reason about reward design and context-conditioned actions.",
      "mvp": [
        "Create a form for high/low battery states, search/wait/recharge actions, reward values, and alpha/beta transition probabilities.",
        "Render the model as a transition table and an accessible state graph.",
        "Simulate random and hand-written policies and show trajectories, rewards, and next-state frequencies.",
        "Flag illegal actions, probabilities that do not sum to one, and state variables that the learner says are relevant but did not include."
      ],
      "stretch": [
        "Add a contextual-bandit mode that reveals a case indicator and compares hidden versus observed-context policies.",
        "Add delayed-return and discount-factor controls with a side-by-side explanation of credit assignment.",
        "Export a Gymnasium environment skeleton and a reproducible modelling card.",
        "Add counterexamples showing reward hacking when a proxy reward is easier to optimise than the stated goal."
      ],
      "plan": [
        "Week 1: define the state/action/reward schema, validators, and deterministic trajectory format.",
        "Week 2: implement the transition table, graph, simulator, and probability checks.",
        "Week 3: add Markov-sufficiency prompts, contextual-bandit comparison, and delayed-return visualisations.",
        "Week 4: package the accessible audit report, tests, export format, and a recycling-robot case study."
      ],
      "novelty": "The lab makes MDP formulation itself inspectable: it tests state sufficiency, reward intent, and transition consistency before an RL algorithm is selected.",
      "stack": ["Python", "Gymnasium", "NetworkX", "Plotly", "Streamlit"],
      "milestones": ["Week 1: schema and validators", "Week 2: table, graph, and simulation", "Week 3: Markov/context/delay checks", "Week 4: export and case study"],
      "success": "A learner can explain every state, action, reward, and probability in the model, reproduce a trajectory, and identify one formulation that fails because its state or reward is inadequate."
    }
  },
  "eai-6401-2026-09-07-180458": {
    "en": {
      "title": "ReturnLab: an episodic-to-continuing value explorer",
      "pitch": "Build an interactive RL laboratory that lets learners define reward streams, compare episodic and continuing returns, and inspect how policies and Bellman backups turn immediate outcomes into value estimates.",
      "problem": "Students can memorise return and value equations without seeing why terminal boundaries, discounting, transition probabilities, and reward design change the policy a learner should prefer.",
      "learning": "You will implement discounted and undiscounted returns, state/action values, policy-weighted expectations, recycling-robot transitions, and Bellman-style one-step backups.",
      "mvp": [
        "Provide editors for reward streams, terminal conditions, discount factor, states, actions, and transition probabilities.",
        "Render episodic and continuing return calculations with a clear time-indexed trace.",
        "Simulate the high/low-battery recycling robot and compare policies using expected return.",
        "Show each Bellman backup as immediate reward plus discounted successor value, with accessible text explanations."
      ],
      "stretch": [
        "Add reward-hacking counterexamples and a reward-audit checklist.",
        "Compare policy evaluation under deterministic and stochastic transitions.",
        "Export a Gymnasium environment and a reproducible experiment card.",
        "Add a student mode that asks learners to predict the best action before revealing the backup."
      ],
      "plan": [
        "Week 1: implement reward streams, terminal boundaries, return formulas, and unit tests.",
        "Week 2: add states, actions, transition probabilities, and the recycling-robot simulator.",
        "Week 3: implement policy/value displays and animated Bellman backups.",
        "Week 4: add accessibility, export, reward-audit scenarios, and a concise evaluation report."
      ]
    }
  },
  "eai-6401-2026-09-08-180828": {
    "en": {
      "title": "BellmanBoard: an optimal-policy visualizer",
      "pitch": "Build an accessible gridworld and recycling-robot simulator that lets learners compare policy evaluation, Bellman expectation, and Bellman optimality backups step by step.",
      "problem": "Value-function equations are easy to manipulate mechanically but hard to connect to concrete transitions, rewards, and action choices.",
      "learning": "Implement state/action values, policy-weighted expectations, optimal actions, transition probabilities, and recursive backups with source-linked explanations.",
      "mvp": ["Define a small gridworld with rewards and terminal states.", "Render vπ(s), qπ(s,a), and optimal values for a selected policy.", "Animate Bellman backups and expose each reward, probability, and successor value.", "Add a high/low-battery recycling-robot scenario with legal-action checks."],
      "stretch": ["Compare deterministic and stochastic transitions.", "Add discount-factor and reward-hacking experiments.", "Export a Gymnasium-compatible environment and experiment card."],
      "plan": ["Week 1: state/action schema and gridworld.", "Week 2: policy evaluation and Bellman expectation.", "Week 3: optimality backups and recycling robot.", "Week 4: accessibility, export, tests, and case study."]
    }
  },
  "eai-6401-2026-09-14-180423": {
    "en": {
      "title": "BackupBench: a transparent dynamic-programming lab",
      "pitch": "Build an accessible local-first gridworld and recycling-robot lab that lets learners compare Bellman optimality, policy evaluation, policy improvement, and approximation under explicit resource limits.",
      "problem": "Bellman equations are often memorised as symbols without showing how discounting, transition cycles, update order, and stopping thresholds change the resulting policy.",
      "learning": "You will implement legal actions, stochastic transitions, immediate rewards, discounted backups, fixed-policy evaluation, greedy improvement, and coverage-aware error checks for a small finite MDP.",
      "mvp": [
        "Create a 4×4 gridworld with terminal cells, reward −1 transitions, and a configurable random policy.",
        "Implement two-array and in-place policy evaluation with a visible theta stopping criterion.",
        "Add a recycling-robot mode with high/low battery states, search/wait/recharge actions, alpha/beta transitions, and policy comparison across gamma values.",
        "Render each backup as an accessible explanation of state, action, reward, probability, successor value, and selected maximum."
      ],
      "stretch": [
        "Compare exact and approximate policies on frequently visited versus rare safety-critical states.",
        "Add a five-step periodic reward state and verify V*(A)=10/(1−gamma^5) against simulated returns.",
        "Export a reproducible experiment card containing the MDP, gamma, theta, update mode, sweep count, and error summary."
      ],
      "plan": [
        "Week 1: define the MDP schema, terminal rules, reward table, and transition tests.",
        "Week 2: implement policy evaluation, in-place/two-array modes, theta stopping, and value-table visualisation.",
        "Week 3: add Bellman optimality, greedy policy improvement, recycling-robot scenarios, and gamma comparisons.",
        "Week 4: add approximation coverage analysis, accessibility, experiment export, and validation fixtures."
      ],
      "novelty": "The lab makes both the mathematics and the computational budget inspectable: a learner can see exactly which backup changed a value and which states were covered by an approximation.",
      "stack": ["TypeScript", "HTML Canvas or SVG", "Vitest", "Gymnasium-compatible JSON experiment format"],
      "milestones": ["Week 1: valid finite MDP", "Week 2: policy evaluation", "Week 3: optimality and recycling robot", "Week 4: approximation and accessible export"],
      "success": "A learner can explain why gamma changes policy choice, reproduce the gridworld value sweep, distinguish evaluation from improvement, and report approximation limits with explicit evidence."
    }
  },
  "eai-6401-2026-09-15-180436": {
    "en": {
      "title": "SafePolicy Lab — an auditable policy-iteration workbench",
      "pitch": "Build an accessible local-first simulator that compares policy evaluation, greedy improvement, policy iteration, and model-free learning while exposing reward and constraint assumptions.",
      "problem": "RL demos often show a final policy without revealing how value updates, action alternatives, stopping thresholds, or unintended reward-seeking behaviours shaped it.",
      "learning": "You will implement Bellman expectation backups, q-values, theta stopping, greedy improvement, policy stability, terminal handling, wall collisions, and a transparent model-free comparison.",
      "mvp": [
        "Create a small gridworld with terminal states, wall collisions, configurable rewards, gamma, and random or deterministic policies.",
        "Render each policy-evaluation sweep with V(s), action probabilities, successor values, delta, and the theta stopping decision.",
        "Implement q_pi(s,a), greedy policy improvement, and a policy-stable flag with tests for equivalent and improved policies.",
        "Add a synthetic model-free mode and a constraint panel that records what the agent may not do even when a reward signal is exploitable."
      ],
      "stretch": [
        "Compare in-place and two-array evaluation and plot convergence under different theta values.",
        "Add a reward-hacking scenario and show how objective and constraint changes alter the learned behaviour.",
        "Export an accessible experiment card with source timecodes, transition rules, policy versions, and coverage limits."
      ],
      "plan": [
        "Week 1: define state, action, transition, reward, terminal, and constraint schemas.",
        "Week 2: implement Bellman evaluation, wall/terminal tests, delta, and theta stopping.",
        "Week 3: add q-values, greedy improvement, policy iteration, and convergence views.",
        "Week 4: add model-free comparison, reward-hacking safeguards, accessibility, and evidence export."
      ],
      "novelty": "The workbench makes the full reasoning loop inspectable and places objective constraints beside value updates, so learners can distinguish optimality under a model from acceptable behaviour in a deployment.",
      "stack": ["TypeScript", "Accessible HTML", "SVG", "Vitest"],
      "milestones": ["Week 1: MDP and constraint schema", "Week 2: policy evaluation", "Week 3: improvement and iteration", "Week 4: model-free comparison and audit export"],
      "success": "A learner can reproduce one value sweep, explain a greedy action with q_pi(s,a), identify why policy iteration stopped, and state one limitation of the reward or model assumptions."
    }
  },
  "ebb-6403-2026-08-29-053554": {
    "en": {
      "title": "CipherLens: an adversary-aware cryptography learning lab",
      "pitch": "Build a local-first visual workbench that encrypts the same message with shift, substitution, transposition, one-time-pad, and modern authenticated-encryption examples, then lets a learner attack each construction under explicit threat models.",
      "problem": "Learners often mistake unreadable ciphertext or a large nominal key space for security. They need a safe environment that reveals statistical leakage, key-reuse failures, partial-message inference, and the difference between correctness, computational security, and perfect secrecy.",
      "learning": "You will implement reversible cipher rules, visualize key spaces and frequency distributions, model ciphertext-only/known-plaintext/chosen-input attackers, demonstrate one-time-pad reuse, and connect Shannon secrecy to posterior belief.",
      "mvp": [
        "Provide educational shift, substitution, and transposition implementations with step-by-step inverse operations.",
        "Plot plaintext and ciphertext frequencies, repeated patterns, and attack candidates without uploading learner text.",
        "Implement binary one-time-pad encryption and a controlled pad-reuse demonstration that exposes XOR relationships.",
        "Represent each experiment with a stated attack model, protected asset, attacker knowledge, success criterion, and result."
      ],
      "stretch": [
        "Add a Bayesian panel showing how ciphertext changes posterior odds for a two-message domain.",
        "Compare historical stream-cipher bias with a current authenticated-encryption API while clearly prohibiting obsolete algorithms in production.",
        "Add property tests for D_k(E_k(x)) = x, nonce uniqueness, tamper detection, and key destruction.",
        "Export an accessible lab report with formulas, plots, threat-model assumptions, and standards references."
      ],
      "plan": [
        "Week 1: implement classical ciphers, inverse rules, fixtures, and correctness tests.",
        "Week 2: add frequency analysis, key-space exploration, and pattern visualizations.",
        "Week 3: build one-time-pad, reuse, attack-model, and posterior-belief experiments.",
        "Week 4: add a modern authenticated-encryption comparison, accessibility, evidence export, and security review."
      ],
      "novelty": "The lab evaluates what an attacker can infer rather than celebrating ciphertext appearance, linking classical attacks, partial leakage, and formal secrecy in one inspectable experiment record.",
      "stack": ["TypeScript", "Web Crypto API", "D3 or Plotly", "Vitest", "IndexedDB"],
      "milestones": ["Week 1: correctness", "Week 2: statistical attacks", "Week 3: secrecy experiments", "Week 4: modern comparison and evidence"],
      "success": "A learner can explain why each historical cipher fails, demonstrate the operational conditions of a one-time pad, state an attack model precisely, and distinguish computational difficulty from perfect secrecy."
    }
  },
  "ebb-6401-2026-08-24-180004": {
    "en": {
      "title": "LedgerFlow: an industry smart-contract settlement lab",
      "pitch": "Build a local-first simulator for a syndicated loan or delivery-payment workflow that makes parties, conditions, oracle evidence, account authorization, settlement, timeout, dispute, and refund states visible.",
      "problem": "Teams often demonstrate a successful transaction while hiding the harder questions: who can act, which external facts are trusted, what happens when evidence is late or wrong, and whether a blockchain is actually simpler than a signed database.",
      "learning": "You will translate industry requirements into a state machine, compare UTXO-style value flow with account-based invocation, model EOA signatures and contract execution, and test oracle and governance failure paths.",
      "mvp": [
        "Define participants, terms, evidence, roles, timeouts, and settlement outcomes for one financial or supply-chain case.",
        "Render an accessible state graph covering draft, approved, evidence-pending, settled, disputed, refunded, and failed states.",
        "Implement a mock oracle and signed EOA requests, then validate role checks, replay protection, stale data, and amount limits.",
        "Compare the simulated blockchain workflow with a conventional database plus audit log using cost, trust, privacy, and correction criteria."
      ],
      "stretch": [
        "Add multiple oracle reporters, aggregation, freshness windows, and an emergency pause controlled by explicit governance.",
        "Export a reproducible experiment card with state transitions, test evidence, assumptions, and a decision on blockchain fit.",
        "Add a hybrid-storage path that keeps sensitive documents off-chain and verifies them with content commitments."
      ],
      "plan": [
        "Week 1: choose the case, interview the workflow, and specify actors, conditions, evidence, and exception states.",
        "Week 2: implement the state machine, account/role model, signed requests, and deterministic settlement tests.",
        "Week 3: add oracle failure, stale evidence, timeout, dispute, refund, and privacy scenarios with an accessible visualisation.",
        "Week 4: benchmark the blockchain and database alternatives, document assumptions, and present the evidence-backed recommendation."
      ],
      "novelty": "The project treats blockchain selection and smart-contract design as one auditable socio-technical decision instead of equating a successful transaction with a successful system.",
      "stack": ["Solidity", "Remix", "JavaScript", "Mermaid or SVG", "Vitest"],
      "milestones": ["Week 1: workflow and threat model", "Week 2: state machine and authorization", "Week 3: oracle and exception tests", "Week 4: fit comparison and demo"],
      "success": "A reviewer can follow every settlement and failure path, verify that only authorized accounts can invoke actions, see how external evidence is trusted, and understand why the chosen architecture fits the case."
    }
  },
  "ebb-6401-2026-09-02-180427": {
    "en": {
      "title": "CertiChain: an auditable certificate-verification workflow",
      "pitch": "Build a local-first certificate system that makes issuer authorization, hash commitments, IPFS retrieval, verification, revocation, and failure states visible end to end.",
      "problem": "Certificate demos often show only a successful lookup. Learners need to reason about mismatched documents, revoked credentials, unavailable storage, stale interfaces, and the difference between a valid signature and a trustworthy institutional process.",
      "learning": "You will translate a certificate workflow into a state machine, implement Solidity issue/verify/revoke paths, connect a wallet-backed interface, and compare on-chain commitments with off-chain document storage.",
      "mvp": [
        "Model issuer, requester, verifier, certificate metadata, and explicit valid, mismatched, revoked, missing, and unavailable states.",
        "Implement a small Solidity contract with role checks, issue/verify/revoke functions, events, and tests for unauthorized and replayed calls.",
        "Store a sample certificate payload in a local content-addressed store, record only its identifier and hash on-chain, and demonstrate an integrity check.",
        "Render an accessible dashboard that shows the wallet action, contract response, retrieved payload, and a clear explanation when verification fails."
      ],
      "stretch": [
        "Add key rotation, issuer suspension, replacement certificates, and a governance-controlled emergency pause with an audit trail.",
        "Compare IPFS pinning and a conventional object store on availability, privacy, correction, cost, and retention requirements.",
        "Export a reproducible verification report containing source hash, contract address, block reference, retrieval result, revocation state, and test evidence."
      ],
      "plan": [
        "Week 1: interview the certificate workflow, define roles and states, and write threat and privacy assumptions.",
        "Week 2: implement the contract, events, access-control checks, and unit tests in Remix or a local toolchain.",
        "Week 3: connect the dashboard and content-addressed storage, then test mismatch, missing, revoked, and unavailable-document paths.",
        "Week 4: evaluate blockchain fit against a signed database alternative, add accessibility and evidence export, and present the trade-off decision."
      ],
      "novelty": "The project evaluates certificate integrity, availability, authorization, and institutional governance together instead of treating a matching hash as proof of truth.",
      "stack": ["Solidity", "Remix", "JavaScript", "IPFS or a local content-addressed store", "Mermaid or SVG", "Vitest"],
      "milestones": ["Week 1: workflow and threat model", "Week 2: contract and tests", "Week 3: dashboard and failure states", "Week 4: fit comparison and evidence report"],
      "success": "A reviewer can issue, verify, revoke, and replace a sample certificate; distinguish authorization from integrity and availability; inspect every failure state; and justify whether the blockchain architecture is appropriate."
    }
  },
  "ebb-6401-2026-09-09-180136": {
    "en": {
      "title": "StateScope: an Ethereum account-state explorer",
      "pitch": "Build an accessible local-first explorer that explains how a wallet signature becomes an Ethereum account-state transition.",
      "problem": "Learners often confuse wallets, addresses, public keys, private keys, and on-chain assets, making it difficult to reason about what an explorer actually proves.",
      "learning": "You will model hot/cold wallet risk, signed transactions, EOAs, contract accounts, and the nonce, balance, storage-root, and code-hash fields of world state.",
      "mvp": [
        "Create a mock EOA and contract account with clearly labelled address, nonce, balance, storage root, and code hash fields.",
        "Render a transaction flow from intent and signature through validation, block inclusion, and updated state.",
        "Add explorer-style lookup by address, transaction hash, block, and contract with a clear evidence boundary.",
        "Demonstrate rejection for an invalid signature, stale nonce, failed policy condition, and unavailable off-chain payload."
      ],
      "stretch": [
        "Add a cold-chain delivery rule whose payment transition depends on a signed temperature observation.",
        "Compare a public explorer record with a conventional database record and document what each can and cannot prove.",
        "Export an accessible state-diff report showing before/after fields, source time, and validation outcome."
      ],
      "plan": [
        "Week 1: define account schemas, key boundaries, threat assumptions, and evidence claims.",
        "Week 2: implement mock signing, nonce checks, account transitions, and negative tests.",
        "Week 3: build the explorer views and keyboard/screen-reader labels.",
        "Week 4: add the policy rule, state-diff export, and integrity-versus-availability comparison."
      ],
      "novelty": "The capstone makes the wallet/network boundary and the limits of explorer evidence visible instead of treating a wallet as a coin container.",
      "stack": ["JavaScript", "Web Crypto API or test doubles", "Mermaid or SVG", "Vitest"],
      "milestones": ["Week 1: account and threat model", "Week 2: state transitions", "Week 3: explorer and accessibility", "Week 4: policy and evidence report"],
      "success": "A reviewer can trace a signed action into updated account fields, distinguish EOA from contract control, inspect rejected transitions, and explain why a matching hash does not guarantee availability or truth."
    }
  },
  "ebb-6401-2026-09-14-180946": {
    "en": {
      "title": "NonceGuard: an explainable Ethereum transaction-state simulator",
      "pitch": "Build a local-first simulator that shows how an account nonce, signature, gas outcome, and EVM execution determine whether a transaction changes world state.",
      "problem": "Learners often treat a signed transaction as automatically valid and confuse nonce order, replay protection, reverted state, and gas consumption.",
      "learning": "You will model EOA and contract-account state, signed transaction fields, nonce sequencing, replay rejection, gas accounting, EVM outcomes, and finality evidence.",
      "mvp": [
        "Create mock EOA and contract accounts with nonce, balance, storage-root, and code-hash fields.",
        "Simulate a valid transaction, a reused-nonce replay, and a transaction whose signed field was modified.",
        "Show successful state updates beside failed state reverts, while keeping consumed gas visible.",
        "Render an accessible before/after state timeline that separates consensus acceptance from finality assurance."
      ],
      "stretch": [
        "Add a small contract rule that can fail on invalid input or a business-rule violation.",
        "Compare simple Ether transfer cost with a computationally heavier contract interaction.",
        "Export a reproducible transaction-evidence report with nonce, signature result, gas, state diff, and finality status."
      ],
      "plan": [
        "Week 1: define account fields, transaction schema, nonce rules, and failure states.",
        "Week 2: implement signature checks, replay rejection, state updates, reverts, and gas accounting.",
        "Week 3: build the EOA/contract state explorer with keyboard and screen-reader support.",
        "Week 4: add finality evidence, complexity comparison, tests, and a short architecture report."
      ],
      "novelty": "The project makes the boundaries between authorization, transaction ordering, execution, gas, state change, and finality visible in one small teaching artifact.",
      "stack": ["JavaScript", "Web Crypto API or test doubles", "Mermaid or SVG", "Vitest"],
      "milestones": ["Week 1: account and transaction model", "Week 2: validation and state transitions", "Week 3: accessible explorer", "Week 4: evidence and fit report"],
      "success": "A reviewer can distinguish a valid transaction from a replay or modified-signature copy, trace success and failure state outcomes, account for gas, and explain what finality adds after consensus."
    }
  },
  "ebb-6401-2026-09-07-183334": {
    "en": {
      "title": "Lifecycle Ledger: an auditable contract workflow",
      "pitch": "Build a small local-first dashboard that makes every smart-contract lifecycle transition, actor, evidence item, and retention decision visible.",
      "problem": "A successful transaction does not explain who approved it, what was executed, how the record can be retrieved, or why a contract was renewed or disposed.",
      "learning": "You will model request, construction, approval, execution, records management, search, audit, renewal, and disposal as explicit states with safe failure paths.",
      "mvp": [
        "Implement a state machine with role checks, request identifiers, timestamps, and idempotent transitions.",
        "Emit events for construction, approval, execution, retrieval, audit, renewal, and disposal.",
        "Render an accessible timeline showing the actor, evidence, policy check, and reason for every transition.",
        "Demonstrate missing-field, unauthorized-approval, duplicate-request, and premature-disposal failures."
      ],
      "stretch": [
        "Add retention-policy evaluation, legal hold, renewal versions, and a governance-controlled correction path.",
        "Export a signed audit report that links each state transition to its source evidence.",
        "Compare the workflow with a conventional database and explain when blockchain adds value."
      ],
      "plan": [
        "Week 1: define actors, states, evidence, identifiers, and retention assumptions.",
        "Week 2: implement transitions, events, authorization checks, and negative tests.",
        "Week 3: build the search and audit dashboard with keyboard and screen-reader support.",
        "Week 4: add renewal/disposal policy checks, export evidence, and present the architecture trade-offs."
      ],
      "novelty": "The capstone treats records, retrieval, and policy-driven closure as first-class parts of smart-contract engineering.",
      "stack": ["Solidity", "Remix", "JavaScript", "Mermaid or SVG", "Vitest"],
      "milestones": ["Week 1: lifecycle model", "Week 2: contract and tests", "Week 3: evidence dashboard", "Week 4: governance and fit report"],
      "success": "A reviewer can trace a request from construction through approval and execution, locate its evidence, observe safe failures, and justify renewal or disposal decisions."
    }
  },
  "ecs-6401-2026-09-02-180510": {
    "en": {
      "title": "Stationarity Studio: an explainable forecast-diagnostics lab",
      "pitch": "Build a local-first notebook-to-dashboard tool that lets a learner generate, diagnose, transform, and forecast a time series while preserving every plot, test decision, and assumption.",
      "problem": "Forecasting failures are often caused by non-stationarity, seasonal effects, leakage, or an unjustified AR order rather than by an exotic algorithm. Learners need to see those failure modes before trusting a forecast.",
      "learning": "You will implement rolling statistics, ADF checks, first and seasonal differencing, additive versus multiplicative decomposition, moving averages, ACF/PACF diagnostics, and a small Yule–Walker solver.",
      "mvp": [
        "Generate trend, seasonal, and noise components with a fixed random seed and show the raw series.",
        "Plot rolling mean/variance, run ADF, and let the learner compare original, first-differenced, and seasonal-differenced data.",
        "Provide additive and multiplicative decomposition with an explanation of the amplitude assumption.",
        "Fit AR(1) and AR(2), display ACF/PACF, solve an AR(2) Yule–Walker example, and evaluate chronologically."
      ],
      "stretch": [
        "Add structural-break and changing-variance scenarios with warnings when ADF and plots disagree.",
        "Compare moving-average windows and quantify smoothing lag around turning points.",
        "Export an accessible experiment card containing source time range, transformations, diagnostics, coefficients, and future-test metrics."
      ],
      "plan": [
        "Week 1: implement deterministic series generation, plots, rolling statistics, and data-quality checks.",
        "Week 2: add ADF, differencing, seasonal adjustment, and decomposition comparisons.",
        "Week 3: implement ACF/PACF, AR(1)/AR(2), and Yule–Walker matrix solving with tests.",
        "Week 4: add chronological evaluation, accessibility, export, and a report on one deliberately non-stationary case."
      ],
      "novelty": "The lab treats diagnostics and modelling assumptions as first-class, inspectable outputs instead of hiding them behind one forecast line.",
      "stack": ["Python", "pandas", "statsmodels", "matplotlib", "Jupyter or Streamlit"],
      "milestones": ["Week 1: reproducible series and plots", "Week 2: transformations", "Week 3: AR/Yule–Walker", "Week 4: evaluation and evidence export"],
      "success": "A learner can explain why a series is or is not stationary, justify a transformation and AR order with evidence, reproduce the coefficients, and evaluate the forecast without temporal leakage."
    }
  },
  "ecc-6404-2026-09-07-193559": {
    "en": {
      "title": "MetricLab: a proximity-measure comparison studio",
      "pitch": "Build an accessible experiment tool that lets learners compare distance and similarity measures on nominal, ordinal, numeric, binary, text, and mixed data.",
      "problem": "A single default metric can make sparse, mixed, scaled, or correlated objects appear deceptively close or far apart.",
      "learning": "You will implement min–max transformations, Minkowski distances, SMC, Jaccard, cosine, correlation, Mahalanobis distance, and weighted heterogeneous aggregation.",
      "mvp": [
        "Generate small fixtures for nominal, ordinal, numeric, binary, and sparse document data.",
        "Render side-by-side formulas, pairwise matrices, and an explanation of what each metric treats as evidence.",
        "Add missing-value and asymmetric-attribute indicators plus adjustable weights for mixed objects.",
        "Test symmetry, zero self-distance, scale sensitivity, and the effect of shared zeros."
      ],
      "stretch": [
        "Add correlated features and compare Euclidean with Mahalanobis distance after covariance estimation.",
        "Provide an accessible nearest-neighbour ranking with a rationale for every score.",
        "Export a reproducible metric-selection report containing data types, transformations, weights, and caveats."
      ],
      "plan": [
        "Week 1: define data fixtures, semantics, and evaluation questions.",
        "Week 2: implement numeric, binary, cosine, correlation, and ordinal measures.",
        "Week 3: add mixed-attribute indicators, weights, visual comparison, and accessibility.",
        "Week 4: evaluate rankings, document trade-offs, and export the report."
      ],
      "novelty": "The project treats metric choice as an explicit, inspectable modelling decision rather than a hidden library default.",
      "stack": ["JavaScript", "SciPy or scikit-learn reference checks", "SVG", "Vitest"],
      "milestones": ["Week 1: fixtures and semantics", "Week 2: core metrics", "Week 3: mixed data and UI", "Week 4: evaluation report"],
      "success": "A reviewer can explain why two objects rank differently under SMC, Jaccard, cosine, Euclidean, and correlation, and can reproduce a weighted mixed-attribute result."
    }
  },
  "ecc-6404-2026-09-02-193120": {
    "en": {
      "title": "PrepLens: a task-aware data preprocessing workbench",
      "pitch": "Build a local-first lab that lets a learner compare discretization, binary encodings, category reduction, scaling, and similarity measures on one transparent dataset.",
      "problem": "Preprocessing choices can silently change the geometry and meaning of a dataset. A small evidence-driven workbench makes those trade-offs visible before a mining algorithm is trusted.",
      "learning": "You will implement interval binning, ordinal and one-hot encodings, rare-category grouping, normalization, and distance comparisons while documenting task and domain assumptions.",
      "mvp": [
        "Create a reproducible mixed-type dataset with numeric, ordinal, nominal, and asymmetric binary attributes.",
        "Render side-by-side discretization and binary encodings, including interval boundaries, category mappings, and a warning about spurious bit relationships.",
        "Compare raw and normalized distances for nearest-neighbour and anomaly examples, with an accessible explanation of which feature dominates and why.",
        "Export a transformation trail containing parameters, rationale, sample rows, and before/after similarity results."
      ],
      "stretch": [
        "Add stratified evaluation to show how rare categories can disappear when categories are reduced or sampling is careless.",
        "Add a reversible pipeline and a reviewer checklist that tests semantic validity, leakage, and reproducibility."
      ],
      "plan": [
        "Week 1: define the dataset, task questions, attribute types, and reproducible fixtures.",
        "Week 2: implement discretization, ordinal coding, one-hot encoding, and rare-category grouping.",
        "Week 3: add transformations, mixed-type distances, nearest-neighbour and anomaly demonstrations.",
        "Week 4: add visual evidence export, accessibility, evaluation, and a written preprocessing decision record."
      ],
      "novelty": "The workbench treats preprocessing as an inspectable modelling decision: each representation is paired with its semantic assumptions and its effect on downstream proximity.",
      "stack": ["Python", "pandas", "scikit-learn", "Jupyter", "Mermaid or SVG"],
      "milestones": ["Week 1: data and task design", "Week 2: encodings", "Week 3: transformations and distances", "Week 4: evidence export and review"],
      "success": "A reviewer can reproduce every transformation, explain why the encoding fits the task, see how scale changes neighbours, and identify when a compact representation would mislead a mining algorithm."
    }
  },
  "ebb-6402-2026-09-01-180239": {
    "en": {
      "title": "AML GraphLens — an evidence-aware financial-crime triage lab",
      "pitch": "Build a synthetic transaction-graph workbench that teaches learners to connect placement, layering, and integration signals with FATF-aligned controls, model scores, and accountable human review.",
      "problem": "AML/CFT teams must connect transactions, identities, counterparties, time, and jurisdiction without treating an alert or model score as proof of wrongdoing. A small transparent lab can expose how weak evidence, privacy leakage, and cross-border gaps distort triage.",
      "learning": "You will model laundering stages, terrorism-financing patterns, graph evidence, risk-based controls, data preparation, classifier-assisted prioritisation, and the governance needed to interpret alerts responsibly.",
      "mvp": [
        "Generate synthetic accounts, merchants, charities, brokers, transfers, deposits, and asset purchases with reproducible seeds.",
        "Render a graph and timeline that lets a learner trace placement, layering, and integration hypotheses without exposing real customer data.",
        "Compare rule-based alerts with a simple random-forest or gradient-boosting baseline using precision, recall, and false-positive review queues.",
        "Show FATF-inspired risk controls, data lineage, privacy minimisation, analyst notes, escalation, and an appeal or correction path."
      ],
      "stretch": [
        "Add cross-border entities, informal value-transfer brokers, and synthetic crowdfunding or non-profit channels.",
        "Add drift and label-delay scenarios that demonstrate why model monitoring and human accountability matter.",
        "Export an evidence card containing graph features, model version, decision rationale, retained fields, and reviewer sign-off.",
        "Compare a permissioned-ledger evidence trail with a conventional controlled database on privacy, correction, cost, and governance."
      ],
      "plan": [
        "Week 1: define synthetic entities, laundering-stage states, risk assumptions, and privacy boundaries.",
        "Week 2: implement the transaction graph, timeline view, rule alerts, and reproducible evidence fixtures.",
        "Week 3: add a baseline classifier, review queue, precision/recall analysis, and drift or missing-label tests.",
        "Week 4: map controls to FATF themes, compare storage architectures, document limitations, and present a responsible triage demo."
      ],
      "novelty": "The lab keeps policy, graph evidence, model assistance, privacy, and human accountability visible in one workflow instead of presenting AML/CFT as either a ledger problem or a classifier problem.",
      "stack": ["Python", "pandas", "NetworkX", "scikit-learn", "Plotly or SVG"],
      "milestones": ["Week 1: synthetic risk model", "Week 2: graph and rules", "Week 3: model-assisted triage", "Week 4: governance comparison and demo"],
      "success": "A learner can trace a synthetic case through all three laundering stages, explain why an alert is only evidence for review, quantify false positives, and defend a privacy-preserving governance design."
    }
  },
  "ebb-6402-2026-09-03-180128": {
    "en": {
      "title": "StableGuard: an evidence-aware AML/CFT and stablecoin policy lab",
      "pitch": "Build a local-first teaching workbench that connects KYC, risk-based monitoring, SAR/STR reporting, FIU hand-offs, and stablecoin risk without using real customer data.",
      "problem": "Learners often see KYC, machine-learning alerts, and stablecoin policy as separate topics. A synthetic end-to-end lab makes ownership, evidence, proportionality, and residual risk visible in one workflow.",
      "learning": "You will model customer risk, beneficial ownership, transaction deviations, reporting pathways, FIU analysis, and stablecoin backing while documenting privacy and governance decisions.",
      "mvp": [
        "Generate synthetic customers, beneficial owners, transactions, institutions, and stablecoin reserve events with a reproducible seed.",
        "Render a KYC and risk-classification view that escalates high-risk cases to enhanced due diligence and records the evidence requested.",
        "Compare profile-based rules with a transparent classifier for unusual movement, showing false positives and analyst review rather than a verdict.",
        "Trace SAR/STR reports through an AML system and FIU-style analysis, then add a stablecoin panel for peg, reserve, liquidity, and regulatory signals."
      ],
      "stretch": [
        "Add cross-border institutions, informal value-transfer brokers, and delayed or missing labels to test monitoring resilience.",
        "Add a privacy budget and retention policy that shows which fields are retained, hashed, or kept in controlled storage.",
        "Export an auditable evidence card containing model version, thresholds, reviewer decision, escalation reason, and stablecoin assumptions."
      ],
      "plan": [
        "Week 1: define synthetic entities, KYC fields, risk tiers, and privacy boundaries.",
        "Week 2: implement transaction deviations, rule alerts, SAR/STR flow, and FIU hand-off views.",
        "Week 3: add a small baseline classifier, precision/recall, false-positive review, and feedback capture.",
        "Week 4: model stablecoin backing and policy scenarios, export evidence, and write a responsible-governance review."
      ],
      "novelty": "The lab treats compliance, detection, institutional hand-offs, and stablecoin design as one inspectable policy loop instead of presenting technology as a substitute for governance.",
      "stack": ["Python", "pandas", "NetworkX", "scikit-learn", "Plotly or SVG"],
      "milestones": ["Week 1: synthetic KYC and risk model", "Week 2: monitoring and reporting", "Week 3: model-assisted review", "Week 4: stablecoin policy and evidence export"],
      "success": "A learner can explain why a case was escalated, trace its evidence to an FIU hand-off, quantify review trade-offs, and defend a stablecoin policy position from backing, liquidity, governance, and regulatory assumptions."
    }
  },
  "ebb-6402-2026-09-08-180225": {
    "en": {
      "title": "StableBridge: a transparent stablecoin policy lab",
      "pitch": "Build a synthetic dashboard that compares stablecoin models and makes peg, reserve, liquidity, redemption, governance, and policy assumptions explicit.",
      "problem": "Stablecoin stability is often treated as a label rather than an operational claim. A small policy lab lets learners test how backing and market conditions affect confidence in a reference value.",
      "learning": "You will model a stablecoin bridge between fiat and digital assets, compare backing mechanisms, and explain residual risk using evidence rather than branding.",
      "mvp": ["Generate synthetic reserve, issuance, redemption, and market-price events.", "Plot the target peg against observed price and liquidity under normal and stressed conditions.", "Compare two stablecoin models and annotate governance and regulatory assumptions.", "Export an evidence card explaining why the model appears stable or where it can fail."],
      "stretch": ["Add cross-border settlement and redemption queues.", "Add scenario sliders for reserve haircuts and liquidity shocks.", "Add a privacy-preserving audit trail for policy decisions."],
      "plan": ["Week 1: define synthetic assets, reserves, and peg assumptions.", "Week 2: implement issuance, redemption, and liquidity simulation.", "Week 3: compare models under stress and visualise deviations.", "Week 4: document governance, regulation, and policy conclusions."],
      "novelty": "The lab connects classroom stablecoin concepts to observable reserve and redemption evidence without using real financial data.",
      "stack": ["Python", "pandas", "Plotly or SVG"],
      "milestones": ["Week 1: synthetic model", "Week 2: peg and liquidity", "Week 3: stress comparison", "Week 4: policy evidence"],
      "success": "A learner can explain how a stablecoin bridges fiat and digital finance and defend a policy judgement from peg, reserves, liquidity, governance, and regulatory evidence."
    }
  },
  "ebb-6402-2026-09-10-180236": {
    "en": {
      "title": "TreasuryBridge — a stablecoin policy and settlement lab",
      "pitch": "Build a synthetic workbench that compares bank-issued stablecoins and tokenized deposits, then traces enterprise treasury, cross-border, and merchant settlement flows with explicit controls.",
      "problem": "A wallet transfer can look simple while hiding reserve, redemption, authority, reconciliation, and regulatory assumptions. TreasuryBridge makes those assumptions visible without using real financial data.",
      "learning": "You will model issuers, reserves, deposit ledgers, corporate and subsidiary wallets, payment participants, policy domains, and smart-contract automation while documenting residual legal and economic risk.",
      "mvp": ["Create synthetic bank-issued and tokenized-deposit flows linking accounts, reserves, ledgers, issuers, and wallets.", "Simulate headquarters, subsidiary, merchant, payroll, and cross-border wallet transfers with source and destination reconciliation.", "Compare traditional bank settlement with stablecoin settlement for speed, participants, conversion, custody, and evidence.", "Export a policy pack covering backing, governance, risk-based licensing, smart-securities automation, and unresolved legal questions."],
      "stretch": ["Add stress scenarios for reserve haircuts, redemption queues, liquidity shocks, and delayed correspondent banking.", "Add a policy-domain matrix spanning finance, identity, supply chain, healthcare, and national security.", "Add an audit trail that separates on-chain proof from external claims and records reviewer ownership."],
      "plan": ["Week 1: define synthetic entities, ledgers, wallets, reserve assumptions, and settlement events.", "Week 2: implement tokenized-deposit and enterprise treasury flows with reconciliation checks.", "Week 3: compare cross-border and payment-network paths under timing, liquidity, and governance scenarios.", "Week 4: add policy and smart-securities review, export evidence, and document limitations."],
      "novelty": "The lab unifies stablecoin architecture, corporate treasury operations, settlement topology, and policy accountability in one inspectable model.",
      "stack": ["Python", "pandas", "NetworkX", "Plotly or SVG"],
      "milestones": ["Week 1: issuer and deposit model", "Week 2: treasury and wallet flows", "Week 3: settlement comparison", "Week 4: policy evidence pack"],
      "success": "A learner can explain which claims are backed by reserves or ledgers, trace a payment across participants, compare settlement paths, and defend a policy recommendation with explicit residual risks."
    }
  },
  "ebb-6402-2026-09-15-180515": {
    "en": {
      "title": "TraceLedger Atlas — an auditable blockchain stakeholder map",
      "pitch": "Build an accessible explorer that traces a synthetic product or identity claim from issuer through smart-contract-backed records to the end user while exposing stakeholder rights, duties, and unresolved risks.",
      "problem": "Blockchain diagrams can hide who owns a decision, who verifies a claim, and who bears liability when a record or physical-world input is wrong. TraceLedger Atlas makes the path and responsibility explicit.",
      "learning": "You will connect asset tokenization, fractional ownership, governance, signed claims, supply-chain traceability, smart-contract controls, and the limits of ledger evidence.",
      "mvp": [
        "Create an accessible graph of issuer, holder, verifier, farmer, processor, distributor, retailer, and customer using synthetic records.",
        "Add a timeline showing tokenization, verification, transfer, and hand-off events with an owner and evidence note for each event.",
        "Implement a signed-claim verification view covering valid, altered, expired, and revoked synthetic claims.",
        "Add a risk and control panel for key custody, governance participation, physical-world data, scalability, performance, and ROI assumptions."
      ],
      "stretch": [
        "Compare an intermediary-led path with a blockchain path and show where authority and reconciliation duties move.",
        "Export an accessible audit card that links each design choice to the lecture's source timecode and a public reference.",
        "Add a small scenario runner for fractional ownership, secondary transfer, and supply-chain exceptions."
      ],
      "plan": [
        "Week 1: define synthetic actors, claims, token units, hand-offs, and evidence schemas.",
        "Week 2: implement the graph, event timeline, and stakeholder responsibility matrix.",
        "Week 3: add signed-claim verification, smart-contract conditions, and exception states.",
        "Week 4: test accessibility, compare governance paths, export the audit card, and document limitations."
      ],
      "novelty": "The project connects governance, identity evidence, tokenized ownership, and enterprise traceability in one inspectable learner workflow instead of treating them as separate blockchain examples.",
      "stack": ["TypeScript", "Accessible HTML", "SVG", "Vitest"],
      "milestones": ["Week 1: synthetic evidence model", "Week 2: stakeholder and traceability views", "Week 3: claim verification and controls", "Week 4: accessibility and audit export"],
      "success": "A learner can trace one synthetic asset or claim end to end, identify who controls each step, explain one benefit and one residual risk, and support the explanation with an auditable evidence card."
    }
  },
  "ebb-6402-2026-09-17-180630": {
    "en": {
      "title": "TokenRights Atlas — an auditable physical-asset tokenization lab",
      "pitch": "Build a synthetic, accessible workbench that maps a physical asset to tokenized rights, investors, custody, exchange, supervision, and the off-chain evidence needed to support each claim.",
      "problem": "A token can look precise while hiding the underlying property, valuation, ownership, custody, regulatory, and transfer assumptions. TokenRights Atlas makes those assumptions inspectable.",
      "learning": "You will model governance rules, fractional ownership, issuer and revocation events, wallets, custodians, exchanges, AML controls, smart-contract conditions, and the limits of on-chain proof.",
      "mvp": [
        "Create a synthetic commercial property with valuation, ownership, income, and evidence records.",
        "Represent proportional ownership and income rights as token units, with transfer and revocation states.",
        "Map issuer, investor, asset owner, wallet, custodian, tokenization provider, exchange, and supervisor responsibilities.",
        "Add a policy panel covering privacy, cybersecurity, interoperability, consumer protection, AML, and physical-world evidence."
      ],
      "stretch": [
        "Compare permissioned and public network designs for participation, transparency, privacy, and regulatory control.",
        "Simulate a land-registry update that succeeds only when synthetic identity, authority, and document conditions are satisfied.",
        "Export an evidence card linking each design choice to a lecture timecode and a public policy reference."
      ],
      "plan": [
        "Week 1: define synthetic assets, rights, actors, evidence, and policy assumptions.",
        "Week 2: implement token units, ownership and income views, wallets, custody, and transfer rules.",
        "Week 3: add issuer/revocation, exchange supervision, AML controls, and permissioned/public comparison.",
        "Week 4: test failure cases, audit off-chain claims, document limitations, and export the accessible study artifact."
      ],
      "novelty": "The lab treats tokenization as a governed chain of rights and evidence instead of a token-generation demo.",
      "stack": ["TypeScript", "Accessible HTML", "SVG", "Vitest"],
      "milestones": ["Evidence and asset model", "Token and custody workflow", "Supervision and policy controls", "Audit export and limitations"],
      "success": "A learner can trace one synthetic asset from physical claim to token, explain who controls every transition, identify one benefit and one residual risk, and support the explanation with evidence."
    }
  },
  "ecs-6402-2026-09-03-203415": {
    "en": {
      "title": "LayerLens: an ATM and OSI protocol-stack visualizer",
      "pitch": "Build a browser-based simulator that sends voice, video, and bursty data through virtual channels while revealing ATM cell overhead and OSI encapsulation.",
      "problem": "Students often memorise layer names without seeing how an application message becomes headers, cells, frames, and bits. A small visual simulator can make service boundaries and trade-offs observable.",
      "learning": "You will model fixed 53-byte ATM cells, variable-length Frame Relay frames, virtual-circuit identifiers, QoS choices, and sender/receiver layer interactions.",
      "mvp": [
        "Create synthetic voice, video, and data messages and show sampling/compression before ATM adaptation.",
        "Split payloads into 53-byte cells with a 5-byte header and 48-byte payload, then visualise virtual-channel identifiers.",
        "Animate encapsulation down a seven-layer stack and decapsulation back to the application at the destination.",
        "Expose a comparison panel for Frame Relay versus ATM overhead, unit size, QoS, and error-control placement."
      ],
      "stretch": [
        "Add queueing and loss to compare fixed-cell switching with variable-length frames under different traffic mixes.",
        "Add a protocol-rule inspector for syntax, semantics, timing, addressing, and flow control.",
        "Export an accessible evidence view that explains each visual transition in text for keyboard and screen-reader users."
      ],
      "plan": [
        "Week 1: define message, cell, frame, layer, and virtual-channel data structures.",
        "Week 2: implement ATM adaptation, cellisation, and Frame Relay comparison views.",
        "Week 3: add OSI encapsulation/decapsulation animation and peer-layer annotations.",
        "Week 4: test mixed traffic, accessibility, and protocol trade-off explanations."
      ],
      "novelty": "The project keeps transport units, logical paths, QoS, and layer contracts visible in one learner-controlled animation instead of treating them as isolated definitions.",
      "stack": ["JavaScript", "HTML/CSS", "SVG", "Web Audio API (optional)"],
      "milestones": ["Week 1: data model", "Week 2: ATM/Frame Relay views", "Week 3: OSI stack animation", "Week 4: accessibility and evaluation"],
      "success": "A learner can trace one message through adaptation, cellisation, encapsulation, virtual-channel forwarding, and decapsulation, then explain which design choice changes overhead or QoS."
    }
  },
  "ebb-6403-2026-09-04-074036": {
    "en": {
      "title": "KeystreamLab — an auditable stream-cipher safety workbench",
      "pitch": "Build a local-first lab that visualizes LFSR feedback and RC4-style state updates, then demonstrates reconstruction, bias, and keystream-reuse failures on synthetic messages.",
      "problem": "Students can implement XOR encryption without seeing why linear state, biased prefixes, or reused streams break confidentiality. A controlled simulator makes the attack surface measurable without handling real secrets.",
      "learning": "You will connect one-time pads, pseudorandom generation, LFSR recurrence, RC4 KSA/PRGA state transitions, byte-wise XOR, statistical bias, and modern authenticated-encryption guidance.",
      "mvp": [
        "Implement a configurable n-bit LFSR with visible taps, seed, emitted bits, and a reconstruction-equation panel.",
        "Implement an educational RC4 KSA/PRGA simulator with step-by-step S, i, j, and output-byte views.",
        "Demonstrate keystream reuse by XORing two synthetic ciphertexts and exposing the plaintext relationship.",
        "Measure early-byte frequency bias over repeated seeded runs and explain why RC4 is unsuitable for modern TLS."
      ],
      "stretch": [
        "Add a modern ChaCha20-Poly1305 comparison with nonce-uniqueness checks and authentication-failure handling.",
        "Export an experiment card containing parameters, seed, generated stream statistics, and reproducible plots.",
        "Add accessible text descriptions for every state transition and chart."
      ],
      "plan": [
        "Week 1: implement LFSR state, tap configuration, period checks, and deterministic trace export.",
        "Week 2: add reconstruction experiments and the RC4 KSA/PRGA state visualizer.",
        "Week 3: implement reuse and bias demonstrations with synthetic data and statistical tests.",
        "Week 4: add modern authenticated encryption comparison, accessibility, documentation, and a security review."
      ],
      "novelty": "The workbench links implementation state to attack evidence, helping learners see why historical stream-cipher simplicity is not a deployment guarantee.",
      "stack": ["JavaScript", "HTML/CSS", "SVG", "Python (optional analysis)"],
      "milestones": ["Week 1: LFSR trace", "Week 2: RC4 state view", "Week 3: attack demonstrations", "Week 4: modern comparison and review"],
      "success": "A learner can trace each state update, reproduce a reconstruction or reuse failure on synthetic inputs, quantify an early-byte bias, and justify a modern authenticated-encryption choice."
    }
  },
  "ebb-6403-2026-09-05-055030": {
    "en": {
      "title": "Trapdoor Lab — a public-key arithmetic and security workbench",
      "pitch": "Build an accessible simulator for modular exponentiation, Fermat arithmetic, key-pair generation, and trapdoor one-wayness.",
      "problem": "Public-key security can feel like magic until learners compare easy forward computation with hard inversion and test the security properties explicitly.",
      "learning": "You will connect public/private keys, modular arithmetic, factoring intuition, confidentiality, authentication, and computational infeasibility.",
      "mvp": ["Implement modular exponentiation and Fermat checks with traceable intermediate values.", "Visualize sender encryption with a receiver public key and decryption with the private key.", "Demonstrate a toy trapdoor function and compare forward versus reverse work.", "Add a checklist for confidentiality, authentication, and one-wayness properties."],
      "stretch": ["Add RSA-style toy parameter generation with warnings about insecure toy sizes.", "Provide accessible text alternatives for every arithmetic trace and diagram."],
      "plan": ["Week 1: modular arithmetic and trace UI", "Week 2: public/private key message flow", "Week 3: trapdoor and attack experiments", "Week 4: security-property review and accessibility"],
      "novelty": "The lab turns the lecture's arithmetic examples and security-property checklist into an inspectable experiment rather than a black-box cipher demo.",
      "stack": ["JavaScript", "HTML/CSS", "SVG"],
      "milestones": ["Arithmetic trace", "Key-pair flow", "Trapdoor experiment", "Security review"],
      "success": "A learner can trace modular exponentiation, explain which key each party uses, and justify why forward computation can be easy while inversion remains infeasible."
    }
  },
  "ecs-6401-2026-09-04-180115": {
    "en": {
      "title": "Stationarity Studio: an ACF/PACF and ARIMA diagnostics lab",
      "pitch": "Build a local-first notebook that computes centered ACF values, solves Yule–Walker AR(3) systems, compares ACF/PACF order hints, and tests unit-root scenarios.",
      "problem": "Forecasting learners often copy an ARIMA order without seeing how centered correlations, PACF, differencing, and ADF evidence fit together.",
      "learning": "You will implement ACF(1–3), PACF, Yule–Walker solving, AR/MA order diagnostics, differencing, and ADF interpretation with reproducible data.",
      "mvp": [
        "Generate the lecture's ten-observation series, compute its mean and centered values, and show each ACF numerator term.",
        "Solve an AR(3) Yule–Walker system and compare coefficients with PACF calculations.",
        "Contrast AR, MA, ARMA, and ARIMA order hints using ACF/PACF plots.",
        "Add stationary and unit-root cases, run ADF, and explain why p-values require visual and domain checks."
      ],
      "stretch": [
        "Add seasonal differencing and SARIMA order experiments with chronological evaluation.",
        "Export an accessible calculation card containing centered values, lag pairs, matrices, coefficients, p-values, and assumptions.",
        "Add disagreement warnings when ADF and rolling-plot evidence point in different directions."
      ],
      "plan": [
        "Week 1: implement deterministic data, centering, lag tables, and ACF calculations.",
        "Week 2: add PACF and Yule–Walker AR(2)/AR(3) matrix solving with tests.",
        "Week 3: compare AR/MA/ARIMA diagnostics and differencing choices.",
        "Week 4: add ADF scenarios, accessibility, chronological evaluation, and evidence export."
      ],
      "novelty": "The lab exposes every calculation and modelling assumption instead of reducing order selection to a single opaque library call.",
      "stack": ["Python", "pandas", "statsmodels", "matplotlib", "Jupyter or Streamlit"],
      "milestones": ["Week 1: centered ACF worksheet", "Week 2: PACF/Yule–Walker", "Week 3: ARIMA diagnostics", "Week 4: ADF evidence and evaluation"],
      "success": "A learner can reproduce the ACF/PACF and AR(3) calculations, justify an order and differencing choice, and explain what the ADF evidence does and does not establish."
    }
  },
  "eai-6402-2026-09-05-101246": {
    "en": {
      "title": "Auditable AI-assisted assignment",
      "pitch": "Design a course task where a learner may use a language model but must show sources, prompts, verification, and revision decisions.",
      "problem": "Polished generated text can hide whether a learner understands the material or checked the model's claims.",
      "learning": "You will turn the lecture's ideas about NLP, provenance, and assessment governance into a transparent learning workflow.",
      "mvp": ["Define one concept-based assignment and a clear rubric.", "Require a source-and-verification log for any AI-assisted output.", "Add a disclosure and privacy rule that keeps learner data minimised.", "Include a short reflection explaining revisions and remaining uncertainty."],
      "stretch": ["Compare unaided, retrieval-grounded, and model-generated drafts.", "Add an instructor review checklist for unsupported claims.", "Measure whether the rubric rewards reasoning rather than surface fluency."],
      "plan": ["Week 1: define task, rubric, and disclosure policy.", "Week 2: prototype the verification log.", "Week 3: pilot with two example submissions.", "Week 4: revise for accessibility, privacy, and fairness."],
      "novelty": "The capstone makes AI assistance auditable: the artifact includes not only an answer but also the evidence and judgment behind it.",
      "stack": ["Markdown", "JSON evidence log", "Accessible HTML rubric", "Optional small language-model API"],
      "milestones": ["Task and rubric", "Verification log", "Pilot review", "Fairness and privacy revision"],
      "success": "A reviewer can distinguish learner reasoning from generated text, trace important claims to sources, and see how uncertainty was handled."
    }
  },
  "eai-6402-2026-09-12-100922": {
    "en": {
      "title": "SplitSense: an auditable regression evaluation explorer",
      "pitch": "Build an accessible app that makes representative train/validation/test splits, cross-validation, linear regression, and normal-equation limits visible.",
      "problem": "A strong training score can hide distribution bias, leakage, or a computation that will not scale to a large feature space.",
      "learning": "You will document features and responses, protect the test set, compare validation strategies, inspect residuals, and explain why exact normal equations are not always scalable.",
      "mvp": [
        "Load a labelled dataset and document its features, response, and expected deployment distribution.",
        "Show a 700/200/100 train/validation/test split and a five-fold cross-validation view.",
        "Fit linear regression, display residuals, and report validation and test results separately from training performance.",
        "Compare a normal-equation solution with an iterative baseline and record the feature-count limitation."
      ],
      "stretch": [
        "Add a deliberately biased cat/dog-style feature and show its effect under distribution shift.",
        "Compare several cross-validation fold counts with uncertainty summaries.",
        "Export an accessible evaluation card with split provenance, formulas, and leakage checks."
      ],
      "plan": [
        "Week 1: define dataset, features, response, split policy, and accessibility structure.",
        "Week 2: implement linear regression, residuals, and normal-equation calculations.",
        "Week 3: add cross-validation, hyperparameter notes, and validation/test reporting.",
        "Week 4: simulate distribution shift, document scalability, test keyboard access, and export evidence."
      ],
      "novelty": "The explorer treats evaluation as an auditable data workflow: learners can see how representation, leakage, fold choice, residuals, and feature count affect the result.",
      "stack": ["TypeScript", "Accessible HTML tables", "SVG charts", "Deterministic regression test fixtures"],
      "milestones": ["Data and split card", "Regression and residual view", "Cross-validation report", "Bias and scalability evidence"],
      "success": "A learner can justify a data split, distinguish validation from test performance, reproduce a least-squares result, and explain when the normal-equation computation should be replaced."
    }
  },
  "ecs-6402-2026-09-04-203546": {
    "en": {
      "title": "StackScope: an explainable packet journey and integrity lab",
      "pitch": "Build an accessible visualiser that moves a message through media, link framing, IP routing, TCP segmentation, encapsulation, and checksum verification.",
      "problem": "Layer diagrams often hide where an address, header, port, or integrity check is introduced, making network failures difficult to localise.",
      "learning": "You will model physical media, link-local versus end-to-end checks, IP forwarding, ports, TCP segments, protocol overhead, and one's-complement verification.",
      "mvp": [
        "Let a learner enter a short message and choose a medium, route, transport protocol, and port.",
        "Animate the message becoming a TCP segment, IP packet, link frame, and transmitted waveform.",
        "Show each header and label its scope as local-hop or end-to-end.",
        "Compute a checksum, flip one bit, and explain why the receiver rejects the corrupted message."
      ],
      "stretch": [
        "Add a CRC comparison and visualise the polynomial remainder.",
        "Support multiple routers and show how only the link wrapper changes at each hop.",
        "Export an accessible evidence card with source timecodes, fields, assumptions, and verification results."
      ],
      "plan": [
        "Week 1: implement message, payload, headers, ports, and line-coding views.",
        "Week 2: add router hops, IP addressing, TCP sequence numbers, and decapsulation.",
        "Week 3: implement one's-complement checksum and bit-error scenarios.",
        "Week 4: add CRC, keyboard accessibility, explanatory tests, and export."
      ],
      "novelty": "The tool makes protocol scope visible: learners can see why a local link check and an end-to-end transport check are complementary rather than redundant.",
      "stack": ["TypeScript", "SVG or Canvas", "Web Audio-free deterministic simulator", "Vitest"],
      "milestones": ["Week 1: stack and media diagram", "Week 2: routing and encapsulation", "Week 3: checksum verification", "Week 4: CRC and accessibility"],
      "success": "A learner can trace one message across two networks, identify every header and owner, and diagnose a deliberate bit error from the verification result."
    }
  },
  "ecs-6402-2026-09-10-203424": {
    "en": {
      "title": "HeaderScope — an accessible TCP/IP packet journey lab",
      "pitch": "Build a browser visualiser that follows a message through TCP segmentation, IP forwarding, local delivery, decapsulation, and IPv4 header interpretation.",
      "problem": "Layer diagrams can hide why several addresses, headers, and control functions are needed for one end-to-end exchange.",
      "learning": "You will model TCP and UDP process delivery, ports, sequence and acknowledgement state, flow and error control, IP addressing modes, IPv4 fragmentation fields, TTL, protocol identification, and header alignment.",
      "mvp": [
        "Let a learner enter a short message and choose TCP or UDP, a source/destination, a port, and a route with one or more routers.",
        "Animate segmentation, encapsulation, forwarding, local delivery, and decapsulation while labelling payload, header, and owner.",
        "Show stop-and-wait or sliding-window flow control, checksum failure, timeout, and retransmission with a visible event log.",
        "Render an IPv4 header inspector with version, IHL, service, total length, identification, flags, fragment offset, TTL, protocol, checksum, and address fields."
      ],
      "stretch": [
        "Compare unicast, multicast, anycast, and broadcast destination sets on the same topology.",
        "Simulate a packet that exceeds a link's maximum size and show fragment offsets, more-fragments state, and reassembly.",
        "Export a keyboard-accessible evidence card with source-grounded explanations and a no-private-data test trace."
      ],
      "plan": [
        "Week 1: message, process, port, address, protocol-unit, and header data structures.",
        "Week 2: TCP sequencing, acknowledgements, flow control, timeout, checksum, and retransmission.",
        "Week 3: IP routing, delivery modes, IPv4 header fields, fragmentation, TTL, and decapsulation.",
        "Week 4: accessible visualisation, event explanations, deterministic tests, and export."
      ],
      "novelty": "The lab makes protocol scope explicit: the learner can see which identity or control field is needed at each hop and why transport reliability is different from router forwarding.",
      "stack": ["TypeScript", "SVG", "Accessible HTML tables", "Vitest"],
      "milestones": ["Protocol stack and identities", "Reliable transport controls", "IPv4 header and routing", "Accessible evidence export"],
      "success": "A learner can trace a message across two networks, explain every visible IPv4 field and transport control, and diagnose whether a failure came from routing, receiver overload, corruption, or missing acknowledgement."
    }
  },
  "ecs-6402-2026-09-11-203535": {
    "en": {
      "title": "CellScope — an accessible address-and-wireless evolution explorer",
      "pitch": "Build a browser visualiser that connects IPv4 network/host allocation and IPv6 packet fields to the service goals and radio techniques of cellular generations.",
      "problem": "Learners can memorise address classes or 1G–6G labels without seeing how addressing scale, packet handling, service requirements, and radio techniques fit together.",
      "learning": "You will model classful IPv4 prefixes and masks, IPv6 address-space and hop-limit reasoning, TCP/UDP exploration prompts, cellular service categories, and MIMO/beamforming trade-offs.",
      "mvp": [
        "Let a learner enter an IPv4 address and select a class to show fixed prefix bits, network bits, host bits, range, and subnet mask.",
        "Show an IPv6 packet moving across routers while decrementing hop limit and displaying flow, payload, and next-header context.",
        "Compare 1G through 5G and an emerging 6G concept by voice, messaging, mobile broadband, latency, reliability, massive connectivity, and sensing goals.",
        "Animate how multiple antennas, MIMO, and beamforming can support capacity and spatial control, with a plain-language explanation and accessible table."
      ],
      "stretch": [
        "Add a TCP-versus-UDP worksheet that records components, reliability expectations, and the learner's evidence-backed choice.",
        "Export a keyboard-accessible study card containing formulas, assumptions, source timecodes, and no private or credential data."
      ],
      "plan": [
        "Week 1: IPv4 prefix, range, host-count, and subnet-mask model.",
        "Week 2: IPv6 header and hop-limit animation with accessible text equivalents.",
        "Week 3: cellular-generation and service-category comparison.",
        "Week 4: MIMO/beamforming view, tests, accessibility review, and evidence export."
      ],
      "novelty": "The explorer makes addressing scale and wireless-system evolution visible in one learning object while keeping packet fields, service goals, and radio techniques distinct.",
      "stack": ["TypeScript", "SVG", "Accessible HTML tables", "Vitest"],
      "milestones": ["IPv4 and subnet masks", "IPv6 packet handling", "Cellular service comparison", "Accessible radio-technique explainer"],
      "success": "A learner can derive an IPv4 network boundary, explain why IPv6 scales the address space, compare cellular-generation goals, and relate MIMO or beamforming to a stated service requirement."
    }
  },
  "ecs-6402-2026-09-17-203648": {
    "en": {
      "title": "ReuseMap — an accessible cellular capacity and interference explorer",
      "pitch": "Build an interactive cellular-planning lab that lets learners change cluster size, cell radius, and channel allocation while seeing reuse distance, capacity, and co-channel interference move together.",
      "problem": "Frequency reuse formulas are easy to memorise but difficult to connect to the geometric and quality trade-offs behind a real cellular layout.",
      "learning": "You will model hexagonal cells, base stations, R, d, D, cluster size N, D/R = √(3N), reuse factor 1/N, channel capacity, and SIR as a design decision.",
      "mvp": [
        "Render a keyboard-accessible hexagonal cell map with a selected serving cell, base stations, and highlighted co-channel cells.",
        "Let a learner change N and R, then update D = √(3N)R, reuse factor, and the visible co-channel separation.",
        "Provide the lecture's 140 km², 40-channel, 30%, seven-cell scenario as a reproducible worked example that yields 20 km² per cell and 84 aggregate channels.",
        "Show a plain-language SIR panel that separates desired signal power from aggregate co-channel interference and explains the capacity-versus-quality trade-off."
      ],
      "stretch": [
        "Add i–j shift controls for N = 4 and N = 7 and validate whether the selected reuse pattern avoids adjacent same-band cells.",
        "Export an accessible study card with formulas, assumptions, source timecodes, and no private or credential data."
      ],
      "plan": [
        "Week 1: hexagonal map, base stations, R, d, D, and co-channel highlighting.",
        "Week 2: cluster-size controls, i–j shifts, reuse factor, and geometry validation.",
        "Week 3: capacity arithmetic, SIR explanation, and interference scenarios.",
        "Week 4: keyboard accessibility, tests, source-time evidence, and export."
      ],
      "novelty": "The lab makes the lecture's central trade-off visible: the same spectrum can support more users through reuse, but only by accepting a geometry-dependent interference cost.",
      "stack": ["TypeScript", "SVG", "Accessible HTML tables", "Vitest"],
      "milestones": ["Cell and base-station map", "Reuse geometry", "Capacity and SIR", "Accessible evidence export"],
      "success": "A learner can choose a cluster size, derive the resulting reuse distance and reuse factor, reproduce the seven-cell channel example, and explain why capacity and signal quality move in opposite directions."
    }
  },
  "eai-6403-2026-09-05-154129": {
    "en": {
      "title": "Attention map explainer",
      "pitch": "Build an accessible visual explainer that traces how a Transformer turns token embeddings into contextual representations.",
      "problem": "Learners often see attention diagrams without understanding how queries, keys, values, and heads combine.",
      "learning": "Model embeddings, scaled dot-product attention, multi-head concatenation, positional encoding, and encoder-decoder flow.",
      "mvp": ["Let users enter a short sentence and inspect token embeddings.", "Visualise query-key scores and softmax weights for one head.", "Compare one head with a multi-head aggregate and explain the difference.", "Show how masking changes decoder visibility."],
      "stretch": ["Add BERT bidirectional versus decoder causal-mask comparison.", "Export a keyboard-accessible evidence card with formulas and source timecodes."],
      "plan": ["Week 1: token and embedding view.", "Week 2: attention score and mask visualisation.", "Week 3: multi-head and encoder-decoder comparison.", "Week 4: accessibility tests and export."],
      "novelty": "The explainer makes the same architecture usable as a concrete, inspectable learning object rather than a static diagram.",
      "stack": ["TypeScript", "SVG", "Vitest"],
      "milestones": ["Embeddings", "Attention weights", "Multi-head view", "Accessible export"],
      "success": "A learner can identify the role of Q, K, V, masking, and heads from the interactive trace."
    }
  },
  "ecc-6404-2026-09-09-193233": {
    "en": {
      "title": "Distribution Lens: an accessible descriptive-statistics explorer",
      "pitch": "Build a small, accessible dashboard that lets learners compare mean, trimmed mean, median, quartiles, IQR, standard deviation, and a quantile plot for the same data set.",
      "problem": "A single average can conceal skew, outliers, or multimodality, leaving learners unable to justify a preprocessing decision.",
      "learning": "You will implement the lecture's central-tendency measures, five-number summary, 1.5-IQR fences, standard deviation, and cumulative quantile view.",
      "mvp": [
        "Accept a pasted numeric data set and show sorted values plus minimum, Q1, median, Q3, and maximum.",
        "Let the learner toggle mean, trimmed mean, median, mode, mid-range, IQR, and standard deviation.",
        "Render a box plot with whiskers and individually marked suspected outliers.",
        "Plot each ordered observation against fi=(i−0.5)/n and explain why a chosen center is appropriate."
      ],
      "stretch": [
        "Add ordinal and categorical examples where median or mode is valid but arithmetic mean is not.",
        "Compare two data sets side by side and export an accessible five-number-summary report.",
        "Add keyboard-first explanations of how changing the trim fraction changes information loss."
      ],
      "plan": [
        "Week 1: implement parsing, ordering, mean, median, mode, and mid-range tests.",
        "Week 2: add quartiles, IQR, five-number summary, and 1.5-IQR outlier fences.",
        "Week 3: implement box and quantile plots with text alternatives.",
        "Week 4: add comparison mode, accessibility checks, and an evidence export."
      ],
      "novelty": "The explorer makes the choice of statistic inspectable: learners can see exactly how skew and extreme values alter each summary.",
      "stack": ["TypeScript", "SVG", "Accessible HTML table", "Vitest"],
      "milestones": ["Descriptive measures", "Quartiles and fences", "Box/quantile plots", "Accessible comparison report"],
      "success": "A learner can justify a center and spread measure for a data set, identify suspected outliers, and cite the visual evidence behind the decision."
    }
  },
  "ecc-6404-2026-09-14-193017": {
    "en": {
      "title": "TreePath Auditor: an accessible classifier explainer",
      "pitch": "Build a small educational explorer that lets a learner trace attribute questions from a decision-tree root to a predicted class and inspect the corresponding confusion-matrix evidence.",
      "problem": "A classifier can look like a single accuracy score even though learners need to understand both the attribute path that produced a prediction and which classes are being confused.",
      "learning": "You will implement categorical tree traversal, pure-leaf stopping, binary confusion-matrix metrics, and an accessible explanation of greedy recursive induction.",
      "mvp": [
        "Accept a small labelled table and display the current node's attribute test and every branch outcome.",
        "Let a learner enter an unlabeled record and highlight its root-to-leaf path with the final class.",
        "Render actual-versus-predicted counts with accuracy and error-rate formulas and plain-language descriptions.",
        "Show why a pure subset becomes a leaf and why a mixed subset needs another recursive split."
      ],
      "stretch": [
        "Compare two greedy trees and show where different local root choices change the paths and test metrics.",
        "Export a keyboard-accessible audit card containing the chosen split, prediction path, confusion counts, and source timecodes."
      ],
      "plan": [
        "Week 1: implement records, categorical tests, branches, and leaf traversal.",
        "Week 2: add recursive pure-node stopping and a small greedy split heuristic.",
        "Week 3: implement confusion-matrix counts, accuracy, error rate, and comparison views.",
        "Week 4: add accessible explanations, source-time evidence, and export tests."
      ],
      "novelty": "The project connects model structure and model evaluation: every predicted label remains linked to the questions asked and the error counts that justify trust.",
      "stack": ["TypeScript", "SVG", "Accessible HTML table", "Vitest"],
      "milestones": ["Tree traversal", "Recursive induction", "Confusion metrics", "Accessible audit export"],
      "success": "A learner can explain a prediction as a root-to-leaf path, calculate its model's accuracy and error rate, and identify the trade-off behind a greedy split."
    }
  },
  "ecc-6404-2026-09-16-193307": {
    "en": {
      "title": "Impurity-Aware Decision Tree Lab",
      "pitch": "Build a small explorer that compares candidate attribute splits and shows how child-class distributions change the selected decision-tree criterion.",
      "problem": "A split can look intuitively useful while still creating impure or overly fragmented children; learners need to inspect the evidence behind the choice.",
      "learning": "Implement binary and multiway partitions, class-count summaries, Gini impurity, entropy, classification error, and a transparent split-selection report.",
      "mvp": [
        "Accept a small labelled table and show the child class distribution for each candidate nominal or threshold split.",
        "Calculate weighted Gini, entropy, and classification error for every candidate and highlight the lowest-impurity option.",
        "Let the learner compare binary and multiway versions of the same attribute and explain the branch-count trade-off.",
        "Provide a keyboard-accessible evidence table linking each result to the lecture's source timecodes."
      ],
      "stretch": [
        "Add information-gain and gain-ratio comparisons with a warning about high-cardinality attributes.",
        "Export a plain-language split audit containing the chosen test, child counts, criterion values, and fallback policy."
      ],
      "plan": [
        "Week 1: implement table parsing, class counts, and candidate partitions.",
        "Week 2: add Gini, entropy, classification error, and weighted aggregation.",
        "Week 3: compare binary, multiway, and discretized continuous splits.",
        "Week 4: add accessible evidence export and source-time explanations."
      ],
      "novelty": "The lab makes a tree's local greedy choice inspectable by displaying the competing partitions and their impurity evidence side by side.",
      "stack": ["TypeScript", "SVG", "Accessible HTML table", "Vitest"],
      "milestones": ["Candidate splits", "Impurity criteria", "Binary/multiway comparison", "Accessible audit export"],
      "success": "A learner can justify a split using class distributions and impurity calculations, explain binary versus multiway trade-offs, and identify an appropriate fallback for unseen combinations.",
      "guardrails": ["Use synthetic or public toy data only.", "Do not include credentials or private learner data."]
    }
  },
  "ecs-6401-2026-09-09-180431": {
    "en": {
      "title": "Impulse and seasonality lab",
      "pitch": "Build an accessible notebook that compares AR, MA, ARIMA, and SARIMA responses to the same synthetic time series.",
      "problem": "Learners often confuse persistence from lagged values with persistence from lagged shocks and apply differencing without checking the result.",
      "learning": "Implement MA(2), AR(1), first differencing, seasonal differencing, root checks, and an ADF report with plain-language explanations.",
      "mvp": ["Generate a series with one known shock and plot its MA(2) and AR(1) impulse responses.", "Let the learner choose d and seasonal period m, then show the transformed series.", "Display AR characteristic roots relative to the unit circle and report the ADF null and p-value interpretation.", "Provide a keyboard-accessible table of every transformation and source-time concept."],
      "stretch": ["Add ARIMA forecasting with chronological holdout evaluation.", "Compare ordinary and seasonal differencing side by side.", "Export an accessible model-selection evidence card."],
      "plan": ["Week 1: simulate AR/MA shocks and test impulse plots.", "Week 2: add first and seasonal differencing.", "Week 3: implement roots and ADF diagnostics.", "Week 4: accessibility, evaluation, and export."],
      "novelty": "The lab makes model memory and stationarity decisions visible as inspectable transformations rather than opaque library calls.",
      "stack": ["TypeScript", "SVG", "Accessible HTML table", "Vitest"],
      "milestones": ["Impulse comparison", "Differencing controls", "Root/ADF diagnostics", "Accessible evidence export"],
      "success": "A learner can explain whether persistence comes from lagged values or shocks, justify a differencing choice, and support stationarity claims with root and ADF evidence."
    }
  },
  "ecs-6401-2026-09-11-180457": {
    "en": {
      "title": "Seasonal model explainer",
      "pitch": "Build an accessible time-series notebook that expands ARIMA and SARIMA equations into plain-language lag relationships.",
      "problem": "Learners often lose track of which terms represent autoregression, differencing, moving-average errors, or seasonal lags.",
      "learning": "Implement first and seasonal differencing, identify p-d-q and seasonal orders, and explain each lag in a fitted equation.",
      "mvp": ["Let learners enter a period m and display yₜ−yₜ₋ₘ beside first differences.", "Render an annotated ARIMA/SARIMA equation with every AR, difference, MA, and seasonal term labelled.", "Show a source-time concept table linking each transformation to its modelling purpose."],
      "stretch": ["Add ACF/PACF evidence to suggest candidate orders.", "Compare forecasts before and after seasonal differencing."],
      "plan": ["Week 1: implement differencing controls.", "Week 2: build equation annotations.", "Week 3: add seasonal examples and diagnostics.", "Week 4: accessibility and export."],
      "novelty": "The explainer makes the shift-operator algebra inspectable instead of hiding seasonal structure inside a library call.",
      "stack": ["TypeScript", "SVG", "Accessible HTML table", "Vitest"],
      "milestones": ["Differencing controls", "Equation annotations", "Seasonal examples", "Accessible evidence export"],
      "success": "A learner can decode an ARIMA or SARIMA equation, justify its orders, and explain how seasonal differencing changes the series."
    }
  },
  "ecs-6401-2026-09-16-180603": {
    "en": {
      "title": "Forecast Audit Lab: transparent ARIMA model selection",
      "pitch": "Build an accessible local-first notebook that compares ARIMA and SARIMA candidates through information criteria, chronological forecast error, and residual evidence.",
      "problem": "A lowest AIC or BIC can look like a final answer even when a model forecasts poorly or leaves autocorrelation in its residuals. Learners need one evidence trail that keeps fit, complexity, chronology, and diagnostics together.",
      "learning": "Implement ADF context checks, ACF/PACF order hints, AIC/AICc/BIC/HQIC calculations, chronological train/test evaluation, RMSE, residual ACF/PACF, and monthly forecast horizons.",
      "mvp": [
        "Load a public or synthetic monthly series, plot its level and transformed forms, and record the ADF null and p-value interpretation.",
        "Fit at least three ARIMA/SARIMA candidates and display likelihood, parameter count, AIC, AICc, BIC, and HQIC in an accessible table.",
        "Hold out the latest observations in time order, calculate RMSE, and plot actual versus predicted values without future leakage.",
        "Run residual plots and residual ACF/PACF checks, then export a plain-language model-selection report with source-time evidence."
      ],
      "stretch": [
        "Add a sensitivity view showing how the preferred model changes when the sample size, seasonal period, or differencing choice changes.",
        "Compare a model selected by AIC with one selected by BIC and explain the complexity/forecast trade-off.",
        "Add confidence intervals and a 24-period monthly forecast with an explicit coverage and uncertainty note.",
        "Export an accessible audit card containing every candidate, metric, residual decision, and reproducibility assumption."
      ],
      "plan": [
        "Week 1: implement series plots, transformation controls, ADF interpretation, and chronological data splits.",
        "Week 2: fit candidate ARIMA/SARIMA models and calculate information criteria with tested parameter counts.",
        "Week 3: add RMSE, residual ACF/PACF, confidence bands, and model-comparison explanations.",
        "Week 4: finish accessibility, source-time evidence, 24-period forecasting, and audit export tests."
      ],
      "novelty": "The lab makes model selection an inspectable chain of evidence rather than a single library call returning one preferred order.",
      "stack": ["Python", "pandas", "statsmodels", "matplotlib", "Accessible HTML table", "Vitest"],
      "milestones": ["Stationarity context", "Information-criteria table", "Chronological evaluation", "Residual audit export"],
      "success": "A learner can justify an ARIMA/SARIMA choice using fit, complexity, forecast error, residual structure, and explicit limits on what each metric proves."
    }
  },
  "ebb-6403-2026-09-12-054641": {
    "en": {
      "title": "Trapdoor Notebook: an auditable public-key arithmetic lab",
      "pitch": "Build a local-first teaching notebook that compares a superincreasing knapsack, Merkle–Hellman transformation, and RSA while exposing every intermediate value and security assumption.",
      "problem": "Public-key formulas are easy to copy without understanding which structure is hidden, which value is the trapdoor, or why toy parameters are insecure. Learners need an inspectable path from arithmetic to threat model.",
      "learning": "Implement subset-sum recovery, modular inverses, RSA key generation, square-and-multiply, and a plain-language security review that distinguishes classroom arithmetic from production cryptography.",
      "mvp": ["Let a learner define a superincreasing private sequence and target bits, then show greedy recovery.", "Generate a Merkle–Hellman-style public sequence with clearly labelled parameters and warn that it is historical material.", "Generate toy RSA keys, encrypt/decrypt encoded small messages, and display every modular step.", "Export an accessible evidence report containing parameters, formulas, source-time links, and explicit toy-parameter warnings."],
      "stretch": ["Add an interactive modular-inverse and extended-Euclidean visualizer.", "Compare square-and-multiply with naive exponentiation on progressively larger safe demonstration values.", "Add signature verification as a separate workflow and explain why confidentiality and authentication are different goals.", "Create a standards checklist linking the classroom model to padding, randomness, key sizes, and key lifecycle controls."],
      "plan": ["Week 1: implement exact arithmetic, subset-sum recovery, modular inverse, and deterministic tests.", "Week 2: add Merkle–Hellman and RSA toy workflows with annotated intermediate values.", "Week 3: implement square-and-multiply traces, accessibility, and security-assumption warnings.", "Week 4: package the evidence export, compare historical and standardized designs, and write a limitations report."],
      "novelty": "The lab makes the trapdoor, arithmetic shortcut, and deployment boundary visible in one reproducible learning object.",
      "stack": ["TypeScript", "SVG", "Accessible HTML tables", "Vitest"],
      "milestones": ["Subset-sum recovery", "Modular transformations", "RSA trace", "Accessible security report"],
      "success": "A learner can trace a toy public-key computation, identify its secret trapdoor, and explain why production cryptography requires standardized protections beyond the lecture formulas."
    }
  }
  ,"eai-6403-2026-09-12-153203": {
    "en": {
      "title": "ModalityMap: an auditable Transformer task router",
      "pitch": "Build an accessible local-first study tool that routes text, speech, or image examples to an appropriate encoder-only, decoder-only, or encoder-decoder model family and explains the representation, attention constraint, task head, and output format behind each choice.",
      "problem": "Learners often compare model names without checking whether the information flow, input representation, or output head fits the task. A transparent router can make those architectural assumptions testable.",
      "learning": "You will connect bidirectional encoding, causal decoding, sequence-to-sequence generation, task-specific heads, text tokens, speech features, and image patches in one inspectable learning product.",
      "mvp": [
        "Create a task card for classification, generation, translation, speech recognition, object detection, segmentation, and depth estimation.",
        "Map each task to its input representation, model family, attention constraint, head, and output type.",
        "Run small permitted public-model or synthetic demonstrations and record accuracy, latency, and failure cases.",
        "Export an accessible architecture report with source links and clear limits on what each demonstration proves."
      ],
      "stretch": [
        "Add side-by-side attention-flow diagrams for BERT, GPT, and encoder-decoder models.",
        "Add patch, subword, and speech-feature inspection views without retaining private user data.",
        "Compare a shared backbone with task-specific heads on a controlled evaluation set.",
        "Add a model-card checklist for licensing, modality coverage, privacy, and deployment constraints."
      ],
      "plan": [
        "Week 1: define the task, modality, architecture, and head schema with validation tests.",
        "Week 2: implement text and image demonstrations plus the information-flow visualisation.",
        "Week 3: add speech recognition, evaluation cards, and failure explanations.",
        "Week 4: complete accessibility review, public-source citations, and a reproducible comparison report."
      ],
      "novelty": "The router makes the architecture-to-task decision explicit instead of presenting Transformer models as interchangeable names.",
      "stack": ["TypeScript", "Accessible HTML", "SVG", "Vitest"],
      "milestones": ["Task schema", "Text/image routes", "Speech route", "Accessible evidence report"],
      "success": "A learner can defend a model-family choice by pointing to its input representation, information flow, task head, and measured limitations."
    }
  }
  ,"eai-6403-2026-09-13-153353": {
    "en": {
      "title": "ReasonRoute: an evidence-based reasoning budget router",
      "pitch": "Build an accessible local-first evaluation tool that routes synthetic or permitted public tasks to a direct-answer baseline or a reasoning workflow, then records task type, verification method, accuracy, latency, cost proxy, and failure case.",
      "problem": "A reasoning model may improve difficult tasks while adding latency and cost. Learners need evidence for when its extra inference-time computation is justified.",
      "learning": "You will connect direct generation, inference-time planning, process verification, staged training, and model-selection constraints in one inspectable evaluation product.",
      "mvp": [
        "Create a task taxonomy separating simple, creative, coding, mathematical, logical, and tool-assisted work.",
        "Implement a baseline-versus-reasoning comparison with a visible plan-and-verify workflow.",
        "Evaluate at least 50 representative prompts and record accuracy, latency, cost proxy, and failure cases.",
        "Export an accessible model-selection card explaining privacy, licensing, cost, latency, and deployment assumptions."
      ],
      "stretch": [
        "Add configurable reasoning budgets and a policy that routes only difficult tasks to the slower path.",
        "Compare final-answer supervision with process-step checks on a controlled synthetic set.",
        "Add tool-use experiments with deterministic mock databases and explicit verification logs.",
        "Publish a model-card style report describing reward misspecification, benchmark limits, and distribution shift."
      ],
      "plan": [
        "Week 1: define the task, evidence, verification, and privacy-safe evaluation schema.",
        "Week 2: implement direct and reasoning paths with deterministic synthetic fixtures.",
        "Week 3: add metrics, error analysis, and accessible reasoning-flow diagrams.",
        "Week 4: complete the routing policy, cost-latency report, and reproducibility review."
      ],
      "novelty": "The capstone treats reasoning effort as a measurable routing decision rather than a marketing label.",
      "stack": ["TypeScript", "Accessible HTML", "SVG", "Vitest"],
      "milestones": ["Task taxonomy", "Baseline and reasoning paths", "Evaluation report", "Accessible routing policy"],
      "success": "A learner can defend a reasoning-budget choice using task evidence, distinguish a final answer from a verified process, and report quality, latency, and cost together without retaining private data."
    }
  }
  ,"eai-6403-2026-09-06-154745": {
    "en": {
      "title": "BERT TaskHead Lab",
      "pitch": "Build an accessible local-first study tool that maps synthetic sentence, sentence-pair, question-context, and token-tagging examples to their BERT-style input representation and task-specific output head.",
      "problem": "BERT supports several NLP tasks, but each task reads a different representation and predicts at a different granularity. Learners need to make that architecture-to-task mapping explicit.",
      "learning": "You will connect [CLS] and [SEP] tokens, token/segment/position embeddings, masked and sentence-pair pretraining, sentence labels, answer spans, and token tags.",
      "mvp": [
        "Create an input visualiser for [CLS], [SEP], token, segment, and position embeddings.",
        "Implement four synthetic downstream-task cards for sentence classification, sentence-pair classification, QA spans, and NER/POS tagging.",
        "Show which representation and task-specific head produces each output.",
        "Export an accessible comparison report linked to the public BERT and Transformer papers."
      ],
      "stretch": [
        "Add a masked-language and next-sentence pretraining sandbox with transparent labels.",
        "Compare sentence-level, span-level, and token-level error cases on a controlled synthetic set.",
        "Add a model-card checklist for context, sequence length, evaluation, and privacy assumptions."
      ],
      "plan": [
        "Week 1: define the input, representation, prediction-unit, and head schema with validation tests.",
        "Week 2: implement the embedding and special-token visualiser plus classification tasks.",
        "Week 3: add QA span extraction and NER/POS tagging with source-linked examples.",
        "Week 4: complete accessibility review, error analysis, and a reproducible architecture report."
      ],
      "novelty": "The lab makes task granularity visible: the same contextual encoder can support different outputs only when its input format and prediction head match the task.",
      "stack": ["TypeScript", "Accessible HTML", "SVG", "Vitest"],
      "milestones": ["Embedding visualiser", "Classification routes", "QA and token tagging", "Accessible evidence report"],
      "success": "A learner can explain how BERT combines token, segment, and position information and can defend the choice of classification, span-prediction, or token-level head for a downstream task using only synthetic or permitted public examples."
    }
  },
  "ebb-6401-2026-09-16-180450": {
    "en": {
      "title": "ChainLens: a fork, oracle, and DApp provenance explorer",
      "pitch": "Build a local-first study tool that traces a transaction from Solidity source and deployment through fork choice, double-spend checks, oracle input, and DApp presentation.",
      "problem": "Learners often treat canonical-chain selection, transaction validation, off-chain data, and DApp display as one opaque blockchain operation. A provenance view makes each boundary testable.",
      "learning": "You will model forked histories, canonical and orphaned branches, Solidity-to-bytecode deployment, signatures, balance and nonce validation, oracle mediation, and node/indexer/API data paths.",
      "mvp": [
        "Render two competing branches and let a deterministic fork-choice rule identify the canonical history and orphaned branch.",
        "Simulate a Solidity source artifact, compiled bytecode, signed deployment, validator checks, and contract address.",
        "Test valid, stale-nonce, insufficient-balance, and conflicting double-spend transactions with visible state diffs.",
        "Show the provenance of a DApp value as node state, indexed history, external API data, or oracle-mediated input."
      ],
      "stretch": [
        "Add freshness, quorum, and source-reputation metadata to oracle inputs.",
        "Compare a short reorg before finality with a finalized checkpoint and explain the different user-facing assurances.",
        "Export an accessible evidence report linking every displayed value to its source and validation rule."
      ],
      "plan": [
        "Week 1: define branch, transaction, account, oracle, and provenance schemas.",
        "Week 2: implement fork choice, deployment, signature, balance, and nonce checks.",
        "Week 3: build the oracle and DApp source-path visualiser with accessible state transitions.",
        "Week 4: add reorg/finality comparison, negative tests, source citations, and an architecture report."
      ],
      "novelty": "The project makes the boundary between consensus history, transaction validity, external information, and application display visible in one traceable artifact.",
      "stack": ["TypeScript", "Accessible HTML", "SVG", "Vitest"],
      "milestones": ["Branch and transaction model", "Validation and deployment flow", "Oracle and DApp provenance UI", "Evidence and accessibility review"],
      "success": "A reviewer can follow one value from source and validation through canonical state and DApp display, distinguish a reorg from a finalized history, and explain why an oracle is a trust boundary."
    }
  }
});
