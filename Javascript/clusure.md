### 闭包

> 闭包就是能够读取其他函数内部变量的函数

- 函数内部可以访问到全局变量、上级作用域变量，但是无法读取下级作用域的变量
- 如何读取函数内部的局部变量

```js
function fn1() {
  var n = "fn1 内部变量";
  function fn2() {
    alert(n);
  }
  return fn2;
}
var f = fn1();
f(); // fn1 内部变量
```

```js
var name = "The Window";

var object = {
  name: "My Object",

  getNameFunc: function () {
    return function () {
      return this.name;
    };
  },
};

alert(object.getNameFunc()()); // The Window

var name = "The Window";

var object = {
  name: "My Object",

  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    };
  },
};

alert(object.getNameFunc()()); // My Object
```

### 使用闭包注意点

- 闭包占用内存，滥用闭包可能会造成性能问题，在 IE 中可能导致内存泄漏
- 不要随便更改函数内部变量的值
