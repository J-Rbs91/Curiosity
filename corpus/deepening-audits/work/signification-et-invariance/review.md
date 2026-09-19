concept : signification-et-invariance
verdict : ACCEPT
factcheck_sha_match : PASS

GATE
sha256 du fichier courant : ef57468d0942517b7c052f5422775a35c492764fb31aa6e9dd4fab2b8d4d45ef
candidate_sha256 du gate  : ef57468d0942517b7c052f5422775a35c492764fb31aa6e9dd4fab2b8d4d45ef
verdict du gate : FACTCHECK_PASS, 58 claims, 58 supported, 0 échec, aucune erreur structurelle.
Le pass porte donc sur le texte exact examiné ici, et non sur un état antérieur : les deux SHA
invalidés par les boucles de correction (41e2b1d2… puis 97999fb8…) ne sont plus ceux du fichier.
Version antérieure comparée : 4ae660c^ (état audité, 1 190 mots lecteur). L'état courant est
identique à HEAD ; 234f4dd^ ne porte que la boucle 2 et ne sert pas de terme de comparaison.

Volume lecteur : 1 190 → 1 539 mots. La fourchette de PROTOCOLE.md §5 est 1 300-1 700 : l'ancienne
version était sous la cible, la nouvelle est dedans. L'augmentation n'est donc pas une dérive, elle
est la correction d'un sous-volume, et elle se lit poste par poste (voir plus bas).

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          3/4     4/4     Les cinq gloses trop fortes de l'audit sont
                                               parties : « Deux chercheurs américains » (nationalité
                                               de Zinnes non documentée) → « un rapport de mars
                                               1962 », date portée par la source ; la forme affine
                                               et son unicité (« multiplie par un facteur fixe, puis
                                               ajoute une constante », « et lui seul ») supprimées ;
                                               la définition de l'admissibilité rendue à ce que
                                               porte la note de traduction (terme technique, les
                                               transformations que le type d'échelle autorise) ;
                                               « Un rapport peut très bien résister dans un contexte
                                               et y échouer dans un autre » supprimé ; la liste
                                               « longueurs, poids, scores » supprimée. Les trois
                                               blocs neufs sont tous adossés à du documenté :
                                               exemple 2 p. 115 et sa remarque générale, exemple 1
                                               p. 113-114 (masses), 6.3 p. 121-122 (Weitzenhoffer,
                                               Guilford, unicité contre nature des opérations),
                                               p. 108 (« considerable controversy », rang de
                                               troisième problème), note 6 p. 111, renvoi Suppes
                                               [1959] consigné dans la review. `limits` gagne deux
                                               interdictions nouvelles et exactes (forme/unicité des
                                               transformations, préservation de l'ordre ; borne sur
                                               Weitzenhoffer et Guilford connus par résumé).
progressivité pédagogique      3/4     4/4     Les deux accrocs nommés par l'audit sont levés :
                                               l'ancien S2.P2, qui consommait par avance la fonction
                                               de S5, est supprimé ; la généalogie Scott de S4.P2
                                               passe d'un bloc d'attribution à une phrase de sortie,
                                               et S4.P2 gagne à la place un contenu qui sert (le
                                               troisième problème est résolu par le deuxième, les
                                               auteurs baptisent eux-mêmes le problème). Trajectoire
                                               en une phrase par section : fait chiffré → question →
                                               ce qu'est une réécriture légitime → la définition et
                                               ce que « a un sens » exclut → pourquoi l'opération ne
                                               décide pas → ce que le critère ne fait pas → où il
                                               mord ailleurs et par où sortir.
densité / non-redondance       2/4     4/4     Quatre redondances de l'audit supprimées et non
                                               recréées ailleurs : ancien S5.P2 (aucun delta propre),
                                               ancien S2.P2, la seconde moitié de S1.P2 qui re-posait
                                               la question du lead, la dernière proposition de S2.P1
                                               redite de lead[1], la première phrase de S3.P2 redite
                                               de S3.P1. Vérification en sens inverse : aucune de ces
                                               idées ne reparaît sous une autre forme plus loin. Sur
                                               les 13 paragraphes lecteur, aucun n'est sans delta
                                               propre ; aucune séquence de trois paragraphes ne
                                               partage un delta (S3.P1 le fait discriminant, S3.P2 le
                                               mécanisme, S3.P3 la règle générale et la polémique
                                               sont trois deltas distincts).
clarté                         3/4     4/4     Les quatre « dans une acception technique bien
                                               particulière » sont ramenés à zéro et remplacés par la
                                               distinction elle-même (S2.P2) : « significatif » ferait
                                               entendre la significativité statistique ; « a un sens »
                                               n'est pas « compréhensible ». Le lecteur n'est plus
                                               prévenu quatre fois d'un piège qu'on ne lui nomme
                                               jamais. Aucun terme savant avant son emploi, aucun
                                               balisage, aucun tiret cadratin (contrôle mécanique),
                                               aucun mot du dispositif (« carte » ne figure que dans
                                               « écarte »).
profondeur explicative         2/4     4/4     Le défaut central de l'audit est réparé : S3.P2
                                               explique le contraste au lieu de l'affirmer (une
                                               comparaison ne demande que l'ordre, un rapport demande
                                               de compter depuis un zéro qui se déplace), et S3.P3
                                               ajoute la règle que les auteurs énoncent eux-mêmes,
                                               plus un second couple attesté (températures vs masses),
                                               plus les deux thèses contre lesquelles ils la posent.
                                               Le lecteur ne sort plus en sachant seulement que
                                               l'affirmation centrale de la carte est vraie.
