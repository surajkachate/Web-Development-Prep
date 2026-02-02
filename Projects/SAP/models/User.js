const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passworrd: {
        type: String,
        required: true
    }
});

const user = mongoose.model("Users", userSchema);
module.exports = user;