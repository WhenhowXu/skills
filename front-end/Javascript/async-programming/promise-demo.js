function mockApi(name, isSuccess = true, delay = 1000) {
  return () =>
    new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        console.log(name + "执行了");
        isSuccess ? resolve(name + "成功了") : reject(name + "失败了");
        clearTimeout(timer);
      }, delay);
    });
}

const api1 = mockApi("李四", true, 1000),
  api2 = mockApi("钱七", true, 2000),
  api3 = mockApi("张三丰", true, 3000),
  apiFailed1 = mockApi("西波莉莉", false, 1000),
  apiFailed2 = mockApi("佐罗", false, 2000),
  apiFailed3 = mockApi("乐可", false, 3000);
// 一般调用
apiFailed1()
  .then((res) => {
    console.log("成功才会执行：", res);
  })
  .catch((error) => {
    console.log("失败才会执行：", error);
  })
  .finally(() => {
    console.log("不管成功还是失败都会执行");
  });

// Promise.all
Promise.all([api1(), api2(), api3()]).then((values) => {
  console.log("Promise.all异步都成功了：", values);
});
Promise.all([api1(), apiFailed2(), api3]).catch((error) => {
  console.log("Promise.all异步有失败的：", error);
});

// Promise.race
Promise.race([apiFailed1(), apiFailed2()]).catch((error) => {
  console.log("Promise.race: 第一个最先执行完的异步失败了，执行catch", error);
});
Promise.race([api1(), apiFailed2()]).then((response) => {
  console.log("Promise.race: 第一个最先执行完的成功了，执行then", response);
});
