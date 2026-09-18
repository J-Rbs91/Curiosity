concept : force-du-besoin-de-developpement
verdict : REVISE

protocole d’audit : version 3
matière autorisée examinée : corpus/deepenings/force-du-besoin-de-developpement.json,
corpus/validated/force-du-besoin-de-developpement.json (dont `review.notes` et `notes`),
entrée `force-du-besoin-de-developpement` de src/content/generated/concepts.generated.ts.
Aucun corpus/evidence/<id>/lecture.json n’existe pour cette carte : le dossier se réduit au
rapport de 1974 lu en plein texte, tel que le récit de contrôle le restitue.
Volume lecteur : 1 218 mots (`lead` + `sections`), 13 paragraphes. Le contrôle
`npm run corpus:deepen -- --check --only=force-du-besoin-de-developpement` passe.

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur dispose d’un cas observable qui fait énigme (après une refonte des
  postes, trois personnes sur quatre y gagnent, la quatrième demande à revenir) et il connaît
  l’explication par défaut que le texte va déplacer, la résistance au changement. Delta net :
  il sait qu’il existe un fait à expliquer, pas encore lequel.
- lead[1] : il apprend que la non-universalité n’est pas une objection extérieure à la théorie
  mais une clause écrite par ses propres auteurs, datée et située (rapport technique déposé à
  Yale, mai 1974, Hackman et Oldham). Delta : le statut du cas minoritaire change, il devient
  un cas prévu.
- S1.P1 : il apprend le contenu exact de la prédiction à deux versants de la page 4 : réponse
  très positive attendue chez ceux qui valorisent fortement l’accomplissement et le
  développement personnels face à « a job high in motivating potential », possibilité d’anxiété
  et d’étirement inconfortable (« stretched ») chez les autres. Delta : le fait documentaire
  lui-même, et un premier terme technique introduit une fois qu’il sert.
- S1.P2 : il peut désormais distinguer deux choses qu’il aurait confondues : le second versant
  n’est pas « moins de motivation » mais un inconfort d’autre nature ; et le modal (peuvent,
  non éprouvent) marque une possibilité, pas une loi. S’y ajoute l’identification de ce qui
  varie : non le poste, mais ce que la personne attend de son travail. Delta fort, trois
  distinctions utiles d’un coup.
- S2.P1 : il acquiert l’outil conceptuel « modérateur » (une troisième grandeur qui ne
  s’ajoute pas au résultat mais fixe la force du lien), après en avoir vu l’effet. Delta réel,
  et l’ordre est bon : le phénomène précède le mot.
- S2.P2 : il apprend que c’est exactement cette place que les auteurs donnent au besoin de
  développement, nommé growth need strength, et que la figure 1 le pose en travers des
  relations au lieu de l’insérer dans la chaîne. Delta : nom propre du concept et position
  structurale.
- S2.P3 : il peut en tirer une conséquence qu’il n’avait pas : une moyenne calculée sur des
  personnes aux besoins différents additionne deux situations et n’en décrit aucune ; un effet
  moyen faible peut recouvrir un effet fort et un effet nul. Delta méthodologique nouveau,
  correctement marqué « Cela implique ».
- S3.P1 : il apprend où la réserve est posée dans le rapport (immédiatement après la formule du
  motivating potential score, en ouverture du paragraphe qui précède le titre de section
  suivant), donc qu’elle est adossée au chiffre et non reléguée. Delta modeste mais réel : un
  argument d’emphase textuelle.
- S3.P2 : il peut distinguer « la théorie serait fausse pour certains » de « son fonctionnement
  attendu n’a pas la même efficacité pour tous », par le guillemet que les auteurs mettent
  autour de « work ». Delta : une distinction qui évite un contresens majeur.
- S3.P3 : PARTIELLEMENT REDONDANT AVEC S3.P2 et S2.P3. L’exemple des deux équipes à même note
  en hausse rhabille l’assertion qui précède sans produire de distinction neuve ; son seul
  apport propre est le couple « ce qui a été installé / ce qui a été vécu », qui est une
  formule, pas un delta.
- S4.P1 : il apprend un fait qu’il ne pouvait pas déduire de ce qui précède : page 6, les
  auteurs qualifient ce besoin de « malleable individual difference characteristic », et la
  précision que le sujet grammatical y est l’instrument borne honnêtement la portée. Delta :
  une propriété nouvelle du modérateur.
