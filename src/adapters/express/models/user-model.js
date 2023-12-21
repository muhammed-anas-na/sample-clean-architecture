// entities/user.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  alt_number: { type: String, required: true },
  registration_date: { type: Date, default: Date.now() },
  password: { type: String, required: true },
  current_location: { type: String },
  is_blocked: { type: Boolean, default: false },
  is_premium: { type: Boolean, default: false },
  address: { type: Array },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
