concept : points-de-levier
verdict : REVISE

CONSTAT DOCUMENTAIRE PRÉALABLE (établi par listage direct)

`ls corpus/evidence/` : 127 répertoires, **aucun `points-de-levier`**. La carte n'a pas de dossier
de preuve. Toute la matière autorisée tient donc dans `corpus/validated/points-de-levier.json` :

- `summary` : « douze endroits où intervenir, du réglage d'un paramètre au changement de
  paradigme, et prévient qu'on les actionne d'ordinaire à l'envers » ;
- `quotation` : texte français, `original_text` complet (avec la fin élidée), `locator: p. 2` ;
- `notes[0]` : la fin élidée « systematically worsening whatever problems we are trying to solve » ;
- `notes[1]` : la liste révisée est p. 3, elle va de « Constants, parameters, numbers » à
  « The power to transcend paradigms » ; une première liste de **neuf** entrées est p. 2, écrite
  sur un paperboard, que Meadows corrige elle-même deux pages plus loin ;
- `notes[2]` : rapport de décembre 1999, The Sustainability Institute ; version plus courte dans
  Whole Earth, hiver 1997, non ouverte ;
- `notes[3]` : « in increasing order of effectiveness », donc 12 = plus faible, 1 = plus fort ;
- `notes[4]` : image de plomberie filant toute l'échelle — paramètre = réglage d'un robinet,
  stock = niveau de la baignoire, délai = temps que met **une vanne** à faire effet ; la dette
  publique décrite comme « a negative bathtub, a money hole », les paramètres budgétaires comme
  « adjustments to faucets » (p. 5-6) ;
- `sources` : rapport primaire `full-text` ; Abson et al. 2017 et Fischer & Riechers 2019 tous
  deux `metadata-only` ;
- `review.notes[0]` : le contrôle du 22 août 2026 a été mené **dans la même session que la
  rédaction**, donc non aveugle ; l'écart est déclaré.

Deux conséquences pour l'axe A, et elles ne vont pas dans le même sens.

1. L'absence de dossier ne dégrade pas le niveau d'accès déclaré. `FACTCHECK_PROTOCOL.md` §3bis
   qualifie ce cas `dossier-absent`, et §5 exclut délibérément `dossier-absent` de la liste des
   statuts qui font traiter un appui « comme une notice ». Le `full-text` du rapport reste donc
   valide : rien ici ne permet de dire que Meadows n'a pas été lue.
2. Mais l'objet source ne porte que son label et son URL. **Un `full-text` non reproduit
   n'est pas un contenu disponible.** Ce que le texte lecteur peut établir du rapport, c'est
   exactement ce que `quotation`, `summary`, `notes` et `review` en rapportent, et rien de plus.
   C'est là que l'approfondissement dépasse, à plusieurs endroits porteurs.

Précaution §5 appliquée dans tout ce rapport : je ne conclus nulle part que Meadows « ne dit pas »
telle chose. Je dis que la matière autorisée ne la porte pas. La distinction est la même que celle
qui a failli faire publier une attribution fausse sur `mesure-devenue-cible`, et elle commande la
trajectoire cible.

Contrôle de forme : `npm run corpus:deepen -- --check --only=points-de-levier` passe (1291 mots au
compteur du script, 1120 au comptage brut par espaces). Aucun tiret cadratin, apostrophes et
guillemets conformes, `limits` reste interne et nomme source + accès + affirmation interdite. Les
deux sources `metadata-only` ne sont jamais utilisées comme contenu dans le texte lecteur : seul
`limits[2]` les évoque, du bon côté de la frontière.

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur comprend que la question pratique n'est pas « agir ou non » mais « où
  appuyer », et que les endroits possibles (un montant, un délai, une règle, un décideur, la raison
  d'être) ne coûtent ni ne rapportent la même chose. Delta net, entrée concrète, sans jargon.
- lead[1] : il apprend qui est Meadows, d'où lui vient sa formation, que le résultat est une liste
  ordonnée de douze endroits du plus faible au plus fort, et qu'un avertissement l'accompagne.
  Delta net. Fragilité : « a passé sa vie à observer des gens intelligents pousser très fort sur
  des endroits qui ne bougent pas » est une couleur biographique que la matière autorisée ne porte
  pas ; « l'un des textes les plus repris du domaine » non plus (aucune donnée de réception dans la
  fiche, et les deux sources de réception sont `metadata-only`).
