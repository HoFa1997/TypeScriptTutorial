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

// const userInputElement = <HTMLInputElement>document.getElementById("user-input");
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there";
}

interface ErrorContainer {
  [key: string]: string;
}

const error: ErrorContainer = {
  email: "Not a valid email!",
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("A", " B");
const result1 = add(1, 2);

const fetchUserData = {
  id: "u1",
  name: "Hossein",
  // job: { title: "Front", des: "My own company" },
};

console.log(fetchUserData?.job?.title);
