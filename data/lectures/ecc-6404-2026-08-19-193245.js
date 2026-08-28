// One publication unit: English and Hindi are reviewed and rendered together.
const makeQuiz = (rows, language) => rows.map(([question, options, answer, explanation]) => ({
  question,
  options,
  answer,
  explanation,
  optionNotes: options.map((option, index) => index === answer
    ? (language === "hi" ? "सही: " + explanation : "Correct: " + explanation)
    : (language === "hi"
      ? `गलत: “${option}” lecture की definition और evidence से मेल नहीं खाता।`
      : `Incorrect: “${option}” does not match the lecture's definition or evidence.`))
}));

const enQuiz = makeQuiz([
  ["Why must a mining technique be matched to the type of data?", ["Every algorithm accepts every data type", "Different data properties suit different tools", "Data type affects only file size", "Matching is needed only for images"], 1, "The instructor says tools and techniques depend on the data's type and properties."],
  ["Which pair is listed as a typical data-quality problem?", ["Missing values and noise", "Screen brightness and font size", "Keyboard layout and wallpaper", "Slide colour and tab order"], 0, "Missing values, noise, outliers, inconsistency, duplicity, and biasness are named quality issues."],
  ["What are the two goals of preprocessing stated in the lecture?", ["Improve quality and modify data for a technique", "Delete every row and hide the result", "Increase noise and reduce storage", "Convert every attribute to text"], 0, "Preprocessing improves data quality and transforms data into a suitable algorithmic form."],
  ["What may replace raw objects in some analyses?", ["Relationships such as similarity or dissimilarity", "A random file name", "Only the first row", "A browser cookie"], 0, "Clustering or anomaly analysis can use pairwise relationships instead of the original objects directly."],
  ["What is a data object?", ["An entity/record described by attributes", "Only a database column", "A measurement scale", "A missing value"], 0, "Objects may be records, points, vectors, patterns, events, cases, samples, observations, or entities."],
  ["What does an attribute capture?", ["A property or characteristic of an object", "The entire dataset file", "Only an algorithm's runtime", "A network password"], 0, "Attributes describe characteristics such as student ID, year, CGPA, eye colour, or temperature."],
  ["What is a measurement scale?", ["A function associating a numerical or symbolic value with an attribute", "A list of lecture slides", "A clustering algorithm", "A data-cleaning error"], 0, "The scale maps an attribute of a particular object to a value used for analysis."],
  ["Why is averaging employee IDs meaningless?", ["IDs distinguish objects but have no quantitative magnitude", "IDs are always continuous", "IDs cannot be stored as integers", "Averages require a browser"], 0, "An ID's valid semantic test is equality/inequality; numerical arithmetic has no meaning for identity."],
  ["Which operation is valid for a nominal attribute?", ["Test equality or inequality", "Interpret a ratio as twice as large", "Subtract values to get a distance", "Compute a meaningful average"], 0, "Nominal values provide names or distinctions, so equality tests are meaningful."],
  ["What extra property does an ordinal attribute provide?", ["An ordering among values", "An absolute zero", "A guaranteed continuous interval", "A unique mathematical ratio"], 0, "Ordinal values distinguish objects and indicate relative order, but not meaningful distances."],
  ["Which example is an interval attribute in the lecture?", ["Celsius temperature", "Employee ID", "Eye colour", "A binary yes/no flag"], 0, "Celsius/Fahrenheit differences are meaningful, but their zero is not an absolute absence of temperature."],
  ["What makes a ratio attribute stronger than an interval attribute?", ["Differences and ratios are meaningful because zero is absolute", "It can only be a label", "It cannot use arithmetic", "It must have exactly two values"], 0, "Mass, length, counts, monetary quantities, and Kelvin temperature have meaningful ratios."],
  ["Why is 100°C not twice as hot as 50°C?", ["Celsius zero is not an absolute zero", "Celsius has no numerical values", "50°C is nominal", "The values are always equal"], 0, "An arbitrary origin makes Celsius an interval scale; ratio comparisons require an absolute zero."],
  ["What is the permitted transformation for a nominal scale?", ["Any one-to-one relabeling", "Only adding a constant", "Only multiplying by a positive constant", "Any non-monotonic ordering"], 0, "Nominal meaning is preserved by a permutation because only identity/equality matters."],
  ["What kind of transformation preserves an ordinal scale?", ["An order-preserving monotonic transformation", "Any random permutation", "A transformation that reverses selected pairs", "Only a logarithm with no order"], 0, "Ordinal semantics require that the relative order remain unchanged."],
  ["Which transformation describes an interval scale?", ["new = a × old + b", "new = old² with arbitrary reversals", "new = old + a different b for every row", "new = old / zero"], 0, "Interval scales allow a positive rescaling and a shifted origin."],
  ["Which transformation preserves a ratio scale?", ["new = a × old", "new = a × old + b", "new = a random label", "new = reverse only the middle values"], 0, "Adding b would change the absolute zero and distort meaningful ratios."],
  ["What is a discrete attribute?", ["An attribute with a finite or countable set of values", "An attribute with every real number", "An attribute that must be text", "An attribute with no possible values"], 0, "PIN codes and counts are examples of discrete attributes."],
  ["When is a discrete attribute binary?", ["When it has exactly two possible values", "When it has millions of values", "When it is always continuous", "When its values have a meaningful ratio"], 0, "True/false, yes/no, zero/one, and male/female examples illustrate the two-value special case."],
  ["What is a continuous attribute?", ["One whose values are real numbers", "One that has only yes/no", "One used only for IDs", "One that cannot be measured"], 0, "Temperature and height are given as continuous examples, typically represented with floating-point values."],
  ["Which combination is described as generally meaningful?", ["A count can be discrete and ratio-scaled", "A binary attribute must be continuous", "Every nominal value is ratio-scaled", "Every ordinal distance is an interval"], 0, "Counts are discrete, and their absolute zero makes ratios meaningful."],
  ["What makes a binary attribute asymmetric?", ["Presence/non-zero is important while absence/zero is not", "Both values must be equally important", "Only zero is important", "It must be continuous"], 0, "Asymmetric analysis focuses on informative presences such as a course taken or a disease present."],
  ["Why are student-course presences compared asymmetrically?", ["Students take few courses, so shared absences would make everyone look similar", "Every student takes every course", "Zero means a course was taken", "Courses cannot be represented by binary values"], 0, "With many courses and few ones per student, matching zeros is uninformative."],
  ["Which application particularly benefits from asymmetric attributes?", ["Association analysis", "Changing a browser theme", "Printing a timetable", "Sorting file names alphabetically"], 0, "The lecture highlights association analysis, where co-presence of items is the informative signal."],
  ["What did the lecture say about an attribute's representation and its semantics?", ["The representation's properties may differ from the attribute's properties", "They are always identical", "Only the representation matters", "Semantics cannot be measured"], 0, "The ID/age comparison shows that integer representation does not grant numerical meaning to an attribute."],
], "en");

