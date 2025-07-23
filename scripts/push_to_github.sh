#!/usr/bin/env bash
set -e
if [[ -z "$GITHUB_TOKEN" || -z "$GITHUB_REPO" ]]; then
  echo "GITHUB_TOKEN and GITHUB_REPO env vars required" && exit 1
fi
# Initialise git (if not already)
if [ ! -d .git ]; then
  git init
  git checkout -b main
fi
# Add all and commit if there are changes
if ! git diff --quiet || ! git diff --staged --quiet; then
  git add .
  git commit -m "Automated commit via push script" || true
fi
# Add remote if absent or update
if ! git remote | grep origin > /dev/null; then
  git remote add origin https://$GITHUB_TOKEN@github.com/$GITHUB_REPO.git
else
  git remote set-url origin https://$GITHUB_TOKEN@github.com/$GITHUB_REPO.git
fi
# Push
REF=${1:-main}
git push -u origin "$REF"