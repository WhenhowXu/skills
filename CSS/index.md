### CSS 基础

- [animation]()
  > 帧动画，可定义中间状态
- [transition]()
  > 过度动画，可设置开始和结束状态
- [transform]()
  > 变形
- [background]()

### 知识点

- animate 和 transition 的区别
- rem、em、px 的区别

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

### CSS 编译工具

- postcss
  > css 编译工具，使用下一代 css 语法、自动补全浏览器前缀、px 代转 rem、css 代码压缩等
- less
  > 预处理器，扩充 css 语法
- sass

  > 预处理器，扩充 css 语法

- [选择器]()

### Tools

- [Animate.css 动画库](https://www.jq22.com/yanshi819)
