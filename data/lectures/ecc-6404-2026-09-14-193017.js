const quizSeed = [
  ["What does classification assign to an unknown object?", ["A predefined class label", "A continuous forecast only", "A file extension", "A database primary key"], 0, "Classification maps an attribute set to one of the known discrete classes."],
  ["Why is classification supervised learning?", ["Training examples include known class labels", "It never uses examples", "It only accepts unlabeled data", "It requires a time series"], 0, "The learner uses records whose target class is already known."],
  ["In a tuple (X, y), what is X?", ["The attribute set", "The class label only", "The error rate", "The test accuracy"], 0, "X contains the attributes that describe the record."],
  ["In a tuple (X, y), what is y?", ["The discrete class, category, or target attribute", "The list of all features", "The number of rows", "The recording duration"], 0, "y is the target label that the classifier must learn to predict."],
  ["How does classification differ from regression in the lecture?", ["Classification predicts a discrete label; regression predicts a continuous value", "Classification is unsupervised and regression is supervised", "Regression uses only nominal data", "They are identical tasks"], 0, "The target is categorical for classification and continuous for regression."],
  ["What is descriptive use of a classification model?", ["Explaining differences between objects in different classes", "Deleting the training set", "Changing a video speed", "Encrypting a database"], 0, "A descriptive model helps explain which characteristics distinguish classes."],
  ["What is predictive use of a classification model?", ["Assigning a class to an unknown record", "Sorting only the column names", "Computing a file checksum", "Removing every attribute"], 0, "Prediction applies the learned model to a record whose class is unknown."],
  ["What is the purpose of a training set?", ["Build the classification model", "Measure only the recording length", "Replace the class labels with noise", "Display a box plot"], 0, "The learning algorithm uses the labelled training records to induce a model."],
  ["What is the purpose of a test set?", ["Evaluate the model on records held aside from model construction", "Choose the video folder", "Add more root nodes", "Guarantee zero error"], 0, "A held-out test set provides evidence about how the learned model performs."],
  ["What does a confusion matrix tabulate?", ["Counts of actual and predicted class combinations", "Only the largest attribute", "The tree's source filename", "The number of slides"], 0, "Each cell records how many test records with one actual class received one prediction."],
  ["For a binary classifier, which entries are correct predictions?", ["The diagonal true-positive and true-negative counts", "Only the off-diagonal counts", "Every empty cell", "Only the row totals"], 0, "Correct predictions lie on the actual-versus-predicted diagonal."],
  ["What is the accuracy formula for a binary confusion matrix?", ["(f11 + f00)/(f01 + f10 + f11 + f00)", "(f01 + f10)/n", "Q3 − Q1", "Σxi/n"], 0, "Accuracy is the number of correct predictions divided by all predictions."],
  ["What does the error rate measure?", ["The fraction of incorrect predictions", "The number of tree leaves only", "The number of attributes", "The continuous target value"], 0, "Error rate counts the off-diagonal predictions relative to all predictions."],
  ["When comparing models using accuracy, which direction is better?", ["Higher accuracy", "Lower accuracy", "Accuracy is irrelevant", "Only a larger tree"], 0, "The lecture treats higher test accuracy as better model performance."],
  ["What is the root node of a decision tree?", ["The node with no incoming edge", "Every leaf node", "The last prediction", "A confusion-matrix cell"], 0, "The root is the tree's starting test and has no parent edge."],
  ["What is an internal decision-tree node?", ["A test condition with one incoming edge and outgoing branches", "A class label with no outgoing edges", "A training filename", "A continuous regression value"], 0, "Internal nodes split records according to an attribute test."],
  ["What does a leaf or terminal node contain?", ["The class assigned to a record reaching that node", "Another required root", "All unused features", "A new training set"], 0, "A leaf ends the path and supplies the predicted class label."],
  ["How is an unlabeled record classified by a constructed tree?", ["Start at the root, follow test outcomes, and stop at a leaf", "Choose a random leaf", "Use only the last attribute", "Average all class labels"], 0, "Each answer selects a branch until a terminal class is reached."],
  ["Why can a warm-blooded test require a follow-up question?", ["Warm-blooded examples may belong to more than one class", "Warm blood is always a continuous target", "The root has no branches", "The test set has no records"], 0, "In the example, warm-blooded animals can include mammals and birds, so another attribute is needed."],
  ["Why are there exponentially many possible decision trees?", ["Many attributes, values, and branching orders can be combined", "A tree has only one possible structure", "Every class is a separate database", "The test set is infinite"], 0, "Different root choices and subsequent partitions create a very large search space."],
  ["Why is exhaustive search for the optimal tree impractical?", ["The number of candidate trees grows exponentially", "Accuracy cannot be measured", "Trees cannot contain leaves", "Training labels are continuous"], 0, "Searching every candidate becomes computationally infeasible as the space grows."],
  ["What strategy does the lecture associate with practical tree induction?", ["A greedy heuristic search", "Random deletion of labels", "Exhaustive enumeration only", "A median calculation"], 0, "A greedy method makes locally useful partition choices in reasonable time."],
  ["What is a locally optimal decision in greedy induction?", ["The best available attribute test at the current node", "The globally proven best tree", "A test performed after publication", "A random class label"], 0, "Greedy induction chooses the strongest current split without searching every future tree."],
  ["What is the stopping condition in the recursive tree definition when all records share one class?", ["Make the node a leaf labelled with that class", "Create another root", "Discard the records", "Change the task to regression"], 0, "A pure node needs no further attribute test."],
  ["What happens when a node contains more than one class?", ["Select a test, create child nodes, distribute records, and recurse", "Stop without a prediction", "Replace all records with the mean", "Delete the minority class"], 0, "The recursive step partitions the records and repeats the induction procedure on each child."]
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer ? `${option} is correct: ${explanation}` : `${option} is not correct: it does not match the lecture's classification or decision-tree explanation.`)
}));