const hiQuiz = makeQuiz([
  ["Mining technique को data type के अनुसार क्यों चुनना चाहिए?", ["हर algorithm हर data type लेता है", "अलग data properties के लिए अलग tools उपयुक्त होते हैं", "Data type केवल file size बदलता है", "Matching केवल images के लिए जरूरी है"], 1, "Instructor के अनुसार tools और techniques data के type और properties पर निर्भर करते हैं।"],
  ["Lecture में कौन-सी data-quality समस्या बताई गई है?", ["Missing values और noise", "Screen brightness और font size", "Keyboard layout और wallpaper", "Slide colour और tab order"], 0, "Missing values, noise, outliers, inconsistency, duplicity और biasness को quality issues बताया गया है।"],
  ["Preprocessing के दो goals क्या हैं?", ["Quality सुधारना और technique के लिए data modify करना", "हर row delete करके result छिपाना", "Noise बढ़ाकर storage घटाना", "हर attribute को text बनाना"], 0, "Preprocessing data quality सुधारता है और algorithm के लिए उपयुक्त form बनाता है।"],
  ["कुछ analyses में raw objects की जगह क्या उपयोग हो सकता है?", ["Similarity या dissimilarity जैसे relationships", "Random file name", "केवल पहली row", "Browser cookie"], 0, "Clustering या anomaly analysis में original objects की बजाय pairwise relationships उपयोग हो सकते हैं।"],
  ["Data object क्या है?", ["Attributes से वर्णित entity या record", "केवल database column", "Measurement scale", "Missing value"], 0, "Record, point, vector, pattern, event, case, sample, observation और entity data object के नाम हैं।"],
  ["Attribute क्या capture करता है?", ["Object की property या characteristic", "पूरी dataset file", "केवल algorithm runtime", "Network password"], 0, "Student ID, year, CGPA, eye colour और temperature attributes के उदाहरण हैं।"],
  ["Measurement scale क्या है?", ["Attribute को numerical या symbolic value से जोड़ने वाला function", "Slides की list", "Clustering algorithm", "Data-cleaning error"], 0, "Scale किसी object के attribute को analysis के लिए value से map करती है।"],
  ["Employee ID का average meaningless क्यों है?", ["ID objects को distinguish करता है, quantitative magnitude नहीं बताता", "ID हमेशा continuous होता है", "ID integer में store नहीं हो सकता", "Average के लिए browser चाहिए"], 0, "ID पर equality/inequality meaningful है; arithmetic का semantic अर्थ नहीं है।"],
  ["Nominal attribute पर कौन-सा operation valid है?", ["Equality या inequality test", "Ratio को twice interpret करना", "Values subtract करके distance निकालना", "Meaningful average निकालना"], 0, "Nominal values केवल names/distinctions देते हैं, इसलिए equality test meaningful है।"],
  ["Ordinal attribute की अतिरिक्त property क्या है?", ["Values का order", "Absolute zero", "Guaranteed continuous interval", "Unique mathematical ratio"], 0, "Ordinal values distinction के साथ relative order देते हैं, meaningful distance नहीं।"],
  ["Lecture में interval attribute का example कौन-सा है?", ["Celsius temperature", "Employee ID", "Eye colour", "Binary yes/no flag"], 0, "Celsius/Fahrenheit में differences meaningful हैं, पर zero absolute absence नहीं है।"],
  ["Ratio attribute interval से stronger क्यों है?", ["Absolute zero के कारण differences और ratios meaningful होते हैं", "यह केवल label हो सकता है", "इसमें arithmetic नहीं हो सकता", "इसमें exactly two values होने चाहिए"], 0, "Mass, length, counts, monetary quantities और Kelvin में ratios meaningful हैं।"],
  ["100°C, 50°C से twice hot क्यों नहीं है?", ["Celsius का zero absolute zero नहीं है", "Celsius में numerical values नहीं हैं", "50°C nominal है", "दोनों values हमेशा equal हैं"], 0, "Arbitrary origin के कारण Celsius interval scale है; ratio के लिए absolute zero चाहिए।"],
  ["Nominal scale के लिए कौन-सा transformation permitted है?", ["Any one-to-one relabeling", "केवल constant जोड़ना", "केवल positive constant से multiply करना", "Any non-monotonic ordering"], 0, "Nominal meaning permutation से preserve होता है क्योंकि केवल identity/equality मायने रखती है।"],
  ["Ordinal scale को कौन-सा transformation preserve करता है?", ["Order-preserving monotonic transformation", "Any random permutation", "कुछ pairs का order reverse करने वाला transformation", "Order के बिना logarithm"], 0, "Ordinal semantics में relative order unchanged रहना चाहिए।"],
  ["Interval scale का transformation कौन-सा है?", ["new = a × old + b", "Arbitrary reversals वाला old²", "हर row के लिए अलग b", "old / zero"], 0, "Interval scale positive rescaling और shifted origin allow करती है।"],
  ["Ratio scale को कौन-सा transformation preserve करता है?", ["new = a × old", "new = a × old + b", "Random label", "केवल middle values reverse करना"], 0, "b जोड़ने से absolute zero बदलता और meaningful ratios distort होते हैं।"],
  ["Discrete attribute क्या है?", ["Finite या countable values वाला attribute", "हर real number लेने वाला attribute", "जो हमेशा text हो", "जिसकी कोई value न हो"], 0, "PIN code और counts discrete attributes के examples हैं।"],
  ["Discrete attribute binary कब होता है?", ["जब exactly two possible values हों", "जब millions of values हों", "जब वह हमेशा continuous हो", "जब values का ratio meaningful हो"], 0, "True/false, yes/no और zero/one two-value special case हैं।"],
  ["Continuous attribute क्या है?", ["Real numbers लेने वाला attribute", "केवल yes/no वाला attribute", "केवल IDs के लिए attribute", "जिसे measure न किया जा सके"], 0, "Temperature और height continuous examples हैं और floating-point से represent हो सकते हैं।"],
  ["कौन-सा combination meaningful बताया गया है?", ["Count discrete और ratio-scaled दोनों हो सकता है", "Binary attribute continuous होना चाहिए", "हर nominal value ratio-scaled है", "हर ordinal distance interval है"], 0, "Count discrete है और absolute zero के कारण ratios meaningful हैं।"],
  ["Binary attribute asymmetric कब होता है?", ["Presence/non-zero important हो और absence/zero नहीं", "दोनों values equally important हों", "केवल zero important हो", "यह continuous होना चाहिए"], 0, "Asymmetric analysis informative presences पर focus करता है, जैसे course लिया गया या disease present है।"],
  ["Student-course presences को asymmetric क्यों compare करते हैं?", ["Students कम courses लेते हैं, इसलिए shared absences सबको similar दिखाएँगी", "हर student हर course लेता है", "Zero का अर्थ course लिया गया है", "Courses binary represent नहीं हो सकते"], 0, "बहुत courses और हर student के कुछ ही ones होने से matching zeros uninformative हैं।"],
  ["कौन-सा application asymmetric attributes से लाभ पाता है?", ["Association analysis", "Browser theme बदलना", "Timetable print करना", "File names alphabetically sort करना"], 0, "Lecture association analysis में co-presence को informative signal बताता है।"],
  ["Attribute की representation और semantics के बारे में lecture का निष्कर्ष क्या है?", ["Representation की properties attribute की properties से अलग हो सकती हैं", "दोनों हमेशा identical हैं", "केवल representation मायने रखती है", "Semantics measure नहीं हो सकती"], 0, "ID/age example दिखाता है कि integer representation attribute को numerical meaning नहीं देती।"],
], "hi");

