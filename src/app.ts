// START

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
@Logger("Logging Person")
class Person {
  name = "A";

  constructor() {
    console.log("Creating person Object ...");
  }
}
const pers = new Person();
console.log(pers);
