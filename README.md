# MyTicket_TS_MUI5_front

Git remove local branches not on remote:

```bash
git remote prune origin
```

```bash
git branch | grep -v "master" | grep -v "develop" | xargs git branch -D
```
