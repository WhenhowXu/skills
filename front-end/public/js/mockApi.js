/**
 * mockApi 模拟异步请求
 * @param {*} data 返回结果
 * @param {*} isSuccess 是否成功
 * @param {*} delay 耗时
 * @returns ()=> promise实例
 */
module.exports = function mockApi(
  data,
  { isSuccess = true, delay = 1000 } = {}
) {
  return () =>
    new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        isSuccess
          ? resolve({ data, code: 0, message: "success" })
          : reject({ data, code: -1, message: "error" });
        clearTimeout(timer);
      }, delay);
    });
};
