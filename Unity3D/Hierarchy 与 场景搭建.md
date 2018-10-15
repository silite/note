Hierarchy 与 场景搭建
---
### 基本组件  

`Carera: `  
  
*   **Depth:** 摄像机深度优先级，大则优先渲染  
*   **Clear FLags:** 代表摄像机的背景模式，可以改变摄像机的背景，改为Depth Only时，此时将Main Camera优先级调高，来实现诸如画面过渡，太空漫游等等  
*   **Culling Mask:** 表示此摄像机能看到的层  
*   **Projection:** 摄像机的投影模式  
   *  *Perspective:* 平行模式
   *  *Orthographic:* 广角模式  
*   **Field of View:** 当选取Perspective时视野的角度范围
*   **Clipping Planes:** 摄像机的视野范围
*   **Viewport Rect:** 可以实现分屏的功能  
*   **Rendering Path:** 可以选择摄像机的渲染模式  
*   **Target Texture:** 目标贴图，可以实现小地图  
*   **Occlusion Culling:** 是否使用遮罩剔除  

`Mesh Renderer:` 用来在场景中将其渲染出来 
  
`灯光组件: `
#### Directional Light 平行光
---
>Transform中唯一对场景有影响的是其Rotation  

*   **Type:** 可以直接切换光源的种类
*   **Color:** 改变光源的颜色
*   **Intensity:** 光强，强度越高，在Untiy中默认的优先级也越高，在Forward Light正向渲染中，这个场景只能识别一个平行光所提供的Shader阴影，如果不修改后面的Render Mode渲染优先级，Intersity越高则会被视为主光源，并产生此光的阴影
*   Cookie: 其Texture的Alpha通道会为光源添加遮罩
*   **Shadow Type:** 阴影类型
   *   *Hard Shadows:* 边缘无柔化
   *   *Soft Shadows:* 边缘柔化
      *   Stregth: 阴影的不透明度
      *   Resolution: 阴影细节的精度
      *   Bias: 产生的阴影与相连物体的最短距离，过高则会让底部丢失阴影，过低会另阴影打到物体本身身上
*   **Draw Halo:** 是否使用光晕效果
*   **Flare:** 滤镜灯
*   **Render Mode:** 渲染优先级
*   **Culling Mask:** 阴影覆盖范围
*   **Lightmapping:** 烘培光照贴图         
#### Point Light 点光
---  
*   **Range:** 光照的照射范围
*   **Cookie:** 贴图需要Cube Map六面图  
>在默认的Forward Light正向渲染的情况下，是不支持除了平行光以外的阴影的，此时需要修改Camear的Rendering Path的Deferred Lighting延迟渲染模式，阴影会有多重效果的
#### Spotlight 光束  
---  
>更像红外线，虽然能够投射到物体上，却没有漫反射
>所以当需要模拟舞台聚光灯时，则需要将其他的物体材质来辅助实现这类效果
#### Area Light 区域光  
---  
>应用于场景烘培，在未被烘培的场景下，如果使用的是Diffuse这种默认的渲染Shader，在场景中显示的物体的面，都是计算机通过物体与各个光源的夹角来计算出来的

区域光的方向则是场景中Gizmos线段方向   

*   一般Area Light的Intensity一般为0.1

将场景中的物体全部勾选Static，在Lightmapping场景烘培窗口，点击Bake->Bake Scene来烘培整个场景，此时的光以类似于贴图的方式打到所有静态物体上  
### 基本物体组件
`Mesh Filter:` 可以选择物体渲染的样子  
`Mesh Renderer:` 模型渲染方式  

*   **Cast Shadows:** 是否产生阴影
*   **Receive Shadows:** 是否接收阴影
*   **Materials:** 材质  

`Collider:` 碰撞检测轮廓

>Quad可以理解为Cube的一个面，可以作为屏幕的挡板

### Sprite组件
>多用来在2D项目中展示2D资源，当然也可以在3D的场景下使用  

建立Sprite Renderer组件，可以来选择Sprite

*   **Sorting Layer:** 渲染层级

在Texture中选择Texutre Type来更改图片为Sprite类型，点击Apply

*   **Sprite Mode->Multiple:** 代表此图可进行分割，点击Sprite Editor，在左上角用Slice->Grid对图片进行手动方格分割

### Terrain 地形组件
`Terrain组件中间按钮`: 涂色笔  
点击后通过Edit Textures来添加贴图，Normal Map可为贴图增加法线
  
**Settings:**  

*   Brush Size: 大小
*   Opacity: 强度
*   Target Strength: 浓度  

`第二个按钮:` 选中后按住Shift来获取地图对应高度  
`第三个按钮:` 柔化坡度  
`第五个按钮:` 添加树木 

**Trees:** 

*   Edit Trees->add Tree: 来添加树的模型  

`第六个按钮:` 添加草地
`第七个按钮:` 

*   Pixel Error: 图层与地形的精度
*   Base Map Dist.: 贴图可视距离，相比直接导入地形fbx，不需要添加leave of detail
*   Cast Shadows: 地形是否有阴影
*   Material: 地形贴图材质
*   Physics Material: 地形物理材质
*   Wind Settings: 
   *   Grass Tint: 随风摆动时，草地颜色的变化  
*   Resolution: 设置整个地形的分辨率，用于整个场景的优化 