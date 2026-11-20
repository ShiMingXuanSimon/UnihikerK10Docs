---
title: "Arduino/PIO示例代码"
source: "https://www.unihiker.com.cn/wiki/k10/Arduino_PIO_Example"
sourceTitle: "Arduino PIO 示例代码"
updated: "2026-11-20"
---

# Arduino/PIO示例代码

## **显示-设置背景颜色**

在K10显示屏上设置不同背景颜色  

```c
#include "unihiker_k10.h"

UNIHIKER_K10 k10;
uint8_t screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
}
void loop() {
	k10.setScreenBackground(0xFFFFFF);
	delay(2000);
	k10.setScreenBackground(0xFF0000);
	delay(2000);
	k10.setScreenBackground(0x00FF00);
	delay(2000);
	k10.setScreenBackground(0x0000FF);
	delay(2000);
	k10.setScreenBackground(0x000000);
	delay(2000);
}
```
![setBackColor](/images/k10/c5682671d528d3c4.gif)

## **显示-电子相册**

将TF卡格式化为FAT32格式，并安装到K10设备上。按下K10上的A键拍摄照片，按下B键显示照片。  

```c
#include "unihiker_k10.h"

void onButtonAPressed();
void onButtonBPressed();

UNIHIKER_K10 k10;
uint8_t      screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.initBgCamerImage();
	k10.setBgCamerImage(false);
	k10.creatCanvas();
	k10.buttonA->setPressedCallback(onButtonAPressed);
	k10.initSDFile();
	k10.buttonB->setPressedCallback(onButtonBPressed);
	k10.setBgCamerImage(true);
}
void loop() {
}

void onButtonAPressed() {
	k10.photoSaveToTFCard("S:/photo.bmp");
}
void onButtonBPressed() {
	k10.canvas->canvasDrawImage(0, 0, "S:/photo.bmp");
}
```
![Album](/images/k10/89b0a3470a1fc1e9.gif)

## **显示-显示文字**

```c
#include "unihiker_k10.h"

UNIHIKER_K10 k10;
uint8_t screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.setScreenBackground(0xFFFFFF);
	k10.canvas->canvasText("UNIHIKER", 1, 0x0000FF);
	k10.canvas->updateCanvas();
	delay(1000);
	k10.canvas->canvasText("UNIHIKER", 2, 0xFF0000);
	k10.canvas->updateCanvas();
	delay(1000);
	k10.canvas->canvasText("UNIHIKER", 3, 0x00FF00);
	k10.canvas->updateCanvas();
	delay(1000);
	k10.canvas->canvasText("UNIHIKER", 4, 0x000000);
	k10.canvas->updateCanvas();
	delay(1000);
}
void loop() {
}
```
![text](/images/k10/4f068032545e8ca4.gif)

## **显示-绘制圆点**

```c
#include "unihiker_k10.h"

uint32_t rgbToColor(uint8_t r, uint8_t g, uint8_t b);

UNIHIKER_K10 k10;
uint8_t screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.setScreenBackground(0x000000);
}
void loop() {
	for (int index = 0; index < 50; index++) {
		k10.canvas->canvasPoint((random(0, 240+1)), (random(0, 320+1)), rgbToColor(round((random(128, 255+1))), round((random(128, 255+1))), round((random(128, 255+1)))));
		k10.canvas->updateCanvas();
	}
	k10.canvas->canvasClear();
}

uint32_t rgbToColor(uint8_t r, uint8_t g, uint8_t b)
{
  return (uint32_t)((((uint32_t)r<<16) | ((uint32_t)g<<8)) | (uint32_t)b);
}
```
![Drawcircle](/images/k10/1e23d94fa8b668c5.gif)

## **显示-绘制线段**

在K10上绘制漏斗  

```c
#include "unihiker_k10.h"

volatile float startX, endX;

UNIHIKER_K10 k10;
uint8_t screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.canvas->canvasSetLineWidth(1);
	startX = 0;
	endX = 240;
}
void loop() {
	while (!(startX==240)) {
		k10.canvas->canvasLine(startX, 0, endX, 320, 0xFF0000);
		k10.canvas->updateCanvas();
		startX += 3;
		endX -= 3;
	}
}
```
![drawline1](/images/k10/1646ab88b9a4707a.gif)

