---
title: "快速使用教程(学习指南)"
source: "https://www.unihiker.com.cn/wiki/k10/get-started"
sourceTitle: "行空板K10官方文档-快速上手教程 "
updated: "2026-11-20"
---

# 快速使用教程(学习指南)

## 前言

行空板K10是一款专为快速体验和学习人工智能而设计的开发学习板，100%采用国产芯片，知识产权自主可控，符合信息科技课程中编程学习、物联网及人工智能等教学需求。该板集成LCD彩屏、WiFi蓝牙、摄像头、麦克风、扬声器、RGB指示灯、多种传感器及丰富的扩展接口。凭借高度集成的板载资源，教学过程中无需额外连接其他设备，便可轻松实现传感器控制、物联网应用以及人脸识别、语音识别、语音合成等人工智能项目。

![](/images/k10/20e0a551caf824e7.png)

## 1.接口&器件说明

![](/images/k10/1d3d29dc4677b80f.png)

## 2.首次开机说明

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

当烧录其他程序后，出厂程序会被覆盖，若想重新刷会出厂程序请查看：[出厂程序说明](/wiki/k10/default-program "出厂程序说明")

## 3.硬件准备

-   行空板K10 x 1
-   Type-C接口USB线 x 1
-   电脑 x 1

## 4.软件准备

-   下载 Mind+ V1.8.1 RC1.0（ V1.8.1 RC1.0为最低版本要求，小于此版本的Mind+无法使用K10）：[下载链接](https://mindplus.cc/download.html)
    
-   打开Mind+，切换到上传模式
    

![](/images/k10/1d445488583414ae.png)

## 5.开始Mind+图形化编程

-   点击”扩展“，在扩展页面中，点击”主控板“，选择”行空板K10“，点击”返回“，完成加载

![](/images/k10/0dd86765b6c05677.png)

-   使用USB线将行空板K10的Type-C口接到电脑USB口，在mind+中点击“连接设备”，找到对应的K10设备并点击，完成设备连接

![](/images/k10/da396785eee54ad5.png)

-   分别在K10的第2行，第4行，第6行，以不同的颜色缓存显示文字”你好，行空板K10“，然后将缓存更新

![](/images/k10/d68070bae9c29b65.png)

-   点击“上传到设备”，等待程序上传完成

![](/images/k10/4de528ea58cbe569.png)

-   程序上传成功后，K10屏幕上，显示不同颜色的文字“你好，行空板K10”

![](/images/k10/6958df701ce0f18c.png)

## 6-其他编程方式

作为基于MCU的开发板，行空板 K10兼容以下主流编程平台。  
请参照各编程平台的系统要求，选择相应的编程软件。

**Platform**

Platform version requirements

Windows

MacOS

GNU Linux

**[Mind+](/wiki/k10/mindplus-ready)**

V1.8.1 RC1.0

✅

❌️

❌️

**[Arduino IDE](/wiki/k10/ArduinoIDE_prepare)**

All version

✅

✅

✅

**[Platform IO](/wiki/k10/platform_io_prepare)**

All version

✅

✅

✅

**[MicroPython](/wiki/k10/micropython_unihiker_k10)**

All version

✅

✅

✅

## 遇到问题怎么办

1.查看官方文档的**FAQ常见问题**页面搜索问题或在**百度搜索**关键词尝试解决。

2.进入[论坛](https://mc.dfrobot.com.cn/forum-221-1.html)搜索或发帖子交流问题

![](/images/k10/a7aca185ab526360.png)

3.加入行空板K10官方**QQ交流群**(935688193)进行交流。

## 官方文档目录

[快速使用教程](/wiki/k10/get-started)

[FAQ常见问题](/wiki/k10/FAQ)

### 1.行空板K10介绍

[1.1-参数介绍](/wiki/k10/jianjie)

[1.2-出厂程序说明](/wiki/k10/default-program)

[1.3-脱机工作说明](/wiki/k10/default-program)

[1.4-TF存储卡说明](/wiki/k10/TFcard)

[1.5-扩展板兼容性说明](/wiki/k10/compatibility1)

[1.6-传感器兼容性说明](/wiki/k10/compatibility2)

### 2.图形化积木说明

[Mind+图形化编程准备](/wiki/k10/mindplus-ready)

[2.1-屏幕显示积木](/wiki/k10/mindplus-screen)

[2.2-板载传感器积木](/wiki/k10/mindplus-sensor)

[2.3-LED控制积木](/wiki/k10/mindplus-led)

[2.4-音频录放积木](/wiki/k10/mindplus-audio)

[2.5-人工智能积木](/wiki/k10/mindplus-ai)

[2.6-串口操作积木](/wiki/k10/mindplus_uart)

[2.7-引脚操作积木](/wiki/k10/mindplus_pin)

### 3.Micropython库说明

[unihiker\_k10 官方库](/wiki/k10/micropython_unihiker_k10)

[educore库](/wiki/k10/micropython_educore)

### 4.系列教程

#### [官方图形化入门教程](/wiki/k10/blocktutorials)

### 5.社区优秀应用案例

[IOT物联网相关项目](/wiki/k10/others_project)

[其他社区优秀项目](/wiki/k10/others_project)

[AI相关项目](/wiki/k10/AI_project)
