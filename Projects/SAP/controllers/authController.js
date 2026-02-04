const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
        if(!user || (password != user.password)){
            res.json({message: "Invalid Credentials"});
        }
        res.json({message: "User login successfully", data: user});
    }catch(e){
        console.log("Issue while login")
    }
}

// module.exports = {register, login};