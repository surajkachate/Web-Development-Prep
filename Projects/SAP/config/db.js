const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connection Successfull");
    }catch(e){
        console.log("DB Connection Error");
    }
}

module.exports = connectDB;