### 修改已提交 commit 消息

- 1、`git rebase -i HEAD~3` 将要修改的记录把 pick 修改为 edit
- 2、保存后使用`git commit amend` 修改每条信息
- 3、保存后`git rebase continue`
- 4、`git push origin --force-with-lease` 推送期间如果有变化推送将会被拒绝，比--force 更加安全
