concept : amenagement-onereux-du-monde-exterieur
verdict : REVISE

protocole d'audit : version 3
matière ouverte : corpus/deepenings/amenagement-onereux-du-monde-exterieur.json ;
corpus/validated/amenagement-onereux-du-monde-exterieur.json (dont `notes`, 20 entrées, et
`review.notes`, 10 entrées) ; corpus/evidence/amenagement-onereux-du-monde-exterieur/ listé
soi-même, un seul fichier : lecture.json (pas de scouting.json dans ce répertoire) ;
src/app/explore/concept/approfondir/DeepeningDetail.tsx pour savoir ce que le lecteur voit.
Le champ `dossier` de l'enregistrement validé est absent (`None`) : le répertoire conventionnel
est donc le seul dossier de cette carte, et rien d'autre n'était à résoudre.
Aucune recherche web. `npm run corpus:deepen -- --check --only=...` passe (1634 mots comptés par
le script ; 1377 mots de texte lecteur, 213 mots de `limits`).

Isolation : les répertoires corpus/evidence/definition-de-la-psychologie-economique/,
corpus/evidence/conduite-economique/ et corpus/evidence/milet-1982-tarde-psychologie-economique/
existent et concernent d'autres cartes ou d'autres sources ; ils n'ont pas été ouverts, bien que
les `notes` de cette fiche les nomment. Le répertoire de travail de cette carte était vide.

---

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur sait que rien de ce qui rend le monde habitable n'est gratuit, et surtout
  que le prix ne se paie pas seulement en argent mais en renoncements. Delta franc, sans un mot
  savant, avec deux situations observables (l'eau au robinet, le logement chaud en janvier).
- lead[1] : le lecteur découvre que les traces non comptables de ce prix (hésiter, arbitrer, se
  disputer, regretter, se justifier) ne sont pas un résidu mais l'objet revendiqué d'une
  discipline, et qu'un auteur daté en propose la définition en 1962. Delta réel : il y a un objet,
  et quelqu'un le nomme.
- S1.P1 : le lecteur apprend que « onéreux » ne désigne pas un prix affiché mais l'équilibre des
  fins et des moyens, et que cet équilibre se décompose en trois problèmes nommés (rareté, choix,
  coût). Delta net, et le seul endroit du texte où un verbatim d'Albou porte le raisonnement.
- S1.P2 : le lecteur comprend que la rareté n'est pas une propriété d'un bien mais un rapport, et
  que l'eau potable et l'air pur le montrent en y entrant. Delta fort ; c'est l'exemple le plus
  utile du texte parce qu'il fait comprendre un mécanisme et non une définition.
- S1.P3 : le lecteur apprend que le choix se paie (appauvrissement par élimination, renvoi à
  Spinoza) et que le coût nomme l'abandonné. Delta réel mais surchargé : trois idées, dont la
  chaîne coût → évaluation des renonciations → calcul économique → décision n'est que nommée, alors
  que le dossier l'articule entièrement. La phrase « trois façons dont une situation devient un
  problème pour quelqu'un » est une lecture, en régime d'affirmation d'auteur.
- S1.P4 : le lecteur voit que l'adjectif n'est pas un mot de préambule mais un opérateur qui
  redécoupe la discipline ailleurs dans l'article (psychologie de la vente, page 67 ; psychologie
  de l'échange onéreux, page 72). Delta d'un genre différent et bienvenu : le concept travaille.
- S2.P1 : le lecteur apprend que « aménager » veut dire agencer selon un plan, et qu'il s'ensuit
  que le comportement économique dessine des schèmes reconnaissables. Delta réel.
- S2.P2 : le lecteur comprend pourquoi cela change la méthode : une réaction se compte, une
  activité structurée se décrit. Delta pédagogique réel, mais l'argument « on la compte, on la
  corrèle, on n'en dit rien de plus » n'a aucun appui dans la matière disponible, et la
  proposition finale rattache le rapprochement avec la praxis de Marx à cet argument de méthode,
  alors que le dossier l'attache à une autre des idées du mot (l'activité).
