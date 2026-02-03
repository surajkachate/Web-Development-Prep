const User = require("../models/User");

const register = async () => {
    const { name, email, password } = req.body;
    try{
        const user = await User.create({name, email, password});
        res.json({message: "Data inserted successfully", data: user});
    }catch(e){
        res.json({message: "Error in DB insertion"});
    }
}

module.exports = {register};