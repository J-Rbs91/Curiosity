---
concept_id: ligne-d-approvisionnement-ignoree
deepening_sha256: 1de5c31ae823e4dac13cbea25e09e2e681eb5caeaabeda52bba2e4ae87335f35
validated_sha256: 45b2e003551f795019482f57115ba307fee2000abcef0f2faf288756d7819130
protocol_version: 3
audited_at: 2026-09-29T05:01:30Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
remappings: 0
---

# ligne-d-approvisionnement-ignoree

Carte jamais auditée, choisie au titre de la priorité 1 de la routine. Cycle complet :
`REVISE` → réécriture → `FACTCHECK_FAIL` 65 sur 68 → une boucle de correction →
`FACTCHECK_PASS` 57 sur 57 → `ACCEPT`.

## Pourquoi elle a été prise

Sur 136 cartes, 118 étaient stale et 107 n'avaient jamais été auditées. Celle-ci a été retenue
pour son dossier — 32 Ko de lecture primaire — et pour un risque documentaire précis : deux de ses
cinq sources déclarées sont `metadata-only`, ce qui est la configuration où une affirmation de
contenu peut s'adosser à un ouvrage jamais ouvert. Le fact-check a confirmé que ce risque-là ne
s'était pas réalisé : les trois appuis `metadata-only` du bundle final ne servent qu'au claim C057,
purement métadonné, qui déclare lui-même l'ouvrage non ouvert.

Deux cartes portées par la branche ouverte de PR #123 ont été écartées de la sélection avant tout
travail, ce qui est le geste que le chantier N prescrit.

## Ce que l'audit a trouvé, et qui n'était pas cosmétique

Le défaut central était une affirmation que le dossier dément. L'ancien `sections[3].paragraphs[2]`
concluait que l'amplification « n'est pas inscrite dans les délais ni dans la forme de la chaîne »,
proposition que la page 26 contredit. Le paragraphe tient désormais la même fonction avec la
question empirique de la page 7 et l'énoncé de la page 26 sur la structure de rétroaction.

Deux autres : `S5` nommait l'agrégation sans la livrer, et l'affirmation centrale était assertée
d'autorité au lieu d'être construite. Le `limits` était faux deux fois — il localisait une variante
sur l'article de 1989, `metadata-only`, ce que le dossier interdit deux fois, et confondait les
mille huit pages de *Business Dynamics* avec l'extrait de neuf pages effectivement ouvert.

## Ce que le gate a attrapé, et pourquoi c'est le bon résultat

Le premier tour a refusé trois claims, et deux d'entre eux portaient exactement le point que le
réécrivain avait eu l'honnêteté de déclarer non tranché dans son compte rendu : les folios divergent
entre les deux couches du dossier. Le bloc `review` de l'enregistrement place la scène du restaurant
p. 9 et le jeu p. 10 ; `lecture.json` les donne p. 6-7 et p. 13. Le texte affichait « page 9 » et
« (p. 10) » comme acquis.

**La correction n'a pas choisi de page.** Rien dans le dossier ne réconcilie les deux couches, et
trancher aurait fabriqué un fait. Les localisations sont retirées, les verbatims et l'attribution
conservés — le gate les déclarait soutenus. Le troisième refus était un `TOO_STRONG` de fréquence :
« presque toujours » pour un appui qui porte « Often there are lags ».

`limits[0]` a été mis en accord avec le texte, et la frontière s'en trouve renforcée plutôt que
relâchée : il affirmait que les folios relus sur image « fixent ici » les deux passages, description
qui laissait croire qu'une couche tranchait. Il énumère désormais les quatre localisations et pose
que ces deux passages se citent sans folio.

## Ce que la revue a tranché, et ce qu'elle laisse ouvert

`ACCEPT`. Le reviewer a recompté le volume lui-même — 1 553 mots lecteur, dans la fourchette de
`PROTOCOLE.md` §5 — et vérifié que le `candidate_sha256` du gate est celui du fichier en place.
Profondeur et ouverture passent de 2/4 à 4/4, aucun axe ne baisse, et les trois défauts du
diagnostic sont supprimés plutôt que déplacés.

Deux non-conformités formelles sont jugées non bloquantes et restent à reprendre :

- `limits` est à 248 mots pour une fourchette de 100 à 200. Le dépassement préexistait — 224 mots au
  blob antérieur — et les 24 mots ajoutés sont le motif même des refus du gate. Le champ n'atteint
  aucun lecteur.
- le titre « Un nombre entre zéro et un » nomme les deux bornes déclarées de β page 17, alors que
  l'usine Suds est estimée à 1,05 en section 4. Le titre est identique au blob antérieur, n'est donc
  pas imputable à cette réécriture, et `S4.P2` annonce le dépassement en clair. Le réécrivain a
  refusé d'y toucher au motif qu'une correction minimale ne le permettait pas ; la revue lui donne
  raison.

Ce second point est une instance du chantier M : un titre est du texte lecteur qu'aucun claim ne
couvre, et le gate ne peut donc pas s'en saisir.

## Note d'exploitation

Le bundle final sort à 160 926 tokens estimés et **n'a pas été partitionné**, par une conséquence
tirée de l'autre carte du lot : un bundle partitionné répartit les claims entre plusieurs
vérificateurs, dont aucun n'est alors en position de voir qu'une même proposition est affirmée deux
fois. Le détail est au journal du passage.
