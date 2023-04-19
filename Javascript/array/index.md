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
arr.includes(1); // true
arr.includes(1, 0); // true
arr.includes(1, 1); // false
arr.includes(undefined); // true
arr.includes(NaN); // true
arr.includes(null); // true
arr.includes(false); // true
arr.includes(""); // true
```

### indexOf lastIndexOf 查询数组某一项的索引，匹配不到则返回-1

`indexOf(searchItem, startIndex)`

- lastIndexOf 只是查找是从右侧开始

```js
const arr = [1, "", undefined, null, {}, NaN, true];
console.log(arr.indexOf(1)); // 0
console.log(arr.indexOf(undefined)); // 2
console.log(arr.indexOf(undefined, 2)); // 2
console.log(arr.indexOf(undefined, 3)); // -1
console.log(arr.indexOf(null)); // 3
console.log(arr.indexOf({})); // -1
console.log(arr.indexOf(NaN)); // -1
console.log(arr.indexOf(true)); // 6
```

### join 将数组拼接成字符串

`join(separator)`

- separator 默认是逗号

```js
const arr = [undefined, 1, "a", false, null, { k: 1 }, NaN];
arr.join(); // ',1,a,false,,[object Object],NaN'
```

### keys vakues

> 返回由键和键值组成的迭代器 Iterator

### map 映射

`array.map(function(currentValue,index,arr), thisValue)`

```js
const arr = [1, 2, 3, 4, 5];
let obj = {};
let newArr = arr.map((v) => {
  obj[v] = v;
  return v + 10;
}, obj);
console.log(obj); // {1: 1, 2: 2, 3: 3, 4: 4, 5: 5}
console.log(newArr); // [11, 12, 13, 14, 15]
```

### unshift push shift pop

`unshift(item1,item2,...)`:向数组起始位置添加一个或多个元素

- 返回值: 数组长度
  `push(item1,item2,...)`:向数组末尾添加一个或多个元素
- 返回值：数组长度
  `shift()`:删除第一个元素
- 返回值：被删除项
  `pop()`:删除最后一个元素
- 返回值：被删除项

```js
const arr = [1, 2, 3, 4];
let m = arr.unshift("a", "b");
console.log(m); // 6
let n = arr.unshift("f", "e");
console.log(n); // 8
let j = arr.shift();
console.log(j); // 'a'
let k = arr.pop();
console.log(k); // 'e'
```

### reduce reduceRight 归纳

`reduce(function(total, currentValue, currentIndex, arr), initialValue)`:将一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值

- 可以作为一个高阶函数，用于函数的 compose

```js
const arr = [1, 2, 3, 4];
let sum = arr.reduce((cur, total) => {
  return cur + total;
}); // 10
```

### reverse 颠倒数组顺序

- 原数组：改变

```js
const arr = [1, 2, 3, 4];
let nArr = arr.reverse();
console.log(nArr); // [4,3,2,1]
console.log(arr); // [4,3,2,1]
nArr === arr; // true
```

### slice 提取数组上某一部分组成新数组

`slice(startIndex, endIndex)`

- 不包含 endIndex 对应位置的元素

```js
const arr = [1, 2, 3, 4];
const p = arr.slice(1, 3); // [2,3]
const k = arr.slice(); // [2,3,4]
const j = arr.slice(); // [1,2,3,4]
```

### some every

`some(function(currentValue,index,arr),thisValue)`: 有一个满足条件则返回 true,否则返回 false

- 找到满足条件的项会跳出当前循环
  `every(function(currentValue,index,arr),thisValue)`: 都满足条件则返回 true,否则返回 false

```js
const arr = [1, 2, 3, 4];
const p = arr.some((v) => {
  console.log(v);
  return v > 2;
});
```

### sort 排序

`sort(sortfunction)`

- 原数组：改变

```js
const arr = [10, "Z", "b", "a", "A", 3, 4];
arr.sort(); // [10, 3, 4, 'A', 'Z', 'a', 'b']
const arr1 = [3, 10, 1, 100];
arr1.sort((a, b) => a - b); // [1, 3, 10, 100]
```

### splice

### toLocalString

### toRevered toSorted toSpliced

### toString

# 常见问题

数组排序算法
