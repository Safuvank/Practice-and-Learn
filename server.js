// server create from scratch 



const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Home page")
    } else if (req.url === "/contact"){
        res.end("Contact page")
    }
    
    else {
        res.end();
    }
})

server.listen(3000, ()=>{
    console.log("Server is running")
})