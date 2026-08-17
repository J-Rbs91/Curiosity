import { domains } from "@/content";
import { DomainDetail } from "./DomainDetail";

/**
 * Même contrat que les auteurs et les thèmes : la liste est écrite dans le dépôt — ici la
 * taxonomie —, elle ne peut pas changer entre deux constructions, et un slug qui n'y figure
 * pas n'existe pas.
 *
 * Ajouter un domaine ajoute donc sa page, sans qu'aucun fichier de route soit à écrire.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return domains.map((domain) => ({ slug: domain.slug }));
}

export default async function DomainDetailPage({
  params,
}: PageProps<"/explore/domains/[slug]">) {
  const { slug } = await params;
  return <DomainDetail slug={slug} />;
}
