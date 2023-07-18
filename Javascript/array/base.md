### Array 对象上的方法

- concat
- copyWith
- entries
- fill
- filter
- find
- findIndex
- forEach

- indexOf
- lastIndexOf
- includes
- every
- some
- push
- pop
- unshift
- shift
- reverse
- map
- reduce
- reduceRight
- fillWith
- slice
- splice
- sort
- flat
- flatMap
- of
  > 将一组值转换为数组

### Array.prototype 上的方法

- at
- concat
- constructor
- copyWithin

  > 数据拼接 `array.copyWithin(target, start,end)`
  > 原数组改变，返回操作数组

  ```js
  const arr = [1, 2, 3, 4, 5, 6];
  arr.copyWithin(3, 0, 3); // [1,2,3,1,2,3]
  const arr1 = [1, 2, 3, 4, 5, 6];
  arr1.copyWithin(2, 3); // [1,2,4,4,5,6]
  ```

- entries
- every
- fill
- filter
- find | findLast
- findIndex | findLastIndex
- flat
- flatMap
- flatten
- forEach
- includes
- indexOf | lastIndexOf
- join
- keys | values
  > 返回键值 | 值可迭代对象

```js
const arr = [1, "a"];
const keyIterator = arr.keys();
keyIterator.next(); // {value: 1,done:false}
keyIterator.next(); // {value: 'a',done:false}
keyIterator.next(); // {value: undefined,done:true}
```

- map
- shift | pop
- reduce | reduceRight
- reverse 反转
- slice
- some
- sort
- splice
- toReversed
- toSorted
- toSpliced
- toString
- unshift | push
- with
