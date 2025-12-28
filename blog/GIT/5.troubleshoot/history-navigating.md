NAVIGATING HISTORY

Tilde ~ is almost linear in appearance and wants to go backward in a straight line
Caret ^ suggests an interesting segment of a tree or a fork in the road

HEAD^ means the first immediate parent of the tip of the current branch. HEAD^ is short for HEAD^1, and you can also address HEAD^2 and so on as appropriate

reset HEAD~1      |      back 1 commit, deletes the last commit + staging NOT working 

reset HEAD~3      |      same as above, but goes back 3 commits

reset HEAD~3--soft      |      moves HEAD back 3 commits (deletes them), but working/staging of recent HEAD remains (so you can re-commit all).  so deletes commit NOT index+working

reset --soft HEAD^

What? 

git reset HEAD five.txt  // unstages, so staging is the same as the last repo commit 