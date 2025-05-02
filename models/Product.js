const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ["stationery", "notes", "hostel", "other"], required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String }, // optional: could later support multiple images
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  isSold: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