- S4.P2 : il peut distinguer deux usages pratiques opposés du même concept, trier les personnes
  d’après un trait supposé stable, ou lire un état mesuré à un moment, et il apprend lequel des
  deux dépasse ce que le texte autorise. Delta conséquentiel et normatif, bien fondé.
- S5.P1 : il apprend le statut de l’énoncé : un attendu de la théorie, aucune donnée sur cette
  page, et la distance entre « la théorie pose que » et « une étude établit que ». Delta réel,
  mais il recoupe en partie « fonctionnement attendu » déjà dit en S3.P2 et l’insistance de
  lead[1] sur ce que les auteurs écrivent.
- S5.P2 : il apprend ce que le rapport dit être (un instrument de diagnostic des postes et
  d’évaluation des projets de refonte), et que dès sa deuxième page il renvoie ailleurs pour la
  théorie, en nommant Turner et Lawrence (1965), Hackman et Lawler (1971), puis Hackman et
  Oldham (1974). Delta : généalogie et redirection, deux faits neufs.
- S5.P3 : PARTIELLEMENT REDONDANT AVEC S2.P3 et S5.P1. Il recombine « ne pas moyenner » et
  « attente n’est pas résultat » ; son apport propre tient au couple « invite à observer /
  permettrait de prévoir », qui conclut bien mais n’ajoute aucune connaissance.

GROUPES REDONDANTS

- Motif « le chiffre ou la moyenne ne dit pas le vécu » : S2.P3, S3.P2 (fin), S3.P3, S5.P3.
  Quatre paragraphes sur treize travaillent la même idée. Aucun trio n’est consécutif, donc le
  critère mécanique de `PASS` n’est pas franchi, mais la dilution est nette et deux de ces
  paragraphes (S3.P3, S5.P3) n’existent que par elle.
- Chevauchement mineur S3.P2 / S5.P1 sur « attendu » : la nuance de statut est amorcée en S3
  puis re-posée comme si elle était neuve en S5.

INFORMATIONS MAL PLACÉES

- La phrase même que toute la S3 commente (la réserve de la page 4) n’est jamais donnée dans le
  texte lecteur. S3.P1 parle de « cette réserve » et S3.P2 du guillemet autour de « work »
  alors que le lecteur n’a sous les yeux que la paraphrase de lead[1]. La carte affiche bien la
  citation avant l’approfondissement, mais la section repose sur un souvenir plutôt que sur son
  propre texte.
- S2.P1 introduit « selon qu’elle est haute ou basse » alors que S1 n’a posé qu’une opposition
  binaire (ceux qui valorisent / les autres). Le passage du couple au degré, qui est pourtant le
  sens du mot « force » dans le titre de la carte, n’est jamais fait.
- Le statut d’attendu théorique (S5.P1) conditionne la lecture de tout le texte et arrive en
  dernière section. lead[1] l’effleure sans le nommer.

RÔLE DES SECTIONS

- S1 « Deux réponses possibles au même emploi » : donne le fait à deux versants et les
  distinctions qui empêchent de le lire comme une simple gradation de motivation.
- S2 « Ce que veut dire modérer une relation » : fournit l’outil qui explique le fait, le
  rattache nommément au besoin de développement, puis en tire une conséquence de méthode.
- S3 « Une réserve posée juste après un score » : montre que la réserve est adossée au chiffre
  et sépare « théorie fausse » de « théorie inégalement efficace ». Son troisième paragraphe ne
  fait plus que réillustrer.
- S4 « Un besoin décrit comme malléable » : ajoute la seule propriété qui empêche l’usage le
  plus tentant, le tri des personnes.
- S5 « Un attendu de la théorie, pas un résultat » : fixe le statut épistémique, donne la
  généalogie et la redirection des auteurs, puis conclut sur un couple observer / prévoir.

SIGNAUX DOCUMENTAIRES (non verdict factuel)

- S2.P1 : « plus d’autonomie, plus de motivation venue du travail lui-même ». Aucune dimension
  d’emploi ni mesure dépendante n’est nommée dans ce dossier ; l’unique mention proche, page 27,
  est explicitement marquée non citable dans `notes` (OCR seul, « ne fonde rien ici »). La
  phrase est présentée comme une illustration générique, mais elle instancie une relation
  précise du modèle. À soumettre au CLAIM MAP.
