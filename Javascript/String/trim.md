- 1、使用`replace`去掉字符串首尾空格

```js
String.prototype.myTrim = function () {
  return this.replace(/^[\s]+ | [\s]+$/g, "");
};
const s = "   Hello,    123!   ";
s.myTrim(); // "Hello,    123!"
```

- 2、`String.trim()`
