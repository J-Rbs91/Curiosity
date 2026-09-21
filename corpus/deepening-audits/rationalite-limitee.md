---
concept_id: rationalite-limitee
deepening_sha256: bde9cd2d0230c9233d38579aef4e823fe8d07e8227780ca7283bb51b1bef5940
validated_sha256: 38c44f4a1212bdb7435fca76c7927a77033293e527e1abba8d6274a0dd5595d7
protocol_version: 3
audited_at: 2026-09-21T04:40:03Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# rationalite-limitee

**Le texte publié refermait dans son `lead` le contresens « on n'a pas le temps », puis le
rouvrait trois fois dans sa dernière section.** Le dossier consacre une entrée entière à ce
point : « ATTRIBUTION NON SOUTENUE PAR CE TEXTE […] Le TEMPS n'est jamais nommé comme borne dans
le texte lu ». Ce que la source approche est le coût de calcul, pas la durée disponible.

C'est le dossier le mieux doté des trois cartes du lot — 139 Ko, 477 supports — et c'est celui
dont l'audit a relevé le plus de fragilités. Les deux faits vont ensemble : un dossier épais ne
rend pas une carte saine, il rend un audit capable de la juger.

## Les quatre fragilités, et ce qu'elles avaient en commun

Aucune n'était atteignable sans le dossier, et aucune n'était une invention.

1. **La borne temporelle**, ci-dessus, énoncée en S5 contre une réserve explicite du répertoire
   de preuve.
2. **Un référent qui glisse.** La citation « The phenomenon observed in Milwaukee is ubiquitous
   in human decision making » (p. 353) était accrochée à la règle d'arrêt exposée p. 356. La
   citation est authentique et autorisée ; ce qu'elle désigne dans la source est l'impossibilité
   cognitive d'égaliser les rendements marginaux, exposée avant et indépendamment du satisficing.
   **Une citation exacte peut être mal placée, et c'est un défaut documentaire entier.**
3. **Une datation implicite du mot.** « a mis un mot sur cet écart, dans la conférence qu'il a
   donnée en recevant, en 1978, le prix Nobel » se lit comme une date de nomination. Le dossier
   date la première occurrence imprimée d'après un tiers qu'aucun agent n'a ouvert, et le lecteur
   primaire écrit de ne « rien affirmer sur ce point ».
4. **Des identités d'auteur complétées** par ce qu'on croit savoir d'elles — le biais que le lot
   du 20 septembre avait vu apparaître deux fois le même jour sous deux réécrivains différents.

## Ce que la boucle de correction a appris, et qui vaut au-delà de cette carte

**L'audit a provoqué lui-même l'un des cinq échecs du gate.** Il demandait de refermer le
contresens du temps ; la révision a refermé en affirmant la négation — « disposer de plus de temps
n'y changerait rien ». C'est un argument tiré du silence de la source, et le gate l'a refusé avec
la même fermeté que l'affirmation inverse.

**Refermer un contresens ne se fait pas en affirmant son contraire, mais en n'affirmant ni l'un
ni l'autre.** La correction retire les deux. L'invariant du dépôt le disait déjà sans ce cas
d'espèce : absence de contradiction n'est pas preuve. Il faut y ajouter son symétrique, qui est
neuf : **une réserve documentaire n'autorise pas la proposition contraire.** Qu'une source ne
nomme pas le temps comme borne n'établit pas que le temps n'y change rien.

Deux autres échecs valent d'être retenus.

- **Un mot que les sources gardent en anglais se garde en anglais.** Le texte présentait
  « choix satisfaisant » comme ce qu'« on rend » par *satisficing*, avec son double sens
  *suffire* / *satisfaire*. Le dossier dit « PAS DE RENDU FRANÇAIS STABILISÉ » et qu'aucune
  traduction ne conserve à la fois l'allusion et le néologisme. La correction dit l'état réel des
  sources au lieu de fabriquer le rendu qui manquait.
- **Le mapper a laissé un claim sans support et l'a signalé** — « beaucoup de décisions se
  prennent ainsi », une affirmation de fréquence sur le monde. Il ne l'a pas corrigé et n'avait
  pas à le faire. La chaîne l'a porté sans le masquer jusqu'à l'organe qui a le droit de le
  refuser. C'est la répartition voulue, observée en fonctionnement.

Un dernier point, sur le mapping cette fois : le premier tour avait rattaché une proposition à
`mechanism[13]` (p. 362) quand elle se trouve dans `mechanism[14]` (p. 363). Le réécrivain l'a vu
sans inventer de `SUP-` pour le dire, et le mapping du second tour a résolu les deux supports sur
leur contenu, laissant celui de la p. 362 inutilisé parce qu'il ne porte pas la proposition.
**Un support proche n'est pas un support.**

## Résultat

Gate au second tour : **FACTCHECK_PASS, 74 claims sur 74.** Cinq claims corrigés entre les deux
tours, aucune erreur structurelle.

Revue indépendante : **ACCEPT**, sur le SHA exact du gate, avec pour base de comparaison le blob
`dd3a8bb` relevé avant toute écriture du lot. La revue avait charge de peser le volume — 1 121
mots avant, environ 1 598 après — contre l'invariant selon lequel toute augmentation de longueur
doit être une augmentation de matière. Le détail de sa comparaison sur les huit axes est dans
`work/rationalite-limitee/review.md`.

## Ce que cette carte laisse ouvert

**Une divergence d'accès qui n'est pas réparable depuis la couche approfondissement.**
L'enregistrement validé porte `consulted: "full-text"` pour Cozic, « La rationalité limitée »,
quand les deux fichiers du dossier déclarent la source non lue — notice HAL seule, aucun fichier
servi, HTTP 404. Le réécrivain a traité Cozic en metadata-only, ce qui est la bonne parade côté
texte, et la divergence reste entière dans `corpus/validated/rationalite-limitee.json`.

**Elle n'est pas cosmétique.** Le pack de preuve hérite son niveau d'accès du champ `consulted`
porté par l'objet source ; une source déclarée `full-text` à tort fournit donc au vérificateur
des supports estampillés « lu », et son verdict `SOURCE_NOT_CONSULTED` ne peut plus se déclencher
sur elle. C'est un défaut de sens inverse à tous ceux que ce dispositif attrape : il ouvre au
lieu de fermer. Voir le chantier H de `RESTE-A-FAIRE.md`.
