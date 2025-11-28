const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/e-commerce_swd2_s5");
    console.log("DATABASE CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectToMongoDB };
