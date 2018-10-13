Project: 窗口操作  
---  
>对资源文件的修改将无法撤销  

### 设置资源Label  
点击资源文件->右下角展开->选择<font color=blue>蓝色</font>Label按钮  
可以在Project窗口SearchBar右侧Seaech By Label  
### 储存资源搜索结果
Project窗口SearchBar右侧Save Search按钮  
### 窗口右上锁
锁定选定的窗口的内容，在其他窗口操作时将无法改变其内容
资源的导入导出  
---  
>Project右键或者Assets菜单选择导入导出

### ->Import Package
`Character Controller:` 人物控制器  
`Glass Refraction:` 玻璃材质  
`Image Effect:` 图像效果  
`Light Cookies:` 灯光遮罩  
`Light Flares:` 镜头反光  
`Particles:` 粒子系统  

当引入的包是Unity官方提供的时，所有内容将会出现在Standard Assets子文件当中

----------
### ->Export Package
当脚本的库已经存在时，右键->Select Dependencies->Exoprt，勾选掉Include dependencies，就可以只导出与之相关的物体
资源类型分类  
---  
###  C#  
`UnityEngine:` Unity自带API  
`System.COllections:` 各种集合类  
### Shader
修饰各种材质，基于CG语言开发  
修改此Shader在文件夹中显示的位置(`Shader "路径" {}`)，选择Material，可在Shader下拉栏中找到对应路径  
### Compute Shaer
计算着色器，为DX11实现的新功能，释放CPU的运转压力，使用GPU来计算一些与图形无关的内容
### Prefab
预设物体
### Material
材质，当修改一个物体的材质属性时，与其共用材质的物体的材质也会做相应的改变
### Cubemap
立方体贴图，由6个Texture组成，通常用来显示比较远的效果，或球面镜的反射
### Lens Flare
镜头光晕，用来模拟诸如摄像机镜头内的折射光线的效果
### Render Texture
渲染贴图，可以制定到camera的Target Texture上，这样camera渲染出来的属性将不会打到屏幕上，而是打到贴图上，可以制作诸如小地图等游戏元素
### Animator Controller
动画状态机，在Animator窗口中的修改将会针对资源文件进行修改，很多情况将无法撤销编辑
### Animator Override Controller
动画继承，可将Animator Controller托至此，类似于重写，将动画部分进行修改
### Animation
Animator Controller基于此建立的动画状态机系统，可在Window->Animation窗口进行详细的编辑
### Avatar Mask
动画遮罩体，可利用Animation不同的层，来只针对人物模型的部分内容进行动画的播放
### Physic[2D] Material
改变2D或3D物体间的摩擦力和反弹属性的值，可在碰撞器Collider的Material中用到  
`Dynamic Friction:` 动态摩擦擦力  
`Static Friction:` 静态摩擦力  
`Bounciness:` 反弹值
### GUISkin
用来修饰图形样式的集合
fbx模型
--  
>在fbx里可能涵盖组模，以及绑定骨骼等，在外可能自动生成Material以及对应贴图

### 模型编辑器
点击fbx的Inspector  
#### `Model:` 模型  

*   **Scale Factor：**大小单位，在Maya，3DMax导出的单位都是0.01，修改会改变其在场景中的大小
*   **Mesh Compression:** 来选择是否压缩模型
*   **Optimize Mesh：** 优化用  
*   **Import BlendShapes：** 是否引用BlendShapes，在涉及脸部动画时，或一些比较复杂的动画时，脸部动画大致分为两类: BlendShapes和Joint。BlendShapes一般在Maya等软件中制作。Joint:骨骼。
*   **Generate Lightmap UVs:** 是否为场景的烘培提供第二个UV选项，所有的静态物体在导入fbx模型之后，需要第一时间将其勾选上，并点击Apply来把UV展开，这样才能把烘培出来的光照贴图达到此模型身上

#### `Rig:` 绑定选项  

*   **Animation Type:**动画播放方式，
   *   *Legacy：*传统播放方式
   *   *Generic:* 非人型动画
   *   *Humanoid:* 人型动画，在Unity4.0之后系统为Humanoid提供骨骼系统，所有人物模型只要遵循了Humanoid结构方式，都可以共用同一个动画，点击下方Avatar Definition的Configure就可以配置人型构架，也可以点击fbx下的Avatar(人物替身)进行编辑
   *      


#### `Animations:` 动画选项

