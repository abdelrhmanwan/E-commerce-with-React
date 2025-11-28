const express = require("express");
const { User } = require("../models/UserModel");
const bcrypt = require("bcrypt"); // لتشفير الباسورد
const jwt = require("jsonwebtoken"); // لانشاء التوكن
const router = express.Router();

// login
router.post("/login", async function (request, response) {
  try {
    // const {email, password} = request.body
    // email & password
    const email = request.body.email;
    const password = request.body.password;
    // find email
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(400).json({ message: "Invalid Credentials." });
    }
    // compare password vs hashedPassword
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return response.status(400).json({ message: "Invalid Credentials." });
    }
    // token
    const token = jwt.sign({ id: user._id, role: user.role }, "secret_123", {
      expiresIn: "7d",
    }); // generate new token
    response.json({ message: "User Login Successfully.", data: token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error." });
  }
});
// register
router.post("/register", async function (request, response) {
  try {
    // Data
    const data = request.body;
    // User Email
    const email = data.email;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response.status(409).json({ message: "User Already Exist." });
    }
    // Hash Password
    data.password = await bcrypt.hash(data.password, 12);
    // Save
    const user = await User.create(data);
    // Token
    // token => _id & role
    const token = jwt.sign({ id: user._id, role: user.role }, "secret_123", {
      expiresIn: "7d",
    }); // generate new token

    response
      .status(201)
      .json({ message: "User Created Successfully!", data: token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error." });
  }
});

module.exports = router;
