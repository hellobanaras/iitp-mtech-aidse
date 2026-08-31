// Public English-only mini-capstone ideas.
export const capstones = Object.freeze({
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
  }
});
