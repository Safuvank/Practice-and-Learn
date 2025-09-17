// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const success = false;
//         if(success){
//             resolve("Task Completed successfully")
//         }else{
//             reject("something went wrong")
//         }
//     },2000)
// });

// myPromise
// .then(result=>console.log(result))
// .catch(error => console.log(error))
// .finally(()=>console.log("promise finished"))

// async function run (){
//     await m
// }

function run() {
  return new Promise((resolve) => {
    console.log("execution started");
    setTimeout(() => {
      resolve("Hello World");
    }, 2000);
  });
}

// run()
// .then((message) => console.log(message))
// .then(()=>console.log("completed successfully"))
// .catch((error)=>console.log(error))

async function start() {
  console.log("waiting.....");
  const message =  run();
  console.log(message);
}

start();

const myPromise1 = new Promise((resolve,reject) =>{
    console.log("execution started..")
    setTimeout(()=>{
        reject("something went wrong")
    },3000)
})

myPromise1
.then()
.catch(error => console.log(error))


// function number(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve()
//         },3000)
//     })
// }

// const myPromise2 = new Promise (resolve =>{
//     resolve(3);
// })

// myPromise2
// .then(n=>n*2)
// .then(n=>n*n)
// .then(result => console.log(result))

const promise1 = new Promise((resolve,reject)=>{
    resolve(["javascript","java"])
})

const promise2 = new Promise((resolve,reject)=>{
    resolve(["react","Angular"])
})

promise1.then(res =>{
    console.log(res)
})

promise2.then(res =>{
    console.log(res)
})