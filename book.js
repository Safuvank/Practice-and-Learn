const fs = require("fs");

setTimeout(() => console.log("Timer"), 0);

setImmediate(() => console.log("setimmediate"));

fs.readFile("import.txt", () => console.log("File read"));

Promise.resolve().then(() => console.log("Promise"));

process.nextTick(() => console.log("Nexttick"));

console.log("end");
