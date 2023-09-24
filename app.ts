type Admin = {
  name: string;
  permission: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface IEmployee extends Admin, Employee {}
type IEmployee = Admin & Employee;

const e1: IEmployee = {
  name: "Ali",
  permission: ["list-of-user"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
