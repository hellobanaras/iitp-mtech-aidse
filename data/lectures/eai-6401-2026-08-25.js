const localized = (items, lang) => items.map((item) => Object.fromEntries(
  Object.entries(item).map(([key, value]) => {
    const bilingualTextKeys = new Set(["title", "body", "note", "term", "definition", "label", "type", "creator", "why", "question", "response", "detail"]);
    if (bilingualTextKeys.has(key) && Array.isArray(value) && value.length === 2 && value.every((entry) => typeof entry === "string")) {
      return [key, value[lang === "en" ? 0 : 1]];
    }
    if (key === "paragraphs" && Array.isArray(value) && value.every((entry) => Array.isArray(entry) && entry.length === 2)) {
      return [key, value.map((entry) => entry[lang === "en" ? 0 : 1])];
    }
    return [key, value];
  })
));

const coverage = [
  { title: ["Incremental sample averages", "Incremental sample average"], body: ["The ordinary mean is rewritten as a constant-memory, constant-computation update using only the previous estimate, the new reward, and an action-specific count.", "Ordinary mean को previous estimate, नए reward और action-specific count से चलने वाले constant-memory, constant-computation update में बदला गया।"] },
  { title: ["The complete bandit loop", "Complete bandit loop"], body: ["The lecture assembles initialization, epsilon-greedy selection, reward observation, count maintenance, and action-value updating into one executable algorithm.", "Lecture initialization, epsilon-greedy selection, reward observation, count maintenance और action-value update को एक executable algorithm में जोड़ती है।"] },
  { title: ["Stationary versus nonstationary rewards", "Stationary बनाम nonstationary rewards"], body: ["A fixed reward distribution supports sample averaging; a changing distribution demands estimates that can forget stale evidence.", "Fixed reward distribution sample averaging को support करती है; बदलती distribution के लिए stale evidence भूल सकने वाला estimate चाहिए।"] },
  { title: ["Exponential recency weighting", "Exponential recency weighting"], body: ["A constant step size turns the update into a geometrically weighted average in which recent rewards have larger coefficients.", "Constant step size update को geometrically weighted average बनाता है, जिसमें recent rewards के coefficients बड़े होते हैं।"] },
  { title: ["Convergence conditions", "Convergence conditions"], body: ["The two stochastic-approximation conditions explain why 1/n converges in stationary settings and why a constant alpha trades convergence for tracking ability.", "दो stochastic-approximation conditions बताते हैं कि stationary setting में 1/n क्यों converge करता है और constant alpha tracking के बदले convergence क्यों छोड़ता है।"] },
  { title: ["Optimistic initial values", "Optimistic initial values"], body: ["High initial estimates make greedy selection explore untried actions, but the amount of optimism must match the reward scale and action space.", "High initial estimates greedy selection को untried actions explore कराते हैं, पर optimism का स्तर reward scale और action space से मेल खाना चाहिए।"] }
];

const slides = [
  { time: "0:00–2:59", title: ["Incremental Implementation", "Incremental Implementation"], note: ["The slide states the sample-average estimate and introduces Q_{n+1}=Q_n+(1/n)(R_n−Q_n) as the standard learning-rule form.", "Slide sample-average estimate दिखाती है और Q_{n+1}=Q_n+(1/n)(R_n−Q_n) को standard learning-rule form के रूप में प्रस्तुत करती है।"] },
  { time: "3:00–8:59", title: ["Derivation of the incremental mean", "Incremental mean की derivation"], note: ["The whiteboard algebra separates R_n from the first n−1 rewards and recovers the previous estimate Q_n.", "Whiteboard algebra R_n को पहले n−1 rewards से अलग कर previous estimate Q_n वापस प्राप्त करती है।"] },
  { time: "9:00–13:29", title: ["Bandit algorithm", "Bandit algorithm"], note: ["Pseudocode initializes Q(a) and N(a), selects by epsilon-greedy, observes R, increments N(A), and updates only Q(A).", "Pseudocode Q(a) और N(a) initialize करती है, epsilon-greedy से action चुनती है, R observe करती है, N(A) बढ़ाती है और केवल Q(A) update करती है।"] },
  { time: "13:29–21:14", title: ["Worked algorithm questions", "Algorithm पर worked questions"], note: ["Student questions prompt a numerical walk-through of action-specific counts, rewards, zero initialization, exploration, exploitation, and large-horizon convergence.", "Student questions पर action-specific counts, rewards, zero initialization, exploration, exploitation और large-horizon convergence का numerical walk-through हुआ।"] },
  { time: "21:15–24:00", title: ["Why it is called a bandit", "इसे bandit क्यों कहते हैं"], note: ["The single-state, multiple-action problem is connected to choosing among slot-machine levers with unknown reward distributions.", "Single-state, multiple-action problem को unknown reward distributions वाले slot-machine levers में से चुनने से जोड़ा गया।"] },
  { time: "24:00–30:59", title: ["Stationary and nonstationary environments", "Stationary और nonstationary environments"], note: ["The distinction is distributional, not deterministic: rewards may vary in both cases, but only the nonstationary distribution changes over time.", "अंतर distribution का है, determinism का नहीं: दोनों में rewards बदल सकते हैं, पर केवल nonstationary distribution समय के साथ बदलती है।"] },
  { time: "31:00–44:59", title: ["Tracking a Nonstationary Problem", "Nonstationary problem को track करना"], note: ["The constant-alpha update is expanded into an exponential recency-weighted average, explaining why current evidence matters more than old evidence.", "Constant-alpha update को exponential recency-weighted average में expand किया गया, जिससे current evidence को पुराने evidence से अधिक weight मिलता है।"] },
  { time: "45:00–51:29", title: ["Geometric-weight derivation", "Geometric weights की derivation"], note: ["For n=3 the reward weights become alpha(1−alpha)^2, alpha(1−alpha), and alpha, while the initial estimate retains weight (1−alpha)^n.", "n=3 पर reward weights alpha(1−alpha)^2, alpha(1−alpha) और alpha होते हैं, जबकि initial estimate का weight (1−alpha)^n रहता है।"] },
  { time: "51:30–55:59", title: ["Standard stochastic-approximation convergence conditions", "Standard stochastic-approximation convergence conditions"], note: ["The slide contrasts sum alpha_n=infinity and sum alpha_n^2<infinity, showing that 1/n satisfies both while a fixed alpha does not satisfy the second.", "Slide sum alpha_n=infinity और sum alpha_n^2<infinity की तुलना करती है; 1/n दोनों satisfy करता है, fixed alpha दूसरा नहीं।"] },
  { time: "56:00–1:08:59", title: ["Optimistic Initial Values", "Optimistic Initial Values"], note: ["A 10-armed testbed plot compares greedy optimistic initialization with epsilon-greedy zero initialization and explains the early exploration transient.", "10-armed testbed plot greedy optimistic initialization की epsilon-greedy zero initialization से तुलना करता है और early exploration transient समझाता है।"] },
  { time: "1:09:00–1:11:13", title: ["Closing Q&A and next topic", "Closing Q&A और अगला topic"], note: ["The class distinguishes imposed epsilon exploration from exploration induced by optimism, previews UCB, and notes that pending PPT slides will be uploaded.", "Class imposed epsilon exploration और optimism से induced exploration अलग करती है, UCB preview करती है और pending PPT slides upload होने की बात दर्ज करती है।"] }
];

