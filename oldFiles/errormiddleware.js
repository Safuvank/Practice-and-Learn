const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Something went wrong");
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("Server Error");
  next();
});

app.listen(3000, () => {
  console.log("server is runnign on 3000 port");
});
