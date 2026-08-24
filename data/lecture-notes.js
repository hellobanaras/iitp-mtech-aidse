const releaseVersion = new URL(import.meta.url).searchParams.get("v") || "dev";
const [
  { eai6401Lecture20260817 },
  { eai6401Lecture20260818 },
  { eai6402Lecture20260822 },
  { eai6403Lecture20260823 }
] = await Promise.all([
  import(`./lectures/eai-6401-2026-08-17.js?v=${releaseVersion}`),
  import(`./lectures/eai-6401-2026-08-18.js?v=${releaseVersion}`),
  import(`./lectures/eai-6402-2026-08-22.js?v=${releaseVersion}`),
  import(`./lectures/eai-6403-2026-08-23.js?v=${releaseVersion}`)
]);

// Each lecture is a single bilingual publication unit.
export const lectureNotes = {
  "eai-6401-2026-08-17": eai6401Lecture20260817,
  "eai-6401-2026-08-18": eai6401Lecture20260818,
  "eai-6402-2026-08-22": eai6402Lecture20260822,
  "eai-6403-2026-08-23": eai6403Lecture20260823
};
