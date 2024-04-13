/**
 * 惰性函数
 * 1、延迟计算：只有函数结果需要的时候，才会执行计算
 * 2、结果缓存：一旦计算得到结果，就会被缓存起来，以后继续使用不需要再重复计算
 *
 * 应用场景：
 * 1、资源密集型任务：如文件读取、网络请求等
 * 2、复杂计算：对于需要花费大量时间才能完成的计算，使用惰性函数可以避免重复计算，提高程序的性能
 * 3、无限序列生成：在生成无限序列（如斐波那契数列）时，使用惰性函数可以确保只生成需要的部分，而不是一次性生成整个序列
 * 缺点：
 * 1、内存占用：如果缓存结果很大，可能会导致内存占用过高
 * 2、线程安全性：函数在多线程环境中被多个线程同时调用，可能会导致数据不一致的问题
 * 3、代码可读性：使用惰性函数可能会使代码的逻辑变得复杂，降低代码的可读性
 *
 */

// 模拟一个计算密集型操作
function computedExpensiveOperation(numberValue) {
  const startTime = Date.now();
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += i;
  }
  const endTime = Date.now();
  console.log(
    `computedExpensiveOperation 执行时间：${endTime - startTime} 毫秒`
  );
  return numberValue + result;
}
// 执行内容一
function executeContent1() {
  console.log("执行内容一");
}
// 执行内容二
function executeContent2() {
  console.log("执行内容二");
}
function doSomething() {
  const result = computedExpensiveOperation(0);
  if (result > 500) {
    executeContent1();
    return;
  }
  executeContent2();
}
// 如果不做任何改造，每次执行doSomething方法都会执行一次判断操作
doSomething();
doSomething();

// 惰性函数思维改造
function doSomethingLazy() {
  const result = computedExpensiveOperation(0);
  if (result > 500) {
    doSomethingLazy = executeContent1;
    doSomethingLazy();
    return;
  }
  doSomethingLazy = executeContent2;
  doSomethingLazy();
}

doSomethingLazy();
doSomethingLazy();
