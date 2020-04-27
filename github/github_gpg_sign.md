# GitHub: 通过 GPG 签名来证明提交人身份

「写好代码咯，准备下班回家咯！」你为了可以快速升职加薪坐上总裁职位，在注释中拍着马屁写道

```
// 我们的老板世界第一帅
```

哪个公司没有一点喜欢眼红并且在自己肚子里酿醋的人呢？于是你对面座位的同事想了一招...

「把他给我叫过来！」老板命令着他的秘书，秘书跑到了你的工位让你赶紧去老板那里一趟；你完全还蒙在鼓里，美滋滋的以为老板要花时间好好奖赏你...

「什么？！这不可能是我写的，不可能！」你望着这陌生的注释为自己辩解道，让我们看看注释上写了什么

```
// 我们老板真的蠢得跟猪一样，把HR泡了为了讨好HR还去开了CTO，真不知道这个人是脑子没长还是脑子长霉
```

「什么不可能，这提交记录放在这里，这不是你的名字你的头像？还敢狡辩？去跟HR报道吧」

......

你或许发现了一件事情，在 `git config --global user.email` 的时候填写的是其他人的邮箱的话，commit 记录中会出现那个人的头像和名字哦；现在你应该知道那位「眼红吃醋」的同事做了些什么吧？没错，他用了你的身份写了一些老板的坏话并且提交

而今天，为了避免各位出现这样的事情，在这里要花上些时间跟各位唠唠如何证明在 GitHub 上提交的人是你

## PGP 和 GPG
说到 GPG 这个东西不得不说到 PGP；这两位光是名字就很像,实际上他们的作用也很相似;所以 GPG 和 PGP 到底是什么关系?

PGP 是一名叫做 **Philip R. Zimmermann, Jr.** 的人在 1991 年开发出来的一个软件；这个软件可以用于 `加密`, `解密`, `签名`, `验证(签名)`。不过因为是商业软件，因此自由度受到限制；就像腾讯的 QQ 一样，你可以免费下载和使用，但是你不能合法的修改和再分发里面的东西。

不过事情有了转折，在 1997 年的时候，原作者同意开放了一个新的互联网标准叫做 `OpenPGP`。有了这个标准，大家就可以开心的写出兼容 PGP 并且自由修改分发的加密软件了。

