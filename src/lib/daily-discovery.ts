import { dayKey } from "@/domain/concepts/next-card";
import { getProgressService } from "@/services/progress";

/**
 * « La carte du jour a-t-elle été découverte ? » — la question, et le seul endroit où elle
 * se pose.
 *
 * Le rappel de l'icône ne dépend que de trois choses : la date du jour, l'heure locale, et
 * cette réponse-ci. Les deux premières sont dans `src/domain/reminder/daily-urgency.ts` ;
 * celle-ci est ici, avec la comparaison au jour civil qu'elle suppose — comparaison faite à
 * chaque lecture plutôt qu'une fois pour toutes, ce qui la rend juste après une nuit, un
 * redémarrage ou un changement de fuseau sans qu'aucun réveil de minuit n'ait à l'y remettre.
 *
 * **Découverte, et non tirée.** Le tirage enregistre la carte du jour au montage de l'écran
 * d'Aujourd'hui, seuil compris ; ce module n'est notifié que lorsque la carte s'affiche
 * réellement. C'est la différence entre ouvrir l'application et ouvrir la carte, et c'est
 * exactement ce que le rappel existe pour distinguer.
 *
 * L'annonce suit le motif de `app-entry.ts` : un abonnement, parce que découvrir la carte et
 * peindre l'icône se passent dans deux composants qui ne se connaissent pas — l'un est un
 * écran, l'autre vit dans la coque et survit à sa navigation.
 */

const listeners = new Set<() => void>();

/** La carte du jour est-elle déjà découverte, à cet instant ? */
export function isDailyCardDiscovered(now: Date = new Date()): boolean {
  if (typeof window === "undefined") return false;
  return getProgressService().hasDiscovered(dayKey(now));
}

/**
 * Signale que la carte du jour vient de s'afficher.
 *
 * Appelée à chaque rendu de la carte, et c'est voulu : l'écriture est idempotente côté
 * service, et l'annonce n'a lieu que si l'état a réellement changé. Un appelant n'a donc
 * pas à savoir s'il est le premier de la journée — savoir cela serait un état de plus à
 * tenir juste, dans un composant qui se démonte à chaque changement d'onglet.
 */
export function markDailyCardDiscovered(now: Date = new Date()): void {
  if (typeof window === "undefined") return;
  const service = getProgressService();
  const today = dayKey(now);
  if (service.hasDiscovered(today)) return;

  service.markDailyDiscovered(today);
  // L'écriture peut n'avoir rien fait — aucune carte du jour enregistrée. On n'annonce que
  // ce qui a effectivement changé, faute de quoi l'icône se repeindrait pour rien.
  if (service.hasDiscovered(today)) announce();
}

/**
 * Le libellé du seuil, et ce qu'il change.
 *
 * Le seuil se franchit à chaque ouverture, mais on ne franchit pas deux fois la même
 * chose : la première fois de la journée, on va découvrir une carte qu'on n'a pas lue ;
 * les suivantes, on va relire celle du matin. Le bouton disait « Concept du jour » dans
 * les deux cas, et promettait donc à la seconde ouverture une découverte qui n'aurait pas
 * lieu — l'écart entre ce qui est annoncé et ce qui arrive est précisément ce que le seuil
 * existe pour éviter.
 *
 * Le libellé se déduit du seul statut de découverte, sans mémoire propre : la même
 * comparaison de jours civils qui éteint le rappel de l'icône décide ici du mot, si bien
 * que le passage de minuit rend « Concept du jour » sans qu'aucune remise à zéro n'ait à
 * l'y remettre.
 */
export function dailyThresholdLabel(discovered: boolean): string {
  return discovered ? "Revoir le concept du jour" : "Concept du jour";
}

function announce(): void {
  for (const listener of [...listeners]) listener();
}

/** S'abonner aux découvertes. Rend la fonction de désabonnement. */
export function onDailyDiscovery(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
