const express = require("express");
const Cart = require("../models/Cart");
const router = express.Router();

router.post("/add", async (req, res) => {
  const { userEmail, product } = req.body;
  let cart = await Cart.findOne({ userEmail });

  if (!cart) cart = new Cart({ userEmail, items: [] });

  const index = cart.items.findIndex(i => i.productId === product.productId);

  if (index >= 0) cart.items[index].quantity += 1;
  else cart.items.push({ ...product, quantity: 1 });

  await cart.save();
  res.json(cart);
});

router.get("/:email", async (req, res) => {
  const cart = await Cart.findOne({ userEmail: req.params.email });
  res.json(cart);
});

module.exports = router;
