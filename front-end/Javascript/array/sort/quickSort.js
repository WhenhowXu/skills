function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [1, 19, 1, 4, "4", 100, 12, 33];
const sortedArr = quickSort(arr);
console.log(arr); // [1,   19,  1,  4,'4', 100, 12, 33 ]
console.log(sortedArr); // [1,  1,  4,  '4',12, 19, 33, 100]
