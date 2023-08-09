### 数据类型

- [类型种类](./dataType/type.md)
- [类型判断](./dataType/checkType.md)
- [类型转换](./dataType/change.md)

### 变量

- [变量提升](./variate/index.md)
- 动态类型

### 语句

- 条件语句 _(`if | if else if else | switch | a ? b : c`)_
- 循环语句 _(`while | for | do while`)_
- 标签 _(语句前面有标签，相当于定位符，用于跳转到程序的任意位置)_
- `break | continue` _（[break 单独使用只能跳出内层循环，配合标签可以跳出特定的外层循环](./statements/break.js)）_

### 运算符、操作符

- `===`|`!==`|`==`|`!=` [判断相等、不相等](./operator/equal.md)
- `?.` [可选链操作符](./operator/optionalOperator.md)
- `??` [空值判断](./operator/emptyJudge.md)

- [浮点计算精确度问题](./problerms/floatCalculate.md)

### Number 数字

- 数值范围 _(`Number.MAX_VALUE Number.MIN_VALUE`)_
- [NaN](./number/nan.js) _(Not a Number 非数字)_
- Infinity _(无穷)_
- parseInt
- parseFloat
- isNaN
- [isFinite](./number/isFinite.js) _(是否为正常的数值)_

### String 字符串

- 模板字符串
- [回文字符串]()
- `btoa | atob` _(Base64 转码)_
- 字符集
- `\` _(转义)_

### RegExp 正则表达式

- [修饰符]()
- [正则捕获]()

### Function 函数

- [声明](./function/declare.md)
- arguments
- [作用域](./function/scope.md)
- [this]()
- [箭头函数]()
- [自执行函数]()
- [标签函数](./function/tagFunction.md)
- [闭包](./function/clusure.md)
- [call\bind\apply](./callBindApply.md)
- [防抖 | 节流]()

### Array 数组

- [数组基础方法](./array/base.md)
- [排序](./array/sort/index.md)
- [去重](./array/removeDuplicate.md)
- [遍历](./array/ergodic.md)
- [关键字搜索](./array/search/index.js)
- 类数组 _(通过索引属性访问元素并且拥有 length 属性的对象)_

### Date 日期

- [moment]()
- [day.js]()

### Map | WeakMap

### Set | WeakSet

### Proxy

### 异步编程

- [回调地狱]()
- [Promise](./Promise/index.md)
- [async await]()

### 元素

- [事件对象]()
- [事件委托]()
- [获取元素]()
- [元素滚动]()
- [元素事件绑定]()
- [拖拽](./event/drag.html)
- [鼠标跟随效果](./event/mouseFollow.html)

### 其它

- [垃圾回收机制](https://www.ruanyifeng.com/blog/2017/04/memory-leak.html)
- [Event Loop](./eventLoop.md)
- [MutationObserver]()
- [原型链、继承](./JavaScript/protoType.md)
- [设计模式](./designPatterns/index.md)
- [模块化编程]()
- [严格模式]()
- [BOM | DOM](./DOM&BOM/index.md)
- [虚拟列表]() _(按需渲染，只渲染可视区域的数据)_
- [服务端渲染]()
- [大前端]()
- [加密方式]()
