/**
 * La place que l'écran va prendre, en attendant qu'il l'occupe.
 *
 * Deux écrans n'ont rien à pré-rendre — la carte du jour a besoin du `localStorage`, la
 * fiche de la chaîne de recherche —, et un troisième attend le chargement du module des
 * textes longs. Sans cette réserve, leur HTML ne contient que la navigation, et un lien
 * partagé ouvre sur un écran noir que rien ne distingue d'une panne.
 *
 * La mesure est un paramètre parce que la réserve doit faire la largeur de ce qu'elle
 * réserve : sur un grand écran, un squelette de 448 px suivi d'une liste de 1120 px
 * produirait exactement le saut de mise en page qu'un squelette existe pour éviter.
 *
 * Elle reprend donc les primitives de composition de `globals.css` plutôt que de
 * recopier des largeurs : deux endroits qui décident de la même colonne divergent
 * toujours, et c'est un squelette qui cesse alors de réserver ce qu'il annonce. La
 * carte du jour fait exception parce qu'elle n'est pas une colonne d'écran — sa
 * largeur suit sa base typographique, et donc la hauteur, au seuil de 64 rem.
 */
const MEASURES = {
  /** La carte du jour. */
  card: "mx-auto max-w-md px-6 lg:max-w-read",
  /** Un écran de lecture : fiche de concept, approfondissement. */
  read: "column column-editorial",
  /** Un écran d'exploration : un en-tête et sa grille. */
  wide: "column column-wide",
} as const;

export function ScreenSkeleton({
  lines = 3,
  measure = "read",
}: {
  lines?: number;
  measure?: keyof typeof MEASURES;
}) {
  return (
    <div className={`pt-10 ${MEASURES[measure]}`} aria-hidden>
      {/* Le titre réserve la mesure du titre, pas celle de la colonne : c'est la
          composition de l'écran de lecture, et un squelette qui l'ignorerait
          annoncerait un bloc que rien ne vient occuper. */}
      <div className="h-8 w-2/3 max-w-title rounded-lg bg-paper-raised" />
      <div className="mt-5 max-w-read space-y-3">
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
