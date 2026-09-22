# Correction factuelle — mesure-devenue-cible

concept : mesure-devenue-cible
mode : FACTCHECK_FIX (cycle 1 sur 2), à partir de `factcheck-gate.json` — `FACTCHECK_FAIL`,
62 claims, 52 soutenus, 10 refusés, zéro erreur structurelle.
check mécanique : PASS (`npm run corpus:deepen -- --check --only=mesure-devenue-cible` :
1 approfondissement contrôlé, 1 512 mots, rien projeté).

volume : texte lecteur 1 512 mots (avant : 1 718). Cinq sections deviennent quatre.
`limits` passe de 4 à 5 entrées.

Aucune affirmation nouvelle n'a été introduite dans le texte lecteur. Les seuls gestes employés
sont le retrait, la réduction de portée et la suppression d'une glose qui durcissait un verbatim.

## Matériaux relus

- `corpus/deepenings/FACTCHECK_PROTOCOL.md` en entier, §3bis compris
- `corpus/deepening-audits/work/mesure-devenue-cible/factcheck-gate.json` (autorité du verdict)
- `.../verification.json` et `.../claim-map.json` (locators et offsets exacts des dix échecs)
- `.../rewrite.md`, version précédente de ce compte rendu, remplacée par celui-ci
- répertoire `corpus/evidence/mesure-devenue-cible/` listé moi-même : `attribution-hoskin.json`
  et `lecture.json`, relus intégralement, `reserves` comprises
- `corpus/validated/mesure-devenue-cible.json`, `notes` et bloc `review` compris

Aucune recherche. Aucune source ouverte pour l'occasion.

## Les dix corrections, claim par claim

| claim | verdict | geste | ce qui reste |
|---|---|---|---|
| C005 | TOO_STRONG | retrait de l'apposition « anthropologue » | « Marilyn Strathern l'écrit en 1997 » |
| C008 | TOO_STRONG | retrait de « son propre milieu, l'université » | « elle parle d'un cas précis. » |
| C009 | UNSUPPORTED | retrait de la phrase | — |
| C010 | UNSUPPORTED | retrait de la phrase | — |
| C011 | UNSUPPORTED | retrait de la phrase | — |
| C012 | UNSUPPORTED | retrait de la phrase | — |
| C039 | TOO_STRONG | retrait de la relative causale « qui a fait circuler la loi » | « ce qui lui appartient en propre, c'est le tour de langue, pas la loi. » |
| C050 | UNSUPPORTED | retrait de la clause interprétative et de son amorce | « Ce que décrit Strathern n'est pas un accident mais un principe de construction. » (C049, soutenu) |
| C053 | TOO_STRONG | retrait de la glose | le paragraphe s'arrête sur la traduction du verbatim (C052) |
| C062 | UNSUPPORTED | retrait de la phrase | le texte s'achève sur « pourquoi inhérente » |

### C005 et C008 — deux attributions biographiques

