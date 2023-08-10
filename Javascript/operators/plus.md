- 两个数值求和

```js
console.log(true + true); // 2
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
```

- 字符串拼接

```js
console.log(1 + "a"); // '1a'
console.log(false + "a"); // 'falsea'
console.log([1, 2, 3] + 1); // '1,2,31'
```

- 加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）

```js
console.log("3" + 4 + 5); // '345'
console.log(3 + 4 + "5"); // '75'
```

- 对象的相加，先执行 valueOf 然后 toString 参与运算
