const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Product = require("../models/Product");
const auth = require("../middleware/auth");

// @route   POST /api/reviews
// @desc    Create or update a review
// @access  Private
router.post("/", auth, async (req, res) => {
  const { productId, rating, comment } = req.body;

  try {
    const existingReview = await Review.findOne({ user: req.user.id, product: productId });

    if (existingReview) {
      // Update review if already exists
      existingReview.rating = rating;
      existingReview.comment = comment;
      const updated = await existingReview.save();
      return res.json(updated);
    }

    const review = new Review({
      user: req.user.id,
      product: productId,
      rating,
      comment
    });

    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/reviews/:productId
// @desc    Get all reviews for a product
// @access  Public
router.get("/:productId", async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
