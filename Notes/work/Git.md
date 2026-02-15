# Git

X y
Revert y creates z which mirrors x

git reset --hard
 This changes all tracked files to match the most recent commit.

Staging.  Fit add
Process of creating a snapshot

The distinction between the working directory, the staged snapshot, and committed snapshots is at the very core of Git version control.

git clean -f
 This will remove all untracked files. With dummy.html gone, git status should now tell us that we have a “clean” working directory, meaning our project matches the most recent commit.

Be careful with git reset and git clean. Both operate on the working directory, not on the committed snapshots. Unlike git revert, they permanently undo changes, so make sure you really want to trash what you’re working on before you use them.

The git reset command undoes changes to the working directory and the staged snapshot, while git revert undoes changes contained in commuted snapshots



