### 单例模式(Single Pattern)

> 单例类只有一个实例

- 透明单例
  > 可用 new 关键字创建实例、重复创建的实例指向的都是同一个引用

```js
let Singleton = (function () {
  let instance;
  return function (name) {
    if (!instance) {
      this.name = name;
      instance = this;
    }
    return instance;
  };
})();

const obj = new Singleton("t"),
  obj1 = new Singleton("k");

console.log(obj === obj1); // true
```

- 代理单例

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`你好，我是${this.name}！`);
  }
}

class Singleton {
  constructor(...args) {
    if (!Singleton.instance) {
      Singleton.instance = new Person(...args);
    }
    return Singleton.instance;
  }
}

let p1 = new Singleton("小明", 12),
  p2 = new Singleton("小红", 10);
p1 === p2; // true
```

- 惰性单例
  > 提供创建单例的方法

```js
let GetSingleton = function (fn) {
  var instance;
  return function () {
    if (!instance) {
      instance = fn.apply(this, arguments);
    }
    return instance;
  };
};
let createPerson = function (name, age) {
  return {
    name,
    age,
  };
};
let PersonSingleton = GetSingleton(createPerson);
let p1 = PersonSingleton("x", 10),
  p2 = PersonSingleton("k", 3);
console.log(p1 === p2); // true
```
