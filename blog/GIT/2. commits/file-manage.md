`move / rename file`
rename is the same as move

1. go into operating system and do it then tell git
2. do it in git and let git do it

`rename tracked files in os`

- shows the old name as a 'deleted file'
- shows new name as an 'untracked file'

git add 'untracked' 
git rm 'deletedfile'
git commit -m "fix"

`move` 

git mv one.txt five.txt (change name)

git mv one.txt dir/one.txt (move)

