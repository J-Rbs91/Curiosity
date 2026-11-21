concept : court-terme-contre-long-terme
verdict : BLOCKED_SOURCE

CADRE DOCUMENTAIRE CONSTATÉ
- `corpus/validated/court-terme-contre-long-terme.json` ne porte aucun champ `dossier` (le pack dit
  `dossier_declare.statut: non-declare`).
- `corpus/evidence/court-terme-contre-long-terme/` n'existe pas ; aucun fichier de `corpus/evidence/`
  ni de `corpus/dossiers/` ne mentionne l'identifiant. `evidence_files: []`.
- Conséquence : les deux sources déclarées `full-text` (D-4468-2 et D-4468-1) sont
  `access_corroboration: dossier-absent`. Rien de leur contenu n'est disponible au-delà de ce que
  l'enregistrement validé recopie. Je ne peux pas vérifier la fidélité du texte au-delà de ce résumé,
  et l'axe A est noté sur cette base, pas sur une absence de contradiction.
- Matière réellement disponible (supports de contenu du pack) :
  - SUP-3fa993d883db1a72 / SUP-4d2830ee8ef2e997 : la proposition principale, FR et EN
    (« usually », p. 12, section VI, SUP-6996bbe34a9a53d8) ;
  - SUP-8309eed15a1d5e9f : la réciproque, « policies that produce long-run improvement may
    initially depress behavior of a system » (p. 12) ;
  - SUP-24054b796591ef6b : « The short run is more visible and more compelling » (p. 12) ;
  - SUP-c4137f292e1bd542 : résumé (« système social », « le plus souvent de sens contraire », « c'est
    la première qui se voit ») ; SUP-f665b54bd36830ba : accroche ;
  - SUP-53f95d9946006afb : le texte lu est la mise à jour de mars 1995 de l'article de Technology
    Review de janvier 1971 ; le texte a bougé avec la révision (« developments over the last 60
    years ») ;
  - SUP-36933704fc895f9f, SUP-873a1fcfca7989cd : titres et dates (« Counterintuitive Behavior of
    Social Systems », Technology Review janvier 1971, Simulation février 1971, metadata-only pour
    ce dernier) ;
  - SUP-b9aef3b6c7d159ce : Forrester, fondateur de la dynamique des systèmes au MIT (désignation) ;
  - SUP-7d92cd2cb2022153 : Sterman 2001, « System Dynamics Modeling: Tools for Learning in a
    Complex World », metadata-only : titre citable, aucun contenu.
  Rien, dans ce registre, ne nomme ni n'explique boucle, retard, stock, accumulation, dette,
  modèle, simulation, horizon temporel, échelle (équipe, ville), ni une quelconque prescription
  de Forrester sur la manière de décider.

TRAJECTOIRE ACTUELLE
- lead[0] : le lecteur voit, sur une situation concrète (maintenance repoussée), qu'une décision
  raisonnable au vu de ce qui se mesure peut produire un mieux puis une ruine. Delta réel et bon
  point d'entrée ; mais la vignette n'est pas marquée hypothétique (« imaginons ») et peut se lire
  comme un cas.
- lead[1] : le lecteur apprend que Forrester tient cette divergence des deux horizons pour le cas
  ordinaire et non l'exception. Delta réel, mais adossé à trois affirmations non financées :
  « range ce scénario parmi les comportements les plus dangereux », « en boucle avec des retards »,
  « au bout de plusieurs années ».
- S1.P1 : la citation exacte ; le delta propre est l'accent mis sur « généralement ». REDONDANT
  AVEC lead[1] pour l'essentiel (« c'est, dit-il, le cas ordinaire » disait déjà « généralement ») ;
  « ensemble bouclé » non financé.
