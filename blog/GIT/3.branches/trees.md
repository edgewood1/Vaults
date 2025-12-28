`FIVE TREES: STASH < (1) WORKING > (2) STAGING > (3) COMMIT/LOCAL > PUSH UPSTREAM/REMOTE`

Three stages

- working directory - what you see in the editor / saved or not
- staged snapshot (index) -   confirmed registed changes (pre-commit)
- repo - commited / history 

WORKFLOW

1. in working, make changes
2. stage changes
3. keep working ... re-stage
4. when stopping place commit / push if you want to share

**WORKING > STAGING**

add .             | stages file // moves it from working 
add <filename>    | same "changes to be committed"
****

rm --cached <filename> | deletes file from staging

reset HEAD <file>  |  unstages file

**STAGING > REPO**

commit -m "message" | staging-index > local repo (snapshot taken) / moves pointer to the 'last commit'

commit <filename> -m "msg" | commit only one file

git reset --soft HEAD^ | undoes commit leaving all else in tact

git reset HEAD^ | undo commit + staging but leave working in tact

git reset --hard HEAD^ | undoes all 3

**LOCAL > REMOTE**

push                          | moves from local to remote repo
push <repo_name> <branch_name> || save working directory of <branch_name> to remote  <repo_name>

push -u <repo><branch> | push + track / publish a new local branch 

push <repo> :<branch>  | deletes remote branch ??? 

push <repo> --delete <branch> | same as above

- 

1.  
