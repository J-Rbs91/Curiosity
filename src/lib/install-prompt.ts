/**
 * L'installation de l'application — ce que les plateformes en permettent, et ce qu'elles
 * n'en permettent pas.
 *
 * Une carte partagée s'ouvre dans un navigateur, sur l'appareil de quelqu'un qui ne connaît
 * pas l'application. C'est le seul moment où proposer de l'installer a du sens, et c'est
 * aussi celui où l'on ne décide de rien : **aucune plateforme ne laisse une page déclencher
 * une installation d'elle-même.** Ce module ne fait donc que trois choses, et refuse d'en
 * faire une quatrième :
 *
 * — retenir l'invitation que le navigateur veut bien donner (`beforeinstallprompt`), pour la
 *   rendre au moment où le lecteur la demande plutôt qu'à celui où le navigateur l'émet ;
 * — dire si l'application tourne déjà comme une application, auquel cas il n'y a rien à
 *   proposer ;
 * — dire quand l'installation ne peut être qu'un geste manuel, faute d'API — c'est le cas
 *   d'iOS, où le seul chemin est « Partager » puis « Sur l'écran d'accueil ».
 *
 * **L'écoute est posée au chargement du module, pas au montage d'un composant.**
 * `beforeinstallprompt` est émis tôt, souvent avant que React n'hydrate : un écouteur posé
 * dans un effet arrive après l'événement, et le bouton d'installation n'apparaît jamais. Il
 * n'y a pas de second essai — le navigateur ne réémet pas.
 */

/**
 * `beforeinstallprompt`, que TypeScript ne connaît pas : il n'est ni standardisé ni
 * implémenté partout — Chromium le propose, Safari et Firefox non.
 */
export interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

/** Ce qu'une invitation à installer peut donner. */
export type InstallOutcome = "accepted" | "dismissed" | "unavailable";

let differe: InstallPromptEvent | null = null;
const listeners = new Set<() => void>();

function annoncer(): void {
  for (const listener of [...listeners]) listener();
}

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (event) => {
    /*
     * Le navigateur proposerait de lui-même, à son moment. On le retient : l'invitation est
     * rendue au lecteur là où elle a un sens — sous la carte qu'on vient de lui partager —
     * et non par-dessus le texte qu'il est en train de lire.
     */
    event.preventDefault();
    differe = event as InstallPromptEvent;
    annoncer();
  });

  /*
   * Et une fois installée, il n'y a plus rien à proposer. L'événement est émis même quand
   * l'installation a été faite depuis le menu du navigateur, sans passer par nous.
   */
  window.addEventListener("appinstalled", () => {
    differe = null;
    annoncer();
  });
}

