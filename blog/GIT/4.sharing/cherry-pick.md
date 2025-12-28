git cherry pick multiple

How to cherry-pick multiple commits

How to undo a successful “git cherry-pick”?

Multiple commits cherry-picking

managing datasets
-======

checkout 6.1
find commit

in master

git cherrypick commit from 6.1

// ensure we are in the master branch

git checkout master

git cherry-pick d8241907ddb7d50de3aca810407b609551e9b06c

checkout remote branch
- fetch remote branches
- fetch grabs the refs (remote names) but not their contents

checkout branch
git checkout -b branchxyz origin/branchxyz

git checkout -b 6.0 origin/6.0

find branches the commit is on 

git branch -a --contains d8241907d  // shows commits in history

git reflog show --all | grep d824190 // repos 

940fae00f7bc994fe431f49492204b39f0c3125e

========

cherry picking

your in the new checked out branch  

git cherry-pick -x commit-hash

check to see if it works in editor

if it fails / fix and ommit to 60 branch

54 adn 60 more same than 60 and master

cherry pick 54 change to 60

git reset HEAD-2 - if it fails miserably // 

git push to remote

takes it from master

-x /// creates an audit trail of commit - keeps same commit msg and then w/ x flag adds lists 

fish shell

alias gpc = xyz
func save
config home . 

checkout 60
cherry pick from master

mayhave to pick into 54 / 60

push to remove


notes

each commit is a diff

squahs commits before pushing to repo if too many commits

it takes 3 commits and make into 1 - done before pushing it up to github 

branching strategy

squash merge

rebase and merge

merge conflicts / poorly resolved // 
rebase - delete merge commit - merge again