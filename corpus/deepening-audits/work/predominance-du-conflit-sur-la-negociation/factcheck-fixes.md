concept : predominance-du-conflit-sur-la-negociation
mode    : FACTCHECK_FIX (boucle 1 sur 2)
date    : 2026-11-02
gate lu : factcheck-gate.json, verdict FACTCHECK_INVALID, 60 claims, 51 SUPPORTED, 8 en échec
          (7 TOO_STRONG, 1 CONFLICT), 1 MAPPING_INCOMPLETE (C001).
          SHA du candidat audité : 34777acd31cd7867ac5ef1cb80d3046aefef80728081ac608dc96b26bccab894
nouveau SHA : f4488923a5ce3f597bc8b8e7ffcdca7fb661ef44ba1221853630e2a25da48892

Correction minimale seulement. Aucune affirmation neuve, aucune recherche, aucun support
`SUP-...` fabriqué, aucune compensation de volume. Seul fichier modifié :
`corpus/deepenings/predominance-du-conflit-sur-la-negociation.json`. Les phrases soutenues ne
sont pas touchées ; `limits` est inchangé.

## Opérations, claim par claim

### C001 — MAPPING_INCOMPLETE — lead[0] — REMOVE
Avant : « Discuter, dans une entreprise, cela prend des formes visibles : des délégués, des
réunions inscrites au calendrier, des accords signés. »
Après : supprimée. La glose « délégués, réunions, accords signés » n'est portée par aucun appui ;
le gate renvoie au mapping mais le seul appui suggéré (SUP-41012dca6a97020d) porte « appareil de
négociation » et « pratiques contractuelles diverses », pas cet inventaire. Plutôt que de laisser
le remapping trancher, la phrase est retirée et la suivante reprend directement le terme du
support.

### C002 — TOO_STRONG — lead[0] — NARROW
Avant : « Ces pratiques ne sont pas également répandues selon la taille : c'est dans les grandes
entreprises qu'elles sont le plus développées, et un petit atelier en est bien moins pourvu. »
Après : « Les pratiques contractuelles ne sont pas également répandues selon la taille des
entreprises : c'est dans les grandes qu'elles sont le plus développées. »
Le membre d'intensité « bien moins pourvu » est retiré ; il reste le comparatif seul, forme de
SUP-d43fc9ab6fb9f513 (Durand citée p. 33, « un plus grand développement des pratiques
contractuelles diverses ») et SUP-41012dca6a97020d (« le mieux installé »). « Ces pratiques »
devient « Les pratiques contractuelles », terme du support, puisque C001 a disparu.

### C003 — TOO_STRONG — lead[0] — REATTRIBUTE
Avant : « L'idée qui vient alors est simple, et presque tout le monde l'a eue : »
Après : « L'idée qui vient alors est simple, et Dassa la rapporte à ce qu'« on pensait » : »
La quasi-universalité est retirée ; l'attente est rattachée à la formule de l'auteur p. 44, « là
où précisément on pensait que l'appareil de négociation […] se substituait à ce rapport des
forces » (SUP-f124549dd85e3c58, SUP-d43fc9ab6fb9f513), qui est exactement le contenu de C004.

### C009 — TOO_STRONG — sections[0].paragraphs[0] — NARROW
Avant : « Dans la sociologie du travail française des années 1970, une phrase circule : « Le
conflit est la poursuite de la négociation par d'autres moyens. » »
Après : « Il y a d'abord une phrase : « Le conflit est la poursuite de la négociation par
d'autres moyens. » »
La diffusion dans le champ et sur la décennie est retirée. L'ancrage documentaire (Adam et
Reynaud 1978, p. 127 ; confirmation Segrestin) reste porté par C011 et C012, inchangés.

### C026 — TOO_STRONG — sections[1].paragraphs[1] — REMOVE
Avant : « Dans les grandes, tenir cinq jours de plus est ce qui sépare l'échec du résultat ; dans
les petites, page 41, « on relève … » »
Après : « Dans les petites, page 41, « on relève une quasi indépendance entre durée des grèves et
résultats obtenus ». »
La lecture déterministe d'un écart entre groupes est supprimée ; l'écart de 5,2 jours reste
donné tel quel en C023. C027 (soutenu) est conservé mot pour mot, seule sa majuscule initiale
change parce qu'il ouvre désormais la phrase.

### C030 — CONFLICT — sections[1].paragraphs[2] — NARROW
Avant : « L'incise borne la thèse : la démonstration vaut surtout au pôle des grandes
entreprises, elle n'est pas donnée comme une loi générale du travail. »
Après : « L'incise situe la démonstration : elle vaut surtout au pôle des grandes entreprises. »
Le second membre, contredit par les énoncés généraux de Dassa (p. 33, 41, 43) et par la lecture
qui dit la thèse « transposable au-delà de son terrain », est supprimé. « Borne la thèse »
devient « situe la démonstration » pour ne plus suggérer une limitation de portée de la thèse
elle-même. Le premier membre, appuyé (p. 41, « et surtout pour les grandes entreprises »), reste.

