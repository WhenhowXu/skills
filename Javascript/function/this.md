### this

> 执行主体， 面向对象语言中 this 表示当前调用者的一个引用

- 普通函数中 this 指向 Window，严格模式是 undefined

```js
function fn() {
  console.log(this);
}
fn(); //window
window.fn(); // window

("use strict");
function fn() {
  console.log(this);
}
fn(); // undefined
window.fn(); // window
```

- 自执行函数中的 this 是 window

```js
!(function () {
  console.log(this); // window
})();
```

- let 声明函数中的 this

```js
let fn = function () {
  console.log(this);
};
fn(); // window
window.fn(); // 报错，window.fn为undefined
```

- 事件处理函数中的 this

```js
document.onclick = function () {
  console.log(this); // document
};
```

- 对象函数中的 this

```js
const obj = {
  name: 'xiao hong';
  sayName:function(){
    console.log(this.name)
  }
}
obj.sayName(); // xiao ming
```

- 构造函数中的 this

```js
function Dog(name) {
  this.name = name;
  // 显示return 一个对象，new操作返回结果这是这个对象
  return {
    name: "test",
  };
}
let obj = new Dog("xiao huang");
console.log(obj.name); // test

function Dog(name) {
  this.name = name;
}
let obj = new Dog("xiao huang");
console.log(obj.name); // xiao huang
```

- 箭头函数没有自己的 this，它的 this 是上级作用域中 this，而且这个 this 是固定的，无法改变

- 普通函数中 this 指的是其调用者，严格模式下没调用者，this 为 undefined

```js
function say() {
  console.log(this);
}
const obj = {
  name: "xiao ming",
  say: say,
};
say(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
obj.say(); // {name: 'xiao ming', say: ƒ}
```

- 可以使用 call\apply\bind 改变函数的 this 指向，无法更改箭头函数的 this 指向

```js
function say(...args) {
  console.log(this, this?.name, args);
}
const arrowSay = () => {
  console.log(this, this?.name);
};
const obj = { name: "Tom" };
say.call(obj, "test"); // obj 'Tom' ['test']
say.apply(obj, ["test"]); // obj 'Tom' ['test']
say.bind(obj, "test")(); // obj 'Tom' ['test']
arrowSay.call(obj); // Window ''
```
