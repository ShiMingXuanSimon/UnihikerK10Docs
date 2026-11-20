---
title: "Platform IO编程准备"
source: "https://www.unihiker.com.cn/wiki/k10/platform_io_prepare"
sourceTitle: "PlatformIO编程准备"
updated: "2026-11-20"
---

# Platform IO编程准备

# **Platform IO编程准备**

PlatformIO 是一款面向嵌入式系统工程师及为嵌入式产品编写应用程序的软件开发者的专业工具，支持跨平台、跨架构及多种框架。  
本教程将引导您完成在计算机上下载、安装和配置 PlatformIO 的完整流程。  
  
![](/images/k10/5b02aee6c0f1f91d.png)

## **下载代码编辑器/IDE**

Platform IO 通常通过代码编辑器/IDE（如 VSCode 或 CLion）进行安装。本教程将介绍如何在这两个软件中配置 Platform IO。  
若您使用其他 IDE或代码编辑器，请查看Platform IO官方的 [IDE支持文档](https://docs.platformio.org/en/latest/integration/ide/index.html) 来了解如何在您的IDE中进行配置

**下载**

**VSCode**

[Download](https://code.visualstudio.com/Download)

**CLion**

[Download](https://www.jetbrains.com/clion/)

## **安装Platform IO 扩展/插件**

### 在VSCode中安装Platform IO

[Visual Studio Code](https://code.visualstudio.com/) 是一款轻量级但功能强大的源代码编辑器，可在您的桌面运行，支持 Windows、macOS 和 Linux 系统。它内置对 JavaScript、TypeScript 和 Node.js 的支持，并拥有丰富的扩展生态系统，可支持其他语言（如 C++、C#、Python、PHP、Go）和运行时环境（如 .NET 和 Unity）。

![VSCode](/images/k10/57bcc82337250a93.png)

-   如果您将使用[PlatformIO IDE for VSCode](https://docs.platformio.org/en/latest/integration/ide/vscode.html#ide-vscode)，您无需单独安装[Platform IO Core(CLI)](https://docs.platformio.org/en/latest/core/index.html#piocore)，Platform IO Core(CLI)已经默认集成在PlatformIO IDE中，您可直接通过终端使用。
-   Git: 若您计划使用 Git 来安装上游开发平台、克隆外部项目或从platform的仓库安装库依赖项，请确保系统终端中可正常执行 `git --version` 命令。如您尚未安装git，请安装 [Git 客户端](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)。
-   Linux用户: 为确保PlatformIO的顺畅运行，请务必在系统中安装[python3-venv](https://github.com/platformio/platformio-core-installer/issues/85)软件包。

1.  打开VSCode 扩展安装界面
    
2.  搜索 `platformio ide` [扩展](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide)
    
3.  安装 PlatformIO IDE.  
    ![](/images/k10/6cf31bf0b8bd2365.png)
    
4.  **安装行空板K10 SDK**
    
    -   点击 [PlatformIO Toolbar](https://docs.platformio.org/en/latest/integration/ide/vscode.html#ide-vscode-toolbar)中的“PlatformIO Home” 按钮。  
        ![](/images/k10/1c2130b229809f78.png)
        
    -   点击 “New Project”, 并且任意选择一个DFRobot开发板来创建项目  
        ![](/images/k10/dccd484121ca92b0.png)
        

注：第一次创建项目会从Platform IO服务器拉取文件。如果耗时超过10分钟，一般由于网络问题导致。可能需要自行将网络代理策略设置为TUN模式/全局模式，此教程不便阐述。

-   项目成功创建后，打开 `platformio.ini` 文件，将下面的配置信息复制粘贴到.ini文件中. 然后使用`ctrl+s` 保存配置文件，然后等待SDK下载完成。

```bash
[env:unihiker]
platform = https://github.com/DFRobot/platform-unihiker.git
board = unihiker_k10
framework = arduino
build_flags = 
    -DARDUINO_USB_CDC_ON_BOOT=1
    -DARDUINO_USB_MODE=1
    -DModel=None
```

5.  **运行测试代码**  
    复制并粘贴以下示例代码至`src` 文件夹中的 `main.cpp` 文件，然后`ctrl+s` 保存。

```cpp
#include "unihiker_k10.h"

UNIHIKER_K10 k10;
uint8_t screen_dir = 2;

void setup() {
    k10.begin();
    k10.initScreen(screen_dir);
    k10.creatCanvas();
    k10.setScreenBackground(0xFFFFFF);
}

void loop() {
    // Draw a green circle on the screen
    k10.canvas->canvasCircle(120, 160, 10, 0x00FF00, 0x00FF00, true);
    k10.canvas->updateCanvas();
    delay(1000);
    
    // Clear the circle
    k10.canvas->canvasCircle(120, 160, 10, 0xFFFFFF, 0xFFFFFF, true);
    k10.canvas->updateCanvas();
    delay(1000);
}
```

-   使用 `ctrl+alt+b` 快捷键编译该工程
-   通过USB连接你的行空板K10和电脑，使用 `ctrl+alt+u` 快捷键即可上传代码到K10

### 在CLion中安装Platform IO

[CLion](https://www.jetbrains.com/clion/) 是一款适用于 GNU Linux、MacOS 和 Windows 的跨平台 C/C++ 集成开发环境。CLion 具备智能编辑器、代码生成、代码质量保证、自动化重构、实时代码分析、项目管理器、集成版本控制系统和调试器等功能。  
更多关于CLion的介绍，可参考 [JetBrains官网](https://www.jetbrains.com.cn/clion/)

![CLion](/images/k10/3dccfeb9db73efe6.png)

注：步骤1是个基于 [CLion #CPP-19412: Automatically install PlatformIO Core](https://youtrack.jetbrains.com/issue/CPP-19412)的临时方案。如果您计划通过CLion插件的方式安装Platform IO，可跳过步骤1。

1.  查看[此文档](https://docs.platformio.org/en/latest/core/installation/index.html#core-installation) 来安装PlatformIO Core (CLI)
    
2.  **[下载](https://www.jetbrains.com.cn/clion/download/?section=windows)** 并安装CLion IDE
    
3.  **安装** 官方 [PlatformIO for CLion](https://plugins.jetbrains.com/plugin/13922-platformio-for-clion) 插件。  
    打开 "File -> Setting -> Plugins" 窗口后前往 "Marketplace" 分页。 搜索 `PlatformIO` 然后点击 "Install" 进行安装。  
    ![](/images/k10/925ecaea503c3f4b.png)
    
4.  **重启** CLion IDE
    

-   同时也建议安装 [Ini](https://plugins.jetbrains.com/plugin/6981-ini) 插件，该插件为提供语法高亮，格式化，代码折叠，以及[“platformio.ini” (项目配置文件)](https://docs.platformio.org/en/latest/projectconf/index.html#projectconf)的结构查看功能。

5.  **设置** 工程
    -   打开“新建项目”下拉框，选择开发板和框架，创建一个新的PlatformIO项目。项目名称请仅使用英文（a-z），以避免后续项目编译问题。根据文件系统不同，允许使用数字及部分符号：  
        ![](/images/k10/5dc1b03b3e5ccc36.png)

注：第一次创建项目会从Platform IO服务器拉取文件。如果耗时超过10分钟，一般由于网络问题导致。可能需要自行将网络代理策略设置为TUN模式/全局模式，此教程不便阐述。

-   项目成功创建后，打开 `platformio.ini` 文件，将下面的配置信息复制粘贴到.ini文件中. 然后使用`ctrl+s` 保存配置文件，然后等待SDK下载完成。

```bash
[env:unihiker]
platform = https://github.com/DFRobot/platform-unihiker.git
board = unihiker_k10
framework = arduino
build_flags = 
    -DARDUINO_USB_CDC_ON_BOOT=1
    -DARDUINO_USB_MODE=1
    -DModel=None
```

6.  **运行测试代码**  
    复制并粘贴以下示例代码至`src` 文件夹中的 `main.cpp` 文件，然后`ctrl+s` 保存。

```cpp
#include "unihiker_k10.h"

UNIHIKER_K10 k10;
uint8_t screen_dir = 2;

void setup() {
    k10.begin();
    k10.initScreen(screen_dir);
    k10.creatCanvas();
    k10.setScreenBackground(0xFFFFFF);
}

void loop() {
    // Draw a green circle on the screen
    k10.canvas->canvasCircle(120, 160, 10, 0x00FF00, 0x00FF00, true);
    k10.canvas->updateCanvas();
    delay(1000);
    
    // Clear the circle
    k10.canvas->canvasCircle(120, 160, 10, 0xFFFFFF, 0xFFFFFF, true);
    k10.canvas->updateCanvas();
    delay(1000);
}
```

-   通过USB连接您的K10和电脑，使用`ctrl+F5` 快捷键进行编译和上传代码
