---
concept_id: catachrese
deepening_sha256: 2e94bac8659301fe519424b85d9caa146be3b6628c11c9f61d370054b41eb244
validated_sha256: 3d46dbba8f42452628d0bfb0bfd735d9ff0130743d080a02242bade0472a51e0
protocol_version: 3
audited_at: 2026-09-27T05:01:15Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
remappings: 0
---

# catachrese

Première carte jamais auditée de ce lot, et le cycle est complet : `REVISE` → réécriture → une
boucle de correction factuelle → `FACTCHECK_PASS` 68 sur 68 → `ACCEPT`.

## Comment elle a été choisie, et ce que la mesure de sélection valait

Elle a été retenue par un chiffre, non par impression : parmi les **108 approfondissements que
personne n'avait jamais audités**, c'est celui dont la part de séquences de cinq mots répétées est la
plus élevée, **1,48 %**, avec un dossier de lecture primaire de 14 Ko et ses deux sources primaires
en `full-text`. La matière était là ; le soupçon portait sur la redondance.

**La mesure était juste et partielle.** L'audit a établi 19 séquences répétées en trois blocs, dont
un segment de **dix-neuf mots consécutifs identiques** entre `lead[1]` et la première section 4, et
une section entière dont le rôle principal était de répéter le lead — ce qui interdit `PASS` au titre
du §4 du protocole d'audit. Mais la métrique ne voyait pas deux redondances **sémantiques** réelles,
et le texte ne faisait que 1 204 mots : **il était court et répétait quand même.**

## Ce que la mesure ne cherchait pas, et que le dossier a trouvé

Deux affirmations du texte publié étaient fausses, et la première atteignait le lecteur dans un
contre-exemple :

1. **la mauvaise pédale.** Le contre-exemple écrivait « pédale d'accélérateur » là où la lecture
   primaire porte « pédale de frein ». Les `notes` de l'enregistrement validé disent seulement « la
   pédale » : **elles ne contredisaient rien, et un audit mené sur le seul enregistrement n'aurait
   pas vu la faute.** C'est exactement le cas que `PROTOCOLE.md` §3 anticipe en donnant le dossier au
   rédacteur, et la démonstration que l'asymétrie qu'il a corrigée coûtait quelque chose ;
2. **l'attribution.** `lead[1]` et la section 4 créditaient Rabardel d'avoir fait entrer ou importé
   la notion en ergonomie, contre `attribution_note` — « Rabardel n'est ni l'inventeur du mot ni
   celui qui l'a introduit en ergonomie » —, contre le dossier, et contre la phrase suivante du texte
   lui-même. Le texte dit maintenant l'inverse de ce qu'il disait.

Une troisième fragilité, une datation, a été retirée au passage.

`BLOCKED_SOURCE` a été écarté sur mesure et non par optimisme : la définition que l'auteur donne
lui-même, son rattachement au prescrit et au réel, le mécanisme du retournement et le doute de
l'auteur sur la norme étaient tous au dossier en `full-text` et absents du texte lecteur.

## Les deux tours du gate, et ce qu'ils disent de la longueur

| tour | claims | soutenus | refusés | mots lecteurs |
|---|---:|---:|---:|---:|
| 1, réécriture | 68 | 56 | **12** | 1 370 |
| 2, après correction | 68 | **68** | **0** | 1 283 |

Les douze refus étaient dix `TOO_STRONG` et deux `UNSUPPORTED`, et **le lien avec la longueur est
net** : la réécriture avait ajouté 131 mots contre l'attente de l'audit, et c'est là que l'affirmation
non soutenue s'était glissée. L'un des dix mérite d'être retenu comme cas d'école : l'appui porte
« la généralité, sinon la fréquence du phénomène », formule qui **réserve expressément** la
fréquence, et le texte affirmait la fréquence.

La correction a employé quatre `REMOVE` et huit `NARROW`, aucun `REATTRIBUTE`, aucun
`MARK_AS_INTERPRETATION`. **Les deux exemples d'objets inventés n'ont pas été remplacés** : le pack ne
porte qu'un exemple d'objet, celui que l'auteur emprunte à Faverge, et il servait déjà trois fois.

Le second mapping a rendu **le même nombre de claims sur un texte de 87 mots de moins**, en découpant
séparément chaque portée quantifiée et chaque attribution : c'est le découpage qui manquait au
premier.

## Ce que la revue a vérifié, et une correction qu'elle apporte à la mesure

La revue a tranché sur pièce, contre `corpus/evidence/catachrese/lecture.json` et non contre les
comptes rendus. Les huit axes montent sans un recul : A 2→4, B 3→4, C 2→4, D 3→4, E 2→4, F 3→3,
G 3→4, H 3→4. Les 5-grammes répétés passent de **19 à 3**, tous internes au lead et dont la citation
elle-même.

**Et elle corrige un chiffre de ce cycle.** Le mandat de revue annonçait 44 mots de plus que la
version publiée ; à règle de comptage unique appliquée aux deux versions, l'écart réel est de
**+13 mots, soit +1,1 %**, pour trois paragraphes neufs et substantiels, un paragraphe de clôture
neuf, neuf ancrages verbatim inédits et une section de 161 mots supprimée. L'invariant « toute
augmentation de longueur correspond à une augmentation mesurable de contenu » est donc tenu
largement, et l'écart de 44 venait d'un autre tokenizer, pas d'un contenu différent.

Une réserve non bloquante est notée : les deux premières sections ne portent plus d'exemple, et leur
concrétude repose désormais sur les gloses. La revue juge qu'elles la portent.

## Ce qui reste

Rien sur cette carte. Elle est publiable, et elle l'est au sens exact du protocole : un
`FACTCHECK_PASS` qui correspond au SHA du fichier en place, une revue indépendante qui l'accepte, et
un contrôle mécanique qui passe.