const summaries = [
  {
    title: ["1. The sample mean can be updated in O(1)", "1. Sample mean को O(1) में update किया जा सकता है"],
    sourceRefs: ["0:00–8:59", "Incremental Implementation and Derivation slides"],
    paragraphs: [[
      "Recomputing an action's mean from every stored reward makes work and storage grow with experience. If action a has been selected n−1 times, its next estimate can be formed from the previous mean Q_n(a) and the new reward R_n alone. The lecture derives this by separating R_n from the first n−1 rewards and substituting their mean.",
      "हर stored reward से action का mean दोबारा निकालने पर work और storage experience के साथ बढ़ता है। यदि action a को n−1 बार चुना गया है, तो अगला estimate केवल previous mean Q_n(a) और new reward R_n से बन सकता है। Lecture R_n को पहले n−1 rewards से अलग कर और उनके mean को substitute कर यह derivation करती है।"
    ], [
      "The correction R_n−Q_n is a prediction error and 1/n is the step size. The update therefore has the reusable learning-rule shape new estimate = old estimate + step size × error. Crucially, n is the count for this action, not the global decision time; using a global count would under-update rarely selected actions.",
      "Correction R_n−Q_n prediction error है और 1/n step size है। इसलिए update का reusable learning-rule shape है: new estimate = old estimate + step size × error। महत्त्वपूर्ण रूप से n इसी action का count है, global decision time नहीं; global count लगाने पर rarely selected actions बहुत कम update होंगे।"
    ]],
    formula: "Q_{n+1}(a)=Q_n(a)+(1/n)[R_n−Q_n(a)]"
  },
  {
    title: ["2. A bandit algorithm is a disciplined update sequence", "2. Bandit algorithm एक disciplined update sequence है"],
    sourceRefs: ["9:00–21:14", "Bandit algorithm slide and worked Q&A"],
    paragraphs: [[
      "Initialize Q(a) and N(a) for every action. At each step, select a current maximizer with probability 1−epsilon and a random action with probability epsilon, observe only that action's reward, increment N(A), and update only Q(A). This order prevents the current reward from being divided by the wrong count.",
      "हर action के लिए Q(a) और N(a) initialize करें। प्रत्येक step पर probability 1−epsilon से current maximizer और probability epsilon से random action चुनें, केवल उसी action का reward observe करें, N(A) बढ़ाएँ और केवल Q(A) update करें। यह order current reward को गलत count से divide होने से बचाता है।"
    ], [
      "Zero initialization does not mean every early choice is exploratory. Initially all actions tie as greedy; random tie-breaking chooses one. After evidence separates estimates, exploitation selects a maximizer while the epsilon branch continues to sample alternatives. The method scales to long horizons because each step uses constant work, although statistical behavior depends on the step-size schedule.",
      "Zero initialization का अर्थ यह नहीं कि हर early choice exploratory है। शुरू में सभी actions greedy tie में हैं; random tie-breaking एक चुनता है। Evidence से estimates अलग होने पर exploitation maximizer चुनता है, जबकि epsilon branch alternatives sample करती रहती है। प्रत्येक step constant work लेता है, इसलिए method long horizons तक scale करता है; statistical behavior step-size schedule पर निर्भर रहता है।"
    ]],
    formula: "A_t = argmax_a Q_t(a) with probability 1−epsilon; otherwise sample an action randomly"
  },
  {
    title: ["3. Stationarity concerns the reward distribution", "3. Stationarity reward distribution की property है"],
    sourceRefs: ["21:15–30:59", "Bandit explanation and stationary/nonstationary discussion"],
    paragraphs: [[
      "A stationary action can still produce different rewards on different pulls. What remains fixed is its probability distribution—and therefore its true expected value. In a nonstationary problem, that distribution or expected value drifts, so a reward observed long ago may describe a different environment.",
      "Stationary action भी अलग pulls पर अलग rewards दे सकता है। Fixed उसकी probability distribution—और इसलिए true expected value—रहती है। Nonstationary problem में distribution या expected value drift करती है, इसलिए बहुत पुराना reward किसी अलग environment को describe कर सकता है।"
    ], [
      "The class rejected card dealing as an automatic example of nonstationarity because a fixed deck and fixed dealing rule can preserve probabilities. Train-ticket confirmation across festive and ordinary periods was accepted: demand changes the relevant outcome probabilities with time. The diagnostic question is not 'did the reward change?' but 'did the reward-generating distribution change?'.",
      "Class ने card dealing को automatic nonstationarity example नहीं माना, क्योंकि fixed deck और dealing rule probabilities को स्थिर रख सकते हैं। Festive और ordinary periods में train-ticket confirmation को सही example माना गया: demand के साथ outcome probabilities बदलती हैं। सही diagnostic question है—'क्या reward-generating distribution बदली?', केवल 'क्या reward बदला?' नहीं।"
    ]]
  },
  {
    title: ["4. Constant alpha creates exponential recency weighting", "4. Constant alpha exponential recency weighting बनाता है"],
    sourceRefs: ["31:00–51:29", "Tracking a Nonstationary Problem and Derivation slides"],
    paragraphs: [[
      "Replacing 1/n by a constant 0<alpha<=1 gives Q_{n+1}=Q_n+alpha(R_n−Q_n). Repeated substitution reveals a geometric weighted sum: the newest reward has coefficient alpha, the preceding reward alpha(1−alpha), and older evidence receives progressively smaller powers of 1−alpha.",
      "1/n की जगह constant 0<alpha<=1 रखने पर Q_{n+1}=Q_n+alpha(R_n−Q_n) मिलता है। Repeated substitution geometric weighted sum दिखाती है: newest reward का coefficient alpha, पिछले reward का alpha(1−alpha), और पुराने evidence को 1−alpha की घटती powers मिलती हैं।"
    ], [
      "The initial estimate does not disappear instantly; after n updates it retains weight (1−alpha)^n. A larger alpha adapts faster but is noisier and has a shorter effective memory; a smaller alpha smooths more but reacts slowly to drift. As a practical approximation, the effective memory scale is on the order of 1/alpha recent observations.",
      "Initial estimate तुरंत गायब नहीं होता; n updates के बाद उसका weight (1−alpha)^n रहता है। बड़ा alpha तेज adapt करता है पर अधिक noisy और short-memory होता है; छोटा alpha अधिक smooth पर drift पर धीमा होता है। Practical approximation में effective memory लगभग 1/alpha recent observations होती है।"
    ]],
    formula: "Q_{n+1}=(1−alpha)^n Q_1 + sum_{i=1}^{n} alpha(1−alpha)^{n−i}R_i"
  },
  {
    title: ["5. Convergence and tracking require different step-size behavior", "5. Convergence और tracking अलग step-size behavior माँगते हैं"],
    sourceRefs: ["51:30–55:59", "Stochastic-approximation convergence slide"],
    paragraphs: [[
      "For noisy stationary estimation, a classical sufficient pattern is that the step sizes keep accumulating—sum alpha_n diverges—while their squared sum stays finite. The first condition prevents learning from stopping too soon; the second suppresses persistent variance from noise. The sample-average schedule alpha_n=1/n satisfies both.",
      "Noisy stationary estimation के लिए classical sufficient pattern है: step sizes का sum diverge करे, पर squared step sizes का sum finite रहे। पहली condition learning को बहुत जल्दी रुकने से बचाती है; दूसरी noise की persistent variance दबाती है। Sample-average schedule alpha_n=1/n दोनों satisfy करता है।"
    ], [
      "A fixed positive alpha satisfies the first condition but not the second, so it normally does not converge to a single noise-free estimate in a stationary stochastic problem. That apparent weakness is useful under drift: never shrinking the step size to zero lets the estimator keep adapting. Choose the schedule according to whether the deployment goal is stationary convergence or nonstationary tracking.",
      "Fixed positive alpha पहली condition satisfy करता है, दूसरी नहीं; इसलिए stationary stochastic problem में सामान्यतः single noise-free estimate पर converge नहीं करता। Drift में यही कमजोरी उपयोगी बनती है: step size zero की ओर न जाने से estimator adapt करता रहता है। Schedule इस आधार पर चुनें कि goal stationary convergence है या nonstationary tracking।"
    ]],
    formula: "sum_n alpha_n = infinity and sum_n alpha_n^2 < infinity; alpha_n=1/n satisfies both"
  },
  {
    title: ["6. Optimism induces exploration without random actions", "6. Optimism random action के बिना exploration induce करता है"],
    sourceRefs: ["56:00–1:08:59", "Optimistic Initial Values slide and testbed plot"],
    paragraphs: [[
      "If every action starts at an estimate above plausible rewards, pulling one action usually lowers its estimate while untried actions remain attractive. A greedy policy therefore rotates through alternatives even with epsilon=0. The 10-armed testbed plot shows this optimistic greedy method finding optimal actions more often than a purely greedy zero-initialized baseline.",
      "यदि हर action plausible rewards से ऊपर estimate पर शुरू हो, तो किसी action को pull करने पर उसका estimate अक्सर घटता है, जबकि untried actions attractive रहते हैं। इसलिए epsilon=0 पर भी greedy policy alternatives में घूमती है। 10-armed testbed plot optimistic greedy method को purely greedy zero-initialized baseline से अधिक optimal actions खोजते दिखाता है।"
    ], [
      "Optimism is not the same as epsilon-greedy exploration. It is transient and state-of-knowledge driven: once estimates lose their initial optimism, no permanent random mechanism remains. It can also waste samples when the optimistic level is absurdly high or the action set contains many clearly irrelevant actions. The initial value must be chosen relative to the reward scale.",
      "Optimism epsilon-greedy exploration जैसा नहीं है। यह transient और state-of-knowledge driven है: initial optimism खत्म होने पर permanent random mechanism नहीं बचता। बहुत high optimistic level या कई irrelevant actions होने पर samples waste हो सकते हैं। Initial value reward scale के अनुसार चुनना चाहिए।"
    ]]
  },
  {
    title: ["7. The closing Q&A separates two kinds of exploration", "7. Closing Q&A exploration के दो रूप अलग करती है"],
    sourceRefs: ["1:09:00–1:11:13", "Closing Q&A"],
    paragraphs: [[
      "A student asks which plotted curve is exploring. The epsilon-greedy curve has exploration imposed explicitly by its random branch. The optimistic greedy curve also explores, but indirectly because untried actions retain high estimates. Both can visit alternatives, yet their mechanisms and long-run behavior differ.",
      "Student पूछता है कि plotted curves में कौन explore कर रही है। Epsilon-greedy curve की random branch exploration explicitly impose करती है। Optimistic greedy curve भी explore करती है, पर indirectly क्योंकि untried actions के estimates high रहते हैं। दोनों alternatives visit कर सकती हैं, पर mechanism और long-run behavior अलग हैं।"
    ], [
      "The instructor postpones Upper Confidence Bound (UCB) action selection because it needs another 20–25 minutes and previews it for the next lecture. The session closes with a note that pending PPT slides would be uploaded; this is a resource announcement, not a graded task.",
      "Instructor Upper Confidence Bound (UCB) action selection को अगली lecture के लिए रखती हैं क्योंकि उसे 20–25 मिनट और चाहिए। Session pending PPT slides upload करने की बात के साथ समाप्त होती है; यह resource announcement है, graded task नहीं।"
    ]]
  }
];

