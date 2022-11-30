const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect("mongodb://127.0.0.1:27017/mytodoapp").then(()=>{
    console.log('connnected to mongodb')
}).catch((error)=>{
    console.log(error)
})

app.listen(3000,()=>{
    console.log('server is up')
})