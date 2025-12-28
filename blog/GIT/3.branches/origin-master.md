What's the difference "origin master" and "origin/master"?

Remote repo

Origin - a remote repository that team uses

Local repo

master - an initial branch; a default branch.  if a new repo is created in git, master is the default branch.

origin/master 

- a remote-tracking branch (or is it just a pointer to the remote branch?)
- exists locally and tracks the master branch on the remote repo ("origin") 
- git fetch origin master - this gets the remote master branch and saves it as "origin/master"
- git merge origin/master - this merges origin/master to master
- git push origin master - this pushes code from local master to remote rpo 

two

- git fetch origin - get origin
- git rebase origin/master - rebase changes to your branch
- git push origin master - push the local master branch to the remote repo

three

git remote -r : shows a list of all origin repos saved locally

- Origin/branch-name

Commands

git push <remote> <branch>

git push origin master - pushes your master branch to the origin repo

git pull <remote> <branch>

git pull origin master ---

-  