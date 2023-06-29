### `v-bind`

> 动态绑定一个或者多个attribute
- 修饰符
    + .prop - 作为一个 DOM property 绑定而不是作为 attribute 绑定。(差别在哪里？)
    + .camel - (2.1.0+) 将 kebab-case attribute 名转换为 camelCase。(从 2.1.0 开始支持)
    + .sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器


### `v-model`

> 数据双向绑定

- 限制`input、select、textarea、组件`中使用
- 修饰符
  - .lazy - 取代 input 监听 change 事件
  - .number - 输入字符串转为有效的数字
  - .trim - 输入首尾空格过滤
- [v-model简单实现](./vModelDemo.html)

### `v-once`

> 只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能，组件属性或者 key 变化也不会触发更新，一般用作静态页面显示

### `v-cloak`

> 这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕

### `v-pre`

> 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
