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

const { authors, themes, families, domains, fixtureConcepts } = await loadAppContent();
const records = await loadRecords();

const byStatus = (status) => records.filter(({ record }) => record?.status === status).map((r) => r.record);
const validated = byStatus("VALIDATED");
const inFlight = [...byStatus("CANDIDATE"), ...byStatus("IN_REVIEW")];
const rejected = byStatus("REJECTED");

const validatedIds = new Set(validated.map((r) => r.id));
const inFlightIds = new Set(inFlight.map((r) => r.id));

const appAuthorsOf = (record) =>
  (record.authors ?? []).map((a) => a?.app_author_id).filter(Boolean);

const pad = (s, n) => String(s).padEnd(n);

/*
 * L'état par domaine, et il se lit dans cet ordre : un domaine peut être **déclaré** dans la
 * taxonomie sans avoir la moindre carte. C'est l'état normal d'un domaine qu'on vient
 * d'ouvrir, et le confondre avec un domaine en panne d'instruction ferait lire la même chose
 * à deux situations opposées. Le rattachement d'une fiche est le même que dans
 * l'application : son `domain` s'il en déclare un, sinon le domaine de son premier thème.
 */
const domainOfTheme = new Map(themes.map((t) => [t.id, t.domain]));
const domainOf = (record) =>
  record.domain ?? (record.themes ?? []).map((t) => domainOfTheme.get(t)).find(Boolean);

console.log("Corpus — état\n");

console.log(`${pad("domaine", 38)}${pad("thèmes", 8)}${pad("validés", 9)}en cours`);
for (const family of [...families].sort((a, b) => a.order - b.order)) {
  console.log(`\n  ${family.label}`);
  const familyDomains = domains
    .filter((d) => d.familyId === family.id)
    .sort((a, b) => a.order - b.order);
  for (const domain of familyDomains) {
    const t = themes.filter((theme) => theme.domain === domain.id).length;
    const v = validated.filter((r) => domainOf(r) === domain.id).length;
    const f = inFlight.filter((r) => domainOf(r) === domain.id).length;
    /*
     * Même définition que `hasCorpus` dans src/domain/taxonomy : un domaine est pourvu
     * quand il a des **cartes**, pas quand il a des thèmes. Déclarer un thème est une
     * décision de structure, le pourvoir est une décision de contenu.
     *
     * Le compte des thèmes entrait ici du temps où les deux avançaient ensemble, et
     * l'écart ne pouvait pas se voir. Ouvrir un domaine par ses thèmes — la procédure
     * décrite dans corpus/perimeter.md — le rend visible aussitôt : la mention tombait à
     * la déclaration des thèmes, en annonçant un corpus là où il n'y avait pas une carte.
     */
    const state = v === 0 ? "  — corpus en cours de constitution" : "";
    console.log(`${pad(`  ${domain.label}`, 38)}${pad(t, 8)}${pad(v, 9)}${f}${state}`);
  }
}

const orphans = [...validated, ...inFlight].filter((r) => !domainOf(r));
if (orphans.length > 0)
  console.log(
    `\n⚠ ${orphans.length} fiche(s) qu'aucun domaine ne recueille : ${orphans
      .map((r) => r.id)
      .join(", ")}`
  );

console.log(`\n${pad("auteur", 14)}${pad("validés", 9)}en cours`);
for (const author of authors) {
  const v = validated.filter((r) => appAuthorsOf(r).includes(author.id)).length;
  const f = inFlight.filter((r) => appAuthorsOf(r).includes(author.id)).length;
  console.log(`${pad(author.id, 14)}${pad(v, 9)}${f}`);
}

console.log(
  "\nAucun quota par auteur : un écart entre auteurs reflète la littérature, il ne se comble pas."
);

const uncoveredThemes = themes.filter(
  (t) => !validated.some((r) => (r.themes ?? []).includes(t.id))
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

// Les sujets d'échafaudage jamais instruits. Ce sont des pistes, pas une dette : la file
// d'instruction est établie par le cartographe à partir du champ, pas de cette liste.
const untouched = fixtureConcepts.filter(
  (c) => !validatedIds.has(c.id) && !inFlightIds.has(c.id)
);

if (untouched.length > 0) {
  console.log(
    `\n${untouched.length} sujet(s) d'échafaudage jamais instruit(s) — pour mémoire :`
  );
  for (const c of untouched.slice(0, 8)) console.log(`  ${c.id}`);
  if (untouched.length > 8) console.log(`  … et ${untouched.length - 8} autres`);
  console.log("\nLa file d'instruction est dans corpus/map/queue.json, établie par le cartographe.");
}
