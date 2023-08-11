```js
(123).toLocaleString("zh-Hans-CN-u-nu-hanidec"); // '一二三'
(123).toLocaleString("zh-Hans-CN", { style: "percent" }); // '12,300%'
(123).toLocaleString("zh-Hans-CN", { style: "currency", currency: "CNY" }); // "￥123.00"
(123).toLocaleString("de-DE", { style: "currency", currency: "EUR" }); // "123,00 €"
```
