concept : amenagement-onereux-du-monde-exterieur
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 4a33a91eef587a5d130a23bc1d69de7742283b2c

GATE PRÉALABLE

sha256sum du candidat : 25f34e163a8bf05747297f11d4709924d3325e74ed2560b7702e67a93e7f2d4a
candidate_sha256 du gate : 25f34e163a8bf05747297f11d4709924d3325e74ed2560b7702e67a93e7f2d4a
verdict du gate : FACTCHECK_PASS, 73 claims, 73 soutenus, 0 refusé, mapping_incomplete vide,
structural_errors vide. Les quatre conditions sont réunies sur le SHA exact du fichier examiné.

Identité du blob antérieur vérifiée : il se lit, c'est bien du JSON d'approfondissement
($schema, conceptId, lead, sections, limits) et son conceptId est
amenagement-onereux-du-monde-exterieur. C'est bien la version que l'audit décrit : on y retrouve
au caractère près les passages que l'audit cite comme fautifs, dont la dernière phrase de son
S5.P3 et « on la compte, on la corrèle, on n'en dit rien de plus ».

Contrôle mécanique refait : `npm run corpus:deepen -- --check --only=...` rend
« 1 approfondissement(s) contrôlé(s), 1812 mots. Rien projeté. »

Matière ouverte : PROTOCOLE.md, AUDIT_PROTOCOL.md v3, FACTCHECK_PROTOCOL.md, le candidat, le
blob antérieur, corpus/validated/amenagement-onereux-du-monde-exterieur.json (`notes`, 20
entrées, et le bloc `review`), corpus/evidence/.../lecture.json pour les deux vérifications de
provenance nommées plus bas, et les quatre artefacts reçus par chemin. Aucune recherche web.
Aucun fichier du dépôt n'a été modifié en dehors du présent compte rendu.

VOLUMES RELEVÉS MOI-MÊME

texte lecteur (lead + paragraphes, titres inclus) : 1452 avant, 1619 après.
texte lecteur, titres exclus : 1418 avant, 1575 après (soit les +157 annoncés).
`limits` : 216 avant en 3 entrées, 237 après en 4 entrées.
total compté par le script : 1634 avant, 1812 après.
structure : 5 sections de 3 à 4 paragraphes avant, 6 sections de 2 à 4 paragraphes après.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     la phrase qui tranchait dans les deux sens est
  supprimée et rien ne la remplace qui referme la provenance ; la praxis est rendue à l'idée
  d'activité (« c'est de cette idée, non d'une thèse sur l'économie »), conformément à
  `definition_de_lauteur` ; « Deux ajouts s'y voient » devient « Deux clauses y figurent dès
  1962 que la phrase courte ne portait pas », avec « imprimée en capitales page 11 » ; les
  lectures du rédacteur en régime d'affirmation d'auteur sont supprimées (« c'est en y entrant
  qu'il devient économique », « trois façons dont une situation devient un problème pour
  quelqu'un », « sans obliger à commencer par l'individu ») ou marquées (« On peut lire dans ces
  exemples ») ; le critère de fondation est attribué (« Aux yeux d'Albou ») ; Reynaud reste aux
  initiales. Les deux matières neuves les plus exposées ont été recoupées sur pièce :
  Wärneryd et « la définition qu'il oppose à la définition dite classique de Wärneryd » figurent
  bien dans `definition_de_lauteur` de lecture.json, et « imprimée en capitales page 11 »
  dans `notes[7]`.
progressivité pédagogique      3/4     4/4     le lecteur lit désormais l'énoncé dans lead[1]
  avant que S1 n'en commente un mot : le « Sa phrase tient en une ligne » commentant une phrase
  jamais montrée a disparu. Le trou d'articulation nommé par l'audit est refermé dans le texte
  lui-même : S2.P2 énonce que la finalité « règle ce que le premier mot laissait en suspens,
  puisqu'un équilibre des fins et des moyens suppose des fins, et ce sont celles-là ». Les six
  sections s'énoncent en une phrase chacune et l'ordre prescrit est tenu. Les coutures portent
  un référent explicite (« La clause de méthode, elle, a une histoire » reprend la clause citée
  en S3.P2 ; S5.P3 recoud S5 à S4 par « au moment même où il la juge trop généreuse »). Aucune
  transition fluide ne masque un saut : la seule couture mince, S4 vers S5, est celle que la
  trajectoire cible prescrivait, et le lecteur y entre bien avec ce qu'elle suppose (une
  définition peut vieillir).
