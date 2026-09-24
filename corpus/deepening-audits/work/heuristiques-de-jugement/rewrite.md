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

================================================================================

PASSE 2 — FACTCHECK_FIX

concept : heuristiques-de-jugement
mode    : FACTCHECK_FIX
entrée  : corpus/deepening-audits/work/heuristiques-de-jugement/factcheck-gate.json
          (verdict FACTCHECK_FAIL, 77 claims, 75 supportés, 2 en échec)
ancrage : corpus/deepening-audits/work/heuristiques-de-jugement/claim-map.json
supports relus : corpus/deepening-audits/work/heuristiques-de-jugement/factcheck-pack.json
          (résolution des neuf SUP-... cités par C007 et C066)

Matière relue : PROTOCOLE.md, FACTCHECK_PROTOCOL.md, AUDIT_PROTOCOL.md,
corpus/deepenings/heuristiques-de-jugement.json, corpus/validated/heuristiques-de-jugement.json,
corpus/evidence/heuristiques-de-jugement/ listé de nouveau : toujours un seul fichier,
`lecture.json`. Aucune recherche web, aucun fait ajouté, aucun support inventé.

Le gate est l'autorité. Deux claims seulement sont touchés ; le reste du texte lecteur est
inchangé, y compris les paragraphes voisins des deux phrases corrigées.

--------------------------------------------------------------------------------
C007 — lead[1], offsets 414-541, verdict TOO_STRONG
--------------------------------------------------------------------------------

Avant :
  « elle dit qu’il existe un petit jeu de procédés par lesquels une tâche hors d’atteinte
  devient une opération que l’on sait faire »

Après :
  « elle dit qu’il existe un petit jeu de procédés par lesquels une tâche complexe devient
  une opération plus simple »

Ce que disent les supports. SUP-dfd1244cfe6b6de5 (evidence:lecture.json, $.definition_de_lauteur)
et SUP-f16dc4412c2f6e7b (validated, $.review.notes[0]) portent le premier paragraphe en verbatim :
« they reduce the complex tasks of assessing likelihoods and predicting values to simpler
judgmental operations ». SUP-0a329daf8b158213 et SUP-ea46cdba7ef656e1 portent la citation avec la
coupe. Les quatre disent « complex » et « simpler », deux termes relatifs l’un à l’autre.

La faute. La phrase est donnée comme ce que dit la thèse (« elle dit que »), donc en régime
d’affirmation d’auteur, et elle y substituait deux absolus : « hors d’atteinte » pour complexe,
« que l’on sait faire » pour plus simple. Aucun support n’établit que la tâche initiale serait
inaccessible ni que l’opération substituée serait maîtrisée. C’était une escalade de degré sur un
énoncé attribué.

Correction appliquée : bornage. Le degré est ramené à celui du texte source, rien n’est retiré de
la structure de la phrase, rien n’est ajouté. Le geste reste lisible pour le lecteur : le
paragraphe d’ouverture avait déjà installé « à la place du calcul que vous n’avez pas fait », qui
porte l’intuition ; la thèse n’avait pas besoin de la redire en plus fort. Delta du paragraphe
inchangé : il pose la question du rapport et sa réponse en une phrase.

Pas de recouvrement créé avec S1.P2, qui fait un autre travail : il sépare vraisemblance et
valeur, donne le verbatim complet avec sa traduction, et nomme l’échange (c’est le résultat de la
tâche courte qui est rendu en réponse). Le lead énonce, S1.P2 décompose.

--------------------------------------------------------------------------------
C066 — sections[5].paragraphs[0], offsets 236-431, verdict TOO_STRONG
--------------------------------------------------------------------------------

Avant :
  « Ses seize notes finales renvoient à des résultats déjà parus, dans le Psychological
  Bulletin en 1971 et dans Cognitive Psychology en 1972, et deux d’entre elles annoncent des
  articles à paraître. »

Après :
  « Il compte seize notes finales, dont deux renvoient à des résultats déjà parus, dans le
  Psychological Bulletin en 1971 et dans Cognitive Psychology en 1972, et deux autres annoncent
  des articles à paraître. »

