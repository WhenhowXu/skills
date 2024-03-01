### 基础知识

### 进阶

### 问题汇总

- ts 文件中找不到模块

  - 问题：

  ```
  找不到模块“./App.vue”或其相应的类型声明
  ```

  - 解决：

  ```ts
  // vite-env.d.ts
  declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  ```
- .vue文件中提示组件无默认导出：用`Volar`代替`Vetur`