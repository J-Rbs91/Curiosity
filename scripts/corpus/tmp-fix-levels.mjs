/**
 * Second temps de la composition : range les sources que le validateur n'admet pas dans
 * `secondary_sources` / `francophone_sources`.
 *
 * Ne REQUALIFIE rien. Le niveau attribué par corpus-reception-analyst est conservé tel
 * quel ; seule la place de l'entrée change, conformément à la hiérarchie documentaire
 * (docs/corpus-workflow.md §4) et au schéma, qui dit que les champs de sources portent les
 * niveaux B et C, et que « les niveaux D et E ne s'enregistrent pas comme sources ».
 *
 * - niveau A : texte primaire. Sa place n'est pas dans les sources secondaires.
 * - niveaux D et E : détection seulement. Consignés, jamais comptés comme preuve.
 *
 * Rien n'est supprimé : tout part dans `evidence._sources_hors_niveaux_b_c`, qui reste
 * lisible par le contrôleur.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

const IDS = [
  "inertie-structurelle-et-selection",
  "isomorphisme-institutionnel",
  "organisation-genree",
  "regulation-controle-autonome",
];

const MOTIF = {
  A: "Niveau A (texte primaire) : ne s'enregistre pas comme source secondaire. Conservé ici parce que la réception s'appuie dessus.",
  D: "Niveau D (pédagogique) : détection uniquement, jamais preuve. Le schéma interdit de l'enregistrer comme source.",
  E: "Niveau E (web général) : pistes uniquement, jamais cité. Le schéma interdit de l'enregistrer comme source.",
};

for (const id of IDS) {
  const file = resolve(ROOT, `corpus/review/${id}.json`);
  const record = JSON.parse(await readFile(file, "utf8"));
  const e = record.evidence;
  const parked = [];

  const sift = (list, champ) =>
    (list ?? []).filter((s) => {
      if (s.level === "B" || s.level === "C" || !s.level) return true;
      parked.push({
        _champ_d_origine: champ,
        _motif_du_deplacement: MOTIF[s.level] ?? `Niveau « ${s.level} » non admis comme source.`,
        ...s,
      });
      return false;
    });

  e.secondary_sources = sift(e.secondary_sources, "secondary_sources");
  e.francophone_sources = sift(e.francophone_sources, "francophone_sources");

  /*
   * Reynaud 1989 : le volume n'a pas été ouvert, et aucun DOI ni ISBN n'a pu être résolu
   * pour le livre lui-même (Crossref ne porte que ses comptes rendus ; Zotero hors
   * service). Règle 2 de la hiérarchie : une référence qu'on ne peut pas atteindre
   * n'existe pas. Elle sort donc des sources primaires — mais la LACUNE, elle, se déclare.
   */
  if (id === "regulation-controle-autonome") {
    const avant = e.primary_sources.length;
    const sorties = e.primary_sources.filter((s) => s.year === 1989 && s.kind === "book");
    e.primary_sources = e.primary_sources.filter((s) => !(s.year === 1989 && s.kind === "book"));
    if (e.primary_sources.length !== avant - 1) throw new Error("filtre Reynaud 1989 inattendu");
    e._source_primaire_visee_non_atteinte = sorties.map((s) => ({
      _motif_du_deplacement:
        "Sortie de primary_sources : ni DOI, ni ISBN, ni URL stable, et le volume n'a pas été ouvert. Recherche Crossref refaite le 17 août 2026 — elle ne remonte que les comptes rendus de l'ouvrage (Lizón 1991, Bourque 1991, Gagné 1991, Dubar & Eymard-Duvernay 1990), jamais le livre. Zotero n'a pas répondu (fetch failed), ce qui n'est pas une bibliothèque vide.",
      _consequence:
        "La fiche est établie sur le seul article de 1988. C'est dans ce livre, et non dans l'article, que l'ensemble est habituellement rapporté à une « théorie de la régulation sociale » : tant qu'il n'est pas ouvert, la fiche ne peut rien affirmer de cette théorie d'ensemble.",
      ...s,
    }));
    record.validation.confidence_flags.unshift(
      "SOURCE PRIMAIRE MANQUANTE — Les règles du jeu (Armand Colin, 1989) n'a pas pu être atteint : aucun DOI ni ISBN résolu, volume non ouvert. La fiche repose entièrement sur l'article de la Revue française de sociologie de 1988, qui a été lu intégralement. Toute affirmation sur la « théorie de la régulation sociale » comme ensemble reste hors de portée de ce dossier."
    );
  }

  if (parked.length > 0) e._sources_hors_niveaux_b_c = parked;

  await writeFile(file, `${JSON.stringify(record, null, 2)}\n`, "utf8");
  console.log(
    `${id} : ${parked.length} source(s) déplacée(s) — restent ${e.secondary_sources.length} secondaires et ${e.francophone_sources.length} francophones`
  );
}
