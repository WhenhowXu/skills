let arr = [1,2,3,'a','b',10];
const i0  = arr.find(v=>v==='a');
const i1  = arr.find(v=>v==='90');
console.log(i0) // 'a'
console.log(i1) // undefined
const item1 = arr.findIndex(v=>v===3);
const item2 = arr.findIndex(v=>v===20);
console.log(item1)//2
console.log(item2)//-1

// indexOf 从第一个开始查找 lastIndexOf从最后一个开始查找
let j0 = arr.indexOf(1)
let j1 = arr.indexOf(20)
let j2 = arr.lastIndexOf(1)
let j3 = arr.lastIndexOf(20)
console.log(j0) // 0
console.log(j1) // -1
console.log(j2) // 0
console.log(j3) // -1