*   **Import Animation：**通过勾选与不勾选来选择是否引用模型本身自带动画  
*   在窗口右下角可以选择预览窗口所显示的人物模型
  *   *Auto:* 此fbx本身的人物模型
  *   *Unity Model:* 如果骨骼和标准的类似，模型会改为Unity自带模型  
  *   *Other:* 用其他模型

#### `IK:` 是否使用反向动力学  

Prefab预设物体
--- 
>Camera Component中Projection->Orthographic 让屏幕变成一个2D屏幕  

将Hierarchy物体拉出到Project即可成为Prefab  
在场景中将此Prefab修改并Apply，所有用到此的Prefab均会受到修改  

贴图材质与着色器
--  
### Texture
*   **2DTexture**
   *   *界面UI*
   *   *Mesh模型*
   *   *粒子效果*
*   **Movie Texture**
   *   *视频资源*    
*   **Render Texture 渲染贴图**

选中贴图时，可以在Inspector中看到编辑选项，缩略图右上方滑动条可以查看在**不同压缩程度情况下**的样子  
滑动条左侧可以查看图片的**灰度图**

`Texture Type:` 可以修改其属于哪类贴图，贴图无法正常显示时，第一时间查看贴图属性是否与想要用到的属性一致，值有
  
*   **Texture:** 普通贴图  
*   **Normal map:** 法线贴图
*   **GUI:** 显示的界面UI贴图
*   **Sprite:** 精灵
*   **Cursor:** 鼠标指针
*   **Reflection:** 反射贴图
*   **Cookie:** 遮罩贴图
*   **Lightmap:** 烘培贴图
*   **Advanced:** 自定义贴图


`Alpha from Grayscal与Alpha Is Transparen:` 通过这张贴图是否来产生透明的Alpha通道  

`Wrap Mode:` 在贴图与贴图之间是如何拼接的  

   *   Repeat: 当有需要两张以上的贴图时，拼接部分是以互相重复的方式来生成的，可以在场景物体的Material这种修改Base的Tiling来修改张数
   *   Clamp: 右上显示完整，其余部分会被拉伸  

`Fiter Mode:` 贴图在3D情况下是如何变换的

   *   Bilinear: 模糊化的过渡
   *   Point: 硬性的过渡  
   *   Trilinear: 上述折衷 

`Aniso Level:` 同步异向性过滤，如果屏幕中的摄像机与3D模型有了比较大的角度时，是否增强其纹理精度

`Override for Standalone:` 针对不同平台的关于此图精度以及如何压缩进行具体平台设置

### Material
>将图片直接拖到场景中的物体时，会在Materials文件夹中自动生成对应Material  
>使用材质球的目体是为了识别出物体是使用何种Shader着色器渲染的，通过不同着色器的效果，Material渲染出的效果时不一样的  

修改物体的Material时，与之共用的物体的Material也会被修改，目的是节省文件大小和运行配置

### Shader
>在Material的Inspector中选择Shader  
>可在右下角的视窗中查看不同物体此贴图的效果

*   **Normal Shader:** 下拉栏中无子类的着色器
   *   *Diffuse:* 可以读取一张贴图   
      *   Main Color: 与贴图是相乘的关系   
   *   *Bumped Diffuse:* 在Diffuse基础上加Noemalmap   
   *   *Decal:* 将一个材质上打上另一个贴图
   *   *Diffuse Detail:* 经常用来模拟地形效果
   *   *Parallax Diffuse:* 在Bumped Diffuse基础上增加了Heightmap
   *   *Specular:* 可以使材质打上高光效果
      *   Specular Color: 光线颜色   
      *   Shininess: 光强   
*   **Transparent:** ->Cutout 镂空材质

项目资源管理
---
>命名前加_会使其排序靠前

在项目进行当中，可以将一些确定的资源文件放到一个自定义的文件夹下，这样就不容易与外界Import的Package冲突  

导出时也尽量不要把Material等这样的文件直接导出，否则在导入时可能会引起不必要的麻烦

### 特殊文件夹命名

`Standard Assets/Pro Standard Assets:`  Unity内置的插件，优先于其他的资源目录，其下的插件会进行预先的加载
`Editor:`  拓展编辑器的脚本
`Plugins(Plugins/x86, Plugins/x86_64, Plugins/Android etc.):`  dll文件
`Resources:`  资源文件，此下的文件打包时无论在那种开发环境都会以资源打包在程序里

http://wiki.unity3d.com/index.php/Special_Folder_Names_in_your_Assets_Folder