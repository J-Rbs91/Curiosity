# Réécriture : points-de-levier

mode : REVISE (suite de l'audit `corpus/deepening-audits/work/points-de-levier/audit.md`, verdict
REVISE, fidélité documentaire 1/4)

## Matière réellement disponible, vérifiée par listage

`ls corpus/evidence/points-de-levier` : le répertoire n'existe pas. Vérifié directement, et vérifié
aussi qu'aucun répertoire de `corpus/evidence/` ne porte un nom voisin (levier, meadows, leverage).
La matière autorisée tient donc entièrement dans `corpus/validated/points-de-levier.json` :
`summary`, `attribution_note`, `quotation` (texte français, `original_text`, `locator: p. 2`),
`notes[0..4]`, `review`, et les trois objets `sources`.

Conséquence appliquée partout : le `full-text` déclaré du rapport de 1999 reste valide comme
déclaration, mais il descend d'un objet source qu'aucun dossier ne corrobore. Par
`FACTCHECK_PROTOCOL.md` §3bis et §5, un appui de ce genre sortira en `access_corroboration:
dossier-absent` et n'établira qu'une référence, une pagination, une date. Tout ce que le texte
lecteur dit du contenu du rapport a donc été ramené sur `quotation`, `summary` et `notes`, qui
arrivent en `access: "n/a"` et se pèsent sur leur contenu.

Aucune recherche extérieure, aucun apport de connaissance générale sur le rapport.

## Retraits (matière absente de la documentation autorisée)

1. **lead[1], couleur biographique** : « a passé sa vie à observer des gens intelligents pousser
   très fort sur des endroits qui ne bougent pas ». Rien dans `attribution_note` ni ailleurs.
   Retiré.
2. **lead[1], réception** : « Cette liste est devenue l'un des textes les plus repris du domaine ».
   Aucune donnée de réception disponible, et les deux sources de réception sont `metadata-only`.
   Retiré.
3. **S1.P3 en entier, l'énumération des barreaux intermédiaires** : « la taille des réserves, la
   structure des flux, la longueur des délais, la force des boucles qui stabilisent, le gain des
   boucles qui emballent, la circulation de l'information, les règles, le pouvoir de changer les
   règles, les buts poursuivis, l'idée partagée d'où ces buts sortent ». Huit désignations et un
   ordre que la documentation ne porte nulle part. C'était le paragraphe porteur le plus exposé du
   texte. Supprimé, et l'interdiction inscrite dans `limits[1]`.
4. **S1.P2, généralisation empirique** : « Ce sont les points sur lesquels se concentre l'essentiel
   du débat public et de la négociation interne ». Retiré. Remplacé non par une autre affirmation de
   même portée mais par un cas nommé et verbatim, déjà présent dans `notes[4]` (dette publique,
   paramètres budgétaires, p. 5-6).
5. **S1.P4, deux dérives dans l'image de plomberie** : « le temps que met le bouchon à faire
   effet » (le seul support disponible dit « une vanne ») et « La règle, c'est ce qui décide qu'on
   ouvre ou qu'on ferme » puis « Le but, c'est la raison pour laquelle on veut de l'eau », deux
   contenus inventés placés sous le crédit de « Meadows l'emploie elle-même ». L'image est ramenée
   aux trois correspondances que `notes[4]` donne, et à elles seules : robinet/paramètre,
   niveau de la baignoire/stock, vanne/délai.
