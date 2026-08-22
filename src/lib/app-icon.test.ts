// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { FILL, OUTER_R } from "@/components/ui/mark-geometry.mjs";
import { URGENCY_GROUNDS, URGENCY_STEPS } from "@/domain/reminder/daily-urgency";
import { applyAppIcon, reminderFaviconHref, reminderFaviconSvg } from "./app-icon";

describe("le favicon du rappel", () => {
  it("porte le fond du palier demandé", () => {
    expect(reminderFaviconSvg(URGENCY_GROUNDS[7])).toContain(`fill="${URGENCY_GROUNDS[7]}"`);
  });

  /*
   * La règle centrale de la demande : « le pictogramme/logo lui-même ne doit pas changer ».
   * Deux paliers ne doivent donc différer que par la couleur du fond, à l'octet près.
   */
  it("ne change que le fond d'un palier à l'autre", () => {
    const sansFond = (step: number) =>
      reminderFaviconSvg(URGENCY_GROUNDS[step]).replace(/ fill="#[0-9a-f]{6}"/, "");

    for (let step = 1; step <= URGENCY_STEPS; step += 1) {
      expect(sansFond(step)).toBe(sansFond(1));
    }
  });

  /*
   * Le fond doit se voir, ce qui est tout l'objet du rappel : la marque recule au cadrage
   * `reminder`, et non à celui du favicon ordinaire qui ne laisserait aucune marge à colorer.
   */
  it("laisse au fond une marge visible autour de la marque", () => {
    expect(FILL.reminder).toBeLessThan(FILL.favicon);
    const svg = reminderFaviconSvg("#000000", 64);
    const echelle = Number(/scale\(([\d.]+)\)/.exec(svg)?.[1]);
    expect(echelle).toBeGreaterThan(0);
    expect(echelle).toBeLessThan((FILL.favicon * 64) / (2 * OUTER_R));
  });

  it("couvre tout le canevas, coins adoucis", () => {
    const svg = reminderFaviconSvg("#ff0000", 64);
    expect(svg).toContain('<rect width="64" height="64" rx=');
  });

  /*
   * L'encre est fixe et claire : ce favicon-ci porte son propre fond, toujours sombre. Le
   * favicon ordinaire, lui, n'en a pas et doit suivre la préférence de l'interface — c'est la
   * différence qui justifie qu'il y en ait deux.
   */
  it("garde une encre claire quelle que soit la préférence de l'interface", () => {
    const svg = reminderFaviconSvg("#1f0000");
    expect(svg).toContain('fill="#fafafa"');
    expect(svg).not.toContain("prefers-color-scheme");
    expect(svg).not.toContain("currentColor");
  });

  it("s'encode en adresse de données utilisable dans un href", () => {
    const href = reminderFaviconHref(URGENCY_STEPS);
    expect(href.startsWith("data:image/svg+xml,")).toBe(true);
    expect(href).not.toMatch(/[<>#"]/);
    expect(decodeURIComponent(href.slice("data:image/svg+xml,".length))).toContain("#ff0000");
  });

  it("borne un palier hors échelle au lieu de rendre un fond absent", () => {
    expect(reminderFaviconHref(-1)).toBe(reminderFaviconHref(0));
    expect(reminderFaviconHref(99)).toBe(reminderFaviconHref(URGENCY_STEPS));
  });
});

/*
 * L'application au document, dans un vrai `<head>`. Ce qui est vérifié ici n'est pas le
 * dessin — c'est plus haut — mais la cohabitation avec les liens d'icône émis par Next :
 * le rappel en ajoute un, n'en retire aucun, et se retire lui-même quand il n'a plus lieu.
 */
describe("l'application du rappel au document", () => {
  const liensDeRappel = () => document.head.querySelectorAll("link[data-curiosity-reminder]");
  const liensDOrigine = () =>
    document.head.querySelectorAll('link[rel~="icon"]:not([data-curiosity-reminder])');

  afterEach(() => {
    document.head.innerHTML = "";
  });

  const poserLesLiensDeNext = () => {
    document.head.innerHTML = [
      '<link rel="icon" href="/icons/favicon.svg" type="image/svg+xml">',
      '<link rel="icon" href="/icons/icon-192.png" sizes="192x192" type="image/png">',
      '<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">',
    ].join("");
  };

  it("n'ajoute aucun lien au palier noir", () => {
    poserLesLiensDeNext();
    applyAppIcon(0);
    expect(liensDeRappel()).toHaveLength(0);
    expect(liensDOrigine()).toHaveLength(2);
  });

  it("ajoute un lien unique dès le premier palier rouge", () => {
    poserLesLiensDeNext();
    applyAppIcon(1);
    expect(liensDeRappel()).toHaveLength(1);
    // Les liens de Next restent en place : on n'en modifie ni n'en retire aucun.
    expect(liensDOrigine()).toHaveLength(2);
  });

  /*
   * `sizes="any"` est ce qui empêche un navigateur qui choisit par taille de préférer l'un
   * des PNG déclarés à côté — sans lui, le rappel serait peint et jamais montré.
   */
  it("déclare couvrir toutes les tailles, pour passer devant les PNG", () => {
    applyAppIcon(5);
    const lien = document.head.querySelector<HTMLLinkElement>("link[data-curiosity-reminder]")!;
    expect(lien.getAttribute("sizes")).toBe("any");
    expect(lien.type).toBe("image/svg+xml");
    expect(lien.rel).toBe("icon");
  });

  it("réutilise le même lien d'un palier à l'autre", () => {
    applyAppIcon(3);
    const avant = document.head.querySelector("link[data-curiosity-reminder]");
    applyAppIcon(4);
    expect(liensDeRappel()).toHaveLength(1);
    expect(document.head.querySelector("link[data-curiosity-reminder]")).toBe(avant);
  });

  it("n'écrit rien quand le palier n'a pas changé", () => {
    applyAppIcon(6);
    const lien = document.head.querySelector<HTMLLinkElement>("link[data-curiosity-reminder]")!;
    const href = lien.href;
    applyAppIcon(6);
    expect(lien.href).toBe(href);
  });

  /*
   * La découverte : retour immédiat au noir, et le favicon ordinaire — transparent, adaptatif
   * — reprend sa place sans qu'on ait eu à mémoriser ce qu'il était.
   */
  it("se retire au retour au noir et rend la place au favicon ordinaire", () => {
    poserLesLiensDeNext();
    applyAppIcon(11);
    applyAppIcon(0);
    expect(liensDeRappel()).toHaveLength(0);
    expect(liensDOrigine()).toHaveLength(2);
  });
});

/*
 * La pastille est le comportement natif le plus proche de ce qui a été demandé, là où
 * l'icône installée ne se repeint pas. Elle n'est jamais exigée : ce qui est vérifié ici est
 * autant ce qu'elle fait que ce qu'elle ne casse pas quand la plateforme l'ignore.
 */
describe("la pastille de l'icône installée", () => {
  const surNavigateur = (impl: Record<string, unknown>) =>
    Object.assign(navigator, { setAppBadge: undefined, clearAppBadge: undefined }, impl);

  afterEach(() => {
    document.head.innerHTML = "";
    surNavigateur({});
    vi.resetModules();
  });

  /** Un module neuf à chaque scénario : la pastille garde en mémoire ce qu'elle a obtenu. */
  const neuf = async () => {
    vi.resetModules();
    return (await import("./app-icon")).applyAppIcon;
  };

  it("s'allume au premier palier rouge et s'éteint à la découverte", async () => {
    const set = vi.fn(() => Promise.resolve());
    const clear = vi.fn(() => Promise.resolve());
    surNavigateur({ setAppBadge: set, clearAppBadge: clear });
    const applyAppIcon = await neuf();

    applyAppIcon(0);
    expect(set).not.toHaveBeenCalled();

    applyAppIcon(1);
    expect(set).toHaveBeenCalledTimes(1);

    applyAppIcon(0);
    expect(clear).toHaveBeenCalledTimes(2);
  });

  /*
   * Le premier appel éteint, même s'il n'y avait rien à éteindre — et c'est la garantie qui
   * compte : une pastille posée hier soir à 22 h survit à la fermeture de l'application. Elle
   * doit tomber à la première ouverture du lendemain matin, sans attendre qu'un palier change.
   */
  it("éteint une pastille laissée par une session précédente", async () => {
    const clear = vi.fn(() => Promise.resolve());
    surNavigateur({ setAppBadge: vi.fn(() => Promise.resolve()), clearAppBadge: clear });

    await (await neuf())(0);

    expect(clear).toHaveBeenCalledTimes(1);
  });

  /*
   * Elle ne porte pas de nombre : il n'y a qu'une chose en attente, et « 7 » sur l'icône en
   * annoncerait sept.
   */
  it("ne porte aucun nombre", async () => {
    const set = vi.fn(() => Promise.resolve());
    surNavigateur({ setAppBadge: set, clearAppBadge: vi.fn(() => Promise.resolve()) });
    await (await neuf())(9);
    expect(set).toHaveBeenCalledWith();
  });

  it("ne rappelle pas la plateforme tant que l'état ne change pas", async () => {
    const set = vi.fn(() => Promise.resolve());
    surNavigateur({ setAppBadge: set, clearAppBadge: vi.fn(() => Promise.resolve()) });
    const applyAppIcon = await neuf();

    for (const step of [3, 4, 5, 6]) applyAppIcon(step);

    // Quatre paliers rouges, une seule pastille : elle dit « quelque chose attend », pas
    // « il est 16 h ».
    expect(set).toHaveBeenCalledTimes(1);
  });

  /*
   * Chrome sur Android n'expose pas l'API, et un onglet ordinaire non plus. C'est le cas le
   * plus fréquent, et il ne doit rien casser — le favicon, lui, est peint normalement.
   */
  it("ne casse rien là où l'API n'existe pas", async () => {
    surNavigateur({});
    const applyAppIcon = await neuf();

    expect(() => applyAppIcon(7)).not.toThrow();
    expect(document.head.querySelectorAll("link[data-curiosity-reminder]")).toHaveLength(1);
  });

  it("ne casse rien quand la plateforme refuse", async () => {
    const refus = vi.fn(() => Promise.reject(new Error("permission refusée")));
    surNavigateur({ setAppBadge: refus, clearAppBadge: refus });
    const applyAppIcon = await neuf();

    expect(() => applyAppIcon(7)).not.toThrow();
    await Promise.resolve();

    // Le refus n'est pas mémorisé : une autorisation accordée après coup doit pouvoir rendre
    // la pastille au réveil suivant, sans attendre le prochain changement de palier.
    applyAppIcon(7);
    expect(refus).toHaveBeenCalledTimes(2);
  });

  it("ne casse rien quand l'implémentation lève au lieu de rejeter", async () => {
    surNavigateur({
      setAppBadge: () => {
        throw new Error("non installée");
      },
      clearAppBadge: vi.fn(() => Promise.resolve()),
    });
    const applyAppIcon = await neuf();
    expect(() => applyAppIcon(2)).not.toThrow();
  });
});
