concept : impossibilite-de-l-agregation-des-preferences
verdict : REVISE

Matériaux lus : `corpus/deepenings/<id>.json`, `corpus/validated/<id>.json` (notes + review, 13 notes de
contrôle), `corpus/evidence/<id>/` listé à la main : un seul fichier, `lecture.json` (23,7 ko), lu
intégralement (attribution, quotation, sources_ouvertes, definition_de_lauteur, 8 réserves). Pas de
`scouting.json`. Contrôle mécanique : `npm run corpus:deepen -- --check --only=...` passe, 1 598 mots
comptés par le script, 1 379 mots de texte lecteur (lead + sections), 219 mots de `limits`.

TRAJECTOIRE ACTUELLE

- lead[0] (108 mots) : le lecteur comprend que le problème n'est pas de désigner un gagnant mais de
  produire un classement collectif non cyclique, et il sait pourquoi une boucle rend le résultat
  dépendant de l'ordre des questions. Delta fort, concret, sans jargon.
- lead[1] (86 mots) : il apprend l'existence et la nature du geste d'Arrow (poser d'abord les
  exigences, demander ensuite si une règle les satisfait), la réponse négative, et ses deux bornes
  (conditionnalité, deux règles survivantes). Delta réel.
- S1.P1 (110 mots) : il apprend ce qu'est l'objet évalué (entrée = préférences individuelles, sortie
  = classement collectif), le nom « fonction de bien-être social », et le contenu de la Condition 1
  (comparabilité + absence de boucle), avec le sens de « faible ». Delta réel.
- S1.P2 (115 mots) : il apprend que la règle ne reçoit que des classements, jamais d'intensité, que
  ce cadrage vient de Bergson et non d'Arrow, et que l'impossibilité ne vient donc pas d'un refus de
  mesurer le bonheur. Delta réel, mais l'ordinalité y est présentée comme « la seconde exigence »
  juste après « C'est la Condition 1 », ce qui fait croire au lecteur qu'il tient la Condition 2
  (qui est en réalité la monotonicité, `lecture.json` / definition_de_lauteur).
- S2.P1 (113 mots) : il apprend que deux règles satisfont trivialement la cohérence (classement fixé
  d'avance, recopie d'une personne) et qu'Arrow doit les écarter à la main. Delta réel.
- S2.P2 (115 mots) : il apprend l'énoncé du Théorème 2 et le contresens à éviter (« aucune règle
  cohérente n'existe »). Delta réel mais partiellement REDONDANT AVEC lead[1], qui avait déjà
  annoncé « elle laisse debout deux règles » ; et le gain est payé d'une déformation (voir défauts).
- S3.P1 (79 mots) : il apprend qu'il y a six conditions, que la sixième porte sur la situation et
  non sur la règle, et que l'incompatibilité est celle du bloc entier. Delta réel et net.
- S3.P2 (98 mots) : il apprend deux conséquences (rien n'est dit en dessous de trois options ; le
  résultat ne désigne aucune condition coupable, donc renoncer est un choix). Delta réel pour la
  première moitié, fragile pour la seconde (voir défauts).
- S4.P1 (80 mots) : il apprend que le texte naît d'un différend d'économistes sur le principe de
  compensation, et que ce qui manquait à ce principe est exactement ce que la Condition 1 exigera.
  Delta réel mais inutilisable pour qui ignore ce qu'est le principe de compensation, jamais
  expliqué ici (et non explicable : le dossier ne le définit pas).
- S4.P2 (74 mots) : il apprend que l'impossibilité est présentée par son auteur comme la
  généralisation d'un échec local, non comme un paradoxe électoral. Delta réel, c'est un vrai
  changement de point de vue. La seconde moitié (le titre dit la même chose) est un ornement.
- S5.P1 (104 mots) : il apprend qu'une autre sortie existe, qui restreint non les exigences mais les
  préférences admises, qu'elle vient de Black et qu'Arrow la généralise. Delta réel, mais s'arrête
  sur « la question se rouvre » là où le dossier donne la réponse (Théorème 4).
- S5.P2 (79 mots) : il apprend un fait négatif contre-intuitif : ni Condorcet, ni Borda, ni le
  paradoxe de vote ne sont nommés, et la méthode par rangs y est anonyme. Delta réel et précieux.
- S6.P1 (94 mots) : il apprend la matérialité de l'objet et la contradiction de date entre couverture
  et pages. Delta factuel, nul sur le plan conceptuel.
