import { themes } from "@/content";
import { ThemeDetail } from "./ThemeDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return themes.map((theme) => ({ slug: theme.slug }));
}

export default async function ThemeDetailPage({ params }: PageProps<"/explore/themes/[slug]">) {
  const { slug } = await params;
  return <ThemeDetail slug={slug} />;
}
