const releaseVersion = new URL(import.meta.url).searchParams.get("v") || "dev";
const [
  { catalog: catalogBase },
  { localizeCatalog },
  { lectureNotes },
  { capstones },
  { ui },
  { semesterSchedule, scheduleBySlug, meetingsForCourse },
  { courseResources },
  { openLearningResources },
  { programProfile }
] = await Promise.all([
  import(`../data/catalog.js?v=${releaseVersion}`),
  import(`../data/catalog-hi.js?v=${releaseVersion}`),
  import(`../data/lecture-notes.js?v=${releaseVersion}`),
  import(`../data/capstones.js?v=${releaseVersion}`),
  import(`../data/i18n.js?v=${releaseVersion}`),
  import(`../data/schedule.js?v=${releaseVersion}`),
  import(`../data/resources.js?v=${releaseVersion}`),
  import(`../data/open-resources.js?v=${releaseVersion}`),
  import(`../data/program.js?v=${releaseVersion}`)
]);

const main = document.querySelector("#main-content");
const searchButton = document.querySelector("#search-button");
const searchPanel = document.querySelector("#search-panel");
const searchInput = document.querySelector("#site-search");
const searchResults = document.querySelector("#search-results");
const scrollFab = document.querySelector("#scroll-fab");
const timeZoneToggle = document.querySelector("#time-zone-toggle");
const navLinks = [...document.querySelectorAll("[data-nav]")];
let scheduleWeekIndex = null;
let lastScrollY = 0;
let notesTocLastY = 0;
let notesTocLastDirection = 0;
let notesTocDirectionalDistance = 0;
let notesTocAutoLockUntil = 0;
let scrollFrame = 0;
const timeZonePreferenceKey = "lecture-atlas-time-zone";
const hindiDateLocale = "hi-IN-u-nu-deva";
const notesTocCollapseDelta = 24;
const notesTocExpandDelta = 48;
const notesTocExpandBuffer = 240;
const notesTocTransitionLockMs = 420;
let preferredTimeZone = (() => {
  try {
    const saved = window.localStorage.getItem(timeZonePreferenceKey);
    return saved === "india" || saved === "chicago" ? saved : "chicago";
  } catch {
    return "chicago";
  }
})();

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

// Render the TeX-like notation used by lecture formulas; MathJax handles the
// full mathematical layout while this fallback keeps inline indices readable.
function formulaMarkup(formula) {
  const source = String(formula || "");
  // Normalize the compact notation used in the note data into explicit,
  // braced TeX subscripts.  Braces are important here: a later replacement
  // must never rewrite the `max_` inside the argmax operator and leave
  // MathJax with an orphaned `_` (which renders as a TeX error).
  const tex = source
    .replace(/\bargmax_(?:\{([^{}]+)\}|([A-Za-z0-9]+))/g, (_, braced, plain) =>
      `\\operatorname*{arg\\,max}_{${braced || plain}}`)
    .replace(/\bmax_(?:\{([^{}]+)\}|([A-Za-z0-9]+))/g, (_, braced, plain) =>
      `\\max_{${braced || plain}}`)
    .replace(/\bsum_(?:\{([^{}]+)\}|([A-Za-z0-9]+))/g, (_, braced, plain) =>
      `\\sum_{${braced || plain}}`)
    .replace(/\bDelta/g, "\\Delta")
    .replace(/\b(Alpha|Beta|Gamma|alpha|beta|gamma|epsilon|theta|lambda|mu|sigma)\b/g, (name) => `\\${name}`)
    // Only expand postfix stars on symbols (q*, V*); do not touch the
    // asterisk in TeX command names such as `\\operatorname*`.
    .replace(/\b([A-Za-z])\*/g, "$1^{*}");
  return `<div class="formula" role="math" aria-label="${escapeHtml(source)}"><span class="formula__label">Formula</span><span class="formula__text">\\(${escapeHtml(tex)}\\)</span></div>`;
}

function inlineMathText(value = "") {
  return escapeHtml(value)
    .replace(/\bDelta_/g, "Δ_")
    .replace(/([A-Za-zΔδ][A-Za-z0-9]*)_([A-Za-z0-9]+)/g, "$1<sub>$2</sub>")
    .replace(/([A-Za-z])\^([A-Za-z0-9+−-]+)/g, "$1<sup>$2</sup>")
    .replace(/([A-Za-z])\*/g, "$1<sup>*</sup>");
}

function icon(name) {
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2v4m12-4v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6m0-6-9 9"/><path d="M19 13v7H4V5h7"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 10 8-6 8 6v10H4Z"/><path d="M9 20v-6h6v6"/></svg>',
    subjects: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2Z"/><path d="M8 8h8M8 12h7M5 17h14"/></svg>',
    video: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3Z"/></svg>',
    file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6Z"/><path d="M14 2v5h5"/></svg>'
  };
  return icons[name] ?? "";
}

function parseRoute() {
  const raw = location.hash.slice(1) || "/";
  const [rawPath, anchor = ""] = raw.split("#", 2);
  const parts = rawPath.split("/").filter(Boolean);
  const hasLanguagePrefix = parts[0] === "en" || parts[0] === "hi" || parts[0] === "bi";
  const rest = hasLanguagePrefix ? parts.slice(1) : parts;
  const route = `/${rest.join("/")}`.replace(/\/$/, "") || "/";
  if (hasLanguagePrefix) location.replace(anchor ? hrefWithAnchor("", route, anchor) : href("", route));
  return { lang: "", route, parts: rest, anchor };
}

const href = (_lang, path = "/") => `#${path}`;
const hrefWithAnchor = (lang, path, anchor) => `${href(lang, path)}#${anchor}`;
const coursePath = (course) => `/course/${course.routeSlug || course.slug}`;
const courseResourcesPath = (course) => `/resources/${course.routeSlug || course.slug}`;
const compareLectureChronology = (left, right) =>
  left.date.localeCompare(right.date)
  || String(left.sourceRecordedAt || "").localeCompare(String(right.sourceRecordedAt || ""))
  || String(left.sourceFilename || "").localeCompare(String(right.sourceFilename || ""))
  || left.id.localeCompare(right.id);
const compareCatalogLectures = (left, right) =>
  compareLectureChronology(left, right)
  || left.course.code.localeCompare(right.course.code)
  || String(left.sourceFilename || "").localeCompare(String(right.sourceFilename || ""));
const courseFromRouteSegment = (segment, courses) => courses.find((course) =>
  segment === course.routeSlug || segment === course.slug
);
const courseGroupRank = { EAI: 0, ECC: 1, ECS: 2, EBB: 3 };
const courseDisplayRank = (course) => {
  const [group = "ZZZ", number = "9999"] = String(course.code).split(/\s*\/\s*/)[0].trim().split(/\s+/);
  return [courseGroupRank[group] ?? 99, Number.parseInt(number, 10) || 9999, course.code, course.title]
    .map((value, index) => index < 2 ? value : String(value).toLocaleLowerCase("en-US"));
};
const compareCourseDisplayOrder = (left, right) => {
  const leftRank = courseDisplayRank(left);
  const rightRank = courseDisplayRank(right);
  return leftRank[0] - rightRank[0]
    || leftRank[1] - rightRank[1]
    || leftRank[2].localeCompare(rightRank[2])
    || leftRank[3].localeCompare(rightRank[3]);
};
const bilingualUi = Object.fromEntries(
  Object.keys(ui.en).map((key) => [key, `${ui.en[key]} · ${ui.hi[key]}`])
);
const hinglishUi = Object.fromEntries(
  Object.keys(ui.en).map((key) => [key, ui.hi[key] || ui.en[key]])
);
function bilingualCopy(english, hindi, tag = "span", className = "") {
  return `<${tag} class="bilingual-copy${className ? ` ${className}` : ""}"><span lang="en">${escapeHtml(english)}</span><span lang="hi">${escapeHtml(hindi)}</span></${tag}>`;
}

function compactBilingualCopy(english, hindi, tag = "span", className = "") {
  const hindiText = String(hindi || "").trim();
  const devanagariTokens = hindiText.match(/[\u0900-\u097F]+/g) || [];
  const latinTokens = hindiText.match(/[A-Za-z][A-Za-z0-9+.-]*/g) || [];
  const normalizedEnglish = String(english || "").trim().toLocaleLowerCase("en-US");
  const normalizedHindi = hindiText.toLocaleLowerCase("hi-IN");
  const addsMeaningfulHindi = devanagariTokens.length > 0
    && !(latinTokens.length >= 2 && devanagariTokens.length <= 1);

  if (!addsMeaningfulHindi || normalizedEnglish === normalizedHindi) {
    return `<${tag} class="single-copy${className ? ` ${className}` : ""}" lang="en">${escapeHtml(english)}</${tag}>`;
  }
  return bilingualCopy(english, hindi, tag, className);
}

