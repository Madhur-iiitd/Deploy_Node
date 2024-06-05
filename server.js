const express = require('express')
require('dotenv').config()
const app = express()
const my_port = process.env.PORT

app.get(
    '/', (req,res)=>{
        res.send('Hello World!')
    }
)

app.listen(my_port, ()=>{
    console.log(`Server is running on port ${my_port}`)
})
