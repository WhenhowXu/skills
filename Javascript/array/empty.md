- 数组空位可读取，返回 undefined
- `delete`删除数组成员，会形成空位

```js
const arr = [1, 2, 3, 4, 5, "a"];
delete arr[5]; // (6)[1, 2, 3, 4, 10, 空白]
```

- 数组空位和 undefined 是不一样的，空位在使用 forEach | for in 循环遍历时会被跳过

```js
const arr = [, , ,];

arr.forEach((item, index) => {
  console.log(`${index}:${item}`);
}); // 不会打印任何内容
```
