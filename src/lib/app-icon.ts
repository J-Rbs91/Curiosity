import {
  BOX,
  CENTER,
  COLOR,
  CORNER,
  FILL,
  OUTER_R,
  PUPIL_R,
  STROKE,
  counter,
} from "@/components/ui/mark-geometry.mjs";
import { URGENCY_STEPS, urgencyGround } from "@/domain/reminder/daily-urgency";

/**
 * Ce que la plateforme accepte réellement de faire de l'état du rappel.
 *
 * Le palier est calculé ailleurs, sans rien savoir du navigateur
 * (`src/domain/reminder/daily-urgency.ts`). Ici, et ici seulement, on décide **où** il
 * s'affiche — et la réponse dépend d'une contrainte qu'aucun code ne lève :
 *
 * > **Aucune plateforme web ne permet de repeindre l'icône d'une application installée.**
 *
 * Les icônes du manifeste sont figées à l'installation. Chrome sait mettre à jour un
 * manifeste après coup, mais les icônes sont explicitement hors du champ de cette mise à
 * jour, sur Android comme sur le bureau ; sur iOS, l'icône d'un site ajouté à l'écran
 * d'accueil est copiée au moment de l'ajout et n'est plus relue. Il n'existe pas non plus de
 * réveil horaire en arrière-plan sur lequel s'appuyer. Le détail de la vérification, plateforme
 * par plateforme, et ce qu'il faudrait pour aller plus loin, sont dans
 * `docs/icone-de-rappel.md`.
 *
 * Restent deux surfaces, et ce module ne touche qu'à elles :
 *
 * — **le favicon de l'onglet**, qui est la seule icône de l'application qu'une API standard
 *   autorise à repeindre à l'exécution. Le rappel y est rendu exactement comme il a été
 *   décrit : même pictogramme, seul le fond change ;
 * — **la pastille de l'icône installée** (`setAppBadge`), qui est le seul moyen prévu par les
 *   plateformes pour donner de la présence à une icône installée. Elle ne porte pas de
 *   couleur : elle dit « quelque chose attend », s'allume avec le premier palier et s'éteint
 *   à la découverte. C'est le comportement natif le plus proche de ce qui était demandé, et
 *   il ne repose sur aucun contournement.
 *
 * Rien ici n'est indispensable : chaque appel échoue en silence sur les plateformes qui ne
 * le connaissent pas, et l'application reste exactement ce qu'elle était.
 */

/* ==========================================================================
 * Le favicon du rappel
 * ========================================================================== */

const n = (value: number) => String(Math.round(value * 1000) / 1000);

/**
 * Le dessin vient de `mark-geometry.mjs`, comme les neuf autres exemplaires de la marque.
 *
 * Il n'est pas recopié ici, et c'est la règle du fichier de géométrie : une épaisseur
 * corrigée là-bas doit valoir pour ce favicon-ci comme pour les autres. La seule chose que ce
 * module décide est la couleur du fond — c'est tout l'objet du rappel.
 */
function ringPath(): string {
  const { rx, ry } = counter(STROKE.icon);
  return [
    `M ${n(CENTER)} ${n(CENTER - OUTER_R)}`,
    `A ${n(OUTER_R)} ${n(OUTER_R)} 0 1 0 ${n(CENTER)} ${n(CENTER + OUTER_R)}`,
    `A ${n(OUTER_R)} ${n(OUTER_R)} 0 1 0 ${n(CENTER)} ${n(CENTER - OUTER_R)}`,
    "Z",
    `M ${n(CENTER)} ${n(CENTER - ry)}`,
    `A ${n(rx)} ${n(ry)} 0 1 0 ${n(CENTER)} ${n(CENTER + ry)}`,
    `A ${n(rx)} ${n(ry)} 0 1 0 ${n(CENTER)} ${n(CENTER - ry)}`,
    "Z",
  ].join(" ");
}

/**
 * Le favicon d'un palier : la marque, inchangée, sur le fond du palier.
 *
 * **L'encre ne suit plus la préférence claire/sombre**, à la différence du favicon ordinaire.
 * Celui-ci n'a pas de fond et emprunte donc celui de l'onglet, ce qui l'oblige à s'adapter ;
 * celui-là porte le sien, et le sien est sombre à tous les paliers. Une encre qui passerait
 * au noir sur une interface claire disparaîtrait dans le rouge le plus foncé.
 *
 * Fonction pure : elle rend une chaîne, ne touche à rien, et se vérifie sans navigateur.
 */
