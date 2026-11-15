concept : cause-de-hasard-et-cause-assignable
verdict : REVISE

CONTEXTE DOCUMENTAIRE
- `corpus/validated/cause-de-hasard-et-cause-assignable.json` ne porte aucun champ `dossier` ; le pack
  le confirme (`dossier_declare.statut: non-declare`, `evidence_files: []`).
- `corpus/evidence/cause-de-hasard-et-cause-assignable/` n'existe pas, et aucun répertoire de
  `corpus/evidence/` ne porte un nom lié à Shewhart ou au concept. **La carte n'a pas de dossier.**
  Les deux déclarations d'accès sortent donc `dossier-absent` : le `full-text` de Van Nostrand 1931
  est une déclaration de la fiche que rien ne corrobore au-delà de son propre résumé, de ses
  `notes` et de sa `review`. L'axe A est noté sur cette base, pas sur une absence de contradiction.
- La matière réelle tient donc dans : p. 6 (un verbatim, un titre de section), p. 12 (Postulat 2),
  p. 13 (légende de la Fig. 3), p. 14 (définition par exclusion, « called assignable », Postulat 3,
  phrase « Hence », titre de section 2), la phrase « yardstick » (non paginée), la page de titre et
  la préface (remerciements). Rien sur le contenu de la section « Definition of Control » au-delà de
  son titre, rien sur le reste de l'ouvrage.
- Incohérence interne de la fiche, signalée et non tranchée : `quotation.translation.kind` vaut
  `in-house` (traduction du 29 août), alors que `review.notes[1]` et `notes[7]` disent encore
  « translation.kind = none, la citation reste en anglais ». Sans effet sur le texte lecteur, mais
  un réécrivain ne doit pas citer ces deux notes comme état courant.

TRAJECTOIRE ACTUELLE
- lead[0] : le lecteur dispose d'une situation concrète (pièces qui varient, une mesure qui
  s'écarte) et du dilemme à deux coûts : corriger à tort ou laisser passer une vraie panne. Delta
  réel. Fragilité : « finit souvent par dérégler ce qui allait bien » est une affirmation de
  fréquence sur le monde, non marquée comme hypothèse, sans aucun support.
- lead[1] : le lecteur apprend que ce dilemme est posé par Shewhart (Bell, Van Nostrand 1931), dans
  ses propres mots (légende de la Fig. 3, titre « When do Fluctuations Indicate Trouble? »). Delta
  réel. Fragilités : « La variation ne se supprime pas » est posé comme fait sans support ;
  « sous une série de courbes » n'est porté par aucun support (SUP-c6725a211f9708a1 ne dit que
  « planche pleine page, Fig. 3 ») ; « la section qui suit » est une localisation que les supports
  ne fixent pas (SUP-5ad8a2f2fe45c1cc situe le titre p. 14 sans ordre relatif).
- S1.P1 : le lecteur apprend que « contrôle » a chez Shewhart un sens défini, qui n'est pas
  l'absence de variation mais une variabilité « constante dans des limites », seconde
  caractéristique du contrôle. Delta réel. Fragilité : « cette définition part de la variation
  plutôt que de l'action » et « ne désigne pas le fait de surveiller ou de piloter » décrivent le
  contenu de la section « Definition of Control », dont les supports ne donnent que le titre ; le
  verbatim de p. 6 est la fin du paragraphe voisin (SUP-c6725a211f9708a1), pas la définition.
- S1.P2 : le lecteur comprend qu'un écart se juge contre le comportement habituel du procédé, pas
  dans l'absolu (« même chiffre anodin sur une machine, alarmant sur une autre »). Delta réel, et
  utile. Fragilité : le pivot « ce qu'on cherche à faire disparaître n'est pas la variation, c'est
  l'imprévisibilité » et « l'on sait entre quelles bornes il se tient » introduisent la
  prévisibilité, notion qu'aucun support ne porte (connaissance générale du modèle).
- S2.P1 : le lecteur apprend que l'existence d'un système constant de causes de hasard est un
  postulat numéroté, posé et non démontré. Delta réel (statut épistémique).
- S2.P2 : le lecteur apprend que les causes assignables se définissent par exclusion (n'appartiennent
  pas au système constant), et en tire que le critère est l'appartenance, pas la taille de l'effet.
  Delta réel, le meilleur du texte. Sous-exploitation : le verbatim dit « unknown causes », et le
  texte ne tire pas la distinction qu'il permet (assignable ne veut pas dire déjà connue).