function bilingualMarkup(english, hindi, className = "") {
  return `<div class="bilingual-copy bilingual-copy--markup${className ? ` ${className}` : ""}"><div lang="en">${english}</div><div lang="hi">${hindi}</div></div>`;
}

const fullBilingualCopy = bilingualCopy;
const fullBilingualMarkup = bilingualMarkup;

// Selective Hinglish remains useful for compact archive rows and open-resource
// cards. The lecture-detail renderer intentionally uses the full bilingual
// helpers above so substantive note content is never collapsed to one language.
function hinglishValue(english, hindi) {
  const hindiText = String(hindi ?? "").trim();
  return { text: hindiText || String(english ?? "").trim(), lang: hindiText ? "hi" : "en" };
}

function hinglishCopy(english, hindi, tag = "span", className = "") {
  const visible = hinglishValue(english, hindi);
  return `<${tag} class="hinglish-copy${className ? ` ${className}` : ""}" lang="${visible.lang}">${escapeHtml(visible.text)}</${tag}>`;
}

function hinglishMarkup(english, hindi, className = "") {
  const visible = hinglishValue(english, hindi);
  return `<div class="hinglish-copy hinglish-copy--markup${className ? ` ${className}` : ""}" lang="${visible.lang}">${visible.text}</div>`;
}

function context() {
  const hindiCatalog = localizeCatalog(catalogBase, "hi");
  const catalog = {
    ...catalogBase,
    courses: [...catalogBase.courses].sort(compareCourseDisplayOrder).map((course) => {
      const hindiCourse = hindiCatalog.courses.find((item) => item.slug === course.slug);
      return {
        ...course,
        hi: hindiCourse,
        lectures: course.lectures.map((lecture) => ({
          ...lecture,
          hi: hindiCourse.lectures.find((item) => item.id === lecture.id)
        })).sort(compareLectureChronology)
      };
    })
  };
  const allLectures = catalog.courses.flatMap((course) =>
    course.lectures.map((lecture) => ({ ...lecture, course }))
  ).sort(compareCatalogLectures);
  return {
    lang: "",
    text: bilingualUi,
    catalog,
    allLectures,
    notes: lectureNotes,
    locale: "en-US"
  };
}

function statusPill(course) {
  return `<span class="status status--${escapeHtml(course.status)}"><i></i>${escapeHtml(course.statusLabel)} · ${escapeHtml(course.hi.statusLabel)}</span>`;
}

function scheduleDays(schedule) {
  const days = new Map();
  meetingsForCourse(schedule).forEach((meeting) => meeting.weekdayLabels.en.forEach((day, index) => {
    days.set(day, { en: day, hi: meeting.weekdayLabels.hi[index] ?? day });
  }));
  return [...days.values()];
}

function scheduleDaysCopy(schedule) {
  const days = scheduleDays(schedule);
  return bilingualCopy(days.map((day) => day.en).join(" & "), days.map((day) => day.hi).join(", "));
}

function scheduleJoinActions(schedule, text, className = "") {
  const meetings = meetingsForCourse(schedule);
  return meetings.map((meeting) => {
    const label = meetings.length === 1
      ? text.joinSession
      : compactBilingualCopy(`Join ${meeting.weekdayLabels.en[0]}`, `शामिल हों · ${meeting.weekdayLabels.hi[0]}`, "span");
    return `<a class="button button--primary${className ? ` ${className}` : ""}" href="${escapeHtml(meeting.joinUrl)}" target="_blank" rel="noreferrer">${label} ${icon("external")}</a>`;
  }).join("");
}

function scheduleMeta(course, lang, text, compact = false) {
  const schedule = scheduleBySlug(course.slug);
  return `<dl class="course-meta${compact ? " course-meta--stack" : ""}">
    <div class="course-meta__days"><dt>${icon("calendar")} ${text.classDays}</dt><dd>${scheduleDaysCopy(schedule)}</dd></div>
    <div class="course-meta__zones">${meetingsForCourse(schedule).map((meeting) => timeZonePresentation(course, "compact", null, meeting)).join("")}</div>
  </dl>`;
}

function courseActions(course, lang, text) {
  const schedule = scheduleBySlug(course.slug);
  return `<div class="card-actions">
    ${scheduleJoinActions(schedule, text)}
    <a class="button button--quiet-light" href="${escapeHtml(course.recordingUrl)}" target="_blank" rel="noreferrer">${text.allRecordings} ${icon("video")}</a>
    <a class="button button--quiet-light" href="${href(lang, coursePath(course))}">${text.openSubject} ${icon("arrow")}</a>
  </div>`;
}

function courseCard(course, lang, text, featured = false) {
  const publishedCount = course.lectures.filter((lecture) => lecture.status === "published").length;
  return `<article class="course-card course-card--${course.accent}${featured ? " course-card--featured" : ""}">
    <div class="course-card__top"><span class="course-monogram">${escapeHtml(course.icon)}</span>${statusPill(course)}</div>
    <p class="eyebrow">${escapeHtml(course.code)}</p>
    ${compactBilingualCopy(course.title, course.hi.title, "h3")}
    ${bilingualCopy(course.note, course.hi.note, "div", "course-note")}
    <a class="course-card__notes" href="${hrefWithAnchor(lang, coursePath(course), "notes")}" aria-label="${escapeHtml(`${publishedCount} ${text.notes}`)}"><strong>${publishedCount}</strong> ${text.notes}</a>
    ${scheduleMeta(course, lang, text)}
    ${courseActions(course, lang, text)}
  </article>`;
}

function renderHome(ctx) {
  const { lang, text, catalog, allLectures } = ctx;
  const notesReady = allLectures.filter((lecture) => lecture.status === "published").length;
  main.innerHTML = `<section class="hero">
      <div class="hero-copy">
        <p class="kicker"><span></span>${text.homeKicker}</p>
        ${bilingualMarkup(
          `<h1>${escapeHtml(ui.en.heroLine1)}<br><em>${escapeHtml(ui.en.heroLine2)}</em> ${escapeHtml(ui.en.heroLine3)}</h1><p class="hero-intro">${escapeHtml(ui.en.heroIntro)}</p>`,
          `<h1>${escapeHtml(ui.hi.heroLine1)}<br><em>${escapeHtml(ui.hi.heroLine2)}</em> ${escapeHtml(ui.hi.heroLine3)}</h1><p class="hero-intro">${escapeHtml(ui.hi.heroIntro)}</p>`,
          "bilingual-copy--hero"
        )}
        <div class="hero-actions">
          <a class="button button--primary" href="${href(lang, "/courses")}">${text.exploreSubjects} ${icon("arrow")}</a>
          <a class="button button--quiet" href="${href(lang, "/schedule")}">${icon("calendar")} ${text.openSchedule}</a>
        </div>
      </div>
      <ul class="hero-summary" aria-label="${escapeHtml(text.overview)}">
        <li><strong>${catalog.courses.length}</strong><span>${text.subjectsCount}</span></li>
        <li><strong>${notesReady}</strong><span>${text.notesPublished}</span></li>
        <li><strong>25</strong><span>${text.explainedMcqs}</span></li>
      </ul>
    </section>
    <section class="section-shell home-notes">
      <div class="section-heading"><div><p class="eyebrow">${text.currentSemester}</p>${bilingualCopy(ui.en.notesHomeHeading, ui.hi.notesHomeHeading, "h2")}</div><a href="${href(lang, "/courses")}">${text.viewAllSubjects} ${icon("arrow")}</a></div>
      ${bilingualCopy(ui.en.notesHomeIntro, ui.hi.notesHomeIntro, "p", "home-notes__intro")}
      <div class="notes-accordion-list">${catalog.courses.map((course) => notesAccordion(course, lang, text)).join("")}</div>
    </section>`;
}

function lectureRow(lecture, lang, text) {
  const available = lecture.status === "published";
  return `<article class="lecture-row ${available ? "" : "lecture-row--pending"}">
    <div class="lecture-number">${String(lecture.number).padStart(2, "0")}</div>
    <div class="lecture-row__body"><p class="eyebrow">${escapeHtml(lecture.displayDate)} · ${escapeHtml(lecture.hi.displayDate)} · ${escapeHtml(lecture.duration)}</p>${hinglishCopy(lecture.title, lecture.hi.title, "h3")}<ul class="topic-chips">${lecture.overview.map((item, index) => `<li>${hinglishCopy(item, lecture.hi.overview[index])}</li>`).join("")}</ul></div>
    ${available ? `<div class="lecture-row__actions"><a class="card-link card-link--notes" href="${href(lang, `/lecture/${lecture.id}`)}">${text.readNotes} ${icon("arrow")}</a><a class="card-link card-link--recording" href="${escapeHtml(lecture.recordingUrl)}" target="_blank" rel="noreferrer">${text.watchRecording} ${icon("video")}</a></div>` : `<span class="status status--processing"><i></i>${escapeHtml(lecture.statusLabel)} · ${escapeHtml(lecture.hi.statusLabel)}</span>`}
  </article>`;
}

