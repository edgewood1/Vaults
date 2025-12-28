Python3 no such file or directory

Just make your python 3.4 interpreter interpreter available globally. For that, edit .bash_profile or .bashrc file in your home directory and add the following line:
export PATH=${PATH}:/usr/bin/python3

Another way is to add the shebang at the top of your code as
#/usr/bin/python3

and change the permission to executable by the current user (by default it will not have execute permission).
$ chmod 744 your_code.py
and then executing the script directly as
$ your_code.py
