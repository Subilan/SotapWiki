# 常用指令

本条目列举了一些在服务器中的常用指令，强烈建议任何玩家在开始游戏前了解。

:::tip
用 `<>` 括起来的是**必填**的，如果不填写，指令将执行失败。用 `[]` 括起来的是**选填**的，如果不填写，指令将按照默认的情况生效。
:::

## 常用指令

|  指令名称   |        指令格式        |               指令效果               |                            备注                            |
| :---------: | :--------------------: | :----------------------------------: | :--------------------------------------------------------: |
|  `/spawn`   |        `/spawn`        |     将玩家传送到全新周目的出生点     |                      可在任意维度使用                      |
|    `/co`    |        `/co i`         |      打开 CoreProtect 观察模式       |    可点击附近方块查看破坏、增加的情况，多用于熊孩子排查    |
| `/sethome`  |  `/sethome [家名称]`   |       设置一个家，可自定义名称       |  收费 100 苏，家名称默认为 home<br>也可写作 `/createhome`  |
| `/delhome`  |  `/delhome <家名称>`   |              删除指定家              |           不退还设置费用<br>也可写作 `/remhome`            |
|   `/home`   |    `/home [家名称]`    | 传送到指定家，不指定则默认为第一个家 |                 根据传送距离收费 10~50 苏                  |
|    `/t`     |  `/t <玩家名> <消息>`  |          向指定玩家发送私信          | 私信不会被其他玩家看到<br>也可写作 `/pm` `/whisper` `/msg` |
|   `/pay`    | `/pay <玩家名> <金额>` |        向指定玩家支付一定苏币        |                   苏币是服务器的货币名称                   |
|   `/bal`    |         `/bal`         |          查看自己的苏币余额          |                             -                              |
|   `/back`   |        `/back`         |         回到上次传送前的位置         |                         收费 20 苏                         |
| `/backpack` |      `/backpack`       |               打开背包               |                       背包需单独购买                       |
|   `/tpa`    |    `/tpa <玩家名>`     |          申请传送到指定玩家          | 收费 30 苏，无论传送是否执行<br>也可写作 `/tpask` `/call`  |
| `/tpahere`  |  `/tpahere <玩家名>`   |      申请让某玩家传送到你的位置      |                         收费 30 苏                         |
| `/tpaccept` |      `/tpaccept`       |          同意玩家的传送请求          |                     也可写作 `/tpyes`                      |
|  `/tpdeny`  |       `/tpdeny`        |          拒绝玩家的传送请求          |                             -                              |
|   `/list`   |        `/list`         |        展示所有当前在线的玩家        |      也可写作 `/online` `/plist` `/playerlist` `/who`      |
|   `/sit`    |         `/sit`         |                 坐下                 |                 按 <kbd>Shift</kbd> 站起来                 |
|  `/crawl`   |        `/crawl`        |                 趴下                 |                            同上                            |
|   `/lay`    |         `/lay`         |                 躺下                 |                            同上                            |

## 其它指令

|      指令名称      |       指令格式       |        指令效果        |                           备注                            |
| :----------------: | :------------------: | :--------------------: | :-------------------------------------------------------: |
|      `/ping`       |       `/ping`        |    查看当前网络延迟    |                  值越小代表网络状况越好                   |
|       `/tps`       |        `/tps`        |  查看服务器每秒随机刻  | 正常值为 20.0，若低于 20.0 代表服务器卡顿，请反馈给管理员 |
|     `/baltop`      |      `/baltop`       | 查看服务器苏币余额排行 |                             -                             |
|       `/kit`       |        `/kit`        |      打开礼包商城      |                  可购买包月特权、ID 皮肤                  |
|       `/afk`       |        `/afk`        |     切换到暂离状态     |    **注意:** 暂离状态仍会受到攻击<br>也可写作 `/away`     |
|     `/ignore`      |  `/ignore <玩家名>`  |      屏蔽指定玩家      |             屏蔽的玩家信息不会在聊天栏中显示              |
|    `/unignore`     | `/unignore <玩家名>` |    取消屏蔽指定玩家    |                   也可写作 `/delignore`                   |
|      `/near`       |       `/near`        |     查看附近的玩家     |                    也可写作 `/nearby`                     |
| `/playtimetracker` |  `/playtimetracker`  |   查看时间管理局统计   |                      也可写作 `/ptt`                      |
|       `/qs`        |        `/qs`         |    打开商店命令菜单    |    系 Quickshop 插件相关指令，输入 `/qs help` 查看帮助    |
|       `/nu`        |   `/nu <拓展指令>`   |  查看 NU 插件指令菜单  |                  功能较多，可以自行探索                   |
|    `/chatcolor`    |     `/chatcolor`     |    打开聊天颜色菜单    |                   可自定义聊天消息颜色                    |