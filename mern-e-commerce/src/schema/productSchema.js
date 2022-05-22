const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: [String],
  },
  size: {
    type: [String],
  },
  category: {
    type: [String],
    required: true,
  },
  quantity: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
