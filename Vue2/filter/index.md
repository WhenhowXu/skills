### 全局过滤器

```js
Vue.filter("numberFormat", (value, precision = 0) => {
  if (typeof value === "string") {
    let n = Number(value);
    return isNaN(n) ? "--" : n.toFixed(precision);
  } else if (typeof value === "number") {
    return value.toFixed(precision);
  } else {
    return "--";
  }
});

<p>{{ number1 | numberFormat(2) }}</p>
<p>{{ number2 | numberFormat(4) }}</p>
```

### 组件内部过滤器
```vue
<template>
  <div>
    <p>{{ "张三" | emptyFormat }}</p>
    <p>{{ undefined | emptyFormat }}</p>
    <p>{{ "李四" | undefinedFormat | emptyFormat }}</p>
  </div>
</template>
<script>
export default {
  name: "FilterDemoPage",
  filters: {
    emptyFormat(text) {
      return text ?? "--";
    },
    undefinedFormat() {
      return undefined;
    },
  },
  data() {
    return {
      number1: 1000,
      number2: "9001.99055",
    };
  },
};
</script>
```
