// variables-data-types.js

// ----------- Variables Declaration -----------
// var (old way, function-scoped)
var oldVariable = "I am var";
console.log("var example:", oldVariable);

// let (block-scoped, re-assignable)
let age = 25;
age = 26; // reassign is allowed
console.log("let example:", age);

// const (block-scoped, cannot be reassigned)
const country = "Bangladesh";
// country = "India"; 
console.log("const example:", country);

// ----------- Data Types -----------

// 1. String
let name = "Habib";
console.log("String:", name);

// 2. Number
let score = 95;
let pi = 3.1416;
console.log("Number:", score, pi);

// 3. Boolean
let isLoggedIn = true;
let hasPermission = false;
console.log("Boolean:", isLoggedIn, hasPermission);

// 4. Null
let emptyValue = null;
console.log("Null:", emptyValue);

// 5. Undefined
let notAssigned;
console.log("Undefined:", notAssigned);

// 6. Object
let student = {
  id: 101,
  name: "Rahim",
  isActive: true,
};
console.log("Object:", student);
console.log("Object Access:", student.name);

// 7. Array
let numbers = [10, 20, 30, 40];
let fruits = ["Apple", "Mango", "Banana"];
console.log("Array:", numbers);
console.log("First Fruit:", fruits[0]);

// 8. Symbol (unique value)
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);

// 9. BigInt (for very large numbers)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// ----------- Typeof Operator -----------
console.log("typeof name:", typeof name);         // string
console.log("typeof score:", typeof score);       // number
console.log("typeof isLoggedIn:", typeof isLoggedIn); // boolean
console.log("typeof emptyValue:", typeof emptyValue); // object (special case in JS)
console.log("typeof notAssigned:", typeof notAssigned); // undefined
console.log("typeof student:", typeof student);   // object
console.log("typeof numbers:", typeof numbers);   // object (array is a special object)
console.log("typeof uniqueId:", typeof uniqueId); // symbol
console.log("typeof bigNumber:", typeof bigNumber); // bigint