import { describe, it, expect } from "vitest";
import { buildAISharePayload, formatCardForAI } from "./ai-handoff";
import { AI_LEARNING_PROMPT } from "./ai-prompt";
import { generatedConcepts } from "@/content/generated/concepts.generated";
import { authors as corpusAuthors } from "@/content/authors";
import { themes as corpusThemes } from "@/content/themes";
import { domains, families } from "@/content/taxonomy";
import { createTaxonomy } from "@/domain/taxonomy";
import type { Concept, Domain, Family } from "@/types";

const family: Family = {
  id: "humans-organizations",
  slug: "humains-organisations",
  label: "Humains et organisations",
  question: "",
  order: 1,
};

const domain: Domain = {
  id: "organizational-sociology",
  slug: "sociologie-des-organisations",
  label: "Sociologie des organisations",
  tagline: "",
  familyId: "humans-organizations",
  order: 1,
  description: "",
};

/**
 * Une carte complète, avec ce qui pose problème en vrai : accents, apostrophes, guillemets
 * français, points de suspension typographiques, DOI, ISBN, URL.
 */
const concept: Concept = {
  id: "deplacement-des-buts",
  slug: "deplacement-des-buts",
  title: "Déplacement des buts",
  themeLabel: "Bureaucratie et règles",
  authorLabel: "Robert K. Merton",
  hookQuestion: "Une organisation peut-elle rendre la règle plus précieuse que le but qu'elle sert ?",
  shortExplanation:
    "Chez Merton, les dispositifs mêmes qui font la fiabilité déplacent l'attachement du but vers le détail des comportements prescrits : le moyen devient une fin en soi.",
  quotation: {
    text: "L'observance des règles, conçue à l'origine comme un moyen, se transforme en fin en soi […]",
    reference:
      "Robert K. Merton, « Bureaucratic Structure and Personality », Social Forces, vol. 18, n° 4, mai 1940, p. 560-568, p. 563",
    translationNote: "Traduit pour cette fiche, traduction non publiée",
  },
  sources: [
    {
      label:
        "Robert K. Merton, « Bureaucratic Structure and Personality », Social Forces, vol. 18, n° 4, mai 1940, p. 560-568.",
      kind: "primary",
      reference: "10.2307/2570634",
      url: "https://doi.org/10.2307/2570634",
    },
    {
      label: "Robert K. Merton, Social Theory and Social Structure, New York, The Free Press, 1968 [1949].",
      kind: "primary",
      reference: "ISBN 0029211301",
    },
    {
      label:
        "Philip Selznick, « An Approach to a Theory of Bureaucracy », American Sociological Review, vol. 8, n° 1, 1943, p. 47-54.",
      kind: "secondary-academic",
      reference: "10.2307/2085448",
      url: "https://doi.org/10.2307/2085448",
    },
  ],
  authors: ["merton"],
  themes: ["bureaucratie-regles"],
};

const url = "https://exemple.org/curiosity/explore/concept/?c=deplacement-des-buts";

