const mongoose = require("mongoose");

const userSchema = new mongoose.Schemaa({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

const user = mongoose.model("user", userSchema);
module.exports = user;