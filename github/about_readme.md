# 附录：关于 README

**README**（读我）是一个广泛应用于开源社区的特殊文件，且不仅仅是开源社区，在很多压缩包、共享目录或者需要提供额外信息解释的位置，都有可能看到叫做「README」的文件。在当前时代，其通常以 `.md`（Markdown 文件）结尾。因此，我们通常在别人的项目目录中看到一个叫做 `README.md` 的文件。

此文件的内容大概围绕着对此项目的简介和周边信息（例如致谢、更改日志等）展开。在 GitHub 上，位于一个目录内的 README 文件会自动被解析后显示在当前页面底部。例如 SoTap Wiki 的 README：

![](https://i.loli.net/2020/04/08/MaE5xyW7QzuLJFC.jpg)

细心的你可能早已注意到，在之前创建项目时，我们可以看到有一个 `Initialize this repository with a README` 的选项，且我们提到过是否勾选此情况将造成两种不一样的结果。接下来，我们来详细解释一下勾选与不勾选的区别。

### 勾选

勾选以后创建，我们会被自动定向到项目页面。在这个页面中，会看到一个 `README.md` 文件。

![](https://i.loli.net/2020/04/08/oidRvMD4YxqfwWc.jpg)

此时，我们的项目**已经**是一个完整的项目，因而我们无需再进行先前的「设定远程仓库」以及其后的内容。我们唯一需要做的是找到小右上角绿色的「Clone or Download」按钮。此按钮用于快速将项目下载到本地，且有四种方式可选。

我们点击以后，可能第一个出现的是「Clone with HTTPS」，在下方列出的是以 `https` 开头的地址。

![](https://i.loli.net/2020/04/08/ucJgdUf9XeYAVl1.jpg)

如果我们想要修改以后提交，则不能使用此地址，而要使用 SSH 地址。我们点击「Use SSH」切换成 SSH：

![](https://i.loli.net/2020/04/08/S1rUQ5b7iYhTyek.jpg)

复制此地址（以 `git@github.com` 开头）后，按照[前文](/github/git_push_remote.md)的步骤挑选一个目录（此目录在下文中称为「当前目录」）后打开 Git Bash 执行

```sh
git clone <复制的地址>
```

!> 如果此时没有按照[使用 SSH 访问 GitHub](/github/github_ssh.md)中列出的步骤进行设置，则有可能因拒绝访问而无法下载

此时会自动下载（在这里我们称作「克隆」）这个项目到当前目录的一个与项目同名的文件夹。例如，当项目地址为 `git@github.com:Subilan/repoforteach.git` 时，它将会自动 `clone` 到当前目录下的一个叫做 `repoforteach` 的文件夹，这很好理解。

如果我们希望它将项目内容克隆到一个特定的目录，我们可以填写一个选填的参数 `[path]`。例如：

```sh
git clone <复制的地址> ~/example
```

此时，从项目 `clone` 的所有文件将会被放置在 `~/example` 这个目录下。

克隆完成以后，我们可以直接修改项目文件、创建新的文件、删除文件等，然后按照前文中我们所叙述的流程，进行 `git add`、`git commit` 和 `git push` 这三布，即可迅速将更改提交到项目中。

因此 `git clone` 相当于自动帮你设置了远程仓库地址，仅需下载下来更改即可。

### 不勾选

不勾选，打开项目后将与前文中列出的效果一样：

![](https://i.loli.net/2020/04/08/7pESCrtemWV4jyJ.jpg)

此时我们就需要手动使用本地 Git 设置远程仓库地址进行进一步操作。具体内容可以在[这里](/github/git_push_remote.md)找到。