- S2.P3 : le lecteur apprend le Postulat 3 et la modalité « may » (possibilité, pas garantie). Delta
  réel pour la modalité. Fragilité : « On ne supprime pas un système constant […], on apprend à
  vivre avec » n'est pas dans les supports (même problème que lead[1]). La phrase « C'est là que le
  partage devient une consigne de travail » anticipe S4 et en vide une partie.
- S3.P1 : le lecteur apprend que Shewhart rapporte le mot « assignable » au passif et au passé,
  sans nommer personne ni institution, avec le seul domaine « production of telephone equipment ».
  Delta réel (attribution), bien sourcé (SUP-3cb35d7d5a21cfe6, SUP-04feda132d2b60f3,
  SUP-808e395a9190e721).
- S3.P2 : ajoute la contrepartie positive (systématisation, postulats, démonstration lui
  reviennent). Delta mince ; « attribuer à Shewhart l'invention du terme irait au-delà » est
  PARTIELLEMENT REDONDANT AVEC S3.P1, qui a déjà montré le passif et ce qu'il interdit.
- S3.P3 : le lecteur apprend que la préface remercie cinq collaborateurs, qui ne sont pas
  cosignataires. Delta bibliographique, presque nul pour la compréhension du concept. Fragilité :
  « Ils disent tout de même d'où sort une idée pareille : d'un travail collectif dont l'ouvrage est
  la mise en forme » excède SUP-81f6392e20acca9d, qui insiste au contraire « remerciées, pas
  cosignataires » ; seul le remerciement à Jones et Edwards parle d'une « basis » développée sous
  leur direction, et rien ne dit d'où « sort » la distinction.
- S4.P1 : le lecteur apprend que la consigne « find and eliminate » est présentée comme conséquence
  (« Hence ») et qu'elle s'adresse au fabricant. Delta réel. Fragilités : « pas sur celles d'un
  statisticien » et « avec des moyens finis » ne sont portés par aucun support.
- S4.P2 : le lecteur apprend que la consigne vise l'état du procédé, pas sa connaissance (trouver
  ne suffit pas, il faut supprimer). Delta réel pour cette nuance ; la seconde moitié (« elle
  désigne ce sur quoi il vaut la peine d'intervenir, et par différence tout ce qu'il est inutile de
  poursuivre ») est REDONDANT AVEC lead[1] et S2.P3 : c'est la question d'entrée reformulée en
  réponse.
