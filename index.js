const express = require('express');
const app = express();
const log = console.log;

app.use(express.json());
// app.use(express.urlencoded());

app.get('/bfhl', (req, res) => {
    const data = {operation_code:1};
    res.status(200).json(data);
})

app.post('/bfhl', (req, res) => {

    const data = req.body.data;
    const nums = [];
    const alphas = [];
    
    data.forEach((element) => {
        if (!isNaN(element)) nums.push(element);
        else alphas.push(element);
    });
    
    const bigAlpha = alphas;
    bigAlpha.sort().reverse();

    const response = {
        "is_success": true,
        "user_id": "deepak_gupta_11092002", 
        "email" : "dg6723@srmist.edu.in",
        "roll_number": "RA2011030030029",
        "numbers": nums,
        "alphabets": alphas,
        "highest_alphabet": bigAlpha.length > 0 ? [bigAlpha[0]] : []
    };

    res.send(response);
})


app.listen("3002", ()=>{
    log('server running on port: 3002');
})