- S3.P1 : la description du motivating potential score (« ramène un poste à une note unique et
  permet ainsi de comparer deux postes, ou le même poste avant et après une transformation »)
  dépasse ce que le dossier porte. Le dossier atteste l’existence de la formule et sa position
  juste au-dessus de la réserve, et le titre du rapport atteste la finalité d’évaluation des
  projets de refonte ; il n’atteste pas ce que la note permet de comparer. `notes` signale même
  le MPS comme « point limite signalé par la lecture » volontairement non réintroduit sur la
  carte : en faire le pivot d’une section entière est le point le plus exposé du texte.
- S5.P2 : « Qui vient chercher ici la démonstration est réorienté par les auteurs eux-mêmes ».
  La phrase citée renvoie à « a more detailed description and discussion of the theory itself »,
  non à une démonstration. Le test empirique est ailleurs (Technical Report No. 6 selon
  `notes`), mais ce n’est pas cette phrase de la page 2 qui le dit. Glissement léger à vérifier.
- S1.P2 : « ce que la personne attend de son travail » comme glose de « value personal growth
  and accomplishment ». Attente et valorisation ne sont pas identiques ; reformulation
  acceptable mais à surveiller.
- lead[0] : le scénario est explicitement hypothétique (« Imaginons ») et ne peut pas se lire
  comme un cas historique, ce qui est conforme. Son contenu présuppose toutefois des dimensions
  du poste (tâche entière, ordre choisi, retour immédiat) que ce dossier ne documente pas. Rien
  n’est attribué aux auteurs, le risque est faible.
- Points bien tenus : tous les verbatim anglais employés (« a job high in motivating
  potential », « individuals who do not value personal growth and accomplishment may find such a
  job anxiety-arousing », « stretched », « Therefore, growth need strength is shown in Figure 1
  as a moderator… », « malleable individual difference characteristic », les deux phrases de la
  page 2) figurent dans `review.notes` ou `notes` de l’enregistrement validé. Le modal « may »
  est conservé. Le sujet grammatical de la phrase de la page 6 est signalé au lecteur. Aucune
  donnée, aucune proportion, aucun chiffre d’effet n’est avancé. La frontière interne `limits`
  n’est jamais exposée comme appareil visible et aucun terme de plomberie n’apparaît.

MATIÈRE DISPONIBLE MAIS SOUS-EXPLOITÉE

- Ce que le besoin de développement est, littéralement. `notes` porte « the JDS taps the
  strength of the respondent’s desire… ». Le texte lecteur ne donne jamais de définition de
  travail du besoin lui-même, et surtout n’explique jamais le mot du titre : la force, c’est-à-
  dire une intensité, donc un degré. C’est précisément ce qui articule S1 (opposition binaire)
  et S2 (haute ou basse), et c’est la lacune pédagogique la plus coûteuse du texte.
- La généalogie. `review.notes` établit que Hackman et Lawler (1971) opèrent déjà ce modérateur
  sous le nom de « higher order need strength », et que le nom growth need strength comme son
  opérationnalisation appartiennent à 1974. Le texte confine cette matière dans `limits`, alors
  qu’elle constituerait un delta lecteur de premier ordre : ce qui est nouveau en 1974 n’est pas
  l’idée qu’on diffère, c’est le nom et la mesure. Le niveau de support de cette note
  (« recherche indépendante concordante ») devra être tranché par la chaîne factuelle.
- Le texte suivant. `notes` nomme le Technical Report No. 6, Motivation through the design of
  work: Test of a theory, comme le lieu de l’exposé détaillé et du test. Le protocole de
  rédaction autorise explicitement à dire ce qu’un tel texte détient et qu’il faudra l’ouvrir.
  Aujourd’hui cette ouverture n’existe que dans le champ interne, et la fin du texte lecteur s’en
  trouve appauvrie.
- La note de traduction de l’enregistrement observe que le passif « is not expected to » désigne
  bien les auteurs comme ceux qui ne l’attendent pas. lead[1] le suggère, S5.P1 revient au passif
  impersonnel et perd l’aiguille : ce sont eux qui refusent l’universalité.

LIMITES DOCUMENTAIRES

