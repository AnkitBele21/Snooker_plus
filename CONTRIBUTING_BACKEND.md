# Working on `splus_backend` (`feature/goLive`)

If you want to contribute to:

- Repository: `abhisheksurendran14/splus_backend`
- Branch: `feature/goLive`

use the following flow.

## 1) Clone your fork (recommended)

```bash
git clone https://github.com/<your-username>/splus_backend.git
cd splus_backend
```

## 2) Add upstream and fetch

```bash
git remote add upstream https://github.com/abhisheksurendran14/splus_backend.git
git fetch upstream
```

## 3) Create a local branch tracking `feature/goLive`

```bash
git checkout -b feature/goLive upstream/feature/goLive
```

If your fork already has this branch:

```bash
git checkout feature/goLive
git pull --rebase upstream feature/goLive
```

## 4) Create your feature branch

```bash
git checkout -b <your-feature-branch>
```

## 5) Commit and push

```bash
git add .
git commit -m "<clear commit message>"
git push -u origin <your-feature-branch>
```

## 6) Open pull request

- Base repository: `abhisheksurendran14/splus_backend`
- Base branch: `feature/goLive`
- Compare branch: your feature branch from your fork

## Useful sync command (before new work)

```bash
git checkout feature/goLive
git fetch upstream
git pull --rebase upstream feature/goLive
git push origin feature/goLive
```
