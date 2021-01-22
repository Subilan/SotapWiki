# 生态系统

**生态系统**（Ecosystem）在通俗意义上可以理解为「围绕一个特定的主体发展的与之有关的拓展内容」，它们之间通常是相互依存、相互联系的，就好像是地球生态系统一样。通常情况下，在这种意义上的生态系统中的成员都<ruby>为<rt>wèi</rt></ruby>一个特定主体或者广泛主题发挥作用。SoTap 目前的生态对外呈现为不同功能的网页。

本页面主要详细介绍 SoTap 的网页生态系统。

## 域名

SoTap 目前拥有两个域名，`sotap.org` 与 `sotap.dev`。在前者基础上所开设网页的大多与服务器本身有关，在后者基础上所开设的网页大多与服务器建设与开发事务有关。

### `sotap.org`

#### 官网 `sotap.org`
![vue](https://img.shields.io/badge/base-vue-brightgreen?style=flat&logo=vue.js)

**sotap.org** 是 SoTap 服务器的官方网站，在上面呈现了最新的介绍内容。如果你愿意将 SoTap 分享给他人，将该网站地址发送给他人即可。官网是 SoTap 铺设全面介绍自身和对外宣传信息的根本载体。

目前官网正在经历重写中（2021 年 1~2 月），其内容将发生较大的变动。

#### 论坛 `g.sotap.org`

![Flarum](https://img.shields.io/badge/forum-Flarum-E7742E?style=flat)
![php](https://img.shields.io/badge/base-php-474A8A?style=flat&logo=php)

**g.sotap.org**，「G 点」，是 SoTap 的官方论坛，使用开源 PHP 论坛程序 [Flarum](//flarum.org/) 搭建。

!> **G 点** 的英文为 **Gay Point**，意为「Gay 的聚集点」

#### 维基 `wiki.sotap.org`

![CC BY-NC-ND 4.0](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)

**wiki.sotap.org** 是 SoTap 的维基页面，即本站，使用 [Docsify](//docsify.js.org) 搭建。维基由管理组和玩家共同维护，且在 GitHub 上有公开项目，可以点击[这里](//github.com/sotapmc/SotapWiki)查看。维基上的所有内容以 CC BY-NC-ND 4.0 共享。

维基是一个用于解释服务器内常见问题，或编写服务器有关事项（比如规则、经济系统介绍、FAQ 等）的地方。Wiki 的所有更新是公开透明的，均可以通过 [GitHub 的 Commit 记录](//github.com/sotapmc/SotapWiki/commits/v2)找到。维基目前已在开发手册上有了相关页面，[点此了解](https://book.sotap.org/#/wiki/index.md)。

#### 更新日志 `open.sotap.org`

![vue](https://img.shields.io/badge/front-Vue.js-brightgreen?style=flat&logo=vue.js)
![python](https://img.shields.io/badge/back-python-blue?style=flat&logo=python)

**open.sotap.org** 是一个用于编写服务器更新、崩溃、维护完成等事项的页面，可通过日期或 ID 对日志进行查询。更新日志页面所使用的程序是 [Monologue](//github.com/sotapmc/Monologue)，前端使用 Vue.js 开发，后端使用 Python 开发，程序由 [@Subilan](//subilan.win) 和 [@WindSpirit](https://www.leviatan.cn/) 共同开发。

#### 游戏信息 `stats.sotap.org`

![NyaaCat](https://img.shields.io/badge/poweredby-NyaaCat-ff6666?style=flat)

**stats.sotap.org** 是记录玩家游戏信息的页面，基于[喵窝](//nyaa.cat)（NyaaCat）开发的 [NyaaStats](//github.com/NyaaCat/NyaaStats)。玩家可以在此页面看到自己的在线时长、成就进度等。目前的更新频率是 20 分钟一次。同时该页面也是玩家领取成就奖励的证明方式之一。

### `sotap.dev`

#### 开发者首页 `sotap.dev`

![CC BY-NC-ND 4.0](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)

**sotap.dev** 是 SoTap 的开发者网站，主要的作用是用来区分 SoTap 在开发领域的各种事物与 SoTap 本身的游戏安排，因而注册了该域名。开发者网页是开源的，你可以在[这里](//github.com/sotapmc/sotapmc.github.io)看到它的源码。该网站假设在 GitHub Pages 上，因而你也可以通过 <https://sotapmc.github.io> 来访问它。

我们不保证会在开发网上放置很多高深的内容，但会适当展示 SoTap 所制作的各种成品或半成品程序或插件。

#### 开发手册 `docs.sotap.dev`

![CC-BY-SA-4.0](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

**docs.sotap.dev** 是编写一些开发层面的事项的 Wiki，你可以在此找到与 SoTap 有关开发事项的详细信息。

一般来说，一些由 SoTap 编写的简单程序的介绍和使用方法等将直接放在开发手册上，以小条目的形式展示出来。同时，你也可以在这里找到 [Jimmy0v0](https://moe.jimmy0w0.me/) 大佬编写的 Git/GitHub 教程——如果你想要对本 Wiki 做出贡献，或者对这方面有兴趣，不妨读一读吧。

#### SoTap Static `static.sotap.dev`

**static.sotap.dev** 是 SoTap 的静态存储站，实则是腾讯云对象存储 COS 的一个 Bucket。为了便于记忆，使用反向代理来实现该域名的访问。该网站没有任何界面，但你可以从任何指向它的已知链接获取到 SoTap 公开发布的资源。在一些插件中所需要的资源也会从这里获取。

SoTap Static 的费用将从日常玩家充值或捐赠中获取，若金额足够，将提供 CDN 加速服务。
