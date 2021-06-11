const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (res, req) => {
  res.send();
});

module.exports = app;