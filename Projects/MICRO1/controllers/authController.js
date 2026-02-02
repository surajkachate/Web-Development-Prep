const User = require("../models/User");

const register = () => {
    const {name, email, password} = req.body;
    try{
        User.create({name, email, password});
        res.json({message: "Data inserted sucessfully"});
    }catch(e){
        res.json({message: "Error in execution"});
    }
}

module.exports = {register};