valeur des exemples            2/4     4/4     L'enquête de satisfaction ne rejoue plus le zéro
                                               arbitraire du lead : elle porte l'acquis de S3 (« ce
                                               n'est pas la division qui est en cause, c'est que cet
                                               énoncé fait compter depuis un zéro que le questionnaire
                                               aurait pu placer ailleurs ») et s'arrête sur le geste
                                               que le critère impose au lieu de délivrer un verdict
                                               non documenté. Le contraste moyennes/rapport, effleuré
                                               en une proposition, occupe maintenant deux paragraphes
                                               et discrimine. Marquage hypothétique conservé
                                               (« Imaginons »).
limites / nuances              3/4     4/4     Les deux concessions de S4.P1 sont conservées et mieux
                                               tournées ; la frontière de l'admissible reste posée par
                                               contre-exemple avant la définition ; la distinction
                                               technique/courant, annoncée quatre fois et jamais faite
                                               dans l'ancienne version, est faite une fois, au bon
                                               endroit, sur la matière que la note de traduction
                                               autorise.
pouvoir d'ouverture            1/4     4/4     L'ancienne clôture résumait sa propre généralité. La
                                               nouvelle laisse la tension ouverte (nécessaire et non
                                               suffisant, et les auteurs ne disent pas ce qui manque)
                                               et nomme deux endroits précis où aller : l'article de
                                               Suppes seul de 1959 et les deux adversaires nommés.
                                               Formulation côté lecteur, conforme à PROTOCOLE §1
                                               (« c'est chez lui qu'il faudra aller le prendre »,
                                               « elle se poursuit dans les textes de ceux qui l'ont
                                               menée »), sans aucune trace de recherche infructueuse.

défauts initiaux corrigés :
- S5 ne duplique plus S2.P2 : le paragraphe généralisateur est supprimé, S5 transpose et ouvre. C'est
  le défaut qui interdisait à lui seul le PASS (AUDIT_PROTOCOL §4) ; il est réellement supprimé.
- L'affirmation centrale (l'énoncé entier, pas l'opération) est expliquée, non plus seulement posée.
- « Dans une acception technique bien particulière » (4 occurrences) devient une distinction unique.
- Clôture plate remplacée par une sortie avec tension et textes nommés.
- Les gloses plus fortes que la source (unicité de la transformation, définition de l'admissibilité
  attribuée aux auteurs, rapport réversible selon les contextes, nationalité de Zinnes) sont parties,
  et `limits` porte désormais l'interdiction correspondante.

