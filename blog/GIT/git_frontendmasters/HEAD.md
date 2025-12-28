
Two ways of refering to a commit 

tilde ~ refers to ancestors / generations

caret ^ refers to parents

upstream - refers to current branch or master ? 


G   H   I   J    _> D has 2 parents; F has 2 parents
 \ /     \ /
  D   E   F       -> B has 3 parents (DEF merged); but C has 1 (F continued development into C) 
   \  |  / \
    \ | /   |
     \|/    |
      B     C  -> HEAD has 2 parents; whihc means A is merging of theses
       \   /
        \ /
         A  ---> HEAD
  
  

  B = A~1 = A^1 = A^ (go back one main parent)
  C = A^2 (go back 2 on )
  D = A~2 = A^^ ? = 
  E = A~1^2 aka A
  F = A~1^3 aka A^^3 ? 
  G = 

Head^^2 - go back 2 on main line

git checkout HEAD~1 // changes head and adds entry to "reflog"
to return, visit teh reflog: git reflog: 
find the previous location you want to return to 
checkout that location: git checkout HEAD@{1}


-- 
git init
touch a.txt
git commit: baf236 (commit id) / create 10064
 - this creates a "file pack" of 3 directory/files: commit, blob, tree
https://stackoverflow.com/questions/34519665/how-can-i-move-head-back-to-a-previous-location-detached-head-undo-commits