- S2.P3 : le lecteur apprend que le mot vaut à l'échelle d'une personne comme d'un groupe. Delta
  mince (32 mots), et sa seconde moitié (« sans obliger à commencer par l'individu ») est une
  inférence du rédacteur, pas une proposition d'Albou.
- S3.P1 : le lecteur découvre que le monde extérieur d'Albou n'est pas la matière mais aussi
  l'institution, la culture, les symboles, les normes, les valeurs, et surtout le social ; donc
  qu'on aménage des règles et des rapports. Delta fort, et il défait le contresens que le lead
  installait volontairement.
- S3.P2 : le lecteur reçoit l'énoncé complet de la définition, avec la méthode et l'interaction des
  individus et des groupes. Delta réel, mais chronologiquement brouillé : « Deux ajouts s'y
  voient » laisse croire que ces deux clauses arrivent avec le rappel de 1982, quand la définition
  intégrale est déjà imprimée en capitales page 11 en 1962.
- S3.P3 : le lecteur sait que les problèmes visés naissent entre des personnes, avec trois
  illustrations. Delta faible : les trois exemples démontrent tous la même chose, et le premier
  (« les tensions d'un ménage autour d'une dépense ») recycle « on se dispute en famille » de
  lead[1]. REDONDANT AVEC lead[1] pour l'exemple.
- S3.P4 : le lecteur apprend qu'une clause de la définition a une histoire, et que l'auteur s'est
  corrigé lui-même : la filiation à la psychologie sociale, revendiquée en 1962, est ce qu'il juge
  excessif vingt ans plus tard. Meilleur paragraphe du texte : c'est un delta que rien d'antérieur
  ne laissait prévoir, et il change le statut de tout ce qui précède.
- S4.P1 : le lecteur comprend que définir était un enjeu en 1962 parce que la discipline existait
  sans énoncé de son objet, et qu'Albou annonce la sienne comme assez généralement acceptée par les
  chercheurs français. Delta réel.
- S4.P2 : le lecteur apprend contre qui la définition se pose (Reynaud, 1954), ce qu'Albou lui
  concède (l'antériorité de publication) et ce qu'il lui refuse (avoir défini la discipline, et
  l'avoir historiée du point de vue de l'économiste). Delta réel, appuyé sur un verbatim.
- S4.P3 : le lecteur retient que publier le premier ne fonde pas une discipline. En grande partie
  REDONDANT AVEC S4.P2, dont « cet ouvrage ne définit nulle part la discipline dont il traite »
  portait déjà la conclusion ; ce que P3 ajoute vraiment est la clause « et depuis quel point de
  vue », plus la revendication de 1982, soit un demi-delta étiré sur 83 mots.
- S5.P1 : le lecteur apprend que la page qui porte la définition ne crédite personne, ni par note
  ni par appel de note, et que la seule dette d'économiste voisine est Robbins. Delta réel
  (l'absence de note est un fait de la pièce), légèrement amorti par la reprise de Robbins déjà
  nommé en S1.P2.
- S5.P2 : le lecteur découvre qu'une provenance concurrente existe, antérieure de sept ans, qu'elle
  ne circule que dans une littérature d'enseignement et de compilation qui ne donne jamais de page,
  et qu'elle n'est même pas unanime. Delta fort, et la conclusion « rien de tout cela ne tranche »
  est exactement au niveau de ce que la matière permet.
- S5.P3 : le lecteur croit apprendre que ce qui revient à Albou n'est pas d'avoir forgé la formule
  mais de l'avoir déplacée depuis l'économie. Le premier tiers du paragraphe (la formule ne se
  rencontre guère qu'à la suite d'Albou dans les revues numérisées) est un delta légitime ; la
  phrase finale tranche dans les deux sens que la matière interdit, contredit la phrase précédente
  du texte et contredit `limits[0]` du même fichier.

---

RÔLE DES SECTIONS

- S1 « Ce que « onéreux » veut dire ici » : convertit l'intuition du lead en un appareil à trois
  entrées, en montrant que le mot le plus ordinaire de la définition est le plus chargé.
- S2 « Aménager, c'est agencer selon un plan » : retire au comportement économique son statut de
  réaction, et fait de lui une action structurée, donc descriptible.
- S3 « Un monde extérieur qui est d'abord social » : déplace l'objet de la matière vers le social,
  livre l'énoncé complet, puis datant une clause, montre l'auteur se corrigeant lui-même.
- S4 « Un ouvrage qui ne définissait pas son objet » : explique pourquoi l'acte de définir était un
  enjeu, en le rapportant au concurrent que la définition vise.
- S5 « L'origine incertaine de trois mots » : rouvre la question de la provenance du syntagme et
  restitue ce qui est réellement acquis à son sujet.

La progression est explicable en une phrase par section, et l'ordre est défendable : les trois mots
de la formule, puis l'enjeu de la formuler, puis la question de savoir d'où viennent les mots. Le
texte ne stagne pas. Il ne saute qu'une fois (S3.P2, voir plus bas), et il souffre d'un trou
d'articulation : S1 annonce « l'équilibre des fins et des moyens » et S2 ne dit rien de la finalité,
qui est précisément l'idée du mot « aménager » qui ferait tenir l'annonce.

---

SCORES

- fidélité documentaire : 2/4 — Le traitement des verbatim est exemplaire : les trois passages
  entre guillemets sont tous traçables, la distinction page 10 / page 11 pour « assez généralement
  acceptée par les chercheurs français » est respectée, Robbins et Spinoza sont bien à la page 12,
  les pages 67 et 72 sont justes. Mais trois fragilités visibles : (a) S5.P3, « Le geste qui lui
  revient n'est donc pas d'avoir forgé une formule, c'est de l'avoir déplacée : prise à
  l'économie », affirme à la fois qu'il ne l'a pas forgée et qu'elle vient de l'économie, quand
  `notes[1]` de l'enregistrement écrit sous le titre « CE QUE LA CARTE REFUSE D'ÉCRIRE » qu'elle
  n'écrit ni qu'Albou a forgé le syntagme, ni qu'il le reprend de Barre, « l'affirmer serait la
  même faute en sens inverse » ; (b) S2.P2, « c'est pour cette raison qu'Albou le rapproche de la
  praxis chez Marx », rattache le rapprochement à un argument de méthode que le texte vient
  d'inventer, alors que la matière l'attache à l'idée d'activité ; (c) S3.P2, « Deux ajouts s'y
  voient », peut se lire comme datant de 1982 deux clauses imprimées en 1962.
- progressivité pédagogique : 3/4 — L'ordre monte réellement : lead concret, puis les mots de la
  définition, puis l'enjeu de définir, puis la philologie. Deux accrocs. S1.P1 ouvre par « Sa phrase
  tient en une ligne » alors que le lecteur n'a jamais lu cette phrase : le texte commente
  l'adjectif d'un énoncé qu'il ne lui a pas montré, et la page d'approfondissement n'affiche pas la
  citation de la carte (vérifié dans DeepeningDetail.tsx : titre, accroche, lead, sections, rail de
  sources, rien d'autre). Et S3.P2 introduit « le premier caractère d'une définition plus longue »,
  un découpage de l'article que rien n'a préparé.
- densité / non-redondance : 3/4 — Densité réelle, aucune séquence de trois paragraphes à delta
  identique. Trois relâchements : S4.P3 rejoue pour l'essentiel S4.P2 ; S3.P3 réemploie l'exemple
  du conflit domestique déjà donné en lead[1] et aligne trois illustrations qui prouvent la même
  chose ; S2.P3 fait 32 mots pour un demi-delta.
- clarté : 3/4 — Le lead est modèle du genre : aucun terme savant, deux situations que tout le
  monde a vécues, et le mot « renoncements » posé avant que « coût » n'arrive. « Onéreux » est
  expliqué à l'instant où il sert. Les zones d'ombre sont celles déjà citées : l'énoncé absent
  derrière « sa phrase », « premier caractère », et l'ambiguïté de « deux ajouts ».
- profondeur explicative : 3/4 — Le texte explique vraiment des mécanismes : la rareté comme
  rapport et non comme propriété, le choix comme négation, le plan comme condition de la
  description. Il s'arrête trop tôt deux fois : la chaîne du coût (évaluer l'importance relative
  des renonciations, d'où un calcul reposant sur des hypothèses, d'où la décision) est seulement
  mentionnée par sa conclusion, et l'« équilibre des fins et des moyens » annoncé en S1.P1 n'est
  jamais dénoué parce que l'idée de finalité manque.
- valeur des exemples : 3/4 — L'eau potable et l'air pur portent à eux seuls la compréhension que
  la rareté est un rapport : sans eux, la phrase resterait une thèse. L'eau au robinet et le
  logement chaud en janvier installent le problème sans un mot de théorie. En regard, les trois
  exemples de S3.P3 décorent : ils instancient « entre des personnes » sans rien rendre
  intelligible qui ne le fût déjà, et l'un d'eux est déjà dans le lead.
- limites / nuances : 2/4 — Deux nuances sont bien placées et réellement utiles : la correction
  qu'Albou s'inflige à lui-même sur la psychologie sociale (S3.P4), et l'incertitude de provenance
  (S5.P2). Mais la nuance la plus protectrice manque : Albou restreint explicitement ce qu'il
  appelle problèmes humains (ce n'est pas une technologie de l'action sociale, la discipline ne
  s'intéresse pas aux données techniques de la transformation du monde, ces problèmes humains sont
  des problèmes sociaux), et le lead invite précisément au contresens que cette restriction
  écarte. Deuxième manque : le lecteur n'apprend nulle part que le jugement porté sur Reynaud n'a
  qu'une voix, celle d'Albou, réserve qui n'existe que dans `limits[1]`, invisible à la lecture.
  Troisième : S5.P3 démonte la nuance que S5.P2 venait de construire.
- pouvoir d'ouverture : 2/4 — La dernière section porte la bonne tension, et c'est une vraie
  raison de continuer. Elle la referme dans sa dernière phrase, et le seul objet qui donnerait au
  lecteur quelque chose à ouvrir (le tome I de 1955, nommé dans `limits[0]`) ne lui est jamais
  offert. Le texte finit donc sur une conclusion, là où il tenait une question.

---

défauts majeurs :
- S5.P3, dernière phrase : elle tranche l'origine du syntagme dans les deux sens que
  l'enregistrement validé refuse explicitement, contredit « Rien de tout cela ne tranche, ni dans
  un sens ni dans l'autre » écrit dix lignes plus haut, et franchit la frontière que `limits[0]` du
  même fichier pose. C'est le défaut qui interdit `PASS` à lui seul.
- Le lecteur ne lit jamais la phrase que tout le texte commente. La citation existe, elle est
  verbatim et citable, et la page d'approfondissement ne l'affiche pas par ailleurs.
- L'accroche affichée au-dessus du texte demande quels problèmes humains naissent de l'aménagement
  onéreux. Le texte commente « onéreux », « aménager » et « monde extérieur », et laisse de côté
  le seul terme que l'accroche interroge.
- S2.P2 : argument de méthode sans appui dans la matière disponible, et rattachement de la praxis
  de Marx à cet argument plutôt qu'à l'idée à laquelle il se rattache.
- S3.P2 : « Deux ajouts s'y voient » brouille la chronologie 1962 / 1982 sur des clauses déjà
  imprimées en 1962.
- Deltas faibles : S2.P3 (32 mots, dont une inférence), S3.P3 (trois exemples équivalents, un
  recyclé du lead), S4.P3 (reprise de S4.P2).

matière disponible mais sous-exploitée :
- La troisième idée du mot « aménager » : agencer en vue d'un but, tenter d'atteindre, consciemment
  ou non, certains objectifs, par exemple la satisfaction des besoins individuels ou collectifs.
  C'est elle qui relie « aménager » à l'« équilibre des fins et des moyens » annoncé en S1.P1, et
  elle est absente. Son absence est la raison pour laquelle S1 et S2 ressemblent à deux gloses
  indépendantes.
- La restriction sur « problèmes humains » : pas une technologie de l'action sociale, pas les
  données techniques de la transformation du monde, et ces problèmes humains sont des problèmes
  sociaux. Matière disponible, et c'est la distinction dont le lead a le plus besoin.
- La chaîne complète du coût : évaluer l'importance relative des renonciations, d'où un calcul
  économique reposant sur des hypothèses, d'où la décision, que l'auteur tient pour parmi les
  problèmes les plus importants de la discipline. Le texte en garde la conclusion et jette le
  mécanisme.
- Le fait que la définition de 1962 se pose contre une définition dite classique, celle de
  Wärneryd : c'est le contraste qui expliquerait pourquoi il existe une « conception française »
  et pourquoi le chapitre s'appelle Définitions. Rien n'en est fait.
- La citation de la carte elle-même, verbatim et vérifiée sur l'image de la page imprimée.
- La réception de l'article, pour le seul fait établi qui la concerne : rien n'est disponible. Cela
  ne se dit pas au lecteur, mais cela interdit toute section de postérité, et il faut le savoir
  avant de proposer d'en ajouter une.

limites documentaires :
- Le texte de Raymond Barre n'est pas accessible au dossier, et la matière consigne en détail les
  voies essayées. Aucune section ne peut donc dire ce que Barre écrit, ni en quels termes, ni à
  quelle page. La trajectoire cible n'en tire aucune conclusion, ni dans un sens ni dans l'autre :
  elle prescrit de rester au niveau où la matière s'arrête.
- Attention, et c'est le point où cet audit se refuse à prescrire : l'argument de corpus (la
  formule ne se rencontre, dans les revues numérisées, qu'à la suite d'Albou) est une recherche
  d'absence, et la matière le dit elle-même : le corpus interrogé n'indexe pas les manuels des
  Presses universitaires de France, « l'absence de Barre dans Persée ne prouve donc rien sur
  Barre ». Une réécriture n'a pas le droit de durcir cet argument en conclusion d'origine. Ce
  qu'il établit est plus étroit, et c'est déjà beaucoup : dans les sciences humaines, cette
  formule circule par Albou.
- La piste Perroux n'est ni vérifiée ni écartée : la page qui la porte n'a pas pu être ouverte.
  Elle se mentionne comme non-unanimité, jamais comme provenance.
- Le constat « Albou ne crédite personne » a une portée qui est consignée et qu'il faut respecter :
  il porte sur la couche texte des 81 pages et sur la relecture en image de la page de titre et des
  pages 7, 10 et 11, pas sur les 81 images. Le texte actuel reste dans cette portée en parlant de
  la seule page 11 ; qu'il continue.
- Le rapport de 1962 au Commissariat Général du Plan d'équipement et de la Productivité n'est
  connu que par le renvoi qu'Albou y fait en 1982. Rien ne peut être dit de son contenu ; il peut
  être nommé comme ce qui daterait la formule au plus juste.
- Rien n'est disponible sur la position de Reynaud lui-même : aucune antériorité ne peut être
  tranchée, et le jugement d'Albou sur son livre doit se lire comme le jugement d'Albou.
- Signal pour la chaîne de fact-check, sans verdict de ma part : S5.P3 (« Dans les revues
  françaises de sciences humaines aujourd'hui numérisées ») généralise à un ensemble plus large que
  les deux corpus effectivement interrogés ; S1.P2 (« c'est en y entrant qu'il devient
  économique ») et S1.P3 (« trois façons dont une situation devient un problème pour quelqu'un »)
  sont des lectures en régime d'affirmation d'auteur ; S2.P3 (« sans obliger à commencer par
  l'individu ») est une inférence. `limits` fait 213 mots pour une fourchette de 100 à 200, et
  `limits[0]` nomme bien la source et son état d'accès mais pas l'affirmation qu'il interdit, ce
  qui est probablement la raison mécanique pour laquelle S5.P3 a pu la franchir sans que rien ne
  l'arrête.

---

TRAJECTOIRE CIBLE

L'architecture est conservée : cinq sections, le même ordre, les mêmes titres à une exception près.
Les corrections sont locales, plus une redistribution de matière déjà disponible. Le lead est
excellent et ne doit pas être touché, sauf par la fin de lead[1], qui doit donner l'énoncé.

- lead (2 paragraphes, inchangé sur le fond) : le lecteur y entre sans rien savoir ; il en sort en
  sachant que le prix du monde habitable se paie en renoncements, et que cela fait l'objet d'une
  discipline. Ce que la réécriture ajoute : la phrase elle-même, en clair, à la place de « il en
  propose la définition ». La matière est la citation vérifiée de la carte, reproductible au
  caractère près. À ne surtout pas répéter ensuite : la liste des situations concrètes ; lead[0]
  l'a faite, S3.P3 n'a pas à la refaire.
- S1 « Ce que « onéreux » veut dire ici » : le lecteur entre avec l'énoncé sous les yeux et l'idée
  que tout se paie. Il en sort avec l'appareil à trois problèmes, et surtout avec le mécanisme
  complet du troisième : le coût oblige à évaluer l'importance relative des renonciations, ce qui
  conduit à un calcul appuyé sur des hypothèses, et c'est ce calcul qui fonde la décision, laquelle
  est pour l'auteur parmi les problèmes les plus importants de la discipline. Matière : le
  commentaire de la page 12, les verbatim sur l'adjectif, Robbins, l'eau potable et l'air pur,
  Spinoza, le réemploi des pages 67 et 72. Ne doit surtout pas répéter le lead en langue savante :
  l'eau du robinet a déjà servi, l'eau potable sert ici à autre chose (à montrer qu'un bien entre
  dans la rareté), et c'est cette différence qu'il faut rendre lisible. Les deux lectures du
  rédacteur (« il devient économique », « trois façons dont une situation devient un problème »)
  gagnent à être marquées comme lectures ou supprimées : elles ne portent rien que le mécanisme ne
  porte mieux.
- S2 « Aménager, c'est agencer selon un plan » : le lecteur entre en sachant que l'arrangement du
  monde est coûteux et qu'il vise un équilibre entre des fins et des moyens. Il en sort en sachant
  que l'aménagement est une activité, qu'elle suit un plan et un programme, donc qu'elle dessine
  des schèmes, et qu'elle est orientée vers des buts, la satisfaction de besoins individuels ou
  collectifs. Matière : les trois idées du mot, dont la finalité, actuellement absente ; le
  rapprochement avec la praxis, rendu à l'idée d'activité à laquelle il appartient. Ne doit surtout
  pas répéter : l'argument méthodologique inventé de S2.P2, ni gonfler le demi-paragraphe sur
  l'individuel et le social, qui peut se fondre en une proposition dans le paragraphe d'ouverture.
  C'est ici, et non plus tard, que l'« équilibre des fins et des moyens » promis en S1 se règle.
- S3 « Un monde extérieur qui est d'abord social » : le lecteur entre en sachant ce que « onéreux »
  et « aménager » chargent. Il en sort en sachant que ce qu'on aménage est institutionnel, culturel
  et surtout social, et que le terme le plus discret de la définition, « problèmes humains », est
  celui qui exclut le plus : la discipline n'est pas une technologie de l'action sociale, elle ne
  traite pas des données techniques de la transformation du monde, et ces problèmes humains sont
  des problèmes sociaux. C'est la limite qui empêche le contresens que le lead a installé, et sa
  place est ici, pas plus tard. Matière : le commentaire du premier terme de la définition, et
  l'énoncé complet. Ne doit surtout pas répéter : les exemples domestiques du lead ; si un exemple
  reste nécessaire pour « entre des personnes », un seul suffit, et il doit servir à autre chose
  qu'à instancier la formule.
- S4 « La clause qui a changé d'avis » (titre indicatif, à ne pas reprendre tel quel, il nomme une
  fonction) ou mieux, un titre qui nomme la psychologie sociale : le lecteur entre avec la
  définition entière comprise. Il en sort en sachant qu'une de ses clauses est datée, qu'elle
  revendiquait en 1962 une filiation à la psychologie sociale contre un rattachement à la science
  économique, et que vingt ans plus tard l'auteur la juge trop généreuse. Matière : les deux
  verbatim, celui de 1962 sur la préférence des chercheurs français et « peut-être par réaction, la
  part trop belle à la psychologie sociale ». Correction obligatoire : dire clairement que l'énoncé
  complet est de 1962, et que 1982 le rappelle pour s'en écarter ; « deux ajouts » doit disparaître.
  Ne doit surtout pas répéter : l'énoncé de la définition, déjà donné.
- S5 « Un ouvrage qui ne définissait pas son objet » : le lecteur entre en sachant qu'une définition
  peut vieillir. Il en sort en sachant pourquoi définir était un acte, et contre quoi : un livre
  antérieur de huit ans qui fait le bilan d'un demi-siècle de recherches et ne définit nulle part
  la discipline dont il traite, et qu'Albou reproche en outre d'avoir écrit cette histoire du point
  de vue de l'économiste. Deux gains disponibles : le lecteur doit apprendre en passant que ce
  jugement est celui d'Albou et qu'aucune autre voix ne se fait entendre ici, ce qui ne dort
  aujourd'hui que dans la frontière interne ; et la définition dite classique à laquelle Albou
  oppose la sienne peut donner le contraste qui manque, puisque c'est elle qui explique le mot
  « française » dans « conception française ». Ne doit surtout pas répéter : la conclusion générale
  de S4.P3, qui se réduit à une proposition et se place mieux en fin de paragraphe précédent.
- S6 « L'origine incertaine de trois mots » : le lecteur entre convaincu que la formule est
  l'instrument d'Albou. Il en sort en sachant que l'origine des trois mots, elle, est ouverte : la
  page qui les imprime ne crédite personne, aucune note ni appel de note ne s'y trouve, et la seule
  dette d'économiste voisine est Robbins ; une provenance concurrente circule, antérieure, dans une
  littérature d'enseignement et de compilation qui ne donne jamais de page ; elle n'est pas unanime.
  Ce qui est acquis, et qui doit rester la dernière proposition affirmative du texte : dans les
  sciences humaines, cette formule circule par lui, et la définition bâtie sur elle est de lui.
  Ce que la section ne doit surtout pas faire : conclure. Ni qu'il a forgé la formule, ni qu'il l'a
  prise à l'économie, ni qu'il l'a prise à quiconque. La dernière phrase doit désigner ce qui
  déciderait, et laisser le lecteur avec un volume à ouvrir : le tome I de 1955, où l'on lira en
  quels termes l'économie politique y est définie. C'est aussi ce qui rend au texte son pouvoir
  d'ouverture.
- `limits` : à resserrer sous 200 mots, et à compléter sur le point qui a failli. Chaque entrée doit
  nommer la source, son état d'accès et l'affirmation qu'elle interdit, en propres termes pour
  celle-ci : ni « Albou a forgé le syntagme », ni « Albou le reprend de Barre », ni aucune
  formulation qui referme la provenance. Ajouter la portée exacte du constat d'absence de note
  (couche texte des 81 pages, images de la page de titre et des pages 7, 10 et 11) et la portée de
  l'argument de corpus (les manuels des Presses universitaires de France n'y sont pas indexés).

---

raison du verdict : REVISE, et non REWRITE. L'architecture est saine et la trajectoire monte
réellement : chaque section a un rôle disant en une phrase, aucune section ne répète une section
antérieure, aucune séquence de trois paragraphes n'a le même delta, et deux passages sont
remarquables (l'eau potable et l'air pur comme preuve que la rareté est un rapport ; l'auteur se
corrigeant lui-même vingt ans plus tard). Ce n'est pas non plus `BLOCKED_SOURCE` : la matière
disponible est l'une des plus riches qu'on puisse avoir, et les manques relevés sont tous des
manques d'emploi, pas des manques de source.

Mais `PASS` est exclu par une faute documentaire visible et localisée : la dernière phrase de S5.P3
referme l'origine du syntagme dans les deux directions que l'enregistrement validé refuse
nommément d'écrire, contredit la phrase qui la précède et franchit la frontière interne que le même
fichier s'était donnée. S'y ajoutent une attribution déplacée (la praxis rattachée à un argument de
méthode que le texte invente), une chronologie brouillée entre 1962 et 1982, et le fait que le
lecteur ne lit jamais l'énoncé que les cinq sections commentent, alors que l'accroche affichée
au-dessus du texte l'interroge sur le seul de ses termes qui n'est jamais expliqué. Ces corrections
sont des corrections de passages, pas de structure : c'est la définition de `REVISE`.
