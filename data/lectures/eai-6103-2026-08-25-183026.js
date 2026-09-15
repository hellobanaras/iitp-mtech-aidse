// English-only publication unit for the verified 25 August 2026 recording.
const quizSeed = [
  ["What are the two broad categories used in the lecture to organize ML/DL algorithms?", ["Supervised and unsupervised learning", "Training and testing only", "Classification and deployment only", "Python and SQL"], 0, "The lecture introduces supervised and unsupervised learning as broad categories."],
  ["What makes a dataset labelled for supervised learning?", ["It includes a relevant target or ground-truth column", "It contains only feature names", "It has no observations", "It contains only images"], 0, "A target variable supplies the correct answer used for learning."],
  ["What determines the target variable?", ["The problem or task being solved", "A universal fixed rule for every dataset", "The file extension", "The number of features"], 0, "The same dataset can have different targets for different tasks."],
  ["In the placement example, which column is the target when the task is to predict placement?", ["Placement: yes or no", "Student name", "Semester CGPA only", "Internship count only"], 0, "Placement is the outcome the model is asked to predict."],
  ["Which terms can refer to the target column in the lecture?", ["Target, dependent variable, class, label, or output variable", "Only independent variable", "Only feature", "Only observation"], 0, "The lecture groups these terms around the desired outcome."],
  ["What are features or independent variables used for?", ["They provide inputs used to predict the target", "They are always the correct answer", "They replace the dataset", "They are only test metrics"], 0, "Features are the explanatory inputs for the target."],
  ["What is ground truth in the training example?", ["The correct answer stored in the target column", "A random prediction", "A model parameter", "A Python package"], 0, "The target value is also called the ground truth."],
  ["What happens when a model prediction disagrees with ground truth during training?", ["The algorithm updates its weights or parameters to reduce error", "The target column is deleted", "Testing begins immediately", "The data is discarded"], 0, "Misclassification or error drives an update in the training process."],
  ["Why does the instructor describe training as iterative?", ["Observations are passed through the algorithm repeatedly so it can learn patterns", "The dataset is used only once", "Only the test set is repeated", "No model is created"], 0, "Repeated passes let the model adjust and learn from errors."],
  ["What guides the training process in supervised learning?", ["The target variable or ground truth", "The filename", "The monitor resolution", "The test metric alone"], 0, "The known answer provides direction for improving predictions."],
  ["Can the same dataset have different target columns?", ["Yes, because the task determines which column is the target", "No, the first column is always the target", "Only if it has no labels", "Only after deployment"], 0, "The car-purchase, salary, and stock examples illustrate task-dependent targets."],
  ["What is the key distinction between supervised and unsupervised learning?", ["Supervised learning uses relevant labels; unsupervised learning works without a target column", "Supervised learning has no data", "Unsupervised learning always predicts salary", "They use identical training signals"], 0, "The presence or absence of a relevant target is the central distinction."],
  ["What does unlabeled data mean in the lecture?", ["The dataset has no target variable or ground-truth label", "Every row has two labels", "The features are missing", "The model is already validated"], 0, "Unlabeled data contains inputs without the desired output column."],
  ["What kind of target variable indicates a classification problem?", ["A categorical target such as yes/no or cat/dog", "A continuous salary value", "A timestamp only", "A feature matrix without output"], 0, "Categorical outputs define classification in the lecture."],
  ["What kind of target variable indicates regression?", ["A continuous or numerical value such as salary, height, CGPA, or temperature", "A fixed class label only", "A filename", "An unlabeled cluster"], 0, "Regression predicts a numeric target."],
  ["Which statement about classification and regression is correct?", ["They are categories containing many possible algorithms", "They are single algorithms", "They apply only to unsupervised learning", "They describe Python editors"], 0, "The lecture names logistic regression, SVM, decision trees, and CNN among algorithm examples."],
  ["Which is presented as an unsupervised-learning example?", ["Clustering", "Placement classification with labels", "Salary regression with ground truth", "Training-data accuracy"], 0, "Clustering is named under unsupervised learning."],
  ["Which additional topics are named as unsupervised-learning examples?", ["Association rule mining and principal component analysis", "Only linear regression", "Only CNN classification", "Only train/test splitting"], 0, "Association rule mining and PCA are explicitly mentioned."],
  ["Where does deep learning fit in the lecture's taxonomy?", ["It is an area with algorithms that may be supervised or unsupervised", "It is one single algorithm", "It is always regression", "It is unrelated to machine learning"], 0, "The instructor distinguishes a subject area from the algorithm categories within it."],
  ["What is the first decision in the model-development lifecycle?", ["Use the task and dataset to select a suitable algorithm family", "Deploy before inspecting data", "Remove every feature", "Choose an editor by filename"], 0, "Task and data characteristics guide the selection of supervised/unsupervised and classification/regression."],
  ["Why may algorithm selection require trying several candidates?", ["Performance depends on the task and dataset, so experience narrows candidates but experiments compare them", "One algorithm is universally best", "The target is never needed", "Testing changes the model"], 0, "The lecture describes selection as experience plus empirical comparison."],
  ["What is a typical illustrative split discussed for a labelled dataset?", ["About 70% training and 30% testing, with the exact ratio not fixed", "100% testing and 0% training", "Only 1% training", "A fixed 50/50 rule in every case"], 0, "The instructor gives a range around a 70/30 split and says it is not fixed."],
  ["What belongs in the training data used to fit a supervised model?", ["Features together with the target values", "Features with the target always removed", "Only the filenames", "Only test predictions"], 0, "Training compares predictions against the known target."],
  ["What is removed from the model input during testing?", ["The target variable, which is kept separately for comparison", "All features", "The trained model", "The test observations"], 0, "The model receives test features and its predictions are compared with held-out targets."],
  ["What should happen during testing when a prediction is wrong?", ["Record the result for evaluation without updating the trained model", "Update the model after every test row", "Delete the target", "Repeat training on the test row"], 0, "Testing measures performance; it is not the training update loop."]
];
const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer ? `Correct: ${option}. ${explanation}` : `Incorrect: ${option} does not match the lecture's explanation.`)
}));

