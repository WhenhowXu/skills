### prototype 原型对象

- 所有 JavaScript 对象都会从 prototype 中继承属性和方法
- 实例的`__proto__`指向构造函数的`prototype`, 当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。
- `Object.prototype.__proto__`指向的是 null
- 构造函数的原型的构造函数指向构造函数自身

```js
function Foo(name, age) {
  this.name = name;
  this.age = age;
}
Foo.prototype.introduce = function () {
  console.log("我叫" + this.name, "今年" + this.age);
};
let tom = new Foo("Tom", 25),
  jerry = new Foo("Jerry", 10);

jerry.__proto__ === Foo.prototype; // true
Foo.__proto__ === Function.prototype; // true

Function.prototype__proto__ === Object.prototype; // true

Foo.prototype.constructor === Foo; // true
```

### 继承

- 原型式继承
- 寄生式继承
- 寄生组合式继承
- 类继承
