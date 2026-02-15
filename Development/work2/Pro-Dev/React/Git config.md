# Git config


<u>**Two ways to log into  your Git repo remote to push / pull code from new computer**</u>
1. **Using HTTPS with Username and Password (insecure):**
git clone https://<username>:<password>@<remote_url>
If I was logging into GitHub to a repo called Edgewood and my username was john, and my password were xyz:
git clone <u>[https://john:xyz@github.com/john/edgewood.git](https://john:xyz@github.com/john/edgewood.git)</u>
1. **Using SSH Keys (most secure):**
git clone <u>[git@github.com](mailto:git@github.com)</u>:john/edgewood.git
**Explanation:**
* git clone: This is the main command to clone a Git repository.
* git@github.com: This specifies the SSH URL for the remote repository on GitHub. Note the absence of username and password because SSH keys handle authentication.
* john/edgewood.git: This is the name of the repository you want to clone, including the owner's username (john) and the repository name (edgewood).
**=====**
**We need two a key pair.** 
Private key - keep secure on your local machine,
public key - share with services like GitHub.  You can share a single public SSH key with multiple services like GitHub, gitlab, bitbucket.  
When you run the ssh-keygen command, it creates both keys and stores them in the ~/.ssh folder.  
The private key is saved in a hidden file named id_rsa. 
The public key is saved in the same ~/.ssh folder with file name id_rsa.pub in the same location as the private key.  Notice the .pub extension.  
You can extract the public key content by opening the id_rsa.pub file in a text editor. It will be a string starting with "ssh-rsa" followed by a series of characters and spaces.
Ensure your private key file has appropriate permissions (usually read/write for you and no access for others). use chmod command to adjust permissions if needed. Consult your system's documentation for details on setting file permissions.
**How to generate an SSH Key Pair** / **SSH Key?**
ssh-keygen - this creates a key pair using the following defaults, but its unusable we must specify th output fileneame
**Flags**
-t rsa type of key ~ rsa, dsa, ed25519
-b 4096 sets the key-size in bits: RSA default is 2048, more secure is 4096
-C "personal_repo_key" adds a comment to the key; helps identify the purpose of the key pair.
-f ~/.ssh/my_personal_repo_key specifies the filename and location to save the private key.  (Public key will be saved with .pub extension)
Using your**Public Keys**
**Once the key pair is generated,**  copy the **public key** and add it to your GitHub account settings under "SSH and GPG keys."
Configure Git locally (approach 1) or use the -i flag during push/pull commands (approach 2) to specify the location of your **private key**.
When you push or pull from your repository, Git attempts to connect to the remote server using SSH.
The server recognizes the public key (already added to GitHub) and verifies it belongs to a valid private key pair.
Your local Git client uses the **private key** (on your machine) to perform the cryptographic handshake and establish a secure connection.
=====
SHH - Secure shell
Ssh-agent: a program, background process that manages SSH keys on your local machine, specifically private keys used for authentication. 
* **It acts** as a secure in-memory storage for your private SSH keys.
* You can add private keys to the agent using the ssh-add command. This makes the keys readily available for SSH connections without requiring you to type the passphrase for each operation.
**How Authentication Works with the Agent:**
1. When you initiate an SSH connection using a key managed by the agent, the SSH client communicates with the agent process.
2. The agent prompts you for the key's passphrase (if one is set) only once per session.
3. Once you provide the correct passphrase, the agent retrieves the private key and provides it to the SSH client in a secure manner.
4. The SSH client uses the private key to authenticate with the remote server.
**Important Considerations:**
* **Limited Lifetime:** The ssh-agent typically runs for the duration of your login session. Keys added to the agent become unavailable after you log out or restart your machine. You'll need to add them again if you want to use them in subsequent sessions.
* **Automatic Startup:** On some systems, the ssh-agent might be configured to start automatically during login. You can check your system's configuration or use tools like systemd to manage the agent's startup behavior.
**=====**
**Two ways of specifying the location of the keys for git push/pull.**
**Approach 1: Configure Git locally** 
1. **Start a Dedicated SSH Agent (Optional):**	* You can optionally start a dedicated SSH agent process using ssh-agent. This can be helpful if you want to avoid manually adding the key to the default agent each time.
2. **Add Key to Agent:**	* Use ssh-add to add the newly generated private key to the SSH agent process (assuming you started one in step 2). You'll be prompted for the key's passphrase (if you set one during generation).
3. **Local Git Configuration:**	* Navigate to your personal repository directory.
	* Create a file named .git/config (if it doesn't exist) and add the following lines:
[url "git@github.com:"]
    insteadOf = https://github.com/
[user]
    name = <your_username>
    email = <your_email>
[remote "origin"]
    url = [url "git@github.com:"]john/edgewood.git  # Replace john/edgewood with your actual repo info
**Explanation:**
* The [url "git@github.com:"] section tells Git to use the SSH URL format for GitHub repositories.
* The [remote "origin"] section defines the remote repository URL using the SSH format.
* When you push or pull using Git commands (like git pushor git pull), Git will attempt to use the SSH key added to the agent for authentication.
**2. Manual SSH Key Selection (Per Push/Pull):**
This approach allows you to manually specify the private key file to use for each push or pull operation.
**Steps:**
1. **Generate SSH Key Pair:**	* Follow step 1 from approach 1 to generate a new key pair for your personal repository.
2. **Push/Pull with Manual Key Selection:**	* When using Git commands like git push or git pull, you can specify the private key file to use with the -i flag. For example:
	* Bash
git push -i <path_to_your_private_key_file> origin master
* Use code <u>[with caution.](https://gemini.google.com/faq#coding)</u>Replace <path_to_your_private_key_file> with the actual location of your private key file. You might be prompted for the key's passphrase if you set one during generation.
**Important Notes:**
* Whichever approach you choose, ensure you keep your private key file secure. Avoid storing it in plain text or sharing it with anyone.
* Consider enabling SSH key passphrase protection during key generation for an extra layer of security.
* If you use a dedicated SSH agent (approach 1, step 2), remember to start the agent process whenever you need to use the key for Git operations.
**=====**
* You generate a pair of SSH keys on your local machine: a public key and a private key.
* The public key is added to your Git hosting platform (like GitHub or GitLab) account
* Do you need a different key for each local machine?
* Your local machine stores the private key securely.
* When you push or pull code, Git uses the private key on your machine to authenticate with the remote server.
* The private key never leaves your machine, so it's more secure than using a password.
Here are some additional points to consider:
* **HTTPS with Personal Access Tokens:** Some Git hosting platforms offer Personal Access Tokens as an alternative to usernames and passwords for HTTPS authentication. These tokens can be more secure than passwords, but they still involve sending credentials over the network.
* **2FA (Two-Factor Authentication):** It's highly recommended to enable 2FA on your Git hosting platform account. This adds an extra layer of security even when using usernames and passwords.
Here are some resources to get you started:
* **Generating SSH Keys:** [ ](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)<u>[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)</u>**Adding SSH Keys to GitHub:** <u>[https://docs.github.com/articles/adding-a-new-ssh-key-to-your-github-account](https://docs.github.com/articles/adding-a-new-ssh-key-to-your-github-account)</u>**Personal Access Tokens on GitHub:** <u>[https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)</u>**Enabling 2FA on GitHub:** <u>[https://docs.github.com/articles/configuring-two-factor-authentication](https://docs.github.com/articles/configuring-two-factor-authentication)</u>
Here's how you can configure VS Code to manage separate Git configurations for your work and personal repositories:
**1. Multiple Git Configs:**
There are two main approaches to achieve this:
* **Global and Local Configuration:**You can maintain a global Git configuration for your work environment and create local configurations for specific repositories (including your personal one).
	* This approach allows you to keep your work-related Git settings separate while customizing them for your personal projects.
* **Separate User Directories:**An alternative is to configure VS Code to use different user directories for your work and personal Git setups. This essentially creates isolated environments with independent configurations.
**2. Global vs. Local Configuration:**
Let's explore the global and local configuration approach in more detail:
* **Global Configuration:**This typically resides in the ~/.gitconfig file on your machine.
	* Here, you can define settings that apply to all Git operations by default (likely your work environment settings).
* **Local Configuration:**Within each Git repository, you can create a .git/config file.
	* This local configuration overrides any settings defined in the global config for that specific repository.
	* In your personal repository's .git/config file, you would define your personal Git username, email, and any other relevant settings.
**3. Setting Up Local Configuration:**
Here's how to set up the local configuration for your personal repository:
* Open a terminal window and navigate to your personal Git repository.
Run the following command to open the local .git/config file for editing (you can use your preferred text editor):
Bash
git config --local -e
Add the following lines to the file, replacing <your_username> and <your_email> with your personal Git information:
[user]
    name = <your_username>
    email = <your_email>
* Save and close the file.
**4. Using VS Code:**
VS Code should automatically pick up the local Git configuration for your personal repository. When pushing or pulling from this repository, it will use the credentials defined in your local .git/config.
**5. Considerations:**
* Remember to keep your work Git configuration (likely the global one) set for your work environment.
* You can always check the current Git configuration being used by running git config --list in the terminal.
**Additional Notes:**
* If you prefer the separate user directory approach, refer to VS Code documentation for setting up multiple user configurations: <u>[https://code.visualstudio.com/docs/editor/multi-root-workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces)</u>Make sure to follow your workplace's security policies regarding personal Git usage on a work machine.

