## join

- 语法：`arr.join(separator)`
  - separator: 分隔符，默认为`,`
- 返回值：以分隔符拼接好的字符串
- 原数组不变

```js
const arr = [1, 2, 3];
const s1 = arr.join();
const s2 = arr.join("-");
console.log(s1); // 1,2,3
console.log(s2); // 1-2-3

const arr1 = [1, 2, [5, 6]];
arr1.join("_"); // 1_2_5,6
```
