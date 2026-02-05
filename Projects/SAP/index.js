const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const AuthRoutes = require("./routes/authRoutes");
const verifyToken = require("./middleware/verifyToken");

//Base URL: http://localhost:3000

dotenv.config();
connectDB();
const app = express();

//middleware
app.use(express.json());

// POST request 
// http://localhost:3000/api/register
app.use("/api/auth", AuthRoutes);

// Protected route example
// GET http://localhost:3000/api/protected
app.get("/api/protected", verifyToken, (req, res) => {
    res.json({ message: "Protected data", user: req.user });
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on PORT ${process.env.PORT}`);
})