densité / non-redondance       3/4     4/4     les trois relâchements nommés par l'audit sont
  traités : l'ancien S2.P3 (32 mots) est fondu en une proposition dans S2.P1 ; l'ancien S3.P3
  (trois illustrations équivalentes, dont une recyclée du lead) est supprimé, son point utile
  réduit à « ils naissent entre des personnes, non dans la tête d'un homme seul » ; l'ancien
  S4.P3 passe de 83 à environ 60 mots et gagne un demi-delta neuf (la correction de 1982 n'est
  pas un désaveu de paternité). Aucune répétition n'est recréée ailleurs. Les deux reprises qui
  pouvaient en devenir une sont fonctionnelles et non décoratives : la phrase courte du lead est
  reprise en S3.P2 pour servir de terme de comparaison à l'énoncé complet, ce que le texte dit
  explicitement ; et « Capter une source, poser des conduites » reprend lead[0] pour l'exclure du
  champ de la discipline, ce qui change le statut de la matière du lead au lieu d'en refaire le
  delta. Test refait sur les vingt paragraphes : chacun porte un delta distinct, aucune séquence
  de trois ne partage un delta substantiellement identique, aucune section n'est
  principalement redondante avec une antérieure.
clarté                         3/4     3/4     les deux zones d'ombre nommées sont levées
  (l'énoncé absent derrière « sa phrase » ; l'ambiguïté de « deux ajouts »), et « premier
  caractère » est désormais glosé (« le premier des caractères par lesquels Albou commente une
  définition plus longue »). En regard, un risque nouveau : S2.P1 fait environ 148 mots et
  enchaîne quatre mouvements (activité, praxis, individuel ou social, modèle d'action, schèmes,
  structure à décrire) là où l'ancien texte en faisait deux paragraphes. Le fil se suit, mais
  c'est le paragraphe le plus chargé du texte. Note tenue, pas relevée : l'exigence est « au
  moins aussi claire », et elle est tenue.
profondeur explicative         3/4     4/4     les deux arrêts prématurés sont levés. La chaîne
  du coût est donnée entière : « il faut évaluer l'importance relative de ces renonciations,
  cette évaluation conduit à un calcul économique reposant sur des hypothèses, et c'est ce
  calcul qui fonde la décision » ; le choix reçoit son mécanisme (hiérarchiser, sacrifier,
  appauvrissement par élimination). La troisième idée d'« aménager » est là, avec sa nuance
  travaillée pour elle-même (« Le "consciemment ou non" a son poids : une finalité n'est pas
  forcément un projet délibéré »). S'y ajoute un mécanisme que l'ancienne version n'avait pas du
  tout : la restriction sur « problèmes humains », qui explique par exclusion ce que la
  discipline n'étudie pas.
