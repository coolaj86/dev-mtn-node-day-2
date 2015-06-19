'use strict';

var http = require('http');
var server = http.createServer();
var port = process.argv[2] || 3000;
var app = require('./app');

server.on('request', app);

server.listen(port, function () {
  console.log("I'm ready!");
});
