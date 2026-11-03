# Réécriture : cinq-dimensions-de-l-emploi

mode : REVISE (audit protocole 4, `audit.md`, verdict REVISE)
version de départ : HEAD, sha256 7c000e18…d8b9 (= `candidate_sha256` du pack)
version produite : sha256 227a01159dd20f4cf2953992c26ac08be8700fe8dcaad9b840ccc56eda22e748
Ce SHA invalide tout fact-check antérieur : le cycle doit repartir à `PREPARE`.

Lu : PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md, deepening HEAD, validated (pas de champ
`dossier`, pack : `non-declare`), `corpus/evidence/cinq-dimensions-de-l-emploi/` listé (seul
`lecture.json`, lu en entier), pack, audit, review.md du cycle précédent, claim-map et verification
du cycle précédent (pour reprendre les formulations déjà `SUPPORTED`), factcheck-fixes.md (pour ne pas
réintroduire les formulations refusées C001, C014, C040, C058…).

Rappel d'accès : la source déclarée `full-text` dans la fiche est `absent` côté dossier (pack) ; tout
le contenu nouveau est donc financé par `lecture.json` (`access: n/a`, verbatim relus à l'image) et
par `notes`/`review`, jamais par `sources[0]` seul.

## Volumes (texte lecteur = lead + sections, mots séparés par espaces)

| | avant | après |
|---|---|---|
| lead | 107 + 91 = 198 | 109 + 77 = 186 |
| S1 | 104 / 111 | 141 / 60 / 69 |
| S2 | 110 / 94 / 72 | 127 / 71 / 82 / 106 |
| S3 | 83 / 71 / 78 | 83 / 115 |
| S4 | 72 / 68 / 80 | 62 / 62 / 66 |
| S5 | 71 / 70 | 86 / 79 |
| **total** | **1 282** | **1 395 (+8,8 %)** |
| limits (interne) | 208 | 238 |

Dans le plafond de l'audit (+10 %, ~1 400). Une première version à 1 479 mots (+15 %) a été
ramenée à 1 395 par retraits, pas par compression des ajouts financés.

## Ajouts et supports qui les financent

1. **S1.P1, définitions des cinq dimensions** (rendues en substance, pas recopiées) :
   SUP-d9e6dd4357ec58a1 (lecture `reserves[1]`, verbatim folio 5), SUP-8349b9530e887f0d. « défini
   comme un degré » : les cinq définitions commencent par « The degree to which » (même support).
2. **S1.P2, rattachement de trois contrastes du lead** (identité / autonomie / signification) et du
   retour d'information *par la source du retour*, non par son délai : SUP-d9e6dd4357ec58a1,
   SUP-4066e0b256f9411e. Skill Variety non forcée ; « le soir même » non présenté comme vitesse.
3. **S2.P1, trois états nommés et définis, place dans la figure, quatre résultats** :
   SUP-5f05de32126d76fa (définitions et « mediating »), SUP-7f8cdae16f90ce57 (Figure 1, trois
   colonnes, quatre résultats), SUP-8349b9530e887f0d (folio 2, liste des outcomes).
4. **S2.P2, câblage trois-une-une** : SUP-8349b9530e887f0d (« Experienced Responsibility… is
   increased when a job has high Autonomy. Knowledge of Results is increased when a job is high on
   Feedback »), SUP-7f8cdae16f90ce57, citation déjà au texte via SUP-ada711576952723d.
5. **S2.P3, conjonction obligatoire des trois états** (citation verbatim + traduction) :
   SUP-8349b9530e887f0d, SUP-d87165f73d379987. L'exemple « Imaginons un poste… » est stipulé et
   marqué « cela implique, selon cette condition » ; il ne chiffre aucune compensation.
6. **S2.P4, growth need strength** (deux profils, « work » entre guillemets d'auteur, « stretched »,
   modérateur des autres relations) : SUP-8349b9530e887f0d, SUP-6b9864dc4adc5dc5 (« predicted to
   affect how positively an employee will respond »), SUP-7f8cdae16f90ce57. Dernière phrase
   (la réponse au même poste peut différer) : SUP-6b9864dc4adc5dc5. « malléable » retiré pour le
   budget.
7. **S3.P2, phrase « C'est lui qui, dans la chaîne, accroît la connaissance des résultats »** :
   SUP-8349b9530e887f0d, SUP-4066e0b256f9411e (Feedback = Feedback from the Job Itself).
8. **S4.P3, quatre des douze noms relationnels, aucun dans le noyau** (gain du candidat b6080 que la
   revue demandait de garder, déjà `SUPPORTED` C035-C036) : SUP-5604d2fd43d62ed6,
   SUP-618caaed36d65ce3.
9. **S5.P2, l'instrument ne mesure pas la productivité réelle**, juxtaposé à la qualité de travail
   de la figure, conséquence marquée « Cela implique » : SUP-6b9864dc4adc5dc5 (verbatim
   parenthèse), SUP-7f8cdae16f90ce57. L'absentéisme n'est pas mentionné (inférence de la lecture).
10. **S5.P1, le renvoi couvre aussi la formule** : SUP-257678c7beb2e19c, SUP-42e7d43d4190da60,
    SUP-dcf9218752b68452 (test). Ni titre, ni numéro, ni revue du texte de 1974.

## Retraits (qui paient les ajouts)

- lead[0] : « Dire que la première est plus motivée que la seconde n'explique rien » (C001
  UNSUPPORTED au cycle précédent). La thèse « ce qui les sépare n'est pas dans les deux personnes,
  il est dans les deux postes » est **conservée** (régression n° 1 de la revue), mais rendue
  interne à la vignette : les deux personnes sont désormais stipulées semblables (« que rien ne
  distingue au départ », « qu'on a supposées semblables »), ce qui en fait une conséquence de
  l'exemple, non une thèse sur la motivation individuelle. S2.P4 y revient quand la stipulation
  tombe (growth need strength).
- lead[1] : « avant et après une transformation » (redite avec S1.P3) ; la négation d'effet direct
  et « c'est cela qui ferait le reste » remplacées par une formule positive de médiation
  (SUP-5f05de32126d76fa).
- S1.P1 : la promesse vide (« ce sont ces phrases qui fixent… le sens ordinaire… n'en est pas la
  mesure ») remplacée par les définitions elles-mêmes.
- S1.P2 : « Cette liste n'est pas faite pour décrire ce qui rend un travail agréable. Elle est faite
  pour être mesurée » (C014 UNSUPPORTED) et « C'est cet usage qui explique la forme de la liste… »
  (C012 retiré au cycle précédent).
- S2.P1 : principe de médiation redit et glosé (« un poste ne fait rien par lui-même… effort et
  soin ») ; description à deux colonnes de la figure.
- S2.P2 : « Des trois états, un seul est nommé » (contredit par le dossier, défaut majeur n° 1).
- S2.P3 ancien : « peut donc réussir ici et ne rien donner là » (défaut majeur n° 2), remplacé par
  les deux conditions documentées.
- S3 : « elle vaut critère », « ce qui entre dans le noyau doit tenir au travail », « mesuré et
  écarté » redit ; S3.P2 et S3.P3 fusionnés ; « immédiatement » retiré de l'exemple de la soudure
  (immédiateté refusée en C040).
- S4.P1 : « La liste n'est pas née en 1974 » remplacé par la formulation C027 déjà soutenue ;
  « Hackman prolonge ici… » retiré (redite de la phrase précédente).
- S4.P2 : « Une note de bas de page, vers la fin du rapport » → « La note 1, page 39 » (C030).
- S4.P3 : « Ce qui est neuf tient… au critère qui décide de l'appartenance » (surgénéralisation,
  redite de S3) ; « En comparant les trois listes… » (charnière).