- S1.P1 : il comprend que la valeur de la liste tient à son **ordre** et non à son inventaire, il
  reçoit le verbatim « in increasing order of effectiveness », et il apprend que la numérotation est
  inversée par rapport à l'intuition (12 = le plus faible). Delta fort, entièrement soutenu par
  `notes[3]` et `notes[1]`.
- S1.P2 : il sait ce qu'est le barreau du bas, nommé dans les termes de Meadows. Demi-delta :
  « Constants, parameters, numbers » est soutenu par `notes[1]`, mais « ce sont les points sur
  lesquels se concentre l'essentiel du débat public et de la négociation interne » est une
  généralisation que la matière ne porte pas. `notes[4]` documente un cas voisin (dette publique,
  paramètres budgétaires) ; il ne documente pas « l'essentiel ».
- S1.P3 : il reçoit les dix barreaux intermédiaires et le sommet, dans un ordre. Delta
  pédagogiquement le plus dense du texte, et **la fragilité documentaire la plus lourde** : la
  matière autorisée ne donne que les deux extrémités (`notes[1]`), le compte de douze (`summary`) et
  deux barreaux via l'image de plomberie (`notes[4]` : stock, délai). « la structure des flux », « la
  force des boucles qui stabilisent », « le gain des boucles qui emballent », « la circulation de
  l'information », « les règles », « le pouvoir de changer les règles », « les buts poursuivis »,
  « l'idée partagée d'où ces buts sortent » ne figurent nulle part dans la matière, ni comme
  contenus ni dans cet ordre.
- S1.P4 : il tient l'échelle par une image mentale unique et sent la corrélation entre facilité
  d'accès et faiblesse d'effet. Bon delta. Soutenu pour trois barreaux par `notes[4]`, qui autorise
  aussi l'extension puisqu'il dit que Meadows « file toute l'échelle » ainsi. Deux dérives : « le
  temps que met **le bouchon** à faire effet » remplace la vanne du seul support disponible par un
  autre objet (un bouchon ne régule pas, il obture) ; « La règle, c'est ce qui décide qu'on ouvre ou
  qu'on ferme » est un contenu inventé placé sous le crédit de « Meadows l'emploie elle-même ».
- S2.P1 : il comprend **pourquoi** l'ordre monte : un paramètre agit dans une structure qu'il ne
  change pas, une règle change la structure, un but change ce que la structure cherche, une idée
  engendre les buts ; plus on monte, plus on agit tôt dans la chaîne. Delta explicatif réel, et le
  meilleur passage du texte sur le plan du mécanisme. Il hérite toutefois de S1.P3 : la chaîne
  suppose des barreaux que la matière n'établit pas.
- S2.P2 : il distingue deux échelles qui se superposent, puissance et coût politique, et comprend
  que la seconde est l'inverse de la première. Delta distinct et utile, dérivé sans sur-attribution
  (« lu à l'envers », « donc »).
- S2.P3 : REDONDANT AVEC S1.P2 + S2.P2 — la mauvaise allocation de l'effort est déjà donnée par
  « c'est là que se concentre l'essentiel » (S1.P2) et par l'accessibilité des leviers faibles
  (S2.P2). N'ajoute que le sentiment subjectif d'avoir beaucoup agi pour rien.
- S3.P1 : il lit l'avertissement dans les mots de Meadows, avec la fin que la citation élide.
  Delta fort et parfaitement ancré (`quotation.text` verbatim, `notes[0]` pour la fin anglaise).
- S3.P2 : il distingue deux erreurs jusque-là confondues, se tromper de **lieu** et se tromper de
  **sens**. Delta fort. Fragilité lourde : l'observation attribuée à Forrester (dans une entreprise,
  tout le monde s'occupait déjà du point de levier et le poussait à l'envers) n'est portée par aucun
  élément de la matière autorisée, et « une observation qu'elle rapporte » est une attribution en
  chaîne, donc doublement exposée.
