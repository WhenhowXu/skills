class TaskControl {
  constructor({ tasks = [], limit = 6 } = {}) {
    this.leftTasks = tasks; // 剩余待执行任务个数
    this.limit = limit; // 同时并发处理异步任务个数
  }
  insertTask(task) {
    this.leftTasks.push(task);
  }
  wrapperTask(task) {
    return () => {
      console.log(task, "开始执行了");
      return task().finally(() => {
        if (this.leftTasks.length) {
          const nextTask = this.leftTasks.splice(0, 1)[0];
          this.wrapperTask(nextTask);
        }
      });
    };
  }
  start() {
    const firstTasks = this.leftTasks.slice(0, 6);
    this.leftTasks = this.leftTasks.slice(6);
    return Promise.all(firstTasks.map((task) => this.wrapperTask(task)));
  }
}

const taskInstance = [1, 2, 3, 4, 5, 6, 7, 8].map((v) => {
  return new Promise((resolve) => {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      resolve(`${v}执行成功了`);
    });
  });
});
