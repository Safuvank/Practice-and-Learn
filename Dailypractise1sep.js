// Multiply each number in [1,2,3,4,5,6,7,8,9,10] by 2

const arr = [1,2,3,4,5,6,7,8,9,10];
let mapped = arr.map(x => x * 2);
console.log(mapped);


// Convert ["apple", "banana", "cherry"] into uppercase.

const fruits = ["apple","banana","cherry"];
let converted = fruits.map(fruit => fruit.toUpperCase());
console.log(converted);


// Given [5, 10, 15, 20], return an array of strings like: ["5$", "10$", "15$", "20$"].

const nums = [5,10,15,20];
let convertToString = nums.map(num => num +"$");
console.log(convertToString);

// Extract only the names from:

// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 30 }
// ];


const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 }
];

const names = users.map(x => x.name );
console.log(names);


// Square all numbers from 1–10.

const numbers = [1,2,3,4,5,6,7,8,9,10];
let squared = numbers.map(num => num * num);
console.log(squared);