- S3.P3 : il apprend un obstacle supplémentaire, la non-croyance persistante après démonstration.
  Delta distinct mais mince, et sans appui dans la matière.
- S3.P4 : il reçoit une explication du renversement (un levier puissant commande une boucle ; une
  boucle produit dans le temps l'inverse de ce qu'elle semble faire dans l'instant). C'est le
  paragraphe le plus ambitieux et le plus exposé : la prémisse générale est énoncée sans réserve,
  comme une loi des systèmes, et elle est à la fois absente de la matière et trop forte telle quelle
  (toutes les boucles ne s'inversent pas dans le temps). De plus « boucle » n'a jamais été construit
  ailleurs qu'en passant dans l'énumération de S1.P3.
- S4.P1 : il apprend que la liste est un document de travail né d'une note jetée sur un paperboard,
  en neuf entrées, corrigée en douze, les deux versions restant visibles. Delta fort et bien placé :
  il change le statut de tout ce qui précède. Soutenu par `notes[1]` pour le paperboard, le neuf, le
  douze, la correction par l'autrice et la coexistence des deux versions. Non soutenu : « au milieu
  d'une réunion », « après discussion avec des collègues et des militants », « la présente elle-même
  comme un travail en cours ».
- S4.P2 : il comprend que le classement n'est pas une prescription et qu'agir en bas peut être
  légitime ; ce qu'il interdit, c'est la confusion des registres. Vraie nuance, correctement
  formulée comme conséquence.
- S4.P3 : il comprend que la liste ne localise pas les niveaux dans un ensemble donné, et que ce
  travail est ailleurs. Limite réellement utile, mais formulée deux fois de façon exposée : « elle ne
  dit pas comment » est un énoncé d'absence, et « Meadows est claire sur le fait que sa liste ne le
  remplace pas » attribue une position que la matière autorisée ne porte pas.
- S5.P1 : il reçoit un geste utilisable, situer une action proposée sur l'échelle pour calibrer ce
  qu'on peut en attendre. Delta opératoire, extension légitime mais non marquée comme telle.
- S5.P2 : delta faible et proche de S5.P1 — il passe de l'action unique à l'ensemble des mesures.
  La distinction existe (écart diagnostic/remède visible sans argumenter mesure par mesure), elle
  est mince.
- S5.P3 : REDONDANT AVEC S3.P2 — reprend le lieu/sens déjà établi et n'ajoute que l'injonction de
  formuler explicitement sa raison.
- S5.P4 : il obtient un usage social, nommer le niveau d'un débat pour le déplacer sans mettre
  personne en cause. Delta distinct, le plus vivant de la section, et bonne note de fin.

Paragraphes sans delta net : 0. Groupes redondants : 2 (S2.P3 ; S5.P3), plus S5.P2 en limite.

RÔLE DES SECTIONS

- S1 « Un classement, et non un catalogue » : installe l'objet (une échelle ordonnée, numérotée à
  l'envers) et le rend tenable par une image. Rôle juste, mais il fait porter à un paragraphe
  d'énumération non soutenue ce que l'image du paragraphe suivant suffirait à porter.
- S2 « Pourquoi les leviers forts restent inutilisés » : donne le mécanisme de l'ordre, puis
  retourne l'échelle en coût politique. C'est la section la plus utile du texte.
- S3 « L'avertissement qui accompagne la liste » : introduit le second versant du concept, l'usage
  à l'envers, et distingue lieu et direction. Rôle indispensable, exécution documentairement la
  plus risquée.
- S4 « Ce que la liste n'est pas » : requalifie le statut de l'objet (document de travail, pas
  recette, pas méthode de localisation). Bien placée : elle arrive quand le lecteur a de quoi être
  déçu.
- S5 « Ce que l'on gagne à s'en servir » : convertit en gestes. Trois « tests » dont un recycle
  S3 ; la section s'allonge plus qu'elle n'apprend, sauf son dernier paragraphe.

SCORES

- fidélité documentaire : 1/4 — S1.P3 énumère huit barreaux et un ordre que la matière autorisée
  ne porte pas ; S3.P2 attribue à Forrester, via Meadows, une observation absente de cette matière ;
  S3.P4 pose une loi générale sur les boucles sans appui et sans réserve ; S4.P1 ajoute réunion,
  collègues et militants ; S4.P3 et lead[1] sur-attribuent. Non 0 : rien ne contredit la fiche, les
  trois verbatims cités (« in increasing order of effectiveness », « Constants, parameters,
  numbers », « The power to transcend paradigms ») et la citation française sont exacts, les deux
  sources `metadata-only` ne sont jamais traitées comme du contenu, et `limits` reste interne et
  précis.
- progressivité pédagogique : 3/4 — la montée lead → ordre → mécanisme → avertissement → statut →
  usage est réelle et chaque section repose sur la précédente ; deux défauts d'ordre seulement,
  l'énumération de S1.P3 avant l'image de S1.P4 qui la rendrait tenable, et « boucle » mobilisé en
  force par S3.P4 alors qu'il n'a été que cité au passage.
- densité / non-redondance : 3/4 — la grande majorité des paragraphes a un delta propre (S1.P1,
  S2.P1, S2.P2, S3.P1, S3.P2, S4.P1, S5.P4 sont tous distincts) ; S2.P3 et S5.P3 répètent, S5.P2
  effleure. Le texte est au plancher de volume (1291 mots) sans être délayé.
- clarté : 3/4 — lead[0] et S1.P4 sont exemplaires de vocabulaire courant, l'inversion de la
  numérotation est expliquée au moment où elle peut tromper ; seule S3.P4 exige une notion de boucle
  que le texte n'a pas construite, et son « une boucle produit dans le temps l'inverse de ce qu'elle
  semble faire dans l'instant » est plus opaque qu'éclairant à cet endroit.
- profondeur explicative : 3/4 — S2.P1 et S2.P2 expliquent vraiment (position dans une chaîne
  causale, superposition puissance/coût) au lieu de nommer, et S4.P1 explique le statut de l'objet ;
  mais la profondeur maximale, S3.P4, est achetée hors de la matière disponible, donc elle ne compte
  pas à plein.
- valeur des exemples : 2/4 — la baignoire de S1.P4 fait comprendre l'échelle et c'est le seul
  exemple qui travaille ; aucun exemple n'illustre jamais un levier fort, et la matière offrait un
  cas concret et citable, resté inutilisé (dette publique, p. 5-6). Les trois « tests » de S5 sont
  des procédures, pas des exemples.
- limites / nuances : 3/4 — S4 arrive au bon endroit et évite trois contresens réels (ce n'est pas
  une méthode, pas une hiérarchie à appliquer, pas un outil de localisation), et S3.P1 est une
  nuance placée exactement où elle empêche de croire qu'il suffit de trouver le bon point ; en
  revanche le lecteur ressort avec une échelle présentée comme arrêtée, sans qu'on lui dise jamais
  qu'elle est une proposition d'autrice et non un résultat éprouvé, alors que `limits[2]` le sait et
  que `notes[1]` l'autorise par la double version.
- pouvoir d'ouverture : 2/4 — S5.P4 évite la conclusion répétitive et laisse une prise réelle,
  mais le texte se referme sur de la technique d'usage : rien n'indique au lecteur ce que le rapport
  lui-même contient encore (plusieurs pages par niveau, exemples, exceptions), et la tension la plus
  ouvrante de la matière (une liste que son autrice a corrigée de neuf à douze et dont les deux
  états restent lisibles) est consommée comme anecdote au lieu de servir de sortie.

défauts majeurs :

- S1.P3 est un paragraphe porteur dont l'essentiel n'est pas autorisé par la matière disponible.
  Ce n'est pas un problème de prudence rhétorique : huit désignations de barreaux et leur ordre
  n'existent nulle part dans `quotation`, `summary`, `notes`, `review` ou les objets `sources`. Le
  rapport est bien déclaré `full-text`, mais un accès déclaré n'est pas un contenu reproduit.
- S3.P2 et S3.P3 font reposer la distinction lieu/direction, qui est le cœur du second versant du
  concept, sur deux affirmations sans appui dans la matière, dont une attribution en chaîne à
  Forrester.
- S3.P4 énonce comme une propriété générale des boucles ce qui est au mieux une hypothèse du
  rédacteur, sans marquage de statut, et s'appuie sur un terme non construit.
- Deux redondances : S2.P3 sur S1.P2 + S2.P2, S5.P3 sur S3.P2.
- S5 pèse quatre paragraphes pour environ un delta et demi et déséquilibre la fin du texte au
  détriment de l'ouverture.

matière disponible mais sous-exploitée :

- `notes[4]`, p. 5-6 : la dette publique décrite comme « a negative bathtub, a money hole » et les
  paramètres budgétaires comme « adjustments to faucets ». C'est le seul exemple concret, verbatim
  et citable de toute la matière, et il tombe pile là où S1.P2 avance sans preuve que le débat se
  concentre en bas de l'échelle. Deux citations courtes remplaceraient une généralisation non
  soutenue par un cas observable.
- `notes[1]` : « une première liste, de neuf entrées, figure p. 2 […] et elle la corrige elle-même
  deux pages plus loin ». S4.P1 l'utilise en passant ; c'est pourtant la meilleure matière du
  dossier sur le statut épistémique de l'échelle, et elle autorise à dire au lecteur que l'ordre est
  une proposition retravaillée, pas un résultat mesuré.
- `notes[0]` : l'élision de la citation et sa fin restituée. S3.P1 s'en sert bien ; c'est le modèle
  de ce que le reste du texte devrait faire, citer court et exact plutôt que paraphraser large.
- `notes[2]` : l'existence d'une version antérieure et plus courte dans Whole Earth, hiver 1997.
  Utilisée dans `limits[0]`, elle peut servir au lecteur dans le registre autorisé par PROTOCOLE.md
  §1 (ce que ce numéro détient, et qu'il reste à lire).

limites documentaires :

- Aucun dossier de preuve. La carte ne peut donc rien enseigner du rapport au-delà de ce que la
  fiche en reproduit : deux extrémités de liste, le compte de douze, le sens de l'ordre, trois
  barreaux par l'image de plomberie, deux verbatims p. 5-6, la citation p. 2 et sa fin, la genèse
  neuf→douze p. 2-3. C'est peu pour un concept dont le nom promet douze niveaux, et c'est la cause
  réelle des dépassements relevés : le texte a voulu enseigner l'échelle entière avec une matière
  qui n'en donne que la forme.
- Si l'on veut conserver l'énumération, ce n'est pas au rédacteur de l'écrire mieux : il faut
  constituer `corpus/evidence/points-de-levier/` avec la lecture de la p. 3 du rapport. C'est un
  geste de la couche carte, hors mandat d'une réécriture d'approfondissement.
- Je ne prescris nulle part de conclure que Meadows « ne dit pas » comment localiser les niveaux,
  ni qu'elle « ne prétend pas » valider sa liste : `limits[2]` le porte comme frontière interne, la
  matière ne l'établit pas comme énoncé de l'autrice, et une absence dans la fiche n'est pas une
  absence dans le rapport.
- Réserve de contexte, non motif de dégradation : `review.notes[0]` déclare que le contrôle du
  22 août 2026 n'a pas été aveugle, la rédaction et la relecture ayant eu lieu dans la même session.
  Les verbatims de `notes` restent la meilleure preuve disponible ; simplement, cette fiche n'a pas
  reçu de second regard indépendant, ce qui rend d'autant plus coûteux d'aller au-delà d'elle.
- Abson et al. 2017 et Fischer & Riechers 2019 sont `metadata-only` : aucune phrase sur la
  postérité du concept, son usage en sciences de la durabilité ou la discussion de l'ordre n'est
  disponible pour le texte lecteur. Toute ouverture doit donc passer par le rapport primaire, pas
  par la réception.

TRAJECTOIRE CIBLE

Cinq sections, volume cible inchangé (le texte doit rester vers 1 300-1 400 mots : il ne s'agit pas
de raccourcir mais de redistribuer). Le lead se conserve presque tel quel.

- lead. Entrée : rien. Nouveau : la question « où appuyer » et l'inégalité de portée des gestes,
  puis Meadows, sa formation auprès de Forrester, une liste ordonnée de douze endroits, et le fait
  qu'un avertissement l'accompagne. Matière : `attribution_note`, `summary`. Ne pas répéter : garder
  lead[0] tel quel, il fonctionne. Retirer de lead[1] la vie passée à observer et la réception
  (« l'un des textes les plus repris »), que rien n'autorise ; « son avertissement compte autant
  qu'elle » suffit à créer l'attente.

- S1. Entrée : le lecteur sait qu'il existe douze endroits ordonnés. Nouveau : que l'ordre est le
  contenu réel de la liste, dans quel sens il va, et comment une seule image le rend tenable de bout
  en bout. Matière : `notes[3]` (« in increasing order of effectiveness », 12 = plus faible),
  `notes[1]` (les deux extrémités verbatim), `notes[4]` (robinet, niveau de baignoire, vanne, et le
  fait que l'image file toute l'échelle). Geste principal : **supprimer l'énumération des barreaux
  intermédiaires** et faire porter l'échelle par ses deux extrémités nommées plus l'image, qui est
  précisément ce que la matière documente. Restituer « vanne » à la place de « bouchon ». Ne pas
  répéter : la définition de l'échelle est acquise dès le lead, cette section n'a pas à la redire,
  elle doit installer le sens de l'ordre.

- S2. Entrée : le lecteur voit une échelle et sait qu'elle monte en puissance. Nouveau : pourquoi
  elle monte (agir sur un réglage, sur ce qui décide du réglage, sur ce que l'ensemble cherche :
  chaque cran agit plus tôt et se propage davantage), et que la même échéance lue à l'envers classe
  par coût politique. Matière : les deux extrémités de `notes[1]`, le sens de l'ordre de `notes[3]`,
  et le cas de `notes[4]` p. 5-6 : la dette publique en « negative bathtub, a money hole », les
  paramètres budgétaires en « adjustments to faucets ». C'est ce couple de citations qui doit
  remplacer l'affirmation actuelle sur « l'essentiel du débat public », et il la remplace
  avantageusement : un cas nommé vaut mieux qu'une statistique implicite. Conserver S2.P1 et S2.P2,
  en reformulant la chaîne causale sur les seuls crans que la matière nomme. Ne pas répéter : ne pas
  refaire de S2.P3 un troisième énoncé de la mauvaise allocation de l'effort ; une phrase de S2.P2
  suffit, et le cas de la dette la rend sensible.

- S3. Entrée : le lecteur sait où sont les leviers forts et pourquoi on ne les touche pas.
  Nouveau : que trouver le bon endroit ne règle que la moitié du problème, parce que le sens dans
  lequel on pousse peut être faux, et que l'autrice le dit dans ces termes. Matière : `quotation`
  (verbatim français), `notes[0]` (la fin élidée, « systematically worsening whatever problems we
  are trying to solve »), `locator: p. 2`. Geste principal : retirer l'anecdote Forrester et la
  phrase sur la non-croyance, ou les réduire à ce que la citation elle-même autorise, c'est-à-dire
  l'usage à l'envers et l'aggravation systématique. Si une explication du renversement est
  conservée, elle doit être marquée comme lecture (« on peut comprendre cela comme ») et ne pas
  s'énoncer en loi générale sur les boucles ; sinon, la supprimer et laisser la citation faire le
  travail, qui est considérable : « intuitivement à l'envers » plus « systematically worsening » dit
  déjà le lieu trouvé et la direction manquée. Ne pas répéter : ne pas redonner l'échelle.

- S4. Entrée : le lecteur a une échelle, son mécanisme et son piège. Nouveau : le statut de l'objet
  qu'il vient d'apprendre. Neuf entrées écrites sur un paperboard, reprises en douze, les deux
  versions coexistant dans le même texte, l'autrice se corrigeant elle-même deux pages plus loin :
  l'échelle est une proposition retravaillée, pas un résultat mesuré, et c'est pour cela que le
  lecteur peut s'en servir sans la vénérer. Matière : `notes[1]`, seul et suffisant. Retirer la
  réunion, les collègues et les militants, le « travail en cours ». Conserver la nuance de S4.P2
  (agir en bas peut être la seule action possible ; ce qui est interdit est de confondre ce geste
  avec un changement de trajectoire), qui est une vraie limite bien placée. Supprimer ou refondre
  S4.P3 : ne pas écrire que Meadows « est claire » sur ce point, ne pas fonder la limite sur une
  absence ; la même idée se dit du côté du lecteur et devient une raison d'aller au texte, puisque
  chaque niveau y occupe ses pages avec ses exemples et ses exceptions. Ne pas répéter : ce n'est pas
  une section de précautions, c'est une section sur ce qu'est l'objet.

- S5. Entrée : le lecteur sait à quoi l'échelle sert et ce qu'elle ne garantit pas. Nouveau : deux
  gestes, pas trois. Situer une action pour calibrer ce qu'on peut en attendre, et nommer le niveau
  auquel une discussion se tient pour la déplacer sans mettre personne en cause. Matière : extension
  légitime au sens de PROTOCOLE.md §4, à condition de rester du côté du raisonnement et non de
  l'attribution. Supprimer le « test de direction » (déjà dit en S3) et fondre le test de proportion
  dans le test de position. La section doit finir en ouvrant : le rapport de décembre 1999 contient
  plusieurs pages par niveau, avec les cas où chacun ne s'applique pas, et la version courte parue
  dans Whole Earth à l'hiver 1997 garde son état antérieur de la liste. Ce sont deux lectures à
  faire, pas deux manques. Ne pas répéter : aucun résumé de l'échelle, aucune reprise de
  l'avertissement.

raison du verdict : REVISE et non PASS, parce que l'axe A porte des dépassements visibles sur des
paragraphes porteurs (S1.P3, S3.P2, S3.P3, S3.P4, et des sur-attributions dans lead[1], S4.P1,
S4.P3), ce qui exclut `PASS` indépendamment du reste. REVISE et non REWRITE, parce que
l'architecture est saine et explicable section par section, que la progression lead → ordre →
mécanisme → avertissement → statut → usage est réelle, et que les défauts se corrigent par
suppression, réancrage sur `notes[1]` et `notes[4]`, et transfert des deux verbatims p. 5-6 dans le
raisonnement : il n'y a ni redondance systémique (deux groupes seulement, aucun paragraphe sans
delta) ni ordre arbitraire. REVISE et non BLOCKED_SOURCE, parce que la matière autorisée, quoique
pauvre en barreaux, permet encore un texte réellement instructif : le sens de l'ordre et son
contre-intuitivité, les deux extrémités nommées, l'image de plomberie filée, le cas de la dette
publique en deux verbatims, la citation p. 2 avec sa fin restituée, et une genèse en deux versions
qui change le statut de l'objet. Ce qui est bloqué n'est pas le concept, c'est la résolution :
enseigner les douze niveaux un par un exigerait un dossier de preuve que cette carte n'a pas, et
constituer ce dossier n'est pas un geste de réécriture.
