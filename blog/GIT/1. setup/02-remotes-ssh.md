# Remotes & SSH Configuration

## 1. Remote Protocols
- **HTTPS**: `https://github.com/user/repo.git`
  - Easier to setup.
  - Requires credentials (password/token) frequently unless cached.
- **SSH**: `git@github.com:user/repo.git`
  - Uses public/private key pairs.
  - No password required for operations after setup.

## 2. Managing Remotes
### Basic Commands
```bash
# List remotes (verbose shows URLs)
git remote -v

# Add a remote
git remote add origin <url>

# Change a remote's URL (e.g., switching from HTTPS to SSH)
git remote set-url origin <new-url>

# Remove a remote
git remote remove origin
```

### Connecting a Local Repo to GitHub
1. Create repo on GitHub.
2. Add remote locally:
   ```bash
   git remote add origin git@github.com:username/repo.git
   ```
3. Push and set upstream tracking:
   ```bash
   git push -u origin main
   ```

## 3. SSH Setup
### Generate Key
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
# Save to default (~/.ssh/id_ed25519) or give a custom name
```

### Add to Agent
```bash
# Start agent if needed
eval "$(ssh-agent -s)"

# Add key
ssh-add ~/.ssh/id_ed25519
```

### Add to GitHub
Copy the public key (`.pub`) and add it to GitHub Settings > SSH Keys.
```bash
cat ~/.ssh/id_ed25519.pub
```

## 4. Advanced: Multiple GitHub Accounts
If you have a **Personal** and a **Work** account, use the SSH config file to manage keys.

### 1. Generate Unique Keys
```bash
ssh-keygen -t ed25519 -C "personal@email.com" -f ~/.ssh/id_personal
ssh-keygen -t ed25519 -C "work@email.com" -f ~/.ssh/id_work
```

### 2. Configure `~/.ssh/config`
Create or edit this file:
```text
# Personal Account
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_personal

# Work Account (Alias: github-work)
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_work
```

### 3. Use Aliases in Remotes
When cloning or adding remotes for work, use the **Host** alias defined above.

**Personal (Standard):**
```bash
git clone git@github.com:username/personal-repo.git
```

**Work (Alias):**
```bash
# Note the host is 'github-work', not 'github.com'
git clone git@github-work:workuser/work-repo.git

# Or update existing remote
git remote set-url origin git@github-work:workuser/work-repo.git
```