const quizSeed = [
  ["What is a measure of central tendency intended to locate?", ["The middle or center of a data distribution", "Only the largest outlier", "The file format", "The number of columns"], 0, "Central tendency describes where the middle or center of the distribution lies."],
  ["What does dispersion describe?", ["How widely observations are spread", "The name of an attribute", "Only the median", "A categorical label"], 0, "Dispersion measures the spread of observations rather than their center."],
  ["How is an arithmetic mean computed?", ["Sum the observations and divide by their count", "Choose the most frequent label", "Subtract the minimum from the maximum only", "Sort and select the first value"], 0, "The arithmetic mean is the sum of observations divided by n."],
  ["Why use a weighted arithmetic mean?", ["Some observations have different importance or frequencies", "The data must be categorical", "Sorting is impossible", "It removes every outlier"], 0, "Weights can represent significance, importance, or occurrence frequency."],
  ["Why can a mean be misleading?", ["A few extreme values can shift it away from most observations", "It always ignores every value", "It cannot be computed for numbers", "It is identical to the mode"], 0, "The lecture stresses the mean's sensitivity to extreme or outlier values."],
  ["What does a trimmed mean do?", ["Removes selected extreme values before averaging", "Adds more outliers", "Uses only the maximum", "Converts numbers to labels"], 0, "A trimmed mean offsets extreme values by chopping off observations at both ends."],
  ["When is the median often better than the mean?", ["For skewed or asymmetric data", "Only for an empty data set", "When no values can be ordered", "Only for nominal colours"], 0, "The median is robust to extreme values and is a better center for skewed distributions."],
  ["What does the median separate?", ["The higher half from the lower half of ordered data", "The file from its folder", "Only positive from negative labels", "Two unrelated attributes"], 0, "After sorting, the median separates the lower and upper halves."],
  ["How is the median obtained for an even number of numeric observations?", ["Average the two middle values", "Choose the smallest value", "Choose the most frequent value", "Multiply the middle values"], 0, "For numeric data with even n, the two middle values are averaged."],
  ["What is the mode?", ["The value occurring most frequently", "The average of minimum and maximum", "The middle ordered value", "The sum of all values"], 0, "Mode is defined by highest frequency and can apply to qualitative or quantitative data."],
  ["What is a multimodal data set?", ["A data set with two or more modes", "A data set with no observations", "A perfectly symmetric set only", "A set containing only ratios"], 0, "Equal highest frequencies can produce bi-, tri-, or generally multimodal data."],
  ["What does Pearson's empirical relation approximate?", ["Mode from mean and median in moderately skewed unimodal numeric data", "Variance from a file name", "Q1 from a nominal colour", "The number of categories"], 0, "The relation mode ≈ 3 median − 2 mean is an approximation for suitable unimodal data."],
  ["What is the mid-range?", ["The average of the smallest and largest values", "The middle observation after sorting", "Q3 minus Q1", "The most common category"], 0, "Mid-range uses only the minimum and maximum numeric observations."],
  ["What is the range?", ["Largest value minus smallest value", "Mean minus median", "Q1 plus Q3", "The number of modes"], 0, "Range is the distance between the largest and smallest observations."],
  ["What does a k-quantile split do?", ["Divides ordered data into k equal-size consecutive parts", "Deletes k observations", "Sorts only labels", "Computes a variance"], 0, "Quantiles are points that split an ordered distribution into equal-size consecutive sets."],
  ["What is Q2 for a distribution?", ["The median", "The maximum", "The mode only", "The 75th percentile"], 0, "Two quantiles create two halves, so Q2 is the median or 50th percentile."],
  ["What is Q1?", ["The 25th percentile", "The 50th percentile", "The 75th percentile", "The maximum"], 0, "The first quartile cuts off the lowest 25 percent of the distribution."],
  ["What is the interquartile range (IQR)?", ["Q3 minus Q1", "Maximum minus minimum", "Mean plus median", "Q1 divided by Q3"], 0, "IQR measures the spread of the middle half of the data."],
  ["What is the five-number summary?", ["Minimum, Q1, median, Q3, maximum", "Mean, mode, variance, file size, date", "Only five random observations", "Q1, Q2, Q3, Q4, Q5"], 0, "The five-number summary records the two extremes, three quartile landmarks, and the median."],
  ["How does a box plot represent the IQR?", ["The box extends from Q1 to Q3", "The whisker is always the IQR", "The median is outside the box", "Only outliers form the box"], 0, "The box length is Q3 − Q1, the interquartile range."],
  ["What do whiskers in the lecture's box plot extend toward?", ["The most extreme observations within the 1.5-IQR rule", "Always every point beyond the plot", "Only the mean", "The two modes"], 0, "Whiskers terminate at the extreme non-outlier observations under the 1.5-IQR convention."],
  ["How are suspected box-plot outliers identified?", ["Values beyond 1.5 IQR above Q3 or below Q1", "Every value below the mean", "Only the median", "Any categorical mismatch"], 0, "The lecture uses the common 1.5-IQR rule for suspected outliers."],
  ["What does a low standard deviation indicate?", ["Observations tend to be close to the mean", "The data have many modes", "The median is undefined", "The range is necessarily zero"], 0, "Standard deviation measures spread around the mean; low values indicate concentration near it."],
  ["When is standard deviation an appropriate spread measure?", ["When the mean is the chosen center", "Only when data are nominal", "When no numeric values exist", "Only when the mode is used"], 0, "Standard deviation is a mean-centered measure and should accompany a mean-centered analysis."],
  ["What is a quantile plot useful for?", ["A first visual view of a univariate distribution and its quantiles", "Only computing a database join", "Replacing every transcript", "Showing participant permissions"], 0, "A quantile plot displays ordered values against cumulative percentages to reveal usual and unusual behaviour."]
];
const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer ? `${option} is correct: ${explanation}` : `${option} is not correct: it does not match the lecture's statistical definition.`)
}));

