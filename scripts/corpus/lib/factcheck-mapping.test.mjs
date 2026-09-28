import { describe, expect, it } from "vitest";

import {
  classerVerdict,
  indexerAppuis,
  lexiqueGenerique,
  MAPPING_INCOMPLETE,
  NOTICE_SIGNAL,
  signalerAppuisNonCites,
  termes,
  VERDICTS_SEMANTIQUES,
} from "./factcheck-mapping.mjs";

/**
 * Les deux cas témoins de ce fichier ne sont pas inventés : ce sont les deux omissions de mapping
 * établies sur pièce par le chantier K, réduites à ce qui les rend détectables. Un réglage du
 * signal qui les manque est un réglage à refuser, et c'est ce que ces tests tiennent.
 */

function appui(id, path, text, extra = {}) {
  return { id, origin: "evidence:lecture.json", path, access: "full-text", text, ...extra };
}

function index(supports, options) {
  return {
    index: indexerAppuis(supports, options),
    byId: new Map(supports.map((support) => [support.id, support])),
  };
}

// ---------------------------------------------------------------------------

describe("termes", () => {
  it("normalise les diacritiques et la casse", () => {
    expect(termes("Rétroaction DÉNATURÉE")).toEqual(new Set(["retroaction", "denaturee"]));
  });

  it("écarte les mots courts, qui sont de la grammaire", () => {
    expect(termes("il a mis le feu au bois")).toEqual(new Set());
  });

  it("retient une année malgré sa longueur", () => {
    expect(termes("publié en 1948, pas en 48")).toEqual(new Set(["publie", "1948"]));
  });

  it("coupe sur la ponctuation et les apostrophes", () => {
    expect(termes("réservoir de W.-C., chasse d'eau")).toEqual(
      new Set(["reservoir", "chasse"]),
    );
  });

  it("rend un ensemble vide pour ce qui n'est pas une chaîne", () => {
    expect(termes(null)).toEqual(new Set());
    expect(termes(42)).toEqual(new Set());
  });
});

describe("indexerAppuis", () => {
  it("ne retient comme singulier que le terme porté par un seul appui", () => {
    const supports = [
      appui("SUP-a", "$.a", "la rétroaction du thermostat"),
      appui("SUP-b", "$.b", "la rétroaction de la fièvre"),
    ];
    const { termesSinguliers } = indexerAppuis(supports);
    expect(termesSinguliers.has("thermostat")).toBe(true);
    expect(termesSinguliers.has("fievre")).toBe(true);
    expect(termesSinguliers.has("retroaction")).toBe(false);
  });

  it("ignore un appui sans identifiant plutôt que de le compter", () => {
    const { termesParAppui } = indexerAppuis([{ text: "thermostat" }, null]);
    expect(termesParAppui.size).toBe(0);
  });
});

describe("lexiqueGenerique", () => {
  const textes = [
    "la régulation donne le temps de changer",
    "la régulation donne le temps",
    "la régulation donne un thermostat",
    "la régulation autrement",
    "le joueur de quilles",
  ];

  it("tient pour général le terme présent dans plus d'un dixième des cartes", () => {
    const { generiques, cartes, plafond } = lexiqueGenerique(textes, { fraction: 0.5 });
    expect(cartes).toBe(5);
    expect(plafond).toBe(2);
    expect(generiques.has("regulation")).toBe(true);
    expect(generiques.has("donne")).toBe(true);
  });

  it("laisse hors du lexique général ce qui ne sert qu'à une carte", () => {
    const { generiques } = lexiqueGenerique(textes, { fraction: 0.5 });
    expect(generiques.has("thermostat")).toBe(false);
    expect(generiques.has("quilles")).toBe(false);
  });

  it("garde un plafond de un sur un corpus minuscule, plutôt que zéro", () => {
    expect(lexiqueGenerique(["thermostat"], { fraction: 0.1 }).plafond).toBe(1);
    expect(lexiqueGenerique([]).plafond).toBe(1);
  });

  /**
   * Le filtre de singularité du pack ne suffisait pas : sur `critere-de-la-retroaction`, dont le
   * mapping est complet, le signal se levait sur 15 claims des 58, pour des mots comme « donne » ou
   * « devant » que le corpus emploie dans 112 et 57 approfondissements. Le lexique général les
   * écarte sans écarter les termes des deux témoins.
   */
  it("écarte du signal un terme singulier dans le pack mais général dans le corpus", () => {
    const supports = [
      appui("SUP-a", "$.a", "ce passage donne le ton"),
      appui("SUP-b", "$.b", "un thermostat"),
    ];
    const { generiques } = lexiqueGenerique(
      ["donne", "donne", "donne autre chose", "thermostat"],
      { fraction: 0.5 },
    );
    const idx = indexerAppuis(supports, { termesGeneriques: generiques });
    const byId = new Map(supports.map((support) => [support.id, support]));
    expect(
      signalerAppuisNonCites({ claim_text: "ce qui donne le ton", support_ids: [] }, idx, byId),
    ).toEqual([]);
    expect(
      signalerAppuisNonCites({ claim_text: "un thermostat", support_ids: [] }, idx, byId)
        .map((entree) => entree.support_id),
    ).toEqual(["SUP-b"]);
  });
});

