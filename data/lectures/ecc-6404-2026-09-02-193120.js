// English-only publication unit for the 2 September 2026 Data Warehousing lecture.
const mcq = (question, answer, explanation) => ({
  question,
  options: ["The first option", "The second option", "The third option", "The fourth option"],
  answer,
  explanation,
  optionNotes: [
    answer === 0 ? explanation : "This does not match the lecture's definition or use case.",
    answer === 1 ? explanation : "This confuses the transformation with a different preprocessing operation.",
    answer === 2 ? explanation : "This is not the best interpretation of the data-mining requirement.",
    answer === 3 ? explanation : "This choice would introduce an unsupported assumption."
  ]
});

export const ecc6404Lecture20260902 = {
  en: {
    title: "Discretization, binarization, transformations, and similarity measures",
    lede: "This Data Warehousing lecture completes feature construction and then shows how discretization, binarization, variable transformation, and similarity measures prepare data for mining algorithms.",
    instructionalInterval: "00:00:41–01:27:40 source time (01:28:27 reported duration; participant lead-in and closing idle tail excluded)",
    reviewLevel: "View-only Stream recording; seven-point visible timeline sweep, 2× playback, timestamped transcript, frame evidence, and bounded teaching interval verified.",
    coverage: [
      { title: "Feature construction", body: "Combine known attributes into a derived feature when the new representation separates classes or improves analysis, such as density from mass and volume." },
      { title: "Why discretize", body: "Convert continuous numeric values into a finite set of intervals when an algorithm expects categorical inputs." },
      { title: "Binarization", body: "Represent categorical or discrete values with binary attributes, choosing an encoding that matches nominal, ordinal, or asymmetric-association semantics." },
      { title: "Encoding pitfalls", body: "Compact binary codes can create spurious relationships among bits that are merely encodings of one original attribute." },
      { title: "Category reduction", body: "Combine rare or infrequent categories when the reduced representation improves the downstream task without erasing useful signal." },
      { title: "Variable transformation", body: "Apply functions or scaling to change a variable's range or shape while preserving the analytical meaning needed by the model." },
      { title: "Similarity and dissimilarity", body: "Choose proximity measures for clustering, nearest-neighbour classification, anomaly detection, and other tasks based on attribute type and semantics." }
    ],
    takeaway: "Preprocessing is task-dependent representation design: preserve meaning, satisfy algorithm input assumptions, and validate every transformation against the analysis objective.",
    slideTrail: [
      { time: "00:00:41", title: "Feature Construction (continuation)", note: "Mass and volume can yield density, a derived feature that separates clay, bronze, and gold more clearly." },
      { time: "00:08:40", title: "Data Processing: Discretization and Binarization", note: "Some classification algorithms require categorical attributes, while association mining commonly expects binary attributes." },
      { time: "00:15:22", title: "Continuous-to-categorical discretization", note: "Partition an unbounded set of numeric possibilities into a finite set of intervals." },
      { time: "00:25:48", title: "Binarization: integer assignment", note: "Map n categorical values to integers in 0…n−1 before choosing a binary representation." },
      { time: "00:31:50", title: "Binary representation of five values", note: "Five categories need three bits; the code is compact but the bits do not become independent semantic attributes." },
      { time: "00:41:30", title: "Asymmetric binary attributes", note: "Association analysis focuses on presence; one binary attribute per category avoids treating absence as meaningful similarity." },
      { time: "00:55:40", title: "Reducing rare categories", note: "Rare values may be grouped when category reduction improves the mining task and does not destroy important distinctions." },
      { time: "01:06:07", title: "Variable Transformation", note: "Simple functions and normalization change scale or shape; the selected transform must fit the data and task." },
      { time: "01:19:16", title: "Similarity and Dissimilarity Measures", note: "Proximity, distance, similarity, and dissimilarity support clustering, nearest-neighbour classification, and anomaly detection." }
    ],
    summary: [
      {
        title: "1. Feature construction makes useful structure explicit",
        sourceRefs: ["00:00:41–00:07:30", "Slide: Feature Construction (continuation)"],
        paragraphs: ["A derived feature can expose a relationship that is difficult to see in the original columns. Density computed from mass and volume is useful because materials with different densities become easier to distinguish.", "Feature construction is not arbitrary arithmetic: the new attribute should have a defensible domain meaning and should improve the intended analysis."]
      },
      {
        title: "2. Discretization aligns numeric data with algorithm assumptions",
        sourceRefs: ["00:08:40–00:21:30", "Slides: Discretization and Binarization"],
        paragraphs: ["Continuous values contain infinitely many possible real numbers. Discretization partitions that range into a finite set of intervals, producing a categorical attribute for algorithms that require categories.", "There is no universally best partition. The useful choice depends on the mining task, domain knowledge, interval boundaries, and whether the transformation preserves the patterns the algorithm needs."]
      },
      {
        title: "3. Binarization has several valid encodings",
        sourceRefs: ["00:21:30–00:41:30", "Slides: Binarization steps and binary attributes"],
        paragraphs: ["A first step maps categorical values to 0…n−1, preserving ordinal order when the original attribute is ordinal. A second step represents the integers with enough bits; five values therefore require three bits.", "Bit codes are compact, but their individual columns are not independent concepts. For association analysis, one-hot asymmetric binary attributes are often safer because each bit directly means presence of one category and absence is not treated as an interesting co-occurrence."]
      },
      {
        title: "4. Reduce categories only with a task-aware justification",
        sourceRefs: ["00:41:30–00:56:30", "Slide: Category reduction"],
        paragraphs: ["High-cardinality categorical variables can make mining sparse and brittle. Combining rare categories can reduce complexity, but grouping must respect domain meaning and the downstream evaluation criterion.", "The same principle explains why discretization and binarization should be judged by the result of the intended data-mining algorithm rather than by a generic preference for fewer columns."]
      },
      {
        title: "5. Transform variables without losing semantics",
        sourceRefs: ["01:06:07–01:18:30", "Slide: Variable Transformation"],
        paragraphs: ["A transformation changes a variable's scale, range, or distribution. Normalization can prevent a large-unit feature from dominating distance calculations, while a carefully chosen function can reduce skew.", "The transformation must be documented and checked against the task: a mathematically convenient scale is not automatically meaningful for every model or interpretation."]
      },
      {
        title: "6. Similarity measures define what ‘close’ means",
        sourceRefs: ["01:19:16–01:27:40", "Slide: Similarity and Dissimilarity Measures"],
        paragraphs: ["Similarity and dissimilarity are task-specific views of proximity. They feed clustering, nearest-neighbour classification, and anomaly detection, so the measure must match numeric, categorical, binary, or mixed attributes.", "Before computing a distance, inspect scale, missingness, encoding, and the meaning of zero. A poor measure can make a correct algorithm appear to fail because it is optimizing the wrong notion of closeness."]
      }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [] },
    insights: [
      { label: "Design principle", title: "Representation is part of the model", body: "Choosing intervals, one-hot columns, or normalized values changes the geometry and information available to the mining algorithm; preprocessing decisions deserve the same scrutiny as model hyperparameters." },
      { label: "Failure mode", title: "Compact is not automatically meaningful", body: "A three-bit code saves columns but can make unrelated categories look close. Encoding should be selected for the semantics of the task, not just storage efficiency." },
      { label: "Connection", title: "Distance measures connect preprocessing to evaluation", body: "Scaling, missing-value handling, and category encoding directly alter nearest neighbours and anomaly scores. Validate a measure with domain examples before trusting aggregate metrics." },
      { label: "Practical heuristic", title: "Keep a reversible transformation trail", body: "Record category mappings, interval boundaries, scaling constants, and the reason for each choice so results can be reproduced and transformed predictions can be interpreted." }
    ],
    resources: [
      { title: "Mining of Massive Datasets: Data Mining", url: "https://www.mmds.org/" },
      { title: "scikit-learn preprocessing and scaling guide", url: "https://scikit-learn.org/stable/modules/preprocessing.html" },
      { title: "scikit-learn pairwise metrics", url: "https://scikit-learn.org/stable/modules/metrics.html" },
      { title: "UCI Machine Learning Repository", url: "https://archive.ics.uci.edu/" },
      { title: "OpenML datasets and tasks", url: "https://www.openml.org/" }
    ],
    quiz: [
      mcq("What is the purpose of feature construction?", 0, "It creates a meaningful derived attribute that can expose structure useful for analysis."),
      mcq("Why might a classifier require discretization?", 1, "The classifier may accept categorical intervals rather than continuous numeric values."),
      mcq("What does discretization do to a continuous attribute?", 2, "It partitions a numeric range into a finite set of intervals or categories."),
      mcq("What is the first step in the binary encoding described?", 3, "Assign each categorical value a unique integer in the interval 0 to n−1."),
      mcq("How many bits are needed to represent five category codes?", 0, "Three bits are needed because two bits provide only four combinations."),
      mcq("Why can ordinary bit encoding create spurious relationships?", 1, "The bits are encodings of one attribute, not independent semantic variables."),
      mcq("What does one-hot encoding give each category?", 2, "A dedicated binary attribute whose presence identifies that category."),
      mcq("Why is one-hot encoding useful for asymmetric association analysis?", 3, "Presence is explicit while absence can be treated as uninteresting."),
      mcq("What should be preserved for an ordinal attribute during coding?", 0, "The relative order of its categories should remain ordered."),
      mcq("When can rare categories be combined?", 1, "When grouping reduces complexity without removing task-relevant distinctions."),
      mcq("What determines the best discretization method?", 2, "The intended data-mining task, data characteristics, and domain knowledge."),
      mcq("What is a risk of reducing categories blindly?", 3, "Important distinctions may be erased and downstream performance can fall."),
      mcq("What can variable transformation change?", 0, "A variable's scale, range, or distribution while retaining task meaning."),
      mcq("Why is normalization important for distance-based methods?", 1, "It prevents features with large units from dominating the distance."),
      mcq("What must be documented for a transformation?", 2, "The operation and parameters needed to reproduce and interpret it."),
      mcq("What does a similarity measure quantify?", 3, "How close two objects are under a chosen definition of proximity."),
      mcq("Which task commonly uses nearest-neighbour similarity?", 0, "Classification by comparing a new object with nearby labelled objects."),
      mcq("What can a dissimilarity measure support?", 1, "Anomaly detection by identifying objects far from expected neighbours."),
      mcq("Why must attribute type influence a proximity measure?", 2, "Numeric, categorical, and binary values have different meanings and valid comparisons."),
      mcq("What is a warning sign before calculating distance?", 3, "Unexamined scale, missingness, encoding, or zero semantics."),
      mcq("How does preprocessing affect a mining model?", 0, "It changes the representation and therefore the patterns available to the model."),
      mcq("What is a task-aware preprocessing choice?", 1, "Selecting an encoding because it matches the algorithm and the domain question."),
      mcq("Why is a compact encoding not always best?", 2, "Fewer columns can still encode misleading geometry or false relationships."),
      mcq("What makes a transformation reproducible?", 3, "Keeping its mapping, boundaries, parameters, and rationale in a transformation trail."),
      mcq("What is the lecture's central preprocessing lesson?", 0, "Transform data to satisfy algorithm assumptions while preserving analytical meaning.")
    ]
  }
};
