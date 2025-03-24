const express = require("express");
const {
  checkAdmin,
  addProduct,
  updateProduct,
} = require("../controllers/AdminControllers");
const { authenticateToken } = require("../../auth/controllers/AuthControllers");

const router = express.Router();

router.post("/admin/products/add", authenticateToken, checkAdmin, addProduct);
router.patch(
  "/admin/products/update",
  authenticateToken,
  checkAdmin,
  updateProduct
);

module.exports = router;
