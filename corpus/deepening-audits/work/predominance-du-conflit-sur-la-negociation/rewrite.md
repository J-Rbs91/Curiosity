concept : predominance-du-conflit-sur-la-negociation
mode    : REVISE (audit `REVISE`, protocol_version 4)
date    : 2026-11-02
texte de départ : SHA 8eac437647f6a94c406409a89b1a7e44eea4340b8197f1953f5671fc0bbd3ef9 (version d'origine)
texte rendu     : SHA 34777acd31cd7867ac5ef1cb80d3046aefef80728081ac608dc96b26bccab894
seul fichier modifié : corpus/deepenings/predominance-du-conflit-sur-la-negociation.json

## Matière lue

PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md ; l'approfondissement ; l'enregistrement
validé (dont le champ `dossier`) ; le répertoire désigné par ce champ,
`corpus/evidence/taille-des-entreprises-et-issue-des-greves/`, qui ne contient que `lecture.json`,
lu en entier ; `corpus/evidence/predominance-du-conflit-sur-la-negociation/` n'existe pas ; l'audit,
le pack, et les artefacts du cycle précédent (claim-map 0424bdeb…, verification.json,
factcheck-gate.json, factcheck-fixes.md). Aucune recherche externe.

## Méthode

L'audit prescrit une révision minimale en s'appuyant sur les claims C001 à C067 du cycle
précédent, 66 SUPPORTED sur 67. Le texte de cette version n'étant pas au dépôt git, il a été
reconstitué à partir des `claim_text` ancrés du `claim-map.json` (les claims couvrent presque tout
le texte ; les quelques intervalles non couverts ont été remplis par des charnières sans
assertion, détaillées plus bas). Puis : correction de C060, coupes pour tenir le volume, retouches
de liaison. Aucun énoncé neuf hors de ces claims.

## Corrections demandées

1. **Vignette chiffrée du lead** (« plusieurs milliers », « vingt ans », « trente personnes »,
   « rien de tout cela n'existe », « chaque conflit », « l'objet du désaccord ») : remplacée par la
   forme passée au gate (C001-C004, C006-C007). Le contraste devient comparatif (« le plus
   développées », « bien moins pourvu ») ; la matière est « les relevés de conflits du travail
   rédigés par les inspecteurs du travail pour l'année 1976 ». Supports : SUP-d43fc9ab6fb9f513,
   SUP-f16e01d11d2a6474, SUP-2d27288511f2293d.
2. **Contenu prêté à Clausewitz** : « formule célèbre de Clausewitz sur la guerre et la politique »
   devient « Elle est construite par inversion d'une formule de Clausewitz » (C012,
   SUP-a88bce97a26e6edd). J'ai en outre retiré « comme la guerre puis le traité » de l'ancien C016,
   qui avait passé le gate mais redonnait un contenu clausewitzien que seul le savoir général
   apporte.
3. **« produit des textes, occupe des gens à plein temps »** : supprimé ; la phrase finale de S1.P3
   est celle de C023 (SUP-f124549dd85e3c58, SUP-06462ecbd910ff69).
4. **« dans le secteur privé »** : supprimé ; S3.P3 finit sur « celles d'une seule année » (C047).
5. **Ex-C060** : « ceux qui ne sont notés nulle part » devient « ceux que ces relevés
   n'enregistrent pas », forme demandée. « ces relevés » renvoie aux relevés d'inspection posés en
   lead[1]. Supports : SUP-1f7e4d8dbe956dc0 (« donc non notés dans les fiches »),
   SUP-da8da851198830bd, SUP-2d27288511f2293d (relevés = fiches des inspecteurs pour 1976). La
   citation guillemetée garde sa forme d'origine : « varie peut-être suivant la dimension des
   entreprises ».

## Contradictions laissées ouvertes

- **Segrestin / Dassa** : l'ancien S5.P2 (« Trente-six ans plus tard, Denis Segrestin écrit
  qu'"un article de Sami Dassa…" », « La thèse est donc imputée à Dassa par un tiers ») est retiré
  en entier. Le texte ne garde de Segrestin que ce sur quoi les deux couches s'accordent :
  l'attribution de la formule à Reynaud et « un seul et même sujet ». Le texte ne dit ni que
  Segrestin nomme Dassa ni qu'il ne le nomme pas. La contradiction est consignée dans `limits[2]`.
