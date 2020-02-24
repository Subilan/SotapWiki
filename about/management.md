# 关于管理组

SoTap 管理组目前有四名成员，分别为

- **Sapherise** - SoTap 管理组组长，SoTap 服务器服主；
- **Cropenfe** - SoTap 管理组成员，SoTap 服务器管理员，SoTap 群组管理员；
- **Remind_Z** - SoTap 管理组成员，SoTap 服务器管理员，SoTap 群组管理员；
- **Subilan** - SoTap 管理组成员，SoTap 开发者。

## 工作时段

一般来说，他们的在线时间为：

|名称|一般在线时段 `UTC+8`|
|:-:|:-:|
|Sapherise|00:00 ~ 16:00|
|Cropenfe|20:00 ~ 23:30|
|Remind_Z|12:00 ~ 13:00, 16:00 ~ 00:00(or later)|
|Subilan|星期六或节假日全天|

好像有点迷，但这也很正常。每个人都有自己的事情要办，如果您有问题，可以尝试留言。

## 地区分布

目前管理组内有 1 人位于美国，洛杉矶时间；3 人位于中国，北京时间。

?> 一年后，就不是这样了哦...

## 加入管理组

管理组正在招人中！如果您对 Minecraft 原版服务器管理有兴趣，且在线时间固定，可以立即向我们提交申请！

您必须满足以下条件

- 年满 14 周岁；
- 具有责任心，不会因为做错事逃避；对管理有一定的兴趣；
- 非三分钟热度，会一直坚持下去；
- 有耐心，善于疏导、提醒玩家；
- 遇到错误的事情能够立即做出判断，并果断处理。

如果您相信自己，则可以立即联系服主 Sapherise 进行申请！

## 加入开发组

SoTap 目前需要技术人员的加入（即非服务器管理员），您可以自我检验您是否符合以下条件的一种或多种。

- 具有一定的 Vue.js 编写技术、前端开发知识；
    - 检验：
    ```vue
    <template>
        <div>
          <p>这样写</p>
        </div>
        <div>
          <p>对不对</p>
        </div>
   </template>
   ```
    - 检验：
    ```vue
    <script>
        import Vue from 'vue';
        Vue.use(Component1);
        Vue.use(Component2);
        Vue.use(Component3);
        // 可以简写为？
    </script>
    ```
    - 检验：
    ```css
    .container {
        & {
            position: relative;
            height: 100%
         }
        & > .box {
            position: relative;
            display: block;
            & + .box-2 {
                display: none;
            }
        } 
    } /* 能否看懂？*/
    ````
- 具有一定的 PHP 编写技术、后端开发知识；
    - 检验
    ```php
    <?php
    class Main {
        public $value;
        public function __construct() {
            $this->value = 0;
        }
        
        public function add(): boolean {
            $this->value = $this->value + 1;
            return true;
        }
    }
    $m = new Main();
    $m->add();
    var_dump($m->value);
    // 输出？
    ```
    - 检验
    ```js
    let xhr = new XMLHttpRequest();
    xhr.open("get", "/main.php");
    xhr.send(null);
    xhr.onreadystatechange = r => {
        if (r === xhr.DONE) {
            console.log(r);
        }
    }
    ```
    此时联系检验 1 可以得出什么结果？
- 具有一定的 Java 编写技术，插件知识。
    ```java
    package org.sotap.example;

    import org.bukkit.plugin.java.JavaPlugin;

    public final class example extends JavaPlugin {
        @Override
        public void onEnable() {
            System.out.println("I'm now enabled!");
        }

        @Override
        public void onDisable() {
            System.out.println("I'm now disabled!");
        }
    }
    ```
    能否看懂？

以下列出 SoTap 在开发过程中可能会使用到或者将来会使用到的计算机语言，如果您擅长则可以考虑加入。

- HTML/CSS/JS ⭐️
- TypeScript
    - Vue.js ⭐️
- PHP 7 ⭐️
- Java ⭐️
- Python 3
- Objective-C
    - Swift
    - Objective-C++
- C++

**注**：对于 Python 和 C++，必须确保您可以独立开发“软件”或者“程序”，而不是“会做竞赛题”。标 `⭐️` 的是主要招收项目。


如果以上条件满足一种或多种，欢迎加入 SoTap 开发组！

有意向者可以群内联系管理员 Subilan，也可以在此项目下开启 Issue 进行申请。