describe("signalerAppuisNonCites — les deux cas établis du chantier K", () => {
  /**
   * `critere-de-la-retroaction`, tour 1 : le claim citait deux appuis réels, et l'appui qui porte
   * la matière — `$.reserves[0]` — n'était pas du nombre. Le verdict `UNSUPPORTED` était juste au
   * vu du bundle et faux au vu du pack, et la correction suivante a coupé le texte.
   */
  it("nomme l'appui omis d'un claim pourtant pourvu de deux appuis", () => {
    const supports = [
      appui("SUP-cite1", "$.definition", "la rétroaction est un critère de bouclage"),
      appui("SUP-cite2", "$.contexte", "la rétroaction chez cet auteur"),
      appui(
        "SUP-omis",
        "$.reserves[0]",
        "l'auteur raisonne sur un thermostat, un autocuiseur, un réservoir de W.-C., un "
          + "thermocouple, un joueur de quilles, une fièvre",
      ),
    ];
    const { index: idx, byId } = index(supports);
    const signal = signalerAppuisNonCites(
      {
        claim_text: "Il mène la démonstration sur un thermostat, un joueur de quilles, une fièvre",
        support_ids: ["SUP-cite1", "SUP-cite2"],
      },
      idx,
      byId,
    );

    expect(signal).toHaveLength(1);
    expect(signal[0].support_id).toBe("SUP-omis");
    expect(signal[0].path).toBe("$.reserves[0]");
    expect(signal[0].shared_terms).toContain("thermostat");
    expect(signal[0].shared_terms).toContain("quilles");
  });

  /**
   * `points-de-levier`, tour 3 : le claim arrivait avec `support_ids: []` et ne partage avec
   * l'appui `$.hook` qu'un seul terme. Exiger deux termes partagés rendrait le signal muet sur
   * cette omission ; c'est la raison mesurée du réglage retenu.
   */
  it("lève le signal sur un seul terme partagé", () => {
    const supports = [
      appui("SUP-hook", "$.hook", "Où appuyer dans un système pour que quelque chose bouge ?"),
      appui("SUP-autre", "$.summary", "Un système résiste aux interventions qui le visent mal."),
    ];
    const { index: idx, byId } = index(supports);
    const signal = signalerAppuisNonCites(
      {
        claim_text: "Devant un ensemble qui fonctionne mal, la question pratique est « où appuyer ».",
        support_ids: [],
      },
      idx,
      byId,
    );

    expect(signal.map((entree) => entree.support_id)).toEqual(["SUP-hook"]);
    expect(signal[0].shared_terms).toEqual(["appuyer"]);
  });
});

