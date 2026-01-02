code review on high risk changes

5.0 released and installed

master branch - deployable / production like > production ready future deployment

feature branch - 

fix in master

a bug found in relase
fix it in master
cherry pick it into the release
doesn't bring history in /  recent changes
cherry pick last 3 commits if hat's required to bug fix - 

squash many ocmmits and cherry commits to release

ready to release a new version? yes

create a new branch 5.1 for testing..  the release branch -- 

bug again? in 5.0 and 5.1 ? then cherry pick to both 

Gitlab Flow strategy sytse

git flow has problems!

github flow is too simple... 

master and feature branches only.. 

we do release branch 

another strategy -- simpleter branching strategy - 

feature - what we work on goes here.  when we're done, then merge it into master. 
pull request from feature to master aka merge feature into master... 

a jira issue or subtask = a feature branch life cycle

edge cases: 

don't commit directly to master

git add, commit, push.. then go to github for pull request

deploy server goes off the master branch.. most recent development.. 

go to pull request tab

click on one



build from a feature branch? then sam could test it..
now we can only build from master
so we can't fully test from feature must merge first

browserstack - a cloud of devices // tests various branch


click ready for review

merge pull request? 
create a merge commit - keeps branch as part of history - norm

can also do squash or rebase

rebase - makes commit look like master history as if a branch never occured

both puts it on the master branch as if no feature 

rebase - commits just moved over teh master - keeps seperate commit- git check

squash - commits become one // fast forward option

git checkout 5.3

git cherriy-pick -x hash
x flag - adds cherry pick message 


cardioserver-web // our front end repo
5.2 php present before it was in a different repo
501 501 and belowin cardioserver_php / main branch is 5.1

woops - 

3rd gitlab flowe - // 24 stable // 23 stabl

@query(tagName)
_rename: NodeListOf<CsAjax> // generic type is NodeListOf <type inside nodelist> cajax refers to a class

this._rename < consolellogy>

@property