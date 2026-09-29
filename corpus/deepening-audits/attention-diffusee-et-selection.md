---
concept_id: attention-diffusee-et-selection
deepening_sha256: dc10ed36667348996f1eeac277f7851c79ac800f2baa1e54ee535bb4afd52da0
validated_sha256: e9bf44fcb39f3e905d36076fbbf65d95097ff68920e7810dffe85794589fa941
protocol_version: 3
audited_at: 2026-09-29T05:20:00Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
remappings: 2
---

# attention-diffusee-et-selection

Carte jamais auditée, prise au titre de la priorité 1 de la routine pour le dossier le plus lourd
du corpus non audité — 50 Ko en deux fichiers, `lecture.json` et `reception.json`.

Cycle : `REVISE` → réécriture → `FACTCHECK_INVALID` par mapping incomplet → remapping →
`FACTCHECK_FAIL` 61 sur 62 → une boucle de correction → mapping écarté pour isolation non
certifiable → remapping → `FACTCHECK_PASS` 72 sur 72 → `ACCEPT`.

C'est le cycle le plus long qu'une carte ait connu dans ce dépôt, et **deux de ses trois détours ne
portaient pas sur le texte** : un mapping incomplet et un incident d'isolation. Le texte, lui, n'a
été corrigé qu'une fois.

## Ce que l'audit a trouvé

Une attribution indue, trois paragraphes de delta quasi nul, et beaucoup de matière sourcée laissée
dehors dans un texte qui avait 400 mots de marge sous le plafond.

L'attribution était le défaut réel : la mise en garde sur les 16,5 % d'accidents était rendue à la
réception syndicale alors qu'elle appartient à l'historien qui rapporte le chiffre. La réécriture
la rend à son auteur et donne le reproche syndical dans ses termes, p. 105, au lieu de « fut
critique ».

## Une contradiction entre couches, portée sans être tranchée

Le dossier refuse expressément de faire reposer une affirmation sur le prénom de l'ingénieur Guyot :
l'étude de 2014 écrit « Raymond », les notices de 1983 et 2004 écrivent « Gaston ». Le bloc `review`
de l'enregistrement validé retient « Gaston Guyot », et le texte publié l'affirmait à plat.

**Personne ne l'a tranchée, et c'était la bonne décision.** L'auditeur l'a signalée sans conclure,
le réécrivain a retiré du texte lecteur le prénom et le titre au profit de « un ingénieur de la
compagnie » — la forme qu'emploie l'`attribution_note` de l'enregistrement lui-même — et a consigné
les deux couches dans `limits`, qui reste interne. Aucune source n'a été sollicitée pour résoudre la
divergence. La question reste rouvrable, et le lecteur ne perd rien : le prénom ne portait aucun
delta.

## Les deux détours d'artefact, et ce qu'ils ont appris

**Le mapping incomplet.** `C052` affirmait deux choses et n'avait l'appui que de la seconde, alors
que l'appui portant la première était attaché à tous les claims voisins du même paragraphe. Le
`uncited_support_signal` l'a nommé, le vérificateur a rendu `MAPPING_INCOMPLETE`, et le protocole a
fonctionné exactement comme prévu : aucune boucle consommée, texte non touché, remapping.

**L'incident d'isolation.** Le mapper suivant a signalé avoir relu par erreur un dump d'appuis
appartenant à une autre carte, le répertoire scratchpad de la session étant partagé entre agents et
ses fichiers portant des noms génériques. Le contrôle mécanique établissait qu'aucun `support_id`
étranger n'était entré ; **aucun contrôle ne pouvait établir que le découpage n'avait pas été
influencé**, et l'isolation des contextes est précisément ce que cette étape existe pour garantir.
Le mapping a donc été écarté et refait dans un répertoire propre à la carte.

## Ce que le fact-check a coûté au texte, et ce qu'il lui a rendu

Un seul refus a survécu au dernier découpage : l'intuition d'ouverture transformait un contraste en
définition générale de ce qu'on appelle ordinairement l'attention, que le dossier ne porte pas. La
phrase a été retirée sans remplacement, et la même proposition, réaffirmée en incise dans une autre
section, retirée aussi.

**La revue a arbitré cette coupe et la tient pour justifiée** : le contraste survit sur un mot du
langage courant — « Sur ce siège, se concentrer serait une faute professionnelle » — et l'antécédent
d'« inverse » en tête de `lead[1]` reste lisible. Le seul coût est lexical.

En face, cinq mécanismes que les sources portaient noir sur blanc sont entrés : pourquoi le rendement
brut ne sert pas (p. 158), le décile retraduit en mot d'appréciation (p. 162-163), la borne de la
compensation (p. 157), la défense de Lahy sur ses coefficients (p. 169) et son aveu que l'étalon
professionnel est « à quelque degré subjectif » (p. 168) — qui donne enfin un appui à une
réversibilité que le rédacteur affirmait seul.

## Verdict de la revue

`ACCEPT`. Texte lecteur 1 453 → 1 532 mots, dans la fourchette de `PROTOCOLE.md` §5 ; `limits`
ramené de 217 à 200 mots, ce qui solde le dépassement signalé par l'audit. Amélioration nette sur
cinq axes, stable sur trois, aucune régression, aucune perte d'information solide.

Deux points sont consignés sans bloquer :

- **C022** — « à intervalles inégaux pour qu'aucun rythme ne s'installe » : le dossier établit les
  quatre-vingt-dix excitations et l'inégalité des intervalles (p. 119), mais la finalité est une
  glose du rédacteur. Le claim a été jugé `SUPPORTED`. L'intention prêtée au dispositif ne porte
  aucun raisonnement du texte et n'est attribuée à personne.
- **le sixième titre** dit « une compagnie d'autobus » là où le corps nomme la compagnie des
  transports parisiens et son réseau de tramways. Le titre est identique au mot près dans la version
  antérieure, donc non imputable à cette réécriture. Instance du chantier M.

Le détail est dans [`work/attention-diffusee-et-selection/review.md`](work/attention-diffusee-et-selection/review.md).
