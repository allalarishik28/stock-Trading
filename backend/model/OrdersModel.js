const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  symbol: { type: String, required: true },
  type: { type: String, enum: ['BUY', 'SELL'], required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, enum: ['PENDING', 'COMPLETED', 'CANCELLED'], default: 'PENDING' },
  timestamp: { type: Date, default: Date.now }
});

const OrdersModel = mongoose.model('Order', OrderSchema); // ✅ Model name should be singular, Mongoose will create 'orders' collection

module.exports = { OrdersModel };




// const { model } = require("mongoose");
// const { OrdersSchema } = require("../schemas/OrdersSchema");

// const OrdersModel = model("Order", OrdersSchema); // Fix `new model(...)` issue

// module.exports = { OrdersModel };



// const { model } = require("mongoose");

// const { OrdersSchema } = require("../schemas/OrdersSchema");

// const OrdersModel = new model("order", OrdersSchema);

// module.exports = { OrdersModel };