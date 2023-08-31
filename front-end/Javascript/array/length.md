- JavaScript 使用一个 32 位整数，保存数组元素个数，意味着数组成员最多只有 2 的 32 次方-1 个，且不能为负数

```js
const arr = [];
arr.length = Math.pow(2, 32); // Uncaught RangeError: Invalid array length
arr.length = Math.pow(2, 32) - 1; // 4294967295
arr.length = -1; //  Uncaught RangeError: Invalid array length
```

- 数组键名超出最大长度是，会自动转为字符串属性

```js
const arr = [];
let k = Math.pow(2, 32);
arr[k] = "test";
console.log(arr.length); // 0
console.log(arr[k]); // 'test'
```

- 数组 length 等于数组最大索引加 1

```js
const arr = [9];
arr[1000] = "a";
console.log(arr.length); // 1001
```

- length 是可写的，可以通过将数组长度设为 0 来清空数组
