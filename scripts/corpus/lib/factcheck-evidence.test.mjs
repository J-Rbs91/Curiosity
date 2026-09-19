import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { evidenceOrigin, listEvidenceFiles } from "./factcheck-evidence.mjs";

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
