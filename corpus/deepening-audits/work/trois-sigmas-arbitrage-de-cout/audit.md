concept : trois-sigmas-arbitrage-de-cout
verdict : REVISE

protocole : AUDIT_PROTOCOL.md version 3 — audit pédagogique, sans recherche web.

MATIÈRE DISPONIBLE (constat établi par listage du répertoire)

`corpus/evidence/trois-sigmas-arbitrage-de-cout/` **n'existe pas** (vérifié : `ls corpus/evidence/`
liste 127 dossiers, aucun pour ce concept). La matière documentaire est donc entièrement contenue
dans `corpus/validated/trois-sigmas-arbitrage-de-cout.json` : `quotation` (fr + `original_text` +
note de traduction interne), `summary`, `attribution_note`, treize `notes`, sept notes de `review`,
et deux objets `sources` dont un seul est `consulted: full-text` (Van Nostrand 1931, LCCN 31032090,
locator p. 276-277) ; le second, la réimpression ASQC 1980 (ISBN 978-0-87389-076-2), est
`metadata-only`.

Conséquence pour l'axe A : toute vérification faite ici est interne à l'enregistrement. Les six
passages cités en anglais résolvent bien, mot pour mot, sur `notes` et `review` (contrôle
mécanique passé : « 1 approfondissement contrôlé, 1443 mots »), mais je ne peux pas les confronter
à un dossier de preuve, seulement à la transcription que le contrôle aveugle du 25 août 2026 dit
avoir relue sur l'image de page. L'axe A ne peut donc pas atteindre 4 sur cette carte, et un 4
n'aurait de toute façon pas dispensé du gate.

Volume : texte lecteur 1252 mots, `limits` 191 mots. Le contrôle passe (1443 mots comptés). Le
texte lecteur seul est au bas de la fourchette de PROTOCOLE.md §5 ; ce n'est pas un défaut en soi,
c'est une marge disponible pour les ajouts prescrits plus bas sans dépasser la cible.

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur comprend qu'une ligne doit être tracée quelque part sur une mesure qui
  varie, et surtout que les deux façons de se tromper ne se paient pas dans la même monnaie
  (heures perdues d'un côté, pièces mauvaises de l'autre). Delta net, en mots courants, sans
  vocabulaire spécialisé : c'est la meilleure page du texte.
- lead[1] : il sait où se trouve la réponse (deux pages, 276 et 277, d'un livre de 1931 signé du
  seul Shewhart, du personnel technique des Bell Telephone Laboratories) et qu'elle n'a pas la
  forme d'une démonstration ; il apprend que deux mots italiques, `empirical` et `economic`,
  portent l'argument. Delta réel. Réserve pédagogique : ce paragraphe annonce la forme de la
  réponse sans jamais dire ce qu'elle est. Le lecteur sort du `lead` sans savoir que la réponse est
  « trois », sur une carte intitulée « Trois sigmas, un arbitrage de coût ».
- S1.P1 : il lit la phrase de Shewhart elle-même (verbatim de la p. 276 sur la balance) et apprend
  que l'arbitrage est posé par l'auteur, non reconstruit après lui. Delta d'attribution, faible
  mais réel. Partiellement REDONDANT AVEC lead[0] : la substance (deux erreurs, deux coûts) était
  déjà acquise ; ce qui s'ajoute est que la phrase existe, et où.
- S1.P2 : il comprend le mécanisme, et c'est le cœur du texte : P est la probabilité qu'un point
  tombe à l'intérieur ; l'augmenter, c'est écarter les limites ; une seule commande produit deux
  effets contraires, donc aucun réglage n'améliore les deux à la fois. Delta fort.