在K10上绘制流星雨:  

```c
#include "unihiker_k10.h"

volatile float startX, startY, length, endX, endY;

uint32_t rgbToColor(uint8_t r, uint8_t g, uint8_t b);

UNIHIKER_K10 k10;
uint8_t      screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.setScreenBackground(0x000000);
	k10.canvas->canvasSetLineWidth(1);
}
void loop() {
	k10.canvas->canvasClear();
	for (int index = 0; index < 15; index++) {
		startX = (random(0, 240+1));
		startY = (random(0, 180+1));
		length = (random(0, 40+1));
		endX = (startX + length);
		endY = (startY + length);
		k10.canvas->canvasLine(startX, startY, endX, endY, rgbToColor(round((random(128, 255+1))), round((random(128, 255+1))), round((random(128, 255+1)))));
	}
	k10.canvas->updateCanvas();
	delay(500);
}

uint32_t rgbToColor(uint8_t r, uint8_t g, uint8_t b)
{
  return (uint32_t)((((uint32_t)r<<16) | ((uint32_t)g<<8)) | (uint32_t)b);
}
```
![drawline2](/images/k10/e8d6771c39379870.gif)

## **显示-绘制圆**

```c
#include "unihiker_k10.h"

UNIHIKER_K10 k10;
uint8_t screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.canvas->canvasCircle(120, 120, 40, 0xFFCC33, 0xFFCC33, true);
	k10.canvas->canvasCircle(160, 160, 40, 0xFFCC33, 0xFFCC33, true);
	k10.canvas->canvasCircle(120, 200, 40, 0xFFCC33, 0xFFCC33, true);
	k10.canvas->canvasCircle(80, 160, 40, 0xFFCC33, 0xFFCC33, true);
	k10.canvas->canvasCircle(120, 160, 40, 0xFFFF00, 0xFFFF00, true);
	k10.canvas->updateCanvas();
}
void loop() {
}
```
![drawcircle](/images/k10/249b0045f7f3b350.png)

## **显示-绘制方框**

```c
#include "unihiker_k10.h"

volatile float offset, x, y, color;

uint32_t rgbToColor(uint8_t r, uint8_t g, uint8_t b);

UNIHIKER_K10 k10;
uint8_t      screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.setScreenBackground(0x000000);
}
void loop() {
	for (int index = 0; index < 8; index++) {
		x = (80 - (offset / 2));
		y = (100 - (offset / 2));
		color = rgbToColor(round((random(50, 255+1))), round((random(50, 255+1))), round((random(50, 255+1))));
		k10.canvas->canvasRectangle(x,y, (80 + offset), (100 + offset), color, 0x0000FF, false);
		k10.canvas->updateCanvas();
		delay(10);
		offset = (offset + 20);
	}
	k10.canvas->canvasClear();
	offset = 0;
}

uint32_t rgbToColor(uint8_t r, uint8_t g, uint8_t b)
{
  return (uint32_t)((((uint32_t)r<<16) | ((uint32_t)g<<8)) | (uint32_t)b);
}
```
![drawrectangle](/images/k10/9feeb7be8e4dc56f.gif)

## **显示-QR码**

```c
#include "unihiker_k10.h"

UNIHIKER_K10 k10;
uint8_t screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.canvasDrawCode("https://www.unihiker.com");
	k10.canvas->updateCanvas();
}
void loop() {
}
```
![QRCode](/images/k10/e63b54a53b411aed.png)

## **板载传感器-按键**

普通检测方式：  

```c
#include "unihiker_k10.h"

UNIHIKER_K10 k10;
uint8_t screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
}
void loop() {
	if ((k10.buttonA->isPressed())) {
		k10.canvas->canvasRectangle(10, 100, 110, 100, 0xFF6666, 0x0000FF, true);
		k10.canvas->updateCanvas();
	}
	else if ((k10.buttonB->isPressed())) {
		k10.canvas->canvasCircle(180, 150, 50, 0xFF6666, 0x0000FF, true);
		k10.canvas->updateCanvas();
	}
	else if ((k10.buttonAB->isPressed())) {
		k10.canvas->canvasClear();
		k10.canvas->updateCanvas();
	}
}
```

