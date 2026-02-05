const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try{
        console.log({username, email, password});
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.create({
            username, 
            email, 
            password: hashedPassword
        });
        res.json({message: "Data inserted succesfully"});
    }catch(e){
        console.log("Error occur while insertion");
        res.json({message: "Data inserted succesfully"});
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message: "Invalid Credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message: "Invalid Credentials"});
        }

        if(!process.env.JWT_SECRET){
            return res.status(500).json({message: "JWT secret not configured"});
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "User login successfully",
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });
    }catch(e){
        console.log("Issue while login")
    }
}

// module.exports = {register, login};
