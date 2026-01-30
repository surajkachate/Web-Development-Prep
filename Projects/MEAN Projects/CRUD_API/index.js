const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/user', (req, res)=>{
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.city);
    res.json("GET request hit successfully");
})

app.listen(PORT, ()=>{
    console.log(`Server started successfully on PORT ${PORT}`)
})