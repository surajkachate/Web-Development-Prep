const User = require("../models/User");

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const user = await User.create({name, email, password});
        res.json({message: "Data inserted successfully", data: user});
    }catch(e){
        res.json({message: "Error in data insertion"})
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
        if(password != user.password){
            res.json({message: "Invalid Credentials"});
        }
        res.json({message: "Login Successfull"});
    }catch(e){
        res.json({message: "Error in Login"});
    }
}

module.exports = {register, login}