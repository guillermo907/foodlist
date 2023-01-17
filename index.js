const express = require('express');
var path = require('path');
const foodList = require('./mocks/foods.js');

const app = express();
const port =  process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Process up on: ${port}`);
})

app.use(express.static(__dirname + '/client/dist/'));

app.get('/foods',(req, res)=>{
    try{
        res.send(foodList.foods);
    } catch (e) {
        res.status(400).send(e)
    }
})