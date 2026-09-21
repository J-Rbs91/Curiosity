concept : deplacement-des-buts
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 5e97ef6bbcd1f2222c06888facdbcfde44596c83

GATE

SHA-256 actuel de `corpus/deepenings/deplacement-des-buts.json` :
`0f8fce9e56c2710812504c12fa121eeb789b1ad0de0742ebb2788e4199330136`.
`factcheck-gate.json` : `verdict: FACTCHECK_PASS`, 77 claims, 77 soutenus, 0 échec,
`structural_errors` vide, `candidate_sha256` identique au SHA calculé. `factcheck-pack.json` et
`claim-map.json` portent le même `candidate_sha256`, et `verification.json` donne 77 résultats
tous `SUPPORTED`. Le gate porte donc bien sur l'octet exact de la version proposée.

Le blob `5e97ef6b` se lit, est un approfondissement JSON valide et porte
`conceptId: deplacement-des-buts` : c'est bien la version antérieure de cette carte. Elle compte
1 249 mots de texte lecteur (177 de `lead`, 1 072 de `sections`), 6 sections, et correspond
exactement à ce que décrit l'audit (deux scènes dans le lead, exemple inventé du remboursement,
section « Une question de degré, pas de nature »).

Contrôle complémentaire du gate, au-delà du minimum exigé : aucun claim ne s'appuie sur un
support `metadata-only`, et les deux seuls supports `full-text` mobilisés sont la référence de
Merton 1940, dont le dossier et l'enregistrement s'accordent sur le niveau d'accès. La divergence
`full-text` / `metadata-only` signalée par l'audit pour Warner & Havens 1968 et Selznick 1943 ne
touche donc aucun claim : elle n'a pas été blanchie par le gate, elle a été rendue sans objet.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     avant : S5.P2 faisait parler Warner & Havens 1968 (dossier : « CONSULTÉ EN MÉTADONNÉES SEULEMENT ») sur l'intangibilité du but ; S4.P1 tirait du titre de l'article l'universelle « chez toute personne qui y passe assez de temps », que le dossier donne pour question ouverte (p. 568, « bureaucratic personality » 0 occurrence) ; lead[1] affirmait une fréquence (« l'un des comportements les plus réguliers ») sur un article sans données (limitations[1]) ; limits[1] prêtait à Social Theory and Social Structure des retouches alors que le dossier écrit « AUCUN CONTENU ÉTABLI » ; limits[3] disait l'inverse du dossier. après : les trois affirmations sont supprimées, aucune source metadata-only n'est mentionnée dans le texte lecteur, limits[0] nomme l'ouvrage, la traduction Mendras, leur état d'accès et l'interdiction, limits[1] nomme Warner & Havens, Selznick, Cohen, leur état d'accès et le seul fait établi (terme au titre d'un article d'ASQ en 1968), limits[2] restitue la réserve exacte (portée générale p. 562, illustrations publiques p. 566, aucune donnée). 77/77 SUPPORTED sur le SHA exact.
progressivité pédagogique      3/4     4/4     avant : plateau S5 inséré entre S4 et S6, S1.P2 anticipait S4 sans que S4 le dépasse. après : problème (lead) → fonction légitime et exigence de conformité (S1) → mécanisme maillon par maillon (S2) → où l'effet se voit, un cas, le seuil, l'aveuglement (S3) → dispositifs qui l'entretiennent et conséquence pratique (S4) → envers côté usager et condition de sortie (S5) → ce que l'article laisse ouvert (S6). Chaque section a une progression énonçable en une phrase, et chacune s'appuie sur une brique déjà posée : la citation « fin en soi » n'arrive qu'après la marge de sécurité, le seuil qu'après le cas, l'esprit de corps qu'après l'attachement.
densité / non-redondance       2/4     4/4     avant : cinq énonciations de « c'est la structure, pas les personnes » (lead[1], S1.P2, S4.P1, S5.P1, fin de S5.P2), S2.P2 se reformulant deux fois, S6.P2 refermant sur S4.P2 ; environ un quart du texte sans delta propre. après : la thèse est posée une fois (lead[1]), puis démontée (S2), instanciée (S3), instrumentée (S4.P1-P2), tirée en conséquence une seule fois (S4.P3) et retournée (S6.P2). Delta test refait sur les 18 paragraphes : chacun a un delta nommable en une phrase, aucun couple consécutif ne partage le sien, donc aucune séquence de trois. Les deux voisinages les plus serrés sont S2.P2/S2.P3 (transfert accompli vs transfert n'est pas oubli, d'où excès de zèle et non négligence : distinction, pas répétition) et S1.P1/S5.P1 (la règle uniforme réduit l'arbitraire, garantie, vs l'impersonnalité et la catégorisation écartent par construction les particularités du cas, cause propre du conflit avec l'usager).
clarté                         4/4     4/4     l'entrée reste une scène observable, sans terme savant ; les trois notions savantes ajoutées sont expliquées à l'endroit où elles servent (« esprit de corps » glosé par le sentiment d'un destin commun et la faible concurrence interne ; « règles sacralisées » glosé par des normes techniques qui se figent et prennent un caractère sacré ; la marge de sécurité par l'analogie du pont, qui est celle de Merton). Aucune occurrence du vocabulaire interne ; aucun tiret cadratin ; une seule citation de cinq mots ou plus, identique mot pour mot à `quotation.text` de l'enregistrement. La densité augmente mais aucune phrase ne présuppose un acquis non construit.
profondeur explicative         2/4     4/4     avant : le mécanisme promis par lead[1] n'était jamais démonté, S2.P1 le résumait par « à force » ; le lecteur repartait avec une définition plus longue. après : la chaîne est donnée maillon par maillon et chaque maillon est dans le plein texte lu (fiabilité et discipline p. 562 ; discipline efficace seulement si les conduites sont étayées par des dispositions inculquées p. 562 ; surdosage délibéré, analogie de l'ingénieur p. 563 ; c'est ce surplus qui transfère l'attachement vers le détail prescrit p. 563 ; moyen devenu fin p. 563). S'y ajoutent quatre mécanismes nouveaux et sourcés : la récapitulation en cause unique (p. 564), le seuil indéterminé (p. 563, known_ambiguities[1]), la clause d'aveuglement (p. 564), les dispositifs de carrière, l'esprit de corps, la sanctification et le refus de l'explication par l'intérêt matériel (p. 564-565).
valeur des exemples           2/4     4/4      avant : l'exemple inventé du remboursement rejouait la scène du lead et n'apprenait rien qu'elle n'eût montré. après : il est remplacé par Bernt Balchen (p. 563-564, Chicago Tribune 1931 via Thurman Arnold), cas réel, daté, attribué, et qui fait comprendre ce qu'aucune définition ne montre : l'application parfaite produisant l'inverse de l'objet, sans faute ni malveillance. L'analogie du pont est portée par Merton lui-même et rend intelligible pourquoi le surdosage est rationnel. Aucun exemple inventé ne peut passer pour un cas réel : la seule scène hypothétique est ouverte par « Imaginons ».
limites / nuances              2/4     4/4     avant : déplacement et dysfonctionnement traités comme une seule chose, ce que known_ambiguities[1] interdit ; ni seuil, ni statut extrême du zélateur, ni aveuglement des intéressés. après : S2.P3 sépare transfert et oubli, S3.P3 pose que le virtuose est un produit extrême et que le déplacement peut se produire sans que l'organisation cesse d'atteindre ses fins, avec la modalité de l'auteur restituée (« il peut être poussé jusqu'au point où ») et l'aveu que le déclencheur n'est pas donné, S3.P4 pose l'aveuglement structural, S1.P2 rend la portée générale (bureaucratie religieuse ou économique, p. 562) que l'ancienne version restreignait partout à l'administration. Chaque nuance arrive là où elle empêche un contresens.
pouvoir d'ouverture            1/4     4/4     avant : la dernière phrase reformulait S4.P2, le texte ne s'ouvrait sur rien. après : S6 laisse deux ouvertures sourcées et de niveau lecteur : l'article ne propose aucun remède et s'achève sur des questions offertes à des enquêtes de terrain, dont la sélection ou la transformation des personnalités (p. 568) ; et le même attachement affectif qui déplace les buts est ce qui empêche la structure de se désagréger (p. 567-568). La dernière phrase est une tension, pas un résumé.

