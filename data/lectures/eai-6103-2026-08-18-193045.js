// English-only publication unit for the verified 18 August 2026 recording.
// Source timecodes below refer to the original Stream timeline. The visible
// capture began at approximately 00:14:03 after the verified teaching marker.
const quizSeed = [
  ["Why did the instructor begin with basic machine learning?", ["The semester is expected to include a substantial deep-learning component, but learners may need ML foundations first", "Because deep learning is unrelated to machine learning", "Because coding is not part of the course", "Because NLP is the only planned topic"], 0, "The instructor framed basic ML as preparation for the planned deep-learning and NLP coverage."],
  ["Which topic was described as part of the planned deep-learning coverage?", ["LSTM, RNN, attention, GANs, and autoencoders", "Only spreadsheet formulas", "Only subnet masks", "Only database indexing"], 0, "The roadmap names recurrent models, attention, GANs, and autoencoders among the deep-learning topics."],
  ["What level of NLP was the instructor planning for this course?", ["Basic NLP, with a separate later course for language models", "Only compiler construction", "No NLP at all", "Only database normalisation"], 0, "The lecture distinguishes basic NLP in this course from a later language-model course."],
  ["What is the intended balance of the course delivery?", ["Theory together with coding and implementation", "Only attendance", "Only recorded video with no coding", "Only a final project"], 0, "The instructor describes theory sessions, coding/implementation, and query time as parts of the course."],
  ["Which language was selected for coding?", ["Python", "Fortran only", "SQL only", "Assembly only"], 0, "The instructor says Python will be used for the coding work."],
  ["What will the initial Python-oriented classes provide?", ["A short foundation in editors, functions, libraries, and data import/export", "A complete replacement for the ML course", "Only a history of programming languages", "Only a database administration certificate"], 0, "The planned introduction covers enough Python basics to support later ML coding."],
  ["Why did the instructor warn that extra self-learning would be needed?", ["A limited number of classes cannot cover every ML, DL, NLP, and industry use case", "The course has no syllabus", "The recordings are not available", "Machine learning uses no algorithms"], 0, "The lecture explicitly says that the class time is not enough for the whole field."],
  ["What was said about theory and coding recordings?", ["Both types of sessions are recorded and made available through the course resources", "Only exams are recorded", "Only participant cameras are recorded", "Recordings are prohibited"], 0, "The instructor says every theory and coding session is recorded and points learners to Moodle."],
  ["How did the instructor describe the course assessment in this session?", ["Five assignments plus quiz-based/MCQ evaluation were described", "Only a descriptive essay was described", "Only attendance was described", "No evaluation was described"], 0, "The instructor mentions five assignments and two or three quiz-style assessments; the exact acronym is not asserted here."],
  ["What was the relationship of the custom project to this course?", ["It was described as a separate credit rather than part of this course", "It replaces every lecture", "It is the same as the email example", "It is a compulsory login step"], 0, "The lecture separates the custom project credit from this subject."],
  ["What is the central ability associated with machine learning in the definition?", ["Learning and improving from experience without every rule being explicitly programmed", "Displaying a larger monitor", "Encrypting every file", "Sorting folders alphabetically"], 0, "The definition emphasises automatic learning from experience rather than a complete hand-written rule list."],
  ["What is the conventional-programming approach in the email example?", ["Write explicit checks for the conditions that make an address valid", "Provide only unlabelled examples", "Ask a model to discover the target after deployment", "Remove all input validation"], 0, "The conventional version uses if/else-style rules for local-part, domain, spacing, and related checks."],
  ["What does the machine-learning version need before it can learn the email task?", ["A dataset of examples with features and correct/incorrect labels", "Only the final prediction", "A password and a private token", "No data at all"], 0, "The lecture contrasts explicit rules with many labelled correct and incorrect examples."],
  ["In the email example, what does a label represent?", ["Whether an example is correct/valid or incorrect/invalid", "The colour of the slide", "The recording file size", "The instructor's room number"], 0, "The label is the target class for each email-like example."],
  ["What is a feature in the described tabular dataset?", ["An input property or column used to describe an example", "A final exam grade only", "A video playback button", "A network password"], 0, "The dataset is described as rows with feature columns and a target label."],
  ["What is training in the lecture's ML workflow?", ["Using the dataset repeatedly so an algorithm can learn patterns", "Deleting every row after one pass", "Writing a new if statement for every future email", "Changing the video speed"], 0, "The instructor explains training as the algorithm scanning examples and learning their patterns."],
  ["What does a trained model do with a new email ID?", ["Predicts whether the new example belongs to the valid or invalid class", "Creates a new programming language", "Changes the dataset's file extension", "Stops all future input"], 0, "The learned model is used for real-time classification of a new input."],
  ["What is the main benefit of the ML formulation over the long hand-written rule list?", ["The model can learn patterns from data instead of requiring every rule to be coded explicitly", "It removes the need for data", "It guarantees every prediction is correct", "It makes labels unnecessary"], 0, "The lecture's contrast is between explicit rule enumeration and pattern learning from examples."],
  ["Why might reading an ML algorithm's source code not reveal the business task?", ["The same learning procedure can be trained on different data for different tasks", "ML algorithms contain no operations", "Every ML model is tied to email validation", "The code is always encrypted"], 0, "The closing example says the same ML code can learn about email, advertisements, laptops, or mobile devices depending on the data."],
  ["What kind of data file was used as an example for the email dataset?", ["CSV or Excel-style tabular data", "A video-only file", "An audio waveform only", "A password vault"], 0, "The instructor names CSV/Excel-like tabular data as a practical representation."],
  ["What is the role of an evaluation example after training?", ["It tests how the learned model behaves on an input it must classify", "It changes the course schedule", "It removes the target label from training history", "It records attendance"], 0, "A prediction on a new or held-out example provides evidence about model behaviour."],
  ["Which statement best distinguishes rules from learned patterns?", ["Rules are explicitly specified by the developer; learned patterns are inferred from examples", "Rules always need labels and models never use data", "They are identical in every respect", "Neither can be evaluated"], 0, "This is the lecture's main conceptual comparison."],
  ["What was the planned purpose of using pandas or similar data tools?", ["Handling and inspecting tabular data for data-science work", "Replacing all model training", "Hosting the recording folder", "Managing exam passwords"], 0, "The Python introduction includes libraries such as pandas for data handling and data science."],
  ["What should a learner take away from the course-scope discussion?", ["The lectures provide exposure and foundations, while independent practice is still necessary", "A few classes can exhaustively teach the whole field", "Industry use cases are irrelevant", "Only memorising definitions is needed"], 0, "The instructor explicitly sets a realistic boundary around what the class can cover."],
  ["Which pipeline matches the email-validation example?", ["Examples → features and labels → training → prediction on a new input", "Prediction → delete data → choose a label → no model", "Rules only → no examples → no evaluation → prediction", "Video capture → password → broadcast → label"], 0, "The lecture presents a data-driven workflow from labelled examples to a real-time prediction."],
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `Correct: ${option}. ${explanation}`
    : `Incorrect: ${option} does not match the lecture's explanation.`),
}));