### C031 — TOO_STRONG — sections[1].paragraphs[2] — REMOVE
Avant : « À l'autre pôle, la thèse laisse une question que ces chiffres ne referment pas : si
durer ne change presque rien dans un petit atelier, on ne sait toujours pas ce qui y décide du
sort d'une grève. »
Après : supprimée. L'affirmation d'une lacune de l'article n'est établie par aucun appui, et la
définition rapporte des résultats p. 43 sur les petites entreprises que la phrase ignorait. La
quasi-indépendance durée/résultat reste dite en C027.

### C039 — TOO_STRONG — sections[2].paragraphs[2] — REMOVE
Avant : « Ces exclusions décident de ce que les durées veulent dire : un arrêt qui se prolonge
parce que l'entreprise ferme, ou une grève qui la déborde, ne se compare pas à un arrêt
ordinaire. »
Après : supprimée. Les supports énumèrent les exclusions sans en donner la raison ; l'énumération
(C038, soutenue) reste seule.

### C040 — TOO_STRONG — sections[2].paragraphs[2] — REMOVE
Avant : « Les durées mises côte à côte sont donc de même nature, celles d'une seule année. »
Après : supprimée. L'homogénéité n'est pas appuyée et le « donc » dépendait de C039. L'année
unique 1976 reste dite dans le lead (« pour l'année 1976 ») et dans sections[2].paragraphs[0]
(« en 1976 »), sans perte.

## Volume

Texte lecteur (lead + paragraphes, hors titres) : 1398 mots avant, 1254 après (-144).
Compte de `corpus:deepen --check` (son propre périmètre) : 1697 avant, 1553 après.
Aucun ajout : aucune phrase neuve à financer. Les seuls mots nouveaux sont « contractuelles »
(SUP-d43fc9ab6fb9f513), « « on pensait » » (SUP-f124549dd85e3c58, SUP-d43fc9ab6fb9f513), « Il y
a d'abord » et « situe la démonstration » (reformulations de reliure sans contenu factuel).

## Points de vigilance pour la ré-vérification

- La phrase de lead « Dassa la rapporte à ce qu'« on pensait » » cite un fragment de la p. 44 ;
  le verifier doit l'apparier à SUP-f124549dd85e3c58 / SUP-d43fc9ab6fb9f513.
- sections[0].paragraphs[2] (« les délégués, les réunions et les accords […] ont été arrachés »)
  et sections[3].paragraphs[2] (lecture marquée « délégués, calendrier de réunions, accords
  signés ») reprennent un inventaire proche de celui de C001 ; ils n'étaient pas en échec et n'ont
  pas été touchés, par minimalité. S'ils tombent au prochain passage, la même correction
  s'applique (revenir à « appareil de négociation »).

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=predominance-du-conflit-sur-la-negociation` :
« 1 approfondissement(s) contrôlé(s), 1553 mots. Rien projeté. » — PASS.

Le SHA du deepening a changé : l'orchestrateur doit recommencer à `PREPARE`. Aucune validation,
aucun verdict de fact-check n'est déclaré ici.

---

# Boucle 2 sur 2 — FACTCHECK_FIX

date    : 2026-11-02
gate lu : factcheck-gate.json, verdict FACTCHECK_FAIL, 58 claims, 57 SUPPORTED, 1 en échec (C012).
          SHA du candidat audité : f4488923a5ce3f597bc8b8e7ffcdca7fb661ef44ba1221853630e2a25da48892
nouveau SHA : dda22c7221b346f9847935f819d5270e2f2ef055a7e86be3f922bbc01de4b9f2

Seul fichier modifié : `corpus/deepenings/predominance-du-conflit-sur-la-negociation.json`.
Aucune autre phrase touchée, aucun ajout, `limits` inchangé.

### C012 — TOO_STRONG — sections[0].paragraphs[1] — RETRAIT DE LA CLAUSE FAUTIVE
Avant : « La phrase ne dit pas que la grève et la discussion se succèdent : elle dit qu'elles sont
le même processus vu à deux moments, et qu'un arrêt de travail est un coup joué dans une partie
qui reste une partie de négociation. »
Après : « La phrase ne dit pas que la grève et la discussion se succèdent : elle dit qu'un arrêt
de travail est un coup joué dans une partie qui reste une partie de négociation. »
Motif : la précision « même processus vu à deux moments » n'est portée par aucun appui
(SUP-4c884765058ef85d, SUP-a88bce97a26e6edd : « un seul et même sujet », « forme exacerbée de
négociation »). Plutôt que de la reformuler avec « un seul et même sujet », qui doublerait la
citation de Segrestin de la phrase suivante (C014, soutenue), la clause est retirée.
Charnière : « ne dit pas … : elle dit … » garde un second membre, désormais C013 (soutenue,
inchangée). La phrase suivante (C014) ne renvoyait pas à la clause retirée ; « cette conception »
s'appuie sur le coup joué dans une partie de négociation et sur la citation elle-même.

## Volume
Texte lecteur : -10 mots. Compte `corpus:deepen --check` : 1553 avant, 1543 après.

## Contrôle mécanique
`npm run corpus:deepen -- --check --only=predominance-du-conflit-sur-la-negociation` :
« 1 approfondissement(s) contrôlé(s), 1543 mots. Rien projeté. » — PASS.

Le SHA a changé : l'orchestrateur doit recommencer à `PREPARE`. Aucune validation, aucun verdict
de fact-check déclaré ici.
