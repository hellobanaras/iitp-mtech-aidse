const quizSeed = [
  ["Why can a multiway split have a lower Gini index than a binary merge of the same outcomes?", ["It keeps more value-specific child distributions instead of merging them", "It always uses fewer records", "It ignores class labels", "It increases the recording duration"], 0, "Merging outcomes can combine records with different class proportions, making the child distribution less pure."],
  ["What is the continuous-attribute test used in the loan-default example?", ["Annual income <= v versus annual income > v", "Customer ID equals the class label", "Every income value becomes a separate file", "The class label is sorted alphabetically"], 0, "A threshold v divides a continuous attribute into two sides."],
  ["What is the main weakness of brute-force threshold search?", ["It repeatedly scans the data for every candidate and can take O(n^2)", "It cannot use numeric values", "It always creates a multiway split", "It requires no class labels"], 0, "Checking every candidate against all records creates a quadratic scan in the lecture's analysis."],
  ["Why are candidate thresholds placed between adjacent sorted values?", ["A midpoint represents the boundary without using an observed record value", "Midpoints remove the class labels", "They guarantee a pure tree", "They create one child only"], 0, "The midpoint between adjacent sorted values is a valid separating position."],
  ["What is the first efficiency gain after sorting a continuous attribute?", ["Update class counts incrementally as the threshold moves", "Recompute every count from scratch", "Remove all duplicate classes", "Use customer ID as the threshold"], 0, "Only the record crossing the moving boundary changes sides, so distributions can be updated."],
  ["Which threshold is selected by the optimized search?", ["The candidate with the smallest overall weighted Gini index", "The largest observed income", "The first threshold alphabetically", "The candidate with the most branches"], 0, "The split criterion favors the candidate producing the lowest weighted child impurity."],
  ["What further reduces the number of threshold candidates?", ["Consider boundaries between adjacent records with different class labels", "Consider only equal adjacent labels", "Use every possible real number", "Discard all thresholds near the median"], 0, "A boundary between equal adjacent labels cannot improve the class separation in the illustrated search."],
  ["Why can customer ID look artificially predictive?", ["A unique ID creates tiny, nearly pure partitions without meaningful generalization", "It is always the strongest causal feature", "It has no distinct values", "It is already the target label"], 0, "Unique identifiers isolate records and can make impurity look perfect while providing no reusable signal."],
  ["What is the risk of an attribute with many distinct values?", ["Impurity criteria may favor fragmented partitions with too few records per child", "It cannot be sorted", "It forces every node to be a leaf", "It eliminates overfitting"], 0, "Many outcomes can lower impurity while leaving insufficient data for reliable prediction."],
  ["What strategy does CART use to address the many-outcome preference?", ["Restrict the test condition to binary splits", "Require a customer ID split", "Use no impurity measure", "Always use the largest tree"], 0, "The lecture describes binary-only splitting as one strategy and names CART as an example."],
  ["What does C4.5 use to compensate for the number of split outcomes?", ["Gain ratio", "Raw file size", "A random threshold", "Only classification error"], 0, "C4.5 uses gain ratio to balance information gain against split information."],
  ["How is gain ratio defined in the lecture?", ["Information gain divided by split information", "Gini index multiplied by file size", "Accuracy divided by tree depth", "Entropy plus the number of records"], 0, "Gain ratio divides the entropy-based information gain by the split-information term."],
  ["What happens to split information when equally sized data is divided into more outcomes?", ["It grows with log2(k)", "It becomes exactly zero", "It ignores k", "It becomes the class label"], 0, "With k equally likely outcomes, split information is log2(k)."],
  ["What are the two inputs to the recursive tree-growth procedure?", ["The current record subset E and the available attribute set F", "Only the root label and file name", "A browser session and a password", "The final tree and its accuracy"], 0, "The pseudocode carries the current examples and the candidate features into each recursive call."],
  ["What happens when the stopping condition is true?", ["Create a leaf and assign a class label", "Choose another root test", "Duplicate the subtree", "Sort the recording again"], 0, "A terminal node is created when further splitting is unnecessary or unreliable."],
  ["What does the best-split step return?", ["An attribute and test value or condition", "A new transcript", "The source filename", "A password prompt"], 0, "The best-split routine identifies which attribute test should partition the current data."],
  ["Why does the attribute set remain available in recursive calls?", ["The algorithm evaluates the available attributes for each reduced subset", "The data set never changes", "Every child must use every attribute", "The tree has no internal nodes"], 0, "The current subset changes as records move down the tree, while the candidate feature set is passed for later tests."],
  ["How is a leaf class commonly selected for mixed records?", ["Use the majority class in the node", "Use the newest class alphabetically", "Use the source date", "Use a random class every time"], 0, "The lecture describes assigning the class with the highest local representation."],
  ["Which condition can stop tree growth because further decisions would be unreliable?", ["The number of records falls below a minimum threshold", "The recording has a title card", "The attribute name is short", "The source has multiple slides"], 0, "A minimum-record threshold prevents data fragmentation from producing fragile leaves."],
  ["What is pruning intended to reduce?", ["Tree size and overfitting", "The number of class labels in the data", "The need for any training data", "The number of valid thresholds to zero"], 0, "Pruning trims branches to improve generalization rather than memorizing noise."],
  ["What are the two pruning stages named in the lecture?", ["Pre-pruning and post-pruning", "Input-pruning and output-pruning", "Binary-pruning and nominal-pruning", "Audio-pruning and video-pruning"], 0, "The lecture distinguishes stopping early from trimming after a tree has been built."],
  ["Why is decision-tree induction described as non-parametric?", ["It does not require a prior probability-distribution assumption for attributes and classes", "It has no parameters at all", "It cannot use numeric data", "It always has one node"], 0, "The model can partition records without first assuming a named distribution family."],
  ["Why is greedy top-down recursive partitioning used?", ["Finding the globally optimal tree is computationally difficult", "It guarantees the global optimum", "It avoids all validation", "It requires no choices"], 0, "A local best-split heuristic makes tree construction tractable even though it is not an exhaustive global search."],
  ["What is the worst-case classification cost in terms of tree depth w?", ["O(w), following one root-to-leaf path", "O(n^2) for every test record", "O(2^w) for every leaf", "It cannot be estimated"], 0, "Classifying one record follows a path whose length is bounded by the maximum depth."],
  ["Why can repeated subtrees make a tree harder to use?", ["They enlarge and complicate the model without adding a distinct rule", "They make every leaf pure", "They remove all attributes", "They guarantee higher test accuracy"], 0, "The lecture identifies replicated subtrees as a source of unnecessary complexity and overfitting risk."]
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question,
  options,
  answer,
  explanation,
  optionNotes: options.map((option, index) => index === answer ? `Correct: ${option}. ${explanation}` : `Not correct: ${option} does not match the lecture's decision-tree explanation.`),
}));

