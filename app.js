const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (res, req) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

module.exports = app;
