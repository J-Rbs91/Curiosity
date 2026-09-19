concept : regulation-controle-autonome
mode    : REVISE (verdict d'audit : REVISE)
protocol_version : 3

matière lue : PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md,
corpus/deepenings/regulation-controle-autonome.json (version précédente),
corpus/validated/regulation-controle-autonome.json, audit.md,
corpus/evidence/regulation-controle-autonome/evidence.primary-reading.json,
corpus/evidence/regulation-controle-autonome/evidence.reception.json.
`scouting.json` non employé. Aucune recherche web.

## 1. Ce que l'ouverture du dossier de preuve change

L'audit travaillait sur un texte écrit quand seuls la carte projetée et l'enregistrement validé
étaient visibles. Les deux fragments de preuve, désormais ramassés par le pack, modifient trois
choses, et deux d'entre elles étaient des fautes documentaires que l'audit ne pouvait pas voir
entièrement.

1. L'article de 1988 est `consulted: "full-text"`, lu p. 5-18, et ses passages porteurs sont
   relevés verbatim, relus sur l'image de la page. L'audit demandait « un second appui exact sur
   la formulation de l'opposition » : il existe, et il est maintenant employé.
2. L'article de 1979 est lui aussi `full-text`. `limits[2]` de la version précédente le traitait
   comme accessible par son seul titre : cette déclaration était fausse, et S4 raisonnait donc
   sur un titre alors que le texte était lu. La déclaration est corrigée.
3. Les règles du jeu (Armand Colin, 1989) est `consulted: "metadata-only"` : rien de son contenu
   n'est dicible. Cette frontière est maintenue, et la nouvelle clôture s'appuie sur elle sans la
   franchir.

Les trois sources secondaires (Maggi, de Terssac dir., version anglaise de 1979) ne portent pas de
champ `consulted`. Aucune phrase du texte lecteur ne repose sur `evidence.reception.json` : ce
fragment n'a servi qu'à confirmer, sans l'employer, que la discussion savante existe, ce que
`limits[3]` signale désormais comme frontière interne. Un fragment de réception n'est pas devenu
une affirmation primaire.

## 2. Deux corrections de fond, exigées par la preuve primaire

**(a) La régulation conjointe. C'était un contresens, pas seulement une sur-assertion.**
La version précédente écrivait : « Le mot conjointe suggère que le résultat qui compte n'est ni la
régulation de contrôle seule, ni la régulation autonome seule, mais ce que leur rencontre produit
ensemble », puis affirmait au présent que le conflit est « la condition même par laquelle une
régulation conjointe peut se former ». La lecture primaire range cette formule parmi les
mélectures caractérisées : dans l'article de 1988, la régulation conjointe est le produit de la
négociation avec les représentants du personnel et les syndicats, et Reynaud la qualifie p. 16 de
régulation de contrôle, « puisqu'elle vient de l'extérieur donner des règles aux unités concrètes
de travail ». Ce que produit la rencontre des deux régulations porte un autre nom dans le texte :
le compromis (p. 15 et p. 17). L'article de 1979, lu, tranche le reste : le couple
contrôle/autonome n'y figure pas (zéro occurrence de la racine « autonom- » sur dix pages), la
régulation conjointe y est définie par la source des règles, avec pour paradigme la convention
collective. S5 est donc entièrement refondée : elle ne suggère plus, elle établit, et le fait
contre-intuitif devient le palier le plus élevé du texte.

**(b) Le pouvoir par l'incertitude. Supprimé.**
S3.P2 faisait reposer tout le rapport de pouvoir sur la réduction et la conservation d'une
incertitude. La lecture primaire relève « zones d'incertitude » : 0 occurrence dans l'article ;
« incertitude » : une seule, p. 9, à propos de Woodward. Le vocabulaire appartenait à une autre
tradition d'analyse. Le paragraphe est remplacé par ce que le texte dit réellement : l'enjeu de la
rencontre, ce sont les règles du jeu (p. 11), et le contrôle vise les zones de liberté que le
groupe s'octroie (p. 10).

## 3. Ce qui a été retiré

- **S3.P1 (organigramme / organisation réelle) : supprimé.** L'audit le classait proche de
  « aucun delta » : il substituait un vocabulaire à une intuition installée par lead[0]. La
  matière primaire donne mieux, et à l'endroit où c'est utile : Reynaud abandonne explicitement le
  partage formel/informel, jugé « mal adapté » (p. 9), au profit d'un critère de position. Cette
  idée est remontée dans S1.P2, où elle sert.
- **La clausule finale de lead[1]** (« ni un accident, ni une négligence, ni un simple relâchement
  de discipline »), miroir des options écartées de lead[0]. Remplacée par ce qui prépare S1 : ce
  qui sépare les deux ensembles n'est ni leur sérieux ni leur forme, mais leur origine.
- **Les deux premières phrases de l'ancien S2.P2**, qui re-déroulaient la conclusion de S2.P1.
- **Les deux premières phrases de l'ancien S5.P2** (« la consigne continue d'exister sur le
  papier »), qui redisaient S1.P2.