valeur des exemples           3/4     4/4     les deux exemples qui portaient la compréhension
  sont conservés dans leur fonction (l'eau au robinet et le logement chaud posent le problème ;
  l'eau potable et l'air pur montrent qu'un bien entre dans la rareté). Les trois exemples
  décoratifs de l'ancien S3.P3 sont partis. Un exemple d'un genre nouveau apparaît, à valeur
  négative : les gestes techniques du lead servent en S3.P3 à montrer ce qui n'est pas l'objet
  de la discipline. Aucun exemple survivant n'est là pour séduire.
limites / nuances             2/4     4/4     la nuance la plus protectrice, absente avant, est
  en place et à l'endroit prescrit : ni technologie de l'action sociale, ni données techniques
  de la transformation du monde, et ces problèmes humains sont des problèmes sociaux. La réserve
  qui ne dormait que dans la frontière interne est rendue au lecteur en prose lecteur, au futur
  et sans compte rendu de recherche : « Ce verdict est le sien, et c'est le seul qu'on entende
  ici : ce que Reynaud dit de la discipline, ses pages seules le diront. » Et la nuance que
  l'ancien S5.P3 démolissait est non seulement conservée mais renforcée d'un cran que l'audit
  n'osait pas prescrire : S6.P3 retourne le doute contre l'argument de la carte elle-même,
  « Il serait pourtant imprudent d'y voir une preuve : les manuels d'économie publiés par les
  Presses Universitaires de France ne figurent pas dans ces collections ». C'est le meilleur
  gain du passage.
pouvoir d'ouverture           2/4     4/4     le texte ne conclut plus. « Une attribution répétée
  n'est pas une attestation, et rien de tout cela ne tranche » n'est plus contredit dix lignes
  plus bas, et la dernière phrase désigne ce qui déciderait en laissant un volume à ouvrir :
  « dans le tome I de l'Economie politique de 1955, collection Thémis, on lira en quels termes
  l'économie politique s'y définit ». Forme correcte selon PROTOCOLE.md §1 : futur du côté du
  lecteur, pas de conditionnel de recherche infructueuse.

défauts initiaux corrigés :
- Le défaut qui interdisait PASS à lui seul. La dernière phrase de l'ancien S5.P3 (« Le geste qui
  lui revient n'est donc pas d'avoir forgé une formule, c'est de l'avoir déplacée : prise à
  l'économie ») est supprimée et rien ne la remplace qui referme la provenance. Ce que S6.P4
  affirme désormais est exactement ce que `notes[0]` donne pour établi, le transfert, et rien de
  plus : « dans les sciences humaines, cette formule circule par Albou, et la définition bâtie
  sur elle est de lui ». Les deux affirmations que `notes[1]` refuse nommément sont absentes, et
  la contradiction interne avec « rien de tout cela ne tranche » est levée. Correction non
  seulement locale mais structurelle : `limits[0]` nomme maintenant les formulations interdites
  (« Interdit dans les deux sens : qu'Albou ait forgé le syntagme, qu'il le tienne de Barre ou
  de Perroux, et toute tournure qui referme la provenance »), ce qui supprime la cause mécanique
  que l'audit avait identifiée derrière la faute.
- Le lecteur ne lisait jamais la phrase que tout le texte commentait : elle est dans lead[1],
  verbatim, et le contrôle de citation passe.
- Le terme interrogé par l'accroche affichée (« quels problèmes humains en naissent ? ») n'était
  jamais expliqué : S3.P3 lui est entièrement consacré.
- La praxis de Marx était rattachée à un argument de méthode que le texte inventait. L'argument
  sans appui est retiré, la praxis est rendue à l'idée d'activité, et ce qui reste de la
  conséquence de méthode est marqué comme conséquence (« Cela implique qu'il y a là une
  structure à décrire »).
- La chronologie 1962 / 1982 était brouillée : elle est explicite.
- Deux des trois deltas faibles sont supprimés, le troisième réduit et re-fonctionnalisé.
- Quatre matières sourcées et inutilisées sont employées : la finalité, la chaîne du coût, la
  restriction sur « problèmes humains », l'opposition à la définition dite classique de
  Wärneryd, qui donne enfin sa raison au mot « française » de « conception française ».

Six des sept défauts majeurs listés par l'audit sont pleinement corrigés ; le septième (deltas
faibles) l'est aux deux tiers, le reste tenant au seul S5.P3.

