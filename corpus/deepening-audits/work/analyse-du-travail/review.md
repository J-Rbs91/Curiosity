concept : analyse-du-travail
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 16592e0f1694b0e7514bd7ad4736da7afe6aabb0

GATE PRÉALABLE
- SHA-256 actuel de corpus/deepenings/analyse-du-travail.json :
  b43d04dd9e488e6423cbf103748fa5e310a828b52ca140915b95f91eca9c96bb
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 53/53 claims SUPPORTED,
  mapping_incomplete vide, structural_errors vide.
- Blob de référence : type blob, JSON d'approfondissement lisible, conceptId « analyse-du-travail ».
  C'est bien la version auditée (texte de lead[0] « Chaque ligne de cette liste, prise seule, est exacte »,
  S5.P2 « on ne retiendra ici que l'état civil », conformes aux défauts cités par audit.md).
- Texte lecteur : 1 092 -> 985 mots (comptage par espaces). Aucun tiret cadratin, aucun terme de dispositif,
  aucune formule « il faudrait pouvoir ». `limits` ne remonte pas dans lead + sections.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     avant : chimie de l'eau (S1.P1), molécules fragiles (S3.P1), extension aux descriptifs de poste (S2.P2), glose de l'écart tâche/activité (S6.P1), prémisse « chaque fragment est exact » contraire à la lecture primaire. Après : tout passe par la lecture full-text de 1952, les commentateurs sont nommés (Karnas et Salengros 1986, Ouvrier-Bonnaz 2011), le livre de 1955 n'est décrit que par son état civil ou en attribution ; les deux interprétations sont marquées (S2.P2 « On peut résumer ainsi », S4.P2 « On peut comprendre alors », S1.P2 « Cela implique ») ; 53/53 au gate.