describe("signalerAppuisNonCites — ce que le signal se refuse à faire", () => {
  const supports = [
    appui("SUP-cite", "$.a", "le thermostat de l'auteur"),
    appui("SUP-b", "$.b", "un autocuiseur"),
    appui("SUP-c", "$.c", "un thermocouple"),
    appui("SUP-d", "$.d", "un joueur de quilles"),
    appui("SUP-e", "$.e", "une fièvre persistante"),
    appui("SUP-f", "$.f", "un réservoir de chasse"),
    appui("SUP-g", "$.g", "quelques centaines d'étudiants"),
  ];

  it("ne nomme jamais un appui déjà cité par le claim", () => {
    const { index: idx, byId } = index(supports);
    const signal = signalerAppuisNonCites(
      { claim_text: "le thermostat de l'auteur", support_ids: ["SUP-cite"] },
      idx,
      byId,
    );
    expect(signal).toEqual([]);
  });

  it("ne porte pas le texte des appuis, seulement de quoi les retrouver", () => {
    const { index: idx, byId } = index(supports);
    const [premier] = signalerAppuisNonCites(
      { claim_text: "un autocuiseur", support_ids: [] },
      idx,
      byId,
    );
    expect(Object.keys(premier).sort()).toEqual(["origin", "path", "shared_terms", "support_id"]);
    expect(JSON.stringify(premier)).not.toContain("autocuiseur ");
  });

  it("plafonne le nombre d'appuis signalés par claim", () => {
    const { index: idx, byId } = index(supports);
    const signal = signalerAppuisNonCites(
      {
        claim_text:
          "autocuiseur thermocouple quilles fievre reservoir etudiants thermostat",
        support_ids: [],
      },
      idx,
      byId,
    );
    expect(signal).toHaveLength(5);
  });

  it("ordonne par nombre de termes partagés puis par identifiant, pour un bundle reproductible", () => {
    const deux = [
      appui("SUP-zz", "$.z", "un thermostat et un autocuiseur"),
      appui("SUP-aa", "$.a", "une fièvre"),
      appui("SUP-bb", "$.b", "une fièvre aussi, et des quilles"),
    ];
    const { index: idx, byId } = index(deux);
    const signal = signalerAppuisNonCites(
      { claim_text: "thermostat autocuiseur quilles", support_ids: [] },
      idx,
      byId,
    );
    expect(signal.map((entree) => entree.support_id)).toEqual(["SUP-zz", "SUP-bb"]);
    expect(signal[0].shared_terms).toEqual(["autocuiseur", "thermostat"]);
  });

  it("reste vide quand aucun terme du claim n'est singulier dans le pack", () => {
    const partout = [
      appui("SUP-1", "$.a", "la rétroaction du système"),
      appui("SUP-2", "$.b", "la rétroaction du système, encore"),
    ];
    const { index: idx, byId } = index(partout);
    expect(
      signalerAppuisNonCites({ claim_text: "la rétroaction du système", support_ids: [] }, idx, byId),
    ).toEqual([]);
  });
});

describe("classerVerdict", () => {
  it("ne compte comme soutenu que SUPPORTED", () => {
    expect(classerVerdict("SUPPORTED")).toBe("soutenu");
  });

  it("range les quatre refus sémantiques ensemble, puisqu'ils coûtent la même boucle", () => {
    for (const verdict of VERDICTS_SEMANTIQUES.filter((v) => v !== "SUPPORTED")) {
      expect(classerVerdict(verdict)).toBe("refus-semantique");
    }
  });

  /**
   * C'est l'invariant du chantier K : un renvoi au mapping ne doit pas être comptabilisé comme un
   * refus sémantique, sinon il consomme une boucle de correction et fait couper le texte pour un
   * défaut d'artefact.
   */
  it("distingue le renvoi au mapping d'un refus sémantique", () => {
    expect(classerVerdict(MAPPING_INCOMPLETE)).toBe("mapping-incomplet");
    expect(VERDICTS_SEMANTIQUES).not.toContain(MAPPING_INCOMPLETE);
  });

  it("ferme sur un verdict que le dépôt ne connaît pas", () => {
    expect(classerVerdict("PROBABLEMENT_VRAI")).toBe("inconnu");
    expect(classerVerdict("supported")).toBe("inconnu");
    expect(classerVerdict(undefined)).toBe("inconnu");
  });
});

describe("NOTICE_SIGNAL", () => {
  it("dit dans l'artefact que le signal n'autorise aucun claim", () => {
    expect(NOTICE_SIGNAL).toContain("MAPPING_INCOMPLETE");
    expect(NOTICE_SIGNAL).toContain("ni un verdict ni une preuve");
  });
});
