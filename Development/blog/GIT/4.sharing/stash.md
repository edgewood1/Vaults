
`--STASHING COMMITS --- ` 

before movign to a new branch, you must commit or stash changes.

stashes are stacked from all your branches - 
newest is the lowest nubmered.  
stash drop drops the newest.  

      stash@{0}: On bugfix/BERT-2044-timing-out-when-trying-to-escalate: #2044 search
      stash@{1}: On develop: lll
      stash@{2}: On develop: llll

stash list - show a list of all your stashes: 

stash - saves current to stash tree.  aka "git stash save"

stash apply - loads in stash 
apply stash@{0} - loads a specific stash 
If I want to reapply one of these: $ git stash apply stash@{0}

stash drop - deletes it. 
 
 ** move stashes into own branches befor eit gets too messy

 git stash apply stash      # apply top of stash stack
git stash apply stash@{1}  # and mix in next stash stack entry too


`--STASHING COMMITS --- ` 

before movign to a new branch, you must commit or stash changes.

stashes are stacked from all your branches - 
newest is the lowest nubmered.  
stash drop drops the newest.  

      stash@{0}: On bugfix/BERT-2044-timing-out-when-trying-to-escalate: #2044 search
      stash@{1}: On develop: lll
      stash@{2}: On develop: llll

list - show a list of all your stashes: 

stash@{0} most recent stash whereas {9} is an old stash

save - saves current to stash tree.  aka "git stash save"

apply - loads in stash 

apply stash@{0} - loads a specific stash 
If I want to reapply one of these: $ git stash apply stash@{0}

  git stash apply stash@{n}
  git stash apply n


drop - deletes it. 

drop // remove the last stash/ latest.

  drop stash@{4} // removes the 4th?

 remove all at once

 git stash clear

 
 ** move stashes into own branches befor eit gets too messy

 git stash apply stash      # apply top of stash stack
git stash apply stash@{1}  # and mix in next stash stack entry too

git stash / stach changes in a dirty working directory

  save -u "experiements"

  
show / inspect them