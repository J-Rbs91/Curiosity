/**
 * La place que le contenu va prendre, avant qu'il arrive.
 *
 * Deux écrans ne pré-rendent rien : la carte du jour, qui a besoin du `localStorage` pour
 * savoir quel concept montrer, et la fiche d'un concept, dont l'identifiant est dans la
 * chaîne de recherche — `useSearchParams` impose une frontière de suspension sur une page
 * exportée statiquement. Leur HTML ne contenait donc, texte visible, que la barre de
 * navigation. Sur une connexion lente, celui qui suit un lien partagé regardait un écran
 * noir sans titre et sans message, et rien ne distinguait ce délai d'une panne.
 *
 * Ce squelette ne raccourcit pas l'attente : il la rend lisible, et il réserve la place
 * pour que l'arrivée du texte ne déplace rien. C'est aussi pourquoi ce n'est pas un
 * tourniquet — un tourniquet dit qu'on attend, un squelette dit ce qu'on attend.
 *
 * Il ne pulse pas. La règle du produit est qu'aucune surface ne bouge sans qu'un état ait
 * changé, et une animation d'attente ne survit pas à cette règle : elle attirerait l'œil
 * sur le vide au moment précis où il cherche le texte.
 */
export function ScreenSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="mx-auto max-w-md px-6 pt-10" aria-hidden>
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
