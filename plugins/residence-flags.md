# Residence 权限名称

这里列出 Residence 插件所支持的所有权限名称。在服务器内，可以使用 `/res flags ?` 查看。以下表格中内容大部分可通过 `/res set` 使用，针对非环境类权限也可以通过 `/res pset` 使用，特殊情况会有注释。

## 权限名称含义

| 权限名称 | 含义 | 注释 |
| :-: | :-: | :-: |
| `admin` | 使用领地管理员权限 | 允许其他人管理领地（例如使用`/res set`权限） |
| `animalkilling` | 允许在领地内伤害动物 | - |
| `anvil` | 使用铁砧 | - |
| `anvilbreak` | 允许铁砧被摧毁 | - |
| `beacon` | 修改信标效果 | - |
| `bed` | 使用床 | - |
| `brew` | 使用酿造台 | - |
| `build` | 放置、破坏、点火 | 相当于 `place` + `destory` + `ignite` + `bucket` |
| `burn` | *待整理* | - |
| `button` | 使用按钮 | - |
| `cake` | 允许吃蛋糕 | - |
| `canimals` | *待整理* | - |
| `chat` | 允许领地聊天 | *效果不明* |
| `chorustp` | 允许食用紫颂花进行传送 | - |
| `cmonsters` | *待整理* | - |
| `container` | 允许使用容器 | 例如箱子、熔炉、展示框等等 |
| `coords` | 允许显示坐标 | *效果不明* |
| `craft` | 使用工作台 | - |
| `creeper` | 允许苦力怕爆炸 | - |
| `day` | 永远白天 | 仅视角效果，不影响怪物生成等。 |
| `decay` | 允许树叶枯萎（消失） | - |
| `destory` | 仅允许破坏 | - |
| `diode` | 使用红石中继器 | - |
| `door` | 使用门 | 包括木门、活板门等等 |
| `dragongrief` | 允许龙在领地进行破坏 | - |
| `dryup` | 允许湿润的耕地变干 | - |
| `dry` | 允许对羊染色 | - |
| `egg` | 使用鸡蛋 | - |
| `enchant` | 使用附魔台 | - |
| `enderpearl` | 使用末影珍珠 | - |
| `explode` | 允许爆炸 | - |
| `falldamage` | 允许掉落时受到伤害 | - |
| `fallingprotection` | 允许掉落的方块掉落到领地内 | - |
| `feed` | 允许喂动物 | - |
| `fireball` | 允许火球 | - |
| `firespread` | 允许火焰蔓延 | - |
| `flow` | 允许液体流动 | 相当于 `lavaflow` + `waterflow` |
| `flowerpot` | 允许使用花盆 | - |
| `glow` | 开启后所有玩家会发光 | - |
| `grow` | 开启饱食度恢复 | - |
| `healing` | 开启生命恢复 | - |
| `hotfloor` | 允许岩浆块做成伤害 | - |
| `iceform` | 允许冰霜行者形成冰 | - |
| `icemelt` | 允许冰溶化 | - |
| `ignite` | 允许点火 | - |
| `itemdrop` | 允许丢出物品 | - |
| `itempickup` | 允许拾起物品 | - |
| `jump2` | 提升跳跃效果 | - |
| `jump3` | 提升跳跃效果 | - |
| `lavaflow` | 允许岩浆流动 | - |
| `leash` | 使用拴绳 | - |
| `lever` | 使用拉杆 | - |
| `mobexpdrop` | 开启后怪物死亡掉落经验值 | - |
| `mobitemdrop` | 开启后怪物死亡掉落物品 | - |
| `mobkilling` | *待整理* | - |
| `mobs` | *待整理* | - |
| `mobs2` | *待整理* | - |
| `monsters` | *待整理* | - |
| `move` | 移动 | 如果设置为 `false`，外部玩家将无法进入 |
| `nanimals` | *待整理* | - |
| `night` | 永远晚上 | 仅视角效果，不影响怪物生成等。 |
| `nmonsters` | *待整理* | - |
| `nomobs` | *待整理* | - |
| `nofly` | *待整理* | - |
| `note` | 允许使用音符盒 | - |
| `phantomspawn` | 允许幻翼生成 | - | 
| `piston` | 允许活塞推动方块 | - |
| `pistonprotection` | *待整理* | - |
| `place` | 仅允许放置 | - |
| `pressure` | 使用压力板 | - |
| `pvp` | 允许 PVP | - |
| `rain` | 永远下雨 | 仅视角效果，不影响怪物生成等。 |
| `riding` | 允许骑行 | - |
| `sanimals` | *待整理* | - |
| `shear` | 剪羊毛 | - |
| `shoot` | 使用弓箭 | - |
| `shop` | *待整理* | - |
| `smonster` | *待整理* | - |
| `snowball` | 使用雪球 | - |
| `snowtrail` | *待整理* | - |
| `spread` | *待整理* | - |
| `subzone` | 允许建立子领地 | - |
| `sun` | 永远晴天 | 仅视角效果，不影响怪物生成等。 |
| `table` | *待整理* | - |
| `title` | 显示进出提示 | - |
| `tnt` | 允许 TNT 爆炸 | - |
| `trade` | 允许与村民交易 | - |
| `trample` | 允许踩坏耕地 | - |
| `use`| 使用门、工作台等 | 铁砧需要用 `anvil` 权限设置 |
| `vehicledestory` | 允许破坏载具 | - |
| `waterflow` | 允许水流动 | - |
| `witherdamage` | 允许凋零进行伤害 | - |
| `witherdestruction` | 允许凋零破坏环境 | - |
| `witherspawn` | 允许生成凋零 | - |
| `wspeed1` | 缓慢效果 | - |
| `wspeed2` | 迅捷效果 | - |



## 使用方法

以上内容中，「权限名称」的用途为：

```minecraft
/res pset Sapherise place true
```

这样就允许了 **Sapherise** 的 **place** 权限。详情使用说明请看[这里](/plugins/residence-commands.md)。
