# Residence 指令

Residence 是本服务器以及大部分 Spigot 服务器所使用的领地插件。

!> 此条目内容可能**晦涩难懂**，用**粗体**标注的指令为常用指令。

以下指令在使用的时候需要在前面加上 `/res`，比如使用表格中的 `auto` 指令，实际执行的时候输入的是 `/res auto`。

## 指令列表

| 指令名称 | 参数 | 含义 | 举例 |
| :-: | :-: | :-: | :-: |
| `auto` | 无 | 以你当前站立的位置为中心，自动创建你能创建最大范围的领地 | - |
| `check` | `<领地名称> <权限名> <玩家名>` | 查看某玩家在某领地中的权限状态 | `check fairyhouse admin Sapherise` |
| `confirm` | 无 | 无实意，用来确认一项敏感操作，如删除领地等 | - |
| `contract` | `<领地名称> <格数>` | 向你面对的方向缩小领地规模**（不退钱）** | `contract fairyhouse 10` |
| **`create`** | `<领地名称>` | 创建一个新的领地 | `create fairyhouse` |
| **`current`** | 无 | 显示你当前所处的领地 | - |
| `expand` | `<领地名称> <格数>` | 向你面对的方向扩大领地规模**（需扣钱）** | `expand fairyhouse 10` |
| **`give`** | `<玩家名>` | 将领地无偿赠予某玩家，执行后需要点击弹出的文字确认 | `give Sapherise` |
| `info` | `<领地名称>` | 显示某一领地的信息 | `info fairyhouse` |
| `kick` | `<玩家名>` | 将某玩家踢出领地 | `kick Somebody` |
| `limits` | 无 | 显示你当前在领地插件的使用上所受到的制约，比如有限的领地格数等 | - |
| `listall` | 无 | 查看全服领地信息 | - |
| `lset` | * 见下* | 将某一物品加入领地的忽略名单或黑名单，用法详见 [这里](#res-lset) | *见下* |
| `market` | * 见下* | 出售、购买、查看领地，用法详见[这里](#res-market) | *见下* | 
| **`padd`** | `<玩家名>` | 向领地添加某一玩家，使其可以使用部分权限, 用法详见 [这里](#res-padd) | `padd Sapherise` |
| **`pdel`** | `<玩家名>` | 从领地移除某一玩家 | `pdel Somebody` |
| **`pset`** | `* 见下*` | 设置某一玩家在领地的权限，用法详见 [这里](#res-pset) | *见下* |
| **`remove`** | `<领地名称>` | 删除某一领地**（不退钱）** | `remove fairyhouse` |
| **`rename`** | `<领地名称> <新名称>` | 重命名某领地 | `rename fairyhouse Fairyhouse` |
| `rt`| 无 | 随机传送**（不稳定）** | - |
| **`set`** | `<领地名称> <权限名> <true \| false>` | 设置领地的全局权限，与 `pset` 类似，但是应用到每一个人 | `set container true` |
| `show` | `<领地名称>` | 显示某一领地的边界 | `show fairyhouse` |
| `sublist` | `<领地名称> [页码]` | 显示某一领地的子领地列表<br> 如果过多会分页显示 | `sublist fairyhouse 1` |
| **`subzone`** | `<领地名称> <子领地名称>` | 使用当前选区创建子领地**（免费）** | `subzone fairyhouse floor2` |
| `tool` | 无 | 显示圈地和查看领地信息的工具 | - |
| **`tp`** | `<领地名称>` | 传送到某一领地，前提必须有传送权限 | `tp fairyhouse` |
| `tpconfirm` | 无 | 强行传送到某一领地（忽略传送点在岩浆、天空中的危险情况） | - |
| **`tpset`** | 无 | 将自己当前站立的位置设置为领地传送点 | - |
| `version` | 无 | 查看领地插件的版本信息 | - |


## 如何使用？

### 物品屏蔽

#### /res lset

`lset` 指令用来设置一个领地的「屏蔽名单」和「黑名单」，**这些名单只能添加物品。**它的用法是

```minecraft
/res lset [领地名称] <ignorelist | blacklist | Info> [物品](!Info)
```
其中领地名称仅在指定非你所处的领地时才需要输入。

接下来用表格对其选择参数做解释

| 参数 | 含义 |
| :-: | :-: |
| ignorelist | 指「屏蔽名单」，或者说「忽略名单」，**被加入这个名单的物品将不受到领地的保护。**也就是说可以随意破坏 |
| blacklist | 指「黑名单」，**被加入黑名单的物品将不会在领地里出现。**也就是说它会阻止任何人往领地里放置这个东西 |
| Info | 查看当前领地的屏蔽名单和黑名单 |

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

### 领地市场

#### /res market

`market` 指令用来进行领地的经济操作——是的，你没有看错，服务器的领地支持出售和购买。它的用法是

```minecraft
/res market <list | sell | sign | buy | unsell | rent> <领地> [价格](!list,unsell)
```

值得注意的是，我们不会在这里讲有关租借的（`rent`）和立牌的（`sign`），不影响正常游戏游玩。各参数的作用用表格表示：

| 参数 | 子参数 | 含义 |
| :-: | :-: | :-: |
| `list` | <rent \| sell> | 显示领地市场，其中子参数 `rent` 用来显示待租赁的领地，`sell` 显示待出售的领地 |
| `sell` | 无 | 将某一领地以指定价格上交领地市场出售 |
| `buy` | 无 | 购买领地市场中的某一领地 |
| `unsell` | 无 | 取消出售领地市场中的某一领地 |

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

### 设置全局权限

#### /res set

`set` 指令用于指定某一领地内的全局权限。用法如下：

```minecraft
/res set [领地名称] [权限名称] <true | false>(权限名称)
```
其中领地名称仅在指定非你所处的领地时才需要输入。

你可以选择执行`/res set [领地名称]` 打开可视化的权限设置面板，也可以执行`/res flags ?`查看权限名称，并在指令中修改该权限。

?> ❓关于权限名称，你也可以查阅[权限名称附表](/plugins/residence-flags.md)。

!> 值得注意的是，你**不能**直接使用`/res set [领地名称] <权限名称>` 来查看该权限目前设置。您必须使用`/res set [领地名称]`在设置面板中找出该权限。

`true` 和 `false` 通常被称为「布尔值」，如果想要了解更多可以看下面这一段引言，没有兴趣直接跳过。

> `true` 和 `false` 统称「**布尔值**」（Boolean），在计算机编程语言中通常表示「启用与禁用」、「真与假」、「对与错」。布尔也是一种**数据类型**，但是不像**整数**（Integer）、**字符**（Character）、**字符串**（String）那样有无穷多个可能的值，它只有两种可能的值，或者说状态，那就是 `true` 和 `false`。

我们一般用 `true` 和 `false` 表示一个权限是否被启用或者是否被允许，比如：

```minecraft
/res set fairyhouse anvilbreak true
```

就启用了 fairyhouse 的 anvilbreak 权限。那么：

```minecraft
/res set fairyhouse animalkilling false
```

就禁止了所有人（除了 fairyhouse 领地 admin）在 fairyhouse 的 animalkilling 权限。

### 给予指定玩家领地基础权限

### /res padd

`padd` 指令可以快速添加指定玩家进入领地，即拥有领地的基础权限。用法如下：

```minecraft
/res pset [领地名称] <玩家名称> 
```
其中领地名称仅在指定非你所处的领地时才需要输入。

### 设置指定玩家权限

#### /res pset

`pset` 指令用于指定某一玩家在某一领地内的权限。用法如下：

```minecraft
/res pset [领地名称] <玩家名称> [权限名称] <true | false>(权限名称)
```
其中领地名称仅在指定非你所处的领地时才需要输入。

和`/res set` 一样，你可以选择执行`/res pset [领地名称] <玩家名称>` 打开可视化的权限设置面板，也可以执行`/res flags ?`查看权限名称，并在指令中修改该权限。

**示例**

给予 Sapherise 在 fairyhouse 的 admin 权限 **（设置管理员）**：
```minecraft
/res pset fairyhouse Sapherise admin true
```
给予 Sapherise 在 fairyhouse 的 build 权限：
```minecraft
/res pset fairyhouse Sapherise build true
```
撤除 Sapherise 在 fairyhouse 的 anvil 权限：
```minecraft
/res pset fairyhouse Sapherise anvil false
```


