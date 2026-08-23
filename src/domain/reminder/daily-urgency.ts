/**
 * Le rappel porté par l'icône : ce qu'il vaut, et rien de ce qui l'affiche.
 *
 * Tant que la carte du jour n'a pas été découverte, le fond de l'icône passe du noir au
 * rouge par paliers d'une heure, de 11 h à 23 h. Découvrir la carte le remet au noir pour
 * le reste de la journée ; minuit rouvre le cycle.
 *
 * **Ce module ne connaît ni le DOM, ni le stockage, ni la plateforme.** Il répond à une
 * seule question — *quel palier, à cette heure-ci, dans cet état-là ?* — et c'est ce qui le
 * rend vérifiable sans navigateur. Ce que les plateformes acceptent réellement d'en
 * afficher est un autre sujet, traité dans `src/lib/app-icon.ts` et documenté dans
 * `docs/icone-de-rappel.md`.
 *
 * **Un état se calcule, il ne se rejoue pas.** L'application peut rester fermée dix heures :
 * au réveil, le palier se déduit de l'heure qu'il est, jamais d'une suite de paliers
 * manqués. C'est aussi ce qui la rend indifférente au redémarrage du téléphone et au
 * changement de fuseau — il n'y a pas de compteur à remettre d'accord avec l'horloge.
 */

/** La première heure où le fond quitte le noir. Avant elle, la journée est encore devant soi. */
export const URGENCY_FIRST_HOUR = 11;

/** L'heure du rouge maximal. Il tient jusqu'à minuit — 23 h 59 est encore ce palier-là. */
export const URGENCY_LAST_HOUR = 23;

/** Le nombre de paliers rouges : un par heure, de 11 h à 23 h incluses. */
export const URGENCY_STEPS = URGENCY_LAST_HOUR - URGENCY_FIRST_HOUR + 1;

/* ==========================================================================
 * La rampe du noir au rouge
 *
 * Elle est calculée en OKLab, et non en sRGB. Une interpolation linéaire des octets aurait
 * donné une progression que l'œil ne lit pas comme régulière : les premiers paliers auraient
 * sauté, les derniers se seraient tassés. OKLab est construit pour que des écarts égaux de
 * clarté se voient comme égaux, ce qui est exactement la propriété demandée — « pas de
 * changements arbitraires de teinte ou de saturation », une seule chose qui progresse.
 *
 * La teinte et le rapport chroma/clarté sont ceux du rouge pur et ne bougent pas d'un palier
 * à l'autre : on ne fait varier que la clarté. La rampe reste donc exactement sur l'axe
 * noir → `#ff0000` — les composantes verte et bleue de chaque palier sont nulles, ce qu'un
 * test vérifie plutôt que de le supposer.
 * ========================================================================== */

/** OKLab du rouge pur `#ff0000`, d'où toute la rampe dérive. */
const RED_OKLAB = { L: 0.6279553606, a: 0.2248630684, b: 0.1258462736 } as const;

/**
 * Le plancher de la rampe, en clarté OKLab.
 *
 * Il n'est pas à zéro, et c'est la seule liberté prise avec l'énoncé — pour le servir. Une
 * rampe partant du noir absolu donne `#010000` au premier palier et `#0c0000` au deuxième :
 * deux heures de progression que personne ne voit, sur une pastille de quelques millimètres
 * posée sur un fond d'écran quelconque. Le premier palier doit se *voir* comme un début, pas
 * se déduire d'une capture d'écran. À 0,15 il vaut `#1f0000` — un rouge sombre, à peine là,
 * ce que « rouge très léger » décrit.
 *
 * Les douze paliers suivants sont régulièrement espacés de là jusqu'au rouge pur : la
 * régularité demandée porte sur la progression visible, et c'est celle-là qu'on tient.
 */
const URGENCY_FLOOR_L = 0.15;

const toGamma = (c: number) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

const channel = (value: number) =>
  Math.round(Math.min(Math.max(value, 0), 1) * 255)
    .toString(16)
    .padStart(2, "0");

