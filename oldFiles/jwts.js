// const bcrypt = require('bcryptjs');
// const express = require('express')

// const app = express();

// app.post('/register', async(req,res)=>{
//     const {email, password} = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);

//     users.push({
//         email,
//         password: hashedPassword
//     })

//     res.send("user registered")
// })

// const bcrypt = require("bcryptjs");
// const express = require("express");

// const app = express();

// const user = [];

// app.post("/register", async (req, res) => {
//   const { email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   user.push({
//     email,
//     password: hashedPassword,
//   });

//   res.send("user registered succces");
// });

// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const app = express();

// const users = [];

// app.post("/register", async (reqq, res) => {
//   const { email, password } = reqq.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   users.push({
//     email,
//     password: hashedPassword,
//   });

//   res.send("user registered succesfuluy");
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find((user) => user.email === email);

//   const isMatch = await bcrypt.compare(password, user.password);

//   const token = jwt.sign({ email: user.email }, "secretKey", {
//     expiresIn: "1h",
//   });

//   res.json({token})
// });

// app.post("/login", async (req , res) => {
//     const {email, password} = req.body;

//     const user = users.find(user => user.email === email)

//     const isMatch = await bcrypt.compare(password, user.password)

//     const token = jwt.sign(
//         {email: user.email},
//         "secretke",
//         {expiresIn: "15m"}
//     )

//     res.json({token})
// })

// app.post('/login', async (req , res)=> {
//     const {email, password} = req.body;

//     const user = users.find(user => user.email === email)

//     if(!user) {
//         return res.status(400).send("invalid user")
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if(!isMatch){
//         return res.status(400).send("invalid credentital")
//     }

//     const token = jwt.sign(
//         {email : user.email},
//         "secretkey",
//         {expiresIn : "5m"}
//     )

//     res.json({token})
// })

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

const users = [];

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    email,
    password: hashedPassword,
  });
  res.send("registered successfully");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  const isMatch = await bcrypt.compare(password, user.password);

  const token = jwt.sign({ email: user.email }, "secret", { expiresIn: "2m" });
  res.json({ token });
});

app.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({
    email,
    password: hashedPassword,
  });
  res.send("registered successfully completed");
});


