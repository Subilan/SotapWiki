# 生态系统

**生态系统**（Ecosystem）在通俗意义上可以理解为「围绕一个特定的主体发展的与之有关的拓展内容」，它们之间通常是相互依存、相互联系的，就好像是地球生态系统一样。通常情况下，在这种意义上的生态系统中的成员都为一个特定主体或者广泛主题发挥作用。SoTap 目前的生态系统只能停留在网页方面，在之后我们会发展更多。

本页面主要详细介绍 SoTap 生态系统的内容，以及与之相关的信息。你可以在这里找到

- SoTap 的哪些网页都是用来做什么的？
- SoTap 目前有哪些开源项目？
- TBC

## 网站

SoTap 目前有两个主域名，一个为 <https://sotap.org>，另一个为 <https://sotap.dev>。在这些主域名下建立了许多子域名，以下一一列举它们的作用。

### `sotap.org`

#### 官网 - `sotap.org`

**sotap.org** 是 SoTap 服务器的官方网站，在上面呈现了最新的介绍内容和生态系统的综合导航。如果你愿意将 SoTap 分享给他人，将该网站发送给他人即可。官网使用 PHP 编写，内容代码原先来自 SoTap 前上级机构 SunRise 所聘请的开发者，目前由 SoTap 管理组持续维护和更新。

#### 论坛 - `g.sotap.org`

![Flarum](https://img.shields.io/badge/forum-Flarum-E7742E?style=flat)
![php](https://img.shields.io/badge/based-php-474A8A?style=flat&logo=php)

**g.sotap.org**，「G 点」，是 SoTap 的官方论坛，使用开源 PHP 论坛程序 [Flarum](//flarum.org/) 搭建。

!> **G 点** 的英文为 **Gay Point**，意为「Gay 的聚集点」

#### 维基 - `wiki.sotap.org`

![CC BY-NC-ND 4.0](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)

**wiki.sotap.org** 是 SoTap 的维基页面，即本站，使用开源动态维基程序 [Docsify](//docsify.js.org) 搭建。维基由管理组和玩家共同维护，且在 GitHub 上有项目，可以点击[这里](//github.com/sotapmc/SotapWiki)查看。维基上的所有内容以 CC BY-NC-ND 4.0 进行发布。

维基是一个用于解释服务器内常见问题，或编写服务器有关事项（比如规则、经济系统介绍、FAQ 等）的地方，任何 SoTap 玩家都有修改的权力。同时，Wiki 的所有更新是公开透明的，均可以通过 GitHub 的 Commit 记录找到。维基目前已在开发手册上有了相关页面，[点此了解](https://book.sotap.org/#/wiki/index.md)

#### 更新日志 - `open.sotap.org`

![vue](https://img.shields.io/badge/front-Vue.js-brightgreen?style=flat&logo=vue.js)
![python](https://img.shields.io/badge/back-python-blue?style=flat&logo=python)

**open.sotap.org** 是一个用于编写服务器更新、崩溃、维护完成等事项的页面，可通过日期或 ID 对日志进行查询。对于每个日志的个体，我们习惯上称之为**事件**（event）。更新日志页面所使用的程序是 [Monologue](//github.com/sotapmc/Monologue)，前端使用 Vue.js 开发，后端使用 Python 开发。目前由 [@Subilan](//subilan.win) 和 [@WindSpirit](https://www.leviatan.cn/) 共同开发。

Monologue 是开源自由程序，使用 Apache-2.0 协议开源。

#### 游戏信息 - `stats.sotap.org`

!> 由于 NyaaStats 的更新停滞（1.16+），目前该网站处于持续故障状态。

![NyaaCat](https://img.shields.io/badge/poweredby-NyaaCat-ff6666?style=flat)

**stats.sotap.org** 是记录玩家游戏信息的页面，基于[喵窝](//nyaa.cat)（NyaaCat）开发的 [NyaaStats](//github.com/NyaaCat/NyaaStats)。玩家可以在此页面看到自己的在线时长、成就进度等。目前的更新频率是 20 分钟一次。同时该页面也是玩家领取成就奖励的证明方式之一。

### `sotap.dev`

#### 开发网 - `sotap.dev`

**sotap.dev** 是 SoTap 的开发者网站，主要的作用是用来区分 SoTap 在开发领域的各种事物与 SoTap 本身的游戏安排，因而注册了该域名。开发网是开源的，你可以在[这里](//github.com/sotapmc/sotapmc.github.io)找到它的仓库。我们不保证会在开发网上放置很多高深的内容，但会适当展示 SoTap 所制作的各种成品或半成品程序或插件。

#### 开发手册 - `docs.sotap.dev`

![CC-BY-SA-4.0](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

**docs.sotap.dev** 是编写一些开发层面的事项的 Wiki，你可以在此找到 SoTap 所开发的程序的详细信息。一般来说，一些简单的程序的 Wiki 将直接把开发手册作为落脚点，以小条目的形式展示出来。同时，你也可以在这里找到 Jimmy0v0 大佬编写的 Git/GitHub 教程——如果你想要对本 Wiki 做出贡献，或者对这方面有兴趣，不妨读一读吧。

#### SoTap API - `api.sotap.dev`

![not yet](https://img.shields.io/badge/opened-not%20yet-red)
![oython](https://img.shields.io/badge/base-python-blue?style=flat&logo=python)

**api.sotap.dev** 是 SoTap 的开放 API，使用 Python 部署。目前 API 还没有建设完成，唯一开放的是 Monologue 主程序，但也没有相关的文档，因此无法使用。

!> 目前 `api.sotap.dev` 没有对访问者进行验证，故没有敏感接口的存在。你可以通过这个 API 获取我们在 `open.sotap.org` 中发布的文章内容。具体请求格式暂无文档，感兴趣可以翻看 Monologue 代码。

#### SoTap Static - `static.sotap.dev`

**static.sotap.dev** 是 SoTap 的静态存储站，实则是腾讯云对象存储 COS 的一个 Bucket。为了便于记忆，使用反向代理来实现该域名的访问。该网站并没有任何界面，但你可以从任何指向它的已知链接获取到 SoTap 公开发布的资源。在一些插件中所需要的资源也会从这里获取。

SoTap Static 的费用将从日常玩家充值或捐赠中获取，若金额数目足够，将提供 CDN 加速服务。
