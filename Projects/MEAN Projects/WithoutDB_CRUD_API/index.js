const express = require('express');
const app = express();
PORT = 3000;

let users = [
    {id: 1, name: "jayanta"},
    {id: 2, name: "rushi"},
]

app.get('/users', (req, res) => {
    res.status(200).json(users);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u=> u.id == id);
    if(!user){
        res.status(400).json({message: "User not found!"});
    }
    // console.log(req);
    res.status(200).json(user);
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})