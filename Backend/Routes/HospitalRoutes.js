const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();


router.post("/register", authController.register);
router.post("/login", authController.login);


router.get("/protected", authController.authenticate, (req, res) => {
  res.status(200).json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
