### `??`

> 左边的值为 undefined 或者 null 是才会返回右边的值

```js
undefined ?? "a"; // a
null ?? "a"; // a
0 ?? "a"; // 0
"" ?? "a"; // ''
false ?? "a"; // false
NaN ?? "a"; // NaN
```

### `?.` 可选链

- `a?.b` a 为 undefined 或者 null 时 取值不报错
- `a?.fn?.()` 函数安全调用

```js
// 取值
res && res.data && res.data.resultData;
// 借助lodash
_lodash.get(res, "data.resultData");
// ?.
res?.data?.resultData;

// 函数调用
const obj = {
  name: "Tom",
  say: function () {
    console.log(this.name);
  },
};
obj?.say?.(); // Tome
obj?.fn?.(); // undefined
```
