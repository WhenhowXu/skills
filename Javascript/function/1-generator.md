- 生成器函数, 可以通过 yield 关键字，把函数的执行流挂起，为改变执行流程提供了可能，从而为异步编程提供解决方案
- Generator 函数不会像普通函数一样立即执行，而是返回一个指向内部状态对象的指针

```js
function* generatorFn() {
  console.log("one");
  yield "1";
  console.log("two");
  yield "2";
  console.log("three");
  yield "3";
}
const f = generatorFn();
f.next(); // one, {value:'1',done: false}
f.next(); // two, {value:'2',done: false}
f.next(); // three, {value:'3',done: false}
f.next(); // {value:undefined,done: true}
```

- 当 `next` 传入参数的时候，该参数会作为上一步 yield 的

```js
function* generatorFn() {
  console.log("start");
  let p1, p2, p3;
  p1 = yield "1";
  console.log("one:" + `p1:${p1},p2:${p2},p3:${p3}`);
  p2 = yield "2";
  console.log("tow:" + `p1:${p1},p2:${p2},p3:${p3}`);
  p3 = yield "3";
  console.log("three:" + `p1:${p1},p2:${p2},p3:${p3}`);
}
const f = generatorFn();
f.next(); // start, {value:'1',done: false}
f.next(10); // one:p1:10,p2:undefined,p3:undefined, {value:'2',done: false}
f.next(); // two:p1:10,p2:undefined,p3:undefined, {value:'3',done: false}
f.next(); // three:p1:10,p2:undefined,p3:undefined {value:undefined,done: true}
```

- return 方法返回给定值，并结束遍历 Generator 函数

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}
const f = foo();
f.return(); // {value: undefined, done: true}
f.return("123"); // // {value: '123', done: true}
```

- 生产器函数优点

  - **延迟执行**：节省内存和提高性能
  - **无线序列**：用来创建无限序列（如斐波那契数列或素数序列）
  - **异步编程**：用来实现异步编程

  ```js
  function fetchData(data, delay = 1000, isSuccess = true) {
    return new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        isSuccess ? resolve(data) : reject(data);
        clearTimeout(timer);
      }, delay);
    });
  }

  function* asyncFunction() {
    try {
      const result1 = yield fetchData("张三失败了", 500, false);
      console.log(result1);
      const result2 = yield fetchData("李四成功了");
      console.log(result2);
    } catch (error) {
      console.log(error);
    }
  }

  const g = asyncFunction();
  const p = g.next().value;

  p.then((result) => {
    return g.next(result).value;
  })
    .then((result) => {
      return g.next(result).value;
    })
    .catch((error) => {
      g.throw(error);
    });
  ```

- **迭代器**：用来创建迭代器
- **协程**：实现更高级的并发和并行编程

```

```
