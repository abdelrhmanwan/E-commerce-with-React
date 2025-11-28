const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
 },
  price: { 
    type: Number, 
    required: true 
 },
  description: { 
    type: String 
 },
  image: {
    type: String 
 },
  category: { 
    type: String 
 },
  inStock: { 
    type: Boolean, 
    default: true 
},
  },
 {
  timestamps: true
 });

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
