# EusMC Wiki

这里是 EusMC 的官方维基文档 GitHub 仓库，目前挂载在 GitHub Pages 上，实际上使用自定义域名 <https://wiki.eumc.cc>。使用 [Docsify](//docsify.js.org) 搭建，并自定义了部分布局样式。

## 贡献

如果需要对 Wiki 内容提出修改，请直接 `clone` 以后修改相应文档的内容，发起 [Pull Request](https://github.com/EusMC/EusMC-Wiki/pulls) 即可。本 Wiki 的目录结构：

```tree
EusMC Wiki
│   .nojekyll
│   changelog.md
│   CNAME
│   common-problems.md
│   custom.css
│   index.html
│   index.md
│   introduction.md
│   overview.md
│   README.md
│   rules.md
│   _404.md
│   _sidebar.md
│
├───getting-started
│       basic-commands.md
│       entering-server.md
│       preparation.md
│
└───others
        commands-for-players.md
```
|文件名称|用途|
|:-:|:-:|
|`.nojekll`|阻止 GitHub 在渲染时忽略掉以 `_` 开头的文件|
|`CNAME`|GitHub 的自定义域名配置，一般不修改|
|`custom.css`|页面的自定义布局样式，可以添加一些自有的样式|
|`index.html`|整个文档的入口页面和 Docsify 的配置位置，可以在这里配置 Docsify|
|`README.md`|GitHub README|
|`_404.md`|404 页面|
|`_sidebar.md`|侧边栏，可以在这里找到文档中的所有文章|

其余的均为文档。文档列表可以在 `_sidebar.md` 里面找到。

在要编辑页面的时候，先打开 `_sidebar.md`，在里面找到你要编辑的页面后，找到相应的文件进行编辑。`getting-started`、`others` 等目录用作文档分类用途，在路由渲染的时候会被定向为 `/#/getting-started/...`。

## 路由重写

我们还是非常希望使用 `history` 的路由模式的，但是这将会用到重写功能。GitHub 为了考虑安全问题禁止了这一点，因此，在 GitHub 上托管的时期，我们均会使用 `hash` 模式进行发布。

## 提出问题

可以选择在 GitHub 的 [Issue](https://github.com/EusMC/EusMC-Wiki/issues) 里提出或者直接在文档下的 GitTalk 评论。
