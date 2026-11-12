concept : apprentissage-comme-recherche-heuristique
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 31aeb6afbea5b8f3143389df3a0c8aefc785d87c

GATE
- SHA-256 courant de corpus/deepenings/apprentissage-comme-recherche-heuristique.json :
  de0e3f1a5032e1e22c0f594b777de2f23dc4bb794afd9164d7b54e9005c0b19d.
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 64/64 claims
  soutenus, aucun mapping incomplet, aucune erreur structurelle.
- Baseline : blob 31aeb6af… lisible, JSON d'approfondissement, conceptId identique ; son SHA-256
  (b3e4a8d4…) est exactement la version auditée par audit.md.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          3/4     4/4     repoussoir « mécanisme séparé » (ancien S2.P1) remplacé par le dispositif à deux étages ; « l'un des rares… pas au conditionnel » (S3.P1) retiré ; règle conditionnelle et « l'expression renvoie » (S1.P1) retirées ; 64/64 PASS
progressivité pédagogique      3/4     3/4     solveur → environnement/pivot p. 160 → deux étages → thèse générale → GPS son propre apprenti → espace de recherche aveugle/guidé → objet (p. 161) → table → critère → mécanisme des différences → statut → ouverture. Saut levé : le mécanisme simulé (S5.P1) est exposé avant d'être dit simulé. Reste : S4 s'intercale entre les deux « pièces » (S3.P2 / S5.P1 « L'autre pièce »)
densité / non-redondance       2/4     3/4     anciens S2.P2, S3.P3, S5.P4 (sans delta) supprimés ; statut épistémique ramené de six occurrences à lead[1] + S5.P2/S5.P3 ; lest bibliographique de S1.P1 retiré. Léger recouvrement S1.P2 (« le noyau ne contient rien du domaine ») / S3.P2 (« sépare deux questions »)
clarté                         3/4     3/4     « folio » disparu du texte lecteur ; heuristique défini par son usage (S2.P3). Restent : « A-Environment » non glosé (S5.P2), « ils » sans antécédent explicite dans S4.P2
profondeur explicative         2/4     4/4     le « pourquoi heuristique » (S2.P1 thèse générale, S2.P3 espace + aveugle/guidé) et le « comment » (S3.P2 table par lecture des formes des opérations ; S5.P1 langage des tests, contrainte anti-circularité, buts sans point d'arrivée) sont désormais enseignés
valeur des exemples            2/4     3/4     Friedberg désormais rattaché à l'argument de l'espace ; « at random or by rote » donne chair à « efficace » par le contraire (S4.P1) ; pisteur en forêt de l'auteur (S4.P2) ; vignette du lead marquée « Imaginons »
limites / nuances              3/4     4/4     efficace ≠ rapide ; supposition humaine déclarée comme telle (p. 162) ; bilan positif p. 185 contrebalançant « quite untested » p. 186 ; Newell seul en séance conservé
pouvoir d'ouverture            1/4     3/4     clôture S5.P4 sur la question empirique p. 164 et les deux objections p. 186 (jeu universel, monde et sens communs) au lieu d'une précaution redite

Test du delta (nouvelle version) : chaque paragraphe a un delta propre (écart vs calcul ; cadre 1959 ;
moyens-fins ; environnement et pivot ; deux étages + thèse générale ; thèse spécifique ; espace
aveugle/guidé ; objet p. 161 ; table de connexions sans essais ; efficace par le contraire ; humain
vs machine ; jeu de différences ; rien n'a tourné + bilan ; GPS lui-même ne résout rien ; questions
ouvertes). Aucune séquence de trois paragraphes au delta identique ; aucune section principalement
redondante. Champ `limits` : aucune remontée dans le texte lecteur (P1320, P1584, Beer, OCR,
francophonie, 1958 absents de lead + sections).

défauts initiaux corrigés :
- Concept éponyme non enseigné : corrigé (thèse générale p. 155 en S2.P1, explication de « heuristique » en S2.P3 via l'espace de recherche, Friedberg et la règle aveugle/guidé).
- « Comment » absent : corrigé (S3.P2 table de connexions ; S5.P1 acquisition du jeu de différences, exposée avant la mention de la simulation).
- Redondance systémique du statut : corrigée (trois paragraphes sans delta supprimés).
- Fragilités documentaires S2.P1, S3.P1, S1.P1 : retirées.
- Clôture sur une précaution : remplacée par les questions que les auteurs laissent ouvertes.

régressions détectées :
- Aucune régression majeure.
- Mineures : perte de la citation p. 180 « very tentative spirit » (choix de densité, la réserve reste portée par p. 186) ; le retour explicite à la vignette du lead (ancien S3.P3) disparaît, partiellement repris par le pisteur ; « ils » sans antécédent dans S4.P2 ; « A-Environment » toujours non glosé ; S5.P1 traite du mécanisme dans une section titrée « simulation menée à la main ».

raison de la décision : le gate est valide sur le SHA exact. La réécriture supprime les deux défauts
majeurs du diagnostic (le titre est désormais enseigné, le mécanisme est montré), élimine les
paragraphes sans delta, retire les trois fragilités documentaires et ouvre au lieu de conclure par
une précaution, pour une croissance modérée (≈ +6 % de mots). Le gain ne vient pas d'un simple
raccourcissement ni d'un lissage stylistique : la profondeur augmente nettement. Les fragilités
résiduelles sont de clarté locale et ne dégradent aucun axe par rapport à la baseline. ACCEPT.
