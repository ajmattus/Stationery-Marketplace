const mongoose = require('mongoose');

// Products
const productsSchema = new mongoose.Schema({
  SKU: Number,
  color: String,
  ink_color: String,
  ink_type: String,
  tip_type: String,
  line_width: String,
  image: String,
  name: String,
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
