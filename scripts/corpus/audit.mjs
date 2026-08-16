#!/usr/bin/env node
/**
 * `npm run corpus:audit`
 *
 * État du corpus. Ne juge rien, ne corrige rien.
 *
 * Le corpus, ce sont les fiches validées — rien d'autre. Les 35 fiches de
 * `src/content/fixtures/` sont de l'échafaudage : elles ne comptent dans aucun total et
 * ne constituent pas une dette. Elles n'apparaissent ici que comme une liste de sujets
 * qu'il avait paru utile de traiter, ce qui n'est pas la même chose qu'une liste de
 * concepts à reprendre.
 */

import { loadAppContent, loadRecords } from "./lib/io.mjs";

const { authors, themes, fixtureConcepts, caseStudies } = await loadAppContent();
const records = await loadRecords();

const byStatus = (status) => records.filter(({ record }) => record?.status === status).map((r) => r.record);
const validated = byStatus("VALIDATED");
const inFlight = [...byStatus("CANDIDATE"), ...byStatus("IN_REVIEW")];
const rejected = byStatus("REJECTED");

const validatedIds = new Set(validated.map((r) => r.id));
const inFlightIds = new Set(inFlight.map((r) => r.id));

const appAuthorsOf = (record) =>
  (record.attribution?.authors ?? []).map((a) => a?.app_author_id).filter(Boolean);

const pad = (s, n) => String(s).padEnd(n);

console.log("Corpus — état\n");
console.log(`${pad("auteur", 14)}${pad("validés", 9)}en cours`);
for (const author of authors) {
  const v = validated.filter((r) => appAuthorsOf(r).includes(author.id)).length;
  const f = inFlight.filter((r) => appAuthorsOf(r).includes(author.id)).length;
  console.log(`${pad(author.id, 14)}${pad(v, 9)}${f}`);
}

console.log(
  "\nAucun quota par auteur : un écart entre auteurs reflète la littérature, il ne se comble pas."
);

const uncoveredThemes = themes.filter(
  (t) => !validated.some((r) => (r.graph?.themes ?? []).includes(t.id))
);

console.log(
  `\n${validated.length} fiche(s) validée(s) · ${inFlight.length} en cours · ${rejected.length} rejetée(s)`
);
if (uncoveredThemes.length > 0)
  console.log(`thèmes sans aucune fiche validée : ${uncoveredThemes.map((t) => t.id).join(", ")}`);

if (rejected.length > 0) {
  const reasons = new Map();
  for (const r of rejected) reasons.set(r.rejection_reason, (reasons.get(r.rejection_reason) ?? 0) + 1);
  console.log(`\nrejets : ${[...reasons].map(([reason, n]) => `${reason} ×${n}`).join(" · ")}`);
}

// Suggestions de sujets. L'ordre est calculé sur le graphe de l'échafaudage — c'est une
// heuristique d'organisation du travail, pas une affirmation sur le champ : un concept
// très relié dans des fiches non vérifiées ne l'est pas nécessairement dans la littérature.
const untouched = fixtureConcepts.filter(
  (c) => !validatedIds.has(c.id) && !inFlightIds.has(c.id)
);

if (untouched.length > 0) {
  const incoming = new Map();
  for (const c of fixtureConcepts)
    for (const id of [...c.relatedConcepts, ...c.prerequisites, ...(c.deepensInto ?? [])])
      incoming.set(id, (incoming.get(id) ?? 0) + 1);

  const next = untouched
    .map((c) => ({ id: c.id, weight: incoming.get(c.id) ?? 0, authors: c.authors.join("/") }))
    .sort((a, b) => b.weight - a.weight || a.id.localeCompare(b.id, "fr"))
    .slice(0, 8);

  console.log(
    `\n${untouched.length} sujet(s) d'échafaudage jamais instruit(s). Pistes, par centralité` +
      " dans le graphe d'échafaudage (heuristique de travail, pas un constat sur le champ) :"
  );
  for (const c of next) console.log(`  ${pad(c.id, 32)}${pad(c.authors, 14)}← ${c.weight} renvoi(s)`);
}

// Un cas pratique ne vaut que si les concepts qu'il mobilise sont validés. Ceux-ci
// renvoient encore à de l'échafaudage : ils sont eux-mêmes de l'échafaudage.
const blocked = caseStudies.filter((cs) =>
  cs.readings.some((r) => r.conceptIds.some((id) => !validatedIds.has(id)))
);
if (blocked.length > 0)
  console.log(
    `\n${blocked.length} cas pratique(s) reposent sur des concepts non validés : ${blocked
      .map((cs) => cs.id)
      .join(", ")}`
  );