function lectureArchive(course, lang, text, includePending = true) {
  const lectures = includePending ? course.lectures : course.lectures.filter((lecture) => lecture.status === "published");
  return lectures.length
    ? `<div class="lecture-list">${lectures.map((lecture) => lectureRow(lecture, lang, text)).join("")}</div>`
    : `<div class="empty-state empty-state--compact"><span>${escapeHtml(course.icon)}</span><h3>${text.noNotes}</h3>${bilingualCopy(course.note, course.hi.note, "p")}</div>`;
}

function hindiNumerals(value) {
  return String(value).replace(/\d/g, (digit) => "०१२३४५६७८९"[Number(digit)]);
}

function hindiWeekdayLabel(label) {
  const weekdays = { Sun: "रविवार", Mon: "सोमवार", Tue: "मंगलवार", Wed: "बुधवार", Thu: "गुरुवार", Fri: "शुक्रवार", Sat: "शनिवार" };
  return String(label).split(" → ").map((part) => part.split(" & ").map((day) => weekdays[day] || day).join(" और ")).join(" → ");
}

function scheduleRibbon(course) {
  const schedule = scheduleBySlug(course.slug);
  const meetings = meetingsForCourse(schedule);
  const showChicago = preferredTimeZone === "chicago";
  const primary = meetings.map((meeting) => {
    const variants = chicagoTimeVariants(course, meeting);
    const current = activeChicagoVariant(variants);
    const indiaRange = clockRange(formatWallClock(meeting.start), formatWallClock(meeting.end));
    const chicagoRangeText = current ? clockRange(current.startTime, current.endTime) : "Time to be confirmed";
    const chicagoDays = chicagoDayLabel(current) || shortDayList(meeting.weekdayLabels.en);
    const chicagoAbbreviation = current?.abbreviation || "CT";
    const english = showChicago
      ? `Chicago · ${chicagoAbbreviation} · ${chicagoDays} · ${chicagoRangeText}`
      : `India · IST · ${shortDayList(meeting.weekdayLabels.en)} · ${indiaRange}`;
    const hindi = showChicago
      ? `शिकागो · ${chicagoAbbreviation} · ${hindiWeekdayLabel(chicagoDays)} · ${hindiNumerals(chicagoRangeText)}`
      : `भारत · IST · ${meeting.weekdayLabels.hi.join(" और ")} · ${hindiNumerals(indiaRange)}`;
    const referenceEnglish = showChicago
      ? `Original IST · ${shortDayList(meeting.weekdayLabels.en)} · ${indiaRange}`
      : `Chicago · ${chicagoAbbreviation} · ${chicagoDays} · ${chicagoRangeText}`;
    const referenceHindi = showChicago
      ? `मूल IST · ${meeting.weekdayLabels.hi.join(" और ")} · ${hindiNumerals(indiaRange)}`
      : `शिकागो · ${chicagoAbbreviation} · ${hindiWeekdayLabel(chicagoDays)} · ${hindiNumerals(chicagoRangeText)}`;
    return { english, hindi, referenceEnglish, referenceHindi };
  });
  return `<span class="notes-accordion__schedule">${icon("calendar")}<span class="notes-accordion__schedule-copy">${primary.map((item) => `${hinglishCopy(item.english, item.hindi, "span")}${hinglishCopy(item.referenceEnglish, item.referenceHindi, "small", "notes-accordion__schedule-reference")}`).join(" · ")}</span></span>`;
}

function notesAccordion(course, lang, text) {
  const published = course.lectures.filter((lecture) => lecture.status === "published");
  return `<details class="notes-accordion notes-accordion--${course.accent}">
    <summary><span class="notes-accordion__marker">${escapeHtml(course.icon)}</span><span class="notes-accordion__title"><span class="eyebrow">${escapeHtml(course.code)}</span>${hinglishCopy(course.title, course.hi.title, "strong")}${scheduleRibbon(course)}</span><span class="notes-accordion__meta"><span>${published.length} ${text.notes}</span>${icon("arrow")}</span></summary>
    <div class="notes-accordion__body">${hinglishCopy(course.note, course.hi.note, "p", "notes-accordion__description")}${lectureArchive(course, lang, text, false)}<a class="button button--quiet-light" href="${href(lang, coursePath(course))}">${text.openSubject} ${icon("arrow")}</a></div>
  </details>`;
}

function resourcesForCourse(slug) {
  return courseResources.filter((resource) => resource.course === slug);
}

function openResourcesForCourse(slug) {
  return openLearningResources[slug] || [];
}

function resourceCard(resource, lang, text, course = null) {
  const titleHi = resource.titleHi || resource.title;
  const descriptionHi = resource.descriptionHi || resource.description;
  const courseSegment = course?.routeSlug || resource.course;
  return `<article class="resource-card">
    <span class="resource-card__icon">${icon(resource.kind === "pdf" ? "file" : "video")}</span>
    <div><p class="eyebrow">${escapeHtml(resource.extension.toUpperCase())}${resource.date ? ` · ${escapeHtml(resource.date)}` : ""}</p>${hinglishCopy(resource.title, titleHi, "h3")}${resource.description ? hinglishCopy(resource.description, descriptionHi, "p") : ""}</div>
    <a class="card-link" href="${href(lang, `/resource/${courseSegment}/${resource.id}`)}">${text.openViewer} ${icon("arrow")}</a>
  </article>`;
}

function openResourceIcon(resource) {
  return icon(resource.youtubeId ? "video" : resource.kind.toLocaleLowerCase().includes("book") ? "file" : "subjects");
}

function openResourceLinks(resource, text) {
  const links = resource.links?.length ? resource.links : [{ label: text.openSource, url: resource.url }];
  return links.map((link) => `<a class="open-resource-card__link" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} ${icon("external")}</a>`).join("");
}

function openResourceCard(resource, text) {
  const media = resource.youtubeId
    ? `<div class="open-resource-card__media"><iframe src="https://www.youtube-nocookie.com/embed/${escapeHtml(resource.youtubeId)}?rel=0" title="${escapeHtml(resource.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`
    : `<div class="open-resource-card__icon" aria-hidden="true">${openResourceIcon(resource)}</div>`;
  return `<article class="open-resource-card${resource.youtubeId ? " open-resource-card--video" : ""}">
    ${media}
    <div class="open-resource-card__body">
      <div class="open-resource-card__meta">${hinglishCopy(resource.provider, resource.providerHi || resource.provider, "span", "open-resource-card__provider")}${hinglishCopy(resource.kind, resource.kindHi || resource.kind, "span", "open-resource-card__kind")}${hinglishCopy(resource.access, resource.accessHi || resource.access, "span", "open-resource-card__access")}</div>
      ${hinglishCopy(resource.title, resource.titleHi || resource.title, "h3", "open-resource-card__title")}
      ${hinglishCopy(resource.description, resource.descriptionHi || resource.description, "p", "open-resource-card__description")}
      <div class="open-resource-card__links">${resource.youtubeId ? `<span class="open-resource-card__watch">${text.watchHere}</span>` : ""}${openResourceLinks(resource, text)}</div>
    </div>
  </article>`;
}

function openResourceSection(course, text) {
  const resources = openResourcesForCourse(course.slug);
  if (!resources.length) return "";
  const resourceText = { ...text, ...hinglishUi };
  return `<details class="open-resource-panel">
    <summary><span><strong>${resourceText.openResourcesHeading}</strong><small>${resourceText.openResourcesIntro}</small></span><em>${resources.length} ${resourceText.openResourcesCount} ${icon("arrow")}</em></summary>
    <div class="open-resource-list">${resources.map((resource) => openResourceCard(resource, resourceText)).join("")}</div>
  </details>`;
}

