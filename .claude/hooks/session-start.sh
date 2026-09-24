#!/bin/bash
# Installe les dépendances au démarrage d'une session distante.
#
# Pourquoi ce hook existe : le conteneur d'une session Claude Code sur le web
# est recréé à neuf et « node_modules » est ignoré par git, donc absent. Le
# serveur MCP « documentary » est lancé par le harnais au démarrage et importe
# « @modelcontextprotocol/sdk » : sans installation préalable il échoue sur
# ERR_MODULE_NOT_FOUND, et la session le voit comme « Connection closed ».
#
# Ce hook est donc volontairement SYNCHRONE. En mode asynchrone l'installation
# courrait contre le lancement du serveur MCP, qui est précisément la course
# que ce hook existe pour supprimer.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}"

# Idempotent : npm install ne refait rien quand l'arbre est déjà à jour, ce qui
# rend le hook peu coûteux sur un conteneur déjà chaud.
npm install --no-audit --no-fund

# Le corpus se valide sans dépendances, mais les tests, le lint, le build et le
# serveur MCP en ont besoin. On vérifie la seule dont l'absence est silencieuse.
node -e "import('@modelcontextprotocol/sdk/server/mcp.js').then(()=>console.log('documentary MCP : dépendances présentes'))"