const terms = [
  { term: ["Incremental update", "Incremental update"], definition: ["An update that uses the previous estimate and newest observation instead of recomputing from the full history.", "Full history से recompute करने के बजाय previous estimate और newest observation से होने वाला update।"] },
  { term: ["Step size alpha", "Step size alpha"], definition: ["The fraction of the current prediction error applied to an estimate.", "Current prediction error का वह fraction जो estimate पर apply होता है।"] },
  { term: ["Action-specific count N(a)", "Action-specific count N(a)"], definition: ["The number of times action a has been selected; it determines the sample-average step size 1/N(a).", "Action a कितनी बार चुना गया; यही sample-average step size 1/N(a) तय करता है।"] },
  { term: ["Stationary bandit", "Stationary bandit"], definition: ["A bandit whose reward distribution for each action does not change with time.", "Bandit जिसमें हर action की reward distribution समय के साथ नहीं बदलती।"] },
  { term: ["Nonstationary bandit", "Nonstationary bandit"], definition: ["A bandit in which one or more action reward distributions drift over time.", "Bandit जिसमें एक या अधिक action reward distributions समय के साथ drift करती हैं।"] },
  { term: ["Exponential recency-weighted average", "Exponential recency-weighted average"], definition: ["A weighted estimate whose older observations receive geometrically decreasing influence.", "Weighted estimate जिसमें पुराने observations का influence geometrically घटता है।"] },
  { term: ["Effective memory", "Effective memory"], definition: ["The approximate recent-history scale that materially influences a recency-weighted estimate, roughly 1/alpha observations.", "Recent history का approximate scale जो recency-weighted estimate को materially influence करता है; लगभग 1/alpha observations।"] },
  { term: ["Stochastic approximation", "Stochastic approximation"], definition: ["Iterative estimation from noisy samples using a controlled sequence of step sizes.", "Controlled step-size sequence से noisy samples पर iterative estimation।"] },
  { term: ["Optimistic initialization", "Optimistic initialization"], definition: ["Starting action estimates above plausible values so untried actions remain attractive.", "Action estimates को plausible values से ऊपर शुरू करना ताकि untried actions attractive रहें।"] },
  { term: ["Upper Confidence Bound (UCB)", "Upper Confidence Bound (UCB)"], definition: ["An action-selection family that adds an uncertainty bonus to current value estimates; previewed for the next lecture.", "Action-selection family जो current value estimate में uncertainty bonus जोड़ती है; अगली lecture के लिए preview की गई।"] }
];

