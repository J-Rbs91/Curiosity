concept : conscience-de-la-situation
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 5e1143d5dee10ddbce77e28f7bbc986aa0bb6d16

GATE

SHA-256 recalculé sur `corpus/deepenings/conscience-de-la-situation.json` :
9b635f706151c3e7042a210a18d87b90a99874bd65dba836846065ce7c06e7ca. Identique au
`candidate_sha256` de `factcheck-gate.json`, dont le verdict est `FACTCHECK_PASS`, 81 claims sur
81, `failed` 0, `mapping_incomplete` vide, `structural_errors` vide. Le blob antérieur reçu se lit,
est du JSON d'approfondissement et porte `conceptId: conscience-de-la-situation` : c'est bien la
version examinée par l'audit (elle porte les six défauts qu'il nomme, dont « elle a donné un nom et
une structure » en lead[1] et l'exemple « Imaginons une équipe absorbée par une panne » en S3.P3).
Les tours écartés (« -fail-79-sur-85 », « -fail-69-sur-70 ») n'ont pas été utilisés pour juger.

VOLUME (point 1 soumis à arbitrage)

Recompté moi-même sur le fichier en place, sur `lead` + `sections` seulement :
1 656 mots avec une tokenisation qui tient « aujourd'hui » et « moment-là » pour un mot,
1 789 mots avec une tokenisation qui coupe à l'apostrophe et au trait d'union. Le compteur du dépôt
annonce 1 927 mots pour l'ensemble du fichier, `limits` et titres compris : la part lecteur y vaut
donc environ 1 680. Version antérieure : 1 487 / 1 603 selon les mêmes deux tokenisations.

Jugement : conforme. La part lecteur est dans la fourchette 1 300-1 700 de §5 sous la mesure du
dépôt, et loin du plafond de 1 900 sous toute mesure. Le total de 1 927 relevé par le script inclut
`limits`, qui ne s'affiche pas : le « article que personne ne finit » ne porte pas sur lui. La
hausse de +170 mots lecteur n'est pas une dilatation : les quatre blocs ajoutés (thèse du rapport,
cas de Portland, alternatives des contestataires, seconde mise en garde méthodologique) portent
chacun un delta neuf, et environ 200 mots sans delta propre ont été retirés. Le texte est en
revanche à sa borne haute : un ajout ultérieur devra être gagé sur un retrait.

LE CAS DE PORTLAND (point 2 soumis à arbitrage)

Vérifié contre le blob antérieur et contre le dossier, pas sur parole.

