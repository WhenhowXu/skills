### 数据类型

- 类型种类 [D](./dataType/type.md)
- 类型判断
  - `Object.prototype.toString` [D](./Object/prototype.toString.js)
  - `instance of`
  - `typeof`
  - `constructor`
- 类型转换 [D](./dataType/change.md)

### 变量

- [变量提升](./variate/index.md)
- 动态类型

### 语句

- 条件语句 _(`if | if else if else | switch | a ? b : c`)_
- 循环语句 _(`while | for | do while`)_
- 标签 _(语句前面有标签，相当于定位符，用于跳转到程序的任意位置)_
- `break | continue`
  - `break` 单独使用只能跳出内层循环，配合标签可以跳出特定的外层循环 [D](./statements/break.js)

### 运算符、操作符

- 算数运算符
  - [`+`](./operators/plus.md) _(加法运算符)_
  - [`-`]() _(减法运算符)_
  - [`*`]() _(减法运算符)_
  - [`/`]() _(除法运算符)_
  - `%` _(取余, 可判断奇偶)_
  - `**` _(指数运算符)_
  - `=` _(赋值运算符)_
- 比较运算符
  - `>` _(大于)_
  - `<` _(小于)_
  - `>=` _(大于或等于)_
  - `<=` _(小于或等于)_
  - `==` _(等于)_
  - `===` _(严格等于)_
  - `!=` _(不等于)_
  - `!==` _(严格不等于)_
- 布尔运算符

  - `!`(非)
  - `&&`(且)
  - `||`(或)
  - `?:` _(三元运算符)_

- `void` _(执行一个表达式，然后不返回任何值)_
- `?.` [可选链操作符](./operator/optionalOperator.md)
- `??` 空值判断 _([details](./operators/emptyJudge.md))_
- [浮点计算精确度问题](./problerms/floatCalculate.md)

### Object 对象

- Object 静态方法
  - `keys` _(返回对象自身所有非继承属性名)_
  - `values` _(返回对象自身所有非继承属性名对应的值)_
  - `getOwnPropertyNames` _(返回对象自身所有属性名)_ _[D]()_
  - `getOwnPropertyDescriptor`：_(获取某个属性的描述对象)_ _[D](./Object/getOwnPropertyDescriptor.js)_
  - `defineProperty`：_(通过描述对象，定义某个属性)_ _[D](./Object/defineProperty.md)_
  - `defineProperties`：_(通过描述对象，定义多个属性)_ _[D](./Object/defineProperties.md)_
  - `preventExtensions`：_(防止对象扩展，防止对象添加新的属性)_
  - `isExtensible`：_(判断对象是否可扩展)_
  - `seal`：_(禁止对象配置，防止对象添加新属性、删除旧属性)_
  - `isSealed`：_(判断一个对象是否可配置)_
  - `freeze`：_(冻结一个对象，无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量)_
  - `isFrozen`：_(判断一个对象是否被冻结)_
  - `create`：_(该方法可以指定原型对象和属性，返回一个新的对象)_
  - `getPrototypeOf`：_(获取对象的 Prototype 对象)_
- Object.prototype 实例方法
  - `valueOf`：_(返回当前对象对应的值)_
  - `toString`：_(返回当前对象对应的字符串形式)_ _[D](./Object/prototype.toString.js)_
  - `toLocaleString`：_(返回当前对象对应的字符串形式)_
  - `hasOwnProperty`：_(判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性)_
  - `isPrototypeOf`：_(判断当前对象是否为另一个对象的原型)_
  - `propertyIsEnumerable`：_(判断某个属性是否可枚举)_

### Number

- 全局方法 window.fns
  - `parseInt`
  - `parseFloat`
  - `isNaN`
  - `isFinite`(./number/isFinite.js) _(是否为正常的数值)_
