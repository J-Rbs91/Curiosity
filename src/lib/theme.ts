/**
 * Le thème, et la seule chose que l'application retient d'un réglage d'affichage.
 *
 * **Deux valeurs distinctes, et les confondre est le piège de ce mécanisme.** Ce que le
 * lecteur choisit est une *préférence* — `system`, `light`, `dark` — et c'est elle qui est
 * stockée. Ce que la feuille de style lit est un *thème résolu* — `light` ou `dark` —, posé
 * sur `<html data-theme>`. « Suivre le système » n'est pas un thème : c'est une règle qui en
 * désigne un, et elle change de réponse sans que le lecteur ait rien fait.
 *
 * C'est cette résolution en JavaScript qui permet à `globals.css` de n'écrire la palette
 * claire **qu'une fois**. L'alternative — laisser la préférence brute sur l'attribut et
 * laisser le CSS trancher — demanderait le même bloc de trente valeurs sous
 * `[data-theme="light"]` et sous `@media (prefers-color-scheme: light)`. Deux copies d'une
 * même palette divergent, et c'est exactement ce que le §10 de `docs/ux-direction.md`
 * interdit.
 *
 * Le réglage vit sous sa **propre clé**, et non dans `ProgressState`. Les deux mémoires n'ont
 * ni la même durée de vie ni le même propriétaire : « Effacer l'historique des cartes déjà
 * lues » efface une histoire de lecture, et remettre le thème en noir à cette occasion serait
 * un effet de bord que personne n'a demandé.
 */

export const THEME_STORAGE_KEY = "curiosity.theme.v1";

/** Ce que le lecteur choisit. */
export type ThemePreference = "system" | "light" | "dark";

/** Ce que la feuille de style lit. */
export type ResolvedTheme = "light" | "dark";

/**
 * Le défaut, et il n'est pas « système ».
 *
 * L'application est sombre par décision — §2 et §3 de `docs/ux-direction.md` —, et cette
 * décision reste celle que rencontre quelqu'un qui n'a rien demandé. Suivre le système par
 * défaut aurait basculé en clair, à la première mise à jour, tous les lecteurs dont le
 * téléphone est en clair, sans qu'aucun ait exprimé de préférence sur *cette* application.
 *
 * Le mode clair n'est pas pour autant une courtesy : il est complet, mesuré, et « Suivre le
 * système » est offert au même rang que les deux autres. Faire de `system` le défaut est le
 * changement d'une ligne, ici, le jour où c'est ce qu'on veut.
 */
export const DEFAULT_PREFERENCE: ThemePreference = "dark";

export const THEME_PREFERENCES: readonly ThemePreference[] = ["system", "light", "dark"];

/** Les intitulés affichés, à un seul endroit : l'écran des réglages n'en invente aucun. */
export const THEME_LABELS: Record<ThemePreference, string> = {
  system: "Système",
  light: "Clair",
  dark: "Sombre",
};

/** La requête média qui décide, et elle seule. Écrite ici, lue par le script et par le composant. */
export const LIGHT_QUERY = "(prefers-color-scheme: light)";

export function isThemePreference(value: unknown): value is ThemePreference {
  return typeof value === "string" && (THEME_PREFERENCES as readonly string[]).includes(value);
}

/**
 * La préférence enregistrée, ou le défaut.
 *
 * Une valeur illisible ou inconnue — un stockage refusé, une version antérieure, une clé
 * modifiée à la main — ne fait pas échouer la lecture : elle rend le défaut. Un thème est
 * un confort, et aucune de ses défaillances ne doit empêcher l'application de s'ouvrir.
 */
export function readPreference(): ThemePreference {
  if (typeof window === "undefined") return DEFAULT_PREFERENCE;
  try {
    const raw = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(raw) ? raw : DEFAULT_PREFERENCE;
  } catch {
    return DEFAULT_PREFERENCE;
  }
}

