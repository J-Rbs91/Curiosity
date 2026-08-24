import urgencyPalette from "./urgency-palette.json";

/**
 * Le rappel porté par l'icône : ce qu'il vaut, indépendamment de la plateforme qui l'affiche.
 *
 * Tant que la carte du jour n'a pas été découverte, le fond quitte le noir à 11 h et avance
 * d'un palier par heure jusqu'au rouge maximal de 23 h. La découverte remet immédiatement le
 * palier à zéro pour le reste du jour.
 */
export const URGENCY_FIRST_HOUR = 11;
export const URGENCY_LAST_HOUR = 23;
export const URGENCY_STEPS = URGENCY_LAST_HOUR - URGENCY_FIRST_HOUR + 1;

/**
 * Palette commune au web et au shell Android.
 *
 * Les treize rouges ont été calculés sur l'axe noir → rouge pur en OKLab. Ils sont désormais
 * matérialisés dans un JSON partagé pour qu'Android génère exactement les mêmes quatorze
 * icônes que le favicon web, sans recopier la rampe dans deux langages.
 */
if (urgencyPalette.length !== URGENCY_STEPS + 1) {
  throw new Error(
    `La palette du rappel doit contenir ${URGENCY_STEPS + 1} fonds, reçu ${urgencyPalette.length}.`,
  );
}

export const URGENCY_GROUNDS: readonly string[] = Object.freeze([...urgencyPalette]);

/**
 * Le palier du moment : 0 pour le noir, 1 à 13 pour les rouges.
 *
 * Il ne dépend que de l'heure locale et du fait que la carte du jour ait été découverte.
 * Aucun compteur n'est conservé : après une longue fermeture, on saute directement au palier
 * correspondant à l'heure courante.
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

  return Math.min(hour, URGENCY_LAST_HOUR) - URGENCY_FIRST_HOUR + 1;
}

/** Le fond d'un palier, borné à l'échelle valide. */
export function urgencyGround(step: number): string {
  return URGENCY_GROUNDS[Math.min(Math.max(step, 0), URGENCY_STEPS)];
}

/**
 * Délai jusqu'au prochain début d'heure.
 *
 * C'est aussi le mécanisme qui traverse minuit côté web. Android recalcule la même règle via
 * WorkManager et les broadcasts de changement de date/heure.
 */
export function msUntilNextStep(now: Date = new Date()): number {
  const next = new Date(now);
  next.setMinutes(0, 0, 0);
  next.setHours(next.getHours() + 1);
  return Math.max(next.getTime() - now.getTime(), 1000);
}
