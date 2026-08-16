import type { Author, Concept } from "@/types";

interface ConceptSummaryCardProps {
  concept: Concept;
  authors: Author[];
  eyebrow?: string;
}

export function ConceptSummaryCard({ concept, authors, eyebrow }: ConceptSummaryCardProps) {
  const authorNames = authors.map((a) => a.name).join(", ");

  return (
    <div className="border-l border-line pl-4">
      {eyebrow && (
        <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">{eyebrow}</p>
      )}
      <h3 className="font-serif-display text-[19px] font-semibold text-ink">{concept.title}</h3>
      {authorNames && <p className="mt-0.5 text-xs text-ink-soft">{authorNames}</p>}
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{concept.shortExplanation}</p>
    </div>
  );
}
