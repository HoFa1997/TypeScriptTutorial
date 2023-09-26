"use strict";
const e1 = {
    name: "Ali",
    permission: ["list-of-user"],
    startDate: new Date(),
};
function moveAnimal(animal) {
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
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi there";
}