import type { Source, SourceKind } from "@/types";

/**
 * Les sources, affichées.
 *
 * Le champ existait depuis le premier jour du projet sans être rendu nulle part : tout le
 * dispositif documentaire produisait des références que personne ne pouvait voir. Les
 * montrer est ce qui rend la vérification possible côté lecteur — sans quoi « fiche
 * sourcée » reste une affirmation de notre part.
 *
 * Le niveau de chaque source est nommé plutôt que codé par une couleur ou une pastille :
 * la différence entre un texte de l'auteur et un commentaire universitaire est une
 * information, pas une décoration.
 */
const KIND_LABEL: Record<SourceKind, string> = {
  primary: "Texte de l'auteur",
  "secondary-academic": "Littérature académique",
  "francophone-reception": "Réception francophone",
  "pedagogical-interpretation": "Interprétation pédagogique",
  "cross-author-comparison": "Comparaison entre auteurs",
};

/** Ordre de lecture : ce qui établit avant ce qui commente. */
const KIND_ORDER: SourceKind[] = [
  "primary",
  "secondary-academic",
  "francophone-reception",
  "pedagogical-interpretation",
  "cross-author-comparison",
];

interface ConceptSourcesProps {
  sources: Source[];
  /**
   * Sur la carte du jour, seules les sources primaires sont montrées, et le reste est
   * compté. Une fiche bien instruite en porte facilement vingt : les afficher toutes
   * transforme la carte en bibliographie, où le texte de l'auteur se perd au milieu des
   * commentateurs. La liste entière reste sur la fiche du concept, à un geste de là.
   */
  compact?: boolean;
}

export function ConceptSources({ sources, compact = false }: ConceptSourcesProps) {
  if (sources.length === 0) return null;

  const ordered = [...sources].sort(
    (a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind)
  );

  if (compact) {
    const primary = ordered.filter((s) => s.kind === "primary");
    const shown = primary.length > 0 ? primary : ordered.slice(0, 1);
    const rest = sources.length - shown.length;
    return (
      <div>
        <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">Sources</h2>
        <ul className="mt-3 space-y-2">
          {shown.map((source, index) => (
            <li key={`${source.label}-${index}`} className="text-[13px] leading-relaxed text-ink-faint">
              <span className="text-ink-soft">{KIND_LABEL[source.kind]}</span> · {source.label}
            </li>
          ))}
        </ul>
        {rest > 0 && (
          <p className="mt-2 text-[13px] text-ink-faint">
            et {rest} autre{rest > 1 ? "s" : ""} source{rest > 1 ? "s" : ""} — littérature
            académique et réception, sur la fiche du concept.
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">Sources</h2>
      <ul className="mt-3 space-y-2">
        {ordered.map((source, index) => (
          <li key={`${source.label}-${index}`} className="text-[13px] leading-relaxed text-ink-faint">
            <span className="text-ink-soft">{KIND_LABEL[source.kind]}</span> ·{" "}
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="press underline underline-offset-2 hover:text-ink"
              >
                {source.label}
              </a>
            ) : (
              source.label
            )}
            {source.reference && <> · {source.reference}</>}
          </li>
        ))}
      </ul>
    </div>
  );
}
