const mongoose = require('mongoose');

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
      },
    },
  ],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: 'pending' },
});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
