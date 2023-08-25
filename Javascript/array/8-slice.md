## slice

- 语法：`arr.slice(start, end)`
  - start: 可选，从何处开始取，可为负数（表示倒数第几个开始取）
  - end: 可选，何处结束，不包含结束位置
- 返回值：原数组
- 原数组不变

---

- `arr.slice()`: 不填参数用于数组浅拷贝

```js
const arr = [10, 9, 8, 7, 6, true, 0, -3];
const a1 = arr.slice(3, 4);
const a2 = arr.slice(-2, 7); // [0];
```