Version antérieure, S3.P3 : « Imaginons une équipe absorbée par une panne, et qui cesse pour cette
raison de suivre une réserve dont personne ne se souciait […] Une hiérarchie établie une fois et
jamais rejouée suffit à produire une erreur qu'aucune décision absurde n'explique. » L'exemple était
correctement marqué comme hypothétique (§4 respecté), mais il ne démontrait rien que lead[0]
(l'absorption au volant) et S3.P2 (la règle du secondaire) n'aient déjà donné : défaut pédagogique,
non documentaire, et c'est bien ainsi que l'audit le qualifiait.

Version en place, S3.P3 : phrase de cadrage du rapport, puis décembre 1978, équipage de DC-8 en
préparation d'atterrissage à Portland (Oregon), problème de train d'atterrissage, attente en circuit
à l'est de l'aéroport pour se donner le temps du diagnostic, carburant bas non reconnu malgré les
indications de l'équipage, panne sèche, dix morts.

Contrôlé ligne à ligne contre `definition_de_lauteur` de `corpus/evidence/conscience-de-la-situation/lecture.json`
(source ouverte en texte intégral) : « Many times it is those elements that are deemed as secondary
that cause serious errors when SA on those elements is totally lost. For example, in December 1978,
a DC-8 crew preparing for landing at Portland, Oregon was faced with a landing gear problem. To give
them time to diagnose the problem, they elected to circle in a holding pattern east of the airport.
Soon preoccupied with the problem, the captain failed to recognize a developing low-fuel condition,
despite the indications of his crew. The aircraft ran out of fuel and crashed, killing 10 people
(NTSB, 1978). » Chaque élément du paragraphe français a son répondant, y compris le motif de la mise
en attente et le fait que les indications venaient de l'équipage. Aucun détail n'est ajouté (ni
compagnie, ni immatriculation, ni numéro de vol), et le rattachement à la règle du secondaire est
celui que le rapport fait lui-même. Substitution fondée, et c'est le gain pédagogique le plus net du
lot : le lecteur passe d'une règle générale à un enchaînement daté dont chaque maillon était
raisonnable.

LES DEUX TITRES MODIFIÉS (point 3 soumis à arbitrage)

Geste fondé, et les deux nouveaux titres sont soutenus.

« Une phrase citée partout, jamais à sa source » portait effectivement les deux excédents retirés du
corps. « citée partout » est la même affirmation de fréquence sur la littérature que « Les reprises
abrègent souvent » et « ce qui court dans les manuels », que l'audit refusait faute d'appui, et que
le gate a refusée deux fois de plus en C001 et C002. « jamais à sa source » est l'antériorité
refusée en C056 : le dossier n'établit qu'une chose, « en l'état de l'accès, la définition canonique
n'est pas ouvrable à sa source », ce qui est un état d'accès de session, non une propriété du texte ;
et le rapport de 1994 rapporte la phrase à deux textes, de 1987 et de 1988. Laisser ce titre après
avoir corrigé le corps aurait replacé les deux affirmations exactement là où aucun claim ne les
regarde. Le remplacement, « Une définition citée, et un mot plus ancien » (43 caractères), n'affirme
que ce que les appuis portent : le rapport de 1998 cite la définition au lieu de l'énoncer (verbatim
du dossier, guillemets relevés à l'œil sur le rendu image) et le terme est plus ancien que la
définition (`attribution_note` de l'enregistrement validé, et Bailly). Il nomme la chose dont la
section parle, pas sa fonction dans le texte : §2 est respecté.

« Ce que le rapport de 1998 cherchait vraiment » → retrait du seul mot « vraiment ». L'excès est
mince, et le titre était défendable en l'état ; le retrait ne coûte rien et ne dégrade pas la
section, qui garde son effet de requalification par son premier paragraphe. Correction acceptable,
sans conséquence pédagogique.

Deux titres touchés hors des six ancrages sortent de la lettre d'une correction minimale, mais le
motif est celui-là même que le dispositif ne peut pas voir : le gate n'ancre aucun claim dans un
titre. Retirer d'un paragraphe une affirmation que le titre répète aurait produit un `FACTCHECK_PASS`
sur un texte encore fautif. Le geste est dans l'esprit du protocole, et il est intégralement
documenté dans `factcheck-fixes.md`.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     les quatre fragilités de l'audit ont disparu : lead[1]
                                               ne crédite plus Endsley d'avoir nommé la chose (« Ce
                                               qu'elle y ajoute n'est pas le mot, c'est une
                                               définition et le modèle qui la soutient »), conforme à
                                               `attribution_note` et à `attribution.note` du dossier ;
                                               « Les reprises abrègent souvent » et « ce qui court
                                               dans les manuels » sont supprimés, non atténués ;
                                               `limits[1]` ne prête plus l'analyse d'accidents à
                                               l'article de théorie et distingue 1995a de 1995b. Les
                                               onze verbatim de cinq mots ou plus se retrouvent tous
                                               dans l'enregistrement ou dans `lecture.json`. Aucune
                                               phrase n'affirme le contenu des trois sources
                                               `metadata-only`. 81/81 au gate.
progressivité pédagogique      3/4     4/4     les deux accrocs nommés par l'audit sont levés : la
                                               définition canonique ouvre désormais S2, avant que les
                                               trois opérations soient enseignées, au lieu de
                                               reparaître en S4 où elle n'apprenait plus rien ; et la
                                               fin ne referme plus sur une précaution (S6.P3). La
                                               chaîne lead → S1 → S2 → S3 est intacte, S3.P1 encaisse
                                               le « volume de temps et d'espace » posé en S2.P1.
densité / non-redondance       2/4     4/4     les quatre foyers de stagnation sont traités par
                                               suppression ou remplacement, pas par lissage :
                                               ancien S3.P3 (remplacé par Portland), ancien S4.P1
                                               (supprimé), seconde moitié de l'ancien S4.P3
                                               (l'antériorité ne vit plus qu'en S4.P2), citation de
                                               Bailly en S1.P2 (remplacée par la thèse du rapport).
                                               Aucune séquence de trois paragraphes au delta
                                               identique ; aucune section principalement redondante.
                                               Résidu mineur signalé plus bas.
clarté                         3/4     3/4     gains : la phrase opaque « Les deux textes où elle
                                               formule la définition […] se lisent chez leur éditeur »
                                               a disparu ; S5.P1 est allégé d'un verbatim et de sa
                                               traduction. Pertes : la scène du volant, retirée par le
                                               fact-check, était l'accroche la plus immédiate du
                                               `lead` ; et en S1.P2 le verbatim « are deficient in
                                               fully understanding the situation that they are in »
                                               n'est pas glosé en français, seul cas du texte. Net
                                               stable, légèrement positif.
profondeur explicative         3/4     4/4     ce qui manquait pour 4 est fourni : S5.P2 dit ce qu'on
                                               reproche aux niveaux eux-mêmes et ce qui est proposé à
                                               la place (cycle perceptif de Smith et Hancock,
                                               conscience de la situation distribuée, rigidité chez
                                               Adams, Tenney et Pew), chaque objection restant
                                               attribuée à qui la rapporte comme l'exigent
                                               `reserves[4]`, `reserves[5]` et `reserves[7]`. S6.P2
                                               ajoute la seconde autolimitation du rapport
                                               (« as technology-free as possible »).
valeur des exemples            2/4     4/4     Portland remplace l'exemple hypothétique qui rejouait
                                               lead[0] ; la cellule orageuse et la liste du niveau 1
                                               sont conservées. Le seul exemple non fonctionnel du
                                               texte a disparu.
limites / nuances              3/4     4/4     les nuances restent au bon moment (S3.P1 et S3.P2
                                               contre « un état qu'on a ou qu'on n'a pas », S5 contre
                                               « modèle consensuel », S6.P2 contre la lecture
                                               descriptive des listes), et la contestation n'est plus
                                               purement négative. Le champ interne `limits` nomme
                                               maintenant, pour chaque source, l'état d'accès et
                                               l'affirmation qu'il interdit, et ses noms sont alignés
                                               sur ceux qui figurent réellement dans le texte lecteur.
pouvoir d'ouverture            2/4     4/4     la phrase la plus ouvrante (les trois niveaux comme
                                               grille de questions plutôt qu'état mesurable logé dans
                                               une tête) est déplacée en clôture, marquée « on peut
                                               alors comprendre », suivie du constat que ce rapport
                                               n'aborde pas la mesure et d'un texte nommé, en accès
                                               libre, à aller lire. Fin du côté du lecteur, conforme
                                               à §1.

