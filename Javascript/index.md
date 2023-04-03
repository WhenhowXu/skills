### 数据类型
  - 基本数据类型
    - null
    - string
    - number
    - boolean
    - undifined
    - symbol
  - 引用数据类型
    - 数组
      - [数组创建](./array/create.js)
      - [push末尾加项](./array/push.js)
      - [unshift加项](./array/push.js)
      - [pop删除最后一项](./array/push.js)
      - [shift删除数组第一项](./array/push.js)
      - [find/findIndex/indexOf/lastIndexOf](./array/find.js)
      - [reduce/reduceRight](./array/reduce.js)
      - [includes是否存在该项](./array/includes.js)
      - [sort排序](./array/sort.js)
      - [map映射]
      - [filter过滤]
      - [slice截取]
      - [splice切片、嫁接]
      - [fill/fillWith] 
      - [some/every]
      - [数组排序算法]
    - object
    - date
    - regexp
    - function

  - [判断数据类型的方法]
### 操作符
  - [可选链操作符javascript-optional-chaining] `a?.b`
### 原型链
  - [new操作符](./new/index.md)
  - [什么是原型链]()
  - [继承]


### 事件
- [事件冒泡](./event/1.html)
> 是由网景公司提出的，它的传播顺序与事件捕获相反，是从事件源=>根节点（由内层到外层）进行事件传播。
- [事件捕获]
> 由微软公司提出的，当鼠标点击或触发DOM事件时（被触发DOM事件的这个元素被叫做事件源），浏览器会从根节点=>事件源（由外层到内层）进行事件传播
- [事件流]
> 我们将事件发生的顺序称为“事件流”，当我们触发某个事件时，会发生一系列的连锁反应。DOM标准事件流的传播顺序的是W3C统一后的标准——先捕获后冒泡。即当出发DOM事件时，会先进行事件捕获，捕获到事件源之后通过事件传播进行事件冒泡
- `e.stopPropagation` 阻止事件捕获、事件冒泡
- `el.addEventListener(event, function(){}, false)`false 将事件绑定在冒泡阶段，true将事件绑定在捕获阶段
- [事件委托]
> 事件委托就是利用函数的冒泡冒原理，把事件绑定在父元素上面，把所有本该子元素各自处理的事情交给父元素统一处理，达到性能优化的效果, 可以大量节省内存占用，减少事件注册



