const express = require('express');
const mongoose = require(`mongoose`);
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/DemoDB')
.then(()=>console.log("DB connection successfull"))
.catch(()=>console.log("Error connecting to DB"));

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String
})

const User = mongoose.model('user', userSchema);

// post api
app.post('/users', async (req, res) => {
    const user = req.body;
    await User.create(user);
    res.json({"message":"Data Saved Successfully", "user": user});
})

// fetch api 
app.get('/users', async (req, res) => {
    const user = await User.find();
    res.json(user);
})

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})