new 操作执行了哪些步骤

- 定义一个空对象
- 将对象的**proto**指向构造函数的 prototype
- 将构造函数的 this 指向该对象并执行
- 返回这个新对象

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype.eat = function () {
  console.log(this.name + "正在吃饭");
};

function customeNew(Contructor, ...args) {
  let obj = {};
  obj.__proto__ = Contructor.prototype;
  obj.apply(Contructor, args);
  return obj;
}
```