const en = {
  title: "Data types for mining: attributes, measurement scales, and relationships",
  lede: "This Data Warehousing lecture builds the semantic foundation for mining: data quality and preprocessing, objects and attributes, measurement scales, valid transformations, discrete and continuous values, and asymmetric attributes for sparse presence data.",
  instructionalInterval: "01:04–01:22:43 (source time; capture at 2×)",
  reviewLevel: "View-only recording, bounded teaching interval, timestamped transcript, and slide-frame evidence verified",
  coverage: [
    { title: "Data quality before algorithms", body: "Mining tools depend on data type, so missing values, noise, outliers, inconsistency, duplicity, and bias must be understood before modeling." },
    { title: "Objects, attributes, and relationships", body: "A dataset is a collection of objects described by attributes; some analyses operate on pairwise similarity or dissimilarity instead of raw objects." },
    { title: "Measurement is a semantic contract", body: "A measurement scale maps an attribute to a symbolic or numerical value, but the value's mathematical properties may not belong to the attribute itself." },
    { title: "Nominal and ordinal scales", body: "Nominal values distinguish objects; ordinal values additionally preserve order, but neither supplies meaningful numerical distance." },
    { title: "Interval and ratio scales", body: "Interval differences are meaningful; ratio values additionally have an absolute zero, making ratios meaningful." },
    { title: "Transformations and value counts", body: "One-to-one, monotonic, affine, and multiplicative transformations preserve nominal, ordinal, interval, and ratio semantics respectively; attributes may also be discrete, binary, or continuous." },
    { title: "Asymmetric presence", body: "When non-zero presence carries the signal and shared zeros do not, asymmetric attributes are useful, especially in association analysis." }
  ],
  takeaway: "A number in a table is not automatically a quantity. Choose algorithms and transformations from the attribute's semantics, not merely from the storage type.",
  slideTrail: [
    { time: "01:04", title: "Data Mining — Data", note: "Title slide introduces the data-focused part of the course." },
    { time: "03:00", title: "Types of data sets", note: "Datasets can differ by attribute type and spatial or temporal characteristics; new applications create new data varieties." },
    { time: "10:00", title: "Data quality", note: "Missing values, noise, outliers, inconsistency, duplicity, and bias motivate quality improvement and preprocessing." },
    { time: "15:00", title: "Preprocessing", note: "Preprocessing improves quality and modifies data to fit a specified mining technique or tool." },
    { time: "20:00", title: "Analyzing data through relationships", note: "Similarity and dissimilarity between object pairs can drive clustering or anomaly analysis." },
    { time: "30:00", title: "Data objects and attributes", note: "Rows/records represent objects; columns/fields represent attributes, illustrated with student information." },
    { time: "45:00", title: "Attribute as a property", note: "Attributes may vary across objects or over time; eye colour and temperature illustrate symbolic versus numerical variation." },
    { time: "50:00", title: "Measurement scale and process", note: "A scale associates an attribute with a value; a bathroom scale and gender classification illustrate measurement." },
    { time: "60:00", title: "Attribute semantics versus representation", note: "Employee ID and age may both be stored as integers, but averaging an ID is meaningless while averaging age is meaningful." },
    { time: "72:00", title: "Attribute taxonomy", note: "Categorical attributes are nominal/ordinal; numeric attributes are interval/ratio." },
    { time: "78:00", title: "Nominal attributes", note: "Nominal values distinguish objects; equality, mode, entropy, contingency, and chi-square-style operations are meaningful." },
    { time: "85:00", title: "Ordinal attributes", note: "Ordinal values add ordering; grades and good/better/best illustrate order without measurable spacing." },
    { time: "90:00", title: "Interval and ratio attributes", note: "Calendar dates and Celsius/Fahrenheit are interval; counts, mass, length, money, and Kelvin are ratio examples." },
    { time: "105:00", title: "Categorical versus numeric recap", note: "Numeric labels do not make categorical values quantitative; numeric attributes carry most numerical properties." },
    { time: "110:00", title: "Meaning-preserving transformations", note: "Nominal permits one-to-one relabeling, ordinal monotonic transforms, interval ax+b, and ratio ax." },
    { time: "135:00", title: "Discrete, binary, and continuous attributes", note: "Finite/countable values are discrete; two values are binary; real-valued measurements are continuous." },
    { time: "147:00", title: "Asymmetric attributes", note: "Presence/non-zero is informative while absence/zero is not; sparse course-enrolment and medical examples motivate the idea." },
    { time: "160:00", title: "Types of data sets", note: "The lecture closes with asymmetric attributes and defers the remaining dataset types to the next class." }
  ],
  summary: [
    { title: "1. Data quality determines what mining can mean", sourceRefs: ["01:04–15:00", "Slides: Types of data sets / Data quality / Preprocessing"], paragraphs: ["Mining tools are not interchangeable. Their assumptions depend on whether data is categorical, numeric, temporal, spatial, or another form, so the first task is to understand the data. The instructor connects new application areas to new data varieties and research needs.", "Raw data is rarely perfect. Missing values, noise, outliers, inconsistency, duplicity, and bias can weaken analysis. Preprocessing has two explicit goals: improve quality and modify the representation so it fits the chosen mining tool."] },
    { title: "2. Relationships can be the analytical object", sourceRefs: ["20:00–29:00", "Slide: Analyzing data in terms of its relationships"], paragraphs: ["Instead of operating directly on every row and attribute, an algorithm may use relationships between objects. Pairwise similarity or dissimilarity can become an m × m matrix for clustering, classification support, or anomaly detection.", "The correct measure is not universal: its choice depends on both the data type and the application. A distance that makes sense for numeric values may be inappropriate for nominal symbols."] },
    { title: "3. Objects and attributes form the data model", sourceRefs: ["30:00–45:00", "Slide: Data objects / Attributes"], paragraphs: ["A dataset is a collection of data objects. An object can be called a record, point, vector, pattern, event, case, sample, observation, or entity. In a table, each row is an object and each column/field is an attribute.", "Attributes capture properties or characteristics that may vary between objects or over time. Student ID, year, and CGPA illustrate object attributes; eye colour is symbolic and temperature is numerical and time-varying."] },
    { title: "4. Measurement values do not automatically inherit meaning", sourceRefs: ["45:00–71:00", "Slides: Measurement scale / Attribute properties"], paragraphs: ["A measurement scale is a function that associates a numerical or symbolic value with an attribute. The scale enables analysis, but storage format is not semantics. Employee ID and age can both be integers: age supports a meaningful mean, while ID supports only identity tests.", "The correspondence is not perfect even for age: human age has a realistic upper bound, whereas the integer type has no such bound. Ask what operations the attribute justifies before applying arithmetic."] },
    { title: "5. Four measurement scales constrain valid operations", sourceRefs: ["72:00–105:00", "Slides: Nominal / Ordinal / Interval / Ratio"], paragraphs: ["Nominal values are names or categories; equality and inequality are meaningful. Ordinal values additionally provide order, as with grades or good/better/best, but not meaningful spacing. Interval values support differences and addition/subtraction; calendar dates and Celsius/Fahrenheit are examples.", "Ratio values have meaningful differences and ratios because their zero is absolute. Counts, mass, length, monetary quantities, and Kelvin temperature fit this scale. Celsius zero is arbitrary, so 100°C is not twice 50°C."] },
    { title: "6. Transformations must preserve the scale's invariants", sourceRefs: ["110:00–135:00", "Slide: Transformations that do not change meaning"], paragraphs: ["Nominal attributes tolerate any one-to-one relabeling because only identity matters. Ordinal attributes require an order-preserving monotonic function. Interval values permit new = a × old + b, changing scale and origin; ratio values permit only new = a × old so the absolute zero and ratios survive.", "The distinction prevents false precision. Replacing good/better/best with 1/2/3 or 0.5/1/10 preserves order, not a claim that one category is a fixed multiple of another."] },
    { title: "7. Count values, continuity, and asymmetry", sourceRefs: ["135:00–01:22:43", "Slides: Discrete / Binary / Continuous / Asymmetric attributes"], paragraphs: ["Discrete attributes take finite or countable values; binary attributes are the exactly-two-value special case. Continuous attributes take real-valued measurements such as temperature or height. A count can be both discrete and ratio-scaled because zero is meaningful and 10 is twice 5.", "An asymmetric attribute treats presence/non-zero as informative while absence/zero is not. In a student-course matrix, most entries are zero because each student takes few courses; comparing zeros would make students appear falsely similar. Association analysis therefore focuses on co-presence, and the same logic applies to sparse medical indicators."] }
  ],
  courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [] },
  keyTerms: [
    { term: "Data object", definition: "An entity or record described by a set of attributes." },
    { term: "Attribute", definition: "A property or characteristic of an object." },
    { term: "Measurement scale", definition: "A function that assigns a symbolic or numerical value to an attribute." },
    { term: "Nominal", definition: "A categorical scale whose values distinguish objects without order." },
    { term: "Ordinal", definition: "A categorical scale whose values distinguish and order objects." },
    { term: "Interval", definition: "A numeric scale where differences are meaningful but zero is arbitrary." },
    { term: "Ratio", definition: "A numeric scale with meaningful differences, ratios, and absolute zero." },
    { term: "Discrete", definition: "An attribute with finite or countable possible values." },
    { term: "Continuous", definition: "An attribute represented by real-valued measurements." },
    { term: "Asymmetric attribute", definition: "An attribute where non-zero presence matters more than zero absence." }
  ],
  insights: [
    { label: "Modeling", title: "Storage type is not measurement level", body: "An integer column may be an ID, an ordinal code, a count, or a ratio value. Metadata should record the semantic scale so preprocessing and model selection cannot silently treat labels as quantities." },
    { label: "Data quality", title: "Preprocessing is a modeling decision", body: "Cleaning and transformation are not clerical steps. They determine which relationships survive and which algorithmic assumptions become defensible." },
    { label: "Similarity", title: "Choose distance after choosing semantics", body: "A similarity matrix can hide invalid arithmetic if nominal categories are encoded as arbitrary integers. Encode the measurement level before selecting a distance or kernel." },
    { label: "Sparse data", title: "Zeros can be evidence of absence, not similarity", body: "For sparse baskets, symptoms, or course enrolments, shared zeros dominate the table. Jaccard-style presence-focused measures often express the question better than a symmetric match count." },
    { label: "Governance", title: "Document transformations as provenance", body: "A change from Celsius to Fahrenheit is not interchangeable with a change from kilograms to grams. Record the permitted transformation and its constants so later analysis remains reproducible." }
  ],
  resources: [
    { type: "Reference", title: "Data Mining: Concepts and Techniques", creator: "Jiawei Han, Micheline Kamber, Jian Pei", why: "The textbook family used for the lecture's terminology and the nominal/ordinal/interval/ratio treatment.", url: "https://www.cs.sfu.ca/~jpei/publications/book/" },
    { type: "Reference", title: "NIST/SEMATECH e-Handbook: Levels of Measurement", creator: "National Institute of Standards and Technology", why: "A standards-oriented reference for nominal, ordinal, interval, and ratio measurement levels.", url: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm" },
    { type: "Reference", title: "scikit-learn preprocessing and encoding", creator: "scikit-learn documentation", why: "Practical guidance for encoding categorical variables and scaling numeric features without confusing representation with semantics.", url: "https://scikit-learn.org/stable/modules/preprocessing.html" },
    { type: "Reference", title: "Jaccard similarity", creator: "Wikipedia / primary concept references", why: "A compact follow-up for presence-focused similarity on asymmetric binary data; compare it with symmetric matching before using it.", url: "https://en.wikipedia.org/wiki/Jaccard_index" }
  ],
  quiz: enQuiz
};

