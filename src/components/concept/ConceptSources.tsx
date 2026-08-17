import { SOURCE_KIND_LABEL, orderedSources } from "@/domain/concepts/sources";
import type { Source } from "@/types";

/**
 * Les sources, affichées — mais à la demande.
 *
 * Le champ existait depuis le premier jour du projet sans être rendu nulle part : tout le
 * dispositif documentaire produisait des références que personne ne pouvait voir. Les
 * montrer est ce qui rend la vérification possible côté lecteur.
 *
 * Elles ne peuvent pas pour autant occuper la carte. Une fiche bien instruite porte vingt
 * ou trente références ; la projection en retient cinq au plus, et celles-ci restent
 * repliées derrière un mot. Ce qui doit tenir à l'écran, c'est le concept — les sources
 * sont là pour qui veut vérifier, pas pour prouver au lecteur qu'on a travaillé.
 *
 * L'ordre de lecture et les libellés de niveau viennent du domaine
 * (`@/domain/concepts/sources`) : le message envoyé à une IA emporte les mêmes sources, dans
 * le même ordre, sous les mêmes noms.
 */
export function ConceptSourceList({ sources }: { sources: Source[] }) {
  const ordered = orderedSources(sources);

  return (
    <ul className="space-y-[0.6em]">
      {ordered.map((source, index) => (
        <li key={`${source.label}-${index}`} className="text-[0.8em] leading-relaxed text-ink-faint">
          <span className="text-ink-soft">{SOURCE_KIND_LABEL[source.kind]}</span> ·{" "}
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
  );
}
