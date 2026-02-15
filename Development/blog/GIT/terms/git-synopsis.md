Special thanks [Charles Duffy](https://stackoverflow.com/users/14122/charles-duffy) who addressed my comments and helped me put this together.

> I counted 7 lines. Is every line a combination of options that can work with any number of the options in that line?

That's correct. Yet `git checkout -q -b new_branch_name` works. It just works under the #4 definition, not under the #1 definition

> 1st and 2nd lines: Why couldn't the first 2 lines be replaced with this one line: `git checkout [-q] [-f] [-m] [--detach]`

You're right that they could be replaced and still have the same summary meaning. The separation of lines is because the behaviors differ enough to have separate long-form explanations later.

> Also I suppose order isn't important that is for the first line, git checkout -q -f is not different than git checkout -f -q. I tried and the results were the same, but I'm just still not sure

There are no implied relationships between the options based upon the order in which they appear, unless otherwise stated in the OPTIONS section.

☝️ From [POSIX Conventions](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html):

------

The answer to the remainder of the questions can be found from [Git CodingGuidlines](https://github.com/git/git/blob/master/Documentation/CodingGuidelines)

**Placeholders are spelled in lowercase and enclosed in angle brackets:**

```
<file>
--sort=<key>
--abbrev[=<n>]
```

**If a placeholder has multiple words, they are separated by dashes:**

```
<new-branch-name>
--template=<template-directory>
```

**Possibility of multiple occurrences is indicated by three dots:**

```
<file>...
(One or more of <file>.)
```

**Optional parts are enclosed in square brackets:**

```
[<extra>]
(Zero or one <extra>.)

--exec-path[=<path>]
(Option with an optional argument.  Note that the "=" is inside the
brackets.)

[<patch>...]
(Zero or more of <patch>.  Note that the dots are inside, not
outside the brackets.)
```

**Multiple alternatives are indicated with vertical bars:**

```
[-q | --quiet]
[--utf8 | --no-utf8]
```

**Parentheses are used for grouping:**

```
[(<rev> | <range>)...]
(Any number of either <rev> or <range>.  Parens are needed to make
it clear that "..." pertains to both <rev> and <range>.)

[(-p <parent>)...]
(Any number of option -p, each with one <parent> argument.)

git remote set-head <name> (-a | -d | <branch>)
(One and only one of "-a", "-d" or "<branch>" _must_ (no square
brackets) be provided.)
```

Meaning for `[(<rev> | <range>)...]` the `...` is applied to both arguments of `|`, think of just as if how `5` is applied to both `3` and `2` from `(3 + 2) * 5`

**And a somewhat more contrived example:**

```
--diff-filter=[(A|C|D|M|R|T|U|X|B)...[*]]
Here "=" is outside the brackets, because "--diff-filter=" is a
valid usage.  "*" has its own pair of brackets, because it can
(optionally) be specified only when one or more of the letters is
also provided.
```

------

Also note that from the [`git checkout` page](https://git-scm.com/docs/git-checkout#Documentation/git-checkout.txt-ltbranchgt) itself, if you scroll down (other pages had similar glossary put towards the end of the OPTIONS section), you'll see some meta data that helps you better understand:

```
<branch>
```

> Branch to checkout; if it refers to a branch (i.e., a name that, when prepended with "refs/heads/", is a valid ref), then that branch is checked out. Otherwise, if it refers to a valid commit, your HEAD becomes "detached" and you are no longer on any branch (see below for details).
>
> You can use the @{-N} syntax to refer to the N-th last branch/commit checked out using "git checkout" operation. You may also specify - which is synonymous to @{-1}.
>
> As a special case, you may use A...B as a shortcut for the merge base of A and B if there is exactly one merge base. You can leave out at most one of A and B, in which case it defaults to HEAD.

```
<new_branch>
```

> Name for the new branch.

```
<start_point>
```

> The name of a commit at which to start the new branch; see git-branch[1](https://unix.stackexchange.com/questions/11376/what-does-double-dash-mean) for details. Defaults to HEAD.
>
> As a special case, you may use "A...B" as a shortcut for the merge base of A and B if there is exactly one merge base. You can leave out at most one of A and B, in which case it defaults to HEAD.

```
<tree-ish>
```

> Tree to checkout from (when paths are given). If not specified, the index will be used.

```
--
```

> Do not interpret any more arguments as options.

```
<pathspec>…
```

> Limits the paths affected by the operation.
>
> For more details, see the pathspec entry in [gitglossary[7\]](https://git-scm.com/docs/gitglossary).