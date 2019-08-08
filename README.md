# 第四组——任天堂马里奥官网

## 项目文件夹结构
```
./第四组项目-马里奥官网/
├──	index.html						// 主页链接
├── web-pages/						// 各网页文件夹
│	├── about-tx-wy						// about部分（谈笑、王阳）
│	├── character-qc					// character部分（钱成、周越）
│	├── friends-tx						// friends部分（谈笑、刘颖）
│	├── history-zy						// history部分（周越、钱成）
│	├── index-wy-cqg					// index部分（王阳、陈庆功）
└──	└── nintendo-xk-whj					// official部分（徐凯、吴恒金）
```

## 主页可点击链接说明
1. 导航栏左上角`Nintendo logo`标志
2. 透明导航栏`HOME`、`ABOUT`、`马里奥logo`、`CHARACTERS`和`HISTORY`
3. 三根管道上的`ABOUT MARIO`、`FRIENDS`和`HISTORY`

## 页面功能说明
1. History：
   1.1. 整个页面基于jQuery开发
   1.2. 顶部所有动画全部使用animate方法，一进页面等到马赛克马里奥移动到最右边后开启定时器，此时马里奥向上运动顶到砖块，蘑菇从砖块内出现，并且向右移动，直到蘑菇消失，然后蘑菇复位，此时马里奥再次刚好顶到砖块，往复循环。（难点：计算各个动画时间，蘑菇和马里奥的时间）
   1.3. main部分的按钮效果：第一个按钮默认白底红字（被选中），第二个按钮默认红底白字（没有被选中）。一开始给第一个按钮注册click事件，给第二个按钮注册click、mouseenter和mouseleave事件。当第二个按钮click事件触发后，解绑掉第二个按钮的mouseenter和mouseleave事件，同时给第一个按钮添加mouseenter和mouseleave事件。当第一个按钮click事件触发后，解绑掉第一个按钮的mouseenter和mouseleave事件，同时给第二个按钮添加mouseenter和mouseleave事件。点击newest按钮让下面缩略图倒叙排列，点击oldest按钮让缩略图正序排列。（难点：思路）
   1.4. main部分详情页的实现方法：把19个详情页全部定位到屏幕中间。点击每个缩略图，拿到相应的下标，并且让对应下标的详情页fadeIn()，点击叉号或者按下esc键让详情页fadeOut()，然后顺便写了个轮播图，并且随手优化了几个小细节，比如说点击到最后让箭头透明。（难点：正序排列和倒序排列与轮播图的结合）

2. Home：
   2.1.  整个页面基于jQuery开发
   2.2. 导航栏部分：导航栏分为两层，第一层左边logo部分用了三次贝塞尔曲线来描述过度效果。用四个点（p0,p1,p2,p3）描绘一条曲线。当滚轮移动一定距离后，第二层导航栏变成固定定位，始终黏在页面顶部。用了新增的position: sticky（难点：无）
   2.3. main部分：在页面加载之后开始animate动画，中间先出来，两边从中间向两边闪出。三个管道的hover效果也用了三次贝塞尔曲线。（难点：无）
   2.4. 视频部分：在点击之前，视频是一张图片，鼠标移入后，让中间播放的三角放大，移出后三角变成正常大小。点击之后开始播放视频，需要注意视频格式的问题（遇到的问题：如果视频是.ts格式，不能播放）
   2.5. Games部分：两个div，一大一小，让大div opacity: 0，注册mouseenter事件，当鼠标移入后opacity变成1，scale(1.2)
   2.6. 底部小火箭效果（难点：拿到整个页面正文高度）

3. About：
   3.1. skills部分：全部使用animate动画（难点：定时器和延时器配合和动画时间问题）
   3.2. 轮播图部分：用原生写轮播图，没有用插件
   3.3. mario play部分：（难点：ul和div的宽度问题，纯C3动画怎么实现）

4. Character：
   4.1. 手风琴效果，但是比手风琴效果更复杂，需要考虑到大图片和小图片出现的时机，大段文字有类似于抽屉被抽出的效果，大图片怎么样显示才不生硬，过度自然。
   4.2. 当每项被展开或收回，正文总体高度会发生变化，如果不能动态获取到正文高度，返回顶部的小人效果会出现问题。所以需要动态获取到总高度，什么时候才会改变高度？只有点击事件之后才会改变，什么时候获取高度？在动画结束之后。

5. Friends：
   5.1. 顶部图片切换部分：三张图display: none;并且opacity为0，设置定时器，每1秒让其中一个display: block;，并且让那一张图的opacity从0变到1再变成0
   5.2. 翻转效果：两个面，正面在上，背面在下，旋转的时候必须要加backface-visibility: hidden;

6. Official：
   6.1. 两个轮播图：一个京东样式，一个淘宝样式，主要练习的是页面的布局，边框该怎么加，加给谁，统一加完之后怎么给加多的去掉边框

## 分工目录
```
主站官网：https://mario.nintendo.com/
┌── wy（王阳）
│   ├── 主站home部分（Mario on play Nintendon之前）：https://mario.nintendo.com/
│   ├── 主站about部分（power ups之前）：https://mario.nintendo.com/about/
│	└── 通用导航栏
├── tx（谈笑）
│   ├── 主站about部分（power ups之后）：https://mario.nintendo.com/about/
│   ├── 通用底部、返回顶部功能
│   └── 导航play Nintendo-friends部分：https://play.nintendo.com/themes/friends/
├── qc（钱成）
│   └── 主站character部分：https://mario.nintendo.com/characters/
├── zy（周越）
│   └── 主站history部分：https://mario.nintendo.com/history/
├── xk（徐凯）
│   └── Nintendon第一个轮播图：https://www.nintendo.com/
├── whj（吴恒金）
│   └── Nintendon第二个轮播图及以下：https://www.nintendo.com/
├── cqg（陈庆功）
│   └── 主站home部分（Mario on play Nintendon之后）https://mario.nintendo.com/
└──ly（刘颖）
│   ├── 文件整合
└── └── a链接跳转整合
```

## 项目编写要求
1. 文件夹名需要更改成 “ 项目名+自己名字的缩写 ”
2. css文件、JS文件、less文件需要放入到相应的文件夹内
3. 引用的框架需要放入到lib文件夹内
4. 非跳转用途的a标签href属性值要写成javascript:;
5. js代码需要写在沙箱内，防止全局变量污染
6. 不求多，只求精，每天的主要任务还需要放在每天学的新知识上，敲项目的目的只是练手和复习

## 透露个小秘密
马里奥就是个爱吃迷幻蘑菇的瘾君子，为了逃避现实吃下蘑菇，变大变壮只是因为中毒产生的幻觉而已！