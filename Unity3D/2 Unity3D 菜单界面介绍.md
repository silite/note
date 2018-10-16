File 文件菜单
---  
### Build Settings
单击**Add Current**可将当前场景添加到将要发布的Project中

*   **Player Settings:**
   *   *Default Is Full Screen:* 游戏是否为全屏
   *   *Default Is Native Resolution:* 是否使用运行平台分辨率
   *   *Run In Backgroung:* 是否可在后台运行
   *   *Splash Image:* 更改游戏过场图片
   *   *Rendering Path:* 渲染模式，消耗的配置一次递增
      *   Vertex Lit: 顶点渲染，不支持阴影以及很多效果
      *   Forward: 正向渲染
      *   Deferred Lighting: 延迟渲染，不支持移动设备，不支持抗锯齿，当使用Layout时，系统只支持4个层级，但是支持不同光源产生的阴影并同时显示
   *   *Use Direct3D 11:* 是否使用DX11

Edit 编辑菜单
---  
 
### 热键：

*   **Ctrl+P:** Play
*   **Ctrl+Shift+P:** Pause
*   **Ctrl+Alt+P:** Step
*   **selection:**
	*   *Ctrl+Alt+num:* 对选中物体存档
	*   *Ctrl+Shift+num:* 对存档选中物体选取

### Project Settings:

*   Input: 对游戏默认输入进行修改
*   Player: 在发布版本菜单中的Player Settings

### Render Settings:

>新版本Unity都是在Window菜单下的Lighting->scene中
*   Fog: 全局雾化效果
*   Fog Mode: 雾浓度的显示方式
*   Ambient Light: 默认全局光照，在后期场景烘培时，将Ambient Light关闭，以便不影响整体渲染

### Snap Settings:
按住左Ctrl操作物体，物体会以步进进行移动或旋转  

Assets 资源菜单
---  

### Select Dependencies
>查找选中物体相关的物体


GameObject 物体菜单
--- 
### 热键

*   Ctrl+Shift+N: 创建空物体
*   Alt+Shift+N: 为选中的物体的子集创建空物体

### Move To View: Ctrl+Alt+F
>将物体移至视野前方

### Align With View: Ctrl+Shift+F
>将选中物体移至当前视野点

### Align View to Select: 
>将视野移至选中物体

### Toggle Active State: Alt+Shift+A
>切换物体Disable掉

Component 组件菜单
---
### Mesh 
物体模型及贴图

### Navigation 
导航相关组件

### Rendering 
光照渲染相关组件

### Miscellaneous
其他混杂组件  

Window 窗口菜单
---
### 热键
*   Ctrl+6 Animation
*   Ctrl+7 Profiler 资源监视

### Animator
>Unity4.0新增组件，使用动画状态机的方式将不同的动画融合在整个的一个体系当中
### Sprite Packer
>用于存放精灵体动画的集
### Lightmapping
>光照窗口，可以进行场景的烘培
### Occlusion Culling
>用于遮罩剔除，在场景优化的过程中用到
### Navigation
>内置完善的寻路系统  