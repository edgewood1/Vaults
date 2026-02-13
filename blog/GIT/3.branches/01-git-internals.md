# Git Internals: Objects & Directory

## 1. The .git Directory
Tracks the folder as a Git repository.
- **HEAD**: Points to the current branch reference.
- **config**: Local configuration.
- **refs/**: Pointers to commits. There are 3 main types:
  1.  **Heads**: Local branches (`refs/heads/`).
  2.  **Remotes**: Remote-tracking branches (`refs/remotes/`).
  3.  **Tags**: Fixed pointers to specific commits (`refs/tags/`).
- **objects/**: The database of content (Blobs, Trees, Commits).

## 2. The Three Trees Architecture
Git manages content across three main areas:
1.  **Working Directory**: The sandbox where you edit files (untracked/modified).
2.  **Staging Area (Index)**: A snapshot of changes proposed for the next commit.
3.  **Repository (HEAD)**: The committed history stored in `.git`.

*Workflow*: `Working Dir` --(add)--> `Staging` --(commit)--> `Repository`.

## 3. Git Objects
Git is a content-addressable filesystem. It stores three main types of objects, identified by a SHA-1 hash (40-character hex string).

### A. Blob (Binary Large Object)
- Stores **file contents**.
- Compressed data.
- Does **not** store the filename or directory structure.
- If two files have the exact same content, they point to the same Blob.
- **Storage**: Stored in `.git/objects/` where the first 2 characters of the hash form the directory, and the remaining 38 form the filename.

### B. Tree
- Represents a **directory**.
- Maps filenames to Blobs (contents) or other Trees (subdirectories).
- Contains metadata like file modes (executable, etc.).

### C. Commit
- A snapshot in time.
- Points to a **Tree** (the root directory state).
- Contains metadata: Author, Committer, Date, Message.
- Points to **Parent Commit(s)** (forming the history graph).

## 4. Object Relationships & Navigation
```text
Commit
  |--> Tree (Root Dir)
        |--> Blob (file1.txt)
        |--> Tree (subdir)
              |--> Blob (file2.txt)
```
