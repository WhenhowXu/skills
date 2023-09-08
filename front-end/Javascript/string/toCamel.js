/**
 * 下划线或横线转驼峰
 * @param {*} str 字符串
 * @param {*} isBig true-大驼峰 false-小驼峰
 */
const toCamelString = (str, isBig = false, separator = "_") => {
  return typeof str === "string"
    ? str
        .split(separator)
        .map((s, index) => {
          return s.replace(/^\w/, (v) => {
            return index === 0 && !isBig ? v.toLowerCase() : v.toUpperCase();
          });
        })
        .join("")
    : str;
};
console.log(toCamelString("user_id") === "userId"); // true
console.log(toCamelString("user_id", true) === "UserId"); // true
console.log(toCamelString("user-id", false, "-") === "userId"); // true
console.log(toCamelString("user-id", true, "-") === "UserId"); // true

/**
 * 驼峰转下划线或者横杠
 *
 */
const toUnderlineString = (str, separator = "_") => {
  if (typeof str === "string") {
    const _str = str.replace(/[A-Z]/g, (m) => {
      return separator + m.toLowerCase();
    });
    return _str.slice(0, 1) === separator ? _str.slice(1) : _str;
  } else {
    return str;
  }
};

console.log(toUnderlineString("user_id"));
console.log(toUnderlineString("user-id", "-"));