- Aucune épreuve empirique de la modération n’est disponible : la page 4 ne porte aucune donnée
  et l’énoncé convergent de la page 27 est déclaré non citable dans l’enregistrement. Le texte a
  raison de rester du côté de l’attendu ; aucune réécriture ne peut y ajouter un résultat, une
  proportion ou une taille d’effet.
- Rien dans le dossier ne dit ce qui rend ce besoin malléable, ni ce qui le fait croître ou
  décroître. La question, légitime après S4, ne peut pas être traitée.
- Les dimensions de l’emploi et les mesures dépendantes de la théorie ne sont pas instruites par
  cette carte. Une réécriture ne doit donc pas fonder son illustration du mécanisme sur une
  relation nommée du modèle.
- Aucune source secondaire, aucune réception critique, aucune reprise ultérieure du concept
  n’est présente. La tension finale ne peut venir que du rapport lui-même et de ses renvois.

TRAJECTOIRE CIBLE

- S1, l’emploi qui ne produit pas le même effet. Entrée : le lecteur sort du `lead` avec une
  énigme et une clause d’auteurs. Nouveau : le contenu à deux versants de la page 4, le fait que
  le second versant est d’une autre nature et non d’une intensité moindre, le modal qui ouvre une
  possibilité. Matière : la phrase sur la réponse très positive attendue, la phrase « individuals
  who do not value… anxiety-arousing », « stretched ». Ne pas répéter : l’énigme du `lead`, qui
  est déjà posée, ni l’explication par la résistance au changement, déjà écartée.
- S2, ce qui varie d’une personne à l’autre, et de combien. Entrée : le lecteur sait que deux
  réponses opposées sont attendues. Nouveau : le besoin de développement comme objet, ce que
  l’instrument déclare capter, et le passage décisif du couple au degré, qui explique le mot
  force. Matière : la formulation sur la force du désir du répondant, le nom growth need
  strength. Ne pas répéter : la description des deux versants.
- S3, une grandeur qui règle la force d’un lien. Entrée : le lecteur tient un besoin de degré
  variable. Nouveau : le modérateur comme place structurale, la figure 1 qui le pose en travers
  des relations, et la conséquence unique à conserver sur les moyennes. Matière : le verbatim
  « Therefore, growth need strength is shown in Figure 1 as a moderator… ». Ne pas répéter : la
  définition du besoin, ni la conséquence sur les moyennes plus d’une fois dans tout le texte.
- S4, une réserve adossée à un chiffre. Entrée : le lecteur sait ce que modérer signifie. Nouveau :
  la réserve est donnée dans son texte, à sa place, juste après la formule du score, et elle
  sépare « fausse » de « inégalement efficace ». Matière : la position attestée de la phrase et
  le guillemet autour de « work ». Ne pas répéter : l’exemple des deux équipes, à supprimer ; et
  ne pas prêter au score des usages que le dossier n’atteste pas.
- S5, un besoin décrit comme malléable. Entrée : le lecteur sait que la note du poste ne dit pas
  ce que la personne en fera. Nouveau : la qualification de la page 6, la réserve sur le sujet
  grammatical, et la fourche pratique entre trier des personnes et lire un état daté. Matière :
  « malleable individual difference characteristic ». Ne pas répéter : le contraste installé /
  vécu.
- S6, d’où vient cette clause et où elle se vérifie. Entrée : le lecteur comprend le mécanisme et
  son usage. Nouveau : le statut d’attendu et non de résultat, la généalogie que les auteurs
  nomment eux-mêmes, ce qui appartient en propre à 1974, et le rapport séparé qui porte le test,
  à ouvrir. Matière : les deux phrases de la page 2, la note sur « higher order need strength »,
  le titre du Technical Report No. 6. Ne pas répéter : la mise en garde contre la moyenne, déjà
  acquise en S3 ; finir sur une porte, non sur un rappel.

SCORES

- fidélité documentaire : 3/4 — tous les verbatim sont traçables dans l’enregistrement validé et
  la nuance du sujet grammatical en S4.P1 est exemplaire, mais S2.P1 instancie une relation du
  modèle (autonomie, motivation interne) que ce dossier ne documente pas et S3.P1 prête au
  motivating potential score des usages que seule l’inférence soutient, alors que `notes` signale
  ce score comme point limite non réintroduit.