export const ecc6404Lecture20260914193017 = {
  en: {
    title: "Classification evaluation and decision-tree induction",
    lede: "This lecture introduces classification as supervised mapping from attributes to discrete classes, evaluates predictions with confusion-matrix metrics, and shows how a greedy recursive decision tree asks attribute questions until it reaches a class leaf.",
    instructionalInterval: "00:03:11–01:24:18 source time (1h 24m 18s reported duration; participant/title-card lead-in excluded)",
    reviewLevel: "Full beginning/10%/25%/50%/75%/90%/near-end sweep, visible 2× capture, source-time transcript, 81 sampled frames, and natural-end verification.",
    coverage: [
      { title: "Classification as supervised learning", body: "Records pair an attribute set X with a discrete class label y; the learned target function maps new X values to a predefined class." },
      { title: "Training, testing, and model quality", body: "A labelled training set induces the model, while held-aside test records provide counts for confusion-matrix evaluation." },
      { title: "Accuracy and error rate", body: "The diagonal of a binary confusion matrix gives correct predictions; accuracy maximizes the diagonal fraction and error rate minimizes the off-diagonal fraction." },
      { title: "Decision-tree questions and nodes", body: "Root and internal nodes hold attribute tests, directed branches represent answers, and leaves hold the final class label." },
      { title: "Greedy recursive induction", body: "Because candidate trees are exponentially numerous, practical algorithms choose locally useful partitions and recurse until nodes become pure or terminal." }
    ],
    takeaway: "A defensible classifier separates learning from evaluation: define labelled records, induce a model, inspect held-out confusion counts, and choose tree tests that make the child subsets purer without pretending a greedy tree is globally optimal.",
    slideTrail: [
      { time: "00:03:30", title: "Classification and the tuple (X, y)", note: "The lecture defines classification as mapping an attribute set to a predefined discrete class and explains X as attributes and y as the class label." },
      { time: "00:15:50", title: "Descriptive and predictive modelling", note: "The model can explain class differences or predict a label for an unknown record; binary and nominal labels are highlighted as natural classification targets." },
      { time: "00:28:21", title: "Training set and test set", note: "The training records build the model, while a separate test set checks whether the model learned useful class distinctions." },
      { time: "00:36:10", title: "Confusion matrix", note: "Actual and predicted binary classes are tabulated so correct diagonal and incorrect off-diagonal counts can be inspected." },
      { time: "00:45:43", title: "Decision-tree animal questions", note: "Body temperature and giving birth form a sequence of attribute questions that distinguishes mammal, bird, and other classes." },
      { time: "00:57:25", title: "Root, internal, and leaf nodes", note: "The tree's hierarchy is defined by incoming and outgoing edges; non-terminal nodes test attributes and leaves emit classes." },
      { time: "01:05:54", title: "Exponential tree search", note: "Different root choices and branch orders create exponentially many candidate trees, making exhaustive optimal search impractical." },
      { time: "01:14:50", title: "Recursive partitioning", note: "The Hunt-style recursive definition stops pure subsets as leaves and otherwise selects a test, distributes records, and recurses." }
    ],
    summary: [
      { title: "1. Classification maps descriptions to known classes", sourceRefs: ["00:03:30–00:14:40", "Classification and the tuple (X, y)"], paragraphs: ["A classification record is represented as (X, y): X is the attribute set and y is a special, discrete class/category/target attribute. The learning problem is to infer a target function that maps X to one of the predefined y values.", "The lecture contrasts this with regression, where the target is continuous. Both are supervised tasks, but the target type changes the modelling problem and the appropriate evaluation language."] },
      { title: "2. Separate model construction from model evaluation", sourceRefs: ["00:28:21–00:35:00", "Training set and test set"], paragraphs: ["The labelled training set is used to construct the classification model. The held-aside test set is then passed through that model so its predictions can be compared with the known outcomes.", "Keeping these roles distinct prevents a model from being judged only on the records it already saw during learning. The test set is evidence about generalisation, not another opportunity to choose the tree after the fact."] },
      { title: "3. Read performance through the confusion matrix", sourceRefs: ["00:36:10–00:44:20", "Confusion matrix"], paragraphs: ["For binary classification, the confusion matrix records actual class against predicted class. The diagonal entries are correct predictions; the two off-diagonal entries are errors.", "Accuracy divides correct predictions by all predictions. Error rate divides incorrect predictions by all predictions. The lecture's model comparison therefore seeks higher accuracy or, equivalently, lower error rate.", "accuracy = (f₁₁ + f₀₀)/(f₀₁ + f₁₀ + f₁₁ + f₀₀); error rate = (f₁₀ + f₀₁)/(f₀₁ + f₁₀ + f₁₁ + f₀₀)" ] },
      { title: "4. A decision tree turns classification into questions", sourceRefs: ["00:45:43–01:03:14", "Decision-tree animal questions"], paragraphs: ["The animal example shows how a new record can be classified by asking a sequence of attribute questions. Body temperature first separates cold-blooded from warm-blooded records; warm-blooded records may need a follow-up such as whether the species gives birth.", "The questions and their possible answers form a hierarchical tree. A root has no incoming edge, an internal node has one incoming edge and multiple outcomes, and a leaf has one incoming edge and no outgoing edge because it supplies the class."] },
      { title: "5. Tree induction is a large optimisation problem", sourceRefs: ["01:05:54–01:13:12", "Exponential tree search"], paragraphs: ["A fixed attribute set can produce exponentially many trees because the root attribute, test order, and branch structure can vary. Some candidates classify more accurately than others, but exhaustive search for the optimal tree is computationally infeasible.", "Practical induction therefore uses a greedy heuristic: at each node, choose a locally useful attribute test, accept its immediate partition, and continue. This is efficient and often accurate, but a locally best choice is not a proof of global optimality."] },
      { title: "6. Recursive induction grows purer subsets", sourceRefs: ["01:14:50–01:24:18", "Recursive partitioning"], paragraphs: ["The recursive definition associates a data subset with each node. If every record in the subset belongs to the same class, the node becomes a leaf labelled with that class.", "If multiple classes remain, the algorithm selects an attribute test, creates a child for each outcome, distributes records to those children, and applies the same procedure recursively. A useful split increases class purity in the child subsets, while the final tree provides a direct path for classifying an unlabeled record."] }
    ],
    keyTerms: [
      { term: "Classification", definition: "A supervised task that maps an attribute set to one of several predefined discrete classes." },
      { term: "Class label", definition: "The discrete target attribute y associated with a record." },
      { term: "Training set", definition: "Labelled records used to build a classification model." },
      { term: "Test set", definition: "Held-aside records used to evaluate the model's predictions." },
      { term: "Confusion matrix", definition: "A table of actual-versus-predicted class counts." },
      { term: "Accuracy", definition: "The fraction of all predictions that are correct." },
      { term: "Decision tree", definition: "A hierarchy of attribute tests and class-labelled leaves." },
      { term: "Greedy induction", definition: "A heuristic that makes the best available local partition choice at each node." }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [] },
    suggestedPractice: {
      assignments: [{ title: "Confusion-matrix worksheet", detail: "Given a binary confusion matrix, calculate accuracy and error rate, then explain which of two models is preferable under each metric." }],
      homework: [{ title: "Animal-classification tree", detail: "Construct a small tree for the lecture's animal records and explain why each question is asked before the next branch." }],
      labs: [{ title: "Recursive tree exercise", detail: "Implement a tiny categorical decision-tree inducer with a pure-node stopping rule and tests for record distribution." }],
      projects: [{ title: "Auditable classifier explorer", detail: "Build an accessible visual tool that shows a record's root-to-leaf path beside its confusion matrix and source-grounded metric definitions." }],
      references: [{ title: "Revisit the source trail", detail: "Use the timecoded classification, confusion-matrix, node, greedy-search, and recursive-induction sections before implementing the practice items." }],
      studentQuestions: []
    },
    insights: [
      { label: "Target type", title: "The label determines the task", body: "The same attributes can support different modelling problems depending on whether y is discrete or continuous; naming the target type prevents category and numeric outcomes from being conflated." },
      { label: "Evaluation", title: "Counts are more informative than a single score", body: "Accuracy compresses the confusion matrix into one number, but the matrix preserves which actual classes are being confused and should be inspected before trusting the score." },
      { label: "Interpretability", title: "A tree exposes its decision path", body: "Every prediction can be explained as a sequence of visible attribute answers ending at a class leaf, which makes the model's reasoning inspectable." },
      { label: "Optimisation", title: "Greedy is a trade-off, not a guarantee", body: "Local partition choices make tree induction practical in an exponential search space, but the resulting tree should be evaluated rather than described as the mathematically optimal tree." },
      { label: "Purity", title: "Splits are useful when children become clearer", body: "The recursive algorithm has made progress when child subsets contain more concentrated class information and can reach a pure leaf with fewer further questions." }
    ],
    resources: [
      { kind: "read", title: "scikit-learn — Decision Trees", url: "https://scikit-learn.org/stable/modules/tree.html", detail: "Official documentation for decision-tree classification, impurity, pruning, and practical implementation considerations." },
      { kind: "read", title: "scikit-learn — Classification metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html", detail: "Primary reference for confusion matrices, accuracy, and related evaluation measures." },
      { kind: "read", title: "IBM — Confusion matrix", url: "https://www.ibm.com/think/topics/confusion-matrix", detail: "A clear reference for actual-versus-predicted counts and the meaning of classification errors." },
      { kind: "read", title: "Google Machine Learning Crash Course — Classification", url: "https://developers.google.com/machine-learning/crash-course/classification", detail: "Accessible study reference for classification outputs, thresholds, and evaluation concepts." },
      { kind: "practice", title: "scikit-learn DecisionTreeClassifier", url: "https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html", detail: "API reference for fitting and inspecting a decision-tree classifier." }
    ],
    quiz
  }
};
