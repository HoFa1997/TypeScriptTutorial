"use strict";
// string
let myName = "Hossein";
let myFamily = "Fatemi";
// number
let myAge = 25;
// boolean
let isValid = false;
isValid = true;
let nothing;
nothing = 12;
nothing = "ASD";
//array
let hobbies = ["Cooking", "Sports"];
hobbies = [100];
//Tuples
let address = ["Tehran", 20, "asd"];
// ENUM
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
let myColor = Color.Blue;
//any
let car = "BMW";
car = {
    brand: "BMW",
    series: 3,
};
// functions
function returnName() {
    return "Ali";
}
const returnName2 = () => {
    return "Ali2";
};
const sumValue = (num1, num2) => {
    return num1 + num2;
};
const logMyName = (name) => {
    console.log(name);
};
let myFun = logMyName;
let cloneOfSum = sumValue;
console.log(cloneOfSum(2, 2));
