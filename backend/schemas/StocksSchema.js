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

module.exports = mongoose.model('Stock', StockSchema);
