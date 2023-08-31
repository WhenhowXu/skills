const Chainable = function (obj) {
    return new Proxy(obj, {
      get(target, prop) {
        if (prop in target) {
          if (typeof target[prop] === "function") {
            return (...args) => {
              target[prop](...args);
              return Chainable(target);
            };
          }
          return Chainable(target[prop]);
        }
        throw new Error(`Property ${prop} not found`);
      },
    });
  };
  class MyNumber {
    constructor(value) {
      this.value = value;
    }
    add(n) {
      this.value += n;
    }
    times(t) {
      this.value = this.value * t;
    }
    getValue() {
      console.log(this.value);
    }
  }

  const n = new MyNumber(0);
  const proxyN = Chainable(n);
  proxyN.add(10).times(3).getValue();
  n.add(10).times(3).getValue();