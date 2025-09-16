

x = 10;

console.log(x)

function abc (){
    x =10;
    console.log(x)
}

abc();

// Reserved keywords protected

function xyz (){
    "use strict"
    console.log(this)
}

// xyz();

// in Object

"use strict"
var obj = {a: 23, a: 32};
console.log(obj)

"use strict";
var obj = { a: 1, a: 2 };
console.log(obj)

// Exception Handling 

// we got reliable code and unexpected error

// it's in the execution time

// Exceptions are runtime error instead of stopping execution. we can catch and handle them

// try... catch.. finally

console.log("program started");
let a = firstValue();
let b ;

// try{
//     b = secondValue();
// }
// catch{
//     console.log("found an Error")
// }
// finally{
//     console.log("an error")
// }

let c = thirdValue();
console.log("Program End")

function firstValue(){
    console.log("first value executed");
}

function secondvalue(){
    // fourthValue();
    throw("an Error")
    console.log("second value executed");
}

function thirdValue(){
    console.log("third value Executed")
}



