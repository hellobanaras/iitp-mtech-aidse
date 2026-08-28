const releaseVersion = new URL(import.meta.url).searchParams.get("v") || "dev";
const [
  { eai6401Lecture20260817 },
  { eai6401Lecture20260818 },
  { eai6401Lecture20260824 },
  { eai6401Lecture20260825 },
  { eai6402Lecture20260822 },
  { eai6403Lecture20260823 },
  { ecs6401Lecture20260819 },
  { ecs6401Lecture20260821 },
  { ecs6401Lecture20260826 },
  { ecc6404Lecture20260817 },
  { ecc6404Lecture20260819 },
  { ecc6404Lecture20260824 },
  { ecc6404Lecture20260826 },
  { ebb6402Lecture20260818 },
  { ebb6402Lecture20260820 },
  { ebb6402Lecture20260825 },
  { ebb6403Lecture20260821 }
] = await Promise.all([
  import(`./lectures/eai-6401-2026-08-17.js?v=${releaseVersion}`),
  import(`./lectures/eai-6401-2026-08-18.js?v=${releaseVersion}`),
  import(`./lectures/eai-6401-2026-08-24.js?v=${releaseVersion}`),
  import(`./lectures/eai-6401-2026-08-25.js?v=${releaseVersion}`),
  import(`./lectures/eai-6402-2026-08-22.js?v=${releaseVersion}`),
  import(`./lectures/eai-6403-2026-08-23.js?v=${releaseVersion}`),
  import(`./lectures/ecs-6401-2026-08-19-175559.js?v=${releaseVersion}`),
  import(`./lectures/ecs-6401-2026-08-21-180935.js?v=${releaseVersion}`),
  import(`./lectures/ecs-6401-2026-08-26-180538.js?v=${releaseVersion}`),
  import(`./lectures/ecc-6404-2026-08-17-193438.js?v=${releaseVersion}`),
  import(`./lectures/ecc-6404-2026-08-19-193245.js?v=${releaseVersion}`),
  import(`./lectures/ecc-6404-2026-08-24-193338.js?v=${releaseVersion}`),
  import(`./lectures/ecc-6404-2026-08-26-193241.js?v=${releaseVersion}`),
  import(`./lectures/ebb-6402-2026-08-18-180205.js?v=${releaseVersion}`),
  import(`./lectures/ebb-6402-2026-08-20-180203.js?v=${releaseVersion}`),
  import(`./lectures/ebb-6402-2026-08-25-180424.js?v=${releaseVersion}`),
  import(`./lectures/ebb-6403-2026-08-21-075934.js?v=${releaseVersion}`)
]);

// Each lecture is a single bilingual publication unit.
export const lectureNotes = {
  "eai-6401-2026-08-17": eai6401Lecture20260817,
  "eai-6401-2026-08-18": eai6401Lecture20260818,
  "eai-6401-2026-08-24": eai6401Lecture20260824,
  "eai-6401-2026-08-25": eai6401Lecture20260825,
  "eai-6402-2026-08-22": eai6402Lecture20260822,
  "eai-6403-2026-08-23": eai6403Lecture20260823,
  "ecs-6401-2026-08-19-175559": ecs6401Lecture20260819,
  "ecs-6401-2026-08-21-180935": ecs6401Lecture20260821,
  "ecs-6401-2026-08-26-180538": ecs6401Lecture20260826,
  "ecc-6404-2026-08-17-193438": ecc6404Lecture20260817,
  "ecc-6404-2026-08-19-193245": ecc6404Lecture20260819,
  "ecc-6404-2026-08-24-193338": ecc6404Lecture20260824,
  "ecc-6404-2026-08-26-193241": ecc6404Lecture20260826,
  "ebb-6402-2026-08-18-180205": ebb6402Lecture20260818,
  "ebb-6402-2026-08-20-180203": ebb6402Lecture20260820,
  "ebb-6402-2026-08-25-180424": ebb6402Lecture20260825,
  "ebb-6403-2026-08-21-075934": ebb6403Lecture20260821
};
