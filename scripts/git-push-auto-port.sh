#!/usr/bin/env bash
set -euo pipefail

# Uso: ./git-push-auto-port.sh [remote] [ref]
# Ex: ./git-push-auto-port.sh origin main
REMOTE=${1:-origin}
REF=${2:-$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo HEAD)}
TIMEOUT=${GPA_TIMEOUT:-2}
# Lista de portas a testar — altere conforme necessário
PORTS=${GPA_PORTS:-"22 443 2222 8022 10022"}
# Obter URL e host do remote
URL=$(git remote get-url "$REMOTE" 2>/dev/null || true)
if [[ -z "$URL" ]]; then
  echo "Não foi possível obter URL do remote '$REMOTE'. Passe o host como GIT_HOST ou informe corretamente o remote."
  exit 1
fi

# Extrair host de possíveis formatos: git@host:repo.git  ou  ssh://git@host:port/repo.git
if [[ "$URL" =~ ^git@([^:]+): ]]; then
  HOST="${BASH_REMATCH[1]}"
elif [[ "$URL" =~ ^ssh://([^@]+@)?([^:/]+) ]]; then
  HOST="${BASH_REMATCH[2]}"
else
  echo "Formato de URL não reconhecido: $URL"
  exit 1
fi

check_port() {
  local host=$1 port=$2 timeout=$3
  if command -v nc >/dev/null 2>&1; then
    nc -z -w "$timeout" "$host" "$port" >/dev/null 2>&1
    return $?
  else
    # Fallback usando /dev/tcp (bash)
    (echo > /dev/tcp/"$host"/"$port") >/dev/null 2>&1
    return $?
  fi
}

FOUND_PORT=""
for p in $PORTS; do
  if check_port "$HOST" "$p" "$TIMEOUT"; then
    FOUND_PORT=$p
    break
  fi
done

if [[ -z "$FOUND_PORT" ]]; then
  echo "Nenhuma porta encontrada na lista: $PORTS (host: $HOST)"
  exit 2
fi

echo "Porta detectada: $FOUND_PORT — executando git push $REMOTE $REF"
GIT_SSH_COMMAND="ssh -o ConnectTimeout=${TIMEOUT} -p ${FOUND_PORT}" git push "$REMOTE" "$REF"

Porta detectada: 443 — executando git push origin main
Connection closed by 4.228.31.150 port 443
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
