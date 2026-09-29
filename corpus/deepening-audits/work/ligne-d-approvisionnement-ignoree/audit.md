concept : ligne-d-approvisionnement-ignoree
verdict : REVISE

Périmètre lu : `corpus/deepenings/ligne-d-approvisionnement-ignoree.json`,
`corpus/validated/ligne-d-approvisionnement-ignoree.json` (dont `notes` et `review` en entier),
champ `dossier` = `corpus/evidence/ligne-d-approvisionnement-ignoree/lecture.json` (chemin
conventionnel, même répertoire que l'identifiant), répertoire
`corpus/evidence/ligne-d-approvisionnement-ignoree/` listé : un seul fichier, `lecture.json`
(33 Ko), lu intégralement. Pas de `scouting.json`. Aucun audit antérieur pour cette carte.
`npm run corpus:deepen -- --check --only=…` passe : 1 481 mots comptés par le script, dont
environ 1 257 mots de texte lecteur et 224 mots de `limits`.

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur comprend, sur une scène de restaurant, qu'une règle qui regarde l'écart
  visible et commande la différence se met à commander plusieurs fois le même manque dès qu'il y
  a un délai ; il sait aussi que la scène est de Sterman, en 1987. Delta fort, et c'est la bonne
  entrée : aucun terme savant, une situation observable, la conséquence absurde donnée d'emblée.
- lead[1] : il apprend que la même position vaut pour un magasin ou une usine avec des semaines
  au lieu de minutes, qu'il existe donc un intervalle pendant lequel ce qu'il faut existe déjà
  ailleurs, et que la question discriminante est de savoir si le décideur compte ce qui roule.
  Delta net : la généralisation structurelle plus la question qui organisera tout le texte.
- S1.P1 : il apprend que cette quantité a un nom et surtout une composition en trois endroits
  (courrier, carnet du fournisseur, expéditions). Delta fort : la composition est nouvelle et
  précise, et elle prépare l'argument suivant.
- S1.P2 : première moitié, delta réel — l'omission est facile parce que le stock se voit d'un
  seul coup d'oeil alors que ce qui roule n'est nulle part en un seul morceau. Seconde moitié
  (« une règle de décision qui compare le stock à sa cible et commande la différence… recommence
  le même calcul à chaque période ») : REDONDANT AVEC lead[0] — c'est le mécanisme du restaurant
  reformulé en vocabulaire abstrait, sans rien y ajouter.
- S1.P3 : il apprend que l'excès se déverse d'un coup, que les commandes s'arrêtent net et que le
  fournisseur en amont reçoit une demande plus variable que celle qu'a connue son client. Delta
  réel (la propagation le long de la chaîne), mais entièrement qualitatif : la matière chiffrée
  qui l'établit existe dans le dossier et n'est pas employée (voir plus bas).
- S2.P1 : il apprend que l'expérience se joue sur un plateau, et que le jeu de la bière n'est pas
  de Sterman mais du MIT, en usage depuis près de trois décennies quand il écrit. Delta double :
  le dispositif et la paternité.
- S2.P2 : il apprend comment la conclusion est obtenue — 44 joueurs, une règle de décision
  générale, des paramètres ajustés sur les commandes réellement passées plutôt que des joueurs
  interrogés. Delta fort et bien placé : c'est ce qui donnera son statut au chiffre de S3.
- S2.P3 : il apprend le résultat d'ensemble, la plupart des joueurs tiennent trop peu compte de
  ce qu'ils ont déjà commandé. Delta réel, paragraphe court et efficace.
- S3.P1 : il apprend qu'ignorer n'est pas un oui ou un non mais une fraction, et il obtient les
  deux bornes de cette fraction. Delta fort : c'est le passage le mieux construit du texte.
- S3.P2 : il apprend l'ordre de grandeur, 0,34 en moyenne, cinq joueurs sur quarante-quatre
  au-dessus des deux tiers, optimum simulé à 1. Delta fort.
- S3.P3 : il apprend que mieux prévoir ne corrigerait pas ce défaut, puisque le paramètre porte
  sur ses propres envois et non sur la demande future. Delta réel, et c'est le coeur de la carte,
  mais il est asserté en trois phrases alors que le dossier porte le mécanisme complet qui le
  rend intelligible (voir « matière sous-exploitée »).
- S4.P1 : il apprend qu'un cas réel du jeu à paramètre nul amplifie de 290 %, et ce que ce chiffre
  veut dire. Delta fort : la conséquence devient mesurée.
- S4.P2 : il apprend qu'un joueur qui compte sa ligne en entier reçoit un choc plus fort et le
  transmet plus faible, avec le mécanisme temporel (les commandes redescendent avant le maximum
  du retard accumulé, parce que le nécessaire est déjà en route). Delta fort. Réserve de densité :
  la seconde citation anglaise du paragraphe redit mot pour mot ce que la phrase française qui la
  précède vient d'énoncer (« Le facteur tombe à 85 % »), et n'ajoute aucun delta.
- S4.P3 : delta annoncé — l'amplification ne serait pas inscrite dans les délais ni dans la forme
  de la chaîne mais dans un nombre. Ce delta est en tension avec le dossier plutôt que soutenu
  par lui (voir défauts majeurs) : c'est la seule fragilité documentaire visible du texte lecteur.
- S5.P1 : il apprend que Sterman écarte lui-même la lecture « les gestionnaires oublient », et que
  l'oubli n'est que la borne basse du paramètre. Demi-delta : le paragraphe et le titre de section
  nomment l'agrégation comme la vraie explication, et ne disent jamais ce qu'elle est, alors que
  le dossier la donne en une ligne.
- S5.P2 : il apprend que l'hypothèse n'est pas tenue pour vérifiée par son auteur, et sur quoi
  exactement elle repose (44 joueurs, plus une ressemblance de forme avec la production
  industrielle américaine de 1947 à 1987). Delta fort, et c'est la meilleure nuance du texte.
- S5.P3 : il obtient la reformulation de l'acquis en termes de déplacement (d'un trait de
  caractère vers un terme absent d'un calcul). Delta faible : la « grandeur », la « manière de
  l'estimer sur des décisions plutôt que sur des déclarations » et les « deux cas opposés »
  reprennent respectivement S3.P1, S2.P2 et S4 ; seule la dernière proposition (« un trait de
  caractère se déplore, un terme absent s'ajoute ») est neuve, et elle est rhétorique plutôt
  qu'informative.

RÔLE DES SECTIONS

- S1 Ce qui est en route, et où cela se trouve : transforme l'intuition du lead en objet, en
  donnant à la quantité invisible sa composition et la raison de son invisibilité.
- S2 Un plateau de jeu, quarante-quatre joueurs : installe le dispositif et la méthode, et fait
  comprendre pourquoi le résultat n'est pas une anecdote sur des débutants.
- S3 Un nombre entre zéro et un : convertit le constat en grandeur mesurée et en ordre de
  grandeur, puis en tire la conséquence qui porte la citation de la carte.
- S4 Grizzly et Suds, deux issues du même choc : oppose deux cas du même jeu pour montrer que la
  valeur du paramètre change le régime du système, et non seulement son degré.
- S5 Non pas l'oubli, mais l'agrégation : ferme les deux contresens (l'oubli, la loi générale) et
  requalifie le résultat en hypothèse instrumentée.

Aucune section ne répète le `lead`, aucune ne refait le travail d'une autre, aucune séquence de
trois paragraphes ne porte le même delta, et la progression s'explique en une phrase par section.
L'architecture est saine ; c'est pourquoi le verdict n'est pas `REWRITE`.

Deux petits sauts de prérequis :

- S4.P1 introduit « L'usine Grizzly » alors que rien n'a dit que les joueurs sont groupés en
  équipes nommées, ni que chaque équipe comporte un poste « usine ». S2.P2 se contente de
  « chacun un maillon de la chaîne » quand le dossier donne les quatre rôles.
- S4.P2 fait travailler « le retard accumulé » (backlog) sans que le lecteur sache qu'une commande
  non servie s'accumule quelque part dans le jeu ; or S1.P1 mentionnait déjà « celles qu'il a
  reçues et n'a pas encore servies », ce qui aurait suffi à rattacher le terme.

Un point de continuité : le titre de la carte parle de ligne d'approvisionnement, le texte lecteur
n'emploie que « supply line » (une fois) puis « ce qui est en route ». Le choix est défendable,
et `limits` le motive ; mais rien ne dit au lecteur que les deux expressions désignent la même
chose, alors qu'il arrive par le titre français.

SCORES

- fidélité documentaire : 3/4 — la quasi-totalité des passages cités et chiffrés se retrouve
  mot pour mot dans `review.notes` ou dans `lecture.json` (composition de la ligne p. 16, bornes
  de β p. 17, 0,34 et 11 % p. 21, Grizzly 290 % p. 21, Suds 1,05 et 85 % p. 22, agrégation et
  vérification p. 25, corroboration 1947-1987 p. 23-24). Une fragilité visible : S4.P3
  (« L'amplification n'est pas inscrite dans la longueur des délais ni dans la forme de la
  chaîne ») va contre ce que le dossier attribue à Sterman p. 26. Deux divergences de pagination
  interne à signaler, pas à trancher (ci-dessous).
- progressivité pédagogique : 3/4 — la montée intuition → objet → méthode → mesure → cas
  contrastés → statut est réelle et chaque palier possède ses briques ; deux petits sauts (nom
  d'équipe en S4.P1, backlog en S4.P2) et une nuance essentielle, l'agrégation, arrivée en S5
  sans contenu.
- densité / non-redondance : 3/4 — quatorze paragraphes sur dix-sept portent un delta distinct ;
  la seconde moitié de S1.P2, la seconde citation de S4.P2 et l'essentiel de S5.P3 n'en portent
  pas. 1 257 mots de texte lecteur, sous la cible de 1 300, avec plusieurs mécanismes du dossier
  intouchés : le texte est resserré, mais il est surtout incomplet.
- clarté : 3/4 — l'entrée est exemplaire (lead[0] tient sans un mot de discipline), β est
  introduit exactement quand il sert et immédiatement borné. En revanche onze citations anglaises
  non traduites traversent le texte lecteur ; la plupart sont paraphrasées à côté, mais
  « the backlog of the subject's supplier (if any) » (S1.P1) et la seconde citation de S4.P2
  demandent au lecteur francophone de faire le travail lui-même.
- profondeur explicative : 2/4 — le texte explique bien deux mécanismes (l'invisibilité en trois
  endroits, S1.P1-P2 ; la redescente anticipée des commandes de Suds, S4.P2) et il explique
  remarquablement comment le résultat est obtenu (S2.P2). Mais sur son affirmation centrale,
  S3.P3, il s'arrête à l'énoncé : pourquoi une prévision parfaite ne sert à rien reste une
  assertion, alors que le dossier déroule la chaîne causale complète (les joueurs croient la
  demande oscillante, presque aucun n'incrimine ses propres décisions, cette attribution détourne
  l'effort du point de levier vers l'anticipation des chocs externes). Le texte s'arrête aussi
  avant le fait le plus contre-intuitif de l'expérience, que la demande du client ne bougeait
  pratiquement pas.
- valeur des exemples : 4/4 — le restaurant fait comprendre le mécanisme avant tout vocabulaire,
  et Grizzly contre Suds n'illustre pas une définition : ce couple établit que le même choc peut
  être atténué, ce qu'aucun énoncé général n'aurait fait saisir.
- limites / nuances : 3/4 — S5.P1 et S5.P2 sont deux nuances décisives, placées là où elles
  empêchent les deux contresens que le dossier redoute nommément, et elles agissent sur la
  compréhension. Deux réserves : l'agrégation est nommée sans être expliquée, et S4.P3, qui veut
  interdire d'y voir une fatalité, le fait avec un argument que le dossier ne fournit pas alors
  qu'il en fournit deux meilleurs.
- pouvoir d'ouverture : 2/4 — S5.P3 se termine sur une formule d'équilibre, pas sur une tension
  ni sur une raison précise d'aller lire quelque chose. Le dossier offre pourtant trois sorties
  franches : la question empirique laissée ouverte par Sterman p. 25, la phrase de la p. 26 qui
  déplace la cause vers la structure dans laquelle la règle est prise, et l'ouvrage de 2000 dont
  il faudra ouvrir les pages pour voir ce qu'il fait de la notion.

défauts majeurs :

- S4.P3 affirme que « L'amplification n'est pas inscrite dans la longueur des délais ni dans la
  forme de la chaîne : elle dépend d'un nombre ». Le dossier attribue à Sterman la proposition
  inverse de portée : `lecture.json` (`definition_de_lauteur`) porte, p. 26, « The same heuristic
  may produce stable behavior in one setting and oscillation in another solely as a function of
  the feedback structure in which that [rule is embedded] », et commente « ce qui déplace la cause
  de l'individu vers la structure ». La même pièce porte aussi p. 7 « A stock management heuristic
  which fails to measure and respond to the supply line of unfilled orders is predisposed to
  instability », qui fait dépendre l'instabilité de la règle et non du seul paramètre estimé. Le
  texte prend donc, pour refuser la fatalité, exactement l'argument que sa source refuse ; et il
  s'en prive d'un autre, disponible et fait pour cela, p. 7 : « Whether managers account for the
  supply line is an empirical question in any particular situation. »
- S5 promet l'agrégation dans son titre, l'énonce en citation et ne la livre pas. Le lecteur
  ressort en sachant que l'explication n'est pas l'oubli, sans savoir ce qu'elle est. Le dossier
  la donne : la ligne d'approvisionnement agrégée est répartie entre concurrents et mal connue de
  chacun (`notes[3]` de la fiche et `reserves` du dossier, p. 25, où Sterman ajoute que
  la vérification devra porter « not only on the decision processes of individual firms but also
  on the availability, timeliness, salience, and perceived accuracy of supply line information »).
  Un paragraphe de S5 suffirait, et il changerait ce que le lecteur emporte.
- S3.P3 laisse sans mécanisme l'affirmation qui est la citation même de la carte. C'est le seul
  endroit du texte où le manque de profondeur porte sur le point central.

matière disponible mais sous-exploitée :

- Le fait qui rend l'expérience contre-intuitive, et qui est absent en entier : la demande du
  client, seule perturbation externe, n'oscille pas et est pratiquement constante ; l'oscillation
  est produite par l'interaction des décisions des joueurs avec la structure de rétroaction du
  système (dossier, p. 15). Complété par ce que croient les joueurs, p. 22-23 : « Invariably the
  majority of subjects judge that customer demand was oscillatory », « Few ever suggest that their
  own decisions were the cause of the behavior they experienced », et la conséquence pratique,
  cette attribution « draws normative efforts away from the high leverage point in the system
  (the stock management policy) and towards efforts to anticipate and react to external shocks ».
  C'est la matière qui fonde S3.P3 et qui ouvrirait le texte.
- L'enjeu chiffré, absent : le coût moyen d'une équipe vaut dix fois le repère (p. 14). Et
  l'amplification le long de la chaîne, que S1.P3 énonce qualitativement : variance des commandes
  de l'usine 5,5 fois celle du détaillant, demande client de 4 à 8 caisses par semaine et pic
  moyen de 32 caisses à l'usine, facteur de 700 % ; période moyenne 21 semaines ; pic remontant de
  la semaine 16 chez le détaillant à la semaine 20 à l'usine (p. 15).
- La structure du problème, qui manque à S1 : le stock ne se contrôle pas directement, il ne
  s'influence que par ses flux, et il y a des délais entre l'action et son effet (extrait EOLSS,
  p. 3 du fichier, déclaré `partial` et lu en entier pour ces neuf pages). Avec les trois tâches
  du décideur, p. 4 du fichier : remplacer les pertes attendues, réduire l'écart au stock désiré,
  et entretenir une ligne d'approvisionnement adéquate.
- Les deux exemples voisins du restaurant, non employés : le clou p. 6, où la règle « teste,
  frappe, teste » suffit précisément parce qu'il n'y a ni perte ni délai, ce qui fait comprendre
  d'un coup pourquoi la troisième tâche est la difficile ; et la plaque électrique, dont la chaleur
  déjà dans les résistances continue de cuire après l'extinction, qui montre la même invisibilité
  du côté de la sortie.
- Les quatre rôles du jeu (détaillant, grossiste, distributeur, usine) et les onze équipes de
  quatre, qui coûtent une ligne et suppriment le saut de S4.P1.

limites documentaires :

- Le dossier existe et il est riche : un seul fichier, `lecture.json`, plus un bloc `review` de
  contrôle aveugle qui a rouvert la pièce lui-même. La fidélité du texte est donc réellement
  vérifiable ici, et non pas seulement non contredite.
- Divergence de pagination entre les deux couches, sur deux points que le texte affiche. (1)
  L'exemple du restaurant : `review.notes` (PROSE 3/3) le localise p. 9 avec le verbatim exact que
  lead[0] reprend, `lecture.json` le localise « p. 6 et 7 ». Le texte écrit « à la page 9 ». (2)
  La description du jeu : `review.notes` (ATTRIBUTION 2/2) la lit sur l'image de la p. 10 et écrit
  « (p. 10-11) », `lecture.json` et `notes[5]` de la fiche écrivent p. 13. Le texte écrit
  « (p. 10) ». Dans les deux cas le texte suit la couche `review`, qui est la plus tardive et la
  seule à déclarer une concordance folio/index vérifiée sur trois ancrages. Je signale la
  divergence, je ne la tranche pas : c'est au mapping et au gate de choisir l'appui, et une
  réécriture ne doit pas déplacer ces pages sur la seule foi de l'autre couche.
- `limits[0]` et `limits[1]` franchissent la frontière qu'elles sont censées tenir. Le dossier dit
  deux fois que l'extrait EOLSS est un composite autorisé de l'article de 1989 et de Business
  Dynamics, et que « rien dans ses neuf pages ne dit quelle phrase vient de laquelle », d'où la
  consigne de n'y localiser aucun verbatim. Or `limits[0]` attribue la variante « the larger the
  supply line must be » à « sa reprise ultérieure » puis renvoie aux pages 321 à 339 de l'article
  de 1989, qui est `metadata-only` et non ouvert : c'est précisément la localisation interdite. Le
  « mille huit pages » de `limits[1]` désigne par ailleurs Business Dynamics au milieu d'une phrase
  dont le sujet grammatical est l'extrait de neuf pages. Ces deux paragraphes sont internes et
  n'atteignent pas le lecteur, mais ils sont la frontière sur laquelle travailleront le mapper et
  le vérificateur, et ils la placent au mauvais endroit.
- `limits[2]` et `limits[3]` sont en règle et utiles : l'un nomme la source, son accès et
  l'affirmation qu'il interdit (Giard et Sali 2012, lue, ne cite pas Sterman, donc aucun usage
  francophone n'appuie « ligne d'approvisionnement ») ; l'autre nomme l'histoire du jeu parue en
  2024, que `review.notes` déclare ouverte et lue sur la copie OSTI. Rien d'inventé.
- Le volume de `limits` (224 mots) dépasse la fourchette annoncée de 100 à 200 mots du protocole
  de rédaction, sans que le contrôle automatique s'en saisisse.
- Aucune lacune de matière ne justifie ici un `BLOCKED_SOURCE` : tout ce qui manque au texte est
  dans le document de travail de 1987, déclaré `full-text` et corroboré par le dossier et par la
  relecture d'images du contrôle aveugle.

TRAJECTOIRE CIBLE

Conserver les cinq sections et leur ordre. Aucune n'est à supprimer, aucune n'est à déplacer. Les
gestes sont : deux resserrements, deux compléments de mécanisme, une réparation d'argument, une
sortie. La cible reste dans la fourchette de mots en récupérant la place sur les redondances
relevées.

- S1, le lecteur entre en sachant que ce qui est commandé et non reçu existe quelque part. Elle
  doit lui faire comprendre en plus pourquoi cette quantité est structurellement invisible et
  pourquoi un stock ne se pilote pas comme un objet qu'on tient en main : un stock ne s'influence
  que par ses flux, et il y a un délai entre l'action et son effet. Matière : la composition en
  trois endroits, p. 16, déjà présente ; la structure du problème et les trois tâches du décideur,
  extrait EOLSS p. 3 et 4 du fichier, `partial` lu en entier ; le clou de la p. 6, qui montre par
  contraste ce que « ni perte ni délai » change. Ne doit surtout pas redire, comme le fait
  aujourd'hui la seconde moitié de S1.P2, le mécanisme du restaurant en vocabulaire abstrait.
- S2, le lecteur entre en sachant ce qu'est la quantité invisible. Elle doit lui faire comprendre
  d'où vient le résultat et à quel prix : le plateau, les quatre rôles, les onze équipes, la règle
  ajustée sur les commandes plutôt que sur les déclarations, et le coût moyen d'une équipe à dix
  fois le repère. Matière : p. 10 pour le jeu et son origine au MIT, p. 13-14 pour l'échantillon et
  le coût, p. 17 à 20 pour l'estimation. Ne doit pas redire que la ligne est invisible.
- S3, le lecteur entre en sachant que la plupart des joueurs en tiennent trop peu compte. Elle
  doit lui faire comprendre que le défaut est une fraction, donner son ordre de grandeur, puis
  livrer le mécanisme qui rend vraie la phrase centrale : les joueurs ont jugé la demande du client
  oscillante alors qu'elle était pratiquement constante, presque aucun n'a incriminé ses propres
  décisions, et cette attribution détourne l'effort du point de levier vers l'anticipation des
  chocs externes. C'est de là, et non d'une assertion, que doit tomber « une meilleure prévision ne
  réglerait rien ». Matière : p. 15, p. 17, p. 20-21, p. 22-23. Ne doit pas se contenter de
  réaffirmer que le paramètre porte sur le présent et non sur l'avenir.
- S4, le lecteur entre en sachant qu'une fraction moyenne vaut 0,34 et qu'une prévision n'y change
  rien. Elle doit lui faire comprendre que la même règle, à deux valeurs différentes, produit deux
  régimes opposés, et que la conclusion à en tirer est celle du texte : que le décideur compte sa
  ligne est une question empirique, à trancher cas par cas, p. 7 ; et le même comportement peut
  être stable dans un cadre et oscillant dans un autre selon la structure de rétroaction où la
  règle est prise, p. 26. Matière : Grizzly p. 21, Suds p. 22, plus ces deux énoncés. Ne doit
  surtout pas conclure, comme S4.P3 aujourd'hui, que l'amplification ne tient ni aux délais ni à
  la forme de la chaîne : c'est la proposition que la p. 26 contredit. Ne doit pas non plus répéter
  en anglais le chiffre que sa phrase française vient de donner.
- S5, le lecteur entre en sachant que le paramètre décide du régime. Elle doit lui faire
  comprendre les deux contresens et, cette fois, livrer l'explication de rechange : le défaut ne
  porte pas sur un gestionnaire qui oublierait sa propre commande, mais sur une ligne
  d'approvisionnement agrégée, répartie entre concurrents, dont la disponibilité, la fraîcheur et
  la précision perçue de l'information sont elles-mêmes en cause. Puis le statut : hypothèse non
  vérifiée hors du laboratoire, 44 joueurs plus une concordance de forme avec la production
  américaine de 1947 à 1987. Elle doit se terminer sur la question que Sterman laisse ouverte ou
  sur ce qu'un ouvrage de 2000 ferait de la notion, et non sur une formule d'équilibre. Matière :
  p. 25 en entier, p. 23-24 et figure 6, et pour la sortie le libellé de Business Dynamics, qu'il
  faudra ouvrir. Ne doit pas redire ce que S3 a établi sur la fraction, ni ce que S2 a établi sur
  la méthode.

raison du verdict : l'architecture est saine, la trajectoire s'explique section par section,
aucune section n'en répète une autre et l'entrée en matière est de premier ordre ; ce n'est donc
pas une réécriture. Mais trois points interdisent `PASS`. S4.P3 tire, pour écarter la fatalité,
une conclusion que le dossier attribue en sens inverse à l'auteur (p. 26) alors qu'il fournit
l'argument juste (p. 7). S5 annonce l'agrégation dans son titre et ne l'explique jamais, alors
qu'une ligne du dossier la donne. Et l'affirmation centrale de la carte, en S3.P3, reste une
assertion quand le mécanisme qui la soutient (demande constante, oscillation endogène, attribution
externe des joueurs, effort détourné du point de levier) est entièrement disponible et
entièrement absent. À quoi s'ajoutent deux resserrements évidents, un texte lecteur sous la cible
de mots avec de la matière inemployée, et un champ `limits` qui localise une reformulation sur un
article `metadata-only` que le dossier interdit deux fois de localiser.
