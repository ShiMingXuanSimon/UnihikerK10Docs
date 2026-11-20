---
title: "educore人教库"
source: "https://www.unihiker.com.cn/wiki/k10/micropython_educore"
sourceTitle: "行空板K10官方文档-educore库"
updated: "2026-11-20"
---

# educore人教库

## educore库使用说明

**为促进义务教育信息科技课程开设，通过程序验证发展学生计算思维、提升数字化学习与创新能力。义务教育信息科技教学指南编写组制定了educore库标准。educore库目的在于加强不同型号主控板之间的兼容性，简化教育资源的开发及使用过程，并提高学习效率。**

**行空板K10-educode库，可控制K10的板载器件并兼容部分外接传感器，此库当前为测试版，可能存在bug，推荐有一定技术能力的老师测试和使用。**

## 固件烧录

**注意：烧录micropython固件后，要想再使用Mind+中的图形化模式，需要在Mind+ V1中恢复初始设置**  
![](/images/k10/4ca60f7569b5618c.png)  
**或在Mind+ V2中连接K10后点击擦除**  
![](/images/k10/794762e89757e006.png)

**恢复时先按住boot，再接数据线，待识别出端口后即可松开BOOT键，此时再点击恢复初始设置。完成后摁下板子的RST复位即可完成恢复**  
![](/images/k10/bec4654504bc0666.png)