function renderCourse(slug, ctx) {
  const { lang, text, catalog } = ctx;
  const course = catalog.courses.find((item) => item.slug === slug);
  if (!course) return renderNotFound(ctx);
  const resources = resourcesForCourse(slug);
  const schedule = scheduleBySlug(slug);
  const publishedCount = course.lectures.filter((lecture) => lecture.status === "published").length;
  main.innerHTML = `<section class="course-hero course-hero--${course.accent}">
      <div><a class="back-link" href="${href(lang, "/courses")}">← ${text.allSubjects}</a><p class="kicker"><span></span>${escapeHtml(course.code)}</p>${compactBilingualCopy(course.title, course.hi.title, "h1")}${bilingualCopy(course.note, course.hi.note, "div", "course-hero__description")}<div class="course-hero__actions">${scheduleJoinActions(schedule, text)}<a class="button button--quiet" href="${escapeHtml(course.recordingUrl)}" target="_blank" rel="noreferrer">${text.allRecordings} ${icon("external")}</a></div></div>
      <dl class="course-hero__facts">
        <div class="course-hero__fact course-hero__fact--days"><dt>${icon("calendar")} ${text.classDays}</dt><dd>${scheduleDaysCopy(schedule)}</dd></div>
        <div class="course-hero__fact course-hero__fact--zones"><div class="time-zone-panel-list">${meetingsForCourse(schedule).map((meeting) => timeZonePresentation(course, "hero", null, meeting)).join("")}</div></div>
        <div class="course-hero__fact course-hero__fact--notes"><dt>${text.notes}</dt><dd>${publishedCount} ${text.published}</dd></div>
      </dl>
    </section>
    <section id="notes" class="section-shell course-content">
      <div class="section-heading"><div><p class="eyebrow">${text.daywiseArchive}</p><h2>${text.lectureNotes}</h2></div><a class="external-link" href="${escapeHtml(course.recordingUrl)}" target="_blank" rel="noreferrer">${text.allRecordings} ${icon("external")}</a></div>
      ${lectureArchive(course, lang, text)}
    </section>
    <section class="section-shell section-shell--compact">
      <div class="section-heading"><div><p class="eyebrow">${text.resources}</p><h2>${text.resourcesForCourse}</h2></div><a href="${href(lang, courseResourcesPath(course))}">${text.browseResources} ${icon("arrow")}</a></div>
      ${resources.length ? `<div class="resource-grid">${resources.map((resource) => resourceCard(resource, lang, text, course)).join("")}</div>` : `<div class="empty-state empty-state--compact"><span>${icon("file")}</span><h3>${text.noResources}</h3></div>`}
      ${openResourceSection(course, text)}
    </section>`;
}

function renderCourses(ctx) {
  const { lang, text, catalog } = ctx;
  main.innerHTML = `<section class="page-intro"><p class="kicker"><span></span>${text.homeKicker}</p>${bilingualMarkup(`<h1>${escapeHtml(ui.en.threeSubjects)}<br>${escapeHtml(ui.en.oneSystem)}</h1><p>${escapeHtml(ui.en.coursesIntro)}</p>`, `<h1>${escapeHtml(ui.hi.threeSubjects)}<br>${escapeHtml(ui.hi.oneSystem)}</h1><p>${escapeHtml(ui.hi.coursesIntro)}</p>`, "bilingual-copy--intro")}</section><section class="section-shell"><div class="course-grid course-grid--all">${catalog.courses.map((course) => courseCard(course, lang, text)).join("")}</div></section>`;
}

function signalCards(notes, text, readerCopy = hinglishCopy) {
  const signalLabels = [["assignments", text.assignments], ["homework", text.homework], ["labs", text.labs], ["projects", text.projects], ["references", text.instructorReferences], ["studentQuestions", text.studentQuestions]];
  return signalLabels.map(([key, label]) => {
    const englishItems = notes.en.courseSignals[key];
    const hindiItems = notes.hi?.courseSignals?.[key] || englishItems;
    return `<article class="signal-card"><h3>${label}</h3>${englishItems.length ? `<div>${englishItems.map((item, index) => {
      const hindi = hindiItems[index];
      return key === "studentQuestions"
        ? `<section><time>${escapeHtml(item.time)}</time>${readerCopy(item.question, hindi.question, "strong")}${readerCopy(item.response, hindi.response, "p")}</section>`
        : `<section><time>${escapeHtml(item.time)}</time>${readerCopy(item.title, hindi.title, "strong")}${readerCopy(item.detail, hindi.detail, "p")}</section>`;
    }).join("")}</div>` : `<p class="signal-empty">${text.noneMentioned}</p>`}</article>`;
  }).join("");
}

function youtubeId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1).split("/")[0];
    if (parsed.hostname.endsWith("youtube.com")) return parsed.searchParams.get("v") || (parsed.pathname.startsWith("/embed/") ? parsed.pathname.split("/")[2] : null);
  } catch { return null; }
  return null;
}

function studyResource(item, hindi, text, readerCopy = hinglishCopy) {
  hindi ||= item;
  const videoId = youtubeId(item.url);
  if (videoId) {
    return `<article class="video-resource"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${escapeHtml(videoId)}" title="${escapeHtml(item.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="video-resource__copy"><span>${text.watchHere}</span>${readerCopy(item.title, hindi.title, "h3")}${readerCopy(item.creator, hindi.creator, "p")}${readerCopy(item.why, hindi.why, "small")}<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${text.openYouTube} ${icon("external")}</a></div></article>`;
  }
  return `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer"><span>${escapeHtml(item.type)} · ${escapeHtml(hindi.type)}</span><div>${readerCopy(item.title, hindi.title, "h3")}${readerCopy(item.creator, hindi.creator, "p")}${readerCopy(item.why, hindi.why, "small")}</div>${icon("external")}</a>`;
}

function capstoneSection(id, text, readerCopy = hinglishCopy) {
  const projects = capstones[id];
  if (!projects?.en) return "";
  const { en } = projects;
  const hi = projects.hi || en;
  const pairedList = (english = [], hindi = []) => english.map((item, index) => `<li>${readerCopy(item, hindi[index] || item)}</li>`).join("");
  const listBlock = (label, english, hindi, tag = "ul") => english?.length
    ? `<div${tag === "ol" ? ` class="build-plan"` : ""}><h3>${label}</h3><${tag}>${pairedList(english, hindi)}</${tag}></div>` : "";
  const optionalText = (label, english, hindi) => english
    ? `<div><h3>${label}</h3>${readerCopy(english, hindi || english, "p")}</div>` : "";
  const optionalGrid = [
    optionalText(text.novelty, en.novelty, hi.novelty),
    listBlock(text.stack, en.stack, hi.stack),
    listBlock(text.milestones, en.milestones, hi.milestones),
    optionalText(text.success, en.success, hi.success)
  ].join("");
  return `<section id="project" class="notes-section project-brief"><p class="eyebrow">${text.capstoneLens}</p>${readerCopy(en.title, hi.title, "h2")}${readerCopy(en.pitch, hi.pitch, "div", "project-pitch")}<div class="project-grid"><div><h3>${text.problem}</h3>${readerCopy(en.problem, hi.problem, "p")}</div><div><h3>${text.learningValue}</h3>${readerCopy(en.learning, hi.learning, "p")}</div>${listBlock(text.mvp, en.mvp, hi.mvp)}${listBlock(text.stretchGoals, en.stretch, hi.stretch)}</div>${listBlock(text.buildPlan, en.plan, hi.plan, "ol")}${optionalGrid ? `<div class="project-grid project-grid--optional">${optionalGrid}</div>` : ""}</section>`;
}

