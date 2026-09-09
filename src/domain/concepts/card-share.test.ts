import { describe, it, expect } from "vitest";
import { SHARE_SIGNATURE, buildCardShare, shareAsText } from "./card-share";
import { generatedConcepts } from "@/content/generated/concepts.generated";
import type { Concept } from "@/types";

const concept: Concept = {
  id: "activite-empechee",
  slug: "activite-empechee",
  title: "Le réel de l'activité",
  themeLabel: "Ce que le travail empêche",
  authorLabel: "Yves Clot",
  hookQuestion: "Ce que vous avez fait aujourd'hui dit-il tout ce que votre travail a été ?",
  shortExplanation:
    "Ce qui se fait n'épuise pas le travail : le réel de l'activité a un volume dont l'activité réalisée n'est que la surface.",
  attributionNote: "Une note d'attribution, qui n'a rien à faire dans un message.",
  quotation: {
    text: "Une citation, qui n'a rien à faire dans un message non plus.",
    reference: "Yves Clot, La fonction psychologique du travail, PUF, 1999, p. 119",
  },
  sources: [{ label: "Une source de plus, pour la même raison.", kind: "primary" }],
  authors: ["clot"],
  themes: ["activite-empechee-et-metier"],
};

const url = "https://exemple.test/Curiosity/explore/concept/?c=activite-empechee";

describe("buildCardShare", () => {
  it("nomme le concept et son auteur", () => {
    expect(buildCardShare({ concept }).title).toBe("Le réel de l'activité — Yves Clot");
  });

  it("se contente du concept quand la carte ne nomme aucun auteur", () => {
    const anonyme = { ...concept, authorLabel: undefined };
    expect(buildCardShare({ concept: anonyme }).title).toBe("Le réel de l'activité");
  });

  it("porte l'accroche et dit ce qu'est l'application", () => {
    const { text } = buildCardShare({ concept });
    expect(text).toBe(`${concept.hookQuestion}\n\n${SHARE_SIGNATURE}`);
  });

  it("n'emporte pas le résumé, qui répondrait à l'accroche avant qu'on ouvre", () => {
    const { title, text } = buildCardShare({ concept });
    expect(`${title}\n${text}`).not.toContain(concept.shortExplanation);
  });

  it("n'emporte ni citation, ni sources, ni note d'attribution", () => {
    const message = shareAsText(buildCardShare({ concept, url }));
    expect(message).not.toContain(concept.quotation!.text);
    expect(message).not.toContain(concept.sources![0].label);
    expect(message).not.toContain(concept.attributionNote!);
  });

  it("transmet l'adresse telle qu'elle lui est donnée", () => {
    expect(buildCardShare({ concept, url }).url).toBe(url);
  });

  it("rend une carte partageable sans adresse plutôt qu'une adresse inventée", () => {
    // Hors navigateur, `absoluteUrl` ne sait pas sous quel domaine l'application est servie.
    expect(buildCardShare({ concept }).url).toBeUndefined();
  });
});

describe("shareAsText", () => {
  it("met le lien dans le texte, puisque rien d'autre ne le portera", () => {
    expect(shareAsText(buildCardShare({ concept, url }))).toBe(
      `Le réel de l'activité — Yves Clot\n\n${concept.hookQuestion}\n\n${SHARE_SIGNATURE}\n\n${url}`
    );
  });

  it("n'ouvre pas de ligne vide quand l'adresse manque", () => {
    expect(shareAsText(buildCardShare({ concept }))).not.toMatch(/\n\n$/);
  });
});

describe("le corpus réel", () => {
  it("produit un message court pour chaque carte projetée", () => {
    /*
     * Une messagerie n'est pas un presse-papiers : le dossier de 22 000 caractères
     * d'`ai-handoff` y serait tronqué, et c'est justement ce que ce module existe pour ne
     * pas faire. Le plafond est large — les longueurs affichables sont déjà bornées par le
     * validateur du corpus — et il n'est là que pour attester qu'aucune carte ne dérive.
     */
    for (const concept of generatedConcepts) {
      const message = shareAsText(buildCardShare({ concept, url }));
      expect(message.length, concept.slug).toBeLessThan(500);
    }
  });
});
