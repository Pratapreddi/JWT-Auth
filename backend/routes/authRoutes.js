const express = require("express");
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to dashboard" });
});

module.exports = router;