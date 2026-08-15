import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  tone?: "default" | "accent";
}

export function Chip({ children, tone = "default" }: ChipProps) {
  const toneClasses =
    tone === "accent"
      ? "bg-accent-soft text-accent"
      : "bg-paper-raised text-ink-soft";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}