/**
 * L'événement qui dit qu'une préférence vient d'être écrite, sur le modèle de `TRAIL_EVENT`.
 *
 * `storage` ne suffit pas : le navigateur ne l'émet que dans les **autres** documents de
 * l'origine, jamais dans celui qui a écrit. Sans cet événement-ci, l'écran des réglages
 * afficherait la pastille de l'option précédente jusqu'au prochain rendu.
 */
export const THEME_EVENT = "curiosity:theme";

export function writePreference(preference: ThemePreference): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    /*
     * Stockage plein ou refusé : le thème s'applique quand même pour cette session, il ne
     * survivra simplement pas à la fermeture. Échouer bruyamment ici coûterait plus que ce
     * que la mémoire d'un réglage vaut.
     */
  }
  window.dispatchEvent(new CustomEvent(THEME_EVENT));
}

/**
 * L'abonnement des composants à la préférence, pour `useSyncExternalStore`.
 *
 * Deux sources, et il faut les deux : l'événement ci-dessus pour ce document, `storage` pour
 * les autres onglets. Le `localStorage` est une mémoire extérieure à React — la lire dans un
 * effet et la recopier dans un état donnerait le rendu en cascade que React 19 refuse, et
 * surtout une seconde copie de la vérité.
 */
export function subscribeToPreference(onChange: () => void): () => void {
  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** La préférence, traduite en thème. C'est la seule règle de résolution du produit. */
export function resolveTheme(preference: ThemePreference, systemPrefersLight: boolean): ResolvedTheme {
  if (preference === "system") return systemPrefersLight ? "light" : "dark";
  return preference;
}

/**
 * Pose le thème résolu là où la feuille de style le lit, et accorde la barre système.
 *
 * Les deux gestes sont ici et non chez les appelants : le thème se change à deux endroits —
 * l'écran des réglages et le suivi du système — et les séparer aurait laissé la barre juste
 * dans un cas et fausse dans l'autre.
 *
 * La couleur de la barre est **relue sur le document** plutôt qu'écrite ici. Recopier
 * `#000000` et `#edddc0` en JavaScript donnerait une seconde définition de `--paper`, et
 * c'est celle-là qui dériverait le jour où la palette bouge.
 */
export function applyTheme(theme: ResolvedTheme): void {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;

  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) return;
  const paper = getComputedStyle(document.documentElement).getPropertyValue("--paper").trim();
  if (paper) meta.content = paper;
}

/**
 * Le script qui s'exécute avant la première peinture, écrit à partir des constantes
 * ci-dessus plutôt que tapé une seconde fois.
 *
 * **Pourquoi un script en ligne et pas un effet.** L'application est exportée en statique :
 * le HTML servi ne connaît pas la préférence du lecteur, qui vit dans son navigateur. Un
 * `useEffect` corrigerait le thème après l'hydratation *et après la peinture* — le lecteur
 * verrait donc du noir puis du crème à chaque ouverture. `useLayoutEffect` corrigerait avant
 * la peinture mais après l'hydratation, ce qui laisse le même éclair sur une connexion lente.
 * Un script en ligne s'exécute pendant l'**analyse** du HTML, avant que React existe. C'est
 * le motif documenté par Next sous « Themes » dans
 * `node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md`.
 *
 * **Ce qu'il ne fait pas.** Il ne lit rien d'autre que sa clé, n'écrit rien, et sort en
 * silence sur la moindre erreur — un `localStorage` refusé par le navigateur laisse alors
 * l'attribut tel que le serveur l'a rendu, c'est-à-dire le thème par défaut.
 */
export const THEME_SCRIPT = `(function(){try{var p=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY
)});if(${JSON.stringify(
  THEME_PREFERENCES
)}.indexOf(p)<0)p=${JSON.stringify(DEFAULT_PREFERENCE)};var t=p==="system"?(matchMedia(${JSON.stringify(
  LIGHT_QUERY
)}).matches?"light":"dark"):p;document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
