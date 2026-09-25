// English-only publication unit for the verified 24 September 2026 recording.
const quizSeed = [
  ["What is another name for the Mobile Switching Center?", ["MSC", "BTS", "RSSI", "PSTN"], 0, "MSC and MTSO refer to the cellular switching center."],
  ["What does BTS stand for?", ["Base Transceiver Station", "Broadband Traffic Switch", "Base Transport Service", "Bearer Tuning System"], 0, "A BTS combines transmitter and receiver functions for a cell."],
  ["What is the controller responsible for?", ["Managing call processes between the mobile and the network", "Increasing power only", "Replacing the PSTN", "Storing every voice payload"], 0, "The controller manages the call process between the mobile unit and the wider network."],
  ["Why are multiple BTSs connected to one MTSO?", ["One MTSO serves multiple cells and coordinates their calls", "Every cell needs a different public network", "A BTS cannot communicate wirelessly", "The MTSO is a handset antenna"], 0, "The MTSO is the switching authority serving multiple cells."],
  ["What does PSTN mean?", ["Public Switched Telephone Network", "Private Signal Transfer Node", "Packet Switching Transport Network", "Primary Spectrum Tuning Network"], 0, "The PSTN connects cellular users with fixed subscribers and the public telephone network."],
  ["Which is an MTSO function?", ["Assigning voice channels and coordinating handoff", "Drawing every hexagon", "Charging the battery", "Replacing every antenna"], 0, "The MTSO monitors calls, assigns channels, performs handoff, and supports billing information."],
  ["What is the purpose of a control channel?", ["Exchange coordination information for setup and call maintenance", "Carry only voice payload", "Measure cell radius", "Power the handset"], 0, "Control channels carry setup and maintenance overhead."],
  ["What does a traffic channel carry?", ["Voice or data payload", "Only registration identifiers", "Billing records only", "Cell geometry"], 0, "Traffic channels carry the actual voice or data exchange."],
  ["What does a mobile do during initialization?", ["Scan for and select a strong setup channel", "Open a traffic channel without scanning", "Connect directly to every MTSO", "Disable its receiver"], 0, "Initialization begins with scanning and monitoring a suitable setup channel."],
  ["What does the initialization handshake do?", ["Identify the user and register its location", "Carry the whole conversation", "Split a cell", "Calculate Friis power"], 0, "The handshake identifies the mobile and registers its location."],
  ["What is a mobile-originated call?", ["A mobile sends the called number on a setup channel", "A call made only by PSTN", "A base-station handoff", "A billing message"], 0, "The originating mobile sends the destination number over setup signaling."],
  ["What does forward channel mean?", ["Base station to mobile", "Mobile to base station", "PSTN to remote MTSO only", "Handset microphone to handset microphone"], 0, "Forward is the base-station-to-mobile direction."],
  ["What does the mobile check before reverse setup transmission?", ["That the setup channel is idle", "That traffic is occupied", "That every BTS is silent", "That PSTN is disconnected"], 0, "The mobile examines forward-channel information to confirm an idle setup channel."],
  ["What is paging?", ["The MTSO asks selected BTSs to signal the called mobile", "Changing the screen", "Measuring cell radius", "Releasing traffic"], 0, "Selected base stations transmit the MTSO's paging message."],
  ["How does the called mobile accept a page?", ["It recognizes its number and responds on the setup channel", "It waits for a handoff", "It changes to PSTN without replying", "It uses a random traffic channel"], 0, "The called mobile recognizes its number and responds through its BTS."],
  ["What happens after the called mobile responds?", ["The MTSO sets up the circuit and selects an available traffic channel", "The MTSO erases location", "The BTS is turned off", "The control channel becomes PSTN"], 0, "The MTSO coordinates circuit setup and traffic assignment."],
  ["What characterizes an ongoing call?", ["Two mobile units exchange voice or data through BTSs and the MTSO", "Only the caller transmits", "The MTSO stops monitoring", "Control carries all payload forever"], 0, "The endpoints exchange payload through their serving base stations and switching center."],
  ["What is handoff?", ["Moving an active connection to a new serving BTS as the mobile changes cells", "Ending a call", "Selecting the startup channel", "Converting voice to billing"], 0, "Handoff changes serving radio resources while preserving the call."],
  ["What is the goal of handoff?", ["Change the traffic channel without interrupting or alerting the user", "Drop every active call", "Force redial", "Disable neighboring cells"], 0, "The lecture describes handoff as automatic and transparent."],
  ["What is call blocking?", ["A call cannot be established after traffic channels remain busy through the retry limit", "A user hangs up", "A mobile crosses a cell", "A multipath arrival"], 0, "A busy system can return the call attempt as blocked after bounded retries."],
  ["What happens at intentional termination?", ["The MTSO is informed and traffic channels are released", "Every cell is paged", "The handset keeps the channel", "PSTN assigns a new cell"], 0, "Termination releases resources for another connection."],
  ["What can cause a call drop?", ["Interference or received signal strength below the required threshold", "A successful handoff", "An idle setup channel", "Correct registration"], 0, "Weak signal or interference can make the traffic channel unreliable."],
  ["How can a remote subscriber be reached?", ["Through PSTN and, when needed, connections between remote MTSOs", "Only through the nearest handset", "By bypassing BTSs", "By using control as payload"], 0, "The lecture describes PSTN and remote-MTSO routing."],
  ["What is the radio-power trade-off?", ["Power must be strong enough for quality but contained to limit co-channel interference", "Power should always be maximized", "Power is unrelated to distance", "Power should be below noise"], 0, "The signal must exceed the receiver threshold without spilling excessive energy."],
  ["What does the Friis equation express?", ["Received power depends on transmit power, gains, wavelength, and inverse-square distance", "The number of users", "Retry count", "Control-channel count"], 0, "The lecture connects received power to transmit power, antenna gains, wavelength, and distance."],
];

