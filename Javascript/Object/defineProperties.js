let person = {};

Object.defineProperties(person, {
  name: { value: "Tom", configurable: true },
  age: {
    get: function () {
      return this.value || 20;
    },
    set: function (value) {
      this.value = value;
    },
  },
});

console.log(person); // {name:'Tom'}   node: {}

person.name = "Jerry";
console.log(person.age); // 20

person.age = 10;
console.log(person); // {}
console.log(person.name); // Tom
console.log(person.age); // 10
