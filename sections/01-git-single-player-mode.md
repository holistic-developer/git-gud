---
layout: section
---

## Using Git in <br> **single-player** mode

---

````md magic-move

```sh
# Turn your folder into a git repository
git init
```

```sh
# Turn your folder into a git repository
git init

# edit your files
```

```sh
# Turn your folder into a git repository
git init

# edit your files

# create a new "save point"
git add . 
```

```sh
# Turn your folder into a git repository
git init

# edit your files

# create a new "save point"
git add .
git commit -m "add some vibes"
```

```sh
# all you need to remember
git init
git add . 
git commit
```
````

---
class: text-center
transition: fade
---

```mermaid
---
config:
  theme: base
---
gitGraph TB:
    checkout main
    commit id: "Ma first commit 🎉" 
```

---
class: text-center
---

```mermaid
---
config:
  theme: base
---
gitGraph TB:
    checkout main
    commit 
    commit
    commit
    commit
```
---
layout: split
---

## Restoring a save point

````md magic-move
```sh
# see your commit history
git log
```

```sh {all|all}
# see your commit history
git log

# pick a commit hash
git checkout < commit-hash >
```

```sh {all|all}
# see your commit history
git log

# go back to the latest commit
git checkout main
```

```sh
# all you need to remember
git log
git checkout
```
````

::bottom::

<div class="text-center" v-click.hide="5">

```mermaid
---
config:
  theme: base
---
gitGraph TB:
    checkout main
    commit
    commit
    commit
    commit
```

<v-drag-arrow pos="312,240,-56,0"
v-motion
:initial="{y:0}"
:click-2="{y: -100}"
:click-4="{y: 0}"
/>

</div>

---
layout: section
---

## Split reality

---
layout: image
backgroundSize: contain
image: https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHByOGUyODdjMHl1eG85YmtwOWVjZmlxaTlkOHpvZGNla2tmb29yOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XH9tzHRGQmLSFGP6E8/giphy.gif
---

---
layout: split
clicks=6
---
## Branching 

````md magic-move
```sh
```

```sh
git branch feature
```

```sh
git branch feature
git checkout feature
```

```sh
git branch feature
git switch feature
```

```sh
git branch feature
git switch feature

git commit
```

```sh
git branch feature
git switch feature

git commit
git commit
```

```sh
git branch feature
git switch feature

git commit
git commit

git switch main
```

```sh
git branch feature
git switch feature

git commit
git commit

git switch main
git merge feature
```
````

<v-drag-arrow pos="162,445,-56,0"
style="z-index: 1000"
v-motion
:initial="{x: 0, y: 0, opacity: 1 }"
:click-2="{x: 40}"
:click-4="{x: 110}"
:click-6="{opacity: 0}"
/>

<v-drag-arrow pos="20,445,56,0"
style="z-index: 1000"
v-motion
:initial="{x: 0, y: -100, opacity: 0 }"
:click-6="{opacity: 1}"
:click-7="{y: 0}"
/>

::bottom::

<div v-click.hide="1" class="absolute bottom-10">

```mermaid
---
config:
   theme: base
---
gitGraph TB:
    commit
```
</div>

<div v-click="[1,4]" class="absolute bottom-10">

```mermaid
---
config:
   theme: base
---
gitGraph TB:
    commit
    branch feature
```
</div>

<div v-click="[4]" class="absolute bottom-10">

```mermaid
---
config:
  theme: base
---
gitGraph TB:
    commit
    branch feature
    checkout feature
    commit
```
</div>

<div v-click="[5,7]" class="absolute bottom-10">

```mermaid
---
config:
  theme: base
---
gitGraph TB:
    commit
    branch feature
    checkout feature
    commit
    commit
```
</div>

<div v-click="7" class="absolute bottom-10">

```mermaid
---
config:
  theme: base
---
gitGraph TB:
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout main
    merge feature
```
</div>

---
layout: image
backgroundSize: contain
image: https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTQybmYzZm05OGRjbzhvOThhM3FqYnJrZjRtc2Y5OHY2dXlvNmgycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cFkiFMDg3iFoI/giphy.gif 
---

---
layout: section
---
## Conflicts

<div class="text-left">
```
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts
and then commit the result.
```
</div>

---
layout: image
backgroundSize: contain
image: merge.png
---

---

## How conflicts are made


```mermaid
---
config:
  theme: base
---
gitGraph TB:
    commit
    branch feature
    commit
    checkout main
    commit
    merge feature type: REVERSE
```

---
