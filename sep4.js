
// 4th sep
// prototype
// call 

const obj10 = {
    firstName : "safuvan",
    lastName : "k"
}
const obj12 = {
    firstName : "sundar",
    lastName : "pichai"
}

let fulName = function (){
    console.log(this.firstName + " " +this.lastName)
}

fulName.call(obj10);
fulName.call(obj12);

const objnew = {
    name : "safuvan",
    initial : "kurukkan"
}

let size = Object.keys(objnew).length
console.log(size);

// Map

// create a Map

const mymap = new Map();
console.log(mymap)

mymap.set(10,"age");
mymap.set("name","safuvan");
mymap.set("place","venniyour");
mymap.set(true,"isActive")
const arr3 = [1,2,3,5];
mymap.set(arr3,"Array");

mymap.delete(10);


console.log(mymap);

console.log(mymap.has("name"))

mymap.set(10);


// const obj15 = {
//     color : "white",
//     wheel : 4,
//     model : 2025,
// }

// for(let key of obj15){
//     console.log(key);
// }

// sort

const ab = [1,3,5,6,7,2,34,67];

let sorted = ab.sort((a,b)=> b - a);
console.log(sorted);



// filter
const abc = [1,3,5,6,7,2,34,67];
let reduced = abc.reduce((acc,num) => {
    return acc < num ? acc : num;
},abc[0]);
console.log(reduced);

// callback function



function greet(name,callback){
    console.log("hello " + name);
    callback();
}

function aftergreet (){
    console.log("end")
}

greet("safuvan",aftergreet);

//call

const obj20 = {
    firstName : "safvuan",
    lastName : "k"
}

const obj21 = {
    firstName : "muhammed",
    lastName : "p"
}

const fulllName = function (){
    var a = 10;
    console.log(this.firstName + " " + this.lastName)

}

fulllName.call(obj20);
fulllName.call(obj21);


function abcd (){
    let count = 0;

    function inner(){
        let a = 10;
        count++;
        console.log(count);
    }
   
    return inner
    
}

let xyz = abcd();
xyz();
xyz();
xyz();


// recursion

function pritnNumbers (n){
    if(n>5){
        return;
    }
    console.log(n);
    pritnNumbers(n+1)
}
pritnNumbers(1);


// Array destructuring

const numbers = [10,20,30,32,43,65,765,4,23];

let [x,,z,...rest] = numbers;

console.log(x,z,rest);


// Object destructuring

const person = {
    name : "safuvan",
    age : 23,
    place : "kerala"
}

let { name,place,age} = person;

console.log(age,place,name);


const student = {
    name : "Rahul",
    marks : {math : 90, science :85}
};

let {marks: {science,math, fname}} = student;
console.log(science, math,name);


// call

let ob = {
    fname: "safuvan",
    lname : "k"
}

let ob2 ={
    fname :"muhammed",
    lname : "p"
}

let result1 = function (){
    console.log(this.fname + " " + this.lname)
} 


let binde = result1.bind(ob2);
binde();

//forEach

const arr12 = [1,3,5,6,7,5,3,6,5,6,7,6];

let resulted = arr12.forEach(x => console.log(x));


//reduce 

const arr13 = [1,3,5,7,5,4,3,2,3];

let reduceded = arr13.reduce((acc,num)=> acc + num,0)
console.log(reduceded);

//Arrow function

let arrow = ()=>{};

//Anounymous function

let anon = function (){

}

//function Expression with name

let exp = function abc (){

}

// function Expression without name

let expr = function (){

}

// recursoion