- S6.P2 (51 mots) : il apprend que la numérisation est en partie illisible et que l'OCR est
  inutilisable. AUCUN DELTA pour la compréhension du concept ; c'est l'état d'une source, pas une
  connaissance sur l'agrégation des préférences, et la formulation frôle le compte rendu des
  conditions de lecture.
- S6.P3 (73 mots) : il apprend que le vocabulaire de 1948 est particulier (« conventionnelle », six
  conditions, indépendance portant sur la fonction de choix). « Les conditions y sont au nombre de
  six » est REDONDANT AVEC S3.P1. Le reste introduit en dernière ligne la condition d'indépendance
  et la fonction de choix, deux notions jamais construites auparavant.

RÔLE DES SECTIONS

- S1 « Ce qu'on exige d'une règle avant de la juger » : installe l'objet (règle = fonction des
  préférences vers un classement) et une exigence sur la sortie, une remarque sur l'entrée. Le titre
  promet les exigences ; la section en livre une sur six.
- S2 « La convention et le dictateur » : donne le résultat et son contresens le plus courant. C'est
  le sommet du texte, et il arrive avant que les conditions qu'il invoque aient été posées.
- S3 « Pourquoi il en faut au moins trois » : fixe le seuil de trois options et la nature collective
  de l'incompatibilité. Section la plus efficace du texte.
- S4 « Un problème né de l'économie du bien-être » : change l'origine du problème dans l'esprit du
  lecteur (économie du bien-être, pas urnes). Rôle distinct et légitime, mal servi par un terme
  opaque.
- S5 « La restriction de Black, et le vote par rangs » : ouvre une échappatoire par le domaine, puis
  corrige une généalogie fausse. Deux travaux hétérogènes sous un même titre, le second sans rapport
  avec le premier.
- S6 « Le tapuscrit P-41 et ses en-têtes » : décrit l'objet matériel et son lexique. Rôle
  essentiellement codicologique ; c'est la section terminale, donc celle qui décide de l'impression
  finale, et elle ne fait progresser aucune compréhension du concept.

SCORES

- fidélité documentaire : 2/4 — le texte est très ancré (une dizaine de verbatim tous retrouvés dans
  `lecture.json` ou les notes de review), mais quatre fragilités visibles. (i) S2.P1 « Leurs
  définitions viennent page 10 » suivi de « let R be any weak ordering of the alternatives
  independent of R1,…,Rn » et « let R coincide with R1 » : la note PROSE du bloc `review` localise
  précisément ces deux chaînes « p. 14 (feuillet n15) », section 4 de cette page, tandis que
  `lecture.json` donne pour la page 10 les Définitions 8 et 9 sous une forme différente
  (conventionnelle = il existe x et y avec x R y indépendamment de R1,…,Rn ; dictatoriale = il existe
  un individu i tel que x P y dès que x Pi y). (ii) Conséquence de (i) : S2.P1 présente deux exemples
  extrêmes comme les définitions des deux classes, et S2.P2 enchaîne « il dit que les règles
  cohérentes sont celles-là », ce que le Théorème 2 ne dit pas : il dit que toute règle satisfaisant
  les Conditions 1-3 tombe dans l'une des deux classes, ce qui est nettement plus large que les deux
  règles citées. (iii) S2.P2 « une règle qui tient debout et qui ne fixe rien d'avance et qui ne s'en
  remet à personne en particulier n'existe pas » absorbe les Conditions 2 et 3 dans « tient debout » :
  le lecteur ressort en croyant que cohérence + trois options suffisent à forcer la conclusion, alors
  que le verbatim cité deux lignes plus haut dit « satisfying Conditions 1-3 ». (iv) S5.P2 affirme
  platement l'absence de Condorcet, Borda et paradoxe de vote, alors que la réserve correspondante de
  `lecture.json` l'assortit d'un avertissement explicite (« sur un texte aussi dégradé, une occurrence
  isolée pourrait avoir échappé à la recherche par chaîne », recherche faite sur l'OCR) que `limits`
  ne reprend pas. Rien de tout cela n'est une invention ni un usage de source `metadata-only` : les
  deux sources `metadata-only` (JPE 1950, livre 1951) sont correctement absentes du texte lecteur et
  correctement traitées dans `limits`. Signal, non verdict : le gate tranchera (i), (ii) et (iv).
- progressivité pédagogique : 2/4 — l'entrée est exemplaire (lead[0] puis S1.P1 puis S2), mais deux
  sauts nets. Le Théorème 2 (S2.P2) mobilise « Conditions 1-3 » quand le lecteur n'a reçu que la
  Condition 1 ; et S6.P3 introduit en dernière ligne « la condition d'indépendance » et « la fonction
  de choix » sans qu'aucune section les ait construites, alors que `lecture.json` en donne la
  définition et la motivation verbatim (p. 10, « C(S) should be independent of the very existence of
  alternatives outside of S »).
- densité / non-redondance : 2/4 — la majorité des paragraphes a un delta propre, mais S6.P2 n'en a
  aucun pour le concept, S6.P3 rouvre le compte des six conditions déjà donné en S3.P1, et S2.P2
  redit en partie l'annonce de lead[1] sur les deux règles survivantes. Environ 220 mots, soit un
  sixième du texte lecteur, ne font progresser aucune compréhension.
- clarté : 2/4 — lead[0] et S3 sont limpides. Mais le texte accumule une douzaine de citations
  anglaises non traduites et une quinzaine de renvois de page dans 1 379 mots, ce qui lui donne la
  texture d'un apparat plutôt que d'une explication ; et S4.P1 fait reposer tout son raisonnement sur
  « le principe de compensation », terme jamais expliqué, que le lecteur ne peut pas reconstituer.
- profondeur explicative : 2/4 — le lecteur repart avec un énoncé et ses bornes, pas avec un
  mécanisme. Pourquoi trois alternatives font basculer ce que deux laissent passer n'est jamais
  expliqué, alors que S3 intitule précisément « Pourquoi il en faut au moins trois » et n'y répond
  pas : elle constate la Condition 6 au lieu d'éclairer le basculement.
- valeur des exemples : 2/4 — l'exemple d'ouverture (trois collègues, trois projets) fait
  réellement comprendre l'exigence de transitivité, c'est un très bon choix. Après lead[0], plus
  aucun exemple : ni le scrutin à deux options qu'évoque S3.P2 sans le développer, ni l'analogie que
  le rapport lui-même fournit page 17 (« the same idea as the left-to-right ordering of political
  parties in Continental politics »).
- limites / nuances : 3/4 — c'est le point fort du texte : la conditionnalité (« Sous certaines
  restrictions très raisonnables »), l'exception des méthodes triviales, le seuil de trois options et
  le fait négatif sur Condorcet arrivent tous au moment où ils évitent un contresens. Deux réserves :
  S3.P2 « le résultat ne désigne aucun coupable » est en tension avec ce que le rapport écrit
  lui-même page 14 (« it is hard to see how Conditions 1 or 3 can be weakened »), et la réserve d'OCR
  attachée au fait négatif n'est pas portée dans `limits`.