const insights = [
  { label: ["Implementation", "Implementation"], title: ["Use per-action counts", "Per-action counts उपयोग करें"], body: ["The 1/n step size belongs to the reward sequence for one action. Using the global time index makes rarely selected actions learn too slowly and silently changes the estimator.", "1/n step size एक action की reward sequence से जुड़ा है। Global time index लगाने पर rarely selected actions बहुत धीमे सीखते हैं और estimator चुपचाप बदल जाता है।"] },
  { label: ["Modeling", "Modeling"], title: ["Detect drift before choosing alpha", "Alpha चुनने से पहले drift detect करें"], body: ["Constant alpha assumes old observations should decay. Monitor reward residuals and action frequencies; otherwise a stationary noisy problem may be mistaken for drift and made unnecessarily unstable.", "Constant alpha मानता है कि old observations decay होने चाहिए। Reward residuals और action frequencies monitor करें; वरना stationary noisy problem को drift समझकर estimator unnecessarily unstable हो सकता है।"] },
  { label: ["Tuning", "Tuning"], title: ["Alpha controls a bias–variance–lag tradeoff", "Alpha bias–variance–lag tradeoff control करता है"], body: ["Large alpha tracks changes quickly but amplifies noise. Small alpha reduces variance but lags behind real change. Tune on simulated drift patterns that resemble deployment.", "Large alpha changes जल्दी track करता है पर noise amplify करता है। Small alpha variance घटाता है पर real change के पीछे रहता है। Deployment जैसे simulated drift patterns पर tune करें।"] },
  { label: ["Exploration", "Exploration"], title: ["Optimism is a prior, not a permanent policy", "Optimism prior है, permanent policy नहीं"], body: ["Optimistic values generate early visits because uncertainty is encoded as high initial estimates. Once corrected, exploration can vanish; nonstationary deployments may still need an explicit exploration or uncertainty mechanism.", "Optimistic values early visits कराते हैं क्योंकि uncertainty high initial estimates में encoded है। Correction के बाद exploration समाप्त हो सकती है; nonstationary deployment में explicit exploration या uncertainty mechanism फिर भी चाहिए।"] },
  { label: ["Evaluation", "Evaluation"], title: ["Do not judge optimistic methods only by the early spike", "Optimistic method को early spike से alone judge न करें"], body: ["Optimistic initialization often produces oscillatory early performance as actions are tried and estimates fall. Compare cumulative reward and optimal-action rate over multiple horizons, not only a visually dramatic transient.", "Optimistic initialization में actions try होने और estimates गिरने पर oscillatory early performance सामान्य है। केवल dramatic transient नहीं, multiple horizons पर cumulative reward और optimal-action rate compare करें।"] }
];

