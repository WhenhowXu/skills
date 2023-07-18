- `Set`

```js
const arr = [
  1,
  20,
  20,
  "",
  "",
  null,
  null,
  undefined,
  undefined,
  "a",
  "b",
  "b",
  false,
  false,
  true,
];
const removeDuplicate = (arr) => {
  return Array.isArray(arr) ? [...new Set(arr)] : arr;
};
removeDuplicate(arr); // [1, 20, '', null, undefined, 'a', 'b', false, true]
```

- 利用对象键值不能重复的特性

```js
const objRemoveDuplicate = (arr) => {
  let obj = {},
    _arr = [];
  arr.forEach((v) => {
    if (!obj[v]) {
      obj[v] = true;
      _arr.push(v);
    }
  });
  return _arr;
};
const arr = [
  1,
  20,
  20,
  "",
  "",
  null,
  null,
  undefined,
  undefined,
  "undefined",
  "a",
  "b",
  "b",
  "false",
  false,
  false,
  true,
];
objRemoveDuplicate(arr); // false和字符串'false'会出现问题
```

- indexOf | lastIndexOf
- includes
- filter
- reduce

```js
const reduceUnique = (arr) => {
  return Array.isArray(arr)
    ? arr.reduce((pre, cur) => {
        if (!pre.includes(cur)) {
          pre.push(cur);
        }
      }, [])
    : arr;
};
const arr = [1, 2, 3, 44, 2];
reduceUnique(arr);
```

- Map `Map.has()`
- `hasOwnProperty`
- 双 for 循环

```js
const forUnique = (arr) => {
  if (!Array.isArray(arr)) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
        }
      }
    }
    return arr;
  }
};
const arr = [10, 10, 2, "a", "12", "a"];
forUnique(arr);
console.log(arr); // [ 10, 2, 'a', '12' ]
```
