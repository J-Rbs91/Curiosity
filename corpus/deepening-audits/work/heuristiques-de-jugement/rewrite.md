concept : heuristiques-de-jugement
mode    : REVISE

Matière lue : PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md,
corpus/deepenings/heuristiques-de-jugement.json (version auditée),
corpus/validated/heuristiques-de-jugement.json (notes + bloc review),
corpus/evidence/heuristiques-de-jugement/ listé moi-même : un seul fichier, `lecture.json`,
lu intégralement (attribution, quotation, sources_ouvertes, definition_de_lauteur, reserves).
Pas de `scouting.json`. Aucune recherche web.

VOLUME

- avant : lecteur 1 352 mots, `limits` 197, total 1 549.
- après : lecteur 1 663 mots, `limits` 225, total 1 888.
- contrôle mécanique : `npm run corpus:deepen -- --check --only=heuristiques-de-jugement` → PASS,
  aucun avertissement de citation.

Le texte gagne 311 mots lecteur, dont la totalité va à de la mécanique de jugement (S3 et S4,
nouvelles) ; 195 mots ont été retirés ailleurs par suppression de redondance.

CE QUI A ÉTÉ CONSERVÉ

`lead[0]`, S1.P1, S1.P2, S2.P1, S2.P2 et l'intégralité de l'ancienne S5 (devenue S6) sont
conservés quasi mot pour mot : l'audit les donnait pour justes, bien écrits et documentairement
solides, et la trajectoire cible les gardait.

CE QUI A CHANGÉ, ET POURQUOI

1. `lead[1]` : « Leur réponse ne parle ni de paresse ni d'ignorance » remplacé par « Leur réponse
   ne commence pas par l'erreur ». L'audit signalait que la formule d'origine s'appuyait sur la
   p. 27, relevée sur la couche OCR seule (réserve n° 5 de `lecture.json`), et que le texte n'en
   tirait rien par ailleurs. La formule nouvelle est portée directement par la p. 1 en verbatim
   relu en image (« In general, these heuristics are quite useful, but sometimes… ») et elle
   annonce S2. Le contenu de l'ancienne phrase n'est pas perdu : il est repris, sourcé et
   développé en S2.P3.

