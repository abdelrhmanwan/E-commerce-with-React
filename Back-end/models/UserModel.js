const mongoose = require("mongoose");
// Schema => SHAPE

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: {
    type: String,
    required: true,
    minLength: 6 
  },
  name: { 
    type: String, 
    required: true 
  },
  role: {
    type: String,
    enum: ["user", "admin", "super_admin", "guest"],
    default: "user",
  }, // Role: User - Admin - SuperAdmin - Guest
  isActive: { type: Boolean, default: true },
});

// Model => CRUD => Name | Schema

const User = mongoose.model("User", userSchema);

module.exports = { User };
