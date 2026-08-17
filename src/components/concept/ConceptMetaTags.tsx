import { TreeLink } from "@/components/navigation/TreeLink";
import { Chip } from "@/components/ui/Chip";
import type { Author, Domain, Theme } from "@/types";

interface ConceptMetaTagsProps {
  authors: Author[];
  themes: Theme[];
  /**
   * Le domaine de la carte, sur la fiche seulement — jamais sur la carte du jour.
   *
   * La carte tient dans un écran et n'a de place que pour ce qu'il y a à comprendre : son
   * thème suffit à la situer. La fiche, qu'on est allé chercher, est l'endroit où l'on veut
   * au contraire savoir d'où vient ce qu'on lit et pouvoir remonter au domaine.
   */
  domain?: Domain;
}

export function ConceptMetaTags({ authors, themes, domain }: ConceptMetaTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {domain && (
        <TreeLink href={`/explore/domains/${domain.slug}`} className="press rounded-full">
          <Chip>{domain.label}</Chip>
        </TreeLink>
      )}
      {authors.map((a) => (
        <TreeLink
          key={a.id}
          href={`/explore/authors/${a.slug}`}
          className="press rounded-full"
        >
          <Chip tone="accent">{a.name}</Chip>
        </TreeLink>
      ))}
      {themes.map((t) => (
        <TreeLink
          key={t.id}
          href={`/explore/themes/${t.slug}`}
          className="press rounded-full"
        >
          <Chip>{t.title}</Chip>
        </TreeLink>
      ))}
    </div>
  );
}
