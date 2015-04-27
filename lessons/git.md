class: center, middle, inverse

# Version Control 101

---

# The Problem...

Designer version control

- emart-wireframe.pdf
- emart-wireframe2.pdf
- emart-wireframe-final.pdf
- emart-wireframe-update.pdf

---

# The Problem...

Hacker version control

```css
.username { font-style: italic; }

/* .username { font-weight: bold; } */
```

---

# The Solution (pre 2005)

Centralized version control

- Track file history
- Who changed what and when
- Back everything up into a central location
- SVN, CVS, clearcase, etc

---

# The Solution (pre 2005)

Centralized version control

[![Central Version Control](http://i.stack.imgur.com/eqmGk.png)](http://programmers.stackexchange.com/questions/35074/im-a-subversion-geek-why-should-i-consider-or-not-consider-mercurial-or-git-or)

---

class: center, middle, inverse

# But What If You're Offline?

---

# The Solution (post 2005)

Decentralized version control

- Local copies of entire repos
- Check in locally
- Push to any other copy of the repo

---

# The Solution (post 2005)

Decentralized version control

[![Decentralized Version Control](http://i.stack.imgur.com/9IW5z.png)]((http://programmers.stackexchange.com/questions/35074/im-a-subversion-geek-why-should-i-consider-or-not-consider-mercurial-or-git-or))

---

# Git

- The most popular modern solution
- Often paired with central backup
  - GitHub
  - BitBucket

---

# How Git works

[![GitHub Flow](https://camo.githubusercontent.com/e77928c4892d5d2fb6908d7260e689326d241c7f/687474703a2f2f626c6f67732e656e646a696e2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031332f30332f736273677467662d30352d6272616e63686573312e706e67)](https://github.com/juposocial/jupo/wiki/Develop-from-Source)

???

- Sit on this slide for a while
- Commits
  - Snapshots of your file(s) over time
- Branches
  - Bundles of commits
  - Generally focused on a specific purpose
    - A feature
    - Testing
    - Release management, etc
- Master branch
- Repo has many branches
- Branches have many commits
- Walk through the flow

---

# Git 101

- Creating a repo
- Committing
- Reverting
- Ignoring
- Pushing
- Pulling
- Cloning
- Branching
- Merging
- Diffing
- GUI!!!

---

# Creating a repo

Let's create a project called `projectfoo`

```bash
mkdir projectfoo
cd projectfoo
git init
```

---

# Committing

Next, we'll create a file `readme.md`

```bash
touch readme.md
git status
git add .
git status
git commit -m "Initial checkin"
```

---

# A digression about VI

If you forget to add the -m option when you run git commit... You'll see VI

- A really fast, powerful, but confusing editor

All you really need to know for now is how to exit...

Type `:q!` then press `<enter>`

If you want to know more about VI, there are [lots of tutorials](http://www.openvim.com/)

---

# Reverting (before commit)

Let's say we've made changes that we don't want to commit.

```bash
git checkout readme.md
```

---

# Reverting (after commit)

What if we committed our changes, but now want to undo that commit?

First, uncommit the change `git reset --soft HEAD~1`

Then, unstage the file(s) `git reset HEAD readme.md`

Then, get the file(s) back to their original state `git checkout readme.md`

I always have to Google this process...

---

# Ignoring

Almost always, there are certain local files that you want to ignore...

To do this, create a `.gitignore` file and add the paths you wish to ignore:

```bash
.DS_Store
node_modules
```

Then, add the `.gitignore` file to your repo:

```bash
git add .
git commit -m "Adding .gitignore"
```

---

# Pushing

Lots of local changes, you're ready to push to a central repo.

- Backs up your changes
- Makes them easy for teammates to pull

```bash
git push
```

Or

```bash
git push origin branchname
```

---

# Pulling

Someone else has made some changes, and you need them. Pull em down.

```bash
git pull
```

Or

```bash
git pull origin branchname
```

---

# Cloning

Want to pull an existing repo down to your machine?

```bash
git clone git@github.com:chrisdavies/eev.git
```

The URL will vary depending on the repo you're cloning.

---

# Branching

Generally, don't work out of master

- Create a branch for your feature
- Commit to that branch
- When your feature is done, merge the branch into master

You want master to remain clean and good-to-go (shippable).

---

# Branching (contd...)

To create and checkout a new branch:

```bash
git checkout -b my-cool-feature
```

- Creates the `my-cool-feature` branch and checks it out.
- `my-cool-feature` branch will be an identical copy of the previous branch

---

# Branching (contd...)

To check out an existing branch:

```bash
git checkout master
```

---

# Merging

To merge all changes from your branch into master:

```bash
git checkout master
git merge my-cool-feature
```

Master will now have all changes that were made in the `my-cool-feature` branch.

---

# Merge conflicts

What if:

- You change a file (say, `readme.md`)
- Someone else also changes that file, commits, and pushes it

Whose changes are accepted?

Git tries to merge automatically, but sometimes...

---

# Merge conflicts (contd...)

You'll see something like this:

```remark
# My fancy readme
<<<<<<< HEAD
Is pretty swank
=======
Is not so swank
>>>>>>> branch-a
```

You'll have to:

- Manually remove the weird markers
- Make the file look however you think it should

```bash
git add .
git commit -m "Resolving merge conflicts in readme"
```

---

# Diffing

To view the differences between your files and the previous versions:

`git diff`

You can do lots more with this command, but...

---

# Gui

I find somethings (especially diffs) to be much easier in a GUI:

`git gui`

It's a hacky UI, but it does the trick.

If `git gui` doesn't work in your terminal, you'll have to do some configuring.

---

# There's lots more.

[My Git settings](https://github.com/tiy-durham-fe-cohort4/resources/blob/master/cheat-sheets/git-settings.md)

[Git documentation](http://git-scm.com/doc)
