const express = require('express');
const foodList = require('./mocks/foods.js');

const app = express();
const port =  process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Process up con ${port}`);
})

app.get('/', (req, res) => {
    try{
        res.send('Foodlist');
    } catch(e){
        res.status(400).send(e)
    } 
})

app.get('/foods',(req, res)=>{
    try{
        res.send(foodList.foods);
    } catch (e) {
        res.status(400).send(e)
    }
})