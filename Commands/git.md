### 基本命令

- git branch
- git checkout
- git log
- git reset
- git rebase
- `git log --graph --oneline --all`
  > 可视化命令查看所有线上历史提交记录
- git clone

- `git clone --depth 1  --branch [branchName] [https://github.com/xx.git]`:克隆某个指定分支的最近一次 commit

### 具体使用

- 修改已提交 commit 消息

```
 1、`git rebase -i HEAD~3` 将要修改的记录把 pick 修改为 edit
 2、保存后使用`git commit --amend` 修改每条信息
 3、保存后`git rebase continue`
 4、`git push origin --force-with-lease` 推送期间如果有变化推送将会被拒绝，比--force 更加安全
```

- 合指定 commit 代码

  - 1.先切换到分支 A，git log 查看 commitID
  - 2.再切换到分支 B，git cherry-pick A 的 commitID
  - 3.最后 git status /git push 即可
