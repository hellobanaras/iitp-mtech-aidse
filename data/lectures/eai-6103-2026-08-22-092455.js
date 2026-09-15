// English-only publication unit for the verified 22 August 2026 recording.
const quizSeed = [
  ["Why was Python introduced before the later machine-learning material?", ["It provides an accessible coding and library foundation", "It replaces all mathematics", "It is required only for attendance", "It is a database engine"], 0, "The instructor positioned Python as the practical foundation for the later ML work."],
  ["What does the instructor say machine-learning models fundamentally use?", ["Mathematical ideas and patterns in data", "Only slide animations", "Only operating-system commands", "Only manual if statements"], 0, "The lecture repeatedly connects ML models with mathematics."],
  ["Which library was named for numerical Python work?", ["NumPy", "NLTK", "TensorFlow", "Jupyter"], 0, "NumPy was described as the numerical Python library."],
  ["Which library was named for tabular data work?", ["pandas", "PyTorch", "Seaborn", "IDLE"], 0, "The planned library sequence includes pandas for data handling."],
  ["Which pair was reserved mainly for deep-learning work?", ["PyTorch and TensorFlow", "pandas and CSV", "IDLE and PyCharm", "HTML and CSS"], 0, "The lecture says PyTorch and TensorFlow will support later deep-learning concepts."],
  ["What is NLTK associated with in the roadmap?", ["Natural-language processing", "Numerical arrays", "Chart styling only", "Operating-system installation"], 0, "NLTK was identified as the NLP library."],
  ["What kind of language did the instructor describe Python as?", ["Open-source, readable, dynamically typed, and object-oriented", "Closed-source and hardware-specific", "A markup-only language", "A spreadsheet formula language"], 0, "These were among the advantages listed for Python."],
  ["Why is Python useful for machine learning practice?", ["A rich third-party ecosystem can be imported for data and modelling tasks", "It prevents using libraries", "It needs no data", "It only runs on one OS"], 0, "The third-party module ecosystem was a central reason given."],
  ["Which application area was explicitly linked to Python?", ["Machine-learning model development", "Only word processing", "Only video editing", "Only network cabling"], 0, "Machine learning was presented as an important Python application."],
  ["What is Google Colab useful for in the lecture's context?", ["Running notebook-based Python experiments without local GPU setup", "Replacing all labels with passwords", "Editing the recording source", "Creating blockchain wallets"], 0, "The instructor recommended notebook environments such as Colab for experiments."],
  ["What is an IDE?", ["An integrated development environment for writing and running code", "A data-label format", "A neural-network layer", "A video codec"], 0, "The lecture explains IDEs as coding environments."],
  ["Which environment did the instructor recommend for data-science work?", ["Jupyter Notebook", "A media player", "A spreadsheet-only viewer", "A mail client"], 0, "Jupyter Notebook was recommended for machine-learning tasks."],
  ["What does Anaconda provide in the discussed workflow?", ["A distribution bundling Python and useful data-science tools", "A replacement for training data", "A private credential store", "A video-hosting service"], 0, "Anaconda was described as a distribution containing the relevant tools."],
  ["Why can a notebook be convenient for teaching ML?", ["It combines executable code, results, and explanation in one document", "It forbids experimentation", "It only displays slides", "It removes the need for evaluation"], 0, "The notebook workflow supports iterative code and explanation."],
  ["What is a dynamically typed language?", ["Variable types do not have to be declared in the same way as statically typed code", "A language that cannot store numbers", "A language that only runs online", "A language with no functions"], 0, "Dynamic typing was listed as a Python characteristic."],
  ["What does `print` demonstrate in the beginner example?", ["A small Python program can produce output with concise syntax", "Python cannot execute code", "Only a compiler can display output", "A model has already been trained"], 0, "The lecture uses a simple print example to show Python's low ceremony."],
  ["What is the practical purpose of NumPy?", ["Numerical arrays and mathematical computation", "Natural-language tokenisation only", "Version-control hosting", "Video capture"], 0, "NumPy was connected to numeric Python work."],
  ["What is the practical purpose of Matplotlib?", ["Creating plots such as bars or histograms", "Training a language model", "Installing an operating system", "Managing course attendance"], 0, "The lecture describes Matplotlib for common plots."],
  ["What is Seaborn useful for?", ["Convenient statistical and data visualisation", "Compiling Python bytecode only", "Recording webcam video", "Creating labels without data"], 0, "Seaborn was contrasted with Matplotlib for richer visualisation."],
  ["What is scikit-learn used for in the course roadmap?", ["Classical machine-learning algorithms and workflows", "Only text editing", "Only audio capture", "Only database backups"], 0, "Scikit-learn was named among the important ML libraries."],
  ["Why did the instructor say learners still need independent study?", ["The semester cannot cover every ML, DL, NLP, and industry use case", "The subject has no concepts", "Python has no documentation", "Libraries cannot be installed"], 0, "The lecture sets a realistic boundary around class time."],
  ["Which sequence best matches the planned library progression?", ["Python basics → NumPy/pandas/plots → ML libraries → deep learning and NLP", "NLP → no data → Python removal → plots", "Video capture → password → deployment only", "Database design → attendance → no coding"], 0, "The stated roadmap moves from Python foundations through libraries to later topics."],
  ["What does an imported third-party module provide?", ["Reusable functionality that can be called from a program", "A new course schedule", "An authentication bypass", "A replacement for source evidence"], 0, "The instructor explains importing libraries for reusable tasks."],
  ["What is the distinction between learning Python and ML with Python?", ["The language is the tool; ML with Python is the modelling task built using that tool", "They are unrelated to code", "ML with Python means only printing text", "Python itself is a trained model"], 0, "The lecture cautions that knowing syntax is not the same as knowing ML."],
  ["What is the central study takeaway from this tutorial lecture?", ["Build enough Python and data-tool fluency to implement and inspect later ML ideas", "Memorise library names without using data", "Avoid notebooks and practice", "Treat every reference as current forever"], 0, "The class prepares learners for executable ML practice rather than syntax memorisation alone."]
];
const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer ? `Correct: ${option}. ${explanation}` : `Incorrect: ${option} does not match the lecture's explanation.`)
}));

