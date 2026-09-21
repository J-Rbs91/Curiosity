---
concept_id: deplacement-des-buts
deepening_sha256: 0f8fce9e56c2710812504c12fa121eeb789b1ad0de0742ebb2788e4199330136
validated_sha256: 4ef22fd4aa7059a9aceef4f2f9f2527ef7e90635428ee03ad53cf754343c6d7a
protocol_version: 3
audited_at: 2026-09-21T04:47:29Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# deplacement-des-buts

**Le texte publié faisait parler deux sources que son propre dossier déclare non ouvertes.** Une
section entière, « Une question de degré », énonçait ce que Warner & Havens 1968 auraient établi
sur les conditions d'intensité du déplacement. Le dossier de réception écrit de cet article :
« CONSULTÉ EN MÉTADONNÉES SEULEMENT (Crossref ; JSTOR fermé) », et qu'il « établit uniquement » la
présence du terme en titre.

Et l'enregistrement validé, lui, porte `consulted: "full-text"` pour cette source comme pour
Selznick 1943. **C'est le dossier qui fait foi**, et c'est la raison pour laquelle cette carte
avait besoin d'un audit à dossier : rien dans l'enregistrement validé ne contredisait le texte.

## Les quatre échecs du premier tour, tous d'une seule espèce

Le gate a refusé quatre claims au premier tour, et les quatre relèvent du **défaut dominant mesuré
par le lot du 20 septembre : une modalité ou un quantificateur de l'auteur perdu en route.** Le
lot du 21 en donne la confirmation la plus nette qui soit, puisque les quatre échecs d'une même
carte y tiennent entiers.

- **Une restriction supprimée.** Merton écrit que la discipline n'est efficace *only if* les
  conduites attendues sont étayées par des sentiments forts, « and not by sheer force ». Le texte
  opposait les dispositions à la surveillance et prêtait à l'auteur une exclusion pure et simple
  que ce dernier n'énonce pas. La correction rend les deux modaux.
- **Un état déplacé importé dans son point de départ.** L'énumération attribuée à Merton
  s'augmentait d'une indifférence au cas particulier qui est, dans le dossier, la propriété de la
  discipline *déjà* transformée, pas de la disposition inculquée en amont. Retrait strictement
  soustractif : le réécrivain note qu'il n'a rien ajouté à l'énumération, **même ce qu'un support
  autorisait**.
- **Une existence devenue une prévalence.** « la lecture la plus répandue » reposait sur un
  `non_etabli` du dossier disant qu'aucun décompte de la lecture dominante n'était disponible.
  Retirée sans substitut atténué, parce qu'aucune formulation ne rend disponible ce que le dossier
  range en non établi.
- **Un « souvent » déplacé.** Merton écrit que le client, « quite understandably », est convaincu
  des « special features » de son cas et « often objects » au traitement par catégories. Le texte
  faisait du « souvent » une qualification du bien-fondé de la conviction — « souvent à bon
  droit » — et rendait l'objection inconditionnelle. L'aval prêté à l'auteur augmentait d'autant.

**Aucun de ces écarts n'est visible sans le texte source.** Le français est plausible à chaque
fois, et l'enregistrement validé ne les contredit pas.

## Le second tour, et ce qu'il dit du mapping

Un seul claim a échoué au second tour, sur une phrase que le premier découpage ne jugeait pas
seule : « former chacun à la respecter **élimine** cette part d'arbitraire », là où les supports
n'attestent qu'une minimisation — « functionaries minimize personal relations », une norme
d'impersonnalité, des règles générales qui « preclude the necessity for the issuance of specific
instructions for each specific case ».

La correction est d'un mot, `élimine` → `réduit`, et c'était la bonne échelle : les soixante-seize
autres claims sont inchangés lettre pour lettre. Le réécrivain a distingué de lui-même le décalage
d'offset qui en résulte — conséquence mécanique que `PREPARE` recalcule — d'une modification du
texte des claims suivants. C'est la distinction juste, et c'est pourquoi la chaîne est repartie de
`PREPARE` au lieu de rejouer le mapping.

## Résultat

Gate au troisième tour : **FACTCHECK_PASS, 77 claims sur 77.** Deux boucles de correction, quatre
claims puis un.

Le vérificateur a rendu son PASS en disant où il avait été près de ne pas le rendre : contrefactuels
sans détail présentés comme réels, fait de presse daté dont l'intermédiaire est conservé, trois
« often » rendus par un présent de tendance, conséquences dérivées sans attribution primaire. Tous
restent dans ce que les supports autorisent.

Revue indépendante : **ACCEPT**, sur le SHA exact du gate, base de comparaison `5e97ef6` relevée
avant écriture. Aucune régression conceptuelle ni de clarté. Sur la section supprimée, la revue
tranche la question qui lui était posée : la carte perd une information **qu'elle n'avait pas le
droit de porter**, et l'unique idée non redondante du plateau est conservée ailleurs. Le détail
des huit axes est dans `work/deplacement-des-buts/review.md`.

## Ce que cette carte laisse ouvert

**La divergence d'accès reste entière dans `corpus/validated/deplacement-des-buts.json`**, où
Warner & Havens 1968 et Selznick 1943 sont toujours déclarés `full-text`. Le texte lecteur a été
mis hors de sa portée — il ne fait plus parler ces sources du tout — mais la couche
approfondissement ne peut pas réparer l'enregistrement de la carte.

**Et la divergence n'est pas cosmétique.** Le pack de preuve hérite son niveau d'accès du champ
`consulted` porté par l'objet source : une source déclarée `full-text` à tort fournit au
vérificateur des supports estampillés « lu », et son verdict `SOURCE_NOT_CONSULTED` ne peut plus
se déclencher sur elle. Voir le chantier H de `RESTE-A-FAIRE.md`.

**Un legs mineur du dossier**, relevé par l'audit et non traité ici : `limits[3]` affirmait une
réserve fausse, l'extension à d'autres types d'organisations étant explicitement posée par Merton
p. 562, et l'entreprise privée apparaissant p. 566.
