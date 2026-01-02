# Undoing Changes & Resetting

## 1. Amending Commits
Used to fix the *most recent* commit (e.g., forgot a file or typo in message).
```bash
git add .
git commit --amend -m "New correct message"
```

## 2. Restore (Working Tree)
Discards local changes without creating a commit.
- **Discard changes in file**: `git restore <file>` (Makes file match HEAD).
- **Unstage a file**: `git restore --staged <file>` (Moves changes from Index back to Working Directory).

## 3. Reset (Time Travel)
Moves the HEAD pointer to a previous commit.

`git reset <flag> <commit>`

| Flag | Working Dir | Staging Index | Repo History | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| `--soft` | Kept | Kept | Ref Moved | Undo "commit" command only. Changes stay staged. |
| `--mixed` | Kept | **Reset** | Ref Moved | Undo commit & staging. Changes stay in file. (Default) |
| `--hard` | **Reset** | **Reset** | Ref Moved | **Destructive**. Throws away all work. |

### Common Reset Commands
- **Undo Staging**: `git reset HEAD <file>`
- **Undo Last Commit (Keep work)**: `git reset HEAD~1`
- **Destroy Last Commit**: `git reset --hard HEAD~1`

## 4. Revert (Safe Undo)
Creates a *new* commit that mirrors the opposite of the target commit.
- **Safe for public history**: Does not rewrite history, just adds to it.
- **Target specific commit**: Can revert a commit from deep in history, not just the last one.

```bash
git revert <commit-id>
# If reverting a merge commit:
git revert -m 1 <commit-id>
```

## 5. Undo Push
If you pushed bad code, you can reset locally and force push (dangerous on shared branches).
```bash
git reset --hard <good-commit>
git push -f origin <branch-name>
```

## 6. Cleanup: Deleting Branches

### Local
```bash
# Safe delete (checks for merge)
git branch -d <branch-name>

# Force delete
git branch -D <branch-name>
```

### Remote
```bash
git push origin --delete <branch-name>
```