défauts initiaux corrigés :
- la sur-attribution de lead[1] (« elle a donné un nom et une structure »), seul motif qui
  interdisait `PASS` à l'audit, et la contradiction interne du paragraphe avec elle ;
- les deux affirmations de fréquence sans appui de l'ancien S4 (« Les reprises abrègent souvent le
  volume de temps et d'espace », « ce qui court dans les manuels »), retirées et non affaiblies ;
- l'exemple inventé de S3.P3, remplacé par le cas que le rapport attache lui-même à la règle du
  secondaire ;
- la redondance de la seconde moitié de l'ancien S4.P3 avec lead[1] sur l'antériorité du terme ;
- l'ancien S4.P1, qui redonnait la définition après que S2 et S3.P1 en avaient enseigné le contenu ;
- la citation de Bailly en clôture de S1.P2, qui redisait le verbatim de S1.P1 ;
- la clôture sur une précaution méthodologique ;
- l'erreur de `limits[2]` mêlant les deux textes de 1995 ;
- en prime, l'excédent de fréquence et d'antériorité réfugié dans un titre de section.

régressions détectées :
- aucune régression au sens du protocole. Trois réserves mineures, qui ne motivent pas un `REJECT` :
  (a) résidu d'écho entre lead[1] (« Ce qu'elle y ajoute n'est pas le mot ») et la dernière phrase de
  S4.P2 (« c'est lui, et non le mot, qu'on peut porter au crédit d'Endsley ») : une clause, pas un
  paragraphe, et bien en deçà de la répétition triple que portait la version antérieure ;
  (b) le verbatim de S1.P2 n'est pas glosé en français, seul cas du texte, le sens restant
  récupérable par la construction de la phrase et par le titre de la section ;
  (c) la formule de Sarter et Woods rapportée par Moens et coll. a été retirée : perte d'une image
  frappante, mais c'était un relais de relais, et son delta est couvert par la phrase qui la
  précédait. Le choix va dans le sens sûr.
- vérifié en particulier : aucune répétition supprimée ici n'est recréée ailleurs ; aucun contenu de
  `limits` n'est remonté dans le texte lecteur, les deux frontières visibles étant formulées du côté
  du lecteur (« il faudra les ouvrir pour le voir », « il faudra aller le lire chez elles ») ; aucun
  tiret cadratin ; six titres sous 60 caractères ; aucun terme de dispositif.

raison de la décision : ACCEPT. Le gate est valide et porte sur le SHA exact du fichier en place,
81 claims sur 81. Les six défauts majeurs du diagnostic initial sont tous supprimés, et le seul qui
interdisait `PASS`, la sur-attribution du deuxième paragraphe, l'est à la racine plutôt que par
atténuation. Les trois gains ne sont pas stylistiques : un exemple décoratif cède la place à un cas
daté que la source attache elle-même à la règle qu'il illustre, une contestation purement négative
devient une contestation avec ses alternatives nommées, et une clôture sur précaution devient une
sortie avec un texte à ouvrir. La progression est plus claire qu'avant, la profondeur augmente, la
fidélité documentaire passe de fragile à sans réserve visible. Le volume reste dans la cible, à sa
borne haute. La modification des deux titres, bien que hors de la lettre d'une correction minimale,
était nécessaire : elle retire d'un angle mort du dispositif deux affirmations que le corps venait de
perdre.