6. **S2.P3 en entier** (redondance relevée par l'audit, sur S1.P2 + S2.P2) : « Il en résulte une
   répartition de l'effort systématiquement mal placée… ». Supprimé.
7. **S3.P2, l'anecdote Forrester** : « Elle tient de Forrester une observation qu'elle rapporte :
   quand il identifiait un point de levier dans une entreprise, il découvrait presque toujours que
   tout le monde s'en occupait déjà, et le poussait dans la mauvaise direction. » Attribution en
   chaîne, sans aucun appui. Supprimée ; la distinction lieu/sens est reconstruite sur la citation
   elle-même, qui la porte.
8. **S3.P3 en entier** : « une fois le point de levier établi, il est probable que personne ne le
   croie ». Sans appui. Supprimé.
9. **S3.P4 en entier** : « une boucle produit dans le temps l'inverse de ce qu'elle semble faire
   dans l'instant ». Loi générale sur les boucles, sans appui, sans marquage de statut, et appuyée
   sur un terme que le texte ne construisait pas. Supprimé.
10. **S4.P1, trois ajouts narratifs** : « au milieu d'une réunion », « après discussion avec des
    collègues et des militants », « Meadows la présente elle-même comme un travail en cours ».
    `notes[1]` donne le paperboard, les neuf entrées, la page 2, la page 3, les douze entrées et la
    correction par l'autrice ; rien d'autre. Retirés.
11. **S4.P3 en entier** : « elle ne dit pas comment trouver […] et Meadows est claire sur le fait
    que sa liste ne le remplace pas ». Limite fondée sur une absence, plus une position attribuée à
    l'autrice. Supprimé ; la même énergie est passée dans l'ouverture de S5, qui nomme ce que le
    rapport contient de repérable plutôt que ce qu'il ne dirait pas.
12. **S5.P3 en entier**, le « test de direction » (redondance relevée par l'audit, sur S3.P2).
    Supprimé. **S5.P2** (« test de proportion ») est fondu dans S5.P1, comme un cas du test de
    position.
13. **Titre de S2** : « Pourquoi les leviers forts restent inutilisés » énonçait un fait empirique
    que rien n'établit. Remplacé par « Puissance d'un côté, coût de l'autre », qui nomme le sujet de
    la section (deux échelles superposées) sans rien affirmer du monde.
14. **limits**, trois énoncés retirés : « Chacun occupe dans le rapport plusieurs pages, avec ses
    exemples, ses exceptions » (non soutenu, le rapport fait 21 p. pour 12 niveaux) ; « Meadows ne
    le prétend pas » (position attribuée) ; le renvoi à l'ouvrage de 1972 sur les limites de la
    croissance, avec sa date, qui n'est pas dans les sources de cette carte.

## Bornages (affirmation conservée, portée ramenée à l'appui)

- **Le mécanisme de l'ordre** (S2.P1) ne court plus sur une chaîne de quatre barreaux dont trois ne
  sont pas documentés. Il est reconstruit sur les deux seules extrémités nommées, paramètre et
  paradigme, et il s'ouvre par « On peut comprendre cet ordre », marquage d'interprétation au sens
  de `PROTOCOLE.md` §4. « D'un cran à l'autre » est devenu « De l'un à l'autre » : la première
  formule présupposait une connaissance des crans intermédiaires.
- **Le coût politique** (S2.P2) était énoncé comme un fait de comportement collectif. Il est donné
  comme seconde lecture de la même échelle, et la phrase de clôture ne dit plus ce sur quoi « la
  discussion porte » mais ce que l'image de Meadows met en rapport.
- **La hiérarchie des erreurs** (S3.P2) est explicitement dérivée : « Si l'on suit l'échelle, la
  seconde est la plus coûteuse des deux ». Conséquence marquée, plus attribution.
- **Le barreau du haut** est donné par son verbatim, « The power to transcend paradigms », glosé en
  traduction et non en doctrine.
- **L'existence de dix niveaux intermédiaires** est dite par arithmétique (douze moins deux) sans
  qu'aucun ne soit nommé.
- **La version de Whole Earth** n'est plus évoquée que par son existence et sa date, ce que
  `notes[2]` autorise (la page 2 du rapport de 1999 la signale).

## Delta de chaque paragraphe de la version rendue

- lead[0] : la question pratique n'est pas « agir ou non » mais « où appuyer », et un effort égal ne
  produit pas un effet égal. Entrée concrète, sans vocabulaire de discipline.
- lead[1] : qui est l'autrice, d'où vient sa formation, ce qu'est l'objet (douze places ordonnées du
  plus faible au plus puissant, du réglage d'un paramètre au changement de paradigme) et qu'un
  avertissement l'accompagne. Appuis : `attribution_note`, `summary`, `quotation`.
- S1.P1 : le contenu réel de la liste est son ordre, verbatim « in increasing order of
  effectiveness », et la numérotation est inversée par rapport à l'intuition. Appuis : `notes[3]`.
- S1.P2 : les deux extrémités nommées dans les termes de l'autrice, et la mesure de l'échelle par
  l'écart entre elles. Appuis : `notes[1]`, `summary`.
- S1.P3 : l'échelle devient tenable en tête par une image que l'autrice file d'un bout à l'autre,
  avec ses trois correspondances documentées. Appui : `notes[4]`.
- S2.P1 : pourquoi l'ordre monte, par la position dans l'installation et non par la force. Lecture
  marquée, sur les deux extrémités seules.
- S2.P2 : la même échelle lue comme un coût, et un cas nommé où les deux registres se voient en deux
  formules de l'autrice. Appuis : `notes[4]`, p. 5-6.
- S3.P1 : l'avertissement dans les mots de l'autrice, avec la fin que la citation élide. Appuis :
  `quotation.text`, `notes[0]`, `locator: p. 2`.
- S3.P2 : deux erreurs séparées, le lieu et le sens, et laquelle coûte le plus si l'on suit
  l'échelle. Dérivé de la citation.
- S3.P3 : ce que « systematically » ajoute, à savoir que l'échec n'est pas une occasion manquée mais
  une aggravation des problèmes visés. Lecture du verbatim anglais.
- S4.P1 : la genèse en deux états, neuf entrées page 2 sur un paperboard, douze page 3, l'autrice se
  corrigeant elle-même. Appui : `notes[1]`.
- S4.P2 : ce que cette genèse fait au statut de l'échelle, proposition retravaillée et non résultat
  mesuré. Conséquence, et elle règle le défaut d'axe G relevé par l'audit.
- S4.P3 : agir en bas reste parfois la seule action disponible ; ce qui est interdit est la
  confusion des registres. Nuance, formulée comme conséquence.
- S5.P1 : un geste utilisable, situer une action sur l'échelle, avec le cas où l'écart entre
  diagnostic et remède devient visible. Fusion des deux anciens « tests ».
- S5.P2 : un usage social, nommer le niveau d'un débat pour le déplacer sans mettre personne en
  cause.
- S5.P3 : l'ouverture, désormais adossée à du repérable : le rapport de décembre 1999, vingt et une
  pages, porte les deux états de la liste page 2 et page 3, et sa page 2 renvoie à la version courte
  de Whole Earth, hiver 1997. Deux lectures à faire, énoncées comme ce que ces textes détiennent
  (`PROTOCOLE.md` §1).

Aucun paragraphe sans delta. Aucune section ne refait le travail d'une précédente : les deux groupes
redondants signalés (S2.P3, S5.P3 ancien) sont supprimés, et S5.P2 ancien est fondu.

## Frontière interne

`limits` reste interne, en cinq paragraphes, et nomme pour chaque source son état d'accès et
l'affirmation qu'il interdit : le rapport déclaré lu mais non reproduit et la liste close de ce qui
est disponible sur son contenu ; l'interdiction d'énumérer les niveaux 2 à 11 ; les deux articles
atteints par leur notice et l'interdiction de parler de réception ; la version de Whole Earth connue
par une mention ; l'absence de toute observation attribuable à Forrester, et la relecture non
aveugle du 22 août 2026. Les deux dépassements retirés de cette version (huit barreaux, anecdote
Forrester) y sont consignés nommément, pour qu'une reprise ultérieure ne les réintroduise pas.

Rien de `limits` n'est remonté comme bloc visible. Le texte lecteur est `lead` + `sections`.

## Volume

- avant : 1 120 mots de texte lecteur, 171 mots de `limits`, 1 291 au compteur du script, 20
  paragraphes lecteur.
- après : 1 102 mots de texte lecteur, 360 mots de `limits`, 1 462 au compteur du script, 16
  paragraphes lecteur.

Le texte lecteur est plus court de quatre paragraphes et à peu près stable en mots : environ 250 mots
non soutenus ont été retirés, et la place a été reprise par de la matière qui existe réellement dans
la documentation (le cas de la dette publique, la lecture de « systematically », le statut de
l'échelle tiré de la double version, l'ouverture sur les deux états du rapport). L'augmentation de
`limits` est interne et n'atteint pas le lecteur.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=points-de-levier`

```
1 approfondissement(s) contrôlé(s), 1462 mots. Rien projeté.
```

Aucun avertissement de citation : les cinq passages entre guillemets de cinq mots ou plus se
retrouvent verbatim dans la documentation (« in increasing order of effectiveness » et « The power to
transcend paradigms » dans `notes`, la citation française dans `quotation.text`, « systematically
worsening whatever problems we are trying to solve » dans `notes[0]`, « a negative bathtub, a money
hole » dans `notes[4]`).

## Suite

Le texte a changé, donc le SHA a changé : tout fact-check antérieur est invalidé et le cycle doit
repartir à `PREPARE`. Aucune auto-validation, aucun `FACTCHECK_PASS` déclaré ici.

Pour mémoire, et hors mandat d'une réécriture : rendre au texte les douze niveaux un par un suppose
de constituer `corpus/evidence/points-de-levier/` avec le relevé de la page 3 du rapport. C'est un
geste de la couche carte.
