const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Product = require("../models/Product");
const Transaction = require("../models/Transaction");
const User = require("../models/User");

// @route   POST /api/transactions
// @desc    Complete a transaction (buy a product)
// @access  Private
router.post("/", auth, async (req, res) => {
  const { productId, sepUsed = 0 } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product || product.isSold) {
      return res.status(400).json({ message: "Product not available" });
    }

    if (product.seller.toString() === req.user.id) {
      return res.status(400).json({ message: "You can't buy your own product" });
    }

    const buyer = await User.findById(req.user.id);
    const seller = await User.findById(product.seller);

    const finalPrice = product.price;
    const sepToUse = Math.min(sepUsed, buyer.sep || 0);
    const cashToPay = finalPrice - sepToUse;
    const sepToEarn = Math.floor(finalPrice / 10); // Example: 1 SEP per 10 currency units

    // Create transaction
    const transaction = new Transaction({
      buyer: buyer._id,
      seller: seller._id,
      product: product._id,
      price: finalPrice,
      sepUsed: sepToUse,
      sepEarned: sepToEarn
    });

    // Update product as sold
    product.isSold = true;
    await product.save();

    // Update users' SEP
    buyer.sep = (buyer.sep || 0) - sepToUse;
    seller.sep = (seller.sep || 0) + sepToEarn;

    await buyer.save();
    await seller.save();
    const savedTransaction = await transaction.save();

    res.status(201).json(savedTransaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Transaction failed" });
  }
});
