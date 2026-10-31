concept : cinq-dimensions-de-l-emploi
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : bab86fdb9fd59149c9eebae44c544ca34f6b65a5

gate : `factcheck-gate.json` = `FACTCHECK_PASS`, 73 claims, 73 SUPPORTED, 0 échec, 0 mapping incomplet,
0 erreur structurelle. `candidate_sha256` = d9874a585394b9ca8aac1eaeb4b913fb8a2eb11519a0ae7de50314e74256ba86 ;
SHA-256 recalculé sur `corpus/deepenings/cinq-dimensions-de-l-emploi.json` : identique.
baseline : `git cat-file -p bab86fdb…` se lit, JSON d'approfondissement (`$schema` deepening, clé
`conceptId` = cinq-dimensions-de-l-emploi, le schéma n'a pas de clé `concept_id`) ; son SHA-256
(7c000e18…d8b9) est exactement la version auditée déclarée dans `audit.md`. Baseline confirmée.

volumes texte lecteur (lead + sections) : 1 282 → ~1 380 mots (+7,6 %), sous le plafond de l'audit
(+10 %). Sections 5 → 5 ; paragraphes 13 → 15 (S1 +1, S2 +1, S3 −1). `limits` réécrit, non remonté.

---

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     S2.P2 « un seul est nommé » (contredit par SUP-8349b9530e887f0d) disparaît ; S2.P3 « peut réussir ici et ne rien donner là » remplacé par les deux conditions documentées (conjonction, growth need strength) ; « elle vaut critère » (S3.P2) et « au critère qui décide de l'appartenance » (S4.P3) supprimés ; Figure 1 décrite à trois colonnes et quatre résultats. Les inférences restantes sont marquées (« cela implique, selon cette condition », « Cela implique »). Absentéisme non étendu, MPS non expliqué, texte de 1974 sans titre ni numéro : prescriptions négatives de l'audit respectées.
progressivité pédagogique      3/4     4/4     lead[1] annonce « quelque chose chez la personne » → S2.P1 le nomme et le définit sans rejouer la médiation comme neuve ; S1.P2 convertit la scène avec les définitions de S1.P1 ; S3.P2 rattache le feedback du travail à l'état « connaissance des résultats » posé en S2.P2 (le saut signalé par l'audit est comblé) ; S2.P4 fait tomber la stipulation posée en lead[0]. Seule réserve : en lead[1], « cet écart » n'a plus de référent explicite depuis la suppression de « la première est plus motivée », le lecteur l'infère de la scène.
densité / non-redondance       3/4     3/4     Les trois redites transversales de l'audit sont levées : « avant/après » une seule fois (S1.P3), « ce rapport est un instrument » retiré de S5, le critère d'appartenance n'est plus redit (S3.P3 fusionné, S4.P3 réécrit en constat). Restent des échos mineurs : lead[0] pose deux fois la même stipulation (« que rien ne distingue au départ » / « on a supposé les deux personnes semblables ») ; « pourvu que ce soit le travail lui-même qui le dise » (S1.P2) anticipe la distinction de S3.P2, qui garde toutefois son delta propre (raison d'exclusion, état nourri). Aucune séquence de trois paragraphes au même delta, aucune section principalement redondante.
clarté                         3/4     4/4     S1.P1 donne les cinq définitions au lieu d'interdire le sens courant sans rien proposer à la place ; les trois états sont glosés dès leur nom (S2.P1) ; « modérateur » arrive après les deux profils qui le rendent compréhensible ; termes anglais toujours glosés.
profondeur explicative         2/4     4/4     Le mécanisme est désormais complet : câblage trois-une-une (S2.P2), quatre résultats (S2.P1), conjonction obligatoire des trois états (S2.P3), modérateur individuel (S2.P4), rapport du feedback du travail à l'état qu'il nourrit (S3.P2). L'ancienne version n'exposait qu'un état sur trois.
valeur des exemples            2/4     4/4     L'exemple du lead est enfin réinvesti : trois contrastes rattachés à Task Identity, Autonomy, Task Significance, le quatrième par la source du retour et non par son délai, Skill Variety non forcée (S1.P2). Exemple stipulé de S2.P3 (poste riche sans connaissance des résultats) qui fait comprendre la non-compensation. La stipulation « personnes semblables » du lead devient un ressort en S2.P4. Chef qui change et soudure conservés en S3.P2.
limites / nuances              3/4     4/4     Les deux conditions réelles du rapport (états réunis ; théorie qui ne « marche » pas pour tous) remplacent la condition inventée ; distinction noyau / hors noyau conservée avec la phrase « sept plutôt que cinq » ; l'exclusion de Dealing with Others n'est plus justifiée par une raison donnée pour Feedback from Agents.
pouvoir d'ouverture            3/4     4/4     S5 finit sur une tension documentée et précise : la chaîne vise la qualité du travail, l'instrument ne mesure pas la productivité (SUP-6b9864dc4adc5dc5), donc le diagnostic porte sur le poste et sur ce qu'on en éprouve, pas sur ce qu'on produit ; renvoi au texte qui expose et teste la théorie, et désormais aussi la formule.