- **« la régulation autonome n'a, pour se faire respecter, que la solidarité du groupe »** :
  affirmation non soutenue, et contredite par la lecture primaire, qui décrit une régulation
  « enseignée aux nouveaux venus et en partie imposée », pouvant être imposée par une minorité.
- **La triade contourner / tolérer / sanctionner de l'ancien S3.P3**, redondante avec S1.P3 à cet
  endroit ; elle reparaît une seule fois, à sa place utile, dans le cas fictif.

## 4. Ce qui a été ajouté, et sur quel appui

Chaque ajout est ancré dans `evidence.primary-reading.json`, niveau `full-text`.

| Ajout | Appui |
|---|---|
| « autonome » désigne l'origine, pas une liberté ; règle enseignée et en partie imposée ; imposition possible par une minorité stratégique (S1.P3) | 1988, p. 10, verbatim |
| le critère n'est pas la forme : une consigne officielle peut mal exprimer le contrôle, une règle d'équipe peut être très élaborée (S1.P2) | 1988, p. 9-10 |
| Reynaud nomme lui-même les deux termes (S1.P2) | 1988, p. 6 et p. 10 |
| le souci d'efficacité n'est le monopole de personne ; les pratiques des exécutants visent un résultat (S2.P1) | 1988, p. 7-8 |
| pas de management participatif ; redistribution négociée des initiatives, des sanctions et des contrôles ; extraire l'intelligence suppose de déplacer du pouvoir (S2.P2) | 1988, p. 12 |
| l'enjeu est les règles du jeu, pas seulement le résultat ; le contrôle vise les zones de liberté que le groupe s'octroie (S3.P1) | 1988, p. 10-11 |
| l'attachement affectif s'explique par les enjeux de pouvoir, des deux côtés, et sert à les repérer (S3.P2) | 1988, p. 10 |
| périmètre : relation entre un groupe et ceux qui règlent son activité de l'extérieur ; la hiérarchie n'est pas la condition ; une dépendance fonctionnelle suffit ; alléger la hiérarchie ne supprime pas la confrontation (S3.P3) | 1988, p. 11-12 |
| l'exception unique : ferveur d'une secte ou d'un petit groupe politique, débuts d'une petite organisation (S3.P3) | 1988, p. 5 |
| 1979 antérieur de neuf ans, couple absent, définition par la source des règles, paradigme de la convention collective (S5.P1) | 1979, p. 371, lu intégralement |
| la régulation conjointe de 1988 est une régulation de contrôle vue de l'atelier (S5.P2) | 1988, p. 16, verbatim |
| le produit de la rencontre s'appelle compromis ; refus de classer (S5.P3) | 1988, p. 15 et p. 17 |

Deux idées que l'audit signalait comme compressées en une demi-phrase occupent désormais un
paragraphe entier chacune : l'impossibilité d'intégrer sans dénaturer (S2.P2) et la reconstitution
d'une marge après interdiction (S4.P2).

## 5. Déplacements

- Le cas fictif remonte de S5 à S4, comme l'audit le demandait, et il ne rejoue plus lead[0] : il
  instancie S1.P3 (la règle est enseignée au nouvel arrivant, imposée à celui qui suivrait la
  consigne, cachée au contrôle) puis pose la question de la découverte.
- La section la plus abstraite et la plus neuve (S5) ferme le texte et porte l'ouverture : un
  terme plus ancien que le couple, rangé là où on ne l'attend pas, et un livre de 1989 qu'il
  faudra lire pour voir ce qu'il en fait. L'axe H, noté 1/4, était le point le plus faible.

## 6. Delta de chaque paragraphe lecteur

