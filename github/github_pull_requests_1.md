# GitHub: Pull Requests (第一讲)

**Pull Requests** 是 GitHub 当中重要的一环，是在 GitHub 进行共同协作中无法缺少的一部分。**Pull Requests** 也简称 **PR**，因此下面文章将会使用 **PR** 这个简称代替全称 **Pull Requests**。

## PR 是做什么的

如果你在一个项目里面 **没有直接 Push 到仓库** 的权限，你首先要进行一个叫做 **Fork** 的操作 (下文会说明)，简单来说就是将一个项目复制到了你的账户下，你在复制出来的项目中做的任何修改都不会影响到原本的仓库。当你做完修改以后，想将代码提交到原本的仓库就需要到 PR 出场了。PR 可以向原仓库的拥有者或者管理者发出一个请求，他们可以看到你修改了什么，并且提出建议或者进行文件修改。当大家达成一致，认为可以合并到原仓库后，拥有者或者管理员就可以合并进去。

### 关于名字

有部分用户不解为什么 Pull Requests 不叫作「Push Requests」，而根本原因就在于你没有 Push 权限，你是复制了一个项目到你的账户下，修改后发出一个请求让别人来 Pull (拉取) 你仓库里的内容，因此叫做 Pull Requests

## Fork

Fork 的核心功能是将一个仓库复制到你的账户下，你拥有复制仓库里所有的权限，可以直接进行 Push 也可以处理别人发来的 PR 等等

## PR

本文的核心来了，PR 的操作实际上十分简单，因为 GitHub 有着较好的图形化界面，不想前面几篇主要是针对 Git 的命令行界面进行教程。

点进一个即将要进行编辑的项目，在右上角的三个功能按钮中点击 `Fork`

![](https://s1.ax1x.com/2020/04/30/JbkWR0.png)

选择自己的用户名

![JbkzLD.png](https://s1.ax1x.com/2020/04/30/JbkzLD.png)

接下来这个仓库就是属于你的了

![JbEMnO.png](https://s1.ax1x.com/2020/04/30/JbEMnO.png)

你可以选择将这个项目克隆到本地进行编辑，也可以直接在 GitHub 的线上进行编辑；当然这不在本文章的教程之内，不进行赘述

假设当你编辑完毕之后，你就可以准备提交一个 PR 了

![JbEhbF.png](https://s1.ax1x.com/2020/04/30/JbEhbF.png)

在这里找到 `New Pull Requests` 按钮后进入到这个页面

![JbV9PA.png](https://s1.ax1x.com/2020/04/30/JbV9PA.png)

这边的 `head repository` 可以简单理解为源头，而 `base repository` 则可以简单理解为目的地；默认情况下 GitHub 已经为我们设置好了，因此我们并不需要改动这部分设置

然后点下 `Create pull request` 来到撰写标题和说明的窗口

![JbVcIH.png](https://s1.ax1x.com/2020/04/30/JbVcIH.png)

填写好这些后再次点下 `Create pull request` 即可成功建立

接下来等待拥有者或者管理员审核通过即可