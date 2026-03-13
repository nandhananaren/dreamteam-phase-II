# Writeup – Git Exercises and Bandit

## What I Learned

### Git Exercises

* Understanding the Git workflow: working directory → staging area → commit history.
* How to stage specific files using `git add`.
* How to remove files from staging using `git reset`.
* Creating `.gitignore` to prevent tracking compiled or generated files.
* Merging branches using `git merge`.
* Resolving merge conflicts manually by editing files and committing the resolution.
* Temporarily saving unfinished work using `git stash` and restoring it with `git stash pop`.
* Understanding how branches move between commits.

### Bandit (OverTheWire)

* Basic Linux command-line navigation.
* Working with file permissions and hidden files.
* Searching files using commands like `grep`, `find`, and `strings`.
* Understanding how encoding and compression work.
* Learning how small command-line tools can be chained together to solve problems.

---

## Common Mistakes

### Git

* Using `git add .` and accidentally staging files that should not be committed.
* Forgetting to commit after resolving merge conflicts.
* Forgetting to configure Git identity (`git config user.name` and `git config user.email`).
* Editing conflicted files but not removing conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
* Committing before staging the correct files.

### Bandit

* Forgetting to check hidden files using `ls -a`.
* Not reading instructions carefully.
* Not checking file contents with tools like `cat`, `less`, or `strings`.
* Missing files located in unusual directories.

---

## Useful Commands

### Git

```
git status
git add <file>
git reset <file>
git commit -m "message"
git merge <branch>
git branch
git checkout <branch>
git stash
git stash pop
git log --oneline
git verify
```

### Linux (Bandit)

```
ls
ls -a
cd
cat
file
strings
grep
find
chmod
```

---

