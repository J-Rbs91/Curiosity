concept : controle-supervise
mode    : REVISE
check mécanique : PASS (`npm run corpus:deepen -- --check --only=controle-supervise` : 1 approfondissement contrôlé, rien projeté)

Entrées lues : PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md, corpus/deepenings/controle-supervise.json (version auditée), corpus/validated/controle-supervise.json (champ `dossier` = corpus/evidence/controle-supervise/lecture.json, même répertoire que l'identifiant), répertoire corpus/evidence/controle-supervise/ listé (un seul fichier, lecture.json, lu en entier), audit.md, factcheck-pack.json (116 appuis).

## Volume

Texte lecteur (lead + sections, décompte par espaces) : 1 354 mots avant, 1 283 après (-5 %). Lead : 178 -> 156. Limits : 207 -> 188. Aucune croissance nette : les ajouts sont payés par les retraits.

## Retraits (défauts de l'audit)

- lead[0] : la scène de la pince est désormais marquée comme stipulée (« Imaginons… »).
- lead[1] : retirés « rien dans le vocabulaire de la commande à distance ne dit ce qu'il est devenu », « pour qu'un concepteur puisse en décider au lieu de le subir » (la fonction du modèle est rapatriée en S4.P3, ancrée p. 8-15). « surveille, et reprend la main par moments » : SUP-8038979198ba17ae.
- S1.P1 : « ce n'est pas une machine autonome, c'est une machine à qui l'on confie des bouts d'action » remplacé par une glose des deux bornes (SUP-8038979198ba17ae).
- S1.P2 : retirés « et elle seule » (reformulé sur notes[0], SUP-e97724b19cdd556f), « une manette ne décide de rien, elle transmet » (redit le lead), « ni les mêmes gestes ni le même délai » (sans appui).
- S1.P3 : « quelle que soit la machine manœuvrée » retiré ; la généralité ne promet plus que l'incise « etc. ».
- S2.P1 : retirée toute la lecture temporelle de l'ordre des rôles (contredite par la numérotation du rapport, SUP-5cebf763411ae92d).
- S2.P2 : « il faut du temps passé avec la machine » remplacé par « s'acquiert, par l'expérience ou par une autre voie » (garde le « or otherwise »).
- S3.P1 : retirés « que le langage courant confond volontiers sous le mot d'assistance » et la phrase finale qui redisait la première.
- S3.P3 : la paraphrase française intégrale de la citation est réduite à sa conséquence.
- S4.P3 : retirés « qu'on oublie presque toujours en la citant », « ni pour un métier » et la phrase sur les variantes.
- S5.P1 : retirée l'attribution fautive « les définitions et la matrice des rôles viennent du texte à trois » ; la présentation des deux textes est déplacée en S1.P3.
- S5.P2 (ancien) : supprimé ; la démonstration sur le degré 1 restait redondante avec S4.P1, et la formule « no assistance » est rapatriée en S4.P1 en une phrase.

## Déplacements

- Présentation des deux textes (dates, signatures, longueurs) : de S5.P1 vers S1.P3, avant leur premier usage en S2.
- « the computer offers no assistance » : de S5.P2 vers S4.P1.

## Ajouts et supports qui les financent

1. S1.P3, présentation des deux textes : définition identique dans les deux (SUP-5cebf763411ae92d, SUP-12b11bb57281a36e) ; avril / juillet 1978 (SUP-18b6fb9f79ed3815, SUP-282dea11b604cdd6) ; trois et deux signatures (SUP-bd84e1228603754a, SUP-7cfb113b14451a38) ; quinze pages (SUP-7b6b921a99812f58) ; 186 pages, laboratoire du MIT, version abrégée (SUP-abb9f3d4ab27125c).
2. S2.P2, numérotation du rapport « commander, planifier, surveiller, intervenir » : SUP-5cebf763411ae92d.
3. S3.P2, « le secourt, ou le remplace » (backup, replace) : SUP-5cebf763411ae92d.
4. S4.P1, pôles de l'échelle « d'un niveau où l'opérateur fait tout à un niveau où le calculateur fait tout » : SUP-5cebf763411ae92d, SUP-09876a2092501c6a. Formule « no assistance » absente des deux textes, reprises postérieures : SUP-7cfb113b14451a38, SUP-b66aa27845a0bda4, SUP-8829a3f54cfa8651.
5. S4.P2, degré 4 précisé (« que la personne fera ou non ») et degré 9 ajouté, l'énumération compte désormais huit positions pour huit annoncées : SUP-5cebf763411ae92d.
6. S4.P3, fonction du modèle (aider le concepteur ou responsable d'exploitation à décider du mélange ; bénéfices et risques seulement désignés, non détaillés) : SUP-5cebf763411ae92d.
7. S5.P1, Brooks et SUPERMAN donné comme exemple de manipulateur supervisé (désignation seule) : SUP-bd84e1228603754a, SUP-4e6c33906bd95d37 ; partage définition commune / figure des rôles / table : SUP-5cebf763411ae92d, SUP-92b84cbab22f2d49, SUP-7cfb113b14451a38 ; l'usage réduit à deux, parfois à une : SUP-7cfb113b14451a38, SUP-f3d5c7d3c5365ea7.
8. S5.P2, travaux antérieurs portant l'expression dans leur titre : Ferrell 1973, Remotely Manned Systems, dans la bibliographie du rapport (SUP-32306c7f6934aeba) ; Ferrell et Sheridan, « Supervisory control of remote manipulation », IEEE Spectrum, 1967, titre et référence seuls, présenté comme une parution et non comme élément de la bibliographie du rapport (SUP-748ff59dad2b20ed). Aucun inventeur désigné (reserves[7] refuse de dater l'invention).

## Prescriptions de l'audit écartées

Aucune prescription non financée n'a été exécutée. Les écarts de l'audit (ordre des rôles, fonctionnement de SUPERMAN, contenu des bénéfices/risques, table 8.1, reprises 1992/2000, inventeur du terme, autres lignes de la figure 2) restent hors du texte et sont consignés dans `limits`.

## Points de vigilance pour le fact-check

- S3.P2 dernière phrase et S4.P3 « Un même système peut donc… » sont des conséquences marquées par « donc », conservées de la version précédente.
- S5.P1 « Le troisième nom de la communication a sa matière » s'appuie sur la note d'attribution (« ajoute Brooks, dont la thèse … fournit la section 5 ») ; il ne prétend pas à une causalité.
- S1.P1 « dans un cadre étroit » glose « in restricted conditions ».

## Limits

Réécrites et resserrées (188 mots) : Ferrell 1973 et Ferrell et Sheridan 1967 connus par référence seule ; reprises 1992 et 2000 non ouvertes ; SUPERMAN metadata-only ; table 8.1 et lignes secondaires de la figure 2 seulement nommées ; aucune lecture temporelle de l'ordre des rôles ; prénom Thurston par catalogue ; pas de réception francophone. Aucun contenu de `limits` n'est remonté dans le texte lecteur.

Pas d'auto-validation : cette version doit repasser par PREPARE (le SHA a changé), puis fact-check et revue indépendante.

---

## Boucle de correction factuelle 1/2 (FACTCHECK_INVALID, candidat c5a13c60…)

Mode : FACTCHECK_FIX. Correction minimale, aucune affirmation ajoutée, aucun support nouveau.

| Claim | Verdict | Correction |
|---|---|---|
| C006 (sections[0].paragraphs[0]) | TOO_STRONG | « La définition tient en une phrase, et tout s’y joue sur ce que l’engin embarque. » devient « La définition tient en une phrase. » La suite du paragraphe (calculateur, autonomie bornée) et le paragraphe suivant (rôle de la personne) restent inchangés. |
| C014 (sections[0].paragraphs[2]) | TOO_STRONG | Retrait de « avant de revenir aux engins sous-marins » : la phrase ne garde que l’incise (avion, centrale, « etc. »), que les appuis établissent. |
| C019 (sections[0].paragraphs[2]) | CONFLICT | Retrait de « dont la communication est une version abrégée ». lecture.json, notes de datation, et validated reserves[6] disent qu’on ne peut pas savoir lequel des deux textes a été rédigé le premier ; la mention « version abrégée » de sources_ouvertes[1] contredit cette réserve, et la réserve l’emporte. Remarque à l’intention des agents : la `citation` de lecture.json et sources_ouvertes[1] portent toujours « version abrégée ». C’est une incohérence interne au dossier, que je n’ai pas corrigée puisque je ne touche qu’à la carte. |
| C022 (sections[1].paragraphs[1]) | TOO_STRONG | « le cinquième est le plus inattendu : la confiance » devient « le cinquième est la confiance » (l’évaluation éditoriale est retirée). |
| C064 (sections[4].paragraphs[1]) | TOO_STRONG | « Une dernière prudence, que les auteurs s’imposent à eux-mêmes : ils écrivent… » devient « Les auteurs écrivent… ». L’intention n’est plus attribuée aux auteurs ; le constat (guillemets, emploi comme reçu, aucun texte fondateur) est conservé. |
| C063 | MAPPING_INCOMPLETE | Je n’ai pas touché ce passage : c’est un défaut de mapping qui ne recouvre aucun claim en échec. |

Mots du texte lecteur : environ 1 285 avant, 1 248 après (−37). Rien n’a été ajouté, il n’y a donc aucun support à citer.

`npm run corpus:deepen -- --check --only=controle-supervise` : PASS (« 1 approfondissement(s) contrôlé(s), 1436 mots. Rien projeté. »).

Le SHA du deepening a changé : il faut reprendre à PREPARE.
