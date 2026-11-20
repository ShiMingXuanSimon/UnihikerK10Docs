---
title: "ESP CLAW使用教程"
source: "https://www.unihiker.com.cn/wiki/k10/esp_claw"
sourceTitle: "ESP Claw使用教程"
updated: "2026-11-20"
---

# ESP CLAW使用教程

## 简介

长久以来，我们使用的智能设备大多扮演的是“听令者”的角色——指令来了，它照做；没有指令，它便静默。你让它关灯，它就关灯；你让它记录温湿度，它就乖乖记录。这种“你说我做”的单向模式，构成了人们对物联网的基本认知。  
但ESP-Claw AI智能体框架给出了一个不一样的答案：。它以“Chat Coding（聊天造物）”为核心，打破了传统设备必须云端依赖、无法自主思考的瓶颈，将 AI 智能体的“思考力”下沉到了边缘芯片。这意味着，搭载 ESP-Claw 的设备不再是被动接收指令的执行单元，而是一个能在本地实现感知、推理与决策闭环的独立智能体。  
我们率先在行空板K10上完成了对 ESP-Claw 智能体框架的全面软件适配。曾经需要在 PC 或服务器上才能运行的复杂 Agent，已经完美融入行空板K10这块小巧的开发板之中，真正开启了“嵌入式原生”的 AI 智能体轻量化时代。现在，我们就来尝试在行空板K10上运行该项目。

## 软硬件准备

### 硬件

[行空板 K10](https://www.dfrobot.com.cn/goods-4014.html)  
[ESP CLAW固件](https://www.unihiker.com.cn/wiki/k10/ESPCLAW%E5%9B%BA%E4%BB%B6 "dfrobot_k10_merged_260427.zip")

## 烧录方法1

点击进入[ESP CLAW烧录网站](https://esp-claw.com/zh-cn/flash/)

-   按住行空板K10背后的BOOT按键，将其通过USB连接到电脑
    
-   点击连接按钮，选择对应的COM口进行连接
    

![Interface Diagram](/images/k10/ddbe5acb3bf0a739.png)

-   选择dfrobot\_k10，进入WiFi，LLM和即时通讯软件的配置选项

![Interface Diagram](/images/k10/cca789571dd7ac12.png)

在这里的配置中：

-   WiFi设置：选择2.4GHz的WiFi网络进行配置
-   LLM提供商：我选择了DeepSeek作为供应商。如果您有Qwen，OpenAI，Claude的API，也可自行更改。（OpenAI以及Claude可能需要特殊网络环境）
-   即时通讯：配置需要连接到的聊天软件：目前支持 Telegram、QQ Bot（OpenClaw）、飞书与微信 ClawBot 等，可同时填写多个。

即时通讯软件

配置项

帮助文档

Telegram

Bot Token

[Telegram Bot文档](https://core.telegram.org/bots#6-create-a-token "Telegram Bot文档")

QQ Bot

ID 和 Secret

[QQ Bot网站](https://q.qq.com/qqbot/openclaw/login.html?redirect_url=https%3A%2F%2Fq.qq.com%2Fqqbot%2Fopenclaw%2F "QQ Bot网站")

飞书

App ID 和 Secret

[飞书文档](https://www.feishu.cn/content/article/7602519239445974205 "飞书文档")

微信 ClawBot

扫码自动配置

无，扫码即可

-   配置搜索引擎：  
    配置搜索引擎后，ESP-Claw 才能通过网络检索获取最新信息。查询天气也依赖搜索引擎支持。  
    推荐配置 Tavily，有一定的免费额度。  
    打开 [Tavily Dashboard](https://app.tavily.com/ "Tavily Dashboard")，注册账号并登录，复制一个 API Key 并填入网页烧录工具的「Tavily」输入框。

## 烧录方法2

如果[ESP CLAW烧录网站](https://esp-claw.com/zh-cn/flash/)无法正常连接K10。  
则点击将固件下载至本地

![Interface Diagram](/images/k10/63e6677259502f3e.png)

访问[ESPLAUNCH PAD](https://espressif.github.io/esp-launchpad/? "ESPLAUNCH PAD")

按住K10背后的BOOT按键，将其通过USB连接上电脑  
  
然后点击connect来连接K10

![Interface Diagram](/images/k10/f6d2d318dee251af.png)

选择刚刚下载的固件，烧录地址改为0x00，最后点击program

![Interface Diagram](/images/k10/a1c82b33c6c97720.png)

烧录完成后点击K10背后的RST按键，复位K10。屏幕上会出现小龙虾图案。顶部会出现esp-claw-xxxxxx的热点名称

![Interface Diagram](/images/k10/bf075c2db523e4ae.jpg)

行空板K10显示屏上会出现ESP CLAW图片，并且顶部会出现WiFi名称。  
使用手机或者电脑连接该WiFi，等待数秒后会自动打开配置网页。或者手动打开 http://esp-claw.local/ 也可。

![Interface Diagram](/images/k10/54a47a27e3d20ce2.png)

在这里可以重复进行WiFi，LLM以及即时通讯软件的配置。

在这里的配置中：

-   WiFi设置：选择2.4GHz的WiFi网络进行配置
-   LLM提供商：我选择了DeepSeek作为供应商。如果您有Qwen，OpenAI，Claude的API，也可自行更改。（OpenAI以及Claude可能需要特殊网络环境）
-   即时通讯：配置需要连接到的聊天软件：目前支持 Telegram、QQ Bot（OpenClaw）、飞书与微信 ClawBot 等，可同时填写多个。

即时通讯软件

配置项

帮助文档

Telegram

Bot Token

[Telegram Bot文档](https://core.telegram.org/bots#6-create-a-token "Telegram Bot文档")

QQ Bot

ID 和 Secret

[QQ Bot网站](https://q.qq.com/qqbot/openclaw/login.html?redirect_url=https%3A%2F%2Fq.qq.com%2Fqqbot%2Fopenclaw%2F "QQ Bot网站")

飞书

App ID 和 Secret

[飞书文档](https://www.feishu.cn/content/article/7602519239445974205 "飞书文档")

微信 ClawBot

扫码自动配置

无，扫码即可

-   配置搜索引擎：  
    配置搜索引擎后，ESP-Claw 才能通过网络检索获取最新信息。查询天气也依赖搜索引擎支持。  
    推荐配置 Tavily，有一定的免费额度。  
    打开 [Tavily Dashboard](https://app.tavily.com/ "Tavily Dashboard")，注册账号并登录，复制一个 API Key 并填入网页烧录工具的「Tavily」输入框。

## 聊天

![Interface Diagram](/images/k10/090f7003b1d98f4c.png)

可以告诉他外接传感器，读取数据

![Interface Diagram](/images/k10/3d18d2659f216abc.png)

调用摄像头

![Interface Diagram](/images/k10/31583f196d83b2e6.png)

点亮板载LED灯

![Interface Diagram](/images/k10/6652ddca2bd3bb39.png)

可以驱动屏幕

![Interface Diagram](/images/k10/8af4d0883aa17516.png)

![Interface Diagram](/images/k10/6c0d638b42ff99bc.gif)

## 项目链接

[https://github.com/espressif/esp-claw](https://github.com/espressif/esp-claw "https://github.com/espressif/esp-claw")

## skill 链接
