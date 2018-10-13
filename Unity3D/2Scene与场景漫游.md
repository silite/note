Scene 与 场景漫游
---

### Scene 窗口工具
>缩放旁边有padding按钮，在4.6之后用于uGUI系统


`Edit->Snap Settings:` 可在场景中按住**ctrl**对物体实现步进拖动与旋转  
`Pivot按钮:` 指选中物体自己的中心
`Center按钮:`  之所有选中物体加权全重后的中心  
`Local按钮:` 物体移动跟随自己的坐标系  
`Global按钮:` 物体移动跟随整个世界的坐标系 

Scene窗口左上角下拉菜单可以改变观察此场景的视野  

*   **Wireframe:** 物体边框  
*   **Textured Wird:** 物体贴图轮廓
*   **Render Paths:**  显示不同的渲染通道
*   **Lightmap Resolution:** 烘培精度
   *  此时所有场景内的静态物体都会被打上一层半透明的小方格，方格密度越高，精度越高   
*   **Alpha:** Alpha通道
*   **Overdraw:** 整个场景的透视图
*   **Mipmaps:**  贴图感应图，可用于后期的场景资源优化 

`Gizmo下拉栏:` 用于调节在场景中显示的特殊标识

*   3D Gizmos: 标识大小以及是否以3D的形式显示

`Scene窗口右上角的Gizmos标识`  

*   点击标识中的正方体或点击下方的字体，用来切换场景视图  
   *   **Persp:** 广角视图，眼睛看到的世界
   *   **ISO:** 进大远小的现象将不会出现
*   点击红绿蓝坐标系，可以得到对应轴的专用视野
*   Shift + 中间正方体,可以得到45°的视野   

### 快捷键

*   围绕选中物体旋转:ALT + 鼠标左键  
*   使物体移动到视野焦点处时，可以GameObject->Move To View(Ctrl + Alt + F)
*   使物体与视野处于同一位置时，--->Align With View(Ctrl + Shift + F)
*   将视野置于物体位置，--->Align View to Selected