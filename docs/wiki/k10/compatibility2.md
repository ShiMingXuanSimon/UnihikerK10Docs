---
title: "1.6 传感器兼容性说明"
source: "https://www.unihiker.com.cn/wiki/k10/compatibility2"
sourceTitle: "行空板官方文档-传感器兼容性说明"
updated: "2026-11-20"
---

# 1.6 传感器兼容性说明

以下为Mind+编程软件中对于DFRobot传感器，以及其他功能模块的支持。  
分为官方库：下载Mind+后直接可在扩展中找到的库  
以及用户库：由我们的用户开发，需要在扩展->用户库中搜索找到的库

## 官方库

### 传感器

SKU

功能

SEN0001

trig echo 超声波测距传感器

SEN0203

数字/模拟心率传感器

SEN0305/SEN0336

I2C Huskylens 二哈 AI摄像头

SEN0228

I2C VEML7700 环境光传感器

SEN0517

I2C ICP10111 气压传感器

SEN0236

I2C BEM280 环境传感器

SEN0248

I2C BME680 环境传感器

DFR0034

模拟声音传感器

SEN0291

I2C数字功率计

SEN0321

I2C臭氧传感器

KIT0176

I2C重量传感器

DFR0067/SEN0137

DHT11/22温湿度传感器

SEN0206/SEN0263

I2C 非接触红外测温传感器

SEN0388

URM09- Trig超声波测距传感器

DFR0023

LM35线性模拟温度传感器

DFR0024/KIT0021/DFR0198

DS18B20温度传感器

DFR0715

语音识别模块

SEN0250

BMI160 6轴惯性运动传感器

SEN0224

LIS2DH 三轴加速度计

SEN0251

BMP388气压温度传感器

SEN0206/SEN0263

非接触式红外测温传感器

DFR0026

模拟环境传感器

DFR0027

数字震动传感器

DFR0029

数字大按钮模块

DFR0030

数字触摸传感器

DFR0033

数字贴片磁感应传感器

DFR0034

模拟声音传感器

DFR0051

模拟电压检测模块

DFR0052

模拟压电陶瓷震动传感器

DFR0058

模拟多圈旋转角度传感器

DFR0061

JoyStick摇杆模块

DFR0076

火焰传感器

DFR0063

锂电池电量计

DFR0553

16位AD转换模块

SEN0114

土壤湿度传感器

SEN0121

水分传感器

SEN0315

PAJ7620U2手势识别传感器

SEN0376

酒精传感器

SEN0364

可见光谱传感器

SEN0359

指纹传感器

SEN0514

ENS160空气质量传感器

SEN0518

MAX30102心率血氧传感器

SEN0536

二氧化碳传感器

SEN0540

LTRUV紫外线传感器

SEN0575

雨量模块

SEN0334

SHT31-F数字温湿度传感器

SEN0322

I2C氧气浓度传感器

SEN0619

BMM350三轴地磁传感器

### 执行器

SKU

功能

SER0006

舵机模块

SER0043/SER0035

360度微型舵机

DFR0299

DFPlayer MP3模块

DFR0534

串口MP3模块

DFR0523

蠕动泵

DFR0017

继电器

DFR0760

语音合成模块

### 通信模块

SKU

功能

蓝牙HID 模拟蓝牙键盘

DFR0094

红外接收模块

DFR0231/DFR0231-H

RFID/NFC模块

无线广播

### 显示器

SKU

功能

FIT0352/FIT0656/DFR0888

WS2812 RGB灯

DFR0646

TM1650八位数码管

### 功能模块

SKU

功能

引脚中断

多线程

I2C地址扫描

DFR0576

I2C级联扩展器

DFR0469

实时时钟SD2405

跨模式数据传输

DFR0999

Gravity SCl 采集模块

### 网络服务

SKU

功能

WiFi

MQTT

NTP 网络时间

UDP广播

HTTP

获取天气

TinyWebDB

## 用户库

本章节收录一些优秀的行空板K10用户库案例

### 蓝牙串口

两个K10的蓝牙串口透传功能  
用户库链接：[https://gitee.com/chenqi1233/ext-ble\_-uart](https://gitee.com/chenqi1233/ext-ble_-uart "https://gitee.com/chenqi1233/ext-ble_-uart")

### ESP-NOW

ESP-NOW 是乐鑫定义的一种无线通信协议，能够在无路由器的情况下直接、快速、低功耗地控制智能设备。  
用户库链接：[https://gitee.com/zhaoruiz/ext-esp-now](https://gitee.com/zhaoruiz/ext-esp-now "https://gitee.com/zhaoruiz/ext-esp-now")

### 豆包大模型

让 K10主板通过ArduinoC模式调用豆包(Doubao)大语言模型API,实现智能对话功能。  
用户库链接：[https://gitee.com/liu-chunxiao1/ext-doubao](https://gitee.com/liu-chunxiao1/ext-doubao "https://gitee.com/liu-chunxiao1/ext-doubao")  
使用教程：[K10豆包用户库使用教程](https://makelog.dfrobot.com.cn/article-318607.html "K10豆包用户库使用教程")

### SD卡

读取K10 SD卡中的文件内容  
  
[doudad-sdcard-thirdex-V0.0.2.mpext](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/6225298f55febb258e39d5ab053b9de1.mpext "doudad-sdcard-thirdex-V0.0.2.mpext")  
可在扩展->用户库->导入用户库中选择该mpext文件加载库

### 网络摄像头（WebCamera）

通过http协议，局域网内访问K10摄像头画面  
用户库链接：[https://gitee.com/yeezb/k10web-cam](https://gitee.com/yeezb/k10web-cam "https://gitee.com/yeezb/k10web-cam")
