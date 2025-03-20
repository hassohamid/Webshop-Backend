require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const authRoutes = require("./src/auth/routes/AuthRoutes");
const productRoutes = require("./src/products/routes/ProductRoutes");
const adminRoutes = require("./src/admin/routes/AdminRoutes");
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Success" });
});
app.get("/home", (req, res) => {
  const { username } = req.query;
  res.json({ message: username });
});

app.use(authRoutes);
app.use(productRoutes);
app.use(adminRoutes);

app.listen(3000);

module.exports = app;
