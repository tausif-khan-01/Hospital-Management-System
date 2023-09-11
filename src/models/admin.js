
const mongoose = require("mongoose");
const validator = require("validator");

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
        },
    password: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    }
});

const AdminData = mongoose.model("Admin", adminSchema);
module.exports = AdminData;


