concept : cinq-dimensions-de-l-emploi
verdict : REVISE

protocol_version : 4
version auditée : corpus/deepenings/cinq-dimensions-de-l-emploi.json, sha256 7c000e18…d8b9 (= `candidate_sha256` du pack ; c'est la version HEAD, la réécriture b6080da2… ayant été rejetée en revue)
texte lecteur : 1 282 mots (lead 107 + 91 ; S1 104/111 ; S2 110/94/72 ; S3 83/71/78 ; S4 72/68/80 ; S5 71/70), `limits` 4 entrées
dossier : `corpus/validated/cinq-dimensions-de-l-emploi.json` ne porte pas de champ `dossier` (pack : `dossier_declare.statut = non-declare`) ; répertoire listé moi-même : `corpus/evidence/cinq-dimensions-de-l-emploi/lecture.json` seul (pas de scouting.json). Lu en entier.
source : un seul rapport, Hackman & Oldham, Technical Report No. 4, Yale, mai 1974. La fiche le déclare `full-text` (lecture de la revue aveugle, PDF entier rendu page à page, `review.notes[0]`) ; `lecture.json` le déclare `partial` (page de titre + folios 1 à 7 seulement, `reserves[6]`). Les deux ne se contredisent pas : ce sont deux lectures différentes de la même pièce. Mais la note 1 p. 39 et la bibliographie p. 40 (matière de S4) ne sont portées que par la fiche (`notes[1]`, `notes[2]`), pas par le dossier. Aucune source `metadata-only`.

---

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur déplace la cause de l'engagement de la personne vers le poste (« ce qui les sépare n'est pas dans les deux personnes, il est dans les deux postes »), et reçoit quatre contrastes concrets (un tout / une pièce, décider l'ordre ou non, voir la destination ou non, savoir le soir ou dans un mois). Delta fort.
- lead[1] : le lecteur apprend que la réponse doit être mesurable avant/après transformation, la situe (deux auteurs, rapport technique, Yale, mai 1974) et reçoit la forme du modèle : indirect, les caractéristiques agissent d'abord « chez la personne ». Delta net.
- S1.P1 : le lecteur peut nommer les cinq caractéristiques (anglais + glose française) et sait que chacune a une définition d'une phrase qui prime sur le sens courant. Delta nominal : il reçoit des étiquettes et l'annonce de définitions qu'on ne lui donne pas.
- S1.P2 : le lecteur comprend que la forme de la liste (courte, cotable) découle de son usage diagnostique, titre du rapport à l'appui. Delta réel (forme ← fonction), mais la moitié du paragraphe redit lead[1] (« mesurer avant et après une transformation » / « modifier, puis reprendre la mesure et comparer »).
- S2.P1 : le lecteur apprend le nom technique du détour (« trois états psychologiques critiques ») et que la Figure 1 relie les cinq aux résultats (motivation interne, qualité du travail). Delta partiel : le principe de médiation est déjà dans lead[1] ; le neuf est l'étiquette et deux résultats nommés. La figure est décrite à deux colonnes alors qu'elle en a trois.
- S2.P2 : le lecteur apprend le nom d'un état (sens du travail) et que trois dimensions l'alimentent ensemble. Delta réel, mais construit sur une affirmation que le dossier contredit (« un seul est nommé dans le passage ») : voir défaut majeur n° 1. Le lecteur reste persuadé que deux états sur trois sont inconnus.
- S2.P3 : le lecteur reçoit une conséquence pratique (la variété ne vaut que par l'état qu'elle produit ; un même aménagement peut réussir ici, échouer là). Delta réel en apparence, mais dérivé par le rédacteur et non documenté ; la condition d'application que le rapport donne réellement (les trois états requis ensemble ; growth need strength) est absente.
- S3.P1 : le lecteur apprend que « core » est entre guillemets d'auteur, que le noyau résulte d'un tri, et que deux dimensions sont mesurées hors noyau (Feedback from Agents, Dealing with Others). Delta fort.
- S3.P2 : le lecteur apprend la raison donnée pour l'exclusion de Feedback from Agents (« not, strictly speaking, a characteristic of the job itself ») et la voit illustrée (le chef qui change). Delta fort, mais la raison donnée pour une seule exclusion est promue en « critère » général.
- S3.P3 : le lecteur peut distinguer le feedback du noyau (donné par le travail : la soudure, l'essai) du retour donné par les personnes. Delta réel (la précision sur le cinquième terme), mais la seconde moitié REDONDANT AVEC S3.P1–S3.P2 : « mesuré et écarté » est redit.
- S4.P1 : le lecteur apprend que le rapport déclare lui-même deux antécédents (1965, 1971) et que l'un est de Hackman. Delta net.
- S4.P2 : le lecteur connaît le contenu des deux listes antérieures (six et six, découpées autrement). Delta net (matière de la fiche, `notes[2]`).
- S4.P3 : le lecteur apprend que Task Significance est neuve et que Dealing with Others est déclassée. Delta réel ; la dernière phrase (« ce qui est neuf tient au critère… propriété du travail ») REDONDANT AVEC S3.P2 et surinterprète (le dossier ne donne aucune raison pour l'exclusion de Dealing with Others).
- S5.P1 : le lecteur apprend que le rapport renvoie deux fois (p. 2 et p. 4) à un autre texte de 1974 pour l'exposé et le test de la théorie. Delta net ; la phrase d'ouverture (« Ce rapport est un instrument ») REDONDANT AVEC S1.P2.
- S5.P2 : le lecteur apprend l'existence d'une formule, le motivating potential score, à la p. 4. Delta mince : « ramener un poste à une note, pour comparer deux postes ou le même avant et après » est la troisième occurrence de l'idée de lead[1]/S1.P2 ; « c'est le geste qu'on attend d'un outil de diagnostic » est une généralité du rédacteur. La dernière phrase ouvre une vraie tension.

RÔLE DES SECTIONS

- S1 Ce que la liste contient : donner les noms des cinq et expliquer pourquoi la liste a cette forme. Remplit la moitié du rôle : la promesse de définitions reste vide alors que le dossier les porte désormais.
- S2 Le détour par ce que la personne éprouve : exposer la médiation dimensions → états → résultats. Section pivot, aujourd'hui amputée de deux états sur trois et de la condition « les trois ensemble », et appuyée sur une affirmation devenue fausse.
- S3 Ce qui est mesuré mais tenu hors du noyau : distinguer noyau et dimensions mesurées hors noyau, et en tirer le sens exact du cinquième terme. Meilleure section du texte.
- S4 Ce que 1965 et 1971 mesuraient déjà : situer la liste par rapport à ses deux antécédents déclarés. Rôle propre, sauf la phrase finale qui refait S3.
- S5 L'instrument, et la théorie qu'il applique : renvoyer vers le texte qui expose et teste la théorie, nommer le score. Rôle d'ouverture, dilué par la reprise de S1.P2 et de lead[1].

Progression : l'ordre S1 → S5 est sain (liste → mécanisme → frontière du noyau → généalogie → ouverture). Aucun saut. Le défaut n'est pas l'architecture mais le contenu de S1 et S2, que le dossier permet maintenant de remplir, et trois redites transversales.

SCORES

- fidélité documentaire : 2/4 — S2.P2 « Des trois états, un seul est nommé dans le passage qui expose ce lien » est contredit par le passage même du folio 4 cité dans le dossier (SUP-8349b9530e887f0d : « Experienced Responsibility for Work Outcomes is increased when a job has high Autonomy. Knowledge of Results is increased when a job is high on Feedback. ») ; S2.P3 « peut donc réussir ici et ne rien donner là » est une conséquence du rédacteur, non du rapport ; S3.P2 « elle vaut critère » et S4.P3 « au critère qui décide de l'appartenance » étendent à Dealing with Others une raison donnée pour Feedback from Agents seul (SUP-618caaed36d65ce3) ; S2.P1 décrit la Figure 1 à deux colonnes (SUP-7f8cdae16f90ce57 en donne trois). `limits[0]` et `limits[3]` sont devenus faux ou périmés au regard du dossier. Rien d'inventé de toutes pièces, rien de `metadata-only`.
- progressivité pédagogique : 3/4 — chaque section repose sur la précédente (S3.P1 s'appuie sur le « core » de la phrase d'annonce, S4.P3 sur la distinction de S3) ; mais S2.P1 rouvre sur la proposition de lead[1] et S2 s'arrête au premier état, si bien que S3 ferme une distinction (feedback du travail) dont le lecteur ignore à quel état elle mène.
- densité / non-redondance : 3/4 — la plupart des paragraphes ont un delta distinct ; trois redites transversales : mesurer avant/après (lead[1], S1.P2, S5.P2), « c'est un instrument » (S1.P2, S5.P1), le critère d'appartenance (S3.P2, S3.P3 deuxième moitié, S4.P3 dernière phrase).
- clarté : 3/4 — termes anglais toujours glosés, « core » expliqué avant usage ; mais S1.P1 annonce des définitions qui « fixent en quels termes » sans les donner, et le lecteur garde « autonomie » ou « signification » au sens courant que le paragraphe vient de lui interdire.
- profondeur explicative : 2/4 — un seul mécanisme est réellement exposé (la médiation, et seulement pour un état) ; le câblage 3-1-1, la conjonction obligatoire des trois états, les résultats complets et le modérateur sont au dossier et absents du texte (S2).
- valeur des exemples : 2/4 — l'exemple du lead est excellent mais n'est réinvesti qu'une fois (S3.P3, le retour donné par le travail) ; ses trois autres contrastes ne sont jamais rattachés à une dimension, alors que les définitions du folio 5 le permettent maintenant. L'exemple du chef (S3.P2) et de la soudure (S3.P3) font comprendre quelque chose.
- limites / nuances : 3/4 — la distinction noyau / hors noyau et feedback du travail / feedback des tiers (S3) arrive au bon moment et prévient le contresens « sept dimensions » ; mais la seule condition d'application du texte (S2.P3) n'est pas celle du rapport, et les deux vraies (tous les états requis ; la théorie n'est pas censée « marcher » pour tous) manquent.
- pouvoir d'ouverture : 3/4 — S5 renvoie vers le texte qui expose et teste la théorie et finit sur une tension (« ce qu'elle écrase ») ; l'ouverture serait plus précise si elle disait ce que cet instrument ne mesure pas (la productivité, SUP-6b9864dc4adc5dc5), alors que la chaîne de la Figure 1 s'achève sur la qualité du travail.

total indicatif : 21/32 (non décisif).

défauts majeurs :

1. **S2.P2 affirme ce que le dossier contredit.** « Des trois états, un seul est nommé dans le passage qui expose ce lien » : le passage du folio 4 nomme les trois états et dit lequel est alimenté par quelles dimensions (SUP-8349b9530e887f0d ; Figure 1 décrite en SUP-7f8cdae16f90ce57 ; définitions des trois états en SUP-5f05de32126d76fa). Cette phrase était une prudence honnête tant que le dossier manquait ; elle est aujourd'hui une erreur, et elle ampute le mécanisme central de deux tiers.
2. **S2.P3 remplace la condition documentée par une condition inventée.** « Le même aménagement, apporté à deux postes différents, peut donc réussir ici et ne rien donner là » n'est porté par aucun support. Le rapport donne deux conditions réelles : les trois états doivent être présents ensemble pour que les résultats suivent (SUP-8349b9530e887f0d, SUP-d87165f73d379987), et la théorie n'est pas censée valoir également pour tous, growth need strength étant posé en modérateur (SUP-8349b9530e887f0d, SUP-6b9864dc4adc5dc5, SUP-7f8cdae16f90ce57). La seconde dit d'ailleurs l'inverse de S2.P3 : c'est la personne, non le poste, qui fait varier la réponse au même poste.
3. **S1.P1 promet des définitions qu'il ne donne pas.** Le paragraphe interdit le sens courant et laisse le lecteur sans autre sens. Les cinq définitions sont au dossier mot à mot (SUP-d9e6dd4357ec58a1). Corollaire : l'exemple du lead reste non converti (défaut déjà relevé par l'audit protocole 3 ; trois rattachements C008–C010 étaient tombés au fact-check faute de ce support).
4. **Le critère d'appartenance est surgénéralisé et redit trois fois** (S3.P2 « elle vaut critère », S3.P3, S4.P3 dernière phrase). Le rapport donne la raison de l'exclusion pour Feedback from Agents seulement (SUP-618caaed36d65ce3) ; pour Dealing with Others, le dossier ne dit pas pourquoi.
5. **Trois redites transversales sur l'usage diagnostique** (lead[1], S1.P2, S5.P1 première phrase, S5.P2 deuxième phrase), dont une généralité non sourcée (« C'est le geste qu'on attend d'un outil de diagnostic »).

matière disponible mais sous-exploitée :

- les cinq définitions d'une phrase, folio 5 : SUP-d9e6dd4357ec58a1 (reprises dans SUP-8349b9530e887f0d). Elles permettent de rattacher au moins trois contrastes du lead : « monte un appareil entier » ↔ Task Identity (« a "whole" and identifiable piece of work… from beginning to end with a visible outcome ») ; « décide de l'ordre de ses opérations » ↔ Autonomy (« discretion… in scheduling the work and in determining the procedures ») ; « voit l'objet partir vers quelqu'un qui s'en servira » ↔ Task Significance (« impact on the lives or work of other people »). Le quatrième, « sait le soir même », ne se rattache à Feedback que par « direct and clear information about the effectiveness » : la définition ne parle pas de délai ; voir limites documentaires.
- les trois états nommés et leur câblage 3-1-1 (sens ← variété, identité, signification ; responsabilité ← autonomie ; connaissance des résultats ← feedback) : SUP-8349b9530e887f0d, SUP-7f8cdae16f90ce57.
- les définitions des trois états, folio 6 : SUP-5f05de32126d76fa ; leur rôle de médiation dit par le rapport lui-même (« shown in Figure 1 as mediating between the core job dimensions and the outcomes ») : SUP-5f05de32126d76fa.
- la conjonction obligatoire : « All three of the Critical Psychological States must be present for the positive outcomes to be realized » : SUP-8349b9530e887f0d, SUP-d87165f73d379987.
- les quatre résultats (motivation interne, satisfaction, qualité, faible absentéisme et rotation), folio 2 et Figure 1 : SUP-8349b9530e887f0d, SUP-7f8cdae16f90ce57.
- growth need strength comme modérateur : ceux qui valorisent accomplissement et croissance répondent positivement à un poste à fort potentiel motivant ; les autres peuvent le trouver anxiogène et s'y sentir « stretched » ; caractéristique individuelle dite « malleable » : SUP-8349b9530e887f0d, SUP-6b9864dc4adc5dc5, SUP-7f8cdae16f90ce57.
- ce que l'instrument ne mesure pas : « The instrument does not measure actual work productivity or employee perceptions of their productivity » : SUP-6b9864dc4adc5dc5.

limites documentaires :

- **Le motivating potential score ne s'explique pas.** Le dossier le nomme (SUP-a269172ea0335b83, SUP-4066e0b256f9411e, SUP-8349b9530e887f0d « a job high in motivating potential ») et indique seulement que la formule abrège la cinquième dimension en « Feedback ». Ni sa structure (somme, produit, pondération), ni ce qu'elle suppose. Désignation seulement.
- **La définition de Feedback ne dit rien du délai.** « Le soir même / un mois plus tard » du lead ne peut pas être présenté comme ce que mesure la définition (« direct and clear information about the effectiveness »). Le rattachement doit passer par « direct », non par la vitesse. L'état Knowledge of Results porte « on a continuous basis » (SUP-5f05de32126d76fa) : c'est le seul appui temporel, et il porte sur l'état, non sur la dimension.
- **Skill Variety n'a pas d'équivalent clair dans le lead.** Ne pas forcer un cinquième rattachement.
- **Absentéisme non mesuré : inférence de la lecture, non citation.** `lecture.json` `reserves[3]` conclut « l'instrument ne mesure ni la performance ni l'absentéisme » ; la phrase citée ne dit que la productivité. Seule la productivité est finançable.
- **Exclusion de Dealing with Others : raison non donnée** dans le dossier ni dans la fiche.
- **Le texte de la théorie et de son test** n'a pas été ouvert. La fiche le dit « Technical Report No. 6 » (`notes[8]`), la revue aveugle le dit paru en 1976 dans Organizational Behavior and Human Performance (`review.notes[8]`), `lecture.json` refuse d'en donner titre et numéro (`reserves[6]`). Le texte lecteur actuel s'en tient à « un autre texte des deux mêmes auteurs, daté lui aussi de 1974 » : à garder tel quel. Je ne tranche pas entre les trois couches.
- **Antécédents 1965 et 1971** connus seulement par la note 1 p. 39 rapportée par la fiche (`notes[2]`, SUP-5604d2fd43d62ed6), non par le dossier (qui s'arrête au folio 7). La revue aveugle ajoute (`review.notes[3]`, SUP-05bcca9c899e0b91) que Hackman & Lawler 1971 portait quatre des cinq du noyau ; c'est cohérent avec la note 1.
- **Signal de couches à ne pas trancher ici** : `notes[8]` de la fiche dit « La Figure 1, p. 3, n'a pas été relue à l'image et rien n'est cité d'elle » ; `lecture.json` `reserves[0]` (postérieur, commit f03dbe4) la décrit relue à l'image, et `review.notes[7]` en citait déjà deux intitulés. La réserve de la fiche décrit l'état de la lecture qui l'a produite, elle n'avertit pas contre un contenu ; elle n'interdit donc pas d'exploiter SUP-7f8cdae16f90ce57, mais le gate devra voir que la description vient du dossier et non de la fiche. La lecture note elle-même que la figure ne porte aucun mot sur les flèches du modérateur : seul le texte du folio 4 dit « moderator ».
- **`limits` internes périmés** : `limits[0]` (un seul état nommé ; définitions à lire) et `limits[3]` (la figure « se regarde plutôt qu'elle ne se raconte ») sont contredits par le dossier ; `limits[1]` range le rôle de growth need strength dans le rapport n° 6, alors que le folio 4 de ce rapport-ci en dit l'essentiel. À corriger côté frontière interne, sans en faire du texte lecteur.

BUDGET DE L'AJOUT

- ajouts prescrits et supports qui les financent :
  1. S1 : les définitions des cinq dimensions, rendues brièvement, et le rattachement de trois contrastes du lead (Task Identity, Autonomy, Task Significance) — SUP-d9e6dd4357ec58a1, SUP-8349b9530e887f0d.
  2. S2 : les trois états nommés et définis, et le câblage 3-1-1 — SUP-8349b9530e887f0d, SUP-5f05de32126d76fa, SUP-7f8cdae16f90ce57.
  3. S2 : les trois états doivent être présents ensemble — SUP-8349b9530e887f0d, SUP-d87165f73d379987.
  4. S2 (fin) ou S5 : growth need strength, modérateur ; ce que le rapport dit des deux profils, et rien de plus — SUP-8349b9530e887f0d, SUP-6b9864dc4adc5dc5, SUP-7f8cdae16f90ce57.
  5. S5 : l'instrument ne mesure pas la productivité réelle — SUP-6b9864dc4adc5dc5.
  6. S2.P1 (correction, pas croissance) : la figure à trois colonnes et ses quatre résultats — SUP-7f8cdae16f90ce57, SUP-8349b9530e887f0d.
- prescriptions écartées faute de support :
  - expliquer la formule du motivating potential score (structure, logique multiplicative, seuils) : aucun support ;
  - dire pourquoi Dealing with Others est exclue : aucun support ;
  - présenter la définition de Feedback comme portant sur la rapidité du retour : non financé ;
  - dire que l'instrument ne mesure pas l'absentéisme : inférence de la lecture, non citation ;
  - donner titre, numéro ou date de parution du texte de la théorie : couches discordantes, `lecture.json` refuse ;
  - toute affirmation sur la validation empirique de la théorie ou sa réception : aucun support (une seule pièce, primaire).
- sens attendu du volume : **constant à légèrement plus long (au plus +10 %, soit ~1 400 mots)**. Les ajouts 1 à 5 sont tous financés par des citations verbatim, mais ils doivent être payés par des retraits : S1.P2 (moitié redite de lead[1]), S2.P1 (principe de médiation déjà dans lead[1]), S2.P3 (remplacé, pas augmenté), S3.P3 deuxième moitié, S4.P3 dernière phrase, S5.P1 première phrase, S5.P2 deuxième phrase. Les cartes de ce protocole qui ont grossi au-delà de +17 % ont toutes été rejetées : le réécrivain doit traduire les définitions en substance, non les recopier en entier, et ne pas annexer de glose à chacune.

TRAJECTOIRE CIBLE

- lead (inchangé dans sa thèse) :
  1. entrée : rien ;
  2. nouveau : la cause est dans le poste, non dans la personne ; le modèle est indirect ;
  3. matière : actuelle (SUP-c604a94416e464a0, SUP-d28e363f1c0538c5, SUP-8349b9530e887f0d) ;
  4. ne pas : perdre la phrase « ce qui les sépare n'est pas dans les deux personnes » (régression n° 1 de la revue précédente) ; ne pas y introduire « états psychologiques critiques » sans glose.

- S1 Ce que la liste contient :
  1. entrée : deux postes contrastés, un modèle indirect annoncé ;
  2. nouveau : ce que chaque dimension veut dire selon les auteurs (degré de… : activités et compétences variées ; un tout identifiable, du début à la fin, au résultat visible ; impact sur la vie ou le travail d'autrui, dans l'organisation ou hors d'elle ; liberté dans l'ordonnancement et le choix des procédures ; information directe et claire sur l'efficacité, tirée du travail même) — et le lecteur reconnaît dans trois contrastes du lead trois de ces dimensions. Puis, en une ou deux phrases, la forme ← fonction de S1.P2 (titre du rapport, liste courte et cotable) ;
  3. matière : SUP-d9e6dd4357ec58a1, SUP-8349b9530e887f0d ; titre du rapport SUP-46db82f6ac3e7439 ;
  4. ne pas : redire « mesurer avant et après » déjà dit en lead[1] ; ne pas rattacher « le soir même » à une vitesse que la définition ne porte pas ; ne pas forcer Skill Variety sur le lead.

- S2 Le détour par ce que la personne éprouve :
  1. entrée : cinq dimensions définies ; on sait que le modèle passe par la personne ;
  2. nouveau : les trois états, nommés et définis (sens, responsabilité ressentie des résultats, connaissance des résultats) ; le câblage 3-1-1 tel que le folio 4 et la Figure 1 le donnent ; les résultats en bout de chaîne (quatre) ; puis la condition : les trois états ensemble, faute de quoi les résultats ne suivent pas. Le paragraphe de conséquence (actuel S2.P3) est réécrit sur cette condition documentée : une dimension forte ne compense pas un état absent. Si la place le permet, growth need strength : la même chaîne ne vaut pas également pour tous ;
  3. matière : SUP-8349b9530e887f0d, SUP-5f05de32126d76fa, SUP-7f8cdae16f90ce57, SUP-d87165f73d379987, SUP-6b9864dc4adc5dc5 ;
  4. ne pas : répéter le principe de médiation de lead[1] comme s'il était neuf ; ne pas garder « un seul est nommé » ; ne pas garder « peut réussir ici et ne rien donner là » entre deux postes ; ne pas inférer de « compensation » chiffrée ni de mécanisme du modérateur au-delà de ce que dit le folio 4 (deux profils, « moderator », « malleable »).

- S3 Ce qui est mesuré mais tenu hors du noyau :
  1. entrée : le noyau complet, ses états et sa condition ;
  2. nouveau : « core » entre guillemets = un tri ; deux dimensions mesurées hors noyau ; la raison donnée pour Feedback from Agents ; d'où le sens exact du cinquième terme (le retour que donne le travail, la soudure, l'essai) — qui est précisément ce qui alimente la connaissance des résultats installée en S2 ;
  3. matière : actuelle, SUP-618caaed36d65ce3, SUP-4066e0b256f9411e, SUP-d9e6dd4357ec58a1 (définition de Feedback from the Job Itself) ;
  4. ne pas : dire que la raison donnée pour Feedback from Agents vaut pour Dealing with Others ; ne pas redire « mesuré et écarté » deux fois ; garder la phrase « sept plutôt que cinq » qui prévient le contresens.

- S4 Ce que 1965 et 1971 mesuraient déjà :
  1. entrée : le noyau et sa frontière ;
  2. nouveau : les deux antécédents déclarés, leurs listes, ce qui entre (Task Significance) et ce qui est déclassé (Dealing with Others) ;
  3. matière inchangée : SUP-5604d2fd43d62ed6, SUP-c604a94416e464a0, SUP-05bcca9c899e0b91 ;
  4. ne pas : conclure que « le critère » explique le déplacement — un constat de ce qui bouge suffit ; ne pas redire S3.

- S5 L'instrument, et la théorie qu'il applique :
  1. entrée : la théorie complète telle que ce rapport l'expose, et sa généalogie ;
  2. nouveau : ce rapport mesure, il ne démontre pas ; il renvoie deux fois à un autre texte pour l'exposé et le test ; il ne mesure pas la productivité réelle, alors que la chaîne de la Figure 1 s'achève sur la qualité du travail ; une formule, le motivating potential score, existe à la p. 4 — nommée seulement ; tension finale conservée (ce que vaut une note, ce qu'elle écrase) ;
  3. matière : SUP-dcf9218752b68452, SUP-257678c7beb2e19c, SUP-cc844847b96e5a7c, SUP-6b9864dc4adc5dc5, SUP-a269172ea0335b83 ;
  4. ne pas : rouvrir sur « ce rapport est un instrument » (déjà S1) ; ne pas redire « comparer avant et après » ; ne pas expliquer la formule ; ne pas nommer le numéro ni la revue du texte de la théorie ; ne pas étendre le « ne mesure pas » à l'absentéisme.

- `limits` (frontière interne, hors texte lecteur) : corriger `limits[0]`, `limits[1]`, `limits[3]` au regard de `lecture.json` (les trois états sont nommés au folio 4 ; les définitions sont au dossier ; la figure est décrite ; le modérateur est énoncé au folio 4, seule sa démonstration est ailleurs).

raison du verdict : l'architecture est saine et les sections S3–S4 sont solides ; ce qui manque est localisé (S1, S2) et désormais financé verbatim par `lecture.json`. Mais S2.P2 porte une affirmation que le dossier contredit et S2.P3 une condition d'application que rien ne soutient : ces deux fautes interdisent `PASS`. Elles ne justifient pas `REWRITE` : l'ordre des sections tient, et la correction consiste à remplir S1 et S2 avec la matière citée, à remplacer S2.P3, et à payer cet ajout par le retrait de trois redites transversales. Pas `BLOCKED_SOURCE` : la profondeur que réclamait l'audit précédent est maintenant documentée, et ce qui reste hors dossier (la formule, le test, l'exclusion de Dealing with Others) n'est pas nécessaire au concept.
