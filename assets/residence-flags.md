# Residence 权限名称

这里列出 Residence 插件所支持的所有权限名称。在服务器内，可以使用 `/res flags ?` 查看。以下表格中内容大部分可通过 `/res pset` 和 `/res set` 使用，特殊情况会有注释。

|权限名称|含义|注释|
|:-:|:-:|:-:|
|`build`|放置、破坏、点火|相当于 `place` + `destory` + `ignite` + `bucket`|
|`place`|仅放置|-|
|`destory`|仅破坏|-|
|`ignite`|仅点火|-|
|`bucket`|仅放/收液体|-|
|`use`|「**使用**」门、工作台等|铁砧需要用 `anvil` 权限设置|
|`container`|「**容器**」箱子、熔炉等|-|
|`move`|移动|如果设置为 `false`，外部玩家将无法进入|
|`firespread`|火焰蔓延|不能用于 `/res pset`。如果为 `false`，火势将不会蔓延|
|`anvil`|使用铁砧|-|
|`breed`|喂动物|-|
|`enderpearl`|末影珍珠|如果为 `false`，玩家将无法在领地内或者对领地使用珍珠|
|`villager`|村民交易|-|
|`firework`|放烟火|-|
|`TNT`|TNT 爆炸|如果为 `false`，TNT 将不会爆炸|
|`shear`|剪羊毛|-|
|`flow`|流动|相当于 `lavaflow` + `waterflow`|
|`lavaflow`|岩浆流动|-|
|`waterflow`|水流动|-|
|`boat`|放置或破坏船|相当于 `boatplace` + `boatdestory`|
|`boatplace`|仅放置船|-|
|`boatdestory`|仅破坏船|-|
|`minecart`|放置或破坏矿车|相当于 `minecartplace` + `minecartdestory`|
|`minecartplace`|仅放置矿车|-|
|`minecartdestory`|仅破坏矿车|-|
|`tntminecart`|允许放置或破坏 TNT 矿车|仅当 `minecart` 为 `true` 时有效|
|`storageminecart`|*同上*箱子矿车|*同上*|
|`hopperminecart`|*同上*漏斗矿车|*同上*|
|`poweredminecart`|*同上*充能矿车|*同上*。也叫「熔炉矿车」|
|`tp`|允许传送|如果为 `false`，玩家将不能使用 `/res tp` 传送到你的领地|
|`kill`|杀动物|-|
|`animaldamage`|动物掉血|如果为 `false`，动物不会掉血|
|`horse`|马|如果为 `false`，玩家骑着马将不能移动|

以上内容中，「权限名称」的用途为：

```minecraft
/res pset Sapherise place true
```

这样就允许了 **Sapherise** 的 **place** 权限。详情使用说明请看[这里](/others/commands-for-players.md?id=res-pset)。