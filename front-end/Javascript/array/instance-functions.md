- `push`：末尾追加

  - 语法：`arr.push(item1, ...,itemX)`
  - 返回值：数组长度
  - 原数组改变

    ```js
    const arr = [1, 2, 3];
    const l = arr.push("a", "b");
    console.log(l); // 5
    console.log(arr); // [1,2,3, 'a', 'b'];
    ```

---

- `pop`：删除最后一项
  - 语法：`arr.pop()`
  - 返回值：被删除项
  - 原数组改变

```js
const arr = [1, 2, "a"];
const l = arr.pop();
console.log(l); // 'a'
console.log(arr); // [1,2]
```

--

- `unshift`：首尾前添加
  - 语法：`arr.unshift(item1, ..., itemX)`
  - 返回值：数组长度
  - 原数组改变
- `shift`：删除第一项
  - 语法：`arr.shift()`
  - 返回值：被删除项
  - 原数组改变
- `concat`：拼接
  - 语法：`arr.concat(item1, ..,itemX)`
  - 拼接项数组会被展开添加进去，否则直接拼接进去
  - 返回值：拼接后的新数组
  - 原数组不变

---

- `slice`：截取
  - 语法：`arr.slice(start, end)`
    - start: 可选，从何处开始取，可为负数（表示倒数第几个开始取）
    - end: 可选，何处结束，不包含结束位置
  - 返回值：原数组
  - 原数组不变

---

- `splice`：嫁接

---

- `includes`：是否包含

```js
const obj = { a: "KKK" };
const arr = [obj, 1, undefined, null, "", 0, "a", NaN];
const arr2 = [obj, 1, null, "", 0, "a"];

console.log(arr.includes(obj)); // true
console.log(arr.includes(undefined)); // true
console.log(arr.includes(NaN)); // true
console.log(arr2.includes(undefined)); // false
console.log(arr.includes(null)); // true
console.log(arr.includes(0)); // true
console.log(arr.includes("a")); // true
```

---

- `join`：拼接成字符串
  - 语法：`arr.join(separator)`
  - separator: 分隔符，默认为`,`
  - 返回值：以分隔符拼接好的字符串
  - 原数组不变

---

- `filter`：过滤
- `sort`：排序
- `find`：查找符合条件的一项，返回该项
- `findIndex`：查找符合条件的一项，返回该项下标
- `reduce | reduceRight`：归纳
- `indexOf | lastIndexOf`：
- `some`：是否有符合条件项
- `every`：是否每一项都符合

---

- `reverse`：颠倒顺序
  - 语法：`arr.reverse()`
  - 返回值：原数组
  - 原数组改变

---
