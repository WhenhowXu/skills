- Promise 含义
  - 它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。
- Promise 实例的三个状态

  - `pending`: 异步操作未完成
  - `fulfilled`: 异步操作成功
  - `rejected`: 异步操作失败
  - 一旦状态发生变化，就凝固了，不会再有新的状态变化

- 静态方法
  - `all`: 一次执行多个 promise 实例，都返回成功执行 then 的逻辑，只要一个失败执行，其它的将不再执行 catch
  - `race`: 竞赛，第一执行完的并且是成功则执行 then 逻辑，否则走 catch
- 实例方法

  - `then`:
  - `catch`:
  - `finally`:

- Promise A+ 规范
- 手写Promise
