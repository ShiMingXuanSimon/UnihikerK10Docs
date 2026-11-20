---
title: "1.2 出厂程序说明"
source: "https://www.unihiker.com.cn/wiki/k10/default-program"
sourceTitle: "行空板K10官方文档-出厂程序说明"
updated: "2026-11-20"
---

# 1.2 出厂程序说明

## 重新烧录出厂程序

全新的K10会有一个出厂程序，用于快速体验K10的产品功能。在刷入其他程序后，出厂程序会被覆盖，如果想重新体验出厂程序，可按照如下流程操作：

-   在以下列表中选择固件源码下载，无特殊需求，尽量选择日期最新的固件下载

固件

说明

[UNIHIKER K10-UserProgram-CN-260810.zip](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/0efc9f65acd258b02cb07490eaf8ce84.zip "UNIHIKER K10-UserProgram-CN-260810.zip")

解决了部分显示bug

[UNIHIKER K10-UserProgram-CN-241202.zip](https://img.dfrobot.com.cn/wikicn/5cabf4771804207b131ae8cb/1445b052ca716390e2cb305e23b38761.zip "UNIHIKER K10-UserProgram-CN-241202.zip")

优化了显示效果

[UNIHIKER K10-UserProgram-241015.zip](https://img.dfrobot.com.cn/wikicn/5cabf4771804207b131ae8cb/91b282cf98ece4dd72cbdb1cdd28c777.zip)

初版固件

-   下载完成后使用记事本/VSCode等软件打开，复制全部内容
-   粘贴到Mind+的手动编程区域
-   选择主板和串口后上传代码

（出厂程序功能较多，烧录时间长，故未集成到恢复设备初始设置中，如有需要请自行下载烧录）

## 出厂程序功能说明

使用USB线将行空板K10的Type-C口接到电脑USB口或5V适配器，等待K10的屏幕显示出logo画面即为开机状态。开机成功后，K10运行首次开机程序，可以快速体验产品功能。（注：文档中的K10，为行空板K10的简称）

**注意：** 请确保USB线直接插到电脑的USB口，不要使用延长线或者拓展坞等中间组件，确保USB线具有数据传输功能。

![](/images/k10/0d6fbd2c5d878a3e.png)

-   1.按下B键，切换至“人脸检测”模式，当摄像头拍摄的画面中出现人脸时，识别框会自动框选出人脸。

![](/images/k10/c4637236eb0e5d2c.png)

-   2.再次按下B键，切换至“语音识别”模式，可以通过屏幕上的提示，通过语音控制指令，进行开灯、关灯、播放动画、朗读古诗等操作。

![](/images/k10/65109fe36041b563.png)

-   3.再次按下B键，切换至“传感器”模式，此时屏幕上会显示一株植物。当对着板子右上角的温湿度传感器吹气时，会模拟下雨为植物浇水；当长时间不下雨时，植物会枯萎；当用强光照射板子右上角的环境光传感器时，太阳变大模拟太阳光照；当下雨且光照充足时，植物会开花。

![](/images/k10/c66c915bab2882d8.png)

-   4.再次按下B键，切换至“查看教程”模式，通过手机扫描二维码，可查看K10的使用教程。

![](/images/k10/3ab7e85d4538d5e5.png)
