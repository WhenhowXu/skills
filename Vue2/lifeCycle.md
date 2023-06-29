### 生命周期

- `beforeCreate` 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用
- `created` 在实例创建完成后被立即同步调用，配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，且 $el property 目前尚不可用
- `beforeMount` 在挂载开始之前被调用：相关的 render 函数首次被调用
- `mounted` 实例被挂载后调用，不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick
- `beforeUpdate` 在数据发生改变后，DOM 被更新之前被调用
- `updated` 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用，不会保证所有的子组件也都被重新渲染完毕
- `beforeDestroy` 实例销毁之前调用
- `destroyed` 实例销毁后调用

- `errorCaptured` 在捕获一个来自后代组件的错误时被调用，此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播
- `activated` 被 keep-alive 缓存的组件激活时调用
- `deactivated` 被 keep-alive 缓存的组件失活时调用

### 服务渲染不被调用的函数

- `beforeMount`
- `mounted`
- `beforeUpdate`
- `updated`
- `activated`
- `deactivated`

### 执行顺序

- 初始化流程

```js
parent beforeCreate
parent created
parent beforeMount
child beforeCreate
child created
child beforeMount
<!-- 不保证mounted执行顺序 -->
child mounted
parent mounted
```

- 更新流程

```js
parent beforeUpdate
child beforeUpdate
<!-- 不保证updated执行顺序 -->
child updated
parent updated
```

### 注意

- 可以在`created、beforeMount、mounted`三个生命周期中调用异步请求，推荐在 created 中，因为其它两周个在服务渲染中不会被调用