- S5 : « Ce rapport est un instrument… » (redite de S1) ; « C'est le geste qu'on attend d'un outil
  de diagnostic… avant et après » (généralité non sourcée, troisième occurrence) ; « ce qu'elle
  suppose et ce qu'elle écrase » (C058 UNSUPPORTED) : la tension finale est désormais portée par
  l'écart documenté entre la qualité de travail visée et la productivité non mesurée.

## Delta par paragraphe

- lead[0] : la cause de l'écart est cherchée dans le poste, deux personnes semblables étant posées.
- lead[1] : qui, où, quand ; liste courte ; quelque chose chez la personne est intercalé.
- S1.P1 : les cinq noms et ce que chacun veut dire selon les auteurs.
- S1.P2 : le lecteur reconnaît trois dimensions (et la source du retour) dans la scène.
- S1.P3 : la liste sert à diagnostiquer et évaluer une refonte (titre).
- S2.P1 : les trois états nommés, définis, et les quatre résultats au bout.
- S2.P2 : quelle dimension nourrit quel état (3-1-1).
- S2.P3 : les trois états doivent être réunis ; une dimension forte ne comble pas un état absent.
- S2.P4 : la chaîne ne vaut pas également pour tous ; le modérateur ; retour sur la stipulation du lead.
- S3.P1 : « core » = tri ; deux dimensions mesurées hors noyau.
- S3.P2 : la raison donnée pour Feedback from Agents ; le sens exact du cinquième terme et l'état
  qu'il nourrit ; contresens « sept ».
