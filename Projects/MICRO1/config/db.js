const mongoose = require("mongoose");

const connectDB = () => {
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connection Successful");
    }catch(e){
        console.log("Error in DB Connection");
    }
}

module.exports = connectDB;