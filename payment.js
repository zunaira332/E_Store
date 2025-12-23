const express = require("express");
const Stripe = require("stripe");
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET);

router.post("/pay", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount * 100,
    currency: "usd"
  });

  res.json({ clientSecret: paymentIntent.client_secret });
});

module.exports = router;
