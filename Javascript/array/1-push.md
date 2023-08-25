## push

- 语法：`arr.push(item1, ...,itemX)`
- 返回值：数组长度
- 原数组改变

```js
const arr = [1, 2, 3];
const l = arr.push("a", "b");
console.log(l); // 5
console.log(arr); // [1,2,3, 'a', 'b'];
```
