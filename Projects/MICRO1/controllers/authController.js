const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt)
;        const user = await User.create({name, email, password: hashedpassword});
        res.json({message: "Data inserted successfully", data: user});
    }catch(e){
        res.json({message: "Error in DB insertion", err: e});
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    
    try{
        const user = await User.findOne({email});
        console.log("user", user);
        if(!user){
            res.json({message: "Invalid Credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            res.json({message: "Invalid Credentials"});
        }
        res.json({message: "Login Successfull", data: user});
    }catch(e){
        res.json({message: "Error in Data Fetching"})
    }
}

module.exports = {register, login};