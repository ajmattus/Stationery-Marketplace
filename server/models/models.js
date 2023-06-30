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
})

// Orders
const ordersSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }
  ],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: {type: String, default: "pending"},
})

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }
  ]
})

const Products = mongoose.model('Products', productsSchema);
const Orders = mongoose.model('Orders', ordersSchema)
const Cart = mongoose.model('Cart', cartSchema)

module.exports = { Products, Orders, Cart }