/**
 * OKLab → sRGB hexadécimal. Matrices de Björn Ottosson, telles que publiées avec l'espace.
 *
 * Aucune correction de gamut n'est appliquée, et il n'y en a pas besoin : la rampe suit
 * l'axe du rouge pur, qui est une arête du cube sRGB. Le test le vérifie.
 */
function oklabToHex(L: number, a: number, b: number): string {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;

  return `#${[
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ]
    .map((linear) => channel(toGamma(linear)))
    .join("")}`;
}

/**
 * Les quatorze fonds, du palier 0 au palier 13 : l'index **est** le palier.
 *
 * Calculée une fois au chargement plutôt qu'à chaque heure — quatorze valeurs qui ne
 * dépendent de rien —, et figée pour qu'aucun appelant ne puisse en corriger une au point
 * d'usage. Une couleur retouchée là où elle s'affiche est une rampe qui n'est plus une rampe.
 */
export const URGENCY_GROUNDS: readonly string[] = Object.freeze(
  Array.from({ length: URGENCY_STEPS + 1 }, (_, step) => {
    if (step === 0) return "#000000";
    const L = URGENCY_FLOOR_L + (RED_OKLAB.L - URGENCY_FLOOR_L) * ((step - 1) / (URGENCY_STEPS - 1));
    const ratio = L / RED_OKLAB.L;
    return oklabToHex(L, RED_OKLAB.a * ratio, RED_OKLAB.b * ratio);
  })
);

/**
 * Le palier du moment : 0 pour le noir, 1 à 13 pour les rouges.
 *
 * Les trois seules entrées sont celles de l'énoncé — la date, l'heure locale, et le fait que
 * la carte ait été découverte. Le nombre d'ouvertures de l'application n'en fait pas partie,
 * et c'est pour cela qu'il n'y a rien à incrémenter : ouvrir dix fois dans l'heure ne change
 * rien, ne pas ouvrir de la journée non plus.
 *
 * `discovered` est la vérité qu'on lui passe, déjà rapportée au jour courant — voir
 * `src/lib/daily-discovery.ts`, qui est le seul endroit où « aujourd'hui » se compare.
 */
export function urgencyStep({
  now = new Date(),
  discovered,
}: {
  now?: Date;
  discovered: boolean;
}): number {
  if (discovered) return 0;
  const hour = now.getHours();
  if (hour < URGENCY_FIRST_HOUR) return 0;
  // Bornée plutôt que supposée : une horloge qui rendrait une heure hors de l'échelle
  // donnerait sinon un index absent de la rampe, donc un fond `undefined`.
  return Math.min(hour, URGENCY_LAST_HOUR) - URGENCY_FIRST_HOUR + 1;
}

/** Le fond d'un palier. */
export function urgencyGround(step: number): string {
  return URGENCY_GROUNDS[Math.min(Math.max(step, 0), URGENCY_STEPS)];
}

/**
 * Le délai jusqu'au prochain changement possible, en millisecondes.
 *
 * C'est le prochain début d'heure, et il n'y a pas d'autre échéance à connaître : minuit en
 * est un, et c'est là que le statut « découvert » cesse de valoir et que le cycle rouvre.
 * Un seul rendez-vous horaire couvre donc les deux règles, sans qu'aucune date de
 * réinitialisation n'ait à être stockée.
 *
 * Le calcul part de l'heure murale et non d'un cumul : après un changement d'heure d'été ou
 * de fuseau, la prochaine échéance est juste dès le premier réveil, sans rattrapage.
 */
export function msUntilNextStep(now: Date = new Date()): number {
  const next = new Date(now);
  next.setMinutes(0, 0, 0);
  next.setHours(next.getHours() + 1);
  // Un pas d'horloge en arrière — passage à l'heure d'hiver, correction réseau — rendrait
  // sinon une échéance déjà passée, donc une minuterie qui se rappelle sans fin.
  return Math.max(next.getTime() - now.getTime(), 1000);
}