export const ecc6404Lecture20260909193233 = {
  en: {
    title: "Statistical descriptions: central tendency, quantiles, dispersion, and plots",
    lede: "This lecture builds a practical statistical description of data: choose a robust center, describe spread with quartiles and standard deviation, identify suspected outliers, and read quantile and box plots.",
    instructionalInterval: "00:00:48–01:23:30 source time (1h 24m 47s reported duration; participant opening and idle tail excluded)",
    reviewLevel: "Full beginning/10%/25%/50%/75%/90%/near-end sweep, visible 2× capture, source-time transcript, 84 sampled frames, and verified idle-tail exclusion.",
    coverage: [
      { title: "Why describe data statistically?", body: "Statistical descriptions provide an overall picture for preprocessing, reveal likely noise or outliers, and help select methods suited to the data's properties." },
      { title: "Mean, weighted mean, and trimmed mean", body: "The arithmetic mean aggregates all observations, a weighted mean represents unequal importance or frequency, and a trimmed mean limits the influence of extremes." },
      { title: "Median, mode, and mid-range", body: "The median divides ordered data into halves, the mode records the most frequent value, and the mid-range averages the minimum and maximum." },
      { title: "Quantiles, quartiles, and percentiles", body: "Quantiles split ordered data into equal consecutive parts; Q1, Q2, and Q3 correspond to the 25th, 50th, and 75th percentiles." },
      { title: "IQR and five-number summary", body: "Q3−Q1 describes the middle half, while minimum, Q1, median, Q3, and maximum provide a compact distribution summary." },
      { title: "Box plots and suspected outliers", body: "A box plot renders quartiles, median, whiskers, and points beyond the 1.5-IQR rule so several compatible distributions can be compared." },
      { title: "Standard deviation and quantile plots", body: "Variance and standard deviation measure spread around the mean; quantile plots pair ordered observations with cumulative percentages for a first visual inspection." }
    ],
    takeaway: "No single statistic is universally best: report a center and a spread that match skew, outliers, attribute type, and the decision the analysis must support.",
    slideTrail: [
      { time: "00:00:48", title: "Basic statistical descriptions", note: "Central tendency, dispersion, and graphic displays are framed as tools for data preprocessing." },
      { time: "00:08:30", title: "Arithmetic and weighted mean", note: "The lecture gives the sum-over-n formula and explains weights as significance or frequency." },
      { time: "00:18:40", title: "Extreme values and trimmed mean", note: "A few outliers can corrupt the mean; trimming both ends reduces that influence but can lose information." },
      { time: "00:27:40", title: "Median, mode, and mid-range", note: "Ordered middle values, frequency, skew, and the min/max average are contrasted." },
      { time: "00:41:30", title: "Quantiles and quartiles", note: "Q2 is the median; Q1 and Q3 divide the ordered distribution at the 25th and 75th percentiles." },
      { time: "00:53:45", title: "IQR and five-number summary", note: "The middle-half spread and five-number representation are introduced." },
      { time: "01:02:10", title: "Box plot and 1.5-IQR rule", note: "Boxes, median lines, whiskers, and individually plotted suspected outliers summarize distributions." },
      { time: "01:14:20", title: "Standard deviation and quantile plot", note: "Mean-centered spread and the cumulative-percentage view of ordered values complete the statistical description." }
    ],
    summary: [
      { title: "1. Statistical description is a preprocessing aid", sourceRefs: ["00:00:48–00:07:40", "Basic statistical descriptions"], paragraphs: ["Before choosing an algorithm, an analyst should understand the data's properties. The lecture groups the first description tasks into central tendency, dispersion, and graphic displays.", "These descriptions reveal where observations concentrate, how widely they spread, and which values may be noise or outliers. That evidence supports a defensible preprocessing choice instead of applying every method indiscriminately."] },
      { title: "2. Means are useful but not automatically robust", sourceRefs: ["00:08:30–00:25:30", "Arithmetic mean and trimmed mean"], paragraphs: ["The arithmetic mean is the sum of n observations divided by n. A weighted mean multiplies each observation by a weight and divides by the sum of weights; the weights may encode importance or occurrence frequency.", "A small number of extreme values can shift the mean away from the region containing most observations. A trimmed mean removes selected low and high extremes before averaging, but trimming too much discards valuable information."] , formula: "x̄ = (Σᵢ xᵢ)/n;  x̄w = (Σᵢ wᵢxᵢ)/(Σᵢ wᵢ)" },
      { title: "3. Median, mode, and mid-range answer different questions", sourceRefs: ["00:27:40–00:40:50", "Median/mode slides"], paragraphs: ["The median is found after ordering and separates the higher half from the lower half. For even numeric n, average the two middle observations; for ordinal data, the two middle positions or a value between them is used without pretending categories have numeric meaning.", "The mode is the most frequent value and can be uni-, bi-, or multimodal; there may be no mode when every value occurs once. The mid-range is (minimum + maximum)/2 and is numeric but particularly sensitive to the extremes."] },
      { title: "4. Quantiles turn order into distribution landmarks", sourceRefs: ["00:41:30–00:52:40", "Quantile/quartile slides"], paragraphs: ["A k-quantile selects ordered data points that divide a distribution into k equal-size consecutive parts. Special cases are Q2 (median), four-part quartiles, and 100-part percentiles.", "Q1 is the 25th percentile, Q2 the 50th percentile, and Q3 the 75th percentile. These landmarks make the center and spread visible even when the shape is skewed."] },
      { title: "5. IQR and the five-number summary resist shape confusion", sourceRefs: ["00:53:45–01:01:30", "IQR/five-number summary"], paragraphs: ["The interquartile range is Q3−Q1 and covers the middle half of the observations. For skewed data, reporting Q1, median, and Q3 is more informative than relying on one center statistic.", "Add the smallest and largest observations to form the five-number summary: minimum, Q1, median, Q3, maximum. It records both central landmarks and the full observed extent."] , formula: "IQR = Q3 − Q1" },
      { title: "6. Box plots expose spread and outliers at a glance", sourceRefs: ["01:02:10–01:13:40", "Box-plot slides"], paragraphs: ["A box spans Q1 to Q3, its internal line marks the median, and whiskers reach the most extreme observations within the 1.5-IQR rule. Values beyond Q1−1.5IQR or Q3+1.5IQR are plotted individually as suspected outliers.", "Multiple compatible data sets can be shown as adjacent box plots. Comparing median position, box length, whisker asymmetry, and outlier points reveals differences in center, spread, skew, and unusual observations."] , formula: "lower fence = Q1 − 1.5·IQR;  upper fence = Q3 + 1.5·IQR" },
      { title: "7. Standard deviation and quantile plots complement quartiles", sourceRefs: ["01:13:40–01:23:30", "Standard deviation and quantile plot"], paragraphs: ["Variance averages squared deviations from the mean and standard deviation is its square root. A small standard deviation means observations cluster near the mean; a large one indicates broad spread. It is most meaningful when the mean is the selected center.", "A quantile plot sorts observations and pairs each xi with fi=(i−0.5)/n, the approximate fraction below it. Plotting xi against fi provides a first look at a univariate distribution, including quantiles and unusual behaviour."] , formula: "σ² = (1/n)Σᵢ(xᵢ−x̄)²;  σ = √σ²;  fᵢ=(i−0.5)/n" }
    ],
    keyTerms: [
      { term: "Central tendency", definition: "A measure of the middle or center of a data distribution." },
      { term: "Trimmed mean", definition: "A mean computed after removing selected extreme values at both ends." },
      { term: "Median", definition: "The ordered value that separates the lower and higher halves of a data set." },
      { term: "Mode", definition: "The value with the highest frequency; a data set may have multiple modes or none." },
      { term: "Quantile", definition: "An ordered landmark that divides a distribution into equal-size consecutive parts." },
      { term: "Interquartile range", definition: "Q3−Q1, the spread covered by the middle 50 percent of observations." },
      { term: "Five-number summary", definition: "Minimum, Q1, median, Q3, and maximum." },
      { term: "Box plot", definition: "A visual five-number summary with a box, median line, whiskers, and suspected outliers." },
      { term: "Quantile plot", definition: "A plot of sorted observations against cumulative fractions to inspect a univariate distribution." }
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [{ time: "00:01:20", title: "Slides for the first two chapters", detail: "The instructor says the introductory and data-preparation slide PDFs have been uploaded for review." }], studentQuestions: [] },
    suggestedPractice: {
      assignments: ["Optional: calculate mean, trimmed mean, median, mode, Q1, Q2, Q3, and IQR for a small skewed data set."],
      homework: ["Optional: compare two box plots and explain which distribution is more skewed and which observations are suspected outliers."],
      labs: ["Optional: implement a five-number summary and quantile plot, including tests for odd/even n and a 1.5-IQR fence."],
      projects: ["Optional: build an accessible distribution dashboard that lets a learner switch between mean, median, IQR, standard deviation, and quantile views."],
      references: ["Review the lecture's central-tendency and dispersion definitions before applying preprocessing or outlier rules."],
      studentQuestions: []
    },
    insights: [
      { label: "Robustness", title: "The center should match the shape", body: "A mean can be mathematically precise yet descriptively wrong when a few extremes dominate. Median and quartiles preserve a clearer signal for skewed data." },
      { label: "Information loss", title: "Trimming is a policy decision", body: "Removing extremes reduces influence but may remove meaningful rare cases. The trim fraction and reason should be documented, not treated as a harmless default." },
      { label: "Distribution", title: "Five numbers are a compact argument", body: "Minimum, quartiles, and maximum let readers reconstruct center, spread, asymmetry, and possible outliers without seeing every observation." },
      { label: "Visual reasoning", title: "Plots make competing summaries inspectable", body: "A box plot or quantile plot exposes skew and unusual values that a single average can hide." },
      { label: "Metric fit", title: "Standard deviation is conditional", body: "Because standard deviation is mean-centered, it should accompany a mean-centered interpretation; for skewed data, pair it with robust quartile summaries." }
    ],
    resources: [
      { kind: "read", title: "NIST/SEMATECH e-Handbook — Exploratory Data Analysis", url: "https://www.itl.nist.gov/div898/handbook/eda/eda.htm", detail: "Authoritative, accessible reference for descriptive statistics, quantiles, plots, and outlier reasoning." },
      { kind: "read", title: "NIST — Measures of location", url: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm", detail: "Definitions and interpretation of mean, median, trimmed mean, and related location measures." },
      { kind: "read", title: "NIST — Measures of scale", url: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm", detail: "Reference for range, variance, standard deviation, and robust spread measures." },
      { kind: "read", title: "NIST — Box plot", url: "https://www.itl.nist.gov/div898/handbook/eda/section3/boxplot.htm", detail: "Visual explanation of quartiles, whiskers, and outlier conventions." },
      { kind: "practice", title: "Python statistics documentation", url: "https://docs.python.org/3/library/statistics.html", detail: "Standard-library implementations for mean, median, quantiles, variance, and standard deviation." },
      { kind: "practice", title: "Matplotlib boxplot example", url: "https://matplotlib.org/stable/gallery/statistics/boxplot_demo.html", detail: "Runnable visual examples for comparing distributions with box plots." }
    ],
    quiz
  }
};