VOLUME

1 249 → 1 460 mots de texte lecteur au décompte propre de cette revue (1 269 → 1 496 au décompte
de l'outil, qui segmente autrement ; l'écart de méthode ne change rien au sens). L'augmentation
nette est de l'ordre de 210 mots, mais elle masque un mouvement plus large : environ 160 mots de
redite ont été retirés (ancien S1.P2, ancien S4.P1, section « Une question de degré » entière,
seconde moitié de l'ancien S6.P2, seconde scène du lead, exemple inventé du remboursement), de
sorte que le contenu ajouté approche 370 mots. Ces 370 mots sont identifiables un à un et tous
attachés à une page du plein texte : marge de sécurité et analogie de l'ingénieur, transfert
distingué de l'oubli, récapitulation en cause unique, cas Balchen, virtuose bureaucratique et son
statut extrême, seuil, clause d'aveuglement, carrière graduée et ancienneté, esprit de corps
jusqu'à la défense des positions acquises, sanctification, refus de l'explication par l'intérêt,
impersonnalité et catégorisation, objection du client au nom du caractère spécial de son cas,
concurrence contre monopole, absence de remède, question laissée ouverte, fonction protectrice du
ressentiment. Aucune de ces additions ne redit une addition voisine, et aucune analogie nouvelle
ne double une explication existante : la seule analogie ajoutée est celle du pont, qui est de
Merton et qui explique un maillon que rien d'autre n'explique. Le gain de longueur est donc un
gain de matière, pas du remplissage. Total 1 669 mots avec `limits`, dans la fourchette.

SECTION SUPPRIMÉE : « UNE QUESTION DE DEGRÉ »

La carte perd là une information qu'elle n'avait pas le droit de porter, non une information
solide. Deux raisons, et la seconde est décisive.

D'abord le statut d'accès. `PROTOCOLE.md` §3 pose que le niveau d'accès se lit et ne se déduit
pas, et que `metadata-only` interdit toute phrase sur le contenu. Sur Warner & Havens 1968 et
Selznick 1943, l'enregistrement validé porte `consulted: full-text` tandis que le dossier de
preuve écrit « CONSULTÉ EN MÉTADONNÉES SEULEMENT (Crossref ; JSTOR fermé) » et n'établit qu'un
seul fait, la présence du terme au titre. Devant une divergence, la lecture qui autorise le plus
n'est jamais celle qui fait foi : le dossier dit ce qui a été ouvert, l'enregistrement dit ce
qu'on croyait avoir ouvert. La phrase supprimée (« notamment selon la difficulté à mesurer
directement le but réellement poursuivi ») était précisément une phrase sur le contenu de
l'article de 1968, c'est-à-dire la seule chose que ce niveau d'accès interdit.

