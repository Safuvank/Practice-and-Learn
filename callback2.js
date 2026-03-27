// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched");
//     callback();
//   }, 2000);
// }

// function processData(callback) {
//   console.log("second function");
// }

// function afterProcess() {
//   console.log("after process");
// }

// fetchData(processData(afterProcess));



let num = 12345;

let digits = num.toString().split('').map(Number).reduce((acc,curr)=> acc + curr,0)

console.log(digits); 



console.log("Start");

setImmediate(() => {
  console.log("Immediate");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");