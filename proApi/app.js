const express = require('express')
const app = express()

app.get('/', (req, res) =>{
console.log("micro", "*****")
 res.json({message: 'Hello from pro micro!'})
})
app.listen(4002, () => console.log('Server ready', process.env))