régressions détectées :
- Aucune régression conceptuelle, aucune perte de nuance, aucune baisse de profondeur.
- Trois pertes mineures d'information solide, toutes documentées et aucune portante :
  (a) le titre de l'ouvrage de Robbins, « Essai sur la nature et la signification de la Science
  Economique », disparaît de S1.P2, où il ne reste que le nom et le renvoi en note. C'était un
  objet nommable que le lecteur pouvait aller ouvrir ; la perte est réelle mais d'un mot, et
  elle n'affecte aucun raisonnement ;
  (b) le verbatim « Reprenons, pour en commenter les termes, cette partie de la définition. »
  n'est plus cité, sa teneur passant en paraphrase dans lead[1]. Un verbatim perdu contre un
  verbatim bien plus utile gagné, celui de l'énoncé ;
  (c) dans lead[1], « on regrette ensuite, on finit par s'expliquer à soi-même que l'autre
  solution n'en valait pas la peine » devient « on se justifie après coup ». L'audit avait
  demandé de ne toucher au lead que par sa fin ; le geste porte sur son milieu et échange du
  concret contre de l'abstrait pour tenir la fourchette de 120-200 mots tout en logeant la
  citation. Compromis acceptable et déclaré, mais c'est la seule ligne du texte qui a perdu en
  vivacité.
- Un point de vigilance qui n'est pas une fragilité documentaire, vérification faite. S6.P3 écrit
  « Dans les revues de sciences humaines aujourd'hui numérisées » alors que deux corpus ont été
  interrogés. L'audit l'avait signalé sur l'ancienne formulation, qui portait « revues
  françaises ». Le mot « françaises » est tombé, mais dans le bon sens : `notes[5]` documente
  Persée et Érudit, dont le second n'est pas français, de sorte que la portée énoncée est
  désormais mieux ajustée à la matière qu'avant, et non moins. Surtout, la proposition ne porte
  plus aucune conclusion, la phrase suivante lui retirant explicitement toute force probante.
  Je ne relève donc pas de fragilité que le fact-check aurait ratée, et le verdict du gate n'est
  contesté sur aucun point.
- Deux non-conformités de volume, toutes deux internes ou marginales, et aucune qui touche le
  lecteur. Voir ci-dessous.

FRONTIÈRE INTERNE `limits`

Restée interne, sans réserve. Le champ n'apparaît ni comme section visible, ni comme bloc, ni
comme registre d'insuffisances exposé : les six sections portent des titres de chose, aucun ne
nomme une lacune, et `DeepeningDetail.tsx` ne rend pas le champ. Les deux réserves qui remontent
en prose lecteur sont exactement celles que l'audit prescrivait de rendre visibles, et elles y
sont écrites du côté du lecteur, au futur, sans conditionnel de recherche infructueuse et sans
nommer la fabrication du texte : « ses pages seules le diront », « les manuels d'économie publiés
par les Presses Universitaires de France ne figurent pas dans ces collections ». Ce sont des
nuances nécessaires à la compréhension, que AUDIT_PROTOCOL.md §0 autorise expressément dans
`sections`, et non une comptabilité de dossier.

Sur les 237 mots, verdict demandé : l'excès de 37 mots au-dessus de la fourchette indicative de
100-200 est justifié pour trois des quatre entrées, et dispensable pour la quatrième.
- `limits[0]` ne peut pas être raccourci sans perdre sa fonction : c'est l'entrée qui nomme enfin
  l'affirmation interdite, dans les deux sens, et donc la réparation de la cause mécanique du
  défaut central. Ce que l'audit réclamait coûte des mots par construction.
