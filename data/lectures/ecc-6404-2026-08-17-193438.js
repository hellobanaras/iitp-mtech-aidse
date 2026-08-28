// One publication unit: English and Hindi are reviewed and rendered together.
const quizRows = [
  ["Why do data warehouses need integration?", ["All sources are identical", "Sources can be heterogeneous", "Integration removes every label", "OLAP requires images only"], 1, "The lecture describes multiple heterogeneous sources that must be brought into a unified schema."],
  ["What is the purpose of data cleaning in the KDD process?", ["Add noise", "Remove noise and inconsistencies", "Choose a business logo", "Create a class label for every row"], 1, "Cleaning reduces noise and inconsistent values before mining."],
  ["What does data integration do?", ["Combines relevant source data into a unified view", "Deletes the source systems", "Converts every value to a class label", "Guarantees perfect predictions"], 0, "Integration combines data from multiple sources so it can be analyzed together."],
  ["What is OLAP mainly used for?", ["Multidimensional analysis and aggregation", "Recording microphone audio", "Replacing data cleaning", "Creating passwords"], 0, "OLAP supports summarization, consolidation, aggregation, and viewing data from different angles."],
  ["What is data characterization?", ["Summarizing general features of a target class", "Comparing two browsers", "Encrypting a database", "Randomly deleting records"], 0, "Characterization summarizes the general characteristics of a target class."],
  ["What is data discrimination?", ["Comparing features of a target class with contrasting classes", "Sorting files by size", "Predicting only continuous values", "Removing all outliers"], 0, "Discrimination contrasts the general features of one class with one or more other classes."],
  ["What is a frequent pattern?", ["A pattern that occurs often in the data", "A pattern that occurs exactly once", "A missing value", "A database password"], 0, "Frequency refers to repeated occurrence in the dataset."],
  ["What does association analysis study?", ["Relationships among items in frequent patterns", "Only the file format", "The color of a slide", "Whether a source is online"], 0, "Association examines relationships among items that occur together."],
  ["What kind of output does classification predict?", ["Categorical labels", "Only continuous measurements", "Audio waveforms", "Database schemas"], 0, "Classification assigns an observation to a categorical class."],
  ["What kind of output does regression predict?", ["A continuous-valued function", "A fixed class name only", "A slide number", "A file extension"], 0, "Regression models a continuous numerical value."],
  ["Why is clustering called unsupervised in the lecture?", ["The number and membership of clusters are not supplied in advance", "Every label is already known", "It always predicts a loan amount", "It only uses images"], 0, "Clustering analyzes objects without consulting supplied class labels."],
  ["What is an outlier?", ["An observation that does not follow the general pattern", "The most common observation", "A cleaned value", "A target population"], 0, "An outlier lies outside the behavior followed by the other observations."],
  ["What do descriptive mining tasks do?", ["Characterize properties of a dataset", "Always predict a numeric target", "Delete the database", "Hide the result from users"], 0, "Descriptive tasks summarize or characterize what is present."],
  ["Which sequence best represents KDD?", ["Clean, integrate, select, transform, mine, evaluate, represent", "Mine first and collect data later", "Delete, encrypt, publish, guess", "Classify every row before cleaning"], 0, "The lecture presents preprocessing, mining, evaluation, and knowledge representation as a pipeline."],
  ["What qualifies data for a mining application?", ["Meaningful digital data from which a target application can extract knowledge", "Only relational tables", "Only data with no missing values", "Only data collected by hand"], 0, "The instructor says any meaningful digital form can be mined when it supports a purpose."],
  ["What is business intelligence (BI) in the lecture?", ["Use of historical, current, and predictive analysis for business operations", "A file-compression method", "A replacement for databases", "A type of sensor"], 0, "BI uses reporting, OLAP, performance management, competitive intelligence, and predictive analytics."],
  ["Why is a web search engine a data-mining application?", ["It crawls, indexes, and searches very large collections", "It stores only one page", "It cannot rank results", "It is an OLAP cube"], 0, "Search engines mine indexed web collections to return relevant pages, images, and files."],
  ["Why might a shop place bread and butter far apart?", ["An association can encourage customers to encounter other items", "The items must be kept at different temperatures", "It removes all frequent patterns", "It makes the database relational"], 0, "The example uses a frequent co-purchase pattern to inform store layout."],
  ["What is the target population?", ["The full group about which a conclusion is intended", "Only the first respondent", "A database table name", "A single outlier"], 0, "Sampling must be designed around the population to which the result will be generalized."],
  ["Why can stratification improve analysis?", ["It preserves relevant subgroup representation", "It guarantees zero bias", "It removes the need for a target", "It turns labels into images"], 0, "The lecture warns that aggregate answers can hide important subgroup differences."],
  ["Why can accuracy be misleading with severe class imbalance?", ["The majority class can dominate the score while the rare class is missed", "Accuracy cannot be computed", "The minority class becomes majority", "Accuracy is always recall"], 0, "A majority-class predictor may score highly while failing to detect rare fraud or defects."],
  ["When is anomaly detection useful?", ["When normal examples are abundant but labeled defects are rare or varied", "When every class has identical examples", "When no observations exist", "Only when accuracy is the sole goal"], 0, "Learning normal structure can flag unusual cases without enumerating every defect type."],
  ["Which issue belongs to mining methodology?", ["Handling new data types, noisy data, and multidimensional or multimodal data", "Choosing a cafeteria menu", "Changing a browser theme", "Printing a certificate"], 0, "The lecture lists varied knowledge types, noisy/incomplete data, and diverse formats as methodology challenges."],
  ["Why must data mining address privacy and society?", ["Sensitive identities and records can be misused", "Privacy changes regression into clustering", "All data is public by definition", "Security is unrelated to mining"], 0, "The instructor warns that patient identity and other sensitive details must not be exposed."],
  ["Why is knowledge representation the last KDD step?", ["Results must be presented so decision makers can understand and use them", "It is the first data-collection step", "It removes the need for evaluation", "It creates heterogeneous sources"], 0, "Useful patterns have to be visualized or represented in a form the decision maker can act on."]
];
const makeQuiz = (rows, language) => rows.map(([question, options, answer, explanation]) => ({
  question,
  options,
  answer,
  explanation,
  optionNotes: options.map((option, index) => index === answer
    ? (language === "hi" ? "सही: " + explanation : "Correct: " + explanation)
    : (language === "hi" ? "गलत: यह विकल्प व्याख्यान में बताए गए कारण और परिभाषा से मेल नहीं खाता।" : "Incorrect: this option does not match the lecture's definition or evidence."))
}));
const enQuiz = makeQuiz(quizRows, "en");
const hiQuiz = makeQuiz([
  ["डेटा वेयरहाउस में integration की आवश्यकता क्यों होती है?", ["सभी स्रोत एक जैसे होते हैं", "स्रोत heterogeneous हो सकते हैं", "integration हर label हटा देता है", "OLAP को केवल images चाहिए"], 1, "व्याख्यान में कई heterogeneous स्रोतों को unified schema में लाने की बात है।"],
  ["KDD process में data cleaning का उद्देश्य क्या है?", ["noise जोड़ना", "noise और inconsistencies हटाना", "business logo बनाना", "हर row को class label देना"], 1, "Mining से पहले noise और inconsistent values कम की जाती हैं।"],
  ["Data integration क्या करता है?", ["संबंधित source data को unified view में जोड़ता है", "source systems मिटा देता है", "हर value को class label बनाता है", "perfect predictions की गारंटी देता है"], 0, "Integration कई स्रोतों के data को साथ analyze करने योग्य बनाता है।"],
  ["OLAP मुख्यतः किसके लिए उपयोग होता है?", ["multidimensional analysis और aggregation", "microphone audio record करना", "data cleaning बदलना", "password बनाना"], 0, "OLAP summarization, consolidation, aggregation और अलग-अलग angles से view देता है।"],
  ["Data characterization क्या है?", ["target class की general features का summary", "दो browsers की तुलना", "database encrypt करना", "records randomly हटाना"], 0, "Characterization target class की सामान्य विशेषताओं को summarize करता है।"],
  ["Data discrimination क्या है?", ["target class की features को contrasting classes से compare करना", "files को size से sort करना", "केवल continuous values predict करना", "सभी outliers हटाना"], 0, "Discrimination एक class की features को दूसरी classes से contrast करता है।"],
  ["Frequent pattern क्या है?", ["data में बार-बार आने वाला pattern", "ठीक एक बार आने वाला pattern", "missing value", "database password"], 0, "Frequency dataset में repeated occurrence को दर्शाती है।"],
  ["Association analysis क्या देखता है?", ["frequent patterns के items के बीच relationships", "केवल file format", "slide का रंग", "source online है या नहीं"], 0, "Association साथ आने वाले items के संबंधों का अध्ययन करता है।"],
  ["Classification किस प्रकार का output predict करता है?", ["categorical labels", "केवल continuous measurements", "audio waveforms", "database schemas"], 0, "Classification observation को categorical class देता है।"],
  ["Regression किस प्रकार का output predict करता है?", ["continuous-valued function", "केवल fixed class name", "slide number", "file extension"], 0, "Regression continuous numerical value model करता है।"],
  ["Clustering को unsupervised क्यों कहा गया?", ["clusters की संख्या और membership पहले से नहीं दी जाती", "हर label पहले से ज्ञात है", "यह हमेशा loan amount predict करता है", "यह केवल images उपयोग करता है"], 0, "Clustering supplied class labels के बिना objects का analysis करता है।"],
  ["Outlier क्या है?", ["जो observation general pattern का पालन नहीं करता", "सबसे common observation", "cleaned value", "target population"], 0, "Outlier दूसरे observations के behavior से बाहर होता है।"],
  ["Descriptive mining task क्या करता है?", ["dataset की properties को characterize करता है", "हमेशा numeric target predict करता है", "database delete करता है", "result छिपाता है"], 0, "Descriptive task उपस्थित data का summary या characterization देता है।"],
  ["KDD का सही क्रम कौन सा है?", ["clean, integrate, select, transform, mine, evaluate, represent", "पहले mine और बाद में data collect", "delete, encrypt, publish, guess", "cleaning से पहले हर row classify"], 0, "व्याख्यान preprocessing, mining, evaluation और representation की pipeline देता है।"],
  ["Mining application के लिए data कब उपयोगी है?", ["जब meaningful digital data से target application के लिए knowledge निकाली जा सके", "केवल relational tables होने पर", "केवल missing values न होने पर", "केवल हाथ से collect होने पर"], 0, "Instructor के अनुसार meaningful digital form का data purpose के अनुसार mine किया जा सकता है।"],
  ["Business intelligence (BI) क्या है?", ["business operations के लिए historical, current और predictive analysis", "file-compression method", "databases का replacement", "sensor का प्रकार"], 0, "BI में reporting, OLAP, performance management और predictive analytics आते हैं।"],
  ["Web search engine data-mining application क्यों है?", ["यह बड़े collections को crawl, index और search करता है", "यह केवल एक page रखता है", "यह results rank नहीं कर सकता", "यह OLAP cube है"], 0, "Search engine indexed web collections से relevant pages, images और files निकालता है।"],
  ["Shop bread और butter को दूर क्यों रख सकता है?", ["association के कारण customer दूसरे items भी देख सकता है", "दोनों का temperature अलग होना चाहिए", "यह frequent pattern हटाता है", "यह database को relational बनाता है"], 0, "Frequent co-purchase pattern को store layout में उपयोग किया गया है।"],
  ["Target population क्या है?", ["वह पूरा group जिसके बारे में conclusion निकालना है", "केवल पहला respondent", "database table का नाम", "एक outlier"], 0, "Sampling उसी population के लिए design होनी चाहिए जिस पर result लागू करना है।"],
  ["Stratification analysis में क्यों मदद करती है?", ["relevant subgroups का representation बनाए रखती है", "zero bias की guarantee देती है", "target की जरूरत हटाती है", "labels को images बनाती है"], 0, "Aggregate answers महत्वपूर्ण subgroup differences छिपा सकते हैं।"],
  ["Severe class imbalance में accuracy misleading क्यों हो सकती है?", ["majority class score पर हावी होकर rare class को छिपा सकती है", "accuracy compute नहीं हो सकती", "minority class majority बन जाती है", "accuracy हमेशा recall है"], 0, "Majority-class predictor high score पा सकता है पर rare fraud या defect miss कर सकता है।"],
  ["Anomaly detection कब उपयोगी है?", ["जब normal examples बहुत हों और labeled defects rare या varied हों", "जब हर class identical हो", "जब कोई observation न हो", "जब केवल accuracy goal हो"], 0, "Normal structure सीखकर हर defect को enumerate किए बिना unusual cases flag किए जा सकते हैं।"],
  ["Mining methodology की चुनौती कौन सी है?", ["new data types, noisy तथा multidimensional या multimodal data संभालना", "cafeteria menu चुनना", "browser theme बदलना", "certificate print करना"], 0, "Lecture में varied knowledge types, noisy/incomplete data और diverse formats बताए गए हैं।"],
  ["Data mining को privacy और society पर ध्यान क्यों देना चाहिए?", ["sensitive identities और records का misuse हो सकता है", "privacy regression को clustering बनाती है", "हर data public होता है", "security mining से unrelated है"], 0, "Instructor ने patient identity और sensitive details को expose न करने की चेतावनी दी।"],
  ["Knowledge representation KDD का अंतिम step क्यों है?", ["decision makers के लिए results को समझने योग्य बनाना होता है", "यह पहला collection step है", "evaluation की जरूरत हटाता है", "heterogeneous sources बनाता है"], 0, "Useful patterns को ऐसे visualize/represent करना है कि decision maker action ले सके।"]
], "hi");
const en = {
  title: "Data mining foundations: KDD, patterns, applications, and responsible use",
  lede: "This first Data Warehousing lecture introduces data mining as the search for useful knowledge in large, heterogeneous repositories. It walks through the KDD pipeline, mining functions, business and search applications, rare-event pitfalls, and the privacy responsibilities that accompany data-rich systems.",
  instructionalInterval: "20:00–1:19:53 (source time; capture at 2×)",
  reviewLevel: "Recording, bounded teaching interval, timestamped transcript, and slide-frame verified",
  coverage: [
    { title: "From repositories to knowledge", body: "Data warehouses unify heterogeneous sources so analysis can support business decisions rather than intuition alone." },
    { title: "The KDD pipeline", body: "Cleaning, integration, selection, transformation, mining, evaluation, and knowledge representation turn raw data into usable evidence." },
    { title: "Mining functions", body: "Characterization, discrimination, frequent patterns, association, classification, regression, clustering, and outlier analysis answer different questions." },
    { title: "Data and applications", body: "Any meaningful digital data can be mined; examples include business intelligence, search engines, sensors, text, images, and multimodal records." },
    { title: "Descriptive versus predictive work", body: "Descriptive tasks summarize what is present, while predictive tasks infer labels or continuous values for future cases." },
    { title: "Rare events and evaluation", body: "Severe class imbalance makes accuracy deceptive; anomaly detection and cost-aware metrics are safer starting points for rare fraud or defects." },
    { title: "Human and social context", body: "Interactive mining, visualization, background knowledge, scalability, privacy, and security shape whether a mined pattern can be trusted." }
  ],
  takeaway: "A reliable data-mining result is a chain of decisions—from provenance and cleaning to representation and governance—not merely an algorithm applied to a large table.",
  slideTrail: [
    { time: "20:00", title: "Data Mining — Why?", note: "Heterogeneous data, data cleaning, integration, OLAP, and the need to turn data-rich repositories into information." },
    { time: "25:00", title: "Data Mining — Why? continued", note: "The data-rich/information-poor gap and the role of tools in discovering useful knowledge." },
    { time: "31:00", title: "What is Data Mining?", note: "Knowledge discovery from data, represented with the mine-to-gold metaphor." },
    { time: "41:00", title: "What kinds of data can be mined?", note: "Structured, transactional, stream, sequence, graph, spatial, text, multimedia, and web data." },
    { time: "45:00", title: "What kinds of patterns can be mined?", note: "Characterization, discrimination, frequent patterns, associations, classification, regression, clustering, and outliers." },
    { time: "58:00", title: "What technologies are used?", note: "Statistics, databases, warehouses, information retrieval, high-performance computing, visualization, pattern recognition, and machine learning." },
    { time: "1:11:00", title: "Major issues in Data Mining", note: "Methodology, interaction, efficiency and scalability, diverse data types, and social/privacy concerns." },
    { time: "1:18:55", title: "Introduction — closing agenda", note: "Recap of the chapter and recommendation to review the slides and corresponding book chapter." }
  ],
  summary: [
    { title: "1. Why a warehouse and why mining?", sourceRefs: ["20:00–31:00", "Slides: Data Mining — Why? / What is Data Mining?"], paragraphs: ["Operational data often arrives from heterogeneous sources with incompatible formats. A warehouse provides a unified store; cleaning removes noise and inconsistency, integration reconciles sources, and OLAP enables summaries, consolidation, aggregation, and different analytical views.", "The instructor frames data mining as discovering useful knowledge—golden nuggets—from repositories that have grown beyond unaided human comprehension. Without mining tools, organizations remain data rich but information poor and may fall back on intuition."] },
    { title: "2. KDD is a staged process", sourceRefs: ["33:00–40:00", "KDD process slide"], paragraphs: ["The KDD journey is data cleaning, data integration, data selection, data transformation, data mining, pattern evaluation, and knowledge representation. The first four are preprocessing: they make data suitable for an algorithm and for the task at hand.", "Mining can produce many patterns, so interestingness measures and user guidance are needed to retain useful ones. The final step presents those patterns in a form a decision maker can understand rather than exposing an opaque technical dump."] },
    { title: "3. Match the mining function to the question", sourceRefs: ["45:00–55:00", "What kinds of patterns can be mined?"], paragraphs: ["Characterization summarizes a target class; discrimination compares it with contrasting classes. Frequent-pattern mining finds repeated combinations, while association studies relationships among their items.", "Classification predicts a categorical label, whereas regression predicts a continuous value. Clustering is unsupervised because class labels are not supplied; outlier analysis identifies observations outside the general distribution or behavior."] },
    { title: "4. Data diversity expands the problem", sourceRefs: ["41:00–45:00", "What kinds of data can be mined?"], paragraphs: ["The lecture begins with datasets, warehouse data, and transactions, then broadens to streams, ordered sequences, graphs and networks, spatial data, text, multimedia, and the web. The principle is purpose-based: meaningful digital data is eligible even when a ready-made algorithm does not yet exist.", "New devices create new modalities—such as digital-camera images—which in turn require new representations and mining methods. This feedback makes data mining a dynamic, interdisciplinary field."] },
    { title: "5. Applications turn patterns into action", sourceRefs: ["1:07:00–1:16:00", "What kinds of Applications are Targeted?"], paragraphs: ["Business intelligence uses historical, current, and predictive views of operations for reporting, performance management, competitive intelligence, benchmarking, and predictive analytics. Sensor histories can reveal pressure or temperature patterns before a process failure.", "Search engines are another large-scale mining application: crawlers gather pages, indexes organize them, and ranking/search return useful hits. A retail example shows how a bread–butter association can inform store layout and business decisions."] },
    { title: "6. Evaluation must respect rarity and cost", sourceRefs: ["1:11:00–1:15:00", "Major Issues in Data Mining"], paragraphs: ["Fraud and manufacturing defects are rare compared with valid transactions or products. A model that predicts the majority class can achieve high accuracy while missing every important case. Precision, recall, and the cost of false negatives therefore deserve attention.", "When labeled defects are scarce or varied, anomaly detection can learn normal structure and flag departures for human review. This is a decision aid, not a guarantee of zero false alarms."], formula: "Accuracy = (TP + TN)/(TP + TN + FP + FN) · Precision = TP/(TP + FP) · Recall = TP/(TP + FN)" },
    { title: "7. Methodology, interaction, and society", sourceRefs: ["1:11:00–1:19:00", "Major Issues in Data Mining"], paragraphs: ["Methodology must handle new knowledge types, multimodal data, uncertainty, noise, incompleteness, and patterns constrained by domain information. User interaction can provide background knowledge, ad-hoc queries, and visual feedback so uninteresting patterns are pruned early.", "Efficiency and scalability matter as repositories grow. Finally, privacy and security are part of correctness: patient identities, addresses, or other sensitive records should be anonymized and protected before research or operational mining."] }
  ],
  courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [{ time: "1:19:20", title: "Slides and corresponding book chapter", detail: "The instructor asked students to review the displayed slides and said the chapter would also be provided in the book; no separately graded task was assigned." }], studentQuestions: [] },
  keyTerms: [
    { term: "KDD", definition: "Knowledge discovery from data: the end-to-end process around data mining." },
    { term: "Data cleaning", definition: "Removing noise and inconsistent data before analysis." },
    { term: "Data integration", definition: "Combining sources into a unified analytical view." },
    { term: "OLAP", definition: "Online analytical processing for multidimensional summaries and aggregation." },
    { term: "Characterization", definition: "Summary of general features of a target class." },
    { term: "Association", definition: "A relationship among items that occur together in frequent patterns." },
    { term: "Classification", definition: "Prediction of categorical class labels." },
    { term: "Regression", definition: "Prediction of a continuous-valued function." },
    { term: "Clustering", definition: "Unsupervised grouping without supplied class labels." },
    { term: "Outlier", definition: "An observation that departs from the general data pattern." }
  ],
  insights: [
    "Treat provenance and collection design as part of the model: a polished algorithm cannot repair a free-text survey or an unrepresentative population.",
    "For rare-event operations, choose metrics and review thresholds from the cost of errors; accuracy is a reporting number, not a safety argument.",
    "Knowledge representation is a technical requirement. If a decision maker cannot understand a pattern, the KDD pipeline has not completed its last mile.",
    "The lecture's absent-versus-missing idea is best operationalized as provenance search before imputation: check other trusted sources before treating a blank as a true missing value."
  ],
  resources: [
    { title: "Mining of Massive Datasets — Stanford", url: "https://mmds.stanford.edu/", note: "Open textbook chapters on frequent patterns, clustering, mining streams, and large-scale systems." },
    { title: "scikit-learn: Novelty and Outlier Detection", url: "https://scikit-learn.org/stable/modules/outlier_detection.html", note: "Practical distinction between novelty detection and outlier detection, with estimators and cautions." },
    { title: "ACM SIGKDD", url: "https://www.kdd.org/", note: "Research community and conference archive for knowledge discovery and data mining." },
    { title: "IBM: What is business intelligence?", url: "https://www.ibm.com/think/topics/business-intelligence", note: "Accessible overview of BI reporting, dashboards, analytics, and decision support." }
  ],
  quiz: enQuiz
};
const hi = {
  title: "Data mining की नींव: KDD, patterns, applications और जिम्मेदार उपयोग",
  lede: "यह पहला Data Warehousing व्याख्यान बड़े heterogeneous repositories से उपयोगी knowledge खोजने का परिचय देता है। इसमें KDD pipeline, mining functions, business और search applications, rare-event की समस्याएँ तथा privacy की जिम्मेदारियाँ समझाई गई हैं।",
  instructionalInterval: en.instructionalInterval,
  reviewLevel: "Recording, सीमित teaching interval, timestamped transcript और slide frames से सत्यापित",
  coverage: [
    { title: "Repository से knowledge तक", body: "Data warehouse heterogeneous sources को unify करता है ताकि analysis business decisions को support करे।" },
    { title: "KDD pipeline", body: "Cleaning, integration, selection, transformation, mining, evaluation और knowledge representation raw data को usable evidence में बदलते हैं।" },
    { title: "Mining functions", body: "Characterization, discrimination, frequent patterns, association, classification, regression, clustering और outlier अलग प्रश्नों के उत्तर देते हैं।" },
    { title: "Data और applications", body: "Meaningful digital data mine किया जा सकता है; उदाहरण BI, search engines, sensors, text, images और multimodal records हैं।" },
    { title: "Descriptive और predictive काम", body: "Descriptive task उपस्थित data का summary देता है; predictive task labels या continuous values infer करता है।" },
    { title: "Rare events और evaluation", body: "Class imbalance accuracy को deceptive बना सकता है; anomaly detection और cost-aware metrics बेहतर शुरुआत हैं।" },
    { title: "Human और social context", body: "Interaction, visualization, background knowledge, scalability, privacy और security mined pattern की विश्वसनीयता तय करते हैं।" }
  ],
  takeaway: "विश्वसनीय data-mining result केवल algorithm नहीं है; यह provenance, cleaning, representation और governance से बनी पूरी decision chain है।",
  slideTrail: en.slideTrail.map((slide) => ({ ...slide, note: "सत्यापित slide/whiteboard trail: " + slide.note })),
  summary: [
    { title: "1. Warehouse और mining की जरूरत", sourceRefs: en.summary[0].sourceRefs, paragraphs: ["Operational data अलग-अलग heterogeneous sources से आता है। Warehouse unified store देता है; cleaning noise हटाती है, integration sources मिलाता है और OLAP summaries तथा अलग analytical views देता है।", "Instructor data mining को repositories से useful knowledge—golden nuggets—खोजना कहते हैं। Tools न हों तो संगठन data-rich लेकिन information-poor रहकर intuition पर निर्भर हो सकते हैं।"] },
    { title: "2. KDD एक staged process है", sourceRefs: en.summary[1].sourceRefs, paragraphs: ["KDD में data cleaning, integration, selection, transformation, mining, pattern evaluation और knowledge representation आते हैं। पहले चार preprocessing steps algorithm और task के लिए data तैयार करते हैं।", "Mining बहुत patterns दे सकता है; interestingness measures और user guidance उपयोगी patterns चुनते हैं। अंतिम step decision maker के लिए परिणाम समझने योग्य बनाता है।"] },
    { title: "3. प्रश्न के अनुसार mining function चुनें", sourceRefs: en.summary[2].sourceRefs, paragraphs: ["Characterization target class का summary है और discrimination contrasting classes से तुलना करता है। Frequent-pattern repeated combinations ढूँढता है तथा association उनके संबंध देखता है।", "Classification categorical label predict करता है, regression continuous value। Clustering unsupervised है क्योंकि class labels पहले से नहीं दिए जाते; outlier सामान्य behavior से अलग observation है।"] },
    { title: "4. Data diversity समस्या बढ़ाती है", sourceRefs: en.summary[3].sourceRefs, paragraphs: ["Datasets और transactions से आगे lecture streams, sequences, graphs, spatial data, text, multimedia और web तक जाता है। Meaningful digital data purpose के अनुसार mine किया जा सकता है, भले ready-made algorithm न हो।", "Digital camera जैसे नए devices नई modalities बनाते हैं और नई representations तथा methods की जरूरत पैदा करते हैं। इसलिए data mining dynamic और interdisciplinary है।"] },
    { title: "5. Applications patterns को action में बदलती हैं", sourceRefs: en.summary[4].sourceRefs, paragraphs: ["Business intelligence reporting, performance management, competitive intelligence, benchmarking और predictive analytics के लिए historical, current और predictive views देता है। Sensor history process failure से पहले pressure या temperature pattern दिखा सकती है।", "Search engine crawling, indexing और ranking के जरिए बड़ी web collection mine करता है। Retail में bread–butter association store layout और business decision को प्रभावित कर सकती है।"] },
    { title: "6. Rarity और cost को evaluation में रखें", sourceRefs: en.summary[5].sourceRefs, paragraphs: ["Fraud और manufacturing defects valid cases की तुलना में rare होते हैं। Majority-class model high accuracy दिखाकर महत्वपूर्ण cases miss कर सकता है; precision, recall और false-negative cost देखना जरूरी है।", "Labeled defects कम या varied हों तो anomaly detection normal structure सीखकर departures flag कर सकता है। यह human review का decision aid है, zero false alarms की guarantee नहीं।"], formula: en.summary[5].formula },
    { title: "7. Methodology, interaction और society", sourceRefs: en.summary[6].sourceRefs, paragraphs: ["Methodology को new knowledge types, multimodal data, uncertainty, noise और incompleteness संभालनी है। User interaction background knowledge, ad-hoc queries और visual feedback देता है।", "Repositories बढ़ने पर efficiency और scalability जरूरी हैं। Privacy भी correctness का हिस्सा है: patient identities और sensitive records को protect/anonymize करना चाहिए।"] }
  ],
  courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [{ time: "1:19:20", title: "Slides और संबंधित book chapter", detail: "Instructor ने displayed slides और book में दिए जाने वाले chapter को review करने को कहा; कोई अलग graded task नहीं दिया गया।" }], studentQuestions: [] },
  keyTerms: en.keyTerms.map((term) => ({ term: term.term, definition: term.definition })),
  insights: [
    "Provenance और collection design को model का हिस्सा समझें: polished algorithm खराब survey या unrepresentative population को ठीक नहीं कर सकता।",
    "Rare-event operations में metrics और thresholds error cost से चुनें; accuracy safety argument नहीं है।",
    "Knowledge representation technical requirement है। Decision maker pattern समझ न सके तो KDD का अंतिम चरण पूरा नहीं हुआ।",
    "Blank value को impute करने से पहले trusted sources में provenance खोजें; हर blank को true missing value न मानें।"
  ],
  resources: [
    { title: "Mining of Massive Datasets — Stanford", url: "https://mmds.stanford.edu/", note: "Frequent patterns, clustering, streams और large-scale systems पर open textbook।" },
    { title: "scikit-learn: Novelty and Outlier Detection", url: "https://scikit-learn.org/stable/modules/outlier_detection.html", note: "Novelty और outlier detection का practical distinction।" },
    { title: "ACM SIGKDD", url: "https://www.kdd.org/", note: "Knowledge discovery और data mining का research community portal।" },
    { title: "IBM: What is business intelligence?", url: "https://www.ibm.com/think/topics/business-intelligence", note: "BI reporting, dashboards और decision support का overview।" }
  ],
  quiz: hiQuiz
};
export const ecc6404Lecture20260817 = { en, hi };
