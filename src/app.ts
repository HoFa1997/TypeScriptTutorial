// // Start

// const names: Array<string> = ["A", "B"]; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   //   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Jef"));
