# Slot (插槽)

### 基本用法

```vue
// Container
<template>
  <div>
    <!--默认插槽-->
    <slot text="kkkk"></slot>
  </div>
</template>

// 默认插槽
<template>
  <Container>
    <div>默认插槽</div>
  </Container>
</template>

// 默认插槽 传参
<template>
  <Container>
    <!-- 默认插槽 -->
    <template v-slot="slotProps">
      <div>{{ slotProps.text }}</div>
    </template>
    <template v-slot:default="slotProps">
      <div>{{ slotProps.text }}</div>
    </template>
    <template #default="slotProps">
      <div>{{ slotProps.text }}</div>
    </template>
    <!-- 用在div上会报错 -->
    <div v-slot="slotProps"></div>
  </Container>
</template>
```

### `v-slot`

- 可缩写为`#`
- 只能用在`template`和自定义标签上


- `slot-scoped`:2.6已废弃
- `slot`:2.6已废弃
- `scoped`:2.5已废弃
