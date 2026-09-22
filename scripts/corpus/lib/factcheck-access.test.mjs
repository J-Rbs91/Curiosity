import { describe, expect, it } from "vitest";

import {
  NIVEAUX_ACCES,
  STATUTS,
  clesDeSource,
  clesNommees,
  rangAcces,
  reconcilierAcces,
  statutPourChemin,
} from "./factcheck-access.mjs";

/**
 * Ce que ces tests protègent est le seul défaut du dispositif qui *ouvrait* au lieu de fermer :
 * une source déclarée `full-text` dans l'enregistrement validé fournissait au vérificateur des
 * appuis estampillés « lu » que le dossier ne soutenait nulle part, et le verdict
 * `SOURCE_NOT_CONSULTED` ne pouvait plus se déclencher sur elle.
 *
 * Ils protègent autant la prudence de l'instrument que sa portée. Un dossier énumère les voies
 * d'accès d'une même œuvre — trois fac-similés lus et la version éditeur fermée — et le cas
 * « deux niveaux pour un identifiant » est donc la règle, pas l'anomalie : un test le fixe, pour
 * qu'aucune reprise ne retombe sur la dégradation au plus prudent, qui marquerait « non lu » un
 * texte dont trois exemplaires ont été ouverts.
 */

function valide(sources) {
  return { id: "carte", sources };
}

describe("rangAcces", () => {
  it("ordonne le vocabulaire du schéma", () => {
    expect(NIVEAUX_ACCES).toEqual(["metadata-only", "partial", "full-text"]);
    expect(rangAcces("full-text")).toBeGreaterThan(rangAcces("partial"));
    expect(rangAcces("partial")).toBeGreaterThan(rangAcces("metadata-only"));
  });

  it("refuse un niveau hors vocabulaire plutôt que de lui inventer un équivalent", () => {
    expect(rangAcces("excerpt")).toBe(-1);
    expect(rangAcces(undefined)).toBe(-1);
  });
});

describe("clesDeSource", () => {
  it("extrait le DOI du champ libre qui le porte", () => {
    expect(clesDeSource({ doi_isbn: "10.2307/2085448" })).toContain("doi:10.2307/2085448");
  });

  it("rapproche un ISBN de ses deux écritures", () => {
    const tiret = clesDeSource({ doi_isbn: "ISBN 2-7178-0676-8" });
    const colle = clesDeSource({ doi_isbn: "9782717806768 ; ISBN 2717806768" });
    expect(tiret).toContain("isbn:2717806768");
    expect(colle).toContain("isbn:2717806768");
  });

  it("lit un identifiant de rapport et l'affranchit de sa ponctuation", () => {
    expect(clesDeSource({ doi_isbn: "LCCN 60-12574" })).toContain("rep:lccn6012574");
    expect(clesDeSource({ doi_isbn: "NTRS 20000021488" })).toContain("rep:ntrs20000021488");
  });

  it("normalise une URL sans la confondre avec une autre ressource", () => {
    const a = clesDeSource({ url: "https://www.Persee.fr/doc/sotra_1966_1273/" });
    const b = clesDeSource({ url: "http://persee.fr/doc/sotra_1966_1273#page2" });
    expect(a).toEqual(b);
    expect(a).not.toEqual(clesDeSource({ url: "https://persee.fr/doc/sotra_1966_1274" }));
  });

  it("ne tire pas de niveau d'un identifiant cité en prose", () => {
    const objet = { citation: "Le volume est identifié : ISBN 0412625601, mais non ouvert." };
    expect(clesDeSource(objet)).toEqual([]);
    expect(clesNommees(objet)).toContain("isbn:0412625601");
  });
});

