const mongoose = require('mongoose');

const userSchema = mongoose.schema({
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
})

const user = mongoose.model("user", userSchema);
module.exports = user;