- `limits[1]` fusionne deux anciennes entrées et ajoute les deux portées exigées (couche texte
  des 81 pages contre 81 images ; Persée et Érudit n'indexant pas les manuels des PUF). Elle est
  déjà comprimée au point d'avoir perdu l'énumération des quatre pages relues en image, perte
  que le compte rendu de correction déclare au lieu de la masquer.
- `limits[2]` est le garde-fou ajouté après les refus C051 et C057, avec le motif d'homonymie
  (J.D. Reynaud page 49) qui le rend opposable. Justifié.
- `limits[3]`, le nom du recenseur de Barre dans la Revue économique de 1956, est la partie
  dispensable, environ 45 mots. Elle est défendable, la page 675 portant l'adresse
  bibliographique d'où vient le « sept ans » du texte lecteur, mais elle est la seule entrée dont
  rien ne dépend et la seule dont la suppression ramènerait le champ sous 200 mots. À compresser
  au prochain passage.
Le dépassement n'est pas un motif de refus : le champ est invisible, la fourchette est
indicative, et les trois exigences dures du protocole (nommer la source, l'état d'accès et
l'affirmation interdite) sont mieux servies à 237 mots qu'à 195. Il est en revanche consigné,
avec son correctif, et il se lit à découvert dans factcheck-fixes.md §3, ce qui est la bonne
manière de le porter.

Conséquence de volume à signaler : le total compté par le script passe à 1812 mots, au-dessus de
la fourchette visée de 1300-1700 de PROTOCOLE.md §5, sous le seuil de 1900 et loin de la borne
dure de 2100. Le texte que le lecteur lit, lui, fait 1575 mots et tient dans la fourchette ; le
dépassement du total est imputable au champ interne. Le risque que la fourchette protège
(« un article que personne ne finit ») n'est donc pas encouru.

LES +157 MOTS

Ils sont portés, et la carte a gagné davantage de contenu que le solde ne le laisse voir. Ajouts,
tous prescrits par l'audit et tous sourcés : l'énoncé cité (environ 35 mots), la chaîne du coût
(environ 50), l'idée de finalité et sa nuance (environ 70), la restriction sur « problèmes
humains » (environ 85), Wärneryd et la conception française (environ 70), la portée de l'argument
de corpus (environ 55), la réserve sur Reynaud (environ 25), soit environ 390 mots de matière
neuve. Retraits : les trois deltas faibles, la phrase fautive, l'argument de méthode sans appui
et les incises de cadrage, soit environ 230 mots. Aucun des 157 mots nets ne finance une
reformulation, un exemple d'agrément ou une transition : chacun paie un mécanisme, une nuance ou
une citation que l'audit nommait comme disponible et inemployée. C'est l'inverse exact d'une
baisse de profondeur obtenue par raccourcissement, et l'inverse exact d'un gonflement stylistique.

raison de la décision : ACCEPT. Le gate rend FACTCHECK_PASS, 73 sur 73, sur le SHA exact du
fichier examiné, et l'identité du blob antérieur est établie. Le défaut qui interdisait PASS est
supprimé au bon endroit et pour la bonne raison : la provenance du syntagme n'est plus refermée
dans aucun des deux sens, la contradiction interne est levée, et la frontière interne a été
réécrite pour nommer l'interdit qui avait manqué, de sorte que la faute est rendue difficile à
refaire et pas seulement effacée. Cinq autres défauts majeurs du diagnostic sont corrigés, dont
deux qui touchaient la lisibilité même du texte : le lecteur lit enfin l'énoncé que six sections
commentent, et le terme que l'accroche affichée lui promet est traité. Les quatre matières
sourcées et inemployées sont employées, et deux d'entre elles réparent des faiblesses
structurelles, l'articulation entre S1 et S2 et la nuance qui défait le contresens installé par
le lead. Aucune redondance n'est recréée, aucune section n'est principalement redondante, aucune
séquence de trois paragraphes ne partage un delta, la progression est plus claire qu'avant sur les
deux coutures qui accrochaient, et la profondeur augmente sur quatre points au lieu de baisser.
Trois pertes mineures sont relevées, dont aucune ne porte un raisonnement, et le seul paragraphe
plus difficile qu'avant, S2.P1, reste suivable. Le champ `limits` est resté interne, son
dépassement de 37 mots est justifié pour l'essentiel, déclaré, et réductible sans rien perdre.
Le gain est net, il est établi paragraphe par paragraphe, et il est sûr.
