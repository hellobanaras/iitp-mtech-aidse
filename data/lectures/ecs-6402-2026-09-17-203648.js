// English-only publication unit for the verified 17 September 2026 recording.
const quizSeed = [
  ["Why does the cellular concept replace one high-power transmitter with multiple low-power transmitters?", ["To cover an area with smaller cells and reuse spectrum", "To eliminate every base station", "To make every cell use the same adjacent frequency", "To remove antennas from the network"], 0, "The lecture explains that multiple low-power transmitters provide smaller geographic coverage areas and permit frequency reuse."],
  ["What is the main role of a base station in the lecture's cell model?", ["It provides the radio interface between mobile devices and the network", "It stores every learner's password", "It replaces all frequency planning", "It converts every hexagon into a square"], 0, "A base station contains transmitter, receiver, and control functions for the cell."],
  ["Why are adjacent cells assigned different frequency bands?", ["To reduce interference and crosstalk between nearby cells", "To make their radii unequal", "To increase the number of host bits", "To prevent mobile devices from moving"], 0, "Nearby reuse of the same band would cause interference, so adjacent cells use different bands."],
  ["What is a co-channel cell?", ["A cell that reuses the same frequency band as another sufficiently distant cell", "A cell that has no base station", "A cell that uses only a broadcast address", "A cell that is always adjacent"], 0, "The lecture calls cells using the same band co-channel cells and places them far enough apart to control interference."],
  ["Why is a hexagonal cell used as the planning approximation?", ["It tiles an area without gaps while approximating circular coverage", "It has no center", "It forces every cell to use the same frequency", "It gives square cells four equidistant neighbors"], 0, "The lecture contrasts hexagons with circles that leave gaps and squares whose neighbor distances are not uniform."],
  ["What does R denote in the cell geometry?", ["The cell radius", "The number of interfering cells", "The reuse factor", "The received signal power"], 0, "R is used for the radius of the hexagonal cell or its circular approximation."],
  ["What does capital D represent?", ["The center-to-center reuse distance between co-channel cells", "The radius of one adjacent cell", "The number of cells in a cluster", "The percentage of supported channels"], 0, "Capital D is the separation between centers of cells that reuse the same frequency."],
  ["What does small d represent in the adjacent-cell geometry?", ["The center-to-center distance between nearby adjacent cells", "The number of base stations", "The frequency reuse factor", "The signal-to-interference ratio"], 0, "The lecture distinguishes the adjacent-cell center distance d from the co-channel reuse distance D."],
  ["What is the cluster size N?", ["The number of cells in one frequency-reuse pattern", "The number of antennas in a handset", "The duration of a lecture", "The number of host bits"], 0, "N counts the cells in a repeated cluster and is also called the cluster size."],
  ["Which relation is derived for reuse distance and cell radius?", ["D/R = √(3N)", "D/R = N/3", "D/R = 1/N", "D/R = √(N/3)"], 0, "The lecture derives D = √(3N)R, so D/R = √(3N)."],
  ["Which shift parameters are stated for a seven-cell cluster?", ["i = 1 and j = 2", "i = 2 and j = 0", "i = 0 and j = 1", "i = 7 and j = 7"], 0, "The instructor states that for N = 7 the reuse pattern uses i = 1 and j = 2."],
  ["Which shift parameters are used in the four-cell example?", ["i = 2 and j = 0", "i = 1 and j = 2", "i = 4 and j = 4", "i = 0 and j = 7"], 0, "The four-cell drawing is explained with a two-cell movement in one direction and no lateral movement."],
  ["Which value is presented as a possible cluster size?", ["7", "2.5", "5.5", "12.5"], 0, "The lecture lists values such as 1, 3, 4, 7, and 9 as possible cluster sizes."],
  ["What is the frequency-reuse factor for a cluster size N?", ["1/N", "N", "N + 1", "1 − N"], 0, "A cluster of N cells uses each available band once, giving a reuse factor of 1/N."],
  ["Why do square cells create a planning problem in the lecture?", ["Their neighboring centers are not all at the same distance", "They cannot contain a base station", "They always leave circular gaps", "They require IPv6 addresses"], 0, "The square example shows some neighbors at d and others at √2d, unlike the equal-distance hexagonal neighbors."],
  ["In the numerical example, what is the area of each of seven equal cells covering 140 km²?", ["20 km²", "7 km²", "40 km²", "140 km²"], 0, "Dividing 140 km² by seven cells gives 20 km² per cell."],
  ["If one high-power transmitter supports 40 voice channels and each cell supports 30%, how many channels does one cell support?", ["12", "4", "30", "70"], 0, "Thirty percent of 40 is 12 channels per cell."],
  ["With seven cells supporting 12 channels each, what is the total in the example?", ["84 channels", "40 channels", "19 channels", "12 channels"], 0, "Seven cells times 12 supported channels yields 84 channels."],
  ["What is the capacity benefit of dividing one coverage area into seven cells?", ["The system supports more simultaneous channels through spatial reuse", "The system needs no spectrum planning", "Every adjacent cell receives the same band", "The base stations become high-power transmitters"], 0, "The example compares 40 channels from one transmitter with 84 aggregate supported channels after reuse."],
  ["What generally happens when N is made smaller while cell size is held constant?", ["The reuse distance decreases and capacity can increase with more interference", "The reuse distance becomes infinite", "All adjacent cells use identical bands safely", "The number of cells in the area becomes zero"], 0, "A smaller N gives a smaller D/R and permits more cluster replications, at the cost of more co-channel interference."],
  ["What generally happens when N is made larger?", ["Co-channel cells are farther apart but fewer reuse patterns fit in the area", "Every cell becomes adjacent to every other cell", "The frequency-reuse factor becomes larger than one", "The signal power is forced to zero"], 0, "Because D = √(3N)R, larger N increases separation but reduces the number of pattern repetitions."],
  ["What does S represent in the SIR discussion?", ["Desired signal power from the serving base station", "The number of cells in a cluster", "The distance between cell centers", "The percentage of reused channels"], 0, "S is the desired received signal power from the serving base station."],
  ["What does I represent in the SIR discussion?", ["Interference power from co-channel base stations", "The cell radius", "The mobile device identity", "The number of voice channels per cluster"], 0, "I aggregates unwanted power from interfering co-channel cells."],
  ["What is the purpose of increasing the co-channel separation D?", ["To reduce interference and improve the signal-to-interference ratio", "To make the cell radius disappear", "To force all cells to share one band", "To remove the need for a receiver"], 0, "The lecture links greater reuse distance with lower co-channel interference."],
  ["What design trade-off does the lecture emphasize?", ["Higher capacity can come with more interference and poorer signal quality", "More capacity always eliminates interference", "Larger clusters always increase replication", "Frequency planning is unrelated to cell geometry"], 0, "The designer balances capacity against co-channel interference and signal quality."],
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `Correct: ${option}. ${explanation}`
    : `Incorrect: ${option} does not match the lecture's cellular-reuse explanation.`),
}));

