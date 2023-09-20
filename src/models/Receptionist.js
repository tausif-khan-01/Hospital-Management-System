const mongoose = require("mongoose");
const validator = require("validator");

//recepitonist Schema
const recepitonistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: [true, "email must be unique"],
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,

    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("invalid email address");
      }
    },
  },
  emails: {
    type: String,
    required: true,
    unique: [true, "email must be unique"],
  },
  phone: {
    type: Number,
    required: true,
    unique: [true, "phone Number should be unique"],
    validate(val) {
      if (!validator.isMobilePhone(`${val}`)) {
        throw new Error("invalid mobile no.");
      }
    },
  },
});

//recepitonist model
const RecepitonistData = new mongoose.model("Recepitonist", recepitonistSchema);
module.exports = RecepitonistData;
