concept : ergonomie-tache-ergonomie-activite
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 9d9dd442c638863c375ebf9e11f15c2942dd8b0c

GATE
- SHA-256 actuel de corpus/deepenings/ergonomie-tache-ergonomie-activite.json :
  c69d6d80a6ebb986d4c905cdf49f4c154ff687701736fb82f088dd03173a88cc
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 46/46 SUPPORTED,
  mapping_incomplete vide, structural_errors vide.
- Blob de référence : lisible par git cat-file, JSON d'approfondissement, conceptId
  ergonomie-tache-ergonomie-activite (même carte). Il correspond au texte audité (1 168 mots,
  13 paragraphes, S1.P1 « écrite à l'avance », OST, modèles fonctionnalistes).

EXEMPTIONS NO_VERIFIABLE_CLAIM (point d'attention de l'orchestrateur)
Le claim map final exempte lead[0] et sections[4].paragraphs[1], sans motif écrit (le claim map
ne porte aucun champ de justification : défaut de procédure au regard de FACTCHECK_PROTOCOL §4,
signalé mais non bloquant ici, car vérifié à la main ci-dessous).
- lead[0], phrase finale : « Dans cette scène, ce qu'on lui demande et ce qu'elle fait ne se
  recouvrent pas. » Bornée explicitement à la scène stipulée (« Dans cette scène »), elle a
  justement remplacé la généralisation non marquée de l'ancienne version (« ne se recouvrent
  jamais complètement »). N'attribue rien aux auteurs, ne généralise pas. Texte identique au
  claim C001 de loop0, alors SUPPORTED (SUP-33b9d11be9d7df09, SUP-aead6ad6e1cdbacb).
