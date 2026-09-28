---
concept_id: critere-de-la-retroaction
deepening_sha256: c95ef7e2fb1794bb1dc834ec0f1a566ed10c92133fec21e266d14b9fc11c9ef3
validated_sha256: 2af4e7f914e71b588ed756e81666c56a88b9354c38ac15d7a350a4c21a00ac8b
protocol_version: 3
audited_at: 2026-09-28T04:15:40Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# critere-de-la-retroaction

**Le texte passe, après deux rejets.** Le gate rend `FACTCHECK_PASS` à **48 claims sur 48**, sans
erreur structurelle et sans mapping incomplet, et la revue indépendante rend `ACCEPT`. Le texte
affiché au lecteur change pour la première fois depuis sa publication.

> Ce rapport remplace celui du 26 septembre, qui concluait `rewrite_rejected_factcheck` à un
> claim près. Il ne rejoue ni l'audit pédagogique du 25 septembre, ni les deux boucles de
> correction du 26 : **la reprise tenait en deux gestes, et ce sont ceux que ce rapport trace.**

## Les deux gestes, et pourquoi ils ne sont pas de même nature

**1. `C038` borné — le seul reliquat documentaire.** C'était le dernier refus du tour 2. Le texte
avançait l'emboîtement des boucles les unes dans les autres et un niveau supérieur comme agent du
déplacement ; `definition_de_lauteur` ne porte que « la hiérarchisation des boucles et le
déplacement des finalités ». La phrase a été ramenée à la formule de l'appui, mot pour mot. Rien
ne la remplace, rien ne compense ailleurs.

**2. Le thermostat et le joueur de quilles restitués — réparation d'un défaut d'instrument.** Au
tour 1, `C008` avait été refusé `UNSUPPORTED` alors que `SUP-421445a4beb428f3`,
`$.reserves[0]` de la lecture primaire, porte mot pour mot « l'auteur raisonne sur un thermostat,
un autocuiseur, un réservoir de W.-C., un thermocouple, un joueur de quilles, une fièvre ». L'appui
était au pack ; aucun claim du mapping ne le citait. **Leur retrait était une perte documentée, pas
une correction**, et la prémisse a été rouverte au dossier par le réécrivain puis par le reviewer,
plutôt que prise sur parole. Ni le thermocouple ni le professeur, absents du texte publié, n'ont
été promus.

Le `diff` contre le candidat du tour 2 porte **exactement trois lignes**.

## Les quatre tours, bout à bout

| tour | SHA | claims | soutenus | refusés | mots lecteur |
|---|---|---:|---:|---:|---:|
| 0, texte publié | `29083f8b` | 59 | 52 | **7** | 1 198 |
| 1 | `10e489ee` | 56 | 50 | **6** | 1 158 |
| 2 | `51377815` | 58 | 57 | **1** | 1 081 |
| **3, cette reprise** | **`c95ef7e2`** | **48** | **48** | **0** | **1 074** |

**Le texte publiable est 124 mots plus court que le texte publié, et pas un mot n'a été ajouté qui
ne soit adossé à un appui du pack.** Le reviewer a instruit un par un les cinq appauvrissements
visibles et les rapporte tous à des énoncés que le gate avait refusés — dont le mécanisme du délai,
que le compte rendu du tour 1 qualifie lui-même d'« intégralement inventé ». Aucun axe de notation
ne baisse ; la fidélité passe de 2 à 4, les limites de 3 à 4.

Le mapping frais rend 48 claims là où le tour 2 en rendait 58, sur un texte presque identique.
C'est la confirmation de la leçon du 26 septembre : un découpage frais découpe autrement, et le
nombre de claims n'est pas une mesure du texte.

## Le chantier K a servi la nuit même où il a été écrit

Le correctif — signal d'appuis non cités dans le bundle, verdict `MAPPING_INCOMPLETE` — a été
écrit, mesuré et commité **avant** ce cycle, comme le correctif de `prepare()` l'avait été le
26 septembre.

**Son premier emploi réel est silencieux, et c'est le bon résultat** : zéro claim avec appui non
cité sur les 48. `SUP-421445a4beb428f3`, celui dont l'omission avait coûté les deux exemples, est
cette fois rattaché au claim qui les énumère, ainsi qu'à cinq autres.

Une réserve du reviewer est à corriger pour que le prochain passage ne la reprenne pas : il note
que `verification.json` ne porte pas le champ `appuis_non_cites`. **C'est normal et ce n'est pas un
défaut** — le signal est joint au *bundle*, qui est l'entrée du vérificateur, et non à son rapport
de sortie. Vérifié sur pièce : `verification-bundle.json` porte bien le bloc
`signal_appuis_non_cites` avec son critère, et zéro claim signalé.

## Le geste que la consigne n'avait pas prévu, et ce qu'il a ouvert

Le réécrivain a aussi changé un mot du titre de `sections[3]` — « Des boucles **emboîtées** » est
devenu « Des boucles **hiérarchisées** » —, l'a signalé comme sortant de la lettre de sa consigne,
et l'a donné comme réversible.

**Le geste est conservé, et le reviewer l'a instruit plutôt que de l'excuser.** Laisser
« emboîtées » aurait publié, en position d'annonce et dans le seul endroit du texte lecteur que le
vérificateur ne regarde pas, exactement la proposition refusée en `C038` trois lignes plus bas.
Une troncature d'un mot vers la formule de l'appui n'ajoute aucune assertion. Et la cohérence
l'imposait : ce cycle existe parce qu'un angle mort d'instrument avait fait couper deux exemples
réels ; on ne pouvait pas, dans le même cycle, se servir d'un autre angle mort pour conserver un
excédent.

**C'est le chantier L**, ouvert le jour même : les 744 titres de section du corpus sont du texte
lecteur — `PROTOCOLE.md` les soumet explicitement aux mêmes règles — et aucun locator du claim map
ne les couvre.

## Ce que ce passage laisse au suivant, sur cette carte

Trois réserves du reviewer, aucune bloquante, et aucune n'est corrigeable dans les limites de
cette reprise :

1. **Le pouvoir d'ouverture reste à 2 sur 4.** Le texte finit toujours sur une restriction de
   périmètre. Les deux sorties que l'audit avait repérées demandent d'**ajouter** du texte, ce que
   la consigne de reprise interdisait.
2. **Une rugosité nouvelle en `sections[3]`.** Le paragraphe entre désormais par l'abstrait, et
   « au même étage » s'appuie sur un antécédent plus mince depuis le retrait de l'emboîtement.
   C'est une maigreur plutôt qu'une redite, et elle se corrige à matière constante.
3. **Hors mandat de cette reprise** : le raccord manquant entre `sections[4].paragraphs[1]` et
   « constater et intervenir », la promesse non tenue de `sections[0].paragraphs[0]`, et le statut
   d'« hypothèses de travail » de préinformation et préaction, toujours non dit.
