### `?.`可选链操作符

> 避免取值，函数执行时报错

```js
const obj = { m: "111" };
obj1.m; // Uncaught ReferenceError: obj1 is not defined
obj.fn(); // VM206:1 Uncaught TypeError: obj.fn is not a function

obj1?.m;
obj.fn?.();
```
