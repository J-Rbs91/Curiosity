concept : quantifier-convenir-et-mesurer
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 60e4017521c4d9b34369e9a332d1214b0fdd99cb

GATE
- sha256 courant de corpus/deepenings/quantifier-convenir-et-mesurer.json : 5419848d70154080bd08d2eeccc511c8776f32b2b617f286e7802c5d3af3719d
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 41/41 SUPPORTED, aucun mapping_incomplete ni erreur structurelle.
- loop1/factcheck-gate.json (sha db0e38…) : FACTCHECK_FAIL sur C009 (TOO_STRONG, « instrument reconnu de tous… que personne ne conteste », S1.P1). La phrase est absente de la version courante.
- Blob de référence : se lit, JSON d'approfondissement, conceptId « quantifier-convenir-et-mesurer », conforme à la version décrite par audit.md (1 197 mots lecteur, S5 « Un exemple pour fixer la distinction »).
- `npm run corpus:deepen -- --check --only=quantifier-convenir-et-mesurer` : exit 0.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          3/4     4/4     retraits de « qui a un coût » (S2.P1), glose terme à terme et porteurs inventés (S2.P2), « souvent discuté entre statisticiens… » (S5.P1), « chiffre solide / qui s'effondre » (lead[1]), « une fois le premier terminé » (S3.P1) ; toutes les citations neuves se lisent dans lecture.json (definition_de_lauteur) ; S4.P2 désormais attribué à l'auteur au lieu d'une interprétation timide ; conséquences dérivées marquées (« Cela implique », « On peut le comprendre »).
progressivité pédagogique      2/4     3/4     lead (problème) → S1 (mesure réaliste vs quantifier « faire exister ») → S2 (convenir, racines de la notion) → S3 (mesure, réplicabilité fixée au premier temps) → S4 (pourquoi distinguer : le mot mesurer cache les conventions) → S5 (contresens relativiste, hypothèse). La fin monte au lieu de redescendre sur la vignette du lead. Réserve : léger recouvrement lead[1] / S1 (mesurer = chose déjà mesurable posé deux fois).
densité / non-redondance       2/4     3/4     l'ordre convenir/mesurer passe de six occurrences à trois (lead[1], S3.P1 citation, S4.P1 double formulation, fait neuf) ; chômage de trois à deux (lead, rappel marqué en S4.P2) ; échantillon de foyers supprimé en double. Aucune séquence de trois paragraphes au même delta, aucune section redondante. Réserve : la dernière phrase de S2.P2 (renvoi au texte de 2007) n'a guère de delta lecteur.
clarté                         3/4     3/4     titre de fonction de S5 remplacé par un titre de chose (« Ni arbitraire ni simple relevé »). En contrepartie, S2 devient plus abstrait : longue citation sans exemple, puis appareil bibliographique (« supplément Irréductions au livre sur Pasteur ») peu lisible pour un non-spécialiste.
profondeur explicative          2/4     3/4     ajouts de mécanisme et non simple raccourcissement : définition de quantifier par l'auteur (S1.P2), motif de la distinction (lead[1], S4.P2), réplicabilité fixée dès le premier temps parce que les « procédures codifiées et réplicables » figurent dans la liste de convenir (S3.P2, lecture marquée), hypothèse de l'auteur (S5.P2).
valeur des exemples            2/4     3/4     tour Eiffel conservée et rattachée à l'« épistémologie traditionnelle », rappelée en S4.P2 comme pivot de l'erreur ; deux enquêteurs conservés ; vignette S5 redondante supprimée. Perte modérée : plus aucun exemple concret ne montre le travail de convention hors du lead.
limites / nuances              1/4     3/4     nuance anti-relativiste de l'auteur ajoutée (S5.P1), au moment où le contresens est le plus probable (juste après « laisser dans l'ombre les conventions ») ; emprunt de la notion à Latour et Thévenot déclaré (S2.P2). Aurait pu venir un peu plus tôt.
pouvoir d'ouverture            1/4     3/4     fin sur l'hypothèse de l'auteur (la quantification « crée une nouvelle façon de penser… et d'agir sur lui ») et le titre du chapitre gouvernement/preuve, au lieu du retour à la vignette du chômage ; racines Latour/Thévenot nommées.

