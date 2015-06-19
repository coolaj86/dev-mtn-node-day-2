'use strict';

var http = require('http');
var https = require('https');

var server = http.createServer();
var secureServer = https.createServer(require('localhost.daplie.com-certificates'));

var port = process.argv[2] || 3000;
var app = require('./app');

server.on('request', app());

server.listen(port, function () {
  console.log("I'm ready!");
});

secureServer.on('request', app());
// 443
secureServer.listen('8443', function () {
  console.log('secure and ready');
});
