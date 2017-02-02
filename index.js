var express = require('express')
var opn = require('opn')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)