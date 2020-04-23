# Git: 版本穿梭 (第一讲)

在这一章节中，将会引入版本穿梭的知识点。

版本穿梭可是 Git 的一个重头戏，因此会在不同的章节中将所有 **不同阶段** 的版本穿梭给讲完；而今天，要讲的是有关于 **已经提交了** 的版本穿梭

如何定义 **已经提交** ？已经提交指的是你不仅仅进行了 `git add` 操作，并且还进行了 `git commit` 操作，这就算已经提交

## 使用

今天要学习三个主要命令: `git log`, `git reset` 和 `git reflog`

### 查看提交记录 - `git log`

通过 `git log` 命令可以看到我们的提交记录，让我们来执行一下吧

![image.png](https://i.loli.net/2020/04/21/NFc25stnxQCVPTO.png)

从下到上分别是我们的第一次提交 (红色) 和 最新的一次提交 (绿色)

在这里能看到一些信息，把上面图片所展现的东西变成文字慢慢剖析

```
$ git log
commit 1224d4a7b93e2790e8223f436da7cb6daf25bc79 (HEAD -> master)
Author: 黄焖Jimmy饭 <jimmy@mail.jimmy0w0.me>
Date:   Tue Apr 21 01:19:47 2020 +0800

    Finished

commit 866eadeddfd96c07aebd52eddf72356aa0c8a3ca
Author: 黄焖Jimmy饭 <jimmy@mail.jimmy0w0.me>
Date:   Tue Apr 21 01:12:22 2020 +0800

    Add some story

commit ee7dd6bc375b9d132933230ae185bb9fa27f41bf
Author: 黄焖Jimmy饭 <jimmy@mail.jimmy0w0.me>
Date:   Tue Apr 21 01:08:23 2020 +0800

    Create story.txt
```

- commit `<SHA-1>`: 你可以看到 commit 后面跟了一串很长的东西，这是一个 `SHA-1` 校验码，你可以看作是一个每次提交的独特的「身份证」

- Author `<UserName> <Email>`: 这里显示了提交人的用户名和邮箱

- Date `<Date> <Time> <Year> <TimeZone>`: 在这，你可以看到本次提交的日期，时间和时区

- Message: 时间下面的内容显示的是我们每次提交时候的留言信息

虽然这样我们是能看到每次提交的记录了，不过我想看每次提交修改了什么呢？

可以使用 `git log -p` 来看到我们的改动，就像这样:

![image.png](https://i.loli.net/2020/04/21/qrjL3VE4XN1OCJa.png)

瞧，这样每个提交的变动信息就显示出来了

你可能会发现，糟糕，无法退出这个界面了；别急，按一下键盘上的 `q` 键就可以退出了

### 回退 - `git reset`

通过 `git reset` 命令，可以将工作目录回退到某个 **已经提交** 的版本；在今天的教程中，仅仅会使用到一种回退命令 `git reset --hard <HEAD / commit_ID>`。先暂时不用理会这个 `--hard` 到底是什么东西，今天所要做到的任务，就是将故事还原到刚刚开始，并且再穿越回来。开始吧:

- HEAD / commit_ID: 这是一个选择，你可以使用 `HEAD` 方法来指定回退版本，或者使用 `commit_ID` 的方法来指定某个回退版本，等会会解释到。

首先用 `git log` 来看看现在的情况

![image.png](https://i.loli.net/2020/04/21/9sOLrqfySFwUJXp.png)

注意到这里

```
$ git log
commit 1224d4a7b93e2790e8223f436da7cb6daf25bc79 (HEAD -> master)
Author: 黄焖Jimmy饭 <jimmy@mail.jimmy0w0.me>
Date:   Tue Apr 21 01:19:47 2020 +0800

    Finished
```
有一个 `(HEAD -> master)` 了吗？ `HEAD` 是一个指针，它所在的地方就是目前的版本

来看看故事是什么样的

![image.png](https://i.loli.net/2020/04/21/CVkDwraPBKf5vG7.png)

现在通过 **两种方法的其中之一方法** 来进行版本回退 `HEAD~<number>`

从目前已经完成的版本回退到最初的版本经历了**两次**提交，因此使用这行命令: `git reset --hard HEAD~2`

![image.png](https://i.loli.net/2020/04/21/s4fOFtDReqhW57b.png)

棒，故事的开端又回来了

第二种方法是通过 **commit_ID** 来定位版本，还记得前面 `git log` 中提到的 commit 的 「身份证」吗？现在它派上用场了

为了让 Git 可以更好的查找到某次提交，在输入 Commit ID 的时候最好输入它的 **前七位字符**

第一个版本的 Commit ID 的前七位字符为 `ee7dd6b`，因此使用此命令: `git reset --hard ee7dd6b`

![image.png](https://i.loli.net/2020/04/21/Bu8WbMIGitskV39.png)

依旧返回成功，假设，突然又觉得完成的版本挺好的，想再次回去要怎么办？

你想再用 `git log` 查的时候发现，找不到新的版本了；所以要请出今天最后的主角:

### 操作记录 - `git reflog`

对比 `git log`, `git reflog` 的区别在于它记录了你的操作，它像是一个最后保障，防止一时手误导致重大错误

![image.png](https://i.loli.net/2020/04/21/o8DErfWxLHzwX7Q.png)

从这张图中可以看到，我们从 `1224d4a` -- 也就是故事最终完结的地方将 `HEAD指针` 移动到了 `ee7dd6b` -- 故事最开始的地方

现在已经确认完整版的 Commit ID，接下来再用一次 `git reset --hard 1224d4a` 就可以穿越回到故事完结的地方啦

![image.png](https://i.loli.net/2020/04/21/RrmtZvV6GEid2OS.png)

## TIP

如果你在使用的编辑器为 `Visual Studio Code`，这里有一款不错的 Git 可视化插件: `Git Graph`

![image.png](https://i.loli.net/2020/04/21/pc9yKhfHkzunMxJ.png)

![image.png](https://i.loli.net/2020/04/21/FS23EIZtDGfo4VN.png)

![image.png](https://i.loli.net/2020/04/21/IMvJ6c9BoxghuU8.png)