- S1.P2 : la réciproque (ce qui améliore à long terme peut d'abord dégrader). Vrai delta, le plus
  fort de la section. Mais « commence donc souvent par faire empirer » durcit le « may » de la
  source en fréquence.
- S1.P3 : AUCUN DELTA valide, et pire, une contradiction logique : si ce qui soulage améliore
  d'abord et ce qui répare dégrade d'abord, les deux mesures ne « se ressemblent » pas au moment où
  l'on observe, elles divergent en sens opposé ; le piège est que le signal immédiat pointe à
  l'envers, pas qu'il soit indistinct. La phrase contredit aussi S4.P1.
- S2.P1 : le lecteur apprend pourquoi le court terme l'emporte : il est plus visible et plus
  pressant (citation financée). Delta réel ; la liste « plaintes, alertes, chiffres du mois,
  réunions » est une glose décorative non marquée.
- S2.P2 : REDONDANT AVEC S2.P1 (l'envers de la même asymétrie de visibilité), avec en plus un
  durcissement non financé : « ne produit aucun signal », « trop tard pour que quiconque relie »,
  « inscrite dans la façon dont l'information leur parvient ».
- S2.P3 : asymétrie de responsabilité (celui qui récolte n'est pas celui qui paie). Delta nouveau,
  mais explicitement hors du texte de l'auteur et sans aucun support : non finançable.
- S2.P4 : un pilotage à cycle court observe plus souvent la partie trompeuse de la réponse. Delta
  nouveau et intéressant, présenté comme « conséquence que le raisonnement impose » alors qu'il n'est
  ni financé ni strictement impliqué (rien ne dit qu'un cycle court aveugle davantage). Annonce
  S5.P2.
- S3.P1 : les dégradations s'empilent. Delta nouveau, aucun support.
- S3.P2 : la notion de stock contre flux. Delta nouveau, vocabulaire de discipline absent de tous
  les supports : connaissances générales du rédacteur.
- S3.P3 : « Forrester en tire une conséquence » (dette, mesures d'urgence qui cessent d'avoir
  prise). Attribution à l'auteur sans aucun support : faute documentaire grave.
- S3.P4 : « Il en tire aussi une lecture du présent » (difficultés actuelles = intérêts cumulés de
  décisions prises des décennies plus tôt). Seconde attribution sans support : faute grave.
- S4.P1 : la règle d'inversion est un contresens : la douleur n'est pas plus un indicateur que le
  soulagement. Delta réel, dérivable du « may » de SUP-8309eed15a1d5e9f. Contredit S1.P3.
- S4.P2 : l'analyse ne dispense pas de mesurer. Delta réel, mais appuyé sur une description du
  travail de Forrester (« construire des représentations qui donnent à voir le comportement d'un
  ensemble sur la durée ») que la seule désignation « fondateur de la dynamique des systèmes »
  (SUP-b9aef3b6c7d159ce) ne finance pas.
- S4.P3 : la proposition ne fixe aucune échéance ; ce qui est général est la contradiction, pas
  sa durée. Delta réel et utile ; les durées « quelques mois / une génération » et l'échelle
  « ville » sont inventées et non marquées comme hypothétiques.
- S5.P1 : demander par quel mécanisme et où un soulagement se paie. Delta pratique ; présuppose un
  paiement systématique alors que la source dit « usually ».
- S5.P2 : juger une décision sur la fenêtre où la réponse est inversée valide les mauvaises et
  condamne les bonnes. REDONDANT AVEC S2.P4 (même idée de fenêtre d'évaluation trompeuse) ;
  « systématiquement » trop fort ; « boucles et retards » non financés.
- S5.P3 : REDONDANT AVEC S5.P1 (chercher le versant retardé ailleurs que là où se voit le bénéfice),
  et attribue un conseil à Forrester (« l'analyse de Forrester ne conseille pas de refuser : elle
  conseille… ») sans support.
- S5.P4 : REDONDANT AVEC S4.P2 (représentation construite plutôt qu'observation directe), avec une
  nouvelle attribution non financée : « le geste que Forrester oppose à l'arbitrage au jugé ».

RÔLE DES SECTIONS
- S1 Deux réponses de sens contraire : poser les deux propositions de l'auteur ; rôle légitime,
  mais P1 répète le lead et P3 se trompe sur ce que les deux propositions impliquent.
- S2 Pourquoi le court terme parle plus fort : expliquer pourquoi le premier horizon l'emporte ;
  seul P1 est financé, P2 le redit, P3 et P4 sortent du dossier.
- S3 L'accumulation, et le moment où plus rien ne suffit : introduire stock, dette et lecture du
  présent ; section entièrement hors dossier, dont deux paragraphes attribués à Forrester.
- S4 Ce que le concept n'autorise pas à conclure : prévenir trois contresens ; la meilleure
  section du texte (P1, P3), mais P2 repose sur une description non financée de l'œuvre.
- S5 Ce que cela change pour qui arbitre : conséquences pratiques ; reprend S2.P4 et S4.P2,
  dédouble P1 en P3, et prête deux conseils à l'auteur.

SCORES
- fidélité documentaire : 1/4 — citations exactes (S1.P1, S1.P2, S2.P1), mais six attributions à
  Forrester sans aucun support (lead[1] « parmi les comportements les plus dangereux », S3.P3,
  S3.P4, S4.P2, S5.P3, S5.P4), vocabulaire de discipline absent des sources (boucles, retards,
  stock, flux : lead[1], S1.P1, S3.P2, S5.P2), durcissement du « may » en « souvent » (S1.P2), et
  aucune lecture déposée pour vérifier quoi que ce soit au-delà de trois phrases.
- progressivité pédagogique : 2/4 — l'ordre général (situation, propositions, visibilité,
  contresens, usages) est lisible, mais « boucle avec des retards » arrive dès lead[1] sans être
  construit, S1.P3 pose une conclusion que S4.P1 défait, et S5 revient en arrière sur S2.P4 et S4.P2.
- densité / non-redondance : 2/4 — cinq doublons : lead[1]/S1.P1, S2.P1/S2.P2, S2.P4/S5.P2,
  S5.P1/S5.P3, S4.P2/S5.P4 ; S1.P3 sans delta valide.
- clarté : 3/4 — phrases simples, entrée concrète (lead[0]), aucune plomberie visible ; mais
  S3.P2 introduit « stock » et « flux » comme jargon de discipline, et S1.P3 brouille la logique.
- profondeur explicative : 2/4 — le texte offre un « pourquoi » (asymétrie de visibilité S2.P1,
  accumulation S3), mais le seul étage financé est la visibilité ; le mécanisme qui fait diverger
  les deux horizons n'est expliqué que par des notions hors dossier.
- valeur des exemples : 2/4 — lead[0] fait vraiment comprendre le retournement, mais n'est pas
  marqué hypothétique et n'est jamais repris ; S2.P1 (plaintes, alertes) décore ; S4.P3 (équipe,
  ville) donne des durées inventées.
- limites / nuances : 3/4 — S4.P1 et S4.P3 évitent de vrais contresens au bon endroit ; S4.P2 bien
  pensé mais mal fondé ; S1.P3 introduit lui-même le contresens que S4.P1 corrige.
- pouvoir d'ouverture : 1/4 — la fin (S5.P4) s'achève sur une attribution non financée et une
  morale (« du travail plutôt que de la prudence ») ; rien ne renvoie au texte de 1971, au fait
  que le texte lu en est une révision de 1995, ni à l'article de Sterman, alors que ce sont les
  seules ouvertures que les supports permettent de nommer.

défauts majeurs :
- S3 entière est hors dossier, et deux de ses paragraphes (S3.P3, S3.P4) prêtent à Forrester des
  thèses qu'aucun support ne porte : c'est exactement la faute critique qui interdit PASS.
- S5.P3 et S5.P4 prêtent à Forrester des conseils de décision ; S4.P2 décrit le contenu de son
  œuvre ; lead[1] lui fait classer la vignette « parmi les comportements les plus dangereux ».
- Le mécanisme central (boucles, retards) est affirmé dès lead[1] et repris en S1.P1 et S5.P2 sans
  qu'aucun support ne le nomme.
- S1.P3 contredit logiquement les deux propositions qu'il prétend synthétiser, et S4.P1.
- S1.P2 transforme « may initially depress » en « commence donc souvent par faire empirer ».
- S2.P3 avoue lui-même être hors texte (« n'est pas dans le texte ») : déclarer l'extension ne la
  finance pas.
- lead[0] est une vignette inventée sans marque hypothétique (PROTOCOLE §4).
- Champ interne `limits` : limits[1] (« modèles urbains et mondiaux… équations, constantes ») et
  limits[3] (Sterman a mené des « travaux expérimentaux… sur des systèmes à retard ») décrivent
  le contenu d'œuvres qu'aucun support ne décrit ; Sterman est metadata-only (SUP-7d92cd2cb2022153).
  Frontière interne, mais elle sert de garde-fou et ne doit pas elle-même importer de la matière
  non lue.

matière disponible mais sous-exploitée :
- Le statut modal de la réciproque : « may initially depress » (SUP-8309eed15a1d5e9f) contre
  « usually » (SUP-4d2830ee8ef2e997). Les deux propositions n'ont pas la même force ; c'est ce qui
  fonde proprement S4.P1 (la douleur n'est pas un indicateur) et ce que S1.P2 efface en écrivant
  « souvent ».
- Les deux adjectifs distincts de SUP-24054b796591ef6b : « visible » (on le voit) et
  « compelling » (il presse, il contraint). Le texte les fond en « plus bruyant » ; leur
  distinction est le seul mécanisme financé de la domination du court terme, et peut porter seul
  S2 à la place de S2.P2-P4.
- La datation et la révision du texte (SUP-53f95d9946006afb, SUP-36933704fc895f9f,
  SUP-873a1fcfca7989cd) : la proposition est formulée dans une révision de 1995 d'un article de
  1971, révision qui a déplacé le texte ; c'est une ouverture honnête (« la formulation de 1971
  reste à lire ») que le texte lecteur n'exploite pas.
- Le titre même de l'article, « Counterintuitive Behavior of Social Systems »
  (SUP-36933704fc895f9f) : il permet de nommer le cadre (comportement contre-intuitif des systèmes
  sociaux) sans en décrire le contenu.
- Le titre de Sterman 2001 (SUP-7d92cd2cb2022153), citable comme ouverture nommée, sans aucune
  phrase sur son contenu.

limites documentaires :
- Aucun dossier de preuve : le texte de D-4468-2, déclaré `full-text`, n'est disponible que par
  trois phrases recopiées dans `quotation` et `notes`. Le raisonnement qui, dans l'article, conduit
  à la proposition de la p. 12 (section VI), ses exemples, et la manière dont l'auteur explique le
  retournement ne sont dans aucun support.
- Rien ne finance : boucles, retards, stocks, accumulation, dette, modèles urbains ou mondiaux,
  horizons temporels, échelles d'application, prescriptions de décision, qualification de
  « dangereux ».
- Sterman 2001 et Simulation 1971 sont metadata-only : titre, date, pagination, rien d'autre.
- La revue de la fiche est déclarée non aveugle (SUP-897f28c3defd623f) ; ce n'est pas une réserve
  sur le contenu, mais une raison de plus de ne pas étendre le texte au-delà des verbatim relevés.

BUDGET DE L'AJOUT
- ajouts prescrits et supports qui les financent : aucun ajout de contenu nouveau. Seuls des
  recadrages à matière constante sont autorisés : distinguer « usually » et « may »
  (SUP-4d2830ee8ef2e997, SUP-8309eed15a1d5e9f) ; distinguer « visible » et « compelling »
  (SUP-24054b796591ef6b) ; nommer la révision 1995 d'un texte de 1971 et le titre de Sterman 2001
  comme ouvertures (SUP-53f95d9946006afb, SUP-36933704fc895f9f, SUP-7d92cd2cb2022153).
- prescriptions écartées faute de support : expliquer le mécanisme du retournement par les
  boucles et retards ; développer l'accumulation, le stock, la dette (S3) ; décrire ce que fait la
  dynamique des systèmes ou les modèles de Forrester (S4.P2, S5.P4) ; donner des échéances par
  échelle (S4.P3) ; attribuer à Forrester des conseils de décision (S5.P3, S5.P4) ; asymétrie de
  responsabilité (S2.P3) ; effet de la fréquence de pilotage (S2.P4) ; décrire les travaux de
  Sterman.
- sens attendu du volume : nettement plus court. Le texte actuel (1 154 mots) est déjà sous le
  plancher de 1 300 ; une version qui ne garde que ce que le pack finance tiendrait autour de
  600 à 750 mots. Le protocole tient un texte sous 1 100 mots pour un texte qui « n'a rien
  ajouté » : la cible ne peut pas être atteinte honnêtement, d'où le verdict.

TRAJECTOIRE CIBLE (à n'exécuter que si la chaîne choisit une version courte plutôt que le
déblocage documentaire ; sinon, rouvrir D-4468-2 et déposer sa lecture d'abord)
- lead : le lecteur entre sans rien savoir. Il comprend, sur une vignette explicitement
  hypothétique (« imaginons un service… », lead[0] conservé et marqué), qu'une décision peut
  améliorer d'abord et dégrader ensuite, puis que Forrester tient cette divergence pour le cas
  habituel dans un système social (SUP-c4137f292e1bd542, SUP-4d2830ee8ef2e997). Ne pas écrire
  « boucles », « retards », « plusieurs années », ni « parmi les plus dangereux ».
- S1 (les deux propositions) : il sait que le cas est habituel ; il apprend la proposition exacte
  et sa réciproque, et surtout que les deux n'ont pas la même force (« usually » contre « may »).
  Matière : SUP-3fa993d883db1a72, SUP-4d2830ee8ef2e997, SUP-8309eed15a1d5e9f. Ne pas redire
  « cas ordinaire » du lead ; supprimer S1.P3 ; remplacer sa synthèse par la vraie : le signal
  immédiat pointe souvent à l'envers, il n'est pas muet.
- S2 (pourquoi le court terme l'emporte) : il sait que les deux horizons divergent ; il apprend
  la raison que donne l'auteur, en deux temps distincts : plus visible, plus pressant
  (SUP-24054b796591ef6b). Un seul paragraphe, deux au plus. Supprimer S2.P2-P4 ; ne pas
  transformer « plus visible » en « aucun signal ».
- S3 (contresens) : il connaît les deux propositions et l'asymétrie de visibilité ; il apprend ce
  qu'elles n'autorisent pas : inverser la règle (fondé sur « may », SUP-8309eed15a1d5e9f) et lire
  une échéance dans une proposition qui n'en fixe aucune (lecture du texte cité lui-même,
  SUP-4d2830ee8ef2e997). Matière de S4.P1 et S4.P3 actuels, sans les durées inventées ni l'échelle
  « ville ». S4.P2 se garde seulement s'il est réécrit sans décrire l'œuvre de Forrester.
- S4 (usage) : un seul paragraphe d'extension explicitement marquée (« cela implique que… ») :
  avant une décision qui soulage, se demander si son bon effet visible n'est pas précisément le
  versant trompeur. Fond de S5.P1 ; supprimer S5.P2-P4 et toute attribution de conseil.
- Fin : ouverture nommée, sans contenu : la formulation lue est celle d'une révision de 1995 d'un
  article de 1971 que la révision a déplacé (SUP-53f95d9946006afb, SUP-36933704fc895f9f,
  SUP-873a1fcfca7989cd), et l'article de Sterman de 2001 est titré « System Dynamics Modeling:
  Tools for Learning in a Complex World » (SUP-7d92cd2cb2022153). Ne rien dire de leur contenu.
- Supprimer S3 actuelle entière.
- `limits` : retirer de limits[1] et limits[3] toute description du contenu des modèles de
  Forrester et des travaux de Sterman ; nommer seulement l'état d'accès et ce qu'il interdit.

raison du verdict : le texte n'est pas seulement redondant, il tient sa profondeur de matière qui
n'existe pas dans le dossier. Une fois retirés S3 entière, les attributions non financées
(lead[1], S4.P2, S5.P3, S5.P4), les extensions hors texte (S2.P3, S2.P4) et les doublons, il reste
trois verbatim, un résumé et des métadonnées : de quoi écrire un texte exact d'environ 600 à 750
mots, sans le mécanisme qui fait diverger les deux horizons, c'est-à-dire sans la profondeur
explicative qu'un approfondissement doit apporter (cible 1 300-1 700 mots). Il n'y a aucun
dossier de preuve, et la source déclarée `full-text` n'est corroborée par rien
(`dossier-absent`). Ce n'est donc pas un défaut d'écriture qu'un REWRITE corrigerait : la matière
manque. Déblocage : déposer sous `corpus/evidence/court-terme-contre-long-terme/` une lecture de
D-4468-2 (au minimum la section VI et le raisonnement qui conduit à la p. 12) ; à défaut, la
trajectoire courte ci-dessus est la seule réécriture finançable.
