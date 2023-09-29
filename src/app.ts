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

function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const merged = merge({ name: "Hossein", hobbies: ["sport"] }, { age: 26 });

console.log(merged);