- **Chapeau p. 32** : le doublet prédominance / prééminence, « les deux sont de Dassa » et « le
  second est celui qui a voyagé » sont retirés. Seule la formule du corps, p. 41, est attribuée à
  l'auteur (SUP-edc59f06598eb9b1). Le chapeau n'est attribué ni à l'auteur ni à la rédaction ; la
  question est consignée dans `limits[2]`.
- Le titre de S5 (« Deux mots pour une même conclusion ») nommait le doublet : il devient « Ce que
  le comptage ne voit pas, et ce qu'il établit ».

## Volume

| | avant | après |
|---|---|---|
| texte lecteur (`lead` + `sections`) | 1 346 mots | 1 398 mots (+52, +3,9 %) |
| `limits` | 206 mots | 299 mots |
| total compté par le contrôle | 1 552 | 1 697 |
| paragraphes lecteur | 16 | 16 |

Hausse dans la bande de ±5 % que l'audit fixait. La version du cycle précédent faisait 1 440 mots ;
42 mots y ont été coupés pour rester dans la bande : « Ce que la phrase soutient est fort » (C015),
« l'une après l'autre, comme la guerre puis le traité », « Une comparaison de ce genre ne vaut que
si l'on sait sur quoi elle porte, et », « La précaution n'est pas de pure forme, car », « Le champ
est borné par ailleurs » (intégré dans « sont exclues du champ »).

## Ajouts nets par rapport au texte de départ, et ce qui les finance

Tous viennent de claims SUPPORTED au gate précédent ; je cite les supports du verifier.

- S1.P3, découpage de « tributaire » en origine / dépendance (C021, C022) : SUP-8ebed46f41638cc4,
  SUP-f246a187f4c90839. Charnière ajoutée : « L'énoncé tient en deux temps. » (sans assertion).
- S2.P1, prédiction explicite (C027) : SUP-d43fc9ab6fb9f513, SUP-f124549dd85e3c58.
- S2.P2, « Il est maximal là où on l'attendait minimal » (C029) : SUP-f124549dd85e3c58,
  SUP-d43fc9ab6fb9f513.
- S2.P3, formule p. 41 avancée depuis S5 avec sa restriction (C034, C035) : SUP-edc59f06598eb9b1,
  SUP-d43fc9ab6fb9f513 ; question laissée ouverte (C036, C037) : SUP-8ebed46f41638cc4.
- S3.P2, prémisse de combativité posée avant d'être bornée (C041) : SUP-cf86e23d9719e1c0
  (audit, ajout prescrit 2 ; SUP-16ba211a5720bca6 dit la même chose).
- S3.P3, effet des exclusions sur les durées (C046, C047) : SUP-cf86e23d9719e1c0,
  SUP-2d27288511f2293d.
- S4.P1, emboîtement des deux anomalies (C050, C051) : SUP-d43fc9ab6fb9f513, SUP-f124549dd85e3c58.
- S4.P3, « ne dispense pas de la grève, il en relève le prix » (C057) : SUP-f124549dd85e3c58.
- S5.P1, réserves de la note p. 36 remontées de `limits[0]` (C058-C062 ; audit, ajout prescrit 1) :
  SUP-1f7e4d8dbe956dc0, SUP-da8da851198830bd.
- S5.P2, apport propre (C063, C064) : SUP-66a9ee547abd9ee5, SUP-813addb0085d0839,
  SUP-cbae6319857861a1 ; citation p. 43 (C065 ; audit, ajout prescrit 3) : SUP-06462ecbd910ff69,
  SUP-d3ea44cff2abd59f, SUP-c2b3e29ec2068525 ; bornes (C066 ; audit, ajout prescrit 4) :
  SUP-2d27288511f2293d, SUP-cf86e23d9719e1c0 ; C067, phrase restrictive sans fait nouveau.
  Charnière ajoutée : « Reste à dire ce qui revient en propre à Dassa : » (sans assertion propre,
  le contenu est porté par C063-C064).

Note pour le verifier : SUP-66a9ee547abd9ee5 (review.notes[2]) est aussi la note contestée sur
Segrestin. Le texte ne s'en sert que pour sa réserve finale (« ce qui lui revient en propre est la
démonstration quantitative par la taille des entreprises […], non l'opposition conflit/négociation
comme telle »), qui ne dépend pas de ce que dit Segrestin.

