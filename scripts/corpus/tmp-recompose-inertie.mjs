/**
 * Report du tour de correction 1 dans corpus/review/inertie-structurelle-et-selection.json.
 *
 * Les deux fragments de corpus/evidence/<id>/ ont été corrigés par les agents amont après
 * le verdict REWORK de la passe A. Ce script REPORTE leur état corrigé dans
 * l'enregistrement en revue, en suivant exactement la logique de composition d'origine
 * (tmp-compose.mjs + tmp-fix-levels.mjs + tmp-fix-attribution.mjs). Il ne fabrique rien.
 *
 * NE TOUCHE PAS : status, scope, pedagogy, graph, validation (verdicts, drapeaux),
 * rejection_reason.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const ID = "inertie-structurelle-et-selection";
const read = async (p) => JSON.parse(await readFile(resolve(ROOT, p), "utf8"));
const arr = (v) => (Array.isArray(v) ? v : []);

const file = resolve(ROOT, `corpus/review/${ID}.json`);
const record = JSON.parse(await readFile(file, "utf8"));
const primary = await read(`corpus/evidence/${ID}/evidence.primary-reading.json`);
const reception = await read(`corpus/evidence/${ID}/evidence.reception.json`);

const pe = primary.evidence;
const re = reception.evidence;

/* --- citation : forme courte de carte, telle que corrigée par le lecteur primaire --- */
const q = pe.key_quotation;
const f = q._fragment_carte_150;
const key_quotation = {
  language: "fr",
  original_language: q.original_language ?? "en",
  translation: q.translation,
  attributed_to: q.attributed_to,
  primary_source_index: q.primary_source_index,
  text: f.text_fr,
  original_text: f.original_en,
  locator: q.locator,
  _card_fit_note: `Forme courte préparée par le lecteur primaire (${f.longueur} caractères). ${f.note}`,
};

/* --- sources : les niveaux hors B/C repartent dans _sources_hors_niveaux_b_c --- */
const MOTIF = {
  A: "Niveau A (texte primaire) : ne s'enregistre pas comme source secondaire. Conservé ici parce que la réception s'appuie dessus.",
  D: "Niveau D (pédagogique) : détection uniquement, jamais preuve. Le schéma interdit de l'enregistrer comme source.",
  E: "Niveau E (web général) : pistes uniquement, jamais cité. Le schéma interdit de l'enregistrer comme source.",
};
const parked = [];
const sift = (list, champ) =>
  arr(list).filter((s) => {
    if (s.level === "B" || s.level === "C" || !s.level) return true;
    parked.push({
      _champ_d_origine: champ,
      _motif_du_deplacement: MOTIF[s.level] ?? `Niveau « ${s.level} » non admis comme source.`,
      ...s,
    });
    return false;
  });

const secondary = sift(re.secondary_sources, "secondary_sources");
const francophone = sift(re.francophone_sources, "francophone_sources");

record.evidence = {
  concept_definition: pe.concept_definition,
  mechanism: arr(pe.mechanism),
  conditions: pe.conditions,
  key_quotation,
  primary_sources: arr(pe.primary_sources),
  secondary_sources: secondary,
  francophone_sources: francophone,
  translation_notes: [...arr(pe.translation_notes), ...arr(re.translation_notes)],
  known_ambiguities: [...arr(pe.known_ambiguities), ...arr(re.known_ambiguities)],
  common_misinterpretations: [
    ...arr(pe.common_misinterpretations),
    ...arr(re.common_misinterpretations),
  ],
  limitations: arr(pe.limitations),
  reception: re.reception ?? { consensus: null, debates: [], critiques: [] },
  _sources_hors_niveaux_b_c: parked,
};

/* --- attribution : recomposée, puis rangée pour l'affichage comme au premier passage --- */
const a = reception.attribution;
const t = structuredClone(a.term_origin);

/*
 * `coined_in` : la pagination de l'expression relevait du texte primaire. Le fragment de
 * réception portait « p. 930-931 » et son titulaire a expressément déféré la valeur au
 * lecteur primaire, qui l'a fixée au tour de correction 1 : la phrase d'annonce « there
 * are a number of processes that generate structural inertia » est imprimée p. 930, et le
 * concept n'est théorisé qu'en 1984, p. 149-155.
 */
t.coined_in =
  "« The Population Ecology of Organizations », AJS 82(5), 1977, p. 930, pour l'expression (« there are a number of processes that generate structural inertia ») ; « Structural Inertia and Organizational Change », ASR 49(2), 1984, p. 149-155, pour le concept articulé.";

const deplace = [];
if (t.coined_by) deplace.push(`CE QUI ÉTAIT EN \`coined_by\` : ${t.coined_by}`);
t.note = [
  ...deplace,
  t.note ? `NOTE D'ORIGINE : ${t.note}` : null,
  "RANGEMENT — `coined_by` et `coined_in` sont affichés tels quels sur la carte par la projection ; ils ne peuvent donc porter qu'un nom et une référence. Le raisonnement de l'analyste de réception, déplacé ici, n'a pas été modifié d'un mot.",
]
  .filter(Boolean)
  .join("\n\n");
t.coined_by = null;

record.attribution = {
  authors: arr(a.authors).map((x) => ({ name: x.name, app_author_id: x.app_author_id ?? null })),
  authorship: a.authorship,
  associated_author: record.attribution.associated_author,
  term_origin: t,
  _reception_verdict: a.verdict ?? null,
};

/* --- provenance : on reprend les fragments à jour et on consigne ce report --- */
record.provenance.updated_at = "2026-08-17";
record.provenance.runs = [
  primary.provenance_fragment ?? record.provenance.runs[0],
  reception.provenance_fragment ?? record.provenance.runs[1],
  ...record.provenance.runs.slice(2),
  {
    agent: "corpus-card-writer",
    at: "2026-08-17",
    action:
      "Tour de correction 1 (verdict de passe A : REWORK). Report dans l'enregistrement de l'état corrigé des deux fragments de corpus/evidence/ : localisateurs de 1977, forme et note de la citation de carte, notices et paginations des sources secondaires et francophones, auctorité du chapitre Dunod 2024, known_ambiguities, limitations, common_misinterpretations, reception, term_origin. Aucun élément n'a été recherché ni ajouté ici : tout est recopié des fragments.",
    reserve:
      "Le bloc `validation` n'a pas été touché : ni les verdicts, ni `confidence_flags`. Trois drapeaux y décrivent encore un état antérieur des fragments (source secondaire, désignation de la source primaire par la carte, auctorité du chapitre Dunod) ; signalé à l'appelant, non corrigé ici.",
  },
];

await writeFile(file, `${JSON.stringify(record, null, 2)}\n`, "utf8");

const L = (s) => (s ?? "").length;
console.log(
  `${ID}\n  nom ${L(record.canonical_name_fr)}/48 · accroche ${L(record.pedagogy.hook_question)}/85 · résumé ${L(
    record.pedagogy.short_explanation
  )}/170 · citation ${L(record.evidence.key_quotation.text)}/150 · sources ${
    record.evidence.primary_sources.length
  }P/${secondary.length}S/${francophone.length}F · hors B/C ${parked.length}`
);
