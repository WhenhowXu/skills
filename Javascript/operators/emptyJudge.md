### `a ?? b`

> 左边的值为 undefined 或者 null 是才会返回右边的值

```js
undefined ?? "a"; // a
null ?? "a"; // a
0 ?? "a"; // 0
"" ?? "a"; // ''
false ?? "a"; // false
NaN ?? "a"; // NaN
```
