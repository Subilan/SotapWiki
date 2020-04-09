# Git: 开始你的第一次提交

[上一章](github/github_welcome)我们大致了解了 GitHub 和 Git 的关系，并且注册了 GitHub 账号，成功建立了第一个仓库。今天我们将会来了解如何使用 Git 进行你的第一次提交。

## 安装 Git

不同的操作系统安装 Git 的方法不一样，接下来我们将会使用 Windows 系统进行示范。

!> 如果您使用的是 Linux 发行版，一般已经自带有Git的客户端；对于使用 macOS 的同学可以在官网下载 Git，也可以通过安装 Apple 官方的 Developer 开发工具集来安装 Git

?> ❤️ 如果您在使用其他操作系统，并且有安装 Git 的经验，欢迎前来补充

首先我们前往 [Git 的官网](https://git-scm.com/)，它会自动识别出你的操作系统，并且在右边给出适用于你操作系统的 Git 版本下载。点击「Download `版本号` for `系统名称`」下载后安装即可。

![](https://i.loli.net/2020/04/07/bahdQH5WvRsjACS.jpg)

## 使用

在使用之前，我们需要建立一个工作目录。我们可以建立一个文件夹，在里面放一些文件。

不过，我们不建议你放一些 Microsoft Office 的文件，例如以 `.docx`、`.xlsx`、`.pptx` 结尾的文件。虽然 Git 也可以跟踪它们的变化，但是 GitHub 无法正常的进行预览此类非文本文件，因此我们会建议你放一些文本文件，像代码，txt 这类文件等。

当然，文件类型不是问题，你甚至可以不用文件后缀，Git 照样可以跟踪它们的变化。

### 初始化 - `git init`

前一章节我们只教了大家如何在远程建立一个仓库，现在我们将解释如何在本地建立一个仓库。

在你的文件夹下右键，你会看到一个 **Git Bash Here** 的选项，点击之后会打开一个 Bash 命令行。

我们自豪的敲下 `git init` 命令

```
Jimmy@Jimmy-Laptop MINGW64 ~/Documents/Project/GitHub
$ git init
Initialized empty Git repository in C:/Users/Jimmy/Documents/Project/GitHub/.git/

Jimmy@Jimmy-Laptop MINGW64 ~/Documents/Project/GitHub (master)
$

```

当看到这个提示时，说明仓库已经成功建立了，从现在开始，在这个工作文件夹下可以**自由地使用 Git 命令**。

### 暂存区 - `git add`

Git 仓库建立后，就要让 Git 跟踪某个文件的修改。要做到这点，我们需要将文件加入到`暂存区`，使用 `git add <文件名>` 可将文件加入暂留区。

如果你的工作文件夹下有多个文件，并且你想一次性将它们全部加入暂存区中，可以使用 `git add .` 来一次性将文件夹下的所有文件（包括子文件夹下的所有文件）一并加入暂存区中。

### 提交 - `git commit`

当你准备好提交的时候，使用 `git commit -m "<留言内容>"`，例如 `git commit -m "我的第一次提交"`，即可将当前暂留区中存储的对文件的修改信息正式提交到项目中。

?> ✅ 我们推荐使用 `-m` 参数指定一个留言内容，这样便于我们在查阅日志时迅速了解您所做出的更改。

## 图解

![](https://i.loli.net/2020/04/07/rRYLAZbcsQiCMTx.png)

首先文件通过 `git add` 从工作目录添加到暂存区，接下来当用户决定要提交到仓库后，使用 `git commit -m "<留言>"` 添加到仓库。但这个流程并不完整，因为对文件的修改到此时仍然只存在于我们的电脑上。在[下一章节](github/git_push_remote)中，我们会继续说明如何将你的本地仓库提交到远程仓库。

?> 文件被添加到暂存区之后，用户又对其进行了修改，那么那个文件会从暂存区重新回到工作目录，用户需要再次使用 `git add` 重新添加到暂存区；当提交完成后，状态会再次回到工作目录中，等待下次修改。

