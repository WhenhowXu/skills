### Promises 是什么

- Promise 如今已成为 JavaScript 异步编程的一个标准
- Promise 是一个构造函数
- 执行 new Promise()会返回一个 Promise 对象，该对象有三个状态`pendding、fullfilled、rejected`
- Promise 一旦触发，就无法终止

### Promise 解决了什么问题

- 异步编程代码层层嵌套的问题`回调地狱`
- 解决回调函数不能使用 return 问题
- 链式调用，代码更加容易维护

### 回调地狱

> Promise 出现前，异步编程需要通过回调函数的形式处理拿到异步结果进行进一步的操作，如果这个操作也是异步请求，就需要一层层的嵌套下去

```js
$.ajax({
  type: "GET",
  url: "/login",
  success: function (res) {
    // 登录成功回调函数内部，发送第二个 AJAX 请求获取数据
    $.ajax({
      type: "GET",
      url: "/list",
      success: function (res) {
        console.log(res);
      },
      error: function (xhr) {
        console.log(xhr.status);
      },
    });
  },
  error: function (xhr) {
    console.log(xhr.status);
  },
});
```

### Promise.all 的使用

> `Promise.all(promises[])`

- promise[] 都成功，最后一个返回后执行 then 的逻辑，然后执行 finally，finallyArg 为[]
- promise[] 有一个失败，直接执行 catch, catchArgs 为失败的一个结果，finallyArg 为[]

```js
const generatePromise = ({ isSuccess = true, msg, delay = 500 } = {}) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      isSuccess ? resolve(msg + "成功") : reject(msg + "失败");
    }, delay);
  });
let p1 = generatePromise({ isSuccess: true, msg: "1" });
let p2 = generatePromise({ isSuccess: true, msg: "2" });
let p3 = generatePromise({ isSuccess: true, msg: "3", delay: 3000 });
Promise.all([p1, p2, p3])
  .then((...thenArgs) => {
    console.log(thenArgs, "-------------then");
  })
  .catch((...catchArgs) => {
    console.log(catchArgs, "-------------catch");
  })
  .finally((...finallyArgs) => {
    console.log(finallyArgs, "-------------finally");
  });
```

### Promise.all 的使用

> `Promise.race(promises[])`

- promise[] 都成功，有一个成功后就会执行 then, thenArgs 为第一个成功的结果， finallyArg 为[]
- promise[] 有一个失败，直接执行 catch, catchArgs 为失败的一个结果，finallyArg 为[]
- 异步调用不会终止，会继续发送请求

```js
const generatePromise = ({ isSuccess = true, msg, delay = 500 } = {}) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      console.log(msg + "执行");
      isSuccess ? resolve(msg + "成功") : reject(msg + "失败");
    }, delay);
  });
let p1 = generatePromise({ isSuccess: false, msg: "1" });
let p2 = generatePromise({ isSuccess: false, msg: "2" });
let p3 = generatePromise({ isSuccess: true, msg: "3", delay: 3000 });
Promise.race([p1, p2, p3])
  .then((...thenArgs) => {
    console.log(thenArgs, "-------------then");
  })
  .catch((...catchArgs) => {
    console.log(catchArgs, "-------------catch");
  })
  .finally((...finallyArgs) => {
    console.log(finallyArgs, "-------------finally");
  });
```

### [如何实现一个Promise]