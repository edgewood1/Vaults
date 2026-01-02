git

There are two repositories.

1. Local (on your computer - in the .git folder)

- git add / commit > index / HEAD

2. Remote (on the github server, accesible by anyone)

- git push

**show a list of commits with corresponding id's (SHA-1 HASH), log message, date, etc.**

git log

**use the hash key to: - check it out - create a new branch (-b) and name it so that you can later dump the old commit into:**

git checkout <sha-key> -b test

**Three Git trees**
first two stored in .git files
HEAD - last commit / current branch reference / git commit
Index - proposed next commit / staging area / git add
Working Direcotry - sandbox - files unpacked into files for editing

git checkout brings head info vak to WD
when checking out a branch, the HEAD points to the new branch, populates the index with snapshot of that commit, then copies content of index to working directory

git reset

1. it moves the branch that HEAD points to (vs. changing HEAD itself, which is what checkout does)
2. so if HEAD points to master branch (b/c yr on master), git reset <hashkey> will point head to a different branch, like a previous version.

git reset --soft (stops here) > it essentially undoes the last git commit. it makes the branch pointed to the new HEAD. yet index and wd stay same.

3. run update the index and run /git commit/
4. next, git will update index with contents of HEAD. if you run git reset --mixed, it stops here. this essentially unstaged your last stage. you rolled back to before tyou ran git add / git commit.

5. finally, reset will make WD look like index - it will go to this stage if you do git reset --hard , so this undid git add, commit, and work in wd. only --hard will destroy data.

stop - reset with path

https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified

**Another way to move to a previous commit?**

"git reset" is the opposite of "git add" / "git commit" processs

git reset —hard sha-key

**if you want to delete this test branch, first, checkout a different branch:**

git checkout google-places-ajax

**then, delete the branch:**

git branch -d test

**if you want add all the code from someone else’s branch into yours, checkout your branch, and merge their branch into yours:**

git merge <their-branch-name>

ADDING TO YOUR LOCAL REPO

if you want to “stage” your work:

git add .

if you want to commit your work:

git commit -m “your message-label”

if you want to push your commit to a branch:

git push <remote-server-name> <branch-to-send>

git push origin master

- origin - an alias that refers to the remote repo we've currently assigned as our target. How do we do this?

- master - our local main branch.

git push heroku master -- we push our master branch to the heroku server

git push origin test - we push our 'test' branch to which ever remote server we've set to 'origin'

**BRANCHING**

A repo consists of various branches, each branch containing various commits.

repo > branches > commits

We have our local repo and our remote repo.

git branch - you can see all local branches

see all the remote branches:

git remote show <remote-name>
git remote show origin stop

When we checkout a branch,

1. working tree files match the index / specified tree
2. if not path given, it updates HEAD to set specified brannch as current branch.
3. in short, it updates the index and wd and points HEAD at the branch. local changes are kept so they can be committed to new branch.

**REMOTE**

git remote - shows all remote servers configured

if youve cloned your repo, you will have an "origin" repo - default name to server cloned from.

git remote -v / shows URLS that git has stored for shortname to be used when reading

you can have multiple remotes, which allows you to pull contributeions from any of these users. we may / not have permission to push to these.

git remote add <alias> <url>

git fetch pb - get all info pb has in repo, but you don't. this can be merged or open it in a new branch.

git pull = git fetch + git merge

if you want the info from else where, but DON't want to merge it - just see it? do a fetch

git remote add
How do you track a remote branch?
There are three main scenarios for creating a tracking connection.
When you're starting to work on an existing remote branch
Let's say one of your colleagues has already started and published a branch on your remote server. You now want to chime in and start working on that topic, too. In that scenario, simply use the --track flag with the "git checkout" command:
$git checkout --track origin/dev
Branch dev set up to track remote branch dev from origin.
Switched to a new branch 'dev'
This creates a new local branch with the same name as the remote one - and directly establishes a tracking connection between the two.
When you're publishing a local branch
Let's now look at the opposite scenario: you started a new local branch and now want to publish it on the remote for the first time:$ git push -u origin dev
You can tell Git to track the newly created remote branch simply by using the -u flag with "git push".
When you decide at a later point in time
In cases when you simply forgot, you can set (or change) a tracking relationship for your current HEAD branch at any time:
\$ git branch -u origin/dev

Tracking connections

(a) if you have 2 commits only locally that you haven't pushed to the remote yet, your local branch is "2 commits ahead" of its remote counterpart branch.
(b) if, on the other hand, there are 4 commits on the remote branch that you haven't downloaded yet, then your local branch is "4 commits behind" its remote counterpart branch.

**FORKING?**

o roll back commits on your protected master branch:
`git revert 639713d`

That can also be a list of commit hashes separated by spaces, like: `git revert 639713d 48fdfdc db381a5` (edited)

If the commit you're reverting was a "merge commit", then you have to add `-m` followed by a number counting back to the previous commit that you want to be the new parent, like:
`git revert 9acff57 -m 1`

Kevin Collins [11:44 AM]
That creates a new commit that reverses the earlier ones you want to undo
then you can create a new branch and push up those reverts: `git checkout -b reverting-bad-stuff`
then `git push -u origin reverting-bad-stuff`
then create a pull request on that reverting-bad-stuff branch, and github will allow it to be merged back to master

- To delete a local branch, whether tracking or non-tracking, safely:git branch -d <branchname>
-
- To delete a local branch, whether tracking or non-tracking, forcefully:git branch -D <branchname>
-
- To delete a remote-tracking branch:git branch -rd <remote>/<branchname>
-
- To create a new local non-tracking branch:git branch <branchname> [<start-point>]
-
- To create a new local tracking branch: (Note that if <start-point> is specified and is a remote-tracking branch like origin/foobar, then the --track flag is automatically included)git branch --track <branchname> [<start-point]
- Example:git branch --track hello-kitty origin/hello-kitty
-
- To delete a branch on a remote machine:git push --delete <remote> <branchname>
-
- To delete all remote-tracking branches that are stale, that is, where the corresponding branches on the remote machine no longer exist:git remote prune <remote>
-

You may have noticed that in some commands, you use <remote>/<branch>, and other commands, <remote> <branch>. Examples: git branch origin/hello-kitty and git push --delete origin hello-kitty.
It may seem arbitrary, but there is a simple way to remember when to use a slash and when to use a space. When you're using a slash, you're referring to a remote-tracking branch on your own machine, whereas when you're using a space, you're actually dealing with a branch on a remote machine over the network.


**https://careerkarma.com/blog/git-undo-merge/
**