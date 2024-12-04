const express = require("express");
const User = require("../models/User"); // User 모델 가져오기
const router = express.Router();

// 모든 사용자 가져오기
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// 새로운 사용자 추가
router.post("/", async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = await User.create({ username, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "Failed to create user" });
  }
});

module.exports = router;
