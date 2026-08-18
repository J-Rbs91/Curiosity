import { describe, expect, it } from "vitest";

import {
  countWords,
  projectDeepening,
  unsourcedQuotations,
  validateDeepening,
} from "./deepenings.mjs";

/**
 * Ce que ce contrôle peut attraper est mécanique, et ces tests ne prétendent pas davantage :
 * les quatre exigences documentaires du protocole se lisent, elles ne se vérifient pas par un
 * programme. Ce qui est testé ici est le filet en dessous — les défauts qui laissent une
 * trace dans la forme, et que personne ne devrait avoir à repérer à la relecture.
 */

const CARTES = new Set(["concept-test"]);

/** Un paragraphe d'une longueur crédible : le contrôle refuse en dessous de 80 caractères. */
function paragraphe(mots = 60, tete = "Le mécanisme décrit par la carte") {
  return `${tete} ${"ainsi de suite ".repeat(Math.ceil(mots / 3))}`.trim() + ".";
}

function approfondissement(overrides = {}) {
  return {
    conceptId: "concept-test",
    lead: [paragraphe(95), paragraphe(95)],
    sections: [
      { title: "Ce que le seuil déplace", paragraphs: [paragraphe(115), paragraphe(115)] },
      { title: "Une limite qui n’est pas dans la tête", paragraphs: [paragraphe(115), paragraphe(115)] },
      { title: "Chercher plutôt que recevoir", paragraphs: [paragraphe(115), paragraphe(115)] },
      { title: "Ce que le concept ne prétend pas être", paragraphs: [paragraphe(115), paragraphe(115)] },
    ],
    limits: [
      "L’article de 1955 n’a été consulté que par sa notice : il établit son existence, rien de son contenu.",
      paragraphe(40, "La traduction affichée est interne et non publiée, ce que le texte ne peut pas dépasser"),
    ],
    ...overrides,
  };
}

describe("validateDeepening — approfondissement conforme", () => {
  it("ne relève rien", () => {
    expect(validateDeepening(approfondissement(), { conceptIds: CARTES })).toEqual([]);
  });
});

describe("validateDeepening — rattachement à une carte", () => {
  it("refuse un conceptId absent", () => {
    const errors = validateDeepening(approfondissement({ conceptId: undefined }), {
      conceptIds: CARTES,
    });
    expect(errors.join()).toMatch(/conceptId/);
  });

  it("refuse une carte que le corpus ne valide pas", () => {
    const errors = validateDeepening(approfondissement({ conceptId: "carte-inconnue" }), {
      conceptIds: CARTES,
    });
    expect(errors.join()).toMatch(/aucune carte validée/);
  });
});

describe("validateDeepening — titres de section", () => {
  it("refuse un titre qui étiquette sa fonction plutôt que son sujet", () => {
    for (const titre of [
      "Pour aller plus loin",
      "En résumé",
      "Introduction",
      "Ce qu’il faut retenir",
      "Le concept pour les débutants",
    ]) {
      const fiche = approfondissement();
      fiche.sections[0].title = titre;
      const errors = validateDeepening(fiche, { conceptIds: CARTES });
      expect(errors.join(), titre).toMatch(/étiquette la fonction/);
    }
  });

  it("accepte un titre qui nomme son sujet", () => {
    const fiche = approfondissement();
    fiche.sections[0].title = "Ce que « satisfaisant » veut dire ici";
    expect(validateDeepening(fiche, { conceptIds: CARTES })).toEqual([]);
  });

  it("refuse un titre de plus de soixante caractères", () => {
    const fiche = approfondissement();
    fiche.sections[0].title = "Un titre beaucoup trop long pour tenir sur une seule ligne de lecture confortable";
    expect(validateDeepening(fiche, { conceptIds: CARTES }).join()).toMatch(/60 caractères/);
  });
});

describe("validateDeepening — ce que le lecteur ne doit pas voir", () => {
  /*
   * Le tiret cadratin est interdit sur tout champ affiché, et l'approfondissement en est un.
   * La règle valait déjà pour les cartes : docs/corpus-workflow.md.
   */
  it("refuse un tiret cadratin, dans un paragraphe comme dans un titre", () => {
    const dansLeTexte = approfondissement();
    dansLeTexte.lead[0] = `${paragraphe(95)} Une incise — comme celle-ci — est refusée.`;
    expect(validateDeepening(dansLeTexte, { conceptIds: CARTES }).join()).toMatch(/cadratin/);

    const dansLeTitre = approfondissement();
    dansLeTitre.sections[0].title = "Le seuil — et ce qu’il déplace";
    expect(validateDeepening(dansLeTitre, { conceptIds: CARTES }).join()).toMatch(/cadratin/);
  });

  it("refuse du balisage rendu tel quel", () => {
    const cas = [
      ["**la rationalité** limitée", /gras Markdown/],
      ["## Un titre", /titre Markdown/],
      ["- une puce", /liste à puces/],
      ["[un lien](https://exemple.test)", /lien Markdown/],
      ["du `code`", /accent grave/],
    ];
    for (const [fragment, attendu] of cas) {
      const fiche = approfondissement();
      fiche.lead[0] = `${fragment} ${paragraphe(95)}`;
      expect(validateDeepening(fiche, { conceptIds: CARTES }).join(), fragment).toMatch(attendu);
    }
  });
});

