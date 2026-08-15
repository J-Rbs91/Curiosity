import Link from "next/link";
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
        <Link key={a.id} href={`/explore/authors/${a.slug}`}>
          <Chip tone="accent">{a.name}</Chip>
        </Link>
      ))}
      {themes.map((t) => (
        <Link key={t.id} href={`/explore/themes/${t.slug}`}>
          <Chip>{t.title}</Chip>
        </Link>
      ))}
    </div>
  );
}
