// when a variable declared in an innerscope has the same name as a variable in the outerscope. the inner one shadows the outer one within its scope 

let x = 15

{
    let x = 10
    console.log(x)
}
console.log(x)

// illegal

let y = 25;
{
    // var y = 40;
    // let and var in same scope
}

// type conversion

let a = 123;
console.log(a);
console.log(typeof a);
let b = String(a);
console.log(b);
console.log(typeof b)

// Parseint();
// it's work
// left to right
// first space it consider and move frwd
// if it first char non- numeric it return NaN

let c = parseInt("NaN");
console.log(c)
console.log(typeof c)


// check in object

const obj = {name : "safuvan",age:23,place: "Valakkulam"};
const obj1 = {name : "alli",age:13,place: "Valak"}

console.log("nk" in obj)
console.log(obj.hasOwnProperty('name'))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))



let merge = Object.assign({},obj,obj1)
console.log(merge)

// class

class Person {
    name;
    greet(name){
        console.log("hello" + name)
    }
}

let p = new Person();
p.name = "safuavn";
p.state = "kerala"

console.log(p);

// with constructor function

class Person1{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }


}

let q = new Person1("safuvan",23)
console.log(q)

// class inheritance

// properties and methods retriving from existing object into new object

class Employee extends Person{
    constructor(job){
        super()
        this.job = job;
    }
    Worker(){
            console.log(p.name + "is working as a " + this.job)
        }
}

let e = new Employee("Dev")
e.Worker();


class Animal extends Person{
    constructor(animalname){
        super()
        this.animalname = animalname;
    }
    greet1(){
        console.log(this.animalname + " is living in Big forest" + p.job)
    }

}

let u = new Animal("dog");
// greet1();

const obj3 = {
    name : "safu",
    address : {city : "kochi"}
}

let shallow = {...obj3};
shallow.name = "thabsheer";
shallow.address.city = "calicut"
console.log(obj3,shallow)


const arr = [12,23,43,54]
let shallowArr = [...arr]
shallowArr.push(20)

console.log(arr,shallowArr)

// structuredClone

let ar1 = [[10,32],[10,32],[32,54]];
let ar2 = structuredClone(ar1)
ar1[0].push(99)
console.log(ar1,ar2)

// currying function

function sum (a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}

console.log(sum(10)(20)(30));

// generator function

function * fruits(){
    yield "apple"
    yield "mango"
    yield "orange"
    return 
}

let obj5 = fruits();
console.log(obj5.next())
console.log(obj5.next())
console.log(obj5.next())
console.log(obj5.next())


// constructor function

function People (name, age){
    this.name = name;
    this.age = age;
    return 10
}

let k = new People("safuvan",23)
console.log(k)


// promise

// it's an object

// object creation through new keyword

let prm = new Promise((resolve,reject) => {
    // console.log("Execution is failed")
    // reject("failed");
    // reject(5)
});
prm
    .then((result)=>{
        console.log("first result: ",result);
        return result * 2;
    })
    .then((result)=>{
        console.log("second result : ",result)
        return result + 5;
    })
    .then((result)=>{
        console.log("Final result : ",result);
    })
    .catch((result)=>{
        console.log("failed",result)
    })


    // async and await

   function exmp(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("failed");
            reject()
        },2000)
    })
   }

//    exmp()
//    .then(()=>{console.log("successed")})
//    .catch(()=>{console.log("failed")})


async function run (){
    console.log("exmp function execution started")
    try{
        await exmp()
    console.log("promise fullfilld")
    }
    catch(e){
        console.log("failed")
    }
}

// run();


// fetch("https://catfact.ninja/fact")
// .then((result)=>result.text())
// .then((text)=>console.log(text))
// .catch(()=>console.log("API Failed"))

// async function getData(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data = await response.json();
//         console.log("fetched data: ",data);
//     }catch(error){
//         console.log("Error: ", error)
//     }
// }

// getData()

// async function getData1(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data = await response.json()
//         console.log("fetched data: ",data)
//     }catch(error){
//         console.log("error: ", error)
//     }
// }

// getData1();


// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then ((result)=>result.json())
// .then((data)=>{console.log(data)})
// .catch(()=>console.log("Api failed"))

// let myPromise = new Promise((resolve,reject) => {
//     lconsole.log("Executer function executed")
//     resolve("promise resolved");
// })

// myPromise
// .then((result=>console.log("result")))
// .catch(error => console.log("error"))



// async await

function exmp (){
    return new Promise((resolve,reject)=>{
        console.log("Execution function executed")
        setTimeout(()=>{
            resolve()
        },2000)
    })
}

// exmp()
// .then(()=>console.log("execution successed"))
// .catch(()=>console.log("failed"))


async function run(){
    await exmp()
    console.log("success")
}

// run()


function delay (ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("waiting" + ms + "ms")
        },2000)
    })
}

async function run(){
    console.log("task started");
    const result = await delay(1000);
    console.log(result);
    const result1 = await delay(1000);
    console.log(result1);
    console.log("task finished")
}

run();


function Person10(name,age){
    this.name = name;
    this.age = age;
}

let g = new Person10("safuvan",23)
console.log(g);


// Global variables leak

// function leak(){
//     bigData = new Array(1000000).fill("leak");
//     console.log(bigData)
// }

// leak()

