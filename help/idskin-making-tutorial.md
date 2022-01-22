# 如何制作属于你的 ID 皮肤

本条目将帮助你制作属于自己的 ID 皮肤。

在 ID 皮肤的[官方制作指南](https://itsnathang.me/plugins/nameplates/#/creating-nameplates)中，推荐使用 [Aseprite](https://www.aseprite.org/) 进行制作，当然，Adobe Photoshop（即 PS ）等任何具有像素编辑功能的绘图软件都可以用于制作。

由于 Aseprite 与 PS 的入门门槛较高，本条目将使用 Windows 系统自带的**画图**软件进行制作。

![画图](https://www.hualigs.cn/image/6038bf57a070a.jpg)*微软画图软件*

:::tip
善用<kbd>Ctrl</kbd>+<kbd>Z</kbd>(撤销刚才的操作)来挽救你的错误操作
:::

## 尺寸

:::tip
目前 ID 皮肤支持大小为 `48x16、96x32、144x48、384x128`像素的图像文件。
:::

我们以 `48x16` 像素的图像为例：

首先，你需要创建一个长 48 像素，宽 16 像素的图像文件。

![尺寸](https://www.hualigs.cn/image/6038bf0474146.jpg)*创建画布*

你可以按住<kbd>Ctrl</kbd>+<kbd>W</kbd>，也可以在**图像**菜单中点击**重新调整大小**来输入合适的数值使其符合要求。

![尺寸](https://www.hualigs.cn/image/6038c0f645aa7.jpg)*调整大小*

按照以上步骤，我们就得到了一块 `48×16` 像素大小的白色画布。

## 设计

现在我们可以开始设计图案了。

一款 ID 皮肤，是由**两侧图案**与**背景板**两部分组成的，而插件会将画布两侧的正方形中的图案分别识别为 ID 左右两侧的图案，中间的正方形中的图案会被识别成背景板，为此我们需要将建好的画布分割成三个等大的正方形，正方形的边长正好等于画布的宽度。

![](https://www.hualigs.cn/image/6038c3b5f00d8.jpg)*分割画布*

由于我们制作的是 `48x16` 像素的ID皮肤，现在我们把画布分割为三个 `16×16` 像素大小的正方形。黄色部分正是显示在你 ID 两侧的图案，而中间的绿色部分则是你 ID 的背景板，由于玩家的 ID 长度不同，绿色部分会进行自重复以达到适应ID长度的效果，故请在制作的时候确保你的**图案**在黄色部分，且确保绿色部分的左右两侧可以**无缝连接**，否则可能会导致显示错误。

例如，现在我们想要制作一款钻石图案、蔚蓝色背景板的 ID 皮肤。

首先，我们在两端的正方形内绘制我们的图案。

![](https://www.hualigs.cn/image/6038c9081310d.jpg)*绘制图案*

:::warning
请务必在两侧的正方形内绘制你的图案！
:::

你可以自行创作，也可以通过[中文 Minecraft Wiki](https://minecraft-zh.gamepedia.com/Minecraft_Wiki:%E5%85%B3%E4%BA%8E)等渠道获取官方图片进行创作。如上图中的钻石图案就来自[这里](https://wiki.biligame.com/mc/%E6%96%87%E4%BB%B6:Diamond_Revision_2.png)。

:::danger
这些文件的著作权属于 **MOJANG Studios**，使用时请遵循 [Minecraft 最终用户许可协议（EULA）](https://account.mojang.com/documents/minecraft_eula)
:::

接下来，我们开始制作背景板。由于背景板所处的绿色部分会被自重复，因此请确保其两侧可以相互衔接。

接下来，我们利用**直线**工具绘制背景板边框。

选择**刷子**，并在**形状**菜单内选择**直线**，并在**粗细**菜单内将粗细设置为**1px**

![](https://www.hualigs.cn/image/6038ce020a4cb.jpg)*直线工具*

![](https://www.hualigs.cn/image/6038cec1b673f.jpg)*调整粗细*

使用**直线**工具连接图案上下两端。

![](https://www.hualigs.cn/image/6038cf5c3c450.jpg)*连接后的效果*

使用**填充**工具为背景板上色。记得在填充前选择你喜欢的颜色。

![](https://www.hualigs.cn/image/6038d0afdf6a6.jpg)*用颜色填充*

![](https://www.hualigs.cn/image/6038d1d4ccedc.jpg)*填充后效果*

然后，你需要把 ID 皮肤边框外围的区域变得**透明**。**注意：** 跳过这一步可能会导致 ID 皮肤无法正确显示。 Windows 画图中的白色$\neq$透明。


Windows 画图并不支持该功能，因此你需要使用 PS 等功能更加丰富、更加专业的工具来完成这项操作，你可以委托你的朋友，或联系服务器内有条件的玩家来完成这一步，这并不会耗费太多时间。

:::warning
别忘了保存你的文件
:::

在 PS 中打开你刚刚保存的图片：

![](https://www.hualigs.cn/image/6038d84097475.jpg)

选中并删除背景板及图案周围多余的黄色、绿色部分使其透明。

:::warning
**魔棒**工具存在较多 BUG ，推荐使用磁性套索或矩形选框工具来完成选取。
:::

![](https://www.hualigs.cn/image/6038dcb75dffc.jpg)

最后，你**必须**在图片边缘添加两个不透明像素，以标记图片的边缘。

![](https://www.hualigs.cn/image/6038dd774fe45.jpg)

这样，属于你的 ID 皮肤就制作完成了！不要忘了给它起一个好听的名字，同时记得保存你的文件。

## 上手体验

服内将不定期举办相关活动，展示、上架优秀的 ID 皮肤。你的作品将会被大家看到、使用！

赶快来试试吧！