- lead[0] : la question est posée en mots courants, avec trois issues possibles. (conservé)
- lead[1] : la réponse de Reynaud, sa cause, sa fonction, et le critère qui séparera les deux
  régimes (l'origine, ni la forme ni le sérieux).
- S1.P1 : distinguer une règle de la régulation qui la produit et la fait tenir.
- S1.P2 : les deux noms sont de l'auteur ; « contrôle » ne veut pas dire vérification ; le critère
  n'est pas écrit / non écrit, et les deux moitiés de cette équivalence tombent séparément.
- S1.P3 : « autonome » ne veut dire ni libre ni spontané ; la règle autonome contraint ceux
  qu'elle régit.
- S2.P1 : deux contresens écartés d'un coup (le confort contre l'efficacité, l'astuce méconnue) ;
  la citation exacte ; la règle autonome est une réponse qui conquiert du pouvoir.
- S2.P2 : pourquoi l'intégration détruit ce qu'elle intègre ; pourquoi la bonne volonté ne suffit
  pas ; ce qu'il faudrait déplacer pour que quelque chose change.
- S3.P1 : l'objet du conflit n'est pas le résultat du travail, ce sont les règles.
- S3.P2 : explique un fait observable (la disproportion des réactions) et en fait un indicateur.
- S3.P3 : où le schéma s'applique, où il ne s'applique pas, et pourquoi aplatir la hiérarchie
  n'en sort pas.
- S4.P1 : montre ce qu'aucun exposé ne montre, la transmission et la dissimulation.
- S4.P2 : trois issues possibles, aucune ne referme la question ; la marge se reforme ailleurs.
- S5.P1 : chronologie inverse de l'exposition, et sens propre du troisième terme.
- S5.P2 : le renversement, avec verbatim ; contrôle et autonomie sont des positions, pas des
  espèces de règles.
- S5.P3 : le nom réel du produit de la rencontre, le refus de classer, le livre à ouvrir.

Aucune séquence de trois paragraphes ne porte le même delta ; aucune section ne répète
principalement une section antérieure.

## 7. Frontière interne

`limits` passe de 5 paragraphes et 281 mots à 4 paragraphes et 221 mots, sous le plafond du
schéma. Chaque paragraphe nomme une source, son état d'accès et l'affirmation qu'il interdit :
le livre de 1989 connu par sa seule notice ; les trois passages réellement cités mot pour mot et
leurs pages ; le périmètre énoncé par l'auteur et ce que l'extension hors de la vie économique
n'a pas ; les trois textes qui portent la discussion savante dont rien n'est rapporté. Aucun
contenu de `limits` n'est remonté dans le texte lecteur : le lecteur ne rencontre ni titre
« Ce que les sources ne permettent pas d'établir », ni compte rendu de recherche.

Le seul renvoi à un texte non ouvert est écrit du côté du lecteur : « Un livre a suivi en 1989,
Les règles du jeu : ce qu'il fait de ces trois termes, il faudra l'y lire. » Rien n'y est dit de
son contenu.

## 8. Volume et contrôle

| | avant | après |
|---|---|---|
| texte lecteur (lead + sections) | 1 216 mots, 13 paragraphes | 1 473 mots, 15 paragraphes |
| `limits` | 281 mots, 5 paragraphes | 221 mots, 4 paragraphes |
| total compté par le contrôle | 1 497 mots | 1 694 mots |

`npm run corpus:deepen -- --check --only=regulation-controle-autonome` : **PASS**
(« 1 approfondissement(s) contrôlé(s), 1694 mots. Rien projeté. », sortie 0).

Le contrôle émet deux avertissements de citation, non bloquants et attendus :

```
? « enseignée aux nouveaux venus et en partie imposée à ceux qui voudraient s’en écarter »
? « elle est de manière bien caractérisée une régulation de contrôle, puisqu’elle vient de
   l’extérieur donner des règles aux unités concrètes de travail »
```

Ces deux passages sont verbatim dans `evidence.primary-reading.json`, source `full-text`, relus
sur l'image de la page (p. 10 et p. 16 de l'article de 1988). Ils ne figurent pas dans
l'enregistrement validé, qui ne porte qu'une citation : c'est cet enregistrement seul que le
contrôle mécanique compare, et l'avertissement signale exactement cet écart, sans le condamner.
Les deux autres citations du texte (p. 12, et le titre de l'article de 1979) sont présentes dans
l'enregistrement validé et ne déclenchent rien. Vérification faite chaîne par chaîne : les quatre
citations sont exactes dans `evidence.primary-reading.json` après normalisation typographique.

Si l'orchestrateur préfère un contrôle mécanique muet, le seul geste conforme serait de retirer
ces deux verbatim et de les reformuler, au prix de l'appui exact que l'audit réclamait
explicitement (« un second appui exact sur la formulation de l'opposition rendrait S1 et S3 moins
dépendants de la reformulation »). Je ne l'ai pas fait : les passages sont ouverts et lus.

## 9. Suite

Le texte a changé : le SHA change, et tout fact-check antérieur est invalidé. L'orchestrateur doit
reprendre à `PREPARE`, puis au mapping et au verifier, avant toute revue indépendante. Aucune
auto-validation n'est rendue ici : ni `ACCEPT`, ni `FACTCHECK_PASS`.
