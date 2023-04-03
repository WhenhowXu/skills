const obj = { a: "KKK" };
const arr = [obj, 1, undefined, null, "", 0, "a", NaN];
const arr2 = [obj, 1, null, "", 0, "a"];

console.log(arr.includes(obj)); // true
console.log(arr.includes(undefined)); // true
console.log(arr.includes(NaN)); // true
console.log(arr2.includes(undefined)); // false
console.log(arr.includes(null)); // true
console.log(arr.includes(0)); // true
console.log(arr.includes("a")); // true