export const ecs6402Lecture20260917203648 = {
  en: {
    title: "Cellular reuse, cluster geometry, and capacity–interference trade-offs",
    lede: "This lecture develops the cellular concept from low-power base stations and hexagonal coverage to frequency reuse, co-channel geometry, cluster size, capacity calculations, and the trade-off between capacity and interference.",
    instructionalInterval: "00:03:04–01:22:42 source time (setup and participant-only idle tail excluded)",
    reviewLevel: "Full seven-point visible Stream sweep, direct-download check, audio-enabled 2× visible-tab capture, source-time-bounded processing, timestamped transcript, and idle-tail decision verified.",
    coverage: [
      { title: "Cellular architecture", body: "A coverage area is divided into small cells, each served by a base station with transmitter, receiver, control, and antenna functions." },
      { title: "Hexagonal coverage and reuse", body: "Hexagons approximate circular radio coverage while tiling the service area, and non-adjacent cells can reuse a frequency band." },
      { title: "Reuse geometry", body: "R, d, D, N, and the i–j shift pattern connect cell radius, adjacent-cell spacing, co-channel spacing, and cluster size." },
      { title: "Capacity arithmetic", body: "The seven-cell example turns 30% of 40 channels per cell into 84 supported channels across the reused cells." },
      { title: "Interference trade-offs", body: "Smaller clusters increase reuse and capacity but reduce co-channel separation, lowering signal quality through interference." },
    ],
    takeaway: "Cellular planning is a geometry-and-spectrum problem: divide coverage into manageable cells, reuse a band only at a safe separation, and choose cluster size N to balance aggregate capacity against co-channel interference.",
    slideTrail: [
      { time: "00:03:04", title: "Base-station cellular layout", note: "The instructor draws a repeated group of cells and places a base station at each cell center." },
      { time: "00:08:14", title: "High-power versus multiple low-power transmitters", note: "The cellular concept is motivated by replacing one very large transmitter with multiple smaller coverage areas." },
      { time: "00:20:36", title: "Co-channel spacing", note: "The board distinguishes nearby cells with different bands from sufficiently distant cells that reuse a band." },
      { time: "00:41:16", title: "Transmit-power control", note: "The lecture compares high-power and very-low-power transmission within a cell." },
      { time: "01:01:53", title: "Cluster geometry and reuse", note: "The instructor works through N, D/d geometry, and the reuse relationship for cellular patterns." },
      { time: "01:14:19", title: "Cluster size and capacity", note: "The board states the constant-cell-size trade-off: lower N increases capacity but also co-channel interference." },
      { time: "01:21:39", title: "Signal, interference, and SIR", note: "The closing board defines desired signal power, interfering power, and the separation-based route to improving SIR." },
      { time: "01:22:41", title: "Participant-only idle tail", note: "The final frame shows participant avatars without instruction; this tail is excluded from the teaching interval." },
    ],
    summary: [
      { title: "1. Cellular systems trade one large transmitter for repeated small cells", sourceRefs: ["00:03:04–00:20:36", "Base-station cellular layout", "High-power versus multiple low-power transmitters"], paragraphs: ["The lecture divides a geographical service area into small cells and places a base station at the center of each. The base station combines transmit, receive, and control functions, while an antenna provides the radio interface to mobile devices.", "Replacing one very high-power transmitter with multiple low-power transmitters reduces each coverage radius and makes frequency reuse possible. A handset communicates with the base station serving the cell in which it is currently located."], formula: "one large coverage area → many cells × low-power base stations" },
      { title: "2. Hexagons tile the area and preserve a usable reuse geometry", sourceRefs: ["00:08:14–00:20:36", "Co-channel spacing"], paragraphs: ["Circles are a useful radio approximation but leave gaps when tiled. Hexagons provide a close approximation while covering the plane without gaps. Squares have a different problem: their neighboring centers are not all equidistant, which complicates a uniform reuse plan.", "Adjacent cells use different frequency bands to reduce interference. Cells far enough apart can reuse the same band; these are co-channel cells."], formula: "co-channel reuse is safe only when separation is sufficient for the target interference level" },
      { title: "3. R, d, D, and N connect cell shape to frequency planning", sourceRefs: ["00:20:36–01:01:53", "Cluster geometry and reuse"], paragraphs: ["R denotes the cell radius, d denotes the center spacing between nearby adjacent cells, and capital D denotes the center-to-center separation between co-channel cells. N is the number of cells in the repeated cluster, also called the cluster size.", "The lecture derives the central relationship D = √(3N)R, or D/R = √(3N). It also uses i and j to describe how many cell-center steps are taken in two directions to reach the next cell that reuses the same band; the examples include N = 4 with i = 2, j = 0 and N = 7 with i = 1, j = 2."], formula: "D/R = √(3N); reuse factor = 1/N" },
      { title: "4. Spatial reuse increases the supported channel count", sourceRefs: ["01:01:53–01:14:19", "Cluster geometry and reuse", "Cluster size and capacity"], paragraphs: ["In the worked example, a 140 km² area is divided into seven equal cells, giving 20 km² per cell. If one original high-power transmitter supported 40 voice channels and each cell supports 30% of that set, each cell supports 12 channels.", "The seven-cell arrangement therefore supports 84 channels in aggregate. The example makes the capacity benefit of repeating a frequency pattern concrete: the same spectrum can serve more simultaneous users when coverage is partitioned."], formula: "140/7 = 20 km²; 0.30 × 40 = 12 channels/cell; 7 × 12 = 84 channels" },
      { title: "5. Cluster size is a capacity–interference design choice", sourceRefs: ["01:14:19–01:21:39", "Cluster size and capacity"], paragraphs: ["With constant cell size, lowering N permits the same pattern to be replicated more often, increasing aggregate capacity. But D = √(3N)R also shows that smaller N brings co-channel cells closer together.", "The resulting trade-off is explicit: a designer can choose more capacity with more co-channel interference, or greater separation with fewer reuse opportunities. The instructor asks learners to draw and check the seven-cell reuse pattern as practice."], formula: "smaller N → smaller D/R and more reuse; larger N → larger D/R and less reuse" },
      { title: "6. SIR expresses the quality cost of reuse", sourceRefs: ["01:21:39–01:22:42", "Signal, interference, and SIR"], paragraphs: ["The closing discussion defines S as desired signal power from the serving base station and I as the aggregate interference from co-channel base stations. The signal-to-interference ratio is therefore the desired power divided by the unwanted co-channel power.", "Increasing the reuse distance reduces interference and can improve SIR, but it generally reduces how many reuse patterns fit into the same geography. The lecture closes by framing this as the designer's capacity-versus-quality decision."], formula: "SIR = S / ΣIₚ; increase D to reduce co-channel interference" },
    ],
    courseSignals: {
      assignments: [],
      homework: [{ time: "01:16:30", title: "Draw and verify the N = 7 reuse pattern", detail: "The instructor explicitly asks learners to draw the seven-cell pattern and check the i = 1, j = 2 shift." }],
      labs: [],
      projects: [],
      references: [],
      studentQuestions: [],
    },
    insights: [
      { label: "Reuse", title: "Spectrum is repeated spatially, not duplicated", body: "The same frequency band can serve multiple cells when the geometry keeps co-channel interference within an acceptable range." },
      { label: "Geometry", title: "Cluster size controls separation", body: "Because D/R grows with √N, cluster size is a direct geometric lever for balancing coverage reuse and interference." },
      { label: "Capacity", title: "Cell splitting creates aggregate capacity", body: "The seven-cell example turns a 40-channel single-transmitter area into 84 supported channels through spatial partitioning and reuse." },
      { label: "Quality", title: "More reuse is not free", body: "A smaller N can raise capacity while lowering co-channel separation, so signal quality and interference must be evaluated together." },
    ],
    resources: [
      { kind: "read", title: "FCC — Wireless Telecommunications", url: "https://www.fcc.gov/wireless-telecommunications", detail: "Public regulatory context for wireless spectrum and radio services." },
      { kind: "read", title: "3GPP — 5G System Overview", url: "https://www.3gpp.org/technologies/5g-system-overview", detail: "Public standards context for cellular-system evolution beyond the reuse fundamentals in this lecture." },
      { kind: "read", title: "ITU-R M.2083 — IMT Vision", url: "https://www.itu.int/rec/R-REC-M.2083", detail: "Reference for mobile broadband, massive machine communication, and low-latency service goals." },
    ],
    keyTerms: [
      { term: "Cell", definition: "A geographic coverage area served by a base station in a cellular network." },
      { term: "Base station", definition: "The radio and control node serving mobile devices in a cell." },
      { term: "Co-channel cell", definition: "A cell that reuses the same frequency band as another cell at a planned separation." },
      { term: "Cluster size N", definition: "The number of cells in one repeated frequency-reuse pattern." },
      { term: "Reuse distance D", definition: "The center-to-center separation between cells using the same frequency band." },
      { term: "SIR", definition: "The ratio of desired signal power to aggregate co-channel interference power." },
      { term: "Frequency-reuse factor", definition: "The fraction 1/N for a cluster of N cells in the lecture's simplified model." },
    ],
    quiz,
  },
};
