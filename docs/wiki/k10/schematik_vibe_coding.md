---
title: "Schematik AI编程"
source: "https://www.unihiker.com.cn/wiki/k10/schematik_vibe_coding"
sourceTitle: "Schematik AI编程教程"
updated: "2026-11-20"
---

# Schematik AI编程

## 简介

Schematik 为云端在线 AI 编程平台，其后端编译 API 对 Arduino 以及 Platform‑IO 实现全兼容，可直接复用现有庞大的硬件库、板卡支持包。用户不必手动编写完整代码，以自然语言输入项目功能描述、行为逻辑、硬件交互需求，AI 引擎自动解析意图并生成可编译运行的嵌入式源码。平台集成一键固件上传能力，支持快速原型开发、代码修改迭代以及线上 Debug 调试工作流，帮助开发者跳过环境搭建、基础代码编写环节，聚焦项目本身的功能实现。

![Construction PPE](/images/k10/59c414a35cbb2682.png)

## 访问Schematick

Schematick网址：[https://www.schematik.io/](https://www.schematik.io/ "https://www.schematik.io/")

## 开始编程

-   点击右上角的Open App或者Try Now。注册账号

![Construction PPE](/images/k10/f46e47559dcb65d9.png)

-   完成后可进入Schematik工作区。
    
    -   可在左侧看到历史项目
    -   右侧对话框中可输入功能描述
    
    ![Construction PPE](/images/k10/810adc5f9874d698.png)
    

-   与Schematik对话后出现Schematik主界面
    
-   左侧为自然语言交互区，可以进一步以自然语言向Schematik提出更多要求
    
-   右侧为功能区，点击对应功能后会在界面中心显示相应信息：
    
    -   Main firmware为主要固件源码，可在界面中心查看AI生成的源代码
    -   diagram为连线示意图，如程序调用了外部传感器或者需要外部连线，此处会生成连线示意图
    -   pins为引脚图，显示主板本身引脚图
    -   components为元件列表，显示该项目用到的所有元器件的清单
    -   assembly为连接指南
-   下方deploy为部署按钮
    

![Construction PPE](/images/k10/d8de327d3878a446.png)

-   确认源代码无误后，点击最下方的deploy按钮将代码部署到行空板K10上

![Construction PPE](/images/k10/dd805a2ac2d6d9af.png)

-   等待上传完成，程序即可成功运行

![Construction PPE](/images/k10/6836143533159869.png)

## 更多

Schematik 的能力远不止基础代码生成。依托完整兼容 Arduino 的底层编译能力，你可以参考各类 Arduino 开源案例，快速实现各式各样的创意项目。  
全部 Arduino 适配 API，都支持通过自然语言直接调用，无需逐行翻阅手册、记忆复杂语法。你只需要用大白话描述功能逻辑，AI 就能完成代码编写。  
借助平台的多轮 AI 对话迭代能力，你甚至可以把行空板 K10 改造为复古游戏机，轻松实现俄罗斯方块、魂斗罗这类经典游戏作品。从传感器采集、外设驱动，到交互界面、趣味游戏开发，无论是简单的硬件原型，还是充满创意的趣味项目，都可以在 Schematik 内完成构思、生成、调试、上传全流程，大幅降低硬件创意落地门槛。

![Construction PPE](/images/k10/c94a20bb8f886633.png)
