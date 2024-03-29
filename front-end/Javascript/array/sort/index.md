- [冒泡排序](./bubbleSort.js)
  > 重复地比较相邻的元素，并将顺序错误的相邻元素交换位置
  - `优点`：实现简单，易于理解。稳定。
  - `缺点`：时间复杂度为 O(n^2)，在大规模数据排序中性能较差
- [选择排序](./selectionSort.js)
  > 选择排序是一种简单的排序算法，每次从未排序部分找到最小（或最大）的元素，然后放到已排序部分的末尾
  - `优点`：实现简单，对于小规模数据排序效果较好。
  - `缺点`：时间复杂度为 O(n^2)，不稳定（可能改变相等元素位置）
- [插入排序](./insertSort.js)
  > 将数组分为已排序和未排序两部分，初始时已排序部分只有一个元素，然后逐步将未排序部分中的元素插入到已排序部分的正确位置上。通过重复这个过程，最终使得整个数组有序。
  - `优点`：对于基本有序的数组或较小规模的数组排序效果好。稳定。
  - `缺点`：时间复杂度为 O(n^2)，在大规模数据排序中性能较差
- [快速排序](./quickSort.js)
  > 选择一个基准元素，将数组分成两个子数组，使得左边的元素都小于基准，右边的元素都大于基准，然后递归地对子数组进行排序
  - `优点`：平均情况下时间复杂度为 O(n log n)，性能较好
  - `缺点`：在最坏情况下，时间复杂度为 O(n^2)，不稳定（可能改变相等元素的顺序）
- [归并排序](./mergeSort.js)
  > 将待排序的数组递归地划分为较小的子数组，然后将这些子数组逐一合并，直到整个数组排序完成
  - `优点`：时间复杂度为 O(nlogn)，稳定（保持相等元素的顺序）。
  - `缺点`：需要额外的空间来存储临时数组，增加了空间复杂度