const resources = [
  { type: ["Book", "Book"], title: ["Reinforcement Learning: An Introduction, second edition", "Reinforcement Learning: An Introduction, second edition"], creator: ["Richard S. Sutton & Andrew G. Barto", "Richard S. Sutton & Andrew G. Barto"], why: ["Chapter 2 develops incremental updates, nonstationary bandits, convergence conditions, optimistic initialization, and UCB.", "Chapter 2 incremental updates, nonstationary bandits, convergence conditions, optimistic initialization और UCB विकसित करता है।"], url: "https://incompleteideas.net/book/RLbook2020.pdf" },
  { type: ["Watch", "Watch"], title: ["Reinforcement Learning 2: Exploration and Exploitation", "Reinforcement Learning 2: Exploration and Exploitation"], creator: ["Google DeepMind", "Google DeepMind"], why: ["A university lecture connecting epsilon-greedy exploration, value estimates, and stronger uncertainty-aware action selection.", "University lecture जो epsilon-greedy exploration, value estimates और stronger uncertainty-aware action selection को जोड़ती है।"], url: "https://www.youtube.com/watch?v=eM6IBYVqXEA" },
  { type: ["Code", "Code"], title: ["Reinforcement Learning: An Introduction — Chapter 2 implementations", "Reinforcement Learning: An Introduction — Chapter 2 implementations"], creator: ["Shangtong Zhang", "Shangtong Zhang"], why: ["Reproduce the optimistic-initial-value and nonstationary-bandit figures, then vary alpha, epsilon, drift, and initialization.", "Optimistic-initial-value और nonstationary-bandit figures reproduce करें, फिर alpha, epsilon, drift और initialization बदलें।"], url: "https://github.com/ShangtongZhang/reinforcement-learning-an-introduction" },
  { type: ["Book", "Book"], title: ["Bandit Algorithms", "Bandit Algorithms"], creator: ["Tor Lattimore & Csaba Szepesvari", "Tor Lattimore & Csaba Szepesvari"], why: ["A rigorous open reference for stochastic bandits, confidence methods, and regret analysis beyond the lecture's introductory treatment.", "Stochastic bandits, confidence methods और regret analysis के लिए rigorous open reference।"], url: "https://tor-lattimore.com/downloads/book/book.pdf" },
  { type: ["Interactive", "Interactive"], title: ["Bandit Simulator", "Bandit Simulator"], creator: ["Tor Lattimore", "Tor Lattimore"], why: ["Compare reward and regret interactively across algorithms, arms, and horizons.", "Algorithms, arms और horizons पर reward तथा regret interactively compare करें।"], url: "https://tor-lattimore.com/downloads/bandits/" }
];

const signalRows = {
  references: [
    { time: "1:10:38", title: ["Pending PPT slides", "Pending PPT slides"], detail: ["The instructor said the pending slides for the lectures would be uploaded that day. No submission or reading deadline was assigned.", "Instructor ने pending lecture slides उसी दिन upload करने की बात कही। कोई submission या reading deadline assign नहीं हुई।"] }
  ],
  studentQuestions: [
    { time: "13:36", question: ["Can the bandit algorithm be shown with a numerical example?", "क्या bandit algorithm को numerical example से समझाया जा सकता है?"], response: ["The instructor walked through actions A1/A2, their individual counts, observed rewards, and how only the chosen action's estimate changes.", "Instructor ने A1/A2 actions, उनके individual counts, observed rewards और केवल chosen action का estimate बदलने का walk-through किया।"] },
    { time: "18:03", question: ["With all initial values zero, how are exploration and exploitation distinguished?", "सभी initial values zero हों तो exploration और exploitation कैसे अलग होते हैं?"], response: ["Initially actions tie; selection and reward updates break the tie. Later greedy choices exploit current estimates while the epsilon branch explores.", "शुरू में actions tied होते हैं; selection और reward updates tie तोड़ते हैं। बाद में greedy choices current estimates exploit करती हैं और epsilon branch explore करती है।"] },
    { time: "19:27", question: ["Does the incremental algorithm work for very large horizons or datasets?", "क्या incremental algorithm बहुत बड़े horizons या datasets पर काम करता है?"], response: ["Each update has constant computation. Long-run convergence depends on step-size conditions, which the instructor develops later in the lecture.", "हर update constant computation लेता है। Long-run convergence step-size conditions पर निर्भर है, जिन्हें instructor बाद में समझाती हैं।"] },
    { time: "21:25", question: ["Why is the problem called a bandit?", "Problem को bandit क्यों कहा जाता है?"], response: ["It comes from slot-machine levers: one state offers multiple actions with unknown reward distributions, and the learner must discover which lever is best.", "नाम slot-machine levers से आता है: एक state में unknown reward distributions वाले कई actions हैं और learner को best lever खोजना है।"] },
    { time: "24:37", question: ["Does stationary mean an action always returns the same reward?", "क्या stationary का अर्थ है कि action हमेशा वही reward देता है?"], response: ["No. Rewards may remain random; stationarity means their probability distribution stays fixed over time.", "नहीं। Rewards random रह सकते हैं; stationarity का अर्थ है कि उनकी probability distribution समय के साथ fixed रहे।"] },
    { time: "26:23", question: ["Is card dealing a nonstationary example?", "क्या card dealing nonstationary example है?"], response: ["Not necessarily: a fixed deck and rule preserve probabilities. Changing train-ticket confirmation rates across festive and normal periods were accepted as a clearer nonstationary example.", "ज़रूरी नहीं: fixed deck और rule probabilities preserve करते हैं। Festive और normal periods में बदलती train-ticket confirmation rates को clearer example माना गया।"] },
    { time: "45:34", question: ["How should the exponential-weight equation be read?", "Exponential-weight equation को कैसे पढ़ें?"], response: ["For n=3, the instructor expands the weights as alpha(1−alpha)^2 for R1, alpha(1−alpha) for R2, and alpha for R3, so the latest reward has the largest coefficient.", "n=3 पर instructor weights को R1 के लिए alpha(1−alpha)^2, R2 के लिए alpha(1−alpha) और R3 के लिए alpha expand करती हैं; latest reward का coefficient सबसे बड़ा है।"] },
    { time: "58:08", question: ["Can a locally good action harm future or final reward?", "क्या locally good action future या final reward को नुकसान पहुँचा सकता है?"], response: ["Yes in full sequential RL, where an action changes later states and rewards. The current bandit abstraction is simpler because it models repeated action choices without state transitions.", "Full sequential RL में हाँ, क्योंकि action later states और rewards बदल सकता है। Current bandit abstraction simpler है क्योंकि इसमें state transitions नहीं हैं।"] },
    { time: "1:07:43", question: ["Which curve in the plot is exploring?", "Plot में कौन-सी curve explore कर रही है?"], response: ["The epsilon-greedy curve explores explicitly through its random branch; the optimistic greedy curve explores indirectly because untried actions retain high estimates.", "Epsilon-greedy curve random branch से explicitly explore करती है; optimistic greedy curve untried actions के high estimates के कारण indirectly explore करती है।"] }
  ]
};

