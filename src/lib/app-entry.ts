/**
 * Le point d'entrée à la réouverture — et pourquoi il ne va pas de soi.
 *
 * Une application installée n'est presque jamais fermée : elle est mise en
 * arrière-plan. Le système la garde en vie et la ramène telle qu'elle était,
 * si bien qu'on rouvre sur l'écran quitté — parfois le lendemain. Aucun
 * réglage du manifeste ne change cela : `start_url` ne décrit que le démarrage
 * à froid, c'est-à-dire le cas le plus rare.
 *
 * Deux conséquences, et la seconde se lit comme un autre défaut :
 *
 * — la carte du jour, qui est la seule chose que l'application ait à montrer,
 *   n'est jamais atteinte ;
 * — le geste retour rejoue la session précédente, ce qui ressemble au défaut
 *   que `navigation-tree.ts` corrige alors que la pile, elle, est juste : elle
 *   est simplement restée celle d'hier.
 *
 * La règle : **revenir après une absence longue est une réouverture, pas une
 * reprise.** Revenir après dix secondes — on est allé lire une notification —
 * doit rendre l'écran quitté, sinon on perd sa place au cas le plus fréquent.
 * Ce fichier ne tient que le critère et la mémoire de la sortie ; c'est
 * `EntryPoint` qui agit, et lui seul.
 */

/**
 * Le seuil au-delà duquel revenir compte comme une réouverture.
 *
 * Trente minutes est un arbitrage entre deux erreurs de sens contraire : trop
 * court, on perd la place de quelqu'un qui a juste répondu à un message ; trop
 * long, on rouvre sur l'écran d'hier. Le changement de jour civil, lui, tranche
 * indépendamment de la durée — c'est la carte affichée qui a changé, et la
 * garder à l'écran serait faux quel que soit le temps écoulé.
 */
export const REENTRY_AFTER_MS = 30 * 60 * 1000;

/** Ce que l'application retient du moment où elle est passée en arrière-plan. */
export interface Departure {
  /** Horodatage de la mise en arrière-plan. */
  at: number;
  /** Jour civil de cette sortie, au format de `dayKey`. */
  day: string;
}

/**
 * Revenir au premier plan est-il une réouverture ?
 *
 * Fonction pure, et c'est ce qui permet d'en écrire le test : les deux
 * déclencheurs — le jour a changé, ou l'absence a dépassé le seuil — se
 * vérifient sans navigateur.
 */
export function isReentry(departure: Departure | null, now: number, today: string): boolean {
  if (!departure) return false;
  if (departure.day !== today) return true;
  return now - departure.at >= REENTRY_AFTER_MS;
}

const CLE = "curiosity.lastDeparture";

export function readDeparture(): Departure | null {
  if (typeof window === "undefined") return null;
  try {
    const brut = window.sessionStorage.getItem(CLE);
    if (!brut) return null;
    const valeur = JSON.parse(brut) as Partial<Departure>;
    // Une valeur illisible vaut une absence : à ce compte-là on ne redirige
    // pas, ce qui est le repli sûr — on laisse la personne où elle est.
    return typeof valeur.at === "number" && typeof valeur.day === "string"
      ? { at: valeur.at, day: valeur.day }
      : null;
  } catch {
    return null;
  }
}

export function writeDeparture(departure: Departure): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(CLE, JSON.stringify(departure));
  } catch {
    // Stockage refusé : l'application reprend là où elle était, ce qu'elle
    // faisait déjà avant. Rien d'autre ne dépend de cette écriture.
  }
}

export function clearDeparture(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(CLE);
  } catch {
    // Voir `writeDeparture`.
  }
}

// ---------------------------------------------------------------------------
// L'annonce d'une réouverture
// ---------------------------------------------------------------------------

const listeners = new Set<() => void>();

/**
 * S'abonner aux réouvertures. Rend la fonction de désabonnement.
 *
 * L'écran d'Aujourd'hui en a besoin : quand la réouverture le trouve déjà
 * affiché, aucune navigation n'a lieu, donc aucun composant ne se remonte, et
 * son tirage — fait au montage — resterait celui de la veille.
 */
export function onReentry(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Signale une réouverture. Appelé par `EntryPoint`, et par lui seul. */
export function announceReentry(): void {
  ouverture = true;
  for (const listener of [...listeners]) listener();
}

// ---------------------------------------------------------------------------
// L'ouverture en attente
// ---------------------------------------------------------------------------

/**
 * Une ouverture attend d'être montrée.
 *
 * Vrai au chargement du module, donc à chaque document neuf : lancer
 * l'application depuis son icône, y revenir après que le système l'a
 * déchargée, recharger la page. Une réouverture la réarme.
 *
 * Aller d'Explorer à Aujourd'hui ne la réarme pas, et c'est tout l'intérêt de
 * la distinction : c'est un déplacement dans l'application, pas une ouverture,
 * et l'écran d'accueil qui s'y interposerait serait une taxe sur chaque
 * changement d'onglet.
 */
let ouverture = true;

/**
 * Consomme l'ouverture en attente : vrai une fois par ouverture, jamais deux.
 *
 * Elle se consomme là où elle se montre — l'écran d'Aujourd'hui — ou, quand
 * l'application s'ouvre ailleurs qu'à son point d'entrée, dans `EntryPoint` :
 * une adresse partagée a été demandée pour elle-même, et rejoindre Aujourd'hui
 * plus tard reste alors un déplacement.
 */
export function takeOpening(): boolean {
  const attendue = ouverture;
  ouverture = false;
  return attendue;
}
