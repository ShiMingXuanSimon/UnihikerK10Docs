---
title: "1.4 TF存储卡说明"
source: "https://www.unihiker.com.cn/wiki/k10/TFcard"
sourceTitle: "行空板K10官方文档-TF存储卡说明"
updated: "2026-11-20"
---

# 1.4 TF存储卡说明

推荐使用DF商城在售的正品闪迪卡:[16GB Class 10](https://www.dfrobot.com.cn/goods-1037.html)或[32GB Class 10](https://www.dfrobot.com.cn/goods-1708.html)

使用未知品牌的内存卡，易出现读写卡失败、程序崩溃等问题

## TF卡格式化

若使用32GB以上的内存卡需将内存卡格式化为FAT32格式

-   按下"Win+R"按键，然后输入“diskpart”进入命令符界面
-   输入“list disk”显示存储列表
-   输入“select disk X”(X为SD卡的磁盘编号)选中磁盘
-   输入“clean”清除磁盘分区信息
-   输入“convert mbr”将磁盘转换为MBR格式
-   输入“create partition primary”创建分区
-   输入“select partition 1”选择创建的分区
-   输入“format fs=fat32 quick”将磁盘快速格式化为FAT32

![](/images/k10/0ae904b039f9fbfe.png)

## 行空板K10作为读卡器

行空板K10可通过上传某个特殊固件，将其变为读卡器使用。

### 软件准备

-   [行空板K10 读卡器固件](https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/ec4a46060c4dbb9ae3e96859c3b24667.zip "usb_msv_SDspi.zip")
-   [Flash download tool](https://www.espressif.com.cn/zh-hans/support/download/other-tools)

### 固件烧录

-   下载Flash download tool解压后运行exe文件，选择ESP32-S3。  
    ![](/images/k10/a6096825f381398b.png)
    
-   选择对应的文件，填入相应地址，并勾选最前面的对号。  
    ![](/images/k10/3313c29078ac3975.png)
    
-   按住行空板K10背面的BOOT按钮，连接板子与电脑，在软件中选择对应的端口。
    
-   先点击“ERASE”清除flsh，待成功后再点击"START"进行烧录。
    
-   烧录完成后摁下行空板K10板子的RST复位键，插入TF卡后，即可在电脑中用访问U盘文件相同的方式访问TF卡了。
    

### 恢复初始设置

**注意：烧录读卡器固件后，要想再使用Mind+中的图形化模式，需要在Mind+ V1中恢复初始设置**  
![](/images/k10/4ca60f7569b5618c.png)  
**或在Mind+ V2中连接K10后点击擦除**  
![](/images/k10/794762e89757e006.png)

**恢复时先按住boot，再接数据线，待识别出端口后即可松开BOOT键，此时再点击恢复初始设置。完成后摁下板子的RST复位即可完成恢复**  
![](/images/k10/bec4654504bc0666.png)
