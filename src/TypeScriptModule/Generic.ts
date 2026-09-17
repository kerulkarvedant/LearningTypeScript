function identity<T>(value: T): T {
  return value;
}

const numberValue = identity<number>(100);
const stringValue = identity<string>("Hello");

console.log(numberValue); // 100
console.log(stringValue); // Hello


// <T> is a type parameter.
// T represents the type that will be provided.
// identity<number>(100) → T becomes number.
// identity<string>("Hello") → T becomes string.


// function identity<T>(value: T): T {
//   return value;
// }

// const a = identity(100);       // T = number
// const b = identity("Vedant");  // T = string
// const c = identity(true);      // T = boolean

// You don't always need to explicitly write <number> or <string>.


// function getFirst<T>(items: T[]): T {
//   return items[0];
// }

// const firstNumber = getFirst([10, 20, 30]);
// const firstName = getFirst(["Vedant", "Rahul", "Amit"]);

// console.log(firstNumber); // 10
// console.log(firstName);   // Vedant

// Generics with Arrays