中断检测方式：  

```c
#include "unihiker_k10.h"

void onButtonAPressed();
void onButtonBPressed();
void onButtonABPressed();

UNIHIKER_K10 k10;
uint8_t      screen_dir=2;

void setup() {
	k10.begin();
	k10.buttonA->setPressedCallback(onButtonAPressed);
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.buttonB->setPressedCallback(onButtonBPressed);
	k10.buttonAB->setPressedCallback(onButtonABPressed);
}
void loop() {

}

void onButtonAPressed() {
	k10.canvas->canvasRectangle(10, 100, 110, 100, 0xFF6666, 0x0000FF, true);
	k10.canvas->updateCanvas();
}
void onButtonBPressed() {
	k10.canvas->canvasCircle(180, 150, 50, 0xFF6666, 0x0000FF, true);
	k10.canvas->updateCanvas();
}
void onButtonABPressed() {
	k10.canvas->canvasClear();
	k10.canvas->updateCanvas();
}
```
![button](/images/k10/4a55cbb36c649d1c.gif)

## **板载传感器-加速度传感器**

屏幕显示倾斜方向  
运行此示例需要TF卡，且箭头图片需存储在TF卡中。

```c
#include "unihiker_k10.h"
UNIHIKER_K10 k10;
uint8_t      screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.initSDFile();
}
void loop() {
	if ((k10.isGesture(TiltForward))) {
		k10.canvas->canvasDrawImage(0, 0, "S:/forward.png");
		k10.canvas->updateCanvas();
	}
	else if ((k10.isGesture(TiltBack))) {
		k10.canvas->canvasDrawImage(0, 0, "S:/back.png");
		k10.canvas->updateCanvas();
	}
	else if ((k10.isGesture(TiltLeft))) {
		k10.canvas->canvasDrawImage(0, 0, "S:/left.png");
		k10.canvas->updateCanvas();
	}
	else if ((k10.isGesture(TiltRight))) {
		k10.canvas->canvasDrawImage(0, 0, "S:/right.png");
		k10.canvas->updateCanvas();
	}
	k10.canvas->canvasRectangle(0, 0, 240, 320, 0xFFFFFF, 0xFFFFFF, true);
	k10.canvas->updateCanvas();
}
```
![drawcircle](/images/k10/d5ab1bece5987e3d.gif)

计步器：  

```c
#include "unihiker_k10.h"

volatile float step;

UNIHIKER_K10 k10;
uint8_t screen_dir=2;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	step = 0;
	k10.canvas->canvasText((String("Pedometer: ") + String(step)), 1, 0x0000FF);
	k10.canvas->updateCanvas();
}
void loop() {
	if (((k10.getStrength())>1050)) {
		step += 1;
		k10.canvas->canvasText((String("Pedometer: ") + String(step)), 1, 0x0000FF);
		k10.canvas->updateCanvas();
		delay(1000);
	}
}
```
![drawcircle](/images/k10/ae27b21c08833e9b.gif)

加速度小球：  

```c
#include "unihiker_k10.h"

volatile float accx, accy, moveX, moveY;

UNIHIKER_K10 k10;
uint8_t screen_dir=2;

void setup() {
  k10.begin();
  k10.initScreen(screen_dir);
  k10.creatCanvas();
  k10.setScreenBackground(0xFFFFFF);
}
void loop() {
  accx = (k10.getAccelerometerX());
  accy = (k10.getAccelerometerY());
  moveX = (120 + (accx / 3));
  moveY = (160 + (accy / 3));
  k10.canvas->canvasCircle(moveX, moveY, 8, 0x00FF00, 0x00FF00, true);
  k10.canvas->updateCanvas();
  k10.canvas->canvasCircle(moveX, moveY, 9, 0xFFFFFF, 0xFFFFFF, true);
}
```
![accball](/images/k10/2ff062f155d69408.gif)

## **板载传感器-RGB 灯控制**

