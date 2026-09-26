import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import {
  DOSSIER_STATUTS,
  dossierBrut,
  evidenceOrigin,
  listEvidenceFiles,
  resolveDossier,
} from "./factcheck-evidence.mjs";

/**
 * Ce que ces tests protègent est un silence, et c'est ce qui le rend coûteux : quand le pack de
 * preuve ne ramassait que `lecture.json`, un dossier de deux cent mille octets déposé sous un
 * autre nom ne provoquait aucune erreur. Le fact-check se rabattait sur le seul enregistrement
 * validé, et rien dans sa sortie ne disait que la lecture primaire n'avait pas été vue.
 */

const dirs = [];

function dossier(fichiers) {
  const dir = mkdtempSync(path.join(tmpdir(), "evidence-"));
  dirs.push(dir);
  for (const nom of fichiers) writeFileSync(path.join(dir, nom), "{}\n", "utf8");
  return dir;
}

function dossierEcrit(contenus) {
  const dir = mkdtempSync(path.join(tmpdir(), "evidence-"));
  dirs.push(dir);
  for (const [nom, contenu] of Object.entries(contenus))
    writeFileSync(path.join(dir, nom), contenu, "utf8");
  return dir;
}

afterEach(() => {
  while (dirs.length) rmSync(dirs.pop(), { recursive: true, force: true });
});

describe("listEvidenceFiles", () => {
  it("ramasse la lecture déposée sous son nom historique", () => {
    const dir = dossier(["lecture.json"]);
    expect(listEvidenceFiles(dir).map((entry) => entry.name)).toEqual(["lecture.json"]);
  });

  it("ramasse une lecture primaire nommée autrement, et sa réception", () => {
    const dir = dossier(["evidence.primary-reading.json", "evidence.reception.json"]);
    expect(listEvidenceFiles(dir).map((entry) => entry.name)).toEqual([
      "evidence.primary-reading.json",
      "evidence.reception.json",
    ]);
  });

  it("ramasse la réception déposée à côté d’une lecture", () => {
    const dir = dossier(["lecture.json", "reception.json"]);
    expect(listEvidenceFiles(dir).map((entry) => entry.name)).toEqual([
      "lecture.json",
      "reception.json",
    ]);
  });

  it("écarte le fichier du scout, qui ne prétend avoir rien lu", () => {
    const dir = dossier(["lecture.json", "scouting.json"]);
    expect(listEvidenceFiles(dir).map((entry) => entry.name)).toEqual(["lecture.json"]);
  });

  it("écarte ce qui n’est pas du JSON", () => {
    const dir = dossier(["lecture.json", "notes.md"]);
    expect(listEvidenceFiles(dir).map((entry) => entry.name)).toEqual(["lecture.json"]);
  });

  it("rend les fichiers triés, pour que deux exécutions produisent le même pack", () => {
    const dir = dossier(["zzz.json", "aaa.json", "mmm.json"]);
    expect(listEvidenceFiles(dir).map((entry) => entry.name)).toEqual([
      "aaa.json",
      "mmm.json",
      "zzz.json",
    ]);
  });

  it("rend une liste vide plutôt qu’une erreur quand la carte n’a pas de dossier", () => {
    const parent = mkdtempSync(path.join(tmpdir(), "evidence-"));
    dirs.push(parent);
    expect(listEvidenceFiles(path.join(parent, "absent"))).toEqual([]);
  });

  it("rend une liste vide quand le chemin est un fichier", () => {
    const parent = mkdtempSync(path.join(tmpdir(), "evidence-"));
    dirs.push(parent);
    const fichier = path.join(parent, "lecture.json");
    writeFileSync(fichier, "{}\n", "utf8");
    expect(listEvidenceFiles(fichier)).toEqual([]);
  });

  it("rend un chemin utilisable", () => {
    const dir = dossier(["lecture.json"]);
    expect(listEvidenceFiles(dir)[0].file).toBe(path.join(dir, "lecture.json"));
  });
});