Ensuite la valeur pédagogique réelle du passage. Son P1 répétait S1 et S3 sans les dépasser, et
son P2 se terminait sur la quatrième énonciation de la thèse du lead. Ce qui disparaît du texte
lecteur se réduit donc à ceci : le lecteur ne sait plus que le concept a une postérité
documentée. C'est une perte mince, et le seul fait établi sur cette postérité survit là où il
doit vivre, dans `limits[1]`, à disposition des agents. La révision a en outre supprimé du même
geste la phrase écrite du côté du rédacteur (« demanderait à rouvrir ces textes pour être vérifié
au cas par cas »), forme que le §0 du protocole proscrit expressément.

Effet vérifié plutôt que déclaré : la divergence de statut ne touche aucun claim du pack. Les deux
seuls supports `full-text` mobilisés par un claim sont la référence de Merton 1940, sur laquelle
dossier et enregistrement s'accordent. Le texte est réellement hors d'atteinte du problème, il
n'a pas été mis à l'abri en paroles.

défauts initiaux corrigés :
- La redondance systémique, défaut structurant du diagnostic : cinq énonciations de « c'est la
  structure, pas les personnes » réduites à une thèse, une conséquence et un retournement.
- Le mécanisme promis et jamais démonté : S2 le porte maintenant maillon par maillon, avec
  l'analogie de l'ingénieur qui en explique la rationalité.
