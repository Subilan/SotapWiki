# Git: 将本地仓库推送到远端仓库

这一章我们将会说明如何将你的本地仓库提交到远程仓库

返回到我们在GitHub建立的仓库中，到现在为止GitHub的仓库还空空如也，不过不用急，很快这个仓库就会有东西了

在GitHub的空仓库中你会看到一个以`.git`结尾的地址

就像这样: `https://github.com/JimmyRice/repoforteach.git`

首先我们需要将他复制下来，然后我们回到本地的仓库，右键，打开Git Bash

## 设定远程仓库

为了上传到远程仓库，我们需要让Git知道远程仓库指的是哪里

因此使用以下命令来告诉Git我们的远程仓库地址

```sh
git remote add <别名> <你的仓库地址>
```

这里有两个需要自己修改的地方:

- 别名: 别名的存在是因为通常来说Git远程仓库的地址都很长，因此我们可以设定一个别名来取代这个很长的地址，一般情况下大家都喜欢使用`origin`

- 仓库地址: GitHub显示给你的仓库地址，在GitHub仓库为空的时候你可以看到，或者点击`Clone Or Download`也可以看到Git仓库的地址

做个示范如下:

```sh
git remote add origin https://github.com/JimmyRice/repoforteach.git
```

现在，我设定了一个名为`origin`的远端仓库，它的地址就是`https://github.com/JimmyRice/repoforteach.git`

设定好远程仓库了，我们就可以提交了吗？别急，我们还需要再做一个设定，那就是...

## 用户名和邮箱

在上传之前，Git需要知道我们的用户名和邮箱，通过以下命令来进行设定

```sh
git config --global user.name 你的用户名
git config --global user.email 你的邮箱
```

这其中`--global`的意思为所有的本地Git仓库以后都会默认使用你的这个用户名和邮箱设定，以后会讲到如何在个别项目中使用不同的邮箱和用户名

接下来你就准备好上传本地仓库到远程仓库了

## 上传

上传的方式十分简单，以下命令就可以实现:

```sh
git push <别名> <分支: 一般是master>
```

这里也有两个地方需要注意:

- 别名: 同上，别名是你自己设定用于取代Git仓库地址的名字，例如`origin`

- 分支: GitHub的远程分支，默认有一个`master`分支

示范:

```sh
git push origin master
```

如此一来，你的文件和你的提交信息就一起上传到了GitHub中