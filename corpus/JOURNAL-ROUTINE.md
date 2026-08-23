# Journal de la routine nocturne

Une entrée par nuit, la plus récente en tête. Ce fichier existe pour qu'une nuit sache en un
coup d'œil ce que la précédente a fait, sur quelle branche elle l'a laissé, et par quel bout
reprendre. **Les scripts priment sur ce fichier** : il dit ce qui a été tenté et pourquoi, ils
disent ce qui est.

## Passage 01/15 — 2026-08-23

- branche      : `claude/upbeat-archimedes-hhx6zg` (imposée par la session, pas `main`)
- phase        : 1 (ouverture de domaine)
- domaine      : `decision-science`
- validées     : 8 — `theorie-des-perspectives`, `effet-de-cadrage`, `heuristiques-de-jugement`, `theories-normatives-du-choix-sous-risque`, `critique-de-l-utilite-esperee-subjective`, `normatif-descriptif-prescriptif`, `penser-a-partir-des-valeurs`, `classement-multicritere-electre` (dont **8 avec citation**)
- en review    : 0
- rejetées     : 0
- approfondies : 0
- contrôles    : validate 0 erreur (75 enregistrements, 74 validés, 50 avertissements) · build à jour, `git diff` propre sur `src/content/generated/` · test 419/0 · lint 0
- commit       : `15f09af` (projection des huit cartes ; le présent journal suit dans le commit de clôture)
- bloqué par   : **le sous-agent `corpus-orchestrator` n'a pas pu lancer la chaîne**, son outil `Task` étant désactivé dans cette session. Il a constaté que les sessions filles lancées en repli n'héritent d'aucune permission réseau, et il a refusé de s'accorder cette permission lui-même par `--allowedTools` ou par un fichier de réglages écrit pour l'occasion. **C'était la bonne décision** et elle a coûté un aller-retour, pas le lot : la chaîne a été conduite depuis la session elle-même, un agent par maillon, les contextes restant séparés. Le contrôle est donc resté aveugle, ce qui n'aurait pas été le cas si un seul agent avait tout fait.
- la nuit suivante prend : **phase 2**. Plus aucun domaine n'est vide au sens de la condition A, et `corpus:deepen` liste en fin de sortie **les huit cartes ci-dessus**, qui sont exactement la file. Aucune ouverture, aucune nouvelle carte.

### Ce que cette nuit a établi, en une phrase

Le septième domaine sur onze est ouvert dans l'ordre complet, périmètre puis cartographie puis
thèmes puis cartes, et il rend huit cartes qui portent toutes une citation relue sur l'image de
la page.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **Deux thèmes seulement ont été déclarés là où la cartographie en proposait quatre.** Les deux
  écartés existent, leurs textes sont ouverts et lus, et ils attendent : « Agréger des
  préférences » n'aurait porté qu'une carte (Arrow 1948, rapport RAND ouvert, OCR dégradé), et
  « Chercher une solution plutôt que la calculer » repose sur deux textes du même trio d'auteurs
  sur le même programme, dont la cartographie dit elle-même qu'un seul concept devrait en sortir.
- **Le domaine n'a aucune signature féminine.** À surveiller et à porter au prochain passage, pas
  à corriger par quota.
- **Cinq des huit cartes reposent sur le même exemplaire numérisé**, le recueil de 1988. C'est la
  faiblesse structurelle du lot, déclarée dans les `notes` des cinq fiches.
