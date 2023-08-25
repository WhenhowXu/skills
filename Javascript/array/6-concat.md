## concat

- 语法：`arr.concat(item1, ..,itemX)`
  - 拼接项数组会被展开添加进去，否则直接拼接进去
- 返回值：拼接后的新数组
- 原数组不变

```js
const arr = [1, 2, 3];
const cArr = arr.concat(["a", ""], true); // [ 1, 2, 3, 'a', '', true ]
```
