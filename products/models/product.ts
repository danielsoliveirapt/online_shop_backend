const mongoose1 = require("mongoose");

const ProductSchema = new mongoose1.Schema({
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose1.model("Product", ProductSchema);

module.exports = Product;
