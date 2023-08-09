console.log(5 - "x"); // NaN
console.log(Math.log(-1)); // NaN
console.log(0 / 0); // NaN
console.log(typeof NaN); // 'number'
// NaN不等于任何值，包括自身
let n = NaN;
console.log(n === n); // false
