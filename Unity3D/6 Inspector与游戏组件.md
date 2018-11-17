监视面板的使用
---
选取物体后，在左上角可以为物体进行标注  
右上角有Static下拉栏  

*   **Lightmap Static:** 烘培静态，勾选后参与烘培之中
*   **Occluder Static:** 遮罩的挡板，勾选后在此物体所遮挡的其他物体将会被剔除
*   **Occludee Static:** 被遮罩的物体，勾选后此物体可以被剔除
*   **Navigation Static:** 在物体的Collider上可以生成导航路径
*   **Off Mesh Link Generation:** 在非连贯的连个物体上来进行跳跃性的导航链接
组件分类与物理组件
---
### Mesh 栅格
>为物体添加外形的轮廓  

### Nav Mesh Agent 
>为物体添加协助组件，帮助角色进行寻路

### Rigidbody

*   **Angular Drag:** 旋转摩擦力
*   **Is Kinematic:** 是否受到物理引擎的驱动，勾选后只能在脚本中为其添加力，经常架设一些移动的平台,人物的关节等等，可以通过脚本控制，但是不会被其他物体影响
*   **Interpolate:** 插值，用来平滑整个物体的运动曲线
*   **Collision Detection:** 物体碰撞的精度，Continuous可以避免物体移动过快穿模
   *   *Discrete:* 不连续检测   

### Character Controller

*   **Slope Limit:** 人物最高爬行角度
*   **Step Offset:** 爬楼梯最高高度
*   **Skin Width:** 角色与其他物体碰撞时所能接收的最大渗入深度

### Collider

*   **Is Trigger:** 勾选时只保存碰撞检测，不受到撞击

### Mesh Collider
未勾选Convex时不可以主动碰撞其他Collider，但是可以被撞击  

*   **Convex:** 压缩整个模型的面数，可以实现主动碰撞

### Joint 关节

**`HingeJoint`** 链条关节  
**`FixedJoint`** 固定关节  
**`SpringJoint`** 弹簧关节  

*   Damper: 阻尼系数

**`CharacterJoint`** 角色关节  
>多用来模拟角色关节之间的绑定

**`ConfigurableJoint`** 可配置关节  

*   **Brack Force:** 在超过限定的力之后，关节会受损
*   **Brack Torque:** 在超过限定的力矩之后，关节会受损

### Constant Force 恒力

*   **Force:** 世界坐标的力
*   **Relative Force:** 物体坐标的力

### Trail Renderer 轨迹组件

*   **Use Light Probes:** 是否使用灯光探测器
*   **Time:** 轨迹持续时间
*   **Min Vertex Distance:** 设置拖尾锚点的最小距离

### Line Renderer 画线
>可以实现诸如激光之类的效果

### Halo 光晕
>模拟灰尘等光晕的效果

### Projector 投影器
>可以模拟跟随灯光或跟随角色的阴影

### Light Probe Group
>解决场景烘培中，动态物体无法被烘培的工具，要在物体的Renderer中勾选Use Light Probes

### Occlusion Area 
遮挡剔除区域

### Occlusion Protal 
遮挡剔除入口，当摄像机进入此区域时，是否开启遮挡剔除效果

### LODGroup 细节级别
定义贴图在不同距离所看到的细节简化的分级