- S4.P3 : le lecteur apprend que la consigne a un terme (quand il ne reste que le système constant,
  il n'y a plus rien à chercher). Delta réel, conséquence dérivée. L'exemple du régleur est
  REDONDANT AVEC lead[0] (« celui qui court après chaque écart ») : il redit le premier coût du
  dilemme sans rien y ajouter, sinon son nom technique. « ce qui est plus rare » est une évaluation
  sans support.
- S5.P1 : le lecteur apprend que la distinction ne dit pas, à elle seule, de quel côté tombe un
  écart, et que Shewhart réclame un « yardstick ». Delta réel, et c'est le retournement le plus
  fort du texte. Fragilité : « Shewhart le formule lui-même : rien, dans la distinction, ne dit… »
  lui attribue une formulation qu'il n'a pas ; seule la phrase « What we need is… » est de lui
  (SUP-5ad8a2f2fe45c1cc).
- S5.P2 : le lecteur comprend que sans étalon la distinction est manipulable (appeler assignable ce
  qui dérange). Delta réel pour cette première moitié. Fragilité majeure : « la règle de décision
  qui vient ensuite : une procédure qui, à partir des mesures elles-mêmes, tranche entre les deux
  versants sans qu'on ait à en juger d'avance » décrit le contenu de la suite de l'ouvrage, qu'aucun
  support ne rapporte (les supports s'arrêtent p. 14).

RÔLE DES SECTIONS
- S1 Ce que « sous contrôle » veut dire ici : fixer le sens technique de « contrôle » (variabilité
  constante dans des limites) avant de parler des causes. Rôle clair, prérequis bien placé.
- S2 Un système constant, posé en postulat : poser les deux versants (postulat 2, définition par
  exclusion, postulat 3). Cœur conceptuel, bien construit.
- S3 Un mot que Shewhart ne s'attribue pas : attribution du terme et paternité du livre. Nuance
  utile, mais placée au milieu de la chaîne logique Postulat 3 → « Hence » ; S4.P1 doit d'ailleurs
  rappeler « Juste après le troisième postulat » pour renouer le fil que S3 a coupé. Trois
  paragraphes pour une nuance qui en vaut un.
- S4 Trouver, puis supprimer : la conséquence pratique et son terme. Chevauche S2.P3 (« consigne de
  travail ») et retombe sur lead[0] avec le régleur.
- S5 L'étalon qui manque encore : la distinction ne s'applique pas toute seule ; elle appelle un
  critère. Bonne ouverture, mais qui décrit ce qui vient après plutôt que de le laisser ouvert.

SCORES
- fidélité documentaire : 2/4 — pas de faute critique ni de `metadata-only` exploité, citations
  conformes ; mais une série de glosses non financées s'accumule : lead[0] « finit souvent par
  dérégler », lead[1] « La variation ne se supprime pas » et « sous une série de courbes », S1.P1
  contenu prêté à la section « Definition of Control », S1.P2 « imprévisibilité », S2.P3 « on
  apprend à vivre avec », S3.P3 « travail collectif », S4.P1 « pas d'un statisticien », « moyens
  finis », S5.P1 « le formule lui-même », S5.P2 description de la règle de décision. Carte sans
  dossier : rien ne peut être recoupé au-delà de la fiche.
- progressivité pédagogique : 3/4 — lead → sens de « contrôle » → deux versants → conséquence →
  limite de la distinction est une vraie montée ; S3 interrompt la chaîne entre S2.P3 et S4.P1.
- densité / non-redondance : 2/4 — S3.P2 recouvre S3.P1 ; S3.P3 n'ajoute qu'un fait
  bibliographique ; S4.P2 (seconde moitié) redit lead[1] et S2.P3 ; l'exemple de S4.P3 redit
  lead[0].
- clarté : 3/4 — lisible, verbatims traduits au fil ; mais le texte dit « contrôle » partout alors
  que la citation que le lecteur vient de lire sur la carte dit « maîtrise » (SUP-dc433895b0cfce0b,
  justifié par SUP-7bd3d1cf321bf1c8), sans jamais relier les deux mots.
- profondeur explicative : 3/4 — S2.P2 (appartenance, pas taille), S2.P3 (modalité « may »),
  S4.P3 (terme de la recherche), S5 (distinction ≠ diagnostic) expliquent réellement ; S1.P2 et
  S5.P2 approfondissent en partie avec une matière qui n'est pas au dossier.
- valeur des exemples : 2/4 — lead[0] est un bon exemple d'entrée ; le régleur de S4.P3 le répète ;
  « même chiffre anodin sur une machine, alarmant sur une autre » (S1.P2) est le seul exemple qui
  fait voir une distinction nouvelle.
- limites / nuances : 3/4 — S2.P1 (postulat non démontré), S2.P3 (« may »), S3.P1 (terme non
  revendiqué), S5 (étalon manquant) arrivent au bon moment ; la nuance « unknown causes » est
  absente alors qu'elle évite un contresens courant.
- pouvoir d'ouverture : 3/4 — S5.P1 laisse une vraie question (comment reconnaître une cause
  assignable dans une mesure ?) ; S5.P2 la referme en décrivant d'avance une procédure non sourcée.

défauts majeurs :
- Glosses de connaissance générale non financées, présentées sans marquage (liste en axe A), dont
  deux structurantes : l'« imprévisibilité » qui sert de pivot à S1.P2, et la description de la
  règle de décision en S5.P2. Ce sont les phrases sur lesquelles le gate refusera.
- S3 coupe la chaîne Postulat 3 → « Hence » et occupe trois paragraphes pour une nuance
  d'attribution dont un seul porte le delta (S3.P1).
- Redondances : S2.P3 « consigne de travail » / S4.P2 seconde moitié / lead[1] ; régleur de S4.P3 /
  lead[0] ; S3.P2 / S3.P1.
- Incohérence terminologique « contrôle » (texte) / « maîtrise » (citation de la carte).

matière disponible mais sous-exploitée :
- « unknown causes of variability […] which do not belong to a constant system » : les causes
  assignables sont dites inconnues ; combiné au Postulat 3 (« may be found »), cela permet de
  distinguer « assignable » (qu'on peut assigner) de « déjà identifiée ». Supports :
  SUP-1ec29b1b8885d9d8, SUP-40c9d666b4af664b, SUP-3cb35d7d5a21cfe6.
- « This fact was discovered very early in the development of control methods » : ce qui a été
  découvert tôt est le fait (l'existence de telles causes), et le nom est venu avec ; S3.P1 cite la
  phrase mais ne lit que le passif du nom. Supports : SUP-3cb35d7d5a21cfe6, SUP-04feda132d2b60f3.
- Le choix « maîtrise » pour « control » et la raison qu'en donne la traduction (en français
  « contrôle » désigne l'inspection). Supports : SUP-7bd3d1cf321bf1c8, SUP-dc433895b0cfce0b. Ce
  support finance une désignation (le mot, et le fait que l'inspection n'est pas la notion) ; il ne
  finance aucune explication de ce que Shewhart dit de l'inspection.

limites documentaires :
- Pas de dossier de preuve : tout repose sur la fiche, ses `notes` et sa `review`.
- Contenu de la section « Definition of Control » : seul le titre est porté (SUP-c6725a211f9708a1).
  Première caractéristique du contrôle : inconnue.
- Rien sur la prévisibilité, sur le caractère irréductible des causes de hasard, sur le
  sur-réglage, sur le coût ou l'aspect « economic » du titre, sur la règle de décision ni sur ce
  qui suit la p. 14 (cf. `limits[1]`).
- Origine du terme « assignable » : mémorandums Bell 1924-1926 non ouverts (SUP-04feda132d2b60f3) ;
  aucune antériorité affirmable.
- La phrase « yardstick » n'est pas paginée dans les supports ; le texte ne doit pas lui donner de
  page.

BUDGET DE L'AJOUT
- ajouts prescrits et supports qui les financent :
  1. En S2 (dans S2.P2 ou S2.P3, sans paragraphe nouveau) : une phrase tirant de « unknown causes »
     + « may be found » qu'une cause assignable n'est pas une cause déjà connue, mais une cause
     qu'on peut chercher et trouver. SUP-1ec29b1b8885d9d8, SUP-40c9d666b4af664b,
     SUP-3cb35d7d5a21cfe6. Marquer comme lecture (« cela implique que… »), pas comme thèse de
     Shewhart.
  2. En S1.P1 (substitution, non ajout) : relier « control » au mot français « maîtrise » de la
     citation, en remplaçant « surveiller ou piloter ». SUP-7bd3d1cf321bf1c8,
     SUP-dc433895b0cfce0b. Une phrase au plus ; ne rien dire de ce que Shewhart écrit de
     l'inspection.
- prescriptions écartées faute de support :
  - développer la prévisibilité comme objectif du contrôle (aucun support) ;
  - expliquer pourquoi les causes de hasard ne se suppriment pas (aucun support) ;
  - décrire la règle de décision, la carte de contrôle, les limites à trois sigma ou le sens de
    « economic » (aucun support ; `limits[1]` l'interdit) ;
  - illustrer le sur-réglage comme phénomène fréquent (aucun support) ;
  - enrichir S3 par l'origine Bell du terme (SUP-04feda132d2b60f3 l'interdit expressément).
- sens attendu du volume : plus court, modérément (de 1 316 mots vers 1 150-1 250), sans passer sous
  le plancher de 1 100 de `PROTOCOLE.md` §5. Les deux ajouts sont d'une phrase chacun ; le gain
  vient de la fusion de S3 en un paragraphe, du retrait des glosses non financées et de la
  suppression des redondances de S4.

TRAJECTOIRE CIBLE
- lead : garder la situation d'atelier et la question de Shewhart (Fig. 3, titre p. 14).
  Entrée : rien. Apport : le dilemme et son auteur. Matière : SUP-c6725a211f9708a1,
  SUP-5ad8a2f2fe45c1cc, SUP-c3a03c8ee1d9876d, SUP-d20de111ec3f0250. Retirer : « finit souvent par
  dérégler » (ou le marquer comme hypothèse sans fréquence), « La variation ne se supprime pas »
  posé comme fait, « sous une série de courbes », « la section qui suit ». Ne pas répondre déjà à
  la question.
- S1 (sens de « contrôle ») : entrée = le dilemme. Apport = « control » est un terme défini ; la
  variabilité tenue « constante dans des limites » en est la seconde caractéristique ; le français
  dit « maîtrise ». Puis un écart se juge contre le comportement habituel de ce procédé-là
  (conserver l'exemple « anodin ici, alarmant là », marqué comme conséquence). Matière :
  SUP-c6725a211f9708a1, SUP-7bd3d1cf321bf1c8, SUP-dc433895b0cfce0b. Ne pas prêter de contenu à la
  section « Definition of Control » ; retirer le pivot « imprévisibilité » et « l'on sait entre
  quelles bornes ». Ne pas anticiper les deux types de causes.
- S2 (les deux versants) : entrée = la variabilité stable dans des limites. Apport = Postulat 2
  (posé, non démontré) ; versant assignable défini par exclusion, critère d'appartenance et non de
  taille ; causes dites « unknown » et pourtant trouvables (Postulat 3, « may »). Matière :
  SUP-2d2b6e6aee42d53d, SUP-1ec29b1b8885d9d8, SUP-40c9d666b4af664b, SUP-3cb35d7d5a21cfe6. Retirer
  « on apprend à vivre avec » et « C'est là que le partage devient une consigne de travail », qui
  appartient à S4. Placer ici, en une phrase ou en fin de section, la nuance d'attribution de S3.P1
  si l'on choisit de fondre S3 (voir ci-dessous).
- S3 (attribution) : fondre en un seul paragraphe, et le déplacer après S4 ou S5 plutôt qu'entre
  Postulat 3 et « Hence ». Garder : passif et passé de « were called assignable », italique, aucun
  nom ni institution, « production of telephone equipment » ; ce qui revient à Shewhart
  (systématisation, postulats, démonstration) ; page de titre à un seul nom, préface qui remercie
  sans faire cosigner, en une proposition. Matière : SUP-3cb35d7d5a21cfe6, SUP-04feda132d2b60f3,
  SUP-808e395a9190e721, SUP-81f6392e20acca9d, SUP-84e34b84b1175bf4. Retirer « d'où sort une idée
  pareille : d'un travail collectif » et la liste nominative si elle ne sert pas. Ne pas répéter
  l'interdit d'attribution deux fois.
- S4 (trouver puis supprimer) : entrée = Postulat 3. Apport = « Hence » : consigne tirée comme
  conséquence, adressée au fabricant ; supprimer et pas seulement identifier (on vise l'état) ; la
  recherche a un terme quand il ne reste que le système constant. Matière : SUP-e16b9b9ce8aa2ea2,
  SUP-d2ed0f859c559267, SUP-1ec29b1b8885d9d8. Retirer « pas sur celles d'un statisticien », « avec
  des moyens finis », « ce qui est plus rare », la seconde moitié de S4.P2 (redite de la question
  d'entrée) et l'exemple du régleur, ou bien le réduire à une demi-phrase qui renvoie au dilemme du
  lead en nommant ce qu'il est désormais (traiter comme assignable ce qui appartient au système
  constant) : c'est le seul gain que l'exemple peut porter.
- S5 (l'étalon) : entrée = une consigne claire sur des causes définies. Apport = la distinction ne
  porte pas d'étiquette sur l'écart observé ; Shewhart réclame un « yardstick » ; sans lui, la
  distinction est manipulable. Matière : SUP-5ad8a2f2fe45c1cc. Remplacer « Shewhart le formule
  lui-même » par une attribution limitée à la phrase citée ; supprimer la description de la règle
  de décision (« à partir des mesures elles-mêmes… sans qu'on ait à en juger d'avance ») et finir
  sur la question ouverte : l'étalon est demandé à cet endroit du livre, et il faudra lire la suite
  pour voir comment il est construit. Ne donner aucune page à la phrase « yardstick ».

raison du verdict : l'architecture est saine (lead concret, prérequis « contrôle » avant les causes,
cœur conceptuel en S2, retournement final en S5) et les meilleurs deltas sont réels ; mais un
ensemble de glosses de connaissance générale non financées par le pack, une section d'attribution
trop longue placée au milieu de la chaîne logique, et trois redondances locales imposent une
révision par retrait, fusion et déplacement, avec deux substitutions d'une phrase chacune financées
par SUP-1ec29b1b8885d9d8 / SUP-40c9d666b4af664b / SUP-3cb35d7d5a21cfe6 et SUP-7bd3d1cf321bf1c8 /
SUP-dc433895b0cfce0b. La matière n'est pas assez pauvre pour `BLOCKED_SOURCE` : la profondeur
actuelle utile est déjà finançable, c'est son excédent qui ne l'est pas.
