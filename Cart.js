const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userEmail: String,
  items: [
    {
      productId: String,
      title: String,
      price: Number,
      quantity: Number
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema);
