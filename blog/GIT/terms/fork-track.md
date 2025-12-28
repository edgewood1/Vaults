`SIGNALS`

behind in commits

- people have been adding to the remote, so do git pull!
- you can't push because divergent histories

ahead in commitsm

- you haven't pushed in a while - git push!
- origin histories are the same - you have just extended it. .

`TERMS `

origin - the default name for remote server repo from which you clone from
master - the default name for the main local / remote branch on this repo

Un/tracked files – files are untracked by version control unless “marked” by “git add .”
Org Repo – this is a space where many remote repos can feed into.  

 Head - label for which commit is currently in play

branch - most recent commit in a particular branch

**FORK** – we make a copy of someone’s REMOTE repo
CLONE -  we have a remote repote and we copy it to our local computer / working copy.  If we want to save our revisions, we ADD, COMMIT, PUSH to the remote / origin
PULL REQUEST – we ask someone associated with org repo (or repo we have forked from) to accept wour changes to the copy and MERGE it with the rest.. 

 Fork / clone – makes a copy of original
Fork – to clone on the actual web site (server side) not on your local machine. – copies the repo to your github account, making it appear under the list of your repos. 
Clone – to clone onto your actual machine.  Downloads a copy of the repo to your local machine
No difference between the two.  A nickname for server-side clone

 

1.	Clone
   a.	You have duplication / searpeation between two versions of a repo.  If one repo is changed, the new info must be copied to the other repo using a push command.  Changes in the other repo are fetched.
   b.	Can’t contribute back to upstream repo unless you are explicitly declared as a contributor.  Your clone is a separe instance of that project
2.	Fork
   a.	Changes in origin repo auto reflected in fork.
   b.	My contributions require a pull request .
   c.	My commits are to that repo on MY account, which remains separate.
   d.	Since its your account you can push all you want.
   e.	If you want to contribute to original repo, then create a “pull request”




 `QUESTIONS`

differences: origin/master AND origin master

difference between clone and fork is that fork requires permissions before merging? 



 git directory	this tracks folder as a git repository
forked file	creating your remote repo that is copied / cloned from someone else's repo
	
tracked files	has been commited
untracked files	added since last commit
organziation	An organization is a collection of user accounts that owns repositories. Organizations have one or more owners, who have administrative privileges for the organization.

 http://gitready.com/beginner/2009/01/25/branching-and-merging.html


https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git/

https://sethrobertson.github.io/GitFixUm/fixup.html#remove_last



**Tracking**

----

setting a trackign relationship to a branch

**checkout a remote branch - tracks remote** 

$ git checkout --track origin/dev

Then, create a new local branch with same name - this directly establishes a tracking connection between the two.


 

**If you start a new local branch and want to publish it to remote for first time:**

$ git push -u origin dev

-u > this flag tells git to track the newly created remote 

 

 
