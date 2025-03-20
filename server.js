const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Success" });
});
app.get("/home", (req, res) => {
  const { username } = req.query;
  res.json({ message: username });
});
const port = 3000;

module.exports = app;
