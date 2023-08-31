function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

const arr = [4, "4", 5, 2, 7, 8];
console.log(selectionSort(arr)); // [ 2, '4', 4, 5, 7, 8 ] 改变了4和'4'的顺序
