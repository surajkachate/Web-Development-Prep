const express = require('express');
const app = express();

app.get("/users", (req, res)=>{
    res.json({message: "Welcome to my server"});
})

app.get("/users/:id", (req, res)=>{
    const id = req.params.id;
    res.json({message:"Data found", data: id});
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})