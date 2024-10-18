import { divideBy, multiply, subtract, sum } from "./functionA";
import nameFunc from "./functionA";
console.log(sum(10, 2));
console.log(subtract(10, 2));
console.log(multiply(10, 2));
console.log(divideBy(10, 2));
console.log(nameFunc("raka"));

let obj = {
  mobil: {
    merk: "honda",
    kapasitas: 2500,
    wiper: 2,
  },
};

console.log(obj.mobil.merk);
console.log(obj.mobil.kapasitas); //runtime error

function greet(name: string) {
  //error any
  console.log(`Hello ${name}`);
}

greet("Raka");

//throw error
// let a = undefined;
// if (!a) {
//   throw new Error("a is undefined:D");
// } else {
//   console.log(a);
// }

//stack trace
function add(a: number, b: number) {
  //stack1
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid arguments. Both arguments must be numbers");
  }
  return a + b;
}

function average(a: number, b: number) {
  //stack2
  try {
    const sum = add(a, b);
    return sum / 2;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Stack trace", error.stack);
      throw error;
    } else {
      console.log("An unknown errror occurred");
      throw new Error("Unknown error");
    }
  }
}

function main() {
  //stack3
  try {
    const x = average(10, 20);
    console.log("Average: ", x);

    const y = average(10, "20" as any);
    console.log("Average: ", y);
  } catch (error) {
    console.error("An error occurred in main function");
  } finally {
    const y = average(10, 25);
    console.log("Average true: ", y);
  }
}

main();
