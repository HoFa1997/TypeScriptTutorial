// string
let myName = "Hossein";
let myFamily: string = "Fatemi";

// number
let myAge = 25;

// boolean
let isValid = false;
isValid = true;

let nothing;
nothing = 12;
nothing = "ASD";

//array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

//Tuples
let address = ["Tehran", 20, "asd"];

// ENUM
enum Color {
  Blue, //0
  Green, //1
  Red, //2
}
let myColor: Color = Color.Blue;

//any
let car: any = "BMW";

car = {
  brand: "BMW",
  series: 3,
};

// functions
function returnName(): string {
  return "Ali";
}

const returnName2 = (): string => {
  return "Ali2";
};

const sumValue = (num1: number, num2: number) => {
  return num1 + num2;
};

const logMyName = (name: string): void => {
  console.log(name);
};

let myFun: (name: string) => void = logMyName;

let cloneOfSum: (num1: number, num2: number) => number = sumValue;

console.log(cloneOfSum(2, 2));

// Object Types

let user = {
  name: "ali",
  age: 20,
};

user = {
  name: "mohammad",
  age: 25,
};

// Type Alias

type firstType = {
  fn: (name: string) => void;
  age: number;
  family: string;
};

type secondType = string;

let subEveryThink: firstType = {
  fn: (hossein) => {},
  age: 20,
  family: "Harchi",
};

let a: secondType = "asd";