export const ecc6404Lecture20260921193834 = { en: {
  title: "Optimized split search, gain ratio, and decision-tree growth",
  lede: "This lecture optimizes continuous-attribute split search, explains why high-cardinality attributes can mislead impurity measures, introduces CART and C4.5 safeguards, and traces recursive tree growth, stopping, pruning, and model characteristics.",
  instructionalInterval: "00:01:10–01:20:30 source time (1h 20m 55s reported duration; participant/setup and closing idle tail excluded)",
  reviewLevel: "Full beginning/10%/25%/50%/75%/90%/near-end sweep, visible 2× capture, source-time-restored transcript, 79 sampled frames, 35 slide candidates, and idle-tail exclusion.",
  coverage: [
    { title: "Multiway versus binary splits", body: "Keeping value-specific children can lower impurity, but extra outcomes can also fragment the data and weaken generalization." },
    { title: "Efficient continuous split search", body: "Sort numeric values, test midpoints, update class counts incrementally, and retain only boundaries between adjacent records whose classes differ." },
    { title: "High-cardinality bias", body: "Gini and entropy can favor many-outcome attributes such as identifiers even when those partitions have no predictive meaning." },
    { title: "CART and C4.5 safeguards", body: "Binary-only tests and gain ratio are two strategies for controlling the preference for large numbers of split outcomes." },
    { title: "Recursive growth and stopping", body: "Tree growth passes a current data subset and attribute set, creates a leaf or best test, and recurses until stopping rules apply." },
    { title: "Pruning and model characteristics", body: "Thresholds, pre/post-pruning, non-parametric modelling, greedy search, depth, noise, and data fragmentation shape practical trees." }
  ],
  takeaway: "A useful tree is not the one with the purest training partition; it is the one whose split search, outcome count, stopping rules, and pruning produce reliable predictions on unseen records.",
  slideTrail: [
    { time: "00:01:10", title: "Multiway split and nominal-attribute purity", note: "The opening slide compares binary merges with a family/sports/luxury multiway split and explains why merging can increase impurity." },
    { time: "00:06:00", title: "Continuous threshold and brute-force search", note: "Annual income <= v is evaluated at candidate values; scanning all records for every candidate gives the O(n²) baseline." },
    { time: "00:15:40", title: "Sorted values and midpoint candidates", note: "Sorted income values create midpoint thresholds; class counts are updated as one record crosses the moving boundary." },
    { time: "00:24:40", title: "Class-change candidates and the best threshold", note: "Boundaries between equal adjacent labels are skipped; the worked example selects v = 97 as the lowest-Gini candidate." },
    { time: "00:32:30", title: "Gender, car type, and customer ID", note: "The three test conditions show why a pure identifier partition is not a useful predictive attribute." },
    { time: "00:39:30", title: "CART binary tests and C4.5 gain ratio", note: "Binary restriction and split-information normalization address the preference for attributes with many outcomes." },
    { time: "00:51:00", title: "Tree-growth pseudocode", note: "The recursive procedure carries E and F, creates a leaf at a stopping condition, otherwise finds the best split and recurses on child subsets." },
    { time: "01:06:00", title: "Stopping, pruning, and decision-tree characteristics", note: "Minimum records, pre/post-pruning, overfitting, non-parametric learning, greedy search, depth, noise, and fragmentation are summarized." }
  ],
  summary: [
    { title: "1. Multiway purity is not the same as reliable prediction", sourceRefs: ["00:01:10–00:06:00", "Multiway split and nominal-attribute purity"], paragraphs: ["The lecture resumes with a nominal attribute that has family, sports, and luxury values. A multiway split keeps three child distributions separate, while a binary split merges some outcomes. Because merging combines class counts, the resulting child can be less pure and have a larger Gini index.", "The important qualification is statistical: more branches can make training partitions look purer while leaving each child with fewer records. Purity is therefore a local signal, not permission to prefer unlimited branching."] },
    { title: "2. Sorting turns a quadratic threshold scan into an incremental search", sourceRefs: ["00:06:00–00:24:40", "Continuous threshold and brute-force search", "Sorted values and midpoint candidates"], paragraphs: ["For annual income, a binary test compares income with a threshold v. The brute-force approach tries every observed value and scans all records each time, yielding the lecture's O(n²) cost. Sorting the values first costs O(n log n), after which candidate boundaries can be represented by midpoints between adjacent sorted values.", "As the threshold moves, only the record crossing the boundary changes the two class-count tables. The Gini calculation is updated from the previous distribution rather than recomputed from the entire data set. The worked example then narrows candidates further: a threshold between adjacent records with the same class label cannot improve the class separation, so only class-change boundaries are evaluated."] , formula: "T_{brute}=O(n^2);\\qquad T_{sorted}=O(n\\log n)+O(n)" },
    { title: "3. The lowest impurity can be a misleading objective", sourceRefs: ["00:24:40–00:39:30", "Class-change candidates and the best threshold", "Gender, car type, and customer ID"], paragraphs: ["The lecture selects v = 97 in its sorted-income example because it gives the lowest candidate Gini. It then compares gender, car type, and customer ID. Car type creates purer descendants than gender in the illustration, but customer ID is even purer because a unique identifier isolates one record per branch.", "That identifier is not predictive in the intended sense: it memorizes the training rows and leaves too little evidence per partition. A useful split must balance impurity reduction with record coverage and the ability to generalize to unseen records."] , formula: "useful\\ split \\neq \\text{minimum training impurity alone}" },
    { title: "4. CART and C4.5 counter high-cardinality preference differently", sourceRefs: ["00:39:30–00:51:00", "CART binary tests and C4.5 gain ratio"], paragraphs: ["Gini and entropy tend to favor attributes with many distinct outcomes because finer partitions can look purer. One response is to restrict the candidate tests to binary splits; the lecture identifies CART with this strategy. Another response is to modify the criterion.", "C4.5 uses gain ratio: information gain from entropy is divided by split information, which increases when the data is distributed across many outcomes. In a balanced k-way split, split information is log₂(k), so the criterion applies a complexity-aware correction rather than rewarding branch count alone."] , formula: "gain\\ ratio=\\frac{information\\ gain}{split\\ information};\\qquad splitInfo=-\\sum_{i=1}^{k}p_i\\log_2p_i" },
    { title: "5. Recursive tree growth carries data subsets downward", sourceRefs: ["00:51:00–01:06:00", "Tree-growth pseudocode"], paragraphs: ["The pseudocode names E as the current data subset and F as the available attribute set. If the stopping condition is true, create a leaf and classify it, commonly with the majority class. Otherwise create an internal node, find the best attribute/test condition, partition E into child subsets, and call tree growth recursively for each child.", "The same attribute set can remain available while E becomes smaller at each level. The recursive call returns a child subtree, attaches it to the current node, and continues until a stopping rule or terminal classification is reached."] },
    { title: "6. Stopping and pruning protect generalization", sourceRefs: ["01:06:00–01:20:30", "Stopping, pruning, and decision-tree characteristics"], paragraphs: ["Stopping conditions include a pure class subset, identical attribute values, or too few records to support a reliable further decision. After a tree is grown, pre-pruning and post-pruning can reduce branches and mitigate overfitting. The lecture also highlights data fragmentation: recursive partitions leave fewer records at deeper nodes.", "Decision-tree induction is non-parametric because it does not require a prior distribution family for each attribute and class. The search is still greedy and top-down because the globally optimal tree is computationally difficult. Once built, classification follows one root-to-leaf path with worst-case work proportional to the maximum depth, while noisy and irrelevant attributes can still enlarge the model if safeguards are weak."] }
  ],
  keyTerms: [
    { term: "Candidate split position", definition: "A threshold or value grouping considered as a possible internal-node test." },
    { term: "Incremental class counts", definition: "Updated left/right class distributions maintained as a sorted threshold moves." },
    { term: "High-cardinality attribute", definition: "An attribute with many distinct outcomes that may create misleadingly pure fragments." },
    { term: "Split information", definition: "An outcome-distribution term used by gain ratio to account for the number and balance of branches." },
    { term: "Stopping condition", definition: "A rule that ends recursion by turning the current subset into a leaf." },
    { term: "Pre-pruning", definition: "Stopping or restricting growth before a full tree is built." },
    { term: "Post-pruning", definition: "Removing branches after the initial tree has been grown." },
    { term: "Data fragmentation", definition: "The reduction in records per node as recursive partitions become deeper." }
  ],
  courseSignals: {
    assignments: [{ time: "01:20:30", title: "None mentioned in this lecture", detail: "No instructor-assigned assessment was stated in the reviewed transcript." }],
    homework: [{ time: "01:20:30", title: "None mentioned in this lecture", detail: "No homework task was stated in the reviewed transcript." }],
    labs: [{ time: "01:20:30", title: "None mentioned in this lecture", detail: "No lab or practical was stated in the reviewed transcript." }],
    projects: [{ time: "01:20:30", title: "None mentioned in this lecture", detail: "No instructor-assigned project was stated in the reviewed transcript." }],
    references: [{ time: "01:09:27", title: "Vipin Kumar and Han–Kamber data-mining texts", detail: "The instructor named the Vipin Kumar and Han–Kamber books as the sources for a numerical decision-tree characteristic example." }],
    studentQuestions: []
  },
  insights: [
    { label: "Complexity", title: "Sort once, then move a boundary", body: "The threshold example illustrates a reusable pattern: pay a one-time ordering cost, maintain sufficient statistics incrementally, and avoid rescanning the full data for each candidate." },
    { label: "Generalization", title: "Pure is not automatically useful", body: "Customer ID exposes why an impurity-only objective can reward memorization. The training partition must be judged alongside sample coverage and unseen-record behavior." },
    { label: "Criterion", title: "Gain ratio is a correction, not a guarantee", body: "Dividing information gain by split information reduces branch-count bias, but validation and sensible feature semantics remain necessary." },
    { label: "Recursion", title: "E shrinks while F remains a candidate set", body: "The pseudocode makes the data-flow distinction explicit: each child receives a smaller subset, while feature availability is managed separately." },
    { label: "Robustness", title: "Pruning changes the model's risk profile", body: "Pre- and post-pruning trade training fit for a smaller tree that is less likely to encode noise or fragmented leaves." }
  ],
  resources: [
    { kind: "read", title: "scikit-learn — Decision Trees", url: "https://scikit-learn.org/stable/modules/tree.html", detail: "Official documentation on recursive partitions, impurity criteria, tree structure, and computational considerations." },
    { kind: "read", title: "scikit-learn — DecisionTreeClassifier", url: "https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html", detail: "API reference for Gini, entropy/log-loss criteria, split controls, leaf limits, and pruning parameters." },
    { kind: "practice", title: "Post-pruning with cost complexity", url: "https://scikit-learn.org/stable/auto_examples/tree/plot_cost_complexity_pruning.html", detail: "A reproducible example of selecting a cost-complexity pruning path to control overfitting." },
    { kind: "read", title: "Data Mining: Concepts and Techniques", url: "https://www.sciencedirect.com/book/9780123814791/data-mining", detail: "Publisher reference for the data-mining decision-tree material and the attribute/split terminology used in the lecture." }
  ],
  studyAid: {
    title: "From candidate threshold to pruned tree",
    ariaLabel: "Flow from sorted candidate boundaries through impurity correction and recursive tree growth to pruning",
    steps: [
      { label: "Sort and propose", detail: "Order a numeric attribute and place candidates between adjacent values." },
      { label: "Update class counts", detail: "Move one record across the boundary and update child distributions incrementally." },
      { label: "Score with safeguards", detail: "Compare impurity, branch count, and sample coverage; use binary restriction or gain ratio when appropriate." },
      { label: "Grow recursively", detail: "Partition the current subset, create child calls, and stop at a pure or too-small node." },
      { label: "Prune and validate", detail: "Remove weak branches and check performance on unseen records rather than training purity alone." }
    ]
  },
  quiz
} };
