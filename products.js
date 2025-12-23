const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');

// 1️⃣ Image storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// 2️⃣ Add product route
router.post('/add', upload.single('image'), async (req, res) => {
  const { title, description, price } = req.body;
  const product = new Product({
    title,
    description,
    price,
    image: '/uploads/' + req.file.filename
  });
  await product.save();
  res.json({ message: 'Product added successfully' });
});

module.exports = router;
