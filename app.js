"use strict";
class Person {
    constructor(name, age, companySize) {
        this.name = name;
        this.age = age;
        this.companySize = companySize;
    }
    hello(name) {
        console.log(name);
    }
}
let user1;
user1 = new Person("Ali", 24, 100);
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
