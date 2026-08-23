import { catalog as catalogBase } from "../data/catalog.js";
import { localizeCatalog } from "../data/catalog-hi.js";
import { lectureNotes } from "../data/lecture-notes.js";
import { ui } from "../data/i18n.js";
import { semesterSchedule, scheduleBySlug } from "../data/schedule.js";
import { courseResources } from "../data/resources.js";

const main = document.querySelector("#main-content");
const searchButton = document.querySelector("#search-button");
const searchPanel = document.querySelector("#search-panel");
const searchInput = document.querySelector("#site-search");
const searchResults = document.querySelector("#search-results");
const scrollFab = document.querySelector("#scroll-fab");
const navLinks = [...document.querySelectorAll("[data-nav]")];
let scheduleWeekIndex = null;
let unlockedCapstones = null;
let lastScrollY = 0;
let scrollFrame = 0;

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

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
  const parts = raw.split("/").filter(Boolean);
  const hasLanguagePrefix = parts[0] === "en" || parts[0] === "hi" || parts[0] === "bi";
  const rest = hasLanguagePrefix ? parts.slice(1) : parts;
  const route = `/${rest.join("/")}`.replace(/\/$/, "") || "/";
  if (hasLanguagePrefix) location.replace(href("", route));
  return { lang: "", route, parts: rest };
}

const href = (_lang, path = "/") => `#${path}`;
const bilingualUi = Object.fromEntries(
  Object.keys(ui.en).map((key) => [key, `${ui.en[key]} · ${ui.hi[key]}`])
);
const localizedValue = (value) => typeof value === "object" && value
  ? `${value.en ?? ""} · ${value.hi ?? value.en ?? ""}`
  : value;

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

