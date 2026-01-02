Three trees 

- the commit history (Head) - what is commited to history
- staging index - what is saved for commit
- working directory - what I see in VS code. 

A	B	C	D

RESET 

- update your branch, moving tip in order to add / remove commits from branch.  changes commit history.  can also be used to restore index.  
- reset goes back to a previous state by removing subsequent commits.
- moves the head back into time / rewinds head in history. 
- reset moves your pointer to a past commit.  This removes revert commit from history. 



REVERT

- creates a new commit E that is essentially the same as commit C 
- revert doesn't change project history - this is safe if commits already shared.
- reset only works backward from current commit BUT revert targets one commit at any point.

This creates a commit E that mirrors C

```
git revert D
```

This creates a commit E that removes everything contributed by C, and if D relies on C, then a merge conflict will occur

```
git revert C
```

REVERT PART 2

​		git checkout <commit-id> .	// the final period prevents a detached head state
​		git add . , git commit -m 'reverting' etc. 

RESTORE - doesn't change the branch

- does not create a new commit, but instead returns working tree back to most recent commit D
- we typically restore all files (via .) or a single file. 

 

differences: https://stackoverflow.com/questions/58003030/what-is-git-restore-command-what-is-the-different-between-git-restore-and-git#:~:text=git%2Drestore%20is%20about%20restoring,the%20index%20from%20another%20commit.

**KINDS OF RESET**

https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git/

**undo your commit but leave your files and your [index](https://git.wiki.kernel.org/index.php/WhatIsTheIndex)**:

```js
git reset --soft HEAD~1
```

**undo the commit but keep your changes**

```
git reset HEAD~1
```

**destroy commit C and also throw away any uncommitted changes**.

```
git reset --hard HEAD~1
```

**Undo staging, ie undo most recent local commit**

```
git reset HEAD~
```

```
`git reset HEAD~ <filename>`  
```

undo staged files

Undo `git add` for uncommitted changes with:

```
git reset <file>
```

That will remove the file from the current index (the "about to be committed" list) without changing anything else.

------

To unstage all changes for all files:

```
git reset
```

git restore --staged <file>

**git reset arg1 arg2 arg3**

**arg1**: flag ~ what kind of reset? 

--hard > delete commit from

- working
- staging
- repo

--mixed > delete commit from

- NOT working
- staging
- repo

--soft > delete commit from 

-  NOT working or staging
-  repo only 

**Arg2:** to what commit should we rewind? (use HEAD or specific commit)

HEAD-1 > refers to commit before the current revision (commit)

**Arg3:** a particular file

`git reset HEAD fix.txt`

- remove a single file from the staging area only

**Notes**

- if you reset to 3 commits ago, it will delete 2 and 1 and 0 commits ago.

- 

An important note is that the index/cache/stage contains a list of ALL files under source control, even unchanged ones. 

**Undo push**

```
git push -f origin last_known_good_commit:branch_name
```

