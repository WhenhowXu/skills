- 语法`Object.defineProperty(obj, prop, descriptor) `

- `descriptor`

  - `configurable`:是否可被删除，默认 false
  - `enumerable`:是否可枚举，定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举，默认 false
  - `writable`:是否可以被修改，默认 false

  ```js
  const obj = { a: 1, b: "b" };
  Object.defineProperty(obj, "c", { value: true, writable: true });
  console.log(obj);
  obj.c = 33;
  console.log(obj);
  ```

  - `value `:初始值，默认 false
  - `get `: 取值
  - `set `: 赋值

  ```js
  // 写法一 configurable和enumerable都为false
  const obj = defineProperty({}, "name", {
    get: function () {
      return this.value;
    },
    set: function (value) {
      this.value = value;
    },
  });
  // 写法二  configurable和enumerable都为true 实际开发中写法二更常用
  const obj2 = {
    $n: 123,
    get p() {
      return this.$n;
    },
    set p(value) {
      this.$n = value;
    },
  };
  ```

- 不能同时设置 value、writable 与 get、set 的值