const quizRows = [
  { q: ["What is the main computational benefit of the incremental sample-average update?", "Incremental sample-average update का मुख्य computational benefit क्या है?"], o: [["It uses constant memory and work per update", "हर update में constant memory और work"], ["It removes reward noise", "Reward noise हटाता है"], ["It knows the true action value", "True action value जानता है"], ["It updates every action", "हर action update करता है"]], a: 0, e: ["The previous estimate, new reward, and count are sufficient.", "Previous estimate, new reward और count पर्याप्त हैं।"] },
  { q: ["Which formula is the incremental sample mean after the nth reward?", "nth reward के बाद incremental sample mean कौन-सा formula है?"], o: [["Q_{n+1}=Q_n+(1/n)(R_n−Q_n)", "Q_{n+1}=Q_n+(1/n)(R_n−Q_n)"], ["Q_{n+1}=R_n", "Q_{n+1}=R_n"], ["Q_{n+1}=Q_n+R_n", "Q_{n+1}=Q_n+R_n"], ["Q_{n+1}=max(Q_n,R_n)", "Q_{n+1}=max(Q_n,R_n)"]], a: 0, e: ["It is algebraically identical to the mean of all n rewards.", "यह सभी n rewards के mean के algebraically identical है।"] },
  { q: ["In 1/n for Q(a), what does n count?", "Q(a) के 1/n में n क्या count करता है?"], o: [["Selections of action a", "Action a के selections"], ["All global time steps", "सभी global time steps"], ["Number of actions", "Actions की संख्या"], ["Only positive rewards", "केवल positive rewards"]], a: 0, e: ["The sample mean is maintained separately for each action.", "Sample mean हर action के लिए अलग maintain होता है।"] },
  { q: ["Under epsilon-greedy, what occurs with probability epsilon?", "Epsilon-greedy में probability epsilon पर क्या होता है?"], o: [["A random action is selected", "Random action select होता है"], ["The largest reward is guaranteed", "Largest reward guaranteed है"], ["All Q values reset", "सभी Q values reset होते हैं"], ["Learning stops", "Learning रुकती है"]], a: 0, e: ["The epsilon branch explicitly explores by random selection.", "Epsilon branch random selection से explicitly explore करती है।"] },
  { q: ["After selecting A_t and observing R_t, which estimate is updated?", "A_t select कर R_t observe करने के बाद कौन-सा estimate update होता है?"], o: [["Q(A_t) only", "केवल Q(A_t)"], ["Every Q(a)", "हर Q(a)"], ["Only the best arm's Q", "केवल best arm का Q"], ["No estimate", "कोई estimate नहीं"]], a: 0, e: ["Bandit feedback reveals only the selected action's reward.", "Bandit feedback केवल selected action का reward reveal करता है।"] },
  { q: ["In the learning-rule analogy, what is R_n−Q_n?", "Learning-rule analogy में R_n−Q_n क्या है?"], o: [["A prediction error", "Prediction error"], ["The action count", "Action count"], ["The exploration probability", "Exploration probability"], ["The true reward mean", "True reward mean"]], a: 0, e: ["It is the difference between target reward and current estimate.", "यह target reward और current estimate का difference है।"] },
  { q: ["What defines a stationary bandit action?", "Stationary bandit action को क्या define करता है?"], o: [["Its reward distribution stays fixed", "उसकी reward distribution fixed रहती है"], ["Every reward is identical", "हर reward identical है"], ["Its estimate never changes", "Estimate कभी नहीं बदलता"], ["It is always optimal", "वह हमेशा optimal है"]], a: 0, e: ["Stationarity is distributional; individual rewards can still vary.", "Stationarity distribution की property है; individual rewards फिर भी बदल सकते हैं।"] },
  { q: ["Which class example best represented nonstationarity?", "Class में कौन-सा example nonstationarity को सबसे अच्छा represent करता है?"], o: [["Train-ticket confirmation changing across seasons", "Seasons के साथ बदलती train-ticket confirmation"], ["A fixed fair coin", "Fixed fair coin"], ["A fixed deck dealt by the same rule", "Same rule से dealt fixed deck"], ["A deterministic constant reward", "Deterministic constant reward"]], a: 0, e: ["Demand changes the outcome distribution over time.", "Demand समय के साथ outcome distribution बदलती है।"] },
  { q: ["Why can ordinary sample averages be poor for nonstationary rewards?", "Nonstationary rewards के लिए ordinary sample averages poor क्यों हो सकते हैं?"], o: [["They give very old data lasting influence", "वे बहुत पुराने data को lasting influence देते हैं"], ["They use no rewards", "वे rewards use नहीं करते"], ["They require a model", "उन्हें model चाहिए"], ["They always diverge", "वे हमेशा diverge करते हैं"]], a: 0, e: ["Old samples may describe a reward distribution that no longer applies.", "Old samples ऐसी reward distribution describe कर सकते हैं जो अब लागू नहीं।"] },
  { q: ["What is the constant-step-size update?", "Constant-step-size update क्या है?"], o: [["Q_{n+1}=Q_n+alpha(R_n−Q_n)", "Q_{n+1}=Q_n+alpha(R_n−Q_n)"], ["Q_{n+1}=R_n/n^2", "Q_{n+1}=R_n/n^2"], ["Q_{n+1}=Q_1", "Q_{n+1}=Q_1"], ["Q_{n+1}=sum R_i", "Q_{n+1}=sum R_i"]], a: 0, e: ["A fixed alpha replaces the shrinking 1/n step size.", "Fixed alpha shrinking 1/n step size को replace करता है।"] },
  { q: ["In the expanded constant-alpha update, what is the newest reward's coefficient?", "Expanded constant-alpha update में newest reward का coefficient क्या है?"], o: [["alpha", "alpha"], ["1−alpha", "1−alpha"], ["alpha^n", "alpha^n"], ["1/n", "1/n"]], a: 0, e: ["The latest observation enters directly with weight alpha.", "Latest observation सीधे weight alpha से enter करता है।"] },
  { q: ["How does the weight of older rewards change?", "Older rewards का weight कैसे बदलता है?"], o: [["It decays geometrically", "Geometrically decay करता है"], ["It grows linearly", "Linearly grow करता है"], ["It is always zero", "हमेशा zero है"], ["It stays equal to the newest reward", "Newest reward के बराबर रहता है"]], a: 0, e: ["Each extra age step contributes another factor of 1−alpha.", "हर extra age step एक और factor 1−alpha जोड़ता है।"] },
  { q: ["After n constant-alpha updates, what weight remains on Q_1?", "n constant-alpha updates के बाद Q_1 पर कौन-सा weight रहता है?"], o: [["(1−alpha)^n", "(1−alpha)^n"], ["alpha n", "alpha n"], ["1/n", "1/n"], ["Zero immediately", "तुरंत zero"]], a: 0, e: ["Repeated substitution multiplies the initial estimate by 1−alpha each time.", "Repeated substitution initial estimate को हर बार 1−alpha से multiply करती है।"] },
  { q: ["What range did the lecture use for a constant alpha?", "Lecture ने constant alpha के लिए कौन-सी range उपयोग की?"], o: [["0<alpha<=1", "0<alpha<=1"], ["alpha<0", "alpha<0"], ["alpha>10", "alpha>10"], ["Only alpha=0", "केवल alpha=0"]], a: 0, e: ["This keeps the update a convex-style blend of old estimate and new reward.", "इससे update old estimate और new reward का convex-style blend रहता है।"] },
  { q: ["What does sum alpha_n=infinity prevent?", "sum alpha_n=infinity क्या prevent करता है?"], o: [["Learning from stopping too early", "Learning का बहुत जल्दी रुकना"], ["All observation noise", "सारा observation noise"], ["Every bad action", "हर bad action"], ["Reward drift", "Reward drift"]], a: 0, e: ["The total adjustment capacity remains unbounded.", "Total adjustment capacity unbounded रहती है।"] },
  { q: ["Why require sum alpha_n^2<infinity for stationary convergence?", "Stationary convergence के लिए sum alpha_n^2<infinity क्यों चाहिए?"], o: [["To control accumulated noise variance", "Accumulated noise variance control करने के लिए"], ["To force permanent exploration", "Permanent exploration force करने के लिए"], ["To increase action count", "Action count बढ़ाने के लिए"], ["To make rewards deterministic", "Rewards deterministic बनाने के लिए"]], a: 0, e: ["Squared step sizes must shrink enough for noise effects to settle.", "Squared step sizes को इतना shrink होना चाहिए कि noise effects settle हो सकें।"] },
  { q: ["Which schedule satisfies both convergence conditions?", "कौन-सा schedule दोनों convergence conditions satisfy करता है?"], o: [["alpha_n=1/n", "alpha_n=1/n"], ["alpha_n=0.1 forever", "alpha_n=0.1 हमेशा"], ["alpha_n=n", "alpha_n=n"], ["alpha_n=0", "alpha_n=0"]], a: 0, e: ["The harmonic sum diverges while the squared harmonic sum converges.", "Harmonic sum diverge करता है जबकि squared harmonic sum converge करता है।"] },
  { q: ["Which convergence condition does fixed positive alpha violate?", "Fixed positive alpha कौन-सी convergence condition violate करता है?"], o: [["sum alpha_n^2<infinity", "sum alpha_n^2<infinity"], ["sum alpha_n=infinity", "sum alpha_n=infinity"], ["0<alpha<=1", "0<alpha<=1"], ["N(a)>=0", "N(a)>=0"]], a: 0, e: ["Adding the same positive square forever diverges.", "Same positive square को हमेशा जोड़ने पर sum diverge करता है।"] },
  { q: ["Why is fixed alpha still useful?", "Fixed alpha फिर भी useful क्यों है?"], o: [["It keeps adapting to drift", "यह drift के अनुसार adapt करता रहता है"], ["It guarantees exact stationary convergence", "Exact stationary convergence guarantee करता है"], ["It eliminates exploration", "Exploration eliminate करता है"], ["It stores every reward", "हर reward store करता है"]], a: 0, e: ["Its nonvanishing step size provides continuing responsiveness.", "Nonvanishing step size continuing responsiveness देता है।"] },
  { q: ["What does a larger alpha generally do?", "Larger alpha सामान्यतः क्या करता है?"], o: [["Tracks faster but amplifies noise", "Faster track करता है पर noise amplify करता है"], ["Tracks slower with less noise", "Slower track करता है और noise कम करता है"], ["Removes initialization", "Initialization हटाता है"], ["Makes all actions greedy", "सभी actions greedy बनाता है"]], a: 0, e: ["More weight on the newest reward improves responsiveness at a variance cost.", "Newest reward पर अधिक weight responsiveness बढ़ाता है, variance cost के साथ।"] },
  { q: ["How do optimistic initial values encourage exploration?", "Optimistic initial values exploration कैसे encourage करते हैं?"], o: [["Untried actions retain high estimates", "Untried actions high estimates retain करते हैं"], ["They increase epsilon automatically", "वे epsilon automatically बढ़ाते हैं"], ["They reveal true rewards", "वे true rewards reveal करते हैं"], ["They remove noise", "वे noise हटाते हैं"]], a: 0, e: ["After a tried action's estimate falls, other optimistic actions look greedy.", "Tried action का estimate गिरने पर बाकी optimistic actions greedy दिखते हैं।"] },
  { q: ["What is a risk of setting optimism far too high?", "Optimism बहुत high set करने का risk क्या है?"], o: [["Wasteful sampling of irrelevant actions", "Irrelevant actions की wasteful sampling"], ["No action is ever tried", "कोई action कभी try नहीं होता"], ["All rewards become zero", "सभी rewards zero हो जाते हैं"], ["The action set disappears", "Action set गायब हो जाता है"]], a: 0, e: ["Greedy selection may be forced to test many implausible alternatives.", "Greedy selection कई implausible alternatives test करने को मजबूर हो सकती है।"] },
  { q: ["How does optimistic exploration differ from epsilon-greedy exploration?", "Optimistic exploration epsilon-greedy exploration से कैसे अलग है?"], o: [["It is transient and estimate-driven", "यह transient और estimate-driven है"], ["It uses permanent uniform randomness", "यह permanent uniform randomness use करता है"], ["It never explores", "यह कभी explore नहीं करता"], ["It requires known true values", "इसे known true values चाहिए"]], a: 0, e: ["Optimism fades as estimates are corrected; epsilon can keep random exploration active.", "Estimates correct होने पर optimism fade होता है; epsilon random exploration active रख सकता है।"] },
  { q: ["In the closing plot discussion, which method explores explicitly?", "Closing plot discussion में कौन-सा method explicitly explore करता है?"], o: [["Epsilon-greedy through its random branch", "Random branch के जरिए epsilon-greedy"], ["Greedy optimistic only through epsilon", "केवल epsilon से greedy optimistic"], ["Sample average with no action selection", "Action selection के बिना sample average"], ["Neither method", "कोई method नहीं"]], a: 0, e: ["The instructor distinguishes imposed epsilon exploration from optimism-induced exploration.", "Instructor imposed epsilon exploration को optimism-induced exploration से अलग करती हैं।"] },
  { q: ["Which topic was previewed for the next lecture?", "अगली lecture के लिए कौन-सा topic preview हुआ?"], o: [["Upper Confidence Bound action selection", "Upper Confidence Bound action selection"], ["Transformer attention", "Transformer attention"], ["Linear regression", "Linear regression"], ["Policy gradients", "Policy gradients"]], a: 0, e: ["UCB was postponed because it needed another 20–25 minutes.", "UCB postpone किया गया क्योंकि उसे 20–25 मिनट और चाहिए थे।"] }
];