Ce que disent les supports. Le nombre de seize est établi deux fois : SUP-465a85c55ec05830
(validated, $.review.notes[5], « les feuilles 35-36 (= p. 32-33) contiennent REFERENCES AND NOTES,
notes 1 à 16 ») et SUP-66d5a53a3634ec31 (validated, $.notes[4], même comptage). Le détail des
notes s’arrête à quatre : SUP-be5a9d7602201304 (validated, $.review.notes[9]) écrit que c’est
« vrai des notes 2 (Cognitive Psychology 1972) et 5 (Psychological Bulletin 1971), tandis que les
notes 1 et 6 portent in press en 1973 ». SUP-3c5ff47979a1e263 (evidence:lecture.json,
$.reserves[10]) recoupe les quatre titres et déclare qu’aucun n’a été ouvert. Les douze autres
notes ne sont documentées nulle part.

La faute. Le sujet « Ses seize notes finales » attribuait à l’ensemble une propriété attestée pour
deux d’entre elles. Le compte, lui, était juste ; c’est la portée du prédicat qui débordait.

Correction appliquée : réduction de portée. Le nombre seize est conservé, puisqu’il est établi, et
il change de fonction : il devient le total dont on prélève deux plus deux, au lieu du sujet d’une
généralisation. Les deux notes « in press » passent de « deux d’entre elles » à « deux autres »,
ce qui les distingue explicitement des deux premières et cale la phrase sur les notes 1, 2, 5 et 6
exactement. Aucun fait nouveau, aucune source nouvelle, aucun chiffre qui ne soit dans les
supports.

C067, la phrase suivante (« Il ne rend donc pas compte d’une expérience nouvelle : il met en ordre
ce que ses auteurs avaient publié par morceaux »), était SUPPORTED et n’est pas touchée. Son
« donc » reste porté : deux publications antérieures et deux à paraître suffisent à la mise en
ordre qu’elle énonce, qui ne dépendait pas du compte total.

--------------------------------------------------------------------------------
`limits` — précision interne ajoutée
--------------------------------------------------------------------------------

Le premier paragraphe de `limits` disait que les notes finales renvoient aux quatre titres, sans
dire combien de notes sont réellement documentées. C’est la frontière exacte que le gate a
trouvée, et elle manquait au registre interne. Phrase ajoutée :

  « Sur les seize notes des pages 32 et 33, quatre seulement sont documentées ici, les notes 1,
  2, 5 et 6 : rien ne peut être dit des douze autres, ni de ce vers quoi elles renvoient, et
  aucune propriété observée sur ces quatre ne vaut pour l’ensemble. »

Elle nomme la source (les notes des p. 32-33), l’état de connaissance (quatre notes sur seize) et
l’affirmation interdite (toute généralisation à l’ensemble). Elle reste interne : elle n’apparaît
nulle part dans `lead` ni dans `sections`, et le champ n’est pas rendu au lecteur.

--------------------------------------------------------------------------------
CONTRÔLES
--------------------------------------------------------------------------------

1. Deltas. Aucun paragraphe n’a été ajouté ni supprimé ; les deltas établis à la passe 1 sont
   inchangés. Les deux phrases corrigées font toujours le même travail dans leur paragraphe, à
   un degré d’affirmation près.
2. Aucune section ne répète principalement une section précédente : la structure n’a pas bougé.
3. Frontières documentaires : les deux phrases sont désormais en deçà de leurs supports plutôt
   qu’au-delà. Rien n’a été ajouté hors de `lecture.json`, des `notes` et du bloc `review`.
4. `limits` n’est pas remonté en bloc visible.
5. Aucune citation modifiée : les passages entre guillemets du texte lecteur sont intacts, aucun
   avertissement de citation au contrôle.
6. Volume. Total compté par le script : 1 935 mots, `limits` compris (le compteur additionne
   `lead`, `sections` et `limits`). Texte lecteur : 3 mots de moins qu’avant la correction.
7. `npm run corpus:deepen -- --check --only=heuristiques-de-jugement` → PASS.
   « 1 approfondissement(s) contrôlé(s), 1935 mots. Rien projeté. »

Le SHA de l’approfondissement a changé : le fact-check précédent est caduc et la chaîne doit
reprendre à PREPARE. Aucun artefact de fact-check n’a été édité à la main.


================================================================================

concept : heuristiques-de-jugement
mode    : FACTCHECK_FIX (seconde et dernière boucle autorisée)

