const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const auth = require("../middleware/auth"); // to protect routes

// @route   POST /api/products
// @desc    Create a new product
// @access  Private
router.post("/", auth, async (req, res) => {
  const { title, description, category, price, imageUrl } = req.body;
  try {
    const product = new Product({
      title,
      description,
      category,
      price,
      imageUrl,
      seller: req.user.id,
    });
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/upload
// @desc    Upload product image locally
// @access  Private
router.post("/", auth, upload.single("image"), (req, res) => {
  res.status(200).json({
    imageUrl: `/uploads/${req.file.filename}`
  });
});

// @route   GET /api/products
// @desc    Get all available (not sold) products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ isSold: false }).populate("seller", "name email");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/products/:id
// @desc    Get a single product
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("seller", "name email");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   DELETE /api/products/:id
// @desc    Delete a product (by owner)
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.seller.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized to delete this product" });

    await product.remove();
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   PUT /api/products/:id
// @desc    Update a product listing (only by seller)
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { title, description, category, price, imageUrl } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    if (product.seller.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized to update this product" });

    // Update fields
    product.title = title || product.title;
    product.description = description || product.description;
    product.category = category || product.category;
    product.price = price || product.price;
    product.imageUrl = imageUrl || product.imageUrl;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