2. S1.P3 supprimé. L'audit le donnait redondant avec `lead[1]` pour l'essentiel. Sa seule clause
   utile (c'est le résultat de la tâche courte qui est rendu en réponse à la longue) est passée
   en une phrase à la fin de S1.P2. Gain : 85 mots pour 25.

3. S2.P1 : une phrase ajoutée sur le mot « raccourci », d'après la réserve n° 8 de
   `lecture.json` (« le raccourci suggère un pis-aller, alors que le texte dit d'abord
   l'utilité »). Elle fonde sur pièce l'ordre utilité-puis-erreur que le paragraphe défendait par
   raisonnement seul. Aucune mention de traduction ni de vocabulaire de fabrication.

4. S2.P3 réécrit. L'audit le donnait re-déductible de S2.P1 et S2.P2. Il porte désormais la
   nuance que l'audit signalait manquante (axe G) : le biais n'a pas ici le sens de préjugé, il
   tient aux opérations par lesquelles une impression se forme, les auteurs le distinguant des
   intrusions du désir ou de l'intérêt ; et il vaut aussi pour l'expert qui juge intuitivement.
   Matière : p. 27, et la réserve n° 8 qui la reprend explicitement. **Paraphrase seule, aucun
   verbatim**, conformément à la réserve n° 5 : la lettre de ces pages n'est pas disponible. Une
   entrée de `limits` le déclare.

5. S3 nouvelle, « Quand la netteté tient lieu de distance ». L'analogie perceptive des p. 1 et 2,
   relue en image (feuillet n4), que `lecture.json` qualifie de passage « qui porte tout le
   raisonnement » et que l'ancienne version n'employait pas. Elle donne enfin le modèle complet
   de l'argument sur un cas vérifiable : une règle réellement valide (les objets lointains se
   voient moins nets), et c'est l'appui sur elle qui produit l'erreur systématique. Second
   paragraphe : les trois traits de la p. 2, dont le troisième est la seule issue que le texte
   propose. Choix délibéré de rendre les deux passages en français sans verbatim anglais : ils
   sont dans `definition_de_lauteur` et passeraient le contrôle, mais la glose française suffit
   ici et allège un texte déjà dense en anglais.

6. S4 nouvelle, « Ressembler, se rappeler, partir d'un chiffre ». C'est le défaut majeur relevé
   par l'audit : le lecteur ignorait encore, à la fin du texte, comment fonctionne une seule
   heuristique. Trois paragraphes, un par opération, tous sur verbatim relu en image :
   - représentativité (p. 3) : les trois formes de question, l'évaluation par le degré de
     similarité, et le premier des six biais numérotés comme démonstration de ce que l'échange
     laisse tomber ;
   - disponibilité (p. 15) : l'évaluation par la facilité de rappel, les deux exemples des
     auteurs (infarctus parmi ses connaissances, échec d'une affaire par imagination des
     difficultés), pourquoi le procédé vaut et pourquoi il dévie ;
   - ajustement (p. 20) : la valeur initiale, et la phrase qui décide de tout, les ajustements
     sont typiquement insuffisants, donc des points de départ différents donnent des estimations
     différentes. Plus le rattachement de la p. 31 à la prédiction numérique, qui rebranche le
     versant « combien » ouvert en S1.P2.
   Ce paragraphe résout aussi le saut de prérequis signalé par l'audit : l'ancienne S3 jugeait un
   vocabulaire avant d'avoir décrit les opérations qu'il nomme.

7. S5, fusion des anciennes S3 et S4, de 5 paragraphes et 440 mots à 2 paragraphes et 206 mots.
   L'audit excluait de `PASS` une section dont le rôle principal répète une section antérieure
   (§4) : les deux anciennes sections avertissaient l'une et l'autre contre la formule reçue.
   Elles n'en forment plus qu'une, à deux volets, le nom et le compte. La fusion ne coûte aucun
   fait : les pages 3, 15, 20, 2, 31 et 26, « an adjustment from a starting point », « We call
   this phenomenon anchoring », « some heuristics » et l'absence de « anchoring heuristic » sont
   tous conservés. Et la correction cesse d'être une remarque d'érudition, puisque S4.P3 vient de
   montrer que l'ancrage est l'effet observé de l'ajustement.

8. S6 (ancienne S5) : deux retouches seulement.
   - « Le texte cité ici » → « Le texte dont il vient d'être question », pour lever l'ambiguïté du
     « ici » relevée par l'audit.
   - « Ce n'est pas le compte rendu d'une expérience : c'est une mise en ordre » → « Il ne rend
     donc pas compte d'une expérience nouvelle : il met en ordre ce que ses auteurs avaient
     publié par morceaux ». L'audit en faisait un candidat `TOO_STRONG` formulé comme un constat.
     La nouvelle formule décalque l'`attribution_note` de l'enregistrement validé (« Le rapport
     rassemble des résultats que les auteurs avaient déjà publiés ailleurs, et ses notes y
     renvoient ») et la note d'attribution de `lecture.json`. Le numéro de bulletin d'institut a
     été retiré au passage : fait exact mais sans delta pour le lecteur, et il coûtait 13 mots.

9. `limits` refondu, 4 paragraphes. Trois entrées précisent la source, l'état d'accès et
   l'affirmation interdite ; la quatrième ajoute la frontière nouvelle ouverte par cette
   révision :
   - les p. 26 à 30 ne sont connues que par la transcription automatique du scan, fautive par
     endroits : substance utilisable, lettre non, et c'est de là que viennent, en paraphrase et
     sans verbatim, la distinction biais cognitifs / intrusions émotionnelles et la généralité
     aux experts de S2.P3 ;
   - l'article de Science 1974 : seule la phrase d'ouverture est disponible en propres termes,
     relevée sur un tirage public lors du contrôle de la citation, le reste par la notice de
     l'éditeur ;
   - le recueil de 1982 et la reprise de 1978 : notice seule ;
   - les quatre articles antérieurs ou annoncés : connus par le seul renvoi du rapport.

POINT D'ATTENTION POUR LE MAPPER DE FACT-CHECK

Reprise du signal de l'audit, toujours valable : S6.P2 cite la phrase d'ouverture de l'article de
Science de 1974. La source Science est `metadata-only` dans l'enregistrement validé comme dans
`lecture.json`. Le verbatim ne vient pas d'elle : il vient de la troisième note `CITATION` du bloc
`review`, où le contrôleur déclare avoir ouvert un tirage public et relève exactement les trois
écarts que le paragraphe énumère. `PROTOCOLE.md` §4 autorise les verbatim du bloc `review`. Le
claim doit donc être ancré sur la note `review`, et non sur la source `metadata-only`, faute de
quoi le verifier rendra `SOURCE_NOT_CONSULTED` sur un passage régulier.

Second point, inchangé : la négation exhaustive « L'expression "anchoring heuristic" ne figure
nulle part dans le rapport » est portée telle quelle par `notes[0]` de l'enregistrement validé et
par la réserve n° 7 de `lecture.json`. Le texte reprend désormais la formulation de
l'enregistrement validé plutôt qu'un compte de pages.

Aucun `SUP-...` n'a été fabriqué, aucun artefact de fact-check n'a été touché. La modification du
texte invalide le SHA : le cycle doit reprendre à `PREPARE`.

CONTRÔLES DE FIN

1. Delta par paragraphe, dans l'ordre : opération substituée au calcul / question exacte des
   auteurs et primat de l'utilité / l'objet est la croyance en amont du choix / chance contre
   combien, et l'échange nommé / les deux moitiés de la thèse se tiennent, et « raccourci » en
   inverse l'ordre / pourquoi une erreur orientée rend observable un procédé invisible / le biais
   n'est ni un défaut ni un préjugé, et il touche les experts / le mécanisme complet sur un cas
   perceptif vérifiable / les trois traits, dont la seule issue proposée / la représentativité
   juge la chance par la ressemblance / la disponibilité juge la fréquence par la facilité de
   rappel / l'ajustement est typiquement insuffisant, d'où l'ancrage / le rapport ne nomme
   heuristiques que deux des trois / « un nombre limité » n'est pas un compte / le document lu
   n'est pas l'article célèbre / la phrase de 1974 diffère en trois points / le déplacement
   grammatical change le sujet de l'action. Aucun paragraphe sans delta ; aucune paire
   consécutive au delta identique.
2. Rôle des sections : objet (S1), argument (S2), mécanisme sur un cas (S3), les trois opérations
   (S4), ce que la formule reçue ajoute (S5), l'identité du document et une variante de phrase
   (S6). Aucun rôle répété.
3. Frontières documentaires : aucune phrase sur le corps de Science 1974, sur le recueil de 1982,
   sur la reprise de 1978, ni sur les quatre articles renvoyés. Aucun verbatim des p. 26 à 30.
4. `limits` n'est pas remonté en bloc visible ; le texte lecteur ne nomme ni l'état d'accès des
   sources, ni la transcription du scan, ni aucune structure interne.
5. Contrôles mécaniques : pas de tiret cadratin, pas de Markdown, apostrophes typographiques,
   guillemets français avec espaces fines insécables (U+202F) vérifiés un à un, titres de section
   sous 60 caractères et nommant leur sujet, six sections, aucun avertissement de citation.
6. `npm run corpus:deepen -- --check --only=heuristiques-de-jugement` : PASS.
