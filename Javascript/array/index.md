# 基本方法

### at

`at(index)`: 返回对应索引位置的项，index 为负数则从末尾开始匹配

```js
const arr = ["1", "3", "a", 5];
let item1 = arr.at(-1); // 5
let item2 = arr.at(1); // '3'
let item3 = arr.at(10); // undefined
```

### concat(数组拼接)

`concat(...args)`: 将数组拼接组成新数组，参数可以是数组也可以是单独的值

- 返回值：拼接的新数组
- 原数组：不变

```js
let m = [1, 2];
let n = m.concat([1, 23], undefined, "a", [{ b: "John" }]);
```

### copyWithin

`copyWith(targetIndex, startIndex?, endIndex?)`: 从数组的指定位置拷贝元素到数组的另一个指定位置中

- startIndex 和 endIndex 指定复制对象
- targetIndex 指定复制对象放置位置

```js
let a = ["a", "b", "c", "d"];
a.copyWith(2);
```

### entries：方法返回一个数组的迭代对象

```js
let arr = [1, 2, 3];
let ens = arr.entries();
ens.next(); // {value: [0,1], done: false}
ens.next(); // {value: [1,2], done: false}
ens.next(); // {value: [2,3], done: false}
ens.next(); // {value: undefined, done: true}
```

### fill

`fill(value, startIndex, endIndex)`: 用固定值填充数组

- 不包含 endIndex 所在索引，endIndex 为负数则从末尾开始
- 原数组：改变

```js
let a1 = [1, 2, 3, 4];
a1.fill("a"); // ['a', 'a', 'a', 'a']

let a2 = [1, 2, 3, 4];
a2.fill("a", 0, 2); // ['a', 'a', 3, 4]

let a3 = [1, 2, 3, 4];
a3.fill("a", 0, -1); // ['a', 'a', 'a', 4]
```

### filter

`filter(callback)`: 过滤返回结果为 true 的值，组成新数组返回

### find findIndex findLast findLastIndex

`find(callback)`:

- 返回值：回调计算记过为 true 的项，未匹配返回 undefined
- 找到匹配项会跳出当前循环
- 不改变原数组
  `findIndex(callback)`
- 返回值：返回回调计算记过为 true 的项的索引，未匹配返回-1
- 找到匹配项会跳出当前循环
- 不改变原数组
  > findlast 和 findLastIndex 只是匹配方向不一样

### flat flatMap

`flat(depth)`：数组扁平化，递归遍历将数组和子数组的项组成新数组返回

- 返回：新数组
- 原数组：改变

`flatMap(callback)`: 相当于`map(callback).flat(1)`

### forEach

`forEach(callbackFn(currentValue, index, arr), thisValue)`

- 返回值：无
- 原数组：不改变
- 无法 continue\break 跳出循环

```js
const arr = [1, 2, 3, 4, 5];
let r = arr.forEach((value, index, array) => {
  if (value === 2) {
    return;
  }
  console.log(value, index, array);
});
```

### includes 判断数组中是否包含某项
`includes(searchItem, formIndex)`
- formIndex: 为查找开始索引
- 返回值：true/false
```js
const arr = [1, undefined, "", 0, NaN, null, false];
arr.includes(1) // true
arr.includes(1, 0) // true
arr.includes(1, 1) // false
arr.includes(undefined) // true
arr.includes(NaN) // true
arr.includes(null) // true
arr.includes(false) // true
arr.includes('') // true
```

### indexOf lastIndexOf 查询数组某一项的索引，匹配不到则返回-1
`indexOf`
```js
```

### join

### keys vakues

### map

### unshift push shift pop

### reduce reduceRight

### reverse

### slice

### some every

### sort

### splice

### toLocalString

### toRevered toSorted toSpliced

### toString

# 常见问题

数组排序算法