那 GPG 呢？GPG 的全名为 `GnuPG` 是属于 `GNU` 计划下的一个项目。`GNU` 项目对于各位熟悉 Linux 的朋友应该是耳熟能详，如果不了解也可以去[维基百科](https://zh.wikipedia.org/wiki/GNU%E8%A8%88%E5%8A%83)看看去。

GPG 是一个软件，遵守前面提到的 OpenPGP 标准进行开发，所以从技术和功能上都与 PGP 保持相似和兼容；唯一不同的是这个软件可以**被修改**和**自由分发**。

通常来说 GPG 只有一个命令行界面，当然也有很多开发者为 GPG 适配了前端界面使得大家可以通过简单的图形用户界面来操作 GPG 这个软件

## 大致工作原理

初次使用这类产品，我们需要产生一个 **密钥对** 分为 **公钥** 和 **私钥**

**公钥** 用于 `加密` 和 `验证签名` 而 **私钥** 用于 `解密` 和 `签名`

下面将会通过三个例子详细介绍

### 仅签名，无加密

同学A需要发送一个消息或者文件给同学B，为了验证这个消息或者文件就是同学A发送出来的，同学A通过他的 **私钥** 对消息或者文件进行了签名。同学B在校验这个消息或者文件是否真的来源于同学A的时候，同学B只要存储有同学A的 **公钥** 就可以进行验证。

!> 例外情况，同学A的 私钥 和 私钥密码 被人同时获取到，才能用同学A的身份签名

### 仅加密，无签名

同学A需要发送一个消息或者文件给同学B，不过这次是一些较为私密的东西，因此同学A需要进行加密才能发给同学B。同学A需要通过同学B的 **公钥** 进行加密，加密出来的消息或者文件 **只有公钥对应的私钥** 才能解锁；换句话说，只有同学B能进行解锁。如果要发给多个人的时候，同学A也可以使用 **多公钥** 加密，这样这个消息或者文件就有多个人可以解锁。

!> 当然也有例外情况，同学B的 私钥 和 私钥密码 同时被人获取到，才能用同学B的身份进行消息或者文件的解锁

### 加密与签名

这一次，同学A发给同学B的消息或者文件不单单要进行加密，还要进行签名。同学A同时用同学B的 **公钥** 进行加密，并且用同学A自己的 **私钥** 进行了签名。于是，出来的消息或者文件就带有了同学A的签名信息。当同学B使用自己的 **私钥** 解密消息或者文件的时候，软件会自动检测里面的签名信息，如果签名人的 **公钥** 已经存储在同学B的电脑中，那么软件会自动显示 **签名人有效**。如果软件显示 **未知签名人** 之类的提示，那么可以确定的是这个消息或者文件的来源是同学B不知道的人。

## 使用 GPG

### Windows

在 Windows 下使用 GPG 是一件非常简单的事情，因为在安装 [Gpg4win](https://www.gpg4win.org/index.html) 的时候它就会自动安装一个带有图形界面的密钥管理软件 - `Kleopatra`

要开始安装，首先需要到 [Gpg4win](https://www.gpg4win.org/index.html) 的官网

![image.png](https://i.loli.net/2020/04/23/xHDbPYEkTzCqOFJ.png)

然后点击 Download 按钮即可

![image.png](https://i.loli.net/2020/04/23/bKpTYZBLXHquiQC.png)

安装步骤十分简单，一般来说就是无脑下一步；安装完成后你应该会看到你的桌面上有一个 `Kleopatra`

![image.png](https://i.loli.net/2020/04/23/H4gUMkOJo6SsL17.png)

在你第一次使用 Kleopatra 的时候软件会自动打开密钥新建窗口

![image.png](https://i.loli.net/2020/04/23/4cRNWbuxlVySsdL.png)

如果这个窗口没有被自动打开，请在菜单栏中找到 `文件 (F)` 然后点击 `新建密钥对`

![image.png](https://i.loli.net/2020/04/23/HMY9n8RmCeqguAo.png)

接下来选择 `创建个人 OpenPGP 密钥对`

按照指示输入名字和电子邮件

!> 虽然你可以随便输入，不过我们并不推荐你这么做

![image.png](https://i.loli.net/2020/04/23/TEBysvoZ1h7AfKS.png)

接下来出现的这个界面请求你设置一个私钥密码

![image.png](https://i.loli.net/2020/04/23/q1cHJwEKR7Qhvp8.png)

然后，大功告成！

![image.png](https://i.loli.net/2020/04/23/dJHPGrKhkfMs3Sl.png)

你现在已经成功建立了一个密钥对 - 公钥 和 私钥

### macOS

在 macOS 下使用 GPG 也有一个带有图形界面的客户端，首先先前往 [GPG Tools](https://gpgtools.org/) 的官网并且下载和安装

![image.png](https://i.loli.net/2020/04/23/6sV51cgh4PzkvN2.png)

双击 `Install` 打开安装器

![image.png](https://i.loli.net/2020/04/23/Ovb5PAwysaeXB1d.png)

在这个页面中同样无脑进行下一步，不过在安装过程中可能会请求你输入 **macOS 的登陆密码** 进行软件安装

安装后打开 `GPG Keychain`

![image.png](https://i.loli.net/2020/04/23/p9cYmZX4KdFjSU5.png)

点击位于左上角的 `New` 按钮

![image.png](https://i.loli.net/2020/04/23/8f7pJ4HSZrVqxjs.png)

输入一些相关信息之后点击 `Generate Key`

![image.png](https://i.loli.net/2020/04/23/RkS6o4Dyji2PYsU.png)

新建完成后软件可能会询问你是否将你的公钥上传到密钥服务器中

![image.png](https://i.loli.net/2020/04/23/a1R7edyUlbH3fuv.png)

这里我们暂时选择否认答案

至此，在 macOS 上进行 GPG 密钥对的生成也已经完成

### Linux (以 Ubuntu 发行版为例)

在 Ubuntu 发行版中，GPG 已经被系统默认安装，因此可以直接调用 GPG 命令

打开终端，开始输入以下命令

```shell
gpg --gen-key
```

并且根据提示输入姓名与电子邮件信息，软件将会输出类似于以下信息

```
gpg (GnuPG) 2.2.4; Copyright (C) 2017 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Note: Use "gpg --full-generate-key" for a full featured key generation dialog.

You need a user ID to identify your key; the software constructs the user ID
from the Real Name, Comment and Email Address in this form:
    "Heinrich Heine (Der Dichter) <heinrichh@duesseldorf.de>"

真实姓名： Huijie Chen
电子邮件地址： [Email Addr]
您选定了这个用户标识：
    “Huijie Chen <Email Addr>”

Change (N)ame, (E)mail, or (O)kay/(Q)uit? 
```

通过 `N` 键可以修改名字 `E` 可以修改邮件地址 `O` 进入下一步 `Q` 则退出

按 O 进入下一步

软件将会有弹窗让我们设定一个私钥密码，设置后软件将会有以下提示

```
我们需要生成大量的随机字节。这个时候您可以多做些琐事(像是敲打键盘、移动 鼠标、读写硬盘之类的)，这会让随机数字发生器有更好的机会获得足够的熵数。
```

在这个时候，我们可以疯狂的点击鼠标和敲击键盘，持续 15 - 30秒 左右你的密钥对将生成完成

## 在 GitHub 上设定 GPG 公钥

首先前往 GitHub 并且点击右上角个人头像中的 `Settings`

![image.png](https://i.loli.net/2020/04/23/e3IWVY96DtQbcry.png)

选择 `SSH and GPG Keys`

![image.png](https://i.loli.net/2020/04/23/iZT2zpOdLJBCK6t.png)

点击 `New GPG Key`

![](https://i.loli.net/2020/04/23/vF4prc6Azg2UVNd.png)

![image.png](https://i.loli.net/2020/04/23/1YNcvRTkE8nMpwP.png)

打开这个界面后，先把它放在一边；现在我们需要公钥

### 在 Windows 中取得 GPG公钥

打开 `Kleopatra`，右键刚刚新建好的密钥并且选择 `导出`

![image.png](https://i.loli.net/2020/04/23/tCO3aAlNmrLBvUf.png)

!> 请勿选择 导出绝密密钥，如果选择此选项，导出的将会是 私钥 而不是 公钥

![Japgl8.png](https://s1.ax1x.com/2020/04/23/Japgl8.png)

取个名字，保存

![Japq6U.png](https://s1.ax1x.com/2020/04/23/Japq6U.png)

右键刚存储好的公钥文件，打开方式选择记事本

打开出来的文件像这样

![Ja9i6O.png](https://s1.ax1x.com/2020/04/23/Ja9i6O.png)

复制里面的内容进入刚才我们打开的网页并且点击 `Add GPG Key` 即可

![Ja9a90.png](https://s1.ax1x.com/2020/04/23/Ja9a90.png)

### 在 macOS 中取得 GPG 公钥

对于 macOS 用户来说是非常简单的，在刚才网页的输入框中右键，点击 `OpenPGP: Insert My Key`

![JaC7sU.png](https://s1.ax1x.com/2020/04/23/JaC7sU.png)

软件可能会问你选择哪个 Key

![JaPiee.png](https://s1.ax1x.com/2020/04/23/JaPiee.png)

选择刚才我们新建好的后点击确定按钮，完成

### 在 Linux(Ubuntu) 中取得 GPG 公钥

在 Linux(Ubuntu) 中取得GPG公钥输入两个命令

```
gpg --output publickey --armor --export 邮箱/用户ID

cat publickey
```

- 邮箱/用户ID: 在这个地方替换为在生成密钥对时用的邮箱

然后将你得到的公钥复制进入 GitHub 中

## 让 Git 针对每次 commit 自动签名

### Windows

Windows 用户情况或许特殊一些

右键任意位置打开 `Git Bash`

![Jai0jf.png](https://s1.ax1x.com/2020/04/23/Jai0jf.png)

输入以下命令

```
git config --global commit.gpgsign true

git config --global user.signingkey 邮箱/用户ID
```

- 邮箱/用户ID: 在这个地方替换为在生成密钥对时用的邮箱

然后可能需要另外执行一个命令来指定 GPG 程序

目前我们的 GPG 软件位置在 `C:\Program Files (x86)\GnuPG\bin\gpg.exe`

![JaiW3q.png](https://s1.ax1x.com/2020/04/23/JaiW3q.png)

```
git config --global gpg.program "C:\Program Files (x86)\GnuPG\bin\gpg.exe"
```

至此，以后所有的 commit 都会自动调用 GPG 进行签名

### macOS 与 Linux(Ubuntu)

macOS 和 Linux(Ubuntu) 不需要指定 GPG 程序，如果软件抽风发生需要手动指定 GPG 程序的情况，请按照上述方法手动查找 GPG 软件路径然后使用上述命令进行设定

一般来说，macOS 和 Linux(Ubuntu) 用户只需要执行

```
git config --global commit.gpgsign true

git config --global user.signingkey 邮箱/用户ID
```

- 邮箱/用户ID: 在这个地方替换为在生成密钥对时用的邮箱

即可

每次 commit 都会自动签名

## 试试

设定完后，我们随便对一个文件进行修改并且 Push 到 GitHub 中，你发现了什么？

从原来的 GitHub 自带 GPG 公钥变成了自己的公钥

- GitHub GPG 公钥

![JaFJMV.png](https://s1.ax1x.com/2020/04/23/JaFJMV.png)

- 自己的 GPG 公钥

![JaFM5j.png](https://s1.ax1x.com/2020/04/23/JaFM5j.png)

本篇结束