const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();

const users = [
  {
    id: 1,
    name: "safuvan",
    role: "admin",
  },
  {
    id: 2,
    name: "suhail",
    role: "customer",
  },
];

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    email,
    password: hashedPassword,
  });

  res.send("user registered");
});

app.listen(3000, () => {
  console.log("Server is running");
});