const makeQuiz = (lang) => quizRows.map((row) => ({
  question: row.q[lang === "en" ? 0 : 1],
  options: row.o.map((option) => option[lang === "en" ? 0 : 1]),
  answer: row.a,
  explanation: row.e[lang === "en" ? 0 : 1],
  optionNotes: row.o.map((option, index) => {
    const label = option[lang === "en" ? 0 : 1];
    if (index === row.a) return lang === "en" ? `Correct: ${label} matches the lecture evidence and definition.` : `सही: ${label} lecture evidence और definition से मेल खाता है।`;
    return lang === "en" ? `Incorrect: ${label} describes a different quantity or contradicts the update.` : `गलत: ${label} अलग quantity बताता है या update के विपरीत है।`;
  })
}));

const makeSignals = (lang) => ({
  assignments: [],
  homework: [],
  labs: [],
  projects: [],
  references: localized(signalRows.references, lang),
  studentQuestions: localized(signalRows.studentQuestions, lang)
});

const makeEdition = (lang) => ({
  title: lang === "en" ? "Incremental bandits, nonstationary tracking, and optimistic exploration" : "Incremental bandits, nonstationary tracking और optimistic exploration",
  lede: lang === "en"
    ? "The lecture converts sample-average action values into an O(1) update, assembles the epsilon-greedy bandit loop, then replaces stationary averaging with recency weighting before using optimistic initial values to induce exploration."
    : "Lecture sample-average action values को O(1) update में बदलती है, epsilon-greedy bandit loop बनाती है, फिर stationary averaging की जगह recency weighting लाती है और optimistic initial values से exploration induce करती है।",
  instructionalInterval: "0:00–1:11:13",
  reviewLevel: lang === "en" ? "Recording, timestamped transcript, and slide-frame verified" : "Recording, timestamped transcript और slide-frame से सत्यापित",
  coverage: localized(coverage, lang),
  takeaway: lang === "en"
    ? "Use action-specific incremental updates for efficiency, shrinking step sizes for stationary convergence, constant step sizes for drift, and optimism only when its reward-scale assumptions are defensible."
    : "Efficiency के लिए action-specific incremental updates, stationary convergence के लिए shrinking step sizes, drift के लिए constant step sizes और optimism तभी उपयोग करें जब reward-scale assumptions उचित हों।",
  slideTrail: localized(slides, lang),
  summary: localized(summaries, lang),
  courseSignals: makeSignals(lang),
  keyTerms: localized(terms, lang),
  insights: localized(insights, lang),
  resources: localized(resources, lang),
  quiz: makeQuiz(lang)
});

// One publication unit: English and Hindi are reviewed and rendered together.
export const eai6401Lecture20260825 = {
  en: makeEdition("en"),
  hi: makeEdition("hi")
};
