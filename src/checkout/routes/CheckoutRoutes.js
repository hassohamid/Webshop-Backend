const express = require("express");
const { getCartItems } = require("../controllers/CheckoutControllers");

const router = express.Router();

router.get("/checkout/get-items", getCartItems);

module.exports = router;
