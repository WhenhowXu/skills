- 语法：`str.replace(regexp|subStr, newSubStr|function)`

  - 返回值：替换后的字符串
  - `regexp`：匹配正则
  - `subStr`：匹配的字符串
  - `newSubStr`: 特殊模式，或者新的替换的字符串

  ```js
    // $& 与正则相匹配的字符串
    let str = "Test <<Blue>> Hello!";
    str.replace(/blue/i, '8$&8'); // 'Test <<8Blue8>> Hello!'
    // $' 匹配字符串右边字符
    str.replace(/blue/i, "$'"); // 'Test <<>> Hello!>> Hello!'
    // $` 匹配字符串右边的字符
    str.replace(/blue/i, "$`"); // 'Test <<Test <<>> Hello!'

  ```

  - `function`：替换处理函数

```js
let str = "Mr Blue has a blue house and a blue car";
// 全局替换
let str1 = str.replace(new RegExp("blue", "g"), "red"); // Mr Blue has a red house and a red car
let str2 = str.replaceAll("blue", "red"); // "Mr Blue has a red house and a red car"
```

### 进阶

- 模板替换

```js
const replaceTemplate = function (data) {
  const template = `你好，我叫{{name}}，今年{{age}}岁了，来自{{address}}`;
  return template.replace(/{{(\w+)}}/g, (matchStr, execStr, index, str) => {
    console.log(matchStr, execStr, index, str);
    return data?.[execStr];
  });
};
console.log(replaceTemplate({ name: "张三", age: 20, address: "湖北武汉" })); // 你好，我叫张三，今年20岁了，来自湖北武汉
```

- 关键字高亮
