// Arrays, Objects & Loops Example

// ===== Arrays =====
let fruits = ["Apple", "Banana", "Orange"];
console.log("Initial fruits array:", fruits);

// Adding new element using push
fruits.push("Mango");
console.log("After push:", fruits);

// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("All fruits using for...of loop:");
for (let fruit of fruits) {
  console.log(fruit);
}

// ===== Objects =====
let person = {
  name: "Habib",
  age: 25,
  email: "habib@example.com",
};

console.log("\nPerson object:", person);

// Accessing object properties
console.log("Name:", person.name);
console.log("Email:", person["email"]);

// Modifying object property
person.age = 26;
console.log("Updated age:", person.age);

// Adding new property
person.country = "Bangladesh";
console.log("Person after adding country:", person);

// ===== Loops & if/else =====
let numbers = [10, 25, 30, 45, 50];
console.log("\nNumbers array:", numbers);

console.log("Even numbers in the array:");
for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(num, "is even");
  } else {
    console.log(num, "is odd");
  }
}

// ===== Nested Objects & Array of Objects =====
let students = [
  { name: "Ali", score: 85 },
  { name: "Sara", score: 92 },
  { name: "John", score: 78 },
];

console.log("\nStudents list:");
for (let student of students) {
  if (student.score >= 90) {
    console.log(`${student.name} has excellent score: ${student.score}`);
  } else if (student.score >= 80) {
    console.log(`${student.name} has good score: ${student.score}`);
  } else {
    console.log(`${student.name} needs improvement: ${student.score}`);
  }
}