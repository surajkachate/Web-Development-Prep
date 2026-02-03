const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// BASE URL: http://localhost:3000
dotenv.config();
connectDB();
const app = express();

// middleware
app.use(express.json());

// POST Request
// http://localhost:3000/api/auth/register
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})