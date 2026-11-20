---
title: "Arduino IDE编程准备"
source: "https://www.unihiker.com.cn/wiki/k10/ArduinoIDE_prepare"
sourceTitle: "Arduino IDE 编程准备"
updated: "2026-11-20"
---

# Arduino IDE编程准备

## **Arduino IDE编程准备**

Arduino集成开发环境（IDE）是一款用于编程、编译和将代码上传至MCU开发板的软件工具。它提供了一个简单易用的界面，使开发者能够使用Arduino编程语言（基于C/C++）进行代码编写、编辑和调试。  
在本教程中，我们将引导您完成在计算机上下载Arduino IDE并安装行空板K10 BSP的整个过程。  
  
![](/images/k10/15bde4f80e38fd8f.png)

### **下载Arduino IDE**

**下载**

**从Arduino IDE 官网下载**

[Arduino IDE](https://www.arduino.cc/en/software/)

### **安装 Arduino IDE BSP**

在Arduino IDE中，行空板K10将会以Board Support Package(板卡支持包)的形式在下载后集成入Arduino IDE。

-   BSP URL:  
    https://downloadcd.dfrobot.com.cn/UNIHIKER/package\_unihiker\_index.json  
    
-   在Arduino IDE中打开 "File->Preference"  
      
    ![](/images/k10/6caaa1b807bf62c7.png)
    
-   将 "Compiler warnings" 设置为 none  
      
    ![](/images/k10/ca0880d165119651.png)
    
-   点击下图箭头中的按钮来添加BSP URL  
      
    ![](/images/k10/ac77722cbbc63cfa.png)
    
-   在对话框中另起一行，添加本文上方的BSP URL，最后点击save。  
      
    ![](/images/k10/96eebdf79fdbdb82.png)
    
-   打开 "Tools->Board->Boards Manager"  
      
    ![](/images/k10/4b9bf3fa43d6e423.png)
    
-   在对话框中搜索"unihiker"并且点击install进行安装  
      
    ![](/images/k10/8be0c36f96276039.png)
    
-   等待安装完成后，即可在Arduino IDE中选择行空板k10(unihiker k10)进行开发  
      
    ![](/images/k10/45e0ebc8062cc83c.png)
    

### **FAQ**

-   Q1: 装完UNIHIHIKER BSP后为行空板K10编译程序，即使是空程序也会报错"xtensa-esp32s3-elf-g++: error: CreateProcess: No such file or directory"
    
-   A1：esp32编译必要组件在UNIHIKER BSP安装时没有安装成功。需要退出所有杀毒防护软件，并关闭防火墙重新安装UNIHIKER BSP。必要时可能需要科学上网。
    
-   Q2: 安装过程超时，报错为：
    

```bash
Failed to install platformUNIHIKER:0.0.x
4 DEADLINE EXCEEDED net/http:request cancelled
(Client timeout or contect cancellation while reading body)
```

-   A2：行空板K10的BSP安装时同时会安装esp32的BSP，安装包较大。所以网速稍慢，安装时间较长的话，会导致Arduino IDE误判定网络连接超时。可通过此[Arduino Topic](https://forum.arduino.cc/t/ide-2-3-7-now-gives-error-4-deadline-exceeded/1422321/2 "Arduino Topic")的方法，修改超时时间。  
    具体为：
    -   如果 Arduino IDE 正在运行，请从其菜单中选择“文件”>“退出”。所有 Arduino IDE 窗口都将关闭。
        
    -   请使用任意文本编辑器打开以下路径下的文件：  
        如果您使用的是Linux系统：  
        /home/$username/.arduinoIDE/arduino-cli.yaml  
        （$username处替换为您的Linux用户名）  
        注: 该.arduinoIDE文件夹可能默认在您的文件管理器和终端中处于隐藏状态。
        
        如果您使用的是 macOS：  
        /Users/$username/.arduinoIDE/arduino-cli.yaml  
        （$username处替换为您的macOS用户名）  
        该.arduinoIDE文件夹默认处于隐藏状态。您可以按快捷键"Command“+ "Shift”将其显示出来
        
        如果您使用的是 Windows 系统：  
        C:\\Users\\username.arduinoIDE\\arduino-cli.yaml  
        （username处替换为您的Windows用户名）  
        将以下内容添加到arduino-cli.yaml文件中（如果文件中已存在相同内容，则替换现有内容）：
        
        ```bash
        network:
          connection_timeout: 600s
        ```
        
    -   此处会将超时值设置为 600 秒。您可以根据需要调整时长。
        
    -   保存该文件，重新启动Arduino IDE。
        
    -   再次安装unihiker BSP