const hi = {
  title: "Mining के लिए data types: attributes, measurement scales और relationships",
  lede: "यह Data Warehousing व्याख्यान mining की semantic नींव बनाता है: data quality और preprocessing, objects और attributes, measurement scales, valid transformations, discrete/continuous values और sparse presence data के लिए asymmetric attributes।",
  instructionalInterval: en.instructionalInterval,
  reviewLevel: "View-only recording, सीमित teaching interval, timestamped transcript और slide evidence से सत्यापित",
  coverage: [
    { title: "Algorithm से पहले data quality", body: "Mining tools data type पर निर्भर हैं; इसलिए missing values, noise, outliers, inconsistency, duplicity और bias को model से पहले समझना चाहिए।" },
    { title: "Objects, attributes और relationships", body: "Dataset attributes से वर्णित objects का collection है; कुछ analyses raw objects की बजाय pairwise similarity/dissimilarity पर चलते हैं।" },
    { title: "Measurement एक semantic contract है", body: "Measurement scale attribute को symbolic या numerical value से map करती है, लेकिन value की mathematical properties हमेशा attribute की properties नहीं होतीं।" },
    { title: "Nominal और ordinal scales", body: "Nominal values objects distinguish करते हैं; ordinal values order भी preserve करते हैं, पर meaningful numerical distance नहीं देते।" },
    { title: "Interval और ratio scales", body: "Interval में differences meaningful हैं; ratio में absolute zero के कारण ratios भी meaningful होते हैं।" },
    { title: "Transformations और value counts", body: "One-to-one, monotonic, affine और multiplicative transformations क्रमशः nominal, ordinal, interval और ratio semantics preserve करते हैं; attributes discrete, binary या continuous भी हो सकते हैं।" },
    { title: "Asymmetric presence", body: "जब non-zero presence signal हो और shared zeros नहीं, asymmetric attributes उपयोगी हैं, विशेषकर association analysis में।" }
  ],
  takeaway: "Table में लिखा number अपने-आप quantity नहीं बन जाता। Algorithm और transformation storage type से नहीं, attribute semantics से चुनें।",
  slideTrail: en.slideTrail.map((slide) => ({ ...slide, note: "सत्यापित slide trail: " + slide.note })),
  summary: [
    { title: "1. Data quality mining का अर्थ तय करती है", sourceRefs: en.summary[0].sourceRefs, paragraphs: ["Mining tools interchangeable नहीं हैं। वे categorical, numeric, temporal या spatial data की assumptions पर निर्भर करते हैं। नए applications नई data varieties बनाते हैं।", "Raw data में missing values, noise, outliers, inconsistency, duplicity और bias हो सकते हैं। Preprocessing के दो goals हैं: quality सुधारना और चुने हुए tool के अनुसार representation बदलना।"] },
    { title: "2. Relationships analytical object बन सकते हैं", sourceRefs: en.summary[1].sourceRefs, paragraphs: ["कभी algorithm हर row पर सीधे काम नहीं करता, बल्कि objects के बीच relationships पर काम करता है। Pairwise similarity/dissimilarity clustering या anomaly detection की m × m matrix बना सकती है।", "Measure data type और application दोनों के अनुसार चुनना चाहिए; numeric distance को nominal symbols पर सीधे लागू नहीं कर सकते।"] },
    { title: "3. Objects और attributes data model बनाते हैं", sourceRefs: en.summary[2].sourceRefs, paragraphs: ["Dataset data objects का collection है। Object को record, point, vector, pattern, event, case, sample, observation या entity भी कहते हैं। Table में row object और column attribute है।", "Attributes object की properties capture करते हैं जो objects या समय के साथ बदल सकती हैं। Student ID, year, CGPA, eye colour और temperature इसके examples हैं।"] },
    { title: "4. Measurement value का अर्थ अपने-आप नहीं आता", sourceRefs: en.summary[3].sourceRefs, paragraphs: ["Measurement scale attribute को symbolic/numerical value देती है। Storage format semantics नहीं है। Employee ID और age दोनों integer हो सकते हैं, लेकिन age का mean meaningful है और ID का नहीं।", "Age के लिए भी integer type और attribute properties पूरी तरह समान नहीं हैं, क्योंकि human age का practical upper bound है। Arithmetic से पहले attribute की justified operations पूछें।"] },
    { title: "5. चार measurement scales valid operations सीमित करती हैं", sourceRefs: en.summary[4].sourceRefs, paragraphs: ["Nominal values names/categories हैं; equality meaningful है। Ordinal order जोड़ता है, जैसे grades या good/better/best, पर spacing नहीं। Interval में differences तथा addition/subtraction meaningful हैं; dates और Celsius examples हैं।", "Ratio में absolute zero के कारण differences और ratios meaningful हैं। Counts, mass, length, money और Kelvin इसके examples हैं। Celsius का zero arbitrary है, इसलिए 100°C, 50°C से twice नहीं है।"] },
    { title: "6. Transformation scale invariants बचाए", sourceRefs: en.summary[5].sourceRefs, paragraphs: ["Nominal one-to-one relabeling, ordinal order-preserving monotonic function, interval new = a × old + b और ratio new = a × old allow करता है। Ratio में b जोड़ना absolute zero और ratios बदल देता है।", "Good/better/best को 1/2/3 या 0.5/1/10 लिखने से order बचता है; categories के fixed multiples का दावा नहीं बनता।"] },
    { title: "7. Counts, continuity और asymmetry", sourceRefs: en.summary[6].sourceRefs, paragraphs: ["Discrete attributes finite/countable values लेते हैं; binary exactly two values का case है; continuous attributes real-valued measurements हैं। Count discrete और ratio-scaled दोनों हो सकता है क्योंकि zero meaningful है।", "Asymmetric attribute में presence/non-zero informative है और absence/zero नहीं। Student-course matrix में shared zeros बहुत होंगे, इसलिए association analysis co-presence पर focus करती है; sparse medical indicators में भी यही logic लागू होता है।"] }
  ],
  courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [] },
  keyTerms: en.keyTerms.map((term) => ({ term: term.term, definition: term.definition })),
  insights: [
    { label: "Modeling", title: "Storage type measurement level नहीं है", body: "Integer column ID, ordinal code, count या ratio value हो सकता है। Metadata में semantic scale लिखें ताकि labels को quantity न समझ लिया जाए।" },
    { label: "Data quality", title: "Preprocessing modeling decision है", body: "Cleaning और transformation clerical steps नहीं हैं; वे तय करते हैं कि कौन-से relationships बचेंगे और कौन-सी algorithm assumptions defensible होंगी।" },
    { label: "Similarity", title: "Semantics के बाद distance चुनें", body: "Nominal categories को arbitrary integers देने से invalid arithmetic छिप सकती है। Distance या kernel चुनने से पहले measurement level record करें।" },
    { label: "Sparse data", title: "Zeros similarity का evidence नहीं भी हो सकते", body: "Sparse baskets, symptoms या course enrolments में shared zeros dominate करते हैं। Presence-focused Jaccard जैसे measures symmetric match से बेहतर हो सकते हैं।" },
    { label: "Governance", title: "Transformations को provenance में लिखें", body: "Celsius से Fahrenheit और kilogram से gram बदलाव interchangeable नहीं हैं। Constants और permitted transformation record करें।" }
  ],
  resources: [
    { type: "Reference", title: "Data Mining: Concepts and Techniques", creator: "Jiawei Han, Micheline Kamber, Jian Pei", why: "Lecture terminology और nominal/ordinal/interval/ratio treatment का textbook reference।", url: "https://www.cs.sfu.ca/~jpei/publications/book/" },
    { type: "Reference", title: "NIST/SEMATECH e-Handbook: Levels of Measurement", creator: "National Institute of Standards and Technology", why: "चार measurement levels का standards-oriented reference।", url: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm" },
    { type: "Reference", title: "scikit-learn preprocessing and encoding", creator: "scikit-learn documentation", why: "Categorical encoding और numeric scaling की practical guidance।", url: "https://scikit-learn.org/stable/modules/preprocessing.html" },
    { type: "Reference", title: "Jaccard similarity", creator: "Wikipedia / primary concept references", why: "Asymmetric binary data में presence-focused similarity के लिए follow-up।", url: "https://en.wikipedia.org/wiki/Jaccard_index" }
  ],
  quiz: hiQuiz
};

export const ecc6404Lecture20260819 = { en, hi };
