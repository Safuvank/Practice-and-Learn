const express = require("express");
const app = express();

app.get("/:id",(req,res)=>{
  console.log(req.params)
  res.send(req.params.id)
})

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(3000);
