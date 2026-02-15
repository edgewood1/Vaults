# Git Configuration & Setup

## 1. Configuration Levels
Git settings are stored in three files with varying precedence:
1. **System** (`/etc/gitconfig`): Applies to every user on the system.
2. **Global** (`~/.gitconfig`): Applies to your user across all repos.
3. **Local** (`<repo>/.git/config`): Specific to the current repository (highest precedence).

## 2. Setting Identity
### Global Setup (Default)
Used for most of your projects.
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Local Setup (Per Repository)
Useful for separating work and personal identities within specific folders.
```bash
cd /path/to/repo
git config user.name "Work Name"
git config user.email "work@example.com"
```

### View Configuration
```bash
git config --list
git config user.name
```

## 3. Useful Settings
```bash
# Set default editor (e.g., VS Code)
git config --global core.editor "code --wait"

# Enable colored output
git config --global color.ui true
```

## 4. Starting a Repository
### Initialize New
```bash
mkdir my-project
cd my-project
git init
# Creates a hidden .git folder
```

### Clone Existing
Downloads a repo and sets up the `origin` remote automatically.
```bash
git clone <url>
```

## 5. Basic Inspection
- **`git status`**: Shows the state of the working directory and staging area.
- **`git log`**: Lists commit history.