/**
 * Ce que ces tests-ci protègent est l'inverse du silence précédent : un avertissement faux. Le
 * contrôle des citations ne comparait qu'à l'enregistrement validé, qui est un résumé, et
 * signalait donc comme non sourcés des verbatim exacts relevés par une lecture primaire
 * `full-text`. Deux d'entre eux sont documentés sur `regulation-controle-autonome`.
 */
describe("dossierBrut", () => {
  const record = { id: "carte", quotation: { text: "la phrase de la fiche" } };

  it("porte l’enregistrement validé", () => {
    const dir = dossierEcrit({});
    expect(dossierBrut(record, listEvidenceFiles(dir))).toContain("la phrase de la fiche");
  });

  it("porte un verbatim qui n’est que dans la lecture primaire", () => {
    const dir = dossierEcrit({
      "evidence.primary-reading.json": JSON.stringify({ verbatim: "une phrase de la page 10" }),
    });
    expect(dossierBrut(record, listEvidenceFiles(dir))).toContain("une phrase de la page 10");
  });

  it("porte aussi la réception déposée à côté de la lecture", () => {
    const dir = dossierEcrit({
      "lecture.json": JSON.stringify({ verbatim: "la page 10" }),
      "reception.json": JSON.stringify({ verbatim: "le commentateur" }),
    });
    const brut = dossierBrut(record, listEvidenceFiles(dir));
    expect(brut).toContain("la page 10");
    expect(brut).toContain("le commentateur");
  });

  it("n’admet pas le fichier du scout, qui ne prétend avoir rien lu", () => {
    const dir = dossierEcrit({
      "scouting.json": JSON.stringify({ piste: "une phrase que personne n’a lue" }),
    });
    expect(dossierBrut(record, listEvidenceFiles(dir))).not.toContain("une phrase que personne n’a lue");
  });

  it("rend l’enregistrement seul quand la carte n’a pas de dossier", () => {
    const parent = mkdtempSync(path.join(tmpdir(), "evidence-"));
    dirs.push(parent);
    expect(dossierBrut(record, listEvidenceFiles(path.join(parent, "absent")))).toBe(JSON.stringify(record));
  });

  it("sépare les fichiers, pour que deux d’entre eux ne fabriquent pas une phrase", () => {
    const dir = dossierEcrit({
      "aaa.json": '{"fin":"le début de la',
      "bbb.json": ' citation inventée"}',
    });
    expect(dossierBrut(record, listEvidenceFiles(dir))).not.toContain("le début de la citation inventée");
  });
});

describe("evidenceOrigin", () => {
  it("nomme le fichier d’où le support est tiré", () => {
    expect(evidenceOrigin("evidence.reception.json")).toBe("evidence:evidence.reception.json");
  });

  it("distingue deux fichiers du même dossier", () => {
    const dir = dossier(["evidence.primary-reading.json", "evidence.reception.json"]);
    const origines = listEvidenceFiles(dir).map((entry) => evidenceOrigin(entry.name));
    expect(new Set(origines).size).toBe(2);
  });
});

/**
 * Et ces tests-ci protègent le pire des trois : un refus mérité en apparence. Le pack dérivait le
 * chemin des preuves du seul identifiant de la carte, alors que dix enregistrements sur cent
 * trente-six déclarent leur dossier ailleurs. `critere-de-la-retroaction` est sorti du gate avec
 * zéro fichier de preuve et vingt et un claims refusés dont la matière était au dépôt, dans un
 * `lecture.json` que rien n'ouvrait — et la sortie du script ne disait pas qu'elle ne l'avait pas
 * vu. Un dossier non chargé doit désormais se lire dans le pack.
 */
