- 发起多个 API 异步获取数据，`async & await` 使我们更简洁地表达这种逻辑，并完成更易读和可维护的代码
- `async` 函数返回的是 Promise 实例

```js
const mockAll = async () => {
  const res = await fn1(),
    res2 = await fn2();
  console.log("mockAll:", res, res2);
};
mockAll().catch((error) => {
  console.log("3:", error);
});
```

- `await` 标识等待一个异步请求完成
- `async & await`需要配套使用
- `async & await` 的优势在于处理 `then` 链, 让业务逻辑看起和同步逻辑一样
- 当下一步的异步依赖上一步的请求结果，使用`async & await`处理起来很方便，代码也更加简洁

```js
const mockAll = async () => {
  const res1 = await fn1(),
    res2 = await fn2(res1),
    res3 = await fn3(res2);
  console.log("mockAll:", res, res2);
};
mockAll()
  .then((responses) => {
    console.log("then:", responses);
  })
  .catch((error) => {
    console.log("3:", error);
  });
```

- `async & await`可以看成是 promise 的语法糖
