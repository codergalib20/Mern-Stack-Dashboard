const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const authSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

authSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;

    return next();
  } catch (error) {
    return next(error);
  }
});
// CREATE USER Schema Or Model.
const User = new mongoose.model("User", authSchema);
module.exports = User;
