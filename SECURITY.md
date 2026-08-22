# Politique de sécurité

## Périmètre

Curiosity est une application statique (export Next.js) sans serveur applicatif, sans
compte utilisateur et sans base de données : le seul état persistant est stocké
localement dans le navigateur du lecteur (`localStorage`), et se limite à la liste des
identifiants des cartes déjà lues. Il n'y a donc pas de données personnelles ni de
secrets applicatifs à protéger côté serveur.

Le pipeline documentaire (`scripts/mcp/`) s'exécute en local pendant le développement et
n'est pas déployé ; il n'est pas exposé publiquement.

## Signaler une vulnérabilité

Si vous découvrez une vulnérabilité de sécurité — par exemple une faille XSS dans
l'application publiée, une dépendance vulnérable, ou un problème dans le service worker
ou le manifeste PWA — merci de la signaler en privé plutôt que par une issue publique.

Contactez **ribesjeremy@gmail.com** avec :

- une description du problème et de son impact potentiel ;
- les étapes pour le reproduire ;
- si possible, une suggestion de correctif.

Une réponse est visée sous 7 jours. Le correctif, une fois validé, est publié et la
personne ayant signalé le problème est créditée si elle le souhaite.

## Versions supportées

Ce projet n'a pas de politique de versions multiples : seule la branche `main`, servie
en production, est maintenue.
