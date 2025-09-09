// Js Array Methods

function removeDuplicate (arr){
    let uniqueValues = [];
    for(let i = 0 ; i<arr.length; i++){
        if (uniqueValues.indexOf(arr[i]) === -1){
            uniqueValues.push(arr[i]);
        }
            
        }
        return uniqueValues;
}

console.log(removeDuplicate([2,3,65,43,3,2,43,54,34,3,32]))

// Use .includes() to check if "apple" exists in a fruit array.

const arr = ["grapes","orange","apple","jackfruit"];

let resul = arr.includes("apple");
console.log(resul);

// Write a function that flattens [[1,2],[3,4],[5]] into [1,2,3,4,5].

const nestedArr = [[1,2],[3,4],[5]];

let nestedArrResult = nestedArr.flat();
console.log(nestedArrResult);

// Array Sort (Comparing Function)

// Sort [10, 5, 8, 1] in ascending order.

const num = [10, 5, 8, 1];

let restult = num.sort((a,b)=>a-b);
console.log(restult);

// Sort the same array in descending order.

const num1 = [10, 5, 8, 1];

let restult1 = num1.sort((a,b)=>b-a);
console.log(restult1);

// Sort an array of strings by their length.
// Example: ["cat","elephant","dog"] → ["cat","dog","elephant"]

const animals = ["cat","elephant","dog"];

let sortedAnimal = animals.sort((a,b)=> b.length - a.length);
console.log(sortedAnimal);

// 4. Sort objects by age:

// const users = [{name:"Ali",age:25},{name:"Sara",age:20},{name:"Omar",age:30}]

// → Sort from youngest to oldest.

const users = [{name:"Ali",age:25},
    {name:"Sara",age:20},
    {name:"Omar",age:30}]

let sorted = users.sort((a,b)=> a.age - b.age);

console.log(sorted);
    

// Advanced Topics of JavaScript 

// synchrounous

let a = 100;
let b = 200;
let result = a + b;
console.log(result);


// Disadvantage of synchrounous

function task1(){
    console.log("Task1 Started..");

    let start = Date.now();
    let delay = 5000;
    let end = start + delay;

    console.log("Task1 executing..");
    while(Date.now() <= end){

    }
    console.log("Task1 completed...")
}

function task2(){
    console.log("Task2 Started..");

    let start = Date.now();
    let delay = 3000;
    let end = start + delay;

    console.log("Task2 executing..");
    while(Date.now() <= end){

    }
    console.log("Task2 completed...")
}

function task3(){
    console.log("Task3 Started..");

    let start = Date.now();
    let delay = 10000;
    let end = start + delay;

    console.log("Task3 executing..");
    while(Date.now() <= end){

    }
    console.log("Task3 completed...")
}
// task1();
// task2();
// task3();

//Strict mode in JavaScript

//1. It prevents conversion of this
//2. Prevents ovewriting of resdonly global value

function myFunction(){
    // if your 'this' is null or undefined => convert to global
    // "use strict"
    console.log(this)
}

myFunction.call({});
