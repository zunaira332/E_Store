const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json("Signup successful");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) res.json("Login successful");
  else res.status(401).json("Invalid credentials");
});

module.exports = router;
