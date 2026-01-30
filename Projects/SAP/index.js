const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

dotenv.config();
const app = express();
connectDB();

//middleware
app.use(express.json());

//Base URL: http://localhost:3000

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on PORT ${process.env.PORT}`);
})