```c
#include "unihiker_k10.h"

volatile float mind_n_brightness;

UNIHIKER_K10 k10;

void setup() {
	k10.begin();
	mind_n_brightness = 0;
	k10.rgb->brightness(round(mind_n_brightness));
	k10.rgb->write(-1, 0x0000FF);
}
void loop() {
	while (!(mind_n_brightness==9)) {
		k10.rgb->brightness(round(mind_n_brightness));
		k10.rgb->write(-1, 0x0000FF);
		delay(200);
		mind_n_brightness += 1;
	}
	while (!(mind_n_brightness==0)) {
		k10.rgb->brightness(round(mind_n_brightness));
		k10.rgb->write(-1, 0x0000FF);
		delay(200);
		mind_n_brightness -= 1;
	}
}
```
![RGB](/images/k10/bbd1f3419d4f7404.gif)

## **音频-播放预设音效**

按下按钮A播放背景音乐《生日快乐歌》；按下按钮B播放《一闪一闪亮晶晶》（1155661）。  

```c
#include "unihiker_k10.h"

void onButtonAPressed();
void onButtonBPressed();

UNIHIKER_K10 k10;
Music music;

void setup() {
	k10.begin();
	k10.buttonA->setPressedCallback(onButtonAPressed);
	k10.buttonB->setPressedCallback(onButtonBPressed);
}
void loop() {
}

void onButtonAPressed() {
	music.playMusic(DADADADUM);
}
void onButtonBPressed() {
	music.stopPlayTone();
	music.playTone(131,  8000);
	music.playTone(131,  8000);
	music.playTone(196,  8000);
	music.playTone(196,  8000);
	music.playTone(220,  8000);
	music.playTone(220,  8000);
	music.playTone(196,  8000);
}
```

## **音频-录音并播放**

将TF卡插入K10，按下按钮A可录制3秒音频并存储至TF卡；按下按钮B可播放录制的音频。

```c
#include "unihiker_k10.h"

UNIHIKER_K10 k10;
uint8_t screen_dir=2;
Music music;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	k10.initSDFile();
	k10.canvas->canvasText("Press A to record......", 5, 10, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
	k10.canvas->updateCanvas();
}
void loop() {
	if ((k10.buttonA->isPressed())) {
		k10.canvas->canvasText("Recording", 5, 10, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->updateCanvas();
		music.recordSaveToTFCard("S:/sound.wav", 3);
		k10.canvas->canvasText("Record complete", 5, 10, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->updateCanvas();
	}
	else if ((k10.buttonB->isPressed())) {
		k10.canvas->canvasText("Playing......", 5, 10, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->updateCanvas();
		music.playTFCardAudio("S:/sound.wav");
		delay(3000);
		k10.canvas->canvasText("Play complete", 0, 0, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->updateCanvas();
	}
}
```

## **AI-人脸检测**

开启摄像头，检测人脸，并在K10屏幕上显示检测到的人脸长度与宽度，以及中心点x坐标与中心点y坐标。  

```c
#include "unihiker_k10.h"
#include "AIRecognition.h"

UNIHIKER_K10  k10;
uint8_t screen_dir=2;
AIRecognition ai;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	ai.initAi();
	k10.initBgCamerImage();
	k10.setBgCamerImage(false);
	k10.creatCanvas();
	ai.switchAiMode(ai.NoMode);
	k10.setBgCamerImage(true);
	ai.switchAiMode(ai.Face);
}
void loop() {
	if (ai.isDetectContent(AIRecognition::Face)) {
		k10.canvas->canvasText((String("Face Length") + String(ai.getFaceData(AIRecognition::Length))), 0, 0, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->canvasText((String("Face Width ") + String(ai.getFaceData(AIRecognition::Length))), 0, 16, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->canvasText((String("Face Center X") + String(ai.getFaceData(AIRecognition::CenterX))), 0, 32, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->canvasText((String("Face Center Y") + String(ai.getFaceData(AIRecognition::CenterY))), 0, 32, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->updateCanvas();
	}
	delay(1000);
}
```
![AIFace](/images/k10/f2c6c6ad07bca201.gif)

## **AI-人脸识别**