function renderLecture(id, ctx) {
  const { lang, text: chromeText, allLectures, notes: noteCollection } = ctx;
  // Notes use the canonical English UI labels; the rest of the site may retain
  // its compact bilingual chrome where that adds value.
  const text = ui.en;
  // Lecture notes are intentionally published as a single English source.
  // Keep the renderer centralized so compact page chrome can remain unchanged.
  const englishCopy = (english, _secondary, tag = "span", className = "") => `<${tag}${className ? ` class="${className}"` : ""}>${inlineMathText(english)}</${tag}>`;
  const englishMarkup = (english, _secondary, className = "") => `<div${className ? ` class="${className}"` : ""}>${english}</div>`;
  const bilingualCopy = englishCopy;
  const compactBilingualCopy = englishCopy;
  const bilingualMarkup = englishMarkup;
  const found = allLectures.find((lecture) => lecture.id === id && lecture.status === "published");
  const notes = noteCollection[id];
  if (!found || !notes) return renderNotFound(ctx);
  const { en } = notes;
  const hi = en;
  const renderNotes = { ...notes, hi: en };
  const navItems = [["coverage", text.coverage], ["slides", text.slideTrail], ["summary", text.fullSummary], ["signals", text.courseSignals], ["insights", text.insights], ["resources", text.furtherStudy], ["quiz", text.mcqs]];
  if (capstones[id]) navItems.push(["project", text.capstone]);
  main.innerHTML = `<header class="lecture-hero"><div class="lecture-hero__meta"><a class="back-link" href="${href(lang, coursePath(found.course))}">← ${escapeHtml(found.course.code)}</a><span>${text.lecture} ${String(found.number).padStart(2, "0")}</span><span>${escapeHtml(found.displayDate)}</span></div>${compactBilingualCopy(en.title, hi.title, "h1")}${bilingualCopy(en.lede, hi.lede, "div", "lecture-hero__lede")}<dl><div><dt>${text.recording}</dt><dd>${escapeHtml(found.duration)}</dd></div><div><dt>${text.instructionalInterval}</dt><dd>${escapeHtml(en.instructionalInterval)}</dd></div><div><dt>${text.reviewLevel}</dt><dd>${compactBilingualCopy(en.reviewLevel, hi.reviewLevel)}</dd></div></dl></header>
    <div class="notes-layout"><aside class="notes-toc" id="notes-toc"><button class="notes-toc__toggle" type="button" aria-expanded="true" aria-controls="notes-toc-panel"><span class="notes-toc__toggle-label">${text.onThisPage}</span><span class="notes-toc__toggle-icon" aria-hidden="true">☰</span></button><div class="notes-toc__panel" id="notes-toc-panel"><nav>${navItems.map(([anchor, label]) => `<a href="#${anchor}" data-scroll="${anchor}">${label}</a>`).join("")}</nav></div></aside><article class="notes-article">
      <section id="coverage" class="notes-section"><p class="eyebrow">${text.highLevelCoverage}</p><h2>${text.lectureAtGlance}</h2><div class="coverage-grid">${en.coverage.map((item, index) => `<div><span>${String(index + 1).padStart(2, "0")}</span>${compactBilingualCopy(item.title, hi.coverage[index].title, "h3")}${bilingualCopy(item.body, hi.coverage[index].body, "p")}</div>`).join("")}</div><div class="takeaway"><strong>${text.oneSentence}</strong>${bilingualCopy(en.takeaway, hi.takeaway, "p")}</div></section>
      <section id="slides" class="notes-section"><p class="eyebrow">${text.lectureSourceTrail}</p><h2>${text.slidesTimecodes}</h2>${bilingualCopy(ui.en.slidesIntro, ui.hi.slidesIntro, "div", "section-intro")}<div class="slide-trail">${en.slideTrail.map((slide, index) => `<article><time>${escapeHtml(slide.time)}</time><div>${compactBilingualCopy(slide.title, hi.slideTrail[index].title, "h3")}${bilingualCopy(slide.note, hi.slideTrail[index].note, "p")}</div></article>`).join("")}</div></section>
      <section id="summary" class="notes-section"><p class="eyebrow">${text.completeSummary}</p><h2>${text.followArgument}</h2>${en.summary.map((section, index) => { const hindi = hi.summary[index]; return `<section class="summary-block">${compactBilingualCopy(section.title, hindi.title, "h3")}${section.sourceRefs?.length ? `<div class="source-refs">${section.sourceRefs.map((reference) => `<span>${escapeHtml(reference)}</span>`).join("")}</div>` : ""}${bilingualMarkup(`${section.paragraphs.map((paragraph) => `<p>${inlineMathText(paragraph)}</p>`).join("")}${section.points?.length ? `<ul>${section.points.map((point) => `<li>${inlineMathText(point)}</li>`).join("")}</ul>` : ""}`, `${hindi.paragraphs.map((paragraph) => `<p>${inlineMathText(paragraph)}</p>`).join("")}${hindi.points?.length ? `<ul>${hindi.points.map((point) => `<li>${inlineMathText(point)}</li>`).join("")}</ul>` : ""}`)}${section.formula ? formulaMarkup(section.formula) : ""}</section>`; }).join("")}${en.keyTerms?.length ? `<div class="key-terms"><h3>${text.keyTerms}</h3><dl>${en.keyTerms.map((term, index) => `<div>${compactBilingualCopy(term.term, hi.keyTerms[index].term, "dt")}${bilingualCopy(term.definition, hi.keyTerms[index].definition, "dd")}</div>`).join("")}</dl></div>` : ""}</section>
      <section id="signals" class="notes-section"><p class="eyebrow">${text.transcriptSignals}</p><h2>${text.signalsHeading}</h2>${bilingualCopy(ui.en.signalsIntro, ui.hi.signalsIntro, "div", "section-intro")}<div class="signal-grid">${signalCards(renderNotes, text, bilingualCopy)}</div></section>
      <section id="insights" class="notes-section"><p class="eyebrow">${text.addedAnalysis}</p><h2>${text.insightsConnections}</h2><div class="insight-list">${en.insights.map((item, index) => `<article><span>${escapeHtml(item.label)} · ${escapeHtml(hi.insights[index].label)}</span>${compactBilingualCopy(item.title, hi.insights[index].title, "h3")}${bilingualCopy(item.body, hi.insights[index].body, "p")}</article>`).join("")}</div></section>
      <section id="resources" class="notes-section"><p class="eyebrow">${text.referencesStudy}</p><h2>${text.oneLayerDeeper}</h2><div class="resource-list">${en.resources.map((item, index) => studyResource(item, hi.resources[index], text, bilingualCopy)).join("")}</div></section>
      <section id="quiz" class="notes-section"><p class="eyebrow">${text.activeRecall}</p><h2>${text.explained25}</h2>${bilingualCopy(ui.en.quizIntro, ui.hi.quizIntro, "div", "section-intro")}<div class="quiz-list">${en.quiz.map((question, index) => { const hindi = hi.quiz[index]; return `<details class="quiz-item"><summary><span>${String(index + 1).padStart(2, "0")}</span>${bilingualCopy(question.question, hindi.question, "strong")}<i>${text.openAnswer}</i></summary><div class="quiz-body"><ol type="A">${question.options.map((option, optionIndex) => `<li class="${optionIndex === question.answer ? "correct" : ""}">${bilingualCopy(option, hindi.options[optionIndex])}</li>`).join("")}</ol><div class="answer"><strong>${text.correctAnswer}: ${String.fromCharCode(65 + question.answer)}</strong>${bilingualCopy(question.explanation, hindi.explanation, "p")}</div><div class="option-review">${question.optionNotes.map((note, optionIndex) => `<div><strong>${String.fromCharCode(65 + optionIndex)}.</strong>${bilingualCopy(note, hindi.optionNotes[optionIndex], "p")}</div>`).join("")}</div></div></details>`; }).join("")}</div></section>
      ${capstoneSection(id, text, bilingualCopy)}
    </article></div>`;
}

function indiaDateToUtc(dateKey, time) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour, minute) - 330 * 60_000);
}

function dateRange(startKey, endKey) {
  const dates = [];
  const cursor = new Date(`${startKey}T12:00:00Z`);
  const end = new Date(`${endKey}T12:00:00Z`);
  while (cursor <= end) {
    dates.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return dates;
}

const occurrences = semesterSchedule.courses.flatMap((course) => meetingsForCourse(course).flatMap((meeting) =>
  dateRange(semesterSchedule.startsOn, semesterSchedule.endsOn)
    .filter((dateKey) => meeting.weekdays.includes(new Date(`${dateKey}T12:00:00Z`).getUTCDay()))
    .map((dateKey) => ({
      course,
      meeting,
      indiaDate: dateKey,
      start: indiaDateToUtc(dateKey, meeting.start),
      end: indiaDateToUtc(dateKey, meeting.end)
    }))
)).sort((left, right) => left.start - right.start);

function zonedDateKey(date, timeZone = semesterSchedule.displayTimeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date);
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

function mondayKey(dateKey) {
  const date = new Date(`${dateKey}T12:00:00Z`);
  const offset = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - offset);
  return date.toISOString().slice(0, 10);
}

