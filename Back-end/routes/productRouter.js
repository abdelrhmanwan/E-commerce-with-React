const express = require("express");
const { Product } = require("../models/productModel");
const router = express.Router();

// Get All Products
router.get("", async (request, response) => {
  try {
    const products = await Product.find();
    response.json({ message: "Products List", data: products });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

// Get Single Product
router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id.trim(); // لمسح أي مسافات زايدة
    const product = await Product.findById(id);

    if (!product)
      return response.status(404).json({ message: "Product Not Found!" });

    response.json({ message: "Product Found", data: product });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

// Create Product
router.post("", async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);

    response
      .status(201)
      .json({ message: "Product Created Successfully!", data: newProduct });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

// Update Product
router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id.trim();
    const updated = await Product.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    if (!updated)
      return response.status(404).json({ message: "Product Not Found!" });

    response.json({ message: "Product Updated", data: updated });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete Product
router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id.trim();
    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted)
      return response.status(404).json({ message: "Product Not Found!" });

    response.json({ message: "Product Deleted", data: deleted });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
