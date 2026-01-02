

GitHub Copilot: You can configure your Git user settings by using the `git config` command in your terminal. These settings are stored in a configuration file. There are three levels of configuration files in Git:

1. System level (`/etc/gitconfig`): Contains values for every user on the system and all their repositories.
2. Global level (`~/.gitconfig` or `~/.config/git/config`): Specific to your user and is used across all repositories.
3. Local level (`<repo>/.git/config`): Specific to a single repository.

To configure your user name and email address for all repositories on your system, you can use the `--global` option:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

These commands set your name and email address in the global configuration file, which is typically located in your home directory (`~/.gitconfig`).

If you want to set these values for a specific repository, you can navigate to that repository in your terminal and run the commands without the `--global` option:

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

These commands set your name and email address in the local configuration file for the current repository (`<repo>/.git/config`).

You can view your current Git configuration settings with the following command:

```bash
git config --list
```

This command lists all the settings from the configuration files that Git can find, with settings from lower level files taking precedence over settings from higher level files.

__meldejesus: for example, store my ssh keys for different github accounts.  I want to use my work github and personal one on one computer__

GitHub Copilot: You can use multiple SSH keys for different GitHub accounts on the same computer by creating a new SSH key for each account and then adding a configuration to tell SSH which key to use for each connection. Here's how you can do it:

1. **Create a new SSH key for each account.** You can do this with the `ssh-keygen` command. When it asks you for a file in which to save the key, give it a unique name for each key:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
# When asked for a file, enter: ~/.ssh/id_ed25519_work
```

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
# When asked for a file, enter: ~/.ssh/id_ed25519_personal
```

2. **Add the SSH keys to the ssh-agent.** You can do this with the `ssh-add` command:

```bash
ssh-add ~/.ssh/id_ed25519_work
ssh-add ~/.ssh/id_ed25519_personal
```

3. **Add the SSH keys to your GitHub accounts.** You can do this in the SSH keys section of the settings for each account. You'll need to copy the contents of the public key file (with the `.pub` extension) for each key:

```bash
cat ~/.ssh/id_ed25519_work.pub
cat ~/.ssh/id_ed25519_personal.pub
```

4. **Create a SSH config file.** This file will tell SSH which key to use for each connection. You can create it with a text editor:

```bash
nano ~/.ssh/config
```

Then, add an entry for each GitHub account:

```bash
# Work account
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work

# Personal account
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
```

5. **Use the SSH config in your Git repositories.** When you clone a repository, use the host from the SSH config file that corresponds to the GitHub account for that repository:

```bash
git clone git@github.com-work:username/repo.git
git clone git@github.com-personal:username/repo.git
```

For existing repositories, you can change the remote URL to use the host from the SSH config file:

```bash
git remote set-url origin git@github.com-work:username/repo.git
git remote set-url origin git@github.com-personal:username/repo.git
```

With this setup, SSH will use the correct key for each GitHub account based on the host in the remote URL.