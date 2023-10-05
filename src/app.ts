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

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return { ...objA, ...objB };
// }

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = "Got no value.";
//   if (element.length === 1) {
//     descriptionText = "Got 1 element.";
//   } else if (element.length > 1) {
//     descriptionText = "Got " + element.length + " elements.";
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe("Jef"));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return `value: ${obj[key]}`;
// }

// extractAndConvert({ age: 20, name: "Jef" }, "age");

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1); // -1
//   }
//   getItems() {
//     return [...this.data];
//   }
// }

// const data = new DataStorage<object>();
// const namee = { name: "Hossein" };
// data.addItem(namee);
// data.addItem({ name: "Ali" });
// data.removeItem(namee);
// console.log(data.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["A", "B"];
