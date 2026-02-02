const mongoose = require("mongoose");

const connectDB = () => {
    try{
        mongoose.connect("mongodb://localhost:27017/DemoDB");
        console.log("DB connection successfull");
    }catch(e){
        console.log("Error in DB connection");
    }
}

module.exports = connectDB;