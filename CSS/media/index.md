### 媒体类型

- all 默认，匹配所有设备
- screen 除打印设备和屏幕阅读设备以外的所有设备
- speech 能够声音读出页面的屏幕阅读设备，通常给残疾人士使用
- print 打印设备上生效

### 媒体特征

- 设置像素比 resolution

```css
/* 设备像素比等于2 */
@media (resolution: 2dppx) {
}
/* 设备像素比大于或等于2 */
@media (min-resolution: 2dppx) {
}
/* 设备像素比小于或等于2 */
@media (resolution: 2dppx) {
}
```

- 横屏还是竖屏 orientation

```css
/* 横屏 */
@media (orientation: landscape) {
}
/* 竖屏 */
@media (orientation: portrait) {
}
```

- 设备宽度、高度查询与匹配

```css
/* 高度等于200px */
@media (height: 200px) {
}
/* 高度小于或等于200px */
@media (max-height: 200px) {
}
/* 宽度与之类似 */
```

- 判断深色模式 prefers-color-scheme

```css
/* 深色模式 */
@media (prefers-color-scheme: dark) {
}
/* 浅色模式 */
@media (prefers-color-scheme: light) {
}
```

- 判断是否关闭不必要的动画 prefers-reduced-motion

```css
@media (prefers-reduced-motion) {
  * {
    animation: none;
    transition: none;
  }
}
```

- 判断是否能悬停 any-hover、hover
- 判断是否可点击 any-pointer、pointer

### 媒体特征表达式

- 媒体特征配合或 or、与 and、非 not 组合成媒体表达式

```css
/* 屏幕宽度大于1000px或者屏幕宽度大于700px应用该样式 */
@media only screen and (min-width: 1000px), screen and (min-width: 700px) {
}
```

### 拓展

- 使用 js 判断深色还是浅色模式

```js
window.matchMedia("prefers-color-scheme: dark").matches; // true 为深色模式 false为浅色模式
```

- 网页快速进行深色模式改造的技巧

```js
@media (prefers-color-scheme: dark) {
    body {
        filter: invert(1) hue-rotate(180deg);
        background-color: #000;
    }
    img {
        filter: invert(1) hue-rotate(180deg);
    }
}
```

- link 标签设置 media 属性

```html
<link rel="stylesheet" type="text/css" href="./index.css" media="screen" />
```