- 静态属性
  - `POSITIVE_INFINITY`: 正的无限，指向`Infinity`
  - `NEGATIVE_INFINITY`: 负的无限，指向`-Infinity`
  - `NaN`: 非数值，指向 `NaN`
  - `MIN_VALUE`: 最小的正数 `5e-324`
  - `MAX_VALUE`: 最大的正数 `1.7976931348623157e+308`
  - `MAX_SAFE_INTEGER`: 能够精确表示的最大整数，即 `9007199254740991`
  - `MIN_SAFE_INTEGER`: 能够精确表示的最小整数，即`-9007199254740991`
- 实例方法
  - `toString`
  - `toLocaleString`:接受一个地区码作为参数，返回一个字符串，表示当前数字在该地区的当地书写形式 _[D](./Number/toLocaleString.md)_
  - `toFixed`
  - `toExponential`
  - `toPrecision`

### Math

- 静态属性
  - `E`: 常熟`e`
- 静态方法
  - `abs`: 绝对值
  - `ceil`: 向上取整
  - `floor`: 向下取整
  - `max`: 最大值
  - `min`: 最小值
  - `pow`: 幂运算
  - `sqrt`: 平方根
  - `log`: 自然对数
  - `exp`: `e`的指数
  - `round`: 四舍五入
  - `random`: 随机数

### String 字符串

- 静态方法
  - `fromChartCode`: 根据 Unicode 码点返回字符串
- 实例属性
  - `length`: 字符串长度
- 实例方法
  - `charAt`: 返回指定位置的字符
  - `charCodeAt`: 字符串指定位置的 Unicode 码点
  - `concat`: 拼接
  - `slice | substring | substr`: 截取 [D](./String/slice.md)
  - `indexOf | lastIndexOf`: 第一次出现索引位置
  - `trim`: 去除首尾空格、制表符`\t | \v`、换行符`\n`
  - `toLowerCase | toUpCase`: 转小写 | 转大写
  - `match`: 匹配子字符串 [D](./String/match.md)
  - `search`: 查找子字符串 [D](./String/match.md)
  - `replace`: 匹配替换 [D](./String/replace.md)
  - `split`: 分割为数组
  - `localeCompare`: 比较两个字符串
