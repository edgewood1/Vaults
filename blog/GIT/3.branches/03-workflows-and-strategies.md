# Branching Strategies & Workflows

## 1. Common Strategies

### GitHub Flow
- **Simple & Continuous**: Best for web apps with frequent deployments.
- **Master/Main**: Always deployable.
- **Feature Branches**: Create for every new feature/fix.
- **Pull Request**: Open PR to merge feature into master. Review happens here.
- **Merge**: Merge to master and deploy immediately.

### Git Flow
- **Structured**: Good for versioned software releases.
- **Master**: Production ready history.
- **Develop**: Integration branch for features.
- **Feature Branches**: Branch off `develop`, merge back to `develop`.
- **Release Branches**: Branch off `develop` (e.g., `release/1.0`). Polish/Bugfix here. Merge to `master` (tag v1.0) AND `develop`.
- **Hotfix**: Branch off `master` to fix prod bugs. Merge to `master` and `develop`.

## 2. Merging Methods

### Merge Commit (Standard)
`git merge <feature>`
- Preserves history and branch structure.
- Creates a "merge commit" tying two histories together.
- Good for tracing when a feature was integrated.

### Squash & Merge
- Combines all commits from the feature branch into **one single commit** on the target branch.
- Keeps history clean (one commit per feature).
- Loses individual commit history within the feature.

### Rebase
`git rebase master` (while on feature branch)
- Rewrites history. Moves the feature branch commits to sit *on top* of the current master.
- **Linear History**: No merge commits.
- **Danger**: Do not rebase public/shared branches. It changes commit hashes.

## 3. Advanced Operations

### Cherry Pick
Apply a specific commit from one branch to another.
```bash
git cherry-pick <commit-hash>
# Useful for applying a hotfix from master to a release branch
```

### Handling Pull Requests (Locally)
To test a PR locally before merging:
```bash
git fetch origin pull/<id>/head:<local-branch-name>
git checkout <local-branch-name>
```