# NyaaUtils 插件指南
NyaaUtils 插件，也是我们常说的 nu，包含了多类杂项辅助功能。

## 插件介绍

- 更改前/后缀 
可以修改在游戏内聊天以外的场合显示的名称前后文字，可以带有颜色代码。

- 物品展示
可以展示手中的物品。

- 物品框保护功能
可以保护物品框里面的物品，不能被转动、取出，物品框不能被破坏。另外，右键被保护的物品框可以看到物品详情。
在展示框中展示成书时，右键可以查看成书内容。\[待查证\]

- 物品重命名
可以重命名手中的物品，按单个物品收费。如果手中持有 64 个物品，则收费 64 次。

- 预编辑告示牌
手持一个或多个告示牌使用指令，可以预编辑告示牌内容。指令如下：
```minecraft 
/nu se sign <行数> `<内容>`
```
执行后，放置该告示牌，直接点击“完成”，可见以此法编辑的文字。

编辑后，内容会以NBT标签的形式存储，持久保存，直至被放置，故此，编辑过的告示牌会与未编辑者分开存放。
告示牌放置并拆除后，将恢复未编辑状态。

?> 在放置前，可无限次预览内容、快速修改某一行内容，但是有时候内容还是会超出牌子导致无法显示。你可以一次手持多个牌子，这样放置后不满意也不用重新输入全部指令。

- 高等附魔（赞助限定）


## 指令列表
以下指令在使用的时候需要在前面加上 `/nu`，比如查看字体颜色代码需要输入`/nu format`。

|指令名称|参数|含义| 备注 |
|:-:|:-:|:-:|:-:|
| `format` | 无 | 查看字体颜色代码 | - |
| `prefix` | <前缀> | 设置/修改前缀 | 可使用颜色代码 |
| `suffix` | <后缀> | 设置/修改后缀 | 可使用颜色代码 |
| `resetprefix` | 无 | 重置前缀 | - |
| `resetsuffix` | 无 | 重置后缀 | - |
| `show` | 无 | 展示手中的物品 | - |
| `exhibition` | <set\|unset> | 保护/取消保护准星对着的物品框 | - |
| `exhibition` | desc <行数><br> \`<文本>\` | 设定一些描述文本 | 不可使用颜色代码 |
| `rename` | \`<名称>\` | 重命名手中的物品 | 可使用颜色代码 |
| `se sign` | <行数> \`<内容>\` | 预编辑手中的告示牌 | 可使用颜色代码 |
| `enchant` | <info\|附魔名称> \[附魔等级](!info) | 将副手中的附魔书指定附魔到主手中的物品 | 赞助限定 |