function addDays(dateKey, days) {
  const date = new Date(`${dateKey}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

const scheduleWeeks = [...new Set(occurrences.map((occurrence) => mondayKey(zonedDateKey(occurrence.start))))].sort();

function formatPlainDate(dateKey, locale, options = {}) {
  return new Intl.DateTimeFormat(locale, { timeZone: "UTC", ...options }).format(new Date(`${dateKey}T12:00:00Z`));
}

function formatWallClock(time) {
  return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", hour: "numeric", minute: "2-digit" })
    .format(new Date(`1970-01-01T${time}:00Z`));
}

function shortDayList(days) {
  return days.map((day) => day.slice(0, 3)).join(" & ");
}

function zoneName(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "short" })
    .formatToParts(date).find((part) => part.type === "timeZoneName")?.value ?? "CT";
}

function zoneClock(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", minute: "2-digit" }).format(date);
}

function zoneDay(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", { timeZone, weekday: "short" }).format(date);
}

function chicagoTimeVariants(course, meeting) {
  const variants = new Map();
  occurrences.filter((occurrence) => occurrence.course.slug === course.slug && occurrence.meeting.id === meeting.id).forEach((occurrence) => {
    const startDay = zoneDay(occurrence.start, semesterSchedule.displayTimeZone);
    const endDay = zoneDay(occurrence.end, semesterSchedule.displayTimeZone);
    const crossesDay = zonedDateKey(occurrence.start) !== zonedDateKey(occurrence.end);
    const startTime = zoneClock(occurrence.start, semesterSchedule.displayTimeZone);
    const endTime = zoneClock(occurrence.end, semesterSchedule.displayTimeZone);
    const abbreviation = zoneName(occurrence.start, semesterSchedule.displayTimeZone);
    const key = [startTime, endTime, abbreviation, crossesDay].join("|");
    const variant = variants.get(key) ?? {
      abbreviation,
      startTime,
      endTime,
      crossesDay,
      startDays: new Set(),
      endDays: new Set(),
      first: occurrence,
      last: occurrence,
      occurrences: []
    };
    variant.startDays.add(startDay);
    variant.endDays.add(endDay);
    variant.last = occurrence;
    variant.occurrences.push(occurrence);
    variants.set(key, variant);
  });
  return [...variants.values()].sort((left, right) => left.first.start - right.first.start);
}

function chicagoRange(variant) {
  const start = `${[...variant.startDays].join(" & ")} · ${variant.startTime}`;
  const endDay = variant.crossesDay ? `${[...variant.endDays].join(" & ")} · ` : "";
  return `${start}–${endDay}${variant.endTime}`;
}

function chicagoDayLabel(variant) {
  if (!variant) return "";
  const starts = [...variant.startDays].join(" & ");
  const ends = [...variant.endDays].join(" & ");
  return variant.crossesDay && starts !== ends ? `${starts} → ${ends}` : starts;
}

function clockRange(start, end) {
  return `${start}–${end}`;
}

function monthDay(date) {
  return new Intl.DateTimeFormat("en-US", { timeZone: semesterSchedule.displayTimeZone, month: "short", day: "numeric" }).format(date);
}

function activeChicagoVariant(variants) {
  const now = new Date();
  return variants.find((variant) => variant.occurrences.some((occurrence) => occurrence.end > now))
    ?? variants.at(-1)
    ?? null;
}

function chicagoShiftDate(current, future) {
  if (!current || !future) return "";
  const lastCurrentDate = zonedDateKey(current.last.start);
  const firstFutureDate = zonedDateKey(future.first.start);
  for (let dateKey = addDays(lastCurrentDate, 1); dateKey <= firstFutureDate; dateKey = addDays(dateKey, 1)) {
    const probe = new Date(`${dateKey}T12:00:00Z`);
    if (zoneName(probe, semesterSchedule.displayTimeZone) !== current.abbreviation) {
      return formatPlainDate(dateKey, "en-US", { month: "short", day: "numeric" });
    }
  }
  return monthDay(future.first.start);
}

function occurrenceZoneRange(occurrence, timeZone) {
  const start = `${zoneDay(occurrence.start, timeZone)} · ${zoneClock(occurrence.start, timeZone)}`;
  const endDay = zonedDateKey(occurrence.start, timeZone) === zonedDateKey(occurrence.end, timeZone)
    ? ""
    : `${zoneDay(occurrence.end, timeZone)} · `;
  return `${start}–${endDay}${zoneClock(occurrence.end, timeZone)}`;
}

function timeZonePresentation(course, variant = "standard", occurrence = null, meeting = null) {
  const schedule = scheduleBySlug(course.slug);
  if (occurrence) {
    const showChicago = preferredTimeZone === "chicago";
    const chicagoAbbreviation = zoneName(occurrence.start, semesterSchedule.displayTimeZone);
    const primaryLabel = showChicago ? `Chicago · ${chicagoAbbreviation}` : "India · IST";
    const primaryRange = occurrenceZoneRange(occurrence, showChicago ? semesterSchedule.displayTimeZone : semesterSchedule.sourceTimeZone);
    const referenceLabel = showChicago ? "Original IST" : `Chicago · ${chicagoAbbreviation}`;
    const referenceRange = occurrenceZoneRange(occurrence, showChicago ? semesterSchedule.sourceTimeZone : semesterSchedule.displayTimeZone);
    return `<div class="time-zone-inline time-zone-inline--${variant}">
      <span class="time-zone-inline__zone">${escapeHtml(primaryLabel)}</span>
      <strong>${escapeHtml(primaryRange)}</strong>
      <small>${escapeHtml(referenceLabel)} · ${escapeHtml(referenceRange)}</small>
    </div>`;
  }

  const activeMeeting = meeting ?? meetingsForCourse(schedule)[0];
  const variants = chicagoTimeVariants(course, activeMeeting);
  const current = activeChicagoVariant(variants);
  const futureShift = current && variants.find((item) => item.first.start > current.last.start);
  const indiaRange = clockRange(formatWallClock(activeMeeting.start), formatWallClock(activeMeeting.end));
  const indiaDays = shortDayList(activeMeeting.weekdayLabels.en);
  const showChicago = preferredTimeZone === "chicago";
  const chicagoRangeText = current ? clockRange(current.startTime, current.endTime) : "Time to be confirmed";
  const chicagoDays = chicagoDayLabel(current);
  const chicagoLabel = `Chicago · ${current?.abbreviation ?? "CT"}`;
  const primaryLabel = showChicago ? chicagoLabel : "India · IST";
  const primaryRange = showChicago ? chicagoRangeText : indiaRange;
  const primaryDays = showChicago ? chicagoDays : indiaDays;
  const referenceLabel = showChicago ? "Original IST" : chicagoLabel;
  const referenceRange = showChicago ? indiaRange : chicagoRangeText;
  const referenceDays = showChicago ? indiaDays : chicagoDays;
  return `<section class="time-zone-panel time-zone-panel--${variant} time-zone-panel--${showChicago ? "chicago" : "india"}" aria-label="India and Chicago class times">
    <div class="time-zone-panel__head"><span>${icon("clock")} Class time</span><small>${showChicago ? "Chicago" : "India"} display</small></div>
    <div class="time-zone-panel__primary"><span>${escapeHtml(primaryLabel)}</span><strong>${escapeHtml(primaryRange)}</strong><small>${escapeHtml(primaryDays)}</small></div>
    <p class="time-zone-panel__reference"><span>${escapeHtml(referenceLabel)}</span><strong>${escapeHtml(referenceDays ? `${referenceDays} · ${referenceRange}` : referenceRange)}</strong></p>
    ${futureShift ? `<p class="time-zone-panel__shift"><span>Time changes ${escapeHtml(chicagoShiftDate(current, futureShift))}</span><strong>${escapeHtml(futureShift.abbreviation)} · ${escapeHtml(clockRange(futureShift.startTime, futureShift.endTime))}</strong></p>` : ""}
  </section>`;
}

function renderSchedule(ctx) {
  const { lang, text, locale } = ctx;
  const now = new Date();
  if (scheduleWeekIndex === null) {
    const currentWeek = mondayKey(zonedDateKey(new Date()));
    scheduleWeekIndex = scheduleWeeks.findIndex((week) => week >= currentWeek);
    if (scheduleWeekIndex < 0) scheduleWeekIndex = scheduleWeeks.length - 1;
  }
  scheduleWeekIndex = Math.max(0, Math.min(scheduleWeeks.length - 1, scheduleWeekIndex));
  const weekKey = scheduleWeeks[scheduleWeekIndex];
  const days = Array.from({ length: 7 }, (_, index) => addDays(weekKey, index));
  main.innerHTML = `<section class="page-intro page-intro--schedule"><p class="kicker"><span></span>${text.schedule}</p>${bilingualCopy(ui.en.weeklySchedule, ui.hi.weeklySchedule, "h1")}${bilingualCopy(ui.en.scheduleIntro, ui.hi.scheduleIntro, "div", "page-intro__copy")}</section>
    <section class="section-shell schedule-shell">
      <div class="schedule-toolbar"><button type="button" class="button button--quiet-light" data-week="-1" ${scheduleWeekIndex === 0 ? "disabled" : ""}>← ${text.previousWeek}</button><div><span>${text.weekOf}</span>${bilingualCopy(formatPlainDate(weekKey, "en-US", { month: "long", day: "numeric", year: "numeric" }), formatPlainDate(weekKey, hindiDateLocale, { month: "long", day: "numeric", year: "numeric" }), "strong", "schedule-toolbar__date")}</div><button type="button" class="button button--quiet-light" data-week="1" ${scheduleWeekIndex === scheduleWeeks.length - 1 ? "disabled" : ""}>${text.nextWeek} →</button></div>
      <div class="week-calendar">${days.map((dayKey) => {
        const events = occurrences.filter((occurrence) => zonedDateKey(occurrence.start) === dayKey);
        return `<section class="calendar-day${events.length ? " calendar-day--active" : ""}"><header><span>${formatPlainDate(dayKey, "en-US", { weekday: "short" })} · ${formatPlainDate(dayKey, hindiDateLocale, { weekday: "short" })}</span><strong>${formatPlainDate(dayKey, "en-US", { month: "short", day: "numeric" })}</strong></header><div>${events.length ? events.map((occurrence) => {
          const isPast = occurrence.end <= now;
          return `<article class="calendar-event calendar-event--${occurrence.course.accent}${isPast ? " calendar-event--past" : ""}"><p>${escapeHtml(occurrence.course.code.split(/\s*\/\s*/)[0])}</p>${compactBilingualCopy(occurrence.course.title.en, occurrence.course.title.hi, "h3")}<a class="calendar-event__subject" href="${href(lang, coursePath(occurrence.course))}">${text.openSubject} ${icon("arrow")}</a>${timeZonePresentation(occurrence.course, "calendar", occurrence)}${isPast ? `<span class="calendar-event__past">${text.pastClass}</span>` : `<a href="${escapeHtml(occurrence.meeting.joinUrl)}" target="_blank" rel="noreferrer">${text.joinSession} ${icon("external")}</a>`}</article>`;
        }).join("") : `<p class="calendar-empty">${text.noClasses}</p>`}</div></section>`;
      }).join("")}</div>
    </section>`;
}

function renderResources(ctx, courseFilter = "") {
  const { lang, text: chromeText, catalog } = ctx;
  const text = { ...chromeText, ...hinglishUi };
  const bilingualCopy = hinglishCopy;
  const compactBilingualCopy = hinglishCopy;
  const bilingualMarkup = hinglishMarkup;
  const visible = courseFilter ? courseResources.filter((resource) => resource.course === courseFilter) : courseResources;
  const courses = courseFilter ? catalog.courses.filter((course) => course.slug === courseFilter) : catalog.courses;
  const programItems = courseFilter ? [] : visible.filter((resource) => resource.course === programProfile.resourceGroup.slug);
  const programSection = programItems.length ? `<section class="resource-course program-resource-section"><div class="section-heading"><div><p class="eyebrow">${escapeHtml(programProfile.resourceGroup.code)}</p>${compactBilingualCopy(programProfile.resourceGroup.title.en, programProfile.resourceGroup.title.hi, "h2")}<span class="program-semester-pill">${text.currentSemester}: ${programProfile.currentSemester} · ${programProfile.totalCredits} credits</span></div></div><div class="resource-grid">${programItems.map((resource) => resourceCard(resource, lang, text)).join("")}</div></section>` : "";
  main.innerHTML = `<section class="page-intro"><p class="kicker"><span></span>${text.resources}</p>${bilingualCopy(ui.en.resourceLibrary, ui.hi.resourceLibrary, "h1")}${bilingualCopy(ui.en.resourceIntro, ui.hi.resourceIntro, "div", "page-intro__copy")}</section><section class="section-shell resource-library">${programSection}${courses.map((course) => {
    const items = visible.filter((resource) => resource.course === course.slug);
    return `<section class="resource-course"><div class="section-heading"><div><p class="eyebrow">${escapeHtml(course.code)}</p>${compactBilingualCopy(course.title, course.hi.title, "h2")}</div><a href="${href(lang, coursePath(course))}">${text.openSubject} ${icon("arrow")}</a></div>${items.length ? `<div class="resource-grid">${items.map((resource) => resourceCard(resource, lang, text, course)).join("")}</div>` : `<div class="empty-state empty-state--compact"><span>${icon("file")}</span><h3>${text.noResources}</h3></div>`}${openResourceSection(course, text)}</section>`;
  }).join("")}</section>`;
}

function resourceAbsoluteUrl(resource) {
  return new URL(resource.path, new URL(".", location.href.split("#")[0])).href;
}

function renderResourceViewer(courseSegment, id, ctx) {
  const { lang, text: chromeText, catalog } = ctx;
  const text = { ...chromeText, ...hinglishUi };
  const bilingualCopy = hinglishCopy;
  const compactBilingualCopy = hinglishCopy;
  const bilingualMarkup = hinglishMarkup;
  const catalogCourse = courseFromRouteSegment(courseSegment, catalog.courses);
  if (catalogCourse && courseSegment !== catalogCourse.routeSlug) {
    location.replace(href(lang, `/resource/${catalogCourse.routeSlug}/${id}`));
    return;
  }
  const courseSlug = catalogCourse?.slug || courseSegment;
  const resource = courseResources.find((item) => item.course === courseSlug && item.id === id);
  const course = catalogCourse || (courseSlug === programProfile.resourceGroup.slug ? {
    slug: programProfile.resourceGroup.slug,
    code: programProfile.code,
    title: programProfile.resourceGroup.title.en,
    hi: { title: programProfile.resourceGroup.title.hi }
  } : null);
  if (!resource || !course) return renderNotFound(ctx);
  const titleHi = resource.titleHi || resource.title;
  const sourceUrl = resourceAbsoluteUrl(resource);
  const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
  const viewer = resource.kind === "pdf" ? `<iframe class="document-frame" src="${escapeHtml(sourceUrl)}#view=FitH" title="${escapeHtml(resource.title)}"></iframe>` : !isLocal ? `<iframe class="document-frame" src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(sourceUrl)}" title="${escapeHtml(resource.title)}"></iframe>` : `<div class="viewer-fallback"><span>${icon("file")}</span><p>${text.viewerUnavailable}</p></div>`;
  const backPath = courseSlug === programProfile.resourceGroup.slug ? "/resources" : courseResourcesPath(course);
  main.innerHTML = `<section class="viewer-header"><a class="back-link" href="${href(lang, backPath)}">← ${text.backToResources}</a><p class="eyebrow">${escapeHtml(course.code)} · ${escapeHtml(resource.extension.toUpperCase())}</p>${compactBilingualCopy(resource.title, titleHi, "h1")}<div class="viewer-actions"><a class="button button--primary" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">${text.openOriginal} ${icon("external")}</a><a class="button button--quiet" href="${escapeHtml(sourceUrl)}" download>${text.download}</a></div></section><section class="viewer-shell">${viewer}</section>`;
}

