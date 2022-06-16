const mongoose = require("mongoose");

const blueSchema = mongoose.Schema({
  category: String,
  quantity: Number,
  sizes: String,
  Trending: String,
  brand: String,
  price: Number,
  color1: String,
  color2: String,
  title: String,
  condition: String,
  images1: {
    main: String,
    top: String,
    side: String,
    bottom: String,
  },
  images2: {
    main: String,
    top: String,
    side: String,
    bottom: String,
  },
});

const bluesky = mongoose.model("blue", blueSchema);

module.exports = bluesky;
