### 修改已提交commit消息
```
1、git rebase -i HEAD~3
2、将要修改的记录把pick修改为edit
3、使用git commit amend 和 git rebase continue修改每条信息
4、git rebase continue
5、git push origin -f
```