---
layout: cover
background: https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjBrem4wcDVwaXE3cTdrcm5ydTZtMDRyZHo4ZDlpd3l5eWsxOHhzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GCvktC0KFy9l6/giphy.gif
---

## More cool features
you probably never use

---
transition: fade
---
<v-clicks>

```sh
# Pick specific commits from other branches
git cherry-pick < commit-hash >
```

```sh
# Interactive mode for adding changes
git add --interactive
```

```sh
# Interactive mode for rebasing
git rebase --interactive
```

````md magic-move
```sh
# Find the commit that introduced a bug
git bisect start HEAD v1.0
git bisect bad
git bisect good
git bisect reset
```

```sh
# Find the commit that introduced a bug
git bisect 
```
````

```sh
# Stop tracking changes of a file
git update-index --assume-unchanged < file >
```

```sh
# Checkout multiple branches at the same time
git worktree add ../project-feature feature
```

```sh
# Add git repos to your git repo
git submodule add < url >
```
</v-clicks>

---

```sh
# All you need to remember
```

---
layout: image
backgroundSize: contain
image: bell-curve.png
transition: fade
---

---
layout: iframe
transition: fade
zoom: 0.7
url: https://git-scm.com/cheat-sheet
---

---
layout: center
---

<div class="flex flex-col items-center">
    <QRCode value="https://git-scm.com/cheat-sheet" :size="200" :render-as="svg" :margin="1"/>
</div>

https://git-scm.com/cheat-sheet

---
layout: center
---

<div class="flex flex-col items-center gap-4">
<div class="text-center">
<QRCode value="https://holistic-developer.github.io/git-gud/" :size="200" :render-as="svg" :margin="1"/>

[slides](https://holistic-developer.github.io/git-gud/)
</div>

<div class="text-center">
more about me:

[andreas.taranetz.com](https://andreas.taranetz.com)
</div>
</div>
---