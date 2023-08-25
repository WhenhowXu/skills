## unshift

- 语法：`arr.unshift(item1, ..., itemX)`
- 返回值：数组长度
- 原数组改变

```js
const arr = [1, 2, "a"];
const l = arr.unshift("k", true);
console.log(l); // 5
console.log(arr); // ['k', true, 1, 2，'a']
```
