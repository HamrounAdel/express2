const express = require('express')
const app = express()
const port =4000

const userRoute=require('./route/user')

app.use(express.json())

app.use('/users',userRoute)

app.listen(port,err=>{
    err?console.log(err):console.log(`the running, port=${port}`)})