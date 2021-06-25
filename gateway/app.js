const express = require('express');
const axios = require("axios");
const app = express();

app.get('/', async (req, res) => {
    let result = { }
    // http://be-api.example.local/
    try{
    result.try2 = await axios.get("http://be-api.example.local:3000/")
    result.try2 =  result.try2.data
    }catch(error){
        result.try2=error.toString() 
    }
    try{
     result.try3 = await axios.get("http://be-api.example.local/")
    result.try3 =  result.try3.data
    }catch(error){
        result.try3=error.toString() 
    }
    try{
        result.try4 = await axios.get("http://backendapi_be-api.be-api.example.local/")
       result.try4 =  result.try4.data
       }catch(error){
           result.try4=error.toString() 
       }
       try{
        result.try5 = await axios.get("http://backendapi_be-api.example.local/")
       result.try5 =  result.try5.data
       }catch(error){
           result.try5=error.toString() 
       }
       console.log(process.env)
    res.json({message: 'From gateway', ...result})

    // backendapi_be-api
})
app.listen(80, () => console.log('Server ready', process.env))