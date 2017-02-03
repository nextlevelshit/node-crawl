var express = require('express')
var opn = require('opn')
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http)

var SERVER_DOMAIN = 'localhost'
var SERVER_PORT = 3000
var DIST_DIR = `${__dirname}/dist`

app.get('/', function (req, res) {
  res.sendFile(`${DIST_DIR}/index.html`)
})

io.on('connection', function(socket){
  var THIS_CONSOLE_PREFIX = `[SOCKET.IO]\t`;
  
  console.log(`${THIS_CONSOLE_PREFIX} connection started`);
  socket.on('button', function(param1, param2){
    console.log(`${THIS_CONSOLE_PREFIX} button pressed: ${param1}, ${param2}`);
  });
});

http.listen(SERVER_PORT, function(){
  var THIS_CONSOLE_PREFIX = `[HTTP]\t\t`;
  
  console.log(`${THIS_CONSOLE_PREFIX} started web interface on http://${SERVER_DOMAIN}:${SERVER_PORT}`);
  // open browser with web interface
  console.log(`${THIS_CONSOLE_PREFIX} starting browser ...`)
  opn(`http://${SERVER_DOMAIN}:${SERVER_PORT}`)
});