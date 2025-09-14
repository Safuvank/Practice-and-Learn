// Promise


function exmp (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task completed");
            resolve();
        });
    });
}

// exmp()
// .then(()=>{console.log("Executed successfully")})
// .catch(()=>{console.log("Execution failed")});

// Async and await

function exmp (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task completed");
            resolve("Errror");
        },3000);
    });
}

async function run (){
    try{
        await exmp();
        console.log("Completed successfully")
    }
    catch(er){
        console.log("Execution Failed")
    }
}

// run();

// fetch

fetch("https://catfact.ninja/facttt")
.then((result)=>result.text())
.then((text)=>console.log(text))
.catch(()=>console.log("API Failed"))


//

fetch("https://catfact.ninja/fact")
.then((result)=>result.json())
.then((text)=>console.log(text))
.catch(()=>console.log("API Failed"))



// first working 

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// // creation phase and execution phase

// console.log(a); // ??
// console.log(b); // ??
// console.log(c); // ??

// var a = 10;
// let b = 20;
// const c = 30;

// function greet() {
//   console.log("Hello");
// }
// // greet();

// 

function fun1(){
    console.log("fun 1 completed")
}

function fun2(){
    console.log("Fun 2 completed")
}

function fun3 (){
    console.log("Fun 3 completed")
}

fun1();
setTimeout(fun2,2000);
fun3();