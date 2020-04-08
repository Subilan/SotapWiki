# GitHub: 入门

GitHub 无疑是目前全球最知名，使用人数最广的源代码托管和协作平台之一。或许你有想改进 SoTap 中某些项目的想法，但是却因为不能很好的理解 GitHub 而望而却步；因此，我们将共同在这里编写一篇有关于 GitHub 的教程。

## 什么是 Git，GitHub 又是什么

很多人会将 Git 和 GitHub 搞混。没错，GitHub 跟 Git 的关系非常亲密，但是 GitHub 有很大部分功能实际上并不包括在 Git 的范畴；接下来我们先说说 Git。

首先，我们说一个概念——Git 是一个**版本控制系统**。它负责追踪你指定的文件的内容新增，修改和删除，并且在必要时可以让你来回穿梭文件版本；GitHub 则是通过 Git 进行代码托管，版本记录的线上**社区**，后面我们会提到哪些功能属于 Git 的范畴，哪些则属于 GitHub 的范畴。

## 注册 GitHub 

要开始我们的 GitHub 之旅，就需要注册一个 GitHub 账号。注册账号只需要打开 [GitHub](https://github.com) 官网就能看到一个注册框。没有看到？也没关系，点击右上角的 Sign Up 即可，按照提示填写信息，完成邮件验证你就可以进入到 GitHub 的主页了。

## 新建仓库

在 GitHub 中，存储代码的地方我们叫做仓库。`Repositories` 的旁边有一个 **New** 的按钮，在那里我们只需要填写一些仓库的基本信息就可以建立出一个仓库了。

![](https://i.loli.net/2020/04/08/eysEltxXBJ6NWkf.jpg)

基本上，必填的内容仅包含如下两项：
- Repositories name: 仓库名字
- Public / Private: 公开仓库 / 私人仓库

对于其它的项目，则都是按需填写：
- Description：对项目的简短介绍信息
- Initialize this repository with a README：使用 README 初始化项目。此项是否被选中将决定项目是否可以直接被 `clone` 并修改。它们的区别会放在后文中详细解释。
- Add .gitignore：根据语言选择默认的忽略文件。
- Add a license：选择开源协议。如果不知道选取何种协议，可以阅读[此处](https://choosealicense.online/)

!> 此网址 <https://choosealicense.online/> 非官方网址，只是为了能让读者更好理解，我们搜寻了此中文版本。官方英文版可以在[这里](https://choosealicense.com/)找到

那么，我们作为新手，填写好仓库名字，然后选择是否公开之后，一个属于你的仓库就建立完毕了。

进入到[下一章节](/github/git_first_commit)，我们开始来看看 Git 的基本命令和用法