Le vérificateur a raison sur les deux : le dossier qualifie le *texte* de Strathern (« donne un
commentaire anthropologique », `lecture.json`) et décrit le *circuit* de son argument
(« Strathern complète la boucle en la faisant revenir sur l'université »), jamais son métier ni
son affiliation. Les deux mentions sont retirées sans remplacement.

Pour C008, j'ai écarté la réécriture qui aurait nommé de nouveau l'objet — « celui de l'audit du
système universitaire britannique » — parce qu'elle redit mot pour mot C007, soutenu et situé
trois mots plus haut dans la même phrase. Le travail pédagogique de la phrase (avertir que le
lecteur ne doit pas généraliser l'exemple scolaire du `lead[0]`) est porté par ce qui subsiste :
« Elle ne parle pas d'écoles en général : elle parle d'un cas précis. » Ce cas est nommé à la
première ligne de la section suivante.

### C009 à C012 — la section 1 tombe en entier

Les quatre claims refusés sont les quatre seuls claims mappés de la section « Ce qui fait qu'une
mesure est bonne ». Ils portaient, dans l'ordre : pourquoi on accepte un substitut (coût, délai,
échelle, comparabilité), à quelle condition il reste valable, les trois voies qui s'ouvrent quand
il devient l'objectif, et le classement de visibilité de ces voies. Le motif du vérificateur est
le même quatre fois : ce sont des faits généraux sur la mesure, avancés comme réels, qu'aucun
support ne porte.

Je n'ai pas cherché à les sauver par une formulation plus prudente : borner « trois voies
s'ouvrent » en « trois voies peuvent s'ouvrir » affirmerait toujours l'existence d'une typologie
que rien du dossier ne contient.

**Pourquoi la section entière et pas seulement les quatre phrases.** Une fois les quatre claims
retirés, il ne restait que quatre fragments, et aucun ne tenait :

1. « C'est ce lien qui casse quand le substitut change de statut » — « ce lien » n'a plus
   d'antécédent, C010 l'ayant posé.
2. « Tant qu'une note d'examen sert seulement à informer, l'améliorer suppose d'améliorer ce
   qu'elle décrit » — c'est C010 redit à l'endroit. Le mapper ne l'avait pas découpé ; s'en
   prévaloir reviendrait à garder l'affirmation refusée en profitant d'un angle mort du
   découpage, et un mapper frais la relèverait au cycle 2.
3. « La troisième mérite un instant d'attention : elle ne touche pas à l'enseignement du tout »
   — dépend de l'énumération de C011.
4. Le préambule définitionnel, « Une mesure sert à connaître quelque chose qu'on ne peut pas
   observer directement. Personne ne peut évaluer d'un seul regard la qualité de l'enseignement
   dans une université entière : on se sert donc d'un substitut observable… » Il a survécu au
   mapping, mais il est du même genre exactement que C009 — un fait général sur l'indisponibilité
   de l'observation directe — et refusé pour ce motif-là.

Ce qui restait de soutenable dans cette section était donc un préambule sans idée propre, sous un
titre, « Ce qui fait qu'une mesure est bonne », dont plus aucune phrase ne tenait la promesse.
Le retrait de la section est ici la correction *minimale* : il n'enlève rien de soutenu, et il
enlève au cycle 2 un paragraphe de même nature que ceux qui viennent d'échouer.

Le texte n'y perd pas son entrée : `lead[0]` porte déjà le mécanisme complet sur l'exemple
scolaire, explicitement hypothétique (« Imaginons »), et ses deux claims conclusifs, C001 et C002,
sont soutenus. Le lecteur passe du cas imaginé au cas réel sans palier manquant. Rien ailleurs ne
renvoyait à la section supprimée : la seule autre occurrence de « substitut » est le mécanisme
monétaire de S2.P3, autonome, et « le mécanisme » de S4.P1 renvoie à S3.P1.

### C039 — une diffusion que le bundle contredit

La relative affirmait que la formule de Strathern « a fait circuler la loi ». Le vérificateur note
que le bundle porte l'inverse : chez Hoskin, en 1996, la loi est déjà « becoming recognized as one
of the overriding laws of our times ». La relative est retirée. La phrase conserve ce que
`attribution_note` et `review` établissent, et que C038 soutient juste avant : elle resserre une
formulation déjà publiée, et ce qui lui appartient est le tour de langue.

### C050 et C053 — une interprétation et une glose

C050 était marqué comme interprétation (« et l'on peut comprendre cela ainsi »), ce qui n'a pas
suffi : l'énoncé avance comme réels le fait que la confusion rend l'audit praticable et que la
qualité d'un enseignement ne se pilote pas. Le marquage ne rend pas soutenable ce qui n'est pas
soutenu ; la clause est retirée. Le paragraphe garde la distinction accident / principe de
construction, qui est C049 et qui est soutenue, et enchaîne sur le verbatim de l'auteure. L'amorce
« L'auteure va plus loin que ce raisonnement » devient « Et elle va plus loin que le constat »,
le raisonnement auquel elle renvoyait n'existant plus.

C053 durcissait « jeopardizes » en « remplace ». Je l'ai retirée plutôt que corrigée en « met en
danger » : la traduction du verbatim, immédiatement avant (C052, soutenu), dit déjà exactement
cela. Une version bornée n'aurait plus été qu'une redite.

### C062 — la frontière que le dépôt vient de rendre opposable

C'était le manquement le plus net, et il l'était contre le propre `limits[0]` de la version
auditée, qui interdisait déjà d'avancer quoi que ce soit sur la continuité de l'argument.
Le dossier est sans ambiguïté : `attribution-hoskin.json` documente une lecture par extraits OCR
paginés obtenus par la recherche interne au volume Google Books, trois extraits au plus par
requête, sur un volume en « no preview » ; sa `preuve` conclut « je ne l'ai jamais lu en
continu », sa première réserve le répète, et ses `voies_essayees` classent en « non tenté » la
seule voie qui donnerait les pages en continu. Dire que la réponse de Hoskin « se lit d'un bout à
l'autre de son argument » est une affirmation sur la continuité du chapitre, c'est-à-dire
précisément ce que le niveau d'accès constaté ne permet pas (FACTCHECK_PROTOCOL §3bis : le
`partial` de la fiche est ici corroboré par le dossier, et il est corroboré *à cette borne-là*).

La phrase est retirée. Le paragraphe, et le texte, s'achèvent sur « Toute la question tient dans
le mot que l'aphorisme laisse sans explication : pourquoi inhérente. » — une question ouverte, qui
ne promet plus au lecteur une lecture que personne n'a faite.

## `limits`

Deux changements, tous deux internes ; aucun contenu de `limits` n'a de contrepartie visible dans
`lead` ou `sections`.

- `limits[0]` réécrit. L'ancienne rédaction disait « aucun relevé de lecture indépendant ne la
  corrobore », ce qui est inexact depuis §3bis : le dossier corrobore le `partial` de la fiche,
  et c'est même la carte que le protocole cite en exemple. La nouvelle rédaction nomme la voie
  d'accès et sa borne — extraits OCR paginés, jamais de lecture en continu — et ferme
  explicitement les trois portes correspondantes, dont celle par laquelle C062 est passé.
- `limits[4]` ajouté, frontière découverte par cette correction : aucune source disponible ne
  porte une théorie générale de l'indicateur-substitut. C'est ce qui a coûté quatre claims d'un
  coup, et rien dans le dossier ne signalait la frontière à l'avance.

## Contrôles

1. Delta formulé pour les onze paragraphes restants. `lead[0]` le mécanisme sur un cas imaginé ;
   `lead[1]` la phrase, sa langue, son auteure, sa date, sa portée restreinte ; S1.P1 l'objet réel
   de l'audit et le 2.1 devenu attente ; S1.P2 le glissement d'*improvement* et le renversement
   « measuring the improvement leads to improving the measures » ; S2.P1 la mésattribution à
   Goodhart et sa réfutation textuelle ; S2.P2 l'emprunt à Hoskin et l'antériorité de la
   formulation ; S2.P3 l'origine du nom et le mécanisme monétaire, qui n'est pas une dégradation
   d'instrument ; S3.P1 l'audit délibérément bâti sur la confusion ; S3.P2 accident contre
   principe de construction, puis la vie propre de l'audit ; S4.P1 changer d'indicateur ne déplace
   que la cible ; S4.P2 la loi critiquée par l'auteur même dont elle vient.
2. Aucun paragraphe sans delta ; aucune paire consécutive n'accomplit le même travail. Les
   retraits ont supprimé des paragraphes, jamais laissé de moignon : les deux paragraphes
   raccourcis (S3.P2, S4.P2) gardent chacun leur delta entier.
3. Aucune section ne répète principalement une section antérieure. La suppression de l'ancienne
   S1 supprime au passage la seule reprise du patron de `lead[0]` qui subsistait.
4. Frontières documentaires : rien sur la continuité de l'argument de Hoskin, rien sur ce que
   Goodhart a écrit, aucun métier prêté à Goodhart ni à Strathern, aucune affiliation
   institutionnelle, aucun statut officiel du 2.1, plus aucune théorie générale de la mesure.
5. `limits` reste interne, cinq entrées, aucune remontée en bloc visible.
6. Typographie inchangée sur les passages conservés : zéro tiret cadratin, zéro apostrophe
   droite, zéro guillemet droit ; titres à 47, 45, 38 et 43 caractères. Les six citations
   anglaises conservées sont les mêmes qu'avant, aucune n'a été retouchée.
7. `npm run corpus:deepen -- --check --only=mesure-devenue-cible` : PASS.

Une première exécution avait échoué sur `limits[4]`, qui employait « la carte » — le contrôle
refuse d'exposer le dispositif dans ce champ. Reformulé en « Aucune source disponible ».

## Suite

Le SHA du texte a changé : `factcheck-pack.json`, `claim-map.json`, `verification.json` et
`factcheck-gate.json` de ce répertoire sont périmés et ne valent plus pour cette version.
L'orchestrateur doit reprendre à `PREPARE`. Aucun artefact de fact-check n'a été modifié à la
main, aucun `SUP-…` n'a été inventé, aucune auto-validation et aucun `FACTCHECK_PASS` n'est
déclaré ici.
