### mixin(混入)

- 全局混入，慎用全局混入，因为他会影响每个创建的 Vue 实例

```js
Vue.mixin({
  create() {
    console.log("123");
  },
});
```

- 当组件和混入对象含有同名选项时，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先