describe("resolveDossier", () => {
  function depot(arborescence) {
    const root = mkdtempSync(path.join(tmpdir(), "depot-"));
    dirs.push(root);
    for (const [relatif, contenu] of Object.entries(arborescence)) {
      const cible = path.join(root, relatif);
      mkdirSync(path.dirname(cible), { recursive: true });
      writeFileSync(cible, contenu, "utf8");
    }
    return root;
  }

  it("ramasse le répertoire conventionnel quand aucun dossier n’est déclaré", () => {
    const root = depot({ "corpus/evidence/carte/lecture.json": "{}\n" });
    const { fichiers, declaration } = resolveDossier({ id: "carte" }, { root });
    expect(fichiers.map((entree) => entree.name)).toEqual(["lecture.json"]);
    expect(declaration.statut).toBe(DOSSIER_STATUTS.NON_DECLARE);
  });

  it("ne compte pas deux fois le dossier déclaré sous l’identifiant de la carte", () => {
    const root = depot({ "corpus/evidence/carte/lecture.json": "{}\n" });
    const { fichiers, declaration } = resolveDossier(
      { id: "carte", dossier: "corpus/evidence/carte/lecture.json" },
      { root },
    );
    expect(fichiers.map((entree) => entree.name)).toEqual(["lecture.json"]);
    expect(declaration.statut).toBe(DOSSIER_STATUTS.CONVENTIONNEL);
  });

  it("charge la lecture d’un dossier déclaré sous un autre nom que la carte", () => {
    const root = depot({ "corpus/evidence/repere-initial/lecture.json": '{"verbatim":"p. 8"}\n' });
    const { fichiers, declaration } = resolveDossier(
      { id: "carte", dossier: "corpus/evidence/repere-initial/lecture.json" },
      { root },
    );
    expect(declaration.statut).toBe(DOSSIER_STATUTS.RESOLU);
    expect(fichiers.map((entree) => entree.name)).toEqual(["repere-initial/lecture.json"]);
  });

  it("prend le répertoire déclaré en entier, réception comprise", () => {
    const root = depot({
      "corpus/evidence/repere-initial/lecture.json": "{}\n",
      "corpus/evidence/repere-initial/reception.json": "{}\n",
      "corpus/evidence/repere-initial/scouting.json": "{}\n",
    });
    const { fichiers } = resolveDossier(
      { id: "carte", dossier: "corpus/evidence/repere-initial/lecture.json" },
      { root },
    );
    expect(fichiers.map((entree) => entree.name)).toEqual([
      "repere-initial/lecture.json",
      "repere-initial/reception.json",
    ]);
  });

  it("distingue deux lectures homonymes par leur répertoire", () => {
    const root = depot({
      "corpus/evidence/carte/lecture.json": "{}\n",
      "corpus/evidence/repere-initial/lecture.json": "{}\n",
    });
    const { fichiers } = resolveDossier(
      { id: "carte", dossier: "corpus/evidence/repere-initial/lecture.json" },
      { root },
    );
    const origines = fichiers.map((entree) => evidenceOrigin(entree.name));
    expect(new Set(origines).size).toBe(2);
  });

  it("refuse de charger un dossier hors du périmètre de preuve, et dit pourquoi", () => {
    const root = depot({
      "corpus/dossiers/carte.json": '{"pedagogy":{"hook_question":"écrit par un modèle"}}\n',
    });
    const { fichiers, declaration } = resolveDossier(
      { id: "carte", dossier: "corpus/dossiers/carte.json" },
      { root },
    );
    expect(fichiers).toEqual([]);
    expect(declaration.statut).toBe(DOSSIER_STATUTS.HORS_PERIMETRE);
    expect(declaration.motif).toMatch(/périmètre de preuve/);
  });

  it("signale un dossier déclaré et absent du dépôt", () => {
    const root = depot({ "corpus/evidence/carte/lecture.json": "{}\n" });
    const { declaration } = resolveDossier(
      { id: "carte", dossier: "corpus/evidence/jamais-deposee/lecture.json" },
      { root },
    );
    expect(declaration.statut).toBe(DOSSIER_STATUTS.INTROUVABLE);
  });

  it("ne sort pas du périmètre par un chemin remontant", () => {
    const root = depot({ "corpus/dossiers/carte.json": "{}\n" });
    const { fichiers, declaration } = resolveDossier(
      { id: "carte", dossier: "corpus/evidence/../dossiers/carte.json" },
      { root },
    );
    expect(fichiers).toEqual([]);
    expect(declaration.statut).toBe(DOSSIER_STATUTS.HORS_PERIMETRE);
  });
});
