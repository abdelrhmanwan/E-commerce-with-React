const express = require("express");
const { User } = require("../models/UserModel");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { roleMiddleware } = require("../middlewares/roleMiddleware");

const router = express.Router();

// Read All
router.get("", async function (request, response) {
  try {
    const users = await User.find();
    response.status(200).json({ message: "Users List", data: users });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});
// Read Single
router.get("/:id", async function (request, response) {
  try {
    const userId = request.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return response.status(404).json({ message: "User Not Found!" });
    }

    response.json({ message: "User Found Successfully!", data: user });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});
// Create
router.post("", authMiddleware, async function (request, response) {
  try {
    const email = request.body.email;

    const existing_user = await User.findOne({ email });

    if (existing_user) {
      return response
        .status(409)
        .json({ message: "Email Already Exist, Try Another." });
    }

    const newUser = await User.create(request.body);

    response
      .status(201)
      .json({ message: "User Created Successfully!", data: newUser });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});
// Update
router.patch("/:id", authMiddleware, async function (request, response) {
  try {
    const id = request.params.id;
    const data = request.body;

    const user = await User.findByIdAndUpdate(id, data, { new: true });
    if (!user) {
      return response.status(404).json({ message: "User Not Found!" });
    }

    response.json({ message: "User Updated.", data: user });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete
// Access Route Super_Admin Admin
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("super_admin", "admin"),
  async function (request, response) {
    try {
      const id = request.params.id;

      const user = await User.findByIdAndDelete(id);

      if (!user) {
        return response.status(404).json({ message: "User Not Found!" });
      }

      response.json({ message: "User Deleted.", data: user });
    } catch (error) {
      console.log(error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// User.find({ email: "amit@learning.com" }); // Get ALL Resource []
// User.findOne({ email: "amit@learning.com" }); // Get Single Resource null
// User.findById(id) // Get Single Resource null

// User.create(data) // Create Resource => Data ? Body parsing string => object
// Middleware function: Req, Res, Next

// User.findByIdAndUpdate(id, data)
// User.findByIdAndDelete(id)
module.exports = router;