function context() {
  const hindiCatalog = localizeCatalog(catalogBase, "hi");
  const catalog = {
    ...catalogBase,
    courses: catalogBase.courses.map((course) => {
      const hindiCourse = hindiCatalog.courses.find((item) => item.slug === course.slug);
      return {
        ...course,
        hi: hindiCourse,
        lectures: course.lectures.map((lecture) => ({
          ...lecture,
          hi: hindiCourse.lectures.find((item) => item.id === lecture.id)
        }))
      };
    })
  };
  const allLectures = catalog.courses.flatMap((course) =>
    course.lectures.map((lecture) => ({ ...lecture, course }))
  );
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

function scheduleMeta(course, lang, text, compact = false) {
  const schedule = scheduleBySlug(course.slug);
  return `<dl class="course-meta${compact ? " course-meta--stack" : ""}">
    <div class="course-meta__days"><dt>${icon("calendar")} ${text.classDays}</dt><dd>${bilingualCopy(schedule.weekdayLabels.en.join(" & "), schedule.weekdayLabels.hi.join(", "))}</dd></div>
    <div class="course-meta__time"><dt>${icon("clock")} ${text.indiaTime}</dt><dd>${bilingualCopy(schedule.indiaSummary.en, schedule.indiaSummary.hi)}</dd></div>
    <div class="course-meta__wide course-meta__time"><dt>${icon("clock")} ${text.chicagoTime}</dt><dd>${bilingualCopy(schedule.chicagoSummary.en, schedule.chicagoSummary.hi)}</dd></div>
  </dl>`;
}

function courseActions(course, lang, text) {
  const schedule = scheduleBySlug(course.slug);
  return `<div class="card-actions">
    <a class="button button--primary" href="${escapeHtml(schedule.joinUrl)}" target="_blank" rel="noreferrer">${text.joinSession} ${icon("external")}</a>
    <a class="button button--quiet-light" href="${escapeHtml(course.recordingUrl)}" target="_blank" rel="noreferrer">${text.allRecordings} ${icon("video")}</a>
    <a class="button button--quiet-light" href="${href(lang, `/course/${course.slug}`)}">${text.openSubject} ${icon("arrow")}</a>
  </div>`;
}

function courseCard(course, lang, text, featured = false) {
  return `<article class="course-card course-card--${course.accent}${featured ? " course-card--featured" : ""}">
    <div class="course-card__top"><span class="course-monogram">${escapeHtml(course.icon)}</span>${statusPill(course)}</div>
    <p class="eyebrow">${escapeHtml(course.code)}</p>
    ${compactBilingualCopy(course.title, course.hi.title, "h3")}
    ${bilingualCopy(course.note, course.hi.note, "div", "course-note")}
    ${scheduleMeta(course, lang, text)}
    ${courseActions(course, lang, text)}
  </article>`;
}

function homeCourseCard(course, lang, text) {
  const publishedCount = course.lectures.filter((lecture) => lecture.status === "published").length;
  return `<a class="home-course-card home-course-card--${course.accent}" href="${href(lang, `/course/${course.slug}`)}">
    <span class="course-monogram">${escapeHtml(course.icon)}</span>
    <span class="home-course-card__copy">
      <span class="eyebrow">${escapeHtml(course.code)}</span>
      ${compactBilingualCopy(course.title, course.hi.title, "strong")}
      <span class="home-course-card__status"><i></i>${publishedCount} ${text.published}</span>
    </span>
    <span class="home-course-card__arrow" aria-hidden="true">${icon("arrow")}</span>
  </a>`;
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
        <li><strong>3</strong><span>${text.subjectsCount}</span></li>
        <li><strong>${notesReady}</strong><span>${text.notesPublished}</span></li>
        <li><strong>25</strong><span>${text.explainedMcqs}</span></li>
      </ul>
    </section>
    <section class="section-shell home-subjects">
      <div class="section-heading"><div><p class="eyebrow">${text.currentSemester}</p><h2>${text.subjectRadar}</h2></div><a href="${href(lang, "/courses")}">${text.viewAllSubjects} ${icon("arrow")}</a></div>
      <div class="home-course-grid">${catalog.courses.map((course) => homeCourseCard(course, lang, text)).join("")}</div>
    </section>`;
}

function lectureRow(lecture, lang, text) {
  const available = lecture.status === "published";
  return `<article class="lecture-row ${available ? "" : "lecture-row--pending"}">
    <div class="lecture-number">${String(lecture.number).padStart(2, "0")}</div>
    <div class="lecture-row__body"><p class="eyebrow">${escapeHtml(lecture.displayDate)} · ${escapeHtml(lecture.hi.displayDate)} · ${escapeHtml(lecture.duration)}</p>${compactBilingualCopy(lecture.title, lecture.hi.title, "h3")}<ul class="topic-chips">${lecture.overview.map((item, index) => `<li>${compactBilingualCopy(item, lecture.hi.overview[index])}</li>`).join("")}</ul></div>
    ${available ? `<div class="lecture-row__actions"><a class="card-link card-link--notes" href="${href(lang, `/lecture/${lecture.id}`)}">${text.readNotes} ${icon("arrow")}</a><a class="card-link card-link--recording" href="${escapeHtml(lecture.recordingUrl)}" target="_blank" rel="noreferrer">${text.watchRecording} ${icon("video")}</a></div>` : `<span class="status status--processing"><i></i>${escapeHtml(lecture.statusLabel)} · ${escapeHtml(lecture.hi.statusLabel)}</span>`}
  </article>`;
}

function scheduleCard(course, lang, text) {
  const schedule = scheduleBySlug(course.slug);
  return `<article class="schedule-card schedule-card--${schedule.accent}">
    <div><p class="eyebrow">${escapeHtml(schedule.code)} · ${escapeHtml(localizedValue(schedule.session))}</p>${compactBilingualCopy(schedule.title.en, schedule.title.hi, "h2")}</div>
    <div class="day-chips">${schedule.weekdayLabels.en.map((day, index) => `<span>${escapeHtml(day)} · ${escapeHtml(schedule.weekdayLabels.hi[index] ?? "")}</span>`).join("")}</div>
    <dl>
      <div class="schedule-card__time"><dt>${text.indiaTime}</dt><dd>${bilingualCopy(schedule.indiaSummary.en, schedule.indiaSummary.hi)}</dd></div>
      <div class="schedule-card__time"><dt>${text.chicagoTime}</dt><dd>${bilingualCopy(schedule.chicagoSummary.en, schedule.chicagoSummary.hi)}</dd></div>
      <div><dt>${text.schedule}</dt><dd>${text.runsThrough}</dd></div>
    </dl>
    <div class="schedule-actions">
      <a class="button button--primary" href="${escapeHtml(schedule.joinUrl)}" target="_blank" rel="noreferrer">${text.joinSession} ${icon("external")}</a>
      <a class="button button--quiet-light" href="${escapeHtml(course.recordingUrl)}" target="_blank" rel="noreferrer">${text.allRecordings} ${icon("video")}</a>
    </div>
  </article>`;
}

function resourcesForCourse(slug) {
  return courseResources.filter((resource) => resource.course === slug);
}

function resourceCard(resource, lang, text) {
  const titleHi = resource.titleHi || resource.title;
  const descriptionHi = resource.descriptionHi || resource.description;
  return `<article class="resource-card">
    <span class="resource-card__icon">${icon(resource.kind === "pdf" ? "file" : "video")}</span>
    <div><p class="eyebrow">${escapeHtml(resource.extension.toUpperCase())}${resource.date ? ` · ${escapeHtml(resource.date)}` : ""}</p>${compactBilingualCopy(resource.title, titleHi, "h3")}${resource.description ? bilingualCopy(resource.description, descriptionHi, "p") : ""}</div>
    <a class="card-link" href="${href(lang, `/resource/${resource.course}/${resource.id}`)}">${text.openViewer} ${icon("arrow")}</a>
  </article>`;
}

function renderCourse(slug, ctx) {
  const { lang, text, catalog } = ctx;
  const course = catalog.courses.find((item) => item.slug === slug);
  if (!course) return renderNotFound(ctx);
  const resources = resourcesForCourse(slug);
  const schedule = scheduleBySlug(slug);
  const publishedCount = course.lectures.filter((lecture) => lecture.status === "published").length;
  main.innerHTML = `<section class="course-hero course-hero--${course.accent}">
      <div><a class="back-link" href="${href(lang, "/courses")}">← ${text.allSubjects}</a><p class="kicker"><span></span>${escapeHtml(course.code)}</p>${compactBilingualCopy(course.title, course.hi.title, "h1")}${bilingualCopy(course.note, course.hi.note, "div", "course-hero__description")}<div class="course-hero__actions"><a class="button button--quiet" href="${escapeHtml(course.recordingUrl)}" target="_blank" rel="noreferrer">${text.allRecordings} ${icon("external")}</a></div></div>
      <dl class="course-hero__facts">
        <div class="course-hero__fact course-hero__fact--days"><dt>${icon("calendar")} ${text.classDays}</dt><dd>${bilingualCopy(schedule.weekdayLabels.en.join(" & "), schedule.weekdayLabels.hi.join(", "))}</dd></div>
        <div class="course-hero__fact course-hero__fact--time"><dt>${icon("clock")} ${text.indiaTime}</dt><dd>${bilingualCopy(schedule.indiaSummary.en, schedule.indiaSummary.hi)}</dd></div>
        <div class="course-hero__fact course-hero__fact--time"><dt>${icon("clock")} ${text.chicagoTime}</dt><dd>${bilingualCopy(schedule.chicagoSummary.en, schedule.chicagoSummary.hi)}</dd></div>
        <div class="course-hero__fact course-hero__fact--notes"><dt>${text.notes}</dt><dd>${publishedCount} ${text.published}</dd></div>
      </dl>
    </section>
    <section class="section-shell course-content">
      ${scheduleCard(course, lang, text)}
      <div class="section-heading"><div><p class="eyebrow">${text.daywiseArchive}</p><h2>${text.lectureNotes}</h2></div><a class="external-link" href="${escapeHtml(course.recordingUrl)}" target="_blank" rel="noreferrer">${text.allRecordings} ${icon("external")}</a></div>
      ${course.lectures.length ? `<div class="lecture-list">${course.lectures.map((lecture) => lectureRow(lecture, lang, text)).join("")}</div>` : `<div class="empty-state"><span>${escapeHtml(course.icon)}</span><h3>${text.noNotes}</h3>${bilingualCopy(course.note, course.hi.note, "p")}</div>`}
    </section>
    <section class="section-shell section-shell--compact">
      <div class="section-heading"><div><p class="eyebrow">${text.resources}</p><h2>${text.resourcesForCourse}</h2></div><a href="${href(lang, `/resources/${course.slug}`)}">${text.browseResources} ${icon("arrow")}</a></div>
      ${resources.length ? `<div class="resource-grid">${resources.map((resource) => resourceCard(resource, lang, text)).join("")}</div>` : `<div class="empty-state empty-state--compact"><span>${icon("file")}</span><h3>${text.noResources}</h3></div>`}
    </section>`;
}

function renderCourses(ctx) {
  const { lang, text, catalog } = ctx;
  main.innerHTML = `<section class="page-intro"><p class="kicker"><span></span>${text.homeKicker}</p>${bilingualMarkup(`<h1>${escapeHtml(ui.en.threeSubjects)}<br>${escapeHtml(ui.en.oneSystem)}</h1><p>${escapeHtml(ui.en.coursesIntro)}</p>`, `<h1>${escapeHtml(ui.hi.threeSubjects)}<br>${escapeHtml(ui.hi.oneSystem)}</h1><p>${escapeHtml(ui.hi.coursesIntro)}</p>`, "bilingual-copy--intro")}</section><section class="section-shell"><div class="course-grid course-grid--all">${catalog.courses.map((course) => courseCard(course, lang, text)).join("")}</div></section>`;
}

function signalCards(notes, text) {
  const signalLabels = [["assignments", text.assignments], ["homework", text.homework], ["labs", text.labs], ["projects", text.projects], ["references", text.instructorReferences], ["studentQuestions", text.studentQuestions]];
  return signalLabels.map(([key, label]) => {
    const englishItems = notes.en.courseSignals[key];
    const hindiItems = notes.hi.courseSignals[key];
    return `<article class="signal-card"><h3>${label}</h3>${englishItems.length ? `<div>${englishItems.map((item, index) => {
      const hindi = hindiItems[index];
      return key === "studentQuestions"
        ? `<section><time>${escapeHtml(item.time)}</time>${bilingualCopy(item.question, hindi.question, "strong")}${bilingualCopy(item.response, hindi.response, "p")}</section>`
        : `<section><time>${escapeHtml(item.time)}</time>${bilingualCopy(item.title, hindi.title, "strong")}${bilingualCopy(item.detail, hindi.detail, "p")}</section>`;
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

function studyResource(item, hindi, text) {
  const videoId = youtubeId(item.url);
  if (videoId) {
    return `<article class="video-resource"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${escapeHtml(videoId)}" title="${escapeHtml(item.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="video-resource__copy"><span>${text.watchHere}</span>${compactBilingualCopy(item.title, hindi.title, "h3")}${compactBilingualCopy(item.creator, hindi.creator, "p")}${bilingualCopy(item.why, hindi.why, "small")}<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${text.openYouTube} ${icon("external")}</a></div></article>`;
  }
  return `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer"><span>${escapeHtml(item.type)} · ${escapeHtml(hindi.type)}</span><div>${compactBilingualCopy(item.title, hindi.title, "h3")}${compactBilingualCopy(item.creator, hindi.creator, "p")}${bilingualCopy(item.why, hindi.why, "small")}</div>${icon("external")}</a>`;
}

const base64Bytes = (value) => Uint8Array.from(atob(value), (character) => character.charCodeAt(0));

function validPrivatePayload(payload) {
  const entries = payload && typeof payload === "object" ? Object.values(payload) : [];
  return entries.length > 0 && entries.every((languages) => ["en", "hi"].every((lang) => {
    const project = languages?.[lang];
    return project?.title && project?.pitch && project?.problem && project?.learning
      && project.mvp?.length >= 3 && project.stretch?.length >= 2 && project.plan?.length >= 3;
  }));
}

async function unlockPrivateCapstones(username, code) {
  // Fetch a fresh vault for every unlock attempt. The encrypted payload changes
  // whenever a lecture is added, while browsers may retain the previous module.
  const { privateCapstoneVault } = await import(`../data/private-capstones.enc.js?unlock=${Date.now()}`);
  const material = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(`${username.trim().toLowerCase()}\0${code.trim()}`),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  const key = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: base64Bytes(privateCapstoneVault.salt),
      iterations: privateCapstoneVault.iterations,
      hash: "SHA-256"
    },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: base64Bytes(privateCapstoneVault.iv) },
    key,
    base64Bytes(privateCapstoneVault.ciphertext)
  );
  const payload = JSON.parse(new TextDecoder().decode(plaintext));
  if (!validPrivatePayload(payload)) throw new Error("Invalid private payload");
  return payload;
}

function privateProjectSection(id, text) {
  const projects = unlockedCapstones?.[id];
  if (!projects) {
    return `<section id="project" class="notes-section private-capstone"><div class="private-lock">
      <span class="private-lock__badge">${text.ownerOnly}</span>
      <p class="eyebrow">${text.privateCapstone}</p><h2>${text.privateCapstoneHeading}</h2>
      <p class="private-lock__intro">${text.privateCapstoneIntro}</p>
      <form class="private-login" data-capstone-login autocomplete="off">
        <label>${text.username}<input name="username" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" required></label>
        <label>${text.accessCode}<input name="code" type="password" inputmode="numeric" autocomplete="off" required></label>
        <button class="button button--primary" type="submit">${text.unlockCapstone}</button>
      </form>
      <p class="private-lock__privacy">${text.privateCredentialsPrivacy}</p>
      <p class="private-lock__error" data-capstone-error role="alert" hidden>${text.invalidCredentials}</p>
    </div></section>`;
  }
  const { en, hi } = projects;
  const pairedList = (english, hindi) => english.map((item, index) => `<li>${bilingualCopy(item, hindi[index])}</li>`).join("");
  return `<section id="project" class="notes-section project-brief"><p class="eyebrow">${text.capstoneLens}</p>${bilingualCopy(en.title, hi.title, "h2")}${bilingualCopy(en.pitch, hi.pitch, "div", "project-pitch")}<div class="project-grid"><div><h3>${text.problem}</h3>${bilingualCopy(en.problem, hi.problem, "p")}</div><div><h3>${text.learningValue}</h3>${bilingualCopy(en.learning, hi.learning, "p")}</div><div><h3>${text.mvp}</h3><ul>${pairedList(en.mvp, hi.mvp)}</ul></div><div><h3>${text.stretchGoals}</h3><ul>${pairedList(en.stretch, hi.stretch)}</ul></div></div><div class="build-plan"><h3>${text.buildPlan}</h3><ol>${pairedList(en.plan, hi.plan)}</ol></div></section>`;
}

function renderLecture(id, ctx) {
  const { lang, text, allLectures, notes: noteCollection } = ctx;
  const found = allLectures.find((lecture) => lecture.id === id && lecture.status === "published");
  const notes = noteCollection[id];
  if (!found || !notes) return renderNotFound(ctx);
  const { en, hi } = notes;
  const navItems = [["coverage", text.coverage], ["slides", text.slideTrail], ["summary", text.fullSummary], ["signals", text.courseSignals], ["insights", text.insights], ["resources", text.furtherStudy], ["quiz", text.mcqs], ["project", text.privateCapstone]];
  main.innerHTML = `<header class="lecture-hero"><div class="lecture-hero__meta"><a class="back-link" href="${href(lang, `/course/${found.course.slug}`)}">← ${escapeHtml(found.course.code)}</a><span>${text.lecture} ${String(found.number).padStart(2, "0")}</span><span>${escapeHtml(found.displayDate)} · ${escapeHtml(found.hi.displayDate)}</span></div>${compactBilingualCopy(en.title, hi.title, "h1")}${bilingualCopy(en.lede, hi.lede, "div", "lecture-hero__lede")}<dl><div><dt>${text.recording}</dt><dd>${escapeHtml(found.duration)}</dd></div><div><dt>${text.instructionalInterval}</dt><dd>${escapeHtml(en.instructionalInterval)}</dd></div><div><dt>${text.reviewLevel}</dt><dd>${compactBilingualCopy(en.reviewLevel, hi.reviewLevel)}</dd></div></dl></header>
    <div class="notes-layout"><aside class="notes-toc"><p>${text.onThisPage}</p><nav>${navItems.map(([anchor, label]) => `<a href="#${anchor}" data-scroll="${anchor}">${label}</a>`).join("")}</nav></aside><article class="notes-article">
      <section id="coverage" class="notes-section"><p class="eyebrow">${text.highLevelCoverage}</p><h2>${text.lectureAtGlance}</h2><div class="coverage-grid">${en.coverage.map((item, index) => `<div><span>${String(index + 1).padStart(2, "0")}</span>${compactBilingualCopy(item.title, hi.coverage[index].title, "h3")}${bilingualCopy(item.body, hi.coverage[index].body, "p")}</div>`).join("")}</div><div class="takeaway"><strong>${text.oneSentence}</strong>${bilingualCopy(en.takeaway, hi.takeaway, "p")}</div></section>
      <section id="slides" class="notes-section"><p class="eyebrow">${text.lectureSourceTrail}</p><h2>${text.slidesTimecodes}</h2>${bilingualCopy(ui.en.slidesIntro, ui.hi.slidesIntro, "div", "section-intro")}<div class="slide-trail">${en.slideTrail.map((slide, index) => `<article><time>${escapeHtml(slide.time)}</time><div>${compactBilingualCopy(slide.title, hi.slideTrail[index].title, "h3")}${bilingualCopy(slide.note, hi.slideTrail[index].note, "p")}</div></article>`).join("")}</div></section>
      <section id="summary" class="notes-section"><p class="eyebrow">${text.completeSummary}</p><h2>${text.followArgument}</h2>${en.summary.map((section, index) => { const hindi = hi.summary[index]; return `<section class="summary-block">${compactBilingualCopy(section.title, hindi.title, "h3")}${section.sourceRefs?.length ? `<div class="source-refs">${section.sourceRefs.map((reference) => `<span>${escapeHtml(reference)}</span>`).join("")}</div>` : ""}${bilingualMarkup(`${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}${section.points?.length ? `<ul>${section.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>` : ""}`, `${hindi.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}${hindi.points?.length ? `<ul>${hindi.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>` : ""}`)}${section.formula ? `<div class="formula">${escapeHtml(section.formula)}</div>` : ""}</section>`; }).join("")}${en.keyTerms?.length ? `<div class="key-terms"><h3>${text.keyTerms}</h3><dl>${en.keyTerms.map((term, index) => `<div>${compactBilingualCopy(term.term, hi.keyTerms[index].term, "dt")}${bilingualCopy(term.definition, hi.keyTerms[index].definition, "dd")}</div>`).join("")}</dl></div>` : ""}</section>
      <section id="signals" class="notes-section"><p class="eyebrow">${text.transcriptSignals}</p><h2>${text.signalsHeading}</h2>${bilingualCopy(ui.en.signalsIntro, ui.hi.signalsIntro, "div", "section-intro")}<div class="signal-grid">${signalCards(notes, text)}</div></section>
      <section id="insights" class="notes-section"><p class="eyebrow">${text.addedAnalysis}</p><h2>${text.insightsConnections}</h2><div class="insight-list">${en.insights.map((item, index) => `<article><span>${escapeHtml(item.label)} · ${escapeHtml(hi.insights[index].label)}</span>${compactBilingualCopy(item.title, hi.insights[index].title, "h3")}${bilingualCopy(item.body, hi.insights[index].body, "p")}</article>`).join("")}</div></section>
      <section id="resources" class="notes-section"><p class="eyebrow">${text.referencesStudy}</p><h2>${text.oneLayerDeeper}</h2><div class="resource-list">${en.resources.map((item, index) => studyResource(item, hi.resources[index], text)).join("")}</div></section>
      <section id="quiz" class="notes-section"><p class="eyebrow">${text.activeRecall}</p><h2>${text.explained25}</h2>${bilingualCopy(ui.en.quizIntro, ui.hi.quizIntro, "div", "section-intro")}<div class="quiz-list">${en.quiz.map((question, index) => { const hindi = hi.quiz[index]; return `<details class="quiz-item"><summary><span>${String(index + 1).padStart(2, "0")}</span>${bilingualCopy(question.question, hindi.question, "strong")}<i>${text.openAnswer}</i></summary><div class="quiz-body"><ol type="A">${question.options.map((option, optionIndex) => `<li class="${optionIndex === question.answer ? "correct" : ""}">${bilingualCopy(option, hindi.options[optionIndex])}</li>`).join("")}</ol><div class="answer"><strong>${text.correctAnswer}: ${String.fromCharCode(65 + question.answer)}</strong>${bilingualCopy(question.explanation, hindi.explanation, "p")}</div><div class="option-review">${question.optionNotes.map((note, optionIndex) => `<div><strong>${String.fromCharCode(65 + optionIndex)}.</strong>${bilingualCopy(note, hindi.optionNotes[optionIndex], "p")}</div>`).join("")}</div></div></details>`; }).join("")}</div></section>
      ${privateProjectSection(id, text)}
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

const occurrences = semesterSchedule.courses.flatMap((course) => dateRange(semesterSchedule.startsOn, semesterSchedule.endsOn)
  .filter((dateKey) => course.weekdays.includes(new Date(`${dateKey}T12:00:00Z`).getUTCDay()))
  .map((dateKey) => ({
    course,
    indiaDate: dateKey,
    start: indiaDateToUtc(dateKey, course.start),
    end: indiaDateToUtc(dateKey, course.end)
  }))
).sort((left, right) => left.start - right.start);

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

function chicagoEventTime(occurrence, locale) {
  const dateFormatter = new Intl.DateTimeFormat(locale, { timeZone: semesterSchedule.displayTimeZone, weekday: "short", month: "short", day: "numeric" });
  const weekdayFormatter = new Intl.DateTimeFormat(locale, { timeZone: semesterSchedule.displayTimeZone, weekday: "short" });
  const timeFormatter = new Intl.DateTimeFormat("en-US", { timeZone: semesterSchedule.displayTimeZone, hour: "numeric", minute: "2-digit", timeZoneName: "short" });
  const endDay = zonedDateKey(occurrence.start) === zonedDateKey(occurrence.end) ? "" : `${weekdayFormatter.format(occurrence.end)} `;
  return `${dateFormatter.format(occurrence.start)} · ${timeFormatter.format(occurrence.start)}–${endDay}${timeFormatter.format(occurrence.end)}`;
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
      <div class="schedule-toolbar"><button type="button" class="button button--quiet-light" data-week="-1" ${scheduleWeekIndex === 0 ? "disabled" : ""}>← ${text.previousWeek}</button><div><span>${text.weekOf}</span>${bilingualCopy(formatPlainDate(weekKey, "en-US", { month: "long", day: "numeric", year: "numeric" }), formatPlainDate(weekKey, "hi-IN", { month: "long", day: "numeric", year: "numeric" }), "strong")}</div><button type="button" class="button button--quiet-light" data-week="1" ${scheduleWeekIndex === scheduleWeeks.length - 1 ? "disabled" : ""}>${text.nextWeek} →</button></div>
      <div class="week-calendar">${days.map((dayKey) => {
        const events = occurrences.filter((occurrence) => zonedDateKey(occurrence.start) === dayKey);
        return `<section class="calendar-day${events.length ? " calendar-day--active" : ""}"><header><span>${formatPlainDate(dayKey, "en-US", { weekday: "short" })} · ${formatPlainDate(dayKey, "hi-IN", { weekday: "short" })}</span><strong>${formatPlainDate(dayKey, "en-US", { month: "short", day: "numeric" })}</strong></header><div>${events.length ? events.map((occurrence) => {
          const isPast = occurrence.end <= now;
          return `<article class="calendar-event calendar-event--${occurrence.course.accent}${isPast ? " calendar-event--past" : ""}"${isPast ? ' aria-disabled="true"' : ""}><p>${escapeHtml(occurrence.course.code.split(" /")[0])}</p>${compactBilingualCopy(occurrence.course.title.en, occurrence.course.title.hi, "h3")}<time>${escapeHtml(chicagoEventTime(occurrence, locale))}</time><small>${text.originalIst}: ${escapeHtml(occurrence.indiaDate)} · ${escapeHtml(occurrence.course.start)}–${escapeHtml(occurrence.course.end)}</small>${isPast ? `<span class="calendar-event__past">${text.pastClass}</span>` : `<a href="${escapeHtml(occurrence.course.joinUrl)}" target="_blank" rel="noreferrer">${text.joinSession} ${icon("external")}</a>`}</article>`;
        }).join("") : `<p class="calendar-empty">${text.noClasses}</p>`}</div></section>`;
      }).join("")}</div>
      <div class="schedule-course-grid">${ctx.catalog.courses.map((course) => scheduleCard(course, lang, text)).join("")}</div>
    </section>`;
}

function renderResources(ctx, courseFilter = "") {
  const { lang, text, catalog } = ctx;
  const visible = courseFilter ? courseResources.filter((resource) => resource.course === courseFilter) : courseResources;
  const courses = courseFilter ? catalog.courses.filter((course) => course.slug === courseFilter) : catalog.courses;
  main.innerHTML = `<section class="page-intro"><p class="kicker"><span></span>${text.resources}</p>${bilingualCopy(ui.en.resourceLibrary, ui.hi.resourceLibrary, "h1")}${bilingualCopy(ui.en.resourceIntro, ui.hi.resourceIntro, "div", "page-intro__copy")}</section><section class="section-shell resource-library">${courses.map((course) => {
    const items = visible.filter((resource) => resource.course === course.slug);
    return `<section class="resource-course"><div class="section-heading"><div><p class="eyebrow">${escapeHtml(course.code)}</p>${compactBilingualCopy(course.title, course.hi.title, "h2")}</div><a href="${href(lang, `/course/${course.slug}`)}">${text.openSubject} ${icon("arrow")}</a></div>${items.length ? `<div class="resource-grid">${items.map((resource) => resourceCard(resource, lang, text)).join("")}</div>` : `<div class="empty-state empty-state--compact"><span>${icon("file")}</span><h3>${text.noResources}</h3></div>`}</section>`;
  }).join("")}</section>`;
}

function resourceAbsoluteUrl(resource) {
  return new URL(resource.path, new URL(".", location.href.split("#")[0])).href;
}

function renderResourceViewer(courseSlug, id, ctx) {
  const { lang, text, catalog } = ctx;
  const resource = courseResources.find((item) => item.course === courseSlug && item.id === id);
  const course = catalog.courses.find((item) => item.slug === courseSlug);
  if (!resource || !course) return renderNotFound(ctx);
  const titleHi = resource.titleHi || resource.title;
  const sourceUrl = resourceAbsoluteUrl(resource);
  const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
  const viewer = resource.kind === "pdf" ? `<iframe class="document-frame" src="${escapeHtml(sourceUrl)}#view=FitH" title="${escapeHtml(resource.title)}"></iframe>` : !isLocal ? `<iframe class="document-frame" src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(sourceUrl)}" title="${escapeHtml(resource.title)}"></iframe>` : `<div class="viewer-fallback"><span>${icon("file")}</span><p>${text.viewerUnavailable}</p></div>`;
  main.innerHTML = `<section class="viewer-header"><a class="back-link" href="${href(lang, `/resources/${courseSlug}`)}">← ${text.backToResources}</a><p class="eyebrow">${escapeHtml(course.code)} · ${escapeHtml(resource.extension.toUpperCase())}</p>${compactBilingualCopy(resource.title, titleHi, "h1")}<div class="viewer-actions"><a class="button button--primary" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">${text.openOriginal} ${icon("external")}</a><a class="button button--quiet" href="${escapeHtml(sourceUrl)}" download>${text.download}</a></div></section><section class="viewer-shell">${viewer}</section>`;
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
  searchPanel.querySelector("label").textContent = text.searchLabel;
  searchInput.placeholder = text.searchPlaceholder;
  document.querySelector(".site-footer p:first-child").textContent = text.footerNotice;
  document.querySelector("#footer-count").textContent = ctx.allLectures.filter((lecture) => lecture.status === "published").length;
  document.querySelector("#footer-count-label").textContent = text.verifiedNotes;
  document.querySelector("#footer-updated-label").textContent = text.updated;
  const updatedDate = new Date(`${catalog.updated}T12:00:00`);
  document.querySelector("#footer-date").textContent = `${new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(updatedDate)} · ${new Intl.DateTimeFormat("hi-IN", { dateStyle: "long" }).format(updatedDate)}`;
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
  if (maxScroll < 160) {
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

function route() {
  const parsed = parseRoute();
  const ctx = context(parsed.lang);
  setChrome(ctx, parsed.route);
  if (parsed.route === "/") renderHome(ctx);
  else if (parsed.route === "/courses") renderCourses(ctx);
  else if (parsed.route === "/schedule") renderSchedule(ctx);
  else if (parsed.route === "/resources") renderResources(ctx);
  else if (parsed.route.startsWith("/resources/")) renderResources(ctx, parsed.parts[1]);
  else if (parsed.route.startsWith("/resource/")) renderResourceViewer(parsed.parts[1], parsed.parts[2], ctx);
  else if (parsed.route.startsWith("/course/")) renderCourse(parsed.parts[1], ctx);
  else if (parsed.route.startsWith("/lecture/")) renderLecture(parsed.parts[1], ctx);
  else renderNotFound(ctx);
  main.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
  requestAnimationFrame(() => updateScrollFab(true));
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
      href: href(ctx.lang, `/course/${course.slug}`),
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
    const scheduleSummary = result.kind === "course" ? `<span class="search-result-card__schedule">
      <span class="search-result-card__days">${icon("calendar")} ${bilingualCopy(result.schedule.weekdayLabels.en.join(" & "), result.schedule.weekdayLabels.hi.join(", "))}</span>
      <span>${icon("clock")} ${bilingualCopy(result.schedule.indiaSummary.en, result.schedule.indiaSummary.hi)}</span>
      <span>${icon("clock")} ${bilingualCopy(result.schedule.chicagoSummary.en, result.schedule.chicagoSummary.hi)}</span>
    </span>` : "";
    return `<a class="search-result-card search-result-card--${result.kind}${result.accent ? ` search-result-card--${result.accent}` : ""}" href="${result.href}"><span class="search-result-card__main"><small>${escapeHtml(result.eyebrow)}</small>${compactBilingualCopy(result.title, result.titleHi, "strong")}${scheduleSummary}</span><span class="search-result-card__arrow">${icon("arrow")}</span></a>`;
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
    scrollFrame = 0;
  });
}, { passive: true });
window.addEventListener("resize", () => updateScrollFab());
document.addEventListener("click", (event) => {
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
document.addEventListener("submit", async (event) => {
  const form = event.target.closest("[data-capstone-login]");
  if (!form) return;
  event.preventDefault();
  const button = form.querySelector("button[type='submit']");
  const error = form.parentElement.querySelector("[data-capstone-error]");
  const formData = new FormData(form);
  button.disabled = true;
  error.hidden = true;
  try {
    unlockedCapstones = await unlockPrivateCapstones(
      String(formData.get("username") || ""),
      String(formData.get("code") || "")
    );
    route();
    document.getElementById("project")?.scrollIntoView({ block: "start" });
  } catch {
    form.elements.code.value = "";
    error.hidden = false;
    form.elements.code.focus();
  } finally {
    button.disabled = false;
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
