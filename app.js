"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello(name) {
        console.log(name);
    }
}
let user1;
user1 = new Person("Ali", 24);
console.log(user1);
user1.hello("hossein");
// user1 = {
//   name: "Ali",
//   age: 20,
//   hello(name: string) {
//     console.log("Hello " + name);
//   },
// };
// user1.hello("Ali");