function renderNotFound(ctx, message = "") {
  const { lang, text } = ctx;
  main.innerHTML = `<section class="not-found"><span>404</span><h1>${text.offSyllabus}</h1><p>${escapeHtml(message || text.notFound)}</p><a class="button button--primary" href="${href(lang)}">${text.returnHome}</a></section>`;
}

function setChrome(ctx, route) {
  const { lang, text, locale, catalog } = ctx;
  document.documentElement.lang = "en";
  document.documentElement.dataset.languageMode = "bilingual";
  document.querySelector(".brand").href = href(lang);
  document.querySelector(".skip-link").textContent = text.skip;
  navLinks.forEach((link) => {
    const key = link.dataset.nav;
    const labelKey = key === "home" ? "overview" : key === "courses" ? "subjects" : key;
    const iconName = key === "home" ? "home" : key === "courses" ? "subjects" : key === "schedule" ? "calendar" : "file";
    link.innerHTML = `<span class="nav-icon">${icon(iconName)}</span><span class="nav-label"><span lang="en">${escapeHtml(ui.en[labelKey])}</span><span lang="hi">${escapeHtml(ui.hi[labelKey])}</span></span>`;
    link.setAttribute("aria-label", `${ui.en[labelKey]} · ${ui.hi[labelKey]}`);
    link.href = href(lang, key === "home" ? "/" : `/${key}`);
    const active = key === "home" ? route === "/" : route === `/${key}` || route.startsWith(`/${key}/`) || (key === "courses" && route.startsWith("/course/"));
    link.classList.toggle("active", active);
  });
  searchButton.querySelector(".search-button__label").textContent = text.search;
  searchButton.setAttribute("aria-label", text.search);
  timeZoneToggle.querySelectorAll("[data-time-zone]").forEach((button) => {
    const selected = button.dataset.timeZone === preferredTimeZone;
    button.setAttribute("aria-pressed", String(selected));
  });
  searchPanel.querySelector("label").textContent = text.searchLabel;
  searchInput.placeholder = text.searchPlaceholder;
  document.querySelector(".site-footer p:first-child").textContent = text.footerNotice;
  document.querySelector("#footer-count").textContent = ctx.allLectures.filter((lecture) => lecture.status === "published").length;
  document.querySelector("#footer-count-label").textContent = text.verifiedNotes;
  document.querySelector("#footer-updated-label").textContent = text.updated;
  const updatedDate = new Date(`${catalog.updated}T12:00:00`);
  document.querySelector("#footer-date").textContent = `${new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(updatedDate)} · ${new Intl.DateTimeFormat(hindiDateLocale, { dateStyle: "long" }).format(updatedDate)}`;
}

function setScrollFabTarget(target) {
  const goingUp = target === "top";
  const label = goingUp ? bilingualUi.goTop : bilingualUi.goBottom;
  scrollFab.dataset.target = target;
  scrollFab.querySelector("span").textContent = goingUp ? "↑" : "↓";
  scrollFab.setAttribute("aria-label", label);
  scrollFab.title = label;
}

function updateScrollFab(resetDirection = false) {
  const y = Math.max(0, window.scrollY);
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  if (maxScroll < 160 || y < 120) {
    scrollFab.hidden = true;
    lastScrollY = y;
    return;
  }

  scrollFab.hidden = false;
  if (y <= 40) setScrollFabTarget("bottom");
  else if (maxScroll - y <= 40) setScrollFabTarget("top");
  else if (resetDirection) setScrollFabTarget("bottom");
  else if (y > lastScrollY + 2) setScrollFabTarget("bottom");
  else if (y < lastScrollY - 2) setScrollFabTarget("top");
  lastScrollY = y;
}

