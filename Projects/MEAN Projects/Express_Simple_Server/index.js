
const express = require('express');
const app = express();
const PORT = 3004;

app.get('/api', (req, res) => {
    res.json("Hello Server");
})

app.listen( PORT, () => {
    console.log(`App listening on port ${PORT}`);
})