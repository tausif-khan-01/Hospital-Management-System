const mongoose = require("mongoose");
const validator = require("validator");

//patient schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  phone:{
    type:Number,
    required:true,
    unique:true,
    validate(val) {
        if (!validator.isMobilePhone(`${val}`)) {
          throw new Error("invalid mobile no.");
        }
      },
  },
  address:{
    type:String,
    required:true,
  },
});

//patient model
const PatientData = new mongoose.model("Patient",patientSchema)
module.exports = PatientData;