describe("validateDeepening — la frontière documentaire", () => {
  it("refuse des limites qui ne nomment rien", () => {
    const fiche = approfondissement({
      limits: [
        "Il conviendrait sans doute de rester prudent sur plusieurs points de ce qui précède, comme toujours.",
      ],
    });
    expect(validateDeepening(fiche, { conceptIds: CARTES }).join()).toMatch(/précautions sans objet/);
  });

  it("accepte une limite qui nomme ce qui manque", () => {
    const fiche = approfondissement({
      limits: [
        "L’ouvrage de 1955 n’a été consulté que par sa notice de bibliothèque : rien de son contenu n’est établi ici.",
      ],
    });
    expect(validateDeepening(fiche, { conceptIds: CARTES })).toEqual([]);
  });

  it("exige au moins une limite", () => {
    const fiche = approfondissement({ limits: [] });
    expect(validateDeepening(fiche, { conceptIds: CARTES }).join()).toMatch(/limits/);
  });
});

describe("validateDeepening — volume", () => {
  it("refuse un texte qui n’ajoute rien à la carte", () => {
    const fiche = approfondissement({
      lead: [paragraphe(30)],
      sections: [
        { title: "Premier point du mécanisme", paragraphs: [paragraphe(30)] },
        { title: "Deuxième point du mécanisme", paragraphs: [paragraphe(30)] },
        { title: "Troisième point du mécanisme", paragraphs: [paragraphe(30)] },
      ],
    });
    expect(validateDeepening(fiche, { conceptIds: CARTES }).join()).toMatch(/volume/);
  });

  it("refuse un texte que personne ne finira", () => {
    const fiche = approfondissement();
    fiche.sections = fiche.sections.map((s) => ({ ...s, paragraphs: [paragraphe(400), paragraphe(400)] }));
    expect(validateDeepening(fiche, { conceptIds: CARTES }).join()).toMatch(/volume/);
  });

  it("exige trois sections au moins", () => {
    const fiche = approfondissement();
    fiche.sections = fiche.sections.slice(0, 2);
    expect(validateDeepening(fiche, { conceptIds: CARTES }).join()).toMatch(/3 sections au moins/);
  });
});

describe("unsourcedQuotations", () => {
  const fiche = JSON.stringify({
    quotation: { text: "la rationalité est limitée quand elle reste en deçà de l'omniscience." },
    notes: ["Le contrôleur relève « Two concepts are central to the characterization », p. 356."],
  });

  /** Un approfondissement dont le premier paragraphe porte la citation à contrôler. */
  function avecCitation(citation) {
    return approfondissement({ lead: [`${paragraphe(95)} On lit « ${citation} ».`] });
  }

  it("ne signale rien quand la citation est dans la fiche", () => {
    expect(
      unsourcedQuotations(
        avecCitation("la rationalité est limitée quand elle reste en deçà de l’omniscience"),
        fiche
      )
    ).toEqual([]);
  });

  it("signale une phrase que la fiche ne porte pas", () => {
    const absentes = unsourcedQuotations(
      avecCitation("l’organisation est un système de contraintes que nul n’a voulu"),
      fiche
    );
    expect(absentes).toHaveLength(1);
  });

  it("ne bute ni sur la typographie ni sur la ponctuation terminale", () => {
    // Apostrophe typographique contre droite, et un point final ajouté par la phrase qui
    // intègre la citation : deux différences qui ne changent rien à ce qui est cité.
    expect(
      unsourcedQuotations(
        avecCitation("Two concepts are central to the characterization."),
        fiche
      )
    ).toEqual([]);
  });

  it("laisse passer un mot mis en relief", () => {
    // Sous cinq mots, les guillemets servent presque toujours à souligner, pas à citer :
    // signaler ces cas noierait le seul qui compte.
    expect(unsourcedQuotations(avecCitation("satisfaisant"), fiche)).toEqual([]);
  });

  it("vérifie chaque fragment d’une citation coupée", () => {
    expect(
      unsourcedQuotations(
        avecCitation("la rationalité est limitée […] en deçà de l’omniscience"),
        fiche
      )
    ).toEqual([]);
    expect(
      unsourcedQuotations(
        avecCitation("la rationalité est limitée […] dès lors que le calcul devient impossible"),
        fiche
      )
    ).toHaveLength(1);
  });
});

describe("projectDeepening", () => {
  it("ne garde que ce que l’application lit", () => {
    const projete = projectDeepening({
      $schema: "../schema/deepening.schema.json",
      ...approfondissement(),
      commentaire: "champ de travail",
    });
    expect(Object.keys(projete).sort()).toEqual(["conceptId", "lead", "limits", "sections"]);
    expect(projete.sections[0]).toEqual({
      title: "Ce que le seuil déplace",
      paragraphs: projete.sections[0].paragraphs,
    });
  });
});

describe("countWords", () => {
  it("compte les trois blocs affichés", () => {
    const fiche = {
      conceptId: "concept-test",
      lead: ["un deux trois"],
      sections: [{ title: "Titre", paragraphs: ["quatre cinq"] }],
      limits: ["six"],
    };
    // Le titre ne compte pas : ce qu'on borne est la durée de lecture du texte.
    expect(countWords(fiche)).toBe(6);
  });
});
