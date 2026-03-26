// // server create from scratch

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.end("Home page")
//     } else if (req.url === "/contact"){
//         res.end("Contact page")
//     }

//     else {
//         res.end();
//     }
// })

// server.listen(3000, ()=>{
//     console.log("Server is running")
// })

const express = require("express");
const app = express();



app.get("/",(req,res)=>{
    // res.send("Hellow from server")
    res.send("I am second")
})

app.use((req, res, next) => {
  console.log("Aplication middle");
  console.log("hwoo server")
//   next();
});

app.listen(3000,()=>{
    console.log("server is running on 3000")
})