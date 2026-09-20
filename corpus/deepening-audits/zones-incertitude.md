---
concept_id: zones-incertitude
deepening_sha256: 4258e1797df20043c5057e04051cf8a0a37b5fb5022f9568ba546f96a4baba75
validated_sha256: b62ebaa1c862145569237454f9cd612f4eb6c2b57657c6603a666da3c858ba91
protocol_version: 3
audited_at: 2026-09-20T04:32:51Z
initial_verdict: REWRITE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# zones-incertitude

**Le texte publié datait de 1960 l'apparition de l'expression « zone d'incertitude ». Elle est
de 1966.** L'article de 1960 est celui d'où vient la citation de la carte, et il porte « les
seuls éléments d'incertitude subsistants » — pas l'expression.

## Le défaut est plus grave qu'une date

L'enregistrement validé établit la chaîne trois fois, de trois manières indépendantes :
`attribution_note`, les notes du contrôleur aveugle (« 1966, 1971 Crozier seul ; 1975 avec
Thoenig ; 1979 avec Friedberg »), et une note de rédaction qui disjoint explicitement les deux
rôles. Le dossier confirme à la page : l'entrée 1966 du fichier de lecture primaire porte
« PLUS ANCIENNE ATTESTATION ÉTABLIE de l'expression », occurrence unique p. 232, confrontée au
fac-similé.

**Et le contrôleur aveugle avait laissé passer la carte sous une condition que
l'approfondissement violait.** Il avait trouvé au contrôle une attestation tierce de 1964
(Touraine, même revue) et l'avait écartée en écrivant : « Sans effet sur la carte : la fiche
n'affirme aucune antériorité. » L'approfondissement en affirmait une. Le texte long cassait la
condition sous laquelle le texte court était passé — un mode de régression qu'aucun contrôle de
la carte seule ne peut voir.

La réécriture dit que l'expression « se lit » en 1966, jamais qu'elle y paraît pour la première
fois, et consigne la réserve de 1964 dans `limits`. Le calcul devient « treize ans », 1979 −
1966, à la place d'une « quinzaine d'années » qui n'avait de sens qu'avec la date fausse.

## Le contresens terminal, et ce qui l'a remplacé

L'ancienne clôture enseignait que ce pouvoir « se défend souvent par la rétention plutôt que par
l'exercice ». L'opacité de l'expertise est, dans les textes ouverts, un cas particulier assorti
d'une condition, pas le ressort du concept — et le dossier le dit. Placée en dernière position,
cette phrase était celle qui restait.

Elle n'est pas seulement retirée : elle est retournée en distinction explicite, et la clôture
est désormais la condition de pertinence que Crozier écrit et gradue en 1971, note 3 de la
p. 147, avec le déplacement documenté de son référent — survie du système en 1971, objectif de
l'organisation en 2003.

## L'exemple inventé, remplacé par la contre-épreuve

Le texte reposait sur un photocopieur imaginaire qui doublait l'exemple du `lead`. Un exemple
inventé ne peut pas contenir de contre-épreuve, et c'est exactement ce qui manquait : sans elle,
le concept se confond avec « l'expert est indispensable ».

Le cas du Monopole industriel de 1960, lu en texte intégral, la porte. Des usines étrangères de
technique comparable, où les mêmes pannes ne produisent à peu près aucun effet. **Cette pièce
n'était atteignable que par le dossier**, et le protocole ne l'autorisait pas ce matin : voir
plus bas.

## Le protocole a été modifié pour rendre cette réécriture possible

L'audit a buté sur une contradiction réelle : `PROTOCOLE.md` §3 limitait la matière du rédacteur
à deux fichiers, quand `FACTCHECK_PROTOCOL.md` §3 construit le pack de preuve sur le répertoire
entier. Le texte était jugé contre une matière que son rédacteur n'avait pas le droit de lire.
§3 admet désormais une troisième entrée. Rien n'est relâché : le gate reste l'autorité et juge
les mêmes claims contre les mêmes supports.

**La réciproque écrite avec cette modification a servi dès son premier emploi.** Le réécrivain a
écarté `evidence.reception.json` en entier — aucun de ses objets ne porte `consulted` — et n'en
a tiré aucune phrase pour le lecteur, alors que ce fichier contenait précisément une assertion
concurrente sur la datation.

## Fact-check

Une boucle sur les deux autorisées. Premier tour : 64 claims sur 68, deux `UNSUPPORTED` et deux
`TOO_STRONG` — deux généralisations empiriques données comme réelles dont l'ouverture du texte,
le passage du cas limite de 1960 à une fréquence générale, et un superlatif de fréquence sur un
registre qui ne compte aucune occurrence.

Le superlatif est tombé sans affaiblissement de substitution : « contresens courant » resterait
une fréquence non établie. Second tour : **71 claims, 71 `SUPPORTED`, `FACTCHECK_PASS`.**

## Revue

`ACCEPT`. SHA recalculé, identique au `candidate_sha256` du gate. Le reviewer a recontrôlé
lui-même la pièce centrale sur consigne — si l'affirmation avait été fausse, la réécriture
aurait introduit une erreur au lieu d'en retirer une — et a retrouvé dix-neuf des vingt-trois
passages cités verbatim dans le dossier. Les axes passent de 1/4 à 4/4 sur la fidélité
documentaire, la valeur des exemples et le pouvoir d'ouverture.

Réserves consignées, non bloquantes : `lead` à 206 mots pour une fourchette indicative de
120-200, et `limits` à 5 entrées et 262 mots pour 2-4 entrées et 100-200 mots. La cinquième
entrée a été ajoutée par le tour de fact-check pour consigner une frontière nouvellement
découverte, ce qui est l'usage prévu du champ. Une perte assumée : le caractère relationnel du
pouvoir n'est plus formulé aussi tôt, mais la dépendance est présente dès le `lead`.

Artefacts détaillés : `corpus/deepening-audits/work/zones-incertitude/`.
