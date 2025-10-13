---
layout: cover
background: https://1.bp.blogspot.com/-zjP6_nQdzmE/YNEMGMve_5I/AAAAAAAAHCo/Nq0jHok83Uwlfqx5izIsZAt_P458h4EkgCLcBGAsYHQ/s0/AlertImaginaryGoa-max-1mb.gif
backgroundSize: contain
---

## Using Git in <br> **multi-player** mode

---
layout: center
---

<img src="/favicon.png" width="120"/>

<p class="w-full text-center font-size-10 pb-3">≠</p>

<LightOrDark>
  <template #dark><img src="/github-mark-white.png" width="100" class="m-auto"/></template>
  <template #light><img src="/github-mark.png" width="100" class="m-auto"/></template>
</LightOrDark>

---

## Talk to a remote repository

````md magic-move
```sh
# Enable multi-player mode
git remote add origin < url >
```

```sh
# Enable multi-player mode
git remote add origin < url >

# First time only
git push --set-upstream origin main
```

```sh
# Enable multi-player mode
git remote add origin < url >

# First time only
git push --set-upstream origin main

# Set repo to remote state
git pull
```

```sh
# Enable multi-player mode
git remote add origin < url >

# First time only
git push --set-upstream origin main

# Set repo to remote state
git pull

# Just fetch without overriding local changes
git fetch
```

```sh
# All you need to remember
git push
git pull
git fetch
```
````

---
layout: image
image: local-remote.png
backgroundSize: contain
---

---
layout: cover
background: https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3R1c3R3YmgyeTFpc2V1aWRqZG1jcW82bHQyeDZtbnUxZnRndXA4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tPgV8ceZTSxH9zG/giphy.gif
backgroundSize: contain
---

use the **force**

---

````md magic-move
```sh
# If the history was changed
git push --force
```

```sh
# If the history was changed
git push --force

# Prevent overwriting other's work
git push --force-with-lease
```
````

---
layout: center
transition: fade
---
## Git flow
```mermaid
---
config:
  theme: base
  gitGraph:
---
gitGraph BT:
commit id: "A" tag: "v1.0.0"
branch develop order: 1
checkout develop
commit id: "B"
checkout develop
branch feature order: 1
checkout feature
commit id: "C"
commit id: "D"
checkout develop
merge feature
branch release order: 0
checkout release
commit id: "E"
checkout main
merge release tag: "v1.1.0"
```

---
layout: center
---
## Trunk based development
```mermaid
---
config:
  theme: base
  gitGraph:
    mainBranchOrder: 1
---
gitGraph BT:
commit id: "A"
branch feature order: 1
branch feature2 order: 1
checkout feature
commit id: "B"
commit id: "C"
checkout main
merge feature
checkout feature2
commit id: "D"
checkout main
merge feature2
branch "release/v1.0.x" order: 0
checkout "release/v1.0.x"
commit id: "E" tag: "v1.0.0"
commit id: "F" tag: "v1.0.1"
```
