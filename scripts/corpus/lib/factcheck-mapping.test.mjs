import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { afterEach, describe, expect, it } from "vitest";

import {
  appuisNonCites,
  frequenceDocumentaire,
  RARETE_FRACTION_MAX,
  SIGNAUX_MAX_PAR_CLAIM,
  termesSignifiants,
} from "./factcheck-mapping.mjs";

const run = promisify(execFile);
const SCRIPT = path.resolve(import.meta.dirname, "..", "deepening-factcheck.mjs");

const temporaires = [];
afterEach(() => {
  while (temporaires.length) rmSync(temporaires.pop(), { recursive: true, force: true });
});

function racine() {
  const dir = mkdtempSync(path.join(tmpdir(), "factcheck-mapping-"));
  temporaires.push(dir);
  return dir;
}

const sha256 = (valeur) => createHash("sha256").update(valeur).digest("hex");

/** Un dépôt de référence : `repetitions` cartes portant le terme, le reste n'en portant pas. */
function depotDeReference(dir, terme, repetitions, total = 20) {
  mkdirSync(path.join(dir, "corpus", "validated"), { recursive: true });
  for (let index = 0; index < total; index += 1) {
    const record = {
      id: `carte-${index}`,
      prose: index < repetitions ? `un passage qui mentionne ${terme} en toutes lettres` : "un passage neutre",
    };
    writeFileSync(path.join(dir, "corpus", "validated", `carte-${index}.json`), JSON.stringify(record));
  }
  return dir;
}

const appui = (id, text, reste = {}) => ({
  id,
  origin: "evidence:lecture.json",
  path: "$.reserves[0]",
  access: "full-text",
  text,
  ...reste,
});

// ---------------------------------------------------------------------------

describe("termesSignifiants", () => {
  it("ignore les mots courts, qui ne sont jamais rares", () => {
    expect(termesSignifiants("un joueur de quilles")).toEqual(new Set(["joueur", "quilles"]));
  });

  it("ignore les nombres nus, qui ne renseignent sur aucun contenu", () => {
    expect(termesSignifiants("pages 12345 du thermostat")).toEqual(new Set(["pages", "thermostat"]));
  });

  it("rend le même terme avec et sans accent, pour que la comparaison porte", () => {
    expect(termesSignifiants("réservoir")).toEqual(termesSignifiants("reservoir"));
  });
});

describe("frequenceDocumentaire", () => {
  it("compte un document par carte, et non une occurrence par mot", () => {
    const dir = depotDeReference(racine(), "thermostat", 3, 20);
    const { frequences, documents } = frequenceDocumentaire({ root: dir });
    expect(documents).toBe(20);
    expect(frequences.get("thermostat")).toBe(3);
  });

  /*
   * La régression que ce test garde : dériver le dossier du seul identifiant de la carte
   * rendrait invisibles les termes des dix dossiers déclarés hors convention, donc rares
   * partout, donc signalés partout. Le périmètre est celui de `resolveDossier`.
   */
  it("compte les termes d'un dossier déclaré hors de la convention", () => {
    const dir = depotDeReference(racine(), "neutre", 0, 3);
    mkdirSync(path.join(dir, "corpus", "evidence", "nom-de-reperage"), { recursive: true });
    writeFileSync(
      path.join(dir, "corpus", "evidence", "nom-de-reperage", "lecture.json"),
      JSON.stringify({ reserves: ["l'auteur raisonne sur un thermocouple"] }),
    );
    writeFileSync(
      path.join(dir, "corpus", "validated", "carte-0.json"),
      JSON.stringify({ id: "carte-0", dossier: "corpus/evidence/nom-de-reperage/lecture.json" }),
    );

    const { frequences } = frequenceDocumentaire({ root: dir });
    expect(frequences.get("thermocouple")).toBe(1);
  });
});

