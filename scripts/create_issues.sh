#!/usr/bin/env bash
set -euo pipefail

echo "Creating labels (idempotent)..."
gh label create blocker --color d73a4a --description "Blocks launch" 2>/dev/null || true
gh label create high    --color fbca04 --description "High priority" 2>/dev/null || true
gh label create medium  --color 0e8a16 --description "Medium priority" 2>/dev/null || true
gh label create polish  --color cfd3d7 --description "Polish / UX" 2>/dev/null || true

echo "Creating issues from ./issues/*.md ..."
for file in ./issues/*.md; do
  [ -e "$file" ] || continue
  title="$(grep -m1 '^# ' "$file" | sed 's/^# //')"
  label="$(grep -m1 '^Labels:' "$file" | awk '{print $2}')"
  body="$(awk 'NR>3' "$file")"   # skip title, blank, Labels line, blank
  echo " -> $title [$label]"
  gh issue create --title "$title" --label "$label" --body "$body"
done
echo "Done."
