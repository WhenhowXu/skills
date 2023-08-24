- 写法更加简洁
- 无`arguments`

```js
function fn() {
  console.log(arguments);
}
fn(1, 2, "a"); // Arguments(3) [1, 2, 'a', callee: ƒ, Symbol(Symbol.iterator): ƒ]

const fn1 = () => {
  console.log(arguments);
};
fn1(1, 2, "a"); // Uncaught ReferenceError: arguments is not defined
```

- `this`: 定义位置的上下文

```js
const obj = {
  name: "yeh",
  fn() {
    console.log(this, this.name);
  },
  fn1: () => {
    console.log(this, this.name);
  },
};
obj.fn(); // obj 'yeh'
const fn = obj.fn;
fn(); // window ''
obj.fn1(); // window
const fn1 = obj.fn1;
fn1(); // window
```

- 不可以作为构造函数使用
