### 基础

- [ ] git branch
- [ ] git checkout
- [ ] git log
- [ ] git reset
- [ ] git rebase
- [ ] git log
  - 可视化命令查看所有线上历史提交记录：`git log --graph --oneline --all`
- [ ] git clone
  - 克隆某个指定分支的最近一次 commit：`git clone --depth 1  --branch [branchName] [https://github.com/xx.git]`

### 具体使用场景

- [x] 修改已提交 commit 消息

```
 1、`git rebase -i HEAD~3` 将要修改的记录把 pick 修改为 edit
 2、保存后使用`git commit --amend` 修改每条信息
 3、保存后`git rebase continue`
 4、`git push origin --force-with-lease` 推送期间如果有变化推送将会被拒绝，比--force 更加安全
```

- [x] 合指定 commit 代码

  - 1.先切换到分支 A，git log 查看 commitID
  - 2.再切换到分支 B，git cherry-pick A 的 commitID
  - 3.如果有冲突，解决冲突后`git add .`, 然后执行`git cherry-pick --continue`
  - 4.最后 git status /git push 即可
