const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({
  id: String,
  title: String,
  quantity: Number,
  price: Number,
  status: String,
});

const Purch = mongoose.model("purchase", purchaseSchema);

module.exports = Purch;
