import type { SessionPlan } from "@/types";

const KEY = "curiosity.pendingSession";

export function storePendingSession(plan: SessionPlan): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(plan));
  } catch {
    // ignore : la session sera recalculée si le stockage échoue
  }
}

export function readPendingSession(): SessionPlan | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as SessionPlan) : null;
  } catch {
    return null;
  }
}

export function clearPendingSession(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