défauts initiaux corrigés :
- défaut majeur n° 1 (S2.P2 « un seul est nommé », contredit par le dossier) : supprimé ; les trois états sont nommés, définis et câblés (S2.P1, S2.P2).
- défaut majeur n° 2 (S2.P3, condition inventée « réussir ici, ne rien donner là ») : supprimé ; remplacé par la conjonction obligatoire (S2.P3) et par growth need strength (S2.P4), qui dit d'ailleurs l'inverse de l'ancien texte : c'est la personne qui fait varier la réponse au même poste.
- défaut majeur n° 3 (S1.P1 promet des définitions sans les donner, exemple du lead non converti) : supprimé (S1.P1, S1.P2).
- défaut majeur n° 4 (critère d'appartenance surgénéralisé et redit trois fois) : supprimé ; raison bornée à Feedback from Agents, S4.P3 réécrit en constat sur les quatre noms relationnels.
- défaut majeur n° 5 (redites sur l'usage diagnostique, généralité « le geste qu'on attend d'un outil de diagnostic ») : supprimé.
- description de la Figure 1 à deux colonnes : corrigée (trois colonnes, quatre résultats, modérateur).

régressions détectées :
- lead[0] : la thèse frappante « ce qui les sépare n'est pas dans les deux personnes, il est dans les deux postes » est réduite par le fact-check à une stipulation (« on a supposé les deux personnes semblables : seuls leurs postes diffèrent »). Perte d'accroche réelle, mais compensée : la stipulation est cohérente avec growth need strength et S2.P4 la reprend explicitement. La thèse ancienne était d'ailleurs en tension avec le modérateur que le rapport énonce. Non bloquant.
- lead[1] : « cet écart » perd son référent explicite (l'écart d'engagement n'est plus dit en lead[0]). Mineur : la scène le rend évident.
- S1.P3 perd la phrase forme ← fonction (« cinq entrées seulement, chacune définie d'assez près pour qu'on puisse la coter ») ; le paragraphe est plus mince (titre + usage). Perte modeste, retrait justifié par l'échec antérieur au fact-check.
- lead[0] : stipulation dite deux fois dans le même paragraphe. Cosmétique.
- Aucune remontée de `limits` dans le texte lecteur. « c'est ce texte qu'il faudra lire » (S5.P1) fait écho à la formule de `limits[0]`, mais il remplit dans le texte une fonction d'ouverture et non d'affichage de lacune. Acceptable.
- Aucune information solide de l'ancienne version perdue sur le fond : la généalogie (S4), la frontière du noyau (S3) et le renvoi (S5) sont conservés.

raison de la décision : le gate est valide sur le SHA exact (73/73). Les cinq défauts majeurs de l'audit sont tous supprimés, et non pas seulement reformulés : S2, pivot du concept, passe d'un état sur trois et d'une condition inventée au mécanisme complet tel que le rapport l'énonce. L'exemple du lead est enfin converti par les définitions. L'ajout reste dans le budget (+7,6 %) et il est financé par le retrait de vraies redites, pas obtenu en raccourcissant. Les régressions relevées (accroche du lead affaiblie par le fact-check, S1.P3 un peu plus mince) sont mineures et compensées par la cohérence nouvelle entre la stipulation du lead et le modérateur. La progression est au moins aussi claire qu'avant, la profondeur nettement accrue. ACCEPT.
