#!/usr/bin/env node
/**
 * `npm run corpus:audit`
 *
 * État du corpus : ce qui est vérifié, ce qui est encore servi depuis le contenu hérité,
 * ce qui est en cours d'instruction. Ne juge rien, ne corrige rien — il donne le reste à
 * faire, sans quota ni objectif de volume (voir §10 de docs/corpus-workflow.md).
 */

import { loadAppContent, loadRecords } from "./lib/io.mjs";

const { authors, themes, legacyConcepts, caseStudies } = await loadAppContent();
const records = await loadRecords();

const byStatus = (status) => records.filter(({ record }) => record?.status === status).map((r) => r.record);
const validated = byStatus("VALIDATED");
const inFlight = [...byStatus("CANDIDATE"), ...byStatus("IN_REVIEW")];
const rejected = byStatus("REJECTED");

const validatedIds = new Set(validated.map((r) => r.id));
const inFlightIds = new Set(inFlight.map((r) => r.id));
const remaining = legacyConcepts.filter((c) => !validatedIds.has(c.id));

const appAuthorsOf = (record) =>
  (record.attribution?.authors ?? []).map((a) => a?.app_author_id).filter(Boolean);

console.log("Corpus — état\n");

const pad = (s, n) => String(s).padEnd(n);
console.log(`${pad("auteur", 14)}${pad("validés", 9)}${pad("en cours", 10)}hérités non repris`);
for (const author of authors) {
  const v = validated.filter((r) => appAuthorsOf(r).includes(author.id)).length;
  const f = inFlight.filter((r) => appAuthorsOf(r).includes(author.id)).length;
  const l = remaining.filter((c) => c.authors.includes(author.id)).length;
  console.log(`${pad(author.id, 14)}${pad(v, 9)}${pad(f, 10)}${l}`);
}

const uncoveredThemes = themes.filter(
  (t) => !validated.some((r) => (r.graph?.themes ?? []).includes(t.id))
);

console.log(
  `\n${validated.length} fiche(s) validée(s) · ${inFlight.length} en cours · ${rejected.length} rejetée(s)`
);
console.log(`${remaining.length} concept(s) encore servi(s) depuis src/content/concepts.ts`);
if (uncoveredThemes.length > 0)
  console.log(`thèmes sans aucune fiche validée : ${uncoveredThemes.map((t) => t.id).join(", ")}`);

if (rejected.length > 0) {
  const reasons = new Map();
  for (const r of rejected) reasons.set(r.rejection_reason, (reasons.get(r.rejection_reason) ?? 0) + 1);
  console.log(
    `\nrejets : ${[...reasons].map(([reason, n]) => `${reason} ×${n}`).join(" · ")}`
  );
}

// Reste à instruire, par centralité : un concept dont beaucoup d'autres dépendent fait
// plus de dégâts s'il est faux, et débloque plus de fiches s'il est vérifié.
if (remaining.length > 0) {
  const incoming = new Map();
  for (const c of legacyConcepts)
    for (const id of [...c.relatedConcepts, ...c.prerequisites, ...(c.deepensInto ?? [])])
      incoming.set(id, (incoming.get(id) ?? 0) + 1);

  const next = remaining
    .filter((c) => !inFlightIds.has(c.id))
    .map((c) => ({ id: c.id, weight: incoming.get(c.id) ?? 0, authors: c.authors.join("/") }))
    .sort((a, b) => b.weight - a.weight || a.id.localeCompare(b.id, "fr"))
    .slice(0, 8);

  console.log("\nÀ instruire en priorité (centralité dans le graphe) :");
  for (const c of next) console.log(`  ${pad(c.id, 32)}${pad(c.authors, 14)}← ${c.weight} renvoi(s)`);
}

// Un cas pratique ne vaut que si les concepts qu'il mobilise sont validés.
const blocked = caseStudies.filter((cs) =>
  cs.readings.some((r) => r.conceptIds.some((id) => !validatedIds.has(id)))
);
if (blocked.length > 0)
  console.log(
    `\n${blocked.length} cas pratique(s) mobilisent encore des concepts non validés : ${blocked
      .map((cs) => cs.id)
      .join(", ")}`
  );