按下按钮A学习人脸，绿色LED亮起；按下按钮B识别人脸，蓝色LED亮起，并在K10屏幕上显示识别人脸ID。  

```c
#include "unihiker_k10.h"
#include "AIRecognition.h"

String ID;

void onButtonAPressed();
void onButtonBPressed();

UNIHIKER_K10  k10;
uint8_t screen_dir=2;
AIRecognition ai;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	ai.initAi();
	k10.initBgCamerImage();
	k10.setBgCamerImage(false);
	k10.creatCanvas();
	ai.switchAiMode(ai.NoMode);
	k10.buttonA->setPressedCallback(onButtonAPressed);
	k10.buttonB->setPressedCallback(onButtonBPressed);
	k10.setBgCamerImage(true);
	ai.switchAiMode(ai.Face);
}
void loop() {
	if (ai.isRecognized()) {
		ID = ai.getRecognitionID();
		k10.canvas->canvasText((String("Face ID: ") + String(ID)), 0, 0, 0x0000FF, k10.canvas->eCNAndENFont24, 50, true);
		k10.canvas->canvasText(ID, 0, 40, 0x0000FF, k10.canvas->eCNAndENFont24, 50, true);
		k10.canvas->updateCanvas();
	}
	delay(1000);
}

void onButtonAPressed() {
	k10.rgb->write(-1, 0x00FF00);
	ai.sendFaceCmd(ENROLL);
}
void onButtonBPressed() {
	k10.rgb->write(-1, 0x0000FF);
	ai.sendFaceCmd(RECOGNIZE);
}
```
![AIFace](/images/k10/6b4699e093a51a72.gif)

## **AI-猫/狗检测**

开启摄像头，当摄像头检测到猫咪时，猫咪面部长度与宽度，以及中心点x坐标与中心点y坐标将显示在K10屏幕上。  

```c
#include "unihiker_k10.h"
#include "AIRecognition.h"

UNIHIKER_K10  k10;
uint8_t screen_dir=2;
AIRecognition ai;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	ai.initAi();
	k10.initBgCamerImage();
	k10.setBgCamerImage(false);
	k10.creatCanvas();
	ai.switchAiMode(ai.NoMode);
	k10.setBgCamerImage(true);
	ai.switchAiMode(ai.Cat);
}
void loop() {
	if (ai.isDetectContent(AIRecognition::Cat)) {
		k10.canvas->canvasText((String("Face Length: ") + String(ai.getCatData(AIRecognition::Length))), 0, 0, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->canvasText((String("Face Width: ") + String(ai.getCatData(AIRecognition::Width))), 0, 20, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->canvasText((String("Face X: ") + String(ai.getCatData(AIRecognition::CenterX))), 0, 40, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->canvasText((String("Face Y:  ") + String(ai.getCatData(AIRecognition::CenterY))), 0, 60, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->updateCanvas();
	}
}
```
![AICat](/images/k10/c0b8bf57a0d8bc59.gif)

## **AI-移动检测**

```c
#include "unihiker_k10.h"
#include "AIRecognition.h"

UNIHIKER_K10  k10;
uint8_t screen_dir=2;
AIRecognition ai;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	ai.initAi();
	k10.initBgCamerImage();
	k10.setBgCamerImage(false);
	k10.creatCanvas();
	ai.switchAiMode(ai.NoMode);
	k10.setBgCamerImage(true);
	ai.switchAiMode(ai.Move);
	ai.setMotinoThreshold(50);
	k10.rgb->write(-1, 0x0000FF);
}
void loop() {
	if (ai.isDetectContent(AIRecognition::Move)) { 
		k10.rgb->write(-1, 0xFF0000);
	}
	else {
		k10.rgb->write(-1, 0x0000FF);
	}
}
```
![AICat](/images/k10/6544c8073da64b06.gif)

## **AI-QR码检测**

