import { authors } from "@/content";
import { AuthorDetail } from "./AuthorDetail";

/**
 * L'export statique impose d'énumérer les chemins à la construction. Ce n'est pas une gêne
 * ici : la liste des auteurs est écrite dans le dépôt, elle ne peut pas changer entre deux
 * constructions.
 *
 * `dynamicParams = false` dit le reste : un slug absent de cette liste n'existe pas, et
 * n'aura pas de page.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export default async function AuthorDetailPage({ params }: PageProps<"/explore/authors/[slug]">) {
  const { slug } = await params;
  return <AuthorDetail slug={slug} />;
}
