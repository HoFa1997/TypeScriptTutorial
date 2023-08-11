interface IPerson {
  readonly name: string;
  age: number;
  hello(name: string): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  hello(name: string): void {
    console.log(name);
  }
}

let user1: IPerson;

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
