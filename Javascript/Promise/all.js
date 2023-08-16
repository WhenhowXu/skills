const mockApi =
  (data = null, { delay = 1000, isSuccess = true } = {}) =>
  () =>
    new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        isSuccess
          ? resolve({ data, code: 0, message: "成功了" })
          : reject({ data, code: -1, message: "失败了" });
        clearTimeout(timer);
      }, delay);
    });

const p1 = mockApi("张三", { delay: 500, isSuccess: false });
const p2 = mockApi("李四", { delay: 1000, isSuccess: false });

Promise.all([p1(), p2()])
  .then((res) => {
    console.log("then:", res);
  })
  .catch((err) => {
    console.log("catch:", err);
  })
  .finally(() => {
    console.log("finally:");
  });
