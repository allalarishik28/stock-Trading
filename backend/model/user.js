const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  holdings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Holdings" }],
  positions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Positions" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Orders" }],
}, { timestamps: true });

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