- pouvoir d'ouverture : 1/4 — le texte se termine sur le lexique d'un tapuscrit et sur son
  illisibilité partielle. Aucune question, aucune tension vivante, aucune raison conceptuelle d'aller
  plus loin, alors que le dossier offre une chute de premier ordre (page 19, la manipulation des
  réponses).

défauts majeurs :
- le mécanisme de l'impossibilité n'est pas enseigné : sur six conditions, seule la Condition 1 est
  expliquée ; la monotonicité et surtout l'indépendance des alternatives non pertinentes, qui portent
  l'essentiel du résultat et que `lecture.json` donne définies et motivées, sont absentes du texte
  lecteur (l'indépendance n'y apparaît qu'au dernier paragraphe, comme curiosité de vocabulaire) ;
- de ce fait, S2.P2 fait passer le théorème pour plus fort qu'il n'est : cohérence + trois options
  suffiraient à ne laisser que convention ou dictature ;
- conflation entre les deux classes de fonctions (Définitions 8 et 9, p. 10) et les deux exemples
  extrêmes (p. 14 selon le bloc `review`), avec une page attribuée aux mauvaises chaînes ;
- S6 entière, 218 mots, occupe la position de chute avec un contenu codicologique à delta conceptuel
  quasi nul, et S6.P2 décrit l'état de lisibilité d'une numérisation, ce qui relève de la frontière
  documentaire interne plutôt que du texte lecteur ;
- S5 s'arrête au seuil de sa propre réponse : « la question se rouvre » là où le Théorème 4 dit
  laquelle règle fonctionne et à quelle condition ;
- S5 réunit sous un même titre deux travaux sans rapport (restriction de domaine / généalogie
  absente), ce qui dilue les deux.

matière disponible mais sous-exploitée :
- Condition 3, indépendance des alternatives non pertinentes, avec sa motivation verbatim p. 10
  (« This being so, C(S) should be independent of the very existence of alternatives outside of S,
  and therefore should depend only on the individual preference scales within S. ») : c'est la
  condition qui rend le résultat intéressant et elle est entièrement disponible ;
- Condition 2, monotonicité, et Conditions 4 et 5 (ni conventionnelle ni dictatoriale) : disponibles
  en clair, elles permettraient de faire comprendre que le théorème écarte la convention et la
  dictature par hypothèse, et non par jugement moral après coup ;
- p. 11 : « This shows that measurability of individual utility is irrelevant to the ordering of
  social utilities. » Le verbatim qui fonde exactement l'affirmation avancée sans appui en S1.P2 ;
- p. 14, section 5 : à deux alternatives le vote majoritaire suffit, « This viewpoint is essentially
  the basis of the Anglo-American two-party system » : transforme la remarque abstraite de S3.P2 sur
  le scrutin par oui ou non en fait sourcé et en exemple ;
- p. 14 : « From the very meaning of a social decision process, it is hard to see how Conditions 1 or
  3 can be weakened. » Arrow dit lui-même où l'on peut et où l'on ne peut pas céder : cela corrige et
  enrichit le « aucun coupable » de S3.P2 ;
- p. 17, Théorème 4 : sous la restriction de Black, le vote majoritaire est une fonction de bien-être
  social satisfaisant les conditions, à condition que le nombre d'individus soit impair, avec
  contre-exemple à deux individus p. 18 ; et l'analogie « left-to-right ordering of political parties
  in Continental politics » ;
- p. 19, section 8 : « there is always the danger of false answers to take advantage of the machinery
  in the manner of a game » et « the rules of the electoral game must be so devised as to insure that
  expressed preferences coincide with actual preferences ». Difficulté d'un autre ordre, que le
  rapport nomme sans la traiter : chute idéale, ouverture réelle, entièrement sourcée ;
- p. 8, Théorème 1 : ordre faible et fonction de choix rationnelle sont deux langages du même objet.
  C'est le prérequis qui manque à S6.P3 et qui rendrait intelligible la formulation de l'indépendance.

limites documentaires :
- dossier réduit à un seul fichier, `lecture.json`, mais exceptionnellement riche : lecture intégrale
  d'une source primaire `full-text`, verbatim localisés page par page, huit réserves explicites. Rien
  ici ne justifie un `BLOCKED_SOURCE` : la matière manquante au texte est dans le dossier ;
- pages 5 à 8, 12, 13 et 18 lues sur OCR seulement, aucun verbatim disponible : la démonstration
  proprement dite (ensembles décisifs, construction des trois profils) ne peut être rapportée que
  comme compte rendu de structure, jamais citée. `limits` le porte déjà correctement ;
- les deux sources `metadata-only` (JPE 1950, Social Choice and Individual Values 1951) interdisent
  toute phrase sur leur contenu et toute comparaison entre 1948 et la forme canonique. Le texte
  lecteur respecte cette frontière ; la réécriture devra la respecter aussi, en particulier si elle
  veut exploiter la particularité du vocabulaire de 1948 ;
- réception non instruite, ni anglophone ni francophone : aucune section sur la postérité, la
  contestation ou la correction de la preuve n'est possible ;
- réserve d'OCR sur le fait négatif Condorcet / Borda / paradoxe de vote : elle lie comme `limits`,
  et devrait apparaître dans `limits` si l'affirmation est conservée telle quelle.

TRAJECTOIRE CIBLE

1. Lead (conserver quasiment tel quel). Entrée : rien. Nouveau : le classement collectif doit être
   transitif sous peine de dépendre de l'ordre des questions ; Arrow renverse la méthode, pose les
   exigences d'abord, et la réponse est non, bornée des deux côtés. Matière : lead actuel, p. 3.
   Ne pas répéter ensuite : l'annonce « deux règles survivantes » ne doit plus être refaite en S2.
2. Section « Ce qu'on demande à une règle ». Entrée : le lecteur sait qu'un classement collectif doit
   tenir debout. Nouveau : l'objet évalué (entrée = classements seuls, sortie = un ordre), puis trois
   exigences et non une, dont l'indépendance des alternatives non pertinentes expliquée en mots
   courants à partir d'une situation (ce que le groupe choisit dans un sous-ensemble ne doit pas
   dépendre d'options absentes). Matière : Condition 1 p. 9, ordinalité p. 2 (Bergson) plus
   « measurability of individual utility is irrelevant » p. 11, Conditions 2 et 3 p. 9-10 avec la
   motivation verbatim de la p. 10. Ne pas répéter : la mise en scène du lead.
3. Section « Les deux règles qu'il faut écarter ». Entrée : le lecteur connaît les exigences portant
   sur la règle. Nouveau : deux familles de règles satisfont tout cela trivialement, elles sont donc
   exclues par les Conditions 4 et 5 ; distinguer la classe (un classement soustrait aux préférences,
   un individu décisif) de son exemple extrême. Matière : Définitions 8 et 9 p. 10, et, si les
   exemples de la p. 14 sont conservés, les localiser à la page que le bloc `review` leur donne.
   Ne pas répéter : l'annonce de lead[1].
4. Section « Ce que dit exactement le théorème ». Entrée : le lecteur a les six exigences et les deux
   classes. Nouveau : l'énoncé (Théorème 2, p. 14), le contresens à éviter, et le rôle du seuil de
   trois options ; dire que les six conditions sont inconsistantes ensemble, et qu'Arrow lui-même
   juge les Conditions 1 et 3 intouchables, ce qui oriente le choix de celle qu'on lâche. Matière :
   p. 11 « Conditions 1-6 are inconsistent », Condition 6 p. 11, Théorème 2 p. 14, « hard to see how
   Conditions 1 or 3 can be weakened » p. 14. Ne pas répéter : la définition des deux classes.
5. Section « Deux options, ce n'est pas trois ». Entrée : le lecteur sait que le seuil existe.
   Nouveau : ce qui se passe sous le seuil, et que le rapport en tire une lecture du bipartisme.
   Matière : section 5 p. 14, y compris « the Anglo-American two-party system ». Ne pas répéter : le
   constat de la Condition 6.
6. Section « Restreindre les préférences plutôt que les exigences » (absorbe S5.P1 et la conclusion
   qui lui manque). Entrée : le lecteur sait qu'il faut renoncer à quelque chose. Nouveau : la voie
   de Black, sa généralisation par Arrow, et surtout son rendement exact, le vote majoritaire
   redevient une règle admissible sous cette restriction et à nombre impair d'individus, avec un
   contre-exemple à deux. Matière : p. 17 (verbatim Black, Condition A, Théorème 4) et p. 18.
   Ne pas répéter : « la question se rouvre » sans dire ce qu'elle rouvre.
7. Section finale « Ce que le rapport nomme sans le traiter » (remplace S6). Entrée : le lecteur sait
   qu'il existe une échappatoire par le domaine. Nouveau : une difficulté d'un autre ordre, la
   déclaration stratégique des préférences, que le rapport pose page 19 et laisse ouverte ; c'est une
   raison précise d'aller plus loin. Matière : p. 19, verbatim disponibles. Ne pas répéter : le
   théorème, les conditions, le compte des six.

Dispositions complémentaires pour la réécriture :
- S4 actuelle (origine dans l'économie du bien-être) mérite d'être conservée, courte, et placée tôt,
  mais seulement si « le principe de compensation » reçoit une glose d'une ligne compatible avec le
  dossier ; sinon, garder « It is the purpose of this note to show that this phenomenon is very
  general » comme caractérisation du geste, sans le terme opaque ;
- S5.P2 (absence de Condorcet, Borda, paradoxe de vote) est un excellent paragraphe : le conserver,
  lui donner sa propre place, et inscrire dans `limits` la réserve d'OCR qui l'accompagne dans le
  dossier ;
- de S6, ne garder au plus que la discordance de date, une phrase, et jamais en position de chute ;
  supprimer le paragraphe sur la lisibilité de la numérisation, qui appartient à `limits` ;
- réduire d'un tiers environ le nombre de citations anglaises non traduites et de renvois de page :
  la fidélité n'y perd rien, la lisibilité y gagne beaucoup. Viser 1 400 à 1 600 mots lecteur.

raison du verdict : l'architecture d'ensemble est saine et l'entrée est de très bonne qualité, ce qui
exclut `REWRITE` ; le dossier est riche et intégralement `full-text` sur la pièce principale, ce qui
exclut `BLOCKED_SOURCE`. Mais le texte enseigne le résultat sans enseigner le mécanisme : cinq des six
conditions ne sont jamais expliquées, l'indépendance des alternatives non pertinentes n'apparaît qu'en
dernière ligne, et l'énoncé s'en trouve présenté plus fort qu'il n'est. Une section entière en position
de chute ne produit aucun delta conceptuel, tandis que les trois développements les plus rentables du
dossier (le cas à deux alternatives, le Théorème 4, la manipulation des réponses p. 19) restent
inutilisés. Ce sont des déplacements, des développements et une suppression, tous faisables à partir
de la matière déjà présente : `REVISE`.
