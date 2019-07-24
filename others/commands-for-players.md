# 指令大全
<span class="subtitle">玩家篇

在这里我们会放出比较完整的指令——包含服务器可用的所有指令，先前在「基础指令」中有提到的也会在这里有记录。

|指令名称|参数|含义|举例|
|:-:|:-:|:-:|:-:|
|`/afk`|无|手动让自己进入挂机状态<br>5 分钟自动进入|-|
|`/back`|无|传送到上次死亡或传送的位置|-|
|`/backpack`|无|打开背包|-|
|`/balance`, `/bal`, `/money`|无|查看自己的余额|-|
|`/balancetop`, `/baltop`|无|查看服务器财富榜|-|
|`/dailyrewards`|无|打开每日签到面板|-|
|`/delhome`|\[家名称\]|删除一个家的定点|`/delhome fairyhouse`|
|`/help`|无|打开全服指令帮助|-|
|`/home`|\[家名称\]|传送到指定家的定点<br>家名称留空则传送到默认家|`/home fairyhouse`|
|`/ignore`|<玩家名>|屏蔽某玩家的服内发言|`/ignore Somebody`|
|`/list`|无|查看当前在线的玩家|-|
|`/login`|<密码>|登录|`/login 123456789`|
|`/logout`|无|登出|-|
|`/me`|<信息>|让服务器显示一条关于你的信息|`/me 正在挖矿`|
|`/msg`, `/m`|<玩家><br><信息>|给某玩家发送私信|`/m Sapherise 你好`|
|`/pay`|<玩家><br><金额>|付款给某玩家|`/pay Sapherise 130`|
|`/register`|<密码> <确认密码>|注册|`/register 123456 123456`|
|`/sethome`|\[家名称\]|设置一个家的定点<br>家名称留空则设置为默认家|`/sethome fairyhouse`|
|`/suicide`|无|自杀**（禁止在现实中尝试）**|-|
|`/tpa`|<玩家名>|请求传送到某玩家的位置|`/tpa Sapherise`|
|`/tpaccept`|无|接受某玩家的传送请求|-|
|`/tpahere`|<玩家名>|请求让某个玩家传送到你当前的位置|`/tpahere Sapherise`|
|`/tpdeny`|无|拒绝某玩家的传送请求<br>系统会在请求 120 秒后自动拒绝|-|
|`/version`|无|查看服务器的版本信息|-|

## Residence 领地指令

!> 此条目内容可能**晦涩难懂**，用**粗体**标注的指令为常用指令。

以下指令在使用的时候需要在前面加上 `/res`，比如使用表格中的 `auto` 指令，实际执行的时候输入的是 `/res auto`。

