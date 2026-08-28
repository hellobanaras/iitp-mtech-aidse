// Public bilingual mini-capstone ideas. Keep private learner data out of this module.
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
    },
    "hi": {
      "title": "RewardSketch: एक RL समस्या-डिज़ाइन और रिवॉर्ड-ऑडिट वर्कबेंच",
      "pitch": "एक इंटरैक्टिव उपकरण का निर्माण जो एक शिक्षार्थी को एक छोटे से निर्णय की समस्या के लिए एक एजेंट, राज्य, कार्रवाई, इनाम, समाप्ति नियम और वैकल्पिक मॉडल को परिभाषित करने देता है, फिर नीतियों का अनुकरण करते हैं और महंगे एजेंट को प्रशिक्षण देने से पहले इनाम-डिज़ाइन विफलताओं को उजागर करते हैं।",
      "problem": "टीमें अक्सर एक व्यापार लक्ष्य से एक RL एल्गोरिथ्म में कूदती हैं, यह जांचने के बिना कि क्या राज्य संरक्षित है, क्रियाएं सुरक्षित हैं, पुरस्कार मैच इरादे, या विलंबित परिणाम क्रेडिट किए जा सकते हैं। खराब फॉर्मूलेशन अपशिष्ट प्रशिक्षण और इनाम हैकिंग बना सकते हैं।",
      "learning": "आप एजेंट-पर्यावरण इंटरफ़ेस, रियायती वापसी, नीतियों, मूल्य अनुमानों, मॉडल आधारित बनाम मॉडल-मुक्त धारणाओं, और एक व्याख्यात्मक उत्पाद कलाकृति का निर्माण करते समय अन्वेषण बाधाओं को औपचारिक रूप से तैयार करेंगे।",
      "mvp": [
        "स्टेट वैरिएबल्स, एक्शन, रिवॉर्ड शर्तों, टर्मिनल की स्थिति और छूट कारक के लिए एक रूप प्रदान करें।",
        "परिभाषा से एक छोटा ग्रिडवर्ल्ड या अनुक्रमण सिम्युलेटर उत्पन्न करता है।",
        "वापसी वितरण पर यादृच्छिक, स्क्रिप्ट, लालची-मूल्य और सरल योजना नीतियों की तुलना करें।",
        "फ्लैग लापता राज्य की जानकारी, रिवॉर्ड पाशहोल, असुरक्षित कार्रवाई और उद्देश्यों को एक रिवॉर्ड टर्म द्वारा हावी किया गया।"
      ],
      "stretch": [
        "एक सीखा संक्रमण मॉडल जोड़ें और वास्तविक पर्यावरण रोलआउट के साथ नकली योजना की तुलना करें।",
        "सुरक्षा बजट और उल्लंघन डैशबोर्ड के साथ समर्थन बाधित RL।",
        "एक जिमनासियम-संगत पर्यावरण कंकाल और प्रयोग कार्ड का निर्यात करें।",
        "अध्ययन शेड्यूलिंग, सूची नियंत्रण और ऊर्जा प्रबंधन के लिए लेखापरीक्षित योगों की लाइब्रेरी बनाएं।"
      ],
      "plan": [
        "सप्ताह 1: स्कीमा को परिभाषित करें और एजेंट-पर्यावरण चरण पाश को ट्रेजेक्टरी लॉगिंग के साथ लागू करें।",
        "सप्ताह 2: छूट प्राप्त रिटर्न, बेसलाइन नीतियों, भूखंडों और नियतात्मक / stochastic संक्रमण विकल्प जोड़ें।",
        "सप्ताह 3: रिवॉर्ड ऑडिट और प्रतिकूल परीक्षण मामलों को लागू करें जो विनिर्देश गेमिंग को प्रकट करते हैं।",
        "सप्ताह 4: पैकेज यूआई, निर्यात प्रारूप, प्रलेखन, और एक मामले अध्ययन रिपोर्ट दो योगों की तुलना में।"
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
    },
    "hi": {
      "title": "BanditLab: सुरक्षा-जारी अन्वेषण के साथ अनुकूली अध्ययन हस्तक्षेप",
      "pitch": "एक छोटा प्रयोग मंच बनाएँ जो संशोधन प्रारूपों के बीच चयन करता है-कार्य उदाहरण, पुनर्प्राप्ति प्रश्नोत्तरी, दृश्य स्पष्टीकरण, या लघु रीडिंग-और सीखता है कि कौन से प्रारूप प्रत्येक शिक्षार्थी के अगले दिन की याद में सुधार करता है।",
      "problem": "अध्ययन प्लेटफॉर्म आमतौर पर निश्चित नियमों के साथ सामग्री को रैंक करते हैं या क्लिक को अनुकूलित करते हैं। शिक्षार्थियों को मास्टरी से जुड़े निर्णयों की आवश्यकता होती है, जबकि शिक्षकों को अनिश्चितता के बारे में प्रयोग और सबूतों पर पारदर्शी सीमा की आवश्यकता होती है।",
      "learning": "आप वृद्धिशील कार्रवाई मूल्यों, É-greedy, UCB, और थॉम्पसन नमूनाकरण को लागू करेंगे; अफसोस और अंशांकन को मापें; फिर देरी, शोर और नीति-निर्भर प्रतिक्रिया का सामना करें।",
      "mvp": [
        "चार अध्ययन हस्तक्षेपों और विन्यास योग्य इनाम वितरण के साथ एक सिम्युलेटर बनाएं।",
        "एक इंटरफेस के पीछे greedy, ε-greedy, UCB और Thompson-sampling नीतियों को लागू करें।",
        "प्लॉट संचयी रिवॉर्ड, अफसोस, एक्शन गिनती और अनिश्चितता का अनुमान लगाते हैं।",
        "एक सुरक्षा मंजिल जोड़ें जो अत्यधिक विफलता दर के साथ हस्तक्षेप को रोकने के लिए चुना जा रहा है।"
      ],
      "stretch": [
        "सिस्टम को विषय, पूर्व मास्टरी और उपलब्ध अध्ययन समय का उपयोग करके एक संदर्भात्मक बैंडिट में बदल दें।",
        "मॉडल अगले दिन याद के रूप में देरी इनाम और क्रेडिट-साइनमेंट heuristics की तुलना करें।",
        "पॉलिसी मूल्यांकन के लिए उलटा-propensity स्कोरिंग के साथ ऑफ़लाइन खेलना जोड़ें।",
        "एक शिक्षक डैशबोर्ड का खुलासा करते हुए कि नीति ने एक विशेष हस्तक्षेप की खोज क्यों की।"
      ],
      "plan": [
        "सप्ताह 1: चार-हार्म व्याख्यान उदाहरण को पुन: उत्पन्न करना और 8, 12, 12.5 और 11 के खिलाफ अनुभवजन्य साधनों को सत्यापित करना।",
        "सप्ताह 2: कई यादृच्छिक बीज और क्षितिज पर बेंचमार्क एक्शन-चयन नीतियां।",
        "सप्ताह 3: गैर-स्टेशनरी रिवॉर्ड्स, स्थिर चरण आकार, अनिश्चितता और सुरक्षा बाधाएं जोड़ें।",
        "सप्ताह 4: एक हल्के वेब यूआई कनेक्ट, दस्तावेज़ जिम्मेदार उपयोग सीमाओं, और एक प्रयोग रिपोर्ट पेश करते हैं।"
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
    },
    "hi": {
      "title": "सिग्नलफाउंड्री - एक कम-डाटा निर्णय copilot",
      "pitch": "एक छोटे से वेब उत्पाद का निर्माण जो ऑडिट करते हैं कि कैसे सबूत एकत्र किए गए थे, दुर्लभ घटनाओं की खोज करते हैं, और कुछ लेबलों के लिए मनुष्यों से पूछते हैं जो निर्णय में सुधार करेंगे।",
      "problem": "छोटे निर्माताओं, क्लीनिक, गैर सरकारी संगठनों और परिसर टीमों में अक्सर गन्दा सर्वेक्षण या परिचालन लॉग, कुछ विफलता उदाहरण और कोई डेटा-साइंस कर्मचारी नहीं होते हैं। एक पॉलिश औसत या सटीकता स्कोर गलत विश्वास पैदा कर सकता है जबकि समूह और दुर्लभ उच्च लागत वाली घटनाओं का अनावरण किया जाता है।",
      "learning": "बिल्ड आपको सर्वेक्षण डिजाइन, सिद्धि, डेटाफ़िकेशन, असंतुलन-एवेयर मेट्रिक्स, एनोमाली डिटेक्शन, मानव फीडबैक और एक वैकल्पिक कुछ-शॉट अनुकूलन मॉड्यूल को जोड़ने के लिए मजबूर करता है - व्याख्यान के पूरे वैचारिक आर्क 1.",
      "mvp": [
        "एक CSV प्लस एक लघु निर्णय संक्षिप्त वर्णन लक्ष्य आबादी, परिणाम और त्रुटि लागत अपलोड करें।",
        "प्रोफ़ाइल लापतापन, डुप्लिकेट, उपसमूह कवरेज, लेबल संतुलन और संभावित नमूना अंतराल।",
        "एक अलगाव वन या स्थानीय बाहरी फैक्टर बेसलाइन को प्रशिक्षित करें और एक समायोज्य चेतावनी सीमा को उजागर करें।",
        "लेबल मौजूद होने पर सटीक, याद, झूठी सकारात्मक दर और भ्रम मैट्रिक्स दिखाएं।",
        "एक मानव समीक्षा कतार जोड़ें जिसका पुष्टिकरण मामलों को सिद्धता और मॉडल संस्करण के साथ संग्रहीत किया जाता है।"
      ],
      "stretch": [
        "सबसे अनौपचारिक अनिश्चित मामलों के लिए लेबल का अनुरोध करने के लिए सक्रिय सीखने का उपयोग करें।",
        "एक छोटे से लेबल समर्थन सेट के लिए प्रोटोटाइप-नेटवर्क अनुकूलन जोड़ें।",
        "बहुमॉडल दोष समीक्षा के लिए सारणीबद्ध रिकॉर्ड के साथ छवि सबूत स्वीकार करें।",
        "एक हल्के मॉडल कार्ड के साथ समय के साथ ट्रैक बहाव और उपसमूह मीट्रिक।",
        "एक गोपनीयता संरक्षित स्थानीय मोड प्रदान करें जिसमें कच्चे रिकॉर्ड उपयोगकर्ता की मशीन कभी नहीं छोड़ते हैं।"
      ],
      "plan": [
        "सप्ताह 1 - एक निर्णय चुनें, दो डोमेन उपयोगकर्ताओं का साक्षात्कार करें, लक्ष्य आबादी और प्रत्येक त्रुटि की लागत को परिभाषित करें।",
        "सप्ताह 2 - निर्माण ingestion, सिद्धता मेटाडाटा, डेटा-गुणवत्ता की जाँच, और उपसमूह/संतुलन विचारों।",
        "सप्ताह 3 - ऐड एनोमाली बेसलाइन्स, थ्रेसहोल्ड कंट्रोल्स, कॉस्ट-एवेयर मैट्रिक्स और मानव समीक्षा कतार।",
        "सप्ताह 4 - बेसलाइन के खिलाफ कुछ-शॉट या सक्रिय-लर्निंग एक्सटेंशन की तुलना करें; एक लघु मूल्यांकन और डेमो प्रकाशित करें।"
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
    },
    "hi": {
      "title": "DecodeBench — controlled generation observatory",
      "pitch": "एक local-first lab बनाएँ जो समान prompt को greedy, temperature, top-k और top-p decoding से चलाकर token probabilities, entropy, branching paths, latency, repetition और reproducibility दिखाए।",
      "problem": "Teams generation settings अक्सर intuition से tune करती हैं और high temperature को बिना measurement के creativity कह देती हैं। Model revision, seed, context truncation तथा decoding configuration log न होने पर output reproduce भी नहीं होता।",
      "learning": "आप lecture का पूरा inference path—tokenization, model forward pass, logits, softmax, autoregressive feedback, temperature, top-k और top-p—implement करेंगे, साथ ही evaluation, observability और safe product experimentation सीखेंगे।",
      "mvp": [
        "एक छोटा open decoder model locally चलाकर prompt, max tokens, seed, temperature, top-k और top-p controls दें।",
        "हर step पर selected token, top candidates, logits/probabilities, entropy और cumulative sequence probability दिखाएँ।",
        "कम-से-कम चार decoding profiles की repetition, diversity, latency और exact reproducibility पर तुलना करें।",
        "Model revision, tokenizer revision, prompt hash, context length, parameters, seed और output वाला signed experiment record export करें।"
      ],
      "stretch": [
        "Short prompt के लिए attention-head explorer जोड़ें और attention weights को causal explanation नहीं, diagnostic के रूप में label करें।",
        "Factual QA, brainstorming, summarization और code के लिए अलग quality तथा safety metrics वाली task suites बनाएँ।",
        "Regulated vocabulary के लिए constrained decoding या allow/deny token sets जोड़ें।",
        "Browser-only WebGPU mode दें ताकि private prompts learner के device से बाहर न जाएँ।"
      ],
      "plan": [
        "सप्ताह 1: deterministic tokenization, model loading, greedy generation और reproducible run metadata implement करें।",
        "सप्ताह 2: temperature, top-k, top-p, probability charts, entropy और token-path visualization जोड़ें।",
        "सप्ताह 3: evaluation suites, repeated-seed experiments और safety/repetition diagnostics बनाएँ।",
        "सप्ताह 4: local-first UI, experiment export, documentation और comparative technical report तैयार करें।"
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
    },
    "hi": {
      "title": "RegretLab — audit योग्य adaptive-experiment studio",
      "pitch": "एक local-first simulator और decision dashboard बनाएँ जिसमें learner bandit arms define करे, greedy तथा epsilon-greedy policies की तुलना करे, reward drift जोड़े, और हर action को estimates, uncertainty, action gaps तथा accumulated regret के माध्यम से समझ सके।",
      "problem": "छोटी product और learning teams adaptive experiments चलाते समय अक्सर नहीं देख पातीं कि शुरुआती noise, fixed exploration, बदलते rewards या unsafe actions users को कैसे प्रभावित करते हैं। सामान्य dashboard clicks दिखा सकता है, पर opportunity cost, policy bias और winner की stability छिपा देता है।",
      "learning": "यह build lecture के formulas को working system में बदलता है: sample-average action values, epsilon-greedy selection, optimal-action tracking, action-gap regret, replicated 10-armed testbeds, और stationary simulation बनाम monitored deployment का स्पष्ट अंतर।",
      "mvp": [
        "Hidden true means, reward noise, horizon, random seed और optional change points वाले configurable Bernoulli तथा Gaussian arms बनाएँ।",
        "Random tie-breaking और per-action counts के साथ greedy, epsilon-greedy तथा decreasing-epsilon policies implement करें।",
        "कई replicated runs पर average reward, percent optimal action, instantaneous regret, cumulative regret और action-selection frequency plot करें।",
        "एक event ledger जोड़ें जो हर choice को greedy या exploratory बताए और decision से पहले उपलब्ध estimates record करे।",
        "Configuration, seed, policy version, aggregate metrics और confidence intervals वाला reproducible experiment bundle export करें।"
      ],
      "stretch": [
        "Nonstationary rewards के लिए UCB, optimistic initialization, Thompson sampling और constant-step-size tracking जोड़ें।",
        "Configurable downside-risk या minimum-support constraint से अधिक जोखिम वाले arms को रोकने वाली safety layer बनाएँ।",
        "Logged data पर shadow-policy comparison चलाएँ और off-policy evaluation की assumptions तथा limits स्पष्ट label करें।",
        "Challenge scenarios और common implementation errors की automatic diagnosis के साथ simulator को teaching product में बदलें।"
      ],
      "plan": [
        "सप्ताह 1: arm distributions, policy interfaces, seeded simulation, sample-average updates और unit tests implement करें।",
        "सप्ताह 2: replicated testbeds, reward/optimal-action/regret charts और step-by-step action ledger जोड़ें।",
        "सप्ताह 3: drift, decreasing epsilon, confidence intervals और policy-comparison reports बनाएँ।",
        "सप्ताह 4: safety controls जोड़ें, local-first UI package करें और reproducible technical evaluation प्रकाशित करें।"
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
    },
    "hi": {
      "title": "DriftBench — adaptive bandit policy auditor",
      "pitch": "ऐसा private decision-lab बनाएँ जो controlled reward drift generate करे, sample-average, constant-step-size, epsilon-greedy और optimistic policies compare करे, और बताए कि कौन-सी policy बहुत धीमी react या बहुत अधिक explore करती है।",
      "problem": "Teams recommendations और experiments को fixed reward distribution मानकर deploy करती हैं, फिर demand, seasonality या user mix बदलने पर noisy performance को गलत पढ़ती हैं। उन्हें noise और genuine drift अलग करने तथा estimator memory का decision पर प्रभाव देखने का compact तरीका चाहिए।",
      "learning": "आप action-specific incremental updates, configurable drift processes, stochastic-approximation schedules, optimistic priors, exploration policies, regret metrics और time-aligned diagnostic visualizations implement करेंगे।",
      "mvp": [
        "Configurable k-armed bandit के लिए stationary, abrupt-change और random-walk reward generators बनाएँ।",
        "Epsilon-greedy और optimistic initialization के साथ sample-average तथा constant-alpha estimates implement करें।",
        "Shared timeline पर reward, regret, optimal-action rate, estimate lag और effective memory plot करें।",
        "Audit report बनाएँ जो बताए कि कौन-सी policy कब fail हुई, drift कब शुरू हुआ और किस parameter ने lag या variance पैदा की।"
      ],
      "stretch": [
        "Credible drift के बाद estimate reset या step size temporarily बढ़ाने वाला change-point detection जोड़ें।",
        "अगली lecture के बाद UCB और sliding-window baselines जोड़कर uncertainty behavior compare करें।",
        "User identifiers retain किए बिना anonymized product-event CSV का offline replay support करें।",
        "Reproducible simulation seeds और confidence intervals के साथ report को policy-selection assistant बनाएँ।"
      ],
      "plan": [
        "Week 1: environments, incremental estimators, seeded simulations और correctness tests implement करें।",
        "Week 2: policies, regret metrics, drift scenarios और comparison plots जोड़ें।",
        "Week 3: interactive audit UI और plain-language failure explanations बनाएँ।",
        "Week 4: synthetic incidents पर validate करें, limitations document करें और reproducible demo package करें।"
      ]
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
    },
    "hi": {
      "title": "KDD Provenance Lab — messy sources से decision-ready evidence तक",
      "pitch": "एक छोटा reproducible data-mining workbench बनाएँ जो heterogeneous CSV, JSON और text samples ले, provenance record करे, cleaning/integration/selection/transformation दिखाए और descriptive patterns को rare-event alerts से compare करे।",
      "problem": "Teams mismatched sources से dashboards बनाकर majority-class metric या untraceable pattern पर भरोसा करती हैं। Learner को यह देखने का तरीका चाहिए कि schema, subgroup coverage, imbalance और privacy controls decision कैसे बदलते हैं।",
      "learning": "KDD pipeline, association और classification baselines, stratified evaluation, anomaly detection, precision/recall, provenance checks और privacy-preserving presentation implement करें।",
      "mvp": [
        "Schema और quality issues वाली तीन heterogeneous source files बनाएँ और cleaning/integration decisions log करें।",
        "Mining से पहले selectable target population और subgroup coverage report जोड़ें।",
        "Majority-class classifier और rare-event detector को confusion matrix, precision, recall और cost-weighted threshold से compare करें।",
        "हर pattern के लिए source references और masked identifiers वाला explainable evidence card दिखाएँ।"
      ],
      "stretch": [
        "Streaming source जोड़कर incremental aggregation को batch recomputation से compare करें।",
        "Interactive constraints से महँगी mining से पहले uninteresting association patterns prune करें।",
        "Provenance search से absent value और genuinely missing value अलग करें।",
        "Synthetic data और audit logs वाला BI dashboard तथा reproducible notebook package करें।"
      ],
      "plan": [
        "Week 1: schemas, synthetic sources, provenance log, cleaning tests और integration checks बनाएं।",
        "Week 2: descriptive patterns, association rules, subgroup summaries और visual evidence cards implement करें।",
        "Week 3: classification, anomaly detection, imbalance-aware metrics और human review workflow जोड़ें।",
        "Week 4: privacy threat-model करें, reproducible experiments चलाएँ, limitations लिखें और demo publish करें।"
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
    },
    "hi": {
      "title": "PolicyLedger — blockchain governance readiness lab",
      "pitch": "एक छोटा decision-support lab बनाएँ जो smart contract या consortium network launch से पहले use case को policy layers, risks, actors, controls और auditable checklist से map करे।",
      "problem": "Teams technically valid ledger deploy कर सकती हैं, पर patient privacy, key custody, interoperability meaning, accountability या upgrade authority अस्पष्ट रह सकते हैं। PolicyLedger इन hidden assumptions को visible और testable बनाता है।",
      "learning": "एक explainable product में data privacy, security, HIPAA-style compliance, risk management, consensus trade-offs, governance roles और institutional-to-infrastructure policy layers जोड़ना सीखेंगे।",
      "mvp": [
        "Sector, data sensitivity, participants, trust model, consensus choice और cross-system integration के लिए guided intake बनाएँ।",
        "Institutional law, organization/individual behaviour, application rules और protocol security का layered governance map बनाएँ।",
        "Key theft, smart-contract bugs, data leakage, 51% concentration, regulatory change और human error को owners तथा mitigations के साथ score करें।",
        "Authority, consent, audit evidence, incident response और change procedures वाला review-ready decision record export करें।"
      ],
      "stretch": [
        "HIPAA-style healthcare controls और किसी अन्य sector requirements की तुलना करने वाले jurisdiction templates जोड़ें।",
        "एक ही network के लिए proof-of-work और proof-of-stake cost, concentration तथा failure scenarios simulate करें।",
        "Ledgers के बीच identity, permission, schema और semantic compatibility test करने वाला interoperability contract जोड़ें।",
        "Upgrades, conflicts, emergency pauses और accountability hand-offs के लिए tabletop governance exercise दें।"
      ],
      "plan": [
        "Week 1: policy schema, threat taxonomy, actor roles और दो synthetic use cases define करें।",
        "Week 2: layered maps, risk scoring, control ownership और evidence checklist implement करें।",
        "Week 3: consensus comparison और reproducible scenario data के साथ interoperability tests जोड़ें।",
        "Week 4: governance tabletop चलाएँ, limitations document करें और anonymized decision-record demo publish करें।"
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
    },
    "hi": {
      "title": "ScaleSense — measurement-aware data-quality workbench",
      "pitch": "एक local-first data profiler बनाएँ जो statistics निकालने से पहले हर column का अर्थ पूछे, केवल semantics-preserving transformations सुझाए और sparse feature को shared absence की बजाय presence से compare करने का संकेत दे।",
      "problem": "Teams अक्सर nominal categories को integers में encode करके mean निकालती हैं या sparse binary events पर symmetric distance लगाती हैं। Dashboard precise दिखता है, पर data का प्रश्न चुपचाप बदल जाता है।",
      "learning": "Data-object और attribute metadata, quality checks, nominal/ordinal/interval/ratio declarations, invariant-preserving transforms, discrete/continuous detection और association-style asymmetric similarity implement करना सीखेंगे।",
      "mvp": [
        "छोटी CSV upload कराएँ और प्रत्येक attribute का measurement level, value-count type और missing-value policy declare या infer करें।",
        "ID का mean, Celsius पर ratio और order तोड़ने वाली ordinal encoding जैसे suspicious arithmetic flag करें।",
        "One-to-one, monotonic, affine और multiplicative transformations को constants तथा semantic guarantees के audit trail सहित preview करें।",
        "Sparse student-course या basket dataset पर symmetric matching और Jaccard-style presence similarity compare करें।"
      ],
      "stretch": [
        "Schema contracts को scikit-learn pipeline के साथ भेजें और incompatible operation पर fail fast करें।",
        "Explicit time-zone, granularity और coordinate metadata के साथ temporal तथा spatial attributes support करें।",
        "100°C बनाम 50°C और ID averaging जैसे counterexamples वाला interactive teaching mode बनाएँ।",
        "Provenance, measurement levels, permitted operations और quality limitations वाला privacy-preserving data card export करें।"
      ],
      "plan": [
        "सप्ताह 1: attribute-schema model define करें, CSV samples ingest करें और quality/provenance checks implement करें।",
        "सप्ताह 2: measurement-level declarations, operation guards और चार invariant-preserving transformations implement करें।",
        "सप्ताह 3: discrete/binary/continuous detection, sparse asymmetric similarity और visual counterexamples जोड़ें।",
        "सप्ताह 4: local-first UI package करें, auditable data card export करें और दो synthetic datasets पर evaluation करें।"
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
    },
    "hi": {
      "title": "ChainSteward: policy-to-protocol governance workbench",
      "pitch": "एक local-first governance workbench बनाएँ जो consortium के decision rights, proposal workflow, voting threshold, upgrade policy और dispute path को auditable policy pack तथा testable smart-contract skeleton में बदलता है।",
      "problem": "Blockchain projects अक्सर यह तय किए बिना vote encode कर देते हैं कि proposal कौन देगा, validate कौन करेगा, conflict कैसे संभलेगा या upgrade के समय क्या होगा। अस्पष्ट authority security, legal और adoption risk बढ़ाती है।",
      "learning": "इस build में on-chain/off-chain governance, proposal और threshold logic, role-based permissions, version compatibility, oracle trust boundaries और regulatory traceability को model करना सीखेंगे।",
      "mvp": [
        "Organizations, roles, proposal types, voter eligibility, quorum, threshold और emergency powers को versioned policy schema में define करें।",
        "छह nodes के proposal submit, broadcast, vote, accept या reject करने को visible evidence trail के साथ simulate करें।",
        "Solidity-style pseudocode और human-readable governance charter generate करें; missing roles, unreachable thresholds और single-admin risks flag करें।",
        "Release notes, backward compatibility, legal review, dispute escalation और post-change monitoring के लिए upgrade checklist जोड़ें।"
      ],
      "stretch": [
        "Private participant data expose किए बिना append-only event log और verifiable policy hashes जोड़ें।",
        "Decentralized, consortium और private configurations को latency, control, transparency और failure recovery पर compare करें।",
        "Oracle intake screen जोड़ें जो external fact decision को प्रभावित करने से पहले source, freshness, signer और confidence record करे।",
        "हर obligation को owner, evidence item और escalation route से map करने वाला regulator/board review pack export करें।"
      ],
      "plan": [
        "सप्ताह 1: policy schema, role model, proposal lifecycle और six-node simulator define करें।",
        "सप्ताह 2: voting, quorum/threshold checks, audit events और 50% tie जैसे adversarial cases implement करें।",
        "सप्ताह 3: upgrade compatibility, dispute workflows, oracle provenance और risk flags जोड़ें।",
        "सप्ताह 4: policy charter, pseudocode export, governance-model comparison और दो consortium scenarios पर short evaluation package करें।"
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
    },
    "hi": {
      "title": "PrivacyLens: threat-aware big-data access review",
      "pitch": "एक local-first data-lake review workbench बनाएँ जो acquisition, storage, analytics और sharing में dataset का path map करे, STRIDE threats को RBAC/ABAC/PBAC policies के विरुद्ध test करे और anonymization choices की जाँच करे।",
      "problem": "Security reviews अक्सर controls की list बनाती हैं पर उन्हें concrete data lifecycle से नहीं जोड़तीं। Exposed column, over-privileged service, spoofable ingestion source या sharing के बाद re-identification risk छूट सकता है।",
      "learning": "इस build में lifecycle threat modelling, STRIDE classification, least-privilege authorization, MFA/SSO/Kerberos identity boundaries, column-level policy और privacy-risk testing का अभ्यास होगा।",
      "mvp": [
        "Sources, acquisition, raw/processed stores, analytics jobs, users, services और third-party exports को versioned graph में model करें।",
        "हर edge पर STRIDE prompts चलाकर risk, evidence, owner, likelihood, impact और control record करें।",
        "Time, location, device और role context के साथ anonymized तथा identifying columns पर RBAC, ABAC और PBAC requests simulate करें।",
        "Masking और quasi-identifier linkage tests चलाएँ तथा raw participant data के बिना privacy-aware review pack export करें।"
      ],
      "stretch": [
        "Kerberos-style ticket-flow visualizer और short-lived token/revocation checks जोड़ें।",
        "AES-at-rest, TLS-in-transit, centralized key management और HSM assumptions को control matrix में compare करें।",
        "Synthetic data पर differential-privacy budget experiments और accuracy बनाम disclosure trade-off दिखाएँ।",
        "GDPR, CCPA या HIPAA-style obligations के लिए regulator-ready evidence mapping generate करें।"
      ],
      "plan": [
        "सप्ताह 1: lifecycle graph, threat taxonomy और synthetic data policy schema define करें।",
        "सप्ताह 2: STRIDE prompts, RBAC/ABAC/PBAC evaluation और column-level decisions implement करें।",
        "सप्ताह 3: authentication-boundary simulation, anonymization/linkage tests और evidence ownership जोड़ें।",
        "सप्ताह 4: review dashboard, privacy report, adversarial scenarios और short evaluation package करें।"
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
    },
    "hi": {
      "title": "SeasonalSignal Lab: explainable time-series decomposition workbench",
      "pitch": "एक local-first workbench बनाएँ जो timestamped dataset को explainable diagnostic report में बदले: trend, seasonal period, rolling variability, ACF/PACF clues, decomposition plots और reproducible forecast baseline।",
      "problem": "Teams अक्सर यह जाँचे बिना ARIMA या deep learning शुरू कर देती हैं कि series stationary है या नहीं, seasonality वास्तविक है या नहीं, या smoothing window turning point छिपा रही है। Transparent diagnostic artifact model choice को auditable बना सकता है।",
      "learning": "इस build में time-aware data preparation, seeded synthetic data, line/seasonal plots, rolling statistics, additive decomposition, ADF checks और leakage-safe baseline evaluation implement करेंगे, जबकि raw observations traceable रहेंगी।",
      "mvp": [
        "Timestamp column वाली CSV import करें, cadence validate करें, gaps/outliers flag करें और immutable raw snapshot रखें।",
        "Source time ranges के साथ line, seasonal, distribution, rolling mean/variance, ACF/PACF और decomposition views बनाएं।",
        "Chronological splits पर seasonal-naive, moving-average और एक classical forecast baseline को MAE/RMSE से compare करें।",
        "Concise report export करें जो trend, seasonality, stationarity और चुने गए window/model के signals समझाए।"
      ],
      "stretch": [
        "Automatic frequency suggestions और spectral-period explorer जोड़ें तथा irregular sampling पर warnings दें।",
        "Change-point और regime-shift checks जोड़ें ताकि पुराना seasonal pattern blindly trust न हो।",
        "Feature-availability timestamps रखते हुए multivariate lag inspection और VAR baseline support करें।",
        "Interactive classroom mode बनाएं जिसमें learners seeded data पर noise, amplitude, period और rolling window बदल सकें।"
      ],
      "plan": [
        "सप्ताह 1: timestamp validation, raw-data lineage, seeded synthetic-series generator और baseline plots implement करें।",
        "सप्ताह 2: seasonal views, rolling statistics, ACF/PACF, spectral hints और decomposition panels जोड़ें।",
        "सप्ताह 3: leakage checks के साथ ADF, chronological evaluation, baselines और error diagnostics जोड़ें।",
        "सप्ताह 4: report/export flow, accessibility, tests और दो window/model choices की case study package करें।"
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
    },
    "hi": {
      "title": "DataTrust Compass: explainable data-quality and lineage workbench",
      "pitch": "एक local-first workbench बनाएँ जो messy datasets को profile करे, measurement और collection risks map करे, और analytics या machine learning से पहले explainable quality तथा lineage report बनाए।",
      "problem": "जब missing values, duplicate records, inconsistent formats, noisy measurements या collection artifacts बहुत देर से मिलते हैं, तो data teams model debugging में समय खोती हैं। Transparent pre-flight report data readiness और remediation decisions को auditable बना सकती है।",
      "learning": "इस build में data objects और attributes profiling, measurement-scale awareness, missingness तथा duplicate detection, robust noise checks, lineage capture और evidence-based quality scoring का अभ्यास होगा—बिना uncertainty को एक opaque number में छिपाए।",
      "mvp": [
        "CSV या JSON import करें, immutable raw snapshot रखें, attribute types और measurement scales infer करें तथा cadence/schema inconsistencies flag करें।",
        "Row-level evidence के साथ missing values, duplicates, outliers, conflicting records, discrete/continuous fields और asymmetric binary attributes profile करें।",
        "Configurable rules और synthetic fixtures से likely measurement error को collection error से तथा noise को deterministic artifacts से अलग करें।",
        "Remediation suggestions, lineage metadata, confidence notes और before/after cleaning comparison वाला bilingual-ready quality report export करें।"
      ],
      "stretch": [
        "Domain constraints, cross-field consistency और nominal/ordinal/interval/ratio-aware transformations के लिए rule editor जोड़ें।",
        "Reproducible data-contract checker और drift monitor जोड़ें जो नए batches को approved profile से compare करे।",
        "Privacy-preserving sample views और signed evidence bundles support करें ताकि raw sensitive rows दिए बिना findings audit हो सकें।",
        "Classroom mode बनाएं जिसमें controlled missingness, noise, artifacts, duplicates और collection bias inject करके interactive experiments किए जा सकें।"
      ],
      "plan": [
        "सप्ताह 1: immutable ingestion, type/scale inference, profile summaries और seeded quality-fixture generation implement करें।",
        "सप्ताह 2: missingness, duplicates, inconsistency, outlier, noise और artifact detectors को evidence links के साथ जोड़ें।",
        "सप्ताह 3: lineage, remediation transforms, confidence scoring, drift checks और privacy-safe report exports जोड़ें।",
        "सप्ताह 4: dashboard, bilingual explanations, tests, accessibility और दो cleaning policies की case study package करें।"
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
    },
    "hi": {
      "title": "LedgerGuard: policy-aware DLT compliance और evidence workbench",
      "pitch": "एक local-first workbench बनाएँ जो blockchain workflow को AML/KYC, privacy, interoperability और sustainability controls से map करे तथा sensitive personal data को ledger पर copy किए बिना auditable evidence bundle बनाए।",
      "problem": "Teams अक्सर blockchain से trust solve करने का दावा करती हैं, लेकिन data minimisation, legal ownership, cross-platform reconciliation और external-input risk स्पष्ट नहीं करतीं। Policy-aware evidence workflow deployment से पहले इन gaps को दिखा सकता है।",
      "learning": "आप threat/obligation mapping, hash-based document references, privacy-safe evidence design, KYC/AML control modelling, schema interoperability, consensus assumptions और responsible-adoption review का अभ्यास करेंगे।",
      "mvp": [
        "Finance या supply-chain workflow में roles, KYC/AML checkpoints, policy obligations और explicit trust boundaries model करें।",
        "Sample documents governed store में रखें, simulated ledger पर केवल hashes/references लिखें और access/deletion implications दिखाएँ।",
        "दो simulated platforms के बीच schemas validate करने और reconciliation failures record करने वाला interoperability mapper जोड़ें।",
        "Control owners, source references, residual risks, environmental assumptions और consensus limitations वाला evidence report export करें।"
      ],
      "stretch": [
        "Cross-border privacy, digital-asset और reporting obligations के लिए configurable jurisdiction profiles जोड़ें।",
        "Real personal data के बिना synthetic suspicious-activity cases और monitoring-rule precision/recall evaluation जोड़ें।",
        "Disputed records के लिए signed privacy-preserving evidence bundle तथा appeal/incident workflow बनाएँ।",
        "Centralised, consortium और public-ledger architectures को cost, resilience, governance और sustainability पर compare करें।"
      ],
      "plan": [
        "सप्ताह 1: workflow, roles, obligations, threat model, synthetic fixtures और trust boundaries define करें।",
        "सप्ताह 2: hash/reference storage, KYC/AML checkpoints, access/deletion simulation और control-owner views implement करें।",
        "सप्ताह 3: schema mapping, reconciliation, residual-risk scoring और privacy-safe evidence exports जोड़ें।",
        "सप्ताह 4: ledger architectures compare करें, failure modes test करें, limitations document करें और demo package करें।"
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
    },
    "hi": {
      "title": "TimeSeries Triage Lab",
      "pitch": "ऐसा notebook-to-dashboard workbench बनाइए जो ordered series को profile करे, shape visualise करे, data-quality issues flag करे, stationarity test करे और forecast से पहले हर transformation record करे।",
      "problem": "Teams अक्सर gaps, outliers, skew या changing variance देखे बिना chart से model पर चले जाते हैं। Auditable diagnostic lane assumptions को visible और reproducible बनाती है।",
      "learning": "Categorical और quantitative summaries, IQR और z-score screening, time-aware imputation, line/histogram/box diagnostics, ACF/PACF interpretation और stationarity checks का अभ्यास करें।",
      "mvp": [
        "Timestamp और value column वाली CSV upload करके variable type, missingness, distribution और summary statistics report करें।",
        "Chronological, histogram और box-plot views में raw तथा imputed points के hover labels दिखाएँ।",
        "Raw series overwrite किए बिना forward fill, interpolation और seasonal imputation compare करने दें।",
        "ADF चलाकर differenced/log-transformed candidates और exportable decision log दिखाएँ।"
      ],
      "novelty": "यह product preprocessing choices को hidden notebook mutations नहीं, बल्कि first-class reviewable evidence मानता है।",
      "stack": [
        "Python",
        "pandas",
        "statsmodels",
        "Plotly",
        "Streamlit"
      ],
      "milestones": [
        "Week 1: profile और visualise",
        "Week 2: transparent imputation और outlier flags",
        "Week 3: ADF, differencing और transformation comparison",
        "Week 4: reproducible diagnostic report और demo package करें"
      ],
      "success": "Learner हर flagged point और transformation explain कर सके, report reproduce कर सके और temporal evidence shuffle किए बिना modelling baseline चुन सके।"
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
    },
    "hi": {
      "title": "QualityLens: auditable data-readiness workbench",
      "pitch": "ऐसा local-first workbench बनाइए जो model train करने से पहले dataset की measurement quality, missingness, duplicates, sampling balance और preprocessing decisions profile करे।",
      "problem": "Teams अक्सर deletion, imputation, aggregation या sampling का कारण record किए बिना data बदल देती हैं। Model तेज हो सकता है, पर silently biased, stale या rare cases के लिए कमजोर हो सकता है।",
      "learning": "Precision/bias/accuracy reasoning, outlier triage, missing-value strategies, entity-resolution safeguards, metadata contracts, aggregation और representative/stratified sampling का अभ्यास करें।",
      "mvp": [
        "Units, valid ranges, measurement level और missing-value sentinels बताने वाली metadata file के साथ tabular dataset upload करें।",
        "Raw rows delete किए बिना precision proxies, outlier candidates, missingness patterns, cross-field consistency और duplicate/near-duplicate matches report करें।",
        "Deletion, interpolation, neighbor/mode imputation, aggregation, simple random और stratified sampling को versioned branches के रूप में compare करें।",
        "Population changes, assumptions, retained rare groups और reproducible decision log वाला data-readiness report export करें।"
      ],
      "stretch": [
        "Training snapshot से current data compare करके drift और timeliness checks तथा stale attributes flags जोड़ें।",
        "Stable fields और uncertainty score के evidence के साथ candidate entity merges को reviewer approve/reject करने दें।",
        "हर cleaning और sampling branch के नीचे baseline model metrics, rare-class recall और calibration simulate करें।",
        "Student या customer records expose किए बिना workflow demo करने के लिए privacy-safe synthetic fixtures जोड़ें।"
      ],
      "plan": [
        "सप्ताह 1: metadata schema, profile, precision/outlier और missingness views बनाएं।",
        "सप्ताह 2: consistency rules, duplicate review और non-destructive imputation branches जोड़ें।",
        "सप्ताह 3: aggregation, random/stratified sampling और population-difference diagnostics implement करें।",
        "सप्ताह 4: baseline model जोड़ें, audit report export करें, rare-class scenarios test करें और demo package करें।"
      ],
      "novelty": "यह product data-quality और sampling choices को inspectable evidence बनाता है; raw data, transformations और population impact notebook में छिपने के बजाय साथ दिखाई देते हैं।",
      "stack": [
        "Python",
        "pandas",
        "scikit-learn",
        "Great Expectations",
        "Streamlit"
      ],
      "milestones": [
        "Week 1: profile और quality flags",
        "Week 2: reviewable repair branches",
        "Week 3: sampling और population diagnostics",
        "Week 4: model impact report और demo"
      ],
      "success": "Reviewer हर retained, repaired, removed या sampled record को documented rule से trace कर सके और rare groups तथा model readiness पर असर explain कर सके।"
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
    },
    "hi": {
      "title": "SeasonScope: पारदर्शी time-series decomposition studio",
      "pitch": "ऐसा interactive studio बनाइए जो ordered time series को explainable decomposition में बदले और forecasting से पहले trend, seasonality, cycles, noise तथा moving-average विकल्पों की तुलना करने दे।",
      "problem": "Learners अक्सर यह जाँचे बिना forecasting model चुन लेते हैं कि pattern trend, seasonality, calendar effect या visualization artifact है। Guided decomposition record assumptions और transformations को reviewable बनाता है।",
      "learning": "Time-series vocabulary, chronological plotting, additive बनाम multiplicative structure, smoothing, moving averages, decomposition diagnostics और reproducible Python analysis का अभ्यास करें।",
      "mvp": [
        "Timestamp वाली CSV upload करें, cadence और missing intervals validate करें तथा raw series सुरक्षित रखें।",
        "Clear original-time axis के साथ line, rolling-statistic, seasonal और residual views दिखाएँ।",
        "Configurable moving-average windows के साथ additive और multiplicative decomposition compare करें।",
        "Assumptions, parameters, plots और interpretation record करने वाली bilingual diagnostic report export करें।"
      ],
      "stretch": [
        "STL decomposition जोड़ें और outliers तथा missing periods के नीचे robustness compare करें।",
        "Weekday और annual patterns जैसी multiple seasonalities detect करें।",
        "Forecast-baseline panel जोड़ें जो cadence और decomposition checks acknowledge होने तक run न हो।",
        "Trend, seasonality, cycles, shocks और irregular noise के classroom fixtures बनाएँ।"
      ],
      "plan": [
        "सप्ताह 1: timestamp validation, cadence checks, raw-series import और core visualisations implement करें।",
        "सप्ताह 2: rolling statistics, moving-average controls और additive/multiplicative decomposition जोड़ें।",
        "सप्ताह 3: residual diagnostics, missing-period/outlier scenarios और comparison report बनाएं।",
        "सप्ताह 4: accessible dashboard, bilingual explanations, tests और reproducible case study package करें।"
      ],
      "novelty": "यह studio decomposition और visualization decisions को hidden notebook steps नहीं बल्कि auditable learning evidence मानता है।",
      "stack": [
        "Python",
        "pandas",
        "statsmodels",
        "Plotly",
        "Streamlit"
      ],
      "milestones": [
        "सप्ताह 1: validate और plot",
        "सप्ताह 2: smooth और decompose",
        "सप्ताह 3: diagnostics stress-test",
        "सप्ताह 4: reproducible report publish करें"
      ],
      "success": "Learner हर component समझा सके, parameters reproduce कर सके और visual artifacts को signal समझे बिना forecasting baseline justify कर सके।"
    }
  }
});
