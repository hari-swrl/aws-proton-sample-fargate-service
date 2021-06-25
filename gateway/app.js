const express = require('express');
const axios = require("axios");
const app = express();

app.get('/', async (req, res) => {
    let result = { }
    // http://be-api.example.local/
    try{
    result.try1 = await axios.get("http://be-api.example.local:80/")
    result.try1 =  result.try1.data
    }catch(error){
        result.try1=error.toString() 
    }
    try{
    result.try2 = await axios.get("http://be-api.example.local:3000/")
    result.try2 =  result.try2.data
    }catch(error){
        result.try1=error.toString() 
    }
    try{
     result.try3 = await axios.get("http://be-api.example.local/")
    result.try3 =  result.try3.data
    }catch(error){
        result.try1=error.toString() 
    }
    res.json({message: 'From gateway', ...result})
})
app.listen(80, () => console.log('Server ready'))