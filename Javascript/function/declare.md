- function 命令

```js
function fn() {
  return 123;
}
```

- 函数表达式

```js
var fn = function () {
  return 123;
};
```

- Function 构造函数

```js
var fn = new Function("x", "y", "return x + y");
fn(3, 4); // 7
```