describe("appuisNonCites — le cas historique de critere-de-la-retroaction", () => {
  const supports = [
    appui("SUP-definition", "l'autocuiseur, le réservoir de W.-C. et la fièvre relue comme consigne"),
    appui(
      "SUP-reserves",
      "l'auteur raisonne sur un thermostat, un autocuiseur, un réservoir de W.-C., un thermocouple, un joueur de quilles, une fièvre",
    ),
  ];
  const claim = {
    claim_id: "C008",
    claim_text: "Il mène la démonstration sur un thermostat, un autocuiseur, un joueur de quilles, une fièvre.",
    support_ids: ["SUP-definition"],
  };

  it("désigne l'appui que le mapping n'a pas rattaché, par les termes qui le désignent", () => {
    const reference = frequenceDocumentaire({ root: depotDeReference(racine(), "thermostat", 1, 20) });
    const signaux = appuisNonCites(claim, supports, reference);

    expect(signaux).toHaveLength(1);
    expect(signaux[0].support_id).toBe("SUP-reserves");
    expect(signaux[0].termes_rares).toEqual(["joueur", "quilles", "thermostat"]);
  });

  it("se tait dès que le mapping cite l'appui : le mappeur a choisi, il n'y a plus de question", () => {
    const reference = frequenceDocumentaire({ root: depotDeReference(racine(), "thermostat", 1, 20) });
    const cite = { ...claim, support_ids: ["SUP-definition", "SUP-reserves"] };
    expect(appuisNonCites(cite, supports, reference)).toEqual([]);
  });
});

describe("appuisNonCites — ce que le signal refuse de dire", () => {
  /*
   * La première règle essayée — « terme présent dans un seul appui du pack » — rendait 17 signaux
   * sur les 58 claims de `critere-de-la-retroaction`, tous sur des mots-outils. Un pack court
   * rend rare à peu près n'importe quel mot ; la rareté se mesure sur le dépôt.
   */
  it("se tait sur un terme courant du dépôt, même unique dans le pack", () => {
    const reference = frequenceDocumentaire({ root: depotDeReference(racine(), "lorsque", 19, 20) });
    const supports = [appui("SUP-a", "le texte dit lorsque"), appui("SUP-b", "il dit autre chose")];
    const claim = { claim_id: "C001", claim_text: "lorsque", support_ids: ["SUP-b"] };
    expect(appuisNonCites(claim, supports, reference)).toEqual([]);
  });

  it("se tait quand le terme figure dans plusieurs appuis dont un est cité", () => {
    const reference = frequenceDocumentaire({ root: depotDeReference(racine(), "thermostat", 1, 20) });
    const supports = [
      appui("SUP-a", "un thermostat règle la température"),
      appui("SUP-b", "un thermostat, vu autrement"),
    ];
    const claim = { claim_id: "C001", claim_text: "le thermostat", support_ids: ["SUP-a"] };
    expect(appuisNonCites(claim, supports, reference)).toEqual([]);
  });

  it("plafonne le nombre d'appuis signalés : au-delà, c'est le mapping entier qui est en cause", () => {
    const reference = frequenceDocumentaire({ root: depotDeReference(racine(), "neutre", 0, 20) });
    const rares = ["thermostat", "thermocouple", "autocuiseur", "quilles", "hysteresis"];
    const supports = rares.map((terme, index) => appui(`SUP-${index}`, `un passage sur ${terme}`));
    const claim = { claim_id: "C001", claim_text: rares.join(" et "), support_ids: [] };
    expect(appuisNonCites(claim, supports, reference)).toHaveLength(SIGNAUX_MAX_PAR_CLAIM);
  });

  it("garde le seuil de rareté sous la barre du bruit mesuré", () => {
    // Mesure du 28 septembre 2026 : le cas historique se déclenche à 5 documents sur 136, le
    // premier signal de bruit apparaît à 20. Le seuil doit rester entre les deux.
    const seuil = Math.floor(136 * RARETE_FRACTION_MAX);
    expect(seuil).toBeGreaterThanOrEqual(5);
    expect(seuil).toBeLessThan(20);
  });
});

// ---------------------------------------------------------------------------

/**
 * Le gate n'est pas exporté : c'est un script, et son contrat comprend son code de sortie. Ces
 * cas l'exécutent donc pour de vrai, sur un dépôt minimal, plutôt que de tester une copie de sa
 * logique qui pourrait diverger sans que rien ne le dise.
 */