Matière relue dans un contexte frais : PROTOCOLE.md, FACTCHECK_PROTOCOL.md,
corpus/deepenings/heuristiques-de-jugement.json, corpus/validated/heuristiques-de-jugement.json
(`notes` + bloc `review`), corpus/evidence/heuristiques-de-jugement/ listé moi-même (un seul
fichier, `lecture.json`, lu en entier, `reserves` comprises), puis les deux artefacts reçus :
factcheck-gate.json et claim-map.json. Aucune recherche web, aucun fait ajouté de mémoire,
aucun support inventé.

Autorité du tour : le gate. Cinq claims non SUPPORTED, quatre phrases touchées (C022 et C023
appartiennent au même paragraphe). Rien d'autre n'a été modifié dans le fichier.

--------------------------------------------------------------------------------
C011 — TOO_STRONG — sections[0].paragraphs[1], offsets 0-69
--------------------------------------------------------------------------------

Avant : « Les deux questions qui suivent séparent deux choses que l’on confond. »
Après  : « Les deux questions qui suivent distinguent deux choses. »

Geste : bornage. Le grief du gate porte exactement sur « que l’on confond », qui affirme un fait
de réception (la confusion courante) que rien dans la documentation de travail n'établit.
Le reste du claim (les deux questions de la p. 1, la séparation entre évaluation de vraisemblance
et prédiction de valeur) est porté par le support et reste écrit tel quel. La phrase suivante,
qui explicite les deux termes séparés, n'a pas bougé : le delta pédagogique du paragraphe est
intact, seule l'affirmation surnuméraire tombe.

--------------------------------------------------------------------------------
C022 — UNSUPPORTED — sections[1].paragraphs[1], offsets 79-222
C023 — UNSUPPORTED — même paragraphe, offsets 224-255
--------------------------------------------------------------------------------

Avant : « Le mot qui porte est « systématiques ». On peut comprendre son intérêt ainsi : une
erreur systématique n’est pas une bévue, elle penche toujours du même côté, chez des personnes
différentes et sur des questions différentes. C’est ce qui la rend montrable. Une erreur qui
varie au hasard ne renseigne sur rien ; une erreur qui se répète dans le même sens trahit la
règle qui l’a produite, et c’est par là que le procédé, invisible en lui-même, devient
observable. »

Après : « Le mot qui porte est « systématiques ». On peut comprendre son intérêt ainsi : ce que
ce mot désigne est une régularité, et non un accident. Une erreur qui varie au hasard ne
renseigne sur rien ; une erreur qui se répète dans le même sens trahit la règle qui l’a produite,
et c’est par là que le procédé, invisible en lui-même, devient observable. »

Geste sur C022 : bornage. La généralisation empirique visée par le gate (« penche toujours du
même côté, chez des personnes différentes et sur des questions différentes ») affirmait une
constance inter-individuelle et inter-questions que le dossier n'établit nulle part. Elle est
retirée. Ce qui reste est une glose du mot, sous le marqueur d'interprétation « On peut
comprendre son intérêt ainsi » déjà présent avant correction.

Geste sur C023 : retrait. « C’est ce qui la rend montrable. » était posé comme un fait sans
support. La phrase est supprimée plutôt qu'affaiblie : son contenu était déjà accompli, et mieux,
par la dernière clause du paragraphe (« devient observable »), qui reste couverte par le même
marqueur d'interprétation. Aucun palier de compréhension n'est perdu ; une redondance disparaît
avec le claim.

Rien n'a été ajouté à la place : le paragraphe perd 22 mots.

--------------------------------------------------------------------------------
C030 — TOO_STRONG — sections[2].paragraphs[0], offsets 76-177
--------------------------------------------------------------------------------

Avant : « Évaluer intuitivement une vraisemblance ressemble, écrivent-ils, à estimer une distance
ou une taille »
Après  : « Évaluer intuitivement une probabilité ressemble, écrivent-ils, à estimer une distance
ou une taille »

