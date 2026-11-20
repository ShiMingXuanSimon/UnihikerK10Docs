---
title: "unihiker_k10官方库（积木模式）"
source: "https://www.unihiker.com.cn/wiki/k10/micropython_block_unihiker_k10"
sourceTitle: "行空板K10官方教程-micropthon_block_unihiker_k10"
updated: "2026-11-20"
---

# unihiker_k10官方库（积木模式）

## 固件烧录

**注意：此固件处于测试阶段，可能会存在一些bug，推荐有一定技术能力的用户使用。**

**注意：烧录micropython固件后，要想再使用Mind+中的图形化模式，需要在Mind+ V1中恢复初始设置**  
![](/images/k10/4ca60f7569b5618c.png)  
**或在Mind+ V2中连接K10后点击擦除**  
![](/images/k10/794762e89757e006.png)

**恢复时先按住boot，再接数据线，待识别出端口后即可松开BOOT键，此时再点击恢复初始设置。完成后摁下板子的RST复位即可完成恢复**  
![](/images/k10/bec4654504bc0666.png)

## 烧录方法1

-   下载Mind+ V2: [点击下载Mind+ V2](https://mindplus.cc/download.html)
    
-   选择MicroPython积木模式  
    ![](/images/k10/807155a056ee575f.png)
    
-   左下角扩展选中0.0.5版本（或以上）的行空板K10并安装，安装完成后选择行空板K10。  
    ![](/images/k10/47a0d02fd428d8d4.png)
    
-   然后按住K10背后的BOOT按键，通过USB将其连接到电脑上。
    
-   返回到上一级界面，点击连接设备，然后依次点击擦除，烧录->0.9.8。烧录固件  
    ![](/images/k10/ed59ad42a5f3218f.png)
    
-   等待右下角终端（小黑窗）烧录完成，出现"Hard resetting via RTS pin..."，说明烧录完成。此时可点击K10背后的RST按钮进行硬件复位，再次点击连接即可在MicroPython模式下连接行空板K10  
    ![](/images/k10/e6e917bd64a5b64b.png)
    

## 烧录方法2

-   下载micropython固件：[micropython\_unihiker\_k10&Box\_20260430\_V0.9.8.zip](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/dac51f5f32e79b41076994505310b4a3.zip "micropython_unihiker_k10&Box_20260430_V0.9.8.zip")
    
-   下载ESP32固件烧录软件：[点击下载](https://www.espressif.com.cn/zh-hans/support/download/other-tools)
    
-   解压后运行exe文件，选择ESP32-S3。  
    ![](/images/k10/a6096825f381398b.png)
    
-   选择对应的文件，填入相应地址，并勾选最前面的对号。  
    ![](/images/k10/cf3ea79690814b6f.png)
    
-   按住行空板K10背面的BOOT按钮，连接板子与电脑，在软件中选择对应的端口。
    
-   先点击“ERASE”清除flsh，待成功后再点击"START"进行烧录。
    
-   烧录完成后摁下行空板K10板子的RST复位键。
    

## 软件准备

-   下载并安装[Mind+ V2](https://mindplus.cc/download.html)
    
-   安装完成后打开软件，选择MicroPython积木模式  
    ![](/images/k10/4dfeb0f2b0251946.png)
    
-   左下角扩展选中0.0.5版本（或以上）的行空板K10并安装，安装完成后选中行空板  
    ![](/images/k10/47a0d02fd428d8d4.png)
    
-   返回上一级后，点击连接设备，将K10连接到MicroPython积木模式  
    ![](/images/k10/5524a2539a3c5e13.png)
    

## 屏幕显示

### 图像显示到X, Y

![](/images/k10/3b39f310d0a8c1db.png)

### 显示摄像头画面

![](/images/k10/20b317188e065046.png)

### 显示纯色背景

![](/images/k10/b70b4d37b54dc3a1.png)

### 缓存显示文字

![](/images/k10/47f6dae69cfc2cd8.png)

### 特定坐标显示文字

![](/images/k10/f0fa94754bd53a21.png)

### 缓存画点

![](/images/k10/402b3a4dd0e32eb9.png)

### 缓存画线

![](/images/k10/0f503fe4ac219e24.png)

### 缓存画圆

![](/images/k10/065d422fa51de43f.png)

### 缓存画矩形

![](/images/k10/890b9f732a8779b2.png)

## 板载传感器

### 板载按钮（中断）

![](/images/k10/b686d5383ad91d20.png)

### 板载按钮（轮询）

![](/images/k10/37862994a3d921eb.png)

### 板载温湿度

![](/images/k10/0a6d79f195c57f3d.png)

### 板载环境光

![](/images/k10/f7ceb27b293b6c06.png)

### 板载加速度传感器

![](/images/k10/61abb0e64db436a5.png)

### 板载RGB灯

![](/images/k10/c89ba00787fa9a9a.png)

## TF卡，UUID

![](/images/k10/845db8194cc81c22.png)

## 录放音（储存到TF卡）

![](/images/k10/35b0b583cd7944b6.png)

## 录放音（储存到K10）

![](/images/k10/05f4113c704875fc.png)

## 通讯

### WiFi

![](/images/k10/7fd03b4b39924663.png)

### MQTT

![](/images/k10/7203a0aa2bccf7f9.png)

### 蓝牙HID

![](/images/k10/22bf4f4d7dadd568.png)

## 外部硬件

### 舵机

![](/images/k10/d4e00e128951b194.png)

### RGB灯带

![](/images/k10/ce248dbf419cce4f.png)

### DHT11/DHT22温湿度

会自动识别连接上的是DHT11还是DHT22  
![](/images/k10/1eca3def5a566d6e.png)

### DS18B20

![](/images/k10/05e509cc32c7e94c.png)

### 超声波（TRIG-ECHO类型）

![](/images/k10/d22c77b7cf518910.png)

### 重量传感器KIT0176

![](/images/k10/abf10c7011800d83.png)
