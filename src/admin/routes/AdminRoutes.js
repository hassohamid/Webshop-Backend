const express = require("express");
const {
  addProduct,
  updateProduct,
} = require("../controllers/AdminControllers");
const { authenticateToken } = require("../../auth/controllers/AuthControllers");

const router = express.Router();

router.post("/admin/products/add", authenticateToken, addProduct);
router.patch("/admin/products/update", authenticateToken, updateProduct);

module.exports = router;