- progressivité pédagogique : 3/4 — l’arc phénomène, outil, réserve, propriété, statut est solide
  et chaque section s’appuie sur la précédente, mais S2.P1 fait passer du binaire au degré sans
  l’expliquer et S5.P1 arrive en dernière section avec un statut qui conditionne tout le texte.
- densité / non-redondance : 2/4 — S3.P3 réillustre S3.P2 sans distinction neuve et S5.P3
  recombine S2.P3 et S5.P1 ; le motif de la moyenne et du chiffre occupe quatre paragraphes sur
  treize.
- clarté : 3/4 — la prose est accessible et chaque terme technique arrive quand il sert
  (S1.P1, S2.P1), mais toute la S3 commente une phrase que le texte lecteur ne donne jamais, et
  le mot force du titre reste inexpliqué.
- profondeur explicative : 3/4 — le mécanisme du modérateur, la conséquence sur les moyennes
  (S2.P3), la distinction faux / inégalement efficace (S3.P2) et la fourche d’usage (S4.P2) vont
  bien au-delà d’une définition allongée ; il manque ce qu’est le besoin lui-même et pourquoi il
  se mesure en intensité.
- valeur des exemples : 3/4 — lead[0] crée l’énigme et rend le cas minoritaire pensable, et le
  contraste de S4.P2 fait comprendre un enjeu réel, mais les deux équipes de S3.P3 ne font que
  redire la phrase précédente.
- limites / nuances : 4/4 — le modal est traité dès S1.P2, la réserve sur le sujet grammatical
  et le « au-delà de ce que ce texte autorise à dire » tombent en S4 au moment exact où le
  contresens menace, et le champ interne `limits` n’est jamais exposé au lecteur.
- pouvoir d’ouverture : 2/4 — S5.P2 mentionne la redirection des auteurs, mais la fin retombe
  sur un couple observer / prévoir issu d’idées déjà acquises, tandis que les deux vraies portes
  documentées, le rapport qui porte le test et le nom antérieur du modérateur, restent enfermées
  dans le champ interne.

défauts majeurs :
- redondance concentrée sur un seul motif : S3.P3 et S5.P3 n’ont pas de delta propre, et le
  couple chiffre / vécu revient quatre fois.
- l’objet de la carte n’est pas défini : ni le besoin de développement, ni surtout sa force
  comme degré, alors que S2.P1 en a besoin pour tenir.
- S3 repose sur une phrase absente du texte lecteur, ce qui rend la section dépendante de la
  citation affichée ailleurs.
- deux appuis documentaires fragiles servent des passages structurants : la relation autonomie /
  motivation interne en S2.P1, les usages du score en S3.P1.
- la fin n’ouvre pas : la matière d’ouverture est disponible et reste dans `limits`.

matière disponible mais sous-exploitée :
- « the JDS taps the strength of the respondent’s desire… » pour définir le besoin et fonder son
  degré.
- « higher order need strength » chez Hackman et Lawler (1971) pour dire ce qui est neuf en 1974.
- le Technical Report No. 6 comme texte à ouvrir, dit du côté du lecteur.
- la note de traduction, qui identifie les auteurs comme ceux qui n’attendent pas l’universalité.

limites documentaires :
- aucune donnée, aucun test, aucune proportion disponible ; la page 27 est explicitement non
  citable.
- rien sur ce qui fait varier ce besoin.
- ni dimensions de l’emploi ni mesures dépendantes instruites par cette carte.
- aucune source secondaire, aucune réception.

raison du verdict : REVISE. L’architecture est saine et la discipline documentaire globalement
remarquable, notamment sur le modal, le statut d’attendu et la réserve sur la page 6 ; le texte ne
relève ni du REWRITE, puisque aucune section n’a pour rôle principal de répéter une antérieure et
que la progression s’explique en une phrase par section, ni du BLOCKED_SOURCE, puisque la matière
disponible permet précisément de combler les deux manques identifiés. Mais `PASS` n’est pas
soutenable : deux paragraphes sur treize sont sans delta propre, l’objet nommé par le titre n’est
jamais défini, une section entière commente une phrase que le lecteur n’a pas devant lui, et la
fin ferme le texte au lieu de l’ouvrir alors que le dossier offre deux portes. S’y ajoutent deux
appuis fragiles à faire trancher par CLAIM MAP puis VERIFY, sur la relation du modèle citée en
S2.P1 et sur ce que le score est dit permettre en S3.P1.
