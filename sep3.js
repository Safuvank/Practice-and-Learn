// closure

function outer(){
    let a = 10;

    function inner(){
        console.log(a)
    }
    inner()
}

let a = outer()

// Callback Function

function bye (){
    console.log("end")
}

function greet (name,callback){
    console.log("Hello" + name)
    callback();
}

greet("safvuan",bye);

// Bind() Method

let obj = {
    name : "safuvan"
}

let printName = {
    name : "safu",
    greet: function(){
        console.log(this.name);
    }
}
let binded = printName.greet.bind(obj);
binded();

// call() Method

let obj1 = {
    firstName : "safuvan",
    lastName : "K",
}

let obj2 = {
    firstName : "Muhammed",
    lastName : "Ashraf",
}

let fullName = function (a,b){
        console.log(this.firstName + " " + this.lastName + a + b)
    }

fullName.call(obj1,"1","2");
fullName.call(obj2,"1","2");


// Apply
// it's similar to call. but it accepts arguments as an array

const obj3 = {
    fname : "Sundar",
    lname : "Pichai"
}

const obj4 = {
    fname : "Elone",
    lname : "Mask"
}

let flname = function (a,b){
    console.log(this.fname + " " + this.lname + a + b);
}

flname.apply(obj3,["2","3"]);
flname.apply(obj4,["2","3"]);


// bind
// it does not invoke a function directly. it return a function and assign a variable and call the variable

class User {
    constructor (){
        this.name = "safuvan";
    }
    getName(){
        this.name;
    }
}

const user = new User();
console.log(user);
const newGetName = user.getName.bind(user);
console.log(newGetName);



// find length of an object

const objLength = {
    name : "safuvan",
    place : "Kerala",
    course : "MernStack",
    batch : 100,
    isActive : true,
    school : null,
    b : "three"
    
}

const length = Object.keys(objLength).length
console.log(length);

console.log(objLength);

// Map Object
// it is a special object of JavaScript
// keys can any type (not jst ) 
// got insertion order
// got it's size with simple method  


// create a new Map

const myMap = new Map();
console.log(myMap);

// Add some key-value pairs

myMap.set("name","safuvan");
myMap.set("place","Venniyoor");
myMap.set(50,"age");
myMap.set(true,"isActive");



console.log(myMap.get(50));
console.log(myMap.get("place"));

// check the key
console.log(myMap.has("place"));

// check the size
console.log(myMap.size)

// delete a key

myMap.delete("name");
console.log(myMap);

// Iterate the map
myMap.forEach((value, key) => console.log(key, "=> " ,value));


function wordFrequency(sentence){
    const map = new Map();

    const words = sentence.split(" ");
    for(let word of words){
        word = word.toLowerCase();

        if(map.has(word)){
            map.set(word,map.get(word) + 1);
        }else {
            map.set(word, 1);
        }
    } return map;
}

const result = wordFrequency("apple banana apple orange banana apple apple banana");
console.log(result);

result.forEach((count, word) => console.log(word, "=>" ,count));


// Set 
// it is built-in object in JavaScript. it store unique values

// create new set

const set = new Set();
console.log(set);

// we can add any type of value in set

set.add(10);
set.add(20);
set.add("safuvan");
set.add(true);
set.add(false);
set.add(null);

// set.add([1,3,4,5,6])(x)
// when add array it's better to assign a variabl. because during the deletion it won't remove . it's store by reference
const arr =[1,3,4,5,6] 
set.add(arr)

console.log(set);

// delete any values

set.delete(10);
set.delete(arr);

console.log(set);

// check the value in the object
console.log(set.has(null));

// to find size of object

console.log(set.size);

// remove all values from object

set.clear();
console.log(set);


// First Class function

// store a function in a variable
// function can pass an argument in another function
// function can return another function
// store in array or object

// store a function in a variable

const greet1 = function(name){
   return "Hello " + name;
}

console.log(greet1("safuvan"));

// pass a function as an argument (callback)

function sayHi(name,callback){
    console.log("Hi " + name)
    callback();
}
function sayGoodBye(){
    console.log("good bye");
}


sayHi("Ashraf",sayGoodBye);

// Return a function from another function

function multiplier (factor){
    return function (num){
        return num* factor;
    }

    const double = multiplier(2);
    console.log(double(5));
}


