const obj = { name: "123" };
Object.defineProperty(obj, "age", { value: 10 });
Object.getOwnPropertyDescriptors(obj);
