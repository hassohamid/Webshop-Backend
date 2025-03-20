const express = require("express");
const { getProducts, getCategories } = require("../controllers/Products");

const router = express.Router();

router.get("/products", getProducts);
router.get("/categories", getCategories);

module.exports = router;