- 去除字符串首尾空格的方法 [D](./String/trim.md)
- 驼峰、下划线、横线写法相互转化 [D](./String/toCamel.js)
- 模板字符串
- [回文字符串]()
- `btoa | atob` _(Base64 转码)_
- 字符集
- `\` _(转义)_

### RegExp 正则表达式

- 创建正则表达式 [D](./RegExp/create.md)
- 实例方法
  - `exec`:
  - `test`:
- 特殊字符
  - `\`: 转义字符
  - `^`: 匹配开始
  - `$`: 匹配结束
  - `*`: 出现 0 到多次，相当于`{0,}`
  - `+`: 出现 1 到多次，相当于`{1,}`
  - `?`: 出现 0 到 1 次，相当于`{0,1}`
  - `.`: 匹配除换行符之外的任何单个字符
  - `(x)`：匹配'x'，并捕获匹配项 [D](./RegExp/1.md)
  - `(?:x)`：匹配'x'，不捕获匹配项 [D](./RegExp/1.md)
  - `x(?=y)`：匹配'x'仅当后面跟着'y'，又叫先行断言 [D](./RegExp/1.md)
  - `(?<=y)x`：匹配'x'仅当前面是'y'，又叫后行断言 [D](./RegExp/1.md)
  - `x|y|z`: 标识 x 或 y 或 z
- 常用正则表达式
  - 邮箱
  - 手机号
  - 电话
  - 地址
  - 网址

### Function 函数

- Generator Function 生成器函数 [D](./Function/1-generator.md)
- Arrow Function 箭头函数 [D](./Function/2-arrow.md)
- Tag Function 标签函数 [D](./function/3-tag-function.md)
- `IIFE` 自执行函数

  > 定义函数后立马执行。其中定义变量和函数，而不会污染全局作用域

- 实例方法
  - `call`:
  - `apply`:
  - `bind`:
  - `toString`:
- arguments
- [作用域](./function/scope.md)
- [this]()
- [闭包](./function/clusure.md)
- [防抖 | 节流]()

### Array 数组

- 静态方法:
  - `isArray`: 判断是否为数组
- 实例属性:
  - `length` 数组长度 [D](./Array/length.md)
- 实例方法:

  - `valueOf`：返回数组本身
  - `toString`：返回数组转化后的字符串
  - `push`：末尾添加一到多项 [D](./Array/1-push.md)
  - `pop`：删除最后一项 [D](./Array/2-pop.md)
  - `unshift`：开头添加一到多项 [D](./Array/3-unshift.md)
  - `shift`：删除第一个元素 [D](./Array/4-shift.md)
  - `join`: 拼接成字符串 [D](./Array/5-join.md)
  - `concat`: 合并 [D](./Array/6-concat.md)
  - `reverse`：颠倒 [D](./Array/7-reverse.md)
  - `slice`: 截取 [D](./Array/8-slice.md)
  - `splice`(删除一部分成员，并添加部分成员)
  - `sort`(排序)
  - `map`(映射)
  - `forEach`(遍历)
  - `filter`(过滤)
  - `some`(一个成员满足条件，则返回 true)
  - `every`(每个成员满足条件，则返回 true)
  - `reduce | reduceRight`(归纳)
  - `indexOf | lastIndexOf`(返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1)

- [数组空位](./array/empty.md)
- [排序](./array/sort/index.md)
- [去重](./array/removeDuplicate.md)
- [遍历](./array/ergodic.md)
- 类数组 _(通过索引属性访问元素并且拥有 length 属性的对象)_
- 链式调用

### Date 日期

- `Date()`: 当做普通函数返回当前时间
- 静态方法 `Date[functions]`
  - `now`:
  - `parse`:
  - `UTC`:
- 实例方法 `Date.prototype[functions]`

  - `valueOf`:
  - `toString`: 返回一个完整的日期字符串
  - `toUTCString`: 对应的 UTC 时间，也就是比北京时间晚 8 个小时
  - `toISOString`: 对应时间的 ISO8601 写法， UTC 时区的时间
  - `toJSON`: 与`toISOString`返回相同
  - `toDateString`: 方法返回日期字符串（不含小时、分和秒）
  - `toTimeString`: 方法返回时间字符串（不含年月日）
  - `toLocaleString`: '2023/8/15 13:32:52'
  - `toLocaleDateString`: '2023/8/15'
  - `toLocaleTimeString`: '13:34:34'
  - `getTime`: 返回实例距离 1970 年 1 月 1 日 00:00:00 的毫秒数，等同于 valueOf 方法。
  - `getDate`: 返回实例对象对应每个月的几号（从 1 开始
  - `getDay`: 返回星期几，星期日为 0
  - `getFullYear`: 年份
  - `getMonth`: 月份
  - `getHours`: 小时
  - `getMinutes`: 分钟
  - `getSeconds`: 秒
  - `getMilliseconds`: 毫秒
  - `getTimezoneOffset`: 返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素

- 如何获取一个月有多少天
- [moment]()
- [day.js]()

### Map | WeakMap

### Set | WeakSet

### Proxy

### 异步编程

- 回调地狱
- Promise [D](./Promise/index.md)
- async await

### 元素

- `document`
  - `open`: 清空页面内容，渲染新页面
- [事件对象]()
- [事件委托]()
- [获取元素]()
- [元素滚动]()
- [元素事件绑定]()
- [拖拽](./event/drag.html)
- 鼠标跟随效果 _[D](./event/mouseFollow.html)_

### 其它

- 垃圾回收机制 _[D](https://www.ruanyifeng.com/blog/2017/04/memory-leak.html)_
- Event Loop _[D](./eventLoop.md)_
- [MutationObserver]()
- [原型链、继承](./JavaScript/protoType.md)
- [设计模式](./designPatterns/index.md)
- [模块化编程]()
- [严格模式]()
- [BOM | DOM](./DOM&BOM/index.md)
- [虚拟列表]() _(按需渲染，只渲染可视区域的数据)_
- [服务端渲染]()
- 大前端
- 加密方式
- [关键字搜索](./array/search/index.js)

### 面向对象编程

### 浏览器

### ES6

- `let | const`
- 解构赋值
- Symbol
- Map Set
- Reflect Proxy
