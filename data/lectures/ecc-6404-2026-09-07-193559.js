const quizSeed = [
  ["What does proximity describe between two data objects?", ["Their similarity or dissimilarity", "Their file size only", "Their database username", "Their recording length"], 0, "Proximity is a general term that can refer to either similarity or dissimilarity."],
  ["What is a common range for a similarity measure?", ["0 to 1", "-100 to -50", "Only infinity", "1 to 10,000 always"], 0, "Similarity is often normalized so 0 means no similarity and 1 means complete similarity."],
  ["What does dissimilarity of zero usually mean?", ["The objects are identical under that measure", "The objects are maximally different", "The data are missing", "The vectors are orthogonal"], 0, "Distance-style dissimilarity is zero when the compared values coincide."],
  ["How can a finite-range score be mapped to 0–1?", ["(value − minimum)/(maximum − minimum)", "value × maximum", "minimum − maximum", "1/value without checking the range"], 0, "Min–max normalization maps the observed finite range linearly to 0–1."],
  ["Why can a nonlinear transformation be risky?", ["It can change relationships and the meaning of the measure", "It always creates missing values", "It removes all attributes", "It guarantees perfect correlation"], 0, "A nonlinear map may distort relative differences and semantic interpretation."],
  ["For a nominal attribute, when is similarity one?", ["When the two values match", "When the values are numerically close", "When both values are missing", "When the attribute has an order"], 0, "Nominal values express distinct categories, so equality is the relevant comparison."],
  ["What is special about ordinal attributes?", ["Their order carries information", "They have no categories", "Their values must be vectors", "They cannot be normalized"], 0, "Ordinal levels such as poor, fair, good, and excellent have meaningful order."],
  ["How is ordinal dissimilarity commonly normalized?", ["Absolute rank difference divided by n−1", "Product of the two ranks", "Their string length difference", "The larger rank plus one"], 0, "Mapping n ordered levels to 0 through n−1 yields d=|x−y|/(n−1)."],
  ["What is a natural dissimilarity for interval or ratio attributes?", ["Absolute difference", "Category equality only", "Number of shared zeros", "A private key"], 0, "Numeric attributes support distance based on the magnitude of their difference."],
  ["What is Euclidean distance for vectors?", ["The square root of the sum of squared coordinate differences", "The sum of coordinate products", "The maximum category label", "The number of attributes"], 0, "Euclidean distance is the L2 norm of the difference vector."],
  ["Which distance is the r=1 Minkowski special case?", ["Manhattan distance", "Cosine similarity", "Jaccard coefficient", "Pearson correlation"], 0, "Minkowski with r=1 sums absolute coordinate differences, also called L1 or Manhattan distance."],
  ["Which distance is the r=2 Minkowski special case?", ["Euclidean distance", "Jaccard distance", "Hamming-only distance", "Correlation distance"], 0, "Minkowski with r=2 is the familiar Euclidean L2 distance."],
  ["What does the L∞ Minkowski limit produce?", ["The maximum-coordinate (Chebyshev) distance", "The dot product", "The arithmetic mean", "The covariance"], 0, "As r approaches infinity, the largest absolute coordinate difference dominates."],
  ["Which property says d(x,y)=d(y,x)?", ["Symmetry", "Positivity", "Normalization", "Sparsity"], 0, "Symmetry makes the distance independent of the direction of comparison."],
  ["What is the triangle inequality?", ["d(x,z) ≤ d(x,y)+d(y,z)", "d(x,z)=d(x,y)−d(y,z)", "d(x,z)≥d(x,y)+d(y,z)", "d(x,z)=0 for every z"], 0, "The direct route cannot be longer than a route through an intermediate point."],
  ["Which binary coefficient counts both 00 and 11 matches?", ["Simple matching coefficient", "Jaccard coefficient", "Cosine coefficient", "Mahalanobis coefficient"], 0, "SMC counts matching presences and matching absences equally."],
  ["When is the Jaccard coefficient preferable to SMC?", ["When shared presence matters more than shared absence", "When all attributes are continuous", "When values are ordered ranks", "When covariance is required"], 0, "Jaccard ignores 00 matches, which is useful for asymmetric binary attributes."],
  ["Why should document similarity usually ignore shared zeros?", ["Most documents lack most of the same words", "Zeros are always errors", "It makes every vector dense", "It removes term frequencies"], 0, "Counting shared absent terms would make unrelated sparse documents look falsely similar."],
  ["What does cosine similarity compare?", ["The angle between vectors", "Only their largest coordinate", "Their database indexes", "Their missing-value count"], 0, "Cosine uses the normalized dot product and focuses on direction."],
  ["What does cosine similarity equal when two nonzero vectors are orthogonal?", ["0", "1", "-1 always", "Their Euclidean length"], 0, "A 90-degree angle has cosine zero, indicating no shared direction."],
  ["What is a limitation of cosine similarity?", ["It ignores vector magnitude", "It cannot handle sparse vectors", "It requires binary values", "It always violates symmetry"], 0, "Normalization removes length information, so equal direction can hide very different magnitudes."],
  ["What does Pearson correlation measure?", ["Linear relationship between two sets of values", "Only absolute distance", "The number of binary matches", "Storage cost"], 0, "Correlation measures how values co-vary after centering and scaling."],
  ["What does correlation −1 indicate?", ["A perfect negative linear relationship", "No relationship of any kind", "Perfect identity", "A missing attribute"], 0, "As one variable increases, the other decreases along a perfect line."],
  ["When is Mahalanobis distance useful?", ["For correlated attributes with different scales", "Only for nominal labels", "Only for shared zeros", "Only for text token counts with no covariance"], 0, "Mahalanobis uses the inverse covariance matrix to account for scale and correlation."],
  ["How should heterogeneous attributes be combined?", ["Compute per-attribute similarities, omit invalid/asymmetric missing cases, then take a weighted average", "Concatenate raw strings", "Count only zeros", "Use one arbitrary metric for every type"], 0, "The lecture's indicator and weight scheme makes mixed attributes comparable in 0–1 space."]
];
const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer ? `${option} is correct: ${explanation}` : `${option} is not correct: it conflicts with the lecture's proximity-measure definition.`)
}));

