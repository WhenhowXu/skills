function mockApi(data, isSuccess = true, delay = 1000) {
  return () =>
    new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        isSuccess ? resolve(data) : reject(data);
        clearTimeout(timer);
      }, delay);
    });
}

let fn1 = mockApi("张三成功了");
let fn2 = mockApi("李四失败了", false, 2000);
fn1()
  .then((res) => {
    console.log("then:" + res);
  })
  .catch((error) => {
    console.log(error);
  });
fn2()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("error:" + error);
  });

const mockAll = async () => {
  const res = await fn1(),
    res2 = await fn2();
  console.log("mockAll:", res, res2);
};
mockAll().catch((error) => {
  console.log("3:", error);
});
