---
title: "Arduino/PIO API手册"
source: "https://www.unihiker.com.cn/wiki/k10/Arduino_PIO_API_List"
sourceTitle: "Arduino/PlatformIO API手册"
updated: "2026-11-20"
---

# Arduino/PIO API手册

## UNIHIKER\_K10

UNIHIKER K10 库是一个用于控制 K10 屏幕显示、板载传感器、SD 卡以及播放声音的库。  
注意：当 行空板 K10 SDK 升级至完整版时，该库的源代码将在 DFRobot GitHub 上开源。

```c
/**
 * @fn begin
 * @brief 初始化行空板K10
 */
void begin(void);
```
```c
/**
 * @fn initScreen
 * @brief 初始化屏幕
 * @param dir 屏幕显示朝向
 * @param frame 屏幕刷新率
 */
void initScreen(int dir = 2, int frame = 0);

/**
 * @fn creatCanvas
 * @brief 创建画板
 */
void creatCanvas(void);

/**
 * @fn initBgCamerImage
 * @brief 初始化摄像头画面
 */
void initBgCamerImage(void);

/**
 * @fn setBgCamerImage
 * @brief 设置是否在屏幕上显示摄像头图像
 * @param 配置状态(0:关闭 1:开启)
 */
void setBgCamerImage(bool sta = true);

/**
 * @fn setScreenBackground
 * @brief 设置屏幕背景颜色
 * @param 背景颜色
 */
void setScreenBackground(uint32_t color);

/**
 * @fn canvasText
 * @brief 在画板上显示文字
 * @param 文字内容
 * @param row文字在第几排显示
 * @param color 文字颜色
void canvasText(float text, uint8_t row, uint32_t color);
void canvasText(String text, uint8_t row, uint32_t color);
void canvasText(const char* text, uint8_t row, uint32_t color);

/**
 * @fn canvasPoint
 * @brief 在画板上画点
 * @param x 坐标X
 * @param y 坐标Y
 * @param color 点的颜色
 */
void canvasPoint(int16_t x, int16_t y, uint32_t color);

/**
 * @fn updateCanvas
 * @brief 更新屏幕显示（使用相机时自动更新）
 */
void updateCanvas(void);

/**
 * @fn canvasClear
 * @brief 清除画板
 */
void canvasClear(void);

/**
 * @fn canvasSetLineWidth
 * @brief  设置绘图线宽
 * @param w 线宽
 */
void canvasSetLineWidth(uint8_t w = 10);

/**
 * @fn canvasLine
 * @brief 在画板上画一条线
 * @param x1, y1 线起始坐标
 * @param x2, y2 线结束坐标
 * @param color 线颜色
 */
void canvasLine(int x1, int y1, int x2, int y2, uint32_t color);

/**
 * @fn canvasCircle
 * @brief 在画板上画一个圆
 * @param x 圆心X坐标
 * @param y 圆心Y坐标
 * @param r 圆半径
 * @param color 圆边框颜色
 * @param bg_color 圆填充色
 * @param fill 是否用填充色填充圆（0：不填充，1：填充）
 */
void canvasCircle(int x, int y, int r, uint32_t color, uint32_t bg_color, bool fill);

/**
 * @fn canvasRectangle
 * @brief 在画板上画一个矩形
 * @param x 矩形左上角的X坐标
 * @param y 矩形左上角的Y坐标
 * @param w 矩形宽度
 * @param h 矩形高度
 * @param color 矩形边框颜色
 * @param bg_color 矩形填充色
 * @param fill 是否用填充色填充矩形（0：不填充，1：填充）
 */
void canvasRectangle(int x, int y, int w, int h, uint32_t color, uint32_t bg_color, bool fill);

/**
 * @fn canvasDrawCode
 * @brief 显示QR码
 * @param code QR码显示的内容
 */
void canvasDrawCode(String code);

/**
 * @fn clearCode
 * @brief 清除QR码
 */
void clearCode(void);
```
```c
/**
 * @fn initSDFile
 * @brief 初始化SD卡内容
 */
void initSDFile(void);

/**
 * @fn photoSaveToTFCard
 * @brief 拍摄摄像头照片保存到SD卡
 * @param imagePath 照片保存路径
 */
void photoSaveToTFCard(const char *imagePath);
void photoSaveToTFCard(String imagePath);

/**
 * @fn playTFCardAudio
 * @brief  播放SD卡中的音乐
 */
void playTFCardAudio(const char* path);
void playTFCardAudio(String path);

/**
 * @fn recordSaveToTFCard
 * @brief 录制音频并保存至SD卡
 * @param path 储存路径
 * @param time 录音持续时间
 */
void recordSaveToTFCard(const char* path, uint8_t time);
void recordSaveToTFCard(String path, uint8_t time);
```
```c
/**
 * @fn readALS
 * @brief 获取环境光强度
 * @return uint16_t 模拟光线数值
 */
uint16_t readALS(void);

/**
 * @fn getAccelerometerX
 * @brief 获取加速度X轴数值
 * @return 单位m-g
 */
int getAccelerometerX();

/**
 * @fn getAccelerometerY
 * @brief 获取加速度Y轴数值
  * @return 单位m-g
 */
int getAccelerometerY();

/**
 * @fn getAccelerometerZ
 * @brief 获取加速度Z轴数值
  * @return 单位m-g
 */
int getAccelerometerZ();

/**
 * @fn getStrength
 * @brief 获取加速度强度
 */
int getStrength();

/**
 * @fn isGesture
 * @brief 判断当前K10倾斜姿态
 * @param gesture 当前gesture状态
 */
bool isGesture(Gesture gesture);

/**
 * @fn playMusic
 * @brief 内置音乐的背景播放
 * @param 旋律 音乐精选
 * @param 播放选项
 */
void playMusic(Melodies melodies, MelodyOptions options = Once);

/**
 * @fn playTone
 * @brief 播放特定频率声音
 * @param 频率
 * @param 采样节拍：完整节拍8000，半节拍4000，其余类似
 */
void playTone(int freq, int beat);

/**
 * @fn stopPlayTone
 * @brief 停止播放音调
 */
void stopPlayTone(void);

/**
 * @fn stopPlayAudio
 * @brief 停止播放SD卡中的音乐
 */
void stopPlayAudio(void);

/**
 * @fn write
 * @brief 设置RGB LED颜色
 * @param index LED灯号：0~2
 * @param r 红色值
 * @param g 绿色值
 * @param b蓝色值
 */
void write(int8_t index, uint8_t r, uint8_t g, uint8_t b);

/**
 * @fn setRangeColor
 * @brief 设置RGB LED颜色范围
 * @param start 起始LED灯号
 * @param end 结束LED灯号
 * @param c 颜色
 */
void setRangeColor(int16_t start, int16_t end, uint32_t c);

/**
 * @fn brightness
 * @brief 设置RGB亮度
 */
void brightness(uint8_t b);

/**
 * @fn isPressed
 * @brief 检查是否按键被按下
 */
bool isPressed(void);

/**
 * @fn setPressedCallback
 * @brief 为按钮按下绑定回调函数
 * @param _cb 回调函数
 */
void setPressedCallback(CBFunc _cb);

/**
 * @fn setUnPressedCallback
 * @brief 为按钮释放绑定回调函数
 * @param _cb 回调函数
 */
void setUnPressedCallback(CBFunc _cb);

/**
 * @fn getData
 * @brief 从AHT20温湿度传感器
 * @param type Data type to retrieve
 */
float getData(eAHT20Data_t type);
```

