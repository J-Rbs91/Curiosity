concept : simulation-activite-future
verdict : REVISE

Contexte documentaire vérifié avant l'audit :
- `corpus/validated/simulation-activite-future.json` ne déclare aucun champ `dossier` (le pack
  confirme `dossier_declare.statut = non-declare`) ; le répertoire ouvert est donc
  `corpus/evidence/simulation-activite-future/`, qui ne contient qu'un fichier, `lecture.json`,
  lu en entier. Pas de `scouting.json`.
- Le dossier existe et lit en texte intégral l'article de 2007 (HTML + PDF) et sa version
  anglaise ; il cite longuement l'article dans `definition_de_lauteur`
  (SUP-b8a10ceb0fde0e3c). C'est sur ce support que l'axe A est tranché, et c'est aussi le plus
  gros réservoir de matière non exploitée.
- Les références de 1990, 1992, 1994, 1995, 2004, 2005 et le manuel de 1991 n'ont jamais été
  ouverts (reserves[2], reserves[3], review.notes[6]) : rien ne peut être dit de leur contenu.
- Aucune contradiction entre `notes`/`review` de la fiche et le dossier sur les points que
  l'audit touche. L'absence de « activité future probable » dans le texte de 2007 n'est pas un
  argument d'absence fragile : elle est affirmée positivement par la fiche elle-même
  (`attribution_note`, `review.notes[5]`, `notes[0]`) après recherche plein texte sur le
  mot « probable » (trois occurrences relevées, toutes sans rapport — reserves[0]).

TRAJECTOIRE ACTUELLE
- lead[0] : le lecteur saisit le problème — il faut fixer des paramètres d'un poste avant que
  quiconque l'occupe, et on ne peut ni interroger ni observer une activité qui n'existe pas.
  Delta réel (mise en situation). Exemples hypothétiques non marqués comme tels, mais génériques.
- lead[1] : le lecteur apprend la réponse (construire une représentation de la situation
  future), le nom de Daniellou, ET les deux idées-maîtresses du texte : on ne peut pas savoir
  avec certitude ce que les gens feront ; on vérifie seulement qu'il existe « au moins une
  façon de s'en sortir ». Delta fort, mais il consomme d'avance S1 et S3. « pose cependant un
  avertissement avant toute chose » est une sur-affirmation (voir défauts).
- S1.P1 : REDONDANT AVEC lead[1] — la même mise en garde (on ne prévoit pas ce que les gens
  feront), cette fois en citation verbatim ; seul apport réel : les mots « en détail » via la
  citation, que le paragraphe ne fait pas travailler. La glose (« il y a toujours des
  ajustements, des raccourcis… ») est une extension non sourcée et plus forte que la source.
- S1.P2 : delta réel mais mince — la distinction « ne rien savoir » / « ne pas savoir le
  détail », qui ouvre sur « ce qu'ils pourront faire ». C'est le seul endroit où « en détail »
  est exploité ; il le fait sans dire que c'est précisément le mot qui porte la thèse.
- S2.P1 : delta réel — les décisions de conception ouvrent et ferment des pans entiers
  d'activité, avant tout usage (citation verbatim). Les exemples (hauteur de plan, cadence,
  centre d'appels) sont des reprises de lead[0], pas des distinctions nouvelles.
