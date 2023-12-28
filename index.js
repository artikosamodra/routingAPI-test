const express = require("express");
const app = express();
const port = 3000;

//routes / url / endpoint GET METHOD
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Yourname ******");
});

app.listen(port, () => {
  console.log(`Port : ${port}`);
});