## AI识别

AIRecognition库是用于从K10内置AI模型中提取数据的库。  
注：当UNIHIKER K10 SDK升级至完整版时，该库的源代码将在DFRobot GitHub上开放获取。  

```c
/**
 * @fn initAi
 * @brief初始化AI
*/
void initAi(void);

/**
 * @fn switchAiMode
 * @brief 切换AI模式
 * @param mode Face, //人脸识别
                               Cat, //猫狗检测
                               Move, //移动检测
                               Code, //QR码检测
 */
void switchAiMode(eAiType_t mode);
```
```c
/**
 * @fn getFaceData
 * @brief 获取检测到的面部数据
 * @param type Length,Width,CenterX,CenterY,LeftEyeX,LeftEyeY,RightEyeX,RightEyeY,
 * NoseX,NoseY,LeftMouthX,LeftMouthY,RightMouthX,RightMouthY,
*/
int getFaceData(eFaceOrCatData_t type);

/**
* @fn getCatData
* @brief 获取检测到的猫/狗脸
*  @param type Length,Width,CenterX,CenterY,LeftEyeX,LeftEyeY,RightEyeX,RightEyeY,
* NoseX,NoseY,LeftMouthX,LeftMouthY,RightMouthX,RightMouthY,
*/
int getCatData(eFaceOrCatData_t type);

/**
 * @fn isDetectContent
 * @brief 是否检测到内容检测数据
 * @param mode Face, //人脸识别
                               Cat, //猫狗检测
                               Move, //移动检测
                               Code, //QR码检测
 */
bool isDetectContent(eAiType_t mode);

/**
* @fn sendFaceCmd
* @brief 发送AI人脸识别相关指令
* @param recognizer_state_t ENROLL: 学习人脸
*        recognizer_state_t RECOGNIZE: 识别人脸
*        recognizer_state_t DELETEALL: 删除所有人脸ID
*        uint8_t cmd, DELETE: 删除特定人脸ID
 *       int id: ID: Face ID
*/
void sendFaceCmd(recognizer_state_t cmd);
void sendFaceCmd(uint8_t cmd, int id);

/**
 * @fn setMotinoThreshold
 * @brief 设置移动检测阈值
 * @param threshold 范围10~200
*/
void setMotinoThreshold(uint8_t threshold);

/**
 * @fn getQrCodeContent
 * @brief 获取QR码数据
 * @return 获取QR码数据
*/
String getQrCodeContent(void);

/**
 * @fn getRecognitionID
 * @brief 获取人脸ID
 * @return 人脸ID
*/
int getRecognitionID(void);

/**
 * @fn isRecognized
 * @brief 检查是否人脸识别已结束
 * @return识别状态
 */
bool isRecognized(void);
```

## ASR

ASR 是 K10 内置语音识别功能的库。  

```c
/**
 * @fn asrInit
 * @brief 初始化语音识别
 * @param mode  单次/连续识别（ONCE|CONTINUOUS）
 * @param lang 语言模型（EN_MODE|CN_MODE）
 * @param wakeUpTime 唤醒后持续时间(unit:ms)
*/
void asrInit(uint8_t mode = 0, uint8_t lang = 0, uint16_t wakeUpTime = 6000);

/**
 * @fn addASRCommand
 * @brief 添加语音识别命令词
 * @param id 命令词ID
 * @param cmd 命令词内容(英文单词或中文拼音)
*/
void addASRCommand(uint8_t id, char* cmd);
void addASRCommand(uint8_t id, String cmd);

/**
 * @fn isWakeUp
 * @brief 获取唤醒状态
*/
bool isWakeUp(void);

/**
 * @fn isDetectCmdID 
 * @brief 获取命令词ID
 */
bool isDetectCmdID(uint8_t id);
```