function setNotesTocCollapsed(collapsed) {
  const layout = document.querySelector(".notes-layout");
  const toggle = document.querySelector(".notes-toc__toggle");
  if (!layout || !toggle) return;
  const wasCollapsed = layout.classList.contains("notes-layout--toc-collapsed");
  layout.classList.toggle("notes-layout--toc-collapsed", collapsed);
  toggle.setAttribute("aria-expanded", String(!collapsed));
  toggle.setAttribute("aria-label", collapsed ? "Show page sections · इस पृष्ठ के अनुभाग दिखाएँ" : "Hide page sections · इस पृष्ठ के अनुभाग छिपाएँ");
  if (wasCollapsed !== collapsed) {
    notesTocDirectionalDistance = 0;
    notesTocLastDirection = 0;
    notesTocAutoLockUntil = performance.now() + notesTocTransitionLockMs;
  }
}

function updateNotesToc(reset = false) {
  const layout = document.querySelector(".notes-layout");
  if (!layout) {
    notesTocLastY = Math.max(0, window.scrollY);
    return;
  }
  const y = Math.max(0, window.scrollY);
  if (reset) {
    setNotesTocCollapsed(false);
    notesTocLastY = y;
    notesTocLastDirection = 0;
    notesTocDirectionalDistance = 0;
    notesTocAutoLockUntil = 0;
    return;
  }
  const delta = y - notesTocLastY;
  notesTocLastY = y;
  if (performance.now() < notesTocAutoLockUntil) {
    notesTocLastDirection = 0;
    notesTocDirectionalDistance = 0;
    return;
  }
  if (delta === 0) return;
  const direction = delta > 0 ? 1 : -1;
  if (direction !== notesTocLastDirection) notesTocDirectionalDistance = 0;
  notesTocLastDirection = direction;
  notesTocDirectionalDistance += Math.abs(delta);
  const collapsed = layout.classList.contains("notes-layout--toc-collapsed");
  const layoutRect = layout.getBoundingClientRect();
  const nearNotesStart = layoutRect.top >= -notesTocExpandBuffer && layoutRect.top <= notesTocExpandBuffer;
  if (!collapsed && direction > 0 && y > 220 && notesTocDirectionalDistance >= notesTocCollapseDelta) setNotesTocCollapsed(true);
  else if (collapsed && direction < 0 && nearNotesStart && notesTocDirectionalDistance >= notesTocExpandDelta) setNotesTocCollapsed(false);
}

function route() {
  const parsed = parseRoute();
  if (!searchPanel.hidden) closeSearch();
  const ctx = context(parsed.lang);
  setChrome(ctx, parsed.route);
  if (parsed.route === "/") renderHome(ctx);
  else if (parsed.route === "/courses") renderCourses(ctx);
  else if (parsed.route === "/schedule") renderSchedule(ctx);
  else if (parsed.route === "/resources") renderResources(ctx);
  else if (parsed.route.startsWith("/resources/")) {
    const course = courseFromRouteSegment(parsed.parts[1], ctx.catalog.courses);
    if (!course) renderNotFound(ctx);
    else if (parsed.parts[1] !== course.routeSlug) {
      location.replace(href(ctx.lang, courseResourcesPath(course)));
      return;
    } else renderResources(ctx, course.slug);
  }
  else if (parsed.route.startsWith("/resource/")) renderResourceViewer(parsed.parts[1], parsed.parts[2], ctx);
  else if (parsed.route.startsWith("/course/")) {
    const course = courseFromRouteSegment(parsed.parts[1], ctx.catalog.courses);
    if (!course) renderNotFound(ctx);
    else if (parsed.parts[1] !== course.routeSlug) {
      location.replace(href(ctx.lang, coursePath(course)));
      return;
    } else renderCourse(course.slug, ctx);
  }
  else if (parsed.route.startsWith("/lecture/")) renderLecture(parsed.parts[1], ctx);
  else renderNotFound(ctx);
  main.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetClear?.([main]);
    window.MathJax.typesetPromise([main]).catch(() => {});
  }
  requestAnimationFrame(() => {
    if (parsed.anchor) document.getElementById(parsed.anchor)?.scrollIntoView({ behavior: "instant", block: "start" });
    updateScrollFab(true);
    updateNotesToc(true);
  });
}

function openSearch() {
  searchPanel.hidden = false;
  searchButton.setAttribute("aria-expanded", "true");
  searchInput.focus();
  search(searchInput.value);
}

function closeSearch() {
  searchPanel.hidden = true;
  searchButton.setAttribute("aria-expanded", "false");
  searchInput.value = "";
  searchResults.innerHTML = "";
}

function search(query) {
  const parsed = parseRoute();
  const ctx = context(parsed.lang);
  const normalized = query.trim().toLocaleLowerCase(ctx.locale);
  if (!normalized) {
    searchResults.innerHTML = `<p class="search-hint">${ctx.text.searchHint}</p>`;
    return;
  }
  const courseMatches = ctx.catalog.courses.filter((course) => `${course.code} ${course.title} ${course.note} ${course.hi.title} ${course.hi.note}`.toLocaleLowerCase(ctx.locale).includes(normalized));
  const lectureMatches = ctx.allLectures.filter((lecture) => `${lecture.title} ${lecture.overview.join(" ")} ${lecture.course.title} ${lecture.hi.title} ${lecture.hi.overview.join(" ")} ${lecture.course.hi.title}`.toLocaleLowerCase(ctx.locale).includes(normalized));
  const results = [
    ...courseMatches.map((course) => ({
      kind: "course",
      href: href(ctx.lang, coursePath(course)),
      eyebrow: course.code,
      title: course.title,
      titleHi: course.hi.title,
      accent: course.accent,
      schedule: scheduleBySlug(course.slug)
    })),
    ...lectureMatches.map((lecture) => ({
      kind: "lecture",
      href: href(ctx.lang, `/lecture/${lecture.id}`),
      eyebrow: `${lecture.course.code} · ${lecture.displayDate}`,
      title: lecture.title,
      titleHi: lecture.hi.title
    }))
  ];
  searchResults.innerHTML = results.length ? results.map((result) => {
    const scheduleSummary = result.kind === "course" ? `<div class="search-result-card__schedule">
      <span class="search-result-card__days">${icon("calendar")} ${scheduleDaysCopy(result.schedule)}</span>
      <div class="time-zone-panel-list">${meetingsForCourse(result.schedule).map((meeting) => timeZonePresentation(result.schedule, "search", null, meeting)).join("")}</div>
    </div>` : "";
    return `<a class="search-result-card search-result-card--${result.kind}${result.accent ? ` search-result-card--${result.accent}` : ""}" href="${result.href}"><div class="search-result-card__main"><small>${escapeHtml(result.eyebrow)}</small>${compactBilingualCopy(result.title, result.titleHi, "strong")}${scheduleSummary}</div><span class="search-result-card__arrow">${icon("arrow")}</span></a>`;
  }).join("") : `<p class="search-hint">${ctx.text.noMatches} “${escapeHtml(query)}”</p>`;
}

searchButton.addEventListener("click", () => searchPanel.hidden ? openSearch() : closeSearch());
searchInput.addEventListener("input", (event) => search(event.target.value));
searchResults.addEventListener("click", closeSearch);
scrollFab.addEventListener("click", () => {
  const top = scrollFab.dataset.target === "top" ? 0 : document.documentElement.scrollHeight;
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  window.scrollTo({ top, behavior });
});
window.addEventListener("scroll", () => {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    updateScrollFab();
    updateNotesToc();
    scrollFrame = 0;
  });
}, { passive: true });
window.addEventListener("resize", () => updateScrollFab());
document.addEventListener("click", (event) => {
  const notesTocToggle = event.target.closest(".notes-toc__toggle");
  if (notesTocToggle) {
    const layout = document.querySelector(".notes-layout");
    setNotesTocCollapsed(!layout?.classList.contains("notes-layout--toc-collapsed"));
    notesTocLastY = Math.max(0, window.scrollY);
    notesTocLastDirection = 0;
    notesTocDirectionalDistance = 0;
    return;
  }
  const timeZoneButton = event.target.closest("[data-time-zone]");
  if (timeZoneButton) {
    const nextTimeZone = timeZoneButton.dataset.timeZone;
    if (nextTimeZone !== preferredTimeZone && (nextTimeZone === "india" || nextTimeZone === "chicago")) {
      preferredTimeZone = nextTimeZone;
      try {
        window.localStorage.setItem(timeZonePreferenceKey, preferredTimeZone);
      } catch {
        // The preference remains active for this visit if storage is unavailable.
      }
      route();
    }
    return;
  }
  const scrollLink = event.target.closest("[data-scroll]");
  if (scrollLink) {
    event.preventDefault();
    document.getElementById(scrollLink.dataset.scroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const week = event.target.closest("[data-week]");
  if (week) {
    scheduleWeekIndex += Number(week.dataset.week);
    route();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !searchPanel.hidden) closeSearch();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
});
window.addEventListener("hashchange", route);
route();