export const ecc6404Lecture20260907193559 = {
  en: {
    title: "Proximity measures: similarity, distance, binary data, and mixed attributes",
    lede: "This lecture develops a practical toolkit for comparing data objects: normalize similarity and dissimilarity, select measures for nominal, ordinal, numeric, binary, and document data, and combine heterogeneous attributes safely.",
    instructionalInterval: "00:02:03–01:18:39 source time (1h 19m 37s reported duration; setup and end-of-slide-show tail excluded)",
    reviewLevel: "Full beginning/10%/25%/50%/75%/90%/near-end sweep, visible 2× capture, source-time transcript, 77 sampled frames, and verified idle-tail exclusion.",
    coverage: [
      { title: "Proximity and normalization", body: "Similarity, dissimilarity, distance, min–max mapping, and the semantic risks of nonlinear transformations." },
      { title: "Attribute-aware measures", body: "Nominal equality, ordinal rank distance, interval/ratio differences, and Minkowski families." },
      { title: "Binary and sparse data", body: "Simple matching, Jaccard, cosine similarity, and why shared zeros can mislead." },
      { title: "Correlation and covariance", body: "Pearson correlation, linear relationships, scale, correlated variables, and Mahalanobis distance." },
      { title: "Heterogeneous objects", body: "Per-attribute similarities, missing/asymmetric indicators, and weighted aggregation." }
    ],
    takeaway: "A proximity measure is a modelling choice: match the metric to the attribute semantics, scale, sparsity, correlation, and weighting policy before clustering or retrieval.",
    slideTrail: [
      { time: "00:02:03", title: "Similarity and dissimilarity", note: "Proximity is introduced as a numerical relationship between objects." },
      { time: "00:12:00", title: "Range transformations", note: "Finite-range min–max normalization and nonlinear semantic distortion are compared." },
      { time: "00:24:00", title: "Nominal and ordinal attributes", note: "Equality and normalized rank differences are developed." },
      { time: "00:36:30", title: "Euclidean and Minkowski distance", note: "L1, L2, and L-infinity distance families are related." },
      { time: "00:48:00", title: "Binary coefficients", note: "SMC and Jaccard differ in whether shared absence counts." },
      { time: "00:58:30", title: "Cosine similarity", note: "Sparse document vectors are compared by normalized dot product and angle." },
      { time: "01:07:40", title: "Correlation and Mahalanobis distance", note: "Linear relationships, covariance, scale, and correlated attributes are addressed." },
      { time: "01:16:20", title: "Heterogeneous attributes", note: "Indicators and weights combine mixed attribute similarities." }
    ],
    summary: [
      { title: "1. Proximity is a family of comparison meanings", sourceRefs: ["00:02:03–00:12:00", "Similarity/dissimilarity slides"], paragraphs: ["Similarity is commonly a non-negative score where 1 means complete agreement and 0 means no agreement. Dissimilarity or distance reverses that intuition: zero means identical under the measure, while larger values indicate separation.", "A score can be transformed to a desired range, but the transformation must preserve the intended meaning. Min–max scaling is linear for a finite range; nonlinear scaling can change relative relationships."], formula: "z'=(z-min(z))/(max(z)-min(z))" },
      { title: "2. Attribute semantics determine the metric", sourceRefs: ["00:24:00–00:43:20", "Nominal, ordinal, and numeric examples"], paragraphs: ["Nominal attributes have no order, so matching categories receive similarity 1 and mismatches 0. Ordinal attributes preserve order: map levels to successive integers and normalize the absolute rank difference by n−1.", "For interval and ratio values, absolute differences and vector distances express magnitude. Minkowski distance unifies Manhattan (r=1), Euclidean (r=2), and maximum-coordinate (r→∞) choices."], formula: "d_{ordinal}=|rank(x)-rank(y)|/(n-1)" },
      { title: "3. Binary measures must respect presence and absence", sourceRefs: ["00:48:00–00:58:30", "Binary contingency table"], paragraphs: ["The simple matching coefficient counts 00 and 11 matches, which is appropriate when presence and absence are equally informative. Jaccard omits 00 matches, making it better for asymmetric attributes where shared presence matters and shared absence is uninformative.", "The choice changes rankings. In sparse transaction or feature data, a huge number of shared zeros can swamp the evidence unless the measure deliberately ignores them."], formula: "SMC=(f_{11}+f_{00})/(f_{11}+f_{10}+f_{01}+f_{00});\quad J=f_{11}/(f_{11}+f_{10}+f_{01})" },
      { title: "4. Cosine compares document direction", sourceRefs: ["00:58:30–01:07:40", "Document-vector geometry"], paragraphs: ["Documents can be represented as sparse term-frequency vectors. Cosine similarity divides the dot product by both vector lengths, so it focuses on angle: parallel vectors score 1 and orthogonal vectors score 0.", "This is useful when shared vocabulary matters more than document length. If magnitude is meaningful, Euclidean distance may be preferable because cosine normalization intentionally discards length."], formula: "cos(x,y)=x\cdot y/(||x||_2||y||_2)" },
      { title: "5. Correlation captures linear association", sourceRefs: ["01:07:40–01:12:30", "Correlation plots"], paragraphs: ["Pearson correlation is covariance divided by the two standard deviations. A value of 1 indicates perfect positive linear association, −1 perfect negative association, and 0 no linear association; nonlinear dependence may still exist.", "Centering and unit-length normalization make correlation a dot product of standardized vectors. This helps separate direction of co-variation from raw scale."], formula: "r_{xy}=cov(x,y)/(\\sigma_x\\sigma_y)" },
      { title: "6. Mahalanobis distance handles scale and correlation", sourceRefs: ["01:12:30–01:16:20", "Covariance-matrix slide"], paragraphs: ["When attributes have different variances or are correlated, Euclidean distance can overcount or undercount movement. Mahalanobis distance uses the inverse covariance matrix to measure separation in the data's covariance geometry.", "The calculation is more expensive because it requires covariance estimation, inversion, and matrix multiplication, and the lecture notes its approximate Gaussian assumption."], formula: "d_M(x,y)=\\sqrt{(x-y)^T\\Sigma^{-1}(x-y)}" },
      { title: "7. Mixed attributes require indicators and weights", sourceRefs: ["01:16:20–01:18:39", "Heterogeneous-attribute algorithm"], paragraphs: ["For each attribute, compute a similarity in 0–1 space. An indicator δ removes an asymmetric attribute when both values are absent or removes an attribute with a missing value. Aggregate the retained similarities as an average.", "If attributes have unequal importance, multiply by weights and normalize the weights. The result is interpretable only when the inclusion, missingness, and weighting policies are documented."], formula: "S(x,y)=\\frac{\\sum_k\\delta_k w_k s_k(x,y)}{\\sum_k\\delta_k w_k}" }
    ],
    keyTerms: [
      { term: "Proximity", definition: "A general comparison between objects expressed as similarity or dissimilarity." },
      { term: "Minkowski distance", definition: "A parameterized family containing Manhattan, Euclidean, and maximum-coordinate distance." },
      { term: "Simple matching coefficient", definition: "Binary similarity counting both 11 and 00 matches." },
      { term: "Jaccard coefficient", definition: "Binary similarity that ignores shared 00 absence." },
      { term: "Cosine similarity", definition: "Normalized dot product comparing the angle between vectors." },
      { term: "Pearson correlation", definition: "A standardized measure of linear association ranging from −1 to 1." },
      { term: "Mahalanobis distance", definition: "Covariance-aware distance for differently scaled and correlated attributes." }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [{ time: "00:58:30", title: "Sparse document-vector comparison", detail: "The instructor connects cosine similarity to document term-frequency vectors and explains when Euclidean distance retains useful magnitude information." }], studentQuestions: [] },
    suggestedPractice: {
      assignments: ["Optional: compute SMC, Jaccard, and cosine similarity for a small binary and term-frequency table, then explain the ranking differences."],
      homework: ["Optional: normalize an ordinal attribute and compare linear min–max scaling with a nonlinear mapping; note what meaning changes."],
      labs: ["Optional: implement Euclidean, Manhattan, cosine, and Mahalanobis distance with tests for symmetry and zero self-distance."],
      projects: ["Optional: build a mixed-attribute nearest-neighbour demonstrator with missing-value indicators and adjustable weights."],
      references: ["Review distance measures and similarity coefficients before applying clustering or retrieval to mixed data."],
      studentQuestions: []
    },
    insights: [
      { label: "Modelling", title: "There is no universally best distance", body: "A metric encodes what counts as close. Choosing it before examining semantics, sparsity, and scale can make a downstream model confidently wrong." },
      { label: "Sparsity", title: "Absence is evidence only when it is informative", body: "Jaccard and cosine prevent shared zeros from dominating sparse data; SMC remains appropriate when absence carries equal meaning." },
      { label: "Geometry", title: "Normalization changes the question", body: "Cosine asks whether vectors point in the same direction, while Euclidean asks how far their endpoints are. Both can be valid for the same data under different goals." },
      { label: "Statistics", title: "Correlation is not general dependence", body: "A zero Pearson correlation rules out linear association, not nonlinear relationships. Visual checks and domain knowledge remain necessary." },
      { label: "Data quality", title: "Missingness policy is part of the measure", body: "The heterogeneous-attribute indicator prevents absent or missing values from silently changing the denominator and the meaning of similarity." }
    ],
    resources: [
      { kind: "read", title: "scikit-learn — Pairwise metrics", url: "https://scikit-learn.org/stable/modules/metrics.html", detail: "Reference implementations and definitions for Euclidean, Manhattan, cosine, and related metrics." },
      { kind: "read", title: "scikit-learn — Clustering overview", url: "https://scikit-learn.org/stable/modules/clustering.html", detail: "Shows how distance choices affect clustering algorithms and evaluation." },
      { kind: "read", title: "SciPy — spatial distance", url: "https://docs.scipy.org/doc/scipy/reference/spatial.distance.html", detail: "Practical API documentation for Minkowski, cosine, correlation, and standardized distances." },
      { kind: "read", title: "NIST/SEMATECH e-Handbook — Correlation", url: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm", detail: "Accessible explanation of Pearson correlation and its interpretation limits." },
      { kind: "practice", title: "UCI Machine Learning Repository", url: "https://archive.ics.uci.edu/", detail: "Small mixed-type datasets for testing metric, weighting, and missing-value policies." },
      { kind: "read", title: "The Elements of Statistical Learning", url: "https://hastie.su.domains/ElemStatLearn/", detail: "Free textbook with chapters on similarity, nearest neighbours, clustering, and high-dimensional geometry." }
    ],
    quiz
  }
};
