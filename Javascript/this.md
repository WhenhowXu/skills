### this

> 执行主体， 面向对象语言中 this 表示当前对象的一个引用

- 箭头函数没有自己的 this，它的 this 是继承而来，默认指向在定义它时所处的对象(宿主对象)
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