DELTA PAR PARAGRAPHE (nouvelle version)
- lead[0] : compter suppose de décider qui compter (inchangé).
- lead[1] : un auteur nomme ce problème en distinguant quantifier et mesurer, deux idées « trop souvent confondues ».
- S1.P1 : le contre-modèle : mesure réaliste, tour Eiffel, rattachée aux sciences de la nature.
- S1.P2 : définition de quantifier par l'auteur ; la forme numérique est à construire.
- S2.P1 : le premier temps s'appelle convenir ; liste de l'auteur ; l'accord est élaboré et explicité, non supposé.
- S2.P2 : la notion de convention d'équivalence vient en partie de Latour et Thévenot ; la formule est de Desrosières.
- S3.P1 : la mesure comme mise en œuvre réglée des conventions.
- S3.P2 : la reproductibilité est fixée au moment de convenir ; d'où accord entre enquêteurs et incomparabilité possible de chiffres bien mesurés.
- S4.P1 : double formulation « et » / « puis ».
- S4.P2 : raison de la distinction selon l'auteur : le verbe mesurer laisse les conventions dans l'ombre.
- S5.P1 : la distinction n'est pas relativiste ; séparation analytique de deux moments.
- S5.P2 : hypothèse : la quantification crée une manière de penser et d'agir sur le monde.

défauts initiaux corrigés :
- Redondance systémique de l'ordre « convenir avant mesurer » (six poses ramenées à trois, chacune avec un delta propre).
- S5 vignette redondante avec lead[0] et S3, et titre de fonction : supprimée, remplacée par une section neuve et finançée.
- S2.P2 glose terme à terme d'une simple énumération (désignation transformée en explication) : supprimée.
- Absence de la nuance anti-relativiste de l'auteur : ajoutée.
- S4.P2 hedgé comme interprétation propre : désormais attribué à l'auteur avec sa citation.
- Affirmations sans support (« coût », « chiffre solide / qui s'effondre », « souvent discuté entre… », puis C009 « instrument reconnu de tous ») : retirées.

régressions détectées :
- Volume lecteur ramené à environ 950-975 mots, sous le plancher indicatif de 1 100 de PROTOCOLE.md §5 et sous la cible de l'audit (1 150-1 300). Non bloquant : la baisse vient du retrait de redondance et de passages non financés, et la profondeur a augmenté par ajouts sourcés ; ce n'est pas un raccourcissement à vide.
- S2 plus abstrait qu'avant (citation dense sans illustration, référence « supplément Irréductions au livre sur Pasteur ») ; la phrase sur le texte de 2007 est surtout bibliographique. Elle est dite comme un fait de l'auteur, sans langage de lacune : pas de remontée du champ limits.
- Léger recouvrement lead[1] / S1.P1 sur « mesurer suppose la chose déjà là ».
- Aucune fragilité documentaire non vue par le gate : les citations ajoutées sont toutes dans lecture.json (definition_de_lauteur) ou dans review.notes de l'enregistrement validé.

raison de la décision : le gate est valide sur le SHA exact (FACTCHECK_PASS, 41/41). La réécriture supprime les défauts majeurs du diagnostic (redondance de l'ordre, S5 qui rejouait le lead, glose non financée, nuance anti-relativiste manquante, attribution timide de S4.P2) et remplace la longueur retirée par de la matière sourcée de l'auteur qui fait monter la compréhension jusqu'à la fin. Les régressions (S2 plus sec, volume sous le plancher indicatif) sont réelles mais mineures face au gain de progression, de nuance et d'ouverture. ACCEPT.
