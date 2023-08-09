### 基本数据类型

- number _(数字)_

```js
let n = 1; // 字面量申明
let m = new Number(1); // 创建Number的实力
n === m; // false
console.log(typeof n); // number
console.log(typeof m); // object
```

- string _(字符串)_

```js
let m = "123",
  n = new String(123);
```

- boolean _(布尔)_
- undefined _(未定义)_
- null _(空指针)_

```js
null == undefined; // true
null === undefined; // false
undefined === undefined; // true
null === null; // true
```

- symbol _(独一无二的值，最大的用法是用来定义对象的唯一属性名)_
  > Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到。

```js
let s1 = Symbol("o"),
  s2 = Symbol("o");
console.log(s1 === s2); // false

const sKey = Symbol("name");
let obj = {
  [sKey]: "ttttt",
  age: 12,
};
console.log(obj[sKey]); // 'ttttt'
Object.keys(obj); // ['age']
Object.getOwnPropertySymbols(obj); // [Symbol(name)]

// Symbol.for() 类似单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，如果有即返回该 Symbol 值，若没有则新建并返回一个以该字符串参数为名称的 Symbol 值，并登记在全局环境中供搜索
let s3 = Symbol("k");
let s4 = Symbol.for("k");
let s5 = Symbol.for("k");
s3 === s4; // false
s4 === s5; // true

// Symbol.keyFor 检测Symbol.for创建的symbol的描述字符串
let s5 = Symbol.for("j");
Symbol.keyFor(s5); // j
```

### 引用数据类型

- object _(对象)_
- function _(函数)_
- array _(数组)_
- date _(日期)_
- regexp _(正则)_
- bigint