export const eai6103Lecture20260822092455 = { en: {
  title: "Python foundations for machine learning: libraries, notebooks, and practice",
  lede: "This Advanced Machine Learning tutorial builds the Python foundation for later modelling: readable syntax, third-party libraries, numerical and tabular work, notebooks, visualisation, deep-learning frameworks, and NLP tooling.",
  instructionalInterval: "00:15:01–01:20:18 source time (setup lead-in excluded; no idle tail observed)",
  reviewLevel: "Full seven-point visible Stream sweep, audio-enabled 2× visible-tab capture, source-time-bounded processing, timestamped transcript, and idle-tail decision verified.",
  coverage: [
    { title: "Why Python belongs in an ML course", body: "The instructor connects Python's readability and ecosystem to executable mathematical and machine-learning work." },
    { title: "The core data-science library stack", body: "NumPy, pandas, Matplotlib, Seaborn, and scikit-learn are introduced as the practical sequence for ML preparation." },
    { title: "Notebooks and development environments", body: "IDLE, PyCharm, VS Code, Jupyter Notebook, Anaconda, and Google Colab are compared as ways to write and run experiments." },
    { title: "Deep learning and NLP extensions", body: "PyTorch and TensorFlow are reserved for later neural-network work, while NLTK supports the planned NLP topic." },
    { title: "Practice boundary and next steps", body: "The lecture is a foundation: learners must practise Python, inspect data, and continue independent study before advanced models." }
  ],
  takeaway: "Python is the instrument, not the learning objective by itself. The useful progression is to combine concise language fundamentals with numerical arrays, tabular data, visual diagnostics, classical ML, and then the frameworks needed for deep learning and NLP.",
  slideTrail: [
    { time: "00:15:01", title: "Python", note: "The opening slide introduces Python, its creator, readability, and broad application areas." },
    { time: "00:20:34", title: "Python language characteristics", note: "The lecture discusses open-source development, dynamic typing, object orientation, portability, and concise syntax." },
    { time: "00:40:23", title: "Python libraries for machine learning", note: "The library roadmap names NumPy, pandas, Matplotlib, Seaborn, and scikit-learn." },
    { time: "01:00:08", title: "Editors and notebook environments", note: "IDLE, PyCharm, VS Code, Jupyter, Anaconda, and Colab are discussed as development options." },
    { time: "01:12:00", title: "Jupyter and Anaconda workflow", note: "The instructor recommends notebooks and the Anaconda distribution for data-science practice." },
    { time: "01:18:42", title: "Practice and next steps", note: "The closing discussion reinforces independent practice and the later NumPy/pandas/visualisation classes." }
  ],
  summary: [
    { title: "1. Python is a practical entry point to ML implementation", sourceRefs: ["00:15:01–00:25:03", "Python"], paragraphs: ["The instructor presents Python as readable, open source, portable, dynamically typed, object-oriented, and supported by a large community. Those properties lower the friction between a mathematical idea and an executable experiment.", "The important qualification is that Python syntax is not the same as machine-learning understanding. The course uses the language to express data preparation, mathematical operations, model training, and evaluation."], formula: "problem idea → Python code → data / computation → inspectable result" },
    { title: "2. The library ecosystem supplies the ML toolbox", sourceRefs: ["00:40:23–00:52:03", "Python libraries for machine learning"], paragraphs: ["The roadmap starts with NumPy for numerical arrays, pandas for tabular data, Matplotlib and Seaborn for visualisation, and scikit-learn for classical ML workflows. The instructor previews these as the next practical classes.", "PyTorch and TensorFlow appear later for neural networks and deep learning, while NLTK is associated with NLP. This separation keeps the first tutorial focused on the tools needed before model-specific work."], formula: "Python + arrays + tables + plots + estimators = an inspectable ML workflow" },
    { title: "3. Choose an environment that preserves the experiment", sourceRefs: ["01:00:08–01:13:03", "Editors and notebook environments"], paragraphs: ["IDLE, PyCharm, VS Code, Jupyter Notebook, Anaconda, and Google Colab are described as different development options. The recommendation for data-science learning is a notebook-oriented workflow because code, output, and explanation can stay together.", "Anaconda is presented as a distribution that bundles Python and useful data-science tools. Colab is a convenient hosted notebook option when local hardware or installation is a constraint."], formula: "reproducible experiment = code + inputs + outputs + environment notes" },
    { title: "4. The tutorial is a foundation, not the whole field", sourceRefs: ["00:25:03–00:33:33", "01:18:42–01:20:18", "Practice and next steps"], paragraphs: ["The instructor repeatedly sets a realistic scope boundary: one semester cannot exhaustively teach ML, deep learning, NLP, and every industry use case. Learners need to practise the examples, read current documentation, and build beyond the guided introduction.", "The next step is concrete: use Python, NumPy, pandas, and plotting tools to make data visible before moving into scikit-learn, neural networks, and NLP."], formula: "guided foundation + deliberate practice + evidence-based iteration → ML fluency" }
  ],
  courseSignals: {
    assignments: [], homework: [], labs: [], projects: [],
    references: [
      { time: "00:31:05", title: "Python and machine-learning books", detail: "The instructor recommends current Python/ML and deep-learning-with-Python references, while warning that an older general ML text may be outdated." }
    ],
    studentQuestions: [
      { time: "00:29:30", question: "Is a GPU required for the educational work?", response: "The instructor said a normal system is sufficient for the initial educational exercises, with GPU or hosted notebook resources becoming relevant for larger deep-learning work." },
      { time: "00:57:10", question: "Which development environment should learners use?", response: "Several options were shown, but Jupyter Notebook was recommended for machine-learning and data-science tasks." },
      { time: "01:08:20", question: "Can the tools run on different operating systems?", response: "Python and the discussed notebook/tooling options were described as portable, with installation details depending on the chosen environment." }
    ]
  },
  insights: [
    { label: "Tooling", title: "Libraries are part of the model-building language", body: "NumPy, pandas, plots, and estimators are not decoration around ML; they are how inputs, assumptions, errors, and results become inspectable." },
    { label: "Workflow", title: "Notebook context is evidence", body: "Keeping code, output, and explanation together makes it easier to reproduce a claim and notice when a result depends on an environment detail." },
    { label: "Learning", title: "Syntax must become data practice", body: "The useful milestone is not printing a string; it is loading, inspecting, transforming, visualising, and modelling a dataset with clear assumptions." },
    { label: "Scope", title: "A roadmap protects depth", body: "Sequencing Python foundations before classical ML, deep learning, and NLP gives each later framework a reason to exist." }
  ],
  resources: [
    { kind: "docs", title: "Python official tutorial", url: "https://docs.python.org/3/tutorial/", detail: "The official language tutorial for syntax, data structures, functions, modules, and errors." },
    { kind: "docs", title: "NumPy user guide", url: "https://numpy.org/doc/stable/user/", detail: "Official reference for arrays, numerical operations, and scientific Python fundamentals." },
    { kind: "docs", title: "pandas User Guide", url: "https://pandas.pydata.org/docs/user_guide/index.html", detail: "Official guide to Series, DataFrames, loading data, cleaning, and tabular analysis." },
    { kind: "docs", title: "Project Jupyter documentation", url: "https://docs.jupyter.org/en/latest/", detail: "Documentation for the notebook environment used to combine code, outputs, and explanation." },
    { kind: "course", title: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html", detail: "Public guidance for hosted notebooks, runtimes, and the limits of free compute." }
  ],
  keyTerms: [
    { term: "NumPy", definition: "A Python library for numerical arrays and mathematical operations." },
    { term: "pandas", definition: "A Python library for labelled tabular data and data manipulation." },
    { term: "Jupyter Notebook", definition: "An interactive document that combines executable code, output, and narrative text." },
    { term: "scikit-learn", definition: "A Python library for classical machine-learning algorithms and evaluation workflows." },
    { term: "PyTorch", definition: "A deep-learning framework previewed for later neural-network implementation." },
    { term: "NLTK", definition: "A Python toolkit associated with natural-language processing." }
  ],
  quiz
} };
