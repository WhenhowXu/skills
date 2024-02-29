### 1、利用 Set 去重

```javascript
function uniqueArr(arr) {
  if (Array.isArray(arr)) {
    return [...new Set(arr)];
    // return Array.from(new Set(arr))
  } else {
    return arr;
  }
}
const arr = ["1", "2", "3", "a", "2", "2"];
const arr0 = uniqueArr(arr);
```

### 2、利用 includes 或 indexOf 去重

```javascript
function uniqueArr(arr) {
  if (Array.isArray(arr)) {
    const _arr = [];
    arr.forEach((item) => {
      if (!_arr.includes(item)) {
        _arr.push(item);
      }
      // 这里判断方式可以多重多样
      //   if (arr.indexOf(item) < 0) {
      //     _arr.push(item);
      //   }
    });
    return _arr;
  } else {
    return arr;
  }
}
const arr = ["1", "2", "3", "a", "2", "2"];
const arr0 = uniqueArr(arr);
```

### 利用 filter 方法去重

```js
function uniqueArr(arr) {
  if (Array.isArray(arr)) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
    return _arr;
  } else {
    return arr;
  }
}
```