## Retouches de forme sur des claims déjà soutenus (à remapper)

Ces retouches ne changent pas la portée, mais elles déplacent les offsets :
- « Elle ne dit pas » devient « La phrase ne dit pas » (ex-C016).
- « Dassa le précise avant tout le reste » devient « Dassa précise avant tout le reste » (ex-C038).
- « ce monde-là » prend une majuscule en début de phrase (ex-C040).
- « en sont exclues » devient « sont exclues du champ » (ex-C045).
- « Elle donne page 41 la formule » devient « L'auteur en avait donné page 41 la formule » (ex-C034),
  parce que « Elle » renvoyait à la conclusion de la p. 43.
- « À l'autre pôle, elle laisse » devient « la thèse laisse » (ex-C036).

## Delta par paragraphe

- lead[0] : l'équipement de discussion varie selon la taille ; d'où l'attente de sens commun.
- lead[1] : qui a testé l'attente, sur quelle matière datée, avec quelle question, et le fait que la
  réponse surprend.
- S1.P1 : l'attente a une formule, une source et une généalogie (une inversion).
- S1.P2 : distinction entre succession et identité de processus.
- S1.P3 : la thèse inverse, et « tributaire » décomposé en origine puis dépendance.
- S2.P1 : le test : une mesure, deux prédictions, celle de l'idée de départ.
- S2.P2 : les trois chiffres et l'écart inversé ; la quasi-indépendance au pôle petit.
- S2.P3 : la conclusion, la restriction de portée de l'auteur, la question laissée ouverte.
- S3.P1 : la population se limite aux entreprises qui ont connu une grève en 1976.
- S3.P2 : la combativité observée dedans, bornée par la fréquence vue de dehors.
- S3.P3 : les exclusions et ce qu'elles font aux durées.
- S4.P1 : anomalie de nombre (Durand) et anomalie d'issue, emboîtées.
- S4.P2 : le verbe réfuté (se substituer), donc pas l'utilité de la négociation.
- S4.P3 : le mécanisme, marqué comme lecture : un seuil relevé, pas de capacité propre.
- S5.P1 : ce que l'instrument ne voit pas, selon l'auteur, et qui reste ouvert.
- S5.P2 : ce qui revient en propre à Dassa, sa phrase p. 43, et les bornes qui rouvrent le
  résultat.

Aucune séquence de paragraphes au delta identique. Les cinq jours ne sont plus servis qu'en S2.P2.
Le noyau « ne remplace pas le rapport de forces » n'est plus énoncé qu'en S4.P2, la conclusion
p. 43 en S2.P3, et la phrase p. 43 de la carte en S5.P2, chacun avec une fonction propre.

## Frontière interne

`limits` n'est rendu nulle part au lecteur. Ses quatre entrées :
1. note p. 36 (lue par OCR seulement) : interdit d'étendre l'absence d'enregistrement au-delà des
   relevés d'inspection, d'attribuer un sens à la variation, et de présenter la négociation à
   froid comme établie ;
2. Adam et Reynaud 1978, connu par renvoi seulement ; pour Clausewitz, seul le rapport d'inversion ;
3. **nouvelle** : les deux contradictions (Segrestin, chapeau p. 32) et l'abstention qui en
   découle ;
4. réception non établie ; tableaux non rendus ; page 40 lue par OCR seulement.
L'ancien `limits[0]` (réserves p. 36 sous leur forme de lecture) est passé dans S5.P1 ; l'ancien
`limits[2]`, qui tenait pour acquis que Segrestin mentionne le résultat, est remplacé par l'entrée 3,
neutre.

## Signalements

- Aucune prescription de l'audit sans support n'a été exécutée. L'option de S2.P1 (test réfutable
  p. 41, SUP-41012dca6a97020d) n'a pas été prise : elle aurait fait sortir le texte de la bande de
  volume.
- La contradiction Segrestin et l'attribution du chapeau sont à régler dans l'enregistrement validé,
  pas ici.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=predominance-du-conflit-sur-la-negociation`
→ « 1 approfondissement(s) contrôlé(s), 1697 mots. Rien projeté. » Aucun avertissement.

Le SHA a changé : tout fact-check antérieur est invalidé, et l'orchestrateur doit reprendre à
`PREPARE` (nouveau pack, nouveau mapping). Rien n'est validé ici : ni `ACCEPT`, ni `FACTCHECK_PASS`.