function depotDeGate(verdict) {
  const dir = racine();
  const conceptId = "concept-test";
  const work = path.join(dir, "corpus", "deepening-audits", "work", conceptId);
  mkdirSync(work, { recursive: true });
  mkdirSync(path.join(dir, "corpus", "deepenings"), { recursive: true });

  const deepening = JSON.stringify({ lead: ["Le thermostat règle la température."] });
  writeFileSync(path.join(dir, "corpus", "deepenings", `${conceptId}.json`), deepening);

  const texte = "Le thermostat règle la température.";
  const pack = {
    status: "READY",
    concept_id: conceptId,
    candidate_sha256: sha256(deepening),
    paragraphs: [{ locator: "lead[0]", text: texte }],
    supports: [appui("SUP-a", "un thermostat règle la température")],
  };
  const map = {
    concept_id: conceptId,
    candidate_sha256: pack.candidate_sha256,
    paragraphs: [{ locator: "lead[0]", mapping_status: "CLAIMS_MAPPED" }],
    claims: [
      {
        claim_id: "C001",
        locator: "lead[0]",
        start: 0,
        end: texte.length,
        claim_text: texte,
        support_ids: ["SUP-a"],
      },
    ],
  };
  const verification = {
    concept_id: conceptId,
    candidate_sha256: pack.candidate_sha256,
    results: [{ claim_id: "C001", verdict, motif: "cas de test" }],
  };

  writeFileSync(path.join(work, "factcheck-pack.json"), JSON.stringify(pack));
  writeFileSync(path.join(work, "claim-map.json"), JSON.stringify(map));
  writeFileSync(path.join(work, "verification.json"), JSON.stringify(verification));
  return { dir, conceptId };
}

async function gate(verdict) {
  const { dir, conceptId } = depotDeGate(verdict);
  try {
    const { stdout } = await run(process.execPath, [SCRIPT, "--gate", `--only=${conceptId}`], { cwd: dir });
    return { code: 0, rapport: JSON.parse(stdout) };
  } catch (erreur) {
    return { code: erreur.code, rapport: JSON.parse(erreur.stdout) };
  }
}

describe("gate — MAPPING_INCOMPLETE", () => {
  it("rend FACTCHECK_PASS quand le claim est soutenu", async () => {
    const { code, rapport } = await gate("SUPPORTED");
    expect(rapport.verdict).toBe("FACTCHECK_PASS");
    expect(code).toBe(0);
  });

  it("rend FACTCHECK_FAIL sur un verdict de texte, qui consomme une boucle de correction", async () => {
    const { code, rapport } = await gate("UNSUPPORTED");
    expect(rapport.verdict).toBe("FACTCHECK_FAIL");
    expect(rapport.failed).toBe(1);
    expect(code).toBe(1);
  });

  /*
   * Le cœur du chantier K : un mapping incomplet n'est pas un défaut du texte. Le compter parmi
   * les `failures` renverrait au réécrivain, qui n'a alors que la coupe pour geste — c'est ainsi
   * que deux exemples attestés ont été retirés de `critere-de-la-retroaction`.
   */
  it("rend FACTCHECK_INVALID, et non FACTCHECK_FAIL, sur un mapping incomplet", async () => {
    const { code, rapport } = await gate("MAPPING_INCOMPLETE");
    expect(rapport.verdict).toBe("FACTCHECK_INVALID");
    expect(code).toBe(2);
  });

  it("ne compte pas le mapping incomplet comme un défaut du texte", async () => {
    const { rapport } = await gate("MAPPING_INCOMPLETE");
    expect(rapport.failed).toBe(0);
    expect(rapport.failures).toEqual([]);
    expect(rapport.mapping_incomplete).toBe(1);
    expect(rapport.mapping_a_reprendre).toHaveLength(1);
  });

  it("ne compte pas non plus le claim renvoyé au mapping comme soutenu", async () => {
    const { rapport } = await gate("MAPPING_INCOMPLETE");
    expect(rapport.supported).toBe(0);
  });

  it("refuse toujours un verdict hors vocabulaire", async () => {
    const { rapport } = await gate("PROBABLEMENT_VRAI");
    expect(rapport.verdict).toBe("FACTCHECK_INVALID");
    expect(rapport.structural_errors.join(" ")).toContain("verdict invalide");
  });
});
