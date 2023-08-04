interface IPerson {
  name: string;
  age: number;
  hello(name: string): void;
}

let user1: IPerson;

user1 = {
  name: "Ali",
  age: 20,
  hello(name: string) {
    console.log("Hello " + name);
  },
};

user1.hello("Ali");
