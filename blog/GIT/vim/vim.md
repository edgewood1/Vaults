vim

**open the file in vim:**

vim /filename

**`vim` has two "modes":** 

- COMMAND mode, you execute commands (like undo, redo, find and replace, quit, etc.).  To go back to COMMAND mode, you type the `esc` key.  `vim` starts out in COMMAND mode. 
- INSERT mode, you type text. To go into INSERT mode from COMMAND mode, you type `i`.
- VISUAL mode, that is used to highlight and edit text in bulk.



Note that all commands mentioned below (except for arrow keys) *only work in COMMAND mode*.

go to insert mode

 

1. press "i" (i for insert)
2. write your merge message
3. press "esc" (escape)
4. write ":wq" (write & quit)
5. then press enter

**edit file**

i - insert mode (to modify the - use arrow keys to get around)

**switch modes**

ESC 

**save changes and quit**

:wq!

save file

:w

save changes to a file and exit from vim

:wq

????

:x

**UNDO**

u

**Quit**

:qa! 

====

git config --list

$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com


=======

less .git/config

this will open it in .git, but it will look different than git config --list