régressions détectées :
- Aucune régression bloquante. Aucune information solide de l'ancienne version n'est perdue : tout ce
  qui a été retiré était soit redondant, soit non soutenu. Rien de `limits` n'est remonté dans le
  texte lecteur ; les quatre paragraphes internes nomment source, état d'accès et affirmation
  interdite, et le texte reste en deçà.
- Réserve mineure, notée et non bloquante : S3.P2 ouvre sur « Le contraste s'éclaire… » et se ferme
  sur une conclusion générale, alors que le chaînon central est borné à un cas (« sur les quatre
  nombres de nos deux journées », « Pour cette paire-là »). Le passage de l'ordre conservé sur deux
  températures individuelles à la comparaison de deux moyennes n'est pas établi par les sources, et le
  lecteur peut le franchir sans le voir. Ce qui empêche d'en faire une fragilité documentaire : le
  texte n'affirme nulle part la propriété générale, et la généralité qui suit est immédiatement
  attribuée aux auteurs en S3.P3 (l'admissibilité dépend de l'énoncé numérique entier), qui est bien
  le porteur légitime de la conclusion. Le bornage de la boucle 2 a donc laissé un cadrage un peu plus
  large que son contenu, pas une assertion trop forte.
- Sur les deux TOO_STRONG consommés : les deux portaient sur les deux seuls passages où la rédaction
  fabriquait une explication là où le rapport ne donne que des nombres (le carré en S1.P2, l'ordre en
  S3.P2). C'est un signal réel d'une main qui pousse, et je l'ai traité comme tel : relecture ciblée
  de toutes les autres assertions générales ou tirées d'un silence du texte courant (S1.P1 sur ce qui
  décide des transformations, S1.P2 « rien ne dit que », S2.P2 « aucune probabilité n'intervient »,
  S3.P1 « la moyenne n'est pourtant pas une opération plus prudente », S3.P3 sur les masses et sur les
  deux adversaires, S4.P2 sur l'unicité et sur Scott, S5.P1 qui s'abstient de conclure, S5.P2 sur la
  controverse et sur 1959). Aucune troisième occurrence du motif n'apparaît : chacune est soit
  attribuée, soit bornée à l'exemple, soit phrasée comme silence assumé. Les deux échecs se lisent
  comme deux accidents localisés à la même opération de rédaction, tous deux réparés, et non comme un
  texte qui tire structurellement plus que ses sources.

sur la longueur : les 349 mots lecteur supplémentaires se répartissent en quatre postes, tous
porteurs d'un delta neuf et documenté : la distinction « a un sens » / « significatif » /
« compréhensible » (S2.P2), le mécanisme du contraste (S3.P2), la règle générale des auteurs avec le
couple températures/masses et la polémique Weitzenhoffer-Guilford (S3.P3), la sortie (S5.P2). En face,
environ 200 mots sans delta ont été retirés. L'extension est donc informationnelle, pas rhétorique, et
elle ramène le texte dans la fourchette de PROTOCOLE.md au lieu de l'en sortir.

raison de la décision : ACCEPT. Le gate est valide sur le SHA exact du fichier examiné. Les deux
défauts qui interdisaient le PASS (une section entière redondante, l'affirmation centrale laissée à
l'état d'assertion) sont effectivement supprimés, sans qu'aucune redondance soit recréée ailleurs.
Les huit axes montent ou se maintiennent, aucun ne baisse ; la profondeur augmente au lieu de se payer
en raccourcis, et l'augmentation de longueur correspond poste par poste à du contenu nouveau et
soutenu. La seule réserve, le cadrage de S3.P2 plus large que son chaînon borné, n'entraîne aucune
affirmation excédentaire et relève de la retouche, pas du rejet.
