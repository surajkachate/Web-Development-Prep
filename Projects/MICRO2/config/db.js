const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connection successfull");
    }catch(e){
        console.log("Error in DB connection");
    }
}

module.exports = connectDB;