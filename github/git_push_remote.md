# Git: 将本地仓库推送到远端仓库

这一章我们将会说明如何将你的本地仓库提交到远程仓库。

返回到我们在 GitHub 建立的仓库中，到现在为止 GitHub 的仓库还空空如也，不过不用急，很快这个仓库就会有东西了。

![](https://i.loli.net/2020/04/08/7pESCrtemWV4jyJ.jpg)

在这里，你会看到一个以 `.git` 结尾的地址——就像这样: `https://github.com/JimmyRice/repoforteach.git`。

此时，我们需要在电脑上创建一个文件夹，用来存储这个项目。我们打开这个文件夹，右键空白处，选择「Git Bash Here」打开 Git Bash。

![](https://i.loli.net/2020/04/08/C2X8FspNBleGq5S.jpg)

## 设定远程仓库

点击之后，我们会发现打开了一个黑色的命令行窗口，接下来我们的工作将通过指令来完成。

为了上传到远程仓库，我们需要让 Git 知道远程仓库指的是哪里，因此我们需要使用以下命令来告诉 Git 我们的远程仓库地址

```sh
git remote add <alias> <repo>
```

此处有两个需要自己修改的地方:

- **alias**（别名）: 别名的存在是因为通常情况下 Git 远程仓库的地址都很长，因此我们可以设定一个别名来取代这个很长的地址，一般情况下大家都喜欢使用 `origin`，这就好比是我们习惯用 $ E $ 表示能量、$ v $ 表示速度等。

- **repo**（仓库地址）: GitHub 显示给你的仓库地址，也就是我们在前文中提到的，类似于 `https://github.com/JimmyRice/repoforteach.git` 的地址。注意后面带有`.git`后缀

**示例**

```sh
git remote add origin https://github.com/JimmyRice/repoforteach.git
```

现在，我设定了一个名为 `origin` 的远端仓库，它的地址就是 `https://github.com/JimmyRice/repoforteach.git`，在此之后，我们可以在特定场景内使用 `origin` 来代替此长地址。不过，根据前文的描述，我们同样可以把 `origin` 更换成其它名称。

那么，设定好远程仓库了，我们就可以修改后提交了吗？别急，我们还需要再做一个设定，那就是...

## 用户名和邮箱

在上传之前，Git 需要知道我们的用户名和邮箱，如果未设置，会让GitHub拒绝我们的Push。

通过以下命令来进行设定：

```sh
git config --global user.name 你的用户名
git config --global user.email 你的邮箱
```

其中，`--global` 的意思为**所有的**本地 Git 仓库在设置以后都会默认使用在这里设置的用户名和邮箱，我们在以后会讲到如何在个别项目中使用不同的邮箱和用户名。

接下来你就准备好上传本地仓库到远程仓库了。

## 上传

上传的方式十分简单，以下命令就可以实现:

```sh
git push <alias> <branch>
```

这里也有两个地方需要注意:

- **alias**（别名）: 同上，别名是我们在上文中设置的 `origin`，用于代替项目实际地址。

- **branch**（分支）: GitHub 的远程分支，一般情况下我们会填写 `master`，因为每个项目在创建之初默认有一个分支叫做 `master`。

示范:

```sh
git push origin master
```

如此一来，你的文件和你的提交信息就一起上传到了 GitHub 中。

## 拓展阅读

[附录：关于 README](/github/about_readme.md)
