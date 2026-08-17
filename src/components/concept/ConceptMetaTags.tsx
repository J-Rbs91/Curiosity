import { TreeLink } from "@/components/navigation/TreeLink";
import { Chip } from "@/components/ui/Chip";
import type { Author, Theme } from "@/types";

interface ConceptMetaTagsProps {
  authors: Author[];
  themes: Theme[];
}

export function ConceptMetaTags({ authors, themes }: ConceptMetaTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
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
