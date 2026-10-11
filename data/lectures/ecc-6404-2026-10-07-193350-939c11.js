const quiz = [
  {
    question: "Why can a rule with 100% observed accuracy still be a weak choice?",
    options: ["It may cover only a tiny number of examples", "Accuracy counts uncovered records as errors", "A rule cannot predict a positive class", "Coverage is always equal to accuracy"],
    answer: 0,
    explanation: "A perfect fraction based on very few covered examples is fragile; the lecture contrasts a two-example rule with a broader alternative.",
    optionNotes: ["Correct: tiny support makes the observed score less convincing.", "Accuracy is computed among the examples the rule covers.", "Rules can predict any represented class.", "Accuracy and coverage describe different properties."]
  },
  {
    question: "In the lecture's 160-example illustration, what does R1 cover?",
    options: ["50 positive and 5 negative examples", "55 positive and 5 negative examples", "2 positive and no negative examples", "60 positive and 100 negative examples"],
    answer: 0,
    explanation: "R1 covers 55 records: 50 from the positive class and 5 from the negative class.",
    optionNotes: ["Correct: these are the slide's R1 counts.", "This incorrectly counts all 55 covered records as positive.", "Those are R2's counts.", "Those are the overall training-set class counts."]
  },
  {
    question: "What is R1's accuracy among the records it covers?",
    options: ["50/55, about 90.9%", "55/160, about 34.4%", "50/160, 31.25%", "100%"],
    answer: 0,
    explanation: "The rule is correct for 50 of its 55 covered records, so 50 ÷ 55 is about 90.9%.",
    optionNotes: ["Correct: accuracy uses covered records as its denominator.", "This is the share of the full dataset covered, not rule accuracy.", "This divides true positives by all records and is not the stated accuracy.", "R1 covers five negatives, so it is not perfect."]
  },
  {
    question: "What is the key weakness of R2 in the slide's comparison?",
    options: ["Its 100% accuracy is supported by only two examples", "It covers every training example", "It predicts five negative examples incorrectly", "Its expected positive count is larger than its observed count"],
    answer: 0,
    explanation: "R2 covers only two positive examples and no negatives; its perfect sample accuracy comes with very low coverage.",
    optionNotes: ["Correct: the support count makes the perfect score potentially spurious.", "R2 covers 2 of 160 examples, not all of them.", "The five negatives belong to R1.", "For R2 the observed positive count is 2 and the expected count is 0.75."]
  },
  {
    question: "In the likelihood-ratio statistic, what do fᵢ and eᵢ represent?",
    options: ["Observed and expected class frequencies among rule-covered examples", "False-positive rate and error rate on the test set", "Feature count and number of rules", "Training and validation sample sizes"],
    answer: 0,
    explanation: "The statistic compares observed class counts under the rule with counts expected under random prediction.",
    optionNotes: ["Correct: these are the quantities defined on the slide.", "Those are not the slide's variables.", "Neither variable counts attributes or rules.", "The formula uses covered-class frequencies, not split sizes."]
  },
  {
    question: "What is the Laplace estimate for a rule with f₊ positive examples, n covered examples, and k classes?",
    options: ["(f₊ + 1)/(n + k)", "f₊/n²", "(f₊ + n)/(k + 1)", "(n + 1)/(f₊ + k)"],
    answer: 0,
    explanation: "The slide smooths the positive count by one and the total covered count by the number of classes.",
    optionNotes: ["Correct: this is the Laplace measure shown on the slide.", "Squaring coverage is not part of the measure.", "This does not represent the stated smoothing.", "This reverses the numerator and denominator roles."]
  },
  {
    question: "What extra quantity appears in the m-estimate compared with Laplace smoothing?",
    options: ["The prior probability p₊ of the positive class", "The number of test errors only", "The rule's description length", "The number of dimensions squared"],
    answer: 0,
    explanation: "The m-estimate uses the class prior: (f₊ + k p₊)/(n + k).", 
    optionNotes: ["Correct: p₊ supplies prior class probability in the numerator.", "Test errors do not appear in this estimate.", "Description length belongs to the later MDL discussion.", "Feature dimension is unrelated to this smoothing formula."]
  },
  {
    question: "If a rule covers no training examples, what does the Laplace measure become under a uniform class prior?",
    options: ["1/k", "0", "1", "f₊/n"],
    answer: 0,
    explanation: "With n = 0 and f₊ = 0, the estimate is 1/k, the uniform prior probability.",
    optionNotes: ["Correct: the smoothing term leaves the prior baseline.", "The added-one numerator prevents a zero estimate.", "That would ignore the number of classes.", "The ratio is undefined when both counts are zero."]
  },
  {
    question: "What two properties does FOIL's information gain reward in the lecture?",
    options: ["Positive support count and accuracy after adding a condition", "Rule length and number of classes", "Validation-set size and model depth", "Negative coverage and training time"],
    answer: 0,
    explanation: "The score is proportional to the new positive support p₁ and the new rule's positive fraction p₁/(p₁+n₁).",
    optionNotes: ["Correct: it couples support with the precision-like covered-positive proportion.", "Neither rule length nor class count is the score's stated target.", "These do not appear in the FOIL expression.", "The measure prefers positive support and accuracy, not negative coverage or speed."]
  },
  {
    question: "When a new conjunct is added to a rule, what is compared in FOIL's information gain?",
    options: ["The positive proportion before and after specialization, weighted by the new positive count", "Training accuracy and test accuracy without counts", "Two different distance metrics", "The number of leaves in two decision trees"],
    answer: 0,
    explanation: "The slide compares p₁/(p₁+n₁) with p₀/(p₀+n₀), multiplying the log-ratio change by p₁.",
    optionNotes: ["Correct: that is the before/after specialization comparison.", "The formula uses covered positive/negative counts, not test accuracy.", "Distances belong to the later nearest-neighbor topic.", "Tree leaves are not part of FOIL gain."]
  },
  {
    question: "How should pruning be judged according to the lecture?",
    options: ["Keep a simplification when estimated generalization error improves", "Always prune every condition", "Choose the rule with the lowest training accuracy", "Use only the number of conjuncts"],
    answer: 0,
    explanation: "Pruning is justified by evidence that the simpler rule improves estimated generalization, such as validation error or pessimistic error.",
    optionNotes: ["Correct: the goal is improved generalization, not brevity alone.", "Pruning can hurt if it worsens the estimate.", "Lower training accuracy is not the objective.", "Rule length alone does not establish that pruning helps."]
  },
  {
    question: "Why does sequential covering remove examples covered by an accepted rule?",
    options: ["To learn later rules from the residual examples without double-counting covered cases", "To increase the feature dimension", "To make every rule cover the same records", "To turn a rule set into a decision tree"],
    answer: 0,
    explanation: "After a rule is added, removing its covered positive and negative records makes later rules address what remains and avoids misleading overlap in incremental evaluation.",
    optionNotes: ["Correct: the lecture demonstrates the effect on subsequent rules' accuracy.", "Removing records does not add attributes.", "The purpose is not to equalize rule coverage.", "Sequential covering builds rules, not a tree conversion."]
  },
  {
    question: "For a multiclass RIPPER pass, how are the classes ordered in the lecture's description?",
    options: ["From least frequent to most frequent, with the most frequent class as default", "Alphabetically, with the first class as default", "By feature count, with the largest class learned first", "At random, with no default class"],
    answer: 0,
    explanation: "RIPPER learns rules for rarer classes first and leaves the most frequent class as the default.",
    optionNotes: ["Correct: this is the class-frequency ordering described.", "Alphabetical order is not used.", "The ordering is by class frequency, not feature count.", "The procedure explicitly has a default class."]
  },
  {
    question: "How does RIPPER grow a candidate rule?",
    options: ["Start with an empty antecedent and add conjuncts using FOIL gain", "Start with all possible conditions and delete them randomly", "Choose the nearest training example and copy its label", "Build a full tree and never prune it"],
    answer: 0,
    explanation: "The lecture describes a general-to-specific search that begins empty and adds the best conjunct according to FOIL information gain.",
    optionNotes: ["Correct: this is the stated rule-growing strategy.", "The described search is not random deletion from a maximal rule.", "That resembles an instance-based method, not RIPPER rule growth.", "RIPPER's description includes validation pruning and MDL stopping."]
  },
  {
    question: "What is the lecture's stopping signal for adding a conjunct during RIPPER rule growth?",
    options: ["The rule begins to cover negative examples and its gain declines", "The rule covers every record", "The antecedent contains exactly three conditions", "The validation set becomes empty"],
    answer: 0,
    explanation: "Adding negatives reduces the positive fraction in FOIL gain; the lecture uses the downturn as a reason to stop specializing.",
    optionNotes: ["Correct: this links negative coverage to a falling gain.", "Exhaustive coverage is not the rule-growth stopping rule.", "No fixed three-condition length is stated.", "The validation set is used for pruning, not emptied by rule growth."]
  },
  {
    question: "In RIPPER's pruning procedure, which condition is considered first for removal?",
    options: ["The last conjunct added", "The first condition in the attribute list", "Every condition simultaneously", "The consequent class"],
    answer: 0,
    explanation: "Pruning proceeds backward from the most recently added conjunct, then tests progressively larger suffix removals.",
    optionNotes: ["Correct: the lecture gives this reverse-addition order.", "The first condition is not the specified starting point.", "The procedure evaluates removals stepwise.", "The consequent is the predicted class, not an antecedent conjunct to prune."]
  },
  {
    question: "What pruning score does the lecture give for validation examples covered by a rule?",
    options: ["(P − N)/(P + N)", "P/N²", "(P + N)/(P − N)", "P × N"],
    answer: 0,
    explanation: "P and N are covered positive and negative validation examples; the score is compared before and after pruning.",
    optionNotes: ["Correct: this is the metric stated for the RIPPER prune decision.", "No squared-negative denominator is used.", "This reverses the numerator and denominator structure.", "A product does not express the described accuracy-related score."]
  },
  {
    question: "What does RIPPER's minimum-description-length stopping rule monitor?",
    options: ["Whether a new rule increases the total rule-set description length by at least the chosen threshold", "Whether every class has the same number of records", "Whether the nearest-neighbor distance is zero", "Whether the tree has no internal nodes"],
    answer: 0,
    explanation: "The lecture says the rule set stops growing when the new rule increases total description length by at least d bits; it cites d = 64 in the described experiment.",
    optionNotes: ["Correct: this is the MDL-based stopping condition described.", "Class balance is not required.", "This belongs to a different classifier.", "RIPPER's rule set is not a tree."]
  },
  {
    question: "How does C4.5 obtain an initial rule from a decision tree?",
    options: ["Translate a root-to-leaf path into antecedent conditions and the leaf class into the consequent", "Use one rule for every feature value regardless of a path", "Copy the tree's root label as every rule's consequent", "Select the nearest leaf by Euclidean distance"],
    answer: 0,
    explanation: "Each root-to-leaf path supplies conjunctive tests; the reached leaf supplies the rule's predicted class.",
    optionNotes: ["Correct: this is the path-to-rule mapping.", "A rule corresponds to a path, not every isolated feature value.", "Different leaves can predict different classes.", "Tree traversal is not nearest-neighbor search."]
  },
  {
    question: "What is the pruning criterion described for C4.5 rules?",
    options: ["Remove conditions when the resulting rule has a lower pessimistic error than the original", "Remove conditions until training error is exactly zero", "Keep the longest rule in every class", "Prune only when the class prior is uniform"],
    answer: 0,
    explanation: "C4.5 repeatedly tests simpler rules and retains the lowest-pessimistic-error simplification only when it improves on the original.",
    optionNotes: ["Correct: pruning is evidence-driven and iterative.", "Zero training error is neither required nor the stated test.", "The method seeks simplification, not maximum length.", "A uniform prior is unrelated to this pruning step."]
  },
  {
    question: "What is class-based ordering in the C4.5 rule procedure?",
    options: ["Group rules by predicted class and prioritize class groups using their description lengths", "Sort individual rules only by filename", "Choose a different distance metric for each class", "Order classes by alphabetical label"],
    answer: 0,
    explanation: "Rules predicting the same class are grouped; the lecture orders classes by increasing total description length, giving the smallest-length group highest priority.",
    optionNotes: ["Correct: this is the class-level organization described.", "Files do not determine rule priority.", "Distance metrics belong to nearest-neighbor methods.", "The criterion is description length, not alphabetic order."]
  },
  {
    question: "What is a lazy learner in the lecture's contrast with decision trees and rule sets?",
    options: ["A method that delays building a generalized model until a test example needs classification", "A model that learns immediately and discards all examples", "A learner that cannot classify new records", "Any algorithm that uses validation data"],
    answer: 0,
    explanation: "Lazy methods defer general model construction; the lecture introduces nearest neighbors as an example.",
    optionNotes: ["Correct: this is the defining contrast in the lecture.", "That describes neither lazy learning nor the nearest-neighbor memory strategy.", "Lazy learners can classify new records.", "Validation data is not what defines laziness."]
  },
  {
    question: "How does k-NN classify a query example in the basic procedure?",
    options: ["Find the k closest training points and assign the majority class", "Choose the class with the largest global training count", "Follow a root-to-leaf path in a tree", "Average all feature values and threshold the result"],
    answer: 0,
    explanation: "The method searches by distance in feature space and uses the labels among the k nearest records, commonly by majority vote.",
    optionNotes: ["Correct: this is the core k-NN procedure.", "That would ignore local neighborhood structure.", "That is decision-tree classification.", "The lecture does not describe this feature-average rule."]
  },
  {
    question: "In the lecture's example, why can changing k change the predicted label?",
    options: ["Different neighborhood sizes include different class counts and can change the majority", "Distance is not used when k changes", "The test point changes its coordinates", "Every k forces the same class prior"],
    answer: 0,
    explanation: "The same point is negative at k = 1, tied at k = 2, and positive at k = 3 in the illustrated neighborhood.",
    optionNotes: ["Correct: the vote depends on which neighbors are included.", "Distance determines the ordered neighborhood for each k.", "The example keeps the query point fixed.", "The vote is local, not a fixed global prior."]
  },
  {
    question: "What happens in the lecture's k = 2 example when one nearest point is positive and one is negative?",
    options: ["The vote is tied, so the lecture notes that a random choice may be used", "The farther point is ignored and positive always wins", "Both labels are changed to the default class", "The query is rejected as outside the feature space"],
    answer: 0,
    explanation: "With one vote for each class, the illustrated majority vote has no unique winner; the instructor says the class may be chosen randomly.",
    optionNotes: ["Correct: this is the tie case described in the example.", "No always-positive tie rule is given.", "The example does not assign a default class for the tie.", "A tie does not mean the point is outside the space."]
  }
];

