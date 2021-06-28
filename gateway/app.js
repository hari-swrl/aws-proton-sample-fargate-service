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
        result.try2 = await axios.get("http://pro-api.example.local:4002/")
        result.try2 =  result.try2.data
       }catch(error){
           result.try2=error.toString() 
       }
    res.json({message: 'From gateway', beResult: result.be, proResult: result.try2})
    // backendapi_be-api
})
app.listen(80, () => console.log('Server ready', process.env))