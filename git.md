git 配置
---
### 配置提交信息
`git config --global user.name [name]`  
`git config --global user.email [email]`  
>配置分为三个优先级 从高到低为 --local --global --system

### 配置user多个键值对  
`git config --global --add user.name [name]`  
`git config --global --unset user.name [表达式]`  

### 查看配置用户
`git config --list --global`

### 配置git别名
`git config --global alias.co checkout`  
`git config --global alias.br branch`  
`git config --global alias.lol "log --oneline"`

git 工作流程
---
### git仓库
`git init [pro_name]` 创建默认仓库  
`git init --bare [pro_name]` 创建裸仓库  
`git init` 在当前文件夹下初始化仓库

### git工作
`git add [name]`  
`git status`  
`git commit -m "[]"`  
`git rm [name]`   把工作区和暂存区的引用全部删除  
`git rm --cached [name]` 删除暂存区的文件，用add重新添加跟踪   
`git mv` 为一系列操作  

git 分支
---
`git branch [name]` 新建分支  
`git branch -r` 查看远程分支
`git checkout [name]` 切换分支  
`git tag "[name]" [HASH]` 创建tag，可以用来切换历史版本分支，不用查看history  
`git tag` 查看所有tag  
`git show [branch_name/HEAD/HASH/tag_name]` 来查看分支内容  
`git checkout -b [new_branch_name]` 创建新分支并立即切换到新分支  
`git stash save -a "[msg]"` 将暂存区保存起来，未提交且切换分支时用  
`git stash list` 查看stash  
`git stash pop --index [stash_index]`  还原且还原暂存区  
`git stash apply --index [stash_index]` 还原且保留stash  
`git stash drop [stash_index]`  删除stash  
>不加stash_index会默认使用最上面的stash


`git stash clear` 一次性清理stash  
`git merge [branch_name]` 在当前分支下合并该分支  
`git merge --ablrt` 放弃本次合并  
`git push origin [name]` 创建远程分支(本地分支push到远程)  
`git push origin :headf/[name]` 删除远程分支
><<<<<<< HEAD 到 ======= 之间的内容为本分支的内容  
>到 >>>>>>> [branch_name] 之间的内容为合并分支内容  

撤销修改
---
`git checkou HEAD -- [name]` 还原到最新的提交到工作区
`#git reset HEAD [name]` 用历史提交还原缓存区
`git diff --cached` 查看与暂存区的内容