- S1.P3 : il en tire la conséquence (aucune largeur n'est bonne en soi) et voit deux ateliers
  hypothétiques où le même écart ne mérite pas la même réaction. Delta de conséquence + exemple ;
  l'exemple concrétise, mais n'ajoute aucune distinction que la première phrase du paragraphe
  n'énonçait déjà.
- S2.P1 : il comprend pourquoi la voie du calcul est fermée : il faudrait connaître la loi de la
  grandeur suivie, et « we never know f(θ, n) in sufficient detail to set up such limits ». Delta
  fort, et c'est le prérequis de tout ce qui suit.
- S2.P2 : il lit la question et la réponse de Shewhart (« the basis for such limits must be, in
  the last analysis, empirical »). Delta : le verbatim. La remarque sur l'italique est
  REDONDANTE AVEC lead[1], qui avait déjà nommé `empirical` et `economic` comme les deux mots
  italiques porteurs de l'argument : l'information est servie deux fois, la seconde fois sans
  gain.
- S2.P3 : il peut désormais distinguer deux régimes de justification, et c'est une distinction
  qu'il ne pouvait pas faire avant : une limite déduite se conteste par une erreur de calcul, une
  limite empirique par son coût. Delta fort. Réserve : le paragraphe est un raisonnement de
  rédaction servi au régime par défaut, celui qui signale « ce que l'auteur affirme ».
- S3.P1 : il apprend un fait nouveau (l'inégalité P > 1 − 1/t² imprimée juste au-dessus, seul nom
  propre tiers de ces deux pages) et reçoit enfin ses deux unités : t comme multiple, sigma comme
  mesure de la dispersion ordinaire. Delta réel.
- S3.P2 : il comprend exactement ce que l'inégalité donne et ce qu'elle ne donne pas : aucune
  hypothèse de forme, donc utilisable là où la loi est inconnue ; mais vraie pour tout t, donc
  incapable de désigner une valeur, d'où « We are still faced with the choice of t ». Delta fort ;
  c'est l'articulation la plus réussie du texte.
- S3.P3 : il apprend la valeur retenue, t = 3, et que l'en-tête de la page dit « DETECTION OF LACK
  OF CONTROL ». Delta réel (la valeur arrive ici, pour la première fois du texte), mais la
  dernière phrase, « le seuil de détection est réglé sur ce qu'il en coûte de se tromper dans un
  sens ou dans l'autre, non sur ce qu'une loi de probabilité permettrait de garantir », est
  REDONDANTE AVEC S1.P2 et S2.P1 : c'est la troisième formulation de la même conclusion.
- S4.P1 : il peut éviter un contresens qu'il était en train de former : Shewhart n'oppose pas les
  limites à la probabilité, il en emploie (l'inégalité, P), et son arbitrage se joue entre deux
  probabilités d'erreur. Delta de distinction, réel, quoique assemblé de briques déjà posées.
- S4.P2 : il reçoit la formulation exacte à retenir, « économique et empirique, contre déductive »,
  et le raccourci à refuser, « économique et non probabiliste ». Delta réel (la formule juste est
  nommée) ; la voie déductive avait déjà été fermée en S2.P1, ce qui est neuf est le nom du
  raccourci fautif.
- S4.P3 : AUCUN DELTA. « Une probabilité ne suffit jamais à fixer un seuil : il y faut encore le
  prix des deux erreurs » est le résultat de S1.P2, déjà redit en S3.P3 ; « qui cite Shewhart pour
  refuser tout raisonnement probabiliste lui fait dire l'inverse » est S4.P1 à la voix active. Le
  paragraphe applique, il n'apprend pas.
- S5.P1 : il apprend un fait nouveau et utile : la justification par 0,27 % sous la loi normale
  circule dans les manuels, est couramment prêtée à Shewhart, et ne figure pas dans ces deux
  pages. Delta fort.
- S5.P2 : il comprend pourquoi cette justification ne peut pas être celle de Shewhart : elle exige
  la normalité que la phrase de la p. 276 vient d'écarter, et elle refait en déduction ce qui est
  posé comme choix d'expérience. Delta fort ; c'est ici que S2.P1 rend son plein rendement.
- S5.P3 : il comprend ce que l'écart change pour l'usage : adossée à la loi normale, la règle tombe
  avec la normalité ; adossée à l'expérience, elle survit à l'ignorance de la loi et reste
  révisable par la même voie. Delta fort, et bonne fin. Recoupement partiel avec S2.P3 sur « on
  conteste une limite empirique par son coût », mais l'ajout (robustesse conditionnelle) est réel.

Paragraphes sans delta net : 1 (S4.P3).
Groupes redondants : 4 — lead[0]/S1.P1 (substance de l'arbitrage) ; lead[1]/S2.P2 (les deux mots
italiques) ; S1.P2 → S3.P3 dernière phrase → S4.P3 (la conclusion « le coût, pas la loi », servie
trois fois) ; S2.P3/S5.P3 (la limite empirique se conteste par son coût).

RÔLE DES SECTIONS

- S1 « Deux façons de se tromper, et ce qu'elles coûtent » : ancre l'intuition du `lead` dans la
  phrase de Shewhart et transforme « deux erreurs » en mécanisme à une seule commande.
- S2 « Pourquoi la limite ne se déduit pas » : ferme la voie du calcul, et fait du mot `empirical`
  un changement de régime de justification plutôt qu'un aveu.
- S3 « Ce que l'inégalité de Tchebychev laisse ouvert » : montre ce que la mathématique borne sans
  choisir, et livre la valeur t = 3.
- S4 « Empirique ne veut pas dire sans probabilité » : désarme le contresens symétrique, celui qui
  ferait de Shewhart un adversaire de la probabilité.
- S5 « Les 0,27 % qu'on prête à Shewhart » : détache la règle de la justification qu'on lui prête
  et en tire les conséquences d'usage.

La progression est réelle et s'explique en une phrase par section ; aucune section n'a pour rôle
principal de répéter une section antérieure. Les deux faiblesses de trajectoire sont locales :
S4 empiète sur S2 (la voie déductive y est refermée une deuxième fois) et son troisième paragraphe
ne fait rien ; et surtout la valeur annoncée par le titre de la carte arrive en S3.P3, en
subordonnée, après que le lecteur a traversé les trois cinquièmes du texte. Un lecteur qui
s'arrête après S2, cas prévu par PROTOCOLE.md §2, a compris quelque chose de complet et d'utile
(l'arbitrage, et pourquoi il ne se calcule pas) mais il n'a pas rencontré « trois sigmas ».

Prérequis : rien n'est mobilisé avant d'être construit, à une exception mineure près. S2.P1 parle
de « la loi de la grandeur qu'on porte sur le graphique » alors qu'aucun graphique n'a été
introduit (le `lead` parle de mesures, S1.P2 d'« un point relevé »), et `notes[5]` dit que la
construction du graphique de contrôle n'a pas été instruite : le mot passe sans appui, mieux vaut
« la grandeur qu'on suit ».

SIGNAL DOCUMENTAIRE (pas le verdict factuel)

Ce qui est solide, et qu'il faut conserver :

- Les six passages cités résolvent verbatim sur l'enregistrement : la phrase de la balance
  (`notes[3]` et `review` PROSE), « we never know f(θ, n)… » et « How then shall we establish… »
  (`notes[2]`), « We are still faced with the choice of t » (`quotation.original_text`),
  « DETECTION OF LACK OF CONTROL » (`review` note 1), « économique et empirique, contre
  déductive » (`notes[0]`). La formule P > 1 − 1/t² est celle de `notes[12]`.
- L'attribution du `lead` (Shewhart seul, « Member of the Technical Staff, Bell Telephone
  Laboratories ») est portée par la note ATTRIBUTION du contrôle.
- L'italique de `empirical` et `economic` est portée par `notes[2]`.
- La source `metadata-only` (réimpression ASQC 1980) n'est jamais utilisée comme contenu : elle
  n'apparaît que dans `limits`, et sous la forme correcte (« vérifiera les siens en l'ouvrant »).
- **S5 respecte exactement la réserve de `notes[1]`.** Le texte lecteur écrit « il ne figure pas
  dans ces deux pages », et `limits[1]` écrit « introuvable sur ces deux pages, ce qui ne dit rien
  des cinq cents autres ». C'est le point où cette carte pouvait basculer dans l'erreur que
  `mesure-devenue-cible` porte dans ses propres notes, et elle ne bascule pas. Aucune prescription
  de cet audit ne doit l'y pousser.
- `limits` nomme chaque fois la source, l'état d'accès et l'affirmation interdite (partie VI non
  dépouillée ; 0,27 % hors champ ; mémorandum du 16 mai 1924 non lu ; absence d'édition française
  identifiée ; folios de la composition Van Nostrand). Le champ fait son travail de frontière
  interne et n'affleure nulle part dans le texte lecteur.
- L'exemple des deux ateliers s'ouvre par « Imaginons deux ateliers voisins » : sa nature
  hypothétique se lit dans sa première phrase, et les « trente personnes une demi-journée » ne
  peuvent pas se lire comme une donnée empirique.

Grandeurs numériques affichées au lecteur, contrôlées une par une, puisque c'est le risque propre
de ce concept : pages 276 et 277, 1931, New York (source `full-text`, locator) ; P > 1 − 1/t²
(`notes[12]`) ; t = 3 (`quotation`) ; 0,27 % (`notes[1]`, qui porte le chiffre comme la formule qui
circule) ; trente personnes et une demi-journée (hypothèse explicitement marquée). **Aucune
grandeur affichée n'est étrangère à la matière disponible.** C'est le point le plus exposé de la
carte et il tient.

Fragilités à porter au CLAIM MAP, dans l'ordre de gravité :

1. S5.P1, « Le calcul est juste ». Le chiffre 0,27 % est porté par `notes[1]`, mais comme
   *justification qui circule et qu'on prête à Shewhart*, pas comme résultat dont l'enregistrement
   certifie l'exactitude arithmétique. La phrase ajoute une validation que la matière ne fournit
   pas ; elle provient des connaissances générales du modèle, ce que PROTOCOLE.md §3 et
   AUDIT_PROTOCOL.md §6 interdisent d'introduire. Le geste juste n'est pas de supprimer le chiffre
   (il est documenté) mais de rendre au calcul son énonciateur : ce sont les manuels qui le
   calculent et qui en tirent un taux de fausses alertes acceptable.
2. S3.P2, « elle ne suppose aucune forme particulière de distribution ». C'est la charnière de la
   section, et l'enregistrement n'énonce que la moitié de la proposition : la note ATTRIBUTION
   établit que l'inégalité « borne sans fixer la valeur », rien sur son indépendance à la forme de
   la loi. La propriété est vraie du théorème nommé et sert ici d'explicitation, mais elle n'est
   soutenue par aucun support et le gate la verra ainsi. À vérifier ou à reformuler comme
   conséquence de ce que Shewhart en fait (il l'invoque précisément là où il vient de dire que la
   loi lui échappe), ce que la matière autorise.
3. S3.P1 présente P > 1 − 1/t² comme « une inégalité due à Tchebychev ». C'est fidèle à ce que
   Shewhart imprime, et `notes[12]` le dit expressément, mais la même note relève que l'énoncé
   usuel est large (≥) là où Shewhart écrit strict. Le lecteur reçoit donc comme « l'inégalité de
   Tchebychev » une forme que l'enregistrement signale comme divergente. `notes[12]` ajoutait « la
   fiche ne reproduit pas la formule et n'est donc pas en cause » : l'approfondissement, lui, la
   reproduit, et hérite donc de la nuance. Signal, pas faute.
4. S3.P3, « t = 3 semble une valeur économiquement acceptable ». La note de traduction de la
   `quotation` explique qu'« an acceptable economic value » a été rendu littéralement par « une
   valeur économique acceptable », « c'est bien de coût qu'il s'agit, et c'est tout l'argument ».
   « Économiquement acceptable » déplace l'adjectif du prédicat vers l'évaluation et perd
   exactement ce que la note protégeait.
5. S2.P3 et S5.P3 servent au régime par défaut, celui réservé à ce que l'auteur affirme, des
   raisonnements qui sont ceux de la rédaction (« on conteste la seconde en montrant qu'elle
   revient trop cher » ; « elle reste révisable par la même voie »). Ils sont bons et ils doivent
   rester ; leur statut de conséquence dérivée gagnerait à se lire, conformément au tableau de
   PROTOCOLE.md §4, sans pour autant se transformer en étiquetage.
6. Le glose française de S1.P1 rend la phrase de la balance sans son ressort (« by increasing the
   value P through reduction in the cost… »), ce que S1.P2 répare ensuite. Rien de faux, mais la
   traduction présentée juste après le verbatim en dit moins que lui.

Contradiction interne à l'enregistrement, que je signale sans la trancher : `notes[2]` écrit
« we never know f(θ, n) in sufficient detail », la note PROSE du contrôle, qui dit avoir lu
l'image de page, écrit « we never know fθ(θ, n) in sufficient detail ». L'approfondissement a
retenu la forme de `notes[2]`, que le contrôle mécanique des citations accepte. Je n'ai pas de
dossier de preuve pour arbitrer, et aucune prescription de cet audit ne dépend de cet arbitrage :
le point revient au gate, qui résoudra le support sur l'enregistrement.

SCORES

- fidélité documentaire : 3/4 — six verbatim qui résolvent tous, une source `metadata-only`
  correctement confinée à `limits`, un exemple hypothétique dont la nature se lit dès sa première
  phrase, et surtout un S5 qui scope l'absence du 0,27 % à « ces deux pages » là où la faute était
  facile. Trois réserves l'empêchent d'aller à 4 : « Le calcul est juste » (S5.P1) valide une
  arithmétique que l'enregistrement ne certifie pas, « elle ne suppose aucune forme particulière
  de distribution » (S3.P2) n'a pas d'appui, et aucun dossier de preuve n'existe pour cette carte,
  de sorte que toute vérification faite ici reste interne à l'enregistrement.
- progressivité pédagogique : 3/4 — la chaîne lead[0] → S1.P2 → S2.P1 → S3.P2 est exemplaire :
  chaque palier utilise la brique précédente et S5.P2 ne devient intelligible que grâce à S2.P1.
  Deux accrocs : la valeur t = 3, annoncée par le titre de la carte, n'arrive qu'en S3.P3 et en
  subordonnée, si bien qu'un lecteur arrêté après S2 n'a jamais rencontré « trois sigmas » ; et
  S4 referme en P2 une voie déductive déjà fermée en S2.P1.
- densité / non-redondance : 3/4 — quatorze paragraphes sur dix-sept portent un delta distinct,
  mais S4.P3 n'en porte aucun, la conclusion « le coût, pas la loi » est servie trois fois
  (S1.P2, dernière phrase de S3.P3, S4.P3), et la remarque sur les deux mots italiques est faite
  en lead[1] puis refaite en S2.P2.
- clarté : 4/4 — lead[0] pose le problème avec des mots d'atelier et sans un seul terme savant ;
  P, t et sigma sont chacun expliqués à l'endroit où ils apparaissent et jamais l'un par l'autre ;
  chaque citation anglaise est suivie de son sens en français. Réserve unique : « le graphique »
  en S2.P1 arrive sans avoir été introduit, et `notes[5]` rappelle que la construction du
  graphique de contrôle n'est pas instruite.
- profondeur explicative : 4/4 — le texte explique des mécanismes et pas une définition : une
  commande unique à deux effets opposés (S1.P2), l'impossibilité de déduire faute de connaître la
  loi (S2.P1), la différence entre borner et choisir (S3.P2), et la conséquence d'usage la plus
  fine du texte (S5.P3 : une règle adossée à l'expérience survit à l'ignorance de la loi).
- valeur des exemples : 3/4 — les deux ateliers de S1.P3 font voir que la même mesure n'appelle
  pas la même réaction selon qui paie, ce qu'un énoncé abstrait rendrait mal, et l'exemple est
  correctement marqué. Mais c'est le seul du texte, il illustre la phrase qui le précède plutôt
  qu'il n'ouvre une distinction, et rien ne montre jamais concrètement à quoi ressemble une dérive
  qu'on laisse passer.
- limites / nuances : 4/4 — les deux nuances décisives arrivent exactement là où elles empêchent
  un contresens, et non en fin de texte : S4 avant que le lecteur conclue que Shewhart récuse la
  probabilité, S5 avant qu'il croie la règle adossée à la loi normale. La portée de l'affirmation
  négative est bornée dans le texte lecteur lui-même (« dans ces deux pages »), ce qui est
  précisément ce que `notes[1]` exige.
- pouvoir d'ouverture : 3/4 — S5.P3 finit sur une tension réelle et révisable, pas sur un résumé
  ni sur une liste de précautions. Mais la fin ne donne au lecteur aucun objet nommé vers lequel
  aller : le mémorandum de 1924 et la sixième partie du livre, tous deux établis comme existants,
  restent enfermés dans `limits`.

défauts majeurs :
- S4.P3 ne produit aucun delta : il reformule S4.P1 à la voix active et re-conclut S1.P2.
- La conclusion centrale « le seuil se règle sur le coût, pas sur une loi » est énoncée trois fois
  (S1.P2, fin de S3.P3, S4.P3) sans gain à la deuxième ni à la troisième.
- La valeur qui donne son titre à la carte, trois sigmas, n'apparaît nulle part dans le `lead` et
  n'arrive qu'en S3.P3, en subordonnée ; la phrase même de Shewhart qui la pose, « Experience
  indicates that t = 3 seems to be an acceptable economic value » et sa traduction validée, n'est
  jamais donnée au lecteur, alors que le texte cite la phrase qui la précède immédiatement.
- « Le calcul est juste » (S5.P1) valide un résultat numérique au nom du rédacteur, là où la
  matière n'atteste que la circulation du chiffre.
- lead[1]/S2.P2 servent deux fois l'observation sur les mots italiques.

matière disponible mais sous-exploitée :
- La `quotation` elle-même, dans ses deux langues : « We are still faced with the choice of t.
  Experience indicates that t = 3 seems to be an acceptable economic value. » et « Il nous reste le
  choix de t. L'expérience indique que t = 3 semble être une valeur économique acceptable. » Le
  texte n'en cite que la première phrase. La seconde est la réponse du concept.
- La note ATTRIBUTION du contrôle établit que le choix de t = 3 est posé « d'abord dans le
  mémorandum du 16 mai 1924 à Bell Telephone Laboratories, puis argumenté ici ». Existence,
  date et institution sont établies ; le contenu ne l'est pas. C'est un fait daté, disponible, qui
  soutient directement la thèse du texte (la valeur vient de la pratique avant de venir du
  livre) et qui donne au lecteur un objet à aller lire. Il ne vit aujourd'hui que dans `limits`.
- `notes[12]` : la forme stricte de l'inégalité, que le texte imprime sans dire qu'elle s'écarte de
  l'énoncé usuel.
- La note de traduction de la `quotation`, qui explique pourquoi « valeur économique acceptable »
  est la bonne formule française et pourquoi « c'est tout l'argument » : un appui direct contre le
  glissement de S3.P3.
- `notes[3]` motive l'écartement de la longue citation de l'arbitrage pour raison de longueur
  (259 caractères, aucune coupe honnête possible sans détruire l'un des deux termes de la
  balance). L'approfondissement a bien fait de la donner en entier ; rien à corriger, mais cela
  confirme que S1.P1 est à sa place.

limites documentaires :
- Aucun dossier de preuve pour ce concept. Tout ce qui est vérifiable ici l'est contre
  l'enregistrement, qui est un résumé : l'axe A est un signal plus étroit qu'ailleurs, et le gate
  reste seul juge.
- Seules les pages 276 et 277 ont été ouvertes (`notes[5]`). La sixième partie du livre, qui
  revient sur le choix des limites, n'a pas été dépouillée : il est interdit d'écrire ce que
  Shewhart dit ailleurs du motif économique, dans un sens comme dans l'autre.
- **Interdiction explicite, et elle lie cet audit autant que la réécriture :** `notes[1]` dit que
  l'absence de la justification par 0,27 % est « une absence de trouvaille sur les p. 276-277, pas
  une démonstration d'absence dans l'ouvrage entier », et que « la fiche ne doit pas être
  "corrigée" dans ce sens ». Aucune ligne de la trajectoire cible ne prescrit de conclure que ce
  chiffre est absent du livre, ni que Shewhart n'a jamais adossé ses limites à la loi normale. La
  version actuelle respecte cette frontière ; la version révisée doit la respecter mot pour mot.
- Le mémorandum du 16 mai 1924 n'a pas été lu : son existence et sa date sont disponibles, son
  contenu non.
- La réimpression ASQC de 1980 est `metadata-only` : aucune phrase sur son contenu, et sa
  pagination n'est pas celle des folios cités.
- Aucune source secondaire, aucune réception francophone, aucune traduction française publiée
  (`notes[9]`, `notes[10]`) : ni postérité, ni usage normatif ultérieur de la règle des trois
  sigmas ne peuvent être racontés. Cela plafonne l'axe H, et c'est pourquoi la matière du
  mémorandum de 1924 devient la seule ouverture honnêtement disponible.
- Ces limites sont réelles mais l'enregistrement reste riche : verbatim multiples, en-tête de page,
  formule, attribution vérifiée page à page. `BLOCKED_SOURCE` n'est pas justifié.

TRAJECTOIRE CIBLE

Cinq sections, mêmes titres, même ordre : l'architecture est saine et ne se refait pas. Les
corrections sont locales, et le texte doit sortir plus dense, pas plus long.

- lead. Entrée : rien. Nouveau : le problème de la ligne à tracer et le fait que les deux erreurs
  se paient à deux guichets différents (lead[0] est à conserver tel quel, c'est le meilleur
  passage) ; puis, en lead[1], d'où vient la réponse et quelle est sa forme, mais cette fois en
  laissant entendre que cette réponse est un nombre, choisi et non calculé, celui-là même que la
  question du lecteur porte. Matière : `sources[0]` pour 1931, New York, p. 276-277 ; note
  ATTRIBUTION pour la page de titre ; `quotation` pour la valeur. Ne doit surtout pas répéter :
  rien à répéter, mais ne pas y déplacer l'observation sur les mots italiques, qui doit vivre à un
  seul endroit, en S2.P2, là où le mot `empirical` est cité.
- S1. Entrée : l'intuition des deux coûts. Nouveau : que Shewhart pose cet arbitrage lui-même dans
  une seule phrase, et que ces deux coûts se commandent par un seul réglage aux effets opposés,
  donc qu'aucun optimum ne les satisfait ensemble. Matière : le verbatim de `notes[3]` ; la
  probabilité P associée aux limites (`notes[0]`) ; l'exemple hypothétique des deux ateliers, à
  garder. Ne doit pas répéter : la description des deux erreurs déjà faite en lead[0] ; que S1.P1
  aille droit à la phrase et à ce qu'elle ajoute, et que sa traduction française n'escamote pas
  le « increasing the value P » que S1.P2 va exploiter.
- S2. Entrée : le mécanisme du compromis. Nouveau : pourquoi ce compromis ne peut pas être résolu
  par le calcul, et ce que change une justification empirique quant à la manière de contester la
  limite. Matière : les deux verbatim de `notes[2]`, italique compris, énoncé une seule fois ici.
  Ne doit pas répéter : l'observation sur `empirical` et `economic` si elle est restée dans
  lead[1] ; il faut choisir un seul emplacement, et c'est celui-ci.
- S3. Entrée : la voie déductive est fermée. Nouveau : ce que l'inégalité imprimée au-dessus
  apporte et ce qu'elle laisse ouvert, puis la résolution, par la phrase de Shewhart elle-même
  donnée au lecteur dans sa version française validée. C'est ici que « trois sigmas » doit devenir
  explicite et non subordonné. Matière : `notes[12]` pour la formule et sa forme stricte ;
  `quotation.original_text` et `quotation.text` ; la note de traduction pour « valeur économique
  acceptable » ; l'en-tête relevé par le contrôle. Ne doit pas répéter : la conclusion « le seuil
  se règle sur le coût et non sur une loi », déjà acquise en S1.P2 ; la dernière phrase actuelle
  de S3.P3 doit céder la place à la citation. Et l'indépendance de l'inégalité à la forme de la
  loi doit être soit adossée à ce que Shewhart en fait, soit énoncée comme la raison pour laquelle
  il l'invoque là, pas comme une propriété affirmée sans support.
- S4. Entrée : la valeur et sa raison. Nouveau : que la formule fidèle est « économique et
  empirique, contre déductive » et non « économique et non probabiliste », et pourquoi le
  raccourci renverse l'auteur. Deux paragraphes suffisent. Matière : `notes[0]`, dont la
  formulation entre guillemets est citable telle quelle. Ne doit pas répéter : la fermeture de la
  voie déductive, déjà faite en S2.P1 ; et S4.P3 disparaît, sa seule idée propre (ce qu'on peut en
  revanche faire dire à Shewhart) se logeant dans la fin de S4.P2.
- S5. Entrée : la règle, sa raison et la formule fidèle. Nouveau : que la justification la plus
  répandue de la règle n'est pas celle-là, qu'elle réintroduit l'hypothèse écartée, et que
  l'enjeu n'est pas académique puisque les deux justifications ne survivent pas aux mêmes
  conditions. Matière : `notes[1]` pour le chiffre, son attribution courante et son
  incompatibilité avec la normalité déclarée inconnue ; `notes[2]` pour l'appui. Le calcul doit
  être rendu à ceux qui le font, les manuels, et non validé par le texte. La portée reste « ces
  deux pages », sans exception. Ne doit pas répéter : la distinction déduit/empirique de S2.P3 ;
  S5.P3 doit tenir sur la robustesse conditionnelle, qui est neuve, et non sur « une limite
  empirique se conteste par son coût », qui ne l'est plus.
- Fin. Si l'ouverture doit gagner, elle le gagnera sur un fait établi et non sur un commentaire :
  la valeur t = 3 précède le livre de sept ans, elle est posée dans un mémorandum interne des Bell
  Telephone Laboratories daté du 16 mai 1924, et ce qu'il en dit exactement, il faudra l'ouvrir
  pour le savoir. Rien de plus sur son contenu.

raison du verdict : REVISE. L'architecture est bonne et la trajectoire d'ensemble est l'une des
plus tenues qu'on puisse tirer de deux pages : le mécanisme de S1.P2, la fermeture de S2.P1,
la distinction borner/choisir de S3.P2 et la conséquence d'usage de S5.P3 forment une vraie montée
en compréhension, et le texte franchit sans faux pas le piège documentaire propre à cette carte en
bornant l'absence du 0,27 % aux deux pages lues, comme `notes[1]` l'exige. Rien ici ne justifie
`REWRITE`, et la matière, quoique limitée à deux pages, est assez riche pour exclure
`BLOCKED_SOURCE`. Mais `PASS` demande qu'aucun défaut pédagogique majeur ne subsiste, et il en
reste trois : un paragraphe sans delta (S4.P3), une conclusion centrale servie trois fois, et la
valeur qui donne son titre au concept qui arrive en subordonnée au trois cinquièmes du texte alors
que la phrase de Shewhart qui la pose, traduite et vérifiée, n'est jamais donnée au lecteur.
S'y ajoute une fragilité documentaire à corriger sans réécriture profonde, « Le calcul est juste »,
qui valide au nom du rédacteur une arithmétique que la matière n'atteste pas. Ces quatre points
se traitent par resserrement et déplacement, à volume égal ou moindre.