- S2.P2 : delta partiel — l'objet de la simulation = « les formes possibles de l'activité
  future » ; une configuration peut laisser plusieurs voies, une autre aucune. La dernière
  phrase (« l'éventail de ce que plusieurs personnes pourraient faire ») REDONDANT AVEC S1.P2.
- S3.P1 : REDONDANT AVEC lead[1] pour le noyau (« au moins une façon »), avec apport réel de
  la formule exacte du critère (« toutes les circonstances prévisibles », « mode opératoire
  acceptable ») et de « ni la meilleure, ni la plus probable ».
- S3.P2 : delta pédagogique réel (le critère retourne le regard : on cherche les circonstances
  où le plan casse), mais porté par trois circonstances inventées (commande urgente + incident,
  remplacement au pied levé, pièce dans le mauvais sens) non marquées comme hypothétiques, et
  par une conséquence (« la conception doit changer ») que la source n'énonce pas en ces termes.
- S4.P1 : delta réel — les scénarios viennent de l'analyse de situations existantes
  comparables, pas de l'imagination. Bien sourcé (notes[4], SUP-b8a10ceb0fde0e3c), mais omet
  ce que la source donne comme raison : ces situations « comportent certaines des sources de
  variabilité qui existeront dans le futur système ».
- S4.P2 : delta partiel — contraste avec un essai « à vue ». L'idée est défendable comme
  conséquence, mais n'est pas marquée comme telle, et la source porte une version beaucoup plus
  forte et attribuable (la critique des outils de modélisation qui ne prennent en compte que
  « la représentation qu'en ont les concepteurs ») que le texte n'utilise pas.
- S5.P1 : delta réel pour la question d'attribution (l'article ne revendique pas la démarche,
  renvoie à des travaux cosignés). « explicitement » est trop fort : il renvoie par des
  références, il ne dit pas que la pratique est collective.
- S5.P2 : AUCUN DELTA — répète S5.P1 (« pas d'auteur unique ») et ajoute une conclusion
  (« elle n'a pas d'auteur unique ») plus affirmative que ce que la fiche établit (« sans qu'on
  puisse établir qui a formulé quoi »).
- S6.P1 : delta réel — le mot « simulation » a un autre usage (la formation) que Daniellou
  écarte. Incomplet : la source distingue trois usages, pas deux (le deuxième, l'analyse des
  processus cognitifs dans des situations difficiles à provoquer, est passé sous silence).
- S6.P2 : REDONDANT AVEC S6.P1, et fragilisé par la source : il affirme que la simulation de
  conception ne promet pas de « préparer quelqu'un à un poste », alors que Daniellou dit
  précisément qu'elle a cet effet en sus (genèse instrumentale : les participants font preuve
  au démarrage « d'une maîtrise du nouveau système bien supérieure à celle de leurs
  collègues » — SUP-b8a10ceb0fde0e3c). Le texte se termine sur une distinction que l'auteur
  lui-même nuance.

RÔLE DES SECTIONS
- S1 Ce qui échappe à la prévision : redire l'impossibilité de prévoir, puis la ramener au
  « détail ». Rôle à moitié occupé par lead[1].
- S2 Des choix qui ouvrent ou ferment l'avenir : le mécanisme positif — la conception
  détermine l'espace des possibles. Section la plus utile.
- S3 Vérifier qu'il existe au moins une façon de s'en sortir : le critère de la simulation.
  Noyau déjà donné par lead[1].
- S4 Des scénarios pris dans le travail existant : d'où viennent les circonstances testées.
  Section utile, sous-alimentée.
- S5 Une démarche mise au point à plusieurs : attribution. Pédagogiquement marginale ; un
  paragraphe sur deux est vide.
- S6 Simuler pour concevoir, simuler pour former : désambiguïsation, incomplète et conclue sur
  une opposition que la source relativise.

Progression : S1 → S2 → S3 → S4 est une montée correcte (limite → mécanisme → critère →
méthode). S5 et S6 retombent dans le méta et la désambiguïsation ; le texte ne gagne plus en
connaissance après S4. Le lead a préempté S1 et S3.

SCORES
- fidélité documentaire : 2/4 — pas d'invention majeure ni de source `metadata-only` utilisée,
  citations verbatim exactes (S1.P1, S2.P1, S2.P2, S3.P1 vérifiées contre review.notes[1] et
  [4]) ; mais plusieurs sur-affirmations : « avant toute chose » (lead[1]) et « pose ce point
  avant tout le reste » (S1.P1) alors que le passage est au § 25, section 2.2 (review.notes[1]),
  après la typologie et la critique des outils ; « ne recouvre jamais exactement… il y a
  toujours des ajustements » (S1.P1) plus fort que « Il est possible que les utilisateurs
  réels inventent des stratégies qui n'ont pas été prévues » (SUP-b8a10ceb0fde0e3c) ;
  « explicitement » (S5.P1) ; « elle n'a pas d'auteur unique » (S5.P2) ; S6.P2 contredit
  l'effet de genèse instrumentale rapporté par la source ; circonstances inventées de S3.P2
  non marquées comme hypothétiques.
- progressivité pédagogique : 2/4 — S1→S4 montent bien, mais lead[1] livre d'avance les
  conclusions de S1 et S3, et S5/S6 n'ouvrent aucun niveau supplémentaire.
- densité / non-redondance : 2/4 — S1.P1 ≈ lead[1] ; S3.P1 ≈ lead[1] pour le noyau ; S2.P2 fin
  ≈ S1.P2 ; S5.P2 sans delta ; S6.P2 ≈ S6.P1. Environ un tiers du texte lecteur reformule.
- clarté : 4/4 — langue courante, aucun terme savant non expliqué, la situation de lead[0] est
  immédiatement lisible.
- profondeur explicative : 2/4 — le « pourquoi » de la thèse (pourquoi des outils de
  modélisation sophistiqués ne suffisent pas, pourquoi les situations de référence comptent :
  la variabilité) est absent alors que la source le donne ; le lecteur repart surtout avec le
  critère « au moins un mode opératoire acceptable » répété trois fois.
- valeur des exemples : 1/4 — tous les exemples sont inventés (ligne de montage, centre
  d'appels, commande urgente…), recyclés de lead[0] à S2.P1, et l'exemple de l'auteur lui-même
  (la patiente dans le hall du futur hôpital, SUP-b8a10ceb0fde0e3c) n'est pas utilisé.
- limites / nuances : 2/4 — la nuance « en détail » est présente (S1.P2) mais pas mise en
  relief ; la nuance la plus forte du dossier (la version anglaise publiée qui laisse tomber
  « en détail » et durcit la thèse) est absente ; S6.P2 pose une opposition que la source
  nuance.
- pouvoir d'ouverture : 1/4 — le texte se termine sur une précaution répétée (S6.P2) ; S5.P2
  ouvre vers « il faudra les lire » mais sans dire ce qu'on y chercherait. La tension
  « possible / probable » (2007 vs chapitre cosigné de 2013) et la thèse finale de l'article
  sur l'ergonomie comme pratique, deux vraies ouvertures sourcées, ne sont pas utilisées.

défauts majeurs :
- Redondance systémique autour d'un seul noyau : « on ne prévoit pas en détail / on vérifie
  qu'il existe au moins une voie acceptable » est dit en lead[1], S1.P1, S1.P2, S2.P2, S3.P1.
- Sur-affirmation de place : « avant toute chose » (lead[1]), « avant tout le reste » (S1.P1).
  Le point théorique est au § 25 de la section 2.2 (review.notes[1], quotation.locator). À
  retirer.
- Sur-affirmation de fréquence en S1.P1 (« jamais exactement », « toujours des
  ajustements ») : la source dit « il est possible que » (SUP-b8a10ceb0fde0e3c).
- S6.P2 oppose concevoir et préparer quelqu'un au poste, alors que l'auteur décrit comme effet
  de la simulation de conception que les participants développent des schèmes d'utilisation et
  maîtrisent mieux le système au démarrage (SUP-b8a10ceb0fde0e3c). Un contresens par omission
  au dernier paragraphe.
- S6.P1 réduit la typologie à deux usages ; la source en énumère trois.
- S5.P2 sans delta et plus affirmatif que la fiche (« n'a pas d'auteur unique » contre « sans
  qu'on puisse établir qui a formulé quoi », attribution_note SUP-d5464c3eecfefea0).
- Exemples inventés présentés comme des énoncés généraux sur la méthode (S3.P2) ; l'exemple
  authentique de l'auteur est ignoré.

matière disponible mais sous-exploitée :
- L'exemple de l'auteur : « Personne ne peut dire ce qu'une certaine patiente fera dans
  quelques années dans le hall du futur hôpital », suivi de « certaines formes d'activité
  seront possibles, d'autres empêchées » — SUP-b8a10ceb0fde0e3c. Remplace avantageusement les
  exemples inventés de S1/S2 et rend concret « ouvrir et fermer des pans entiers ».
- Le pourquoi de la thèse : la critique des modèles anthropométriques sophistiqués, qui « ne
  sont en rien une garantie », parce que les concepteurs ne sont pas en situation de décrire
  comment les personnes travailleront, et que ces outils « peuvent contribuer à l'illusion
  d'une “conception ergonomique” … alors que le seul travail qui a été pris en compte est la
  représentation qu'en ont les concepteurs » — SUP-b8a10ceb0fde0e3c. Finance un vrai palier
  « pourquoi il ne suffit pas de modéliser » et fonde S4.P2 au lieu de le laisser en
  conséquence non marquée.
- La typologie selon le statut des utilisateurs (modélisés par un mannequin ou un programme /
  sujets d'une expérimentation / participants d'une démarche participative) — SUP-b8a10ceb0fde0e3c.
  Situe ce dont le texte parle (la troisième forme) ; aujourd'hui le lecteur ne sait pas que
  la simulation de Daniellou est participative.
- Les deux formes de simulation participative selon le support : expérimentale sur prototype
  (les sujets réalisent effectivement des tâches) / langagière sur plans ou maquettes (les
  participants construisent « un récit détaillé de modes opératoires possibles ») —
  SUP-b8a10ceb0fde0e3c. Corrige lead[1], qui mélange maquette et essai de gestes sans dire
  qu'on peut simuler en racontant.
- Les critères d'acceptabilité : « acceptables selon les critères de l'ergonomie », problèmes
  « en termes de santé ou d'efficacité » — SUP-b8a10ceb0fde0e3c. Désignation seulement : permet
  de nommer les deux registres, pas de les détailler.
- La raison des situations de référence : elles « comportent certaines des sources de
  variabilité qui existeront dans le futur système » — SUP-b8a10ceb0fde0e3c, notes[4]
  (SUP-5851ca34f261a90d). Donne à S4 son mécanisme.
- Les trois usages du mot simulation (anticipation en conception / analyse des processus
  cognitifs dans des situations difficiles à provoquer / formation des travailleurs, Pastré
  2005) — SUP-b8a10ceb0fde0e3c, notes[6] (SUP-4cfb7da09ef74a81), reserves[8]
  (SUP-bbf4c37273690706).
- Les effets au-delà de la conception : genèse instrumentale au sens de Rabardel et Béguin et
  meilleure maîtrise au démarrage ; « rencontre des mondes » professionnels —
  SUP-b8a10ceb0fde0e3c. Ce sont des désignations accompagnées d'une phrase d'explication
  chacune dans la source ; elles financent une ou deux phrases, pas une section.
- La thèse finale de l'article (ou bien le travail « n'est pas une question » et l'on évalue
  un projet avec des outils techniques sans interroger sa représentation du travail futur, ou
  bien l'ergonomie est « une pratique » qui cherche à favoriser des débats et des décisions
  prenant en compte la complexité du travail) — SUP-b8a10ceb0fde0e3c. Ouverture authentique.
- La nuance « en détail » mise en relief par la traduction : la version anglaise publiée par la
  revue rend la phrase par « the real users' activity may no be forecast », sans « en détail »,
  et durcit ainsi la thèse — notes[3] (SUP-034337672c1181de), reserves[5]
  (SUP-b1f53f887485e588), sources[1] (SUP-7379fc1a54501bd0). Permet de montrer au lecteur que
  tout le concept tient à ces deux mots.
- Possible / probable : l'article écrit « les formes possibles » ; la formule « activité future
  probable » se lit dans un chapitre cosigné à trois en 2013 (Barcellini, Van Belleghem,
  Daniellou) — attribution_note (SUP-d5464c3eecfefea0, qui la désigne explicitement comme
  « un point pour le lecteur »), notes[0] (SUP-2f963caaa745732e), notes[1]
  (SUP-e1f243257217c7e7), reserves[0]/[1] (SUP-27737c3b1bf75c00, SUP-ddf4393fac709707),
  sources_ouvertes[2] (SUP-b1641665d4e5c079). Restreint : ne rien dire sur quand ni sous quelle
  plume le mot a changé (notes[2], SUP-347662763e55a435), ne pas l'attribuer à Daniellou seul.

limites documentaires :
- Aucune des publications auxquelles Daniellou renvoie (1990, 1992, 1994, 1995, 2004, 2005) ni
  le manuel Comprendre le travail pour le transformer n'a été ouvert (reserves[2], reserves[3],
  review.notes[6]). S5 ne peut donc pas dire ce que chacun a apporté, ni dater la démarche, ni
  dire où « probable » apparaît en premier. Rien à ajouter à S5 ; seulement à resserrer.
- Les quatre ingrédients de la démarche participative (construction sociale, choix des
  participants, des supports, des scénarios) sont seulement énumérés dans la source
  (SUP-b8a10ceb0fde0e3c) : désignation, pas explication. Ils peuvent être nommés, pas dépliés.
- Le contenu de Maline (1994) sur les « propriétés des supports de simulation » est inconnu :
  la seule chose dicible est que l'article y renvoie (review.notes[3]).
- « Rencontre des mondes » : la source donne une phrase (chaque catégorie agit pour maintenir
  la dynamique du process dans son « monde ») ; aucun cas, aucun mécanisme au-delà.
- Aucune étude de cas réelle (entreprise, hôpital effectivement conçu) n'est dans le dossier :
  la patiente du futur hôpital est un exemple de l'auteur, pas un cas documenté.

BUDGET DE L'AJOUT
- ajouts prescrits et supports qui les financent :
  - exemple de la patiente / « possibles, d'autres empêchées » → SUP-b8a10ceb0fde0e3c ;
  - critique des modèles anthropométriques et de « l'illusion d'une conception ergonomique »
    → SUP-b8a10ceb0fde0e3c ;
  - statut des utilisateurs (modélisés / expérimentés / participants) et forme expérimentale vs
    langagière → SUP-b8a10ceb0fde0e3c ;
  - variabilité des situations de référence → SUP-b8a10ceb0fde0e3c, SUP-5851ca34f261a90d ;
  - trois usages du mot simulation → SUP-b8a10ceb0fde0e3c, SUP-4cfb7da09ef74a81 ;
  - effet de genèse instrumentale (une à deux phrases, pour corriger S6.P2) →
    SUP-b8a10ceb0fde0e3c ;
  - « en détail » et la version anglaise → SUP-034337672c1181de, SUP-b1f53f887485e588,
    SUP-7379fc1a54501bd0 ;
  - possible / probable (une à deux phrases d'ouverture) → SUP-d5464c3eecfefea0,
    SUP-2f963caaa745732e, SUP-e1f243257217c7e7, SUP-ddf4393fac709707.
  Note technique : les verbatims tirés de SUP-b8a10ceb0fde0e3c (lecture.json) ne figurent pas
  dans l'enregistrement validé ; `corpus:deepen` émettra un avertissement non bloquant sur les
  citations de cinq mots ou plus. Préférer la paraphrase attribuée, ou des citations courtes,
  sauf pour les verbatims déjà présents dans `review.notes` / `notes`.
- prescriptions écartées faute de support :
  - déplier ce que les travaux de 1990/1995 ou Maline 1994 ont apporté (jamais ouverts) ;
  - dater la démarche ou l'entrée du mot « probable » (notes[2]) ;
  - déplier les quatre ingrédients de la démarche participative (simple énumération) ;
  - détailler la « rencontre des mondes » au-delà d'une phrase ;
  - développer la simulation de formation (Pastré) : la source l'écarte d'une ligne
    (reserves[8]) ;
  - toute circonstance de test concrète présentée comme tirée de Daniellou (aucune dans le
    dossier hormis la patiente).
- sens attendu du volume : constant (cible ± 5 %). Les ajouts financés se paient par le retrait
  de S5.P2, S6.P2, de la redite de S1.P1 et S3.P1 sur lead[1], de la fin de S2.P2, et des
  exemples inventés de S2.P1 et S3.P2. Pas de croissance nette : chaque ajout remplace une
  redite.

TRAJECTOIRE CIBLE
- lead (2 paragraphes) :
  1. Entrée : rien. Fait comprendre : le problème (décider d'un poste avant qu'il soit occupé ;
     ni interroger ni observer). lead[0] peut rester, exemples marqués comme hypothétiques ou
     remplacés par l'hôpital futur (SUP-b8a10ceb0fde0e3c).
  2. La réponse : construire une représentation de la situation future avec ceux qui y
     travailleront. Nommer Daniellou et l'article. NE PAS livrer ici le critère « au moins un
     mode opératoire » ni la formule de la mise en garde : poser seulement la question
     (« que peut-on apprendre d'un essai sur une activité qu'on ne peut pas prévoir ? »).
     Retirer « avant toute chose ».
- S1 Ce qui échappe à la prévision (resserrée) :
  1. Entrée : le problème et la réponse générale.
  2. Nouveau : la citation du point théorique, et le fait que tout tient à « en détail » ;
     la patiente du futur hôpital comme illustration ; la version anglaise qui laisse tomber
     ces deux mots et dit autre chose (SUP-034337672c1181de, SUP-b1f53f887485e588).
     Remplacer « jamais / toujours » par la formulation de la source (« il est possible que
     les utilisateurs réels inventent des stratégies non prévues »).
  3. Matière : quotation.text, SUP-b8a10ceb0fde0e3c, notes[3].
  4. Ne pas répéter : la mise en garde paraphrasée en lead[1] (qui ne doit plus y figurer).
- S2 Pourquoi un bon modèle ne suffit pas (nouvelle, ou fondue en tête de S2 actuelle) :
  1. Entrée : on ne prévoit pas le détail.
  2. Nouveau : la critique des modèles anthropométriques et des outils sophistiqués, qui ne
     prennent en compte que la représentation des concepteurs ; les trois statuts possibles de
     l'utilisateur dans une simulation, et le choix de Daniellou pour le participatif.
  3. Matière : SUP-b8a10ceb0fde0e3c.
  4. Ne pas répéter : S1 ; ne pas faire de la typologie une taxonomie dépliée.
- S3 Des choix qui ouvrent ou ferment (S2 actuelle, resserrée) :
  1. Entrée : il faut des participants réels, pas un modèle.
  2. Nouveau : les décisions ouvrent et ferment des pans entiers ; « certaines formes possibles,
     d'autres empêchées » ; l'objet de la simulation = les formes possibles.
  3. Matière : SUP-75159464a99b8289, review.notes[4] (SUP-8f09048721eb5ade),
     SUP-b8a10ceb0fde0e3c.
  4. Ne pas répéter : l'opposition « détail / possible » déjà faite en S1 ; supprimer la phrase
     finale « éventail ».
- S4 Le critère : au moins un mode opératoire acceptable (S3 actuelle) :
  1. Entrée : on évalue des possibles.
  2. Nouveau : la formule exacte du critère, « acceptables selon les critères de l'ergonomie »
     (santé, efficacité — désignés seulement) ; « pas prescrire la bonne façon ». Le
     retournement du regard (chercher où le plan casse) peut rester comme conséquence marquée,
     avec un exemple explicitement hypothétique ou sans exemple.
  3. Matière : review.notes[4], SUP-b8a10ceb0fde0e3c.
  4. Ne pas répéter : « au moins une façon » en lead (retiré).
- S5 Comment on simule : scénarios et supports (S4 actuelle, enrichie à volume quasi constant) :
  1. Entrée : le critère.
  2. Nouveau : scénarios tirés de situations de référence parce qu'elles portent la variabilité
     du futur système ; simulation expérimentale sur prototype vs langagière sur plans ou
     maquettes (récit de modes opératoires possibles). S4.P2 actuel fondu, et adossé à la
     critique de S2 plutôt qu'à une conséquence non marquée.
  3. Matière : SUP-b8a10ceb0fde0e3c, SUP-5851ca34f261a90d.
  4. Ne pas répéter : la critique des modèles (S2).
- S6 Ce que la simulation fait d'autre, et ce qu'elle n'est pas (fusion S5/S6 actuelles) :
  1. Entrée : la méthode.
  2. Nouveau : les trois usages du mot simulation (dont la formation, écartée d'une ligne) ;
     mais la simulation de conception a des effets au-delà de la conception — genèse
     instrumentale et maîtrise au démarrage, rencontre des mondes (une phrase chacun) ;
     l'attribution réduite à une ou deux phrases (article signé seul, renvoi à des travaux
     cosignés, sans établir qui a formulé quoi).
  3. Matière : SUP-b8a10ceb0fde0e3c, SUP-4cfb7da09ef74a81, SUP-d5464c3eecfefea0,
     review.notes[3] (SUP-a31b56f11531cb71).
  4. Ne pas répéter : ne plus affirmer que la simulation de conception ne prépare pas au poste ;
     ne pas écrire « n'a pas d'auteur unique » ni « explicitement ».
- Clôture (dernier paragraphe de S6 ou section courte) : ouverture sur la tension possible /
  probable (2007 vs chapitre cosigné de 2013, sans datation ni paternité du glissement) et/ou
  sur la thèse finale de l'article (le travail est-il « une question » ?). Matière :
  SUP-d5464c3eecfefea0, SUP-ddf4393fac709707, SUP-e1f243257217c7e7, SUP-b8a10ceb0fde0e3c.
  Le texte doit finir sur une question, pas sur une précaution.

raison du verdict : l'architecture S1→S4 est saine et documentairement presque propre
(citations exactes, aucune source metadata-only exploitée), ce qui exclut REWRITE et
BLOCKED_SOURCE. Mais PASS est exclu : lead[1], S1.P1 et S3.P1 portent substantiellement le même
noyau, S5.P2 et S6.P2 n'ont pas de delta, deux sur-affirmations de place (« avant toute
chose », « avant tout le reste ») et une de fréquence (« jamais / toujours ») débordent la
source, et le dernier paragraphe oppose concevoir et préparer au poste alors que l'auteur
décrit précisément cet effet. Le dossier offre en texte intégral (SUP-b8a10ceb0fde0e3c) le
pourquoi de la thèse, l'exemple de l'auteur, la typologie et les effets secondaires, de quoi
remplacer les redites à volume constant : c'est une révision, pas une refonte.
