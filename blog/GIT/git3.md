cd work-repo
git config user.name "Work Name"
git config user.email "work@example.com"

cd ../local-repo
git config user.name "Local Name"
git config user.email "local@example.com"


Add the generated SSH keys to the ssh-agent:

ssh-add ~/.ssh/id_rsa_repo1
ssh-add ~/.ssh/id_rsa_repo2

Yes, you can add multiple SSH keys to the ssh-agent, and they won't overwrite each other. Each key will be associated with __the specific host you set up in your SSH config file__. When you make a connection, ssh-agent will use the key that matches the host in the SSH config file.

The ssh-agent holds your private keys in memory, decrypted, so that you can use them often without needing to type a passphrase. When you add multiple keys, they're just added to the list of keys that the ssh-agent can use.

check keys:

ssh-add -l




setup SSH config
~/.ssh/config

# Work repo
Host git-work  // your alias
    HostName github.com // domain name of server -- for github repos it will alway be github.com
    User git // username used to connect - always git for github bc it uses ssh to login.
    IdentityFile ~/.ssh/id_rsa_repo1

# Local repo
Host git-local
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_repo2

__how to use these?__

For example, if you use _git@github.com-work:username/repo.git_ as a remote URL in Git, SSH will use the HostName (github.com), User (git), and IdentityFile (~/.ssh/id_rsa_repo1) specified under the Host github.com-work section of the SSH config file to establish the connection.

git remote set-url origin git@git-work:username/repo.git

    In each of your local repositories, you need to change the remote URL to use the alias you defined in the SSH config file. You can do this with the git remote set-url command:

    # In work-repo directory
git remote set-url origin git@github.com-work:username/work-repo.git

# In local-repo directory
git remote set-url origin git@github.com-local:username/local-repo.git

Replace username, work-repo, and local-repo with your GitHub username and the names of your repositories.

Now, when you push or pull in each repository, Git will use the SSH key you specified for that repository.

is the only difference then that typically I use git@github.com:username, but for setting up an alias, I use git@git-work:username and everythign else is the same?

GitHub Copilot
Yes, that's correct. The only difference is in the hostname part of the remote URL.

Typically, you would use git@github.com:username/repo.git where github.com is the hostname.

When you set up an alias in your SSH config file, you replace github.com with the alias. So if your alias is git-work, you would use git@git-work:username/repo.git.

Everything else remains the same. You're still using the git user, and the username/repo.git part of the URL still refers to your GitHub username and the repository name. The SSH config file simply tells your system to use a different SSH key when connecting to git-work instead of github.com.

---

When you first connect to a remote server via SSH, the server's host key is automatically added to the known_hosts file. This is done after you confirm that you trust the server's host key.

However, for your own SSH keys (the private and public key pair that you use to authenticate yourself to the server), you need to add them to the ssh-agent manually. This is typically done using the ssh-add command. For example:

This command adds the private key located at ~/.ssh/id_rsa to the ssh-agent. You would replace id_rsa with the filename of your private key if it's different.

If you want to add multiple keys, you can run the ssh-add command multiple times, once for each key.

__edit ssh in terminal'

save

To save your changes in nano, follow these steps:

Press Ctrl+O to write out the file. This is equivalent to the "Save" command in other editors.
After pressing Ctrl+O, nano will ask you to confirm the filename. If you want to save the changes to the current file, simply press Enter.
Once you've saved your changes, you can exit nano by pressing Ctrl+X.
Remember, Ctrl+O is used to save changes without exiting, and Ctrl+X is used to exit nano (if there are unsaved changes, nano will ask you to save them before exiting).

output

cat filename



Quick setup — if you’ve done this kind of thing before
or
git@github.com:meldejesus/blog.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# blog" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:meldejesus/blog.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin git@github.com:meldejesus/blog.git
git branch -M main
git push -u origin main
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.