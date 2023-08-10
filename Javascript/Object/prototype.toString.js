console.log(Object.prototype.toString.call(2));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(""));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(NaN));
console.log(Object.prototype.toString.call(Math));

const type = function (o) {
  let s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
[
  "Null",
  "Undefined",
  "Object",
  "Array",
  "String",
  "Number",
  "Boolean",
  "Function",
  "RegExp",
].forEach((k) => {
  type["is" + k] = function (o) {
    return type(o) === k.toLowerCase();
  };
});

console.log(type(null)); // 'null'
console.log(type.isNumber(2)); // true
