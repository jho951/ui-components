#!/usr/bin/env bash
set -euo pipefail

REMOTE="${1:-origin}"
MAIN_BRANCH="${2:-main}"
DEV_BRANCH="${3:-dev}"

SYNC_BRANCH="release/sync-main"
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$CURRENT_BRANCH" != "$SYNC_BRANCH" ]]; then
  echo "error: current branch is '$CURRENT_BRANCH'. switch to '$SYNC_BRANCH' first."
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "error: tracked changes detected. commit or stash first."
  exit 1
fi

echo "[1/5] fetch latest branches from $REMOTE"
git fetch --prune "$REMOTE" "$MAIN_BRANCH" "$DEV_BRANCH"

echo "[2/5] merge $REMOTE/$MAIN_BRANCH into $SYNC_BRANCH"
git merge --no-edit "$REMOTE/$MAIN_BRANCH"

# Keep this commit as the source of truth for files that must stay out of main.
KEEP_REF="$(git rev-parse HEAD)"

echo "[3/5] merge $REMOTE/$DEV_BRANCH into $SYNC_BRANCH"
git merge --no-edit "$REMOTE/$DEV_BRANCH"

echo "[4/5] restore files that must follow $SYNC_BRANCH policy"
git restore --source "$KEEP_REF" --staged --worktree package.json

echo "[5/5] remove Storybook-only paths from sync-main"
git rm -r --cached -q --ignore-unmatch storybook .storybook apps/storybook storybook-static
rm -rf storybook .storybook apps/storybook storybook-static
git add -A

echo
echo "done: dev changes merged with Storybook paths removed."
echo "next:"
echo "  git status"
echo "  git commit -m \"sync: merge $DEV_BRANCH without storybook\""
echo "  git push $REMOTE $SYNC_BRANCH"
