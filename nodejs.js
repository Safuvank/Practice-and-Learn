// //to get global object
// console.log(global)

// //to get directory name
// console.log(__dirname)

// //to get filename
// console.log(__filename)

// //to get current nodejs current process
// console.log(process.platform)

// var x = 10;
// console.log(global.x) // not working because nodejs treats each file treated as a module. and it doesn't automatically added in global object

//  global.x = 10;
// console.log(global.x)

// const fs = require('fs')
// fs.readFile("import.txt", "utf-8",(err,data)=>{
//     console.log(data)
// })

// console.log("This runs first");

// const eventEmitter = require("events");

// const emitter = new eventEmitter();

// emitter.on("message",()=>{
//     console.log("Message received")
// })

// emitter.emit("message")

// const fs = require('fs');

// const data = fs.readFileSync("import.txt","utf-8");
// console.log(data);

// console.log("this print second")

// const fs = require('fs/promises');

// async function readData(){
//     const data = await fs.readFile("import.txt","utf-8")
//     console.log(data)
// }

// readData()


// const os = require("os");

// console.log(os.platform());
// console.log(os.totalmem());


// const url = require("url");

// const myUrl = new URL("http://localhost:3000/about?name=safu");

// console.log(myUrl.pathname);
// console.log(myUrl.searchParams.get("name"));


// const crypto = require("crypto");

// const hash = crypto.createHash("sha256").update("password").digest("hex");

// console.log(hash);


// const util = require("util");

// const result = util.format("Hello %s, you have %d messages", "Safuvan", 5);
// console.log(result);


// const util = require("util");
// const fs = require("fs");

// const readFilePromise = util.promisify(fs.readFile);

// readFilePromise("import.txt", "utf-8")
//   .then(data => console.log(data))
//   .catch(err => console.error(err));


// const zlib = require("zlib");
// const fs = require("fs");

// const input = fs.createReadStream("input.txt");
// const output = fs.createWriteStream("input.txt.gz");

// input.pipe(zlib.createGzip()).pipe(output);



// const fs = require("fs");

// let content = "this is the most contern tin thehidojofjadsoijfoijdsoijfiojdsoijgfoidsiofjodsijioj"

// fs.writeFileSync("test1.txt", content);



