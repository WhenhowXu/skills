### 数据类型

- [数据类型种类](./dataType/type.md)
- [数据类型判断](./dataType/checkType.md)
- [数据类型转换](./dataType/change.md)

## 变量

- [变量提升]
  - 使用 var 关键字命名的变量，在编译会自动放在前面，因而可以先调用，后面定义也不会报错
  - 函数声明和其他声明一起出现时，函数声明高于一切
  ```js
  fn();
  function fn() {
    console.log("foo");
  }
  var foo = 2;
  // 正常打印foo
  ```
  - 赋值语句不会将变量声明提升
  ```js
  foo();
  var foo = function () {
    console.log("foo");
  };
  // 报错 foo is not a function
  ```

### 运算符、操作符

- `===`|`!==`|`==`|`!=` [判断相等、不相等](./operator/equal.md)
- `?.` [可选链操作符](./operator/optionalOperator.md)
- `??` [空值判断](./operator/emptyJudge.md)

- [浮点计算精确度问题](./problerms/floatCalculate.md)

### Number 数字

### String 字符串

- [回文字符串]()

### [RegExp 正则表达式](./RegExp/index.md)

- [修饰符]()

### Function 函数

> 函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块

- [作用域](./function/scope.md)
- this 关键字
  > 指向函数当时运行环境，箭头函数比较特殊，指向的是定义的环境
- [箭头函数]
- [自执行函数]
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
- 类数组
  > 通过索引属性访问元素并且拥有 length 属性的对象

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
- [拖拽]()
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
- [虚拟列表]()
