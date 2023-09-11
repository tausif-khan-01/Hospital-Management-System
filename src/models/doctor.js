const mongoose = require("mongoose");
const validator = require("validator");

//doctor schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    validate(val) {
      let regexPattern = /^[a-zA-Z0-9]+$/;

      if (!regexPattern.test(val)) {
        alert("Enter a Valid UserName");
        throw new Error("invalid username");
      }
    },
  },
  password:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("invalid email address");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    validate(val) {
      if (!validator.isMobilePhone(`${val}`)) {
        throw new Error("invalid mobile no.");
      }
    },
  },
});

//doctor model
const doctorData = new mongoose.model("Doctor", doctorSchema);
module.exports = doctorData;
