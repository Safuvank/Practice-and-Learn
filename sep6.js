// Write a function that takes an array of numbers and returns the Even number

function evenNumbers (arr){
let newArray = [];
 for (let i = 0; i<arr.length ; i++){
   if(arr[i] % 2 === 0){
    newArray.push(arr[i]);
   }
 }return newArray;
}

console.log(evenNumbers([2,4,6,7,8,4,6,7,3,6,8]))

// Reverse an array without using the built-in .reverse() method.

function reverseArray(arr){
    let reversedArray = [];
    for(let i= 0 ;i<arr.length ;i++){
        reversedArray.unshift(arr[i]);
    }return reversedArray;
}

console.log(reverseArray([4,6,46,8,4,3,43]));

// Merge two arrays without using .concat().

const arr = [3,5,6,7,3,56,34];
const arr1 = [4,64,75,45,34,65];

let mergedArray = [...arr1,...arr];
console.log(mergedArray);

// another method

// Js Array Methods
// Use .push() and .pop() to manage a stack-like array.

const arr2 = [2,4,64,64,34,53,64];
let result = arr2.pop()
console.log(result,arr2);

arr2.push(15);
console.log(result,arr2);

// Use .shift() and .unshift() to manage a queue.

const arr3 = [34,53,65,76,53,85];

let shiftResult = arr3.shift();
console.log(shiftResult,arr3);

arr3.unshift(21);
console.log(shiftResult,arr3);

// Write a program that removes duplicates from an array using .indexOf().

function removesDuplicate (arr){

    arr.indexOf()
}
console.log([2,43,53,32,54,43,53,43])