export function reminderFaviconSvg(ground: string, size = 64): string {
  const scale = (FILL.reminder * size) / (2 * OUTER_R);
  const transform = [
    `translate(${n(size / 2)} ${n(size / 2)})`,
    `scale(${n(scale)})`,
    `translate(${n(-BOX / 2)} ${n(-BOX / 2)})`,
  ].join(" ");

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="Curiosity">`,
    `  <rect width="${size}" height="${size}" rx="${n(CORNER.favicon * size)}" fill="${ground}"/>`,
    `  <g transform="${transform}" fill="${COLOR.ink}">`,
    `    <path d="${ringPath()}" fill-rule="evenodd"/>`,
    `    <circle cx="${n(CENTER)}" cy="${n(CENTER)}" r="${n(PUPIL_R)}"/>`,
    "  </g>",
    "</svg>",
  ].join("\n");
}

/** Le favicon d'un palier, prêt à entrer dans un `href`. */
export function reminderFaviconHref(step: number): string {
  return `data:image/svg+xml,${encodeURIComponent(reminderFaviconSvg(urgencyGround(step)))}`;
}

/* ==========================================================================
 * L'application au document
 * ========================================================================== */

/**
 * L'attribut qui marque notre lien, et le seul moyen de le retrouver.
 *
 * Les liens d'icône du document sont émis par les métadonnées de Next : on ne les modifie
 * pas, on n'en retire aucun. Le rappel **ajoute** le sien en fin de `<head>` et le retire
 * quand il n'a plus lieu d'être, ce qui laisse le favicon ordinaire reprendre sa place sans
 * qu'on ait eu à mémoriser ce qu'il était.
 *
 * `sizes="any"` n'est pas décoratif : c'est ce qui dit au navigateur que ce SVG couvre toutes
 * les tailles, et donc qu'il n'a pas à lui préférer l'un des PNG déclarés à côté. Sans lui, le
 * rappel serait peint et jamais montré sur les navigateurs qui choisissent par taille.
 */
const REMINDER_LINK = "data-curiosity-reminder";

function head(): HTMLHeadElement | null {
  return typeof document === "undefined" ? null : document.head;
}

function paintFavicon(step: number): void {
  const target = head();
  if (!target) return;

  const existing = target.querySelector<HTMLLinkElement>(`link[${REMINDER_LINK}]`);

  if (step === 0) {
    existing?.remove();
    return;
  }

  const href = reminderFaviconHref(step);
  if (existing) {
    // Réécrire un `href` identique ferait clignoter l'onglet sur certains navigateurs, à
    // chaque réveil de la minuterie — soit une fois par heure, pour rien.
    if (existing.href !== href) existing.href = href;
    return;
  }

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/svg+xml";
  // `setAttribute` et non la propriété `sizes` : celle-ci est une liste de jetons en lecture
  // seule sur plusieurs implémentations, et l'écrire y échoue silencieusement ou lève.
  link.setAttribute("sizes", "any");
  link.href = href;
  link.setAttribute(REMINDER_LINK, "");
  target.append(link);
}

/**
 * La pastille de l'icône installée.
 *
 * Elle n'est ni demandée ni exigée : `setAppBadge` n'existe pas partout — Chrome sur Android
 * ne l'expose pas —, et là où elle existe elle peut être refusée (sur iOS elle suit
 * l'autorisation de notification, que cette application ne réclame pas). Les deux cas se
 * traitent de la même façon : on essaie, et l'absence de pastille n'est pas une panne.
 *
 * Aucune valeur numérique n'est passée : il n'y a rien à compter, et « 7 » sur l'icône
 * voudrait dire sept choses en attente là où il n'y en a qu'une. Sans argument, la plateforme
 * affiche son point.
 */
/**
 * La dernière pastille **effectivement obtenue** : allumée, éteinte, ou rien encore.
 *
 * La pastille est mémorisée, à la différence du favicon : elle n'est pas dans le document,
 * donc rien ne peut la retirer dans notre dos, et rien ne justifie de rappeler la plateforme
 * toutes les dix minutes pour lui redire la même chose. Le favicon, lui, se relit dans le
 * `<head>` à chaque fois — c'est ce qui le rétablit si quoi que ce soit l'en avait ôté.
 *
 * La mémoire est **effacée en cas d'échec**, et c'est ce qui la distingue d'un cache : une
 * autorisation accordée après coup doit pouvoir rendre la pastille au réveil suivant, et non
 * seulement au prochain changement de palier.
 */
let badgeShown: boolean | null = null;

function paintBadge(step: number): void {
  if (typeof navigator === "undefined") return;

  const wanted = step > 0;
  if (badgeShown === wanted) return;
  badgeShown = wanted;

  const badge = navigator as Navigator & {
    setAppBadge?: () => Promise<void>;
    clearAppBadge?: () => Promise<void>;
  };
  const oublier = () => {
    badgeShown = null;
  };

  try {
    const applied = wanted ? badge.setAppBadge?.() : badge.clearAppBadge?.();
    // L'API absente est un échec comme un autre — il n'y a pas de pastille, et il n'y a rien
    // à mémoriser. C'est le cas d'un onglet ordinaire, et de Chrome sur Android.
    if (!applied) oublier();
    else applied.catch(oublier);
  } catch {
    // Permission refusée, application non installée, implémentation qui lève au lieu de
    // rejeter : l'absence de pastille n'est pas une panne.
    oublier();
  }
}

/**
 * Applique un palier à tout ce que la plateforme laisse peindre.
 *
 * Idempotente : la rappeler avec le même palier ne produit aucune écriture. C'est ce qui
 * permet de la brancher sur tout ce qui peut avoir changé l'heure ou l'état — le réveil de
 * l'onglet, le retour au premier plan, la minuterie — sans avoir à savoir lequel a tiré.
 */
export function applyAppIcon(step: number): void {
  const clamped = Math.min(Math.max(Math.round(step), 0), URGENCY_STEPS);
  paintFavicon(clamped);
  paintBadge(clamped);
}