- sections[4].paragraphs[1], phrase finale : « Les deux équipes partent des mêmes observations ;
  elles ne donnent pas à la tâche le même rôle. » Interne à la vignette (sujet : les deux équipes
  inventées), aucune attribution aux auteurs, aucune généralisation au monde. Texte identique à
  C044 (loop0) et C041 (loop1), SUPPORTED les deux fois. La phrase sur la seconde équipe
  (efficacité / santé, prescription « comme une référence ») est identique à C040 (loop1),
  SUPPORTED ; la phrase sur la première équipe est la version raccourcie de C039, dont seule la
  clause fautive (« jusqu'à obtenir… ») a été retirée ; il reste « corriger la prescription »,
  porté par SUP-33b9d11be9d7df09 et le résumé validé.
Conclusion : aucune des deux phrases finales n'attribue ni ne généralise au-delà des appuis.
L'exemption ne masque rien qui n'ait déjà été soutenu mot pour mot.

DELTAS DE LA NOUVELLE VERSION
- lead[0] : l'écart entre demandé et fait, par une scène bornée.
- lead[1] : les deux mots ; la distinction est admise, l'usage divise ; la thèse et ce qu'elle renverse (lequel sert l'autre).
- S1.P1 : la distinction n'est pas des auteurs (fondatrice, sans fondateur) ; lieu et date (Activités, n° 1, avril 2004) ; ce qui leur revient.
- S1.P2 : la discipline se partage (§ 3), et le partage porte sur une finalité, non une méthode (« finalité » expliquée).
- S2.P1 : l'ergonomie de la tâche observe aussi l'opérateur, mais pour corriger la prescription ; travail « maîtrisable et réglable » ; sens d'« horizon » marqué comme lecture.
- S2.P2 : la position est celle que les auteurs prêtent à Montmollin (2002) ; taylorisme amélioré et non contesté.
- S3.P1 : le renversement en verbatim (§ 45) et sa condition : la tâche comme référence, non comme norme.
- S3.P2 : les deux ergonomies observent ; elles diffèrent par la fonction de l'observation.
- S4.P1 : ce qu'est l'activité pour les auteurs : expérience de ce qui résiste, tenir ensemble efficacité demandée et santé.
- S4.P2 : l'inépuisabilité porte sur toute description ; le mot « pensée ».
- S5.P1 : le lieu de la thèse (ingénierie de projet = là où l'on conçoit) ; la question à l'échelle du poste ; cas des § 19-20 désigné et renvoyé au texte.
- S5.P2 : vignette : mêmes observations, deux rôles de la tâche ; la seconde équipe mobilise efficacité / santé.
- S6.P1 : deux conséquences que les auteurs tiennent pour indissociables (scientificité = fidélité à l'objet ; l'ergonome répond de son intervention).
- S6.P2 : la dispute tenue pour normale si visible ; dispositif clinicien nommé, à lire.
Aucune séquence de trois paragraphes au delta substantiellement identique. Aucune section
principalement redondante.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     retraits de S1.P1 (généralités), définition de l'OST, modèles fonctionnalistes, « donne son titre », caricature « corriger les personnes » ; nuance d'attribution ajoutée (S1.P1) ; Montmollin cadré « position qu'ils lui prêtent » (S2.P2) ; gate 46/46
progressivité pédagogique      2/4     3/4     scène -> mots -> statut de la distinction -> deux voies -> renversement -> ce qu'est l'activité -> conception -> conséquences ; reste : lead[1] livre déjà la thèse que S3.P1 re-cite, et « Reste à comprendre pourquoi l'activité devrait commander » (S4.P1) promet un « pourquoi » que le paragraphe ne livre plus qu'implicitement depuis le retrait de C036
densité / non-redondance       2/4     3/4     les trois groupes redondants de l'audit sont dissous (S1.P1/S4.P1 ; lead[1]/S1.P2/S3.P1 ; S3.P2/S5.P1/S5.P3) ; échos résiduels : « renversement » en lead[1], S1.P1, S3.P1 ; « les deux observent » en S2.P1, S3.P2, S5.P2
clarté                         3/4     3/4     « finalité » et « ingénierie de projet » expliqués là où ils servent ; glose contradictoire d'« horizon » supprimée ; mais S3.P2 est très bref et la paire norme / référence n'est plus expliquée, seulement citée
profondeur explicative         2/4     3/4     ajout du mécanisme manquant (activité = tenir ensemble efficacité et santé, S4.P1) et de ce que fait réellement l'ergonomie de la tâche (S2.P1) ; perte de la glose norme / référence (non sourcée, retirée par le gate loop1)
valeur des exemples            3/4     3/4     lead[0] conservé et borné ; vignette S5.P2 découplée du cas réel, sans caricature, et porteuse de la distinction propre (mêmes observations, usage différent)
limites / nuances              2/4     3/4     nuance d'attribution au bon moment (S1.P1) ; « l'ergonomie de la tâche observe aussi » (S2.P1) qui évite le contresens central ; position de Montmollin marquée comme prêtée
pouvoir d'ouverture            2/4     3/4     fin sur les conséquences des auteurs (scientificité, responsabilité de l'ergonome) et sur une dispute « discutées et visibles », dispositif clinicien à lire ; cas § 19-20 renvoyé au texte
Le champ `limits` ne remonte pas dans le texte lecteur : les deux renvois au texte (S5.P1, S6.P2)
sont des invitations du côté du lecteur, nommant un contenu précis, conformes à PROTOCOLE §1.

défauts initiaux corrigés :
- Trois groupes redondants supprimés, dont la section S4 qui refaisait S1.
- Le côté « activité » est désormais défini positivement (S4.P1, SUP-33b9d11be9d7df09).
- Caricature de l'ergonomie de la tâche supprimée : elle observe et corrige la prescription (S2.P1, S5.P2).
- Passages financés par des connaissances générales retirés (S1.P1 ancien, OST, modèles fonctionnalistes).
- Contresens d'attribution prévenu : la distinction n'est pas des auteurs (S1.P1).
- Fuite de dispositif « une phrase qui donne son titre à leur position » supprimée.
- Vignette décrochée du cas réel non lu (« une ligne de montage », non « cette »).
- Ouverture réelle à la place d'une reformulation finale de la thèse.

régressions détectées :
- Perte de la glose norme / référence (« une norme s'impose et se vérifie… »), meilleur paragraphe de l'ancienne version selon l'audit ; perte légitime (non soutenue, retirée par le gate), mais la paire n'est plus que citée.
- S4.P1 s'ouvre sur « Reste à comprendre pourquoi l'activité devrait commander » et ne formule plus explicitement le lien causal (retrait de C035/C036) ; le lecteur doit l'inférer. Transition un peu plus forte que ce qu'elle livre ; mineur.
- Échos lexicaux résiduels (« renversement », « les deux observent ») ; non bloquants.
- Exemptions NO_VERIFIABLE_CLAIM non motivées par écrit dans le claim map (procédure), sans effet sur le fond après vérification manuelle.
Aucune régression conceptuelle, aucune perte d'information solide de l'ancienne version (ce qui
est perdu était non financé), aucun ajout séduisant sans fonction.

raison de la décision : FACTCHECK_PASS sur le SHA exact ; les sept défauts majeurs de l'audit
sont corrigés, dont les trois groupes redondants, la caricature contraire à la lecture primaire et
l'absence de définition de l'activité ; progression et profondeur en hausse sur pièce. Les deux
vignettes exemptées se ferment sur des phrases bornées à la scène, identiques à des claims déjà
SUPPORTED, sans attribution ni généralisation aux auteurs. Les régressions relevées sont mineures
et tiennent à des retraits imposés par le gate.