你能够通过 [QR code 生成网站](https://www.qr-code-generator.com/)来免费生成一个二维码  

专辑封面显示：  
需要将专辑封面放入TF卡，插入K10

```c
#include "unihiker_k10.h"
#include "AIRecognition.h"

UNIHIKER_K10  k10;
uint8_t screen_dir=2;
AIRecognition ai;

void setup() {
	k10.begin();
	k10.initScreen(screen_dir);
	ai.initAi();
	k10.initBgCamerImage();
	k10.setBgCamerImage(false);
	k10.creatCanvas();
	ai.switchAiMode(ai.NoMode);
	k10.initSDFile();
	k10.setBgCamerImage(true);
	ai.switchAiMode(ai.Code);
}
void loop() {
	if (ai.isDetectContent(AIRecognition::Code)) {
		if ((ai.getQrCodeContent()==String("Album cover"))) {
			k10.canvas->canvasDrawImage(0, 0, "S:/AlbumCover.png");
			k10.canvas->updateCanvas();
		}
	}
}
```
![AICat](/images/k10/753f89cc33d4b717.gif)

## **AI-语音检测**

通过唤醒指令“你好小行”唤醒语音识别功能，随后使用指令词“开灯”、“关灯”控制K10设备上的RGB ELD灯进行开关操作。  

```c
#include "asr.h"
#include "unihiker_k10.h"
// Create an object
UNIHIKER_K10 k10;
ASR          asr;
uint8_t      screen_dir=2;

// Main program start
void setup() {
	k10.begin();
	asr.asrInit(CONTINUOUS, CN_MODE, 6000);
	while(asr._asrState == 0){delay(100);}
	k10.initScreen(screen_dir);
	k10.creatCanvas();
	asr.addASRCommand(0+1, "kai deng");
	asr.addASRCommand(1+1, "guan deng");
}
void loop() {
	if (asr.isWakeUp()) {
		k10.canvas->canvasText("Wake up mode", 0, 0, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->updateCanvas();
	}
	else {
		k10.canvas->canvasText("Sleep mode", 0, 0, 0x0000FF, k10.canvas->eCNAndENFont16, 50, true);
		k10.canvas->updateCanvas();
	}
	if (asr.isDetectCmdID(0+1)) {
		k10.rgb->brightness(round(9));
		k10.rgb->write(-1, 0xFF0000);
	}
	else if (asr.isDetectCmdID(1+1)) {
		k10.rgb->brightness(round(0));
		k10.rgb->write(-1, 0xFF0000);
	}
}
```
![voicedetect](/images/k10/fc2da2501d893db1.gif)

## **AI-语音合成**

```cpp
#include "asr.h"
#include "unihiker_k10.h"

UNIHIKER_K10 k10;
ASR asr;

void onButtonAPressed();
void onButtonBPressed();

void setup() {
	k10.begin();
	asr.setAsrSpeed(2);
	k10.buttonA->setPressedCallback(onButtonAPressed);
	k10.buttonB->setPressedCallback(onButtonBPressed);
	asr.speak("你好");
}
void loop() {

}

void onButtonAPressed() {
	asr.speak("我是行空板");
}
void onButtonBPressed() {
	asr.speak("语音合成");
}
```

## **GPIO**

由于摄像头和显示屏占用了K10上ESP32芯片上大量GPIO接口，所以我们仅在P0、P1位置保留了两个全功能GPIO（支持数字输入/输出、模拟输入、PWM输出）。  
金手指引出的所有GPIO均由板载GPIO扩展芯片驱动，仅具备数字输入/输出功能。  
  
全功能IO(P0/P1)数字输出：

```c
void setup() {
	pinMode(P0, OUTPUT);
	pinMode(P1, INPUT);
	Serial.begin(9600);
	digitalWrite(P0, HIGH);
}
void loop() {
	Serial.println((digitalRead(P1)));
}
```

全功能IO(P0/P1)PWM输出：

```c
void setup() {
	Serial.begin(9600);
	analogWrite(P0, map(512, 0, 1023, 0, 255));
}
void loop() {
	Serial.println((analogRead(P1)));
}
```

金手指IO数字输出：

```c
#include "unihiker_k10.h"

UNIHIKER_K10 k10;

void setup() {
	k10.begin();
	Serial.begin(9600);
	digital_write(eP2, HIGH);
}
void loop() {
	Serial.println((digital_read(eP3)));
}
```