export const ecc6404Lecture20261007193350 = { en: {
  title: "Rule evaluation and pruning, RIPPER, and nearest neighbors",
  lede: "The lecture completes direct rule-learning ideas with coverage-aware scores and pruning, then connects sequential covering to RIPPER and C4.5 rule extraction. It closes by introducing lazy learning and k-nearest-neighbor voting, showing why the choice of k matters.",
  instructionalInterval: "00:00:35–01:22:30 source time (2× local visible-tab capture; participant-only lead-in and final stop prompt excluded)",
  reviewLevel: "Seven-position full-timeline review, first/last teaching boundaries verified, finalized source-matched audio-and-visible-tab capture at 2×, restored source-time transcript, 82 sampled frames, and the idle/stop-prompt tail excluded.",
  coverage: [
    { title: "Rule evaluation", body: "Compare rules using likelihood-ratio evidence, Laplace or m-estimate smoothing, and FOIL information gain rather than treating raw accuracy as sufficient." },
    { title: "Sequential covering and RIPPER", body: "Grow rules for target classes, remove already covered records, prune against validation evidence, and stop under the minimum-description-length and validation-error conditions described." },
    { title: "C4.5 rule extraction", body: "Translate decision-tree paths to rules, simplify their antecedents with pessimistic-error pruning, discard duplicates, and order class groups by description length." },
    { title: "Nearest-neighbor classification", body: "Contrast eager and lazy learning, define a distance-based neighborhood, and use majority voting over k neighbors; the same point can change label as k changes." }
  ],
  slideTrail: [
    { time: "00:00:35", title: "Direct Methods for Rule Extraction — Rule Evaluation", note: "Resumes the R1/R2 example and frames coverage as context for a rule's observed accuracy." },
    { time: "00:08:01", title: "Likelihood-Ratio Statistic", note: "Compares observed and expected class frequencies under a rule; the worked values favor R1 over the tiny R2 rule." },
    { time: "00:13:05", title: "Laplace and m-Estimate", note: "Adds smoothing and a class prior so a rule with little or no support does not receive an unjustifiably extreme score." },
    { time: "00:19:05", title: "FOIL's Information Gain", note: "Scores a specialization using its positive support and its positive fraction after adding a conjunct." },
    { time: "00:21:05", title: "Rule Pruning and Sequential Covering", note: "Uses estimated generalization error to test simplifications and explains removing records already covered by earlier rules." },
    { time: "00:31:11", title: "RIPPER Algorithm", note: "Introduces rare-class-first learning, FOIL-guided rule growth, validation pruning, and MDL-based stopping." },
    { time: "00:43:33", title: "Indirect Rule Extraction", note: "Maps decision-tree root-to-leaf paths to rules, then motivates simplification." },
    { time: "00:54:25", title: "C4.5 Rules", note: "Prunes path rules using pessimistic error, removes duplicates, and groups rules by predicted class." },
    { time: "01:02:41", title: "Rule-Based Classifier Characteristics", note: "Compares rule sets with trees and describes their rectilinear regions and descriptive purpose." },
    { time: "01:06:16", title: "Nearest-Neighbor Classifier", note: "Introduces eager versus lazy learning and distance-based similarity in a d-dimensional feature space." },
    { time: "01:14:56", title: "Nearest-Neighbor Intuition", note: "Uses the duck analogy to explain assigning a query the class of similar training cases." },
    { time: "01:17:04", title: "k-Nearest Neighbors", note: "Shows 1-, 2-, and 3-neighbor votes; the lecture defers choosing k to the next class." }
  ],
  summary: [
    { title: "1. Accuracy needs a support and coverage context", sourceRefs: ["00:00:35–00:08:01", "Direct Methods for Rule Extraction — Rule Evaluation"], paragraphs: ["The session resumes direct rule extraction and the warning that raw accuracy can make a rule look stronger than its evidence warrants. In the slide's 160-record illustration, 60 examples are positive and 100 negative. R1 covers 50 positives and 5 negatives (50/55 ≈ 90.9% accuracy); R2 covers only 2 positives and no negatives (100% observed accuracy). The lecture favors R1 in this comparison because R2's perfect score rests on just two cases, not because R1 is guaranteed to generalize.", "The first score is a likelihood-ratio statistic: R = 2 Σᵢ fᵢ log₂(fᵢ/eᵢ), where k is the number of classes, fᵢ is the observed frequency of class i among covered cases, and eᵢ is the expected frequency under random prediction. The slide associates R with a chi-square distribution with k−1 degrees of freedom. For R1, the expected counts are 20.625 positive and 34.375 negative, yielding about 99.9; for R2 they are 0.75 and 1.25, yielding about 5.66. The larger statistic supports R1 over R2 for this example." ] },
    { title: "2. Smoothing prevents tiny rules from looking certain", sourceRefs: ["00:10:35–00:19:05", "Laplace and m-Estimate"], paragraphs: ["The Laplace measure is (f₊ + 1)/(n + k), where f₊ is the positive count covered by the rule, n is its total covered count, and k is the number of classes. The m-estimate is (f₊ + k p₊)/(n + k), where p₊ is the prior probability of the positive class. Under a uniform prior p₊ = 1/k, the m-estimate reduces to Laplace smoothing. If no training example is covered, Laplace returns 1/k; with increasing coverage, both estimates approach the rule's observed accuracy.", "For R1, Laplace gives 51/57 ≈ 89.47%, close to its 90.9% accuracy. For R2 it gives 3/4 = 75%, tempering its 100% sample accuracy and making its low support visible. These are smoothed measures, not substitutes for checking coverage or evaluating on held-out data." ] },
    { title: "3. FOIL gain evaluates a rule specialization", sourceRefs: ["00:15:35–00:20:35", "FOIL's Information Gain"], paragraphs: ["A candidate rule is specialized by adding a conjunct. Before the addition, suppose it covers p₀ positives and n₀ negatives; afterward it covers p₁ and n₁. The slide defines FOIL information gain as p₁[log₂(p₁/(p₁+n₁)) − log₂(p₀/(p₀+n₀))]. Weighting the change in positive fraction by p₁ rewards both a high positive support count and a high positive fraction after specialization. In the earlier R1/R2 example the slide reports scores of 43.12 and 2.0, respectively, again favoring R1." ] },
    { title: "4. Pruning and covering address different parts of rule quality", sourceRefs: ["00:20:35–00:31:11", "Rule Pruning and Sequential Covering"], paragraphs: ["Pruning removes conditions only when an estimate of generalization improves: the lecture mentions validation-set error and pessimistic error before versus after simplification. In sequential covering, once a rule is accepted, the examples it covers are removed before learning the next rule. The worked R1/R2/R3 example illustrates why both positive and negative covered cases matter: retaining already-explained positives can make a later rule look redundant, while counting previously explained negative errors again can unfairly penalize it. Evaluating the residual examples better reflects each later rule's incremental contribution." ] },
    { title: "5. RIPPER grows and prunes rules for class imbalance", sourceRefs: ["00:31:11–00:43:33", "RIPPER Algorithm"], paragraphs: ["RIPPER is presented as a near-linear-in-training-examples rule learner suited to imbalanced and noisy datasets, with a validation set used to reduce overfitting. For a binary problem it learns rules for the minority class and uses the majority class as default. For multiple classes it orders classes from least to most frequent, learns each as positive against the remaining classes, and leaves the most frequent class as default.", "Rule growth starts with an empty antecedent and adds conjuncts from general to specific using FOIL gain; it stops when a specialization begins to cover negatives and the gain falls. Pruning starts with the last-added conjunct and tests suffix removals on validation cases using (P−N)/(P+N), where P and N are covered positive and negative validation counts. The lecture also describes an MDL stopping rule: stop adding rules if the total rule-set description length rises by at least d bits (the cited experiment used d = 64), or if validation error exceeds 50%. The algorithm may additionally replace existing rules during optimization." ] },
    { title: "6. C4.5 converts paths to rules, then simplifies", sourceRefs: ["00:43:33–01:02:41", "Indirect Rule Extraction", "C4.5 Rules"], paragraphs: ["An indirect method first learns a classifier and then extracts a more readable rule description. In a decision tree, each root-to-leaf path becomes a rule: tests on the path form the antecedent's conjuncts and the leaf label is the consequent. The raw conversion yields an exhaustive, mutually exclusive rule set because each input follows one branch to one leaf.", "C4.5 then tests simplified antecedents by removing conditions, retaining a lower-pessimistic-error version when it improves on the original; it repeats until no further improvement and discards duplicate rules. It groups remaining rules by consequent class and orders the groups by increasing total description length, L_exception + G L_model, with G described as a tuning parameter whose default is 0.5. The lecture presents rule sets as nearly as expressive as trees, with rectilinear regions; simplifying tree-derived rules can make them easier to interpret and can allow overlapping rules or more complex combined boundaries." ] },
    { title: "7. k-NN is lazy and its neighborhood size matters", sourceRefs: ["01:02:41–01:22:25", "Nearest-Neighbor Classifier", "k-Nearest Neighbors"], paragraphs: ["Decision trees and rule learners are eager: they construct a model from training data before a query arrives. A lazy learner delays that generalization step. The lecture uses a rote classifier—which memorizes records and matches only exact attribute combinations—to motivate a more flexible approach: find training examples near the query in a d-dimensional feature space, using a distance or proximity measure.", "In k-NN, the k closest training cases vote on the query's class; the lecture uses majority voting and notes that a tie can require a random choice. Its illustrated point is negative for k=1, tied for k=2, and positive for k=3. Thus k is consequential: the training data and query are unchanged, but neighborhood size changes which labels vote. The instructor ended by deferring methods for choosing k to the next class; no assignment or specific student question followed." ] }
  ],
  keyTerms: [
    { term: "Coverage", definition: "The number or fraction of examples to which a rule applies." },
    { term: "Likelihood-ratio statistic", definition: "A comparison of observed class frequencies under a rule with frequencies expected under random prediction." },
    { term: "Laplace estimate", definition: "A smoothed rule score (f₊+1)/(n+k) that avoids an extreme estimate for small or zero coverage." },
    { term: "m-estimate", definition: "A smoothed score (f₊+kp₊)/(n+k) that incorporates a prior positive-class probability." },
    { term: "FOIL information gain", definition: "A rule-specialization score combining the new positive support count with the change in positive fraction." },
    { term: "Sequential covering", definition: "A learner that builds one rule at a time and removes covered examples before learning later rules." },
    { term: "Minimum description length", definition: "A model-selection principle that balances the encoding cost of a model with the cost of its exceptions." },
    { term: "Lazy learner", definition: "A method that defers general model construction until a query requires classification." },
    { term: "k-nearest neighbors", definition: "An instance-based classifier that predicts from labels among the k closest training cases." }
  ],
  courseSignals: {
    assignments: [],
    homework: [],
    labs: [],
    projects: [],
    references: [
      { time: "01:14:56", title: "Unspecified book source for the duck analogy", detail: "The instructor says the 'walks, quacks, and looks like a duck' analogy was taken from a book, but gives no title or reading instruction; no actionable bibliographic reference was identified." }
    ],
    studentQuestions: []
  },
  insights: [
    { label: "Evidence", title: "A rule score has a denominator story", body: "Accuracy is conditional on the cases a rule covers. Report its support or coverage alongside the score; smoothing can temper small-sample certainty but does not replace a held-out evaluation." },
    { label: "Rule sequences", title: "Residual examples define incremental contribution", body: "Removing cases already handled by earlier rules makes the later-rule evaluation correspond to what remains unexplained, rather than repeatedly crediting or penalizing the same records." },
    { label: "Instance-based learning", title: "k is part of the decision rule", body: "For k-NN, neighborhood size changes the vote and therefore model behavior. Select it with training-only validation, and keep distance scaling and tie handling explicit." }
  ],
  resources: [
    { kind: "read", title: "scikit-learn: Nearest Neighbors", url: "https://scikit-learn.org/stable/modules/neighbors.html", detail: "Official guide explains KNeighborsClassifier, majority voting, distance weighting, k selection, and why neighborhood methods retain training instances." },
    { kind: "practice", title: "UCI Zoo dataset", url: "https://archive.ics.uci.edu/dataset/111/zoo", detail: "An openly licensed labeled dataset for reproducing a small nearest-neighbor vote; document feature encoding, scaling, k, tie handling, and held-out evaluation." },
    { kind: "read", title: "WEKA JRip (RIPPER) classifier documentation", url: "https://weka.sourceforge.io/doc.stable/weka/classifiers/rules/JRip.html", detail: "Official API reference for a practical propositional rule learner that grows and prunes rules and uses description-length-based optimization." },
    { kind: "read", title: "CMU Machine Learning — Sequential Covering Algorithm", url: "https://www.cs.cmu.edu/afs/cs/project/theo-20/www/mlbook/ch10.pdf", detail: "Open course material reinforces one-rule-at-a-time learning, covered-example removal, candidate specialization, and beam search." }
  ],
  studyAid: {
    title: "From a direct rule to a local neighbor vote",
    ariaLabel: "Flow diagram showing rule quality checks and covering, rule growth and pruning, decision-tree path extraction, and a separate k-nearest-neighbor majority vote",
    steps: [
      { label: "Score evidence", detail: "Pair accuracy with coverage; compare observed and expected counts or a smoothed/support-aware score." },
      { label: "Grow one rule", detail: "Add conjuncts using FOIL gain, then stop when negatives erode the gain." },
      { label: "Prune and cover", detail: "Use validation evidence to simplify; remove examples already covered before learning the next rule." },
      { label: "Extract if useful", detail: "Translate tree paths to rules, simplify cautiously, discard duplicates, and order class groups." },
      { label: "Classify locally", detail: "For a query, find k nearby training cases and let their labels vote; changing k can change the result." }
    ],
    caption: "The rule-learning pipeline and k-NN vote are separate model strategies; both depend on explicit evaluation choices rather than a score in isolation."
  },
  quiz
} };
