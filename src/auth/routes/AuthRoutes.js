const express = require("express");
const {
  register,
  signIn,
  signOut,
  verifyToken,
} = require("../controllers/AuthControllers");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/signin", signIn);
router.post("/auth/signout", signOut);
router.get("/auth/verify", verifyToken);

module.exports = router;