export const eai6103Lecture20260818193045 = {
  en: {
    title: "What is machine learning? Foundations, course roadmap, and email validation",
    lede: "The opening Advanced Machine Learning lecture sets the course roadmap, introduces Python and data practice, defines machine learning, and contrasts explicit email-validation rules with a labelled-data training and prediction workflow.",
    instructionalInterval: "00:13:00–01:33:37 source time (setup lead-in excluded; no idle tail observed)",
    reviewLevel: "Full seven-point visible Stream sweep, audio-enabled 2× visible-tab capture, source-time-bounded processing, timestamped transcript, and idle-tail decision verified. Capture began at approximately 00:14:03 after the teaching marker was set.",
    coverage: [
      { title: "Course roadmap and delivery", body: "The instructor frames basic ML as a foundation for deep learning and basic NLP, with theory, coding, recordings, and independent study." },
      { title: "Python and data practice", body: "Python, editors, functions, libraries, data import/export, and tabular data handling are introduced as the coding foundation." },
      { title: "Machine-learning definition", body: "Machine learning is presented as learning from experience and improving behaviour without encoding every decision as an explicit rule." },
      { title: "Conventional email validation", body: "A rule-based program checks address structure with explicit conditions such as spacing, local-part, and domain constraints." },
      { title: "Data-driven classification", body: "A labelled collection of correct and incorrect email examples supplies features and targets for training, then prediction on new inputs." },
    ],
    takeaway: "The lecture's central distinction is operational: conventional software makes the developer enumerate the decision rules, while machine learning uses labelled examples to infer a model that can classify new inputs. The model still depends on the quality and meaning of its data.",
    slideTrail: [
      { time: "00:14:03", title: "Advanced Machine Learning course roadmap", note: "The opening whiteboard frames basic ML, deep learning topics, and basic NLP as the subject arc." },
      { time: "00:18:03", title: "Theory, coding, and Python foundation", note: "The instructor explains the theory-plus-implementation format and the initial Python/editor/library preparation." },
      { time: "00:25:03", title: "Course scope and self-learning boundary", note: "The course is positioned as a foundation and exposure layer that needs to be supplemented with independent practice." },
      { time: "00:33:33", title: "What is machine learning?", note: "The whiteboard definition connects automatic learning and improvement from experience with reduced dependence on explicit programming." },
      { time: "00:47:53", title: "Conventional email validation", note: "The email example turns validity requirements into an explicit sequence of if/else-style checks." },
      { time: "01:04:03", title: "Features, labels, and training data", note: "Rows, input columns, and correct/incorrect targets are used to explain how an algorithm learns patterns." },
      { time: "01:29:59", title: "The same ML code, different learned task", note: "The closing comparison shows why data and labels, not just the generic algorithm code, reveal the application." },
    ],
    summary: [
      { title: "1. The course starts with foundations before advanced models", sourceRefs: ["00:14:03–00:25:03", "Advanced Machine Learning course roadmap"], paragraphs: ["The instructor says the subject is expected to include a substantial deep-learning component, but begins with basic machine learning because first-semester learners may not share the same ML foundation.", "The planned arc includes deep-learning topics such as recurrent models, attention, GANs, and autoencoders, along with basic NLP. A later course is expected to handle language models in more depth, so this lecture keeps its NLP framing introductory."], formula: "basic ML foundation → deep-learning models → basic NLP context" },
      { title: "2. Theory and implementation are intentionally paired", sourceRefs: ["00:18:03–00:31:03", "Theory, coding, and Python foundation"], paragraphs: ["The delivery plan combines theory with coding and implementation. Python is the working language, and the initial coding classes are meant to cover enough editor, function, library, and import/export practice to support later data-science work.", "The instructor also sets a scope boundary: a few dozen meetings cannot exhaustively cover machine learning, deep learning, NLP, and all industry applications. The recordings and class explanations provide a foundation, while extra reading and practice remain necessary."], formula: "course value = guided concepts + executable practice + independent study" },
      { title: "3. Machine learning learns a decision pattern from experience", sourceRefs: ["00:33:33–00:44:33", "What is machine learning?"], paragraphs: ["The lecture defines machine learning through the ability of a program to learn and improve from experience rather than relying on a developer to write every decision rule. The emphasis is not that programming disappears, but that the decision boundary can be inferred from examples.", "This definition motivates the email example. A conventional program can enumerate validity checks, but the ML formulation asks what examples, features, and labels would let an algorithm learn the distinction instead."], formula: "learned model = f(features learned from examples)" },
      { title: "4. Explicit rules make conventional email validation inspectable", sourceRefs: ["00:47:53–01:03:03", "Conventional email validation"], paragraphs: ["In the conventional version, the programmer writes checks for the address structure: allowed characters, spaces, local-part and domain components, dots, and other conditions. The code directly expresses the developer's current interpretation of validity.", "This approach is easy to trace when the rule set is small and stable, but it can become long and brittle as the input variety grows. Each new requirement requires another explicit decision or a deliberate change to an existing one."], formula: "valid(email) = rule₁(email) AND rule₂(email) AND … AND ruleₙ(email)" },
      { title: "5. Labelled examples turn the same task into supervised learning", sourceRefs: ["01:04:03–01:18:03", "Features, labels, and training data"], paragraphs: ["The ML version uses many examples of correct and incorrect email IDs stored in a tabular file. Feature columns describe the examples and a target label records the correct class. Training means repeatedly examining those examples to learn patterns associated with the labels.", "After training, the model receives a new email-like input and predicts its class. The closing comparison is important: the generic learning algorithm can be reused for advertisements, laptops, mobile devices, or another domain; the dataset and labels supply the task-specific meaning."], formula: "dataset = {(xᵢ, yᵢ)}; train D → model f; predict ŷ = f(x_new)" },
    ],
    courseSignals: {
      assignments: [{ time: "00:45:20", title: "Five assignments and quiz-based evaluation", detail: "The instructor described five assignments and two or three quiz-style/MCQ assessments in this session. The surrounding transcription is noisy around the exact acronym, so no more specific format is asserted." }],
      homework: [],
      labs: [],
      projects: [{ time: "00:47:06", title: "Custom project is separate", detail: "The instructor said the custom project is a separate credit and not part of this subject's lecture assessment." }],
      references: [],
      studentQuestions: [
        { time: "00:37:08", question: "Is the course exposure enough to prepare for an AI job?", response: "The instructor's response was that learners need extra study and practice because the class cannot cover the whole ML/DL/NLP field and every industry use case." },
        { time: "00:41:09", question: "Are the theory and coding sessions recorded?", response: "Yes. The instructor said that both kinds of sessions are recorded and that the recordings can be found through Moodle/course resources." },
        { time: "00:47:39", question: "Is anything beyond a Python editor needed for the coding start?", response: "The response was that the first coding classes would establish the necessary Python basics, editor use, functions, libraries, and data handling before the ML implementation work." },
      ],
    },
    insights: [
      { label: "Formulation", title: "The label defines the task", body: "The email example is not merely about choosing an algorithm. The meaning of correct and incorrect labels determines what the model is being trained to predict." },
      { label: "Data", title: "A reusable algorithm is not a reusable task", body: "The same training procedure can appear in many applications, but the feature columns, labels, and data distribution give the resulting model its task-specific behaviour." },
      { label: "Engineering", title: "Rules and models have different maintenance surfaces", body: "A rule system is maintained by editing conditions; a learned system is maintained by curating examples, labels, splits, features, and evaluation evidence." },
      { label: "Scope", title: "Foundations make later complexity teachable", body: "The roadmap deliberately establishes the ML vocabulary before moving into deep learning and NLP, creating a shared base for later architectures." },
    ],
    resources: [
      { kind: "course", title: "Google Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course", detail: "Interactive public lessons on supervised learning, data preparation, classification, and evaluation." },
      { kind: "docs", title: "scikit-learn supervised learning guide", url: "https://scikit-learn.org/stable/supervised_learning.html", detail: "Official documentation for fitting models from labelled examples and evaluating predictions." },
      { kind: "docs", title: "pandas User Guide", url: "https://pandas.pydata.org/docs/user_guide/index.html", detail: "Official reference for loading, inspecting, cleaning, and transforming the tabular data used in ML workflows." },
      { kind: "dataset", title: "UCI Spambase dataset", url: "https://archive.ics.uci.edu/dataset/94/spambase", detail: "Public classification data for practising feature/label inspection and email-like error analysis." },
    ],
    keyTerms: [
      { term: "Feature", definition: "An input property or column used to describe an example for a learning task." },
      { term: "Label", definition: "The target class or value associated with an example, such as valid or invalid." },
      { term: "Training", definition: "The process of using examples so an algorithm can fit a model to patterns in the data." },
      { term: "Model", definition: "The learned function used to map input features to a prediction." },
      { term: "Prediction", definition: "The model's output for a new input after training." },
      { term: "Supervised learning", definition: "Learning from examples that include input features and target labels." },
    ],
    quiz,
  },
};
