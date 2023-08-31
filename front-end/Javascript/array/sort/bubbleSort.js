// 冒泡排序

function bubbleSort(arr) {
  const l = arr.length;
  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
const arr1 = [1, 2, 0, 10, 4, "4", 100, 50, 43];
bubbleSort(arr1);
console.log(arr1); // [ 0,  1,  2,  4,   '4', 10, 43, 50, 100 ]
