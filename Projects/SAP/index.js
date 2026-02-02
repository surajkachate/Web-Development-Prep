const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const AuthRoutes = require("./routes/authRoutes");

//Base URL: http://localhost:3000

dotenv.config();
connectDB();
const app = express();

//middleware
app.use(express.json());

// POST request 
// http://localhost:3000/api/register
app.use("/api", AuthRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on PORT ${process.env.PORT}`);
})