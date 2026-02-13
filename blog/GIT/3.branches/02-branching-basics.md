# Branching & Navigation

## 1. What is a Branch?
- A branch is simply a movable **pointer** to a specific commit.
- **HEAD**: A special pointer that indicates the *current* branch/commit you are working on.

## 2. Managing Branches
### View & Create
```bash
# List local branches
git branch

# List all (local + remote)
git branch -a

# List remote branches only
git branch -r

# Verbose (shows hash and subject)
git branch -v

# Create a new branch (does not switch to it)
git branch <branch-name>
```

### Delete
```bash
# Safe delete (must be merged)
git branch -d <branch-name>

# Force delete
git branch -D <branch-name>

# Delete remote branch
git push origin --delete <branch-name>

# Prune stale remote tracking branches (cleans up origin/xyz refs that no longer exist on remote)
git remote prune origin
```

## 3. Switching & Checkout
```bash
# Switch to an existing branch
git checkout <branch-name>

# Create AND switch to a new branch
git checkout -b <branch-name>

# Checkout a remote branch (creates local tracking branch)
git checkout --track origin/<branch-name>
```

### Detached HEAD
Occurs when you checkout a specific commit hash instead of a branch name.
- You are viewing the repo at a past state.
- Commits made here are "headless" and will be lost unless you create a branch to save them.
- **Fix**: `git checkout -b <new-branch-name>` to save current state to a branch.

## 4. Remotes & Tracking
### Origin Master vs Origin/Master
- **`master`**: Your local branch.
- **`origin/master`**: A local read-only reference to the state of `master` on the remote named `origin`.
- **`origin master`**: Used in commands (e.g., `git push origin master`) to say "Push to the remote 'origin' on branch 'master'".

### Upstream Tracking
Links a local branch to a remote branch for easier `pull`/`push`.
```bash
# Set upstream for current branch
git push -u origin <branch-name>
```
