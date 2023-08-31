- `Proxy`代理器，允许开发者拦截并自定义对象的基本操作，从而实现对语言层面的编程

```js
const obj = {
  name: "Tom",
  sex: "男",
  age: 20,
};
const proxyForObj = new Proxy(obj, {
  get(target, property) {
    console.log("正在读取属性：" + property);
    return target[property];
  },
  set(target, property, value) {
    console.log("正在设置属性：" + property + "=" + value);
    target[property] = value;
  },
});

proxyForObj.name = "Jerry"; // 在设置属性：name=Jerry
console.log(proxyForObj.name); // 正在读取属性：name
```

- `Proxy`可设置拦截的 方法多达 13 种
  - `get(target, propKey, receiver)` : 属性读取
  - `set(target, propKey, value, receiver)`：属性值设置
  - `has(target, propKey)`：拦截 propKey in proxy 的操作，返回一个布尔值
  - `deleteProperty(target, propKey)`：属性删除
  - `ownKeys(target)`：
  - `getOwnPropertyDescriptor(target, propKey)`：属性的描述对象
  - `defineProperty(target, propKey, propDesc)`：
  - `preventExtensions(target)`：
  - `getPrototypeOf(target)`：
  - `isExtensible(target)`：
  - `construct(target, args)`：
- `Proxy`应用场景

  - **实现私有变量**
  - **性能检测**：对于调用频繁，运行缓慢或占用资源较多的接口，拦截 apply 拦截函数的调用从而实现性能检测

  ```js
  function doSomething() {
    for (let i = 0; i < 100000000; i++) {
      //
    }
    console.log("程序调用完成");
  }
  const proxyFunction = new Proxy(doSomething, {
    apply: function (target, thisArg, argumentsList) {
      const startTime = performance.now(); // 记录程序开始时间 浏览器环境中才有performance
      const result = Reflect.apply(target, thisArg, argumentsList);
      const executionTime = performance.now() - startTime;
      console.log("程序执行时间：" + executionTime + "毫秒");
      return result;
    },
  });
  proxyFunction();
  // 程序调用完成
  // 程序执行时间：79.79999995231628毫秒
  ```

  - **链式调用**: 拦截方法后返回代理对象，从而实现链式调用

  ```js
  const Chainable = function (obj) {
    return new Proxy(obj, {
      get(target, prop) {
        if (prop in target) {
          if (typeof target[prop] === "function") {
            return (...args) => {
              target[prop](...args);
              return Chainable(target);
            };
          }
          return Chainable(target[prop]);
        }
        throw new Error(`Property ${prop} not found`);
      },
    });
  };
  class MyNumber {
    constructor(value) {
      this.value = value;
    }
    add(n) {
      this.value += n;
    }
    times(t) {
      this.value = this.value * t;
    }
    getValue() {
      console.log(this.value);
    }
  }

  const n = new MyNumber(0);
  const proxyN = Chainable(n);
  proxyN.add(10).times(3).getValue(); // 30
  n.add(10).times(3).getValue(); // times is undefined
  ```

  - **只读模式**：拦截属性 set 和 delete，防止属性修改或者删除从而实现只读模式
  - **数据校验**：拦截 set，保证设置的值符合规则才会被赋值
  - **数据双向绑定**：
  - **缓存机制**：
