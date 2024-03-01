@Date 2023-09-23
@author WhenhowXu

### 什么是 BFC

BFC (block formatting context) 块级格式上下文

### 如何触发 BFC

- float 不是 none
- over-flow 不是 visible
- display 值为 inline-block、block、table-cell、flex、table-caption 或者 inline-flex
- position 不是 static、relative

### BFC 作用

- [避免 margin 重叠](./margin-copy.html)
- [自适应两栏布局、文字环绕](./two-layout.html) 自适应两栏布局好像没发做到
- [清除浮动](clear-both.html)
