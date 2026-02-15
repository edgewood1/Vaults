![enter image description here](https://i.stack.imgur.com/zBb51.png)



**THREE FORMS OF UPDATE**



| command            | meaning                                                      |
| ------------------ | ------------------------------------------------------------ |
| git pull           | fetch + merge                                                |
| git pull --rebase  | Fetch + rebase                                               |
| git rebase         | no fetch + rebase                                            |
| git fetch          | get all recent commits, but don't merge.  Cherrypick / fast forward, etc |
| git merge          | get all commits + merge (commit)                             |
| git pull --ff-only | fetch and fastforward - no new commits                       |
|                    |                                                              |
|                    |                                                              |

**git pull --rebase vs --ff-only**

`--rebase` can permanently mutate the history of your current branch, and often it does it without asking.

The following represents diverged branches, so we can't ff

remote: A B C

Local: A B D

--rebase: A B C D // local's history has changed

--ff-only: it would see the different history and stop

git pull: A B D E(containing BC) >> stacks newest changes on top of my work

https://stackoverflow.com/questions/64846230/is-it-better-to-use-git-pull-rebase-than-git-pull-ff-only

**Whats the difference between git pull and git merge**

git merge master

git pull master  

**Fetch**

You can fetch multiple branches by name...

```js
git fetch origin master stable oldstableYou can merge multiple branches...
```

```
js git merge origin/master hotfix-2275 hotfix-2276 hotfix-2290
```

 **Fetch Flags** 

—-prune  // Look at local branches set to remote and check to see if they still exit.

 fetch -- syncs origin/master w/ the remote 
      origin/master - our cached version of remote
      master is left alone - 
      - allows you to see what's different.. 

git fetch --p (or -prune) auto delete remote tracking branches if the branch they track is deleted





Fetch

doewnloads contents from a remote repo
this info is isolated from existing local content (local dev work)
this info has to be checked out using the git checkout command
safer than git pull, which creates a merge commit 

you repo has a `./.git/objects` irectory
git stores all local and remote commits here. 

refs for local branches arehere: ./.git/refs/heads/

`git branch` will ouput demo branch names

remote branches map to somebody else's repo 
local branches map to your own

remote branch refs live here: ./.git/refs/remotes/

access them with this: git branch -r

to distinuish between remote / local: 

origin/main ~ local
Remote-repo/main ~ remote

you can checkout a remote, but this detaches the HEAD
they are read only essentially.  
checkout -b to pass them into your own local branch.

two ways to inpste remote branches

- git checkout
- git log

| command                    | effect                                         |
| -------------------------- | ---------------------------------------------- |
| git fetch <remote>         | gets all branches from repo                    |
| git fetch <remote><branch> | only fetch specifiecd branch                   |
| git fetch --all            | gets all registered remotes and their branches |
| git fetch --dry-run        |                                                |
|                            |                                                |
|                            |                                                |

https://www.atlassian.com/git/tutorials/syncing/git-fetch#:~:text=In%20review%2C%20git%20fetch%20is,of%20collaborative%20git%20work%20flows.
