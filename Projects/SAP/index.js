const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes');

//Base URL: http://localhost:3000

dotenv.config();
const app = express();
connectDB();

//middleware
app.use(express.json());

// POST request 
// http://localhost:3000/api/login
app.use("/api", authRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on PORT ${process.env.PORT}`);
})