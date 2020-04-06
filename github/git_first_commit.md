## Git: 开始你的第一次提交

[上一章](github/github_welcome)我们大致了解了GitHub和Git的关系，并且注册了GitHub账号，成功建立了第一个仓库

今天我们将会来了解如何使用Git进行你的第一次提交

## 安装Git

不同的操作系统安装Git的方法不一样，我们将会使用Windows系统进行示范

!> 如果您使用的是Linux发行版，一般已经自带有Git的客户端；对于使用macOS的同学可以在官网下载Git，也可以通过安装Apple官方的Developer开发工具集来安装Git

?> ❤️ 如果您在使用其他操作系统，并且有安装Git的经验，欢迎前来补充

首先我们前往[Git的官网](https://git-scm.com/)，它会自动识别出你的操作系统，并且在右边给出适用于你操作系统的Git版本下载

## 使用

在使用之前，我们还没有建立一个工作目录

因此我们可以建立一个文件夹，在里面放一些文件。我们不建议你放一些Microsoft Office的文件，例如以`.docx .xlsx .pptx`结尾的文件

虽然Git也可以跟踪他们的变化，但是GitHub无法正常的进行预览非文本文件，因此我们会建议你放一些文本文件，像代码，txt这类文件

当然，文件类型不是问题，你甚至可以不用文件后缀，Git照样可以给你跟踪变化

### 初始化 - Git init

前一章节我们只教了大家如何在远程建立一个仓库，现在我们将解释如何在本地建立一个仓库

在你的文件夹下右键，你会看到一个**Git Bash Here**，点下它之后会打开出一个Bash命令行

我们自豪的敲下`git init`命令

```
Jimmy@Jimmy-Laptop MINGW64 ~/Documents/Project/GitHub
$ git init
Initialized empty Git repository in C:/Users/Jimmy/Documents/Project/GitHub/.git/

Jimmy@Jimmy-Laptop MINGW64 ~/Documents/Project/GitHub (master)
$

```

当看到这个提示时，说明仓库已经成功建立了，从现在开始，在这个工作文件夹下可以**自由的使用Git命令**

### 暂存区 - Git add

当Git仓库建立后，就要让Git跟踪某个文件的修改，要做到这点我们需要将文件加入到`暂存区`，使用`git add <文件名>`来做到这点；如果你的工作文件夹下有多个文件，并且你想一次性将他们加入暂存区中，可以使用`git add .`来一次性将文件夹下的所有文件 (包括子文件夹下的所有文件) 一并加入暂存区中

### 提交 - Git Commit

当你准备好提交？使用`git commit -m "<留言内容>"` 例如 `git commit -m "我的第一次提交"`

接下来，你的提交就保存到了存储库中

## 图解

![](http://assets.processon.com/chart_image/5e8b25aae4b07e41dc2ebc1a.png)

首先文件通过`git add`从工作目录添加到暂存区，如果添加到暂存区的文件用户进行了修改，那么那个文件会从暂存区重新回到工作目录，用户需要再次使用`git add`重新添加到暂存区；接下来当用户决定要提交到仓库后，使用`git commit -m "<留言>"`来添加到仓库，当提交完成后，状态会再次回到工作目录中，等待下次修改。

在[下一章节](github/git_push_remote)中，我们会继续说明如何将你的本地仓库提交到远程仓库