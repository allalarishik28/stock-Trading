// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema(
//   {
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   holdings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Holdings" }],

//   positions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Positions" }],
//   orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Orders" }],
// }, { timestamps: true }


// );

// const UserModel = mongoose.model("user", UserSchema);
// module.exports = UserModel;


const mongoose = require('mongoose');

const HoldingSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  quantity: { type: Number, required: true },
  avg_buy_price: { type: Number, required: true },
  current_price: { type: Number, required: true }
});

const BalanceSchema = new mongoose.Schema({
  equity: { type: Number, default: 0 },
  // commodity: { type: Number, default: 0 },
  margin_used_equity: { type: Number, default: 0 }
  // margin_used_commodity: { type: Number, default: 0 }
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  balance: BalanceSchema,
  watchlist: [String],
  holdings: [HoldingSchema]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

