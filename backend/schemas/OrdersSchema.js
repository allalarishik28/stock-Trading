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

module.exports = mongoose.model('Order', OrderSchema);





// const { Schema, model } = require("mongoose");

// const OrdersSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Link order to user
//   name: { type: String, required: true },
//   qty: { type: Number, required: true },
//   price: { type: Number, required: true },
//   mode: { type: String, enum: ["BUY", "SELL"], required: true }, // Ensure mode is either BUY or SELL
//   createdAt: { type: Date, default: Date.now }, // Timestamp
// }


// );

// module.exports = { OrdersSchema };




// const { Schema } = require("mongoose");

// const OrdersSchema = new Schema({
//   name: String,
//   qty: Number,
//   price: Number,
//   mode: String,
// });

// module.exports = { OrdersSchema };