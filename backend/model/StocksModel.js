// const { model } = require("mongoose");

// const { StockssSchema } = require("../schemas/HoldingsSchema");

// const HoldingsModel = new model("holding", HoldingsSchema);

// module.exports = { HoldingsModel };

const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  company_name: { type: String, required: true },
  sector: { type: String },
  price: { type: Number, required: true },
  change: { type: Number },
  percent_change: { type: Number },
  volume: { type: Number },
  market_cap: { type: Number }
});

const StocksModel = mongoose.model('Stock', StockSchema); // ✅ Model name should be singular, Mongoose will create 'orders' collection

module.exports = { StocksModel };