// START

// function Logger(logString: string) {
//   console.log("Logger Factory");

//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("WithTemplate Factory");
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// @Logger("Logging Person")
// @WithTemplate("<h1>My Person Obj</h1>", "app")
// class Person {
//   name = "Hossein";
//   constructor() {
//     console.log("Creating person Object ...");
//   }
// }
// const pers = new Person();
// console.log(pers);

// ------

function Log(target: any, propertyName: string | Symbol) {
  console.log("property decorator");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}
