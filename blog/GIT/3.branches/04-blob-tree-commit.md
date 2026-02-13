# Git Internals: Objects, Remotes, and Navigation


This document breaks down Git into three core concepts: the underlying data model (Objects), how we interact with other repositories (Remotes), and how we traverse history (Specifiers).

---

## 1. The Data Model: Blobs, Trees, Commits, and Branches

Git is fundamentally a content-addressable filesystem. It stores data in a key-value store where the key is the SHA-1 hash of the content.

### A. The Objects (The "What")
These live in `.git/objects`.

1.  **Blob (Binary Large Object)**
    *   **Represents**: File content.
    *   **Details**: Compressed data. It does *not* store the filename, only the content.
    *   **Storage**: If two files have identical content, they share the same Blob.
    *   **Location**: Stored in `.git/objects/` (First 2 hex characters = directory, remaining 38 = filename).

2.  **Tree**
    *   **Represents**: A Directory.
    *   **Details**: A list of pointers to Blobs (files) and other Trees (subdirectories).
    *   **Metadata**: Stores filenames, file modes (executable, etc.), and the SHA-1 pointers.

3.  **Commit**
    *   **Represents**: A snapshot in time.
    *   **Details**:
        *   Points to a **Tree** (the root directory of the project).
        *   Points to **Parent Commit(s)** (forming the history graph).
        *   Contains metadata: Author, Date, Message.

### B. The References (The "Labels")
These live in `.git/refs`.

*   **Branch**:
    *   A lightweight, movable pointer to a specific **Commit**.
    *   It is simply a file containing a 40-character SHA-1 hash.
    *   *Key Distinction*: A commit is the actual history (immutable). A branch is just a label (mutable) that tracks the "tip" of a line of development.
*   **HEAD**:
    *   A pointer to the *current* active branch (or commit).
    *   Usually points to `refs/heads/master`.
    *   **Detached HEAD**: When HEAD points directly to a Commit hash instead of a Branch name.
*   **Tag**:
    *   A fixed, immutable pointer to a specific commit.
    *   Used to mark release points (e.g., `v1.0`).
    *   Lives in `refs/tags/`.
    *   *Key Distinction*: Unlike a branch, a tag does not move when you create a new commit.

### C. Directory Structure Example
Here is how these concepts map to the actual `.git` directory:

```text
.git/
├── HEAD                 # Points to refs/heads/master
├── config               # Local repository configuration
├── objects/             # The Database
│   ├── 0e/              # Blob/Tree/Commit (hash start)
│   │   └── 170dcd...    # (hash remainder)
│   ├── info/
│   └── pack/            # Compressed objects
└── refs/                # The Labels
    ├── heads/           # Local Branches
    │   ├── master       # File containing commit SHA
    │   └── feature-x
    ├── remotes/         # Remote Tracking Branches
    │   └── origin/
    │       └── master
    └── tags/            # Tags
        └── v1.0
```

### Summary Hierarchy
```text
HEAD -> Branch (master) -> Commit -> Tree -> Blob (content)
                             ^
                             |
                        Tag (v1.0)
```

---

## 2. Remotes: Origin, Master, and Origin/Master

Understanding the difference between local and remote references is crucial for synchronization.

### Definitions

1.  **`origin`**
    *   The alias for the remote repository URL (e.g., GitHub/GitLab).
    *   Managed via `git remote add origin <url>`.

2.  **`master` (Local Branch)**
    *   Your local working branch. You make commits here.
    *   Location: `refs/heads/master`.

3.  **`origin/master` (Remote-Tracking Branch)**
    *   A local *read-only* copy of what the `master` branch looked like on `origin` the last time you fetched.
    *   You cannot commit to this directly. It is updated only via `git fetch` or `git pull`.
    *   Location: `refs/remotes/origin/master`.

### Interaction Flow

*   **`git fetch origin`**: Updates `origin/master` to match the remote server. Does not touch your local `master`.
*   **`git merge origin/master`**: Merges the updated `origin/master` into your local `master`.
*   **`git pull`**: Essentially runs `git fetch` followed by `git merge`.
*   **`git push origin master`**: Sends your local `master` commits to the remote `origin`, updating the remote's `master`.

---

## 3. Navigation: Specifiers and Ancestry

When referencing commits relative to `HEAD` or other commits, Git uses specific symbols.

### Symbols

| Symbol | Meaning | Example |
| :--- | :--- | :--- |
| `^` | **Parent** | `HEAD^` (Immediate parent) |
| `~` | **Generation** (Ancestry) | `HEAD~2` (Grandparent) |

*   `^n`: Used for merge commits to select the *nth* parent. `HEAD^2` is the second parent of a merge.
*   `~n`: Used to go back *n* generations in a straight line.

### Visualizing Ancestry

```text
G   H   I   J
 \ /     \ /
  D   E   F
   \  |  / \
    \ | /   |
     \|/    |
      B     C
       \   /
        \ /
         A

A =      = A^0
B = A^   = A^1     = A~1
C = A^2  (2nd parent of A)
D = A^^  = A^1^1   = A~2
E = B^2  = A^^2
F = B^3  = A^^3
G = A^^^ = A^1^1^1 = A~3
```