export const eai6103Lecture20260825183026 = { en: {
  title: "Supervised and unsupervised learning: targets, training, and testing",
  lede: "This Advanced Machine Learning foundation lecture distinguishes supervised from unsupervised learning through target variables, labels, features, training feedback, model selection, and the separation of training and testing data.",
  instructionalInterval: "00:04:08–01:32:42 source time (participant-only lead-in excluded; no idle tail observed)",
  reviewLevel: "Full seven-point visible Stream sweep, audio-enabled 2× visible-tab capture, source-time-bounded processing, timestamped transcript, and idle-tail decision verified.",
  coverage: [
    { title: "Targets, labels, and features", body: "A task defines the target or ground-truth column; the remaining explanatory inputs are features or independent variables." },
    { title: "The supervised-learning feedback loop", body: "A model predicts for each training observation, compares the result with ground truth, and updates parameters when error or misclassification occurs." },
    { title: "Unsupervised learning and its examples", body: "Without a relevant target column, the problem is treated as unsupervised; clustering, association rule mining, and PCA are named examples." },
    { title: "Classification versus regression", body: "A categorical target suggests classification, while a continuous numerical target suggests regression; each is a category with many algorithms." },
    { title: "Model lifecycle and held-out testing", body: "Select an algorithm from the task and data, train repeatedly on labelled examples, then test on features with targets held aside and do not update the model." }
  ],
  takeaway: "Start with the task, not the algorithm name: identify the target and features, classify the problem as supervised or unsupervised and, when labelled, as classification or regression. Train with repeated feedback; test with the target hidden from the model and retained only for evaluation.",
  slideTrail: [
    { time: "00:04:08", title: "Supervised and unsupervised learning", note: "The opening agenda introduces features, variables, labels, targets, training, and testing." },
    { time: "00:09:49", title: "Target, features, and placement dataset", note: "The handwritten example uses student information as features and placement as the yes/no target." },
    { time: "00:23:36", title: "Ground truth and model updates", note: "The whiteboard shows predictions compared with correct answers, misclassification, and parameter updates." },
    { time: "00:46:25", title: "Supervised versus unsupervised data", note: "The board contrasts labelled data with data lacking a target column." },
    { time: "01:09:15", title: "Model-development lifecycle", note: "The lifecycle moves from task/data inspection and algorithm selection into iterative training and evaluation." },
    { time: "01:23:06", title: "Testing with unseen data", note: "The final testing diagram passes features to the trained model while keeping targets separate for checking predictions." }
  ],
  summary: [
    { title: "1. The task defines the target", sourceRefs: ["00:09:49–00:20:00", "Target, features, and placement dataset"], paragraphs: ["The lecture uses a placement example: student information such as semester CGPA, internships, and technical knowledge acts as input, while placement is the desired yes/no outcome. The target is therefore not a universal column property; it is selected by the problem being solved.", "The same dataset can support a different target when the task changes, such as predicting car purchase, salary, stock day high, or stock day low. Target, dependent variable, class, label, and output variable describe the desired answer; features and independent variables describe the inputs used to estimate it."], formula: "task + dataset → target column + feature columns" },
    { title: "2. Supervised learning uses feedback from ground truth", sourceRefs: ["00:23:36–00:34:00", "Ground truth and model updates"], paragraphs: ["For each training observation, the model produces a prediction and compares it with the correct target value, also called ground truth. A correct classification needs no corrective change in that step; a wrong prediction is an error or misclassification.", "The lecture frames training as iterative: the algorithm updates weights, coefficients, or parameters when errors occur and then proceeds through the observations again. The target column acts like a supervisor because it tells the model whether its answer is right or wrong."], formula: "prediction ≠ ground truth → error / misclassification → parameter update" },
    { title: "3. Labels separate supervised from unsupervised learning", sourceRefs: ["00:34:00–00:52:00", "Supervised versus unsupervised data"], paragraphs: ["A relevant target column makes the data labelled and supports supervised learning. When a task has input data but no target or ground-truth column, the lecture calls it unlabeled data and places the problem in unsupervised learning.", "Supervised and unsupervised learning are categories rather than single algorithms. Clustering, association rule mining, and principal component analysis are named as unsupervised examples. Deep learning is presented as an area containing algorithms that can belong to either category."], formula: "label present → supervised; label absent → unsupervised" },
    { title: "4. Target type narrows the supervised problem", sourceRefs: ["00:52:00–01:00:00", "Classification versus regression"], paragraphs: ["Once a relevant target exists, inspect its type. A categorical target such as yes/no, happy/not happy, or cat/dog indicates classification. A continuous numerical target such as salary, height, CGPA, or temperature indicates regression.", "Classification and regression are categories with many candidate algorithms. The selection still depends on the task and dataset; the instructor names logistic regression, SVM, decision tree, Naive Bayes, and CNN as examples in the classification discussion."], formula: "label type = categorical → classification; numerical / continuous → regression" },
    { title: "5. Training and testing answer different questions", sourceRefs: ["01:09:15–01:32:42", "Model-development lifecycle", "Testing with unseen data"], paragraphs: ["The lifecycle begins by inspecting the task and data, then selecting an algorithm family. A typical illustrative split is around 70% training and 30% testing, but the lecture stresses that the ratio is not a fixed thumb rule. Training data retain features and targets so the model can learn from repeated prediction-versus-ground-truth comparisons.", "For testing, the held-out target is separated from the model input. The model receives the test features, predicts, and is evaluated against the targets kept aside. The model is not updated during this phase: testing measures how well the trained model performs on observations it did not use for fitting."], formula: "train(features, targets) → model; test(features) → predictions compared with held-out targets" }
  ],
  courseSignals: {
    assignments: [], homework: [], labs: [], projects: [],
    references: [
      { time: "01:00:00", title: "Instructor-uploaded supervised/unsupervised learning notes", detail: "The instructor says a summary document covering labelled and unlabeled data, supervised learning, unsupervised learning, clustering, and association rule mining will be uploaded to Moodle." },
      { time: "01:20:00", title: "Coding-class Python demonstration", detail: "The instructor points learners to a planned coding class demonstration of importing data, visualising it, and splitting it into training and testing data." }
    ],
    studentQuestions: [
      { time: "00:26:00", question: "Who or what guides the training process?", response: "The target variable, ground truth, class, label, or output variable guides the model by providing the correct answer for comparison." },
      { time: "00:38:00", question: "Can the same dataset have more than one possible target?", response: "The target is chosen by the task, so the same columns can support different target choices for different problems; a given supervised task has the relevant output it is trying to predict." },
      { time: "00:55:00", question: "Where does deep learning fit: supervised or unsupervised?", response: "Deep learning is an area with many algorithms; some can be supervised and some unsupervised, so the area itself is not one of those two algorithm categories." },
      { time: "01:22:00", question: "Should the target be included while testing?", response: "The target is kept separately for comparison, but it is excluded from the model input so testing can evaluate the prediction without giving the answer to the model." }
    ]
  },
  insights: [
    { label: "Problem framing", title: "The target is a question-specific choice", body: "A dataset does not announce one permanent target. The target follows the decision or prediction question, so framing comes before algorithm selection." },
    { label: "Feedback", title: "Ground truth turns prediction into learning", body: "The supervised loop is not merely prediction: compare, identify error, update parameters, and repeat across the training observations." },
    { label: "Evaluation", title: "Held-out targets preserve the test", body: "Keeping test targets separate from model inputs allows performance to be measured on unseen examples without leaking the answers." },
    { label: "Taxonomy", title: "Categories are not algorithms", body: "Supervised, unsupervised, classification, and regression organize problems and algorithm families; none alone identifies a single implementation." }
  ],
  resources: [
    { kind: "docs", title: "scikit-learn supervised learning guide", url: "https://scikit-learn.org/stable/supervised_learning.html", detail: "Official guide to supervised estimators, labelled examples, and prediction workflows." },
    { kind: "docs", title: "scikit-learn model selection and evaluation", url: "https://scikit-learn.org/stable/model_selection.html", detail: "Official reference for train/test splitting, cross-validation, and evaluation without changing the held-out role of test data." },
    { kind: "docs", title: "scikit-learn clustering guide", url: "https://scikit-learn.org/stable/modules/clustering.html", detail: "Official overview of clustering methods as an unsupervised-learning family." },
    { kind: "course", title: "Google Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course", detail: "Free interactive explanations and exercises for supervised learning, data preparation, and model evaluation." },
    { kind: "dataset", title: "UCI Spambase dataset", url: "https://archive.ics.uci.edu/dataset/94/spambase", detail: "A public labelled tabular dataset for practising feature/target inspection and classification error analysis." }
  ],
  keyTerms: [
    { term: "Target variable", definition: "The output selected by the task that the model is trained to predict." },
    { term: "Feature", definition: "An input or independent variable used to estimate the target." },
    { term: "Ground truth", definition: "The correct target value used to compare with a model prediction." },
    { term: "Classification", definition: "A supervised problem whose target is categorical." },
    { term: "Regression", definition: "A supervised problem whose target is continuous or numerical." },
    { term: "Unlabeled data", definition: "Input data without a relevant target or ground-truth column." }
  ],
  quiz
} };