Geste : réattribution au mot réellement écrit. Le passage transcrit dans `definition_de_lauteur`
est « The intuitive assessment of probability resembles the assessment of perceptual quantities
such as distance or size ». La réserve de traduction de `lecture.json` est explicite : likelihood
n'est pas probabilité, le rapport oppose les deux, et c'est précisément la substitution que le
résumé éditeur de Science opère. Écrire « vraisemblance » sous un « écrivent-ils » faisait
exactement cette substitution sous couvert d'attribution. Le paragraphe rend désormais le mot du
texte, et la réserve de `limits` sur likelihood/vraisemblance reste vraie telle quelle : elle
couvre les endroits où la traduction est en jeu, non celui-ci, où c'est le mot anglais probability
qui est rendu.

Aucune autre occurrence de « vraisemblance » n'a été touchée : ailleurs dans le texte, elle rend
likelihood, ce que la réserve autorise.

--------------------------------------------------------------------------------
C061 — TOO_STRONG — sections[4].paragraphs[0], offsets 149-231
--------------------------------------------------------------------------------

Avant : « Le rapport n’appelle heuristiques que les deux premières, page 3 et pages 15 et 20 »
Après  : « Dans le corps du rapport, seules les deux premières sont appelées heuristiques, page 3
et pages 15 et 20 »

Geste : bornage, exactement à la portée des supports. Les deux supports restreignent l'énoncé au
corps du texte, et la restriction n'est pas cosmétique : le SUMMARY de la p. 31 écrit bien
« three heuristics, or mental operations », ce qui rend fausse l'affirmation portant sur le
rapport entier. La correction reprend la formulation des `notes` validées (« Le corps du rapport
n'appelle heuristiques que la représentativité (p. 3) et la disponibilité (p. 15 et 20) »).
Effet secondaire favorable : la suite de la phrase, qui donne « an adjustment from a starting
point » comme ce qui reçoit ce nom pour la troisième, devient cohérente avec le paragraphe
suivant, lequel situe déjà le chiffre trois dans l'annonce de plan de la p. 2 et le résumé de la
p. 31.

--------------------------------------------------------------------------------
Ce qui n'a pas été fait
--------------------------------------------------------------------------------

- Aucune affirmation nouvelle. Les quatre corrections ne font que retirer, borner ou rendre au
  texte son mot.
- Aucun manque documentaire comblé : là où le dossier ne portait rien (C022, C023), la phrase a
  été réduite ou supprimée, jamais fondée sur une source non lue.
- Aucune citation entre guillemets modifiée, ajoutée ni retirée.
- `limits` n'a pas été touché : les quatre corrections rapprochent le texte de la frontière déjà
  déclarée, aucune frontière nouvelle n'est apparue.
- Aucun artefact de fact-check édité à la main, aucun `SUP-...` inventé.

--------------------------------------------------------------------------------
Contrôles
--------------------------------------------------------------------------------

1. Deltas : chaque paragraphe touché conserve le sien. S1p2 sépare toujours le « quelle chance »
   du « combien ». S2p2 explique toujours pourquoi le mot « systématiques » est le mot qui rend
   le procédé observable, en une étape au lieu de deux. S3p1 installe toujours l'analogie
   perceptive. S5p1 oppose toujours le vocabulaire reçu à celui du rapport.
2. Un paragraphe sans delta a disparu au niveau de la phrase : C023 doublait la clause finale de
   son propre paragraphe. Aucune autre fusion n'était nécessaire.
3. Aucune section ne répète principalement une section précédente ; la charpente n'a pas bougé.
4. Frontières documentaires : les quatre phrases sont désormais en deçà de leurs supports.
5. Aucun contenu de `limits` remonté en bloc visible ; le texte lecteur reste `lead` + `sections`.
6. Volume : texte lecteur 1 647 mots (cible 1 300-1 700), `limits` 273 mots. Total compté par le
   script, `limits` compris : 1 920 mots, contre 1 935 avant correction.
7. Aucun tiret cadratin dans le texte lecteur ni dans `limits`.
8. `npm run corpus:deepen -- --check --only=heuristiques-de-jugement`
   → « 1 approfondissement(s) contrôlé(s), 1920 mots. Rien projeté. » PASS, aucun avertissement
   de citation.

SHA-256 du fichier après correction :
27353ce8c26e5c5855a29b62039c681e567eddc32e4a0af98816ac62a492be66

Le SHA a changé : le pack, le claim-map, le bundle et le gate du tour précédent sont caducs. La
chaîne doit reprendre à PREPARE. Ce compte rendu ne vaut ni ACCEPT ni FACTCHECK_PASS.
