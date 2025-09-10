// Stack Overflow

function recurse(){
    recurse();
}
// recurse();

function sum(){
    sum();
}

// sum();


// Stack Underflow

//Happens when you pop from an empty array

let stack = [];
let b = stack.pop();
let c = stack.pop();
let d = stack.pop();
console.log(b,c,d)

// find maximum stack depth 

let counter = 0;

function recursive(){
    counter++;
    recursive();
}
try{
    recursive();
}catch(e){
    console.log("Max stack depth reached at: ",counter)
}

// stack underflow (nothing to pop)

const arr = [];
arr.pop();
arr.pop();


//Object
//1
const user = { name : "Elon"}
user.age = 40;

console.log(user);

// //2 

// const user1 = new Object();
// console.log(user1);
// user1.name = "safuvan";
// console.log(user1);


function createObject(key, value){
    return {key : value}
}

const obj = createObject("key","safuvan");
console.log(obj)

let bc = "value";

const obj1 = {[bc]:10};
console.log(obj1)


const name = "safuvan";
const age = 23;
const user12 = {name,age};
console.log(user12);

const salary = {
    a : 100,
    b : 200,
    c : 300
}

console.log("d" in salary)


//Class 

// A class is a blueprint for creating objects
// it wraps data and functions into a single unit
// use class keyword followed by the class name (it's first letter in UPPERCASE)

class Name {
    //class body with properties and methods
}

let obj3 = new Name();
console.log(obj3);

class Person{
    Name = "safuvan";
    place = "Malappuram";
    State = "Kerala";
    Nation = "India"
}

let p = new Person();
delete p.Name;
console.log(p)

let q = new Person();
q.Nation= "United states"
console.log(q)

// Add method inside a class

class Person1{
    Name = "safuvan";
    greet(){
        console.log("I am here")
    }
}

let u = new Person1;

u.greet();
console.log(u)


// counstructor
// it is a special method of class

// used for initializing objects

// it helps to argument pass values when create an object 


class Person4{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person4("safuvan",23);
let t = new Person4("Thabsheer",22);
console.log(p1);
console.log(t)

// Shallow Copy and Deep copy

const arr1 = [10,20,30,40,50]

console.log(arr1)

const arr2 = [...arr1];
console.log(arr2);

arr1.push(60);
console.log(arr1);
console.log(arr2);