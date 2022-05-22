const mongoose = require("mongoose");

const offerpriceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  offerPrice: {
    type: String,
    required: true,
  },
  offerTime: {
    type: Date,
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

module.exports = offerpriceSchema;
