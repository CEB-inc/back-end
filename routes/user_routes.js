const express = require("express");
const router = express.Router();
const UserModel = require("../db/user_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { protect } = require('../middleware/authMiddleware')

//Register new user with a POST request
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    // Checks if user exists
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User alread exists");
    }

    // Encrypts password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  })
);

//Authenticate new user with a POST request (LOGIN)
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //check for user email
    const user = await UserModel.findOne({ email })
    
    // compares password with encrypted password from the user
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }

  })
);

//Get new users data with a Get request
router.get(
  "/me", protect,
  asyncHandler(async (req, res) => {
    const { _id, name, email } = await UserModel.findById(req.user.id)
    
    res.status(200).json({
      id: _id,
      name,
      email,
    })
  })
);

// Generate JWT and set expiry to 30 days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = router;
