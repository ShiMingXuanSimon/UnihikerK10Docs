---
title: "2.7 引脚操作积木"
source: "https://www.unihiker.com.cn/wiki/k10/mindplus_pin"
sourceTitle: "行空板K10官方文档-引脚操作"
updated: "2026-11-20"
---

# 2.7 引脚操作积木

## 引脚操作

积木

![](/images/k10/b9f060bb8e5106fe.png)

说明

设置引脚的模式，选择模式有输出（OUTPUT）、输入（INPUT）、上拉输入（INPUT\_PULLUP）。上拉输入模式一般用于某输入引脚悬空时，稳定引脚信号为高电平。

要在K10上外接传感器时，就需要通过该指令设置对应引脚的模式。

积木

![](/images/k10/892f0e1d5c76e0c0.png)

说明

读取数字引脚的值，读取结果为1和0。

积木

![](/images/k10/030c6021db4fe4b6.png)

说明

读取模拟引脚的值，读取数据范围为0-4095。

积木

![](/images/k10/a30ae6d7dd84753c.png)

说明

设置指定模拟引脚输出PWM值，值的范围在0-1023。

-   将按钮模块连接在K10的P0引脚，然后读取P0引脚的值，并将数字值显示在K10屏幕上。

![](/images/k10/1950d5c284714098.png)

![](/images/k10/f42ff3bbc7da4dc6.gif)

-   将旋钮模块连接在K10的P1引脚，然后读取P1引脚的模拟值，并将模拟值显示在K10屏幕上。

![](/images/k10/c64b735ef1fc99cd.png)

![](/images/k10/c64b735ef1fc99cd.png)

-   将风扇模块连接在K10的P1引脚，然后通过控制P1引脚输出高电平，让风扇模块工作。

![](/images/k10/3be7eb623e7ecea0.png)

![](/images/k10/8dd483391a1ecc36.gif)

-   将风扇模块连接在K10的P0引脚，第一次按下A按钮，风扇低速转动；第二次按下A按钮，风扇高速转动；第三次按下按钮，风扇停止转动。

![](/images/k10/617544a9cb163074.png)

![](/images/k10/32a4180cf74702af.gif)