describe("buildAISharePayload", () => {
  const payload = buildAISharePayload({ concept, domain, family, url });

  it("emporte les instructions en entier, avant la carte", () => {
    // Le prompt n'est pas décoratif : c'est lui qui porte les règles documentaires. Une
    // troncature silencieuse retirerait les garde-fous sans que rien ne le signale.
    expect(payload).toContain(AI_LEARNING_PROMPT);
    expect(payload.indexOf("[INSTRUCTIONS POUR L'IA]")).toBeLessThan(
      payload.indexOf("=== CONTENU À ÉTUDIER ===")
    );
  });

  it("transmet la carte entière : situation, concept, auteur, citation, résumé, sources, lien", () => {
    expect(payload).toContain("Domaine :\nSociologie des organisations");
    expect(payload).toContain("Famille :\nHumains et organisations");
    expect(payload).toContain("Thème :\nBureaucratie et règles");
    expect(payload).toContain("Concept :\nDéplacement des buts");
    expect(payload).toContain("Auteur(s) :\nRobert K. Merton");
    expect(payload).toContain(`Accroche :\n${concept.hookQuestion}`);
    expect(payload).toContain(`Résumé :\n${concept.shortExplanation}`);
    expect(payload).toContain(`Lien vers la carte :\n${url}`);
  });

  it("emporte la citation, sa référence et sa mention de traduction", () => {
    // C'est ce qui a coûté le plus cher à établir, et ce qui empêchera l'IA de partir sur
    // une vulgarisation. Le transmettre est tout l'intérêt du bouton.
    expect(payload).toContain(`Citation :\n« ${concept.quotation!.text} »`);
    expect(payload).toContain("Référence de la citation :\nRobert K. Merton, « Bureaucratic");
    expect(payload).toContain("Traduit pour cette fiche, traduction non publiée");
  });

  it("ne demande ni le niveau du lecteur ni une première question à sa place", () => {
    expect(payload).not.toMatch(/débutant, intermédiaire|quel est ton niveau/i);
    expect(payload).not.toContain("Explique-moi cette carte");
    // Une consigne neutre suffit pour les applications qui attendent une phrase d'ouverture.
    expect(payload.trimEnd()).toMatch(/Utilise ces éléments comme point de départ de notre discussion\.$/);
  });

  it("reste lisible en texte brut, sans balise ni rendu Markdown", () => {
    expect(payload).not.toMatch(/<\/?[a-z][^>]*>/i);
    // Aucun titre ne dépend d'un rendu : les sections sont nommées en clair.
    expect(payload).not.toMatch(/^#{1,6} /m);
  });
});

describe("formatCardForAI", () => {
  it("numérote les sources et conserve leurs métadonnées documentaires", () => {
    const carte = formatCardForAI({ concept, domain, family, url });

    expect(carte).toContain("1. Robert K. Merton, « Bureaucratic Structure and Personality »");
    expect(carte).toContain("   Type : Texte de l'auteur");
    expect(carte).toContain("   Référence : 10.2307/2570634");
    expect(carte).toContain("   URL : https://doi.org/10.2307/2570634");
    // ISBN, éditeur, année et mention d'édition originale passent tels quels.
    expect(carte).toContain("2. Robert K. Merton, Social Theory and Social Structure");
    expect(carte).toContain("   Référence : ISBN 0029211301");
    expect(carte).toContain("3. Philip Selznick");
    expect(carte).toContain("   Type : Littérature académique");
  });

  it("conserve toutes les sources, dans l'ordre où le lecteur les voit", () => {
    const carte = formatCardForAI({ concept });
    const rangs = concept.sources!.map((source) => carte.indexOf(source.label));

    expect(rangs).not.toContain(-1);
    expect([...rangs].sort((a, b) => a - b)).toEqual(rangs);
  });

  it("classe les textes de l'auteur avant les commentaires, comme à l'écran", () => {
    const desordre = formatCardForAI({
      concept: {
        ...concept,
        sources: [
          { label: "Commentaire universitaire", kind: "secondary-academic" },
          { label: "Texte fondateur", kind: "primary" },
        ],
      },
    });

    expect(desordre.indexOf("1. Texte fondateur")).toBeGreaterThan(-1);
    expect(desordre.indexOf("2. Commentaire universitaire")).toBeGreaterThan(
      desordre.indexOf("1. Texte fondateur")
    );
  });

  it("rétablit l'attribution réelle d'une œuvre collective", () => {
    // Réduire trois auteurs à un auteur principal effacerait ce que le corpus a établi.
    const collectif = formatCardForAI({
      concept: {
        ...concept,
        authorLabel: "Michael D. Cohen, James G. March, Johan P. Olsen",
        attributionNote:
          "Concept coécrit par Michael D. Cohen, James G. March et Johan P. Olsen, habituellement rangé sous James G. March.",
      },
    });

    expect(collectif).toContain("Auteur(s) :\nMichael D. Cohen, James G. March, Johan P. Olsen");
    expect(collectif).toContain("Attribution établie :\nConcept coécrit par Michael D. Cohen");
  });

  it("nomme l'auteur devant la référence de la citation quand elle ne le porte pas déjà", () => {
    const carte = formatCardForAI({
      concept: {
        ...concept,
        quotation: {
          text: "Une phrase tirée d'un ouvrage collectif",
          attributedTo: "Joan Acker",
          reference: "Hierarchies, Jobs, Bodies, 1990, p. 146",
        },
      },
    });

    expect(carte).toContain("Référence de la citation :\nJoan Acker, Hierarchies, Jobs, Bodies, 1990, p. 146");
  });

  it("omet en entier un champ absent, titre compris", () => {
    const minimale = formatCardForAI({
      concept: {
        id: "x",
        slug: "x",
        title: "Concept nu",
        hookQuestion: "Une question ?",
        shortExplanation: "Un résumé.",
        authors: [],
        themes: [],
      },
    });

    for (const titre of [
      "Domaine :",
      "Famille :",
      "Thème :",
      "Auteur(s) :",
      "Attribution établie :",
      "Citation :",
      "Référence de la citation :",
      "Sources :",
      "Lien vers la carte :",
    ]) {
      expect(minimale).not.toContain(titre);
    }
    expect(minimale).toContain("Concept :\nConcept nu");
    expect(minimale).toContain("Accroche :\nUne question ?");
  });

  it("ne laisse échapper ni undefined, ni null, ni [object Object]", () => {
    // Un repli textuel serait pire qu'une absence : l'IA lirait « N/A » comme un contenu.
    const cartes = [
      formatCardForAI({ concept, domain, family, url }),
      formatCardForAI({ concept: { ...concept, quotation: undefined, sources: [] } }),
      formatCardForAI({
        concept: { ...concept, themeLabel: "  ", authorLabel: "", sources: undefined },
      }),
    ];

    for (const carte of cartes) {
      for (const fuite of ["undefined", "null", "[object Object]", "N/A"]) {
        expect(carte).not.toContain(fuite);
      }
    }
  });

  it("passe les caractères spéciaux sans les abîmer", () => {
    const carte = formatCardForAI({ concept, domain, family, url });

    expect(carte).toContain("règle plus précieuse que le but qu'elle sert ?");
    expect(carte).toContain("« Bureaucratic Structure and Personality »");
    expect(carte).toContain("n° 4");
    expect(carte).toContain("[…]");
    expect(carte).toContain("10.2307/2570634");
    expect(carte).toContain(url);
  });

  it("garde les retours à la ligne d'un résumé sur plusieurs paragraphes", () => {
    const carte = formatCardForAI({
      concept: { ...concept, shortExplanation: "Première ligne.\nSeconde ligne." },
    });

    expect(carte).toContain("Résumé :\nPremière ligne.\nSeconde ligne.");
  });
});

/**
 * Un passage sur une carte réelle du corpus, et non sur une carte de test.
 *
 * « Zones d'incertitude » est le cas le plus exigeant que le corpus contienne aujourd'hui :
 * concept coécrit rangé sous un seul nom, note d'attribution qui rétablit la chronologie,
 * citation ancienne sans mention de traduction, cinq sources de trois niveaux différents,
 * dont une sans URL et une signée de cinq auteurs. Si le message tient sur celle-là, il tient.
 *
 * Le test s'exécute sur les données servies à l'application, ce qui le rend sensible à une
 * projection du corpus — c'est voulu : une carte qui perdrait ses sources en chemin doit
 * faire échouer quelque chose.
 */
describe("passage de relais sur une carte réelle du corpus", () => {
  const corpusTaxonomy = createTaxonomy({
    families,
    domains,
    themes: corpusThemes,
    authors: corpusAuthors,
    concepts: generatedConcepts,
  });
  const carte = generatedConcepts.find((c) => c.slug === "zones-incertitude");

  // Le corpus est instruit fiche par fiche : il peut légitimement changer. Le test porte sur
  // le passage de relais, pas sur la présence perpétuelle d'une carte donnée.
  it.runIf(carte)("emporte la carte « Zones d'incertitude » en entier", () => {
    const conceptDomain = corpusTaxonomy.domainOfConcept(carte!);
    const payload = buildAISharePayload({
      concept: carte!,
      domain: conceptDomain,
      family: conceptDomain && corpusTaxonomy.familyOf(conceptDomain.id),
      url: "https://j-rbs91.github.io/Curiosity/explore/concept/?c=zones-incertitude",
    });

    expect(payload).toContain("Domaine :\nSociologie des organisations");
    expect(payload).toContain("Thème :\nPouvoir");
    expect(payload).toContain("Concept :\nZones d'incertitude");
    // Les deux auteurs, et la note qui dit ce que le seul libellé ne dit pas.
    expect(payload).toContain("Auteur(s) :\nMichel Crozier, Erhard Friedberg");
    expect(payload).toContain("Attribution établie :\nConcept coécrit avec Erhard Friedberg");
    expect(payload).toContain("la cosignature est attestée à partir de 1979");
    expect(payload).toContain("Citation :\n« […] dans un tel système le pouvoir appartient");
    expect(payload).toContain("Référence de la citation :\nMichel Crozier, « Les relations de pouvoir");

    // Les cinq sources, numérotées, avec leur niveau et leur identifiant.
    for (let rang = 1; rang <= carte!.sources!.length; rang += 1) {
      expect(payload).toContain(`${rang}. `);
    }
    expect(payload).toContain("   Type : Réception francophone");
    expect(payload).toContain("   Référence : p. 71-77 · ISBN 2020046776");
    expect(payload).toContain("   URL : https://www.persee.fr/doc/sotra_0038-0296_1960_num_2_1_1011");
    // Une source sans URL n'en fabrique pas une.
    expect(payload).not.toContain("   URL : \n");
    for (const fuite of ["undefined", "null", "[object Object]"]) {
      expect(payload).not.toContain(fuite);
    }
  });

  it.runIf(carte)("part avec la frontière épistémique, sans nommer la carte dans les règles", () => {
    /*
     * C'est le point de la mission : sur cette carte, une IA pourrait très bien produire
     * « Crozier et Friedberg considèrent l'organisation comme un système de relations entre
     * acteurs disposant de marges de liberté » — probablement juste, et pourtant absent du
     * contenu transmis. Les règles qui l'obligent à en marquer le statut doivent voyager avec
     * la carte, et rester écrites pour n'importe quelle carte.
     */
    const payload = buildAISharePayload({ concept: carte! });

    for (const regle of [
      "FRONTIÈRE ENTRE EXPLICATION ET CONNAISSANCE DOCUMENTAIRE",
      "CONNAISSANCES INTERNES DU MODÈLE",
      "RÉFÉRENCE PRÉSENTE ≠ CONTENU ACCESSIBLE",
      "QUAND DÉCLENCHER UNE VÉRIFICATION DOCUMENTAIRE",
      "PROPORTIONNALITÉ DE LA VÉRIFICATION",
      "COHÉRENCE INTERNE DU CORPUS FOURNI",
    ]) {
      expect(payload).toContain(regle);
    }

    // L'ouvrage est cité en source sans que son texte soit joint : c'est exactement le cas que
    // « référence présente ≠ contenu accessible » vise.
    expect(payload).toContain("L'Acteur et le système");
    expect(payload).toContain("Elle ne t'autorise pas à en reconstruire le contenu à partir de ta mémoire.");

    // Les instructions ne connaissent aucun auteur : seule la section carte en nomme.
    const instructions = payload.slice(0, payload.indexOf("=== CONTENU À ÉTUDIER ==="));
    expect(instructions).not.toContain("Crozier");
  });
});
