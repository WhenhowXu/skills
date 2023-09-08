- `call`: 改变函数 this，并调用

```js
function fn() {
  console.log(`this: ${this.name}`);
  console.log(`arguments: ${Object.values(arguments)}`);
}

fn(1, 2, 3, 4); // this: undefined arguments: 1,2,3,4
const obj = { name: "Tom" }; // this: Tom arguments: a,b
fn.call(obj, "a", "b");
fn(1, 2, 3, 4); // this: undefined arguments: 1,2,3,4
```

- `apply`: 改变函数 this，并调用，与 call 效果一致，只是参数改为了数组

```js
function fn() {
  console.log(`this: ${this.name}`);
  console.log(`arguments: ${Object.values(arguments)}`);
}

fn(1, 2, 3, 4); // this: undefined arguments: 1,2,3,4
const obj = { name: "Tom" }; // this: Tom arguments: a,b
fn.apply(obj, ["a", "b"]);
fn(1, 2, 3, 4); // this: undefined arguments: 1,2,3,4
```

- `bind`: 改变函数 this，返回新函数

```js
function fn() {
  console.log(`this: ${this.name}`);
  console.log(`arguments: ${Object.values(arguments)}`);
}

fn(1, 2, 3, 4); // this: undefined arguments: 1,2,3,4
const obj = { name: "Tom" }; // this: Tom arguments: a,b
const fnNew = fn.bind(obj, ["a", "b"]);
fnNew();
fnNew("c", "d");
fn(1, 2, 3, 4); // this: undefined arguments: 1,2,3,4
```