- Le plateau S5 : section supprimée, sa seule idée non redondante (la tension est constitutive et
  non retirable) rapatriée en une phrase à la fin de S4.
- La fragilité documentaire de S5.P2 : la source metadata-only ne paraît plus dans le texte
  lecteur.
- L'argument tiré du titre de l'article et l'universelle « chez toute personne qui y passe assez
  de temps » : supprimés, la question personnalité/structure étant désormais rendue à son statut
  de question ouverte, en clôture.
- L'affirmation de fréquence de lead[1] : supprimée, remplacée par ce que le texte autorise
  (processus déjà observé, dont Merton revendique l'explication et non la découverte).
- L'exemple inventé qui rejouait la scène du lead : remplacé par un cas réel, daté, attribué.
- La clôture qui n'ouvrait sur rien : remplacée par deux ouvertures sourcées.
- Le traitement du déplacement et de la contre-performance comme une seule chose : séparés, avec
  le seuil et son déclencheur non donné.
- `limits` : les trois entrées fautives réécrites, chacune nommant source, état d'accès et
  affirmation interdite.

régressions détectées :
- Aucune régression conceptuelle ni de clarté. Points relevés, tous inférieurs au seuil de rejet :
- La seconde scène du lead (l'enseignant) disparaît : le champ illustratif du texte est désormais
  entièrement administratif, et la portée générale est affirmée sur source (p. 562) plutôt que
  montrée. C'est le sens exact de la recommandation de l'audit, et la scène retirée ne distinguait
  rien ; la perte est esthétique, pas informationnelle.
- Le lecteur ne sait plus que des travaux postérieurs existent. Perte assumée et documentairement
  obligatoire, largement compensée par la clôture.
- S6.P1 conserve une trace du titre de l'article (« La personnalité du bureaucrate, que son titre
  annonce, il la met en question sans la trancher »). Ce n'est plus la faute d'origine : la phrase
  ne tire du titre aucune proposition sur le monde, elle constate qu'une question annoncée reste
  ouverte, ce qu'établit la p. 568. Admissible en l'état ; à ne pas redurcir lors d'une révision
  ultérieure.
- `limits` est à 209 mots au décompte propre de cette revue (221 au décompte du rédacteur), un peu
  au-dessus des 200 visés. Champ interne, non affiché, contrôle mécanique au vert : sans effet
  lecteur.
- Aucune remontée du registre interne dans le texte lecteur. La section « Ce que l'article laisse
  sans réponse » n'est pas `limits` déguisé : elle porte des limites du raisonnement de Merton,
  établies par le plein texte (absence de remède, questions de la p. 568, fonction protectrice de
  l'attachement), ce que `PROTOCOLE.md` §5 autorise explicitement, et son titre nomme la chose
  dont elle parle sans annoncer une fonction dans le texte.

raison de la décision : ACCEPT. Le gate déterministe porte sur l'octet exact de la version
proposée, avec 77 claims sur 77 soutenus et aucun appui sur une source metadata-only. Les six
défauts majeurs du diagnostic sont supprimés, dont les deux qui interdisaient le PASS : plus
aucune section n'a pour rôle principal de répéter une autre, et chaque section a une progression
énonçable en une phrase. La profondeur ne baisse pas, elle change de nature : le texte n'affirme
plus le mécanisme, il l'expose maillon par maillon sur un plein texte paginé, et il gagne un cas
réel, un seuil, une clause d'aveuglement, quatre dispositifs nommés, une condition de sortie et
une clôture qui ouvre. L'augmentation de longueur est adossée à une matière identifiable page par
page, et la seule suppression discutable retire du texte une phrase que le niveau d'accès réel de
sa source n'autorisait pas. Rien dans la nouvelle version ne déplace un défaut ailleurs.