/** S'abonner à l'arrivée — ou au retrait — de l'invitation. Rend le désabonnement. */
export function subscribeInstallPrompt(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Le navigateur nous a-t-il confié une invitation à installer ? */
export function installPromptAvailable(): boolean {
  return differe !== null;
}

/**
 * Ce que vaut la question hors du navigateur : rien.
 *
 * `useSyncExternalStore` exige une valeur pour le rendu serveur, et elle doit être celle qui
 * ne montre rien : un bouton rendu ici et absent là serait une divergence d'hydratation.
 */
export function installPromptUnavailable(): boolean {
  return false;
}

/**
 * Rend la main au navigateur, et dit ce que le lecteur a répondu.
 *
 * L'invitation ne sert qu'une fois : refusée, le navigateur ne la réémet pas dans la même
 * page, et la garder ferait un bouton qui ne fait plus rien.
 */
export async function promptInstall(): Promise<InstallOutcome> {
  const invitation = differe;
  if (!invitation) return "unavailable";

  differe = null;
  annoncer();

  try {
    await invitation.prompt();
    const { outcome } = await invitation.userChoice;
    return outcome;
  } catch {
    // Invitation périmée, ou déjà servie : rien à signaler au lecteur, le bouton a disparu.
    return "unavailable";
  }
}

/**
 * L'application tourne-t-elle déjà comme une application ?
 *
 * Trois façons de le savoir, parce qu'aucune ne couvre les trois cas : `display-mode` est la
 * requête média standard, `navigator.standalone` est ce que Safari expose à sa place, et
 * Capacitor est le conteneur Android — voir `native/`. Proposer d'installer une application
 * déjà installée est la seule erreur vraiment visible que cet écran puisse commettre.
 */
export function runsAsApp(): boolean {
  if (typeof window === "undefined") return false;

  const media = window.matchMedia?.("(display-mode: standalone)");
  if (media?.matches) return true;

  const nav = window.navigator as Navigator & { standalone?: boolean };
  if (nav.standalone === true) return true;

  const capacitor = (window as Window & { Capacitor?: unknown }).Capacitor;
  return capacitor !== undefined;
}

/**
 * L'installation ne peut-elle être qu'un geste manuel ?
 *
 * Fonction pure, sur la chaîne d'agent utilisateur, et c'est ce qui permet d'en écrire le
 * test. iOS n'implémente pas `beforeinstallprompt` — sur aucun navigateur, la règle d'Apple
 * imposant le même moteur à tous : l'absence d'invitation n'y dit donc rien de
 * l'installabilité, et sans cette distinction on n'aurait à proposer qu'un lien là où il
 * existe un chemin réel.
 *
 * L'iPad se déclare « Macintosh » depuis iPadOS 13 ; c'est le second argument qui le
 * rattrape, faute de quoi il recevrait la consigne d'un navigateur de bureau qui n'en a pas
 * besoin.
 */
export function needsManualInstall(userAgent: string, maxTouchPoints = 0): boolean {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return true;
  return /Macintosh/i.test(userAgent) && maxTouchPoints > 1;
}

/** La même question, posée au navigateur courant. */
export function needsManualInstallHere(): boolean {
  if (typeof navigator === "undefined") return false;
  return needsManualInstall(navigator.userAgent, navigator.maxTouchPoints ?? 0);
}

// ---------------------------------------------------------------------------
// D'où l'on arrive
// ---------------------------------------------------------------------------

/**
 * Le chemin par lequel ce document s'est ouvert, retenu avant toute navigation.
 *
 * C'est ce qui distingue **quelqu'un qui a suivi un lien partagé** d'un lecteur qui se
 * promène dans l'application : le premier ouvre un document neuf sur la fiche d'un concept,
 * le second y arrive depuis Explorer sans que le document change. Aucun autre signal ne les
 * sépare — l'écran est le même, l'adresse est la même, et le référent ne dit rien d'une
 * messagerie.
 *
 * La valeur est lue au chargement du module, et c'est la seule façon d'obtenir la bonne :
 * lue plus tard, elle porterait le chemin courant, que la moindre navigation interne a déjà
 * changé.
 */
const CHEMIN_D_ARRIVEE: string | null =
  typeof window === "undefined" ? null : window.location.pathname;

/**
 * Deux chemins désignent-ils le même écran ?
 *
 * La barre finale ne compte pas : l'export statique sert `/explore/concept/`, mais rien
 * n'empêche un lien partagé de perdre sa barre en route — une messagerie qui recompose
 * l'adresse, un raccourcisseur, un copier-coller à la main.
 */
export function samePath(a: string | null, b: string): boolean {
  if (a === null) return false;
  const nu = (chemin: string) => chemin.replace(/\/+$/, "");
  return nu(a) === nu(b);
}

/**
 * Ce document s'est-il ouvert sur cet écran, plutôt que d'y être arrivé ?
 *
 * Le chemin attendu est celui que le navigateur voit, préfixe d'hébergement compris : c'est
 * à l'appelant de le passer par `withBasePath`.
 */
export function arrivedFromOutside(path: string): boolean {
  return samePath(CHEMIN_D_ARRIVEE, path);
}
