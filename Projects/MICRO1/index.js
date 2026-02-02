const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const app = express();
connectDB();

// BASE URL: http://localhost:3000
app.listen(3000, ()=>{
    console.log("Server running on PORT 3000");
})