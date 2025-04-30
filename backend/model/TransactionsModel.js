const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['DEPOSIT', 'WITHDRAWAL'], required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});



const TransactionsModel = mongoose.model('Transaction', TransactionSchema); // ✅ Model name should be singular, Mongoose will create 'orders' collection

module.exports = { TransactionsModel };




// const { model } = require("mongoose");

// const { PositionsSchema } = require("../schemas/PositionsSchema");

// const PositionsModel = new model("position", PositionsSchema);

// module.exports = { PositionsModel };