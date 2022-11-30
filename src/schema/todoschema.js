
const mongoose = require('mongoose')

const todo = new mongoose.Schema({
    id:Number,
    title:String,
    status:Boolean
})

const Todo = mongoose.model("Todo",todo)

module.exports = Todo;