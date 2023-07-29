"use strict";
// class
class Person {
    constructor(name, age, family) {
        this.name = name;
        this.age = age;
        this.family = family;
    }
    printAge() {
        console.log(this.age);
        this.setFamilyName("Olayii");
        console.log(this.family);
    }
    setFamilyName(family) {
        this.family = family;
    }
}
const person = new Person("Hossein", 26, "Fatemi");
// person.setFamilyName("Vosoghi");
person.printAge();
console.log(person);
