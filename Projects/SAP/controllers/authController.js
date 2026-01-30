const User = require("../models/User");

const login = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        await User.create({username: username, email: email, password: password});
        res.json({message: "Data inserted succesfully"});
    }catch(e){
        console.log("Error occur while insertion");
    }
}

module.exports = login;