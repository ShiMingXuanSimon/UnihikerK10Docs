---
title: "小智AI使用教程"
source: "https://www.unihiker.com.cn/wiki/k10/xiaozhi_ai"
sourceTitle: "小智AI使用教程"
updated: "2026-11-20"
---

# 小智AI使用教程

## 简介

在物联网与人工智能融合的时代，搭载 ESP32-S3 的行空板 K10开发板以其高集成度脱颖而出：配备 2.8 英寸 LCD 显示屏、双核处理器、麦克风、扬声器以及 Wi-Fi/蓝牙连接。它专为教育和原型开发而设计，为 AI 驱动的语音/图像应用提供了一个“开箱即用”的平台。

GitHub 上的开源项目xiaozhi-esp32开启了新的可能。它充分利用 ESP32-S3 的功能，并集成 DeepSeek 等模型的 API，实现了本地化的 AI 语音聊天。我们提供了免编译的固件，您只需要简单的烧录上传即可让行空板 K10 摇身一变，成为一款响应式智能终端，支持多轮对话、唤醒词检测和实时翻译。

硬件与开源创新的协同作用降低了人工智能开发的门槛。借助直观的界面和高效的边缘计算，开发者可以轻松构建语音助手、教育工具解决方案的原型。边缘人工智能的未来由此开启。

xiaozhi-esp32 是一个开源的 ESPIDF 项目，由于 ESPIDF 的配置过程比较繁琐，我们整理了一些 xiaozhi 固件供大家直接烧写。

## 硬件需求

USB-C线缆 \* 1  
Windows PC \* 1（推荐Windows10/11）

## 软件下载

### 烧录工具

[flash\_download\_tool](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/d091353fca0f5a056949cb74e51e5f91.zip "flash_download_tool.zip")

### 固件下载

**固件版本**

**功能介绍**

[xiaozhi-unihikerk10-2.1.0-CNver.zip](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/e36c9c0b4c5593b699315e226bc2f427.zip "xiaozhi-unihikerk10-2.1.0-CNver.zip")

2.1.0版本  
\- 支持自定义唤醒词和界面

[xiaozhi-1.8.5-unihikerk10-CNver.zip](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/4853000de61add90ce1b0fae791fd359.zip "xiaozhi-1.8.5-unihikerk10-CNver.zip")

1.8.5版本原始对话界面  
\- 优化运行速度和识别效果

[xiaozhi-1.7.5-unihikerk10-CNver.zip](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/48992e9c877ef03f6d4dd363169d4296.zip "xiaozhi-1.7.5-unihikerk10-CNver.zip")

1.7.5版本支持微信对话界面中预览摄像头拍摄的画面  
\- 支持语音控制板载LED灯显示任何颜色，如“帮我把所有灯设置为蓝色”，“帮我把第一个灯设置为黄色”

[xiaozhi-1.6.6b-unihikerk10-CNver](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/e559d3b37a6eba4be4b3e9dd8292c503.zip "xiaozhi-1.6.6b-unihikerk10-CNver.zip")

1.6.6版本中文界面，微信聊天框  
\- 支持视觉识别功能，可以通过“帮我拍张照片”，“你看到了什么”等语音命令开启。  
\- 可在屏幕观察到摄像头拍摄画面

[xiaozhi-1.6.6-unihikerk10-CNver](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/0a7c0e805097b51fa001016f4c608c42.zip "xiaozhi-1.6.6-unihikerk10-CNver.zip")

1.6.6版本中文界面，非微信聊天框  
\- 支持视觉识别功能，可以通过“帮我拍张照片”，“你看到了什么”等语音命令开启。  
\- 无法在屏幕观察到摄像头拍摄画面

[xiaozhi-1.6.2-unihikerk10-CNver](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/66615f33e0d36e320642e45c8f23e930.zip "xiaozhi-1.6.2-unihikerk10-CNver.zip")

1.6.2版本中文界面，微信聊天框样式  
\-更新WiFi组件版本，并从OTA接口读取WebSocket服务器

## 烧录教程

### 步骤1 将小智刷入行空板K10

长按K10背面的boot键，然后通过USB将其连接电脑  
并打开“Flash download tool”选择  
ChipType：ESP32-S3  
WorkMode：Develop  
LoadMode：UART  
![](/images/k10/70b5292578bf9e9d.png)

在第一行空白框中按“…”按钮，选择上面下载的固件并且解压缩得到.bin文件，  
勾选上此bin文件的箭头

导入.bin文件如下图：  
![](/images/k10/01c1ebe13aafffd8.png)  
需要用 0x00 填充起始地址。  
然后我们需要选择正确的COM端口并将波特率设置为1152000。  
然后按“ERASE”键擦除K10中当前的固件。  
擦除步骤完成后，按“START”将小智固件刷入K10。  
![](/images/k10/610c1011544a5d27.png)

### 步骤2 配置 Wi-Fi 和语言模型

成功刷新固件后，按下K10背面的RST按钮。  
K10首先会进入Wi-Fi配置模式  
![](/images/k10/9e34abaee22e7094.png)  
现在用你的电脑或手机连接小智的热点，然后配置 Wi-Fi SSID 和密码，让小智连接到互联网。  
注：K10 只能连接 2.4GHz Wi-Fi  
![](/images/k10/a24b200e24102bc7.png)  
一旦 Wi-Fi 连接成功，K10 将在 3 秒内重启。  
并且K10的屏幕上将显示一个六位数的设备代码。  
![](/images/k10/88e25295ea8642fb.png)

下一步可以去小智配置站点配置语言模型和说话人。  
使用浏览器输入xiaozhi.me打开小智配置网站，并且点击控制台  
![](/images/k10/60cf5f6b9b8715f1.png)  
使用您的手机号码注册一个小智账号。  
![](/images/k10/e60ef3dafff7a60f.png)  
进入控制台后，再K10显示屏上添加设备并输入设备代码  
![](/images/k10/dcb13f9991d9b34a.png)  
目前，xiaozhi已成功部署在UNIHIKER K10上。  
您可以进入配置角色屏幕来更改 xiaozhi 的角色。  
![](/images/k10/efa2ef71746edc9b.png)

### 步骤3 唤醒你的AI伙伴

现在你可以使用"你好，小智"唤醒K10并与其交谈  
K10板载两个按键功能如下：  
A：短按-中断/唤醒，长按1s-音量加。  
B：短按-中断/唤醒，长按1s-音量减

在1.6.6版本以上，支持调用摄像头识别画面。

## 注意事项

-   烧录小智代码后暂时无法调用板载的光线，温湿度等传感器
-   烧录小智后，如想再次使用Mind+编程，可查看[此教程](/wiki/k10/FAQ#%E5%B0%8F%E6%99%BAAI%E9%97%AE%E9%A2%98 "此教程")

## 鸣谢

小智AI属于一个开源项目。行空板K10的适配以及功能的完善都是由社区爱好者推动，感谢你们所作的贡献。

Github项目地址：  
[https://github.com/78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32 "https://github.com/78/xiaozhi-esp32")

项目原作者：  
[@78（虾哥）](https://github.com/78 "@78（虾哥）")

项目贡献者：  
[@HonestQiao](https://github.com/HonestQiao "@HonestQiao")  
[@Paul Xu](https://github.com/nbzx "@Paul Xu")  
[@SunnyBoy-y](https://github.com/SunnyBoy-y "@SunnyBoy-y")  
[@YeezB](https://github.com/YeezB "@YeezB")

注：如果您的K10相关代码被成功合并到小智主线，您可以通过邮件联系我们，我们会将您的GitHub ID加入贡献者名单。  
Email: unihiker@dfrobot.com
