### CSS (Cascading Style Sheets)

> 层叠样式表，是一种用来为结构化文档（如 HTML 文档或 XML 应用）添加样式（字体、间距和颜色等）的计算机语言

- 插入样式表的三种方法
  - 外部样式表 link 标签引入
  - 内部样式表 style 标签
  - 内联样式

### CSS 基础

- display 布局 [D](./display/index.md)
- visibility 可见性
- position 定位 [D](./postion/index.md)
- animation 帧动画
- transition 过度动画
- transform 变形
- background 背景 [D](./basic/background/index.md)
- box-shadow 阴影 [D](./basic/box-shadow/index.md)

### 知识点

- [flex 布局](./Flex/index.md)
- [双飞翼布局 | 圣杯布局]()
- [动画 animate | transition 的区别]()
- [长度单位 rem | em | px 区别]()

  - `px`(Pixel):像素，相对长度单位，相对于显示器屏幕分辨率而言的`px = 1/dpi(英寸)`
    > 精度 DPI(Dots Per Inch，每英寸像素数)
  - `em`：相对长度单位。相对于当前对象内文本的字体尺寸

  ```js
  function pxToEm(em, fontSize = 14) {
    return em / fontSize;
  }
  console.log(pxToEm(100, 16)); // 6.25
  ```

  - `rem`: 和 em 一样，只不过是相对根节点而言的
  - `pt`: (Point) 物理长度单位，指的是 72 分之一英寸 `pt = 1/72(英寸)`

- [选择器](https://www.runoob.com/cssref/css-selectors.html)
- [DPR]()
- [CSS 变量]()
- [BFC](./BFC.md)
- [清除浮动](./BFC/clear-both.html)

### Libraries

- [postcss]()
  > css 编译工具，使用下一代 css 语法、自动补全浏览器前缀、px 代转 rem、css 代码压缩等
- [Less]()
  > css 预处理器
- [Sass]()
  > css 预处理器
- [Styled Components]()
- [Animate.css 动画库](https://www.jq22.com/yanshi819)