const quiz = quizSeed.map(([question, options, answer, explanation]) => ({
  question, options, answer, explanation,
  optionNotes: options.map((option, index) => index === answer
    ? `Correct: ${option}. ${explanation}`
    : `Incorrect: ${option} does not match the lecture's cellular-system operation.`),
}));

export const ecs6402Lecture20260924203744 = {
  en: {
    title: "Cellular-system operation: channels, call setup, handoff, and radio constraints",
    lede: "This lecture traces a cellular call from mobile initialization and registration through paging, circuit setup, ongoing traffic, handoff, termination, and call blocking, then connects received power and interference to remote connectivity and the Friis free-space model.",
    instructionalInterval: "00:02:32–01:16:55 source time",
    reviewLevel: "Full seven-point visible Stream sweep, direct-download check, audio-enabled 2× visible-tab capture, source-time-bounded processing, timestamped transcript, and idle-tail decision verified.",
    coverage: [
      { title: "Cellular architecture", body: "Mobile units, base transceiver stations, controllers, MTSO/MSC, and PSTN are connected into a managed cellular system." },
      { title: "Channels and call setup", body: "Control channels carry setup and coordination overhead while traffic channels carry voice or data payload." },
      { title: "Call lifecycle", body: "Initialization, mobile-originated call, paging, call acceptance, ongoing exchange, handoff, and termination form the main sequence." },
      { title: "Capacity and reliability", body: "Call blocking, call drops, RSSI thresholds, power containment, co-channel interference, and remote MTSO connectivity explain operational limits." },
    ],
    takeaway: "A cellular call is a coordinated state machine: the mobile registers on a strong setup channel, the MTSO establishes and assigns traffic resources, and automatic handoff preserves continuity while radio power and interference constrain reliability.",
    slideTrail: [
      { time: "00:02:32", title: "Operation of a cellular system", note: "The board introduces the hexagonal cell, base station, antenna, controller, and transceiver roles." },
      { time: "00:12:32", title: "MTSO and PSTN connectivity", note: "The MTSO/MSC is shown connecting multiple base stations, fixed subscribers, and the public switched telephone network." },
      { time: "00:17:32", title: "Control and traffic channels", note: "The lecture separates coordination overhead from voice/data payload." },
      { time: "00:21:09", title: "Mobile initialization and registration", note: "The mobile scans for the strongest setup channel, monitors it, and completes a handshake for identity and location." },
      { time: "00:35:22", title: "Paging and called-mobile acceptance", note: "Selected base stations page the called mobile; the mobile recognizes its number and responds." },
      { time: "00:42:40", title: "Circuit and traffic-channel assignment", note: "The MTSO connects the calling and called sides and selects an available traffic channel." },
      { time: "00:52:18", title: "Handoff across cell boundaries", note: "An active mobile changes serving cells and traffic channel without interrupting the call." },
      { time: "01:09:17", title: "Signal power, interference, and Friis model", note: "Received power, RSSI, power containment, health limits, and distance dependence are connected." },
    ],
    summary: [
      { title: "1. The cellular architecture divides radio access from switching", sourceRefs: ["00:02:32–00:12:32", "Operation of a cellular system", "MTSO and PSTN connectivity"], paragraphs: ["A mobile unit communicates wirelessly with a base transceiver station (BTS), which combines transmitter and receiver functions. A controller manages call processes between the mobile unit and the rest of the network.", "Multiple BTSs serve multiple cells and connect to an MTSO, also called an MSC. The MTSO coordinates connections between mobile users, and it can connect cellular users to fixed subscribers through the PSTN. The BTS-to-mobile link is wireless; the backhaul toward the MTSO is presented as typically wired, though wireless backhaul is possible."], formula: "mobile unit ↔ BTS/controller ↔ MTSO/MSC ↔ cellular network or PSTN" },
      { title: "2. Control and traffic channels have different jobs", sourceRefs: ["00:17:32–00:19:00", "Control and traffic channels"], paragraphs: ["The lecture distinguishes a control channel from a traffic channel. Control traffic is the overhead used to exchange information, set up and maintain calls, and establish the relationship between a mobile unit and its nearby base station.", "The traffic channel carries the actual voice or data payload. Keeping these roles separate lets the network coordinate a call before assigning the payload-bearing channel."], formula: "control channel = coordination overhead; traffic channel = voice/data payload" },
      { title: "3. Initialization selects a serving channel and registers the mobile", sourceRefs: ["00:21:09–00:27:06", "Mobile initialization and registration"], paragraphs: ["When the mobile turns on, its receiver scans available setup channels and selects a strong suitable channel, normally associated with a nearby base station. The lecture cautions that noise and interference can make the strongest measured choice fluctuate.", "A handshake follows between the mobile and the MTSO through the serving base station. Its purpose is to identify the user and register the mobile's location. Scanning is repeated periodically so a moving mobile can select a new base station when it enters another cell."], formula: "power on → scan/monitor strongest setup channel → identify user → register location" },
      { title: "4. A mobile-originated call uses setup channels before traffic resources", sourceRefs: ["00:29:38–00:35:22", "Mobile-originated call", "Forward and reverse channels"], paragraphs: ["For a mobile-originated call, the mobile sends the called number on its selected setup channel. Before transmitting, it checks that the setup channel is idle by examining forward-channel information from the base station.", "The forward channel runs from BTS to mobile; the reverse channel runs from mobile toward BTS. Once the mobile transmits the request on the reverse setup channel, the serving base station forwards the request to the MTSO for call coordination."], formula: "BTS → mobile = forward; mobile → BTS = reverse" },
      { title: "5. Paging and acceptance create the end-to-end circuit", sourceRefs: ["00:35:22–00:42:40", "Paging and called-mobile acceptance", "Circuit and traffic-channel assignment"], paragraphs: ["The MTSO attempts to locate the called mobile by sending a paging message to selected base stations. Each selected base station transmits the page on its assigned setup channel, allowing the called mobile to recognize its own number.", "The called mobile responds through its base station, and the response reaches the MTSO. The MTSO then sets up the circuit between the calling and called sides, selects an available traffic channel in each cell, and notifies the relevant base stations, which notify their mobile units."], formula: "MTSO → selected BTSs → called mobile response → circuit + traffic-channel assignment" },
      { title: "6. Ongoing calls rely on automatic handoff", sourceRefs: ["00:49:17–00:54:00", "Handoff across cell boundaries"], paragraphs: ["During an ongoing call, the two mobile units exchange voice or data through their respective base stations and the MTSO. If a mobile moves out of one cell and into another, the serving traffic channel must change to a channel assigned by the new base station.", "The network performs this handoff without interrupting the call or alerting the user. Mobility therefore changes radio resources while the application-level conversation continues."], formula: "mobile leaves serving cell → new BTS/traffic channel → call continues" },
      { title: "7. Blocking, drops, remote subscribers, and radio power define limits", sourceRefs: ["00:58:12–01:16:55", "Signal power, interference, and Friis model"], paragraphs: ["Call blocking occurs when a mobile cannot obtain a traffic channel after the configured retry attempts. Intentional termination informs the MTSO and releases traffic channels, while a call drop can result from interference or received signal strength falling below a required RSSI threshold.", "For fixed or remote mobile subscribers, the MTSO can use the PSTN or connect through another remote MTSO over a telephone or dedicated line. The lecture closes by balancing received power against interference: the signal must be strong enough for the receiver but contained so it does not disturb co-channel cells. The Friis model makes received power decrease with distance and depend on transmit power, antenna gains, wavelength, and separation."], formula: "Pᵣ = PₜGₜGᵣλ²/(4π)²d²; adequate RSSI ∧ bounded spill-over power" },
    ],
    courseSignals: { assignments: [], homework: [], labs: [], projects: [], references: [], studentQuestions: [] },
    insights: [
      { label: "Architecture", title: "The MTSO is the coordination point", body: "BTSs provide cell-level radio access, while the MTSO/MSC coordinates registration, paging, circuit setup, traffic assignment, handoff, and release." },
      { label: "Channels", title: "Setup and payload are separated", body: "Control channels establish and maintain the relationship; traffic channels carry the actual voice or data." },
      { label: "Mobility", title: "Handoff is a transparent resource change", body: "The user experiences one call even though the serving base station and traffic channel may change." },
      { label: "Radio", title: "Reliable power is a bounded range", body: "Received power must exceed the quality threshold without becoming so wide or strong that it creates co-channel interference." },
    ],
    resources: [
      { kind: "read", title: "3GPP — 5G System Overview", url: "https://www.3gpp.org/technologies/5g-system-overview", detail: "Standards context for cellular architecture, radio access, mobility, and core-network evolution." },
      { kind: "read", title: "ITU-R M.2083 — IMT Vision", url: "https://www.itu.int/rec/R-REC-M.2083", detail: "Public mobile-systems context connecting capacity, mobility, and service requirements to cellular evolution." },
      { kind: "read", title: "FCC — Wireless Telecommunications", url: "https://www.fcc.gov/wireless-telecommunications", detail: "Public regulatory context for wireless services, spectrum, and radio-system deployment." },
      { kind: "practice", title: "GNU Radio Tutorials", url: "https://wiki.gnuradio.org/index.php/Tutorials", detail: "Open flowgraph practice for observing signal power, channels, noise, and propagation effects." },
    ],
    keyTerms: [
      { term: "BTS", definition: "Base Transceiver Station, the cell-side radio unit that transmits and receives with mobile units." },
      { term: "MTSO/MSC", definition: "Mobile switching and coordination center that serves multiple cells and manages calls and mobility." },
      { term: "Control channel", definition: "A setup and coordination channel carrying overhead information between a mobile and the network." },
      { term: "Traffic channel", definition: "The assigned channel carrying a call's voice or data payload." },
      { term: "Paging", definition: "The MTSO-directed process by which selected base stations signal the called mobile." },
      { term: "Handoff", definition: "Transfer of an active connection from one serving base station to another." },
      { term: "RSSI", definition: "Received Signal Strength Indicator, used as a threshold for reliable radio reception." },
      { term: "Friis equation", definition: "A free-space model relating received power to transmit power, antenna gains, wavelength, and distance." },
    ],
    quiz,
  },
};
