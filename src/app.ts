// START

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}
@Logger
class Person {
  name = "A";

  constructor() {
    console.log("Creating person Object ...");
  }
}

const pers = new Person();

console.log(pers);
