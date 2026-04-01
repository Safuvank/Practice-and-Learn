let multi = (a,b) =>  a * b


console.log(multi(4,5))

let b = 20

for (let i = 0; i<=b; i += 2){
    console.log(i)
}


console.log("Start")

function slowTask() {
  for (let i = 0; i < 10000000; i++) {}
}

slowTask()
console.log("new")

console.log("End")


console.log("Start")

setTimeout(() => {
  console.log("Timer finished")
}, 2000)

console.log("End")


console.log("A")

setTimeout(() => {
  console.log("B")
}, 0)

console.log("C")


console.log("Start")

setTimeout(() => {
  console.log("Timeout")
}, 0)

Promise.resolve().then(() => {
  console.log("Promise")
})

console.log("End")
