/**
 * La place que l'écran va prendre, en attendant qu'il l'occupe.
 *
 * Deux écrans n'ont rien à pré-rendre — la carte du jour a besoin du `localStorage`, la
 * fiche de la chaîne de recherche —, et un troisième attend le chargement du module des
 * textes longs. Sans cette réserve, leur HTML ne contient que la navigation, et un lien
 * partagé ouvre sur un écran noir que rien ne distingue d'une panne.
 *
 * La mesure est un paramètre parce que la réserve doit faire la largeur de ce qu'elle
 * réserve : sur un grand écran, un squelette de 448 px suivi d'une liste de 736 px
 * produirait exactement le saut de mise en page qu'un squelette existe pour éviter. Les
 * trois valeurs sont celles des trois familles d'écrans, et leurs seuils diffèrent pour la
 * raison expliquée dans `globals.css` — la carte attend 64 rem parce que sa taille de texte
 * dépend de la hauteur, les autres s'élargissent dès 48.
 */
const MEASURES = {
  /** La carte du jour. */
  card: "max-w-md lg:max-w-read",
  /** Un texte suivi : fiche de concept, approfondissement. */
  read: "max-w-md md:max-w-read",
  /** Un en-tête et sa liste. */
  page: "max-w-md md:max-w-page",
} as const;

export function ScreenSkeleton({
  lines = 3,
  measure = "read",
}: {
  lines?: number;
  measure?: keyof typeof MEASURES;
}) {
  return (
    <div className={`mx-auto px-6 pt-10 ${MEASURES[measure]}`} aria-hidden>
      <div className="h-8 w-2/3 rounded-lg bg-paper-raised" />
      <div className="mt-5 space-y-3">
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className="h-4 rounded bg-paper-raised"
            style={{ width: i === lines - 1 ? "60%" : "100%" }}
          />
        ))}
      </div>
    </div>
  );
}
