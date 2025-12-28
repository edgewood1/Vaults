Mels-MBP:songs meldejesus$ git branch --set-upstream-to=origin/master master
Branch 'master' set up to track remote branch 'master' from 'origin'.

Your branch and 'origin/master' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

Yet git pull doesn’t work
fatal: refusing to merge unrelated histories

git pull origin master --allow-unrelated-histories
git merge origin origin/maste


creates merge conflicts

 


`MIS-MATCHED COMMIT HISTORIES`

If my local repo has a different history than the remote

1. get remote tracking history:
   `git fetch origin master`

2. integrate this tracking history into your local history
   `git rebase origin/master`

3. Resolve all conflicts manually, mark them as resolved with
   `git add/rm <conflicted_files>`

4. run 

   `git rebase --continue`
   You can instead skip this commit: run 

   `git rebase --skip`
   To abort and get back to the state before "git rebase", run 

   `git rebase --abort`


3. push local to remote

if: fatal: refusing to merge unrelated histories
      git pull --allow-unrelated-histories
