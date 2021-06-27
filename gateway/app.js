const express = require('express');
const axios = require("axios");
const app = express();

app.get('/', async (req, res) => {
    let result = { }
    // http://be-api.example.local/

    try{
     result.be = await axios.get("http://be-api.example.local/")
    result.be =  result.be.data
    }catch(error){
        result.be=error.toString() 
    }
    try{
        result.pro = await axios.get("http://backendapi_be-api.be-api.example.local/")
       result.prop =  result.pro.data
       }catch(error){
           result.pro=error.toString() 
       }
    res.json({message: 'From gateway', ...result})
    // backendapi_be-api
})
app.listen(80, () => console.log('Server ready', process.env))