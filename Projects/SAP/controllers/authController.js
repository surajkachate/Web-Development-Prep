const User = require("../models/User");

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try{
        console.log({username, email, password});
        await User.create({
            username, 
            email, 
            password
        });
        res.json({message: "Data inserted succesfully"});
    }catch(e){
        console.log("Error occur while insertion");
    }
}

module.exports = {register};