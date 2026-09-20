concept : isomorphisme-institutionnel
verdict : ACCEPT
factcheck_sha_match : PASS

GATE

SHA-256 recalculé sur corpus/deepenings/isomorphisme-institutionnel.json :
3651c8ab2d9d242ce696218c19d88417bfaf2175d6e0fe7634cd629fc9b9a26a
candidate_sha256 du gate : identique, au caractère près.
verdict du gate : FACTCHECK_PASS, 77 claims, 77 supported, 0 failed, structural_errors vide.
Les trois conditions préalables sont remplies ; la revue pédagogique est ouverte.

Note de traçabilité : l'arbre est propre, le fichier a été committé en cours de cycle
(5582f6b). HEAD porte donc déjà la proposition. La version auditée n'est pas HEAD~1 : les
commits 8c61b9f, 63de36e et d425a27 portent des états intermédiaires du même cycle. La version
antérieure réelle, celle sur laquelle porte audit.md, est cf21df6 (SHA du blob
4059be1e2bf47e375dcf3c922fca7a05cd4705653a0dc632294a45d59f2beea9). C'est contre elle que la
comparaison ci-dessous est faite ; comparer à HEAD~1 aurait masqué l'essentiel du gain.

VÉRIFICATION DES DEUX POINTS SIGNALÉS

