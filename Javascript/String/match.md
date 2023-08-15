### match

> 用于确定原字符串是否匹配某个子字符串

- 返回值：如果匹配返回匹配成员的数组，否则返回 null, 含 index 和 input 属性，index 只匹配项开始索引，input 为原字符串

```js
const s = "Apple, Banana, Apple";
const matches = s.match("Apple");
console.log(s.match("apple")); // null
console.log(matches);
```

### search

> 用法基本等同于 match，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回-1
