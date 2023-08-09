console.log(isFinite(undefined)); // false
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(null)); // true
console.log(isFinite(-10)); // true
console.log(isFinite([])); // true
