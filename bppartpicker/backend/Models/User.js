const mongoose = require("mongoose");
const crypto = require("crypto");
//const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);


module.exports = mongoose.model("User", userSchema);
