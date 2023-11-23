const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Node API app is running  port 3000");
});

app.get("/", (req, res) => {
  res.send("hello node");
});
