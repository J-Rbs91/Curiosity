import { dayKey } from "@/domain/concepts/next-card";
import { getProgressService } from "@/services/progress";

/**
 * Le statut « carte du jour découverte » reste stocké dans la progression web.
 *
 * Android a cependant besoin de connaître ce seul fait alors que le WebView est gelé ou fermé.
 * On lui en expose donc une projection minimale dans un cookie local au conteneur Capacitor :
 * uniquement le jour civil découvert (AAAA-MM-JJ). Ce marqueur n'est jamais la source de vérité
 * côté web ; il est réparé à chaque lecture à partir de `ProgressService`.
 */
const NATIVE_DISCOVERY_COOKIE = "curiosity_daily_discovered";
const NATIVE_DISCOVERY_MAX_AGE_SECONDS = 3 * 24 * 60 * 60;

const listeners = new Set<() => void>();

type CapacitorWindow = Window & {
  Capacitor?: {
    getPlatform?: () => string;
  };
};

function isNativeAndroid(): boolean {
  if (typeof window === "undefined") return false;
  return (window as CapacitorWindow).Capacitor?.getPlatform?.() === "android";
}

function writeNativeDiscoveryMarker(day: string | null): void {
  if (typeof document === "undefined" || !isNativeAndroid()) return;

  if (day) {
    document.cookie = [
      `${NATIVE_DISCOVERY_COOKIE}=${day}`,
      "Path=/",
      `Max-Age=${NATIVE_DISCOVERY_MAX_AGE_SECONDS}`,
      "SameSite=Lax",
    ].join("; ");
    return;
  }

  document.cookie = [
    `${NATIVE_DISCOVERY_COOKIE}=`,
    "Path=/",
    "Max-Age=0",
    "SameSite=Lax",
  ].join("; ");
}

/** La carte du jour est-elle déjà découverte, à cet instant ? */
export function isDailyCardDiscovered(now: Date = new Date()): boolean {
  if (typeof window === "undefined") return false;

  const today = dayKey(now);
  const discovered = getProgressService().hasDiscovered(today);

  // Projection idempotente vers Android. Elle efface aussi un marqueur de la veille qui
  // aurait survécu au redémarrage du WebView.
  writeNativeDiscoveryMarker(discovered ? today : null);
  return discovered;
}

/**
 * Signale que la carte du jour vient de s'afficher.
 *
 * Le tirage ne suffit pas : la découverte n'est vraie qu'après franchissement du seuil et
 * affichage effectif de la carte. Les appels répétés restent idempotents.
 */
export function markDailyCardDiscovered(now: Date = new Date()): void {
  if (typeof window === "undefined") return;

  const service = getProgressService();
  const today = dayKey(now);

  if (service.hasDiscovered(today)) {
    writeNativeDiscoveryMarker(today);
    return;
  }

  service.markDailyDiscovered(today);
  if (!service.hasDiscovered(today)) return;

  writeNativeDiscoveryMarker(today);
  announce();
}

/**
 * À appeler lorsqu'une action utilisateur efface la progression.
 *
 * L'historique web reste la source de vérité ; on retire simplement sa projection native afin
 * qu'Android puisse reprendre immédiatement le palier correspondant à l'heure courante.
 */
export function resetDailyDiscoverySignal(): void {
  writeNativeDiscoveryMarker(null);
  announce();
}

/** Le libellé du seuil selon qu'il s'agit d'une découverte ou d'une relecture. */
export function dailyThresholdLabel(discovered: boolean): string {
  return discovered ? "Revoir le concept du jour" : "Concept du jour";
}

function announce(): void {
  for (const listener of [...listeners]) listener();
}

/** S'abonner aux changements du statut de découverte. Rend la fonction de désabonnement. */
export function onDailyDiscovery(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