describe("reconcilierAcces", () => {
  it("corrobore un niveau que le dossier déclare au moins aussi fort", () => {
    const resultat = reconcilierAcces(
      valide([{ label: "Merton 1940", doi_isbn: "10.2307/2570634", consulted: "full-text" }]),
      [{ sources_ouvertes: [{ doi_isbn: "10.2307/2570634", consulted: "full-text" }] }],
    );
    expect(resultat.declarations[0].statut).toBe(STATUTS.CORROBORE);
    expect(resultat.compteurs[STATUTS.CORROBORE]).toBe(1);
  });

  it("retient la meilleure voie d'accès quand le dossier en énumère plusieurs", () => {
    const resultat = reconcilierAcces(
      valide([{ label: "Stevens 1946", doi_isbn: "10.1126/science.103.2684.677", consulted: "full-text" }]),
      [
        {
          sources_ouvertes: [
            { doi_isbn: "10.1126/science.103.2684.677", consulted: "full-text" },
            { doi_isbn: "10.1126/science.103.2684.677", consulted: "metadata-only" },
          ],
        },
      ],
    );
    expect(resultat.declarations[0].statut).toBe(STATUTS.CORROBORE);
    expect(resultat.compteurs[STATUTS.CONTREDIT]).toBe(0);
  });

  it("signale la contradiction quand la seule voie du dossier est plus prudente", () => {
    const resultat = reconcilierAcces(
      valide([{ label: "Hoskin 1996", doi_isbn: "ISBN 0412625601", consulted: "full-text" }]),
      [{ sources_ouvertes: [{ doi_isbn: "0412625601", consulted: "metadata-only" }] }],
    );
    expect(resultat.declarations[0].statut).toBe(STATUTS.CONTREDIT);
    expect(resultat.declarations[0].dossier).toBe("metadata-only");
  });

  it("distingue la source que le dossier nomme sans se prononcer de celle qu'il ignore", () => {
    const resultat = reconcilierAcces(
      valide([
        { label: "Kuty 1997", url: "https://orbi.uliege.be/handle/2268/323541", consulted: "full-text" },
        { label: "Milet 1982", doi_isbn: "10.3406/bupsy.1982.12030", consulted: "full-text" },
      ]),
      [
        {
          sources_ouvertes: [{ doi_isbn: "10.2307/2570634", consulted: "full-text" }],
          reception: [{ citation: "Kuty, 92 p.", url: "https://orbi.uliege.be/handle/2268/323541" }],
        },
      ],
    );
    expect(resultat.declarations[0].statut).toBe(STATUTS.NON_DECLARE);
    expect(resultat.declarations[1].statut).toBe(STATUTS.ABSENT);
  });

  it("n'accorde aucune corroboration à un niveau hors vocabulaire, des deux côtés", () => {
    const resultat = reconcilierAcces(
      valide([
        { label: "Acker 2006", doi_isbn: "10.1177/0891243206289499", consulted: "excerpt" },
        { label: "Crozier 1966", doi_isbn: "10.3406/sotra.1966.1273", consulted: "partial" },
      ]),
      [{ sources_ouvertes: [{ doi_isbn: "10.3406/sotra.1966.1273", consulted: "excerpt" }] }],
    );
    expect(resultat.declarations[0].statut).toBe(STATUTS.HORS_VOCABULAIRE);
    expect(resultat.declarations[1].statut).toBe(STATUTS.DOSSIER_HORS_VOCABULAIRE);
    expect(resultat.declarations[1].dossier).toBe("excerpt");
  });

  it("ne prononce rien quand la carte n'a pas de dossier", () => {
    const resultat = reconcilierAcces(
      valide([{ label: "Shewhart 1931", doi_isbn: "LCCN 31-032090", consulted: "full-text" }]),
      [],
    );
    expect(resultat.dossier_declare_des_niveaux).toBe(false);
    expect(resultat.declarations[0].statut).toBe(STATUTS.DOSSIER_ABSENT);
  });

  it("ne prononce rien non plus quand le dossier ne parle pas d'accès", () => {
    const resultat = reconcilierAcces(
      valide([{ label: "Kuty 1997", url: "https://orbi.uliege.be/handle/2268/323541", consulted: "full-text" }]),
      [{ reception: [{ citation: "Kuty, 92 p.", level: "B" }] }],
    );
    expect(resultat.dossier_declare_des_niveaux).toBe(false);
    expect(resultat.declarations[0].statut).toBe(STATUTS.DOSSIER_ABSENT);
  });
});

describe("statutPourChemin", () => {
  const reconciliation = reconcilierAcces(
    valide([
      { label: "Merton 1940", doi_isbn: "10.2307/2570634", consulted: "full-text" },
      { label: "Selznick 1943", doi_isbn: "10.2307/2085448", consulted: "full-text" },
    ]),
    [{ sources_ouvertes: [{ doi_isbn: "10.2307/2570634", consulted: "full-text" }] }],
  );

  it("rattache un appui à la déclaration dont il descend", () => {
    expect(statutPourChemin(reconciliation, "$.sources[1].label").statut).toBe(STATUTS.ABSENT);
    expect(statutPourChemin(reconciliation, "$.sources[0].label").statut).toBe(STATUTS.CORROBORE);
  });

  it("ne rattache rien à un appui qui ne descend d'aucune source", () => {
    expect(statutPourChemin(reconciliation, "$.summary")).toBeNull();
  });

  it("ne confond pas deux index dont l'un préfixe l'autre en chaîne", () => {
    const large = reconcilierAcces(
      valide(Array.from({ length: 12 }, (_, i) => ({ label: `s${i}`, doi_isbn: `10.1000/${i}`, consulted: "partial" }))),
      [{ sources_ouvertes: [{ doi_isbn: "10.1000/1", consulted: "partial" }] }],
    );
    expect(statutPourChemin(large, "$.sources[11].label").statut).toBe(STATUTS.ABSENT);
    expect(statutPourChemin(large, "$.sources[1].label").statut).toBe(STATUTS.CORROBORE);
  });
});
