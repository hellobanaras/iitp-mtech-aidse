#!/usr/bin/env node

/**
 * Generate static, metadata-rich aliases for published lecture notes.
 *
 * Hash routes are ideal for the client-side reader, but link-preview crawlers
 * (including WhatsApp) do not send the URL fragment to the server and cannot
 * run the SPA before building a preview.  These tiny static pages provide a
 * crawlable URL with the lecture title, description, and image, then hand a
 * real visitor back to the canonical hash route.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { catalog } from "../data/catalog.js";
import { courseResources } from "../data/resources.js";

const projectDirectory = dirname(dirname(fileURLToPath(import.meta.url)));
const publicSiteUrl = "https://hellobanaras.github.io/iitp-mtech-aidse/";

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const descriptionFor = (lecture) =>
  `English lecture notes for ${lecture.course.title} at IIT Patna, recorded ${lecture.displayDate}: high-level coverage, source slide trail, insights, references, practice signals, and 25 explained MCQs.`;

const pageFor = ({ segments, title, description, keywords = [], publishedTime }) => {
  const route = `/${segments.join("/")}`;
  const shareUrl = `${publicSiteUrl}${segments.join("/")}/`;
  // Relative navigation keeps local preview links on the local server while
  // the absolute share URL remains stable for social metadata and canonicals.
  const readerHref = `${"../".repeat(segments.length)}#${route}`;
  const publishedMeta = publishedTime
    ? `<meta property="article:published_time" content="${escapeHtml(publishedTime)}" />`
    : "";
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(keywords.join(", "))}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="IIT Patna AI &amp; Data Science Lecture Atlas" />
    <meta property="og:url" content="${escapeHtml(shareUrl)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${publicSiteUrl}assets/lecture-atlas-social.png" />
    <meta property="og:image:alt" content="IIT Patna lecture notes study companion" />
${publishedMeta}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${publicSiteUrl}assets/lecture-atlas-social.png" />
    <link rel="canonical" href="${escapeHtml(shareUrl)}" />
    <meta http-equiv="refresh" content="0; url=${escapeHtml(readerHref)}" />
    <script>location.replace(${JSON.stringify(readerHref)});</script>
  </head>
  <body>
    <p>Opening <a href="${escapeHtml(readerHref)}">${escapeHtml(title)}</a>…</p>
  </body>
</html>
`;
};

const publishedLectures = catalog.courses.flatMap((course) =>
  course.lectures
    .filter((lecture) => lecture.status === "published")
    .map((lecture) => ({ ...lecture, course }))
);

const pages = [
  {
    segments: ["courses"],
    title: "Subjects & Courses · IIT Patna AI & Data Science Lecture Atlas",
    description: `Browse ${catalog.courses.length} IIT Patna AI & Data Science subjects with class schedules, recordings, resources, and chronological lecture notes.`,
    keywords: ["IIT Patna subjects", "AI courses", "data science courses", ...catalog.courses.map((course) => course.title)]
  },
  {
    segments: ["schedule"],
    title: "Class Schedule · IIT Patna AI & Data Science Lecture Atlas",
    description: "See the weekly IIT Patna AI & Data Science class schedule with daylight-saving-aware Chicago times, original IST times, meeting links, and past-class context.",
    keywords: ["IIT Patna class schedule", "AI class timetable", "IST class time", "Chicago class time", "Teams meeting"]
  },
  {
    segments: ["resources"],
    title: "Learning Resources · IIT Patna AI & Data Science Lecture Atlas",
    description: "Open textbooks, lecture slides, inline courses, notebooks, datasets, and official programme materials organised by IIT Patna AI & Data Science subject.",
    keywords: ["AI learning resources", "data science textbooks", "open courseware", "IIT Patna resources", ...catalog.courses.map((course) => course.title)]
  },
  ...catalog.courses.map((course) => ({
    segments: ["course", course.routeSlug],
    title: `${course.title} (${course.code}) · Course Notes & Schedule`,
    description: `${course.title} for IIT Patna's Executive M.Tech AI & Data Science programme: class times, Teams join link, recordings, ${course.lectures.filter((lecture) => lecture.status === "published").length} lecture notes, and subject resources.`,
    keywords: [course.code, course.title, "course notes", "lecture recordings", "class schedule"]
  })),
  ...catalog.courses.map((course) => ({
    segments: ["resources", course.routeSlug],
    title: `${course.title} Resources (${course.code}) · IIT Patna Lecture Atlas`,
    description: `Books, slides, videos, datasets, and open learning links curated for IIT Patna's ${course.title} subject.`,
    keywords: [course.code, course.title, "open resources", "books", "slides", "videos", "datasets"]
  })),
  ...courseResources.map((resource) => {
    const course = catalog.courses.find((item) => item.slug === resource.course);
    const courseSegment = course?.routeSlug || resource.course;
    const courseTitle = course?.title || "Programme resources";
    const courseCode = course?.code || "IIT Patna programme";
    return {
      segments: ["resource", courseSegment, resource.id],
      title: `${resource.title} · ${course?.title ? `${courseTitle} Resources` : "Programme resources"}`,
      description: resource.description || `Open ${String(resource.extension || "").toUpperCase()} learning resource for ${courseTitle}.`,
      keywords: [courseCode, courseTitle, resource.title, resource.extension || "resource", "study resource"]
    };
  }),
  ...publishedLectures.map((lecture) => ({
    segments: ["lecture", lecture.id],
    title: `${lecture.title} · ${lecture.course.title} · Lecture Notes`,
    description: descriptionFor(lecture),
    keywords: [lecture.course.code, lecture.course.title, lecture.title, "lecture notes", "slide references", "MCQs", ...lecture.overview],
    publishedTime: lecture.sourceRecordedAt || `${lecture.date}T00:00:00+05:30`
  }))
];

const generatedLocations = pages.map(({ segments }) => join(projectDirectory, ...segments, "index.html"));
for (const location of generatedLocations) {
  mkdirSync(dirname(location), { recursive: true });
  const page = pages.find(({ segments }) => join(projectDirectory, ...segments, "index.html") === location);
  writeFileSync(location, pageFor(page), "utf8");
}

// resources/ already contains intentionally public books and slides, so only
// replace its generated index page. Do not remove or rewrite learner files.
const resourcesIndex = join(projectDirectory, "resources", "index.html");
writeFileSync(resourcesIndex, pageFor(pages.find(({ segments }) => segments.length === 1 && segments[0] === "resources")), "utf8");

console.log(`Generated ${pages.length + 1} metadata share pages (including resources/index.html).`);
