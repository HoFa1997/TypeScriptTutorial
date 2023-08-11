interface IPerson {
  name: string;
  age: number;
  hello(name: string): void;
}

interface ICompany {
  companySize: number;
}

class Person implements IPerson, ICompany {
  constructor(
    public name: string,
    public age: number,
    public companySize: number
  ) {}

  hello(name: string): void {
    console.log(name);
  }
}

let user1: IPerson;

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
