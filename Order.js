const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userEmail: String,
  items: Array,
  address: String,
  totalAmount: Number
});

module.exports = mongoose.model("Order", orderSchema);