- S4.P1 : antécédents déclarés, dont un de Hackman.
- S4.P2 : contenu des deux listes antérieures.
- S4.P3 : ce qui entre (Task Significance), ce qui reste dehors (les quatre noms relationnels).
- S5.P1 : la formule et la théorie sont exposées et testées ailleurs ; texte à lire.
- S5.P2 : l'instrument ne mesure pas la productivité, alors que la chaîne vise la qualité.

Aucune section ne répète principalement une section antérieure ; le « avant/après » n'apparaît plus
qu'une fois (S1.P3).

## Prescriptions écartées (comme l'audit) ou non suivies

- formule du MPS, raison d'exclusion de Dealing with Others, délai du feedback, absentéisme, titre/
  numéro/revue du texte de 1974, validation empirique : non écrits, faute de support.
- « malléable » (growth need strength) : finançable (SUP-6b9864dc4adc5dc5) mais retiré pour tenir
  le budget de volume.

## `limits` (interne, non affiché)

Réécrit au regard de `lecture.json` : `limits[0]` ancien (un seul état nommé) et `limits[3]` ancien
(figure qui « se regarde ») supprimés comme périmés ; `limits[1]` corrigé (le modérateur est énoncé
au folio 4, seuls son mécanisme et la démonstration relèvent de l'autre texte) ; ajout des frontières
« pas de délai dans la définition de Feedback », « Skill Variety sans équivalent dans la scène »,
« raison d'exclusion de Dealing with Others inconnue », « absentéisme : inférence ». Aucun contenu
de `limits` n'est remonté dans le texte lecteur.

## Points de vigilance pour le mapping (non une auto-validation)

- lead[0], dernière phrase : la thèse est désormais conditionnée par la stipulation de la vignette ;
  au mapper de juger si elle relève de `NO_VERIFIABLE_CLAIM` partiel ou d'un claim ancré sur
  SUP-8349b9530e887f0d / SUP-46db82f6ac3e7439.
- S2.P1 « sa figure 1 les place entre » : SUP-5f05de32126d76fa (« shown in Figure 1 as mediating »)
  et SUP-7f8cdae16f90ce57 ; la note `notes[8]` de la fiche (« Figure 1 non relue à l'image ») décrit
  une lecture antérieure, la lecture postérieure l'a relue.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=cinq-dimensions-de-l-emploi`
→ « 1 approfondissement(s) contrôlé(s), 1633 mots. Rien projeté. » : PASS.

Aucune auto-validation : ni `ACCEPT`, ni `FACTCHECK_PASS`.

---

# Correction FACTCHECK_FIX (gate du SHA 227a0115…e748 : 65 claims, 63 SUPPORTED, 2 en échec)

Version produite : sha256 d9874a585394b9ca8aac1eaeb4b913fb8a2eb11519a0ae7de50314e74256ba86.
Ce SHA invalide le fact-check précédent : le cycle doit repartir à `PREPARE`.

| Claim | Verdict | Opération | Avant → après |
|---|---|---|---|
| C001 (lead[0]) | UNSUPPORTED | NARROW (réduit à la stipulation) | « Dans cette scène, ce qui les sépare n’est pas dans les deux personnes, qu’on a supposées semblables : il est dans les deux postes. » → « Dans cette scène, on a supposé les deux personnes semblables : seuls leurs postes diffèrent. » L'exclusive (la différence « est dans les postes », « pas dans les personnes ») disparaît ; ne reste que ce que la vignette pose elle-même (mêmes salaire, bâtiment, « rien ne distingue au départ », deux postes décrits différemment). Pas de retour à l'exclusive refusée lors de la boucle 1 (ancien C002). |
| C059 (sections[4].paragraphs[0]) | TOO_STRONG | NARROW | « le rapport assemble aussi les dimensions du noyau dans une formule, appelée motivating potential score » → « le rapport imprime aussi une formule, appelée motivating potential score ». « Imprimé p. 4 » : SUP-a269172ea0335b83 (`notes[3]`) ; nom de la formule : SUP-4066e0b256f9411e, SUP-257678c7beb2e19c. Le verbe « assembler les dimensions » sort. |

Aucune affirmation nouvelle, aucun `SUP-...` ajouté ni modifié, artefacts de fact-check non touchés.
`limits` inchangé.

Volumes texte lecteur (mots séparés par espaces) : 1 395 → 1 380 (lead[0] −10, S5.P1 −5).
Total compté par le contrôle (limits inclus) : 1 619 mots.

Contrôle mécanique : `npm run corpus:deepen -- --check --only=cinq-dimensions-de-l-emploi` → PASS
(« 1 approfondissement(s) contrôlé(s), 1619 mots. Rien projeté. »).