-   下载库文件：[点击下载K10-micropython-educore-V0.1-241021.zip](https://img.dfrobot.com.cn/wikicn/5cabf4771804207b131ae8cb/f53bc4a687542934e81b700ae95305a3.zip)
    
-   下载ESP32固件烧录软件：[点击下载](https://www.espressif.com.cn/zh-hans/support/download/other-tools)
    
-   解压后运行exe文件，选择ESP32-S3。  
    ![](/images/k10/a6096825f381398b.png)
    
-   选择对应的文件，填入相应地址，并勾选最前面的对号。  
    ![](/images/k10/bb1bcd4edac99615.png)
    
-   按住行空板K10背面的BOOT按钮，连接板子与电脑，在软件中选择对应的端口。
    
-   先点击“ERASE”清除flsh，待成功后再点击"START"进行烧录。
    
-   烧录完成后摁下行空板K10板子的RST复位键。
    

## 软件准备

-   下载并安装[Thonny](https://thonny.org/)
    
-   安装完成后打开软件，软件右下角选择ESP32  
    ![](/images/k10/43c6644191dfb0bc.png)
    
-   点击左上角新建文件，输入代码  
    ![](/images/k10/fca17062f5ab03f9.png)
    
-   CTRL+S保存到micropython设备。选择保存到此电脑也可以，此时程序未保存到板子中，重启后程序丢失。  
    ![](/images/k10/3950babf2956b921.png)
    
-   保存文件命名为main.py。  
    ![](/images/k10/e98f5ed2840f576b.png)
    
-   点击运行。  
    ![](/images/k10/24e9f293eaf027ce.png)
    

## 引脚操作

### 数字输入（P0 P1）

```python
from educore import pin
import time
p0=pin(0)  #实例化引脚
p1=pin(1)  #实例化引脚
while True:
    d0=p0.read_digital()  #读取引脚电平值，0 为低电平，1 为高电平
    d1=p1.read_digital()
    print(d0)
    print(d1)
    print('-')
    time.sleep(0.1)
	
```

### 数字输出（P0 P1）

```cpp
from educore import pin
import time
p0=pin(0)
p1=pin(1)
while True:
    p0.write_digital(1)
    p1.write_digital(1)
    time.sleep(1)
    p0.write_digital(0)
    p1.write_digital(0)
    time.sleep(1)
```

### 模拟输入（P0 P1）

```python
from educore import pin
import time
p0=pin(0)
p1=pin(1)
while True:
    v0=p0.read_analog()
    v1=p1.read_analog()
    print(v0)
    print(v1)
    print('-')
    time.sleep(1)
```

### PWM输出（P0 P1）

```python
from educore import pin
import time

p0 = pin(0)
p1 = pin(1)

while True:
    for value in range(0, 1024, 10):  
        p0.write_analog(value=value)
        p1.write_analog(value=value)
        time.sleep(0.03) 
        print(value)
    for value in range(1023, -1, -10): 
        p0.write_analog(value=value)
        p1.write_analog(value=value)
        time.sleep(0.03)
        print(value)
```

### 引脚中断（P0 P1）

```python
from educore import pin
p0=pin(0)
p1=pin(1)
def p0_event_rising():
    global p0
    print("p0 rising")
    pass
def p1_event_falling():
    global p1
    print("p1 falling")
    pass
p0.event_rising= p0_event_rising # 引脚事件包含 event_rising(上升沿)，event_falling(下降沿)
p1.event_falling= p1_event_falling
```

### 显示屏控制

```python
from educore import oled
import time
while True:
    oled.print("Hello,\nworld!",x=0,y=0) #xy可以不填，默认为0，要支持\n换行
    oled.print("Hello,world!",x=0,y=50) #xy可以不填，默认为0，要支持\n换行
    time.sleep(1)
    oled.clear()
    time.sleep(1)
```

### 蜂鸣器控制（外接）

```python
from educore import speaker
import time
s1=speaker(0) #蜂鸣器初始化，接到P0  
s1.tone(freq=2000,dur=1000) #freq:播放频率dual:持续时间（毫秒）
s1.stop() # 停止播放
```

### 舵机控制

```python
from educore import servo
import time
s1=servo(1) # 将舵机连接到P1引脚
while True:
    s1.angle(value=170) #设置舵机转动到 180°位置,角度范围为:0~180°
    time.sleep(1)
    s1.angle(value=10)
    time.sleep(1)
```

### RGB灯带控制

```python
from educore import rgb
import time
pxs=rgb(1) #将灯带连接到 1 号引脚，不填使用板载RGB 
while True:
    pxs.write(index=[0,1,2],r=50,g=50,b=50) #让 0、1、2 号灯珠根据 r、g、b 值显示色彩
    time.sleep(1)
    pxs.write(index=[0],r=255,g=0,b=0)
    pxs.write(index=[1],r=0,g=255,b=0)
    pxs.write(index=[2],r=0,g=0,b=255)
    time.sleep(1)
    pxs.clear() #熄灭所有灯珠
    time.sleep(1)
```

### 按键

```python
from educore import button
import time
bt_a=button(button.a)#初始化板载按键传感器 A
bt_b=button(button.b)#初始化板载按键传感器 B

def on_button_pressed_a():
    print("Button A pressed!")
    
def on_button_pressed_b():
    print("Button B pressed!")

bt_a.event_pressed =on_button_pressed_a #绑定按键事件，当按键 A 被按下时回调 myfunction 函数。
bt_b.event_pressed =on_button_pressed_b #绑定按键事件，当按键 B 被按下时回调 myfunction 函数。

while True:
    print('a=',bt_a.status()) #返回按键 A 的状态，0 表示释放，1 表示按下
    print('b=',bt_b.status()) #返回按键 B 的状态，0 表示释放，1 表示按下
    time.sleep(1)
    pass
```

### 环境光、加速度、温湿度

```python
from educore import dht,accelerometer,light,oled
import time
dhtsensor=dht()# 读取板载温湿度的值
acc=accelerometer()#初始化板载加速度传感器
lgt=light()#初始化板载环境光传感器
while True:
    #print(acc.X(),acc.Y(),acc.Z(),acc.shake(),acc.gesture())#获得 x 轴方向加速度值，和板子姿态
    temp,hum=dhtsensor.read()
    #oled.clear()
    oled.print("temp:",x=0,y=0)
    oled.print(str(temp))
    oled.print(" hum:")
    oled.print(str(hum))
    oled.print("\n")
    oled.print("\n")
    oled.print("light:")
    oled.print(str(lgt.read()))
    oled.print("\n")
    oled.print("\nX:")
    oled.print(str(acc.X()))
    oled.print("\nY:")
    oled.print(str(acc.Y()))
    oled.print("\nZ:")
    oled.print(str(acc.Z()))
    #time.sleep(0.2)
```

### DS18B20

```python
from educore import ds18b20
import time
ds=ds18b20(0)
while True:
    temp=ds.read()
    print(temp)
    time.sleep(1)
```

### 超声波

```python
from educore import ultrasonic
import time 
sonic=ultrasonic(trig=0,echo=0) #连接 trig 和 echo 引脚
while True:
    print(sonic.distance())
    time.sleep(0.1)
```

### RFID（DFR1181）

```python
from educore import rfid,oled
import time
scan_rfid=rfid()
while True:
    rf=scan_rfid.scanning(wait=True) #尝试读取并返回rfid卡片信息,当wait=True时，会一直等待刷卡；wait参数也可接受整数型数据，当传入整数型数据时表示等待wait秒后结束阻塞。无论是否成功刷卡，该函数都应该返回一个rf对象
    print(f"serial_number:{rf.serial_number()}")#获取卡片序列号，若读取不成功则该方法返回None
    print(rf.write_block(1,100))#向数据块1写入100
    print(rf.read_block(1))#读数据块1的数据
```

### 重量（KIT0176）

```python
from educore import force
import time
fs=force()
fs.zero() #清零
while True:
    print(fs.read(mass=False)) #返回质量值，单位为克。#默认返回质量，当参数mass=False时，返回力的单位N（牛顿）
    time.sleep(0.5)
```

### 蓝牙模拟HID

```python

from educore import oled, hid, keycode,button
import time
bta=button(button.a)
btb=button(button.b)
ble_hid = hid(name='mpy_hid') #初始化蓝牙 HID 设备并命名为 mpy_hid
oled.print('ready')

while True:
    if ble_hid.isconnected():#判断是否已经连接，True 为连接，False 为未连接 非阻塞
        oled.print('connect',x=0,y=0)
    else:
        oled.print('disconnect',x=0,y=0)
    if bta.status():
        ble_hid.keyboard_send(keycode.SPACE) #模拟键盘按下空格
    if btb.status():
        ble_hid.keyboard_send([keycode.CTRL,keycode.a]) #按下组合键CTRL+a
    time.sleep(0.1)   
   
```

### WiFi

```python
from educore import wifi
wifi.connect(ssid="dfrobotOffice",psd="dfrobot2011",timeout=50000) #尝试连接wifi网络。可以不写参数名称。timeout为可选参数，表示连接超时时长，默认超时时间为10000毫秒
wifi.status() #返回网络连接状态，True表示已连接，False表示未连接
wifi.info() #返回包含当前IP地址、子网掩码、网关等信息的字符串
```

### MQTT

```python
# EASYIOT 
from educore import wifi
from educore import mqttclient
import time

wifi.connect(ssid="Redm",psd="aijine12345",timeout=50000) #尝试连接wifi网络。可以不写参数名称。timeout为可选参数，表示连接超时时长，默认超时时间为10000毫秒
wifi.status() #返回网络连接状态，True表示已连接，False表示未连接
wifi.info() #返回包含当前IP地址、子网掩码、网关等信息的字符串

def received_1ffdf0jpLa():
    msg=mqttclient.message(topic='AwErylzNg')
    print(msg)

mqttclient.connect(server= "iot.dfrobot.com.cn",
                   port=1883, 
                   client_id="",
                   user= "VB3Xs_kHg" ,
                   psd= "VB3Xy_zNgz") #阻塞运行，默认超时时间为3秒
mqttclient.connected() #返回连接状态
mqttclient.publish(topic='AwErylzNg',content= 'hello')#向对应主题发送消息,content为发送内容
#msg=mqttclient.message(topic='1ffdf0jpLa') #获取对应主题接收的消息，若该主题无消息，则返回None

mqttclient.received (topic='AwErylzNg', #对应主题收到消息时，回调函数
                     callback=received_1ffdf0jpLa) #通过callback指定回调函数

while True:
    time.sleep(0.1)
    pass
```
```python
# SIOT V1
from educore import wifi
from educore import mqttclient
import time

wifi.connect(ssid="DFRobot-guest",psd="dfrobot@2017",timeout=50000) #尝试连接wifi网络。可以不写参数名称。timeout为可选参数，表示连接超时时长，默认超时时间为10000毫秒
wifi.status() #返回网络连接状态，True表示已连接，False表示未连接
wifi.info() #返回包含当前IP地址、子网掩码、网关等信息的字符串

def received_1ffdf0jpLa():
    msg=mqttclient.message(topic='siot/Speed')
    print(msg)

mqttclient.connect(server= "192.168.7.141",
                   port=1883, 
                   client_id="",
                   user= "siot" ,
                   psd= "dfrobot") #阻塞运行，默认超时时间为3秒
mqttclient.connected() #返回连接状态
mqttclient.publish(topic='siot/Speed',content= 'hello')#向对应主题发送消息,content为发送内容
#msg=mqttclient.message(topic='1ffdf0jpLa') #获取对应主题接收的消息，若该主题无消息，则返回None

mqttclient.received (topic='siot/Speed', #对应主题收到消息时，回调函数
                     callback=received_1ffdf0jpLa) #通过callback指定回调函数

while True:
    time.sleep(0.1)
    pass
```
```python
# SIOT V2   mqttclient.publishs上报消息位置要加"->"
from educore import wifi
from educore import mqttclient
import time

wifi.connect(ssid="Redm",psd="aijine12345",timeout=50000) #尝试连接wifi网络。可以不写参数名称。timeout为可选参数，表示连接超时时长，默认超时时间为10000毫秒
wifi.status() #返回网络连接状态，True表示已连接，False表示未连接
wifi.info() #返回包含当前IP地址、子网掩码、网关等信息的字符串

def received_1ffdf0jpLa():
    msg=mqttclient.message(topic='siot/Speed')
    print(msg)

mqttclient.connect(server= "192.168.45.146",
                   port=1883, 
                   client_id="",
                   user= "siot" ,
                   psd= "dfrobot") #阻塞运行，默认超时时间为3秒
mqttclient.connected() #返回连接状态
mqttclient.publish(topic='siot/Speed',content= '->hello')#向对应主题发送消息,content为发送内容
#msg=mqttclient.message(topic='1ffdf0jpLa') #获取对应主题接收的消息，若该主题无消息，则返回None

mqttclient.received (topic='siot/Speed', #对应主题收到消息时，回调函数
                     callback=received_1ffdf0jpLa) #通过callback指定回调函数

while True:
    time.sleep(0.1)
    pass
```

### 数据格式转换

从文本文件中生成字典

```python
from educore import get_dict_from_file
dic=get_dict_from_file('tushu.txt') #读取文本文件内容并生成字典
print(dic)
```

根据字符串生成字典

```python
from educore import get_dict_from_str
s="001 张三;002 李四"
dic=get_dict_from_str(s)
print(dic)
```

### 获取芯片ID

```python
from educore import uuid
_id=uuid() #获取设备唯一标识
print(_id)
```
