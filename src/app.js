const express = require('express')
const app = express()
const Router = require('./router/router')
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1',Router)

module.exports = app;