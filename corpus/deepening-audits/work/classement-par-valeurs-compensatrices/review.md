concept : classement-par-valeurs-compensatrices
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 1335ce53c09ecd9b95217d3a5630c9a1095e5354

GATE
- SHA-256 courant de corpus/deepenings/classement-par-valeurs-compensatrices.json :
  f347269f7e640116ba8ce2221138d028ccde99cd4167896c6b0690ad2f728738
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 63 claims / 63 SUPPORTED,
  aucun mapping_incomplete, aucune erreur de structure.
- Baseline : blob lisible, JSON d'approfondissement, conceptId identique ; identique octet pour octet à
  work/.../baseline.json.
- `npm run corpus:deepen -- --check --only=...` : passe (1729 mots, compte de l'outil).

VOLUME
Texte lecteur 1444 -> 1498 mots (découpage par espaces, même méthode des deux côtés), soit +3,7 %.
Lead : 134 mots. Croissance financée par SUP-260c71dbade6e2ae (verbatim lecture.json p. 157-171).

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          3/4     4/4     intertitre faux de S2.P2 corrigé ; conclusions non marquées de S5.P2 (« Cela implique que ») et S6.P2 (« On peut le lire ainsi ») désormais marquées ; « plus juste » contre « plus précise » résolu en « déplace l'erreur » ; cadrage de la moyenne sans appui retiré du lead ; limits[1] et limits[3] ramenés en deçà du dossier ; 63/63 SUPPORTED
progressivité pédagogique      3/4     4/4     S3.P3 définit désormais les catégories 1-3, ce qui donne à S6.P1 sa « troisième catégorie » ; S2.P1 relie la borne à l'erreur réfutée en S1 (« retomberions… un seul test ») ; chaîne principe -> borne -> barème -> conventions -> validation -> seuil intacte
densité / non-redondance       3/4     4/4     S1.P3 (filiation vide) fondu dans lead[1] ; seconde phrase vide de S4.P3 remplacée par la condition que Lahy pose ; S2.P3 n'a plus la critique du total qui doublait le lead ; glose « trois conditions » supprimée. Légère proximité S2.P1 (2e citation) / S2.P2, mais S2.P2 apporte l'asymétrie « très affirmée / relative » et le nom
clarté                         3/4     3/4     correspondance décile -> mot donnée (S3.P2) ; le lead perd l'image de la moyenne mais pose la question en mots simples ; « décile » (5 rangs sur 50) et les trois fonctions de S4.P1 restent posés sans concrétisation
profondeur explicative         3/4     4/4     le mécanisme central est montré : un « très bien » contrebalance, des « très mal » sans « très bien » font tomber en 3e catégorie, 1re et 2e = « travail au moins suffisant » ; raisons du rang et des déciles données
valeur des exemples            2/4     4/4     wattman (S1.P1), deux « très bien » à dix tests (S4.P2), règle durcie sur plusieurs « mauvais » (S6.P2) : trois exemples de Lahy, chacun avec une fonction distincte
limites / nuances              4/4     4/4     toutes les nuances conservées ; tension 1re catégorie / « trop grande » / p. 171 non tranchée dans le texte lecteur, consignée dans limits
pouvoir d'ouverture            3/4     4/4     S4.P3 porte la question que Lahy laisse ouverte (« limites de leurs suppléances », « établir numériquement les valeurs ») ; pointe finale sur le seuil indexé sur le recrutement conservée

DELTA PAR PARAGRAPHE (nouvelle version)
- lead[0] : le problème, plusieurs notes pour un verdict, et la question de la compensation et de sa limite.
- lead[1] : qui, quand, pour qui, d'où vient le principe, promesse assuré / conventionnel.
- S1.P1 : fondement physiologique de la suppléance, montré sur le wattman.
- S1.P2 : conséquence méthodologique, un test isolé ne classe pas.
- S2.P1 : la borne et sa raison (trop de suppléance ramènerait à l'erreur d'un seul test).
- S2.P2 : formulation à trois termes et nom du procédé.
- S2.P3 : distinction note globale / tri, lecture du profil.
- S3.P1 : rang plutôt que rendement, et raison des déciles.
- S3.P2 : correspondance décile -> mot, mots subjectifs attribués mécaniquement.
- S3.P3 : catégories 1-3, la compensation devenue règle.
- S3.P4 : sept groupes, 4e catégorie hors calcul.
- S4.P1 : cinq valeurs pour trois fonctions, correction à trois valeurs.
- S4.P2 : poids d'un « très bien » et découpage des déciles conventionnels ; thèse / barème.
- S4.P3 : ce qui permettrait de préciser la règle.
- S5.P1 : chiffres de validation.
- S5.P2 : bornes de ces chiffres et conséquence (l'erreur n'est pas localisable).
- S6.P1 : le seuil n'est pas donné par la mesure.
- S6.P2 : durcir la règle déplace l'erreur.
- S6.P3 : le marché règle le seuil ; « doit régler » normatif.
Aucune séquence de trois paragraphes au delta identique ; aucune section principalement redondante.

défauts initiaux corrigés :
- S3.P3 omettait les 2e et 3e catégories : rétablies verbatim, S6.P1 s'y appuie désormais.
- Correspondance décile -> mot absente : donnée en S3.P2.
- Aucun exemple concret, citations coupées avant leur exemple : wattman, deux « très bien », règle durcie restitués.
- Intertitre faux en S2.P2 : corrigé.
- Conclusions non marquées S5.P2 et S6.P2, dont « pas plus juste » en tension avec « plus précise » : marquées et reformulées.
- S1.P3 et seconde phrase de S4.P3 sans delta : fondus ou remplacés.
- limits[1] et limits[3] plus forts que le dossier : corrigés (interne, non lu par le lecteur).

régressions détectées :
- Aucune régression conceptuelle. Perte mineure : l'image de la moyenne qui « noie » une note basse disparaît du lead (retirée au FACTCHECK_FIX faute d'appui) ; l'entrée reste concrète et la distinction total / tri subsiste en S2.P3.
- Proximité de sens entre la seconde citation de S2.P1 et la deuxième phrase de S2.P2, sans aller jusqu'à la redondance.
- Aucune remontée de `limits` dans le texte lecteur (ni tableau p. 166-167, ni textes 1927/1930, ni article de 2006) ; aucun terme du dispositif ; aucun tiret cadratin.

raison de la décision : gate valide sur le SHA exact (63/63). La réécriture supprime le défaut majeur
de l'audit, le cœur opératoire de la règle désormais montré (décile -> mot -> catégories), et rend au
texte les trois exemples de Lahy, sans perte d'information solide, à volume presque constant (+3,7 %).
La progression gagne un pont S3 -> S6 qui manquait, et la seule perte (la moyenne du lead) était un
cadrage sans appui. ACCEPT.
