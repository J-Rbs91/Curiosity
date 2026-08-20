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
function paragraphe(mots = 60, tete = "Le mécanisme décrit par l’auteur") {
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
      "L’article de 1955 dit en propres termes ce qui précède le résume : il faudra l’ouvrir pour les lire.",
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

describe("validateDeepening — invisibilité du dispositif", () => {
  /*
   * Le défaut qui a fait refaire le premier lot : 224 occurrences sur 32 textes. Un rédacteur
   * à qui l'on transmet une fiche documentaire en parle au lecteur, qui ignore tout de son
   * existence et venait pour un concept.
   */
  it("refuse les expressions qui exhibent la structure interne", () => {
    const cas = [
      "Le dossier porte l’énoncé en entier, tel qu’il se lit à cette page du texte original.",
      "La carte, faute de place, n’a gardé que la première des deux propositions de la phrase.",
      "Ce que le corpus établit s’arrête ici, et la suite relève de l’interprétation.",
      "La fiche signale une réserve sur ce point précis, qu’il faut donc lire avec prudence.",
      "Les éléments fournis ne disent rien de la réception ultérieure de cette proposition.",
      "L’enregistrement validé porte la formulation exacte, relevée pendant l’instruction.",
    ];
    for (const phrase of cas) {
      const fiche = approfondissement();
      fiche.lead[0] = `${paragraphe(95)} ${phrase}`;
      expect(validateDeepening(fiche, { conceptIds: CARTES }).join(), phrase).toMatch(
        /expose le dispositif/
      );
    }
  });

  it("refuse aussi dans un titre et dans une limite", () => {
    const dansLeTitre = approfondissement();
    dansLeTitre.sections[0].title = "Ce que la carte n’établit pas";
    expect(validateDeepening(dansLeTitre, { conceptIds: CARTES }).join()).toMatch(
      /expose le dispositif/
    );

    const dansLaLimite = approfondissement({
      limits: ["Le dossier ne porte aucune définition de ce terme, qui reste donc à établir sur le texte."],
    });
    expect(validateDeepening(dansLaLimite, { conceptIds: CARTES }).join()).toMatch(
      /expose le dispositif/
    );
  });

  it("laisse dire la même chose en parlant de l’auteur et des sources", () => {
    const fiche = approfondissement({
      limits: [
        "Ce que l’article de 1955 avance en propre, il faudra l’ouvrir pour le savoir : rien ici n’en tient lieu.",
        "Pour attribuer précisément cette distinction à l’auteur, il faudra revenir au texte original.",
      ],
    });
    expect(validateDeepening(fiche, { conceptIds: CARTES })).toEqual([]);
  });

  it("n’attrape pas un dossier qui est l’objet de travail d’un exemple", () => {
    // « on traite d'abord les dossiers qui se closent vite » décrit une situation, pas une
    // source : l'interdire ferait retirer des exemples justes.
    const fiche = approfondissement();
    fiche.lead[0] =
      `${paragraphe(95)} Imaginons un service dont le financement dépend du nombre de dossiers clos dans l’année.`;
    expect(validateDeepening(fiche, { conceptIds: CARTES })).toEqual([]);
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
        "L’ouvrage de 1955 porte la formulation d’origine, et c’est le premier livre à ouvrir pour la lire.",
      ],
    });
    expect(validateDeepening(fiche, { conceptIds: CARTES })).toEqual([]);
  });

  it("refuse un ouvrage déclaré non consulté", () => {
    // Le défaut ne nomme aucune structure interne, et raconte pourtant la fabrication du
    // texte : le lecteur ouvrait un concept, il tombe sur une recherche qui n'a pas abouti.
    const fiche = approfondissement({
      limits: [
        "L’ouvrage de 1955 n’a pas été consulté directement : rien de son contenu ne peut être rapporté.",
      ],
    });
    expect(validateDeepening(fiche, { conceptIds: CARTES }).join()).toMatch(
      /déclaré non consulté/
    );
  });

  it("refuse « il faudrait pouvoir », accepte « il faudra »", () => {
    const conditionnel = approfondissement({
      limits: [
        "Pour établir en quels termes exacts ce texte pose la distinction, il faudrait pouvoir l’ouvrir.",
      ],
    });
    expect(validateDeepening(conditionnel, { conceptIds: CARTES }).join()).toMatch(
      /il faudrait pouvoir/
    );

    const futur = approfondissement({
      limits: [
        "Pour établir en quels termes exacts ce texte pose la distinction, il faudra le lire en entier.",
      ],
    });
    expect(validateDeepening(futur, { conceptIds: CARTES })).toEqual([]);
  });

  it("n’attrape pas un passif qui décrit le monde plutôt qu’une bibliographie", () => {
    // « le code-barre n'a pas été lu du premier coup » parle d'une caisse de supermarché, et
    // « articles » y désigne des courses. Sans le complément d'étendue, le passif est innocent.
    const fiche = approfondissement();
    fiche.lead[0] =
      `${paragraphe(95)} Elle scanne des articles : si le code-barre n’a pas été lu du premier coup, elle recommence.`;
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