|指令名称|参数|含义|举例|
|:-:|:-:|:-:|:-:|
|`auto`|无|以你当前站立的位置为中心，自动创建你能创建最大范围的领地|-|
|`check`|<领地名称><br><权限名><br><玩家名>|查看某玩家在某领地中的权限状态|-|
|`confirm`|无|无实意，用来确认一项敏感操作，如删除领地等|-|
|`contract`|<领地名称> <格数>|向你面对的方向缩小领地规模**（不退钱）**|`contract fairyhouse 10`|
|**`create`**|<领地名称>|创建一个新的领地|`create fairyhouse`|
|**`current`**|无|显示你当前所处的领地|-|
|`expand`|<领地名称> <格数>|向你面对的方向扩大领地规模**（需扣钱）**|`expand fairyhouse 10`|
|**`give`**|<玩家名>|将领地无偿赠予某玩家，执行后需要点击弹出的文字确认|`give Sapherise`|
|`info`|<领地名称>|显示某一领地的信息|`info fairyhouse`|
|`kick`|<玩家名>|将某玩家踢出领地|`kick Somebody`|
|`limits`|无|显示你当前在领地插件的使用上所受到的制约，比如有限的领地格数等|-|
|`listall`|无|查看全服领地信息|-|
|`lset`|*见下*|将某一物品加入领地的忽略名单或黑名单，用法详见[这里](#res-lset)|*见下*|
|`market`|*见下*|出售、购买、查看领地，用法详见[这里](#res-market)|*见下*| 
|**`padd`**|<玩家名>|向领地添加某一玩家，使其可以使用部分权限|`padd Sapherise`|
|**`pdel`**|<玩家名>|从领地移除某一玩家|`pdel Somebody`|
|**`pset`**|*见下*|设置某一玩家在领地的权限，用法详见[这里](#)|*见下*|
|**`remove`**|<领地名称>|删除某一领地**（不退钱）**|`remove fairyhouse`|
|**`rename`**|<领地名称> <新名称>|重命名某领地|`rename fairyhouse Fairyhouse`|
|`rt`|无|随机传送**（不稳定）**|-|
|**`set`**|<领地名称> <权限名> <true\|false>|设置领地的全局权限，与 `pset` 类似，但是应用到每一个人|`set container true`|
|`show`|<领地名称>|显示某一领地的边界|`show fairyhouse`|
|`sublist`|<领地名称> \[页码\]|显示某一领地的子领地列表<br>如果过多会分页显示|`sublist fairyhouse 1`|
|**`subzone`**|<领地名称> <子领地名称>|使用当前选区创建子领地**（免费）**|`subzone fairyhouse floor2`|
|`tool`|无|显示圈地和查看领地信息的工具|-|
|**`tp`**|<领地名称>|传送到某一领地，前提必须有传送权限|`tp fairyhouse`|
|`tpconfirm`|无|强行传送到某一领地（忽略传送点在岩浆、天空中的危险情况）|-|
|**`tpset`**|无|将自己当前站立的位置设置为领地传送点|-|
|`version`|无|查看领地插件的版本信息|-|

### 疑难解答

#### /res lset

`lset` 指令用来设置一个领地的「屏蔽名单」和「黑名单」，**这些名单只能添加物品。**它的用法是

```minecraft
/res lset <领地名称> <ignorelist|blacklist|Info> [物品]
```

接下来用表格对其选择参数做解释

|参数|含义|
|:-:|:-:|
|ignorelist|指「屏蔽名单」，或者说「忽略名单」，**被加入这个名单的物品将不受到领地的保护。**也就是说可以随意破坏|
|blacklist|指「黑名单」，**被加入黑名单的物品将不会在领地里出现。**也就是说它会阻止任何人往领地里放置这个东西|
|Info|查看当前领地的屏蔽名单和黑名单|

##### 例子

```minecraft
/res lset fairyhouse ignorelist dirt
```

这样，在领地 **fairyhouse** 里的 **dirt**（泥土）均不受领地保护，可以随意破坏。

```minecraft
/res lset fairyhouse blacklist tnt
```

这样，在领地 **fairyhouse** 里的 **tnt**（TNT）不允许任何人放置。

!> 「**任何人**」是指包括领地管理者在内的任何人，但是领地管理者仍然可以把这个物品移出黑名单。

#### /res market

`market` 指令用来进行领地的经济操作——是的，你没有看错，服务器的领地支持出售和购买。它的用法是

```minecraft
/res market <list|sell|sign|buy|unsell|rent> <领地> [价格]
```
价格在参数为 `unsell` 的情况下不需要填。

值得注意的是，我们不会在这里讲有关租借的（`rent`）和立牌的（`sign`），不影响正常游戏游玩。各参数的作用用表格表示：

|参数|子参数|含义|
|:-:|:-:|:-:|
|`list`|<rent\|sell>|显示领地市场，其中子参数 `rent` 用来显示待租赁的领地，`sell` 显示待出售的领地|
|`sell`|无|将某一领地以指定价格上交领地市场出售|
|`buy`|无|购买领地市场中的某一领地|
|`unsell`|无|取消出售领地市场中的某一领地|

##### 例子

```minecraft
/res market sell fairyhouse 2000
```

以 2000 游戏币的价格在领地市场中出售 fairyhouse。

```minecraft
/res market buy fairyhouse
```

购买 fairyhouse。

```minecraft
/res market unsell fairyhouse
```

取消出售 fairyhouse。

#### /res pset

`pset` 指令用于指定某一玩家在某一领地内的权限。用法：

```minecraft
/res pset <领地名称> <玩家名称> <权限名称> <true|false>
```

权限名称有很多，实际上你可以直接执行 `/res flags ?` 查看存在的权限名称，不过这里还是提供一下[附表](/assets/residence-flags.md)。

`true` 和 `false` 通常被称为「布尔值」，如果想要了解更多可以看下面这一段引言，没有兴趣直接跳过。

> `true` 和 `false` 统称「**布尔值**」（Boolean），在计算机编程语言中通常表示「启用与禁用」、「真与假」、「对与错」。布尔也是一种**数据类型**，但是不像**整数**（Integer）、**字符**（Character）、**字符串**（String）那样有无穷多个可能的值，它只有两种可能的值，或者说状态，那就是 `true` 和 `false`。

我们一般用 `true` 和 `false` 表示一个权限是否被启用，比如：

```minecraft
/res pset fairyhouse Sapherise build true
```

就给予了 Sapherise 在 fairyhouse 的 build 权限。那么：

```minecraft
/res pset fairyhouse Sapherise admin false
```

就撤除了 Sapherise 在 fairyhouse 的 admin 权限。

除此之外还有一个指令 `/res set`，它决定了领地对于每一个访问者的权限（我们称之为「全局」）。与此指令用法相同，只是少了「玩家名称」：

```minecraft
/res set <领地名称> <权限名称> <true|false>
```

?>❓ 你知道吗？如果直接输入 `/res set <领地名称>` 不带任何其它的话，会打开领地的权限设置面板——可视化的，比指令来的快，使用起来也更加容易。