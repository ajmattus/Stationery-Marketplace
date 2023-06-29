const mongoose = require('mongoose');


// Users
const usersSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email_address: String,
  password: String,
});

// Products
const productsSchema = new mongoose.Schema({
  SKU: Number,
  color: String,
  ink_color: String,
  ink_type: String,
  tip_type: String,
  line_width: String,
})

// Orders
const ordersSchema = new mongoose.Schema({
  order_number: Number,
  shipping_method: String,
  subtotal: Number,
  tax: Number,
  total: Number,
})

const Users = mongoose.model('Users', usersSchema)
const Products = mongoose.model('Products', productsSchema);
const Orders = mongoose.model('Orders', ordersSchema)

module.exports = { Users, Products, Orders }