progressivité pédagogique      1/4     3/4     avant : cinq paragraphes d'ouverture sur le même noyau, « texte plus développé » jamais présenté (S3.P2), « cet ouvrage » non nommé (S5.P2). Après : question (lead) -> objection de Faverge (lead[1]) -> mécanisme sur le premier terrain, les temps (S1) -> ce qu'est une structure (S2) -> deuxième terrain, l'apprentissage (S3) -> troisième terrain, les aptitudes, et le sens de « verbalisme » (S4) -> le nom et le livre (S5) -> la distinction tâche/activité et sa frontière en 1952 (S6). Chaque section s'explique en une phrase. Réserve : S6, qui porte le thème de la carte, reste mince et sans pont explicite avec 1952 (pont refusé à bon droit faute de support).
densité / non-redondance       1/4     3/4     avant : S1.P1, S1.P2, S2.P2, S3.P2, S4.P2, S5.P2 sans delta propre. Après : chaque paragraphe a un delta distinct ; restes : S2.P2 synthétise S1-S2 (delta faible mais réel : « elles s'observent » prépare S3) ; la dernière phrase de S4.P2 reprend presque mot pour mot la citation qui la précède.
clarté                         3/4     3/4     gains : plus de référent flottant (« cet ouvrage », « ce genre de travail »), livre nommé avant d'être discuté. Perte : lead[1] livre « structures », « unités », « molécules », « verbalisme » entre guillemets sans glose immédiate (l'ancien lead glosait « des mots pour chaque geste, plus rien qui rende compte de l'ensemble ») ; « verbalisme » n'est expliqué qu'en S4.P2 ; « psychotechnique » (S3.P1), Q.S.K./M.T.M. et U.L.B. restent non glosés.
profondeur explicative         1/4     3/4     avant : une image chimique et un mot. Après : le mécanisme réel (éléments universels, temps additionnés, critère d'unité non vérifié, conséquence : le fragment chronométré est déjà altéré, S1.P2), le pivot structure / signification (S2.P1), l'apprentissage comme lieu d'observation (S3), le sens du verbalisme sur les aptitudes (S4.P2), le passage de « risque » à l'affirmation (S4.P1).
valeur des exemples            1/4     3/4     avant : boulon et versement inventés, eau décorative. Après : le cas réel de Faverge (rapidité qui altère la séquence, gestes qui se chevauchent, trajet de la main qui s'arrondit) qui prouve précisément le point contre-intuitif (le fragment n'est pas invariant) ; la vignette du lead est marquée « Imaginons ». Cas bref, faute de matière plus développée.
limites / nuances              2/4     3/4     avant : frontière 1952/1955 juste, mais limite d'application inventée (S3) et nuance centrale effacée. Après : nuance « risque » vs « détruit » exploitée (S4.P1), anachronisme tâche/activité nommé (S6.P2), reprise au chapitre V présentée comme affirmation d'un commentateur à vérifier (S5.P3).
pouvoir d'ouverture            2/4     3/4     avant : livre jamais nommé, clôture sur une réserve de méthode. Après : livre nommé avec ses auteurs, son chapitre V, sa genèse (séminaire 1953-1954), la piste de l'ergonomie de langue française, et une clôture côté lecteur (« c'est en le lisant qu'on le saura »).

DELTA PAR PARAGRAPHE (nouvelle version)
- lead[0] : le problème posé sur une situation stipulée : une liste de gestes chronométrés a l'air complète ; que reste-t-il du travail ?
- lead[1] : l'auteur, la date, le titre, ce qu'il vise (l'étude analytique du travail de son temps), l'image des molécules et la phrase-pivot sur le verbalisme.
- S1.P1 : la cible concrète (Q.S.K., M.T.M., éléments universels, temps additionnés) et le critère d'unité dont ces méthodes dépendent.
- S1.P2 : pourquoi elles échouent (temps non additifs dans une structure), le cas de la cadence, et la conséquence : le fragment mesuré est lui-même altéré.
- S2.P1 : ce que Faverge appelle structure (presque la signification) et sa filiation (psychologie de la forme).
- S2.P2 : synthèse interprétative marquée : la structure appartient à l'opérateur et s'observe au lieu de se déduire.
- S3.P1 : deuxième terrain : les structures apparaissent pendant l'apprentissage, aux articulations entre ensembles de gestes.
- S3.P2 : conséquence de méthode : la valeur des premières observations de qui apprend le métier, avant que le moment s'évanouisse.
- S4.P1 : troisième terrain, et le durcissement de l'objection (de « risque » à « détruit »).
- S4.P2 : ce qui unit des épreuves est la signification du résultat, d'où le sens de « verbalisme » : un mot qui ne représente rien hors de la tâche.
- S5.P1 : l'expression est antérieure au livre (1952, et un titre de 1943).
- S5.P2 : le livre de 1955 nommé, sa genèse et son rôle de référence, selon Karnas et Salengros.
- S5.P3 : le lien 1952 -> chapitre V et 1952 -> ergonomie de langue française, selon Ouvrier-Bonnaz, à vérifier.
- S6.P1 : la distinction tâche/activité, « le quoi et le comment », dans les mots de ses rapporteurs.
- S6.P2 : elle n'est pas dans le texte de 1952 (anachronisme) ; ouverture vers le livre.
Aucune séquence de trois paragraphes au delta substantiellement identique ; aucune section principalement redondante.

défauts initiaux corrigés :
- Redondance systémique d'ouverture (cinq paragraphes « décomposer perd le lien ») supprimée : le lead pose la question et la citation, S1 passe immédiatement au mécanisme.
- Prémisse contraire à la source (« chaque fragment est exact ») supprimée et renversée en S1.P2 : le geste chronométré à part n'est déjà plus celui qui s'exécute entre ses voisins.
- Matière non sourcée à valeur explicative (chimie de l'eau, molécules fragiles, descriptifs de poste, limite d'application inventée, glose de l'écart tâche/activité, « très courante ») entièrement retirée.
- Livre de 1955 désormais nommé (auteurs, titre, sous-titre, éditeur, année) avant d'être discuté ; Ombredane apparaît comme coauteur.
- Dispositif visible (S5.P2 ancien, clôture de S6.P2) supprimé ; la limite est dite côté lecteur.
- Concept pivot « signification » restitué (S2.P1, S4.P2) à la place de « organisation ».

régressions détectées :
- Clarté du lead : la glose du verbalisme et de l'analogie chimique a disparu du lead ; le mot n'est expliqué qu'en S4.P2. Régression locale, compensée par l'explication sourcée qui arrive plus tard ; ne fait pas tomber l'axe.
- Volume : 985 mots, sous le plancher indicatif de 1 100 (PROTOCOLE §5). La baisse ne vient pas d'un simple raccourcissement : la profondeur augmente (mécanisme, cas réel, trois terrains) et les retraits portent sur de la matière non financée. Assumé au nom du budget de croissance d'AUDIT_PROTOCOL §6.
- Perte de l'intuition de l'ancien lead[0] (ordre des gestes, préparation du suivant, pièce de travers) : elle n'était financée par aucun support, et le cas de la cadence en tient lieu avec une preuve réelle.
- Petite redite : la dernière phrase de S4.P2 reprend la citation qui la précède.
- Aucune fragilité documentaire repérée hors gate : les passages contrôlés à vue (Q.S.K./M.T.M., trajet de la main, absurde de ne pas les reconnaître, psychologie de la forme, structures signifiantes) se retrouvent dans la lecture primaire du dossier ; les paraphrases du critère d'unité sont justifiées dans limits.

raison de la décision : ACCEPT. Le gate est valide sur le SHA exact (FACTCHECK_PASS, 53/53). La réécriture supprime les défauts majeurs du diagnostic (redondance d'ouverture, prémisse contraire à la source, matière inventée, livre non nommé, dispositif visible) et remplace l'image chimique par le mécanisme réel de Faverge sur trois terrains. La progression est nettement plus claire et la profondeur plus grande, malgré un texte plus court. Les régressions relevées (lead moins glosé, volume sous le plancher indicatif, une redite) sont mineures et ne compensent pas le gain.
