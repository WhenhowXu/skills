function Dog(name) {
    this.name = name;
  }
  Dog.prototype.eat = function () {
    console.log(this.name + "正在吃饭");
  };
  
  let dog1 = new Dog("小黄");
  console.log(dog1.name);
  console.log(dog1 instanceof Dog)
  dog1.eat();
  
  function customNew(Fn, ...args) {
    let _obj = {};
    _obj.__proto__ = Fn.prototype;
  
    Fn.apply(_obj, args);
    return _obj;
  }
  
  const dog2 = customNew(Dog, '小黑')
  console.log(dog2.name)
  console.log(dog2 instanceof Dog)
  dog2.eat();
  