1. La glose biologique. L'audit ne s'est pas trompé. La version cf21df6 porte mot pour mot
« Le mot vient de la biologie, où il désigne des formes différentes qui ont convergé vers une
apparence proche parce qu'elles occupent la même niche », et rien dans
evidence.primary-reading.json ni dans evidence.reception.json n'appuie cette convergence de
niche. La proposition a disparu de la version courante. Ce qui la remplace est bien dans le
dossier : « In Hawley's (1968) description, isomorphism is a constraining process that forces
one unit in a population to resemble other units that face the same set of environmental
conditions » (p. 149), et l'entrée de bibliographie « Hawley, Amos / 1968 “Human ecology.” ».
Le texte rend « ils le reprennent à l'écologie humaine, où l'isomorphisme désigne un processus
contraignant qui force une unité à ressembler aux autres unités soumises aux mêmes
conditions ». Le rendu est fidèle, et surtout il tient la réserve la plus glissante du dossier,
qui est un résultat négatif explicite : « L'article de 1983 n'écrit NULLE PART que Hawley aurait
forgé, introduit... un renvoi à une “description” et une entrée d'encyclopédie n'établissent pas
une invention de terme. » Le texte écrit « Le mot n'est pas d'eux », ce que le dossier soutient
(« Écrire que DiMaggio et Powell ont “inventé l'isomorphisme” est faux sur ce texte »), et il ne
crédite personne d'autre de la forge du mot. Aucune information juste n'a été retirée : la glose
supprimée n'était appuyée nulle part, et sa remplaçante est plus étroite et mieux fondée. Le
rédacteur a aussi écarté la généalogie « population biology and mathematics » de Thornton, ce
qui est correct : cette source ne porte pas de champ consulted, et PROTOCOLE.md §3 interdit d'en
déduire une lecture.

2. La définition du champ. L'audit ne s'est pas trompé non plus. cf21df6 portait « qui se
reconnaissent mutuellement comme appartenant au même secteur » et « Un hôpital se compare à
d'autres hôpitaux, pas à une entreprise de logistique », c'est-à-dire exactement le contresens
rangé en common_misinterpretations (« Un champ organisationnel, c'est un secteur d'activité ou
un marché »). Les deux formules ont disparu. La nouvelle définition est celle de la p. 148 :
« il réunit les organisations qui produisent des services semblables, mais aussi leurs
fournisseurs principaux, ceux qui consomment leurs ressources et leurs produits, et les agences
qui les régulent », soit les quatre composants de « key suppliers, resource and product
consumers, regulatory agencies, and other organizations that produce similar services or
products », suivis de « The structure of an organizational field cannot be determined a priori
but must be defined on the basis of empirical investigation. Fields only exist to the extent
that they are institutionally defined ».

Contrôle de l'excès inverse, qui était le risque réel : il n'a pas eu lieu. Le texte n'expulse
pas les concurrents du champ, il conserve en tête de définition « les organisations qui
produisent des services semblables » ; et la négation qu'il pose, « il ne se confond ni avec un
marché ni avec un secteur d'activité », est le décalque de la formule du dossier lui-même
(« L'UNITÉ D'ANALYSE N'EST NI LA FIRME NI LE SECTEUR, C'EST LE CHAMP »). Le champ est donc
élargi aux régulateurs et aux acheteurs sans être vidé de ses producteurs. La seule inférence
propre au texte est « Autant dire, pour une bonne part, des acteurs qui ne se font aucune
concurrence », qui est bornée par « pour une bonne part » et soutenue par la justification du
dossier (« ce qui inclut ceux qui régulent et ceux qui achètent »).

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     glose de niche supprimée ; champ refait sur
                                               p. 148 ; fin de S6.P1 reconstruite sur ce que la
                                               ressemblance rapporte ; Thornton non employé
                                               comme contenu (pas de consulted) ; Beckert
                                               employé sur « CONSULTATION : TEXTE INTÉGRAL » ;
                                               Mizruchi et Fein strictement sur le résumé
                                               d'auteurs, chiffrage web écarté ; FACTCHECK_PASS
                                               77/77 sur le SHA exact.
progressivité pédagogique      3/4     4/4     l'annonce de plan « que les trois sections
                                               suivantes détaillent » a disparu, et rien ne l'a
                                               remplacée ; le seuil de diffusion entre en S1.P4,
                                               là où il fonde tout ce qui suit ; un lecteur qui
                                               s'arrête après S2 tient désormais le phénomène,
                                               l'explication écartée, le sens du mot et un
                                               mécanisme complet.
densité / non-redondance       1/4     4/4     les trois paragraphes sans delta (ancien S3.P3,
                                               S4.P2, S6.P2) sont supprimés, non réécrits ; la
                                               chaîne qui énonçait trois fois « ils cherchent
                                               sincèrement, ils se ressemblent » est ramenée à
                                               une occurrence en S1.P2 (« paresseux » et
                                               « mauvaise foi » ont quitté le texte) ; 15
                                               paragraphes lecteur, 15 deltas distincts.
clarté                         4/4     4/4     aucun terme savant n'arrive avant son usage ;
                                               « écologie humaine », « isomorphisme compétitif »,
                                               « prise pour modèle », « champ » sont expliqués
                                               sur place ; la structuration est rendue en mots
                                               courants sans que le mot soit lâché ; 1 651 mots
                                               lecteur contre 1 279, dans la fourchette.
profondeur explicative         2/4     4/4     six paliers causaux ajoutés : seuil de diffusion
                                               et sa signature observable (S1.P4), registre réel
                                               de la contrainte et cas qui la subissent contre
                                               leur principe (S2.P2), les trois raisons pour
                                               lesquelles la copie converge (S3.P2), l'opérateur
                                               de recrutement (S4.P1), la condition qui inverse
                                               l'effet normatif (S4.P2), le paradoxe
                                               d'agrégation (S6.P2).
valeur des exemples            2/4     4/4     les deux exemples inventés et le directeur
                                               financier inerte sont remplacés par des cas que
                                               l'article rapporte : associations de quartier et
                                               écoles alternatives (la dépendance défait le
                                               principe), station de télévision publique (le
                                               signal l'emporte sur le gain constaté). Chacun
                                               démontre un point distinct.
limites / nuances              2/4     4/4     typologie déclarée analytique, absence de test
                                               empirique, socialisation sur le tas qui peut
                                               renforcer les différences, périmètre du champ non
                                               déterminable a priori, et la nuance qui interdit
                                               la lecture « pathologie » : « L'efficacité perd
                                               son rôle de cause ; elle ne devient pas une
                                               victime. »
pouvoir d'ouverture            1/4     4/4     le texte ne se referme plus sur sa première
                                               phrase : il sort sur deux travaux nommés et une
                                               tension vive (mesures non séparables chez
                                               Mizruchi et Fein, divergence possible chez
                                               Beckert).

TEST DU DELTA, VERSION PROPOSÉE

lead[0] phénomène observable et paradoxe ; lead[1] l'explication spontanée et son écartement ;
S1.P1 le domaine où la sélection vaut, et le déplacement du moteur vers l'État et les
professions ; S1.P2 ce sur quoi porte la théorie, le menu des options et non les motifs ; S1.P3
le nom, et le fait qu'il désigne une force et non un état ; S1.P4 le seuil, et sa marque
observable ; S2.P1 la dépendance impose des gabarits, sans besoin de loi ; S2.P2 elle atteint
qui refuse la forme par principe ; S3.P1 l'antécédent est l'incertitude, et le modèle peut
ignorer qu'il est copié ; S3.P2 pourquoi la copie uniformise au lieu de diversifier ; S4.P1 le
mécanisme passe par les personnes, et son opérateur est le recrutement ; S4.P2 la condition qui
peut l'inverser ; S5.P1 l'unité d'analyse n'est ni la firme ni le secteur ; S5.P2 ce qui
fabrique un champ, et son horloge ; S6.P1 aucun mécanisme ne passe par une preuve d'efficacité,
et pourtant la conformité paie ; S6.P2 changement d'échelle, l'ensemble peut être déraisonnable
sans qu'aucun acteur le soit ; S6.P3 les deux réserves des auteurs, puis la réception.

Aucune séquence de trois paragraphes consécutifs ne partage son delta. Aucune section n'a pour
rôle principal de répéter une section antérieure. Le seul écho thématique est celui de S1.P4 et
S6.P1 autour du couple légitimité / performance, mais les deux paliers ne disent pas la même
chose : le premier porte sur le moment où une pratique change de raison d'être adoptée, le
second sur ce que la conformité rapporte, et quatre sections les séparent.

CONTRÔLES MÉCANIQUES

- npm run corpus:deepen -- --check --only=isomorphisme-institutionnel : PASS.
- Aucun tiret cadratin dans le fichier. Titres tous sous 60 caractères.
- Aucun terme de dispositif dans le texte lecteur (seule occurrence de la chaîne « carte » :
  le mot « écartent »).
- lead : 2 paragraphes, 159 mots. sections : 6, de 2 à 4 paragraphes. Texte lecteur : 1 651
  mots, dans la fourchette 1 300-1 700 alors que la version précédente était sous le plancher à
  1 279.
- Citation contrôlée contre l'enregistrement validé : verbatim, ponctuation et élision
  comprises.
- Frontière interne tenue : rien de limits ne remonte dans lead ni dans sections. Weber reste
  absent du texte lecteur, conformément à limits[3] ; Politix, Boxenbaum et Jonsson, et la liste
  des sources en métadonnées seules n'y figurent pas davantage.

défauts initiaux corrigés :
- Les trois paragraphes sans delta (S3.P3, S4.P2, S6.P2) sont supprimés, et leur volume est
  réaffecté à des paliers neufs, pas à de la reformulation.
- Le pivot causal de l'article, le seuil de diffusion, entre dans le texte avec sa signature
  observable, et il est donné comme ce dont l'article se sert, jamais comme vérifié.
- La glose biologique inventée est retirée et remplacée par ce que la source porte réellement.
- La définition du champ réduite au secteur est refaite sur la p. 148, sans basculer dans
  l'excès inverse.
- L'annonce de plan est supprimée, et aucun titre ni aucune phrase ne la remplace.
- « dans une traduction française faite pour l'occasion » devient « ici rendue en français » :
  l'information reste due, la tournure ne raconte plus la fabrication du texte.
- La fin de S6.P1 ne penche plus vers « l'isomorphisme rend inefficace ».
- Le texte ne se termine plus en reformulant son lead.

régressions détectées :
- Une seule, mineure. L'ancien S2.P2 portait la face diffuse de la contrainte, les attentes
  largement partagées sur ce à quoi doit ressembler une organisation sérieuse, appuyée sur
  « cultural expectations in the society within which organizations function » (p. 150). Cette
  facette a disparu. Elle est partiellement remplacée par le registre propre de la source dans
  le nouveau S2.P1 (« elle peut se faire sentir comme une force, comme une persuasion, ou comme
  une invitation à s'entendre »), qui tient la même idée de fond : la pression n'a pas besoin
  d'être juridique. La perte est réelle mais étroite, et elle est plus que compensée par les
  deux cas documentés qui arrivent à la place.
- Le lecteur ne sait plus que DiMaggio et Powell sont des sociologues. Ce retrait n'est pas un
  choix de réécriture mais l'exécution d'un échec de gate (C004, tour 2), les supports ne
  portant ni nationalité ni profession. La perte d'orientation est faible et partiellement
  rattrapée par « leur article » et « les deux auteurs ».

observations sans effet sur le verdict :
- S6.P3 écrit que Beckert « reprend la typologie pour soutenir que ces mécanismes n'ont pas de
  direction fixe ». Le verbatim du dossier porte sur quatre mécanismes, Beckert ayant ajouté la
  compétition aux trois de 1983. L'énoncé reste vrai des trois comme sous-ensemble des quatre,
  et l'ajout du quatrième n'est pas nié ; le lecteur l'ignore simplement. Ce n'est pas une
  sur-attribution.
- Dans la même phrase, « sur vingt-six travaux qui ont tenté de le mesurer » laisse le pronom
  « le » un peu flottant entre le mécanisme mimétique et le modèle entier ; le résumé d'auteurs
  dit « various components of DiMaggio and Powell's model ». La suite immédiate de la phrase
  (« les indicateurs d'un mécanisme auraient aussi bien pu valoir pour un autre ») lève
  l'ambiguïté. Défaut de netteté, pas de fidélité.
- limits fait 254 mots pour une fourchette indicative de 100 à 200. Le dépassement est le coût
  direct d'une demande de l'audit, qui reprochait à la version précédente de tenir ses réserves
  sans nommer leurs sources ni leur état d'accès. Le champ est interne, le contrôle mécanique
  passe, et chacun des quatre paragraphes nomme désormais une source, un niveau d'accès et
  l'affirmation qu'il interdit.

raison de la décision : le gate est valide et porte sur le SHA exact du fichier examiné, ce que
j'ai recalculé moi-même. Les deux fragilités documentaires que l'audit désignait existaient bien
dans la version antérieure, et la réécriture les corrige par la source plutôt que par le
retrait : la glose de niche cède la place à la description de Hawley, et le champ retrouve ses
régulateurs et ses acheteurs sans perdre ses producteurs. Les trois défauts majeurs restants,
les paragraphes sans delta, l'absence du pivot causal et la conclusion qui reformulait le lead,
sont tous traités, et traités par ajout de matière déjà lue et paginée, non par allongement
rhétorique : le texte gagne 372 mots lecteur et quinze deltas distincts là où il en portait
douze pour treize paragraphes. Aucun axe ne régresse, la clarté qui était la réussite de
l'ancienne version est préservée, et la seule perte de contenu identifiée est une facette
étroite du mécanisme coercitif, substituée par le registre propre de la source. Les conditions
minimales d'ACCEPT sont toutes remplies.
