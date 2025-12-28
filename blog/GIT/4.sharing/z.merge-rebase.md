

**What does Rebase do?** 

It grabs all the newest commits from master
it inserts them before the newest commits on feature

- Master > a b c **45**   <--- 4 + 5 are new commits on master
- Feature > a b c 1 2. <----- 1 + 2 are new commits on feature
- from feature, rebase master: a b c 4 5 1 2 <----- new master commits inserted before new feature commits

**How to do it?**

```
checkout feature
git rebase master
```

**So history has changed, and it will not merge, so:** 

`git push -f` >> 

`git push -- force` >> rewrites, even others unreconciled contributions

`Git push --force-with-lease` >> rewrites only if no one else has contributed 

* if sharing this branch with another, let them know about the changed history
* so they can rebase

**Whats the difference between git pull --rebase and git rebase master?**

| command                  | effect            |
| ------------------------ | ----------------- |
| git rebase               | no fetch + rebase |
| git pull --rebase master | fetch + rebase    |

**What's the difference between "git pull --rebase master" and git pull --rebase origin master ?** 

**What's hte difference between master and origin master**

**What are the 2 trees? remote and local.** 



| command          | effect                                                       |
| ---------------- | ------------------------------------------------------------ |
| origin           | remote repo                                                  |
| 1. origin master | remote repo / master branch                                  |
| 2. origin/master | a local pointer to remote repo: .git/refs/remotes/origin/master (doesn't contain commits) |
| 3. master        | local repo / master branch. (contains commits)               |

- 2 needs to be updated with 1
- 3 needs to be updated with 2

git fetch master - updates 2 with 1, so they share the same refs
git merge - merges 1 into 3 

 origin/master - what your repo thinks is the current latest branch b/c master could be out of date

| remote repo   | local repo | index | working dir |      |
| ------------- | ---------- | ----- | ----------- | ---- |
| origin master | master     |       |             |      |
|               |            |       |             |      |
|               |            |       |             |      |
|               |            |       |             |      |

working dir - make changes
git add - place in index
git commit - places it in master branch; this is now ahead of origin/master by 1 commit

- git fetch - origin/mix-panel appears // this is just a pointer to the set of commits fetched
- git checkout mix-panel // this is the same set of commits, but when changed, and committed, the "branch" will differ from the origin/mix-panel, which reflects the prior state.  If we push changes, the remote is updated, but we still need to "git fetch" again to update origin/mixpanel.  
- uptodate with origin/mix-panel
- make a change to workign directory
- add to index
- commit to mix-panel branch
- now mix-panel is one ahead of origin/mixpanel by 1 commit.
- if I push the commit to the origin mix panel, then I update the the remote
- will origin/master still be behind? would I have to git pull? 



**These won't work - why?**

git pull --rebase master

git pull --rebase origin master

From local branch master: 

```
git fetch # get current state of remote repository
git merge origin/master # merge state of remote master branch into local branch
	
git push origin master # push local branch master to remote branch master
```

git fetch origin master

` - gets current state of remote repo

- doewnloads content into local repo (like git pull)
- stores the data in ./.git/objects
- won't update you local repo's working state, leaving gurrent work intact (unlike git pull)

`git merge origin/master` 

- updates master with remote repo (held in origin/master)
- reference to the download accomplished by fetch, being held in a file
- merge updates the branch with this content  git fetch origin master



process for merging origin/main branch

| command                | effect                                                      |
| ---------------------- | ----------------------------------------------------------- |
| git fetch origin main? | fetch main from remote origin; local copy named origin/main |
| git merge origin/main  | merges origin/main into main                                |
| git push origin main   | pushes new changes in main to origin                        |
|                        |                                                             |

'**Merge conflict?**

- Git rebase master
- could not apply commit X
  - gitbase --abort > undo rebase
  - git rebase --skip > skip this commit
- fix the conflict
- git rebase--continue

**Conflict markers**

head = base-branch (master)

<<<<<<<HEAD
====== >>>>>> branch-a

The meaning differs for merge / rebase

base branch - fixed // current changes / old
Feature branch - commits changing over // incoming changes / new

**Merge**

In your case, a merge, where:

- current change represents what you have (the destination of the merge)
- incoming change represents what you merge (the source of the merge)

Then:

- Option 1 ("Accept Incoming changes") would ignore completely what you had, and keep what you merge.
- Option 2 ("Accept current changes") would ignore completely what you merge, and keep what you had.

**Divergent Branches**

On branch os-765-stagesteps
Your branch and 'origin/os-765-stagesteps' have diverged,
and have 11 and 10 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

11 and 10 refer to

Master: a b +10 commits not on feature

Feature: a b + 11 commits not on master

How to handle divergent branches



https://salferrarello.com/git-warning-pulling-without-specifying-how-to-reconcile-divergent-branches-is-discouraged/



https://stackoverflow.com/questions/61212/how-do-i-remove-local-untracked-files-from-the-current-git-working-tree

https://devconnected.com/how-to-unstage-files-on-git/#:~:text=In%20order%20to%20unstage%20all,back%20to%20your%20working%20directory.

https://bluecast.tech/blog/git-stash/



**mergin in a single file**

 had the exact same problem as mentioned by you above. But I found [this](http://jasonrudolph.com/blog/2009/02/25/git-tip-how-to-merge-specific-files-from-another-branch/) clearer in explaining the answer.

Summary:

- Check out the path(s) from the branch you want to merge,

  ```
   $ git checkout source_branch -- <paths>...
  
  Hint: It also works without `--` like seen in the linked post.
  ```

- or to selectively merge hunks

  ```
   $ git checkout -p source_branch -- <paths>...
  ```

Alternatively, use reset and then add with the option `-p`,

```
    $ git reset <paths>...
    $ git add -p <paths>...
```

- Finally commit

  ```
   $ git commit -m "'Merge' these changes"
  ```

