'use strict';

var http = require('http');
var server = http.createServer();
var port = process.argv[2] || 3000;

server.on('request', function (request, response) {
  response.end('hello');
});

server.listen(port, function () {
  console.log("I'm ready!");
});
