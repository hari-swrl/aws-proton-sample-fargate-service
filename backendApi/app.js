const express = require('express')
const app = express()

app.get('/', (req, res) =>{
console.log("micro", "*****")
 res.json({message: 'Hello from micro!'})
})
app.listen(80, () => console.log('Server ready'))